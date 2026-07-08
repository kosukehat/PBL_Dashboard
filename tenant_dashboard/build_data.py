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
    python build_data.py                # 直近12か月で集計
    python build_data.py --months 6     # 直近6か月で集計（速い）
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

STORE_RADIUS_M = 400  # 周辺店舗として集計する半径

# 集計対象にする周辺の町名（ジオコーダ呼び出し数を絞るための一次フィルタ）
NEARBY_TOWN_KEYWORDS = [
    "康生", "連尺", "籠田", "伝馬", "材木", "松本町", "祐金", "元能見",
    "十王", "花崗", "六供", "三清", "本町", "梅園", "板屋",
]

# 地域・年齢別人口で康生周辺として集計する町名（完全一致）
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


def haversine_m(lat1, lon1, lat2, lon2):
    r = 6371000.0
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dp = math.radians(lat2 - lat1)
    dl = math.radians(lon2 - lon1)
    a = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * r * math.asin(math.sqrt(a))


def fetch_package_list():
    url = f"https://data.bodik.jp/api/3/action/package_search?q=organization:{ORG}&rows=200"
    return requests.get(url, timeout=60).json()["result"]["results"]


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
        df = pd.read_csv(r["url"])
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


# ---------------------------------------------------------------------------
# 2. 周辺店舗（食品営業許可）
# ---------------------------------------------------------------------------
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
        return "飲食店"
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
# 3. ダミーデータ（オープンデータで簡単に取れないもの）
# ---------------------------------------------------------------------------
def build_dummy_demographics():
    return {
        "is_dummy": True,
        "source_hint": "本番では国勢調査 小地域集計（e-Stat）から徒歩圏の町丁別人口を集計",
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
        "daytime_night_ratio": 1.35,
    }


def build_dummy_rent():
    return {
        "is_dummy": True,
        "source_hint": "本番では不動産情報ライブラリ（地価公示・取引価格）や周辺募集賃料から算出",
        "floor1_tsubo_yen": [10000, 15000],
        "floor2_tsubo_yen": [5000, 9000],
        "this_building_tsubo_yen": 12000,
        "land_price_yen_sqm": 155000,
    }


def build_future():
    return {
        "is_dummy": True,
        "items": [
            {"label": "都市機能誘導区域", "value": "対象エリア内", "note": "立地適正化計画"},
            {"label": "居住誘導区域", "value": "対象エリア内", "note": "立地適正化計画"},
            {"label": "QURUWA戦略", "value": "回遊動線上の第2目的地", "note": "公共空間活用・回遊性向上"},
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
# 4. 業種チャンススコア（人流・競合から算出するヒューリスティック）
# ---------------------------------------------------------------------------
def build_scores(peopleflow, stores):
    # 実データから使う指標
    age = {a["age"]: a["pct"] for a in peopleflow["by_age"]}
    young = age.get("Age20", 0) + age.get("Age30", 0)
    family = age.get("Age00", 0) + age.get("Age40", 0)
    senior = age.get("Age60", 0) + age.get("Age70", 0)
    female = next((g["pct"] for g in peopleflow["by_gender"] if g["gender"] == 1), 0)

    # 時間帯の重み（昼/夕方/夜の通行量割合）
    by_hour = {h["hour"]: h["count"] for h in peopleflow["by_hour"]}
    total_h = sum(by_hour.values()) or 1
    lunch = sum(by_hour.get(h, 0) for h in range(11, 15)) / total_h
    evening = sum(by_hour.get(h, 0) for h in range(16, 19)) / total_h
    night = sum(by_hour.get(h, 0) for h in range(18, 22)) / total_h

    cat_count = {c["category"]: c["count"] for c in stores["category_counts"]}

    def competition_score(cats):
        n = sum(cat_count.get(c, 0) for c in cats)
        # 競合が少ないほど高スコア
        return max(20, 100 - n * 8)

    def clamp(v):
        return int(max(0, min(100, round(v))))

    industries = [
        {
            "industry": "カフェ・軽食",
            "people_fit": clamp(50 + young * 0.8 + female * 0.4 + lunch * 60),
            "competition": competition_score(["カフェ・喫茶"]),
            "facility_fit": 85, "profitability": 75,
            "reason": "回遊・休憩・待ち合わせ需要と相性。20〜30代と女性の通行が下支え。",
        },
        {
            "industry": "スイーツ・ベーカリー",
            "people_fit": clamp(50 + female * 0.6 + family * 0.5 + evening * 50),
            "competition": competition_score(["スイーツ・ベーカリー"]),
            "facility_fit": 80, "profitability": 72,
            "reason": "散策・手土産・休日需要に合う。公園回遊動線上で歩き買い需要。",
        },
        {
            "industry": "テイクアウト惣菜・弁当",
            "people_fit": clamp(45 + lunch * 70 + evening * 40 + senior * 0.3),
            "competition": competition_score(["惣菜・弁当"]),
            "facility_fit": 70, "profitability": 74,
            "reason": "昼・夕方の通行と近隣住民・帰宅動線を拾える。",
        },
        {
            "industry": "居酒屋・カフェバー",
            "people_fit": clamp(40 + young * 0.7 + night * 70),
            "competition": competition_score(["居酒屋・バー"]),
            "facility_fit": 65, "profitability": 70,
            "reason": "夜間の回遊・食事需要。ただし周辺に競合が多い点に注意。",
        },
        {
            "industry": "岡崎土産・地物物販",
            "people_fit": clamp(45 + senior * 0.5 + family * 0.3),
            "competition": competition_score(["物販・食品販売"]),
            "facility_fit": 78, "profitability": 62,
            "reason": "岡崎城・城下町の観光/散策客に地元商品を訴求しやすい。",
        },
    ]

    for it in industries:
        it["total"] = int(round(
            it["people_fit"] * 0.35
            + it["competition"] * 0.25
            + it["facility_fit"] * 0.20
            + it["profitability"] * 0.20
        ))
    industries.sort(key=lambda x: -x["total"])
    for i, it in enumerate(industries):
        it["rank"] = i + 1

    return {
        "items": industries,
        "method": "総合 = 人流相性×0.35 + 競合の少なさ×0.25 + 近隣施設相性×0.20 + 収益性×0.20。"
                  "人流相性は実データ（年代・性別・時間帯構成）から算出、競合は半径内店舗数から算出。"
                  "近隣施設相性・収益性は暫定値（ダミー）。",
        "is_partial_dummy": True,
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
    pkg = next((p for p in packages if "地域・年齢別人口" in p["title"]), None)
    if pkg is None:
        return {"note": "地域・年齢別人口データが見つかりません"}

    df = pd.read_csv(pkg["resources"][0]["url"])
    latest_date = sorted(df["調査年月日"].unique())[-1]
    dpl = df[df["調査年月日"] == latest_date]
    near = dpl[dpl["地域名"].isin(NEARBY_AREA_NAMES)].copy()

    pop = int(pd.to_numeric(near["総人口"], errors="coerce").sum())
    households = int(pd.to_numeric(near["世帯数"], errors="coerce").sum())

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
        n = int(sum(pd.to_numeric(near[c], errors="coerce").fillna(0).sum() for c in cols))
        age_structure.append({
            "label": label, "count": n,
            "pct": round(100 * n / max(pop, 1), 1),
        })

    areas = [
        {"name": str(r["地域名"]), "population": int(r["総人口"]), "households": int(r["世帯数"])}
        for _, r in near.sort_values("総人口", ascending=False).iterrows()
    ]
    return {
        "date": latest_date,
        "areas": areas,
        "area_count": len(areas),
        "population": pop,
        "households": households,
        "age_structure": age_structure,
        "source": "岡崎市オープンデータ（地域・年齢別人口）",
        "note": "康生通東周辺の町字（完全一致）を合算。商圏の厳密な徒歩圏とは異なります。",
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
    ap.add_argument("--months", type=int, default=24, help="人流集計に使う直近月数（時系列の期間）")
    args = ap.parse_args()

    DATA_DIR.mkdir(parents=True, exist_ok=True)
    JS_DIR.mkdir(parents=True, exist_ok=True)

    log("BODIK パッケージ一覧を取得...")
    packages = fetch_package_list()

    log("人流データを集計...")
    peopleflow, cameras = build_peopleflow(packages, args.months)

    log("周辺イベントを抽出...")
    events = build_events(packages, peopleflow)

    log("周辺店舗（食品営業許可）を集計...")
    geocode_cache = {}
    stores = build_stores(packages, geocode_cache)

    log("商圏人口・賃料・将来性（ダミー）を作成...")
    demographics = build_dummy_demographics()
    rent = build_dummy_rent()
    future = build_future()

    log("業種チャンススコアを算出...")
    scores = build_scores(peopleflow, stores)

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
                "peopleflow": "康生通りカメラ（AIカメラ人流実証実験）。1日あたり平均に換算。時系列(日/週/月)を含む。欠損は中央値補間。",
                "events": "岡崎市イベント一覧から物件周辺のイベントを抽出。開催日の通行量と押し上げ効果を算出。",
                "stores": "食品等営業許可・届出一覧を国土地理院ジオコーダで座標化。飲食系中心のため全業種は網羅しない。",
                "consumer": "令和6年度市民意識調査・地域人口・食品営業許可・岡崎市統計（所得）から集計。",
                "dummy": "商圏人口・賃料相場・都市計画/将来性はダミー値（画面に明記）。",
            },
        },
        "peopleflow": peopleflow,
        "events": events,
        "stores": stores,
        "demographics": demographics,
        "rent": rent,
        "future": future,
        "scores": scores,
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
