// The 3D stage: renderer, camera director and frame loop around the farm
// engine. It knows nothing about React; the interface talks to it through
// the Twin controller (twin.ts).
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createSim } from '../engine/sim.js';
import { createWorld } from '../engine/world.js';
import { createLive } from '../engine/live.js';
import { damp } from '../engine/kit.js';
import type { Cam, Insets, LiveLink, Sim } from './types';

export interface World {
  update(dt: number, time: number, camera: THREE.Camera): void;
  state: { flowView: boolean; flowOnly: string | null; selected: string | null };
  anchors: Record<string, THREE.Vector3>;
  pickables: THREE.Object3D[];
  animalPos(id: string, out: THREE.Vector3): THREE.Vector3 | null;
  sun: THREE.DirectionalLight;
}

export interface ScreenPoint { x: number; y: number; ok: boolean }

export interface Stage {
  sim: Sim;
  world: World;
  live: LiveLink;
  insets: Insets;
  fly(cam: Cam, followId?: string | null, dur?: number): void;
  release(): void;
  setInsets(next: Partial<Insets>): void;
  setInteractive(on: boolean): void;
  setRendering(on: boolean): void;
  onFrame(cb: (dt: number) => void): () => void;
  onTick(cb: () => void): () => void;
  onPick(cb: (animalId: string) => void): () => void;
  toScreen(x: number, y: number, z: number, out: ScreenPoint): ScreenPoint;
  anchor(key: string, out: ScreenPoint): ScreenPoint;
  dispose(): void;
}

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export function createStage(canvas: HTMLCanvasElement): Stage {
  // Throws when WebGL is unavailable; the provider shows a fallback.
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.shadowMap.autoUpdate = false; // refreshed on alternate frames, see frame()
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#a5d8f3');
  const camera = new THREE.PerspectiveCamera(40, 1, 0.5, 600);
  camera.position.set(-26, 16, 40);
  const controls = new OrbitControls(camera, canvas);
  Object.assign(controls, {
    enableDamping: true, dampingFactor: 0.08, maxPolarAngle: Math.PI * 0.485, minDistance: 5, maxDistance: 85,
    autoRotate: true, autoRotateSpeed: 0.55, zoomSpeed: 0.8,
  });
  controls.target.set(0, 0.5, 0);

  const sim = createSim() as unknown as Sim;
  const world = createWorld(scene, sim) as unknown as World;
  const live = createLive(sim) as unknown as LiveLink;

  // ---- adaptive quality -------------------------------------------------
  // Frame time is watched continuously. If the machine cannot hold a smooth
  // rate, detail is given up one notch at a time (resolution first, then
  // shadow detail) until it can. Smooth motion always wins over sharpness.
  const startRatio = () => Math.max(1, Math.min(devicePixelRatio || 1, 2, Math.sqrt(2.6e6 / (innerWidth * innerHeight))));
  const quality = { ratio: startRatio(), level: 0, win: 0, frames: 0, slow: 0, age: 0, shadowEvery: 2 };
  type Q = typeof quality;
  const LADDER: ((q: Q) => boolean | void)[] = [
    (q) => { if (q.ratio > 1) { q.ratio = Math.max(1, q.ratio - 0.25); return q.ratio > 1; } },
    () => { world.sun.shadow.mapSize.set(1024, 1024); world.sun.shadow.map?.dispose(); world.sun.shadow.map = null; },
    (q) => { q.ratio = 0.85; },
    (q) => { q.shadowEvery = 3; q.ratio = 0.72; },
    () => { world.sun.castShadow = false; },
    (q) => { q.ratio = 0.6; },
  ];
  function tune(raw: number) {
    quality.age += raw; quality.win += raw; quality.frames++;
    if (quality.win < 0.6) return;
    const avg = quality.win / quality.frames;
    quality.win = 0; quality.frames = 0;
    if (quality.age < 1.5 || document.hidden || sim.warp > 0 || quality.level >= LADDER.length) return;
    quality.slow = avg > 1 / 50 ? quality.slow + 1 : 0;
    if (quality.slow < 2) return;
    quality.slow = 0;
    const again = LADDER[quality.level](quality);
    if (!again) quality.level++;
    resize();
  }

  // ---- camera director: scripted fly-throughs, slow orbit, follow-an-animal
  const insets: Insets = { left: 0, right: 0, top: 0, bottom: 0 };
  const view = { cx: 0, cy: 0, tx: 0, ty: 0 };
  const dir = {
    tw: null as null | { p0: THREE.Vector3; t0: THREE.Vector3; p1: THREE.Vector3; t1: THREE.Vector3; t: number; dur: number },
    follow: null as string | null,
    last: new THREE.Vector3(), tmp: new THREE.Vector3(), d: new THREE.Vector3(),
  };

  function fly(cam: Cam, followId: string | null = null, dur = 1.8) {
    const p1 = new THREE.Vector3(...cam.pos), t1 = new THREE.Vector3(...cam.target);
    if (cam.fit) {
      // Whole-board views back off until the board fits the space the panels leave free.
      const freeW = Math.max(300, innerWidth - insets.left - insets.right);
      const freeH = Math.max(240, innerHeight - insets.top - insets.bottom);
      const k = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      const d = Math.max((30 * innerHeight) / (k * freeH), (40 * innerHeight) / (k * freeW)) * cam.fit;
      p1.sub(t1).setLength(Math.min(d, 84)).add(t1);
    }
    dir.tw = { p0: camera.position.clone(), t0: controls.target.clone(), p1, t1, t: 0, dur };
    dir.follow = followId;
    controls.autoRotate = !!cam.orbit;
    if (followId) world.animalPos(followId, dir.last);
  }

  function directorUpdate(dt: number) {
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
    // glide the picture toward the free space when a panel opens or closes
    if (Math.abs(view.cx - view.tx) > 0.4 || Math.abs(view.cy - view.ty) > 0.4) {
      const k = damp(6, dt);
      view.cx += (view.tx - view.cx) * k; view.cy += (view.ty - view.cy) * k;
      camera.setViewOffset(innerWidth, innerHeight, view.cx, view.cy, innerWidth, innerHeight);
      camera.updateProjectionMatrix();
    }
  }
  const onControlStart = () => { dir.tw = null; controls.autoRotate = false; };
  controls.addEventListener('start', onControlStart);

  function setInsets(next: Partial<Insets>) {
    Object.assign(insets, next);
    view.tx = (insets.right - insets.left) / 2;
    view.ty = (insets.bottom - insets.top) / 2;
  }

  // ---- click an animal to open her health record
  const ray = new THREE.Raycaster(), ptr = new THREE.Vector2();
  const pickCbs = new Set<(id: string) => void>();
  let down: [number, number] | null = null, interactive = true, hoverT = 0;
  const pick = (ev: PointerEvent): string | null => {
    ptr.set((ev.clientX / innerWidth) * 2 - 1, -(ev.clientY / innerHeight) * 2 + 1);
    ray.setFromCamera(ptr, camera);
    return ray.intersectObjects(world.pickables, false)[0]?.object.userData.animalId || null;
  };
  const onDown = (e: PointerEvent) => { down = [e.clientX, e.clientY]; };
  const onUp = (e: PointerEvent) => {
    if (!interactive || !down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 5) return;
    const id = pick(e);
    if (id) pickCbs.forEach((cb) => cb(id));
  };
  const onMove = (e: PointerEvent) => {
    const now = performance.now();
    if (!interactive || e.buttons || now - hoverT < 90) return;
    hoverT = now; canvas.style.cursor = pick(e) ? 'pointer' : 'grab';
  };
  canvas.addEventListener('pointerdown', onDown);
  canvas.addEventListener('pointerup', onUp);
  canvas.addEventListener('pointermove', onMove);

  function setInteractive(on: boolean) {
    interactive = on; controls.enabled = on;
    canvas.style.pointerEvents = on ? 'auto' : 'none';
    canvas.style.cursor = on ? 'grab' : 'default';
  }

  function resize() {
    renderer.setPixelRatio(quality.ratio);
    renderer.setSize(innerWidth, innerHeight, false);
    camera.aspect = innerWidth / innerHeight;
    // On portrait or narrow screens pull back so the whole board stays in view.
    camera.fov = camera.aspect < 1.2 ? 56 : 40;
    camera.setViewOffset(innerWidth, innerHeight, view.cx, view.cy, innerWidth, innerHeight);
    camera.updateProjectionMatrix();
  }
  const onResize = () => { if (quality.level === 0) quality.ratio = startRatio(); resize(); };
  addEventListener('resize', onResize);
  resize();

  // Build every shader and upload every texture before the first frame, so
  // nothing hitches the first time rain, flames or lamps come on.
  world.update(0.016, 0, camera);
  renderer.compile(scene, camera);

  // ---- projecting model positions to the screen, for the floating labels
  const v = new THREE.Vector3();
  function toScreen(x: number, y: number, z: number, out: ScreenPoint) {
    v.set(x, y, z).project(camera);
    out.ok = v.z < 1 && Math.abs(v.x) < 1.05 && Math.abs(v.y) < 1.05;
    out.x = (v.x * 0.5 + 0.5) * innerWidth; out.y = (-v.y * 0.5 + 0.5) * innerHeight;
    return out;
  }
  const anchor = (key: string, out: ScreenPoint) => {
    const p = world.anchors[key];
    return toScreen(p.x, p.y, p.z, out);
  };

  // ---- frame loop
  const frameCbs = new Set<(dt: number) => void>(), tickCbs = new Set<() => void>();
  let last = performance.now(), time = 0, frameNo = 0, slow = 0, raf = 0, rendering = true, dead = false;
  function frame(now: number) {
    if (dead) return;
    raf = requestAnimationFrame(frame);
    const raw = Math.max(0, (now - last) / 1000), dt = Math.min(raw, 0.05);
    last = now; time += dt;
    sim.step(dt);
    if (rendering) {
      directorUpdate(dt);
      controls.update(dt);
      world.update(dt, time, camera);
      // Shadows move slowly: redrawing them on alternate frames halves their cost.
      if (frameNo++ % quality.shadowEvery === 0) renderer.shadowMap.needsUpdate = true;
      renderer.render(scene, camera);
      if (raw < 0.25) tune(raw);
    }
    frameCbs.forEach((cb) => cb(dt));
    slow -= dt;
    if (slow <= 0) { slow = 0.25; tickCbs.forEach((cb) => cb()); }
  }
  raf = requestAnimationFrame(frame);

  const sub = <T,>(set: Set<T>, cb: T) => { set.add(cb); return () => { set.delete(cb); }; };

  return {
    sim, world, live, insets, fly, setInsets, setInteractive, toScreen, anchor,
    release() { dir.follow = null; },
    setRendering(on) { rendering = on; },
    onFrame: (cb) => sub(frameCbs, cb),
    onTick: (cb) => sub(tickCbs, cb),
    onPick: (cb) => sub(pickCbs, cb),
    dispose() {
      dead = true; cancelAnimationFrame(raf);
      live.disconnect(true);
      removeEventListener('resize', onResize);
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointerup', onUp);
      canvas.removeEventListener('pointermove', onMove);
      controls.removeEventListener('start', onControlStart);
      controls.dispose();
      scene.traverse((o) => {
        const m = o as THREE.Mesh;
        m.geometry?.dispose?.();
        const mats = Array.isArray(m.material) ? m.material : m.material ? [m.material] : [];
        for (const mt of mats) { (mt as THREE.MeshBasicMaterial).map?.dispose?.(); mt.dispose?.(); }
      });
      renderer.dispose();
    },
  };
}
