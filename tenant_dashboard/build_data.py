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
import json
import math
import re
import time
from datetime import datetime, timezone, timedelta
from pathlib import Path

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

    jst = timezone(timedelta(hours=9))
    payload = {
        "meta": {
            "building": BUILDING,
            "generated_at": datetime.now(jst).strftime("%Y-%m-%d %H:%M"),
            "source": "岡崎市オープンデータ（BODIK） / 国土地理院ジオコーダ",
            "target_street": TARGET_CAMERA_GROUP,
            "cameras": cameras,
            "notes": {
                "peopleflow": "康生通りカメラ（AIカメラ人流実証実験）。1日あたり平均に換算。時系列(日/週/月)を含む。欠損は中央値補間。",
                "events": "岡崎市イベント一覧から物件周辺のイベントを抽出。開催日の通行量と押し上げ効果を算出。",
                "stores": "食品等営業許可・届出一覧を国土地理院ジオコーダで座標化。飲食系中心のため全業種は網羅しない。",
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
