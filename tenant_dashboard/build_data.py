# -*- coding: utf-8 -*-
"""
テナント誘致ダッシュボード用データ生成スクリプト。

岡崎市（BODIK）のオープンデータから
  - QURUWA地区の人流データ（康生通りのカメラ）
  - 食品等営業許可・届出一覧（周辺店舗）
を取得・集計し、住所は国土地理院ジオコーダで座標化して、
site/js/data.js（ブラウザがそのまま読める JS）と data/*.json を書き出す。

取得できないデータ（商圏人口・賃料相場など）はダミー値を入れ、
画面側で「ダミー」と明記する。

使い方:
    python build_data.py                # 公開されている全期間で集計（既定）
    python build_data.py --months 24    # 直近24か月のみ
    python build_data.py --months 6     # 直近6か月（速い）
"""

import argparse
import io
import json
import math
import re
import time
from datetime import datetime, timezone, timedelta
from pathlib import Path
from urllib.parse import urljoin

import pandas as pd
import requests

ORG = "232025"  # 岡崎市
BASE = Path(__file__).parent
DATA_DIR = BASE / "data"
JS_DIR = BASE / "site" / "js"

# 対象物件: 岡崎市康生通東一丁目16（国土地理院ジオコーダで確定した座標）
BUILDING = {
    "address": "愛知県岡崎市康生通東一丁目16番地",
    "lat": 34.958324,
    "lon": 137.164444,
}

# 「物件が面する通り」= 康生通り。カメラグループ「康生通り」（カメラID 0-3）を使う。
TARGET_CAMERA_GROUP = "康生通り"

# 人流データの利用開始月（2020年分は欠損補間が多く実測として不適切なため除外）
PEOPLEFLOW_MIN_YM = "202101"

STORE_RADIUS_M = 400  # 周辺店舗として集計する半径

# 集計対象にする周辺の町名（ジオコーダ呼び出し数を絞るための一次フィルタ）
NEARBY_TOWN_KEYWORDS = [
    "康生", "連尺", "籠田", "伝馬", "材木", "松本町", "祐金", "元能見",
    "十王", "花崗", "六供", "三清", "本町", "梅園", "板屋",
]

# 地域・年齢別人口で集計する町名（完全一致）
WALK5_AREA_NAMES = [
    "康生町", "康生通", "連尺通", "籠田町", "伝馬通", "材木町", "本町通",
]
WALK10_AREA_NAMES = WALK5_AREA_NAMES + [
    "松本町", "十王町", "花崗町", "六供町", "六供本町", "梅園町", "板屋町",
    "元能見町", "祐金町", "若松町", "若松東１丁目", "若松東２丁目", "若松東３丁目",
]
NEARBY_AREA_NAMES = [
    "康生町", "康生通", "連尺通", "籠田町", "伝馬通", "材木町", "松本町",
    "祐金町", "元能見町", "十王町", "花崗町", "六供町", "六供本町", "本町通",
    "梅園町", "板屋町",
]

# 令和6年度市民意識調査の選択肢ラベル
SURVEY_AGE_LABELS = {
    1: "10歳未満", 2: "10代", 3: "20代", 4: "30代", 5: "40代",
    6: "50代", 7: "60代", 8: "70歳以上",
}
SURVEY_JOB_LABELS = {
    1: "会社員・公務員等", 2: "自営業", 3: "自由業", 4: "パート・アルバイト",
    5: "専業主婦（夫）", 6: "学生", 7: "無職・その他",
}
SURVEY_FREQ_LABELS = {
    1: "非常に多い", 2: "やや多い", 3: "どちらともいえない",
    4: "あまり多くない", 5: "全く多くない",
}
OKAZAKI_INCOME_BASE = "https://www.city.okazaki.lg.jp/shisei/tokei/1014399.html"
OKAZAKI_INCOME_RES = "../../_res/projects/default_project/_page_/001/014/399/"

DOW_LABELS = ["月", "火", "水", "木", "金", "土", "日"]
GENDER_LABELS = {0: "男性", 1: "女性", 2: "不明"}
AGE_COLS = ["Age00", "Age10", "Age20", "Age30", "Age40", "Age50", "Age60", "Age70"]
AGE_LABELS = {
    "Age00": "10代未満", "Age10": "10代", "Age20": "20代", "Age30": "30代",
    "Age40": "40代", "Age50": "50代", "Age60": "60代", "Age70": "70代以上",
}


def log(msg):
    print(msg, flush=True)


def fetch_csv(url, retries=4, pause=3):
    """BODIKのCSV取得（403等で失敗した場合リトライ）。"""
    last_err = None
    for i in range(retries):
        try:
            r = requests.get(url, timeout=120)
            r.raise_for_status()
            return pd.read_csv(io.StringIO(r.text))
        except Exception as e:
            last_err = e
            if i < retries - 1:
                wait = pause * (i + 1)
                log(f"      取得失敗、{wait}秒後に再試行 ({i + 1}/{retries}): {e}")
                time.sleep(wait)
    raise last_err


def haversine_m(lat1, lon1, lat2, lon2):
    r = 6371000.0
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dp = math.radians(lat2 - lat1)
    dl = math.radians(lon2 - lon1)
    a = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * r * math.asin(math.sqrt(a))


def fetch_package_list(retries=4, pause=3):
    url = f"https://data.bodik.jp/api/3/action/package_search?q=organization:{ORG}&rows=200"
    last_err = None
    for i in range(retries):
        try:
            r = requests.get(url, timeout=60)
            r.raise_for_status()
            return r.json()["result"]["results"]
        except Exception as e:
            last_err = e
            if i < retries - 1:
                wait = pause * (i + 1)
                log(f"  BODIK取得失敗、{wait}秒後に再試行 ({i + 1}/{retries}): {e}")
                time.sleep(wait)
    raise last_err


# ---------------------------------------------------------------------------
# 1. 人流データ
# ---------------------------------------------------------------------------
def build_peopleflow(packages, months):
    pkg = next((p for p in packages if "人流" in p["title"]), None)
    if pkg is None:
        raise SystemExit("人流データセットが見つかりません")

    resources = pkg["resources"]

    # カメラ設置場所テーブル
    cam_res = next(r for r in resources if "設置場所" in r.get("description", "") or "ai" in r["name"].lower())
    cam = pd.read_csv(cam_res["url"])
    cam.columns = [c.strip() for c in cam.columns]

    def split_ll(s):
        try:
            la, lo = str(s).split(",")
            return float(la), float(lo)
        except Exception:
            return None, None

    cam[["lat", "lon"]] = cam["緯度・経度"].apply(lambda s: pd.Series(split_ll(s)))
    target_cam = cam[cam["カメラグループ"] == TARGET_CAMERA_GROUP].copy()
    target_ids = set(int(x) for x in target_cam["カメラ番号"].tolist())
    log(f"  康生通りカメラID: {sorted(target_ids)}")

    # 月別CSV（peopleflow）を新しい順に months 個
    month_res = [r for r in resources if "peopleflow" in r["name"]]

    def month_key(r):
        m = re.search(r"peopleflow(\d{6})", r["name"])
        return m.group(1) if m else "000000"

    month_res.sort(key=month_key)
    before = len(month_res)
    month_res = [r for r in month_res if month_key(r) >= PEOPLEFLOW_MIN_YM]
    if before > len(month_res):
        log(f"  2020年分を除外: {before - len(month_res)}か月スキップ（{PEOPLEFLOW_MIN_YM}以降を使用）")
    if not month_res:
        raise SystemExit(f"人流データがありません（{PEOPLEFLOW_MIN_YM}以降）")

    if months is None or months <= 0:
        picked = month_res
        log(f"  使用月: 全{len(picked)}か月（{month_key(picked[0])}〜{month_key(picked[-1])}）")
    else:
        picked = month_res[-months:]
        log(f"  使用月: {[month_key(r) for r in picked]}")

    agg = {
        "hour": {h: 0.0 for h in range(24)},
        "dow": {d: 0.0 for d in range(7)},
        "holiday": {0: 0.0, 1: 0.0},
        "gender": {0: 0.0, 1: 0.0, 2: 0.0},
        "age": {c: 0.0 for c in AGE_COLS},
        "input": 0.0,
        "output": 0.0,
        "total": 0.0,
    }
    per_cam = {cid: {"in": 0.0, "out": 0.0, "total": 0.0} for cid in target_ids}
    day_totals = {}   # (y,m,d) -> NoP合計
    day_hol = {}      # (y,m,d) -> 休日フラグ
    monthly_breakdown = {}  # "YYYY-MM" -> 各指標の月別内訳（期間指定での再集計用）

    for r in picked:
        log(f"    読込: {month_key(r)} ...")
        df = fetch_csv(r["url"])
        df = df[df["camera_id"].isin(target_ids)]
        if df.empty:
            continue

        for (y, m, d), g in df.groupby(["year", "month", "day"]):
            key = (int(y), int(m), int(d))
            day_totals[key] = day_totals.get(key, 0.0) + float(g["NoP"].sum())
            day_hol[key] = int(g["is_holiday"].iloc[0])

        for (yy, mm), gm in df.groupby(["year", "month"]):
            ym = f"{int(yy):04d}-{int(mm):02d}"
            b = monthly_breakdown.setdefault(ym, {
                "hour": [0.0] * 24, "age": [0.0] * 8, "gender": [0.0] * 3,
                "dir": {}, "total": 0.0,
            })
            b["total"] += float(gm["NoP"].sum())
            for h, val in gm.groupby("hour")["NoP"].sum().items():
                b["hour"][int(h)] += float(val)
            for i, c in enumerate(AGE_COLS):
                b["age"][i] += float(gm[c].sum())
            for gd, val in gm.groupby("Gender")["NoP"].sum().items():
                if int(gd) in (0, 1, 2):
                    b["gender"][int(gd)] += float(val)
            for cid, gc in gm.groupby("camera_id"):
                dd = b["dir"].setdefault(str(int(cid)), {"in": 0.0, "out": 0.0, "total": 0.0})
                dd["in"] += float(gc["Input"].sum())
                dd["out"] += float(gc["Output"].sum())
                dd["total"] += float(gc["NoP"].sum())

        agg["total"] += float(df["NoP"].sum())
        agg["input"] += float(df["Input"].sum())
        agg["output"] += float(df["Output"].sum())

        for h, g in df.groupby("hour"):
            agg["hour"][int(h)] += float(g["NoP"].sum())
        for d, g in df.groupby("dow"):
            agg["dow"][int(d)] += float(g["NoP"].sum())
        for hol, g in df.groupby("is_holiday"):
            agg["holiday"][int(hol)] += float(g["NoP"].sum())
        for gd, g in df.groupby("Gender"):
            if int(gd) in agg["gender"]:
                agg["gender"][int(gd)] += float(g["NoP"].sum())
        for c in AGE_COLS:
            agg["age"][c] += float(df[c].sum())
        for cid, g in df.groupby("camera_id"):
            per_cam[int(cid)]["in"] += float(g["Input"].sum())
            per_cam[int(cid)]["out"] += float(g["Output"].sum())
            per_cam[int(cid)]["total"] += float(g["NoP"].sum())

    n_days = max(len(day_totals), 1)
    log(f"  集計日数: {n_days}日")

    def per_day(v):
        return round(v / n_days, 1)

    by_hour = [{"hour": h, "count": per_day(agg["hour"][h])} for h in range(24)]
    by_dow = [{"dow": d, "label": DOW_LABELS[d], "count": per_day(agg["dow"][d])} for d in range(7)]

    wk_days = sum(1 for v in day_hol.values() if v == 0)
    hol_days = sum(1 for v in day_hol.values() if v == 1)
    weekday_holiday = [
        {"type": "平日", "avg_per_day": round(agg["holiday"][0] / max(wk_days, 1), 1), "days": wk_days},
        {"type": "休日", "avg_per_day": round(agg["holiday"][1] / max(hol_days, 1), 1), "days": hol_days},
    ]

    age_total = sum(agg["age"].values()) or 1
    by_age = [
        {"age": c, "label": AGE_LABELS[c], "count": per_day(agg["age"][c]),
         "pct": round(100 * agg["age"][c] / age_total, 1)}
        for c in AGE_COLS
    ]

    gender_total = sum(agg["gender"].values()) or 1
    by_gender = [
        {"gender": g, "label": GENDER_LABELS[g], "count": per_day(agg["gender"][g]),
         "pct": round(100 * agg["gender"][g] / gender_total, 1)}
        for g in (0, 1, 2)
    ]

    id2name = dict(zip(target_cam["カメラ番号"].astype(int), target_cam["カメラ名"]))
    id2in = dict(zip(target_cam["カメラ番号"].astype(int), target_cam["入場"]))
    id2out = dict(zip(target_cam["カメラ番号"].astype(int), target_cam["退場"]))
    by_direction = []
    for cid in sorted(target_ids):
        by_direction.append({
            "camera_id": cid,
            "name": id2name.get(cid, str(cid)),
            "in_dir": str(id2in.get(cid, "")),
            "out_dir": str(id2out.get(cid, "")),
            "in": per_day(per_cam[cid]["in"]),
            "out": per_day(per_cam[cid]["out"]),
            "total": per_day(per_cam[cid]["total"]),
        })

    cameras = [
        {"camera_id": int(row["カメラ番号"]), "name": row["カメラ名"],
         "lat": row["lat"], "lon": row["lon"]}
        for _, row in target_cam.iterrows()
    ]

    # --- 時系列（日次・週次・月次） ---
    daily = []
    for key in sorted(day_totals):
        y, m, d = key
        dt = datetime(y, m, d)
        daily.append({
            "date": f"{y:04d}-{m:02d}-{d:02d}",
            "count": round(day_totals[key]),
            "dow": dt.weekday(),
            "is_holiday": day_hol[key],
        })

    month_sum, month_days = {}, {}
    week_sum, week_days, week_start = {}, {}, {}
    for key, v in day_totals.items():
        y, m, d = key
        dt = datetime(y, m, d)
        month_sum[(y, m)] = month_sum.get((y, m), 0.0) + v
        month_days[(y, m)] = month_days.get((y, m), 0) + 1
        iso = dt.isocalendar()
        wk = (iso[0], iso[1])
        week_sum[wk] = week_sum.get(wk, 0.0) + v
        week_days[wk] = week_days.get(wk, 0) + 1
        week_start[wk] = dt - timedelta(days=dt.weekday())

    monthly = [
        {"ym": f"{y:04d}-{m:02d}", "count": round(s), "days": month_days[(y, m)],
         "avg": round(s / month_days[(y, m)])}
        for (y, m), s in sorted(month_sum.items())
    ]
    for mrow in monthly:
        if mrow["ym"] in monthly_breakdown:
            monthly_breakdown[mrow["ym"]]["days"] = mrow["days"]
    weekly = [
        {"week_start": week_start[k].strftime("%Y-%m-%d"), "count": round(s),
         "days": week_days[k], "avg": round(s / week_days[k])}
        for k, s in sorted(week_sum.items(), key=lambda x: week_start[x[0]])
    ]

    # 曜日別の代表値（中央値）— イベントの押し上げ効果算出に使う
    dow_values = {i: [] for i in range(7)}
    for row in daily:
        dow_values[row["dow"]].append(row["count"])

    def median(xs):
        xs = sorted(xs)
        n = len(xs)
        if n == 0:
            return 0
        return xs[n // 2] if n % 2 else (xs[n // 2 - 1] + xs[n // 2]) / 2

    dow_median = {i: round(median(v)) for i, v in dow_values.items()}

    peopleflow = {
        "total_per_day": per_day(agg["total"]),
        "by_hour": by_hour,
        "by_dow": by_dow,
        "weekday_holiday": weekday_holiday,
        "by_age": by_age,
        "by_gender": by_gender,
        "by_direction": by_direction,
        "n_days": n_days,
        "months": [month_key(r) for r in picked],
        "timeseries": {"daily": daily, "weekly": weekly, "monthly": monthly},
        "dow_median": dow_median,
        "monthly_breakdown": monthly_breakdown,
        "direction_meta": [
            {"camera_id": cid, "name": id2name.get(cid, str(cid)),
             "in_dir": str(id2in.get(cid, "")), "out_dir": str(id2out.get(cid, ""))}
            for cid in sorted(target_ids)
        ],
        "age_labels": [AGE_LABELS[c] for c in AGE_COLS],
        "gender_labels": [GENDER_LABELS[g] for g in (0, 1, 2)],
    }
    return peopleflow, cameras


def filter_peopleflow_min_ym(pf, min_ym=PEOPLEFLOW_MIN_YM):
    """既存 peopleflow から min_ym 未満を除外し、集計値を再計算。"""
    min_date = f"{min_ym[:4]}-{min_ym[4:]}-01"
    min_ym_dash = f"{min_ym[:4]}-{min_ym[4:]}"

    pf = json.loads(json.dumps(pf))
    pf["months"] = [m for m in pf.get("months", []) if m >= min_ym]
    pf["monthly_breakdown"] = {
        k: v for k, v in pf.get("monthly_breakdown", {}).items() if k >= min_ym_dash
    }

    daily = [d for d in pf["timeseries"]["daily"] if d["date"] >= min_date]
    n_days = max(len(daily), 1)

    month_sum, month_days = {}, {}
    week_sum, week_days, week_start_map = {}, {}, {}
    for row in daily:
        y, m, d = (int(x) for x in row["date"].split("-"))
        dt = datetime(y, m, d)
        month_sum[(y, m)] = month_sum.get((y, m), 0) + row["count"]
        month_days[(y, m)] = month_days.get((y, m), 0) + 1
        iso = dt.isocalendar()
        wk = (iso[0], iso[1])
        week_sum[wk] = week_sum.get(wk, 0) + row["count"]
        week_days[wk] = week_days.get(wk, 0) + 1
        week_start_map[wk] = dt - timedelta(days=dt.weekday())

    monthly = [
        {"ym": f"{y:04d}-{m:02d}", "count": round(s), "days": month_days[(y, m)],
         "avg": round(s / month_days[(y, m)])}
        for (y, m), s in sorted(month_sum.items())
    ]
    weekly = []
    for k, s in sorted(week_sum.items(), key=lambda x: week_start_map[x[0]]):
        ws = week_start_map[k].strftime("%Y-%m-%d")
        weekly.append({
            "week_start": max(ws, min_date),
            "count": round(s),
            "days": week_days[k],
            "avg": round(s / week_days[k]),
        })

    mb = pf["monthly_breakdown"]
    hour = [0.0] * 24
    age = [0.0] * len(AGE_COLS)
    gender = [0.0] * 3
    dir_agg = {}
    total = 0.0
    for b in mb.values():
        total += b.get("total", 0)
        for i in range(24):
            hour[i] += b["hour"][i]
        for i in range(len(AGE_COLS)):
            age[i] += b["age"][i]
        for i in range(3):
            gender[i] += b["gender"][i]
        for cid, v in (b.get("dir") or {}).items():
            d = dir_agg.setdefault(cid, {"in": 0.0, "out": 0.0, "total": 0.0})
            d["in"] += v["in"]
            d["out"] += v["out"]
            d["total"] += v["total"]

    def per_day(v):
        return round(v / n_days, 1)

    dow_sum = [0.0] * 7
    dow_days = [0] * 7
    w_sum = h_sum = w_days = h_days = 0
    dow_values = {i: [] for i in range(7)}
    for row in daily:
        dow_values[row["dow"]].append(row["count"])
        dow_sum[row["dow"]] += row["count"]
        dow_days[row["dow"]] += 1
        if row["is_holiday"]:
            h_sum += row["count"]
            h_days += 1
        else:
            w_sum += row["count"]
            w_days += 1

    def median(xs):
        xs = sorted(xs)
        n = len(xs)
        if n == 0:
            return 0
        return xs[n // 2] if n % 2 else (xs[n // 2 - 1] + xs[n // 2]) / 2

    age_total = sum(age) or 1
    gender_total = sum(gender) or 1
    by_direction = []
    for m in pf.get("direction_meta", []):
        cid = str(m["camera_id"])
        v = dir_agg.get(cid, {"in": 0, "out": 0, "total": 0})
        by_direction.append({
            "camera_id": m["camera_id"], "name": m["name"],
            "in_dir": m["in_dir"], "out_dir": m["out_dir"],
            "in": per_day(v["in"]), "out": per_day(v["out"]), "total": per_day(v["total"]),
        })

    pf.update({
        "total_per_day": per_day(total),
        "by_hour": [{"hour": h, "count": per_day(hour[h])} for h in range(24)],
        "by_dow": [
            {"dow": d, "label": DOW_LABELS[d],
             "count": round(dow_sum[d] / dow_days[d]) if dow_days[d] else 0}
            for d in range(7)
        ],
        "weekday_holiday": [
            {"type": "平日", "avg_per_day": round(w_sum / max(w_days, 1), 1), "days": w_days},
            {"type": "休日", "avg_per_day": round(h_sum / max(h_days, 1), 1), "days": h_days},
        ],
        "by_age": [
            {"age": c, "label": AGE_LABELS[c], "count": per_day(age[i]),
             "pct": round(100 * age[i] / age_total, 1)}
            for i, c in enumerate(AGE_COLS)
        ],
        "by_gender": [
            {"gender": g, "label": GENDER_LABELS[g], "count": per_day(gender[g]),
             "pct": round(100 * gender[g] / gender_total, 1)}
            for g in (0, 1, 2)
        ],
        "by_direction": by_direction,
        "n_days": n_days,
        "timeseries": {"daily": daily, "weekly": weekly, "monthly": monthly},
        "dow_median": {i: round(median(v)) for i, v in dow_values.items()},
    })
    return pf


def refresh_events_for_peopleflow(events, peopleflow):
    """人流の期間変更に合わせてイベントの押し上げ効果を再計算。"""
    daily_index = {r["date"]: r["count"] for r in peopleflow["timeseries"]["daily"]}
    dow_median = peopleflow.get("dow_median", {})
    ts_min = min(daily_index) if daily_index else "9999"
    ts_max = max(daily_index) if daily_index else "0000"
    items = []
    for e in events.get("items", []):
        e = dict(e)
        in_range = sorted(
            d for d in _event_dates(e) if ts_min <= d <= ts_max
        )
        flow = uplift = rep_date = None
        if in_range:
            rep_date = in_range[0]
            flow = daily_index.get(rep_date)
            dt = datetime.strptime(rep_date, "%Y-%m-%d")
            base = dow_median.get(dt.weekday()) or dow_median.get(str(dt.weekday()))
            if flow is not None and base:
                uplift = round(100 * (flow / base - 1), 1)
        e["rep_date"] = rep_date
        e["rep_flow"] = flow
        e["uplift_pct"] = uplift
        items.append(e)
    return {**events, "items": items}


def _event_dates(e):
    """イベントの開催日リスト（開始〜終了の各日）。"""
    try:
        start = datetime.strptime(e["start"], "%Y-%m-%d")
        end = datetime.strptime(e.get("end") or e["start"], "%Y-%m-%d")
    except Exception:
        return []
    dates = []
    cur = start
    while cur <= end:
        dates.append(cur.strftime("%Y-%m-%d"))
        cur += timedelta(days=1)
    return dates


def refilter_local_data():
    """data/*.json から 2020年人流を除外して data.js を再生成（BODIK再取得なし）。"""
    log("ローカル data/*.json から2020年人流を除外...")
    payload = {}
    for path in DATA_DIR.glob("*.json"):
        payload[path.stem] = json.loads(path.read_text(encoding="utf-8"))

    pf = filter_peopleflow_min_ym(payload["peopleflow"])
    payload["peopleflow"] = pf
    payload["events"] = refresh_events_for_peopleflow(payload.get("events", {}), pf)
    if "meta" in payload and "notes" in payload["meta"]:
        payload["meta"]["notes"]["peopleflow"] = (
            "康生通りカメラ（AIカメラ人流実証実験）。1日あたり平均に換算。"
            f"{PEOPLEFLOW_MIN_YM[:4]}年以前は欠損補間が多いため除外。欠損は中央値補間。"
        )
    jst = timezone(timedelta(hours=9))
    payload["meta"]["generated_at"] = datetime.now(jst).strftime("%Y-%m-%d %H:%M")

    for key, val in payload.items():
        (DATA_DIR / f"{key}.json").write_text(
            json.dumps(val, ensure_ascii=False, indent=2), encoding="utf-8"
        )
    js = "window.DASHBOARD_DATA = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n"
    (JS_DIR / "data.js").write_text(js, encoding="utf-8")
    log(f"  人流期間: {pf['months'][0]}〜{pf['months'][-1]}（{pf['n_days']}日）")
    log(f"  出力: {JS_DIR / 'data.js'}")
def classify_store(name, kind):
    name = str(name)
    kind = str(kind)
    n = name.lower()
    if any(k in n for k in ["カフェ", "cafe", "coffee", "珈琲", "コーヒー"]) or "喫茶" in name:
        return "カフェ・喫茶"
    if any(k in name for k in ["居酒屋", "酒場", "横丁", "バル", "ダイニングバー"]) or any(k in n for k in ["bar", "izakaya", "dining"]):
        return "居酒屋・バー"
    if kind in ("菓子製造業", "アイスクリーム類製造業") or any(k in name for k in ["ケーキ", "洋菓子", "和菓子", "パン", "ベーカリー", "スイーツ", "菓子"]):
        return "スイーツ・ベーカリー"
    if kind in ("そうざい製造業", "複合型そうざい製造業") or any(k in name for k in ["惣菜", "そうざい", "弁当", "デリカ"]):
        return "惣菜・弁当"
    if "販売業" in kind:
        return "物販・食品販売"
    if kind == "飲食店営業":
        return "レストラン・食堂"
    return "その他"


def build_stores(packages, geocode_cache):
    pkg = next((p for p in packages if "食品" in p["title"]), None)
    if pkg is None:
        log("  食品営業許可データが見つかりません（スキップ）")
        return {"points": [], "category_counts": [], "radius_m": STORE_RADIUS_M}

    res = pkg["resources"][0]
    df = pd.read_csv(res["url"])
    df = df[df["廃業年月日"].isna()]  # 廃業していないもの

    addr_col = "所在地_連結表記"
    name_col = "施設名称"
    kind_col = "営業の種類"

    mask = df[addr_col].fillna("").apply(lambda a: any(k in a for k in NEARBY_TOWN_KEYWORDS))
    near = df[mask].copy()
    log(f"  周辺町名で一次抽出: {len(near)}件")

    # 住所ごとにジオコード（重複住所はキャッシュ）
    points = []
    unique_addrs = near[addr_col].dropna().unique().tolist()
    log(f"  ジオコード対象住所（ユニーク）: {len(unique_addrs)}件")
    for i, addr in enumerate(unique_addrs):
        if addr in geocode_cache:
            continue
        # 「(施設保管場所)」等の注記を除去
        q = re.sub(r"[（(].*?[)）]", "", str(addr)).strip()
        geocode_cache[addr] = gsi_geocode(q)
        time.sleep(0.15)
        if (i + 1) % 20 == 0:
            log(f"    ...{i + 1}/{len(unique_addrs)}")

    for _, row in near.iterrows():
        ll = geocode_cache.get(row[addr_col])
        if not ll:
            continue
        lat, lon = ll
        dist = haversine_m(BUILDING["lat"], BUILDING["lon"], lat, lon)
        if dist > STORE_RADIUS_M:
            continue
        points.append({
            "name": str(row[name_col]),
            "kind": str(row[kind_col]),
            "category": classify_store(row[name_col], row[kind_col]),
            "address": str(row[addr_col]),
            "lat": round(lat, 6),
            "lon": round(lon, 6),
            "dist_m": round(dist),
        })

    # 同一店舗が複数許可で重複することがあるので (名称,住所) で集約
    seen = {}
    for p in points:
        key = (p["name"], p["address"])
        if key not in seen:
            seen[key] = p
    points = list(seen.values())
    log(f"  半径{STORE_RADIUS_M}m以内の店舗: {len(points)}件")

    counts = {}
    for p in points:
        counts[p["category"]] = counts.get(p["category"], 0) + 1
    category_counts = [{"category": k, "count": v} for k, v in
                       sorted(counts.items(), key=lambda x: -x[1])]

    return {"points": points, "category_counts": category_counts, "radius_m": STORE_RADIUS_M}


def gsi_geocode(q):
    try:
        r = requests.get(
            "https://msearch.gsi.go.jp/address-search/AddressSearch",
            params={"q": q}, timeout=20,
        )
        j = r.json()
        if j:
            lon, lat = j[0]["geometry"]["coordinates"]
            return float(lat), float(lon)
    except Exception:
        pass
    return None


# ---------------------------------------------------------------------------
# 3. 商圏人口・賃料・将来性
# ---------------------------------------------------------------------------
def _population_for_areas(packages, area_names, note=""):
    """地域・年齢別人口から指定町字を合算。"""
    pkg = next((p for p in packages if "地域・年齢別人口" in p["title"]), None)
    if pkg is None:
        return {"note": "地域・年齢別人口データが見つかりません", "is_dummy": True}

    df = pd.read_csv(pkg["resources"][0]["url"])
    latest_date = sorted(df["調査年月日"].unique())[-1]
    dpl = df[df["調査年月日"] == latest_date]
    sub = dpl[dpl["地域名"].isin(area_names)].copy()

    pop = int(pd.to_numeric(sub["総人口"], errors="coerce").sum())
    households = int(pd.to_numeric(sub["世帯数"], errors="coerce").sum())

    age_band_cols = [
        ("0-14歳", [
            "0-4歳の男性", "0-4歳の女性", "5-9歳の男性", "5-9歳の女性",
            "10-14歳の男性", "10-14歳の女性",
        ]),
        ("15-64歳", [
            c for c in df.columns
            if any(a in c for a in [
                "15-19", "20-24", "25-29", "30-34", "35-39", "40-44",
                "45-49", "50-54", "55-59", "60-64",
            ]) and ("男性" in c or "女性" in c)
        ]),
        ("65歳以上", [
            c for c in df.columns
            if any(a in c for a in ["65-69", "70-74", "75-79", "80-84", "85歳以上"])
            and ("男性" in c or "女性" in c)
        ]),
    ]
    age_structure = []
    for label, cols in age_band_cols:
        n = int(sum(pd.to_numeric(sub[c], errors="coerce").fillna(0).sum() for c in cols))
        age_structure.append({
            "label": label, "count": n,
            "pct": round(100 * n / max(pop, 1), 1),
        })

    return {
        "date": latest_date,
        "area_names": area_names,
        "area_count": len(sub),
        "population": pop,
        "households": households,
        "avg_household_size": round(pop / max(households, 1), 2),
        "age_structure": age_structure,
        "source": "岡崎市オープンデータ（地域・年齢別人口）",
        "note": note,
        "is_dummy": False,
    }


def _parse_survey_household(packages):
    """市民意識調査の同居家族（問5）から世帯類型の概算。"""
    pkg = next((p for p in packages if "市民意識" in p["title"]), None)
    if pkg is None:
        return None

    url = next(r["url"] for r in pkg["resources"] if r.get("format") == "CSV")
    sdf = pd.read_csv(url, encoding="utf-8-sig", low_memory=False)
    c1 = "問5_1．同居の家族はいない "
    c2, c3, c4, c6 = "問5_2．配偶者がいる", "問5_3．就学前の子どもがいる", "問5_4．小・中学生の子どもがいる", "問5_6．親子孫の三世代以上が同居している"

    alone = couple = family = three_gen = other = 0
    for _, row in sdf.iterrows():
        q1 = pd.notna(row.get(c1))
        q2 = pd.notna(row.get(c2))
        q3 = pd.notna(row.get(c3))
        q4 = pd.notna(row.get(c4))
        q6 = pd.notna(row.get(c6))
        if q1 and not (q2 or q3 or q4 or q6):
            alone += 1
        elif q6:
            three_gen += 1
        elif q3 or q4:
            family += 1
        elif q2:
            couple += 1
        else:
            other += 1

    total = max(alone + couple + family + three_gen + other, 1)
    return {
        "household": [
            {"label": "単身（同居家族なし）", "pct": round(100 * alone / total, 1), "count": alone},
            {"label": "夫婦のみ", "pct": round(100 * couple / total, 1), "count": couple},
            {"label": "ファミリー（子どもあり）", "pct": round(100 * family / total, 1), "count": family},
            {"label": "三世代同居", "pct": round(100 * three_gen / total, 1), "count": three_gen},
            {"label": "その他", "pct": round(100 * other / total, 1), "count": other},
        ],
        "single_ratio": round(100 * alone / total, 1),
        "source": "令和6年度市民意識調査（問5・複数回答を類型化）",
        "note": "岡崎市全体の調査サンプル。商圏限定の世帯構成ではありません。",
    }


def _parse_city_age_ratios(packages):
    """岡崎市全体の年齢3区分（人口・世帯数等CSV）。"""
    pkg = next((p for p in packages if "人口・世帯" in p["title"]), None)
    if pkg is None:
        return None
    df = pd.read_csv(pkg["resources"][0]["url"])
    row = df.iloc[-1]
    cols = df.columns.tolist()
    return {
        "year_label": str(row[cols[1]]).strip(),
        "age_structure": [
            {"label": "0-14歳", "pct": float(str(row[cols[9]]).replace(",", ""))},
            {"label": "15-64歳", "pct": float(str(row[cols[10]]).replace(",", ""))},
            {"label": "65歳以上", "pct": float(str(row[cols[11]]).replace(",", ""))},
        ],
        "household_size": float(str(row[cols[6]]).replace(",", "")),
        "source": "岡崎市オープンデータ（人口・世帯数等）",
    }


def build_demographics(packages):
    walk5 = _population_for_areas(
        packages, WALK5_AREA_NAMES,
        note="徒歩5分圏（約400m）に相当する町字の合算。厳密な徒歩圏ではなく概算です。",
    )
    walk10 = _population_for_areas(
        packages, WALK10_AREA_NAMES,
        note="徒歩10分圏（約800m）に相当する町字の合算。厳密な徒歩圏ではなく概算です。",
    )
    if walk5.get("is_dummy") or walk10.get("is_dummy"):
        return {
            "is_dummy": True,
            "source_hint": "地域・年齢別人口データが取得できませんでした",
            "walk5_population": 4200,
            "walk10_population": 15800,
            "age_structure": [
                {"label": "0-14歳", "pct": 10.5},
                {"label": "15-64歳", "pct": 58.2},
                {"label": "65歳以上", "pct": 31.3},
            ],
            "household": [
                {"label": "単身世帯", "pct": 46.0},
                {"label": "夫婦のみ", "pct": 22.0},
                {"label": "ファミリー", "pct": 24.0},
                {"label": "その他", "pct": 8.0},
            ],
            "single_ratio": 46.0,
            "elderly_ratio": 31.3,
        }

    hh = _parse_survey_household(packages)
    city_age = _parse_city_age_ratios(packages)
    elderly = next((a["pct"] for a in walk10["age_structure"] if "65" in a["label"]), None)

    return {
        "is_dummy": False,
        "is_partial": True,
        "source": "岡崎市オープンデータ（地域・年齢別人口・市民意識調査）",
        "walk5_population": walk5["population"],
        "walk10_population": walk10["population"],
        "walk5_households": walk5["households"],
        "walk10_households": walk10["households"],
        "walk5_areas": walk5["area_names"],
        "walk10_areas": walk10["area_names"],
        "population_date": walk10["date"],
        "age_structure": walk10["age_structure"],
        "household": hh["household"] if hh else [],
        "single_ratio": hh["single_ratio"] if hh else None,
        "elderly_ratio": elderly,
        "avg_household_size": walk10["avg_household_size"],
        "city_reference": city_age,
        "notes": {
            "population": walk10["note"],
            "household": hh["note"] if hh else "世帯構成データなし",
        },
    }


# ---------------------------------------------------------------------------
# 3b. 地価公示（国土数値情報）
# ---------------------------------------------------------------------------
OKAZAKI_CITY_CODE = "23202"
AICHI_PREF_CODE = "23"
LAND_USE_LABELS = {
    "000": "住宅地",
    "005": "商業地",
    "009": "工業地",
    "003": "宅地見込地",
    "013": "林地",
}
LAND_PRICE_SOURCE = "国土交通省 国土数値情報 地価公示"
LAND_PRICE_SOURCE_URL = "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-L01-2026.html"
LAND_PRICE_YEARS_TRY = ("26", "25", "24")


def _fetch_land_price_geojson(pref_code=AICHI_PREF_CODE, year_suffix="25"):
    import io
    import zipfile

    url = (
        f"https://nlftp.mlit.go.jp/ksj/gml/data/L01/L01-{year_suffix}/"
        f"L01-{year_suffix}_{pref_code}_GML.zip"
    )
    headers = {"User-Agent": "tenant_dashboard/1.0 (PBL study)"}
    r = requests.get(url, headers=headers, timeout=120)
    r.raise_for_status()
    zf = zipfile.ZipFile(io.BytesIO(r.content))
    gj_name = next(n for n in zf.namelist() if n.endswith(".geojson"))
    return json.loads(zf.read(gj_name))


def _land_price_points_for_city(geojson, city_code=OKAZAKI_CITY_CODE):
    points = []
    for feat in geojson.get("features", []):
        p = feat.get("properties") or {}
        if str(p.get("L01_001") or "") != city_code:
            continue
        try:
            price = int(p.get("L01_008") or 0)
        except (TypeError, ValueError):
            continue
        if price <= 0:
            continue
        lon, lat = feat["geometry"]["coordinates"][:2]
        use_code = str(p.get("L01_005") or "")
        points.append({
            "price_yen_sqm": price,
            "survey_year": int(p.get("L01_007") or 0),
            "use_code": use_code,
            "use_label": LAND_USE_LABELS.get(use_code, use_code),
            "address": str(p.get("L01_025") or p.get("L01_024") or ""),
            "location_name": str(p.get("L01_024") or ""),
            "change_pct": p.get("L01_009"),
            "lat": round(float(lat), 6),
            "lon": round(float(lon), 6),
            "dist_m": round(haversine_m(BUILDING["lat"], BUILDING["lon"], lat, lon)),
        })
    return points


def _pick_nearest_land_price(points, prefer_use="005"):
    pool = [p for p in points if p["use_code"] == prefer_use]
    if not pool:
        pool = points
    return min(pool, key=lambda p: p["dist_m"]) if pool else None


def fetch_land_price_for_building():
    """岡崎市内の地価公示から物件に最も近い商業地標準地を選ぶ。"""
    last_err = None
    for ys in LAND_PRICE_YEARS_TRY:
        try:
            log(f"  地価公示（愛知・L01-{ys}）を取得...")
            geo = _fetch_land_price_geojson(year_suffix=ys)
            points = _land_price_points_for_city(geo)
            picked = _pick_nearest_land_price(points, prefer_use="005")
            if not picked:
                raise ValueError("岡崎市の地価公示が見つかりません")
            picked = {
                **picked,
                "source": LAND_PRICE_SOURCE,
                "source_url": LAND_PRICE_SOURCE_URL,
                "data_year_tag": f"L01-{ys}",
                "note": "地価公示の標準地価格（物件敷地そのものではありません）",
            }
            log(
                f"  最寄り{picked['use_label']}: {picked['price_yen_sqm']:,}円/㎡ "
                f"（{picked['dist_m']}m）"
            )
            return picked
        except Exception as e:
            last_err = e
            log(f"  L01-{ys} 失敗: {e}")
    raise last_err


def build_rent():
    """賃料はダミー、地価は国土数値情報（地価公示）から取得。"""
    land = None
    land_err = None
    try:
        land = fetch_land_price_for_building()
    except Exception as e:
        land_err = str(e)
        log(f"  地価公示取得失敗: {e}")

    return {
        "is_dummy": land is None,
        "rent_is_dummy": True,
        "land_is_dummy": land is None,
        "source_hint": "賃料は公開オープンデータなし（ダミー）。地価は国土数値情報 地価公示。",
        "floor1_tsubo_yen": [10000, 15000],
        "floor2_tsubo_yen": [5000, 9000],
        "this_building_tsubo_yen": 12000,
        "land_price_yen_sqm": land["price_yen_sqm"] if land else 155000,
        "land_price": land,
        "land_price_error": land_err,
    }


def load_payload_from_data_dir():
    skip = {"osm_probe", "osm_pois"}
    payload = {}
    for path in sorted(DATA_DIR.glob("*.json")):
        if path.stem in skip:
            continue
        payload[path.stem] = json.loads(path.read_text(encoding="utf-8"))
    return payload


def write_payload(payload):
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    JS_DIR.mkdir(parents=True, exist_ok=True)
    for key, val in payload.items():
        (DATA_DIR / f"{key}.json").write_text(
            json.dumps(val, ensure_ascii=False, indent=2), encoding="utf-8"
        )
    js = "window.DASHBOARD_DATA = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n"
    (JS_DIR / "data.js").write_text(js, encoding="utf-8")


def merge_rent_only():
    """既存 data/*.json の rent（地価）だけ更新して data.js を再生成。"""
    log("地価公示を取得して rent を更新...")
    payload = load_payload_from_data_dir()
    payload["rent"] = build_rent()
    if "meta" in payload:
        notes = payload["meta"].setdefault("notes", {})
        if payload["rent"].get("land_is_dummy"):
            notes["dummy"] = "賃料相場はダミー。地価公示の取得に失敗。"
        else:
            notes["dummy"] = "賃料相場のみダミー。地価は国土数値情報 地価公示（最寄り商業地標準地）。"
        jst = timezone(timedelta(hours=9))
        payload["meta"]["generated_at"] = datetime.now(jst).strftime("%Y-%m-%d %H:%M")
    write_payload(payload)
    lp = payload["rent"].get("land_price") or {}
    log(f"  地価: {payload['rent']['land_price_yen_sqm']:,}円/㎡ ({lp.get('use_label', '?')})")
    log(f"  出力: {JS_DIR / 'data.js'}")


def build_future():
    """都市計画・将来性（公開資料に基づく固定情報）。"""
    return {
        "is_dummy": False,
        "source": "岡崎市立地適正化計画・国交省資料・QURUWA",
        "items": [
            {
                "label": "都市機能誘導区域",
                "value": "中心市街地（康生地区）を包含",
                "note": "岡崎市立地適正化計画（平成31年3月策定）",
                "url": "https://www.city.okazaki.lg.jp/shisei/machi/1005061/1013142/1014117/1002912.html",
            },
            {
                "label": "コンパクト都市",
                "value": "国交省「モデル都市」に選定",
                "note": "コンパクト・プラス・ネットワークのモデル都市（第3弾・令和元年6月公表）に岡崎市が選定",
                "url": "https://www.mlit.go.jp/common/001295519.pdf",
            },
            {
                "label": "QURUWA",
                "value": "回遊動線・公共空間活用",
                "note": "康生通りを含むQURUWA地区で人流実証・回遊性向上を推進",
                "url": "https://www.city.okazaki.lg.jp/shisei/machi/1005061/1002967/1002968.html",
            },
            {
                "label": "中心市街地整備",
                "value": "康生周辺地のまちづくり継続",
                "note": "中心市街地活性化・歴史資源活用（康生周辺地交付金事業 等）",
                "url": "https://www.city.okazaki.lg.jp/_res/projects/default_project/_page_/001/008/420/kouseifo.pdf",
            },
        ],
    }


# ---------------------------------------------------------------------------
# 3.5 イベント（人流タイムラインに重ねる）
# ---------------------------------------------------------------------------
EVENT_RADIUS_M = 1500  # 物件からこの距離内のイベントを対象
EVENT_PLACE_KEYWORDS = [
    "康生", "籠田", "りぶら", "図書館交流", "岡崎公園", "中央緑道", "桜城橋",
    "乙川", "東岡崎", "セントラル", "QURUWA", "殿橋", "松應寺", "連尺", "本町",
]


def _parse_date(s):
    s = str(s).strip()
    for fmt in ("%Y/%m/%d", "%Y-%m-%d"):
        try:
            return datetime.strptime(s, fmt)
        except Exception:
            pass
    return None


def build_events(packages, peopleflow):
    pkg = next((p for p in packages if p["title"] == "イベント一覧"), None)
    if pkg is None:
        return {"items": [], "note": "イベント一覧データが見つかりません"}

    df = pd.read_csv(pkg["resources"][0]["url"], low_memory=False)

    daily_index = {r["date"]: r["count"] for r in peopleflow["timeseries"]["daily"]}
    dow_median = peopleflow.get("dow_median", {})
    if daily_index:
        ts_min = min(daily_index)
        ts_max = max(daily_index)
    else:
        ts_min, ts_max = "9999", "0000"

    grouped = {}  # イベント名 -> 集約情報
    for _, row in df.iterrows():
        start = _parse_date(row.get("開始日"))
        if start is None:
            continue
        end = _parse_date(row.get("終了日")) or start

        # 物件周辺のイベントに限定（座標があれば距離、なければ場所名/住所キーワード）
        lat, lon = row.get("緯度"), row.get("経度")
        place = str(row.get("場所名称") or "") + " " + str(row.get("所在地_連結表記") or "")
        near = False
        dist = None
        try:
            if pd.notna(lat) and pd.notna(lon):
                dist = haversine_m(BUILDING["lat"], BUILDING["lon"], float(lat), float(lon))
                near = dist <= EVENT_RADIUS_M
        except Exception:
            pass
        if not near and any(k in place for k in EVENT_PLACE_KEYWORDS):
            near = True
        if not near:
            continue

        name = str(row.get("イベント名") or "").strip()
        if not name:
            continue
        g = grouped.setdefault(name, {
            "name": name, "start": start, "end": end,
            "place": str(row.get("場所名称") or "").strip(),
            "address": str(row.get("所在地_連結表記") or "").strip(),
            "tag": str(row.get("タグ") or row.get("イベント種類") or "").strip(),
            "url": str(row.get("コンテンツURL") or row.get("URL") or "").strip(),
            "dates": set(), "dist_m": dist,
        })
        g["start"] = min(g["start"], start)
        g["end"] = max(g["end"], end)
        g["dates"].add(start.strftime("%Y-%m-%d"))
        if dist is not None and (g["dist_m"] is None or dist < g["dist_m"]):
            g["dist_m"] = dist

    items = []
    for g in grouped.values():
        # タイムライン期間と重なる開催日から代表日を選び、押し上げ効果を計算
        in_range_dates = sorted(d for d in g["dates"] if ts_min <= d <= ts_max)
        flow = uplift = rep_date = None
        if in_range_dates:
            rep_date = in_range_dates[0]
            flow = daily_index.get(rep_date)
            dt = datetime.strptime(rep_date, "%Y-%m-%d")
            base = dow_median.get(dt.weekday()) or dow_median.get(str(dt.weekday()))
            if flow is not None and base:
                uplift = round(100 * (flow / base - 1), 1)
        items.append({
            "name": g["name"],
            "start": g["start"].strftime("%Y-%m-%d"),
            "end": g["end"].strftime("%Y-%m-%d"),
            "occurrences": len(g["dates"]),
            "place": g["place"],
            "address": g["address"],
            "tag": g["tag"],
            "url": g["url"],
            "dist_m": round(g["dist_m"]) if g["dist_m"] is not None else None,
            "rep_date": rep_date,
            "rep_flow": flow,
            "uplift_pct": uplift,
        })

    items.sort(key=lambda x: x["start"])
    log(f"  周辺イベント: {len(items)}件（うち期間内 {sum(1 for i in items if i['rep_date'])}件）")
    return {
        "items": items,
        "radius_m": EVENT_RADIUS_M,
        "note": "物件周辺のイベント。押し上げ効果は開催日の通行量を同曜日の中央値と比較した概算。"
                "人流の欠損補間期間はイベント効果が出にくい点に注意。",
    }


# ---------------------------------------------------------------------------
# 5. 消費者傾向（市民意識調査・人口・所得・食品営業許可）
# ---------------------------------------------------------------------------
def _survey_value_counts(series, labels):
    total = int(series.notna().sum()) or 1
    out = []
    for code in sorted(labels):
        n = int((series == code).sum())
        if n:
            out.append({
                "code": code, "label": labels[code], "count": n,
                "pct": round(100 * n / total, 1),
            })
    return out


def _fetch_okazaki_xls(name):
    url = urljoin(OKAZAKI_INCOME_BASE, OKAZAKI_INCOME_RES + name)
    r = requests.get(url, timeout=30)
    r.raise_for_status()
    return pd.read_excel(io.BytesIO(r.content), header=None)


def _parse_income_trend():
    """一人当たり市民所得・家計所得の年度推移（千円）。"""
    df = _fetch_okazaki_xls("syotoku20.xls")
    rows = []
    for i in range(4, len(df)):
        year_label = str(df.iloc[i, 1]).strip() if pd.notna(df.iloc[i, 1]) else ""
        citizen = df.iloc[i, 2]
        household = df.iloc[i, 4]
        if pd.isna(citizen) or pd.isna(household):
            continue
        try:
            citizen = float(citizen)
            household = float(household)
        except (TypeError, ValueError):
            continue
        rows.append({
            "year_label": year_label,
            "citizen_income_k": int(citizen),
            "household_income_k": int(household),
        })
    latest = rows[-1] if rows else None
    return {
        "trend": rows[-12:],
        "latest": latest,
        "source": "岡崎市統計（syotoku20.xls）/ 愛知県市町村民所得推計",
        "unit": "千円",
    }


def _parse_household_income_breakdown():
    """市民家計所得の内訳（最新年度・百万円）。"""
    df = _fetch_okazaki_xls("syotoku18.xls")
    col_idx = df.shape[1] - 1
    year_label = str(df.iloc[2, col_idx]).strip()
    if year_label.isdigit():
        year_label = f"令和{year_label}年度"

    row_map = [
        (3, "雇用者報酬"), (4, "営業余剰・混合所得"), (5, "財産所得"),
        (10, "社会給付"), (15, "その他の経常移転"),
    ]
    breakdown = []
    total = None
    val = df.iloc[18, col_idx]
    if pd.notna(val):
        total = int(float(val))
    for row_i, label in row_map:
        v = df.iloc[row_i, col_idx]
        if pd.notna(v):
            amount = int(float(v))
            breakdown.append({"label": label, "amount_m": amount})
    if total and breakdown:
        for b in breakdown:
            b["pct"] = round(100 * b["amount_m"] / total, 1)
    return {
        "year_label": year_label,
        "total_m": total,
        "breakdown": breakdown,
        "source": "岡崎市統計（syotoku18.xls）",
        "unit": "百万円",
    }


def _parse_city_population_trend(packages):
    pkg = next((p for p in packages if "人口・世帯" in p["title"]), None)
    if pkg is None:
        return {"items": [], "note": "人口・世帯数データが見つかりません"}

    df = pd.read_csv(pkg["resources"][0]["url"])
    col_year = df.columns[1]
    col_pop = df.columns[2]
    col_house = df.columns[5]
    items = []
    for _, row in df.iterrows():
        year = str(row[col_year]).strip()
        pop_raw = str(row[col_pop]).replace(",", "").strip()
        hh_raw = str(row[col_house]).replace(",", "").strip()
        if not pop_raw.isdigit():
            continue
        pop = int(pop_raw)
        hh = int(hh_raw) if hh_raw.isdigit() else None
        items.append({"year_label": year, "population": pop, "households": hh})
    recent = items[-15:]
    latest = recent[-1] if recent else None
    return {
        "items": recent,
        "latest": latest,
        "source": "岡崎市オープンデータ（人口・世帯数等）",
    }


def _parse_nearby_population(packages):
    data = _population_for_areas(
        packages, NEARBY_AREA_NAMES,
        note="康生通東周辺の町字（完全一致）を合算。商圏の厳密な徒歩圏とは異なります。",
    )
    if data.get("is_dummy"):
        return {"note": data.get("note", "データなし")}

    pkg = next(p for p in packages if "地域・年齢別人口" in p["title"])
    df = pd.read_csv(pkg["resources"][0]["url"])
    latest_date = data["date"]
    dpl = df[df["調査年月日"] == latest_date]
    near = dpl[dpl["地域名"].isin(NEARBY_AREA_NAMES)].sort_values("総人口", ascending=False)
    areas = [
        {"name": str(r["地域名"]), "population": int(r["総人口"]), "households": int(r["世帯数"])}
        for _, r in near.iterrows()
    ]
    return {
        "date": data["date"],
        "areas": areas,
        "area_count": data["area_count"],
        "population": data["population"],
        "households": data["households"],
        "age_structure": data["age_structure"],
        "source": data["source"],
        "note": data["note"],
    }


def _parse_city_food_kinds(packages):
    pkg = next((p for p in packages if "食品" in p["title"]), None)
    if pkg is None:
        return []

    df = pd.read_csv(pkg["resources"][0]["url"])
    df = df[df["廃業年月日"].isna()]
    counts = df["営業の種類"].value_counts()
    total = int(counts.sum()) or 1
    top = []
    for kind, n in counts.head(12).items():
        top.append({
            "kind": str(kind), "count": int(n),
            "pct": round(100 * n / total, 1),
        })
    return top


def _parse_industry_share():
    """市内総生産の産業構成（卸売・小売、宿泊・飲食等）。"""
    df = _fetch_okazaki_xls("syotoku04.xls")
    targets = {
        "６\u3000卸売・小売業": "卸売・小売業",
        "８\u3000宿泊・飲食サービス業": "宿泊・飲食サービス",
        "３\u3000製造業": "製造業",
        "11\u3000不動産業": "不動産業",
    }
    items = []
    for i in range(len(df)):
        name = str(df.iloc[i, 1]).strip() if pd.notna(df.iloc[i, 1]) else ""
        if name not in targets:
            continue
        val = df.iloc[i, 4]
        share = df.iloc[i, 8]
        if pd.notna(val) and pd.notna(share):
            try:
                items.append({
                    "industry": targets[name],
                    "value_m": int(float(val)),
                    "share_pct": round(float(share), 1),
                })
            except (TypeError, ValueError):
                pass
    items.sort(key=lambda x: -x["share_pct"])
    return {
        "items": items,
        "year_label": "令和4年度",
        "source": "岡崎市統計（syotoku04.xls）",
    }


def build_consumer(packages):
    log("消費者傾向データを集計...")

    # --- 市民意識調査 ---
    survey_pkg = next((p for p in packages if "市民意識" in p["title"]), None)
    survey = {"note": "市民意識調査データが見つかりません"}
    if survey_pkg:
        csv_url = next(r["url"] for r in survey_pkg["resources"] if r.get("format") == "CSV")
        sdf = pd.read_csv(csv_url, encoding="utf-8-sig", low_memory=False)
        n = len(sdf)

        q14_sat = sdf["問14．商業・観光_満足度"].dropna()
        q14_imp = sdf["問14．商業・観光_重要度"].dropna()
        sat_total = len(q14_sat) or 1
        imp_total = len(q14_imp) or 1

        def sat_bucket(series, total):
            high = int(((series >= 7) & (series <= 10)).sum())
            mid = int(((series >= 5) & (series <= 6)).sum())
            low = int(((series >= 1) & (series <= 4)).sum())
            return [
                {"label": "満足（7〜10）", "count": high, "pct": round(100 * high / total, 1)},
                {"label": "どちらかと言えば満足（5〜6）", "count": mid, "pct": round(100 * mid / total, 1)},
                {"label": "不満（1〜4）", "count": low, "pct": round(100 * low / total, 1)},
            ]

        shopping_conv = int(sdf["問19_8．買い物や飲食が便利である"].notna().sum())
        online_shop = int(sdf["問33_5．オンラインショッピング"].notna().sum())
        transport = []
        for col in sdf.columns:
            if col.startswith("問26_"):
                label = col.split("．", 1)[-1]
                cnt = int(sdf[col].notna().sum())
                transport.append({
                    "label": label, "count": cnt,
                    "pct": round(100 * cnt / n, 1),
                })
        transport.sort(key=lambda x: -x["count"])

        q36 = _survey_value_counts(sdf["問36．あなたは、岡崎市内で休日を過ごすことが多いですか。（○は１つ）"], SURVEY_FREQ_LABELS)
        q37 = _survey_value_counts(sdf["問37．あなたは、仕事や学校以外で中心市街地（東岡崎駅・康生地区）周辺に出かけることが多いですか。（○は１つ）"], SURVEY_FREQ_LABELS)

        holiday_often = sum(x["count"] for x in q36 if x["code"] <= 2)
        center_often = sum(x["count"] for x in q37 if x["code"] <= 2)

        survey = {
            "year": "令和6年度",
            "respondents": n,
            "source": "岡崎市オープンデータ（令和6年度市民意識調査）",
            "age_groups": _survey_value_counts(sdf["問２．年齢（○は1つ）"], SURVEY_AGE_LABELS),
            "occupations": _survey_value_counts(sdf["問３．職業（○は1つ）"], SURVEY_JOB_LABELS),
            "commerce_satisfaction": sat_bucket(q14_sat, sat_total),
            "commerce_importance": sat_bucket(q14_imp, imp_total),
            "commerce_sat_avg": round(float(q14_sat[q14_sat > 0].mean()), 2) if len(q14_sat) else None,
            "shopping_convenience": {
                "count": shopping_conv,
                "pct": round(100 * shopping_conv / n, 1),
                "label": "買い物・飲食の便利さを「住みよさ」と回答",
            },
            "online_shopping": {
                "count": online_shop,
                "pct": round(100 * online_shop / n, 1),
                "label": "スマホでオンラインショッピングを利用",
            },
            "holiday_in_city": q36,
            "holiday_in_city_often_pct": round(100 * holiday_often / n, 1),
            "center_city_visit": q37,
            "center_city_visit_often_pct": round(100 * center_often / n, 1),
            "transport_modes": transport[:7],
        }

    # --- 人口・所得・食品 ---
    nearby_pop = _parse_nearby_population(packages)
    city_trend = _parse_city_population_trend(packages)
    food_kinds = _parse_city_food_kinds(packages)

    income_trend = income_breakdown = industry_share = None
    income_note = None
    try:
        income_trend = _parse_income_trend()
        income_breakdown = _parse_household_income_breakdown()
        industry_share = _parse_industry_share()
    except Exception as e:
        income_note = f"岡崎市統計ページからの所得データ取得に失敗: {e}"
        log(f"  所得データ: {income_note}")

    log(f"  市民意識調査: {survey.get('respondents', 0)}件")
    log(f"  康生周辺人口: {nearby_pop.get('population', '—')}人")
    log(f"  市内食品営業種別: {len(food_kinds)}カテゴリ")

    return {
        "survey": survey,
        "nearby_population": nearby_pop,
        "city_population_trend": city_trend,
        "city_food_kinds": food_kinds,
        "income_trend": income_trend,
        "income_breakdown": income_breakdown,
        "industry_share": industry_share,
        "income_note": income_note,
        "summary_note": "市民意識調査・人口・食品営業許可は岡崎市オープンデータ、"
                        "所得・産業構成は岡崎市統計ページから取得。"
                        "調査は全市サンプルのため、康生通り通行者そのものを直接代表するものではありません。",
    }


# ---------------------------------------------------------------------------
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--months", type=int, default=0,
                    help="人流集計に使う月数（0=公開されている全期間、既定）")
    ap.add_argument("--refilter-local", action="store_true",
                    help="data/*.json から2020年人流を除外して data.js を再生成（BODIK再取得なし）")
    ap.add_argument("--rent-only", action="store_true",
                    help="地価公示だけ取得して rent を更新（BODIK再取得なし）")
    args = ap.parse_args()

    DATA_DIR.mkdir(parents=True, exist_ok=True)
    JS_DIR.mkdir(parents=True, exist_ok=True)

    if args.refilter_local:
        refilter_local_data()
        return

    if args.rent_only:
        merge_rent_only()
        return

    log("BODIK パッケージ一覧を取得...")
    packages = fetch_package_list()

    log("人流データを集計...")
    peopleflow, cameras = build_peopleflow(packages, args.months)

    log("周辺イベントを抽出...")
    events = build_events(packages, peopleflow)

    log("周辺店舗（食品営業許可）を集計...")
    geocode_cache = {}
    stores = build_stores(packages, geocode_cache)

    log("商圏人口・賃料・将来性を作成...")
    demographics = build_demographics(packages)
    rent = build_rent()
    future = build_future()

    log("消費者傾向を集計...")
    consumer = build_consumer(packages)

    jst = timezone(timedelta(hours=9))
    payload = {
        "meta": {
            "building": BUILDING,
            "generated_at": datetime.now(jst).strftime("%Y-%m-%d %H:%M"),
            "source": "岡崎市オープンデータ（BODIK） / 国土地理院ジオコーダ / 岡崎市統計",
            "target_street": TARGET_CAMERA_GROUP,
            "cameras": cameras,
            "notes": {
                "peopleflow": "康生通りカメラ（AIカメラ人流実証実験）。1日あたり平均に換算。"
                                  f"{PEOPLEFLOW_MIN_YM[:4]}年以前は欠損補間が多いため除外。欠損は中央値補間。",
                "events": "岡崎市イベント一覧から物件周辺のイベントを抽出。開催日の通行量と押し上げ効果を算出。",
                "stores": "食品等営業許可・届出一覧を国土地理院ジオコーダで座標化。飲食系中心のため全業種は網羅しない。",
                "consumer": "令和6年度市民意識調査・地域人口・食品営業許可・岡崎市統計（所得）から集計。",
                "demographics": "地域・年齢別人口（町字合算）と市民意識調査から商圏人口を概算。",
                "dummy": "賃料相場のみダミー。地価は国土数値情報 地価公示（最寄り商業地標準地）。",
            },
        },
        "peopleflow": peopleflow,
        "events": events,
        "stores": stores,
        "demographics": demographics,
        "rent": rent,
        "future": future,
        "consumer": consumer,
    }

    # data/*.json（参照用）
    for key, val in payload.items():
        (DATA_DIR / f"{key}.json").write_text(
            json.dumps(val, ensure_ascii=False, indent=2), encoding="utf-8"
        )

    # site/js/data.js（ブラウザがそのまま読める）
    js = "window.DASHBOARD_DATA = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n"
    (JS_DIR / "data.js").write_text(js, encoding="utf-8")

    log("\n完了:")
    log(f"  人流 1日平均通行量: {peopleflow['total_per_day']}")
    log(f"  周辺店舗: {len(stores['points'])}件")
    log(f"  出力: {DATA_DIR} と {JS_DIR / 'data.js'}")


if __name__ == "__main__":
    main()
