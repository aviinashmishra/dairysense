// Cow Flow: scroll the page and Gauri walks through one whole farm day.
// Scrolling sets where the story should be; she then gets there at a cow's
// pace, hooves planted, while the sun, the machines and every reading follow
// the farm engine's recording of that hour.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { buildCow, STRIDE } from '../cow.js';
import { beltStep } from '../sim.js';
import { recordDay, sample } from '../trace.js';
import { createEnv, pathZ, pathSlope } from './scene.js';
import { createStations, PADS } from './stations.js';
import { STAGES } from './stages.js';

const $ = (id) => document.getElementById(id);
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const damp = (rate, dt) => 1 - Math.exp(-rate * dt);
const smooth = (t) => { t = clamp(t); return t * t * (3 - 2 * t); };
const hhmm = (h) => `${String(Math.floor(h) % 24).padStart(2, '0')}:${String(Math.floor((h % 1) * 60)).padStart(2, '0')}`;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const N = STAGES.length, WALK = 0.45, ACTION_T = 2.8;
const params = new URLSearchParams(location.search);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ------------------------------------------------------------------- page
const track = $('track');
track.innerHTML = STAGES.map((s, i) => `
  <section class="stage" id="${s.id}" data-i="${i}">
    <article class="card">
      <p class="when"><span class="num">${String(i + 1).padStart(2, '0')}</span><b>${hhmm(s.hours[0])}</b><i>${esc(s.kicker)}</i></p>
      <h2>${esc(s.title)}</h2>
      <p class="lead">${esc(s.lead)}</p>
      ${s.how ? `<ul class="how">${s.how.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>` : ''}
      <div class="reads${s.summary ? ' sum' : ''}" id="reads-${s.id}"></div>
      <p class="links"><a href="index.html#step=${s.twin}">Open this in the live twin</a><a href="docs.html#${s.docs}">How it works</a></p>
      ${s.summary ? '<p class="links end"><a class="cta" href="index.html">Run the live twin</a><a class="cta ghost" href="#wake">Walk the day again</a></p>' : ''}
    </article>
  </section>`).join('');
const sections = [...track.children];
$('timeline').innerHTML = STAGES.map((s, i) => `<button data-i="${i}" title="${esc(s.title)}"><i></i><span>${hhmm(s.hours[0])}</span></button>`).join('') + '<div class="rail"><b id="railFill"></b></div>';
const dots = [...$('timeline').querySelectorAll('button')];
const tags = $('tags');

function start() {
  const canvas = $('scene');
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' }); }
  catch (err) { document.body.classList.add('nogl'); $('loading').innerHTML = '<p>This browser could not start WebGL, which the 3D walk needs. The story below still reads on its own, or open the page in a recent Chrome, Edge or Firefox.</p>'; return; }
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
  // Integrated and mobile graphics start on a lighter profile; ?hq or ?lite overrides the guess.
  const dbg = renderer.getContext().getExtension('WEBGL_debug_renderer_info');
  const gpu = dbg ? String(renderer.getContext().getParameter(dbg.UNMASKED_RENDERER_WEBGL)) : '';
  const lite = params.has('lite') || (!params.has('hq') && /Intel|UHD|Iris|HD Graphics|Mali|Adreno|PowerVR|SwiftShader|llvmpipe|Basic Render/i.test(gpu));
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.5;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.12, 9000);
  const env = createEnv(renderer, scene, PADS);
  const stations = createStations(scene, env);
  const cow = buildCow({ coat: 'holstein', idx: 0, seed: 12 });
  scene.add(cow.group);

  // post-processing: a gentle bloom so lamps, LEDs, the flame and the low sun glow
  let composer = null, bloom = null;
  if (!params.has('nofx') && (!lite || params.has('fx'))) {
    try {
      const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: 4 });
      composer = new EffectComposer(renderer, rt);
      composer.addPass(new RenderPass(scene, camera));
      bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.22, 0.7, 2.4); composer.addPass(bloom);
      composer.addPass(new OutputPass());
    } catch (err) { composer = null; }
  }

  // ------------------------------------------------- the day, from the engine
  const opts = { weather: 'sunny', heatwave: false };
  let trace = recordDay(opts);
  const live = { state: 'rest', stress: 0, stressAcc: 0, sick: 0, cond: 'healthy', estrus: 0, act: 4, rum: 40, ...trace.cow, temp: trace.cow.baseTemp, hr: trace.cow.baseHr };
  const noise = (amp) => (Math.random() - 0.5) * 2 * amp;
  const shown = { temp: live.temp, hr: live.hr, act: live.act, rum: live.rum };
  const hist = { temp: [], hr: [], act: [], rum: [] };
  function rerecord() { document.body.classList.add('busy'); setTimeout(() => { trace = recordDay(opts); document.body.classList.remove('busy'); hudT = 0; }, 30); }
  document.querySelectorAll('[data-weather]').forEach((b) => (b.onclick = () => {
    opts.weather = b.dataset.weather; document.querySelectorAll('[data-weather]').forEach((x) => x.classList.toggle('on', x === b)); rerecord();
  }));
  $('btnHeat').onclick = () => { opts.heatwave = !opts.heatwave; $('btnHeat').classList.toggle('on', opts.heatwave); rerecord(); };

  // ---------------------------------------------------- story position
  // q is "stage number + how far through it". The first 45 % of a stage is
  // the walk from the previous stop; the rest plays that stop's action.
  const endX = (i) => STAGES[i].x + (STAGES[i].drift || 0);
  function geom(q) {
    const i = Math.min(N - 1, Math.floor(q)), u = clamp(q - i), st = STAGES[i], prev = STAGES[i - 1];
    if (!prev) return { i, u, a: u, x: st.x + (st.drift || 0) * u, hour: lerp(st.hours[0], st.hours[1], u), walking: false, st };
    if (u < WALK) { const k = u / WALK; return { i, u, a: 0, x: lerp(endX(i - 1), st.x, k), hour: lerp(prev.hours[1], st.hours[0], k), walking: true, seg: Math.abs(st.x - endX(i - 1)), st }; }
    const a = (u - WALK) / (1 - WALK);
    return { i, u, a, x: st.x + (st.drift || 0) * a, hour: lerp(st.hours[0], st.hours[1], a), walking: false, st };
  }
  const scrollQ = () => {
    const y = scrollY + innerHeight * 0.42;
    for (let i = N - 1; i >= 0; i--) { const s = sections[i]; if (y >= s.offsetTop || i === 0) return clamp(i + (y - s.offsetTop) / s.offsetHeight, 0, N - 0.0001); }
    return 0;
  };
  const scrollToQ = (q, instant) => {
    const i = Math.min(N - 1, Math.floor(q)), s = sections[i];
    scrollTo({ top: Math.max(0, s.offsetTop + (q - i) * s.offsetHeight - innerHeight * 0.42), behavior: instant || reduce ? 'instant' : 'smooth' });
  };
  let Q = 0, q = 0, vq = 0, snap = true, cutT = 0;
  const jump = (target) => { scrollToQ(target, true); Q = q = scrollQ(); vq = 0; snap = true; };
  const fromHash = () => { const i = STAGES.findIndex((s) => s.id === location.hash.slice(1)); if (i >= 0) jump(i + 0.75); return i >= 0; };
  addEventListener('hashchange', fromHash);
  dots.forEach((b) => (b.onclick = () => scrollToQ(+b.dataset.i + 0.72)));
  $('hint').onclick = () => scrollToQ(0.95);
  addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    const i = Math.floor(Q);
    if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); scrollToQ(Math.min(N - 0.2, (Q - i > 0.6 ? i + 1 : i) + 0.72)); }
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); scrollToQ(Math.max(0, (Q - i > 0.8 ? i : i - 1) + 0.72)); }
  });

  // --------------------------------------------------------------- labels
  const labelSets = STAGES.map((s) => (s.labels || []).map((l) => { const el = document.createElement('span'); el.className = 'tag off'; el.textContent = l.t; tags.appendChild(el); return { ...l, el, shown: false, v: new THREE.Vector3() }; }));
  const pv = new THREE.Vector3();
  function placeLabels(g, settled) {
    labelSets.forEach((set, i) => set.forEach((l) => {
      let ok = i === g.i && g.a > 0.12 && g.a < 0.985 && settled !== false;
      if (ok) {
        if (l.on === 'rover') pv.copy(stations.D.rover.position); else if (l.on) cow.anchors[l.on].getWorldPosition(pv); else pv.set(0, 0, 0);
        const o = l.p || l.o; if (l.p) pv.set(o[0], o[1], o[2]); else pv.x += o[0], pv.y += o[1], pv.z += o[2];
        pv.project(camera); ok = pv.z < 1 && Math.abs(pv.x) < 0.98 && Math.abs(pv.y) < 0.95;
        if (ok) l.el.style.transform = `translate3d(${((pv.x * 0.5 + 0.5) * view.w).toFixed(1)}px,${((-pv.y * 0.5 + 0.5) * view.h).toFixed(1)}px,0) translate(-50%,-135%)`;
      }
      if (ok !== l.shown) { l.shown = ok; l.el.classList.toggle('off', !ok); }
    }));
  }

  // ---------------------------------------------------------------- sizing
  const view = { x: 0, y: 0, w: 1, h: 1, tx: 0, ty: 0 };
  const quality = { ratio: Math.min(devicePixelRatio || 1, lite ? 1 : 1.75), level: 0, win: 0, frames: 0, slow: 0, age: 0, fx: !!composer, lite, gpu };
  if (lite) env.setQuality(1);
  function resize() {
    const w = innerWidth, h = innerHeight;
    renderer.setPixelRatio(quality.ratio); renderer.setSize(w, h, false);
    if (composer) { composer.setPixelRatio(quality.ratio); composer.setSize(w, h); }
    camera.aspect = w / h; camera.fov = w / h < 0.8 ? 52 : w / h < 1.25 ? 44 : 36;
    view.w = w; view.h = h;
    const wide = w > 900;
    view.tx = wide ? -(Math.min(460, w * 0.34) - (w > 1180 ? 250 : 0)) / 2 : 0;
    view.ty = wide ? 0 : h * 0.17;
    applyView();
  }
  function applyView() { camera.setViewOffset(view.w, view.h, view.x, view.y, view.w, view.h); camera.updateProjectionMatrix(); }
  addEventListener('resize', resize);
  const smallShadow = () => { env.sun.shadow.mapSize.set(1024, 1024); env.sun.shadow.map?.dispose(); env.sun.shadow.map = null; };
  const LADDER = lite
    ? [() => env.setQuality(2), smallShadow, () => { quality.ratio = Math.min(quality.ratio, 0.85); }, () => env.setQuality(3), () => { quality.ratio = 0.7; }]
    : [() => { quality.ratio = Math.min(quality.ratio, 1.25); }, () => { quality.fx = false; }, () => env.setQuality(1), () => { quality.ratio = 1; }, smallShadow, () => env.setQuality(2), () => { quality.ratio = 0.85; env.setQuality(3); }];
  function tune(raw) {
    quality.age += raw; quality.win += raw; quality.frames++;
    if (quality.win < 0.8) return;
    const avg = quality.win / quality.frames; quality.win = 0; quality.frames = 0;
    if (quality.age < 2.5 || document.hidden || quality.level >= LADDER.length) return;
    quality.slow = avg > 1 / 33 ? quality.slow + 1 : 0;
    if (quality.slow < 2) return;
    quality.slow = 0; LADDER[quality.level++](); resize();
  }

  // ------------------------------------------------------------------ HUD
  const VIT = [['temp', 'Body temperature', '°C', 1, 37.8, 40.2], ['hr', 'Heart rate', 'bpm', 0, 50, 100], ['act', 'Activity', 'index', 0, 0, 90], ['rum', 'Rumination', 'min/h', 0, 0, 45]];
  $('vitals').innerHTML = VIT.map(([k, l, u]) => `<div class="vit"><span>${l}</span><b id="v-${k}">--</b><small>${u}</small><canvas id="c-${k}" width="180" height="44"></canvas></div>`).join('');
  const setText = (el, v) => { if (el && el.textContent !== v) el.textContent = v; };
  const DOING = { rest: 'lying down, chewing the cud', walk: 'walking', eat: 'feeding at the manger', graze: 'grazing', drink: 'drinking', idle: 'standing' };
  let hudT = 0, histT = 0, lastStage = -1;
  function spark(id, data, lo, hi) {
    const cv = $(id), g = cv.getContext('2d'), W = cv.width, H = cv.height;
    g.clearRect(0, 0, W, H);
    if (data.length < 2) return;
    const a = Math.min(lo, ...data), b = Math.max(hi, ...data), X = (i) => 3 + (i / (data.length - 1)) * (W - 9), Y = (d) => H - 5 - ((d - a) / (b - a)) * (H - 10);
    g.strokeStyle = '#9fe870'; g.lineWidth = 2.5; g.lineJoin = g.lineCap = 'round'; g.beginPath();
    data.forEach((d, i) => (i ? g.lineTo(X(i), Y(d)) : g.moveTo(X(i), Y(d)))); g.stroke();
    g.fillStyle = '#ffffff'; g.beginPath(); g.arc(X(data.length - 1), Y(data[data.length - 1]), 3.4, 0, 7); g.fill();
  }
  function hud(g, r, ctx) {
    setText($('clock'), hhmm(g.hour));
    const e = env.state.elev;
    setText($('phase'), g.hour < 5.6 ? 'before dawn' : e < 0.25 && g.hour < 12 ? 'sunrise' : g.hour < 11.5 ? 'morning' : g.hour < 14.5 ? 'midday' : g.hour < 17 ? 'afternoon' : g.hour < 18.6 ? 'sunset' : 'night');
    $('sunDot').style.cssText = `left:${clamp((g.hour - 4.5) / 19) * 100}%;bottom:${Math.max(0, e) * 100}%;background:${e > 0.02 ? '#ffd166' : '#cfd8ff'}`;
    for (const [k, , , dg] of VIT) setText($(`v-${k}`), shown[k].toFixed(dg));
    for (const [k, , , , lo, hi] of VIT) spark(`c-${k}`, hist[k], lo, hi);
    const chip = $('aiChip'), key = r.cKey;
    chip.className = `chip ${key === 'healthy' ? 'good' : key === 'fever' ? 'crit' : 'warn'}`;
    setText(chip, `${key === 'healthy' ? '✔' : '▲'} ${r.cLabel}`);
    setText($('doing'), `${DOING[live.state]} · ${g.st.inShed && (g.i < 3 || g.i > 10) ? 'cow shed' : 'paddock'}`);
    const alert = r.thi >= 79 ? `▲ Shed heat stress · THI ${r.thi.toFixed(0)} · fans and foggers running` : r.gridW > 0 ? '▲ Running on grid power' : r.bat < 0.2 ? '▲ Battery low · biogas generator backing up' : r.raining ? 'Rain · the roof gutter is filling the collection tank' : '';
    $('alert').hidden = !alert; setText($('alert'), alert);
    const reads = STAGES[g.i].read(r, ctx), box = $(`reads-${g.st.id}`);
    const html = reads.map(([l, v, s]) => `<div><span>${esc(l)}</span><b>${esc(v)}</b><small>${esc(s || '')}</small></div>`).join('');
    if (box.dataset.h !== html) { box.dataset.h = html; box.innerHTML = html; }
    if (g.i !== lastStage) {
      lastStage = g.i;
      dots.forEach((d, i) => { d.classList.toggle('on', i === g.i); d.classList.toggle('done', i < g.i); });
      sections.forEach((s, i) => s.classList.toggle('now', i === g.i));
    }
    $('railFill').style.width = `${(clamp((g.i + g.u) / N) * 100).toFixed(2)}%`;
    document.body.classList.toggle('started', scrollY > 40);
  }

  // ------------------------------------------------------------- the loop
  const clock = new THREE.Clock();
  const C = { az: 0.6, el: 0.1, dist: 6, fx: 0, fy: 1, fz: 0 }, T = { ...C };
  const st8 = { x: 0, face: 0, phase: 0, v: 0, walk: 0, settled: true };
  const focus = new THREE.Vector3(), center = new THREE.Vector3(), ptr = { x: 0, y: 0, sx: 0, sy: 0 };
  addEventListener('pointermove', (e) => { ptr.x = e.clientX / innerWidth - 0.5; ptr.y = e.clientY / innerHeight - 0.5; });
  let time = 0, first = true;

  function camFor(g) {
    const cur = g.st.cam, prev = g.walking ? STAGES[g.i - 1].cam : cur, k = g.walking ? smooth(g.u / WALK) : 1;
    const mix = (key, dflt) => lerp(prev[key] ?? dflt, cur[key] ?? dflt, k);
    const cz = pathZ(st8.x), w = mix('w', 0), pl = prev.look || [st8.x, 1, cz], cl = cur.look || [st8.x, 1, cz];
    const face = Math.cos(st8.face);
    T.az = THREE.MathUtils.degToRad(mix('az', 30) + (g.walking ? 0 : (g.a - 0.5) * 9)); T.el = THREE.MathUtils.degToRad(mix('el', 8)); T.dist = mix('dist', 7) * (camera.aspect < 0.8 ? 1.25 : 1);
    T.fx = lerp(st8.x + mix('fx', 0) * face, lerp(pl[0], cl[0], k), w); T.fy = lerp(mix('y', 1), lerp(pl[1], cl[1], k), w); T.fz = lerp(cz, lerp(pl[2], cl[2], k), w);
  }

  function frame() {
    const raw = clock.getDelta(), dt = Math.min(raw, 0.05);
    time += reduce ? 0 : dt;

    // where the scroll says the story should be, and how fast she can get there
    Q = scrollQ();
    let gap = Q - q;
    if (snap || first) { q = Q; vq = 0; gap = 0; }
    else if (Math.abs(gap) > 2.4 && cutT <= 0) { cutT = 0.36; document.body.classList.add('cut'); }
    if (cutT > 0) { cutT -= dt; if (cutT <= 0.18 && Math.abs(gap) > 0.5) { q = Q; vq = 0; snap = true; } if (cutT <= 0) document.body.classList.remove('cut'); }
    else if (!snap) {
      const g0 = geom(q), speed = 1.5 + 3.4 * smooth((Math.abs(gap) - 0.3) / 0.8);
      let lim = g0.walking ? (speed / Math.max(2, g0.seg)) * WALK : (1 - WALK) / ACTION_T;
      if (!g0.walking && g0.st.drift) lim = Math.min(lim, (speed * (1 - WALK)) / Math.abs(g0.st.drift));
      if (!g0.st || g0.i === 0) lim = 1 / (ACTION_T * 1.6);
      lim *= 1 + Math.pow(Math.max(0, Math.abs(gap) - 1.1), 2) * 5;
      vq = lerp(vq, clamp(gap * 3.5, -lim, lim), damp(6, dt));
      const step = vq * dt; q += Math.abs(step) > Math.abs(gap) ? gap : step;
    }
    const g = geom(q);

    // move her along the track: hooves follow the distance actually covered
    const dx = snap || first ? 0 : g.x - st8.x;
    st8.x = g.x;
    st8.v = lerp(st8.v, dt > 0 ? dx / dt : 0, damp(10, dt));
    const sp = Math.abs(st8.v), moving = sp > 0.06;
    const want = moving && st8.v < 0 ? Math.PI : 0;
    const dFace = (want - st8.face) * damp(4.5, dt); st8.face = snap ? 0 : st8.face + dFace;
    const stride = STRIDE * (1 + 0.5 * smooth((sp - 1.7) / 3));
    st8.phase += Math.min(Math.abs(dx) / stride, 3.4 * dt) + Math.abs(dFace) * 0.45;
    st8.settled = !moving && Math.abs(st8.face) < 0.05;
    const z = pathZ(st8.x), slope = pathSlope(st8.x);
    cow.group.position.set(st8.x, 0, z);
    cow.group.rotation.y = -Math.atan(slope) + st8.face;

    // the farm at this hour
    env.setTime(g.hour, opts.weather, snap ? 5 : dt);
    const r = sample(trace, g.hour);
    const pose = moving || g.walking ? {} : g.st.pose(g.a);
    live.state = pose.lie ? 'rest' : moving ? 'walk' : g.walking ? 'idle' : g.st.state === 'walk' ? 'idle' : g.st.state;
    beltStep(live, dt * (snap ? 40 : 0.5), g.st.inShed ? r.thi : r.padThi, g.hour, noise);
    for (const k of ['temp', 'hr', 'act', 'rum']) shown[k] = lerp(shown[k], live[k], snap ? 1 : damp(2.5, dt));
    histT -= dt;
    if (histT <= 0) { histT = 0.2; for (const k of ['temp', 'hr', 'act', 'rum']) { hist[k].push(shown[k]); if (hist[k].length > 90) hist[k].shift(); } }
    cow.update(snap ? 1 : dt, time, { ...pose, phase: st8.phase, walk: moving ? 1 : 0, key: r.cKey, effort: clamp((sp - 1.6) / 3) + live.stress, ping: g.st.id === 'belt' || g.st.id === 'night', ledPower: 4 + 4 * env.state.night });

    const S = { r, dt, time, cur: g.st.id, a: g.a, q, cowX: st8.x, settled: st8.settled, flow: g.walking ? null : g.st.flow,
      at: (id) => { const i = STAGES.findIndex((s) => s.id === id); return g.i > i ? 1 : g.i < i ? 0 : g.a; } };
    stations.update(S);

    // camera: each stop has its own framing; a little parallax from the pointer
    camFor(g);
    const kc = snap || first ? 1 : damp(2.6, dt);
    for (const k in C) C[k] = lerp(C[k], T[k], kc);
    ptr.sx = lerp(ptr.sx, ptr.x, damp(3, dt)); ptr.sy = lerp(ptr.sy, ptr.y, damp(3, dt));
    const az = C.az + ptr.sx * 0.12, el = clamp(C.el - ptr.sy * 0.05, 0.02, 1.3);
    focus.set(C.fx, C.fy, C.fz);
    camera.position.set(focus.x + C.dist * Math.sin(az) * Math.cos(el), Math.max(0.35, focus.y + C.dist * Math.sin(el)), focus.z + C.dist * Math.cos(az) * Math.cos(el));
    camera.lookAt(focus);
    view.x = lerp(view.x, view.tx, kc); view.y = lerp(view.y, view.ty, kc); applyView();
    center.set(lerp(st8.x, focus.x, 0.5), 0, lerp(z, focus.z, 0.5));
    env.update(dt, time, center, camera, cow.group.position);

    if (bloom) bloom.strength = 0.16 + 0.5 * env.state.night;
    if (composer && quality.fx) composer.render(dt); else renderer.render(scene, camera);

    placeLabels(g, st8.settled || g.st.drift ? true : false);
    hudT -= dt;
    if (hudT <= 0 || snap) { hudT = 0.2; hud(g, r, { live, trace, a: g.a, fill: smooth(S.at('milk')), at: (h) => sample(trace, h) }); }
    if (first) { first = false; document.body.classList.add('ready'); }
    snap = false;
    if (raw < 0.25) tune(raw);
    requestAnimationFrame(frame);
  }

  resize();
  if (params.has('q')) jump(+params.get('q')); else if (!fromHash()) { Q = q = scrollQ(); }
  window.cowFlow = { jump, scene, camera, renderer, env, cow, stations, quality, get q() { return q; }, get trace() { return trace; }, live };
  renderer.compile(scene, camera);
  requestAnimationFrame(frame);
}
start();
