// Everything drawn in HTML over the 3D scene: top bar, guided tour card,
// the farmer's phone app, KPI strip, floating labels and toasts.
import * as THREE from 'three';
import { STEPS } from './tour.js';
import { thiBand } from './sim.js';
import { FLOW_COLORS } from './flows.js';
import { createTrackUI } from './trackui.js';
import { createLookUI } from './lookui.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const hhmm = (h) => `${String(Math.floor(h) % 24).padStart(2, '0')}:${String(Math.floor((h % 1) * 60)).padStart(2, '0')}`;
const ICON = { good: '✔', warn: '▲', serious: '▲', crit: '✖', info: 'ℹ' };
const AI_STATUS = { healthy: 'good', heat: 'serious', fever: 'crit', estrus: 'warn', lame: 'warn' };
const AUTO_DEMO = { shed: ['wash'], water: ['wash'], monitor: ['heat', 'day'], belt: ['fever', 'treat'], gps: ['stray', 'recall'] };

const VITALS = [
  { key: 'temp', label: 'Body temperature', unit: '°C', digits: 1, min: 37.6, max: 41 },
  { key: 'hr', label: 'Heart rate', unit: 'bpm', digits: 0, min: 40, max: 110 },
  { key: 'act', label: 'Activity', unit: 'index', digits: 0, min: 0, max: 150 },
  { key: 'rum', label: 'Rumination', unit: 'min/h', digits: 0, min: 0, max: 45 },
];

export function createUI({ sim, world, director, live, look }) {
  const lookUI = createLookUI({ sim, look });   // portraits, lens switch and coat picker
  const ui = { step: 0, tourOn: false, auto: false, autoT: 0, autoDone: false, tab: 'farm', animal: null, labels: true, flowsUser: false, focus: sim.animals[1].id, seenAlert: 0, alertSig: '', slow: 0, sync: 0 };
  const dayOf = (t) => Math.floor(t / 24) + 1 - sim.dayOffset;
  const stamp = (t) => `Day ${dayOf(t)}, ${hhmm(t % 24)}`;

  // ------------------------------------------------------------- toasts
  let toastT = 0, toastGo = null;
  function toast(html, level = 'info', go = null) {
    const el = $('toast');
    el.className = `toast ${level}`; el.innerHTML = `<span class="ic">${ICON[level]}</span><span>${html}</span>`;
    el.hidden = false; toastT = 6; toastGo = go;
  }
  $('toast').onclick = () => { if (toastGo) toastGo(); $('toast').hidden = true; };

  // ------------------------------------------------------------ top bar
  const setOn = (sel, pred) => document.querySelectorAll(sel).forEach((b) => b.classList.toggle('on', pred(b)));
  function setSpeed(v) {
    if (v === 0) sim.paused = true; else { sim.paused = false; sim.speed = v; }
    setOn('[data-speed]', (b) => (sim.paused ? b.dataset.speed === '0' : +b.dataset.speed === sim.speed));
  }
  function setWeather(w) { sim.weather = w; setOn('[data-weather]', (b) => b.dataset.weather === w); }
  function setHeat(on) { sim.heatwave = on; $('btnHeat').classList.toggle('on', on); }
  document.querySelectorAll('[data-speed]').forEach((b) => (b.onclick = () => setSpeed(+b.dataset.speed)));
  document.querySelectorAll('[data-weather]').forEach((b) => (b.onclick = () => setWeather(b.dataset.weather)));
  $('btnHeat').onclick = () => setHeat(!sim.heatwave);
  $('btnNight').onclick = () => sim.warpTo(sim.isNight ? 9 : 20.7);
  $('btnFlows').onclick = () => { ui.flowsUser = !ui.flowsUser; $('btnFlows').classList.toggle('on', ui.flowsUser); applyFlows(); };
  $('btnLabels').onclick = () => { ui.labels = !ui.labels; $('btnLabels').classList.toggle('on', ui.labels); $('labels').hidden = !ui.labels; };
  $('btnTour').onclick = () => setTour(!ui.tourOn);
  $('btnFull').onclick = () => (document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.());

  function applyFlows() {
    const st = ui.tourOn ? STEPS[ui.step] : null;
    world.state.flowView = ui.flowsUser || !!(st && st.flowAll);
    world.state.flowOnly = (st && st.flow) || null;
    world.state.gpsView = !!ui.gpsUser || ui.tab === 'map' || !!(st && st.gps);
  }

  // ---------------------------------------------------------- actions
  const focusAnimal = () => sim.animals.find((a) => a.id === ui.focus);
  function runAction(id) {
    const a = focusAnimal();
    switch (id) {
      case 'milk': sim.warpTo(5.8); toast('It is 05:50. The herd is walking in for the morning milking.'); break;
      case 'wash': sim.startWash(); toast('Shed wash started. Used water drains to the collection tank to be filtered and reused.'); break;
      case 'night': sim.warpTo(20.7); toast('Night. Lights switch on automatically and run from the battery.'); break;
      case 'cloudy': setWeather('cloudy'); toast('Clouds cut solar output to about a third.'); break;
      case 'rain': setWeather('rain'); toast('Rain. The shed roof gutter harvests it into the collection tank.'); break;
      case 'day': setWeather('sunny'); setHeat(false); if (sim.isNight) sim.warpTo(9.5); break;
      case 'heat': setHeat(true); if (sim.hour < 10.5 || sim.hour > 15.5) sim.warpTo(12); toast('Heat wave. Watch the THI climb, then the fans and foggers start.', 'warn'); break;
      case 'pump': sim.water.pumpMode = 'manual'; sim.water.pumpManual = !sim.water.pump; showTab('farm'); toast(`Pump switched ${sim.water.pumpManual ? 'ON' : 'OFF'} by hand through the L293D driver.`); break;
      case 'fever': sim.inject(a.id, 'fever'); openAnimal(a.id, false); toast(`${esc(a.name)} is developing a fever. Nobody has been told. Watch her belt data: the AI should flag it within about two farm hours.`, 'warn'); break;
      case 'estrus': sim.inject(a.id, 'estrus'); openAnimal(a.id, false); toast(`${esc(a.name)} is coming into heat. The AI looks for restless activity with less rumination.`); break;
      case 'treat': sim.treat(a.id); break;
      case 'lens': look.setLens(look.lens === 'thermal' ? 'coats' : 'thermal'); toast(look.lens === 'thermal' ? 'Thermal view. Each animal is coloured by the body temperature her belt reports: a fever shows up yellow-white.' : 'Back to coat colours.'); break;
      case 'lame': sim.inject(a.id, 'lame'); openAnimal(a.id, false); toast(`${esc(a.name)} has a sore foot. Her temperature stays normal, so the AI has to spot it from her GPS walking speed.`, 'warn'); break;
      case 'stray': sim.stray(a.id); showTab('map'); toast(`The side gate is open and ${esc(a.name)} is wandering out. Watch the map: the geofence will catch it.`, 'warn'); break;
      case 'recall': {
        const out = sim.animals.filter((x) => x.free);
        out.forEach((x) => sim.recall(x.id));
        toast(out.length ? `Audio cue sent to ${out.map((x) => esc(x.name)).join(', ')}. She turns round and walks back through the gate.` : 'Every animal is already inside the geofence.');
        break;
      }
      case 'cell': {
        const to = sim.pasture.mode === 'west' ? 'east' : 'west';
        sim.setPasture(to); showTab('map');
        toast(`Virtual fence moved. The belts cue the herd into the ${to} cell and the other one rests.`);
        break;
      }
      case 'fast': sim.warpBy(24); toast('Fast-forwarding one farm day.'); break;
    }
  }

  // ------------------------------------------------------- guided tour
  const dots = $('stDots');
  STEPS.forEach((s, i) => { const d = document.createElement('button'); d.title = s.title; d.onclick = () => goStep(i); dots.appendChild(d); });
  function renderStory() {
    const s = STEPS[ui.step];
    $('stBadge').textContent = s.badge; $('stTitle').textContent = s.title; $('stKicker').textContent = s.kicker;
    let h = `<p class="lead">${esc(s.lead)}</p>`;
    if (s.steps) h += `<ol class="chain">${s.steps.map((x) => `<li>${esc(x)}</li>`).join('')}</ol>`;
    if (s.points) h += `<ul class="ticks">${s.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
    if (s.legend) h += `<ul class="legend">${s.legend.map(([k, t]) => `<li><i style="background:${FLOW_COLORS[k]}"></i>${esc(t)}</li>`).join('')}</ul>`;
    if (s.summary) h += '<div id="stSummary" class="summary"></div>';
    h += `<p class="purpose">${esc(s.purpose)}</p>`;
    $('stBody').innerHTML = h;
    const card = $('story'); card.classList.remove('swap'); void card.offsetWidth; card.classList.add('swap');
    $('stActions').innerHTML = (s.actions || []).map((a) => `<button data-act="${a.id}">${esc(a.label)}</button>`).join('');
    $('stActions').hidden = !s.actions;
    [...dots.children].forEach((d, i) => d.classList.toggle('on', i === ui.step));
    $('stPrev').disabled = ui.step === 0;
    $('stNext').textContent = ui.step === STEPS.length - 1 ? 'Restart' : 'Next →';
    renderSummary();
  }
  function renderSummary() {
    const el = $('stSummary');
    if (!el) return;
    const w = sim.water.tot, e = sim.energy.tot, b = sim.biogas.tot;
    el.innerHTML = [
      [`${w.recycled.toFixed(0)} L`, 'water recycled'], [`${(e.solar / 1000).toFixed(1)} kWh`, 'solar energy made'],
      [`${b.gas.toFixed(1)} m³`, 'biogas from dung'], [`${sim.milk.total.toFixed(0)} L`, 'milk collected'],
    ].map(([v, l]) => `<div><b>${v}</b><span>${l}</span></div>`).join('') + `<p>in the ${(Math.max(0.1, (sim.t - 32) / 24)).toFixed(1)} farm days you have been watching.</p>`;
  }
  $('stActions').onclick = (ev) => { const id = ev.target.dataset.act; if (id) runAction(id); };
  function goStep(i) {
    const prev = STEPS[ui.step];
    if (ui.auto && AUTO_DEMO[prev.id]?.[1] && ui.autoDone) runAction(AUTO_DEMO[prev.id][1]);
    ui.step = (i + STEPS.length) % STEPS.length; ui.autoT = 0; ui.autoDone = false;
    const s = STEPS[ui.step];
    if (!ui.tourOn) { ui.tourOn = true; $('story').hidden = false; $('btnTour').classList.add('on'); director.relayout(); }
    renderStory(); applyFlows();
    if (s.gps) showTab('map');
    if (s.follow) {
      const a = sim.animals.find((x) => x.id === ui.focus);
      world.state.selected = a.id;
      director.fly({ pos: [a.x + s.cam.pos[0], s.cam.pos[1], a.z + s.cam.pos[2]], target: [a.x, 1.3, a.z] }, a.id);
    } else director.fly(s.cam);
  }
  function setTour(on) {
    ui.tourOn = on; $('story').hidden = !on; $('btnTour').classList.toggle('on', on); director.relayout();
    if (on) goStep(ui.step); else { applyFlows(); director.release(); }
  }
  $('stPrev').onclick = () => goStep(ui.step - 1);
  $('stNext').onclick = () => goStep(ui.step + 1);
  $('stClose').onclick = () => setTour(false);
  $('stAuto').onchange = (e) => { ui.auto = e.target.checked; ui.autoT = 0; };
  $('startTour').onclick = () => { $('splash').classList.add('gone'); document.body.classList.remove('intro'); ui.step = 0; setTour(true); };
  $('startFree').onclick = () => { $('splash').classList.add('gone'); document.body.classList.remove('intro'); setTour(false); director.fly({ pos: [0, 24, 36], target: [0, 0.5, 0], fit: 0.92 }); };
  addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowRight' && ui.tourOn) goStep(ui.step + 1);
    else if (e.key === 'ArrowLeft' && ui.tourOn) goStep(ui.step - 1);
    else if (e.key === ' ') { e.preventDefault(); setSpeed(sim.paused ? sim.speed : 0); }
    else if (e.key === 'f' || e.key === 'F') $('btnFlows').click();
    else if (e.key === 'l' || e.key === 'L') $('btnLabels').click();
    else if (e.key === 'c' || e.key === 'C') look.nextLens();
  });

  // ----------------------------------------------------- phone: farm tab
  const bar = (id, cls = '') => `<div class="bar ${cls}"><i id="${id}"></i></div>`;
  const seg = (ctl, opts) => `<div class="seg" data-ctl="${ctl}">${opts.map(([v, l]) => `<button data-v="${v}">${l}</button>`).join('')}</div>`;
  $('tab-farm').innerHTML = `
    <div class="card"><h4>Shed climate <span class="src" id="climSrc">DHT11 sensor</span></h4>
      <div class="pair"><div><b id="vTemp">--</b><small>°C</small></div><div><b id="vHum">--</b><small>% humidity</small></div></div>
      <div class="thi" title="Temperature-Humidity Index: under 72 comfortable, 72-78 mild, 79-88 heat stress, 89+ danger"><i id="thiMark"></i></div>
      <div class="line"><span id="thiLabel" class="status good"></span><span id="coolChip" class="chip"></span></div></div>
    <div class="card"><h4>Energy</h4>
      <div class="kv"><span>Solar panel</span><b id="vSolar"></b></div><div class="kv"><span>Farm load</span><b id="vLoad"></b></div>
      ${bar('batFill', 'bat')}<div class="line"><span id="batText"></span><span id="srcChip" class="chip"></span></div>
      <div class="ctl"><span>Lights</span>${seg('lights', [['auto', 'Auto'], ['on', 'On'], ['off', 'Off']])}</div></div>
    <div class="card"><h4>Water</h4>
      <div class="tank"><span>Collection</span>${bar('wColl', 'grey')}<b id="vColl"></b></div>
      <div class="tank"><span>Storage</span>${bar('wStor', 'blue')}<b id="vStor"></b></div>
      <div class="tank"><span>Trough</span>${bar('wTrough', 'blue')}<b id="vTrough"></b></div>
      <div class="ctl"><span>Pump (L293D)</span>${seg('pumpMode', [['auto', 'Auto'], ['manual', 'Manual']])}<button id="pumpBtn" class="toggle">OFF</button></div>
      <div class="line"><span id="waterNote" class="muted"></span><button id="washBtn" class="mini">Wash shed</button></div></div>
    <div class="card"><h4>Biogas and soil</h4>
      <div class="tank"><span>Gas holder</span>${bar('gasFill', 'gas')}<b id="vGas"></b></div>
      <div class="tank"><span>Fodder crop</span>${bar('fodFill', 'green')}<b id="vFod"></b></div>
      <div class="kv"><span>Dung waiting / compost</span><b id="vDung"></b></div>
      <div class="line"><span id="stoveChip" class="chip"></span><span id="genChip" class="chip"></span><span id="roverChip" class="chip"></span></div></div>
    <div class="card"><h4>Gate counter <span class="src">IR sensor</span></h4>
      <div class="pair"><div><b id="vIn">0</b><small>in shed</small></div><div><b id="vOut">0</b><small>in paddock</small></div></div>
      <p id="gateLast" class="muted"></p></div>`;
  $('tab-farm').onclick = (ev) => {
    const b = ev.target.closest('button'); if (!b) return;
    const ctl = b.parentElement.dataset.ctl;
    if (ctl === 'lights') sim.energy.lightMode = b.dataset.v;
    else if (ctl === 'pumpMode') { sim.water.pumpMode = b.dataset.v; sim.water.pumpManual = sim.water.pump; }
    else if (b.id === 'pumpBtn') { sim.water.pumpMode = 'manual'; sim.water.pumpManual = !sim.water.pump; }
    else if (b.id === 'washBtn') runAction('wash');
    refreshFarm();
  };
  const set = (id, v) => { const el = $(id); if (el.textContent !== v) el.textContent = v; };
  const pct = (id, f) => { $(id).style.width = `${Math.max(0, Math.min(100, f * 100)).toFixed(1)}%`; };
  const chip = (id, on, text) => { const el = $(id); el.textContent = text; el.classList.toggle('on', on); };
  function refreshFarm() {
    const c = sim.climate, e = sim.energy, w = sim.water, b = sim.biogas, band = thiBand(c.thi);
    set('vTemp', c.shedT.toFixed(1)); set('vHum', c.shedRH.toFixed(0));
    $('thiMark').style.left = `${Math.max(0, Math.min(100, ((c.thi - 60) / 36) * 100))}%`;
    $('thiLabel').className = `status ${band.key}`; set('thiLabel', `${ICON[band.key]} ${band.label} · THI ${c.thi.toFixed(0)}`);
    chip('coolChip', c.cooling, c.cooling ? 'Fans + foggers ON' : 'Cooling off');
    set('climSrc', sim.live.on ? 'LIVE DHT11' : 'DHT11 sensor');
    set('vSolar', `${e.solarW.toFixed(0)} W`); set('vLoad', `${e.loadW.toFixed(0)} W`);
    const soc = e.batWh / e.batCap, net = e.solarW + e.genW - e.loadW;
    pct('batFill', soc); $('batFill').classList.toggle('low', soc < 0.2);
    set('batText', `Battery ${(soc * 100).toFixed(0)} % · ${soc > 0.995 ? 'full' : net > 5 ? 'charging' : 'discharging'}`);
    chip('srcChip', true, e.gridW > 0 ? 'On grid' : b.gen ? 'Biogas generator' : e.solarW > e.loadW ? 'On solar' : 'On battery');
    pct('wColl', w.collection / w.collectionCap); set('vColl', `${w.collection.toFixed(0)} L`);
    pct('wStor', w.storage / w.storageCap); set('vStor', `${w.storage.toFixed(0)} L`);
    pct('wTrough', w.trough / w.troughCap); set('vTrough', `${w.trough.toFixed(0)} L`);
    const pb = $('pumpBtn'); pb.textContent = w.pump ? 'ON' : 'OFF'; pb.classList.toggle('on', w.pump);
    set('waterNote', w.washing > 0 ? 'Washing the shed' : w.irrigating ? 'Irrigating the fodder plot' : w.topup ? 'Fresh top-up running' : w.raining ? 'Harvesting rain' : w.pump ? 'Filtering and pumping' : 'Idle');
    pct('gasFill', b.gas / b.gasCap); set('vGas', `${b.gas.toFixed(1)} m³`);
    pct('fodFill', sim.plot.biomass); set('vFod', `${(sim.plot.biomass * 100).toFixed(0)} %`);
    set('vDung', `${sim.pats.length} pats / ${b.compost.toFixed(0)} kg`);
    chip('stoveChip', b.stove, b.stove ? 'Stove burning' : 'Stove off'); chip('genChip', b.gen, b.gen ? 'Generator ON' : 'Generator off');
    chip('roverChip', sim.rover.state !== 'dock', sim.rover.state === 'dock' ? 'Rover docked' : 'Rover collecting');
    set('vIn', String(sim.gate.inShed)); set('vOut', String(sim.animals.length - sim.gate.inShed));
    const g = sim.gate.last; set('gateLast', g ? `Last: ${g.name} went ${g.dir} at ${hhmm(g.t % 24)} · ${sim.gate.crossings} crossings` : 'No crossings yet');
    document.querySelectorAll('#tab-farm .seg').forEach((s) => {
      const v = s.dataset.ctl === 'lights' ? e.lightMode : w.pumpMode;
      [...s.children].forEach((x) => x.classList.toggle('on', x.dataset.v === v));
    });
  }

  // ----------------------------------------------------- phone: herd tab
  function showTab(t) {
    ui.tab = t;
    document.querySelectorAll('.tabs button').forEach((b) => b.classList.toggle('on', b.dataset.tab === t));
    for (const k of ['farm', 'herd', 'map', 'alerts']) $(`tab-${k}`).hidden = k !== t;
    if (t === 'herd') renderHerd(); if (t === 'alerts') renderAlerts(true);
    if (t === 'map') { track.refreshMapPanel(); requestAnimationFrame(track.drawMap); }
    applyFlows();
  }
  document.querySelectorAll('.tabs button').forEach((b) => (b.onclick = () => showTab(b.dataset.tab)));
  const aiStatus = (a) => { const k = a.ai.flagged ? a.ai.key : 'healthy', st = AI_STATUS[k]; return `<span class="status ${st}">${ICON[st]} ${esc(a.ai.label)}</span>`; };

  function renderHerd() {
    const el = $('tab-herd');
    if (ui.animal) return renderAnimal();
    el.innerHTML = track.summary() + `${lookUI.lensBar()}<p class="muted pad">Live from each animal's health belt. Tap one to open her record.</p>` + sim.animals.map((a) => `
      <button class="cow" data-id="${a.id}">${lookUI.portrait(a)}
        <span class="who"><b>${esc(a.name)}</b><small>${a.id} · ${esc(a.breed)} ${a.kind}</small></span>
        <span class="vit"><span id="cs_${a.id}"></span><small id="cv_${a.id}"></small></span></button>`).join('');
    refreshHerd();
  }
  // Updates the list in place: rebuilding the buttons under the pointer would swallow clicks.
  function refreshHerd() {
    for (const a of sim.animals) {
      const st = $(`cs_${a.id}`);
      if (!st) return;
      const html = aiStatus(a);
      if (st.innerHTML !== html) st.innerHTML = html;
      set(`cv_${a.id}`, `${a.temp.toFixed(1)} °C · ${a.hr.toFixed(0)} bpm · ${sim.zoneOf(a)}`);
    }
  }
  function renderAnimal() {
    const a = sim.animals.find((x) => x.id === ui.animal), el = $('tab-herd');
    el.innerHTML = `<button class="back" data-back>← All animals</button>
      <div class="card"><div class="cowhead">${lookUI.portrait(a, 'head', 'big')}<div><h4>${esc(a.name)}</h4><small>${a.id} · ${esc(a.breed)} ${a.kind}</small></div><span class="score"><b id="aScore"></b><small>health</small></span></div>
        <div id="aAi" class="ai"></div>
        <div class="line"><button class="mini" data-locate>Find on farm</button><button class="mini" data-treat id="aTreat" hidden></button></div></div>
      <div class="vitals">${VITALS.map((v) => `<div class="vital" data-k="${v.key}"><span>${v.label}</span><b id="v_${v.key}"></b><canvas width="240" height="64"></canvas><small id="h_${v.key}">last 24 h</small></div>`).join('')}</div>
      ${track.cards(a)}
      <div class="card demo"><h4>Demonstration</h4><p class="muted">Make something go wrong and see whether the belt AI catches it.</p>
        <div class="line"><button class="mini" data-inj="fever">Give her a fever</button><button class="mini" data-inj="estrus">Simulate heat</button><button class="mini" data-inj="lame">Make her lame</button><button class="mini" data-inj="stray">Let her stray</button></div></div>
      ${lookUI.coatCard(a)}`;
    el.querySelectorAll('.vital').forEach((box) => {
      const v = VITALS.find((x) => x.key === box.dataset.k), cv = box.querySelector('canvas'), hint = box.querySelector('small');
      cv.onmousemove = (ev) => {
        const r = cv.getBoundingClientRect(), i = Math.round(((ev.clientX - r.left) / r.width) * (a.hist.length - 1)), p = a.hist[i];
        if (p) { hint.textContent = `${hhmm(p.t % 24)} · ${p[v.key].toFixed(v.digits)} ${v.unit}`; cv.dataset.hover = i; }
      };
      cv.onmouseleave = () => { hint.textContent = 'last 24 h'; delete cv.dataset.hover; };
    });
    refreshAnimal(); track.refreshAnimal();
  }
  function spark(cv, data, v, base) {
    const dpr = Math.min(2, devicePixelRatio || 1), W = cv.clientWidth || 120, H = cv.clientHeight || 32;
    if (cv.width !== W * dpr) { cv.width = W * dpr; cv.height = H * dpr; }
    const g = cv.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, W, H);
    if (data.length < 2) return;
    const lo = Math.min(v.min, ...data), hi = Math.max(v.max, ...data);
    const X = (i) => 3 + (i / (data.length - 1)) * (W - 8), Y = (d) => H - 4 - ((d - lo) / (hi - lo)) * (H - 8);
    if (base != null) { g.strokeStyle = '#b9c4b9'; g.lineWidth = 1; g.setLineDash([3, 3]); g.beginPath(); g.moveTo(0, Y(base)); g.lineTo(W, Y(base)); g.stroke(); g.setLineDash([]); }
    g.strokeStyle = '#2e7d3c'; g.lineWidth = 2; g.lineJoin = 'round'; g.beginPath();
    data.forEach((d, i) => (i ? g.lineTo(X(i), Y(d)) : g.moveTo(X(i), Y(d)))); g.stroke();
    const hi2 = cv.dataset.hover != null ? +cv.dataset.hover : data.length - 1;
    if (cv.dataset.hover != null) { g.strokeStyle = '#8a988a'; g.lineWidth = 1; g.beginPath(); g.moveTo(X(hi2), 0); g.lineTo(X(hi2), H); g.stroke(); }
    g.fillStyle = '#2e7d3c'; g.strokeStyle = '#ffffff'; g.lineWidth = 2; g.beginPath(); g.arc(X(hi2), Y(data[hi2]), 4, 0, 7); g.fill(); g.stroke();
  }
  function refreshAnimal() {
    const a = sim.animals.find((x) => x.id === ui.animal);
    if (!a || !$('aScore')) return;
    set('aScore', String(a.ai.health));
    const k = a.ai.flagged ? a.ai.key : 'healthy';
    $('aAi').innerHTML = `<div class="line">${aiStatus(a)}${a.ai.flagged ? `<span class="chip on">AI confidence ${(50 + a.ai.score * 49).toFixed(0)} %</span>` : ''}</div><p>${esc(a.ai.advice)}</p>`;
    const tb = $('aTreat'); tb.hidden = !(a.ai.flagged && (a.cond === 'fever' || a.cond === 'estrus' || a.cond === 'lame')); tb.textContent = k === 'estrus' ? 'Record breeding' : k === 'lame' ? 'Call the hoof trimmer' : 'Call the vet';
    const base = { temp: a.base.temp, hr: a.baseHr + 5 };
    for (const v of VITALS) {
      set(`v_${v.key}`, `${a[v.key].toFixed(v.digits)} ${v.unit}`);
      spark(document.querySelector(`.vital[data-k="${v.key}"] canvas`), a.hist.map((p) => p[v.key]), v, base[v.key]);
    }
    set('aMilk', a.lastMilk ? `Last milking: ${a.lastMilk.toFixed(1)} L` : 'First milking of this session is at 06:00 or 17:00.');
  }
  function openAnimal(id, fly = true) {
    ui.animal = id; ui.focus = id; world.state.selected = id;
    showTab('herd');
    if (fly) { const a = sim.animals.find((x) => x.id === id); director.fly({ pos: [a.x + 5, 4.4, a.z + 8], target: [a.x, 1.3, a.z] }, id); }
  }
  $('tab-herd').onclick = (ev) => {
    const t = ev.target.closest('button'); if (!t) return;
    if (t.dataset.id) openAnimal(t.dataset.id);
    else if ('back' in t.dataset) { ui.animal = null; world.state.selected = null; director.release(); renderHerd(); }
    else if ('locate' in t.dataset) openAnimal(ui.animal);
    else if ('treat' in t.dataset) { sim.treat(ui.animal); refreshAnimal(); }
    else if (t.dataset.inj) { ui.focus = ui.animal; runAction(t.dataset.inj); }
  };

  // --------------------------------------------------- phone: alerts tab
  function renderAlerts(force) {
    const sig = sim.alerts.map((a) => a.id + (a.active ? 'a' : '')).join(',');
    const n = sim.alerts.filter((a) => a.active).length;
    $('alertBadge').hidden = n === 0; $('alertBadge').textContent = n;
    if (ui.tab !== 'alerts' || (!force && sig === ui.alertSig)) return;
    ui.alertSig = sig;
    $('tab-alerts').innerHTML = sim.alerts.length ? sim.alerts.map((a) => `
      <button class="alert ${a.level} ${a.active ? 'active' : ''}" ${a.animalId ? `data-id="${a.animalId}"` : ''}>
        <span class="ic">${ICON[a.level]}</span><span><b>${esc(a.title)}</b><small>${esc(a.body)}</small><em>${stamp(a.t)}${a.active ? ' · active' : a.level === 'info' ? '' : ' · resolved'}</em></span></button>`).join('')
      : '<p class="muted pad">No alerts yet. The farm is running normally.</p>';
  }
  $('tab-alerts').onclick = (ev) => { const t = ev.target.closest('[data-id]'); if (t) openAnimal(t.dataset.id); };

  // -------------------------------------------------------------- KPIs
  // GPS tracking and health records (map tab, tracking cards, herd report)
  const track = createTrackUI({ sim, world, ui, esc, hhmm, toast, openAnimal, showTab, apply: applyFlows, runAction });

  const KPIS = [['kWater', 'Water reused'], ['kPower', 'Renewable power'], ['kGas', 'Biogas made'], ['kMilk', 'Milk today'], ['kScore', 'Farm score']];
  $('kpis').innerHTML = KPIS.map(([id, l]) => `<div class="kpi" id="${id}"><b></b><span>${l}</span><small></small></div>`).join('');
  const kpi = (id, v, sub) => { const el = $(id); set2(el.children[0], v); set2(el.children[2], sub); };
  const set2 = (el, v) => { if (el.textContent !== v) el.textContent = v; };
  function refreshKpis() {
    const k = sim.kpi, w = sim.water.tot, b = sim.biogas.tot;
    kpi('kWater', `${k.water.toFixed(0)} %`, `${w.recycled.toFixed(0)} L saved`);
    kpi('kPower', `${k.renewable.toFixed(0)} %`, `${(sim.energy.tot.solar / 1000).toFixed(1)} kWh solar`);
    kpi('kGas', `${b.gas.toFixed(1)} m³`, `${b.lpg.toFixed(1)} kg LPG replaced`);
    kpi('kMilk', `${sim.milk.today.toFixed(1)} L`, `${sim.milk.total.toFixed(0)} L in total`);
    kpi('kScore', `${k.score}`, `hygiene ${k.hygiene.toFixed(0)} · welfare ${k.welfare.toFixed(0)}`);
  }

  // ------------------------------------------------------------ labels
  const TAGS = [
    ['shed', '2', 'Cow & Buffalo Shed', () => `${sim.gate.inShed} inside${sim.milk.milking ? ' · milking' : sim.water.washing > 0 ? ' · washing' : ''}`],
    ['solar', '3', 'Solar Energy', () => `${sim.energy.solarW.toFixed(0)} W · battery ${((100 * sim.energy.batWh) / sim.energy.batCap).toFixed(0)} %`],
    ['water', '4', 'Water Recycling', () => `${sim.water.storage.toFixed(0)} L stored${sim.water.pump ? ' · pump ON' : ''}`],
    ['monitor', '5', 'Smart Monitoring', () => `${sim.climate.shedT.toFixed(1)} °C · ${sim.climate.shedRH.toFixed(0)} % · THI ${sim.climate.thi.toFixed(0)}`],
    ['gate', '6', 'Animal Detection', () => `IR gate · ${sim.gate.crossings} crossings`],
    ['biogas', '9', 'Biogas Plant', () => `${sim.biogas.gas.toFixed(1)} m³ gas${sim.biogas.gen ? ' · generator ON' : sim.biogas.stove ? ' · stove ON' : ''}`],
    ['waste', '9', 'Waste Collection', () => `${sim.biogas.inlet.toFixed(0)} kg in the inlet`],
    ['plot', '9', 'Compost & Fodder', () => `fodder ${(sim.plot.biomass * 100).toFixed(0)} % grown`],
  ];
  const STEP_OF = { shed: 'shed', solar: 'solar', water: 'water', monitor: 'monitor', gate: 'gate', biogas: 'biogas', waste: 'biogas', plot: 'biogas' };
  const tags = TAGS.map(([key, n, text, info]) => {
    const el = document.createElement('button');
    el.className = `tag t-${key}`; el.innerHTML = `<b>${n}</b><span>${text}<small></small></span>`;
    el.onclick = () => goStep(STEPS.findIndex((s) => s.id === STEP_OF[key]));
    $('labels').appendChild(el);
    return { el, key, info, sub: el.querySelector('small'), pos: world.anchors[key] };
  });
  const cowTags = sim.animals.map((a) => {
    const el = document.createElement('button');
    el.className = 'tag cowtag off'; el.onclick = () => openAnimal(a.id);
    $('labels').appendChild(el);
    return { el, a };
  });
  const v = new THREE.Vector3();
  // Only the compositor-friendly transform is written every frame; classes
  // change only when a label actually appears or disappears.
  function place(t, pos, camera, show) {
    v.copy(pos).project(camera);
    const ok = !!show && v.z < 1 && Math.abs(v.x) < 1.05 && Math.abs(v.y) < 1.05;
    if (ok !== t.shown) { t.shown = ok; t.el.classList.toggle('off', !ok); }
    if (ok) t.el.style.transform = `translate3d(${((v.x * 0.5 + 0.5) * innerWidth).toFixed(1)}px,${((-v.y * 0.5 + 0.5) * innerHeight).toFixed(1)}px,0) translate(-50%,-100%)`;
  }

  // ---------------------------------------------------------- live link
  $('btnLive').onclick = () => ($('live').hidden = false);
  $('liveClose').onclick = () => ($('live').hidden = true);
  $('liveConnect').onclick = () => live.connect($('liveAddr').value.trim());
  $('liveDisconnect').onclick = () => live.disconnect();
  live.onStatus = (text, ok) => { $('liveStatus').textContent = text; $('liveStatus').className = ok ? 'status good' : 'muted'; $('btnLive').classList.toggle('on', sim.live.on); };

  // ------------------------------------------------------------- update
  const p3 = new THREE.Vector3();
  function update(dt, camera) {
    for (const t of tags) place(t, t.pos, camera, true);
    const st = ui.tourOn ? STEPS[ui.step] : null;
    for (const t of tags) { const hot = !!st && STEP_OF[t.key] === st.id; if (hot !== t.hot) { t.hot = hot; t.el.classList.toggle('hot', hot); } }
    for (const c of cowTags) {
      const show = c.a.ai.flagged || world.state.selected === c.a.id || (st && st.id === 'belt' && c.a.id === ui.focus) || c.a.outside;
      place(c, p3.set(c.a.x, 2.9, c.a.z), camera, show);
    }
    track.update(dt);
    if (toastT > 0) { toastT -= dt; if (toastT <= 0) $('toast').hidden = true; }
    if (ui.auto && ui.tourOn && !sim.paused) {
      ui.autoT += dt;
      const demo = AUTO_DEMO[STEPS[ui.step].id];
      if (demo && !ui.autoDone && ui.autoT > 4) { ui.autoDone = true; runAction(demo[0]); }
      if (ui.autoT > (STEPS[ui.step].id === 'belt' ? 26 : 16)) goStep(ui.step + 1);
    }
    ui.slow -= dt;
    if (ui.slow > 0) return;
    ui.slow = 0.25;
    set('clockTime', hhmm(sim.hour)); set('clockDay', `Day ${sim.day}`);
    $('dayFill').style.width = `${(sim.hour / 24) * 100}%`;
    $('clockIcon').className = `clock-icon ${sim.isNight ? 'moon' : sim.weather}`;
    set('btnNight', sim.isNight ? 'Skip to morning' : 'Skip to night');
    if (ui.tab === 'farm') refreshFarm();
    if (ui.tab === 'herd') (ui.animal ? refreshAnimal() : refreshHerd());
    lookUI.sync();
    renderAlerts(false); refreshKpis(); renderSummary();
    for (const t of tags) set2(t.sub, t.info());
    for (const c of cowTags) {
      const k = c.a.ai.flagged ? c.a.ai.key : 'healthy';
      const tagSt = c.a.outside ? 'crit' : AI_STATUS[k];
      if (c.el.dataset.st !== tagSt) c.el.dataset.st = tagSt;
      const text = c.a.outside ? `${c.a.name} · ${ICON.crit} Outside the geofence` : `${c.a.name} · ${c.a.temp.toFixed(1)} °C${c.a.ai.flagged ? ` · ${ICON[AI_STATUS[k]]} ${c.a.ai.label}` : ''}`;
      if (c.el.textContent !== text) c.el.textContent = text;
    }
    // announce new alerts
    const fresh = sim.alerts.find((a) => a.id > ui.seenAlert && a.level !== 'info');
    if (sim.alerts[0]) ui.seenAlert = Math.max(ui.seenAlert, sim.alerts[0].id);
    if (fresh) toast(`<b>${esc(fresh.title)}</b> ${esc(fresh.body)}`, fresh.level, () => (fresh.kind === 'geo' ? showTab('map') : fresh.animalId ? openAnimal(fresh.animalId) : showTab('alerts')));
    ui.sync += 0.25;
    if (ui.sync >= 1.5) { ui.sync = 0; $('syncDot').classList.remove('pulse'); void $('syncDot').offsetWidth; $('syncDot').classList.add('pulse'); set('syncText', sim.live.on ? 'LIVE device' : 'ESP8266 linked'); }
  }

  $('story').hidden = true;
  // Deep links from the Cow Flow page and the documentation: index.html#step=water
  // opens the twin straight at that tour stop, and #explore skips the splash.
  const deepLink = () => {
    const h = location.hash.slice(1), m = /^step=([\w-]+)$/.exec(h), i = m ? STEPS.findIndex((s) => s.id === m[1]) : -1;
    if (i < 0 && h !== 'explore') return;
    $('splash').classList.add('gone'); document.body.classList.remove('intro');
    if (i >= 0) { ui.step = i; setTour(true); } else $('startFree').click();
  };
  addEventListener('hashchange', deepLink); setTimeout(deepLink, 0);
  refreshFarm(); refreshKpis();
  return { update, openAnimal, goStep, setTour, toast, state: ui };
}
