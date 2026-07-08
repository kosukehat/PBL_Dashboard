window.DASHBOARD_DATA = {
  "meta": {
    "building": {
      "address": "愛知県岡崎市康生通東一丁目16番地",
      "lat": 34.958324,
      "lon": 137.164444
    },
    "generated_at": "2026-07-08 18:10",
    "source": "岡崎市オープンデータ（BODIK） / 国土地理院ジオコーダ",
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
      "dummy": "商圏人口・賃料相場・都市計画/将来性はダミー値（画面に明記）。"
    }
  },
  "peopleflow": {
    "total_per_day": 4927.0,
    "by_hour": [
      {
        "hour": 0,
        "count": 19.4
      },
      {
        "hour": 1,
        "count": 11.3
      },
      {
        "hour": 2,
        "count": 8.7
      },
      {
        "hour": 3,
        "count": 7.6
      },
      {
        "hour": 4,
        "count": 11.8
      },
      {
        "hour": 5,
        "count": 29.9
      },
      {
        "hour": 6,
        "count": 48.7
      },
      {
        "hour": 7,
        "count": 118.4
      },
      {
        "hour": 8,
        "count": 186.2
      },
      {
        "hour": 9,
        "count": 180.1
      },
      {
        "hour": 10,
        "count": 301.3
      },
      {
        "hour": 11,
        "count": 454.3
      },
      {
        "hour": 12,
        "count": 517.9
      },
      {
        "hour": 13,
        "count": 498.2
      },
      {
        "hour": 14,
        "count": 493.8
      },
      {
        "hour": 15,
        "count": 470.4
      },
      {
        "hour": 16,
        "count": 431.3
      },
      {
        "hour": 17,
        "count": 387.5
      },
      {
        "hour": 18,
        "count": 285.2
      },
      {
        "hour": 19,
        "count": 197.2
      },
      {
        "hour": 20,
        "count": 116.3
      },
      {
        "hour": 21,
        "count": 80.5
      },
      {
        "hour": 22,
        "count": 44.8
      },
      {
        "hour": 23,
        "count": 26.2
      }
    ],
    "by_dow": [
      {
        "dow": 0,
        "label": "月",
        "count": 670.9
      },
      {
        "dow": 1,
        "label": "火",
        "count": 607.1
      },
      {
        "dow": 2,
        "label": "水",
        "count": 568.7
      },
      {
        "dow": 3,
        "label": "木",
        "count": 598.2
      },
      {
        "dow": 4,
        "label": "金",
        "count": 619.5
      },
      {
        "dow": 5,
        "label": "土",
        "count": 942.8
      },
      {
        "dow": 6,
        "label": "日",
        "count": 919.7
      }
    ],
    "weekday_holiday": [
      {
        "type": "平日",
        "avg_per_day": 4183.4,
        "days": 492
      },
      {
        "type": "休日",
        "avg_per_day": 6464.2,
        "days": 238
      }
    ],
    "by_age": [
      {
        "age": "Age00",
        "label": "10代未満",
        "count": 7.0,
        "pct": 0.5
      },
      {
        "age": "Age10",
        "label": "10代",
        "count": 36.5,
        "pct": 2.6
      },
      {
        "age": "Age20",
        "label": "20代",
        "count": 140.1,
        "pct": 10.2
      },
      {
        "age": "Age30",
        "label": "30代",
        "count": 387.3,
        "pct": 28.1
      },
      {
        "age": "Age40",
        "label": "40代",
        "count": 416.9,
        "pct": 30.2
      },
      {
        "age": "Age50",
        "label": "50代",
        "count": 260.9,
        "pct": 18.9
      },
      {
        "age": "Age60",
        "label": "60代",
        "count": 115.4,
        "pct": 8.4
      },
      {
        "age": "Age70",
        "label": "70代以上",
        "count": 15.5,
        "pct": 1.1
      }
    ],
    "by_gender": [
      {
        "gender": 0,
        "label": "男性",
        "count": 708.4,
        "pct": 14.4
      },
      {
        "gender": 1,
        "label": "女性",
        "count": 691.2,
        "pct": 14.0
      },
      {
        "gender": 2,
        "label": "不明",
        "count": 3527.3,
        "pct": 71.6
      }
    ],
    "by_direction": [
      {
        "camera_id": 0,
        "name": "東康生通り１",
        "in_dir": "公園方面",
        "out_dir": "図書館方面",
        "in": 496.5,
        "out": 488.6,
        "total": 986.3
      },
      {
        "camera_id": 1,
        "name": "東康生通り２",
        "in_dir": "図書館方面",
        "out_dir": "公園方面",
        "in": 603.2,
        "out": 577.2,
        "total": 1180.4
      },
      {
        "camera_id": 2,
        "name": "東康生通り３",
        "in_dir": "図書館方面",
        "out_dir": "公園方面",
        "in": 722.2,
        "out": 599.8,
        "total": 1324.2
      },
      {
        "camera_id": 3,
        "name": "東康生通り４",
        "in_dir": "公園方面",
        "out_dir": "図書館方面",
        "in": 702.6,
        "out": 733.5,
        "total": 1436.1
      }
    ],
    "n_days": 730,
    "months": [
      "202407",
      "202408",
      "202409",
      "202410",
      "202411",
      "202412",
      "202501",
      "202502",
      "202503",
      "202504",
      "202505",
      "202506",
      "202507",
      "202508",
      "202509",
      "202510",
      "202511",
      "202512",
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
          "date": "2024-07-01",
          "count": 2622,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-07-02",
          "count": 3707,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-07-03",
          "count": 3864,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-07-04",
          "count": 4235,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-07-05",
          "count": 4031,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-07-06",
          "count": 4823,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-07-07",
          "count": 4665,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-07-08",
          "count": 3558,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-07-09",
          "count": 2952,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-07-10",
          "count": 2617,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-07-11",
          "count": 2909,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-07-12",
          "count": 2751,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-07-13",
          "count": 5429,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-07-14",
          "count": 5456,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-07-15",
          "count": 3207,
          "dow": 0,
          "is_holiday": 1
        },
        {
          "date": "2024-07-16",
          "count": 3165,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-07-17",
          "count": 2685,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-07-18",
          "count": 3782,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-07-19",
          "count": 3803,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-07-20",
          "count": 4055,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-07-21",
          "count": 3778,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-07-22",
          "count": 3171,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-07-23",
          "count": 3596,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-07-24",
          "count": 3252,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-07-25",
          "count": 2989,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-07-26",
          "count": 3783,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-07-27",
          "count": 4059,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-07-28",
          "count": 3595,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-07-29",
          "count": 3715,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-07-30",
          "count": 3656,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-07-31",
          "count": 3543,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-08-01",
          "count": 3460,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-08-02",
          "count": 4089,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-08-03",
          "count": 16502,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-08-04",
          "count": 4232,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-08-05",
          "count": 3819,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-08-06",
          "count": 3781,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-08-07",
          "count": 3461,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-08-08",
          "count": 3599,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-08-09",
          "count": 3969,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-08-10",
          "count": 4193,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-08-11",
          "count": 4986,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-08-12",
          "count": 7480,
          "dow": 0,
          "is_holiday": 1
        },
        {
          "date": "2024-08-13",
          "count": 5149,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-08-14",
          "count": 4690,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-08-15",
          "count": 5343,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-08-16",
          "count": 4693,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-08-17",
          "count": 4267,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-08-18",
          "count": 4019,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-08-19",
          "count": 3854,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-08-20",
          "count": 4353,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-08-21",
          "count": 3918,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-08-22",
          "count": 4819,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-08-23",
          "count": 4181,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-08-24",
          "count": 4473,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-08-25",
          "count": 4708,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-08-26",
          "count": 5080,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-08-27",
          "count": 3839,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-08-28",
          "count": 3245,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-08-29",
          "count": 1895,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-08-30",
          "count": 4138,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-08-31",
          "count": 2760,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-09-01",
          "count": 3392,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-09-02",
          "count": 5326,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-09-03",
          "count": 5184,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-09-04",
          "count": 5073,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-09-05",
          "count": 5839,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-09-06",
          "count": 5949,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-09-07",
          "count": 6316,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-09-08",
          "count": 8174,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-09-09",
          "count": 5986,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-09-10",
          "count": 5953,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-09-11",
          "count": 5265,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-09-12",
          "count": 4887,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-09-13",
          "count": 5276,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-09-14",
          "count": 7935,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-09-15",
          "count": 7735,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-09-16",
          "count": 6032,
          "dow": 0,
          "is_holiday": 1
        },
        {
          "date": "2024-09-17",
          "count": 5728,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-09-18",
          "count": 5458,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-09-19",
          "count": 5005,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-09-20",
          "count": 5328,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-09-21",
          "count": 8724,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-09-22",
          "count": 8464,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-09-23",
          "count": 8072,
          "dow": 0,
          "is_holiday": 1
        },
        {
          "date": "2024-09-24",
          "count": 6066,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-09-25",
          "count": 5423,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-09-26",
          "count": 5355,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-09-27",
          "count": 4817,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-09-28",
          "count": 5066,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-09-29",
          "count": 6527,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-09-30",
          "count": 4422,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-10-01",
          "count": 4549,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-10-02",
          "count": 4244,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-10-03",
          "count": 2740,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-10-04",
          "count": 3664,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-10-05",
          "count": 6765,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-10-06",
          "count": 6196,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-10-07",
          "count": 4352,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-10-08",
          "count": 4489,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-10-09",
          "count": 3967,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-10-10",
          "count": 5173,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-10-11",
          "count": 5881,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-10-12",
          "count": 8245,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-10-13",
          "count": 12640,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-10-14",
          "count": 11126,
          "dow": 0,
          "is_holiday": 1
        },
        {
          "date": "2024-10-15",
          "count": 5734,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-10-16",
          "count": 4727,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-10-17",
          "count": 5130,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-10-18",
          "count": 4840,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-10-19",
          "count": 6428,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-10-20",
          "count": 8104,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-10-21",
          "count": 6476,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-10-22",
          "count": 5040,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-10-23",
          "count": 2634,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-10-24",
          "count": 4972,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-10-25",
          "count": 5706,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-10-26",
          "count": 8699,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-10-27",
          "count": 10009,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-10-28",
          "count": 5677,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-10-29",
          "count": 3122,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-10-30",
          "count": 4946,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-10-31",
          "count": 5156,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-11-01",
          "count": 4795,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-11-02",
          "count": 6059,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-11-03",
          "count": 19367,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-11-04",
          "count": 7407,
          "dow": 0,
          "is_holiday": 1
        },
        {
          "date": "2024-11-05",
          "count": 5158,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-11-06",
          "count": 5355,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-11-07",
          "count": 4865,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-11-08",
          "count": 5396,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-11-09",
          "count": 9564,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-11-10",
          "count": 8815,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-11-11",
          "count": 5130,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-11-12",
          "count": 5776,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-11-13",
          "count": 5129,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-11-14",
          "count": 4705,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-11-15",
          "count": 5530,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-11-16",
          "count": 7068,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-11-17",
          "count": 8614,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-11-18",
          "count": 5498,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-11-19",
          "count": 5182,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-11-20",
          "count": 4308,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-11-21",
          "count": 5861,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-11-22",
          "count": 6197,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-11-23",
          "count": 9081,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-11-24",
          "count": 7972,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-11-25",
          "count": 5120,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-11-26",
          "count": 3632,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-11-27",
          "count": 4523,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-11-28",
          "count": 5086,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-11-29",
          "count": 5220,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-11-30",
          "count": 9448,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-12-01",
          "count": 6761,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-12-02",
          "count": 4929,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-12-03",
          "count": 4508,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-12-04",
          "count": 4104,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-12-05",
          "count": 4197,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-12-06",
          "count": 4607,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-12-07",
          "count": 5836,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-12-08",
          "count": 5195,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-12-09",
          "count": 4132,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-12-10",
          "count": 4439,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-12-11",
          "count": 3945,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-12-12",
          "count": 4080,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-12-13",
          "count": 4786,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-12-14",
          "count": 5801,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-12-15",
          "count": 10091,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-12-16",
          "count": 4378,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-12-17",
          "count": 4135,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-12-18",
          "count": 4029,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-12-19",
          "count": 4256,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-12-20",
          "count": 4726,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-12-21",
          "count": 5228,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-12-22",
          "count": 5077,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-12-23",
          "count": 4256,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-12-24",
          "count": 4360,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2024-12-25",
          "count": 5022,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2024-12-26",
          "count": 4816,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2024-12-27",
          "count": 5632,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2024-12-28",
          "count": 6079,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2024-12-29",
          "count": 5235,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2024-12-30",
          "count": 5601,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2024-12-31",
          "count": 2764,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-01-01",
          "count": 2440,
          "dow": 2,
          "is_holiday": 1
        },
        {
          "date": "2025-01-02",
          "count": 2250,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-01-03",
          "count": 3451,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-01-04",
          "count": 5146,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-01-05",
          "count": 5010,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-01-06",
          "count": 3066,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-01-07",
          "count": 4336,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-01-08",
          "count": 3955,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-01-09",
          "count": 3628,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-01-10",
          "count": 3709,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-01-11",
          "count": 5636,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-01-12",
          "count": 6058,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-01-13",
          "count": 4743,
          "dow": 0,
          "is_holiday": 1
        },
        {
          "date": "2025-01-14",
          "count": 4324,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-01-15",
          "count": 3911,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-01-16",
          "count": 4406,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-01-17",
          "count": 4079,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-01-18",
          "count": 5319,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-01-19",
          "count": 6045,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-01-20",
          "count": 4404,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-01-21",
          "count": 4435,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-01-22",
          "count": 3943,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-01-23",
          "count": 4551,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-01-24",
          "count": 4493,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-01-25",
          "count": 5897,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-01-26",
          "count": 6178,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-01-27",
          "count": 4389,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-01-28",
          "count": 4842,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-01-29",
          "count": 4363,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-01-30",
          "count": 4202,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-01-31",
          "count": 4398,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-02-01",
          "count": 6220,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-02-02",
          "count": 4363,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-02-03",
          "count": 4903,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-02-04",
          "count": 4981,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-02-05",
          "count": 4333,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-02-06",
          "count": 4589,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-02-07",
          "count": 4490,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-02-08",
          "count": 6839,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-02-09",
          "count": 6442,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-02-10",
          "count": 5416,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-02-11",
          "count": 5042,
          "dow": 1,
          "is_holiday": 1
        },
        {
          "date": "2025-02-12",
          "count": 4268,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-02-13",
          "count": 4653,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-02-14",
          "count": 5068,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-02-15",
          "count": 7559,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-02-16",
          "count": 7001,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-02-17",
          "count": 5008,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-02-18",
          "count": 5180,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-02-19",
          "count": 4776,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-02-20",
          "count": 4984,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-02-21",
          "count": 5251,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-02-22",
          "count": 7727,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-02-23",
          "count": 12421,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-02-24",
          "count": 7086,
          "dow": 0,
          "is_holiday": 1
        },
        {
          "date": "2025-02-25",
          "count": 6095,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-02-26",
          "count": 5583,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-02-27",
          "count": 6182,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-02-28",
          "count": 4843,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-03-01",
          "count": 7985,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-03-02",
          "count": 7167,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-03-03",
          "count": 4103,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-03-04",
          "count": 4283,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-03-05",
          "count": 4789,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-03-06",
          "count": 5448,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-03-07",
          "count": 5548,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-03-08",
          "count": 5382,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-03-09",
          "count": 8923,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-03-10",
          "count": 5932,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-03-11",
          "count": 4650,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-03-12",
          "count": 5839,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-03-13",
          "count": 6240,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-03-14",
          "count": 6238,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-03-15",
          "count": 5947,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-03-16",
          "count": 5051,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-03-17",
          "count": 5773,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-03-18",
          "count": 6815,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-03-19",
          "count": 5195,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-03-20",
          "count": 6855,
          "dow": 3,
          "is_holiday": 1
        },
        {
          "date": "2025-03-21",
          "count": 7270,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-03-22",
          "count": 10558,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-03-23",
          "count": 11249,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-03-24",
          "count": 6210,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-03-25",
          "count": 6705,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-03-26",
          "count": 6659,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-03-27",
          "count": 5881,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-03-28",
          "count": 5819,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-03-29",
          "count": 10443,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-03-30",
          "count": 11013,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-03-31",
          "count": 5556,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-04-01",
          "count": 4696,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-04-02",
          "count": 5630,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-04-03",
          "count": 6541,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-04-04",
          "count": 6404,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-04-05",
          "count": 15486,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-04-06",
          "count": 10084,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-04-07",
          "count": 5169,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-04-08",
          "count": 5248,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-04-09",
          "count": 4933,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-04-10",
          "count": 3699,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-04-11",
          "count": 4778,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-04-12",
          "count": 7544,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-04-13",
          "count": 2421,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-04-14",
          "count": 5132,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-04-15",
          "count": 4536,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-04-16",
          "count": 4565,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-04-17",
          "count": 5027,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-04-18",
          "count": 4734,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-04-19",
          "count": 8095,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-04-20",
          "count": 6641,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-04-21",
          "count": 4888,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-04-22",
          "count": 4421,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-04-23",
          "count": 3394,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-04-24",
          "count": 5074,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-04-25",
          "count": 4911,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-04-26",
          "count": 6676,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-04-27",
          "count": 6632,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-04-28",
          "count": 4619,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-04-29",
          "count": 6002,
          "dow": 1,
          "is_holiday": 1
        },
        {
          "date": "2025-04-30",
          "count": 5861,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-05-01",
          "count": 6341,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-05-02",
          "count": 4194,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-05-03",
          "count": 9101,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-05-04",
          "count": 14392,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-05-05",
          "count": 11951,
          "dow": 0,
          "is_holiday": 1
        },
        {
          "date": "2025-05-06",
          "count": 3036,
          "dow": 1,
          "is_holiday": 1
        },
        {
          "date": "2025-05-07",
          "count": 4698,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-05-08",
          "count": 4940,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-05-09",
          "count": 3982,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-05-10",
          "count": 6864,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-05-11",
          "count": 8904,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-05-12",
          "count": 4740,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-05-13",
          "count": 4855,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-05-14",
          "count": 4361,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-05-15",
          "count": 4410,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-05-16",
          "count": 4915,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-05-17",
          "count": 4732,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-05-18",
          "count": 6456,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-05-19",
          "count": 5202,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-05-20",
          "count": 4072,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-05-21",
          "count": 3853,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-05-22",
          "count": 4200,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-05-23",
          "count": 4431,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-05-24",
          "count": 4837,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-05-25",
          "count": 7245,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-05-26",
          "count": 4451,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-05-27",
          "count": 3779,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-05-28",
          "count": 4752,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-05-29",
          "count": 4232,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-05-30",
          "count": 3622,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-05-31",
          "count": 5373,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-06-01",
          "count": 6925,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-06-02",
          "count": 4471,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-06-03",
          "count": 2748,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-06-04",
          "count": 4363,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-06-05",
          "count": 4681,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-06-06",
          "count": 4715,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-06-07",
          "count": 5641,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-06-08",
          "count": 4733,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-06-09",
          "count": 3190,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-06-10",
          "count": 2182,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-06-11",
          "count": 2952,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-06-12",
          "count": 4169,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-06-13",
          "count": 4470,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-06-14",
          "count": 4377,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-06-15",
          "count": 4589,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-06-16",
          "count": 3884,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-06-17",
          "count": 3683,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-06-18",
          "count": 3269,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-06-19",
          "count": 3691,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-06-20",
          "count": 4365,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-06-21",
          "count": 5069,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-06-22",
          "count": 4428,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-06-23",
          "count": 2898,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-06-24",
          "count": 2806,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-06-25",
          "count": 3238,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-06-26",
          "count": 2588,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-06-27",
          "count": 3933,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-06-28",
          "count": 5113,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-06-29",
          "count": 3915,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-06-30",
          "count": 3437,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-07-01",
          "count": 3349,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-07-02",
          "count": 3024,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-07-03",
          "count": 3145,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-07-04",
          "count": 3401,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-07-05",
          "count": 4341,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-07-06",
          "count": 4433,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-07-07",
          "count": 3307,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-07-08",
          "count": 3599,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-07-09",
          "count": 3584,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-07-10",
          "count": 3080,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-07-11",
          "count": 3276,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-07-12",
          "count": 4474,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-07-13",
          "count": 4021,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-07-14",
          "count": 3214,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-07-15",
          "count": 3954,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-07-16",
          "count": 4271,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-07-17",
          "count": 3653,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-07-18",
          "count": 4172,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-07-19",
          "count": 5361,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-07-20",
          "count": 6268,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-07-21",
          "count": 3177,
          "dow": 0,
          "is_holiday": 1
        },
        {
          "date": "2025-07-22",
          "count": 3550,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-07-23",
          "count": 3094,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-07-24",
          "count": 3287,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-07-25",
          "count": 3273,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-07-26",
          "count": 4272,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-07-27",
          "count": 3686,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-07-28",
          "count": 3696,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-07-29",
          "count": 3574,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-07-30",
          "count": 3207,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-07-31",
          "count": 3518,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-08-01",
          "count": 3429,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-08-02",
          "count": 12326,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-08-03",
          "count": 3584,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-08-04",
          "count": 4061,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-08-05",
          "count": 3394,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-08-06",
          "count": 3248,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-08-07",
          "count": 3289,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-08-08",
          "count": 3694,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-08-09",
          "count": 5243,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-08-10",
          "count": 5169,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-08-11",
          "count": 5926,
          "dow": 0,
          "is_holiday": 1
        },
        {
          "date": "2025-08-12",
          "count": 5742,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-08-13",
          "count": 4791,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-08-14",
          "count": 5291,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-08-15",
          "count": 6287,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-08-16",
          "count": 5207,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-08-17",
          "count": 4941,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-08-18",
          "count": 4417,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-08-19",
          "count": 4542,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-08-20",
          "count": 4248,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-08-21",
          "count": 4359,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-08-22",
          "count": 4631,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-08-23",
          "count": 5059,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-08-24",
          "count": 4937,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-08-25",
          "count": 4554,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-08-26",
          "count": 4613,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-08-27",
          "count": 3588,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-08-28",
          "count": 4254,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-08-29",
          "count": 4125,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-08-30",
          "count": 4051,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-08-31",
          "count": 3939,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-09-01",
          "count": 3856,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-09-02",
          "count": 4339,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-09-03",
          "count": 4186,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-09-04",
          "count": 4060,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-09-05",
          "count": 2646,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-09-06",
          "count": 5739,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-09-07",
          "count": 4772,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-09-08",
          "count": 4023,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-09-09",
          "count": 4375,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-09-10",
          "count": 4303,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-09-11",
          "count": 4154,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-09-12",
          "count": 3706,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-09-13",
          "count": 5433,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-09-14",
          "count": 7214,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-09-15",
          "count": 5657,
          "dow": 0,
          "is_holiday": 1
        },
        {
          "date": "2025-09-16",
          "count": 3777,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-09-17",
          "count": 3550,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-09-18",
          "count": 3676,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-09-19",
          "count": 4675,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-09-20",
          "count": 5612,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-09-21",
          "count": 8647,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-09-22",
          "count": 5789,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-09-23",
          "count": 5387,
          "dow": 1,
          "is_holiday": 1
        },
        {
          "date": "2025-09-24",
          "count": 4590,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-09-25",
          "count": 4707,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-09-26",
          "count": 4786,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-09-27",
          "count": 5693,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-09-28",
          "count": 6312,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-09-29",
          "count": 4112,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-09-30",
          "count": 4358,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-10-01",
          "count": 3845,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-10-02",
          "count": 3928,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-10-03",
          "count": 4032,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-10-04",
          "count": 3597,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-10-05",
          "count": 4528,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-10-06",
          "count": 4345,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-10-07",
          "count": 4719,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-10-08",
          "count": 4059,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-10-09",
          "count": 4079,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-10-10",
          "count": 3497,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-10-11",
          "count": 6363,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-10-12",
          "count": 8094,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-10-13",
          "count": 4386,
          "dow": 0,
          "is_holiday": 1
        },
        {
          "date": "2025-10-14",
          "count": 4669,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-10-15",
          "count": 4144,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-10-16",
          "count": 3627,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-10-17",
          "count": 4392,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-10-18",
          "count": 6882,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-10-19",
          "count": 9346,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-10-20",
          "count": 4300,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-10-21",
          "count": 4403,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-10-22",
          "count": 2607,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-10-23",
          "count": 4751,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-10-24",
          "count": 3927,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-10-25",
          "count": 5713,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-10-26",
          "count": 5888,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-10-27",
          "count": 4450,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-10-28",
          "count": 4507,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-10-29",
          "count": 4208,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-10-30",
          "count": 4095,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-10-31",
          "count": 2967,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-11-01",
          "count": 9371,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-11-02",
          "count": 14777,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-11-03",
          "count": 6312,
          "dow": 0,
          "is_holiday": 1
        },
        {
          "date": "2025-11-04",
          "count": 4398,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-11-05",
          "count": 3544,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-11-06",
          "count": 4458,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-11-07",
          "count": 4309,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-11-08",
          "count": 7942,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-11-09",
          "count": 3307,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-11-10",
          "count": 4265,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-11-11",
          "count": 4258,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-11-12",
          "count": 3997,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-11-13",
          "count": 4136,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-11-14",
          "count": 4901,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-11-15",
          "count": 9520,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-11-16",
          "count": 6661,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-11-17",
          "count": 4648,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-11-18",
          "count": 4310,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-11-19",
          "count": 4593,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-11-20",
          "count": 5049,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-11-21",
          "count": 4473,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-11-22",
          "count": 9087,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-11-23",
          "count": 11455,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-11-24",
          "count": 6730,
          "dow": 0,
          "is_holiday": 1
        },
        {
          "date": "2025-11-25",
          "count": 3574,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-11-26",
          "count": 4016,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-11-27",
          "count": 4011,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-11-28",
          "count": 4210,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-11-29",
          "count": 7664,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-11-30",
          "count": 7421,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-12-01",
          "count": 3862,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-12-02",
          "count": 3589,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-12-03",
          "count": 3495,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-12-04",
          "count": 3470,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-12-05",
          "count": 3522,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-12-06",
          "count": 6368,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-12-07",
          "count": 5565,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-12-08",
          "count": 3531,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-12-09",
          "count": 3559,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-12-10",
          "count": 3481,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-12-11",
          "count": 3461,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-12-12",
          "count": 4102,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-12-13",
          "count": 8217,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-12-14",
          "count": 4920,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-12-15",
          "count": 4230,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-12-16",
          "count": 3806,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-12-17",
          "count": 3602,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-12-18",
          "count": 3701,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-12-19",
          "count": 4044,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-12-20",
          "count": 6207,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-12-21",
          "count": 3442,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-12-22",
          "count": 3976,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-12-23",
          "count": 3639,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-12-24",
          "count": 2887,
          "dow": 2,
          "is_holiday": 0
        },
        {
          "date": "2025-12-25",
          "count": 3109,
          "dow": 3,
          "is_holiday": 0
        },
        {
          "date": "2025-12-26",
          "count": 4126,
          "dow": 4,
          "is_holiday": 0
        },
        {
          "date": "2025-12-27",
          "count": 5909,
          "dow": 5,
          "is_holiday": 1
        },
        {
          "date": "2025-12-28",
          "count": 5713,
          "dow": 6,
          "is_holiday": 1
        },
        {
          "date": "2025-12-29",
          "count": 6647,
          "dow": 0,
          "is_holiday": 0
        },
        {
          "date": "2025-12-30",
          "count": 4352,
          "dow": 1,
          "is_holiday": 0
        },
        {
          "date": "2025-12-31",
          "count": 3438,
          "dow": 2,
          "is_holiday": 0
        },
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
          "week_start": "2024-07-01",
          "count": 27947,
          "days": 7,
          "avg": 3992
        },
        {
          "week_start": "2024-07-08",
          "count": 25672,
          "days": 7,
          "avg": 3667
        },
        {
          "week_start": "2024-07-15",
          "count": 24475,
          "days": 7,
          "avg": 3496
        },
        {
          "week_start": "2024-07-22",
          "count": 24445,
          "days": 7,
          "avg": 3492
        },
        {
          "week_start": "2024-07-29",
          "count": 39197,
          "days": 7,
          "avg": 5600
        },
        {
          "week_start": "2024-08-05",
          "count": 27808,
          "days": 7,
          "avg": 3973
        },
        {
          "week_start": "2024-08-12",
          "count": 35641,
          "days": 7,
          "avg": 5092
        },
        {
          "week_start": "2024-08-19",
          "count": 30306,
          "days": 7,
          "avg": 4329
        },
        {
          "week_start": "2024-08-26",
          "count": 24349,
          "days": 7,
          "avg": 3478
        },
        {
          "week_start": "2024-09-02",
          "count": 41861,
          "days": 7,
          "avg": 5980
        },
        {
          "week_start": "2024-09-09",
          "count": 43037,
          "days": 7,
          "avg": 6148
        },
        {
          "week_start": "2024-09-16",
          "count": 44739,
          "days": 7,
          "avg": 6391
        },
        {
          "week_start": "2024-09-23",
          "count": 41326,
          "days": 7,
          "avg": 5904
        },
        {
          "week_start": "2024-09-30",
          "count": 32580,
          "days": 7,
          "avg": 4654
        },
        {
          "week_start": "2024-10-07",
          "count": 44747,
          "days": 7,
          "avg": 6392
        },
        {
          "week_start": "2024-10-14",
          "count": 46089,
          "days": 7,
          "avg": 6584
        },
        {
          "week_start": "2024-10-21",
          "count": 43536,
          "days": 7,
          "avg": 6219
        },
        {
          "week_start": "2024-10-28",
          "count": 49122,
          "days": 7,
          "avg": 7017
        },
        {
          "week_start": "2024-11-04",
          "count": 46560,
          "days": 7,
          "avg": 6651
        },
        {
          "week_start": "2024-11-11",
          "count": 41952,
          "days": 7,
          "avg": 5993
        },
        {
          "week_start": "2024-11-18",
          "count": 44099,
          "days": 7,
          "avg": 6300
        },
        {
          "week_start": "2024-11-25",
          "count": 39790,
          "days": 7,
          "avg": 5684
        },
        {
          "week_start": "2024-12-02",
          "count": 33376,
          "days": 7,
          "avg": 4768
        },
        {
          "week_start": "2024-12-09",
          "count": 37274,
          "days": 7,
          "avg": 5325
        },
        {
          "week_start": "2024-12-16",
          "count": 31829,
          "days": 7,
          "avg": 4547
        },
        {
          "week_start": "2024-12-23",
          "count": 35400,
          "days": 7,
          "avg": 5057
        },
        {
          "week_start": "2024-12-30",
          "count": 26662,
          "days": 7,
          "avg": 3809
        },
        {
          "week_start": "2025-01-06",
          "count": 30388,
          "days": 7,
          "avg": 4341
        },
        {
          "week_start": "2025-01-13",
          "count": 32827,
          "days": 7,
          "avg": 4690
        },
        {
          "week_start": "2025-01-20",
          "count": 33901,
          "days": 7,
          "avg": 4843
        },
        {
          "week_start": "2025-01-27",
          "count": 32777,
          "days": 7,
          "avg": 4682
        },
        {
          "week_start": "2025-02-03",
          "count": 36577,
          "days": 7,
          "avg": 5225
        },
        {
          "week_start": "2025-02-10",
          "count": 39007,
          "days": 7,
          "avg": 5572
        },
        {
          "week_start": "2025-02-17",
          "count": 45347,
          "days": 7,
          "avg": 6478
        },
        {
          "week_start": "2025-02-24",
          "count": 44941,
          "days": 7,
          "avg": 6420
        },
        {
          "week_start": "2025-03-03",
          "count": 38476,
          "days": 7,
          "avg": 5497
        },
        {
          "week_start": "2025-03-10",
          "count": 39897,
          "days": 7,
          "avg": 5700
        },
        {
          "week_start": "2025-03-17",
          "count": 53715,
          "days": 7,
          "avg": 7674
        },
        {
          "week_start": "2025-03-24",
          "count": 52730,
          "days": 7,
          "avg": 7533
        },
        {
          "week_start": "2025-03-31",
          "count": 54397,
          "days": 7,
          "avg": 7771
        },
        {
          "week_start": "2025-04-07",
          "count": 33792,
          "days": 7,
          "avg": 4827
        },
        {
          "week_start": "2025-04-14",
          "count": 38730,
          "days": 7,
          "avg": 5533
        },
        {
          "week_start": "2025-04-21",
          "count": 35996,
          "days": 7,
          "avg": 5142
        },
        {
          "week_start": "2025-04-28",
          "count": 50510,
          "days": 7,
          "avg": 7216
        },
        {
          "week_start": "2025-05-05",
          "count": 44375,
          "days": 7,
          "avg": 6339
        },
        {
          "week_start": "2025-05-12",
          "count": 34469,
          "days": 7,
          "avg": 4924
        },
        {
          "week_start": "2025-05-19",
          "count": 33840,
          "days": 7,
          "avg": 4834
        },
        {
          "week_start": "2025-05-26",
          "count": 33134,
          "days": 7,
          "avg": 4733
        },
        {
          "week_start": "2025-06-02",
          "count": 31352,
          "days": 7,
          "avg": 4479
        },
        {
          "week_start": "2025-06-09",
          "count": 25929,
          "days": 7,
          "avg": 3704
        },
        {
          "week_start": "2025-06-16",
          "count": 28389,
          "days": 7,
          "avg": 4056
        },
        {
          "week_start": "2025-06-23",
          "count": 24491,
          "days": 7,
          "avg": 3499
        },
        {
          "week_start": "2025-06-30",
          "count": 25130,
          "days": 7,
          "avg": 3590
        },
        {
          "week_start": "2025-07-07",
          "count": 25341,
          "days": 7,
          "avg": 3620
        },
        {
          "week_start": "2025-07-14",
          "count": 30893,
          "days": 7,
          "avg": 4413
        },
        {
          "week_start": "2025-07-21",
          "count": 24339,
          "days": 7,
          "avg": 3477
        },
        {
          "week_start": "2025-07-28",
          "count": 33334,
          "days": 7,
          "avg": 4762
        },
        {
          "week_start": "2025-08-04",
          "count": 28098,
          "days": 7,
          "avg": 4014
        },
        {
          "week_start": "2025-08-11",
          "count": 38185,
          "days": 7,
          "avg": 5455
        },
        {
          "week_start": "2025-08-18",
          "count": 32193,
          "days": 7,
          "avg": 4599
        },
        {
          "week_start": "2025-08-25",
          "count": 29124,
          "days": 7,
          "avg": 4161
        },
        {
          "week_start": "2025-09-01",
          "count": 29598,
          "days": 7,
          "avg": 4228
        },
        {
          "week_start": "2025-09-08",
          "count": 33208,
          "days": 7,
          "avg": 4744
        },
        {
          "week_start": "2025-09-15",
          "count": 35594,
          "days": 7,
          "avg": 5085
        },
        {
          "week_start": "2025-09-22",
          "count": 37264,
          "days": 7,
          "avg": 5323
        },
        {
          "week_start": "2025-09-29",
          "count": 28400,
          "days": 7,
          "avg": 4057
        },
        {
          "week_start": "2025-10-06",
          "count": 35156,
          "days": 7,
          "avg": 5022
        },
        {
          "week_start": "2025-10-13",
          "count": 37446,
          "days": 7,
          "avg": 5349
        },
        {
          "week_start": "2025-10-20",
          "count": 31589,
          "days": 7,
          "avg": 4513
        },
        {
          "week_start": "2025-10-27",
          "count": 44375,
          "days": 7,
          "avg": 6339
        },
        {
          "week_start": "2025-11-03",
          "count": 34270,
          "days": 7,
          "avg": 4896
        },
        {
          "week_start": "2025-11-10",
          "count": 37738,
          "days": 7,
          "avg": 5391
        },
        {
          "week_start": "2025-11-17",
          "count": 43615,
          "days": 7,
          "avg": 6231
        },
        {
          "week_start": "2025-11-24",
          "count": 37626,
          "days": 7,
          "avg": 5375
        },
        {
          "week_start": "2025-12-01",
          "count": 29871,
          "days": 7,
          "avg": 4267
        },
        {
          "week_start": "2025-12-08",
          "count": 31271,
          "days": 7,
          "avg": 4467
        },
        {
          "week_start": "2025-12-15",
          "count": 29032,
          "days": 7,
          "avg": 4147
        },
        {
          "week_start": "2025-12-22",
          "count": 29359,
          "days": 7,
          "avg": 4194
        },
        {
          "week_start": "2025-12-29",
          "count": 31548,
          "days": 7,
          "avg": 4507
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
          "ym": "2024-07",
          "count": 113453,
          "days": 31,
          "avg": 3660
        },
        {
          "ym": "2024-08",
          "count": 142995,
          "days": 31,
          "avg": 4613
        },
        {
          "ym": "2024-09",
          "count": 178777,
          "days": 30,
          "avg": 5959
        },
        {
          "ym": "2024-10",
          "count": 181431,
          "days": 31,
          "avg": 5853
        },
        {
          "ym": "2024-11",
          "count": 195861,
          "days": 30,
          "avg": 6529
        },
        {
          "ym": "2024-12",
          "count": 153005,
          "days": 31,
          "avg": 4936
        },
        {
          "ym": "2025-01",
          "count": 137607,
          "days": 31,
          "avg": 4439
        },
        {
          "ym": "2025-02",
          "count": 161303,
          "days": 28,
          "avg": 5761
        },
        {
          "ym": "2025-03",
          "count": 205526,
          "days": 31,
          "avg": 6630
        },
        {
          "ym": "2025-04",
          "count": 173841,
          "days": 30,
          "avg": 5795
        },
        {
          "ym": "2025-05",
          "count": 172921,
          "days": 31,
          "avg": 5578
        },
        {
          "ym": "2025-06",
          "count": 120523,
          "days": 30,
          "avg": 4017
        },
        {
          "ym": "2025-07",
          "count": 116261,
          "days": 31,
          "avg": 3750
        },
        {
          "ym": "2025-08",
          "count": 146939,
          "days": 31,
          "avg": 4740
        },
        {
          "ym": "2025-09",
          "count": 144134,
          "days": 30,
          "avg": 4804
        },
        {
          "ym": "2025-10",
          "count": 144348,
          "days": 31,
          "avg": 4656
        },
        {
          "ym": "2025-11",
          "count": 177397,
          "days": 30,
          "avg": 5913
        },
        {
          "ym": "2025-12",
          "count": 133970,
          "days": 31,
          "avg": 4322
        },
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
      "0": 4352,
      "1": 4258,
      "2": 3944,
      "3": 4162,
      "4": 4164,
      "5": 6214,
      "6": 5800
    },
    "monthly_breakdown": {
      "2024-07": {
        "hour": [
          699.0,
          474.0,
          344.0,
          250.0,
          479.0,
          1405.0,
          1816.0,
          3984.0,
          5737.0,
          4725.0,
          6764.0,
          8697.0,
          10417.0,
          10188.0,
          9292.0,
          8790.0,
          9106.0,
          8788.0,
          6933.0,
          5533.0,
          3775.0,
          2719.0,
          1698.0,
          840.0
        ],
        "age": [
          157.0,
          755.0,
          2545.0,
          5976.0,
          7892.0,
          6466.0,
          3398.0,
          554.0
        ],
        "gender": [
          15770.0,
          11973.0,
          85710.0
        ],
        "dir": {
          "0": {
            "in": 15609.0,
            "out": 15023.0,
            "total": 30632.0
          },
          "1": {
            "in": 16036.0,
            "out": 15727.0,
            "total": 31763.0
          },
          "2": {
            "in": 17557.0,
            "out": 13965.0,
            "total": 31522.0
          },
          "3": {
            "in": 9711.0,
            "out": 9825.0,
            "total": 19536.0
          }
        },
        "total": 113453.0,
        "days": 31
      },
      "2024-08": {
        "hour": [
          1216.0,
          783.0,
          674.0,
          554.0,
          751.0,
          1668.0,
          1881.0,
          2985.0,
          4796.0,
          4967.0,
          7239.0,
          10312.0,
          11828.0,
          11370.0,
          10690.0,
          10390.0,
          11301.0,
          12443.0,
          12170.0,
          9832.0,
          7016.0,
          4125.0,
          2376.0,
          1628.0
        ],
        "age": [
          159.0,
          805.0,
          2906.0,
          7895.0,
          10548.0,
          7765.0,
          3543.0,
          555.0
        ],
        "gender": [
          19425.0,
          14803.0,
          108767.0
        ],
        "dir": {
          "0": {
            "in": 15823.0,
            "out": 15243.0,
            "total": 31066.0
          },
          "1": {
            "in": 17257.0,
            "out": 17896.0,
            "total": 35153.0
          },
          "2": {
            "in": 22908.0,
            "out": 17996.0,
            "total": 40928.0
          },
          "3": {
            "in": 17608.0,
            "out": 18240.0,
            "total": 35848.0
          }
        },
        "total": 142995.0,
        "days": 31
      },
      "2024-09": {
        "hour": [
          725.0,
          417.0,
          331.0,
          272.0,
          517.0,
          1332.0,
          1991.0,
          4884.0,
          6674.0,
          6899.0,
          10422.0,
          16356.0,
          17886.0,
          17713.0,
          18046.0,
          17567.0,
          16067.0,
          13122.0,
          10404.0,
          7389.0,
          4094.0,
          2884.0,
          1704.0,
          1081.0
        ],
        "age": [
          284.0,
          1663.0,
          6468.0,
          15679.0,
          14710.0,
          8229.0,
          3564.0,
          540.0
        ],
        "gender": [
          27363.0,
          23774.0,
          127640.0
        ],
        "dir": {
          "0": {
            "in": 22785.0,
            "out": 22315.0,
            "total": 45100.0
          },
          "1": {
            "in": 20080.0,
            "out": 20389.0,
            "total": 40469.0
          },
          "2": {
            "in": 24450.0,
            "out": 20752.0,
            "total": 45202.0
          },
          "3": {
            "in": 23182.0,
            "out": 24824.0,
            "total": 48006.0
          }
        },
        "total": 178777.0,
        "days": 30
      },
      "2024-10": {
        "hour": [
          702.0,
          403.0,
          293.0,
          260.0,
          520.0,
          1058.0,
          2118.0,
          5199.0,
          6910.0,
          7373.0,
          11569.0,
          16587.0,
          19718.0,
          18546.0,
          20097.0,
          19098.0,
          14539.0,
          12378.0,
          9086.0,
          6156.0,
          3762.0,
          2843.0,
          1407.0,
          809.0
        ],
        "age": [
          331.0,
          1673.0,
          6003.0,
          15538.0,
          15670.0,
          9430.0,
          4099.0,
          574.0
        ],
        "gender": [
          26954.0,
          26442.0,
          128035.0
        ],
        "dir": {
          "0": {
            "in": 22629.0,
            "out": 22892.0,
            "total": 45568.0
          },
          "1": {
            "in": 22038.0,
            "out": 20543.0,
            "total": 42581.0
          },
          "2": {
            "in": 24203.0,
            "out": 20619.0,
            "total": 44822.0
          },
          "3": {
            "in": 23222.0,
            "out": 25238.0,
            "total": 48460.0
          }
        },
        "total": 181431.0,
        "days": 31
      },
      "2024-11": {
        "hour": [
          607.0,
          348.0,
          309.0,
          325.0,
          522.0,
          1037.0,
          2128.0,
          5159.0,
          6659.0,
          7506.0,
          13193.0,
          20873.0,
          23671.0,
          22679.0,
          22282.0,
          19059.0,
          15101.0,
          12612.0,
          8680.0,
          5518.0,
          2997.0,
          2441.0,
          1347.0,
          808.0
        ],
        "age": [
          329.0,
          1617.0,
          5860.0,
          17151.0,
          18191.0,
          10564.0,
          4799.0,
          636.0
        ],
        "gender": [
          28057.0,
          31090.0,
          136714.0
        ],
        "dir": {
          "0": {
            "in": 20787.0,
            "out": 20822.0,
            "total": 41609.0
          },
          "1": {
            "in": 24218.0,
            "out": 23185.0,
            "total": 47403.0
          },
          "2": {
            "in": 28186.0,
            "out": 23809.0,
            "total": 51995.0
          },
          "3": {
            "in": 26864.0,
            "out": 27990.0,
            "total": 54854.0
          }
        },
        "total": 195861.0,
        "days": 30
      },
      "2024-12": {
        "hour": [
          609.0,
          358.0,
          230.0,
          200.0,
          284.0,
          928.0,
          1605.0,
          3866.0,
          7213.0,
          5909.0,
          9780.0,
          13950.0,
          15133.0,
          15037.0,
          15614.0,
          14380.0,
          12854.0,
          11517.0,
          8371.0,
          5883.0,
          4040.0,
          2819.0,
          1540.0,
          885.0
        ],
        "age": [
          335.0,
          1403.0,
          5312.0,
          13070.0,
          14138.0,
          9808.0,
          4365.0,
          541.0
        ],
        "gender": [
          22997.0,
          25975.0,
          104033.0
        ],
        "dir": {
          "0": {
            "in": 21219.0,
            "out": 22457.0,
            "total": 43676.0
          },
          "1": {
            "in": 19617.0,
            "out": 17784.0,
            "total": 37401.0
          },
          "2": {
            "in": 18107.0,
            "out": 14735.0,
            "total": 32842.0
          },
          "3": {
            "in": 18657.0,
            "out": 20429.0,
            "total": 39086.0
          }
        },
        "total": 153005.0,
        "days": 31
      },
      "2025-01": {
        "hour": [
          653.0,
          360.0,
          259.0,
          155.0,
          301.0,
          1030.0,
          1251.0,
          3708.0,
          6620.0,
          5065.0,
          8346.0,
          12031.0,
          13502.0,
          12761.0,
          14140.0,
          13830.0,
          12831.0,
          10844.0,
          7467.0,
          5046.0,
          3074.0,
          2457.0,
          1171.0,
          705.0
        ],
        "age": [
          291.0,
          1183.0,
          4912.0,
          11918.0,
          13063.0,
          8851.0,
          3995.0,
          483.0
        ],
        "gender": [
          20414.0,
          24282.0,
          92911.0
        ],
        "dir": {
          "0": {
            "in": 20061.0,
            "out": 20562.0,
            "total": 40623.0
          },
          "1": {
            "in": 17588.0,
            "out": 16261.0,
            "total": 33849.0
          },
          "2": {
            "in": 16427.0,
            "out": 12855.0,
            "total": 29282.0
          },
          "3": {
            "in": 16114.0,
            "out": 17739.0,
            "total": 33853.0
          }
        },
        "total": 137607.0,
        "days": 31
      },
      "2025-02": {
        "hour": [
          645.0,
          392.0,
          325.0,
          166.0,
          315.0,
          1112.0,
          1004.0,
          3565.0,
          5898.0,
          5541.0,
          10842.0,
          15477.0,
          17260.0,
          17028.0,
          17684.0,
          16298.0,
          15297.0,
          12687.0,
          7831.0,
          4996.0,
          3010.0,
          2085.0,
          1019.0,
          826.0
        ],
        "age": [
          294.0,
          1389.0,
          6230.0,
          16824.0,
          16115.0,
          9572.0,
          3882.0,
          495.0
        ],
        "gender": [
          24654.0,
          30147.0,
          106502.0
        ],
        "dir": {
          "0": {
            "in": 20485.0,
            "out": 21117.0,
            "total": 41602.0
          },
          "1": {
            "in": 18312.0,
            "out": 17412.0,
            "total": 35724.0
          },
          "2": {
            "in": 20383.0,
            "out": 17239.0,
            "total": 37622.0
          },
          "3": {
            "in": 23151.0,
            "out": 23204.0,
            "total": 46355.0
          }
        },
        "total": 161303.0,
        "days": 28
      },
      "2025-03": {
        "hour": [
          909.0,
          578.0,
          451.0,
          428.0,
          423.0,
          896.0,
          1170.0,
          3431.0,
          5953.0,
          6069.0,
          11668.0,
          19431.0,
          23523.0,
          22915.0,
          23277.0,
          21873.0,
          20103.0,
          16599.0,
          10417.0,
          6695.0,
          3741.0,
          2382.0,
          1572.0,
          1022.0
        ],
        "age": [
          468.0,
          1809.0,
          7824.0,
          21560.0,
          20066.0,
          11062.0,
          4477.0,
          628.0
        ],
        "gender": [
          32995.0,
          34899.0,
          137632.0
        ],
        "dir": {
          "0": {
            "in": 26455.0,
            "out": 26573.0,
            "total": 53028.0
          },
          "1": {
            "in": 23259.0,
            "out": 22221.0,
            "total": 45480.0
          },
          "2": {
            "in": 27426.0,
            "out": 22472.0,
            "total": 49898.0
          },
          "3": {
            "in": 27459.0,
            "out": 29661.0,
            "total": 57120.0
          }
        },
        "total": 205526.0,
        "days": 31
      },
      "2025-04": {
        "hour": [
          801.0,
          475.0,
          438.0,
          341.0,
          382.0,
          809.0,
          1445.0,
          4472.0,
          6834.0,
          6844.0,
          11150.0,
          14764.0,
          16927.0,
          16445.0,
          16852.0,
          17242.0,
          15596.0,
          13876.0,
          10250.0,
          7728.0,
          4399.0,
          3267.0,
          1572.0,
          932.0
        ],
        "age": [
          378.0,
          1723.0,
          6076.0,
          14662.0,
          15698.0,
          10100.0,
          4474.0,
          584.0
        ],
        "gender": [
          26995.0,
          26700.0,
          120146.0
        ],
        "dir": {
          "0": {
            "in": 24361.0,
            "out": 23281.0,
            "total": 47642.0
          },
          "1": {
            "in": 20985.0,
            "out": 21219.0,
            "total": 42204.0
          },
          "2": {
            "in": 20892.0,
            "out": 17753.0,
            "total": 38645.0
          },
          "3": {
            "in": 21983.0,
            "out": 23367.0,
            "total": 45350.0
          }
        },
        "total": 173841.0,
        "days": 30
      },
      "2025-05": {
        "hour": [
          551.0,
          289.0,
          191.0,
          157.0,
          357.0,
          1015.0,
          1488.0,
          4864.0,
          6877.0,
          6066.0,
          11153.0,
          17168.0,
          17662.0,
          17016.0,
          16756.0,
          16014.0,
          15268.0,
          14655.0,
          9719.0,
          6801.0,
          3710.0,
          2900.0,
          1404.0,
          840.0
        ],
        "age": [
          362.0,
          1983.0,
          6439.0,
          14833.0,
          15246.0,
          8243.0,
          3399.0,
          506.0
        ],
        "gender": [
          26358.0,
          24764.0,
          121799.0
        ],
        "dir": {
          "0": {
            "in": 20291.0,
            "out": 20573.0,
            "total": 40864.0
          },
          "1": {
            "in": 19383.0,
            "out": 18426.0,
            "total": 37809.0
          },
          "2": {
            "in": 21702.0,
            "out": 17618.0,
            "total": 39331.0
          },
          "3": {
            "in": 27453.0,
            "out": 27454.0,
            "total": 54917.0
          }
        },
        "total": 172921.0,
        "days": 31
      },
      "2025-06": {
        "hour": [
          476.0,
          347.0,
          215.0,
          120.0,
          261.0,
          1060.0,
          1488.0,
          4038.0,
          6270.0,
          5183.0,
          7452.0,
          9981.0,
          10921.0,
          10748.0,
          10587.0,
          10507.0,
          10178.0,
          10400.0,
          7855.0,
          5428.0,
          2895.0,
          2359.0,
          1152.0,
          602.0
        ],
        "age": [
          241.0,
          1277.0,
          3574.0,
          7453.0,
          8585.0,
          5954.0,
          2975.0,
          489.0
        ],
        "gender": [
          16393.0,
          14219.0,
          89911.0
        ],
        "dir": {
          "0": {
            "in": 14133.0,
            "out": 13968.0,
            "total": 28101.0
          },
          "1": {
            "in": 16323.0,
            "out": 15683.0,
            "total": 32006.0
          },
          "2": {
            "in": 15339.0,
            "out": 12224.0,
            "total": 27563.0
          },
          "3": {
            "in": 15956.0,
            "out": 16887.0,
            "total": 32853.0
          }
        },
        "total": 120523.0,
        "days": 30
      },
      "2025-07": {
        "hour": [
          724.0,
          491.0,
          460.0,
          384.0,
          483.0,
          1432.0,
          1923.0,
          3640.0,
          6297.0,
          5283.0,
          6427.0,
          8462.0,
          10703.0,
          9949.0,
          8992.0,
          9322.0,
          9752.0,
          10107.0,
          8461.0,
          5080.0,
          3234.0,
          2332.0,
          1462.0,
          861.0
        ],
        "age": [
          172.0,
          948.0,
          2804.0,
          6147.0,
          7386.0,
          5442.0,
          2514.0,
          390.0
        ],
        "gender": [
          14233.0,
          11569.0,
          90459.0
        ],
        "dir": {
          "0": {
            "in": 13848.0,
            "out": 13490.0,
            "total": 27338.0
          },
          "1": {
            "in": 15577.0,
            "out": 15274.0,
            "total": 30851.0
          },
          "2": {
            "in": 13891.0,
            "out": 10532.0,
            "total": 24423.0
          },
          "3": {
            "in": 16240.0,
            "out": 17409.0,
            "total": 33649.0
          }
        },
        "total": 116261.0,
        "days": 31
      },
      "2025-08": {
        "hour": [
          630.0,
          245.0,
          212.0,
          228.0,
          335.0,
          1137.0,
          1954.0,
          2946.0,
          5237.0,
          5110.0,
          7665.0,
          13800.0,
          14793.0,
          13572.0,
          12146.0,
          12126.0,
          12007.0,
          13170.0,
          10783.0,
          7782.0,
          5657.0,
          3109.0,
          1503.0,
          792.0
        ],
        "age": [
          181.0,
          1117.0,
          4115.0,
          10883.0,
          12109.0,
          7055.0,
          2870.0,
          434.0
        ],
        "gender": [
          20922.0,
          17956.0,
          108061.0
        ],
        "dir": {
          "0": {
            "in": 13580.0,
            "out": 13546.0,
            "total": 27141.0
          },
          "1": {
            "in": 17215.0,
            "out": 17675.0,
            "total": 34890.0
          },
          "2": {
            "in": 21205.0,
            "out": 16994.0,
            "total": 38210.0
          },
          "3": {
            "in": 23210.0,
            "out": 23488.0,
            "total": 46698.0
          }
        },
        "total": 146939.0,
        "days": 31
      },
      "2025-09": {
        "hour": [
          504.0,
          274.0,
          189.0,
          210.0,
          361.0,
          840.0,
          1696.0,
          3914.0,
          5691.0,
          5033.0,
          7970.0,
          12868.0,
          15440.0,
          14310.0,
          13357.0,
          12947.0,
          13523.0,
          11774.0,
          8786.0,
          6198.0,
          3510.0,
          2376.0,
          1557.0,
          806.0
        ],
        "age": [
          216.0,
          1253.0,
          5125.0,
          13809.0,
          12612.0,
          6797.0,
          2981.0,
          460.0
        ],
        "gender": [
          23528.0,
          19861.0,
          100745.0
        ],
        "dir": {
          "0": {
            "in": 12026.0,
            "out": 12300.0,
            "total": 24356.0
          },
          "1": {
            "in": 16660.0,
            "out": 16039.0,
            "total": 32699.0
          },
          "2": {
            "in": 21851.0,
            "out": 17898.0,
            "total": 39749.0
          },
          "3": {
            "in": 23593.0,
            "out": 23737.0,
            "total": 47330.0
          }
        },
        "total": 144134.0,
        "days": 30
      },
      "2025-10": {
        "hour": [
          485.0,
          256.0,
          162.0,
          150.0,
          345.0,
          769.0,
          1356.0,
          3952.0,
          6216.0,
          5759.0,
          9268.0,
          13966.0,
          16400.0,
          14608.0,
          13694.0,
          14084.0,
          11867.0,
          10333.0,
          7973.0,
          5335.0,
          3192.0,
          2253.0,
          1349.0,
          576.0
        ],
        "age": [
          224.0,
          1023.0,
          3710.0,
          12577.0,
          13113.0,
          7694.0,
          3871.0,
          675.0
        ],
        "gender": [
          21888.0,
          21067.0,
          101393.0
        ],
        "dir": {
          "0": {
            "in": 11344.0,
            "out": 11570.0,
            "total": 22929.0
          },
          "1": {
            "in": 16243.0,
            "out": 15461.0,
            "total": 31704.0
          },
          "2": {
            "in": 23343.0,
            "out": 18064.0,
            "total": 41407.0
          },
          "3": {
            "in": 23767.0,
            "out": 24541.0,
            "total": 48308.0
          }
        },
        "total": 144348.0,
        "days": 31
      },
      "2025-11": {
        "hour": [
          353.0,
          187.0,
          108.0,
          100.0,
          275.0,
          657.0,
          1283.0,
          3380.0,
          5617.0,
          5664.0,
          10299.0,
          17581.0,
          21725.0,
          20986.0,
          20412.0,
          18037.0,
          15727.0,
          13469.0,
          8891.0,
          5571.0,
          3121.0,
          2112.0,
          1215.0,
          627.0
        ],
        "age": [
          171.0,
          960.0,
          4111.0,
          16309.0,
          18556.0,
          11160.0,
          4850.0,
          738.0
        ],
        "gender": [
          28124.0,
          29760.0,
          119513.0
        ],
        "dir": {
          "0": {
            "in": 13080.0,
            "out": 12661.0,
            "total": 25818.0
          },
          "1": {
            "in": 22421.0,
            "out": 21844.0,
            "total": 44265.0
          },
          "2": {
            "in": 25536.0,
            "out": 21231.0,
            "total": 46878.0
          },
          "3": {
            "in": 31063.0,
            "out": 29373.0,
            "total": 60436.0
          }
        },
        "total": 177397.0,
        "days": 30
      },
      "2025-12": {
        "hour": [
          383.0,
          165.0,
          112.0,
          172.0,
          149.0,
          395.0,
          1081.0,
          2478.0,
          4753.0,
          4849.0,
          8929.0,
          13565.0,
          15967.0,
          14990.0,
          14899.0,
          12372.0,
          11024.0,
          9594.0,
          7124.0,
          4782.0,
          2686.0,
          1862.0,
          1013.0,
          626.0
        ],
        "age": [
          93.0,
          549.0,
          2076.0,
          7648.0,
          9622.0,
          6288.0,
          2867.0,
          275.0
        ],
        "gender": [
          15367.0,
          15803.0,
          102800.0
        ],
        "dir": {
          "0": {
            "in": 8766.0,
            "out": 8176.0,
            "total": 17002.0
          },
          "1": {
            "in": 16187.0,
            "out": 13240.0,
            "total": 29427.0
          },
          "2": {
            "in": 23110.0,
            "out": 19938.0,
            "total": 43251.0
          },
          "3": {
            "in": 21898.0,
            "out": 22392.0,
            "total": 44290.0
          }
        },
        "total": 133970.0,
        "days": 31
      },
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
        "rep_date": "2024-08-10",
        "rep_flow": 4193,
        "uplift_pct": -32.5
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
        "rep_date": "2025-04-06",
        "rep_flow": 10084,
        "uplift_pct": 73.9
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
        "rep_date": "2024-09-21",
        "rep_flow": 8724,
        "uplift_pct": 40.4
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
        "rep_date": "2024-12-07",
        "rep_flow": 5836,
        "uplift_pct": -6.1
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
        "rep_date": "2024-10-19",
        "rep_flow": 6428,
        "uplift_pct": 3.4
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
        "rep_date": "2024-12-22",
        "rep_flow": 5077,
        "uplift_pct": -12.5
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
        "rep_date": "2025-03-26",
        "rep_flow": 6659,
        "uplift_pct": 68.8
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
        "rep_date": "2025-08-09",
        "rep_flow": 5243,
        "uplift_pct": -15.6
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
        "rep_date": "2024-09-29",
        "rep_flow": 6527,
        "uplift_pct": 12.5
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
        "rep_date": "2024-10-12",
        "rep_flow": 8245,
        "uplift_pct": 32.7
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
        "rep_date": "2024-07-20",
        "rep_flow": 4055,
        "uplift_pct": -34.7
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
        "rep_date": "2024-08-03",
        "rep_flow": 16502,
        "uplift_pct": 165.6
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
        "rep_date": "2024-08-10",
        "rep_flow": 4193,
        "uplift_pct": -32.5
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
        "rep_date": "2024-08-10",
        "rep_flow": 4193,
        "uplift_pct": -32.5
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
        "rep_date": "2024-08-17",
        "rep_flow": 4267,
        "uplift_pct": -31.3
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
        "rep_date": "2024-09-14",
        "rep_flow": 7935,
        "uplift_pct": 27.7
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
        "rep_date": "2024-09-14",
        "rep_flow": 7935,
        "uplift_pct": 27.7
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
        "rep_date": "2024-09-14",
        "rep_flow": 7935,
        "uplift_pct": 27.7
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
        "rep_date": "2024-09-14",
        "rep_flow": 7935,
        "uplift_pct": 27.7
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
        "rep_date": "2024-09-14",
        "rep_flow": 7935,
        "uplift_pct": 27.7
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
        "rep_date": "2024-09-15",
        "rep_flow": 7735,
        "uplift_pct": 33.4
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
        "rep_date": "2024-09-29",
        "rep_flow": 6527,
        "uplift_pct": 12.5
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
        "rep_date": "2024-10-05",
        "rep_flow": 6765,
        "uplift_pct": 8.9
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
        "rep_date": "2024-11-02",
        "rep_flow": 6059,
        "uplift_pct": -2.5
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
        "rep_date": "2024-11-02",
        "rep_flow": 6059,
        "uplift_pct": -2.5
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
        "rep_date": "2024-12-06",
        "rep_flow": 4607,
        "uplift_pct": 10.6
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
        "rep_date": "2024-12-06",
        "rep_flow": 4607,
        "uplift_pct": 10.6
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
        "rep_date": "2024-12-07",
        "rep_flow": 5836,
        "uplift_pct": -6.1
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
        "rep_date": "2024-12-14",
        "rep_flow": 5801,
        "uplift_pct": -6.6
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
        "rep_date": "2024-12-14",
        "rep_flow": 5801,
        "uplift_pct": -6.6
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
        "rep_date": "2024-12-14",
        "rep_flow": 5801,
        "uplift_pct": -6.6
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
        "rep_date": "2024-12-15",
        "rep_flow": 10091,
        "uplift_pct": 74.0
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
        "rep_date": "2024-12-15",
        "rep_flow": 10091,
        "uplift_pct": 74.0
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
        "rep_date": "2024-12-26",
        "rep_flow": 4816,
        "uplift_pct": 15.7
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
        "rep_date": "2024-12-26",
        "rep_flow": 4816,
        "uplift_pct": 15.7
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
        "rep_date": "2024-12-26",
        "rep_flow": 4816,
        "uplift_pct": 15.7
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
        "rep_date": "2025-01-04",
        "rep_flow": 5146,
        "uplift_pct": -17.2
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
        "rep_date": "2025-01-14",
        "rep_flow": 4324,
        "uplift_pct": 1.6
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
        "rep_date": "2025-02-02",
        "rep_flow": 4363,
        "uplift_pct": -24.8
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
        "rep_date": "2025-03-07",
        "rep_flow": 5548,
        "uplift_pct": 33.2
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
        "rep_date": "2025-03-15",
        "rep_flow": 5947,
        "uplift_pct": -4.3
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
        "rep_date": "2025-03-26",
        "rep_flow": 6659,
        "uplift_pct": 68.8
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
        "rep_date": "2025-04-18",
        "rep_flow": 4734,
        "uplift_pct": 13.7
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
        "rep_date": "2025-04-19",
        "rep_flow": 8095,
        "uplift_pct": 30.3
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
        "rep_date": "2025-04-19",
        "rep_flow": 8095,
        "uplift_pct": 30.3
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
        "rep_date": "2025-05-03",
        "rep_flow": 9101,
        "uplift_pct": 46.5
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
        "rep_date": "2025-05-03",
        "rep_flow": 9101,
        "uplift_pct": 46.5
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
        "rep_date": "2025-05-18",
        "rep_flow": 6456,
        "uplift_pct": 11.3
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
        "rep_date": "2025-05-24",
        "rep_flow": 4837,
        "uplift_pct": -22.2
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
        "rep_date": "2025-05-31",
        "rep_flow": 5373,
        "uplift_pct": -13.5
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
        "rep_date": "2025-06-21",
        "rep_flow": 5069,
        "uplift_pct": -18.4
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
        "rep_date": "2025-06-28",
        "rep_flow": 5113,
        "uplift_pct": -17.7
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
        "rep_date": "2025-07-01",
        "rep_flow": 3349,
        "uplift_pct": -21.3
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
        "rep_date": "2025-07-12",
        "rep_flow": 4474,
        "uplift_pct": -28.0
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
        "rep_date": "2025-07-18",
        "rep_flow": 4172,
        "uplift_pct": 0.2
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
        "rep_date": "2025-08-02",
        "rep_flow": 12326,
        "uplift_pct": 98.4
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
        "rep_date": "2025-08-05",
        "rep_flow": 3394,
        "uplift_pct": -20.3
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
        "rep_date": "2025-08-11",
        "rep_flow": 5926,
        "uplift_pct": 36.2
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
        "rep_date": "2025-08-22",
        "rep_flow": 4631,
        "uplift_pct": 11.2
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
        "rep_date": "2025-09-06",
        "rep_flow": 5739,
        "uplift_pct": -7.6
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
        "rep_date": "2025-09-08",
        "rep_flow": 4023,
        "uplift_pct": -7.6
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
        "rep_date": "2025-09-09",
        "rep_flow": 4375,
        "uplift_pct": 2.7
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
        "rep_date": "2025-09-20",
        "rep_flow": 5612,
        "uplift_pct": -9.7
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
        "rep_date": "2025-09-20",
        "rep_flow": 5612,
        "uplift_pct": -9.7
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
        "rep_date": "2025-09-20",
        "rep_flow": 5612,
        "uplift_pct": -9.7
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
        "rep_date": "2025-09-21",
        "rep_flow": 8647,
        "uplift_pct": 49.1
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
        "rep_date": "2025-09-27",
        "rep_flow": 5693,
        "uplift_pct": -8.4
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
        "rep_date": "2025-09-28",
        "rep_flow": 6312,
        "uplift_pct": 8.8
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
        "rep_date": "2025-10-03",
        "rep_flow": 4032,
        "uplift_pct": -3.2
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
        "rep_date": "2025-10-11",
        "rep_flow": 6363,
        "uplift_pct": 2.4
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
        "rep_date": "2025-10-17",
        "rep_flow": 4392,
        "uplift_pct": 5.5
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
        "rep_date": "2025-10-18",
        "rep_flow": 6882,
        "uplift_pct": 10.7
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
        "rep_date": "2025-10-18",
        "rep_flow": 6882,
        "uplift_pct": 10.7
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
        "rep_date": "2025-10-18",
        "rep_flow": 6882,
        "uplift_pct": 10.7
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
        "rep_date": "2025-10-19",
        "rep_flow": 9346,
        "uplift_pct": 61.1
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
        "rep_date": "2025-10-19",
        "rep_flow": 9346,
        "uplift_pct": 61.1
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
        "rep_date": "2025-10-19",
        "rep_flow": 9346,
        "uplift_pct": 61.1
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
        "rep_date": "2025-10-23",
        "rep_flow": 4751,
        "uplift_pct": 14.2
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
        "rep_date": "2025-10-25",
        "rep_flow": 5713,
        "uplift_pct": -8.1
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
        "rep_date": "2025-11-01",
        "rep_flow": 9371,
        "uplift_pct": 50.8
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
        "rep_date": "2025-11-01",
        "rep_flow": 9371,
        "uplift_pct": 50.8
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
        "rep_date": "2025-11-01",
        "rep_flow": 9371,
        "uplift_pct": 50.8
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
        "rep_date": "2025-11-01",
        "rep_flow": 9371,
        "uplift_pct": 50.8
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
        "rep_date": "2025-11-02",
        "rep_flow": 14777,
        "uplift_pct": 154.8
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
        "rep_date": "2025-11-03",
        "rep_flow": 6312,
        "uplift_pct": 45.0
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
        "rep_date": "2025-11-08",
        "rep_flow": 7942,
        "uplift_pct": 27.8
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
        "rep_date": "2025-11-09",
        "rep_flow": 3307,
        "uplift_pct": -43.0
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
        "rep_date": "2025-11-13",
        "rep_flow": 4136,
        "uplift_pct": -0.6
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
        "rep_date": "2025-11-15",
        "rep_flow": 9520,
        "uplift_pct": 53.2
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
        "rep_date": "2025-11-15",
        "rep_flow": 9520,
        "uplift_pct": 53.2
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
        "rep_date": "2025-11-16",
        "rep_flow": 6661,
        "uplift_pct": 14.8
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
        "rep_date": "2025-11-16",
        "rep_flow": 6661,
        "uplift_pct": 14.8
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
        "rep_date": "2025-11-22",
        "rep_flow": 9087,
        "uplift_pct": 46.2
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
        "rep_date": "2025-11-29",
        "rep_flow": 7664,
        "uplift_pct": 23.3
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
        "rep_date": "2025-12-04",
        "rep_flow": 3470,
        "uplift_pct": -16.6
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
        "rep_date": "2025-12-06",
        "rep_flow": 6368,
        "uplift_pct": 2.5
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
        "rep_date": "2025-12-07",
        "rep_flow": 5565,
        "uplift_pct": -4.1
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
        "rep_date": "2025-12-13",
        "rep_flow": 8217,
        "uplift_pct": 32.2
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
        "rep_date": "2025-12-13",
        "rep_flow": 8217,
        "uplift_pct": 32.2
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
        "rep_date": "2025-12-21",
        "rep_flow": 3442,
        "uplift_pct": -40.7
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
        "rep_date": "2025-12-26",
        "rep_flow": 4126,
        "uplift_pct": -0.9
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
        "uplift_pct": -18.8
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
        "uplift_pct": -13.9
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
        "uplift_pct": -13.9
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
        "uplift_pct": -13.9
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
        "uplift_pct": -1.6
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
        "uplift_pct": 22.0
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
        "uplift_pct": 35.8
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
        "uplift_pct": 43.6
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
        "uplift_pct": 50.2
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
        "uplift_pct": 12.3
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
        "uplift_pct": 7.9
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
        "uplift_pct": 23.5
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
        "uplift_pct": 23.5
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
        "uplift_pct": 23.5
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
        "uplift_pct": 23.5
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
        "uplift_pct": 83.2
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
        "uplift_pct": 4.9
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
        "uplift_pct": 4.5
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
        "uplift_pct": 3.0
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
        "uplift_pct": -35.5
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
    "is_dummy": true,
    "source_hint": "本番では国勢調査 小地域集計（e-Stat）から徒歩圏の町丁別人口を集計",
    "walk5_population": 4200,
    "walk10_population": 15800,
    "age_structure": [
      {
        "label": "0-14歳",
        "pct": 10.5
      },
      {
        "label": "15-64歳",
        "pct": 58.2
      },
      {
        "label": "65歳以上",
        "pct": 31.3
      }
    ],
    "household": [
      {
        "label": "単身世帯",
        "pct": 46.0
      },
      {
        "label": "夫婦のみ",
        "pct": 22.0
      },
      {
        "label": "ファミリー",
        "pct": 24.0
      },
      {
        "label": "その他",
        "pct": 8.0
      }
    ],
    "single_ratio": 46.0,
    "elderly_ratio": 31.3,
    "daytime_night_ratio": 1.35
  },
  "rent": {
    "is_dummy": true,
    "source_hint": "本番では不動産情報ライブラリ（地価公示・取引価格）や周辺募集賃料から算出",
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
    "is_dummy": true,
    "items": [
      {
        "label": "都市機能誘導区域",
        "value": "対象エリア内",
        "note": "立地適正化計画"
      },
      {
        "label": "居住誘導区域",
        "value": "対象エリア内",
        "note": "立地適正化計画"
      },
      {
        "label": "QURUWA戦略",
        "value": "回遊動線上の第2目的地",
        "note": "公共空間活用・回遊性向上"
      }
    ]
  },
  "scores": {
    "items": [
      {
        "industry": "カフェ・軽食",
        "people_fit": 100,
        "competition": 52,
        "facility_fit": 85,
        "profitability": 75,
        "reason": "回遊・休憩・待ち合わせ需要と相性。20〜30代と女性の通行が下支え。",
        "total": 80,
        "rank": 1
      },
      {
        "industry": "テイクアウト惣菜・弁当",
        "people_fit": 85,
        "competition": 76,
        "facility_fit": 70,
        "profitability": 74,
        "reason": "昼・夕方の通行と近隣住民・帰宅動線を拾える。",
        "total": 78,
        "rank": 2
      },
      {
        "industry": "居酒屋・カフェバー",
        "people_fit": 76,
        "competition": 68,
        "facility_fit": 65,
        "profitability": 70,
        "reason": "夜間の回遊・食事需要。ただし周辺に競合が多い点に注意。",
        "total": 71,
        "rank": 3
      },
      {
        "industry": "岡崎土産・地物物販",
        "people_fit": 59,
        "competition": 76,
        "facility_fit": 78,
        "profitability": 62,
        "reason": "岡崎城・城下町の観光/散策客に地元商品を訴求しやすい。",
        "total": 68,
        "rank": 4
      },
      {
        "industry": "スイーツ・ベーカリー",
        "people_fit": 85,
        "competition": 20,
        "facility_fit": 80,
        "profitability": 72,
        "reason": "散策・手土産・休日需要に合う。公園回遊動線上で歩き買い需要。",
        "total": 65,
        "rank": 5
      }
    ],
    "method": "総合 = 人流相性×0.35 + 競合の少なさ×0.25 + 近隣施設相性×0.20 + 収益性×0.20。人流相性は実データ（年代・性別・時間帯構成）から算出、競合は半径内店舗数から算出。近隣施設相性・収益性は暫定値（ダミー）。",
    "is_partial_dummy": true
  }
};
