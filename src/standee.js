// The herd as cut-out standees: the cow picture on a card that always turns to
// face the viewer, the way printed animals stand on a real tabletop model.
// Each card is repainted in the animal's own coat (see coats.js).
import * as THREE from 'three';
import { glow, mesh, lerp, lerpAngle, damp } from './kit.js';
import { BELT, statusOf } from './coats.js';
import { createGait } from './gait.js';

const HEIGHT = 2.7;          // inches on the board, hoof to horn tip
const SINK = 0.27;           // share of her height that folds away when she lies down

let cardGeo = null;
function card() {
  if (cardGeo) return cardGeo;
  const g = new THREE.PlaneGeometry(1, 1);
  g.translate(0, 0.5, 0);                       // stands on its bottom edge
  const uv = g.attributes.uv, nm = g.attributes.normal;
  for (let i = 0; i < uv.count; i++) {
    uv.setY(i, 1 - uv.getY(i));                 // pixel rows run top to bottom
    nm.setXYZ(i, 0, 1, 0);                      // lit like the ground she stands on, whichever way the card turns
  }
  return (cardGeo = g);
}

export function buildStandee(def, look) {
  const art = look.art, big = def.kind === 'buffalo' ? 1.07 : 1;
  const h = HEIGHT * big, w = h * art.aspect;
  const g = new THREE.Group(), yaw = new THREE.Group(), tip = new THREE.Group();
  tip.rotation.order = 'YXZ';
  g.add(yaw); yaw.add(tip);

  const skin = look.refresh(def, true);
  const tex = new THREE.DataTexture(new Uint8Array(skin.buf.buffer), art.w, art.h, THREE.RGBAFormat);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.LinearFilter; tex.minFilter = THREE.LinearMipmapLinearFilter; tex.generateMipmaps = true; tex.anisotropy = 4;
  tex.needsUpdate = true;
  // Cut out by alpha with multisample coverage: clean edges, and no sorting trouble with the rain or the see-through roof.
  // The same picture doubles as a glow map: off for coats, on for the thermal view, which must not dim at night.
  const cowMat = new THREE.MeshLambertMaterial({ map: tex, emissiveMap: tex, emissive: 0x000000, alphaTest: 0.5, alphaToCoverage: true, side: THREE.DoubleSide });
  const rig = createGait(art, { sink: SINK, height: h });   // the walking puppet: legs, head, ears, jaw, tail (gait.js)
  const cow = new THREE.Mesh(rig.geometry, cowMat);
  cow.scale.set(w, h, 1);
  cow.receiveShadow = true;
  tip.add(cow);

  // The bell is the AI health belt's sensor: an LED on it shows her status.
  const bx = (art.bell.x - 0.5) * w, by = (1 - art.bell.y) * h;
  const ledMat = glow(BELT.healthy);
  tip.add(mesh(new THREE.CircleGeometry(0.055, 14), ledMat, bx, by - 0.05, 0.02, false));
  const haloMat = glow(BELT.healthy, { transparent: true, opacity: 0.3, depthWrite: false, blending: THREE.AdditiveBlending });
  tip.add(mesh(new THREE.CircleGeometry(0.2, 20), haloMat, bx, by - 0.05, 0.015, false));

  // A flat unseen body under the card throws her shadow, so it does not swing round with the camera.
  const caster = mesh(new THREE.SphereGeometry(1, 12, 6), new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false }), 0, 0.34, 0);
  caster.scale.set(0.82 * big, 0.2, 0.46 * big);
  caster.receiveShadow = false;
  g.add(caster);

  const ringMat = glow('#ffffff', { transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide });
  const ring = mesh(new THREE.RingGeometry(1.3, 1.52, 40), ringMat, 0, 0.06, 0, false);
  ring.rotation.x = -Math.PI / 2;
  g.add(ring);
  const pingMat = glow(BELT.healthy, { transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide });
  const ping = mesh(new THREE.RingGeometry(0.34, 0.41, 28), pingMat, 0, by, 0, false);
  ping.rotation.x = -Math.PI / 2;
  yaw.add(ping);

  const hit = mesh(new THREE.BoxGeometry(w * 0.82, h * 0.96, 1.1), new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false }), 0, h * 0.5, 0, false);
  hit.userData.animalId = def.id;
  hit.visible = false;                 // still raycast for clicks, never drawn
  yaw.add(hit);

  let phase = Math.random() * 6, lie = 0, down = 0, first = true, face = -1, flip = 1, version = skin.version, lit = 0;
  const tmp = new THREE.Color();

  function update(a, dt, time, selected, camera) {
    const real = dt || 0.016;          // facing the viewer keeps working while the farm is paused
    // ease toward the simulated position so avoidance nudges never show as jitter
    const far = Math.abs(a.x - g.position.x) + Math.abs(a.z - g.position.z) > 4;
    if (first || far) g.position.set(a.x, 0.1, a.z);
    else { const p = damp(14, dt); g.position.x = lerp(g.position.x, a.x, p); g.position.z = lerp(g.position.z, a.z, p); }
    caster.rotation.y = first ? -a.heading : lerpAngle(caster.rotation.y, -a.heading, damp(7, dt));

    // turn the card to the viewer, leaning it back a little when seen from above
    const dx = camera.position.x - g.position.x, dz = camera.position.z - g.position.z;
    yaw.rotation.y = Math.atan2(dx, dz);
    const lean = Math.min(0.5, Math.max(0, Math.atan2(camera.position.y - 1.3, Math.hypot(dx, dz)) * 0.6));
    // The picture looks to its left. Mirror the card when she is heading to the right of the screen.
    const e = camera.matrixWorld.elements, side = Math.cos(a.heading) * e[0] + Math.sin(a.heading) * e[2];
    if (side > 0.3) face = 1; else if (side < -0.3) face = -1;
    flip = first ? -face : lerp(flip, -face, damp(9, real));
    const sx = Math.abs(flip) < 0.06 ? (flip < 0 ? -0.06 : 0.06) : flip, dirn = sx < 0 ? -1 : 1;
    tip.scale.x = sx;
    first = false;

    // Legs, head, ears, jaw and tail are posed by the puppet rig, from what she is
    // doing and from her belt data; it also lies her down front end first.
    const pose = rig.update(a, dt, time, g, selected);
    lie = pose.lie;
    tip.position.y = pose.y * h;
    tip.rotation.set(-lean, 0, pose.roll * dirn);
    const breath = Math.sin(time * 1.8 + a.idx) * 0.012 * (1 + a.stress * 3);
    cow.scale.y = h * (1 + breath);

    const s = look.refresh(a);
    if (s.version !== version) { version = s.version; tex.needsUpdate = true; }
    lit = lerp(lit, look.lens === 'thermal' ? 1 : 0, damp(8, real));
    cowMat.emissive.setScalar(0.85 * lit); cowMat.color.setScalar(1 - 0.9 * lit);

    const key = statusOf(a);
    const blink = key === 'healthy' ? 0.65 + 0.35 * Math.sin(time * 2 + a.idx) : Math.sin(time * 10) > 0 ? 1 : 0.15;
    ledMat.color.set(BELT[key]).multiplyScalar(blink);
    haloMat.color.set(BELT[key]); haloMat.opacity = (key === 'healthy' ? 0.16 : 0.5) * blink;
    // Belt radio ping: a ring that leaves the bell every few seconds.
    const t = (time * 0.45 + a.idx * 0.2) % 1;
    ping.scale.setScalar(1 + t * 1.5);
    pingMat.opacity = (1 - t) * 0.42;
    pingMat.color.set(BELT[key]);
    ping.position.set(bx * dirn, by - lie * h * SINK + t * 0.5, 0.05);
    const want = key !== 'healthy' ? 0.55 + 0.35 * Math.sin(time * 6) : selected ? 0.85 : 0;
    ringMat.opacity = lerp(ringMat.opacity, want, damp(12, real));
    ring.visible = ringMat.opacity > 0.01;
    ringMat.color.copy(tmp.set(key !== 'healthy' ? BELT[key] : '#ffffff'));
  }
  return { group: g, hit, update, id: def.id };
}
