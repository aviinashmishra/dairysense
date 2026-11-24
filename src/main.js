// Dairy Sense: a living 3D digital twin of a Sustainable Smart Dairy Farm.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createSim } from './sim.js';
import { createWorld } from './world.js';
import { createUI } from './ui.js';
import { loadCowArt } from './cowart.js';
import { createLook } from './herdlook.js';
import { createLive } from './live.js';
import { damp } from './kit.js';
import { createLanding } from './landing.js';

async function start() {
  const canvas = document.getElementById('scene');
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' }); }
  catch (err) {
    document.getElementById('splash').innerHTML = '<div class="splash-card"><h1>Dairy Sense</h1><p class="sub">This browser could not start WebGL, which the 3D farm needs. Please open this page in a recent Chrome, Edge or Firefox with hardware acceleration switched on.</p></div>';
    return;
  }
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.shadowMap.autoUpdate = false;       // refreshed on alternate frames, see frame()
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#a5d8f3');
  const camera = new THREE.PerspectiveCamera(40, 1, 0.5, 600);
  camera.position.set(-26, 16, 40);
  const controls = new OrbitControls(camera, canvas);
  Object.assign(controls, { enableDamping: true, dampingFactor: 0.08, maxPolarAngle: Math.PI * 0.485, minDistance: 5, maxDistance: 85, autoRotate: true, autoRotateSpeed: 0.55, zoomSpeed: 0.8 });
  controls.target.set(0, 0.5, 0);

  const sim = createSim();
  // The herd is drawn from one cow picture, repainted per animal. It has to be decoded before the scene is built.
  let look;
  try { look = createLook(sim, await loadCowArt()); }
  catch (err) {
    console.error(err);
    document.getElementById('splash').innerHTML = '<div class="splash-card"><h1>Dairy Sense</h1><p class="sub">The cow artwork could not be read, so the farm cannot be drawn. Run <code>npm run build</code> again and reload this page.</p></div>';
    return;
  }
  const world = createWorld(scene, sim, look);
  const live = createLive(sim);

  // ---- adaptive quality -------------------------------------------------
  // Frame time is watched continuously. If the machine cannot hold a smooth
  // rate, detail is given up one notch at a time (resolution first, then
  // shadow detail) until it can. Smooth motion always wins over sharpness.
  const startRatio = () => Math.max(1, Math.min(devicePixelRatio || 1, 2, Math.sqrt(2.6e6 / (innerWidth * innerHeight))));
  const quality = { ratio: startRatio(), level: 0, win: 0, frames: 0, slow: 0, age: 0, shadowEvery: 2 };
  const LADDER = [
    (q) => { if (q.ratio > 1) { q.ratio = Math.max(1, q.ratio - 0.25); return q.ratio > 1; } },
    () => { world.sun.shadow.mapSize.set(1024, 1024); world.sun.shadow.map?.dispose(); world.sun.shadow.map = null; },
    (q) => { q.ratio = 0.85; },
    (q) => { q.shadowEvery = 3; q.ratio = 0.72; },
    // shadows get coarser and update less often rather than switching off: toggling them recompiles every shader
    (q) => { q.shadowEvery = 6; world.sun.shadow.mapSize.set(512, 512); world.sun.shadow.map?.dispose(); world.sun.shadow.map = null; },
    (q) => { q.ratio = 0.6; },
  ];
  function tune(raw) {
    quality.age += raw; quality.win += raw; quality.frames++;
    if (quality.win < 0.6) return;
    const avg = quality.win / quality.frames;
    quality.win = 0; quality.frames = 0;
    // ...and gives detail back once frames have been fast for a while, so a passing
    // hiccup (another app on the GPU) does not leave the farm blurry or its shadows coarse.
    quality.fast = avg < 1 / 57 ? (quality.fast || 0) + 1 : 0;
    const floor = world.sun.castShadow ? 0 : 5;
    if (!document.hidden && sim.warp <= 0 && quality.fast >= 8 && quality.age - (quality.up || 0) > 15 && (quality.level > floor || quality.ratio < startRatio() - 0.01)) {
      quality.fast = 0; quality.slow = 0; quality.up = quality.age;
      if (quality.level > floor) {
        const n = quality.level - 1;
        quality.ratio = startRatio(); quality.shadowEvery = 2;
        if (n < 2 && world.sun.shadow.mapSize.x !== 2048) { world.sun.shadow.mapSize.set(2048, 2048); world.sun.shadow.map?.dispose(); world.sun.shadow.map = null; }
        for (let i = 0; i < n; i++) { if (i === 0) quality.ratio = Math.max(1, quality.ratio - 0.25); else LADDER[i](quality); }
        quality.level = n;
      } else quality.ratio = Math.min(startRatio(), quality.ratio + 0.25);
      resize();
      return;
    }
    if (quality.age < 1.5 || document.hidden || sim.warp > 0 || quality.level >= LADDER.length) return;
    quality.slow = avg > 1 / 50 ? quality.slow + 1 : 0;
    if (quality.slow < 2) return;
    quality.slow = 0;
    const again = LADDER[quality.level](quality);
    if (!again) quality.level++;
    resize();
  }

  // ---- camera director: scripted fly-throughs, slow orbit, follow-an-animal
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const dir = { tw: null, follow: null, last: new THREE.Vector3(), tmp: new THREE.Vector3(), d: new THREE.Vector3() };
  const view = { cur: 0, target: 0 };
  const director = {
    fly(cam, followId = null, dur = 1.8) {
      const p1 = new THREE.Vector3(...cam.pos), t1 = new THREE.Vector3(...cam.target);
      if (cam.fit) {
        // Whole-board views back off until the board fits between the side panels.
        const panels = innerWidth > 820 ? 330 + (document.getElementById('story').hidden ? 0 : 350) : 0;
        const k = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
        const d = Math.max(30 / k, (innerHeight * 40) / (k * Math.max(320, innerWidth - panels))) * cam.fit;
        p1.sub(t1).setLength(d).add(t1);
      }
      dir.tw = { p0: camera.position.clone(), t0: controls.target.clone(), p1, t1, t: 0, dur };
      dir.follow = followId;
      controls.autoRotate = !!cam.orbit;
      if (followId) world.animalPos(followId, dir.last);
    },
    release() { dir.follow = null; },
    relayout() { resize(); },
    update(dt) {
      if (dir.follow && world.animalPos(dir.follow, dir.tmp)) {
        // trail the animal with a little lag rather than copying every step
        dir.d.copy(dir.tmp).sub(dir.last).multiplyScalar(damp(5, dt));
        dir.last.add(dir.d);
        if (dir.tw) { dir.tw.p1.add(dir.d); dir.tw.t1.add(dir.d); } else { camera.position.add(dir.d); controls.target.add(dir.d); }
      }
      if (dir.tw) {
        const w = dir.tw; w.t = Math.min(1, w.t + dt / w.dur);
        const k = ease(w.t);
        camera.position.lerpVectors(w.p0, w.p1, k); controls.target.lerpVectors(w.t0, w.t1, k);
        if (w.t >= 1) dir.tw = null;
      }
      // glide the picture sideways when a side panel opens or closes
      if (Math.abs(view.cur - view.target) > 0.4) {
        view.cur += (view.target - view.cur) * damp(7, dt);
        camera.setViewOffset(innerWidth, innerHeight, view.cur, 0, innerWidth, innerHeight);
        camera.updateProjectionMatrix();
      }
    },
  };
  controls.addEventListener('start', () => { dir.tw = null; controls.autoRotate = false; });

  const ui = createUI({ sim, world, director, live, look });
  const landing = createLanding({ sim, world, ui, director, look });   // src/landing.js: the wake-the-farm landing

  // ---- click an animal to open her health record
  const ray = new THREE.Raycaster(), ptr = new THREE.Vector2();
  let down = null;
  const pick = (ev) => {
    ptr.set((ev.clientX / innerWidth) * 2 - 1, -(ev.clientY / innerHeight) * 2 + 1);
    ray.setFromCamera(ptr, camera);
    return ray.intersectObjects(world.pickables, false)[0]?.object.userData.animalId || null;
  };
  canvas.addEventListener('pointerdown', (e) => (down = [e.clientX, e.clientY]));
  canvas.addEventListener('pointerup', (e) => {
    if (!down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 5) return;
    const id = pick(e);
    if (id) ui.openAnimal(id);
  });
  let hoverT = 0;
  canvas.addEventListener('pointermove', (e) => {
    const now = performance.now();
    if (e.buttons || now - hoverT < 90) return;
    hoverT = now; canvas.style.cursor = pick(e) ? 'pointer' : 'grab';
  });

  function resize() {
    renderer.setPixelRatio(quality.ratio);
    renderer.setSize(innerWidth, innerHeight, false);
    camera.aspect = innerWidth / innerHeight;
    // On portrait or narrow screens pull back so the whole board stays in view.
    camera.fov = camera.aspect < 1.2 ? 56 : 40;
    // Keep the farm centred in the space the side panels leave free.
    const wide = innerWidth > 820, intro = document.body.classList.contains('intro');
    const right = wide && !intro ? 328 : 0, left = wide && !intro && !document.getElementById('story').hidden ? 346 : wide && intro ? 520 : 0;   // intro: clear the landing panel
    view.target = (right - left) / 2;
    // intro on a phone: the landing is a sheet along the bottom, so lift the farm into the space above it
    camera.setViewOffset(innerWidth, innerHeight, view.cur, !wide && intro ? Math.round(innerHeight * 0.2) : 0, innerWidth, innerHeight);
    camera.updateProjectionMatrix();
  }
  addEventListener('resize', () => { if (quality.level === 0) quality.ratio = startRatio(); resize(); });
  resize();

  // Build every shader and upload every texture before the first frame, so
  // nothing hitches the first time rain, flames or lamps come on.
  world.update(0.016, 0, camera);
  renderer.compile(scene, camera);

  const clock = new THREE.Clock();
  let time = 0, frameNo = 0;
  function frame() {
    const raw = clock.getDelta(), dt = Math.min(raw, 0.05);
    time += dt;
    sim.step(dt);
    director.update(dt);
    controls.update(dt);
    world.update(dt, time, camera);
    // Shadows move slowly: redrawing them on alternate frames halves their cost.
    if (frameNo++ % quality.shadowEvery === 0) renderer.shadowMap.needsUpdate = true;
    renderer.render(scene, camera);
    ui.update(dt, camera);
    if (raw < 0.25) tune(raw);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  window.dairySense = { sim, world, ui, look, director, camera, controls, renderer, scene, quality, landing };
}
start();
