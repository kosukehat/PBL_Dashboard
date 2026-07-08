/* テナント誘致ダッシュボード — 描画ロジック
   データは data.js の window.DASHBOARD_DATA から読み込む。 */

const D = window.DASHBOARD_DATA;

// 業種カテゴリの色
const CAT_COLORS = {
  "飲食店": "#ef4444",
  "カフェ・喫茶": "#a16207",
  "居酒屋・バー": "#7c3aed",
  "スイーツ・ベーカリー": "#ec4899",
  "惣菜・弁当": "#0891b2",
  "物販・食品販売": "#16a34a",
  "その他": "#94a3b8",
};

// QURUWA周辺の主要施設（回遊動線。座標は概算）
const LANDMARKS = [
  { name: "図書館 りぶら", lat: 34.95917, lon: 137.16055 },
  { name: "籠田公園", lat: 34.95820, lon: 137.16330 },
  { name: "桜城橋・乙川", lat: 34.95480, lon: 137.16620 },
  { name: "岡崎公園（岡崎城）", lat: 34.95560, lon: 137.15900 },
  { name: "東岡崎駅", lat: 34.95232, lon: 137.16698 },
];

function haversine(a, b, c, d) {
  const R = 6371000, r = Math.PI / 180;
  const dp = (c - a) * r, dl = (d - b) * r;
  const x = Math.sin(dp / 2) ** 2 + Math.cos(a * r) * Math.cos(c * r) * Math.sin(dl / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}
function fmt(n) { return Number(n).toLocaleString("ja-JP"); }

/* ---------- ナビゲーション ---------- */
document.querySelectorAll(".nav-item").forEach(el => {
  el.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    el.classList.add("active");
    document.getElementById(el.dataset.target).classList.add("active");
    // 地図はタブ表示後にサイズ再計算が必要
    setTimeout(() => { if (maps[el.dataset.target]) maps[el.dataset.target].invalidateSize(); }, 60);
    window.scrollTo(0, 0);
  });
});

const maps = {};

function activateScreen(target) {
  const el = document.querySelector(`.nav-item[data-target="${target}"]`);
  if (!el) return;
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  el.classList.add("active");
  document.getElementById(target).classList.add("active");
  setTimeout(() => { if (maps[target]) maps[target].invalidateSize(); }, 60);
}

/* ---------- メタ情報 ---------- */
document.getElementById("metaBuilding").textContent = "対象: " + D.meta.building.address;
document.getElementById("metaGenerated").textContent = "生成: " + D.meta.generated_at;

/* =========================================================
   画面1: 物件サマリー
   ========================================================= */
function renderSummary() {
  const pf = D.peopleflow, st = D.stores, sc = D.scores.items;
  const topPct = pf.by_age.slice().sort((a, b) => b.pct - a.pct)[0];

  const kpis = [
    { cls: "", label: "康生通り 1日平均通行量", value: fmt(pf.total_per_day), unit: "人/日", sub: `カメラ${D.meta.cameras.length}台の合計` },
    { cls: "sky", label: `半径${st.radius_m}m 周辺店舗`, value: fmt(st.points.length), unit: "件", sub: "食品営業許可ベース" },
    { cls: "good", label: "徒歩5分圏 人口", value: fmt(D.demographics.walk5_population), unit: "人", sub: "※ダミー" },
    { cls: "accent", label: "おすすめ業種 1位", value: sc[0].industry, unit: "", sub: `スコア ${sc[0].total}` },
  ];
  document.getElementById("kpiGrid").innerHTML = kpis.map(k => `
    <div class="kpi ${k.cls}">
      <div class="k-label">${k.label}</div>
      <div class="k-value">${k.value}<span class="k-unit">${k.unit}</span></div>
      <div class="k-sub">${k.sub}</div>
    </div>`).join("");

  // 地図
  const b = D.meta.building;
  const map = L.map("summaryMap").setView([b.lat, b.lon], 16);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap", maxZoom: 19,
  }).addTo(map);
  maps.summary = map;

  // 物件
  L.marker([b.lat, b.lon]).addTo(map).bindPopup("<b>対象物件</b><br>" + b.address).openPopup();
  L.circle([b.lat, b.lon], { radius: st.radius_m, color: "#2563eb", weight: 1, fillOpacity: 0.05 }).addTo(map);

  // カメラ
  D.meta.cameras.forEach(c => {
    L.circleMarker([c.lat, c.lon], { radius: 6, color: "#0ea5e9", fillColor: "#0ea5e9", fillOpacity: .9 })
      .addTo(map).bindPopup("人流カメラ: " + c.name);
  });
  // 店舗（薄く）
  st.points.forEach(p => {
    L.circleMarker([p.lat, p.lon], { radius: 3, color: CAT_COLORS[p.category] || "#94a3b8", fillOpacity: .6, weight: 0 }).addTo(map);
  });
  // ランドマーク
  LANDMARKS.forEach(l => {
    L.marker([l.lat, l.lon], { opacity: .75 }).addTo(map).bindPopup(l.name);
  });

  document.getElementById("summaryLegend").innerHTML = `
    <span><span class="dot" style="background:#2563eb"></span>対象物件・商圏円</span>
    <span><span class="dot" style="background:#0ea5e9"></span>人流カメラ</span>
    <span><span class="dot" style="background:#ef4444"></span>周辺店舗</span>
    <span>📍 主要施設</span>`;

  // ランドマーク距離
  const ll = LANDMARKS.map(l => ({ ...l, d: haversine(b.lat, b.lon, l.lat, l.lon) }))
    .sort((a, x) => a.d - x.d);
  document.getElementById("landmarkList").innerHTML = ll.map(l => `
    <div class="landmark"><span>${l.name}</span>
    <span class="dist">${l.d < 1000 ? Math.round(l.d) + " m" : (l.d / 1000).toFixed(1) + " km"}</span></div>`).join("");

  // TOP3
  document.getElementById("topPicks").innerHTML = sc.slice(0, 3).map(s => `
    <div class="pick"><div class="rank">${s.rank}</div>
    <div class="pname">${s.industry}</div><div class="pscore">${s.total}</div></div>`).join("");
}

/* =========================================================
   画面2: 人流分析（時系列・イベント統合・期間指定対応）
   ========================================================= */
const PF_DOW = ["月", "火", "水", "木", "金", "土", "日"];
const AGE_PALETTE = [
  "#38bdf8", "#4ade80", "#facc15", "#fb923c",
  "#f87171", "#c084fc", "#f472b6", "#94a3b8",
];
let peopleCharts = {};   // canvasId -> Chart インスタンス
let tsChart = null;
let tsMode = "monthly";
let periodFrom = null, periodTo = null;
let selectedTsDate = null;
let tsDailyCache = [];

function monthsList() {
  return D.peopleflow.timeseries.monthly.map(m => m.ym);
}

function setupPeoplePeriod() {
  const months = monthsList();
  const fromSel = document.getElementById("fromMonth");
  const toSel = document.getElementById("toMonth");
  const opts = months.map(m => `<option value="${m}">${m}</option>`).join("");
  fromSel.innerHTML = opts;
  toSel.innerHTML = opts;
  periodFrom = months[0];
  periodTo = months[months.length - 1];
  fromSel.value = periodFrom;
  toSel.value = periodTo;

  fromSel.addEventListener("change", () => { periodFrom = fromSel.value; clampPeriod(); clearPreset(); updatePeople(); });
  toSel.addEventListener("change", () => { periodTo = toSel.value; clampPeriod(); clearPreset(); updatePeople(); });

  document.querySelectorAll("#periodPreset button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#periodPreset button").forEach(b => b.classList.remove("on"));
      btn.classList.add("on");
      const p = btn.dataset.preset;
      periodFrom = (p === "all") ? months[0] : months[Math.max(0, months.length - parseInt(p, 10))];
      periodTo = months[months.length - 1];
      fromSel.value = periodFrom;
      toSel.value = periodTo;
      updatePeople();
    });
  });

  document.querySelectorAll("#tsToggle button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#tsToggle button").forEach(b => b.classList.remove("on"));
      btn.classList.add("on");
      tsMode = btn.dataset.mode;
      hideTsDayEvents();
      updatePeople();
    });
  });

  document.getElementById("tsDayEventsClose").addEventListener("click", hideTsDayEvents);
}

function clampPeriod() {
  if (periodFrom > periodTo) {
    const t = periodFrom; periodFrom = periodTo; periodTo = t;
    document.getElementById("fromMonth").value = periodFrom;
    document.getElementById("toMonth").value = periodTo;
  }
}
function clearPreset() {
  document.querySelectorAll("#periodPreset button").forEach(b => b.classList.remove("on"));
}
function selectedMonths() {
  return monthsList().filter(m => m >= periodFrom && m <= periodTo);
}
function filteredDaily() {
  const start = periodFrom + "-01", end = periodTo + "-31";
  return D.peopleflow.timeseries.daily.filter(d => d.date >= start && d.date <= end);
}

function aggregatePeriod() {
  const mb = D.peopleflow.monthly_breakdown;
  const sel = selectedMonths();
  const hour = Array(24).fill(0), age = Array(8).fill(0), gender = Array(3).fill(0);
  const dir = {};
  let total = 0, days = 0;
  sel.forEach(ym => {
    const b = mb[ym];
    if (!b) return;
    days += b.days || 0;
    total += b.total || 0;
    for (let i = 0; i < 24; i++) hour[i] += b.hour[i] || 0;
    for (let i = 0; i < 8; i++) age[i] += b.age[i] || 0;
    for (let i = 0; i < 3; i++) gender[i] += b.gender[i] || 0;
    Object.entries(b.dir || {}).forEach(([cid, v]) => {
      const d = dir[cid] || (dir[cid] = { in: 0, out: 0, total: 0 });
      d.in += v.in; d.out += v.out; d.total += v.total;
    });
  });
  return { sel, hour, age, gender, dir, total, days };
}

function chartAt(id, config) {
  if (peopleCharts[id]) peopleCharts[id].destroy();
  config.options = config.options || {};
  config.options.responsive = true;
  config.options.maintainAspectRatio = false;
  peopleCharts[id] = new Chart(document.getElementById(id), config);
}

function updatePeople() {
  const grid = "#e2e8f0";
  const agg = aggregatePeriod();
  const days = Math.max(agg.days, 1);
  const daily = filteredDaily();
  tsDailyCache = daily;
  hideTsDayEvents();

  const byHour = agg.hour.map(v => Math.round(v / days * 10) / 10);
  const peakHour = byHour.indexOf(Math.max(...byHour));

  // 曜日別（フィルタ後の日次から平均）
  const dowSum = Array(7).fill(0), dowDays = Array(7).fill(0);
  daily.forEach(d => { dowSum[d.dow] += d.count; dowDays[d.dow]++; });
  const byDow = dowSum.map((s, i) => dowDays[i] ? Math.round(s / dowDays[i]) : 0);

  // 平日 / 休日
  let wSum = 0, wDays = 0, hSum = 0, hDays = 0;
  daily.forEach(d => { if (d.is_holiday) { hSum += d.count; hDays++; } else { wSum += d.count; wDays++; } });
  const whAvg = [wDays ? Math.round(wSum / wDays) : 0, hDays ? Math.round(hSum / hDays) : 0];

  const ageTotal = agg.age.reduce((a, b) => a + b, 0) || 1;
  const agePct = agg.age.map(v => Math.round(1000 * v / ageTotal) / 10);
  const genderTotal = agg.gender.reduce((a, b) => a + b, 0) || 1;
  const genderPct = agg.gender.map(v => Math.round(1000 * v / genderTotal) / 10);
  const totalPerDay = Math.round(agg.total / days);

  // 期間情報 + KPI
  document.getElementById("periodInfo").textContent =
    `${agg.sel.length}か月 / ${fmt(days)}日 / のべ ${fmt(Math.round(agg.total))} 人`;

  const monthlySel = D.peopleflow.timeseries.monthly.filter(m => agg.sel.includes(m.ym));
  const hi = monthlySel.slice().sort((a, b) => b.avg - a.avg)[0] || { ym: "-", avg: 0 };
  const lo = monthlySel.slice().sort((a, b) => a.avg - b.avg)[0] || { ym: "-", avg: 0 };
  const holHigher = whAvg[1] > whAvg[0];
  document.getElementById("peopleKpi").innerHTML = [
    { cls: "", label: "1日平均通行量", value: fmt(totalPerDay), unit: "人/日", sub: `${agg.sel.length}か月平均` },
    { cls: "accent", label: "ピーク時間帯", value: peakHour + "時台", unit: "", sub: `約${fmt(byHour[peakHour])}人/日` },
    { cls: "good", label: "最も多い月", value: hi.ym, unit: "", sub: `平均${fmt(hi.avg)}人/日` },
    { cls: "sky", label: "最も少ない月", value: lo.ym, unit: "", sub: `平均${fmt(lo.avg)}人/日` },
  ].map(k => `<div class="kpi ${k.cls}"><div class="k-label">${k.label}</div>
    <div class="k-value" style="font-size:22px">${k.value}<span class="k-unit">${k.unit}</span></div>
    <div class="k-sub">${k.sub}</div></div>`).join("");

  const topAgeIdx = agePct.indexOf(Math.max(...agePct));
  const ageLabels = D.peopleflow.age_labels;
  document.getElementById("peopleLead").innerHTML =
    `選択期間（<b>${periodFrom}〜${periodTo}</b>）の康生通りは、ピークが<b>${peakHour}時台</b>（約${fmt(byHour[peakHour])}人/日）。` +
    `${holHigher ? "休日" : "平日"}の通行が多く（${fmt(holHigher ? whAvg[1] : whAvg[0])}人/日）、年代は<b>${ageLabels[topAgeIdx]}</b>が最多（${agePct[topAgeIdx]}%）。` +
    `<br><span class="muted">※上の期間ボタン／プルダウンで表示期間を変更できます。性別「不明」が多いのはAIカメラの判定特性によるものです。</span>`;

  // 通行量の推移
  drawTimeline(tsMode, daily, agg.sel);

  // 時間帯別
  chartAt("hourChart", {
    type: "bar",
    data: { labels: byHour.map((_, h) => h + "時"), datasets: [{ label: "人/日", data: byHour, backgroundColor: "#2563eb", borderRadius: 4 }] },
    options: { plugins: { legend: { display: false } }, scales: { y: { grid: { color: grid } }, x: { grid: { display: false } } } },
  });
  // 平日/休日
  chartAt("whChart", {
    type: "bar",
    data: { labels: ["平日", "休日"], datasets: [{ data: whAvg, backgroundColor: ["#0ea5e9", "#f59e0b"], borderRadius: 6 }] },
    options: { plugins: { legend: { display: false } }, scales: { y: { grid: { color: grid } } } },
  });
  // 曜日別
  chartAt("dowChart", {
    type: "bar",
    data: { labels: PF_DOW, datasets: [{ data: byDow, backgroundColor: PF_DOW.map((_, i) => i >= 5 ? "#f59e0b" : "#2563eb"), borderRadius: 4 }] },
    options: { plugins: { legend: { display: false } }, scales: { y: { grid: { color: grid } } } },
  });
  // 年代別
  chartAt("ageChart", {
    type: "doughnut",
    data: { labels: ageLabels, datasets: [{ data: agePct, backgroundColor: AGE_PALETTE }] },
    options: { plugins: { legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 10 }, padding: 6 } } } },
  });
  // 性別
  chartAt("genderChart", {
    type: "doughnut",
    data: { labels: D.peopleflow.gender_labels, datasets: [{ data: genderPct, backgroundColor: ["#3b82f6", "#ec4899", "#cbd5e1"] }] },
    options: { plugins: { legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 11 }, padding: 6 } } } },
  });

  // 進行方向テーブル
  const rows = D.peopleflow.direction_meta.map(m => {
    const v = agg.dir[String(m.camera_id)] || { in: 0, out: 0, total: 0 };
    return `<tr><td>${m.name}</td>
      <td>${m.in_dir}<br><b>${fmt(Math.round(v.in / days))}</b> 人/日</td>
      <td>${m.out_dir}<br><b>${fmt(Math.round(v.out / days))}</b> 人/日</td>
      <td><b>${fmt(Math.round(v.total / days))}</b> 人/日</td></tr>`;
  }).join("");
  document.getElementById("directionTable").innerHTML =
    `<div class="table-wrap"><table>
    <tr><th>カメラ</th><th>方向A（入場）</th><th>方向B（退場）</th><th>合計</th></tr>${rows}</table></div>`;

  // イベント
  renderEventTable();
}

function drawTimeline(mode, daily, selMonths) {
  const ts = D.peopleflow.timeseries;
  const ev = (D.events && D.events.items) || [];
  const grid = "#e2e8f0";
  const start = periodFrom + "-01", end = periodTo + "-31";
  let labels, data, note, pointRadius = 0;

  if (mode === "monthly") {
    const rows = ts.monthly.filter(m => selMonths.includes(m.ym));
    labels = rows.map(m => m.ym);
    data = rows.map(m => m.avg);
    note = "月ごとの1日平均通行量。季節性・出店時期の判断に。";
    pointRadius = 3;
  } else if (mode === "weekly") {
    const rows = ts.weekly.filter(w => w.week_start >= start && w.week_start <= end);
    labels = rows.map(w => w.week_start);
    data = rows.map(w => w.avg);
    note = "週ごと（週の1日平均）。短期の増減・施策効果の確認に。";
  } else { // daily
    labels = daily.map(d => d.date);
    data = daily.map(d => d.count);
    note = "日ごとの通行量。オレンジ▲は周辺イベント開催日。点をクリックすると、その日のイベント一覧を下に表示します。";
    pointRadius = daily.length <= 90 ? 3 : 0;
  }

  const pointBg = data.map((_, i) =>
    (mode === "daily" && labels[i] === selectedTsDate) ? "#f59e0b" : "#2563eb");
  const pointRad = data.map((_, i) =>
    (mode === "daily" && labels[i] === selectedTsDate) ? 8 : pointRadius);

  const datasets = [{
    label: "人/日", data,
    borderColor: "#2563eb", backgroundColor: "rgba(37,99,235,.12)",
    borderWidth: 2, fill: true, tension: .25,
    pointRadius: pointRad, pointBackgroundColor: pointBg, pointBorderColor: pointBg,
  }];

  if (mode === "daily") {
    const idx = {};
    daily.forEach((d) => (idx[d.date] = d.count));
    const pts = [];
    ev.forEach(e => {
      if (e.rep_date && idx[e.rep_date] !== undefined) {
        pts.push({ x: e.rep_date, y: idx[e.rep_date], name: e.name });
      }
    });
    if (pts.length) {
      datasets.push({
        label: "イベント", type: "scatter", data: pts,
        pointRadius: 6, pointHoverRadius: 8, showLine: false,
        pointStyle: "triangle", backgroundColor: "#f59e0b", borderColor: "#b45309",
      });
    }
  }

  if (tsChart) tsChart.destroy();
  tsChart = new Chart(document.getElementById("tsChart"), {
    type: "line",
    data: { labels, datasets },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      interaction: { mode: "nearest", intersect: false },
      onClick: (_evt, elements, chart) => {
        if (mode !== "daily" || !elements.length) return;
        const el = elements[0];
        const raw = chart.data.datasets[el.datasetIndex].data[el.index];
        const date = (raw && typeof raw === "object" && raw.x) ? raw.x : labels[el.index];
        if (date) showTsDayEvents(date);
      },
      plugins: {
        legend: { display: mode === "daily", labels: { boxWidth: 12, font: { size: 11 } } },
        tooltip: {
          callbacks: {
            label: (c) => c.dataset.type === "scatter"
              ? "🎪 " + (c.raw.name || c.raw.x || "イベント")
              : fmt(c.parsed.y) + " 人/日",
          },
        },
      },
      scales: {
        y: { grid: { color: grid }, title: { display: true, text: "人/日" } },
        x: { grid: { display: false }, ticks: { maxTicksLimit: 24, autoSkip: true } },
      },
    },
  });
  document.getElementById("tsNote").textContent = note;

  if (mode === "daily" && selectedTsDate && labels.includes(selectedTsDate)) {
    showTsDayEvents(selectedTsDate, false);
  }
}

const EVENT_TABLE_HEAD =
  `<tr><th>イベント名</th><th>開催</th><th>場所</th><th>種類</th><th>開催日の通行量</th><th>押し上げ</th></tr>`;

function upliftPctForDay(dateStr, flow) {
  const dayRow = tsDailyCache.find(d => d.date === dateStr);
  const dow = dayRow ? dayRow.dow : null;
  const med = dow != null ? D.peopleflow.dow_median[dow] : null;
  if (flow == null || !med) return null;
  return Math.round(100 * (flow / med - 1) * 10) / 10;
}

function formatUplift(pct) {
  if (pct === null || pct === undefined) return '<span class="up-na">―</span>';
  const cls = pct >= 0 ? "up" : "down";
  return `<span class="${cls}">${pct >= 0 ? "+" : ""}${pct}%</span>`;
}

function eventsOnDate(dateStr) {
  const all = (D.events && D.events.items) || [];
  return all.filter(e => e.start <= dateStr && e.end >= dateStr);
}

function buildEventRow(e, flowOverride, upliftOverride) {
  const flow = flowOverride != null ? flowOverride : e.rep_flow;
  const uplift = upliftOverride !== undefined ? upliftOverride : e.uplift_pct;
  const period = e.start === e.end ? e.start : `${e.start}〜${e.end}`;
  const name = e.url ? `<a href="${e.url}" target="_blank" rel="noopener">${e.name}</a>` : e.name;
  return `<tr>
    <td class="ev-name">${name}${e.occurrences > 1 ? ` <span class="muted">×${e.occurrences}日</span>` : ""}</td>
    <td>${period}</td>
    <td>${e.place || "-"}</td>
    <td>${e.tag ? `<span class="ev-tag">${e.tag}</span>` : "-"}</td>
    <td>${flow != null ? fmt(flow) + " 人/日" : "-"}</td>
    <td>${formatUplift(uplift)}</td>
  </tr>`;
}

function hideTsDayEvents() {
  selectedTsDate = null;
  document.getElementById("tsDayEvents").classList.add("hidden");
}

function showTsDayEvents(dateStr, redrawChart = true) {
  if (tsMode !== "daily") return;
  selectedTsDate = dateStr;
  const dayRow = tsDailyCache.find(d => d.date === dateStr);
  const flow = dayRow ? dayRow.count : null;
  const uplift = upliftPctForDay(dateStr, flow);
  const events = eventsOnDate(dateStr);
  const dowLabel = dayRow ? PF_DOW[dayRow.dow] : "";

  document.getElementById("tsDayEventsTitle").textContent =
    `${dateStr}（${dowLabel}）のイベント`;
  document.getElementById("tsDayEventsLead").innerHTML =
    flow != null
      ? `この日の通行量は <b>${fmt(flow)} 人/日</b>（同曜日中央値比 ${formatUplift(uplift)}）。` +
        (events.length
          ? ` 周辺イベント <b>${events.length}件</b> が開催されていました。`
          : " この日に記録されている周辺イベントはありません。")
      : "この日の人流データがありません。";

  const rows = events.length
    ? events.map(e => buildEventRow(e, flow, uplift)).join("")
    : `<tr><td colspan="6" class="muted" style="text-align:center;padding:16px">この日に開催された周辺イベントはありません</td></tr>`;

  document.getElementById("tsDayEventTable").innerHTML = EVENT_TABLE_HEAD + rows;
  document.getElementById("tsDayEvents").classList.remove("hidden");

  if (redrawChart) {
    const agg = aggregatePeriod();
    drawTimeline("daily", tsDailyCache, agg.sel);
  }
}

function renderEventTable() {
  const all = (D.events && D.events.items) || [];
  const start = periodFrom + "-01", end = periodTo + "-31";
  // 選択期間と重なるイベントに絞り込む
  const ev = all.filter(e =>
    (e.rep_date && e.rep_date >= start && e.rep_date <= end) ||
    (e.start <= end && e.end >= start));

  document.getElementById("eventLead").innerHTML =
    ev.length
      ? `物件から半径${(D.events.radius_m / 1000).toFixed(1)}km内・選択期間のイベント${ev.length}件。開催日の通行量が同曜日の中央値からどれだけ増減したか（押し上げ効果）で並べています。`
      : "選択期間にはこのエリアのイベントが見つかりませんでした。";

  const withUp = ev.filter(e => e.uplift_pct !== null && e.uplift_pct !== undefined);
  const noUp = ev.filter(e => e.uplift_pct === null || e.uplift_pct === undefined);
  withUp.sort((a, b) => b.uplift_pct - a.uplift_pct);
  const rows = withUp.concat(noUp).map(e => buildEventRow(e)).join("");
  document.getElementById("eventTable").innerHTML = EVENT_TABLE_HEAD + rows;
}

/* =========================================================
   画面3: 周辺店舗
   ========================================================= */
function renderStores() {
  const st = D.stores;
  document.getElementById("radiusLabel").textContent = st.radius_m;
  const cats = st.category_counts;
  const cafe = (cats.find(c => c.category === "カフェ・喫茶") || {}).count || 0;
  const sweets = (cats.find(c => c.category === "スイーツ・ベーカリー") || {}).count || 0;
  const izakaya = (cats.find(c => c.category === "飲食店") || {}).count || 0;
  document.getElementById("storesLead").innerHTML =
    `半径${st.radius_m}m以内に飲食系<b>${st.points.length}件</b>。飲食店が<b>${izakaya}件</b>と多い一方、` +
    `カフェ・喫茶は<b>${cafe}件</b>と手薄で余地があります。<br>` +
    `<span class="muted">※食品営業許可・届出ベースのため、物販・サービス業（美容/学習塾/フィットネス等）は含みません。</span>`;

  const b = D.meta.building;
  const map = L.map("storeMap").setView([b.lat, b.lon], 16);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "&copy; OpenStreetMap", maxZoom: 19 }).addTo(map);
  maps.stores = map;
  L.marker([b.lat, b.lon]).addTo(map).bindPopup("<b>対象物件</b>");
  L.circle([b.lat, b.lon], { radius: st.radius_m, color: "#2563eb", weight: 1, fillOpacity: 0.04 }).addTo(map);
  st.points.forEach(p => {
    L.circleMarker([p.lat, p.lon], { radius: 6, color: "#fff", weight: 1, fillColor: CAT_COLORS[p.category] || "#94a3b8", fillOpacity: .9 })
      .addTo(map).bindPopup(`<b>${p.name}</b><br>${p.category} / ${p.kind}<br>${p.address}`);
  });

  document.getElementById("storeLegend").innerHTML = Object.entries(CAT_COLORS)
    .map(([k, v]) => `<span><span class="dot" style="background:${v}"></span>${k}</span>`).join("");

  new Chart(document.getElementById("catChart"), {
    type: "bar",
    data: {
      labels: cats.map(c => c.category),
      datasets: [{ data: cats.map(c => c.count), backgroundColor: cats.map(c => CAT_COLORS[c.category] || "#94a3b8"), borderRadius: 4 }],
    },
    options: { indexAxis: "y", plugins: { legend: { display: false } }, scales: { x: { grid: { color: "#e2e8f0" } } } },
  });
  document.getElementById("storeNote").innerHTML =
    "「店が少ない＝チャンス」とは限りません。人流属性と合わせて業種チャンス画面で総合評価しています。";

  const pts = st.points.slice().sort((a, b) => a.dist_m - b.dist_m);
  let rows = pts.map(p => `
    <tr><td>${p.name}</td>
    <td><span class="cat-tag" style="background:${CAT_COLORS[p.category] || "#94a3b8"}">${p.category}</span></td>
    <td>${p.kind}</td><td>${fmt(p.dist_m)} m</td></tr>`).join("");
  document.getElementById("storeTable").innerHTML =
    `<tr><th>店舗名</th><th>分類</th><th>営業種類</th><th>距離</th></tr>${rows}`;
}

/* =========================================================
   画面4: 消費者傾向
   ========================================================= */
const CONS_PALETTE = [
  "#2563eb", "#0ea5e9", "#10b981", "#f59e0b", "#ef4444",
  "#8b5cf6", "#ec4899", "#14b8a6", "#64748b",
];
const FREQ_COLORS = ["#16a34a", "#86efac", "#cbd5e1", "#fdba74", "#ef4444"];

function consChart(id, config) {
  config.options = config.options || {};
  config.options.responsive = true;
  config.options.maintainAspectRatio = false;
  return new Chart(document.getElementById(id), config);
}

function fmtYearLabel(label) {
  const s = String(label || "");
  return /^\d+$/.test(s) ? `令和${s}年度` : s;
}

function renderConsumer() {
  const c = D.consumer;
  if (!c) return;
  const sv = c.survey || {};
  const np = c.nearby_population || {};
  const grid = "#e2e8f0";

  const latestIncome = (c.income_trend && c.income_trend.latest) || {};
  const hhIncome = latestIncome.household_income_k;
  const cityPop = (c.city_population_trend && c.city_population_trend.latest) || {};
  const topFood = (c.city_food_kinds || [])[0];
  const topAge = (sv.age_groups || []).slice().sort((a, b) => b.pct - a.pct)[0];
  const topJob = (sv.occupations || []).slice().sort((a, b) => b.pct - a.pct)[0];

  document.getElementById("consumerLead").innerHTML =
    `令和6年度市民意識調査（<b>${fmt(sv.respondents || 0)}人</b>）と岡崎市の人口・所得・食品営業データから、` +
    `「市民が何に・どこで・どう消費しているか」の傾向を把握できます。` +
    `康生周辺（${np.area_count || 0}町字）の居住人口は<b>${fmt(np.population || 0)}人</b>、` +
    `世帯数<b>${fmt(np.households || 0)}世帯</b>（${np.date || "—"}時点）。` +
    `<br><span class="muted">${c.summary_note || ""}</span>`;

  document.getElementById("consumerKpi").innerHTML = [
    {
      cls: "", label: "家計所得（1人あたり）",
      value: hhIncome ? fmt(hhIncome) : "—", unit: hhIncome ? "千円/年" : "",
      sub: fmtYearLabel(latestIncome.year_label) || "岡崎市統計",
    },
    {
      cls: "good", label: "休日を市内で過ごす",
      value: sv.holiday_in_city_often_pct ?? "—", unit: sv.holiday_in_city_often_pct != null ? "%" : "",
      sub: "「非常に／やや多い」の割合",
    },
    {
      cls: "accent", label: "オンラインショッピング利用",
      value: (sv.online_shopping && sv.online_shopping.pct) ?? "—",
      unit: sv.online_shopping ? "%" : "",
      sub: "スマホ利用（複数回答）",
    },
    {
      cls: "sky", label: "市内最多の食品営業",
      value: topFood ? topFood.kind : "—", unit: "",
      sub: topFood ? `${fmt(topFood.count)}件（${topFood.pct}%）` : "",
    },
  ].map(k => `<div class="kpi ${k.cls}"><div class="k-label">${k.label}</div>
    <div class="k-value" style="font-size:${k.value.length > 8 ? 18 : 28}px">${k.value}<span class="k-unit">${k.unit}</span></div>
    <div class="k-sub">${k.sub}</div></div>`).join("");

  // 年齢・職業
  consChart("consAgeChart", {
    type: "bar",
    data: {
      labels: (sv.age_groups || []).map(x => x.label),
      datasets: [{ label: "構成比 %", data: (sv.age_groups || []).map(x => x.pct),
        backgroundColor: CONS_PALETTE, borderRadius: 4 }],
    },
    options: { plugins: { legend: { display: false } },
      scales: { y: { grid: { color: grid }, title: { display: true, text: "%" } }, x: { grid: { display: false } } } },
  });
  consChart("consJobChart", {
    type: "bar",
    data: {
      labels: (sv.occupations || []).map(x => x.label),
      datasets: [{ data: (sv.occupations || []).map(x => x.pct),
        backgroundColor: CONS_PALETTE, borderRadius: 4 }],
    },
    options: { indexAxis: "y", plugins: { legend: { display: false } },
      scales: { x: { grid: { color: grid }, title: { display: true, text: "%" } } } },
  });

  // 満足度・休日・中心市街地
  consChart("consSatChart", {
    type: "doughnut",
    data: {
      labels: (sv.commerce_satisfaction || []).map(x => x.label),
      datasets: [{ data: (sv.commerce_satisfaction || []).map(x => x.pct),
        backgroundColor: ["#16a34a", "#86efac", "#fca5a5"] }],
    },
    options: { plugins: { legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 10 } } } } },
  });
  consChart("consHolidayChart", {
    type: "bar",
    data: {
      labels: (sv.holiday_in_city || []).map(x => x.label),
      datasets: [{ data: (sv.holiday_in_city || []).map(x => x.pct), backgroundColor: FREQ_COLORS, borderRadius: 4 }],
    },
    options: { plugins: { legend: { display: false } }, scales: { y: { grid: { color: grid } } } },
  });
  consChart("consCenterChart", {
    type: "bar",
    data: {
      labels: (sv.center_city_visit || []).map(x => x.label),
      datasets: [{ data: (sv.center_city_visit || []).map(x => x.pct), backgroundColor: FREQ_COLORS, borderRadius: 4 }],
    },
    options: { plugins: { legend: { display: false } }, scales: { y: { grid: { color: grid } } } },
  });

  // 食品営業種別
  const foods = c.city_food_kinds || [];
  consChart("consFoodChart", {
    type: "bar",
    data: {
      labels: foods.map(x => x.kind),
      datasets: [{ data: foods.map(x => x.count), backgroundColor: "#0891b2", borderRadius: 4 }],
    },
    options: { indexAxis: "y", plugins: { legend: { display: false } },
      scales: { x: { grid: { color: grid }, title: { display: true, text: "件数" } } } },
  });
  document.getElementById("consFoodNote").textContent =
    "岡崎市内の現存する食品等営業許可・届出件数（種別別）。飲食・菓子等の「消費ジャンル」の市全体像。";

  // 交通手段
  consChart("consTransportChart", {
    type: "bar",
    data: {
      labels: (sv.transport_modes || []).map(x => x.label),
      datasets: [{ data: (sv.transport_modes || []).map(x => x.pct), backgroundColor: "#6366f1", borderRadius: 4 }],
    },
    options: { indexAxis: "y", plugins: { legend: { display: false } },
      scales: { x: { grid: { color: grid }, max: 100, title: { display: true, text: "回答者の %" } } } },
  });

  // 周辺人口年齢
  consChart("consNearAgeChart", {
    type: "doughnut",
    data: {
      labels: (np.age_structure || []).map(x => x.label),
      datasets: [{ data: (np.age_structure || []).map(x => x.pct),
        backgroundColor: ["#93c5fd", "#3b82f6", "#1e3a8a"] }],
    },
    options: { plugins: { legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 11 } } } } },
  });
  document.getElementById("consNearPopNote").innerHTML =
    `${np.note || ""} 最多町字: ${(np.areas && np.areas[0]) ? np.areas[0].name + "（" + fmt(np.areas[0].population) + "人）" : "—"}`;

  // 人口推移
  const popItems = (c.city_population_trend && c.city_population_trend.items) || [];
  consChart("consPopTrendChart", {
    type: "line",
    data: {
      labels: popItems.map(x => x.year_label),
      datasets: [{
        label: "人口", data: popItems.map(x => x.population),
        borderColor: "#2563eb", backgroundColor: "rgba(37,99,235,.1)",
        fill: true, tension: .25, yAxisID: "y",
      }, {
        label: "世帯数", data: popItems.map(x => x.households),
        borderColor: "#f59e0b", borderDash: [4, 4], tension: .25, yAxisID: "y1",
      }],
    },
    options: {
      plugins: { legend: { position: "bottom", labels: { boxWidth: 12, font: { size: 11 } } } },
      scales: {
        y: { position: "left", grid: { color: grid }, title: { display: true, text: "人口" } },
        y1: { position: "right", grid: { display: false }, title: { display: true, text: "世帯" } },
        x: { grid: { display: false }, ticks: { maxTicksLimit: 10, font: { size: 10 } } },
      },
    },
  });

  // 所得推移
  const incTrend = (c.income_trend && c.income_trend.trend) || [];
  if (incTrend.length) {
    consChart("consIncomeChart", {
      type: "line",
      data: {
        labels: incTrend.map(x => x.year_label),
        datasets: [{
          label: "市民所得", data: incTrend.map(x => x.citizen_income_k),
          borderColor: "#2563eb", tension: .25,
        }, {
          label: "家計所得", data: incTrend.map(x => x.household_income_k),
          borderColor: "#10b981", tension: .25,
        }],
      },
      options: {
        plugins: { legend: { position: "bottom" } },
        scales: {
          y: { grid: { color: grid }, title: { display: true, text: "千円/人" } },
          x: { grid: { display: false }, ticks: { maxTicksLimit: 12, font: { size: 10 } } },
        },
      },
    });
    document.getElementById("consIncomeNote").textContent =
      (c.income_trend.source || "") + "。" + (c.income_note || "");
  } else {
    document.getElementById("consIncomeNote").textContent = c.income_note || "所得データを取得できませんでした。";
  }

  // 家計所得内訳
  const ib = c.income_breakdown || {};
  if (ib.breakdown && ib.breakdown.length) {
    consChart("consIncomeBreakChart", {
      type: "doughnut",
      data: {
        labels: ib.breakdown.map(x => x.label),
        datasets: [{ data: ib.breakdown.map(x => x.pct), backgroundColor: CONS_PALETTE }],
      },
      options: {
        plugins: {
          legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 10 } } },
          title: { display: true, text: `${ib.year_label} 合計 ${fmt(ib.total_m)} 百万円`, font: { size: 12 } },
        },
      },
    });
  }

  // 産業構成
  const ind = (c.industry_share && c.industry_share.items) || [];
  document.getElementById("consIndustryTable").innerHTML =
    `<tr><th>産業</th><th>市内総生産（百万円）</th><th>構成比</th></tr>` +
    ind.map(x => `<tr><td>${x.industry}</td><td>${fmt(x.value_m)}</td><td>${x.share_pct}%</td></tr>`).join("");

  document.getElementById("consSummaryNote").innerHTML =
    `調査の最多年代は<b>${topAge ? topAge.label : "—"}</b>（${topAge ? topAge.pct : "—"}%）、` +
    `最多職業は<b>${topJob ? topJob.label : "—"}</b>（${topJob ? topJob.pct : "—"}%）。` +
    `中心市街地への出没は「あまり／全く多くない」が約${sv.center_city_visit ? (sv.center_city_visit.filter(x => x.code >= 4).reduce((s, x) => s + x.pct, 0)).toFixed(1) : "—"}%と、` +
    `日常の来店獲得・回遊促進の余地を示唆します。` +
    (sv.commerce_sat_avg != null ? ` 商業・観光満足度の平均は<b>${sv.commerce_sat_avg}</b>点（10点満点）。` : "");
}

/* =========================================================
   画面5: 商圏人口（ダミー）
   ========================================================= */
function renderDemographics() {
  const dm = D.demographics, rent = D.rent, fut = D.future;
  document.getElementById("demoDummyBadge").innerHTML =
    dm.is_dummy ? '<span class="dummy-badge">ダミーデータ</span>' : "";

  const kpi = [
    { cls: "", label: "徒歩5分圏 人口", value: fmt(dm.walk5_population), unit: "人" },
    { cls: "sky", label: "徒歩10分圏 人口", value: fmt(dm.walk10_population), unit: "人" },
    { cls: "accent", label: "単身世帯比率", value: dm.single_ratio, unit: "%" },
    { cls: "good", label: "高齢者比率", value: dm.elderly_ratio, unit: "%" },
  ];
  document.getElementById("demoKpi").innerHTML = kpi.map(k => `
    <div class="kpi ${k.cls}"><div class="k-label">${k.label}</div>
    <div class="k-value">${k.value}<span class="k-unit">${k.unit}</span></div>
    <div class="k-sub">※ダミー</div></div>`).join("");

  new Chart(document.getElementById("demoAgeChart"), {
    type: "doughnut",
    data: { labels: dm.age_structure.map(a => a.label), datasets: [{ data: dm.age_structure.map(a => a.pct), backgroundColor: ["#93c5fd", "#3b82f6", "#1e3a8a"] }] },
    options: { plugins: { legend: { position: "right", labels: { boxWidth: 10, font: { size: 11 } } } } },
  });
  new Chart(document.getElementById("demoHouseChart"), {
    type: "doughnut",
    data: { labels: dm.household.map(h => h.label), datasets: [{ data: dm.household.map(h => h.pct), backgroundColor: ["#f59e0b", "#10b981", "#6366f1", "#cbd5e1"] }] },
    options: { plugins: { legend: { position: "right", labels: { boxWidth: 10, font: { size: 11 } } } } },
  });

  document.getElementById("rentBox").innerHTML = `
    <div class="rent-line"><span>1階路面</span><b>${fmt(rent.floor1_tsubo_yen[0])}〜${fmt(rent.floor1_tsubo_yen[1])} 円/坪</b></div>
    <div class="rent-line"><span>2階以上</span><b>${fmt(rent.floor2_tsubo_yen[0])}〜${fmt(rent.floor2_tsubo_yen[1])} 円/坪</b></div>
    <div class="rent-line"><span>本物件（想定）</span><b>${fmt(rent.this_building_tsubo_yen)} 円/坪</b></div>
    <div class="rent-line"><span>地価</span><b>${fmt(rent.land_price_yen_sqm)} 円/㎡</b></div>
    <div class="note">※賃料・地価はダミー。本番は不動産情報ライブラリ等から算出。</div>`;

  document.getElementById("futureBox").innerHTML = fut.items.map(i => `
    <div class="future-item"><div class="fi-label">${i.label}</div>
    <div class="fi-value">${i.value}</div><div class="fi-note">${i.note}</div></div>`).join("")
    + (fut.is_dummy ? '<div class="note" style="grid-column:1/-1">※将来性・都市計画はダミー。本番は岡崎市立地適正化計画等で確認。</div>' : "");
}

/* =========================================================
   画面6: 業種チャンス
   ========================================================= */
function renderScores() {
  const sc = D.scores;
  const metrics = [
    ["people_fit", "人流相性"], ["competition", "競合の少なさ"],
    ["facility_fit", "施設相性"], ["profitability", "収益性"],
  ];
  document.getElementById("scoreList").innerHTML = sc.items.map(it => `
    <div class="score-item">
      <div class="score-head">
        <div class="rank r${it.rank}">${it.rank}</div>
        <div class="name">${it.industry}</div>
        <div class="total">${it.total}</div>
      </div>
      <div class="score-reason">${it.reason}</div>
      <div class="bars">
        ${metrics.map(([k, lbl]) => `
          <div class="bar-block">${lbl} ${it[k]}
            <div class="bar-track"><div class="bar-fill" style="width:${it[k]}%"></div></div>
          </div>`).join("")}
      </div>
    </div>`).join("");

  // レーダー（上位3業種）
  const top3 = sc.items.slice(0, 3);
  const colors = ["#f59e0b", "#2563eb", "#10b981"];
  new Chart(document.getElementById("radarChart"), {
    type: "radar",
    data: {
      labels: metrics.map(m => m[1]),
      datasets: top3.map((it, i) => ({
        label: it.industry,
        data: metrics.map(m => it[m[0]]),
        backgroundColor: colors[i] + "22",
        borderColor: colors[i], borderWidth: 2, pointBackgroundColor: colors[i],
      })),
    },
    options: { scales: { r: { suggestedMin: 0, suggestedMax: 100, ticks: { display: false } } }, plugins: { legend: { position: "bottom", labels: { boxWidth: 12, font: { size: 11 } } } } },
  });

  document.getElementById("scoreMethod").innerHTML =
    "<b>算出方法:</b> " + sc.method +
    (sc.is_partial_dummy ? " 施設相性・収益性は暫定（ダミー）値を含みます。売上を断定するものではなく、あくまで「出店ポテンシャル／業種適合度」の目安です。" : "");
}

/* ---------- 実行 ---------- */
renderSummary();
setupPeoplePeriod();
updatePeople();
renderStores();
renderConsumer();
renderDemographics();
renderScores();

// URLハッシュ（#people / #people:daily 等）で画面を直接開けるように
function applyHash() {
  if (!location.hash) return;
  const [target, mode] = location.hash.slice(1).split(":");
  activateScreen(target);
  if (target === "people" && mode) {
    document.querySelectorAll("#tsToggle button").forEach(b =>
      b.classList.toggle("on", b.dataset.mode === mode));
    tsMode = mode;
    updatePeople();
  }
}
applyHash();
window.addEventListener("hashchange", applyHash);
