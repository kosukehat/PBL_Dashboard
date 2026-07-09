window.DASHBOARD_DATA = {
  "meta": {
    "building": {
      "address": "愛知県岡崎市康生通東一丁目16番地",
      "lat": 34.958324,
      "lon": 137.164444
    },
    "generated_at": "2026-07-09 10:16",
    "source": "岡崎市オープンデータ（BODIK） / 国土地理院ジオコーダ / 岡崎市統計",
    "target_street": "康生通り",
    "cameras": [
      {
        "camera_id": 0,
        "name": "東康生通り１",
        "lat": 34.95883085969448,
        "lon": 137.1663072048676
      },
      {
        "camera_id": 1,
        "name": "東康生通り２",
        "lat": 34.95879047833999,
        "lon": 137.16603136019216
      },
      {
        "camera_id": 2,
        "name": "東康生通り３",
        "lat": 34.95862271772619,
        "lon": 137.16546321485032
      },
      {
        "camera_id": 3,
        "name": "東康生通り４",
        "lat": 34.95862271772619,
        "lon": 137.1651632148503
      }
    ],
    "notes": {
      "peopleflow": "康生通りカメラ（AIカメラ人流実証実験）。1日あたり平均に換算。時系列(日/週/月)を含む。欠損は中央値補間。",
      "events": "岡崎市イベント一覧から物件周辺のイベントを抽出。開催日の通行量と押し上げ効果を算出。",
      "stores": "食品等営業許可・届出一覧を国土地理院ジオコーダで座標化。飲食系中心のため全業種は網羅しない。",
      "consumer": "令和6年度市民意識調査・地域人口・食品営業許可・岡崎市統計（所得）から集計。",
      "demographics": "地域・年齢別人口（町字合算）と市民意識調査から商圏人口を概算。",
      "dummy": "賃料相場・地価のみダミー値（公開データ/APIが利用不可のため）。"
    }
  },
  "peopleflow": {
    "total_per_day": 4400.0,
    "by_hour": [
      {
        "hour": 0,
        "count": 13.6
      },
      {
        "hour": 1,
        "count": 7.9
      },
      {
        "hour": 2,
        "count": 5.6
      },
      {
        "hour": 3,
        "count": 6.0
      },
      {
        "hour": 4,
        "count": 8.5
      },
      {
        "hour": 5,
        "count": 18.0
      },
      {
        "hour": 6,
        "count": 38.0
      },
      {
        "hour": 7,
        "count": 88.0
      },
      {
        "hour": 8,
        "count": 141.6
      },
      {
        "hour": 9,
        "count": 152.6
      },
      {
        "hour": 10,
        "count": 275.2
      },
      {
        "hour": 11,
        "count": 418.6
      },
      {
        "hour": 12,
        "count": 467.4
      },
      {
        "hour": 13,
        "count": 457.7
      },
      {
        "hour": 14,
        "count": 451.3
      },
      {
        "hour": 15,
        "count": 439.0
      },
      {
        "hour": 16,
        "count": 401.8
      },
      {
        "hour": 17,
        "count": 356.2
      },
      {
        "hour": 18,
        "count": 259.8
      },
      {
        "hour": 19,
        "count": 177.7
      },
      {
        "hour": 20,
        "count": 94.0
      },
      {
        "hour": 21,
        "count": 63.3
      },
      {
        "hour": 22,
        "count": 36.9
      },
      {
        "hour": 23,
        "count": 21.3
      }
    ],
    "by_dow": [
      {
        "dow": 0,
        "label": "月",
        "count": 559.1
      },
      {
        "dow": 1,
        "label": "火",
        "count": 536.5
      },
      {
        "dow": 2,
        "label": "水",
        "count": 487.3
      },
      {
        "dow": 3,
        "label": "木",
        "count": 528.7
      },
      {
        "dow": 4,
        "label": "金",
        "count": 551.1
      },
      {
        "dow": 5,
        "label": "土",
        "count": 940.1
      },
      {
        "dow": 6,
        "label": "日",
        "count": 797.1
      }
    ],
    "weekday_holiday": [
      {
        "type": "平日",
        "avg_per_day": 3593.5,
        "days": 120
      },
      {
        "type": "休日",
        "avg_per_day": 5986.3,
        "days": 61
      }
    ],
    "by_age": [
      {
        "age": "Age00",
        "label": "10代未満",
        "count": 2.5,
        "pct": 0.2
      },
      {
        "age": "Age10",
        "label": "10代",
        "count": 19.2,
        "pct": 1.8
      },
      {
        "age": "Age20",
        "label": "20代",
        "count": 89.5,
        "pct": 8.4
      },
      {
        "age": "Age30",
        "label": "30代",
        "count": 291.7,
        "pct": 27.4
      },
      {
        "age": "Age40",
        "label": "40代",
        "count": 337.2,
        "pct": 31.6
      },
      {
        "age": "Age50",
        "label": "50代",
        "count": 221.0,
        "pct": 20.7
      },
      {
        "age": "Age60",
        "label": "60代",
        "count": 95.7,
        "pct": 9.0
      },
      {
        "age": "Age70",
        "label": "70代以上",
        "count": 9.6,
        "pct": 0.9
      }
    ],
    "by_gender": [
      {
        "gender": 0,
        "label": "男性",
        "count": 578.4,
        "pct": 13.1
      },
      {
        "gender": 1,
        "label": "女性",
        "count": 549.9,
        "pct": 12.5
      },
      {
        "gender": 2,
        "label": "不明",
        "count": 3271.7,
        "pct": 74.4
      }
    ],
    "by_direction": [
      {
        "camera_id": 0,
        "name": "東康生通り１",
        "in_dir": "公園方面",
        "out_dir": "図書館方面",
        "in": 249.6,
        "out": 221.6,
        "total": 474.5
      },
      {
        "camera_id": 1,
        "name": "東康生通り２",
        "in_dir": "図書館方面",
        "out_dir": "公園方面",
        "in": 557.8,
        "out": 525.1,
        "total": 1083.0
      },
      {
        "camera_id": 2,
        "name": "東康生通り３",
        "in_dir": "図書館方面",
        "out_dir": "公園方面",
        "in": 777.1,
        "out": 669.2,
        "total": 1453.4
      },
      {
        "camera_id": 3,
        "name": "東康生通り４",
        "in_dir": "公園方面",
        "out_dir": "図書館方面",
        "in": 672.9,
        "out": 716.2,
        "total": 1389.0
      }
    ],
    "n_days": 181,
    "months": [
      "202601",
      "202602",
      "202603",
      "202604",
      "202605",
      "202606"
    ],
    "timeseries": {
      "daily": [
        {
          "date": "2026-01-01",
          "count": 3910,
          "dow": 3,
          "is_holiday": 1
        },
        {
          "date": "2026-01-02",
          "count": 2677,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-01-03",
          "count": 5813,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-01-04",
          "count": 4711,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-01-05",
          "count": 4207,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-01-06",
          "count": 4242,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-01-07",
          "count": 3448,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-01-08",
          "count": 3429,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-01-09",
          "count": 3534,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-01-10",
          "count": 6975,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-01-11",
          "count": 4995,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-01-12",
          "count": 4068,
          "dow": 0,
          "is_holiday": 1
        },
        {
          "date": "2026-01-13",
          "count": 3669,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-01-14",
          "count": 2980,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-01-15",
          "count": 3522,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-01-16",
          "count": 3720,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-01-17",
          "count": 7191,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-01-18",
          "count": 5920,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-01-19",
          "count": 3883,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-01-20",
          "count": 3500,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-01-21",
          "count": 3319,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-01-22",
          "count": 3254,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-01-23",
          "count": 3512,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-01-24",
          "count": 5713,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-01-25",
          "count": 4257,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-01-26",
          "count": 3314,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-01-27",
          "count": 3248,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-01-28",
          "count": 3345,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-01-29",
          "count": 3190,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-01-30",
          "count": 3387,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-01-31",
          "count": 5638,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-02-01",
          "count": 4488,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-02-02",
          "count": 3293,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-02-03",
          "count": 3330,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-02-04",
          "count": 3306,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-02-05",
          "count": 2641,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-02-06",
          "count": 3926,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-02-07",
          "count": 6148,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-02-08",
          "count": 3842,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-02-09",
          "count": 3348,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-02-10",
          "count": 3290,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-02-11",
          "count": 3560,
          "dow": 2,
          "is_holiday": 1
        },
        {
          "date": "2026-02-12",
          "count": 3767,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-02-13",
          "count": 3750,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-02-14",
          "count": 6322,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-02-15",
          "count": 5708,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-02-16",
          "count": 3785,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-02-17",
          "count": 3828,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-02-18",
          "count": 3744,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-02-19",
          "count": 3535,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-02-20",
          "count": 3716,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-02-21",
          "count": 7385,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-02-22",
          "count": 7717,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-02-23",
          "count": 6022,
          "dow": 0,
          "is_holiday": 1
        },
        {
          "date": "2026-02-24",
          "count": 3424,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-02-25",
          "count": 3045,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-02-26",
          "count": 4630,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-02-27",
          "count": 3909,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-02-28",
          "count": 6356,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-03-01",
          "count": 6760,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-03-02",
          "count": 4312,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-03-03",
          "count": 3439,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-03-04",
          "count": 4077,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-03-05",
          "count": 4341,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-03-06",
          "count": 4157,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-03-07",
          "count": 6807,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-03-08",
          "count": 5238,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-03-09",
          "count": 3916,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-03-10",
          "count": 4809,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-03-11",
          "count": 4070,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-03-12",
          "count": 4186,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-03-13",
          "count": 4089,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-03-14",
          "count": 7579,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-03-15",
          "count": 7052,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-03-16",
          "count": 4620,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-03-17",
          "count": 5113,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-03-18",
          "count": 3721,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-03-19",
          "count": 4194,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-03-20",
          "count": 6959,
          "dow": 4,
          "is_holiday": 1
        },
        {
          "date": "2026-03-21",
          "count": 8438,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-03-22",
          "count": 6037,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-03-23",
          "count": 4299,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-03-24",
          "count": 4462,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-03-25",
          "count": 3184,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-03-26",
          "count": 4877,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-03-27",
          "count": 5077,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-03-28",
          "count": 8925,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-03-29",
          "count": 8710,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-03-30",
          "count": 4859,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-03-31",
          "count": 2906,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-04-01",
          "count": 2770,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-04-02",
          "count": 4092,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-04-03",
          "count": 4509,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-04-04",
          "count": 5472,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-04-05",
          "count": 8790,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-04-06",
          "count": 3617,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-04-07",
          "count": 3035,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-04-08",
          "count": 2928,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-04-09",
          "count": 3078,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-04-10",
          "count": 4057,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-04-11",
          "count": 6624,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-04-12",
          "count": 5339,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-04-13",
          "count": 3494,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-04-14",
          "count": 3619,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-04-15",
          "count": 4314,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-04-16",
          "count": 3668,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-04-17",
          "count": 3776,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-04-18",
          "count": 6977,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-04-19",
          "count": 5062,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-04-20",
          "count": 3829,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-04-21",
          "count": 3659,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-04-22",
          "count": 3316,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-04-23",
          "count": 3777,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-04-24",
          "count": 3682,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-04-25",
          "count": 6708,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-04-26",
          "count": 5318,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-04-27",
          "count": 3341,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-04-28",
          "count": 3752,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-04-29",
          "count": 5149,
          "dow": 2,
          "is_holiday": 1
        },
        {
          "date": "2026-04-30",
          "count": 4722,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-05-01",
          "count": 3953,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-05-02",
          "count": 7677,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-05-03",
          "count": 7162,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-05-04",
          "count": 7971,
          "dow": 0,
          "is_holiday": 1
        },
        {
          "date": "2026-05-05",
          "count": 7166,
          "dow": 1,
          "is_holiday": 1
        },
        {
          "date": "2026-05-06",
          "count": 5931,
          "dow": 2,
          "is_holiday": 1
        },
        {
          "date": "2026-05-07",
          "count": 3684,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-05-08",
          "count": 3522,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-05-09",
          "count": 6518,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-05-10",
          "count": 6605,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-05-11",
          "count": 3492,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-05-12",
          "count": 3743,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-05-13",
          "count": 2945,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-05-14",
          "count": 3490,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-05-15",
          "count": 3620,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-05-16",
          "count": 6495,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-05-17",
          "count": 4671,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-05-18",
          "count": 3351,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-05-19",
          "count": 3286,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-05-20",
          "count": 3101,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-05-21",
          "count": 3911,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-05-22",
          "count": 3208,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-05-23",
          "count": 6547,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-05-24",
          "count": 5173,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-05-25",
          "count": 3421,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-05-26",
          "count": 3435,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-05-27",
          "count": 2968,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-05-28",
          "count": 2736,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-05-29",
          "count": 3646,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-05-30",
          "count": 6207,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-05-31",
          "count": 4440,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-06-01",
          "count": 3236,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-06-02",
          "count": 3616,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-06-03",
          "count": 2624,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-06-04",
          "count": 3756,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-06-05",
          "count": 2682,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-06-06",
          "count": 6304,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-06-07",
          "count": 4863,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-06-08",
          "count": 3155,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-06-09",
          "count": 4195,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-06-10",
          "count": 3052,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-06-11",
          "count": 3156,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-06-12",
          "count": 3101,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-06-13",
          "count": 6134,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-06-14",
          "count": 4025,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-06-15",
          "count": 2950,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-06-16",
          "count": 3058,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-06-17",
          "count": 3370,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-06-18",
          "count": 2736,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-06-19",
          "count": 4288,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-06-20",
          "count": 4917,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-06-21",
          "count": 3994,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-06-22",
          "count": 2808,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-06-23",
          "count": 2770,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2026-06-24",
          "count": 3933,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2026-06-25",
          "count": 3416,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2026-06-26",
          "count": 3300,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2026-06-27",
          "count": 4282,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2026-06-28",
          "count": 3402,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2026-06-29",
          "count": 2612,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2026-06-30",
          "count": 2508,
          "dow": 1,
          "is_holiday": 0
        }
      ],
      "weekly": [
        {
          "week_start": "2025-12-29",
          "count": 17111,
          "days": 4,
          "avg": 4278
        },
        {
          "week_start": "2026-01-05",
          "count": 30830,
          "days": 7,
          "avg": 4404
        },
        {
          "week_start": "2026-01-12",
          "count": 31070,
          "days": 7,
          "avg": 4439
        },
        {
          "week_start": "2026-01-19",
          "count": 27438,
          "days": 7,
          "avg": 3920
        },
        {
          "week_start": "2026-01-26",
          "count": 26610,
          "days": 7,
          "avg": 3801
        },
        {
          "week_start": "2026-02-02",
          "count": 26486,
          "days": 7,
          "avg": 3784
        },
        {
          "week_start": "2026-02-09",
          "count": 29745,
          "days": 7,
          "avg": 4249
        },
        {
          "week_start": "2026-02-16",
          "count": 33710,
          "days": 7,
          "avg": 4816
        },
        {
          "week_start": "2026-02-23",
          "count": 34146,
          "days": 7,
          "avg": 4878
        },
        {
          "week_start": "2026-03-02",
          "count": 32371,
          "days": 7,
          "avg": 4624
        },
        {
          "week_start": "2026-03-09",
          "count": 35701,
          "days": 7,
          "avg": 5100
        },
        {
          "week_start": "2026-03-16",
          "count": 39082,
          "days": 7,
          "avg": 5583
        },
        {
          "week_start": "2026-03-23",
          "count": 39534,
          "days": 7,
          "avg": 5648
        },
        {
          "week_start": "2026-03-30",
          "count": 33398,
          "days": 7,
          "avg": 4771
        },
        {
          "week_start": "2026-04-06",
          "count": 28678,
          "days": 7,
          "avg": 4097
        },
        {
          "week_start": "2026-04-13",
          "count": 30910,
          "days": 7,
          "avg": 4416
        },
        {
          "week_start": "2026-04-20",
          "count": 30289,
          "days": 7,
          "avg": 4327
        },
        {
          "week_start": "2026-04-27",
          "count": 35756,
          "days": 7,
          "avg": 5108
        },
        {
          "week_start": "2026-05-04",
          "count": 41397,
          "days": 7,
          "avg": 5914
        },
        {
          "week_start": "2026-05-11",
          "count": 28456,
          "days": 7,
          "avg": 4065
        },
        {
          "week_start": "2026-05-18",
          "count": 28577,
          "days": 7,
          "avg": 4082
        },
        {
          "week_start": "2026-05-25",
          "count": 26853,
          "days": 7,
          "avg": 3836
        },
        {
          "week_start": "2026-06-01",
          "count": 27081,
          "days": 7,
          "avg": 3869
        },
        {
          "week_start": "2026-06-08",
          "count": 26818,
          "days": 7,
          "avg": 3831
        },
        {
          "week_start": "2026-06-15",
          "count": 25313,
          "days": 7,
          "avg": 3616
        },
        {
          "week_start": "2026-06-22",
          "count": 23911,
          "days": 7,
          "avg": 3416
        },
        {
          "week_start": "2026-06-29",
          "count": 5120,
          "days": 2,
          "avg": 2560
        }
      ],
      "monthly": [
        {
          "ym": "2026-01",
          "count": 128571,
          "days": 31,
          "avg": 4147
        },
        {
          "ym": "2026-02",
          "count": 121815,
          "days": 28,
          "avg": 4351
        },
        {
          "ym": "2026-03",
          "count": 161213,
          "days": 31,
          "avg": 5200
        },
        {
          "ym": "2026-04",
          "count": 132474,
          "days": 30,
          "avg": 4416
        },
        {
          "ym": "2026-05",
          "count": 144075,
          "days": 31,
          "avg": 4648
        },
        {
          "ym": "2026-06",
          "count": 108243,
          "days": 30,
          "avg": 3608
        }
      ]
    },
    "dow_median": {
      "0": 3556,
      "1": 3558,
      "2": 3319,
      "3": 3676,
      "4": 3718,
      "5": 6506,
      "6": 5206
    },
    "monthly_breakdown": {
      "2026-01": {
        "hour": [
          315.0,
          220.0,
          148.0,
          180.0,
          156.0,
          402.0,
          1023.0,
          2663.0,
          4757.0,
          5156.0,
          8758.0,
          12809.0,
          14093.0,
          13897.0,
          13835.0,
          12742.0,
          10892.0,
          9443.0,
          6932.0,
          4457.0,
          2578.0,
          1706.0,
          876.0,
          533.0
        ],
        "age": [
          92.0,
          562.0,
          2064.0,
          6969.0,
          8782.0,
          6121.0,
          2798.0,
          207.0
        ],
        "gender": [
          14657.0,
          14813.0,
          99101.0
        ],
        "dir": {
          "0": {
            "in": 9802.0,
            "out": 8528.0,
            "total": 18405.0
          },
          "1": {
            "in": 15013.0,
            "out": 13069.0,
            "total": 28107.0
          },
          "2": {
            "in": 24313.0,
            "out": 20928.0,
            "total": 45462.0
          },
          "3": {
            "in": 18242.0,
            "out": 18355.0,
            "total": 36597.0
          }
        },
        "total": 128571.0,
        "days": 31
      },
      "2026-02": {
        "hour": [
          281.0,
          123.0,
          93.0,
          111.0,
          130.0,
          363.0,
          849.0,
          2207.0,
          3566.0,
          4011.0,
          7538.0,
          12078.0,
          13591.0,
          13337.0,
          12909.0,
          12694.0,
          12100.0,
          9747.0,
          6608.0,
          4472.0,
          2211.0,
          1475.0,
          875.0,
          446.0
        ],
        "age": [
          79.0,
          511.0,
          2354.0,
          8172.0,
          8894.0,
          5512.0,
          2210.0,
          170.0
        ],
        "gender": [
          14723.0,
          14785.0,
          92307.0
        ],
        "dir": {
          "0": {
            "in": 7102.0,
            "out": 5638.0,
            "total": 12800.0
          },
          "1": {
            "in": 15072.0,
            "out": 12256.0,
            "total": 27328.0
          },
          "2": {
            "in": 21986.0,
            "out": 18924.0,
            "total": 41110.0
          },
          "3": {
            "in": 19597.0,
            "out": 20980.0,
            "total": 40577.0
          }
        },
        "total": 121815.0,
        "days": 28
      },
      "2026-03": {
        "hour": [
          371.0,
          174.0,
          133.0,
          127.0,
          149.0,
          405.0,
          1083.0,
          2390.0,
          4059.0,
          5182.0,
          10102.0,
          15383.0,
          18285.0,
          17636.0,
          18090.0,
          17140.0,
          15597.0,
          13185.0,
          9339.0,
          5991.0,
          2855.0,
          1953.0,
          1041.0,
          543.0
        ],
        "age": [
          96.0,
          745.0,
          3360.0,
          10993.0,
          11472.0,
          6476.0,
          2554.0,
          194.0
        ],
        "gender": [
          18842.0,
          18798.0,
          123573.0
        ],
        "dir": {
          "0": {
            "in": 6920.0,
            "out": 5352.0,
            "total": 12332.0
          },
          "1": {
            "in": 20753.0,
            "out": 19129.0,
            "total": 39882.0
          },
          "2": {
            "in": 23912.0,
            "out": 20598.0,
            "total": 44725.0
          },
          "3": {
            "in": 30876.0,
            "out": 33398.0,
            "total": 64274.0
          }
        },
        "total": 161213.0,
        "days": 31
      },
      "2026-04": {
        "hour": [
          475.0,
          311.0,
          201.0,
          249.0,
          346.0,
          603.0,
          1240.0,
          2843.0,
          4560.0,
          4505.0,
          7996.0,
          12508.0,
          13416.0,
          13031.0,
          12828.0,
          13101.0,
          11804.0,
          10572.0,
          8321.0,
          6004.0,
          3133.0,
          2244.0,
          1348.0,
          835.0
        ],
        "age": [
          68.0,
          634.0,
          2978.0,
          9369.0,
          10637.0,
          7071.0,
          3194.0,
          355.0
        ],
        "gender": [
          18671.0,
          17538.0,
          96265.0
        ],
        "dir": {
          "0": {
            "in": 6710.0,
            "out": 6332.0,
            "total": 13166.0
          },
          "1": {
            "in": 17137.0,
            "out": 17651.0,
            "total": 34788.0
          },
          "2": {
            "in": 22869.0,
            "out": 19710.0,
            "total": 42783.0
          },
          "3": {
            "in": 19707.0,
            "out": 22030.0,
            "total": 41737.0
          }
        },
        "total": 132474.0,
        "days": 30
      },
      "2026-05": {
        "hour": [
          496.0,
          203.0,
          151.0,
          153.0,
          345.0,
          775.0,
          1369.0,
          2808.0,
          4407.0,
          4791.0,
          8924.0,
          13529.0,
          14948.0,
          15074.0,
          14482.0,
          14256.0,
          13203.0,
          12141.0,
          8804.0,
          6072.0,
          3116.0,
          2037.0,
          1240.0,
          751.0
        ],
        "age": [
          67.0,
          559.0,
          3097.0,
          10797.0,
          13381.0,
          9051.0,
          3939.0,
          483.0
        ],
        "gender": [
          22961.0,
          20346.0,
          100768.0
        ],
        "dir": {
          "0": {
            "in": 6217.0,
            "out": 5672.0,
            "total": 11995.0
          },
          "1": {
            "in": 18451.0,
            "out": 18775.0,
            "total": 37226.0
          },
          "2": {
            "in": 25115.0,
            "out": 21588.0,
            "total": 46936.0
          },
          "3": {
            "in": 23368.0,
            "out": 24550.0,
            "total": 47918.0
          }
        },
        "total": 144075.0,
        "days": 31
      },
      "2026-06": {
        "hour": [
          516.0,
          399.0,
          287.0,
          271.0,
          411.0,
          711.0,
          1308.0,
          3022.0,
          4289.0,
          3975.0,
          6490.0,
          9461.0,
          10264.0,
          9861.0,
          9540.0,
          9534.0,
          9122.0,
          9385.0,
          7016.0,
          5174.0,
          3124.0,
          2044.0,
          1295.0,
          744.0
        ],
        "age": [
          50.0,
          473.0,
          2342.0,
          6505.0,
          7874.0,
          5778.0,
          2618.0,
          326.0
        ],
        "gender": [
          14841.0,
          13247.0,
          80155.0
        ],
        "dir": {
          "0": {
            "in": 8419.0,
            "out": 8579.0,
            "total": 17185.0
          },
          "1": {
            "in": 14529.0,
            "out": 14168.0,
            "total": 28697.0
          },
          "2": {
            "in": 22468.0,
            "out": 19380.0,
            "total": 42046.0
          },
          "3": {
            "in": 9998.0,
            "out": 10317.0,
            "total": 20315.0
          }
        },
        "total": 108243.0,
        "days": 30
      }
    },
    "direction_meta": [
      {
        "camera_id": 0,
        "name": "東康生通り１",
        "in_dir": "公園方面",
        "out_dir": "図書館方面"
      },
      {
        "camera_id": 1,
        "name": "東康生通り２",
        "in_dir": "図書館方面",
        "out_dir": "公園方面"
      },
      {
        "camera_id": 2,
        "name": "東康生通り３",
        "in_dir": "図書館方面",
        "out_dir": "公園方面"
      },
      {
        "camera_id": 3,
        "name": "東康生通り４",
        "in_dir": "公園方面",
        "out_dir": "図書館方面"
      }
    ],
    "age_labels": [
      "10代未満",
      "10代",
      "20代",
      "30代",
      "40代",
      "50代",
      "60代",
      "70代以上"
    ],
    "gender_labels": [
      "男性",
      "女性",
      "不明"
    ]
  },
  "events": {
    "items": [
      {
        "name": "乙川ナイトマーケット",
        "start": "2022-11-04",
        "end": "2025-11-22",
        "occurrences": 24,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/event/3437",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "家康行列",
        "start": "2022-11-05",
        "end": "2025-04-06",
        "occurrences": 4,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/event/671",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "2022商工フェア",
        "start": "2022-11-05",
        "end": "2022-11-06",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/300/301/p015333.html",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "ストーンフェスタ岡崎2022",
        "start": "2022-11-05",
        "end": "2022-11-06",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/event/2715",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "第49回岡崎市農林業祭",
        "start": "2022-11-05",
        "end": "2022-11-06",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/300/301/p015333.html",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "FORUM8 Rally Japan PRコーナー",
        "start": "2022-11-05",
        "end": "2022-11-06",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "スポーツ",
        "url": "https://www.city.okazaki.lg.jp/300/301/p015333.html",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "おとがわびより2022秋",
        "start": "2022-11-06",
        "end": "2022-11-06",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/event/3838",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "桜城橋プロジェクションマッピング2022",
        "start": "2022-11-11",
        "end": "2022-11-13",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "芸術＆文化",
        "url": "https://www.okazakinight.jp/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "フォーラムエイト・ラリージャパン2022",
        "start": "2022-11-12",
        "end": "2022-11-12",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "スポーツ",
        "url": "https://okz-rally.com/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "おかざきクルまつり2022",
        "start": "2022-11-13",
        "end": "2022-11-13",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/houdou/p036873.html",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "丘の途中のマーケット",
        "start": "2022-11-19",
        "end": "2025-11-23",
        "occurrences": 10,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://quruwa.jp/news/221107-06/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎市消防団連合観閲式",
        "start": "2022-11-20",
        "end": "2022-11-20",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/houdou/p037075.html",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "クリーン充電モビリティライド",
        "start": "2022-11-23",
        "end": "2022-12-25",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/1550/1551/1008/p037160.html",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "時空を超えて 岡崎城下早馬モビリティ",
        "start": "2022-11-23",
        "end": "2023-02-12",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/1550/1551/1008/p037160.html",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎 泰平の祈り",
        "start": "2022-11-26",
        "end": "2022-11-26",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "芸術＆文化",
        "url": "http://taihei-inori.com/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "おかざき宵まいり",
        "start": "2022-11-26",
        "end": "2025-01-13",
        "occurrences": 3,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/event/4401",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "フィールドディスカバリーゲーム in 岡崎",
        "start": "2022-11-27",
        "end": "2022-11-27",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://fielddiscovery.or.jp/fdg-in-okazaki-2022/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "フライキャスティング大会",
        "start": "2022-12-03",
        "end": "2022-12-04",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://jcsf-castingsport.com/?p=5978",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎城下にぎわいマルシェ",
        "start": "2022-12-10",
        "end": "2022-12-11",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.fdbank.jp/okazaki_marche",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "ソウルフードジャム肉三昧",
        "start": "2022-12-10",
        "end": "2024-10-20",
        "occurrences": 2,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.soulfoodjam.org/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "乙川TRY",
        "start": "2022-12-18",
        "end": "2022-12-18",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.otogawa-try.work/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎城大手門プロジェクションマッピング2022",
        "start": "2022-12-23",
        "end": "2022-12-25",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://www.okazakinight.jp/",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "全国武将サミット2022",
        "start": "2022-12-24",
        "end": "2022-12-24",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/okazaki-park/news/8614",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "グレート家康公「葵」武将隊 3Dプロジェクション演武",
        "start": "2022-12-24",
        "end": "2022-12-25",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://www.hitohata.jp/news/event/IS5C23Nx",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "家康公生誕祭",
        "start": "2022-12-24",
        "end": "2024-12-22",
        "occurrences": 3,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/event/690",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "大河ドラマ「どうする家康」東海プレミアリレーin岡崎",
        "start": "2023-01-08",
        "end": "2023-01-08",
        "occurrences": 1,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/dousuru-taiga/news/8625",
        "dist_m": 574,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎城天守閣プロジェクションマッピング2023",
        "start": "2023-01-20",
        "end": "2023-01-22",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://www.okazakinight.jp/",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "どうする家康 岡崎 大河ドラマ館",
        "start": "2023-01-21",
        "end": "2024-01-08",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/dousuru-taiga",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "どうする岡崎グルメフェス",
        "start": "2023-02-11",
        "end": "2023-02-12",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/okazaki-park/program/4466",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "曲輪横丁",
        "start": "2023-02-11",
        "end": "2023-12-31",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://quruwa.jp/news/230201-07/",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "バモス　オカザキ！",
        "start": "2023-02-18",
        "end": "2023-02-19",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/houdou/p037458_d/fil/doudanieyasukou.pdf",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "お花見フード＆マルシェ",
        "start": "2023-03-24",
        "end": "2025-04-06",
        "occurrences": 2,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.fdbank.jp/archives/8109",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "桜まつり",
        "start": "2023-03-24",
        "end": "2023-04-09",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/feature/sakuramaturi/top",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "QURUWAと暮らす2023",
        "start": "2023-03-25",
        "end": "2023-03-26",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://sites.google.com/view/quruwa2023",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "殿橋テラス -River Port Village-",
        "start": "2023-03-25",
        "end": "2023-05-28",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://one-river.jp/programs/tonobashi-terrace/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "五万石藤まつり",
        "start": "2023-04-19",
        "end": "2024-05-05",
        "occurrences": 2,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/feature/fujimatsuri/top",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "スプリングフェア2023 舞い上がれ！岡崎っ子",
        "start": "2023-04-22",
        "end": "2023-04-22",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/event/4500",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "からあげ万博in岡崎",
        "start": "2023-04-22",
        "end": "2023-04-23",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.soulfoodjam.org/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "SOUL FOOD JAM GOLDEN WEEK SPECIAL",
        "start": "2023-05-03",
        "end": "2023-05-05",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.soulfoodjam.org/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "次世代モビリティ「C+walk」貸出",
        "start": "2023-05-03",
        "end": "2024-03-31",
        "occurrences": 2,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/houdou/p038256.html",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "おとがわびより2023春",
        "start": "2023-05-20",
        "end": "2023-05-20",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/event/3838",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "犬市場 in OKAZAKI 2023 Spring",
        "start": "2023-05-20",
        "end": "2023-05-21",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.inuichiba.com/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎カーフェスティバル",
        "start": "2023-05-28",
        "end": "2023-05-28",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/300/301/p037174.html",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "夏まで待てないハワイアン",
        "start": "2023-06-04",
        "end": "2023-06-04",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/okazaki-park/program/3049",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "グレート家康公「葵」武将隊　ドラマチックシアター",
        "start": "2023-07-23",
        "end": "2023-08-27",
        "occurrences": 2,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/okazaki-park/news/9686",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎城下家康公夏まつり 岡崎城天守閣 プロジェクションマッピング 2023",
        "start": "2023-08-04",
        "end": "2023-08-06",
        "occurrences": 2,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://prtimes.jp/main/html/rd/p/000000166.000046440.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎城下家康公夏まつり第75回花火大会",
        "start": "2023-08-05",
        "end": "2023-08-05",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/feature/hanabitaikai/hanabitokusyu",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "QURUWA DANCE DAY",
        "start": "2023-08-11",
        "end": "2023-08-11",
        "occurrences": 1,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "芸術＆文化",
        "url": "https://quruwa-dancecontest.wasshoi-sakura.com/",
        "dist_m": 574,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "QURUWA夏祭り　籠田公園会場",
        "start": "2023-08-12",
        "end": "2025-08-11",
        "occurrences": 2,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.kagoda-summerfes.wasshoi-sakura.com/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "QURUWA夏祭り　ティーンズフェス2023",
        "start": "2023-08-13",
        "end": "2023-08-13",
        "occurrences": 1,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "芸術＆文化",
        "url": "https://teensfes.wasshoi-sakura.com/",
        "dist_m": 574,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "QURUWA夏祭り　桜城橋会場",
        "start": "2023-08-25",
        "end": "2023-08-27",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://wasshoi-sakura.com/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "紫フェスタ at 岡崎公園（ムラフェス）",
        "start": "2023-08-30",
        "end": "2023-09-03",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/dousuru-taiga/news/9859",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "防災クエスト2",
        "start": "2023-09-10",
        "end": "2023-09-10",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/houdou/p039015.html",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "Experience Market 乙川TRY 2023 ~周年祭~",
        "start": "2023-09-16",
        "end": "2023-09-17",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.instagram.com/otogawa_try/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "オカザキリバーサイドマラソン",
        "start": "2023-09-17",
        "end": "2024-09-29",
        "occurrences": 2,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "スポーツ",
        "url": "https://okazaki-rm.net/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "FIELD DISCOVERY GAME in OKAZAKI",
        "start": "2023-09-24",
        "end": "2023-09-24",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://fielddiscovery.or.jp/fdg-in-okazaki-2023/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "あいちめし　岡崎城大合戦！",
        "start": "2023-09-30",
        "end": "2023-10-01",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://aichi-meshi.com/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "犬市場 in OKAZAKI 2023 Autumn",
        "start": "2023-10-07",
        "end": "2023-10-08",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.inuichiba.com/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "家康フェス",
        "start": "2023-10-14",
        "end": "2023-10-14",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://ieyasu-fes.peatix.com/",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "OUTBACK GARAGE MARKET",
        "start": "2023-10-14",
        "end": "2024-10-13",
        "occurrences": 2,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.outback-garage-market.com/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "第11回マンホールサミットin岡崎",
        "start": "2023-10-21",
        "end": "2023-10-22",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/1550/1573/2040/p037206.html",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "HANDMADE SELECT MARKET",
        "start": "2023-10-21",
        "end": "2023-10-22",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://handmadeselectmarket.jimdofree.com/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "OKAZAKI NINJA DAY",
        "start": "2023-10-22",
        "end": "2023-10-22",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/houdou/p039349.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "自動運転バス実証運行",
        "start": "2023-10-28",
        "end": "2023-11-05",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p039318.html",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "どうするNABE-1岡崎城グランプリ～一万人鍋～予選",
        "start": "2023-11-04",
        "end": "2023-11-04",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/houdou/p038971.html",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "2023岡崎城下家康公秋まつり",
        "start": "2023-11-04",
        "end": "2023-11-05",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/300/301/p015333.html",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "フォーラムエイト・ラリージャパン2023パブリックビューイング",
        "start": "2023-11-18",
        "end": "2023-11-18",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "スポーツ",
        "url": "https://www.city.okazaki.lg.jp/houdou/p039449.html",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "フィールドディスカバリーゲーム",
        "start": "2023-11-18",
        "end": "2024-09-30",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/houdou/p039601.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "スコシズツ.マーケット",
        "start": "2023-11-25",
        "end": "2023-11-25",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://quruwa.jp/news/231115-05/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "おとがわびより2023　秋",
        "start": "2023-11-25",
        "end": "2023-11-25",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/event/3838",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎まちなかARウォーキング",
        "start": "2023-12-01",
        "end": "2024-03-22",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://www.hitohata.jp/news/5x1BMeyQ",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "第4回三菱カーフェスティバルin岡崎",
        "start": "2023-12-03",
        "end": "2023-12-03",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/houdou/p039394.html",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "SOUL FOOD JAM 第二回肉三昧in岡崎",
        "start": "2023-12-09",
        "end": "2023-12-10",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.soulfoodjam.org/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "全国武将サミット2023～Youは何しに岡崎へ！？～",
        "start": "2023-12-10",
        "end": "2023-12-10",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/okazaki-park/news/10416",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "食フェスティバル",
        "start": "2023-12-10",
        "end": "2023-12-10",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://lien2023.co.jp/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "Experience Market 乙川TRY",
        "start": "2023-12-17",
        "end": "2024-03-17",
        "occurrences": 2,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.instagram.com/otogawa_try/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎クリスマスマーケット2023",
        "start": "2023-12-17",
        "end": "2023-12-17",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.instagram.com/okazaki.market/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎デジタルアートナイトフェスティバル",
        "start": "2023-12-23",
        "end": "2023-12-26",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://www.okazakinight.jp/",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "どうするNABE-1岡崎城グランプリ～一万人鍋～決勝",
        "start": "2024-01-08",
        "end": "2024-01-08",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/houdou/p038971.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎市消防出初式・お楽しみイベント",
        "start": "2024-01-14",
        "end": "2024-01-14",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/event/695",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "WORLD CLASSIC CAR FESTIVAL IN OKAZAKI",
        "start": "2024-01-28",
        "end": "2024-01-28",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://n-classiccar-jp.com/wccfes/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "グレート家康公「葵」武将隊 ドラマチックシアター だいいっきみ祭り",
        "start": "2024-02-25",
        "end": "2024-02-25",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/okazaki-park/news/10708",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "今岡友美JAZZコンサート",
        "start": "2024-03-09",
        "end": "2024-03-09",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/okazaki-park/program/4075",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "徳川十二新匠音楽祭",
        "start": "2024-03-16",
        "end": "2024-03-16",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p040265.html",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎の桜まつり",
        "start": "2024-03-22",
        "end": "2024-04-07",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/feature/sakuramaturi/top",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "三河武士のやかた家康館リニューアルオープン オープニングセレモニー",
        "start": "2024-03-23",
        "end": "2024-03-23",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p040205.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "#QURUWAと暮らす2024",
        "start": "2024-03-23",
        "end": "2024-03-24",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/300/301/p039977.html",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "ラブスピin岡崎 桜城橋",
        "start": "2024-03-30",
        "end": "2024-03-31",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "芸術＆文化",
        "url": "https://www.love-cul-spirit.net/lcs-okz2024/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "OUTBACK GARAGE MARKET vol.4",
        "start": "2024-04-13",
        "end": "2024-04-14",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.outback-garage-market.com/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "からあげ万博in 岡崎",
        "start": "2024-04-20",
        "end": "2024-04-21",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.soulfoodjam.org/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "SOUL FOOD JAM G.W.SPECIAL",
        "start": "2024-05-03",
        "end": "2024-05-05",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.soulfoodjam.org/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "BOKEN KIDS TOWN こどもまちづくり in 籠田公園",
        "start": "2024-05-05",
        "end": "2024-05-05",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.boken-kids.com/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "三菱自動車カーフェスティバル",
        "start": "2024-05-19",
        "end": "2024-05-19",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/houdou/p040516.html",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "犬市場 in Okazaki 2024 Spring",
        "start": "2024-05-25",
        "end": "2024-05-26",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.inuichiba.com/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "QURUWA ALOHA FESTA 2024",
        "start": "2024-06-02",
        "end": "2024-06-02",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/okazaki-park/program/4770",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "びしょぬれスプラッシュ",
        "start": "2024-06-29",
        "end": "2024-06-29",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.kagodapark.com/posts/54261836?categoryIds=5866835",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎戦国謎解きゲーム～欠けた小判の秘密～",
        "start": "2024-07-20",
        "end": "2024-10-27",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/houdou/p040870.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎城下家康公夏まつり第76回花火大会",
        "start": "2024-08-03",
        "end": "2024-08-03",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/feature/hanabitaikai/hanabitokusyu",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "陸上自衛隊第10音楽隊コンサートin岡崎2024",
        "start": "2024-08-10",
        "end": "2024-08-10",
        "occurrences": 1,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p040908.html",
        "dist_m": 574,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "QURUWA夏祭り",
        "start": "2024-08-10",
        "end": "2024-08-25",
        "occurrences": 2,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://quruwamatsuri.com/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "犬市場夜市",
        "start": "2024-08-17",
        "end": "2025-08-17",
        "occurrences": 3,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://otogawariverlife.com/event/928/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "第26回岡崎公園文化祭",
        "start": "2024-09-14",
        "end": "2024-09-14",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/event/3148",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎歌舞伎公演記念「岡崎城お練り」",
        "start": "2024-09-14",
        "end": "2024-09-14",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p041330.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎歌舞伎公演",
        "start": "2024-09-14",
        "end": "2024-09-15",
        "occurrences": 1,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/event/4809",
        "dist_m": 574,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎盆おどりフェス",
        "start": "2024-09-14",
        "end": "2024-09-16",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/okazaki-park/program/4847",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "夜の岡崎公園クイズラリー",
        "start": "2024-09-14",
        "end": "2024-09-23",
        "occurrences": 2,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/okazaki-park/program/4876",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "浴衣で岡崎城",
        "start": "2024-09-15",
        "end": "2024-09-15",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/okazaki-park/program/4891",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "フィールドディスカバリーゲーム in OKAZAKI",
        "start": "2024-09-29",
        "end": "2024-09-29",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://fielddiscovery.or.jp/2024/06/08/20240929_fdginokazaki/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "犬市場 in Okazaki 2024 Autumn",
        "start": "2024-10-05",
        "end": "2024-10-06",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://inuichiba.com/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎城下家康公秋まつり",
        "start": "2024-11-02",
        "end": "2025-11-02",
        "occurrences": 4,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/feature/akimatsuri/top",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "第二回岡崎家康杯 体験会",
        "start": "2024-11-02",
        "end": "2024-11-03",
        "occurrences": 2,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p041862.html",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎開市500年記念岡崎デジタリアンプロジェクト－GOMANGOKU of Light 2024－",
        "start": "2024-12-06",
        "end": "2024-12-22",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p042024.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "Roots of Kawaii内藤ルネ デビュー70周年POP UP展",
        "start": "2024-12-06",
        "end": "2025-01-13",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p042060.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "歴史ミーティング～おかざきの陣～",
        "start": "2024-12-07",
        "end": "2024-12-07",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p041953.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "第三回 旨辛祭",
        "start": "2024-12-14",
        "end": "2024-12-15",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.soulfoodjam.org/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "ソウルフードジャム旨辛祭",
        "start": "2024-12-14",
        "end": "2024-12-15",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://otogawariverlife.com/event/1134/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "VEHICLE STYLE in OTOGAWA RIVER",
        "start": "2024-12-14",
        "end": "2024-12-15",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://otogawariverlife.com/event/1137/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "全国武将サミット2024～家康に、ついて行ってイイですか？～",
        "start": "2024-12-15",
        "end": "2024-12-15",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/okazaki-park/news/12027",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎クリスマスマーケット2024",
        "start": "2024-12-15",
        "end": "2024-12-15",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.kagodapark.com/posts/55997481?categoryIds=5866835",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "家康公生誕花火",
        "start": "2024-12-26",
        "end": "2024-12-26",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/feature/iyeyasuko-seitangekkan/top",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "家康公生誕記念特別無料デー",
        "start": "2024-12-26",
        "end": "2024-12-26",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/feature/iyeyasuko-seitangekkan/top",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "「岡崎城公園」新園名板除幕式",
        "start": "2024-12-26",
        "end": "2024-12-26",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/feature/iyeyasuko-seitangekkan/top",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "新春五万石マラソン大会",
        "start": "2025-01-04",
        "end": "2025-01-04",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "スポーツ",
        "url": "https://otogawariverlife.com/event/1197/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎の偉人と辿る LINEスタンプラリー 第2弾",
        "start": "2025-01-14",
        "end": "2025-03-23",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/event/4981",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "第45回岡崎市民芸術文化祭『はじまりのフェスティバルⅡ～NEO TRADITION』",
        "start": "2025-02-02",
        "end": "2025-02-02",
        "occurrences": 1,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "芸術＆文化",
        "url": "https://shiminkaikan.com/event/2025/02/45-1.html",
        "dist_m": 574,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "久住昌之ふらっとグルメin岡崎",
        "start": "2025-03-07",
        "end": "2025-03-07",
        "occurrences": 1,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p042395.html",
        "dist_m": 574,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "QURUWAと暮らす2025",
        "start": "2025-03-15",
        "end": "2025-03-15",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/okazaki-park/program/5001",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "令和7年「岡崎の桜まつり」",
        "start": "2025-03-26",
        "end": "2025-04-06",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/houdou/p042528.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "五万石藤まつり2025",
        "start": "2025-04-18",
        "end": "2025-05-06",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/houdou/p042935.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "SOUL FOOD JAM　The Eat beat OF AMERICA vol.1",
        "start": "2025-04-19",
        "end": "2025-04-20",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.soulfoodjam.org/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "OUTBACK GARAGE MARKET in OKAZAKI vol.6",
        "start": "2025-04-19",
        "end": "2025-04-20",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.outback-garage-market.com/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "ソウルフードジャムGWスペシャル",
        "start": "2025-05-03",
        "end": "2025-05-05",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.soulfoodjam.org/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "GREEN LIFE JAM vol.3",
        "start": "2025-05-03",
        "end": "2025-05-04",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://greenlifejam.com/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "犬市場 Spring",
        "start": "2025-05-18",
        "end": "2025-05-18",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/houdou/p043223.html",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "保存修理記念特別公開「本多忠勝の肖像と甲冑」",
        "start": "2025-05-24",
        "end": "2025-06-08",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/okazaki-park/program/5042",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "ハッピーマルシェ",
        "start": "2025-05-31",
        "end": "2025-05-31",
        "occurrences": 1,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "その他",
        "url": "https://quruwa.jp/news/250501-16/",
        "dist_m": 574,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "RIVER NATION",
        "start": "2025-06-21",
        "end": "2025-06-21",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://otogawariverlife.com/event/1373/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "65.3％フェスティバル",
        "start": "2025-06-28",
        "end": "2025-06-28",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.dot-jp.or.jp/news/20162.html",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "BIO marché オトマルシェ",
        "start": "2025-07-01",
        "end": "2025-08-01",
        "occurrences": 2,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://quruwa.jp/news/250701-2/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎城公園開設150周年記念企画展「岡崎城公園150年のあゆみ」",
        "start": "2025-07-12",
        "end": "2025-09-07",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p043405.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎の偉人と辿るLINEスタンプラリー 第3弾",
        "start": "2025-07-18",
        "end": "2025-10-19",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/feature/linestamprally/top",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎城下家康公夏まつり第77回花火大会",
        "start": "2025-08-02",
        "end": "2025-08-02",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/event/675",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "吉田ジョージのお天気ワールド！ クイズと実験で学ぼう",
        "start": "2025-08-05",
        "end": "2025-08-05",
        "occurrences": 1,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p043246.html",
        "dist_m": 574,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎城下家康公夏まつり　籠田公園前伝馬通会場",
        "start": "2025-08-11",
        "end": "2025-08-11",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "芸術＆文化",
        "url": "http://www.okazakimatsuri.jp/Summer/entry-309.html",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "QURUWA夏祭り　桜城橋・乙川河川敷会場",
        "start": "2025-08-22",
        "end": "2025-08-24",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://quruwamatsuri.com/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "Lien乙川夏祭り",
        "start": "2025-09-06",
        "end": "2025-12-13",
        "occurrences": 2,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://otogawariverlife.com/event/1522/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "桜城橋月待会",
        "start": "2025-09-08",
        "end": "2025-10-06",
        "occurrences": 2,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://quruwa.jp/news/250901-05/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎戦国謎解きゲーム　～タイムカプセルと予言の書～",
        "start": "2025-09-09",
        "end": "2026-01-12",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/houdou/p043721.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "「秋JAZZ 2025」を開催します。",
        "start": "2025-09-20",
        "end": "2025-09-20",
        "occurrences": 1,
        "place": "図書館交流プラザりぶら",
        "address": "愛知県岡崎市康生通西4丁目71",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/kanko/event/1009558/1011067.html",
        "dist_m": 470,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎城下家康公夏まつり　岡崎城公園会場",
        "start": "2025-09-20",
        "end": "2025-09-21",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "http://www.okazakimatsuri.jp/Summer/entry-307.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "盆踊りフェス2025",
        "start": "2025-09-20",
        "end": "2025-09-21",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://quruwa.jp/news/250901-16/",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "フィールドディスカバリーゲームin岡崎",
        "start": "2025-09-21",
        "end": "2025-09-21",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/houdou/p043857.html",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎城星空ライブ",
        "start": "2025-09-27",
        "end": "2025-09-27",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/event/5078",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "第7回オカザキリバーサイドマラソン",
        "start": "2025-09-28",
        "end": "2025-09-28",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "スポーツ",
        "url": "https://otogawariverlife.com/event/1485/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎市周遊謎解き「岡崎全域虫眼鏡化 ～M－43ウイルスの蔓延を阻止しろ～」",
        "start": "2025-10-03",
        "end": "2025-11-30",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p044157.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "犬市場 in OKAZAKI 2025 Autumn",
        "start": "2025-10-11",
        "end": "2025-10-13",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/houdou/p044172.html",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "ミニ企画展「蔦屋重三郎と岡崎 ～狂歌師・三笑家資料を中心に～」",
        "start": "2025-10-17",
        "end": "2025-11-30",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p044131.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "アウトバックガレージマーケット",
        "start": "2025-10-18",
        "end": "2026-04-19",
        "occurrences": 2,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://otogawariverlife.com/event/1513/",
        "dist_m": 693,
        "rep_date": "2026-04-18",
        "rep_flow": 6977,
        "uplift_pct": 7.2
      },
      {
        "name": "ソウルフードジャム『The Eat beat OF AMERICA vol.２』",
        "start": "2025-10-18",
        "end": "2025-10-19",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://otogawariverlife.com/event/1517/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "GREEN LIFE JAM in OKAZAKI",
        "start": "2025-10-18",
        "end": "2025-10-19",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/houdou/p044272.html",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "海上自衛隊舞鶴音楽隊コンサートｉｎ岡崎2025",
        "start": "2025-10-19",
        "end": "2025-10-19",
        "occurrences": 1,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p043800.html",
        "dist_m": 574,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "Let’s エコアクション in AICHI～遊んで学んでエコ体験♪始めよう地球にいいこと～",
        "start": "2025-10-19",
        "end": "2025-10-19",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://otogawariverlife.com/event/1562/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "URBAN SAFE LINK",
        "start": "2025-10-19",
        "end": "2025-10-19",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/event/5101",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎市民公開講座「認知症講演会」を開催します。",
        "start": "2025-10-23",
        "end": "2025-10-23",
        "occurrences": 1,
        "place": "せきれいホール",
        "address": "愛知県岡崎市朝日町3丁目36-5",
        "tag": "シニア",
        "url": "https://www.city.okazaki.lg.jp/kanko/event/1009530/1011258.html",
        "dist_m": 1240,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "ある日の乙川～川の味覚と流域をめぐるこのまちの暮らし～",
        "start": "2025-10-25",
        "end": "2025-10-26",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://otogawariverlife.com/event/1598/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "令和7年度第52回岡崎市農林業祭",
        "start": "2025-11-01",
        "end": "2025-11-02",
        "occurrences": 2,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/business/sangyo/1005302/1012686/1005308/1011257.html",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎ジャズストリート",
        "start": "2025-11-01",
        "end": "2025-11-02",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "芸術＆文化",
        "url": "https://okazakijazzstreet.com/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "水切り石ゲーム",
        "start": "2025-11-01",
        "end": "2025-11-01",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/event/2707",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "ストーンフェスタ",
        "start": "2025-11-01",
        "end": "2025-11-02",
        "occurrences": 2,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/event/2715",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "石-１グランプリ 岡崎水切り石選手権大会",
        "start": "2025-11-02",
        "end": "2025-11-02",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/event/2707",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "第78回 岡崎市芸術祭参加市民茶会",
        "start": "2025-11-03",
        "end": "2025-11-03",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/event/3555",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "P.T.A Bazaar vol.12",
        "start": "2025-11-08",
        "end": "2025-11-09",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.instagram.com/park.trade.association/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "Kiraz Dance School ～秋のダンスまつり～",
        "start": "2025-11-09",
        "end": "2025-12-21",
        "occurrences": 2,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/event/4134",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "第54回はつらつクラブ岡崎作品展を開催します！",
        "start": "2025-11-13",
        "end": "2025-11-17",
        "occurrences": 1,
        "place": "図書館交流プラザりぶら",
        "address": "愛知県岡崎市康生通西4丁目71",
        "tag": "シニア",
        "url": "https://www.city.okazaki.lg.jp/kanko/event/1009530/1013218.html",
        "dist_m": 470,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "Japanカップ： 岡崎レースノルディックウォーキング 2025",
        "start": "2025-11-15",
        "end": "2025-11-15",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://otogawariverlife.com/event/1636/",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "ナントカナーレ！2025「なんとなく寝たくない夜に」",
        "start": "2025-11-15",
        "end": "2025-11-23",
        "occurrences": 2,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://quruwa.jp/news/251101-19/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "令和7年度人権啓発講演会",
        "start": "2025-11-16",
        "end": "2025-11-16",
        "occurrences": 1,
        "place": "図書館交流プラザりぶら",
        "address": "愛知県岡崎市康生通西4丁目71",
        "tag": "その他",
        "url": "https://www.city.okazaki.lg.jp/kurashi/shohi/1001881/1001882/1011282.html",
        "dist_m": 470,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "第33回岡崎市民クラシックコンサート　Ｏｓａｋａ Ｓｈｉｏｎ Ｗｉｎｄ Ｏｒｃｈｅｓｔｒａ ドラゴンクエストin岡崎",
        "start": "2025-11-16",
        "end": "2025-11-16",
        "occurrences": 1,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p043560.html",
        "dist_m": 574,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "丘の途中の夜市",
        "start": "2025-11-22",
        "end": "2025-11-22",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://quruwa.jp/news/251101-16/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "生誕500年記念　松平広忠",
        "start": "2025-11-29",
        "end": "2026-01-25",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p044494.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "絵本の世界に入って遊ぼう!! 360°仕掛け絵本「不思議の国のアリス」",
        "start": "2025-12-04",
        "end": "2025-12-27",
        "occurrences": 1,
        "place": "図書館交流プラザりぶら",
        "address": "愛知県岡崎市康生通西4丁目71",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/libra/event/1013031.html",
        "dist_m": 470,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "家康公生誕月間「おかざき宵まいり」",
        "start": "2025-12-06",
        "end": "2025-12-21",
        "occurrences": 3,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p044570.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "全国武将隊サミット2025～それ武将隊にやらせて下さい～",
        "start": "2025-12-07",
        "end": "2025-12-07",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p044470.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "恋結びin宵まいり",
        "start": "2025-12-13",
        "end": "2025-12-13",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p044396.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎クリスマスマーケット2025",
        "start": "2025-12-13",
        "end": "2025-12-13",
        "occurrences": 1,
        "place": "籠田公園・天下の道",
        "address": "愛知県岡崎市籠田町68",
        "tag": "パーク＆ネイチャー",
        "url": "https://odeinc.jp/13380/",
        "dist_m": 302,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "家康公生誕月間「家康公生誕祭」",
        "start": "2025-12-21",
        "end": "2025-12-21",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p044554.html",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "家康公生誕月間「家康公生誕花火」",
        "start": "2025-12-26",
        "end": "2025-12-26",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/houdou/p044498.html",
        "dist_m": 693,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "新春五万石マラソン",
        "start": "2026-01-04",
        "end": "2026-01-04",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "スポーツ",
        "url": "https://otogawariverlife.com/event/1728/",
        "dist_m": 693,
        "rep_date": "2026-01-04",
        "rep_flow": 4711,
        "uplift_pct": -9.5
      },
      {
        "name": "おとがわ寒中水泳",
        "start": "2026-01-11",
        "end": "2026-01-11",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "スポーツ",
        "url": "https://otogawariverlife.com/event/1743/",
        "dist_m": 693,
        "rep_date": "2026-01-11",
        "rep_flow": 4995,
        "uplift_pct": -4.1
      },
      {
        "name": "岡崎市消防出初・観閲式",
        "start": "2026-01-11",
        "end": "2026-01-11",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://okazaki-kanko.jp/event/695",
        "dist_m": 693,
        "rep_date": "2026-01-11",
        "rep_flow": 4995,
        "uplift_pct": -4.1
      },
      {
        "name": "出初式フードイベント",
        "start": "2026-01-11",
        "end": "2026-01-11",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://otogawariverlife.com/event/1818/",
        "dist_m": 693,
        "rep_date": "2026-01-11",
        "rep_flow": 4995,
        "uplift_pct": -4.1
      },
      {
        "name": "「CO2測定体験と見える化報告会」を開催しました（岡崎市地球温暖化防止隊）",
        "start": "2026-02-15",
        "end": "2026-02-15",
        "occurrences": 1,
        "place": "図書館交流プラザりぶら",
        "address": "愛知県岡崎市康生通西4丁目71",
        "tag": "その他",
        "url": "https://www.city.okazaki.lg.jp/kurashi/gomi/1002338/1012446/1012735/1013041.html",
        "dist_m": 470,
        "rep_date": "2026-02-15",
        "rep_flow": 5708,
        "uplift_pct": 9.6
      },
      {
        "name": "グレート家康公「葵」武将隊　「わし物語」",
        "start": "2026-03-14",
        "end": "2026-03-15",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-aoibushotai.bitfan.id/contents/345187",
        "dist_m": 493,
        "rep_date": "2026-03-14",
        "rep_flow": 7579,
        "uplift_pct": 16.5
      },
      {
        "name": "#QURUWAと暮らす2026",
        "start": "2026-03-21",
        "end": "2026-03-22",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "パーク＆ネイチャー",
        "url": "https://sites.google.com/view/quruwatokurasu/",
        "dist_m": 493,
        "rep_date": "2026-03-21",
        "rep_flow": 8438,
        "uplift_pct": 29.7
      },
      {
        "name": "第46回岡崎市民芸術文化祭withオカザえもんの芸術祭　クール和ジャポン　まちなかアート発見ツアー",
        "start": "2026-03-28",
        "end": "2026-03-28",
        "occurrences": 1,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/kanko/event/1009558/1014546.html",
        "dist_m": 574,
        "rep_date": "2026-03-28",
        "rep_flow": 8925,
        "uplift_pct": 37.2
      },
      {
        "name": "第46回岡崎市民芸術文化祭withオカザえもんの芸術祭　クール和ジャポン　りゅうのぼりを金色に塗ろう・岡崎市民歌舞伎プロジェクト初お目見え",
        "start": "2026-03-29",
        "end": "2026-03-29",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/kanko/event/1009558/1014551.html",
        "dist_m": 493,
        "rep_date": "2026-03-29",
        "rep_flow": 8710,
        "uplift_pct": 67.3
      },
      {
        "name": "ソウルフードジャム『The Eat beat OF AMERICA vol.3』",
        "start": "2026-04-18",
        "end": "2026-04-19",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://otogawariverlife.com/event/1966/",
        "dist_m": 693,
        "rep_date": "2026-04-18",
        "rep_flow": 6977,
        "uplift_pct": 7.2
      },
      {
        "name": "おかざきリバーサイドリレーマラソン",
        "start": "2026-04-25",
        "end": "2026-04-25",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://otogawariverlife.com/event/1978/",
        "dist_m": 693,
        "rep_date": "2026-04-25",
        "rep_flow": 6708,
        "uplift_pct": 3.1
      },
      {
        "name": "ソウルフードジャム『SOUL FOOD JAM vol.50 GWスペシャル』",
        "start": "2026-05-02",
        "end": "2026-05-04",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://otogawariverlife.com/event/2038/",
        "dist_m": 693,
        "rep_date": "2026-05-02",
        "rep_flow": 7677,
        "uplift_pct": 18.0
      },
      {
        "name": "Let it Camp GWスペシャル",
        "start": "2026-05-02",
        "end": "2026-05-04",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://otogawariverlife.com/event/2036/",
        "dist_m": 693,
        "rep_date": "2026-05-02",
        "rep_flow": 7677,
        "uplift_pct": 18.0
      },
      {
        "name": "水のアクティビティー大集合",
        "start": "2026-05-02",
        "end": "2026-05-04",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://otogawariverlife.com/event/2034/",
        "dist_m": 693,
        "rep_date": "2026-05-02",
        "rep_flow": 7677,
        "uplift_pct": 18.0
      },
      {
        "name": "甲冑試着体験",
        "start": "2026-05-03",
        "end": "2026-05-05",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/okazaki-park/program/5175",
        "dist_m": 493,
        "rep_date": "2026-05-03",
        "rep_flow": 7162,
        "uplift_pct": 37.6
      },
      {
        "name": "グレート感謝祭（フェスティバル）～葵武将隊のみなさんのおかげです～",
        "start": "2026-05-04",
        "end": "2026-05-04",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-aoibushotai.bitfan.id/",
        "dist_m": 493,
        "rep_date": "2026-05-04",
        "rep_flow": 7971,
        "uplift_pct": 124.2
      },
      {
        "name": "おとがわリバークリーン",
        "start": "2026-05-09",
        "end": "2026-05-09",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://otogawariverlife.com/event/2073/",
        "dist_m": 693,
        "rep_date": "2026-05-09",
        "rep_flow": 6518,
        "uplift_pct": 0.2
      },
      {
        "name": "犬市場 in OKAZAKI 2026 Spring",
        "start": "2026-05-16",
        "end": "2026-05-17",
        "occurrences": 1,
        "place": "乙川河川緑地",
        "address": "愛知県岡崎市康生町",
        "tag": "パーク＆ネイチャー",
        "url": "https://otogawariverlife.com/event/2062/",
        "dist_m": 693,
        "rep_date": "2026-05-16",
        "rep_flow": 6495,
        "uplift_pct": -0.2
      },
      {
        "name": "岡崎市民会館あおいホール　サロンコンサート",
        "start": "2026-06-19",
        "end": "2026-07-07",
        "occurrences": 2,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "芸術＆文化",
        "url": "https://shiminkaikan.com/event/",
        "dist_m": 574,
        "rep_date": "2026-06-19",
        "rep_flow": 4288,
        "uplift_pct": 15.3
      },
      {
        "name": "第119回シネマ・ド・りぶらを開催します。",
        "start": "2026-06-22",
        "end": "2026-06-22",
        "occurrences": 1,
        "place": "図書館交流プラザりぶら",
        "address": "愛知県岡崎市康生通西4丁目71",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/kanko/event/1009558/1015115.html",
        "dist_m": 470,
        "rep_date": "2026-06-22",
        "rep_flow": 2808,
        "uplift_pct": -21.0
      },
      {
        "name": "市制施行110周年記念式",
        "start": "2026-07-01",
        "end": "2026-07-01",
        "occurrences": 1,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "その他",
        "url": "https://www.city.okazaki.lg.jp/kanko/event/1009636/1016235.html",
        "dist_m": 574,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "市制施行記念日岡崎城、三河武士のやかた家康館市民無料デー",
        "start": "2026-07-01",
        "end": "2026-07-01",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "その他",
        "url": "https://okazaki-kanko.jp/okazaki-park/program/4758",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "甲山閣 抹茶で楽しむゆかた着付け教室",
        "start": "2026-07-05",
        "end": "2026-07-05",
        "occurrences": 1,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "その他",
        "url": "https://shiminkaikan.com/lesson/",
        "dist_m": 574,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "水辺で乾杯",
        "start": "2026-07-07",
        "end": "2026-07-07",
        "occurrences": 1,
        "place": "桜城橋",
        "address": "愛知県岡崎市明大寺本町",
        "tag": "パーク＆ネイチャー",
        "url": "https://www.city.okazaki.lg.jp/kanko/event/1009479/1015159.html",
        "dist_m": 407,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "赤ちゃん教室＠甲山閣 心と体を育てる親子ふれあいベビーマッサージ教室",
        "start": "2026-07-10",
        "end": "2026-09-25",
        "occurrences": 6,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "パパママ＆ベビー",
        "url": "https://shiminkaikan.com/lesson/",
        "dist_m": 574,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "ワールドレクチャー「アメージングタイランド、微笑みの国タイを知ろう！」",
        "start": "2026-07-12",
        "end": "2026-07-12",
        "occurrences": 1,
        "place": "図書館交流プラザりぶら",
        "address": "愛知県岡崎市康生通西4丁目71",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/bunka/shogaigakushu/1004849/1015570/1015571.html",
        "dist_m": 470,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "元気ハツラツ！出張測定",
        "start": "2026-07-14",
        "end": "2026-07-14",
        "occurrences": 1,
        "place": "中央地域福祉センター「とはなす中央」",
        "address": "愛知県岡崎市梅園町寺裏5-1",
        "tag": "シニア",
        "url": "https://www.okazaki-fukushi.or.jp/koureisha/76345.html",
        "dist_m": 543,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "とはなす中央　親なきあと対策セミナー",
        "start": "2026-07-18",
        "end": "2026-07-18",
        "occurrences": 1,
        "place": "中央地域福祉センター「とはなす中央」",
        "address": "愛知県岡崎市梅園町寺裏5-1",
        "tag": "その他",
        "url": "https://www.okazaki-fukushi.or.jp/koureisha/75926.html",
        "dist_m": 543,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "岡崎城・三河武士のやかた家康館　夏休み歴史クイズ！",
        "start": "2026-07-18",
        "end": "2026-08-31",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/okazaki-park/program/4792",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "パパは私の専属美容師 ～夏祭りをおしゃれに楽しもう！こどもの前髪カット＆ヘアアレンジ～",
        "start": "2026-07-20",
        "end": "2026-07-20",
        "occurrences": 1,
        "place": "図書館交流プラザりぶら",
        "address": "愛知県岡崎市康生通西4丁目71",
        "tag": "パパママ＆ベビー",
        "url": "https://www.city.okazaki.lg.jp/kanko/event/1009594/1015202.html",
        "dist_m": 470,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "天体観測会～月とクレーターを見てみよう～",
        "start": "2026-07-20",
        "end": "2026-07-20",
        "occurrences": 1,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "その他",
        "url": "https://shiminkaikan.com/event/2026/07/post-54.html",
        "dist_m": 574,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "パパと子どものパン作り教室",
        "start": "2026-07-25",
        "end": "2026-07-25",
        "occurrences": 1,
        "place": "図書館交流プラザりぶら",
        "address": "愛知県岡崎市康生通西4丁目71",
        "tag": "パパママ＆ベビー",
        "url": "https://www.city.okazaki.lg.jp/kanko/event/1009594/1015540.html",
        "dist_m": 470,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "中央市民センター講座　カルトナージュ講座",
        "start": "2026-07-28",
        "end": "2026-07-28",
        "occurrences": 1,
        "place": "中央市民センター",
        "address": "愛知県岡崎市上六名3丁目3-7",
        "tag": "その他",
        "url": "https://www.city.okazaki.lg.jp/bunka/shogaigakushu/1004809/1015526.html",
        "dist_m": 1388,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "図書館活用セミナー「図書館フル活用で学ぼう！異常気象を乗り越える農家のワザ！」",
        "start": "2026-07-30",
        "end": "2026-07-30",
        "occurrences": 1,
        "place": "図書館交流プラザりぶら",
        "address": "愛知県岡崎市康生通西4丁目71",
        "tag": "その他",
        "url": "https://www.city.okazaki.lg.jp/libra/event/1015557.html",
        "dist_m": 470,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "竜城の間開放事業",
        "start": "2026-08-04",
        "end": "2026-08-06",
        "occurrences": 1,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "その他",
        "url": "https://shiminkaikan.com/event/2026/08/post-56.html",
        "dist_m": 574,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "女性のためのストレッチ教室",
        "start": "2026-08-04",
        "end": "2026-11-03",
        "occurrences": 4,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "その他",
        "url": "https://shiminkaikan.com/lesson/2026/11/11.html",
        "dist_m": 574,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "ワークショップ＆ワールドレクチャー「オランダ」",
        "start": "2026-08-06",
        "end": "2026-08-06",
        "occurrences": 1,
        "place": "図書館交流プラザりぶら",
        "address": "愛知県岡崎市康生通西4丁目71",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/bunka/shogaigakushu/1004849/1015570/1015682.html",
        "dist_m": 470,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "中央市民センター講座　キッズダンス教室",
        "start": "2026-08-07",
        "end": "2026-08-21",
        "occurrences": 3,
        "place": "中央市民センター",
        "address": "愛知県岡崎市上六名3丁目3-7",
        "tag": "その他",
        "url": "https://www.city.okazaki.lg.jp/bunka/shogaigakushu/1004809/1015588.html",
        "dist_m": 1388,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "りぶらジャズオーケストラJr.岡崎Beanzzの練習見学会を開催します！",
        "start": "2026-08-08",
        "end": "2026-08-22",
        "occurrences": 2,
        "place": "図書館交流プラザりぶら",
        "address": "愛知県岡崎市康生通西4丁目71",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/kanko/event/1009558/1013090.html",
        "dist_m": 470,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "海上自衛隊舞鶴音楽隊コンサートin岡崎2026",
        "start": "2026-08-08",
        "end": "2026-08-08",
        "occurrences": 1,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "芸術＆文化",
        "url": "https://shiminkaikan.com/event/2026/08/in2026.html",
        "dist_m": 574,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "夏休み1日講座～学芸員と考える「岡崎城」自由研究1日講座～",
        "start": "2026-08-09",
        "end": "2026-08-09",
        "occurrences": 1,
        "place": "岡崎城公園",
        "address": "愛知県岡崎市康生町561-1",
        "tag": "芸術＆文化",
        "url": "https://okazaki-kanko.jp/okazaki-park/program/5220",
        "dist_m": 493,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "中央市民センター講座　親子で楽しく作るぷるぷるジェルキャンドル",
        "start": "2026-08-18",
        "end": "2026-08-18",
        "occurrences": 1,
        "place": "中央市民センター",
        "address": "愛知県岡崎市上六名3丁目3-7",
        "tag": "その他",
        "url": "https://www.city.okazaki.lg.jp/bunka/shogaigakushu/1004809/1015589.html",
        "dist_m": 1388,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "「心も体もリフレッシュ！はじめてのZUMBA」を開催します。",
        "start": "2026-08-22",
        "end": "2026-08-22",
        "occurrences": 1,
        "place": "図書館交流プラザりぶら",
        "address": "愛知県岡崎市康生通西4丁目71",
        "tag": "スポーツ",
        "url": "https://www.city.okazaki.lg.jp/kanko/event/1009636/1015624.html",
        "dist_m": 470,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "こども向け日本語教室「ぴかぴか」夏クラス",
        "start": "2026-08-23",
        "end": "2026-08-30",
        "occurrences": 2,
        "place": "図書館交流プラザりぶら",
        "address": "愛知県岡崎市康生通西4丁目71",
        "tag": "その他",
        "url": "https://www.city.okazaki.lg.jp/kanko/event/1009636/1011227.html",
        "dist_m": 470,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "こどもワールドレクチャー",
        "start": "2026-08-23",
        "end": "2026-08-23",
        "occurrences": 1,
        "place": "図書館交流プラザりぶら",
        "address": "愛知県岡崎市康生通西4丁目71",
        "tag": "芸術＆文化",
        "url": "https://www.city.okazaki.lg.jp/bunka/shogaigakushu/1004849/1015570/1015714.html",
        "dist_m": 470,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      },
      {
        "name": "第30回甲山落語会",
        "start": "2026-09-22",
        "end": "2026-09-22",
        "occurrences": 1,
        "place": "岡崎市民会館・甲山閣",
        "address": "愛知県岡崎市六供町出崎15-1",
        "tag": "芸術＆文化",
        "url": "https://shiminkaikan.com/event/2026/09/30.html",
        "dist_m": 574,
        "rep_date": null,
        "rep_flow": null,
        "uplift_pct": null
      }
    ],
    "radius_m": 1500,
    "note": "物件周辺のイベント。押し上げ効果は開催日の通行量を同曜日の中央値と比較した概算。人流の欠損補間期間はイベント効果が出にくい点に注意。"
  },
  "stores": {
    "points": [
      {
        "name": "銀界　拉麺",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市連尺通3-7 2F",
        "lat": 34.959808,
        "lon": 137.166779,
        "dist_m": 269
      },
      {
        "name": "Ｃｈｉｙａ　Ｇｈａｒ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町1-28",
        "lat": 34.960609,
        "lon": 137.16246,
        "dist_m": 312
      },
      {
        "name": "スバカマナ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町1-18(施設保管場所)",
        "lat": 34.959919,
        "lon": 137.162628,
        "dist_m": 243
      },
      {
        "name": "㈲スピカコーポレーション",
        "kind": "乳類販売業",
        "category": "物販・食品販売",
        "address": "愛知県岡崎市康生通西2-20-2",
        "lat": 34.95927,
        "lon": 137.162613,
        "dist_m": 197
      },
      {
        "name": "森ん家",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市本町通3-42 ",
        "lat": 34.961296,
        "lon": 137.162827,
        "dist_m": 362
      },
      {
        "name": "アオキスーパー岡崎康生店",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西3-15-2",
        "lat": 34.958614,
        "lon": 137.160553,
        "dist_m": 356
      },
      {
        "name": "デリカポイント岡崎康生店",
        "kind": "飲食店営業",
        "category": "惣菜・弁当",
        "address": "愛知県岡崎市康生通西3-15-2",
        "lat": 34.958614,
        "lon": 137.160553,
        "dist_m": 356
      },
      {
        "name": "さかな　八百弥",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通南2-31",
        "lat": 34.956135,
        "lon": 137.164597,
        "dist_m": 244
      },
      {
        "name": "スイーツカフェ　ブランシェ／Ｄｏｓａｎｋｏ　Ｂａｒ",
        "kind": "飲食店営業",
        "category": "カフェ・喫茶",
        "address": "愛知県岡崎市康生通東2-37",
        "lat": 34.958923,
        "lon": 137.165283,
        "dist_m": 101
      },
      {
        "name": "国産十割蕎麦　カネタ商店",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西2-20-2",
        "lat": 34.95927,
        "lon": 137.162613,
        "dist_m": 197
      },
      {
        "name": "江戸酒場　十三夜",
        "kind": "飲食店営業",
        "category": "居酒屋・バー",
        "address": "愛知県岡崎市康生通西3-29-3",
        "lat": 34.959545,
        "lon": 137.161087,
        "dist_m": 335
      },
      {
        "name": "ｃｌｕｂ　Ｄｉａｎａ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西3-29-3",
        "lat": 34.959545,
        "lon": 137.161087,
        "dist_m": 335
      },
      {
        "name": "Ｄｉａｎａ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西3-29-3",
        "lat": 34.959545,
        "lon": 137.161087,
        "dist_m": 335
      },
      {
        "name": "をむすび",
        "kind": "菓子製造業",
        "category": "スイーツ・ベーカリー",
        "address": "愛知県岡崎市本町通2-3",
        "lat": 34.959766,
        "lon": 137.164124,
        "dist_m": 163
      },
      {
        "name": "メコン　ライフ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町1-34",
        "lat": 34.960457,
        "lon": 137.161804,
        "dist_m": 338
      },
      {
        "name": "ｍ７８１３０",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市本町通1-7",
        "lat": 34.95937,
        "lon": 137.164124,
        "dist_m": 120
      },
      {
        "name": "Ｓｕｇａｒ　Ｋｉｔｃｈｅｎ",
        "kind": "菓子製造業",
        "category": "スイーツ・ベーカリー",
        "address": "愛知県岡崎市連尺通2-9-3",
        "lat": 34.959793,
        "lon": 137.165543,
        "dist_m": 192
      },
      {
        "name": "有限会社　魚勝本店",
        "kind": "魚介類販売業",
        "category": "物販・食品販売",
        "address": "愛知県岡崎市康生通南1-30､31",
        "lat": 34.957542,
        "lon": 137.163498,
        "dist_m": 122
      },
      {
        "name": "ｕｌｕ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市籠田町32",
        "lat": 34.958191,
        "lon": 137.167435,
        "dist_m": 273
      },
      {
        "name": "魚一商店",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西2-20-2",
        "lat": 34.95927,
        "lon": 137.162613,
        "dist_m": 197
      },
      {
        "name": "ＴＥＲＡＫＡＤＯ　ＣＯＦＦＥＥ　ＯＫＡＺＡＫＩ・ＮＹ店",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東2-10",
        "lat": 34.958401,
        "lon": 137.16568,
        "dist_m": 113
      },
      {
        "name": "ＴＡＫＯ　ＱＵＥＥＮ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東2-50",
        "lat": 34.959,
        "lon": 137.166534,
        "dist_m": 205
      },
      {
        "name": "ＳＴＡＮＤ　ＣＨＩＬＬＩＮ’　ＦＩＬＬＩＮ’",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市籠田町1",
        "lat": 34.958996,
        "lon": 137.167313,
        "dist_m": 272
      },
      {
        "name": "Ｇｌｏｂａｌ　Ｓｔｕｄｉｅｓ　Ｃａｆｅ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東1-23",
        "lat": 34.958817,
        "lon": 137.164459,
        "dist_m": 55
      },
      {
        "name": "Ａｒｃ－ｅｎ－ｃｉｅｌ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通南2-45",
        "lat": 34.956593,
        "lon": 137.164856,
        "dist_m": 196
      },
      {
        "name": "ＮＯＮＯＪＩ",
        "kind": "菓子製造業",
        "category": "スイーツ・ベーカリー",
        "address": "愛知県岡崎市康生通南3-39",
        "lat": 34.957443,
        "lon": 137.167221,
        "dist_m": 271
      },
      {
        "name": "ＥＶＥＲＹＦＯＯＤ（０４０９）事業所",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市伝馬通1-78",
        "lat": 34.957462,
        "lon": 137.167923,
        "dist_m": 331
      },
      {
        "name": "ａｔ　ｔｈｅ　ｔａｂｌｅ　ｅｓｔ　２０１５",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市連尺通3-7",
        "lat": 34.959808,
        "lon": 137.166779,
        "dist_m": 269
      },
      {
        "name": "有限会社　松栄鮨本店",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通南1-25",
        "lat": 34.957333,
        "lon": 137.164474,
        "dist_m": 110
      },
      {
        "name": "札幌かに本家岡崎店",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西3-26",
        "lat": 34.959545,
        "lon": 137.161087,
        "dist_m": 335
      },
      {
        "name": "Ｐａｒｋ　Ｓｉｄｅ　Ｃａｆｅ",
        "kind": "菓子製造業",
        "category": "スイーツ・ベーカリー",
        "address": "愛知県岡崎市籠田町21",
        "lat": 34.958378,
        "lon": 137.166779,
        "dist_m": 213
      },
      {
        "name": "洋菓子店　ＬＩＦＥ",
        "kind": "菓子製造業",
        "category": "スイーツ・ベーカリー",
        "address": "愛知県岡崎市材木町1-39",
        "lat": 34.960602,
        "lon": 137.161285,
        "dist_m": 383
      },
      {
        "name": "トリノ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通南2-58",
        "lat": 34.956066,
        "lon": 137.165955,
        "dist_m": 286
      },
      {
        "name": "一隆堂",
        "kind": "菓子製造業",
        "category": "スイーツ・ベーカリー",
        "address": "愛知県岡崎市連尺通3-18-2",
        "lat": 34.959431,
        "lon": 137.166718,
        "dist_m": 241
      },
      {
        "name": "東海ハートカステラ　ＭｅｌｏＭｅｌｏ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西2-20-2",
        "lat": 34.95927,
        "lon": 137.162613,
        "dist_m": 197
      },
      {
        "name": "ｂａｎｋｓ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通南2-15",
        "lat": 34.956108,
        "lon": 137.163651,
        "dist_m": 257
      },
      {
        "name": "萬珍軒本店",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東2-53",
        "lat": 34.958973,
        "lon": 137.166031,
        "dist_m": 162
      },
      {
        "name": "旭軒元直",
        "kind": "菓子製造業",
        "category": "スイーツ・ベーカリー",
        "address": "愛知県岡崎市康生通東1-2",
        "lat": 34.958324,
        "lon": 137.164444,
        "dist_m": 0
      },
      {
        "name": "株式会社　亀屋",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西1-4",
        "lat": 34.958172,
        "lon": 137.163452,
        "dist_m": 92
      },
      {
        "name": "デリカ　おもに",
        "kind": "そうざい製造業",
        "category": "惣菜・弁当",
        "address": "愛知県岡崎市康生通西2-20-2",
        "lat": 34.95927,
        "lon": 137.162613,
        "dist_m": 197
      },
      {
        "name": "おそうざいのすみちゃん",
        "kind": "飲食店営業",
        "category": "惣菜・弁当",
        "address": "愛知県岡崎市康生通西2-20-2",
        "lat": 34.95927,
        "lon": 137.162613,
        "dist_m": 197
      },
      {
        "name": "暴れん坊チキン",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東2-7",
        "lat": 34.958401,
        "lon": 137.16568,
        "dist_m": 113
      },
      {
        "name": "フードプランナー有限会社　肉の鉄人",
        "kind": "食肉販売業",
        "category": "物販・食品販売",
        "address": "愛知県岡崎市康生通西2-20-2",
        "lat": 34.95927,
        "lon": 137.162613,
        "dist_m": 197
      },
      {
        "name": "暴れん坊チキン",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東2-7(施設保管場所)",
        "lat": 34.958401,
        "lon": 137.16568,
        "dist_m": 113
      },
      {
        "name": "韓国料理　オモニ　＆　Ｂ－Ｇａｒｄｅｎ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市本町通3-48",
        "lat": 34.961296,
        "lon": 137.162827,
        "dist_m": 362
      },
      {
        "name": "ＯＨＫＡ　ＧＥＬＡＴＯ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通南3-43",
        "lat": 34.957779,
        "lon": 137.166641,
        "dist_m": 209
      },
      {
        "name": "石室ＩＮＡＳＥ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通南3-43",
        "lat": 34.957779,
        "lon": 137.166641,
        "dist_m": 209
      },
      {
        "name": "偶偶キッチン",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通南3-43",
        "lat": 34.957779,
        "lon": 137.166641,
        "dist_m": 209
      },
      {
        "name": "屋台ラーメン酒場　夜空",
        "kind": "飲食店営業",
        "category": "居酒屋・バー",
        "address": "愛知県岡崎市材木町1-23",
        "lat": 34.959919,
        "lon": 137.162628,
        "dist_m": 243
      },
      {
        "name": "食堂　こなん",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東2-41",
        "lat": 34.958923,
        "lon": 137.165283,
        "dist_m": 101
      },
      {
        "name": "チングポチャ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東2-37",
        "lat": 34.958923,
        "lon": 137.165283,
        "dist_m": 101
      },
      {
        "name": "磯田園　岡崎店",
        "kind": "喫茶店営業",
        "category": "その他",
        "address": "愛知県岡崎市康生通西2-20-2",
        "lat": 34.95927,
        "lon": 137.162613,
        "dist_m": 197
      },
      {
        "name": "拉麺ししまる",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町1-23",
        "lat": 34.959919,
        "lon": 137.162628,
        "dist_m": 243
      },
      {
        "name": "ＯＭＥＮ　ｒｅｌａｘ　ｓｈｉｓｈａ　ｌｏｕｎｇｅ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町1-23",
        "lat": 34.959919,
        "lon": 137.162628,
        "dist_m": 243
      },
      {
        "name": "スバカマナ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町1-18",
        "lat": 34.959919,
        "lon": 137.162628,
        "dist_m": 243
      },
      {
        "name": "ＱＵＲＵＷＡ　こそだてひろば　ｔｅｔｏｗａ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町1-37",
        "lat": 34.960602,
        "lon": 137.161285,
        "dist_m": 383
      },
      {
        "name": "ＭＥＬＯＮ　ＬＡＢ．　岡崎康生通り店",
        "kind": "菓子製造業",
        "category": "スイーツ・ベーカリー",
        "address": "愛知県岡崎市康生通東1-24",
        "lat": 34.958817,
        "lon": 137.164459,
        "dist_m": 55
      },
      {
        "name": "ファミリーマート岡崎材木町店",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町2-60",
        "lat": 34.961285,
        "lon": 137.162323,
        "dist_m": 382
      },
      {
        "name": "ｂｉｓｔｒｏｔ　Ａｏ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町1-22",
        "lat": 34.959919,
        "lon": 137.162628,
        "dist_m": 243
      },
      {
        "name": "株式会社　うを勝",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通南3-19",
        "lat": 34.956833,
        "lon": 137.165833,
        "dist_m": 209
      },
      {
        "name": "スイーツカフェブランシェ×北海道マルシェ　シビコ店",
        "kind": "飲食店営業",
        "category": "カフェ・喫茶",
        "address": "愛知県岡崎市康生通西2-20-2",
        "lat": 34.95927,
        "lon": 137.162613,
        "dist_m": 197
      },
      {
        "name": "岡崎ニューグランドホテル　バンケット",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生町515-33",
        "lat": 34.956032,
        "lon": 137.161697,
        "dist_m": 357
      },
      {
        "name": "岡崎ニューグランドホテル　ラウンジ　ルポー",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生町515-33",
        "lat": 34.956032,
        "lon": 137.161697,
        "dist_m": 357
      },
      {
        "name": "岡崎ニューグランドホテル　和食処おとがわ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生町515-33",
        "lat": 34.956032,
        "lon": 137.161697,
        "dist_m": 357
      },
      {
        "name": "岡崎シングルホテル",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生町515-1",
        "lat": 34.956032,
        "lon": 137.161697,
        "dist_m": 357
      },
      {
        "name": "ＥＶＥＲＥＳＴ　ＳＰＩＣＥ　ＲＥＳＴＡＵＲＡＮＴ　ＡＮＤ　ＭＡＲＴ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市本町通3-10",
        "lat": 34.961121,
        "lon": 137.163681,
        "dist_m": 319
      },
      {
        "name": "ＰＩＣＨＵ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西1-13",
        "lat": 34.958172,
        "lon": 137.163452,
        "dist_m": 92
      },
      {
        "name": "岡崎ニューグランドホテル　ＢＡＲ　グランディール",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生町515-33",
        "lat": 34.956032,
        "lon": 137.161697,
        "dist_m": 357
      },
      {
        "name": "岡崎ニューグランドホテル　スカイレストラン　パリ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生町515-33",
        "lat": 34.956032,
        "lon": 137.161697,
        "dist_m": 357
      },
      {
        "name": "有限会社　五万石藤見屋",
        "kind": "菓子製造業",
        "category": "スイーツ・ベーカリー",
        "address": "愛知県岡崎市本町通1-4",
        "lat": 34.959011,
        "lon": 137.164139,
        "dist_m": 81
      },
      {
        "name": "居酒屋　華々",
        "kind": "飲食店営業",
        "category": "居酒屋・バー",
        "address": "愛知県岡崎市本町通3-58",
        "lat": 34.961296,
        "lon": 137.162827,
        "dist_m": 362
      },
      {
        "name": "ＥＡＧＬＥ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東2-37",
        "lat": 34.958923,
        "lon": 137.165283,
        "dist_m": 101
      },
      {
        "name": "千も登",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東2-62",
        "lat": 34.958923,
        "lon": 137.165283,
        "dist_m": 101
      },
      {
        "name": "弛流　四川麻辣湯",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市籠田町32",
        "lat": 34.958191,
        "lon": 137.167435,
        "dist_m": 273
      },
      {
        "name": "笹葵",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市伝馬通1-31",
        "lat": 34.958561,
        "lon": 137.168137,
        "dist_m": 338
      },
      {
        "name": "徳川",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西1-6",
        "lat": 34.958172,
        "lon": 137.163452,
        "dist_m": 92
      },
      {
        "name": "海族鮮",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市本町通3-49",
        "lat": 34.961296,
        "lon": 137.162827,
        "dist_m": 362
      },
      {
        "name": "ＲＯＬＥ　ＣＯＦＦＥＥ　岡崎康生店",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通南1-13-1",
        "lat": 34.957333,
        "lon": 137.164474,
        "dist_m": 110
      },
      {
        "name": "むらかみ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通南2-27",
        "lat": 34.956707,
        "lon": 137.164215,
        "dist_m": 181
      },
      {
        "name": "Ｍ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東2-38",
        "lat": 34.958923,
        "lon": 137.165283,
        "dist_m": 101
      },
      {
        "name": "久米商店",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市六供本町2-16",
        "lat": 34.96143,
        "lon": 137.165771,
        "dist_m": 366
      },
      {
        "name": "和泉屋",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西2-6",
        "lat": 34.958694,
        "lon": 137.162598,
        "dist_m": 173
      },
      {
        "name": "カフェレスト　リズム",
        "kind": "飲食店営業",
        "category": "カフェ・喫茶",
        "address": "愛知県岡崎市康生通西2-20-2",
        "lat": 34.95927,
        "lon": 137.162613,
        "dist_m": 197
      },
      {
        "name": "和泉屋",
        "kind": "菓子製造業",
        "category": "スイーツ・ベーカリー",
        "address": "愛知県岡崎市康生通西2-6､7",
        "lat": 34.958694,
        "lon": 137.162598,
        "dist_m": 173
      },
      {
        "name": "ポニョん",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市連尺通2-21-1",
        "lat": 34.9594,
        "lon": 137.165268,
        "dist_m": 141
      },
      {
        "name": "éｃｕｍｅｒ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市籠田町40",
        "lat": 34.959927,
        "lon": 137.167587,
        "dist_m": 337
      },
      {
        "name": "ＦＵＮＫＹ　ＧＯＯＤ　ＴＩＭＥ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町1-23",
        "lat": 34.959919,
        "lon": 137.162628,
        "dist_m": 243
      },
      {
        "name": "ＮＥＷＳＴＡＮＤ　ＷＯＷ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市籠田町39",
        "lat": 34.959927,
        "lon": 137.167587,
        "dist_m": 337
      },
      {
        "name": "みんなの笑会場　さくらこ。",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東1-14",
        "lat": 34.958324,
        "lon": 137.164444,
        "dist_m": 0
      },
      {
        "name": "ラウンジ　ＧＡＬＡＸＹ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西3-29-3",
        "lat": 34.959545,
        "lon": 137.161087,
        "dist_m": 335
      },
      {
        "name": "ｂａｒ　ｍｅｇａｎｅ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東1-24",
        "lat": 34.958817,
        "lon": 137.164459,
        "dist_m": 55
      },
      {
        "name": "ゆきんこ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市本町通3-49-1",
        "lat": 34.961296,
        "lon": 137.162827,
        "dist_m": 362
      },
      {
        "name": "御菓子司　上田軒",
        "kind": "菓子製造業",
        "category": "スイーツ・ベーカリー",
        "address": "愛知県岡崎市材木町1-49",
        "lat": 34.960796,
        "lon": 137.161835,
        "dist_m": 363
      },
      {
        "name": "ＺＩＰＡＮＧ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町1-34",
        "lat": 34.960457,
        "lon": 137.161804,
        "dist_m": 338
      },
      {
        "name": "大衆酒場　どんちゃん",
        "kind": "飲食店営業",
        "category": "居酒屋・バー",
        "address": "愛知県岡崎市材木町2-64",
        "lat": 34.961285,
        "lon": 137.162323,
        "dist_m": 382
      },
      {
        "name": "ファミリーマート岡崎本町通店",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市本町通2-5-1",
        "lat": 34.960133,
        "lon": 137.164124,
        "dist_m": 203
      },
      {
        "name": "しろへび座",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市連尺通2-21-1",
        "lat": 34.9594,
        "lon": 137.165268,
        "dist_m": 141
      },
      {
        "name": "Ｂｉｓｔｒｏ　ｕｎ　Ｓｏｎ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町1-18",
        "lat": 34.959919,
        "lon": 137.162628,
        "dist_m": 243
      },
      {
        "name": "和香",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市連尺通3-3",
        "lat": 34.959808,
        "lon": 137.166779,
        "dist_m": 269
      },
      {
        "name": "パブ　バレンタイン",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町2-64",
        "lat": 34.961285,
        "lon": 137.162323,
        "dist_m": 382
      },
      {
        "name": "ＳＰＩＣＥ　ＣＵＲＲＹ　咖喱永",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市籠田町68",
        "lat": 34.958996,
        "lon": 137.167313,
        "dist_m": 272
      },
      {
        "name": "ｃａｆｅ　ｙｏｍｏｙａｍａ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西3-8",
        "lat": 34.958035,
        "lon": 137.161514,
        "dist_m": 269
      },
      {
        "name": "スパイスカレーかいらす",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西1-9",
        "lat": 34.958172,
        "lon": 137.163452,
        "dist_m": 92
      },
      {
        "name": "アユミベーカリー",
        "kind": "菓子製造業",
        "category": "スイーツ・ベーカリー",
        "address": "愛知県岡崎市材木町1-28",
        "lat": 34.960609,
        "lon": 137.16246,
        "dist_m": 312
      },
      {
        "name": "鰻の成瀬　岡崎店",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東2-37",
        "lat": 34.958923,
        "lon": 137.165283,
        "dist_m": 101
      },
      {
        "name": "ＢＩＯ　ＶＥＲＴ　ＣＯＦＦＥＥ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市連尺通2-29",
        "lat": 34.9594,
        "lon": 137.165268,
        "dist_m": 141
      },
      {
        "name": "ファミリーマート岡崎康生通南店",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通南3-2-2",
        "lat": 34.956833,
        "lon": 137.165833,
        "dist_m": 209
      },
      {
        "name": "ＣＯＦＦＥＥと＿＿＿＿＿＿",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市籠田町6",
        "lat": 34.958996,
        "lon": 137.167313,
        "dist_m": 272
      },
      {
        "name": "Ｓｅｌｅｎｅ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西2-13-2",
        "lat": 34.958694,
        "lon": 137.162598,
        "dist_m": 173
      },
      {
        "name": "日本料理　輪",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市花崗町1-51",
        "lat": 34.958862,
        "lon": 137.168442,
        "dist_m": 369
      },
      {
        "name": "天使のりんご飴岡崎店",
        "kind": "菓子製造業",
        "category": "スイーツ・ベーカリー",
        "address": "愛知県岡崎市康生通西2-28",
        "lat": 34.958118,
        "lon": 137.162521,
        "dist_m": 177
      },
      {
        "name": "ＭＯＭＯＴＡＲＯ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西2-24",
        "lat": 34.958118,
        "lon": 137.162521,
        "dist_m": 177
      },
      {
        "name": "ｅｓｏｔｅｒｉｃ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市本町通3-1",
        "lat": 34.96064,
        "lon": 137.164093,
        "dist_m": 260
      },
      {
        "name": "天木",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市籠田町59",
        "lat": 34.959927,
        "lon": 137.167587,
        "dist_m": 337
      },
      {
        "name": "Ｈａｓｔａ　ｍａñａｎａ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通南3-39",
        "lat": 34.957443,
        "lon": 137.167221,
        "dist_m": 271
      },
      {
        "name": "チャーム",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町1-16",
        "lat": 34.960064,
        "lon": 137.161514,
        "dist_m": 330
      },
      {
        "name": "飲み食い処　けんちゃん",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市本町通3-58-4",
        "lat": 34.961296,
        "lon": 137.162827,
        "dist_m": 362
      },
      {
        "name": "喫茶　あっぷる",
        "kind": "飲食店営業",
        "category": "カフェ・喫茶",
        "address": "愛知県岡崎市伝馬通1-50",
        "lat": 34.957836,
        "lon": 137.16861,
        "dist_m": 384
      },
      {
        "name": "ベルン洋菓子店",
        "kind": "飲食店営業",
        "category": "スイーツ・ベーカリー",
        "address": "愛知県岡崎市籠田町19",
        "lat": 34.958378,
        "lon": 137.166779,
        "dist_m": 213
      },
      {
        "name": "ももや",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西3-29-3",
        "lat": 34.959545,
        "lon": 137.161087,
        "dist_m": 335
      },
      {
        "name": "ひらき屋",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生町515-17",
        "lat": 34.956032,
        "lon": 137.161697,
        "dist_m": 357
      },
      {
        "name": "葵園菓子舗",
        "kind": "菓子製造業",
        "category": "スイーツ・ベーカリー",
        "address": "愛知県岡崎市籠田町8",
        "lat": 34.958996,
        "lon": 137.167313,
        "dist_m": 272
      },
      {
        "name": "旨いもの処　かぴちゃん",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市連尺通2-20-1",
        "lat": 34.959423,
        "lon": 137.166016,
        "dist_m": 188
      },
      {
        "name": "川井",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東2-26",
        "lat": 34.958401,
        "lon": 137.16568,
        "dist_m": 113
      },
      {
        "name": "Ｂａｋｕ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東2-37-1",
        "lat": 34.958923,
        "lon": 137.165283,
        "dist_m": 101
      },
      {
        "name": "焼肉　むぐんふぁ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町1-28",
        "lat": 34.960609,
        "lon": 137.16246,
        "dist_m": 312
      },
      {
        "name": "あんだんて",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東2-51",
        "lat": 34.959,
        "lon": 137.166534,
        "dist_m": 205
      },
      {
        "name": "ｒｈｉｎｏ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町1-28",
        "lat": 34.960609,
        "lon": 137.16246,
        "dist_m": 312
      },
      {
        "name": "とんかつ　しば太",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通南3-43",
        "lat": 34.957779,
        "lon": 137.166641,
        "dist_m": 209
      },
      {
        "name": "ａｔｅ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町1-23",
        "lat": 34.959919,
        "lon": 137.162628,
        "dist_m": 243
      },
      {
        "name": "Ｌｏｕｎｇｅ　ＶｉＶｉ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西3-29-3",
        "lat": 34.959545,
        "lon": 137.161087,
        "dist_m": 335
      },
      {
        "name": "からめ亭　岡崎店",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市本町通3-41",
        "lat": 34.960678,
        "lon": 137.163269,
        "dist_m": 283
      },
      {
        "name": "５０２",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東1-9",
        "lat": 34.958324,
        "lon": 137.164444,
        "dist_m": 0
      },
      {
        "name": "黒牛　ｍｕｒａｎｏｋａｊｉｙａ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市伝馬通1-1",
        "lat": 34.958031,
        "lon": 137.167999,
        "dist_m": 326
      },
      {
        "name": "ＬＯＵＫＵＭＡ　Ｈｏｕｓｅ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西3-1",
        "lat": 34.958035,
        "lon": 137.161514,
        "dist_m": 269
      },
      {
        "name": "ｃｌｕｂ　Ｄａｈｌｉａ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西3-29-3",
        "lat": 34.959545,
        "lon": 137.161087,
        "dist_m": 335
      },
      {
        "name": "Ｊ’ｓ　Ｍｕｓｉｃ　Ｃｌｕｂ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市本町通1-3",
        "lat": 34.959011,
        "lon": 137.164139,
        "dist_m": 81
      },
      {
        "name": "和泉屋",
        "kind": "菓子製造業",
        "category": "スイーツ・ベーカリー",
        "address": "愛知県岡崎市康生通西2-8",
        "lat": 34.958694,
        "lon": 137.162598,
        "dist_m": 173
      },
      {
        "name": "一隆堂喫茶室",
        "kind": "飲食店営業",
        "category": "カフェ・喫茶",
        "address": "愛知県岡崎市連尺通3-18",
        "lat": 34.959431,
        "lon": 137.166718,
        "dist_m": 241
      },
      {
        "name": "ｐｏｍｍｅ　ｄｅ　ｔｅｒｒｅ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東1-24",
        "lat": 34.958817,
        "lon": 137.164459,
        "dist_m": 55
      },
      {
        "name": "Ｆ　ｔｏ　ｂｒｅａｄ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東2-27-2",
        "lat": 34.958401,
        "lon": 137.16568,
        "dist_m": 113
      },
      {
        "name": "バードスペース殿橋",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通南2-34",
        "lat": 34.956135,
        "lon": 137.164597,
        "dist_m": 244
      },
      {
        "name": "Ｔｉｇｅ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東2-37",
        "lat": 34.958923,
        "lon": 137.165283,
        "dist_m": 101
      },
      {
        "name": "ＢＵＲＮＹ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町1-18",
        "lat": 34.959919,
        "lon": 137.162628,
        "dist_m": 243
      },
      {
        "name": "くらぶ牡丹",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西3-29-3",
        "lat": 34.959545,
        "lon": 137.161087,
        "dist_m": 335
      },
      {
        "name": "焼肉　むぐんふぁ",
        "kind": "漬物製造業",
        "category": "その他",
        "address": "愛知県岡崎市材木町1-28 吉野ﾋﾞﾙ2F",
        "lat": 34.960609,
        "lon": 137.16246,
        "dist_m": 312
      },
      {
        "name": "ダンケ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町1-14",
        "lat": 34.960064,
        "lon": 137.161514,
        "dist_m": 330
      },
      {
        "name": "和亭　やなぎ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市連尺通3-13",
        "lat": 34.959431,
        "lon": 137.166718,
        "dist_m": 241
      },
      {
        "name": "さんとくや",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市籠田町15",
        "lat": 34.958378,
        "lon": 137.166779,
        "dist_m": 213
      },
      {
        "name": "ルークマトラック",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市本町通3-36(施設保管場所)",
        "lat": 34.960678,
        "lon": 137.163269,
        "dist_m": 283
      },
      {
        "name": "福虎",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東2-5",
        "lat": 34.958401,
        "lon": 137.16568,
        "dist_m": 113
      },
      {
        "name": "１５４",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町1-54",
        "lat": 34.960609,
        "lon": 137.16246,
        "dist_m": 312
      },
      {
        "name": "ギャラリー喫茶メイプる",
        "kind": "飲食店営業",
        "category": "カフェ・喫茶",
        "address": "愛知県岡崎市籠田町24",
        "lat": 34.958378,
        "lon": 137.166779,
        "dist_m": 213
      },
      {
        "name": "棒餃子専門店　ＹＡＮ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通南3-43",
        "lat": 34.957779,
        "lon": 137.166641,
        "dist_m": 209
      },
      {
        "name": "Ｉｒｉｅ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市籠田町12",
        "lat": 34.958191,
        "lon": 137.167435,
        "dist_m": 273
      },
      {
        "name": "三嶋寿司本店",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市伝馬通1-5",
        "lat": 34.958031,
        "lon": 137.167999,
        "dist_m": 326
      },
      {
        "name": "Ｒｅｉｋｙ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西3-29-3",
        "lat": 34.959545,
        "lon": 137.161087,
        "dist_m": 335
      },
      {
        "name": "お酒とアテ　Ｓｅｎ",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市連尺通2-21",
        "lat": 34.9594,
        "lon": 137.165268,
        "dist_m": 141
      },
      {
        "name": "Ｓｔｉｒｒｅｄ　＆　Ｃｏ．",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市本町通1-3",
        "lat": 34.959011,
        "lon": 137.164139,
        "dist_m": 81
      },
      {
        "name": "蜂号車",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通東2-7(施設保管場所)",
        "lat": 34.958401,
        "lon": 137.16568,
        "dist_m": 113
      },
      {
        "name": "アジアン　リゾート　マームーダ！",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市康生通西1-6",
        "lat": 34.958172,
        "lon": 137.163452,
        "dist_m": 92
      },
      {
        "name": "ｃａｆé　ｗａｄａｃｈｉ",
        "kind": "菓子製造業",
        "category": "スイーツ・ベーカリー",
        "address": "愛知県岡崎市康生通南3-42",
        "lat": 34.957779,
        "lon": 137.166641,
        "dist_m": 209
      },
      {
        "name": "会員制らうんじ　鈴蘭",
        "kind": "飲食店営業",
        "category": "飲食店",
        "address": "愛知県岡崎市材木町1-34",
        "lat": 34.960457,
        "lon": 137.161804,
        "dist_m": 338
      }
    ],
    "category_counts": [
      {
        "category": "飲食店",
        "count": 128
      },
      {
        "category": "スイーツ・ベーカリー",
        "count": 17
      },
      {
        "category": "カフェ・喫茶",
        "count": 6
      },
      {
        "category": "居酒屋・バー",
        "count": 4
      },
      {
        "category": "物販・食品販売",
        "count": 3
      },
      {
        "category": "惣菜・弁当",
        "count": 3
      },
      {
        "category": "その他",
        "count": 2
      }
    ],
    "radius_m": 400
  },
  "demographics": {
    "is_dummy": false,
    "is_partial": true,
    "source": "岡崎市オープンデータ（地域・年齢別人口・市民意識調査）",
    "walk5_population": 4613,
    "walk10_population": 18886,
    "walk5_households": 2451,
    "walk10_households": 8876,
    "walk5_areas": [
      "康生町",
      "康生通",
      "連尺通",
      "籠田町",
      "伝馬通",
      "材木町",
      "本町通"
    ],
    "walk10_areas": [
      "康生町",
      "康生通",
      "連尺通",
      "籠田町",
      "伝馬通",
      "材木町",
      "本町通",
      "松本町",
      "十王町",
      "花崗町",
      "六供町",
      "六供本町",
      "梅園町",
      "板屋町",
      "元能見町",
      "祐金町",
      "若松町",
      "若松東１丁目",
      "若松東２丁目",
      "若松東３丁目"
    ],
    "population_date": "2025-04-01",
    "age_structure": [
      {
        "label": "0-14歳",
        "count": 2441,
        "pct": 12.9
      },
      {
        "label": "15-64歳",
        "count": 11188,
        "pct": 59.2
      },
      {
        "label": "65歳以上",
        "count": 5257,
        "pct": 27.8
      }
    ],
    "household": [
      {
        "label": "単身（同居家族なし）",
        "pct": 11.0,
        "count": 303
      },
      {
        "label": "夫婦のみ",
        "pct": 37.8,
        "count": 1042
      },
      {
        "label": "ファミリー（子どもあり）",
        "pct": 19.5,
        "count": 537
      },
      {
        "label": "三世代同居",
        "pct": 11.1,
        "count": 307
      },
      {
        "label": "その他",
        "pct": 20.5,
        "count": 566
      }
    ],
    "single_ratio": 11.0,
    "elderly_ratio": 27.8,
    "avg_household_size": 2.13,
    "city_reference": {
      "year_label": "4",
      "age_structure": [
        {
          "label": "0-14歳",
          "pct": 13.6
        },
        {
          "label": "15-64歳",
          "pct": 62.14
        },
        {
          "label": "65歳以上",
          "pct": 24.26
        }
      ],
      "household_size": 2.28,
      "source": "岡崎市オープンデータ（人口・世帯数等）"
    },
    "notes": {
      "population": "徒歩10分圏（約800m）に相当する町字の合算。厳密な徒歩圏ではなく概算です。",
      "household": "岡崎市全体の調査サンプル。商圏限定の世帯構成ではありません。"
    }
  },
  "rent": {
    "is_dummy": true,
    "source_hint": "不動産情報ライブラリAPI等は要APIキー／エリア別賃料データが公開されていないため未使用",
    "floor1_tsubo_yen": [
      10000,
      15000
    ],
    "floor2_tsubo_yen": [
      5000,
      9000
    ],
    "this_building_tsubo_yen": 12000,
    "land_price_yen_sqm": 155000
  },
  "future": {
    "is_dummy": false,
    "source": "岡崎市立地適正化計画・国交省資料・QURUWA",
    "items": [
      {
        "label": "都市機能誘導区域",
        "value": "中心市街地（康生地区）を包含",
        "note": "岡崎市立地適正化計画（平成31年3月策定）",
        "url": "https://www.city.okazaki.lg.jp/shisei/machi/1005061/1013142/1014117/1002912.html"
      },
      {
        "label": "コンパクト都市",
        "value": "国交省「モデル都市」に選定",
        "note": "コンパクト・プラス・ネットワークのモデル都市（岡崎市）",
        "url": "https://www.mlit.go.jp/sogochosei/teitanso/model_city.html"
      },
      {
        "label": "QURUWA",
        "value": "回遊動線・公共空間活用",
        "note": "康生通りを含むQURUWA地区で人流実証・回遊性向上を推進"
      },
      {
        "label": "中心市街地整備",
        "value": "康生周辺地のまちづくり継続",
        "note": "中心市街地活性化・歴史資源活用（康生周辺地交付金事業 等）",
        "url": "https://www.city.okazaki.lg.jp/_res/projects/default_project/_page_/001/008/420/kouseifo.pdf"
      }
    ]
  },
  "scores": {
    "items": [
      {
        "industry": "カフェ・軽食",
        "people_fit": 100,
        "competition": 52,
        "facility_fit": 88,
        "profitability": 95,
        "reason": "回遊・休憩・待ち合わせ需要と相性。20〜30代と女性の通行が下支え。",
        "total": 85,
        "rank": 1
      },
      {
        "industry": "テイクアウト惣菜・弁当",
        "people_fit": 86,
        "competition": 76,
        "facility_fit": 78,
        "profitability": 94,
        "reason": "昼・夕方の通行と近隣住民・帰宅動線を拾える。",
        "total": 83,
        "rank": 2
      },
      {
        "industry": "居酒屋・カフェバー",
        "people_fit": 75,
        "competition": 68,
        "facility_fit": 75,
        "profitability": 90,
        "reason": "夜間の回遊・食事需要。ただし周辺に競合が多い点に注意。",
        "total": 76,
        "rank": 3
      },
      {
        "industry": "岡崎土産・地物物販",
        "people_fit": 59,
        "competition": 76,
        "facility_fit": 91,
        "profitability": 82,
        "reason": "岡崎城・城下町の観光/散策客に地元商品を訴求しやすい。",
        "total": 74,
        "rank": 4
      },
      {
        "industry": "スイーツ・ベーカリー",
        "people_fit": 85,
        "competition": 20,
        "facility_fit": 86,
        "profitability": 92,
        "reason": "散策・手土産・休日需要に合う。公園回遊動線上で歩き買い需要。",
        "total": 70,
        "rank": 5
      }
    ],
    "method": "総合 = 人流相性×0.35 + 競合の少なさ×0.25 + 近隣施設相性×0.20 + 収益性×0.20。人流相性は実データ（年代・性別・時間帯構成）から算出、競合は半径内店舗数から算出。施設相性は主要施設までの距離、収益性は岡崎市の家計所得・小売業シェアから概算。",
    "is_partial_dummy": false
  },
  "consumer": {
    "survey": {
      "year": "令和6年度",
      "respondents": 2755,
      "source": "岡崎市オープンデータ（令和6年度市民意識調査）",
      "age_groups": [
        {
          "code": 1,
          "label": "10歳未満",
          "count": 115,
          "pct": 4.2
        },
        {
          "code": 2,
          "label": "10代",
          "count": 299,
          "pct": 10.9
        },
        {
          "code": 3,
          "label": "20代",
          "count": 366,
          "pct": 13.4
        },
        {
          "code": 4,
          "label": "30代",
          "count": 437,
          "pct": 15.9
        },
        {
          "code": 5,
          "label": "40代",
          "count": 490,
          "pct": 17.9
        },
        {
          "code": 6,
          "label": "50代",
          "count": 422,
          "pct": 15.4
        },
        {
          "code": 7,
          "label": "60代",
          "count": 422,
          "pct": 15.4
        },
        {
          "code": 8,
          "label": "70歳以上",
          "count": 190,
          "pct": 6.9
        }
      ],
      "occupations": [
        {
          "code": 1,
          "label": "会社員・公務員等",
          "count": 1102,
          "pct": 40.3
        },
        {
          "code": 2,
          "label": "自営業",
          "count": 164,
          "pct": 6.0
        },
        {
          "code": 3,
          "label": "自由業",
          "count": 155,
          "pct": 5.7
        },
        {
          "code": 4,
          "label": "パート・アルバイト",
          "count": 483,
          "pct": 17.6
        },
        {
          "code": 5,
          "label": "専業主婦（夫）",
          "count": 307,
          "pct": 11.2
        },
        {
          "code": 6,
          "label": "学生",
          "count": 491,
          "pct": 17.9
        },
        {
          "code": 7,
          "label": "無職・その他",
          "count": 35,
          "pct": 1.3
        }
      ],
      "commerce_satisfaction": [
        {
          "label": "満足（7〜10）",
          "count": 803,
          "pct": 30.2
        },
        {
          "label": "どちらかと言えば満足（5〜6）",
          "count": 1121,
          "pct": 42.1
        },
        {
          "label": "不満（1〜4）",
          "count": 695,
          "pct": 26.1
        }
      ],
      "commerce_importance": [
        {
          "label": "満足（7〜10）",
          "count": 1336,
          "pct": 50.2
        },
        {
          "label": "どちらかと言えば満足（5〜6）",
          "count": 952,
          "pct": 35.8
        },
        {
          "label": "不満（1〜4）",
          "count": 354,
          "pct": 13.3
        }
      ],
      "commerce_sat_avg": 5.48,
      "shopping_convenience": {
        "count": 1510,
        "pct": 54.8,
        "label": "買い物・飲食の便利さを「住みよさ」と回答"
      },
      "online_shopping": {
        "count": 1241,
        "pct": 45.0,
        "label": "スマホでオンラインショッピングを利用"
      },
      "holiday_in_city": [
        {
          "code": 1,
          "label": "非常に多い",
          "count": 1450,
          "pct": 53.5
        },
        {
          "code": 2,
          "label": "やや多い",
          "count": 776,
          "pct": 28.6
        },
        {
          "code": 3,
          "label": "どちらともいえない",
          "count": 298,
          "pct": 11.0
        },
        {
          "code": 4,
          "label": "あまり多くない",
          "count": 138,
          "pct": 5.1
        },
        {
          "code": 5,
          "label": "全く多くない",
          "count": 50,
          "pct": 1.8
        }
      ],
      "holiday_in_city_often_pct": 80.8,
      "center_city_visit": [
        {
          "code": 1,
          "label": "非常に多い",
          "count": 177,
          "pct": 6.5
        },
        {
          "code": 2,
          "label": "やや多い",
          "count": 279,
          "pct": 10.3
        },
        {
          "code": 3,
          "label": "どちらともいえない",
          "count": 419,
          "pct": 15.4
        },
        {
          "code": 4,
          "label": "あまり多くない",
          "count": 733,
          "pct": 27.0
        },
        {
          "code": 5,
          "label": "全く多くない",
          "count": 1104,
          "pct": 40.7
        }
      ],
      "center_city_visit_often_pct": 16.6,
      "transport_modes": [
        {
          "label": "自家用車",
          "count": 2380,
          "pct": 86.4
        },
        {
          "label": "徒歩",
          "count": 1032,
          "pct": 37.5
        },
        {
          "label": "鉄道",
          "count": 980,
          "pct": 35.6
        },
        {
          "label": "自転車",
          "count": 571,
          "pct": 20.7
        },
        {
          "label": "バス",
          "count": 522,
          "pct": 18.9
        },
        {
          "label": "タクシー",
          "count": 122,
          "pct": 4.4
        },
        {
          "label": "オートバイ",
          "count": 89,
          "pct": 3.2
        }
      ]
    },
    "nearby_population": {
      "date": "2025-04-01",
      "areas": [
        {
          "name": "康生通",
          "population": 2000,
          "households": 1041
        },
        {
          "name": "六供町",
          "population": 1855,
          "households": 831
        },
        {
          "name": "梅園町",
          "population": 1476,
          "households": 646
        },
        {
          "name": "元能見町",
          "population": 1203,
          "households": 549
        },
        {
          "name": "板屋町",
          "population": 1104,
          "households": 582
        },
        {
          "name": "康生町",
          "population": 893,
          "households": 458
        },
        {
          "name": "材木町",
          "population": 782,
          "households": 470
        },
        {
          "name": "伝馬通",
          "population": 613,
          "households": 309
        },
        {
          "name": "松本町",
          "population": 304,
          "households": 145
        },
        {
          "name": "十王町",
          "population": 182,
          "households": 84
        },
        {
          "name": "花崗町",
          "population": 146,
          "households": 80
        },
        {
          "name": "六供本町",
          "population": 137,
          "households": 67
        },
        {
          "name": "連尺通",
          "population": 132,
          "households": 64
        },
        {
          "name": "祐金町",
          "population": 129,
          "households": 66
        },
        {
          "name": "本町通",
          "population": 115,
          "households": 64
        },
        {
          "name": "籠田町",
          "population": 78,
          "households": 45
        }
      ],
      "area_count": 16,
      "population": 11149,
      "households": 5501,
      "age_structure": [
        {
          "label": "0-14歳",
          "count": 1321,
          "pct": 11.8
        },
        {
          "label": "15-64歳",
          "count": 6435,
          "pct": 57.7
        },
        {
          "label": "65歳以上",
          "count": 3393,
          "pct": 30.4
        }
      ],
      "source": "岡崎市オープンデータ（地域・年齢別人口）",
      "note": "康生通東周辺の町字（完全一致）を合算。商圏の厳密な徒歩圏とは異なります。"
    },
    "city_population_trend": {
      "items": [
        {
          "year_label": "20",
          "population": 376220,
          "households": 146402
        },
        {
          "year_label": "21",
          "population": 376120,
          "households": 146941
        },
        {
          "year_label": "22",
          "population": 376469,
          "households": 148074
        },
        {
          "year_label": "23",
          "population": 378217,
          "households": 149932
        },
        {
          "year_label": "24",
          "population": 378249,
          "households": 149060
        },
        {
          "year_label": "25",
          "population": 379264,
          "households": 150968
        },
        {
          "year_label": "26",
          "population": 380764,
          "households": 152849
        },
        {
          "year_label": "27",
          "population": 383493,
          "households": 155905
        },
        {
          "year_label": "28",
          "population": 384950,
          "households": 157966
        },
        {
          "year_label": "29",
          "population": 386943,
          "households": 160783
        },
        {
          "year_label": "30",
          "population": 387887,
          "households": 163104
        },
        {
          "year_label": "令和元年度",
          "population": 387106,
          "households": 164390
        },
        {
          "year_label": "2",
          "population": 385823,
          "households": 165775
        },
        {
          "year_label": "3",
          "population": 384996,
          "households": 166994
        },
        {
          "year_label": "4",
          "population": 383789,
          "households": 168543
        }
      ],
      "latest": {
        "year_label": "4",
        "population": 383789,
        "households": 168543
      },
      "source": "岡崎市オープンデータ（人口・世帯数等）"
    },
    "city_food_kinds": [
      {
        "kind": "飲食店営業",
        "count": 3045,
        "pct": 74.9
      },
      {
        "kind": "菓子製造業",
        "count": 501,
        "pct": 12.3
      },
      {
        "kind": "そうざい製造業",
        "count": 136,
        "pct": 3.3
      },
      {
        "kind": "食肉販売業",
        "count": 94,
        "pct": 2.3
      },
      {
        "kind": "魚介類販売業",
        "count": 89,
        "pct": 2.2
      },
      {
        "kind": "調理の機能を有する自動販売機により食品を調理し、調理された食品を販売する営業",
        "count": 46,
        "pct": 1.1
      },
      {
        "kind": "アイスクリーム類製造業",
        "count": 23,
        "pct": 0.6
      },
      {
        "kind": "漬物製造業",
        "count": 21,
        "pct": 0.5
      },
      {
        "kind": "食肉処理業",
        "count": 19,
        "pct": 0.5
      },
      {
        "kind": "食品の小分け業",
        "count": 13,
        "pct": 0.3
      },
      {
        "kind": "麺類製造業",
        "count": 12,
        "pct": 0.3
      },
      {
        "kind": "乳類販売業",
        "count": 10,
        "pct": 0.2
      }
    ],
    "income_trend": {
      "trend": [
        {
          "year_label": "平成24年度",
          "citizen_income_k": 3714,
          "household_income_k": 3717
        },
        {
          "year_label": "25",
          "citizen_income_k": 3921,
          "household_income_k": 3797
        },
        {
          "year_label": "26",
          "citizen_income_k": 3593,
          "household_income_k": 3794
        },
        {
          "year_label": "27",
          "citizen_income_k": 3790,
          "household_income_k": 3866
        },
        {
          "year_label": "28",
          "citizen_income_k": 3622,
          "household_income_k": 3853
        },
        {
          "year_label": "29",
          "citizen_income_k": 3859,
          "household_income_k": 3838
        },
        {
          "year_label": "30",
          "citizen_income_k": 3724,
          "household_income_k": 3890
        },
        {
          "year_label": "令和元年度",
          "citizen_income_k": 3484,
          "household_income_k": 3850
        },
        {
          "year_label": "2",
          "citizen_income_k": 3296,
          "household_income_k": 3876
        },
        {
          "year_label": "3",
          "citizen_income_k": 3541,
          "household_income_k": 3892
        },
        {
          "year_label": "4",
          "citizen_income_k": 3519,
          "household_income_k": 3907
        }
      ],
      "latest": {
        "year_label": "4",
        "citizen_income_k": 3519,
        "household_income_k": 3907
      },
      "source": "岡崎市統計（syotoku20.xls）/ 愛知県市町村民所得推計",
      "unit": "千円"
    },
    "income_breakdown": {
      "year_label": "令和4年度",
      "total_m": 1496812,
      "breakdown": [
        {
          "label": "雇用者報酬",
          "amount_m": 1036040,
          "pct": 69.2
        },
        {
          "label": "営業余剰・混合所得",
          "amount_m": 101172,
          "pct": 6.8
        },
        {
          "label": "財産所得",
          "amount_m": 89224,
          "pct": 6.0
        },
        {
          "label": "社会給付",
          "amount_m": 242646,
          "pct": 16.2
        },
        {
          "label": "その他の経常移転",
          "amount_m": 27851,
          "pct": 1.9
        }
      ],
      "source": "岡崎市統計（syotoku18.xls）",
      "unit": "百万円"
    },
    "industry_share": {
      "items": [
        {
          "industry": "製造業",
          "value_m": 337909,
          "share_pct": 32.8
        },
        {
          "industry": "卸売・小売業",
          "value_m": 138790,
          "share_pct": 13.5
        },
        {
          "industry": "不動産業",
          "value_m": 74974,
          "share_pct": 7.3
        },
        {
          "industry": "宿泊・飲食サービス",
          "value_m": 15712,
          "share_pct": 1.5
        }
      ],
      "year_label": "令和4年度",
      "source": "岡崎市統計（syotoku04.xls）"
    },
    "income_note": null,
    "summary_note": "市民意識調査・人口・食品営業許可は岡崎市オープンデータ、所得・産業構成は岡崎市統計ページから取得。調査は全市サンプルのため、康生通り通行者そのものを直接代表するものではありません。"
  }
};
