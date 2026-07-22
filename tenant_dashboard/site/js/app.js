/* テナント誘致ダッシュボード — 描画ロジック
   データは data.js の window.DASHBOARD_DATA から読み込む。 */

const D = window.DASHBOARD_DATA;
const BUILDING_NAME = D.meta.building.name || "康生百貨店";

// 業種カテゴリの色
const CAT_COLORS = {
  "レストラン・食堂": "#ef4444",
  "カフェ・喫茶": "#a16207",
  "居酒屋・バー": "#7c3aed",
  "スイーツ・ベーカリー": "#ec4899",
  "惣菜・弁当": "#0891b2",
  "物販・食品販売": "#16a34a",
  "その他": "#94a3b8",
};

// 多項目の円グラフ用（家計所得内訳・世帯構成など）— 明るめ・隣接差あり
const CONS_PALETTE = [
  "#60a5fa", "#fb923c", "#4ade80", "#f472b6", "#facc15",
  "#a78bfa", "#2dd4bf", "#fbbf24", "#94a3b8",
];

// 年齢構成専用（明るめの色で、隣同士が似ないよう交互に暖色・寒色）
const AGE_PALETTE = [
  "#60a5fa", // 0-9 スカイブルー
  "#fb923c", // 10-19 オレンジ
  "#4ade80", // 20-29 ライトグリーン
  "#f472b6", // 30-39 ピンク
  "#facc15", // 40-49 イエロー
  "#a78bfa", // 50-59 ラベンダー
  "#22d3ee", // 60-69 シアン
  "#f87171", // 70+ コーラルレッド
];

function paletteShades(palette, n) {
  return Array.from({ length: n }, (_, i) => palette[Math.min(i, palette.length - 1)]);
}

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

function fillSourcesList(listId, items) {
  const el = document.getElementById(listId);
  if (!el) return;
  el.innerHTML = items.filter(Boolean).map((html) => `<li>${html}</li>`).join("");
}

function sourceLink(label, url) {
  if (!url) return label;
  return `<a href="${url}" target="_blank" rel="noopener">${label}</a>`;
}

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
    if (typeof prefersCollapsedSidebar === "function" && prefersCollapsedSidebar()) {
      setSidebarCollapsed(true);
    }
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
  window.scrollTo(0, 0);
  // 縦画面では画面遷移後にメニューを閉じる
  if (prefersCollapsedSidebar()) setSidebarCollapsed(true);
}

function prefersCollapsedSidebar() {
  return window.matchMedia("(orientation: portrait) and (max-width: 1024px)").matches
    || window.matchMedia("(max-width: 760px)").matches;
}

function setSidebarCollapsed(collapsed) {
  const app = document.querySelector(".app");
  const btn = document.getElementById("sidebarToggle");
  if (!app) return;
  app.classList.toggle("sidebar-collapsed", collapsed);
  if (btn) {
    btn.setAttribute("aria-expanded", collapsed ? "false" : "true");
    btn.setAttribute("aria-label", collapsed ? "メニューを開く" : "メニューを閉じる");
  }
}

function setupSidebarToggle() {
  const btn = document.getElementById("sidebarToggle");
  if (!btn) return;

  setSidebarCollapsed(prefersCollapsedSidebar());

  btn.addEventListener("click", () => {
    const collapsed = !document.querySelector(".app").classList.contains("sidebar-collapsed");
    setSidebarCollapsed(collapsed);
  });

  const mqPortrait = window.matchMedia("(orientation: portrait) and (max-width: 1024px)");
  const mqNarrow = window.matchMedia("(max-width: 760px)");
  const onViewportChange = () => setSidebarCollapsed(prefersCollapsedSidebar());
  if (mqPortrait.addEventListener) {
    mqPortrait.addEventListener("change", onViewportChange);
    mqNarrow.addEventListener("change", onViewportChange);
  } else {
    mqPortrait.addListener(onViewportChange);
    mqNarrow.addListener(onViewportChange);
  }
}

function setupTopNav() {
  document.querySelectorAll("#aiTopNav [data-target]").forEach(btn => {
    btn.addEventListener("click", () => {
      activateScreen(btn.dataset.target);
      location.hash = btn.dataset.target;
    });
  });
}

/* ---------- メタ情報 ---------- */
document.getElementById("metaBuilding").textContent = "対象: " + BUILDING_NAME;
document.getElementById("metaAddress").textContent = "住所: " + D.meta.building.address;
document.getElementById("metaGenerated").textContent = "生成: " + D.meta.generated_at;

/* =========================================================
   画面: 物件情報
   ========================================================= */
function renderSummary() {
  const st = D.stores;
  const b = D.meta.building;

  document.getElementById("buildingProfile").innerHTML = `
    <div class="building-profile-media">
      <img src="${b.photo || ""}" alt="${BUILDING_NAME}" loading="lazy" />
    </div>
    <div class="building-profile-body">
      <div class="building-profile-name">${BUILDING_NAME}</div>
      <p class="building-profile-address muted">${b.address || ""}</p>
      ${b.url
        ? `<a class="building-profile-url" href="${b.url}" target="_blank" rel="noopener">${b.url}</a>`
        : ""}
    </div>`;

  const tenants = b.tenants || [];
  const tenantRows = tenants.length
    ? `<div class="table-wrap"><table>
        <tr><th>店舗名</th><th>営業時間</th><th>定休日</th></tr>
        ${tenants.map(t => `<tr>
          <td>${t.name || ""}</td>
          <td>${t.hours || "—"}</td>
          <td>${t.closed || "—"}</td>
        </tr>`).join("")}
      </table></div>`
    : "";

  document.getElementById("buildingOverview").innerHTML = `
    <div class="overview-lines">
      ${b.aka ? `<div class="overview-line"><span class="ol-label">施設</span><span>${b.aka}</span></div>` : ""}
      <div class="overview-line"><span class="ol-label">住所</span><span>${b.address || "—"}</span></div>
      ${b.access ? `<div class="overview-line"><span class="ol-label">アクセス</span><span>${b.access}</span></div>` : ""}
      ${b.area_note ? `<div class="overview-line"><span class="ol-label">立地</span><span>${b.area_note}</span></div>` : ""}
      ${b.facebook ? `<div class="overview-line"><span class="ol-label">SNS</span><span><a href="${b.facebook}" target="_blank" rel="noopener">Facebook</a></span></div>` : ""}
    </div>
    ${tenants.length ? `<div class="card-title" style="margin-top:14px">公開されている入居店の例</div>${tenantRows}` : ""}`;

  renderRentBox();
  renderSummarySources();

  // 地図
  const map = L.map("summaryMap").setView([b.lat, b.lon], 16);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap", maxZoom: 19,
  }).addTo(map);
  maps.summary = map;

  // 物件
  L.marker([b.lat, b.lon]).addTo(map).bindPopup("<b>" + BUILDING_NAME + "</b><br>" + b.address).openPopup();
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
    <span><span class="dot" style="background:#2563eb"></span>${BUILDING_NAME}・商圏円</span>
    <span><span class="dot" style="background:#0ea5e9"></span>人流カメラ</span>
    <span><span class="dot" style="background:#ef4444"></span>周辺店舗</span>
    <span>📍 主要施設</span>`;

  // ランドマーク距離
  const ll = LANDMARKS.map(l => ({ ...l, d: haversine(b.lat, b.lon, l.lat, l.lon) }))
    .sort((a, x) => a.d - x.d);
  document.getElementById("landmarkList").innerHTML = ll.map(l => `
    <div class="landmark"><span>${l.name}</span>
    <span class="dist">${l.d < 1000 ? Math.round(l.d) + " m" : (l.d / 1000).toFixed(1) + " km"}</span></div>`).join("");
}

function renderRentBox() {
  const rent = D.rent;
  const lp = rent.land_price || {};
  const dummyBadge = rent.rent_is_dummy
    ? '<span class="dummy-badge rent-dummy">ダミー</span>' : "";
  const rentValue = (html) => `<span class="rent-value"><b>${html}</b>${dummyBadge}</span>`;

  const landLine = rent.land_is_dummy
    ? `<div class="rent-line"><span>地価</span>${rentValue(`${fmt(rent.land_price_yen_sqm)} 円/㎡`)}</div>`
    : `<div class="rent-line"><span>地価（最寄り${lp.use_label || "標準地"}）</span>
       <span class="rent-value"><b>${fmt(rent.land_price_yen_sqm)} 円/㎡</b></span></div>
       <div class="rent-sub muted">${lp.address || ""}（${BUILDING_NAME}から ${fmt(lp.dist_m || 0)} m）</div>
       <div class="rent-sub muted">調査時点: ${lp.survey_year || "—"}年1月1日
         ${lp.change_pct != null ? `／ 前年比 ${lp.change_pct}%` : ""}</div>`;

  document.getElementById("rentBox").innerHTML = `
    <div class="rent-line"><span>1階路面</span>${rentValue(`${fmt(rent.floor1_tsubo_yen[0])}〜${fmt(rent.floor1_tsubo_yen[1])} 円/坪`)}</div>
    <div class="rent-line"><span>2階以上</span>${rentValue(`${fmt(rent.floor2_tsubo_yen[0])}〜${fmt(rent.floor2_tsubo_yen[1])} 円/坪`)}</div>
    <div class="rent-line"><span>${BUILDING_NAME}（想定）</span>${rentValue(`${fmt(rent.this_building_tsubo_yen)} 円/坪`)}</div>
    ${landLine}`;
}

function renderSummarySources() {
  const b = D.meta.building;
  const rent = D.rent;
  const lp = rent.land_price || {};
  const buildingSrc = sourceLink(b.info_source || "公開情報", b.info_source_url);
  const landSrc = rent.land_is_dummy
    ? "地価: 取得に失敗したため参考値を表示"
    : `地価: ${sourceLink(lp.source || "国土数値情報 地価公示", lp.source_url)}（最寄り標準地。物件敷地そのものではありません）`;

  fillSourcesList("summarySourcesList", [
    `施設概要・入居店例: ${buildingSrc}（営業時間は店舗により異なります）`,
    rent.rent_is_dummy
      ? "賃料相場: 公開オープンデータがないためダミー値"
      : "賃料相場: 公開データに基づく参考値",
    landSrc,
    "地図: OpenStreetMap",
  ]);
}

/* =========================================================
   AIデータアシスタント（デモ：5パターンの定型応答）
   ========================================================= */
const AI_SCENARIOS = [
  {
    id: "peopleflow",
    label: "通行量の時間帯・曜日・年代を知りたい",
    triggers: ["人流", "通行量", "時間帯", "曜日", "ピーク", "年代"],
    exact: "康生通りの通行量の時間帯分布を教えて",
    render: renderAiPeopleflow,
    respond: respondAiPeopleflow,
  },
  {
    id: "stores",
    label: "周辺の飲食店・競合状況を知りたい",
    triggers: ["店舗", "競合", "飲食", "カフェ", "周辺店", "業種"],
    exact: "周辺の飲食店の業種別件数を教えて",
    render: renderAiStores,
    respond: respondAiStores,
  },
  {
    id: "demographics",
    label: "商圏の人口・所得を知りたい",
    triggers: ["人口", "商圏", "住民", "所得", "消費者", "世帯"],
    exact: "徒歩圏の人口構成と市民の所得水準を教えて",
    render: renderAiDemographics,
    respond: respondAiDemographics,
  },
  {
    id: "visitors",
    label: "人がどれくらい来る？",
    triggers: ["来る", "来街", "来客", "来店", "どれくらい来", "何人"],
    exact: "人がどれくらい来る？",
    render: renderAiVisitors,
    respond: respondAiVisitors,
  },
  {
    id: "cost",
    label: "出店や維持のコストはどれくらいかかる？",
    triggers: ["コスト", "費用", "出店", "維持", "賃料", "家賃", "地価", "開業"],
    exact: "出店や維持のコストはどれくらいかかる？",
    render: renderAiCost,
    respond: respondAiCost,
  },
];

let aiCharts = {};

function aiChartAt(id, config) {
  if (aiCharts[id]) aiCharts[id].destroy();
  const el = document.getElementById(id);
  if (!el) return;
  config.options = config.options || {};
  config.options.responsive = true;
  config.options.maintainAspectRatio = false;
  aiCharts[id] = new Chart(el, config);
}

function destroyAiCharts() {
  Object.values(aiCharts).forEach(c => c.destroy());
  aiCharts = {};
}

function matchAiScenario(text) {
  const t = text.trim();
  if (!t) return null;
  const exact = AI_SCENARIOS.find(s => s.exact === t);
  if (exact) return exact;
  const lower = t.toLowerCase();
  let best = null, bestScore = 0;
  AI_SCENARIOS.forEach(s => {
    const score = s.triggers.reduce((n, kw) => n + (lower.includes(kw) ? 1 : 0), 0);
    if (score > bestScore) { bestScore = score; best = s; }
  });
  return bestScore > 0 ? best : null;
}

function getPeopleflowSnapshot() {
  const mb = D.peopleflow.monthly_breakdown;
  const months = Object.keys(mb).sort();
  const hour = Array(24).fill(0), age = Array(8).fill(0);
  let total = 0, days = 0;
  months.forEach(ym => {
    const b = mb[ym];
    if (!b) return;
    days += b.days || 0;
    total += b.total || 0;
    for (let i = 0; i < 24; i++) hour[i] += b.hour[i] || 0;
    for (let i = 0; i < 8; i++) age[i] += b.age[i] || 0;
  });
  days = Math.max(days, 1);
  const byHour = hour.map(v => Math.round(v / days * 10) / 10);
  const peakHour = byHour.indexOf(Math.max(...byHour));

  const daily = D.peopleflow.timeseries.daily;
  const dowSum = Array(7).fill(0), dowDays = Array(7).fill(0);
  daily.forEach(d => { dowSum[d.dow] += d.count; dowDays[d.dow]++; });
  const byDow = dowSum.map((s, i) => dowDays[i] ? Math.round(s / dowDays[i]) : 0);

  const ageTotal = age.reduce((a, b) => a + b, 0) || 1;
  const agePct = age.map(v => Math.round(1000 * v / ageTotal) / 10);
  const topAgeIdx = agePct.indexOf(Math.max(...agePct));

  return {
    days, totalPerDay: Math.round(total / days), byHour, peakHour,
    byDow, agePct, ageLabels: D.peopleflow.age_labels, topAgeIdx,
    period: `${months[0]}〜${months[months.length - 1]}`,
  };
}

function renderAiPeopleflow(area) {
  const snap = getPeopleflowSnapshot();
  const grid = "#e2e8f0";
  area.innerHTML = `
    <div class="card">
      <div class="card-title">人流データ（全期間集計）</div>
      <div class="ai-chart-kpi">
        <div class="kpi"><div class="k-label">1日平均通行量</div>
          <div class="k-value">${fmt(snap.totalPerDay)}<span class="k-unit">人/日</span></div>
          <div class="k-sub">${snap.period}</div></div>
        <div class="kpi accent"><div class="k-label">ピーク時間帯</div>
          <div class="k-value" style="font-size:22px">${snap.peakHour}時台</div>
          <div class="k-sub">約${fmt(snap.byHour[snap.peakHour])}人/日</div></div>
        <div class="kpi good"><div class="k-label">最多年代</div>
          <div class="k-value" style="font-size:20px">${snap.ageLabels[snap.topAgeIdx]}</div>
          <div class="k-sub">${snap.agePct[snap.topAgeIdx]}%</div></div>
      </div>
      <div class="card-row card-row--2">
        <div class="card" style="margin:0;box-shadow:none;padding:0">
          <div class="card-title">時間帯別 通行量（1日平均）</div>
          <div class="chart-wrap"><canvas id="aiHourChart"></canvas></div>
        </div>
        <div class="card" style="margin:0;box-shadow:none;padding:0">
          <div class="card-title">曜日別 通行量（1日平均）</div>
          <div class="chart-wrap"><canvas id="aiDowChart"></canvas></div>
        </div>
      </div>
      <div class="card" style="margin:0;box-shadow:none;padding:0;margin-top:12px">
        <div class="card-title">年代別 構成</div>
        <div class="chart-wrap chart-wrap--sm"><canvas id="aiAgeChart"></canvas></div>
      </div>
      <div class="note">出典: 岡崎市「QURUWA地区の人流データ」(BODIK)。性別「不明」が多いのはAIカメラの判定特性によるものです。</div>
    </div>`;

  aiChartAt("aiHourChart", {
    type: "bar",
    data: { labels: snap.byHour.map((_, h) => h + "時"), datasets: [{ data: snap.byHour, backgroundColor: "#2563eb", borderRadius: 4 }] },
    options: { plugins: { legend: { display: false } }, scales: { y: { grid: { color: grid }, title: { display: true, text: "人/日" } }, x: { grid: { display: false } } } },
  });
  aiChartAt("aiDowChart", {
    type: "bar",
    data: { labels: PF_DOW, datasets: [{ data: snap.byDow, backgroundColor: PF_DOW.map((_, i) => i >= 5 ? "#f59e0b" : "#2563eb"), borderRadius: 4 }] },
    options: { plugins: { legend: { display: false } }, scales: { y: { grid: { color: grid }, title: { display: true, text: "人/日" } } } },
  });
  aiChartAt("aiAgeChart", {
    type: "doughnut",
    data: { labels: snap.ageLabels, datasets: [{ data: snap.agePct, backgroundColor: paletteShades(AGE_PALETTE, snap.ageLabels.length) }] },
    options: { plugins: { legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 10 } } } } },
  });
}

function respondAiPeopleflow() {
  const s = getPeopleflowSnapshot();
  const weekendAvg = Math.round((s.byDow[5] + s.byDow[6]) / 2);
  const weekdayAvg = Math.round(s.byDow.slice(0, 5).reduce((a, b) => a + b, 0) / 5);
  const weekendDiff = weekdayAvg ? Math.round(100 * (weekendAvg / weekdayAvg - 1) * 10) / 10 : 0;
  return (
    `康生通り（カメラ${D.meta.cameras.length}台合計）の全期間（<b>${s.period}</b>）集計です。<br><br>` +
    `<b>時間帯別グラフ</b>は24時間の1日平均通行量です。棒が高い時間帯ほどその時間に通過する人数が多いことを示します。` +
    `ピークは<b>${s.peakHour}時台</b>（約<b>${fmt(s.byHour[s.peakHour])}人/日</b>）です。` +
    `営業時間の設定や人員配置の参考に、数値の大小を比較して確認してください。<br><br>` +
    `<b>曜日別グラフ</b>は各曜日の1日平均です。青は平日、オレンジは土日です。` +
    `平日平均は約<b>${fmt(weekdayAvg)}人/日</b>、土日平均は約<b>${fmt(weekendAvg)}人/日</b>` +
    `（平日比 ${weekendDiff >= 0 ? "+" : ""}${weekendDiff}%）です。曜日ごとの差を見ることで、曜日別の来客変動を把握できます。<br><br>` +
    `<b>年代別グラフ</b>は通行者の年齢構成比（%）です。最多は<b>${s.ageLabels[s.topAgeIdx]}</b>（<b>${s.agePct[s.topAgeIdx]}%</b>）です。` +
    `各年代の割合を比較し、来街者の年齢分布を客観的に確認できます。` +
    `<span class="ai-msg-note">※数値のみを提示しています。業種の適合性などの主観的判断は含みません。詳細は「人流分析」画面でも期間を変更して確認できます。</span>`
  );
}

function renderAiStores(area) {
  const st = D.stores;
  const cats = st.category_counts;
  area.innerHTML = `
    <div class="card">
      <div class="card-title">周辺店舗データ（半径${st.radius_m}m）</div>
      <div class="ai-chart-kpi">
        <div class="kpi"><div class="k-label">店舗総数</div>
          <div class="k-value">${fmt(st.points.length)}<span class="k-unit">件</span></div>
          <div class="k-sub">食品営業許可ベース</div></div>
        ${cats.slice(0, 2).map((c, i) => `
        <div class="kpi ${i === 0 ? "accent" : "sky"}"><div class="k-label">${c.category}</div>
          <div class="k-value">${fmt(c.count)}<span class="k-unit">件</span></div>
          <div class="k-sub">業種別件数</div></div>`).join("")}
      </div>
      <div class="card-title">業種別 店舗数</div>
      <div class="chart-wrap"><canvas id="aiCatChart"></canvas></div>
      <div class="note">出典: 岡崎市「食品等営業許可・届出一覧」(BODIK)。物販・サービス業は含みません。</div>
    </div>`;

  aiChartAt("aiCatChart", {
    type: "bar",
    data: {
      labels: cats.map(c => c.category),
      datasets: [{ data: cats.map(c => c.count), backgroundColor: cats.map(c => CAT_COLORS[c.category] || "#94a3b8"), borderRadius: 4 }],
    },
    options: { indexAxis: "y", plugins: { legend: { display: false } }, scales: { x: { grid: { color: "#e2e8f0" }, title: { display: true, text: "件数" } } } },
  });
}

function respondAiStores() {
  const st = D.stores;
  const cats = st.category_counts;
  const top = cats[0];
  const bottom = cats[cats.length - 1];
  const catLines = cats.map(c => `${c.category}: <b>${c.count}件</b>`).join("、");
  return (
    `${BUILDING_NAME}から半径<b>${st.radius_m}m</b>以内の飲食・食品店舗は<b>${st.points.length}件</b>です（食品営業許可・届出ベース）。<br><br>` +
    `<b>業種別グラフ</b>は横棒で各業種の店舗数を示します。棒が長い業種ほど件数が多いことを意味します。` +
    `最多は<b>${top.category}</b>（<b>${top.count}件</b>）、最少は<b>${bottom.category}</b>（<b>${bottom.count}件</b>）です。<br><br>` +
    `内訳: ${catLines}。<br><br>` +
    `グラフでは業種ごとの件数差を比較できます。店舗名・距離の一覧は「周辺店舗・競合」画面の店舗一覧で確認できます。` +
    `<span class="ai-msg-note">※「店が少ない＝チャンス」などの解釈は行いません。件数の事実のみを示しています。</span>`
  );
}

function renderAiDemographics(area) {
  const dm = D.demographics;
  const inc = (D.consumer && D.consumer.income_trend && D.consumer.income_trend.latest) || {};
  const hhIncome = inc.household_income_k;
  area.innerHTML = `
    <div class="card">
      <div class="card-title">商圏人口・所得データ</div>
      <div class="ai-chart-kpi">
        <div class="kpi"><div class="k-label">徒歩5分圏 人口</div>
          <div class="k-value">${fmt(dm.walk5_population)}<span class="k-unit">人</span></div>
          <div class="k-sub">${dm.is_dummy ? "※ダミー" : (dm.population_date || "実データ")}</div></div>
        <div class="kpi sky"><div class="k-label">徒歩10分圏 人口</div>
          <div class="k-value">${fmt(dm.walk10_population)}<span class="k-unit">人</span></div>
          <div class="k-sub">${dm.is_dummy ? "※ダミー" : "町字合算"}</div></div>
        <div class="kpi good"><div class="k-label">家計所得（1人あたり）</div>
          <div class="k-value">${hhIncome ? fmt(hhIncome) : "—"}<span class="k-unit">${hhIncome ? "千円/年" : ""}</span></div>
          <div class="k-sub">${inc.year_label ? fmtYearLabel(inc.year_label) : "岡崎市統計"}</div></div>
      </div>
      <div class="card-row card-row--2">
        <div class="card" style="margin:0;box-shadow:none;padding:0">
          <div class="card-title">徒歩圏 年齢構成</div>
          <div class="chart-wrap chart-wrap--sm"><canvas id="aiDemoAgeChart"></canvas></div>
        </div>
        <div class="card" style="margin:0;box-shadow:none;padding:0">
          <div class="card-title">世帯構成</div>
          <div class="chart-wrap chart-wrap--sm"><canvas id="aiDemoHouseChart"></canvas></div>
        </div>
      </div>
      <div class="note">人口出典: ${dm.source || "地域・年齢別人口"}。所得出典: 岡崎市統計。賃料・地価は「物件情報」画面で確認できます。</div>
    </div>`;

  aiChartAt("aiDemoAgeChart", {
    type: "doughnut",
    data: {
      labels: dm.age_structure.map(a => a.label),
      datasets: [{
        data: dm.age_structure.map(a => a.pct),
        backgroundColor: paletteShades(AGE_PALETTE, dm.age_structure.length),
      }],
    },
    options: { plugins: { legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 10 } } } } },
  });
  if (dm.household && dm.household.length) {
    aiChartAt("aiDemoHouseChart", {
      type: "doughnut",
      data: {
        labels: dm.household.map(h => h.label),
        datasets: [{ data: dm.household.map(h => h.pct), backgroundColor: paletteShades(CONS_PALETTE, dm.household.length) }],
      },
      options: { plugins: { legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 10 } } } } },
    });
  }
}

function respondAiDemographics() {
  const dm = D.demographics;
  const inc = (D.consumer && D.consumer.income_trend && D.consumer.income_trend.latest) || {};
  const topAge = dm.age_structure.slice().sort((a, b) => b.pct - a.pct)[0];
  const ageLines = dm.age_structure.map(a => `${a.label}: <b>${a.pct}%</b>`).join("、");
  const houseLines = (dm.household || []).map(h => `${h.label}: <b>${h.pct}%</b>`).join("、");
  return (
    `徒歩5分圏の人口は<b>${fmt(dm.walk5_population)}人</b>、徒歩10分圏は<b>${fmt(dm.walk10_population)}人</b>です` +
    `${dm.population_date ? `（基準日: ${dm.population_date}）` : ""}。<br><br>` +
    `<b>年齢構成グラフ</b>は商圏内の年齢別人口比率（%）です。最多は<b>${topAge.label}</b>（<b>${topAge.pct}%</b>）です。` +
    `内訳: ${ageLines}。各年代の割合を比較して居住者の年齢分布を確認できます。<br><br>` +
    (houseLines
      ? `<b>世帯構成グラフ</b>は市民意識調査に基づく世帯タイプの構成比です。内訳: ${houseLines}。<br><br>`
      : "") +
    `家計所得（1人あたり）は<b>${inc.household_income_k ? fmt(inc.household_income_k) + "千円/年" : "—"}</b>` +
    `${inc.year_label ? `（${fmtYearLabel(inc.year_label)}）` : ""}です。` +
    `賃料・地価の数値は「物件情報」画面で確認できます（賃料はダミー値）。` +
    `<span class="ai-msg-note">※「単身が多ければ惣菜需要」などの需要推測は行いません。人口・所得の事実データのみを提示しています。</span>`
  );
}

function getMonthlyTrend() {
  return (D.peopleflow.timeseries.monthly || []).map(m => ({ ym: m.ym, avg: m.avg }));
}

function renderAiVisitors(area) {
  const snap = getPeopleflowSnapshot();
  const monthly = getMonthlyTrend();
  const grid = "#e2e8f0";
  const hi = monthly.slice().sort((a, b) => b.avg - a.avg)[0] || { ym: "-", avg: 0 };
  const lo = monthly.slice().sort((a, b) => a.avg - b.avg)[0] || { ym: "-", avg: 0 };

  area.innerHTML = `
    <div class="card">
      <div class="card-title">来街者数（康生通り 通行量ベース）</div>
      <div class="ai-chart-kpi">
        <div class="kpi"><div class="k-label">1日平均通行量</div>
          <div class="k-value">${fmt(snap.totalPerDay)}<span class="k-unit">人/日</span></div>
          <div class="k-sub">カメラ${D.meta.cameras.length}台合計・全期間</div></div>
        <div class="kpi accent"><div class="k-label">最多月（1日平均）</div>
          <div class="k-value" style="font-size:20px">${hi.ym}</div>
          <div class="k-sub">${fmt(Math.round(hi.avg))} 人/日</div></div>
        <div class="kpi sky"><div class="k-label">最少月（1日平均）</div>
          <div class="k-value" style="font-size:20px">${lo.ym}</div>
          <div class="k-sub">${fmt(Math.round(lo.avg))} 人/日</div></div>
      </div>
      <div class="card-title">月別 通行量の推移（1日平均）</div>
      <div class="chart-wrap chart-wrap--lg"><canvas id="aiVisitorTsChart"></canvas></div>
      <div class="card-row card-row--2" style="margin-top:12px">
        <div class="card" style="margin:0;box-shadow:none;padding:0">
          <div class="card-title">曜日別 通行量（1日平均）</div>
          <div class="chart-wrap"><canvas id="aiVisitorDowChart"></canvas></div>
        </div>
        <div class="card" style="margin:0;box-shadow:none;padding:0">
          <div class="card-title">年代別 構成</div>
          <div class="chart-wrap"><canvas id="aiVisitorAgeChart"></canvas></div>
        </div>
      </div>
      <div class="note">※通行量は康生通りカメラ地点を通過した人数であり、特定店舗への来店者数ではありません。出典: BODIK 人流データ。</div>
    </div>`;

  aiChartAt("aiVisitorTsChart", {
    type: "line",
    data: {
      labels: monthly.map(m => m.ym),
      datasets: [{
        label: "人/日", data: monthly.map(m => m.avg),
        borderColor: "#2563eb", backgroundColor: "rgba(37,99,235,.12)",
        borderWidth: 2, fill: true, tension: .25, pointRadius: 2,
      }],
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        y: { grid: { color: grid }, title: { display: true, text: "人/日" } },
        x: { grid: { display: false }, ticks: { maxTicksLimit: 18, font: { size: 10 } } },
      },
    },
  });
  aiChartAt("aiVisitorDowChart", {
    type: "bar",
    data: { labels: PF_DOW, datasets: [{ data: snap.byDow, backgroundColor: PF_DOW.map((_, i) => i >= 5 ? "#f59e0b" : "#2563eb"), borderRadius: 4 }] },
    options: { plugins: { legend: { display: false } }, scales: { y: { grid: { color: grid }, title: { display: true, text: "人/日" } } } },
  });
  aiChartAt("aiVisitorAgeChart", {
    type: "doughnut",
    data: { labels: snap.ageLabels, datasets: [{ data: snap.agePct, backgroundColor: paletteShades(AGE_PALETTE, snap.ageLabels.length) }] },
    options: { plugins: { legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 10 } } } } },
  });
}

function respondAiVisitors() {
  const snap = getPeopleflowSnapshot();
  const monthly = getMonthlyTrend();
  const hi = monthly.slice().sort((a, b) => b.avg - a.avg)[0];
  const lo = monthly.slice().sort((a, b) => a.avg - b.avg)[0];
  const diffPct = lo.avg ? Math.round(100 * (hi.avg / lo.avg - 1) * 10) / 10 : 0;
  return (
    `康生通り（カメラ${D.meta.cameras.length}台）の全期間（<b>${snap.period}</b>）では、1日平均<b>${fmt(snap.totalPerDay)}人</b>が通過しています。` +
    `これは「通りを歩いた人数」であり、特定店舗の来店者数ではありません。<br><br>` +
    `<b>月別推移グラフ</b>は各月の1日平均通行量です。最多は<b>${hi.ym}</b>（<b>${fmt(Math.round(hi.avg))}人/日</b>）、` +
    `最少は<b>${lo.ym}</b>（<b>${fmt(Math.round(lo.avg))}人/日</b>）で、差は約<b>${diffPct}%</b>です。` +
    `折れ線の上下で季節ごとの変動を確認できます。<br><br>` +
    `<b>曜日別グラフ</b>で平日と土日の差、<b>年代別グラフ</b>で通行者の年齢構成を確認できます。` +
    `数値の大小を比較し、どの時期・曜日に通過者が多いかを把握してください。` +
    `<span class="ai-msg-note">※来店者数・売上の推定は行いません。人流カメラの通行量データのみを提示しています。</span>`
  );
}

function renderAiCost(area) {
  const rent = D.rent;
  const lp = rent.land_price || {};
  const f1mid = Math.round((rent.floor1_tsubo_yen[0] + rent.floor1_tsubo_yen[1]) / 2);
  const f2mid = Math.round((rent.floor2_tsubo_yen[0] + rent.floor2_tsubo_yen[1]) / 2);
  const dummyNote = rent.rent_is_dummy ? '<span class="dummy-badge">ダミー</span>' : "";

  area.innerHTML = `
    <div class="card">
      <div class="card-title">出店・維持コスト（賃料・地価） ${dummyNote}</div>
      <div class="ai-chart-kpi">
        <div class="kpi"><div class="k-label">1階路面 賃料相場</div>
          <div class="k-value" style="font-size:20px">${fmt(rent.floor1_tsubo_yen[0])}〜${fmt(rent.floor1_tsubo_yen[1])}</div>
          <div class="k-sub">円/坪${rent.rent_is_dummy ? " ※ダミー" : ""}</div></div>
        <div class="kpi sky"><div class="k-label">2階以上 賃料相場</div>
          <div class="k-value" style="font-size:20px">${fmt(rent.floor2_tsubo_yen[0])}〜${fmt(rent.floor2_tsubo_yen[1])}</div>
          <div class="k-sub">円/坪${rent.rent_is_dummy ? " ※ダミー" : ""}</div></div>
        <div class="kpi accent"><div class="k-label">${BUILDING_NAME}（想定）</div>
          <div class="k-value">${fmt(rent.this_building_tsubo_yen)}<span class="k-unit">円/坪</span></div>
          <div class="k-sub">${rent.rent_is_dummy ? "※ダミー" : "参考値"}</div></div>
        <div class="kpi good"><div class="k-label">地価（最寄り標準地）</div>
          <div class="k-value">${fmt(rent.land_price_yen_sqm)}<span class="k-unit">円/㎡</span></div>
          <div class="k-sub">${lp.survey_year || "—"}年・${BUILDING_NAME}から${fmt(lp.dist_m || 0)}m</div></div>
      </div>
      <div class="card-title">賃料相場の比較（円/坪）</div>
      <div class="chart-wrap"><canvas id="aiCostRentChart"></canvas></div>
      <div class="note">${rent.source_hint || ""} 初期投資・運営費の内訳（人件費・光熱費等）は本ダッシュボードに含まれません。</div>
    </div>`;

  aiChartAt("aiCostRentChart", {
    type: "bar",
    data: {
      labels: ["1階路面（下限）", "1階路面（上限）", "2階以上（下限）", "2階以上（上限）", BUILDING_NAME + "（想定）"],
      datasets: [{
        data: [
          rent.floor1_tsubo_yen[0], rent.floor1_tsubo_yen[1],
          rent.floor2_tsubo_yen[0], rent.floor2_tsubo_yen[1],
          rent.this_building_tsubo_yen,
        ],
        backgroundColor: ["#93c5fd", "#2563eb", "#93c5fd", "#2563eb", "#f59e0b"],
        borderRadius: 4,
      }],
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        y: { grid: { color: "#e2e8f0" }, title: { display: true, text: "円/坪" } },
        x: { grid: { display: false }, ticks: { font: { size: 10 } } },
      },
    },
  });
}

function respondAiCost() {
  const rent = D.rent;
  const lp = rent.land_price || {};
  const f1mid = Math.round((rent.floor1_tsubo_yen[0] + rent.floor1_tsubo_yen[1]) / 2);
  const f2mid = Math.round((rent.floor2_tsubo_yen[0] + rent.floor2_tsubo_yen[1]) / 2);
  return (
    `出店・維持に関わるコストのうち、本ダッシュボードで確認できるのは<b>賃料相場</b>と<b>地価</b>です。<br><br>` +
    `<b>賃料相場グラフ</b>（円/坪）: 1階路面は<b>${fmt(rent.floor1_tsubo_yen[0])}〜${fmt(rent.floor1_tsubo_yen[1])}円/坪</b>（中央値約${fmt(f1mid)}円）、` +
    `2階以上は<b>${fmt(rent.floor2_tsubo_yen[0])}〜${fmt(rent.floor2_tsubo_yen[1])}円/坪</b>（中央値約${fmt(f2mid)}円）、` +
    `${BUILDING_NAME}の想定は<b>${fmt(rent.this_building_tsubo_yen)}円/坪</b>です。` +
    `${rent.rent_is_dummy ? "賃料は公開オープンデータがないため<b>ダミー値</b>です。" : ""}<br><br>` +
    `<b>地価</b>は最寄りの地価公示標準地（${lp.use_label || "商業地"}・${lp.address || ""}）で、<b>${fmt(rent.land_price_yen_sqm)}円/㎡</b>` +
    `（${BUILDING_NAME}から<b>${fmt(lp.dist_m || 0)}m</b>、${lp.survey_year || "—"}年調査、前年比${lp.change_pct != null ? lp.change_pct + "%" : "—"}）です。` +
    `物件敷地そのものの価格ではありません。<br><br>` +
    `棒グラフで各水準の大小を比較できます。詳細は「物件情報」画面の賃料相場・地価でも確認できます。` +
    `人件費・光熱費・設備投資などの運営コストは別途確認が必要です。` +
    `<span class="ai-msg-note">※「安い／高い」などの評価は行いません。掲載されている数値の事実のみを提示しています。${BUILDING_NAME}本体の公開募集賃料は見つかりませんでした。</span>`
  );
}

function appendAiMessage(role, html) {
  const log = document.getElementById("aiChatLog");
  const div = document.createElement("div");
  div.className = `ai-msg ${role}`;
  div.innerHTML = html;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}

function showAiTyping() {
  const log = document.getElementById("aiChatLog");
  const div = document.createElement("div");
  div.className = "ai-msg bot";
  div.id = "aiTyping";
  div.textContent = "データを確認しています…";
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}

function removeAiTyping() {
  const el = document.getElementById("aiTyping");
  if (el) el.remove();
}

function handleAiChat(text) {
  const input = text.trim();
  if (!input) return;

  appendAiMessage("user", input);
  document.getElementById("aiChatInput").value = "";
  document.getElementById("aiChatSend").disabled = true;
  showAiTyping();

  const scenario = matchAiScenario(input);
  setTimeout(() => {
    removeAiTyping();
    const chartArea = document.getElementById("aiChartArea");
    destroyAiCharts();

    if (!scenario) {
      appendAiMessage("bot",
        "該当するデータセットが見つかりませんでした。上の例文を参考に、知りたい内容を入力してください。<br><br>" +
        AI_SCENARIOS.map((s, i) => `${i + 1}. 「${s.exact}」`).join("<br>") +
        `<span class="ai-msg-note">デモ版では上記${AI_SCENARIOS.length}種類の質問に対応しています。主観的な評価は行いません。</span>`
      );
      chartArea.classList.add("hidden");
      chartArea.innerHTML = "";
    } else {
      appendAiMessage("bot", scenario.respond());
      chartArea.classList.remove("hidden");
      chartArea.innerHTML = "";
      scenario.render(chartArea);
    }
    document.getElementById("aiChatSend").disabled = false;
  }, 600);
}

function setupAiChat() {
  const suggestions = document.getElementById("aiSuggestions");
  suggestions.innerHTML = AI_SCENARIOS.map(s =>
    `<button type="button" class="ai-suggestion" data-text="${s.exact}">${s.label}</button>`
  ).join("");

  suggestions.querySelectorAll(".ai-suggestion").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("aiChatInput").value = btn.dataset.text;
      handleAiChat(btn.dataset.text);
    });
  });

  document.getElementById("aiChatSend").addEventListener("click", () => {
    handleAiChat(document.getElementById("aiChatInput").value);
  });
  document.getElementById("aiChatInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleAiChat(e.target.value);
  });

  document.getElementById("goToAiAssistant").addEventListener("click", () => {
    activateScreen("assistant");
    location.hash = "assistant";
  });

  appendAiMessage("bot",
    "データに関する質問を入力してください。関連グラフを表示し、数値の見方を客観的に説明します。<br>" +
    "上の例文をクリックするか、そのまま入力して送信できます。" +
    `<span class="ai-msg-note">※デモ版。主観的な業種推奨や評価は行いません。</span>`
  );
}

/* =========================================================
   画面2: 人流分析（時系列・イベント統合・期間指定対応）
   ========================================================= */
const PF_DOW = ["月", "火", "水", "木", "金", "土", "日"];
const PF_MONTHS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
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

  // 暦月別（1〜12月：選択期間内の全日を月ごとに合算した1日平均）
  const calSum = Array(12).fill(0), calDays = Array(12).fill(0);
  daily.forEach(d => {
    const mi = parseInt(d.date.slice(5, 7), 10) - 1;
    calSum[mi] += d.count;
    calDays[mi]++;
  });
  const byCalMonth = calSum.map((s, i) => calDays[i] ? Math.round(s / calDays[i]) : 0);
  const calActive = PF_MONTHS.map((label, i) => ({ label, avg: byCalMonth[i], days: calDays[i] }))
    .filter(x => x.days > 0);
  const hiCal = calActive.slice().sort((a, b) => b.avg - a.avg)[0] || { label: "-", avg: 0 };
  const loCal = calActive.slice().sort((a, b) => a.avg - b.avg)[0] || { label: "-", avg: 0 };

  const ageTotal = agg.age.reduce((a, b) => a + b, 0) || 1;
  const agePct = agg.age.map(v => Math.round(1000 * v / ageTotal) / 10);
  const genderTotal = agg.gender.reduce((a, b) => a + b, 0) || 1;
  const genderPct = agg.gender.map(v => Math.round(1000 * v / genderTotal) / 10);
  const totalPerDay = Math.round(agg.total / days);

  // 期間情報 + KPI
  document.getElementById("periodInfo").textContent =
    `${agg.sel.length}か月 / ${fmt(days)}日 / のべ ${fmt(Math.round(agg.total))} 人`;

  document.getElementById("peopleKpi").innerHTML = [
    { cls: "", label: "1日平均通行量", value: fmt(totalPerDay), unit: "人/日", sub: `${agg.sel.length}か月平均` },
    { cls: "accent", label: "ピーク時間帯", value: peakHour + "時台", unit: "", sub: `約${fmt(byHour[peakHour])}人/日` },
    { cls: "good", label: "最も多い暦月", value: hiCal.label, unit: "", sub: `平均${fmt(hiCal.avg)}人/日` },
    { cls: "sky", label: "最も少ない暦月", value: loCal.label, unit: "", sub: `平均${fmt(loCal.avg)}人/日` },
  ].map(k => `<div class="kpi ${k.cls}"><div class="k-label">${k.label}</div>
    <div class="k-value" style="font-size:22px">${k.value}<span class="k-unit">${k.unit}</span></div>
    <div class="k-sub">${k.sub}</div></div>`).join("");

  const topAgeIdx = agePct.indexOf(Math.max(...agePct));
  const ageLabels = D.peopleflow.age_labels;
  document.getElementById("peopleLead").innerHTML =
    `選択期間（<b>${periodFrom}〜${periodTo}</b>）の康生通りは、ピークが<b>${peakHour}時台</b>（約${fmt(byHour[peakHour])}人/日）。` +
    `年代は<b>${ageLabels[topAgeIdx]}</b>が最多（${agePct[topAgeIdx]}%）。` +
    `<br><span class="muted">※上の期間ボタン／プルダウンで表示期間を変更できます。</span>`;

  // 通行量の推移
  drawTimeline(tsMode, daily, agg.sel);

  // 時間帯別
  chartAt("hourChart", {
    type: "bar",
    data: { labels: byHour.map((_, h) => h + "時"), datasets: [{ label: "人/日", data: byHour, backgroundColor: "#2563eb", borderRadius: 4 }] },
    options: { plugins: { legend: { display: false } }, scales: { y: { grid: { color: grid } }, x: { grid: { display: false } } } },
  });
  // 曜日別
  chartAt("dowChart", {
    type: "bar",
    data: { labels: PF_DOW, datasets: [{ data: byDow, backgroundColor: PF_DOW.map((_, i) => i >= 5 ? "#f59e0b" : "#2563eb"), borderRadius: 4 }] },
    options: { plugins: { legend: { display: false } }, scales: { y: { grid: { color: grid }, title: { display: true, text: "人/日" } } } },
  });
  // 暦月別（1月〜12月の季節平均）
  const peakCalIdx = byCalMonth.length ? byCalMonth.indexOf(Math.max(...byCalMonth.filter((_, i) => calDays[i] > 0))) : -1;
  chartAt("monthBarChart", {
    type: "bar",
    data: {
      labels: PF_MONTHS,
      datasets: [{
        label: "人/日",
        data: byCalMonth,
        backgroundColor: PF_MONTHS.map((_, i) => {
          if (calDays[i] === 0) return "#e2e8f0";
          return i === peakCalIdx ? "#f59e0b" : "#2563eb";
        }),
        borderRadius: 4,
      }],
    },
    options: {
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (c) => {
              const days = calDays[c.dataIndex];
              return days
                ? `${fmt(c.parsed.y)} 人/日（${days}日分の平均）`
                : "データなし";
            },
          },
        },
      },
      scales: {
        y: { grid: { color: grid }, title: { display: true, text: "人/日" } },
        x: { grid: { display: false } },
      },
    },
  });
  // 年代別
  chartAt("ageChart", {
    type: "doughnut",
    data: { labels: ageLabels, datasets: [{ data: agePct, backgroundColor: paletteShades(AGE_PALETTE, ageLabels.length) }] },
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

function addDaysISO(dateStr, n) {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + n);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** 日付を週ラベル（week_start）へ写像。labels は昇順の week_start 配列。 */
function weekKeyForDate(dateStr, weekLabels) {
  let best = null;
  for (const ws of weekLabels) {
    if (ws <= dateStr) best = ws;
    else break;
  }
  return best;
}

function periodKeyForEvent(mode, dateStr, labels) {
  if (!dateStr) return null;
  if (mode === "daily") return dateStr;
  if (mode === "monthly") return dateStr.slice(0, 7);
  return weekKeyForDate(dateStr, labels);
}

function weekEndFor(weekStart) {
  const all = D.peopleflow.timeseries.weekly.map(w => w.week_start);
  const i = all.indexOf(weekStart);
  if (i >= 0 && i < all.length - 1) return addDaysISO(all[i + 1], -1);
  return addDaysISO(weekStart, 6);
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
    note = "月ごとの1日平均通行量。オレンジ▲は周辺イベントがある月。点をクリックすると、その月のイベント一覧を下に表示します。";
    pointRadius = 3;
  } else if (mode === "weekly") {
    const rows = ts.weekly.filter(w => w.week_start >= start && w.week_start <= end);
    labels = rows.map(w => w.week_start);
    data = rows.map(w => w.avg);
    note = "週ごと（週の1日平均）。オレンジ▲は周辺イベントがある週。点をクリックすると、その週のイベント一覧を下に表示します。";
  } else { // daily
    labels = daily.map(d => d.date);
    data = daily.map(d => d.count);
    note = "日ごとの通行量。オレンジ▲は周辺イベント開催日。点をクリックすると、その日のイベント一覧を下に表示します。";
    pointRadius = daily.length <= 90 ? 3 : 0;
  }

  const pointBg = data.map((_, i) =>
    (labels[i] === selectedTsDate) ? "#f59e0b" : "#2563eb");
  const pointRad = data.map((_, i) =>
    (labels[i] === selectedTsDate) ? 8 : pointRadius);

  const datasets = [{
    label: "人/日", data,
    borderColor: "#2563eb", backgroundColor: "rgba(37,99,235,.12)",
    borderWidth: 2, fill: true, tension: .25,
    pointRadius: pointRad, pointBackgroundColor: pointBg, pointBorderColor: pointBg,
  }];

  const idx = {};
  labels.forEach((lab, i) => { idx[lab] = data[i]; });
  const pts = [];
  ev.forEach(e => {
    const key = periodKeyForEvent(mode, e.rep_date, labels);
    if (key && idx[key] !== undefined) {
      pts.push({ x: key, y: idx[key], name: e.name });
    }
  });
  if (pts.length) {
    datasets.push({
      label: "イベント", type: "scatter", data: pts,
      pointRadius: 6, pointHoverRadius: 8, showLine: false,
      pointStyle: "triangle", backgroundColor: "#f59e0b", borderColor: "#b45309",
    });
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
        if (!elements.length) return;
        const el = elements[0];
        const raw = chart.data.datasets[el.datasetIndex].data[el.index];
        const key = (raw && typeof raw === "object" && raw.x) ? raw.x : labels[el.index];
        if (key) showTsDayEvents(key);
      },
      plugins: {
        legend: { display: pts.length > 0, labels: { boxWidth: 12, font: { size: 11 } } },
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

  if (selectedTsDate && labels.includes(selectedTsDate)) {
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

function eventsInBucket(mode, key) {
  if (mode === "daily") return eventsOnDate(key);
  const all = (D.events && D.events.items) || [];
  if (mode === "monthly") {
    const start = key + "-01", end = key + "-31";
    return all.filter(e => e.start <= end && e.end >= start);
  }
  const start = key, end = weekEndFor(key);
  return all.filter(e => e.start <= end && e.end >= start);
}

function flowForBucket(mode, key) {
  if (mode === "daily") {
    const dayRow = tsDailyCache.find(d => d.date === key);
    return dayRow ? dayRow.count : null;
  }
  if (mode === "monthly") {
    const row = D.peopleflow.timeseries.monthly.find(m => m.ym === key);
    return row ? row.avg : null;
  }
  const row = D.peopleflow.timeseries.weekly.find(w => w.week_start === key);
  return row ? row.avg : null;
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

function showTsDayEvents(key, redrawChart = true) {
  selectedTsDate = key;
  const events = eventsInBucket(tsMode, key);
  const flow = flowForBucket(tsMode, key);

  let title, lead, emptyMsg, rows;
  if (tsMode === "daily") {
    const dayRow = tsDailyCache.find(d => d.date === key);
    const uplift = upliftPctForDay(key, flow);
    const dowLabel = dayRow ? PF_DOW[dayRow.dow] : "";
    title = `${key}（${dowLabel}）のイベント`;
    lead = flow != null
      ? `この日の通行量は <b>${fmt(flow)} 人/日</b>（同曜日中央値比 ${formatUplift(uplift)}）。` +
        (events.length
          ? ` 周辺イベント <b>${events.length}件</b> が開催されていました。`
          : " この日に記録されている周辺イベントはありません。")
      : "この日の人流データがありません。";
    emptyMsg = "この日に開催された周辺イベントはありません";
    rows = events.length
      ? events.map(e => buildEventRow(e, flow, uplift)).join("")
      : null;
  } else if (tsMode === "weekly") {
    const end = weekEndFor(key);
    title = `${key}〜${end}（週）のイベント`;
    lead = flow != null
      ? `この週の1日平均通行量は <b>${fmt(flow)} 人/日</b>。` +
        (events.length
          ? ` 周辺イベント <b>${events.length}件</b> が含まれます。`
          : " この週に記録されている周辺イベントはありません。")
      : "この週の人流データがありません。";
    emptyMsg = "この週に開催された周辺イベントはありません";
    rows = events.length ? events.map(e => buildEventRow(e)).join("") : null;
  } else {
    title = `${key}（月）のイベント`;
    lead = flow != null
      ? `この月の1日平均通行量は <b>${fmt(flow)} 人/日</b>。` +
        (events.length
          ? ` 周辺イベント <b>${events.length}件</b> が含まれます。`
          : " この月に記録されている周辺イベントはありません。")
      : "この月の人流データがありません。";
    emptyMsg = "この月に開催された周辺イベントはありません";
    rows = events.length ? events.map(e => buildEventRow(e)).join("") : null;
  }

  document.getElementById("tsDayEventsTitle").textContent = title;
  document.getElementById("tsDayEventsLead").innerHTML = lead;
  document.getElementById("tsDayEventTable").innerHTML = EVENT_TABLE_HEAD + (
    rows || `<tr><td colspan="6" class="muted" style="text-align:center;padding:16px">${emptyMsg}</td></tr>`
  );
  document.getElementById("tsDayEvents").classList.remove("hidden");

  if (redrawChart) {
    const agg = aggregatePeriod();
    drawTimeline(tsMode, tsDailyCache, agg.sel);
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
      ? `${BUILDING_NAME}から半径${(D.events.radius_m / 1000).toFixed(1)}km内・選択期間のイベント${ev.length}件。開催日の通行量が同曜日の中央値からどれだけ増減したか（押し上げ効果）で並べています。`
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
  const restaurant = (cats.find(c => c.category === "レストラン・食堂") || {}).count || 0;
  document.getElementById("storesLead").innerHTML =
    `半径${st.radius_m}m以内の飲食・食品店は<b>${st.points.length}件</b>です。業種別ではレストラン・食堂が<b>${restaurant}件</b>、` +
    `カフェ・喫茶が<b>${cafe}件</b>です。`;

  const b = D.meta.building;
  const map = L.map("storeMap").setView([b.lat, b.lon], 16);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "&copy; OpenStreetMap", maxZoom: 19 }).addTo(map);
  maps.stores = map;
  L.marker([b.lat, b.lon]).addTo(map).bindPopup("<b>" + BUILDING_NAME + "</b>");
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
    "「店が少ない＝チャンス」とは限りません。人流分析の来街者属性と合わせて判断してください。";

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
// 棒グラフ・折れ線など（多項目円グラフ以外は青系で統一）
const CONS_BAR = "#2563eb";
const CONS_BAR_MUTED = "#64748b";
const CONS_ORDINAL = ["#1e3a8a", "#2563eb", "#60a5fa", "#93c5fd", "#cbd5e1"];
const CONS_DOUGHNUT_3 = ["#1e40af", "#60a5fa", "#cbd5e1"];

function consShades(palette, n) {
  return paletteShades(palette, n);
}

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

// 和暦（平成/令和・元号省略の数字含む）を西暦の年ラベルに統一する。
// 配列を先頭から走査し、「令和」出現以降は元号を令和として数字だけの年を解釈する。
function toSeirekiLabels(labels) {
  const ERA_BASE = { 平成: 1988, 令和: 2018 };
  let era = "平成"; // データは平成→令和の順で並ぶ前提
  return labels.map((raw) => {
    const s = String(raw == null ? "" : raw).trim();
    let matchedEra = null;
    if (s.includes("令和")) matchedEra = "令和";
    else if (s.includes("平成")) matchedEra = "平成";
    if (matchedEra) era = matchedEra;

    let num;
    if (s.includes("元")) num = 1;
    else {
      const m = s.match(/\d+/);
      if (!m) return s; // 数字が無ければそのまま
      num = parseInt(m[0], 10);
    }
    return `${ERA_BASE[era] + num}年`;
  });
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
    `令和6年度市民意識調査（<b>${fmt(sv.respondents || 0)}人</b>）と、岡崎市の人口・所得・食品営業データを表示します。` +
    `康生周辺（${np.area_count || 0}町字）の居住人口は<b>${fmt(np.population || 0)}人</b>、` +
    `世帯数は<b>${fmt(np.households || 0)}世帯</b>（${np.date || "—"}時点）です。`;

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
        backgroundColor: CONS_BAR, borderRadius: 4 }],
    },
    options: { plugins: { legend: { display: false } },
      scales: { y: { grid: { color: grid }, title: { display: true, text: "%" } }, x: { grid: { display: false } } } },
  });
  consChart("consJobChart", {
    type: "bar",
    data: {
      labels: (sv.occupations || []).map(x => x.label),
      datasets: [{ data: (sv.occupations || []).map(x => x.pct),
        backgroundColor: CONS_BAR, borderRadius: 4 }],
    },
    options: { indexAxis: "y", plugins: { legend: { display: false } },
      scales: { x: { grid: { color: grid }, title: { display: true, text: "%" } } } },
  });

  // 満足度・休日・中心市街地
  const satItems = sv.commerce_satisfaction || [];
  consChart("consSatChart", {
    type: "doughnut",
    data: {
      labels: satItems.map(x => x.label),
      datasets: [{ data: satItems.map(x => x.pct),
        backgroundColor: consShades(CONS_DOUGHNUT_3, satItems.length) }],
    },
    options: { plugins: { legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 10 } } } } },
  });
  const holItems = sv.holiday_in_city || [];
  consChart("consHolidayChart", {
    type: "bar",
    data: {
      labels: holItems.map(x => x.label),
      datasets: [{ data: holItems.map(x => x.pct),
        backgroundColor: consShades(CONS_ORDINAL, holItems.length), borderRadius: 4 }],
    },
    options: { plugins: { legend: { display: false } }, scales: { y: { grid: { color: grid } } } },
  });
  const ctrItems = sv.center_city_visit || [];
  consChart("consCenterChart", {
    type: "bar",
    data: {
      labels: ctrItems.map(x => x.label),
      datasets: [{ data: ctrItems.map(x => x.pct),
        backgroundColor: consShades(CONS_ORDINAL, ctrItems.length), borderRadius: 4 }],
    },
    options: { plugins: { legend: { display: false } }, scales: { y: { grid: { color: grid } } } },
  });

  // 食品営業種別
  const foods = c.city_food_kinds || [];
  consChart("consFoodChart", {
    type: "bar",
    data: {
      labels: foods.map(x => x.kind),
      datasets: [{ data: foods.map(x => x.count), backgroundColor: CONS_BAR, borderRadius: 4 }],
    },
    options: { indexAxis: "y", plugins: { legend: { display: false } },
      scales: { x: { grid: { color: grid }, title: { display: true, text: "件数" } } } },
  });
  document.getElementById("consFoodNote").textContent = "";

  // 交通手段
  consChart("consTransportChart", {
    type: "bar",
    data: {
      labels: (sv.transport_modes || []).map(x => x.label),
      datasets: [{ data: (sv.transport_modes || []).map(x => x.pct), backgroundColor: CONS_BAR, borderRadius: 4 }],
    },
    options: { indexAxis: "y", plugins: { legend: { display: false } },
      scales: { x: { grid: { color: grid }, max: 100, title: { display: true, text: "回答者の %" } } } },
  });

  // 周辺人口年齢
  const nearAge = np.age_structure || [];
  consChart("consNearAgeChart", {
    type: "doughnut",
    data: {
      labels: nearAge.map(x => x.label),
      datasets: [{ data: nearAge.map(x => x.pct),
        backgroundColor: paletteShades(AGE_PALETTE, nearAge.length) }],
    },
    options: { plugins: { legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 10 } } } } },
  });
  document.getElementById("consNearPopNote").innerHTML =
    `最多町字: ${(np.areas && np.areas[0]) ? np.areas[0].name + "（" + fmt(np.areas[0].population) + "人）" : "—"}`;

  // 人口推移
  const popItems = (c.city_population_trend && c.city_population_trend.items) || [];
  consChart("consPopTrendChart", {
    type: "line",
    data: {
      labels: toSeirekiLabels(popItems.map(x => x.year_label)),
      datasets: [{
        label: "人口", data: popItems.map(x => x.population),
        borderColor: "#2563eb", backgroundColor: "rgba(37,99,235,.1)",
        fill: true, tension: .25, yAxisID: "y",
      }, {
        label: "世帯数", data: popItems.map(x => x.households),
        borderColor: CONS_BAR_MUTED, borderDash: [4, 4], tension: .25, yAxisID: "y1",
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
        labels: toSeirekiLabels(incTrend.map(x => x.year_label)),
        datasets: [{
          label: "市民所得", data: incTrend.map(x => x.citizen_income_k),
          borderColor: CONS_BAR, tension: .25,
        }, {
          label: "家計所得", data: incTrend.map(x => x.household_income_k),
          borderColor: CONS_BAR_MUTED, borderDash: [5, 3], tension: .25,
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
    document.getElementById("consIncomeNote").textContent = c.income_note || "";
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

  fillSourcesList("consumerSourcesList", [
    `市民意識調査: ${(sv.source || "岡崎市オープンデータ（令和6年度市民意識調査）")}`,
    `康生周辺人口: ${(np.source || "岡崎市オープンデータ（地域・年齢別人口）")}${np.note ? `（${np.note}）` : ""}`,
    "市内食品営業: 岡崎市「食品等営業許可・届出一覧」（BODIK）",
    `人口・世帯数の推移: ${((c.city_population_trend && c.city_population_trend.source) || "岡崎市オープンデータ（人口・世帯数等）")}`,
    `所得・産業構成: ${((c.income_trend && c.income_trend.source) || "岡崎市統計")}`,
    c.summary_note || "",
  ]);
}

/* =========================================================
   画面5: 商圏人口
   ========================================================= */
function renderDemographics() {
  const dm = D.demographics, fut = D.future;
  const badge = dm.is_dummy
    ? '<span class="dummy-badge">ダミーデータ</span>'
    : (dm.is_partial ? '<span class="dummy-badge" style="background:#dbeafe;color:#1e40af">概算（実データ）</span>' : "");

  document.getElementById("demoDummyBadge").innerHTML = badge;

  const popNote = dm.is_dummy ? "※ダミー" : (dm.notes && dm.notes.population ? "町字合算" : "実データ");
  const kpi = [
    { cls: "", label: "徒歩5分圏 人口", value: fmt(dm.walk5_population), unit: "人", sub: popNote },
    { cls: "sky", label: "徒歩10分圏 人口", value: fmt(dm.walk10_population), unit: "人", sub: popNote },
    { cls: "accent", label: "単身比率", value: dm.single_ratio ?? "—", unit: dm.single_ratio != null ? "%" : "", sub: dm.is_dummy ? "※ダミー" : "市民意識調査" },
    { cls: "good", label: "高齢者比率", value: dm.elderly_ratio ?? "—", unit: dm.elderly_ratio != null ? "%" : "", sub: dm.is_dummy ? "※ダミー" : "徒歩10分圏" },
  ];
  document.getElementById("demoKpi").innerHTML = kpi.map(k => `
    <div class="kpi ${k.cls}"><div class="k-label">${k.label}</div>
    <div class="k-value">${k.value}<span class="k-unit">${k.unit}</span></div>
    <div class="k-sub">${k.sub}</div></div>`).join("");

  const w5 = dm.walk5_areas || [];
  const w10 = dm.walk10_areas || [];
  const areaEl = document.getElementById("demoAreaLists");
  if (areaEl && (w5.length || w10.length)) {
    areaEl.innerHTML =
      `<div class="area-row"><span class="area-label">5分圏（${w5.length}町）:</span>${w5.join("・")}</div>` +
      `<div class="area-row"><span class="area-label">10分圏（${w10.length}町）:</span>${w10.join("・")}</div>`;
  } else if (areaEl) {
    areaEl.innerHTML = "";
  }

  new Chart(document.getElementById("demoAgeChart"), {
    type: "doughnut",
    data: {
      labels: dm.age_structure.map(a => a.label),
      datasets: [{
        data: dm.age_structure.map(a => a.pct),
        backgroundColor: paletteShades(AGE_PALETTE, dm.age_structure.length),
      }],
    },
    options: { plugins: { legend: { position: "right", labels: { boxWidth: 10, font: { size: 10 } } } } },
  });

  if (dm.household && dm.household.length) {
    new Chart(document.getElementById("demoHouseChart"), {
      type: "doughnut",
      data: {
        labels: dm.household.map(h => h.label),
        datasets: [{ data: dm.household.map(h => h.pct),
          backgroundColor: paletteShades(CONS_PALETTE, dm.household.length) }],
      },
      options: { plugins: { legend: { position: "right", labels: { boxWidth: 10, font: { size: 10 } } } } },
    });
  }

  document.getElementById("futureBox").innerHTML = fut.items.map(i => `
    <div class="future-item"><div class="fi-label">${i.label}</div>
    <div class="fi-value">${i.url ? sourceLink(i.value, i.url) : i.value}</div>
    <div class="fi-note">${i.note || ""}</div></div>`).join("");

  const demoItems = [];
  if (dm.is_dummy) {
    demoItems.push("人口・世帯: ダミーデータ");
  } else {
    demoItems.push(
      `人口・世帯: ${dm.source || "岡崎市オープンデータ（地域・年齢別人口・市民意識調査）"}` +
      (dm.population_date ? `（人口基準日: ${dm.population_date}）` : "")
    );
    if (dm.notes && dm.notes.population) demoItems.push(dm.notes.population);
    if (dm.notes && dm.notes.age_structure) demoItems.push(dm.notes.age_structure);
    if (dm.notes && dm.notes.household) demoItems.push(dm.notes.household);
    if (dm.avg_household_size) {
      demoItems.push(`徒歩10分圏の1世帯当たり人口: ${dm.avg_household_size}人`);
    }
  }
  if (fut.is_dummy) {
    demoItems.push("将来性・都市計画: ダミー");
  } else {
    demoItems.push(`将来性・都市計画（総括）: ${fut.source || "公開資料"}`);
    (fut.items || []).forEach((i) => {
      if (!i.url && !i.note) return;
      demoItems.push(
        `${i.label}: ${i.note || ""}${i.url ? ` ${sourceLink("資料", i.url)}` : ""}`.trim()
      );
    });
  }
  fillSourcesList("demoSourcesList", demoItems);
}

/* ---------- 実行 ---------- */
renderSummary();
setupAiChat();
setupTopNav();
setupSidebarToggle();
setupPeoplePeriod();
updatePeople();
renderStores();
renderConsumer();
renderDemographics();

// URLハッシュ（#people / #people:daily 等）で画面を直接開けるように
function applyHash() {
  if (!location.hash) {
    activateScreen("assistant");
    return;
  }
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
