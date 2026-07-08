import pandas as pd
import requests

# df.py と同じソース（BODIK）の岡崎市オープンデータから「人流データ」を取得する。
# 岡崎市の組織コード: 232025
url = "https://data.bodik.jp/api/3/action/package_search?q=organization:232025&rows=200"
res = requests.get(url)
data = res.json()

# タイトルに「人流」を含むデータセットを探す
jinryu = None
for pkg in data['result']['results']:
    if '人流' in pkg['title']:
        jinryu = pkg
        break

if jinryu is None:
    raise SystemExit("人流データセットが見つかりませんでした")

print("=" * 60)
print("データセット名:", jinryu['title'])
print("=" * 60)
print("概要:")
print(jinryu.get('notes', ''))
print()

# リソース一覧（月別CSV + カメラ設置場所CSV）
resources = jinryu['resources']
print(f"リソース数: {len(resources)}")
print("-" * 60)
for i, r in enumerate(resources):
    print(f"{i:3d} | {r['format']:4s} | {r.get('description', r['name'])}")
print("-" * 60)
print()

# 月別の人流データCSVを1つ読み込んで、どのような項目があるかを確認する
# （description に「人流データ」を含み、名前が peopleflow のものを最新側から選ぶ）
sample = None
for r in reversed(resources):
    if r['format'] == 'CSV' and 'peopleflow' in r['name']:
        sample = r
        break

if sample is not None:
    print("サンプルとして読み込むリソース:", sample.get('description', sample['name']))
    print("url:", sample['url'])
    print()
    df = pd.read_csv(sample['url'])
    print("行数・列数:", df.shape)
    print()

    # 各項目（カラム）の説明
    col_desc = {
        'date': '日時',
        'year': '年',
        'month': '月',
        'day': '日',
        'hour': '時間帯(0-23)',
        'camera_id': 'カメラID',
        'Gender': '性別(男性=0, 女性=1, 不明=2)',
        'Input': '入場数',
        'Output': '退場数',
        'Age00': '10代未満の検知数',
        'Age10': '10代の検知数',
        'Age20': '20代の検知数',
        'Age30': '30代の検知数',
        'Age40': '40代の検知数',
        'Age50': '50代の検知数',
        'Age60': '60代の検知数',
        'Age70': '70代以上の検知数',
        'dow': '曜日番号(月=0, 火=1, 水=2, 木=3, 金=4, 土=5, 日=6)',
        'is_holiday': '休日フラグ(平日=0, 休日=1)',
        'NaN': '欠損フラグ(中央値で補完した場合は1)',
        'NoP': '総検知数',
    }
    print("項目一覧:")
    for c in df.columns:
        print(f"  {c:12s} : {col_desc.get(c, '(説明なし)')}")
    print()

    print("先頭5行:")
    print(df.head().to_string())
