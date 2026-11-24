// Phone-app side of GPS tracking and health records: the live herd map, the
// virtual-fence controls, and the tracking / register / record cards that sit
// inside each animal's page.
import { SHED, PADDOCK, GATE, PLOT, PT, SPLIT_X, LANE_Z, SIDE_GATE, toLatLon } from './layout.js';
import { TRACK_COLORS } from './tracking.js';

const $ = (id) => document.getElementById(id);
const INK = '#17301f', MUTED = '#5d6f62';
// one-hue ramp for the heat map: light = rarely there, dark = most of the day
const HEAT = ['#cde2fb', '#9ec5f4', '#5598e7', '#256abf', '#0d366b'];
const BUDGET = [['feed', 'Feeding', '#2a78d6'], ['walk', 'Walking', '#eb6834'], ['graze', 'Grazing', '#1baf7a'], ['rest', 'Resting', '#6250d6']];
const PARTS = [['temp', 'Temperature'], ['rumination', 'Rumination'], ['activity', 'Activity'], ['mobility', 'Mobility (GPS)'], ['hydration', 'Hydration']];
const DOING = { walk: 'walking', graze: 'grazing', eat: 'feeding', drink: 'drinking', rest: 'lying down', idle: 'standing' };

export function createTrackUI({ sim, world, ui, esc, hhmm, toast, openAnimal, showTab, apply, runAction }) {
  const t = { layer: 'trails', slow: 0, mapT: 0, hover: null, pts: [] };
  const colorOf = (a) => TRACK_COLORS[a.idx];
  const set = (id, v) => { const el = $(id); if (el && el.textContent !== v) el.textContent = v; };
  const pct = (id, f) => { const el = $(id); if (el) el.style.width = `${Math.max(0, Math.min(100, f * 100)).toFixed(1)}%`; };

  // ------------------------------------------------------------ map tab
  $('tab-map').innerHTML = `
    <div class="card"><h4>Live herd map <span class="src">GPS · ${sim.animals.length} belts</span></h4>
      <div class="mapwrap"><canvas id="mapCv" aria-label="Map of the farm with each animal's GPS position"></canvas><div id="mapTip" class="maptip" hidden></div></div>
      <div class="line"><div class="seg" id="mapLayer"><button data-v="trails" class="on">Trails</button><button data-v="heat">Heat map</button><button data-v="plain">Plain</button></div></div>
      <div class="line"><span id="geoChip" class="chip"></span></div>
      <div id="geoBanner" class="banner" hidden></div>
      <ul class="maplegend">${sim.animals.map((a) => `<li><button data-id="${a.id}"><i style="background:${colorOf(a)}"></i>${esc(a.name)}</button></li>`).join('')}</ul></div>
    <div class="card"><h4>Virtual fence <span class="src">grazing cells</span></h4>
      <div class="tank"><span>West grass</span><div class="bar green"><i id="pcW"></i></div><b id="pvW"></b></div>
      <div class="tank"><span>East grass</span><div class="bar green"><i id="pcE"></i></div><b id="pvE"></b></div>
      <div class="ctl"><span>Herd grazes</span><div class="seg" id="pMode"><button data-v="west">West</button><button data-v="east">East</button><button data-v="whole">Whole</button></div></div>
      <div class="line"><span id="pNote" class="muted"></span><button id="pAuto" class="toggle" title="Move the herd by itself when the grazed cell runs low">Auto</button></div></div>
    <div class="card"><h4>Where they are <span class="src">last fix</span></h4>
      <table class="loc"><thead><tr><th>Animal</th><th>Zone</th><th>Today</th><th>Fix</th></tr></thead><tbody>${sim.animals.map((a) => `
        <tr data-id="${a.id}"><td><i style="background:${colorOf(a)}"></i>${esc(a.name)}</td><td id="lz_${a.id}"></td><td id="ld_${a.id}"></td><td id="lf_${a.id}"></td></tr>`).join('')}</tbody></table></div>`;
  $('mapLayer').onclick = (ev) => { const b = ev.target.closest('button'); if (!b) return; t.layer = b.dataset.v; [...$('mapLayer').children].forEach((x) => x.classList.toggle('on', x === b)); drawMap(); };
  $('pMode').onclick = (ev) => { const b = ev.target.closest('button'); if (b) { sim.setPasture(b.dataset.v); refreshMapPanel(); } };
  $('pAuto').onclick = () => { sim.setPasture('auto'); refreshMapPanel(); };
  $('tab-map').addEventListener('click', (ev) => {
    const b = ev.target.closest('[data-id]'); if (b) return openAnimal(b.dataset.id);
    if (ev.target.closest('[data-recall]')) runAction('recall');
  });

  const cv = $('mapCv');
  const W2X = (x, w) => ((x + 18) / 36) * w, Z2Y = (z, h) => ((z + 12) / 24) * h;
  function drawMap() {
    const dpr = Math.min(2, devicePixelRatio || 1), w = cv.clientWidth, h = Math.round((w * 2) / 3);
    if (!w) return;
    if (cv.width !== Math.round(w * dpr)) { cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); cv.style.height = `${h}px`; }
    const g = cv.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    const X = (x) => W2X(x, w), Y = (z) => Z2Y(z, h);
    const rect = (x0, z0, x1, z1, fill, label) => {
      g.fillStyle = fill; g.fillRect(X(x0), Y(z0), X(x1) - X(x0), Y(z1) - Y(z0));
      if (label) { g.fillStyle = MUTED; g.font = '600 9px "Segoe UI", sans-serif'; g.textAlign = 'center'; g.fillText(label, (X(x0) + X(x1)) / 2, (Y(z0) + Y(z1)) / 2 + 3); }
    };
    g.fillStyle = '#f3f6ec'; g.fillRect(0, 0, w, h);
    const pa = sim.pasture, tint = (c) => `rgb(${Math.round(233 - 40 * c)},${Math.round(226 + 10 * c)},${Math.round(184 - 10 * c)})`;
    rect(PADDOCK.x0, GATE.z, PADDOCK.x1, LANE_Z, '#e3ecd2');
    rect(PADDOCK.x0, LANE_Z, SPLIT_X, PADDOCK.z1, tint(pa.cover.west), t.layer === 'heat' ? '' : 'West cell');
    rect(SPLIT_X, LANE_Z, PADDOCK.x1, PADDOCK.z1, tint(pa.cover.east), t.layer === 'heat' ? '' : 'East cell');
    rect(SHED.x0, SHED.z0, SHED.x1, SHED.z1, '#e3d9c8', 'Shed');
    rect(PLOT.x0, PLOT.z0, PLOT.x1, PLOT.z1, '#dcebc4', 'Fodder');
    rect(-2.6, -10.6, 6.4, -4.9, '#d8e8f6', 'Water');
    rect(8.6, -10.9, 15.8, -6.3, '#fdf0c0', 'Solar');
    rect(-0.4, 3.5, 11.4, 10, '#e2efdf', 'Biogas');
    g.fillStyle = MUTED; g.fillRect(X(PT.kiosk.x) - 3, Y(PT.kiosk.z) - 3, 6, 6);

    if (t.layer === 'heat') {       // where the herd has spent its time
      const max = Math.max(1, ...sim.heat), cw = w / sim.heatW, ch = h / sim.heatH;
      for (let j = 0; j < sim.heatH; j++) for (let i = 0; i < sim.heatW; i++) {
        const v = sim.heat[j * sim.heatW + i] / max;
        if (v < 0.03) continue;
        g.fillStyle = HEAT[Math.min(4, Math.floor(Math.sqrt(v) * 5))];
        g.fillRect(i * cw + 1, j * ch + 1, cw - 2, ch - 2);
      }
    }
    // virtual fence and the closed cell
    if (pa.mode !== 'whole') {
      const cx0 = pa.mode === 'west' ? SPLIT_X : PADDOCK.x0, cx1 = pa.mode === 'west' ? PADDOCK.x1 : SPLIT_X;
      g.save(); g.beginPath(); g.rect(X(cx0), Y(LANE_Z), X(cx1) - X(cx0), Y(PADDOCK.z1) - Y(LANE_Z)); g.clip();
      g.strokeStyle = 'rgba(29,79,110,.22)'; g.lineWidth = 1;
      for (let d = -h; d < w; d += 7) { g.beginPath(); g.moveTo(X(cx0) + d, Y(PADDOCK.z1)); g.lineTo(X(cx0) + d + h, Y(LANE_Z) - 20); g.stroke(); }
      g.restore();
      g.strokeStyle = '#1d7fa8'; g.lineWidth = 2; g.setLineDash([5, 4]);
      g.beginPath(); g.moveTo(X(SPLIT_X), Y(PADDOCK.z1)); g.lineTo(X(SPLIT_X), Y(LANE_Z)); g.lineTo(X(pa.mode === 'west' ? PADDOCK.x1 : PADDOCK.x0), Y(LANE_Z)); g.stroke(); g.setLineDash([]);
    }
    // geofence
    const breach = sim.geo.outside > 0;
    g.strokeStyle = breach ? '#b3261e' : '#2e7d3c'; g.lineWidth = breach ? 2.5 : 1.5;
    g.beginPath(); g.moveTo(X(PADDOCK.x0), Y(PADDOCK.z1)); g.lineTo(X(PADDOCK.x1), Y(PADDOCK.z1)); g.lineTo(X(PADDOCK.x1), Y(GATE.z)); g.lineTo(X(SHED.x1), Y(GATE.z));
    g.lineTo(X(SHED.x1), Y(SHED.z0)); g.lineTo(X(PADDOCK.x0), Y(SHED.z0)); g.closePath(); g.stroke();
    if (sim.geo.sideGate) { g.strokeStyle = '#f3f6ec'; g.lineWidth = 4; g.beginPath(); g.moveTo(X(SIDE_GATE.x), Y(SIDE_GATE.z0)); g.lineTo(X(SIDE_GATE.x), Y(SIDE_GATE.z1)); g.stroke(); }
    // rover
    g.fillStyle = '#8a8f93'; g.fillRect(X(sim.rover.x) - 2.5, Y(sim.rover.z) - 2.5, 5, 5);
    // trails
    if (t.layer === 'trails') for (const a of sim.animals) {
      const tr = a.trail.slice(-40);
      if (tr.length < 2) continue;
      g.strokeStyle = colorOf(a); g.lineWidth = 2; g.lineJoin = g.lineCap = 'round'; g.globalAlpha = 0.6;
      g.beginPath(); tr.forEach((p, i) => (i ? g.lineTo(X(p.x), Y(p.z)) : g.moveTo(X(p.x), Y(p.z)))); g.stroke(); g.globalAlpha = 1;
    }
    // animals: coloured dot with a white ring, always labelled by name
    t.pts = [];
    const now = performance.now() / 1000;
    for (const a of sim.animals) {
      const px = X(a.gps.x), py = Y(a.gps.z), sel = world.state.selected === a.id || t.hover === a.id;
      t.pts.push({ id: a.id, x: px, y: py });
      if (a.outside || a.ai.flagged) {
        g.strokeStyle = a.outside || a.ai.key === 'fever' ? '#b3261e' : '#a86a00'; g.lineWidth = 2; g.globalAlpha = 0.5 + 0.5 * Math.sin(now * 6);
        g.beginPath(); g.arc(px, py, 11, 0, 7); g.stroke(); g.globalAlpha = 1;
      }
      g.fillStyle = '#fff'; g.beginPath(); g.arc(px, py, sel ? 8 : 6.5, 0, 7); g.fill();
      g.fillStyle = colorOf(a); g.beginPath(); g.arc(px, py, sel ? 6 : 4.5, 0, 7); g.fill();
      g.font = '600 10px "Segoe UI", sans-serif'; g.textAlign = px > w - 44 ? 'right' : 'left';
      const lx = px + (px > w - 44 ? -9 : 9), ly = py + 3.5;
      g.lineWidth = 3; g.strokeStyle = 'rgba(255,255,255,.9)'; g.strokeText(a.name, lx, ly);
      g.fillStyle = INK; g.fillText(a.name, lx, ly);
    }
    // scale and north
    g.strokeStyle = INK; g.lineWidth = 1.5; g.beginPath(); g.moveTo(8, h - 8); g.lineTo(8 + (5 / 36) * w, h - 8); g.stroke();
    g.fillStyle = INK; g.font = '9px "Segoe UI", sans-serif'; g.textAlign = 'left'; g.fillText('10 m', 8, h - 12);
    g.textAlign = 'center'; g.fillText('N', w - 12, 12); g.beginPath(); g.moveTo(w - 12, 15); g.lineTo(w - 15, 22); g.lineTo(w - 9, 22); g.closePath(); g.fill();
  }
  const near = (ev) => {
    const r = cv.getBoundingClientRect(), x = ev.clientX - r.left, y = ev.clientY - r.top;
    let best = null, bd = 16;
    for (const p of t.pts) { const d = Math.hypot(p.x - x, p.y - y); if (d < bd) { bd = d; best = p; } }
    return best;
  };
  cv.onmousemove = (ev) => {
    const p = near(ev), tip = $('mapTip');
    t.hover = p ? p.id : null; cv.style.cursor = p ? 'pointer' : 'default';
    if (!p) { tip.hidden = true; return; }
    const a = sim.animals.find((x) => x.id === p.id);
    tip.hidden = false; tip.style.left = `${Math.min(cv.clientWidth - 150, Math.max(0, p.x - 70))}px`; tip.style.top = `${p.y + 14}px`;
    tip.innerHTML = `<b>${esc(a.name)}</b> · ${esc(a.ai.label)}<br>${sim.zoneOf(a)}, ${DOING[a.state]}<br>${a.temp.toFixed(1)} °C · ${a.distToday.toFixed(0)} m today`;
  };
  cv.onmouseleave = () => { t.hover = null; $('mapTip').hidden = true; };
  cv.onclick = (ev) => { const p = near(ev); if (p) openAnimal(p.id); };

  function refreshMapPanel() {
    const pa = sim.pasture, out = sim.animals.filter((a) => a.outside);
    pct('pcW', pa.cover.west); set('pvW', `${Math.round(pa.cover.west * 100)} %`);
    pct('pcE', pa.cover.east); set('pvE', `${Math.round(pa.cover.east * 100)} %`);
    [...$('pMode').children].forEach((b) => b.classList.toggle('on', b.dataset.v === pa.mode));
    const au = $('pAuto'); au.classList.toggle('on', pa.auto); au.textContent = pa.auto ? 'Auto ON' : 'Auto off';
    const other = pa.mode === 'west' ? 'east' : 'west';
    set('pNote', pa.mode === 'whole' ? 'No virtual fence: the whole paddock is grazed, so neither cell rests.'
      : pa.auto ? `Resting the ${other} cell. Moves when grazed grass falls under 35 %.`
        : pa.cover[pa.mode] < 0.4 && pa.cover[other] > pa.cover[pa.mode] + 0.2 ? `Tip: the ${other} cell has more grass. Move the herd.` : `Resting the ${other} cell so it can regrow.`);
    const chip = $('geoChip'); chip.textContent = out.length ? `✖ ${out.length} outside geofence` : `✔ All ${sim.animals.length} inside geofence`; chip.classList.toggle('on', !out.length); chip.classList.toggle('bad', out.length > 0);
    const ban = $('geoBanner'); ban.hidden = !out.length;
    if (out.length) {
      const html = `<span><b>${out.map((a) => esc(a.name)).join(', ')}</b> ${out.length > 1 ? 'are' : 'is'} outside the safe zone${sim.geo.sideGate ? ' (side gate open)' : ''}.</span><button class="mini" data-recall>${out.every((a) => a.recalled) ? 'Cue sent, walking back' : 'Guide back'}</button>`;
      if (ban.dataset.h !== html) { ban.dataset.h = html; ban.innerHTML = html; }
    }
    for (const a of sim.animals) {
      set(`lz_${a.id}`, `${sim.zoneOf(a)}, ${DOING[a.state]}`);
      set(`ld_${a.id}`, `${a.distToday.toFixed(0)} m`);
      set(`lf_${a.id}`, `±${a.gps.acc.toFixed(0)} m · ${a.gps.sats} sat`);
    }
  }

  // ---------------------------------------------- cards on an animal's page
  function cards(a) {
    return `<div class="card"><h4>Health breakdown <span class="src">belt AI</span></h4>
        ${PARTS.map(([k, l]) => `<div class="tank part"><span>${l}</span><div class="bar"><i id="hp_${k}"></i></div><b id="hv_${k}"></b></div>`).join('')}</div>
      <div class="card"><h4>Movement <span class="src">GPS</span></h4>
        <p id="aGps" class="muted"></p>
        <div class="trio"><div><b id="aDist"></b><small>walked today</small></div><div><b id="aGait"></b><small>of normal gait</small></div><div><b id="aHerd"></b><small>from the herd</small></div></div>
        <div id="aBudget" class="budget" title="How she has spent today"></div>
        <ul class="budgetkey">${BUDGET.map(([k, l, c]) => `<li><i style="background:${c}"></i>${l} <b id="bk_${k}"></b></li>`).join('')}</ul>
        <div class="line"><button class="mini" data-ring>Ring her belt</button><button class="mini" data-recall id="aRecall" hidden>Guide her back</button></div>
        <p id="aMilk" class="muted"></p></div>
      <div class="card"><h4>Herd register</h4>
        <div class="kv"><span>Age / weight</span><b>${a.record.age} y · ${a.record.weight} kg</b></div>
        <div class="kv"><span>Lactation / days in milk</span><b id="aDim"></b></div>
        <div class="kv"><span>Pregnant</span><b>${a.record.pregnant ? 'Yes' : 'No'}</b></div>
        <div id="aVac"></div></div>
      <div class="card"><h4>Health record</h4><ul id="aEvents" class="events"></ul></div>`;
  }
  function refreshAnimal() {
    const a = sim.animals.find((x) => x.id === ui.animal);
    if (!a || !$('aDist')) return;
    const ll = toLatLon(a.gps.x, a.gps.z);
    set('aGps', `${sim.zoneOf(a)}, ${DOING[a.state]} · ${ll.lat.toFixed(5)}° N, ${ll.lon.toFixed(5)}° E · ±${a.gps.acc.toFixed(0)} m, ${a.gps.sats} satellites${a.gps.sats < 7 ? ' (under the roof)' : ''}`);
    set('aDist', `${a.distToday.toFixed(0)} m`); set('aGait', `${Math.round((a.ai.mobR ?? 1) * 100)} %`); set('aHerd', `${a.herdDist.toFixed(0)} m`);
    for (const [k] of PARTS) { const v = a.ai.parts ? a.ai.parts[k] : 100; pct(`hp_${k}`, v / 100); set(`hv_${k}`, `${v}`); $(`hp_${k}`).classList.toggle('low', v < 60); }
    const tot = BUDGET.reduce((s, [k]) => s + a.budget[k], 0) || 1;
    const bar = BUDGET.map(([k, , c]) => `<i style="width:${((a.budget[k] / tot) * 100).toFixed(1)}%;background:${c}"></i>`).join('');
    if ($('aBudget').dataset.h !== bar) { $('aBudget').dataset.h = bar; $('aBudget').innerHTML = bar; }
    for (const [k] of BUDGET) set(`bk_${k}`, `${a.budget[k].toFixed(1)} h`);
    $('aRecall').hidden = !a.free; set('aRecall', a.recalled ? 'Cue sent, walking back' : 'Guide her back');
    set('aDim', `${a.record.lactation} · ${a.record.dim + sim.day - 1} days`);
    const vac = a.record.vaccines.map((v) => { const d = v.due - sim.day; return `<div class="kv vac${d <= 1 ? ' due' : ''}"><span>${esc(v.name)}</span><b>${d < 0 ? `overdue by ${-d} d` : d === 0 ? 'due today' : `due in ${d} d`}</b>${d <= 1 ? `<button class="mini" data-vac="${esc(v.name)}">Mark done</button>` : ''}</div>`; }).join('');
    if ($('aVac').dataset.h !== vac) { $('aVac').dataset.h = vac; $('aVac').innerHTML = vac; }
    const evs = a.events.length ? a.events.map((e) => `<li class="ev-${e.kind}"><em>Day ${Math.floor(e.t / 24) + 1 - sim.dayOffset}, ${hhmm(e.t % 24)}</em>${esc(e.text)}</li>`).join('') : '<li class="muted">Nothing recorded yet. Alerts, treatments and milk changes will appear here.</li>';
    if ($('aEvents').dataset.h !== evs) { $('aEvents').dataset.h = evs; $('aEvents').innerHTML = evs; }
  }
  $('tab-herd').addEventListener('click', (ev) => {
    const b = ev.target.closest('button'); if (!b) return;
    const a = sim.animals.find((x) => x.id === ui.animal);
    if ('ring' in b.dataset && a) { world.state.ring = { id: a.id, t: 6 }; openAnimal(a.id); toast(`Ringing ${esc(a.name)}'s belt: buzzer and light for 6 seconds. Look for the beam.`); }
    else if ('recall' in b.dataset) runAction('recall');
    else if (b.dataset.vac && a) { sim.markVaccine(a.id, b.dataset.vac); refreshAnimal(); toast(`${esc(b.dataset.vac)} recorded for ${esc(a.name)}.`); }
    else if ('csv' in b.dataset) download();
  });

  // ------------------------------------------------- herd list: summary bar
  const summaryText = () => {
    const bad = sim.animals.filter((a) => a.ai.flagged || a.outside).length, dist = sim.animals.reduce((s, a) => s + a.distToday, 0);
    return `${sim.animals.length - bad} healthy · ${bad} need${bad === 1 ? 's' : ''} attention · herd walked ${(dist / 1000).toFixed(2)} km today`;
  };
  const summary = () => `<div class="herdsum"><span id="hsText">${summaryText()}</span><button class="mini" data-csv title="Vitals, GPS position and health record of every animal">Download report</button></div>`;
  function refreshSummary() { set('hsText', summaryText()); }
  function download() {
    const blob = new Blob(['﻿' + sim.report()], { type: 'text/csv;charset=utf-8' });
    const link = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: `dairy-sense-herd-report-day-${sim.day}.csv` });
    document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(link.href), 2000);
    toast('Herd report saved as a CSV file: vitals, GPS position and the health record of every animal.');
  }

  // ------------------------------------------------------- GPS view toggle
  const btn = $('btnGps');
  btn.onclick = () => { ui.gpsUser = !ui.gpsUser; btn.classList.toggle('on', ui.gpsUser); apply(); };
  addEventListener('keydown', (e) => { if (e.target.tagName !== 'INPUT' && (e.key === 'g' || e.key === 'G')) btn.click(); });

  function update(dt) {
    if (ui.tab === 'map') { t.mapT -= dt; if (t.mapT <= 0) { t.mapT = 0.12; drawMap(); } }
    t.slow -= dt;
    if (t.slow > 0) return;
    t.slow = 0.3;
    if (ui.tab === 'map') refreshMapPanel();
    else if (ui.tab === 'herd') { if (ui.animal) refreshAnimal(); else refreshSummary(); }
  }
  return { update, cards, summary, refreshAnimal, drawMap, refreshMapPanel, download };
}
