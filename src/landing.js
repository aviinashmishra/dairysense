// The landing. The twin opens before dawn with the farm asleep. "Wake the farm"
// plays a short start-up over the live 3D model: the camera visits each system,
// each one reports in with its real reading from the simulation, and the sun
// comes up on the way. Then the page offers four ways in, and the herd itself.
// Nothing here is canned: every number is read from the running sim.
import { STEPS } from './tour.js';
import { thiBand, HOURS_PER_SEC } from './sim.js';
import { qrSvg } from './qr.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const hhmm = (h) => `${String(Math.floor(h) % 24).padStart(2, '0')}:${String(Math.floor((h % 1) * 60)).padStart(2, '0')}`;
const camOf = (id) => STEPS.find((s) => s.id === id).cam;

const DAWN = 5.15;            // the farm is shown asleep at this hour...
const HOLD_BY = 5.7;          // ...drifts no later than this while nobody presses anything...
const MORNING = 6.7;          // ...and wakes up to this one
const FLY = 1.35, DWELL = 0.6, FINAL = 1.9;   // seconds per camera stop, pause on it, and the pull-back
const SEEN = 'ds-farm-awake'; // once woken in this tab, coming back skips the night
const ASLEEP_CAM = { pos: [-23, 10.5, 29], target: [1.5, 0.6, -1.5], orbit: true };
const HERO = { ...camOf('intro'), fit: 1.08 };   // the tour's opening view, backed off to clear the panel

const phase = (h, night) => (night ? (h > 3 && h < 7 ? 'before sunrise' : 'night') : h < 7 ? 'sunrise' : h < 11.5 ? 'morning' : h < 15.5 ? 'afternoon' : h < 18.5 ? 'evening' : 'night');

export function createLanding({ sim, world, ui, director, look }) {
  const root = $('splash');
  if (!root || !root.classList.contains('ld')) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const deep = /^(explore$|step=)/.test(location.hash.slice(1));
  // Coming back from Cow Flow or the docs skips the night. A reload always starts fresh at dawn,
  // which is what the demo script relies on ("if something goes wrong, reload").
  let seen = false;
  try { seen = sessionStorage.getItem(SEEN) === '1'; } catch { /* storage blocked: treat as a first visit */ }
  if (performance.getEntriesByType?.('navigation')[0]?.type === 'reload') seen = false;

  // The systems, in the order the camera visits them, each with its live reading.
  const STOPS = [
    { cam: camOf('monitor'), flow: 'data', name: 'ESP8266 and DHT11', read: () => {
      const c = sim.climate;
      return `${sim.live.on ? 'live DHT11 · ' : ''}${c.shedT.toFixed(1)} °C, ${c.shedRH.toFixed(0)} % RH · ${thiBand(c.thi).label.toLowerCase()}`;
    } },
    { cam: camOf('solar'), flow: 'energy', name: 'Solar and battery', read: () => {
      const e = sim.energy, soc = (100 * e.batWh) / e.batCap;
      return `${e.solarW < 5 ? 'panel waiting for the sun' : `panel making ${e.solarW.toFixed(0)} W`} · battery ${soc.toFixed(0)} %`;
    } },
    { cam: camOf('water'), flow: 'water', name: 'Water recycling', read: () => {
      const w = sim.water;
      return `${w.storage.toFixed(0)} L clean in storage · ${w.collection.toFixed(0)} L to filter${w.pump ? ' · pump on' : ''}`;
    } },
    { cam: camOf('biogas'), flow: 'waste', name: 'Biogas digester', read: () => {
      const b = sim.biogas;
      return `${b.gas.toFixed(1)} m³ of gas stored · ${b.compost.toFixed(0)} kg of compost`;
    } },
    { cam: camOf('shed'), flow: null, name: 'Health belts', read: () => {
      const ok = sim.animals.filter((a) => !a.ai.flagged).length;
      return `${ok}/${sim.animals.length} healthy · ${sim.gate.inShed} in the shed${sim.milk.milking ? ' · milking' : ''}`;
    } },
  ];

  // ---------------------------------------------------------------- markup
  const log = $('ldLog');
  log.innerHTML = STOPS.map((s, i) => `<li data-st="wait" data-i="${i}"><i aria-hidden="true"></i><b>${esc(s.name)}</b><span>waiting</span></li>`).join('');
  const rows = [...log.children];
  $('ldTourMeta').textContent = `${STEPS.length} stops, each with a story and something to try`;
  $('ldHerd').innerHTML = sim.animals.map((a) => `
    <button type="button" data-cow="${a.id}" title="Open ${esc(a.name)}'s health belt">
      <img src="${look.portrait(a, 'head', 96)}" alt="" draggable="false"><b>${esc(a.name)}</b><small data-cowv="${a.id}"></small>
    </button>`).join('');
  const mark = $('ldMark');
  if (mark) mark.innerHTML = `<img src="${look.portrait(sim.animals[0], 'head', 96)}" alt="">`;

  // ----------------------------------------------------------------- state
  let state = 'asleep', done = false, seq = null;
  const TEXT = {
    asleep: ['The farm is asleep.', 'Five animals, a solar panel, a biogas digester and a shed full of sensors, all running live in 3D. Wake it up and watch every system come online.'],
    waking: ['Waking up…', 'The camera visits each system as it reports in. Every reading is live from the model.'],
    awake: ['The farm is awake.', 'Every system has reported in, and the numbers below keep running. Choose how you want to see it.'],
  };
  function setState(s) {
    state = s; root.dataset.state = s;
    $('ldTitle').textContent = TEXT[s][0];
    $('ldLead').textContent = TEXT[s][1];
    paint();
  }
  function markRow(i, st) {
    const r = rows[i];
    r.dataset.st = st;
    if (st === 'on') r.lastChild.textContent = 'connecting…';
  }

  // ------------------------------------------------------------- the wake-up
  function wake() {
    if (state !== 'asleep' || done) return;
    const total = STOPS.length * (FLY + DWELL) + FINAL;
    // pace the clock so the sun rises during the flight and the morning milking has begun by the end
    const need = Math.max(0.3, MORNING - sim.hour);
    sim.paused = false;
    sim.speed = Math.min(8, need / (HOURS_PER_SEC * total));
    seq = { i: -1, t: 0, all: 0, total, ok: false };
    setState('waking');
    next();
  }
  function next() {
    seq.i++; seq.t = 0; seq.ok = false;
    if (seq.i < STOPS.length) {
      const s = STOPS[seq.i];
      director.fly(s.cam, null, reduced ? 0.05 : FLY);
      world.state.flowView = false; world.state.flowOnly = s.flow;
      markRow(seq.i, 'on');
    } else {
      // pull back over the whole board with every loop lit
      director.fly(HERO, null, reduced ? 0.05 : FINAL);
      world.state.flowOnly = null; world.state.flowView = true;
    }
  }
  function advance(dt) {
    seq.t += dt; seq.all += dt;
    $('ldBar').style.transform = `scaleX(${Math.min(1, seq.all / seq.total).toFixed(3)})`;
    if (seq.i < STOPS.length) {
      if (!seq.ok && seq.t >= FLY) { seq.ok = true; markRow(seq.i, 'ok'); paint(); }
      if (seq.t >= FLY + DWELL) next();
    } else if (seq.t >= FINAL) wakeDone();
  }
  function wakeDone() {
    sim.speed = 1;
    rows.forEach((r) => (r.dataset.st = 'ok'));
    try { sessionStorage.setItem(SEEN, '1'); } catch { /* fine: the next visit just starts at night again */ }
    setState('awake');
    $('startTour').focus({ preventScroll: true });
  }
  // Straight to the choices: a quick time-lapse to morning instead of the tour of systems.
  function skip() {
    if (done || state === 'awake') return;
    if (sim.hour < MORNING - 0.05 || sim.hour > 20) sim.warpTo(MORNING);
    director.fly(HERO, null, reduced ? 0.05 : 1.4);
    world.state.flowOnly = null; world.state.flowView = true;
    $('ldBar').style.transform = 'scaleX(1)';
    wakeDone();
  }

  // ------------------------------------------------------------- leaving
  // Called on every way out, before the twin's own handlers run, so they get the farm back in its normal state.
  // When the twin has already taken over (a deep link), its flow view is left alone.
  function finish(resetFlows = true) {
    if (done) return;
    done = true;
    sim.paused = false; sim.speed = 1;
    if (resetFlows) { world.state.flowView = false; world.state.flowOnly = null; }
    removeEventListener('keydown', onKey, true);
  }
  for (const id of ['startTour', 'startFree']) {
    const btn = $(id), go = btn.onclick;
    btn.onclick = (ev) => { finish(); if (go) go.call(btn, ev); };
  }
  function meet(id) {
    finish();
    root.classList.add('gone'); document.body.classList.remove('intro');
    ui.setTour(false);
    ui.openAnimal(id);
  }
  $('ldHerd').onclick = (ev) => { const b = ev.target.closest('[data-cow]'); if (b) meet(b.dataset.cow); };
  $('ldWake').onclick = wake;
  root.querySelectorAll('[data-skip]').forEach((b) => (b.onclick = skip));
  // Replay: on to the next dawn (the farm keeps running through the night), then the same wake-up.
  $('ldReplay').onclick = () => {
    if (done || state !== 'awake') return;
    rows.forEach((r) => { r.dataset.st = 'wait'; r.lastChild.textContent = 'waiting'; });
    $('ldBar').style.transform = 'scaleX(0)';
    world.state.flowView = false;
    sim.jumpTo(DAWN);
    state = 'asleep';
    wake();
  };
  // "Open on your phone": a QR code for whatever address this page is served from (Vercel, or a
  // laptop on the hall's Wi-Fi), so visitors can carry the farm away. Hidden for file:// and localhost,
  // where a phone could not reach it.
  const phone = $('ldPhone'), qr = $('ldQr');
  if (/^https?:$/.test(location.protocol) && !/^(localhost|127\.|\[::1\])/.test(location.hostname)) {
    const url = `${location.origin}${location.pathname.replace(/index\.html$/, '')}`;
    try {
      $('ldQrCode').innerHTML = qrSvg(url, { dark: '#0b1d14' });
      $('ldQrUrl').textContent = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
      phone.hidden = false;
      const show = (on) => { qr.hidden = !on; phone.setAttribute('aria-expanded', String(on)); phone.classList.toggle('on', on); };
      phone.onclick = () => show(qr.hidden);
      qr.onclick = () => show(false);
      document.addEventListener('pointerdown', (e) => { if (!qr.hidden && !qr.contains(e.target) && e.target !== phone) show(false); });
    } catch { /* address too long for a version-10 code: leave the button hidden */ }
  }
  const full = $('ldFull');
  full.onclick = () => (document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.()?.catch(() => {}));
  addEventListener('fullscreenchange', () => (full.textContent = document.fullscreenElement ? 'Exit full screen' : 'Full screen'));
  // Leaving for Cow Flow or the docs: nothing to restore, the page unloads.

  // The twin's own shortcuts (space pauses, arrows step the tour, F, L, C) would act on a hidden interface here.
  const BLOCK = new Set([' ', 'ArrowLeft', 'ArrowRight', 'f', 'F', 'l', 'L', 'c', 'C']);
  function onKey(e) {
    if (done) return;
    const onButton = e.target.closest && e.target.closest('button, a');
    if (e.key === 'Escape') { e.preventDefault(); skip(); }
    else if (e.key === 'Enter' && !onButton && state === 'asleep') { e.preventDefault(); wake(); }
    if (BLOCK.has(e.key)) {
      e.stopImmediatePropagation();
      if (e.key === ' ' && !onButton) { e.preventDefault(); if (state === 'asleep') wake(); }
    }
  }
  addEventListener('keydown', onKey, true);

  // ---------------------------------------------------------- live readouts
  const set = (el, v) => { if (el && el.textContent !== v) el.textContent = v; };
  function paint() {
    set($('ldTime'), hhmm(sim.hour));
    set($('ldPhase'), phase(sim.hour, sim.isNight));
    $('ldSun').className = `ld-sun ${sim.isNight ? 'moon' : ''}`;
    rows.forEach((r, i) => { if (r.dataset.st === 'ok') set(r.lastChild, STOPS[i].read()); });
    if (state !== 'awake') return;
    const e = sim.energy, healthy = sim.animals.filter((a) => !a.ai.flagged).length;
    set($('lpClock'), hhmm(sim.hour)); set($('lpDay'), `day ${sim.day}`);
    set($('lpMilk'), `${sim.milk.today.toFixed(1)} L`);
    set($('lpSolar'), `${e.solarW.toFixed(0)} W`);
    set($('lpBat'), `${((100 * e.batWh) / e.batCap).toFixed(0)} %`);
    set($('lpHerd'), `${healthy}/${sim.animals.length}`);
    $('lpHerdCell').dataset.alert = healthy < sim.animals.length ? '1' : '';
    for (const a of sim.animals) {
      const el = root.querySelector(`[data-cowv="${a.id}"]`);
      set(el, a.outside ? 'outside' : a.ai.flagged ? a.ai.label.toLowerCase() : `${a.temp.toFixed(1)} °C`);
      if (el) el.dataset.flag = a.ai.flagged || a.outside ? '1' : '';
    }
  }

  let last = performance.now(), slow = 0;
  function loop(now) {
    if (done) return;
    const dt = Math.min(0.1, (now - last) / 1000);
    last = now;
    // a deep link (index.html#explore, #step=...) or another script already opened the farm
    if (root.classList.contains('gone')) return finish(false);
    // someone clicked an animal on the 3D board: take them straight to her record
    if (world.state.selected) return meet(world.state.selected);
    if (state === 'asleep' && sim.hour > HOLD_BY && sim.hour < 12) sim.speed = 0.0001;
    if (state === 'waking') advance(dt);
    slow -= dt;
    if (slow <= 0) { slow = 0.25; paint(); }
    requestAnimationFrame(loop);
  }

  // ------------------------------------------------------------------ start
  if (deep) {
    setState('awake');
  } else if (seen) {
    // came back from Cow Flow or the docs in this tab: the farm is already up
    world.state.flowView = true;
    director.fly(HERO, null, 0.05);
    setState('awake');
  } else {
    sim.jumpTo(DAWN);              // the herd's real night: belts, tanks and battery all carry on from yesterday
    sim.speed = 0.02;              // a near-still pre-dawn while the page waits for someone
    director.fly(ASLEEP_CAM, null, 0.05);
    setState('asleep');
  }
  root.classList.add('ready');
  $('ldWake').disabled = false;
  root.querySelectorAll('[data-skip]').forEach((b) => (b.disabled = false));
  set($('ldWakeLabel'), 'Wake the farm');
  if (state === 'asleep') $('ldWake').focus({ preventScroll: true });
  requestAnimationFrame(loop);
  return { wake, skip, get state() { return state; } };
}
