// Dairy Sense simulation engine. Pure logic, no rendering: energy, water,
// climate, herd behaviour, belt vitals + AI, waste -> biogas -> compost -> fodder.
// Timescales are compressed so a full farm day plays in about two minutes.
import { PADDOCK, GATE, PT, feedSlot, waterSlot, restSpot, route, clampToZone } from './layout.js';

export const HOURS_PER_SEC = 0.2; // at 1x speed, one farm hour takes 5 seconds

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const TAU = Math.PI * 2;

function mulberry32(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Temperature-Humidity Index, the standard dairy heat-stress measure.
export const thi = (T, RH) => (1.8 * T + 32) - (0.55 - 0.0055 * RH) * (1.8 * T - 26);
export function thiBand(v) {
  if (v < 72) return { key: 'good', label: 'Comfortable' };
  if (v < 79) return { key: 'warn', label: 'Mild stress' };
  if (v < 89) return { key: 'serious', label: 'Heat stress' };
  return { key: 'crit', label: 'Danger' };
}

const HERD = [
  { id: 'DS-01', name: 'Gauri', kind: 'cow', breed: 'HF cross', coat: 'holstein', baseTemp: 38.6, baseHr: 66, milk: 7.0, heatTol: 1.15 },
  { id: 'DS-02', name: 'Nandini', kind: 'cow', breed: 'Sahiwal', coat: 'sahiwal', baseTemp: 38.5, baseHr: 64, milk: 5.5, heatTol: 0.7 },
  { id: 'DS-03', name: 'Lakshmi', kind: 'cow', breed: 'Gir', coat: 'gir', baseTemp: 38.5, baseHr: 62, milk: 5.0, heatTol: 0.7 },
  { id: 'DS-04', name: 'Kajri', kind: 'buffalo', breed: 'Murrah', coat: 'murrah', baseTemp: 38.2, baseHr: 56, milk: 4.6, heatTol: 1.0 },
  { id: 'DS-05', name: 'Bhoori', kind: 'buffalo', breed: 'Murrah', coat: 'murrah2', baseTemp: 38.2, baseHr: 58, milk: 4.2, heatTol: 1.0 },
];

export const ACT = { walk: 75, graze: 35, eat: 25, drink: 20, idle: 12, rest: 4 };
export const RUM = { walk: 8, graze: 6, eat: 4, drink: 6, idle: 26, rest: 40 };

// One step of the health-belt physiology model: how an animal's body
// temperature, heart rate, activity and rumination respond to what she is
// doing, to heat (the THI around her) and to illness. Shared by the farm
// engine and by the Cow Flow page, so both always show the same numbers.
export function beltStep(a, h, localThi, hour, noise) {
  const stressT = clamp((localThi - 77) / 12) * a.heatTol;
  a.stress += (stressT - a.stress) * Math.min(1, h * 1.3);
  a.stressAcc += a.stress * h;
  if (a.cond === 'fever') a.sick = Math.min(1, a.sick + h * 0.9);
  else a.sick = Math.max(0, a.sick - h * 0.5);
  if (a.cond === 'recovering' && a.sick <= 0) a.cond = 'healthy';
  if (a.cond === 'estrus') { a.estrus -= h; if (a.estrus <= 0) a.cond = 'healthy'; }
  const est = a.cond === 'estrus';
  const actT = ACT[a.state] * (1 - 0.55 * a.sick) * (1 - 0.25 * a.stress) * (est ? 1.9 : 1);
  const rumT = RUM[a.state] * (1 - 0.6 * a.sick) * (1 - 0.4 * a.stress) * (est ? 0.6 : 1);
  a.act += (actT - a.act) * Math.min(1, h * 3);
  a.rum += (rumT - a.rum) * Math.min(1, h * 2);
  a.temp = a.baseTemp + 0.15 * Math.sin(TAU * (hour - 10) / 24) + 0.9 * a.stress + 1.7 * a.sick + noise(0.04);
  a.hr = a.baseHr + 0.16 * a.act + 16 * a.stress + 14 * a.sick + (est ? 6 : 0) + noise(1.5);
}

export function createSim(seed = 11) {
  const rnd = mulberry32(seed);
  const noise = (amp) => (rnd() - 0.5) * 2 * amp;

  const s = {
    t: 8, dayOffset: 0, hour: 8, day: 1, sun: 0, isNight: false,
    speed: 1, paused: false,
    weather: 'sunny', heatwave: false,
    climate: { ambT: 24, ambRH: 60, shedT: 25, shedRH: 60, thi: 72, rawThi: 72, cooling: false },
    energy: {
      panelPeak: 800, batCap: 3000, batWh: 1900, solarW: 0, loadW: 0, genW: 0, gridW: 0,
      lights: false, lightMode: 'auto', chiller: 0,
      tot: { solar: 0, gen: 0, grid: 0, load: 0 },
    },
    water: {
      storage: 560, storageCap: 1000, collection: 260, collectionCap: 800, trough: 95, troughCap: 120,
      pump: false, pumpMode: 'auto', pumpManual: false, washing: 0, lastWash: 7, irrigating: false,
      topup: false, troughFill: false, raining: false, fogging: false,
      tot: { recycled: 0, fresh: 0, rain: 0 },
    },
    biogas: {
      inlet: 6, substrate: 62, gas: 1.3, gasCap: 3, feeding: false, stove: false, gen: false,
      compost: 7, tot: { gas: 0, dung: 0, collected: 0, lpg: 0 },
    },
    plot: { biomass: 0.5, moisture: 0.6, soil: 0.45, applying: 0, harvests: 0 },
    feed: { trough: 34, cap: 50, store: 70, filling: 0, tot: { home: 0, bought: 0 } },
    milk: { today: 0, total: 0, milking: false, last: 0 },
    gate: { flash: 0, inShed: 0, crossings: 0, last: null },
    animals: [], pats: [], patSeq: 0,
    rover: { x: PT.dock.x, z: PT.dock.z, heading: 0, state: 'dock', load: 0, path: [], target: null, timer: 0, moving: false },
    alerts: [], alertSeq: 0,
    kpi: { water: 0, renewable: 100, waste: 100, welfare: 100, hygiene: 100, score: 0 },
    live: { on: false, temp: null, hum: null },
    evalT: 0,
  };

  // ---------------------------------------------------------------- alerts
  function raise(key, level, title, body, extra = {}) {
    if (s.alerts.some((a) => a.key === key && a.active)) return;
    s.alerts.unshift({ id: ++s.alertSeq, key, level, title, body, t: s.t, active: level !== 'info', ...extra });
    if (s.alerts.length > 40) s.alerts.length = 40;
  }
  function clear(key) {
    for (const a of s.alerts) if (a.key === key && a.active) a.active = false;
  }
  const condition = (key, on, level, title, body) => (on ? raise(key, level, title, body) : clear(key));

  // ------------------------------------------------------------------ herd
  HERD.forEach((def, i) => {
    const p = { x: PADDOCK.x0 + 3 + i * 2.6, z: 2 + (i % 2) * 3.5 };
    s.animals.push({
      ...def, idx: i, x: p.x, z: p.z, heading: rnd() * TAU, state: 'idle', timer: rnd() * 0.3,
      path: [], next: null, mode: 'day', waterSlot: -1,
      thirst: 0.2 + rnd() * 0.3, hunger: 0.2 + rnd() * 0.3, dungT: 0.6 + rnd() * 2.2,
      cond: 'healthy', sick: 0, estrus: 0, stress: 0, stressAcc: 0,
      act: 20, rum: 20, temp: def.baseTemp, hr: def.baseHr,
      hist: [], base: { temp: def.baseTemp, actDay: 34, actNight: 8, actHi: 60, rumDay: 14, rumNight: 34 },
      ai: { label: 'Healthy', key: 'healthy', score: 0, health: 100, advice: 'All vitals within normal range.', flagged: false, streak: 0, calm: 0 },
      lastMilk: 0,
    });
  });

  const inShed = (o) => o.z < GATE.z;
  const paddockPoint = () => ({
    x: PADDOCK.x0 + 1.6 + rnd() * (PADDOCK.x1 - PADDOCK.x0 - 4.2),
    z: GATE.z + 1.8 + rnd() * (PADDOCK.z1 - GATE.z - 3.6),
  });

  const nearPoint = (a) => {
    if (inShed(a)) return paddockPoint();
    return clampToZone({ x: a.x + (rnd() - 0.5) * 9, z: Math.max(GATE.z + 1.8, a.z + (rnd() - 0.5) * 9) });
  };
  const spaced = (a, gen) => {
    let p = gen();
    for (let i = 0; i < 12; i++) {
      const clash = s.animals.some((b) => {
        if (b === a) return false;
        const e = b.path.length ? b.path[b.path.length - 1] : b;
        return Math.hypot(e.x - p.x, e.z - p.z) < 2.8;
      });
      if (!clash) break;
      p = gen();
    }
    return p;
  };
  function go(a, to, state, dur, face) {
    a.path = route(a, to); a.state = 'walk'; a.next = { state, dur, face };
  }
  function freeWaterSlot(a) {
    for (let i = 0; i < 2; i++) if (!s.animals.some((b) => b !== a && b.waterSlot === i)) return i;
    return -1;
  }

  function decide(a) {
    a.waterSlot = -1;
    const h = s.hour;
    if (a.thirst > (a.mode === 'night' ? 0.95 : 0.55) && a.cond !== 'estrus') {
      const slot = freeWaterSlot(a);
      if (slot >= 0) { a.waterSlot = slot; return go(a, waterSlot(slot), 'drink', 0.3, -Math.PI / 2); }
    }
    if (a.mode === 'night') {
      const until = h >= 12 ? 24 - h + 5.5 : 5.5 - h;
      return go(a, restSpot(a.idx), 'rest', Math.max(0.3, until + rnd() * 0.25), Math.PI / 2);
    }
    if (a.mode === 'milk') {
      const end = h < 12 ? 7 : 18;
      return go(a, feedSlot(a.idx), 'eat', Math.max(0.2, end - h), -Math.PI / 2);
    }
    if (a.cond === 'estrus') return go(a, inShed(a) && rnd() < 0.3 ? restSpot(a.idx) : spaced(a, paddockPoint), 'idle', 0.1 + rnd() * 0.15);
    if (a.sick > 0.5) { a.state = 'rest'; a.timer = 1 + rnd(); return; }
    if (a.hunger > 0.6 && s.feed.trough > 2) return go(a, feedSlot(a.idx), 'eat', 0.55, -Math.PI / 2);
    const r = rnd();
    if (r < 0.68) return go(a, spaced(a, () => nearPoint(a)), 'graze', 1.2 + rnd() * 1.3);
    if (r < 0.9) return go(a, spaced(a, () => nearPoint(a)), 'rest', 0.8 + rnd() * 0.9);
    a.state = 'idle'; a.timer = 0.2 + rnd() * 0.4;
  }

  function arrive(a) {
    const n = a.next || { state: 'idle', dur: 0.2 };
    a.state = n.state; a.timer = n.dur; a.next = null;
    if (n.face !== undefined) a.heading = n.face;
    if (a.state === 'drink') {
      const got = Math.min(22, s.water.trough);
      s.water.trough -= got;
      if (got > 3) a.thirst = 0.05;
    } else if (a.state === 'eat') {
      const got = Math.min(a.mode === 'milk' ? 4 : 2.5, s.feed.trough);
      s.feed.trough -= got;
      a.hunger = Math.max(0, a.hunger - got * 0.26);
    }
  }

  function moveAlong(o, dist) {
    let moved = false;
    while (dist > 0 && o.path.length) {
      const p = o.path[0], dx = p.x - o.x, dz = p.z - o.z, d = Math.hypot(dx, dz);
      if (d <= dist) { o.x = p.x; o.z = p.z; o.path.shift(); dist -= d; }
      else { o.x += (dx / d) * dist; o.z += (dz / d) * dist; o.heading = Math.atan2(dz, dx); dist = 0; }
      moved = true;
    }
    return moved;
  }

  function tickAnimal(a, h) {
    const mode = s.hour >= 20.5 || s.hour < 5.5 ? 'night' : (s.hour >= 5.75 && s.hour < 7) || (s.hour >= 16.75 && s.hour < 18) ? 'milk' : 'day';
    if (mode !== a.mode) {
      a.mode = mode;
      if (a.state === 'walk') { if (a.next) a.next.dur = 0; } else a.timer = 0;
    }
    a.thirst = clamp(a.thirst + h * 0.135 * (a.state === 'rest' ? 0.25 : 1) * (1 + a.stress * 0.8), 0, 1.5);
    a.hunger = clamp(a.hunger + h * 0.11, 0, 1.5);
    if (a.state === 'graze') a.hunger = Math.max(0, a.hunger - h * 0.14);

    a.dungT -= h;
    if (a.dungT <= 0 && a.state !== 'rest') {
      a.dungT = 2.3 + rnd() * 1.6;
      const p = clampToZone({ x: a.x - Math.cos(a.heading) * 1.3, z: a.z - Math.sin(a.heading) * 1.3 });
      if (s.pats.length < 16) s.pats.push({ id: ++s.patSeq, x: p.x, z: p.z, kg: 2.2, t: s.t });
      else s.pats[Math.floor(rnd() * s.pats.length)].kg += 2.2;
      s.biogas.tot.dung += 2.2;
    }

    if (a.state === 'walk') {
      const z0 = a.z;
      const speed = 8.5 * (1 - 0.4 * a.sick) * (a.cond === 'estrus' ? 1.35 : 1);
      moveAlong(a, speed * h);
      // Step sideways around herd-mates. A head-on push would deadlock two
      // walkers; a sideways one never blocks progress toward the target.
      const end = a.path[a.path.length - 1];
      if (end && Math.hypot(end.x - a.x, end.z - a.z) > 1.4) {
        const fx = Math.cos(a.heading), fz = Math.sin(a.heading);
        for (const o of s.animals) {
          if (o === a) continue;
          const dx = o.x - a.x, dz = o.z - a.z, d = Math.hypot(dx, dz);
          if (d < 1.7 && dx * fx + dz * fz > 0) {
            const side = dx * -fz + dz * fx >= 0 ? -1 : 1;
            const push = (1.7 - d) * Math.min(0.3, h * 10);
            a.x += -fz * side * push; a.z += fx * side * push;
          }
        }
        clampToZone(a);
      }
      if ((z0 < GATE.z) !== (a.z < GATE.z)) {
        s.gate.flash = 1; s.gate.crossings++;
        s.gate.last = { name: a.name, dir: a.z < GATE.z ? 'in' : 'out', t: s.t };
      }
      if (!a.path.length) arrive(a);
    } else {
      a.timer -= h;
      if (a.timer <= 0) decide(a);
    }

    // ---- belt vitals
    const c = s.climate;
    const local = inShed(a) ? c.thi : thi(c.ambT + 2.2 * s.sun * cloudFactor(), c.ambRH);
    beltStep(a, h, local, s.hour, noise);
  }

  // -------------------------------------------------- belt AI (explainable)
  const mean = (arr, f) => (arr.length ? arr.reduce((t, v) => t + f(v), 0) / arr.length : 0);

  function evaluate(a) {
    a.hist.push({ t: s.t, temp: a.temp, hr: a.hr, act: a.act, rum: a.rum });
    if (a.hist.length > 96) a.hist.shift();
    const last4 = a.hist.slice(-4), last12 = a.hist.slice(-12), last24 = a.hist.slice(-24);
    const night = s.hour >= 21.5 || s.hour < 6.5;
    const herdHeat = clamp((s.climate.thi - 77) / 12);
    const dT = mean(last4, (v) => v.temp) - a.base.temp - 0.8 * herdHeat;
    const actR = mean(last12, (v) => v.act) / Math.max(4, night ? a.base.actNight : a.base.actDay);
    const rumR = mean(last24, (v) => v.rum) / Math.max(6, night ? a.base.rumNight : a.base.rumDay);
    const fever = clamp((dT - 0.6) / 0.8) * 0.7 + clamp((0.85 - rumR) / 0.4) * 0.2 + clamp((0.85 - actR) / 0.4) * 0.1 * clamp(dT / 0.5);
    const heat = herdHeat * clamp((mean(last4, (v) => v.temp) - a.base.temp) / 0.5);
    const actX = mean(a.hist.slice(-8), (v) => v.act) / Math.max(45, a.base.actHi);
    const estrus = dT < 0.6 ? clamp((actX - 1.12) / 0.4) : 0;
    const ai = a.ai;
    let key = 'healthy', score = Math.max(fever, heat, estrus);
    if (score >= 0.5) key = fever >= heat && fever >= estrus ? 'fever' : heat >= estrus ? 'heat' : 'estrus';
    if (key !== 'healthy') { ai.streak++; ai.calm = 0; } else { ai.calm++; ai.streak = 0; }
    if (ai.streak >= 2) { ai.flagged = true; ai.key = key; ai.score = score; }
    if (ai.calm >= 2) { ai.flagged = false; ai.key = 'healthy'; ai.score = score; }
    ai.dT = dT; ai.actR = actR; ai.rumR = rumR; ai.actX = actX;
    ai.health = Math.round(clamp(100 - 48 * fever - 26 * heat - 6 * estrus - 10 * clamp(a.thirst - 1), 0, 100));
    const k = ai.flagged ? ai.key : 'healthy';
    ai.label = { healthy: a.cond === 'recovering' ? 'Recovering' : 'Healthy', fever: 'Possible fever / infection', heat: 'Heat stress', estrus: 'In heat (estrus)' }[k];
    ai.advice = {
      healthy: 'All vitals within this animal\'s normal range.',
      fever: `Body temperature is ${Math.max(0, dT).toFixed(1)} °C above her baseline and rumination has dropped. Isolate, check the udder and call the vet.`,
      heat: 'Body temperature rising with the shed THI. Move to shade, run fans and foggers, give cool water.',
      estrus: `Restless: activity is ${(actX * 100).toFixed(0)} % of her busiest normal period, with less rumination. Best breeding window is the next 12-18 hours.`,
    }[k];
    const akey = `cow:${a.id}`;
    if (ai.flagged) {
      raise(akey, k === 'fever' ? 'crit' : 'warn', `${a.name}: ${ai.label}`, ai.advice, { animalId: a.id, kind: k });
    } else clear(akey);
  }

  // ----------------------------------------------------------------- rover
  function nearestPat(o) {
    let best = null, bd = 1e9;
    for (const p of s.pats) {
      const d = Math.hypot(p.x - o.x, p.z - o.z) + ((p.z < GATE.z) !== (o.z < GATE.z) ? 8 : 0);
      if (d < bd) { bd = d; best = p; }
    }
    return best;
  }
  function tickRover(h) {
    const r = s.rover;
    r.moving = false;
    if (r.state === 'dock') {
      const oldest = s.pats.reduce((m, p) => Math.max(m, s.t - p.t), 0);
      if (s.pats.length >= 2 || oldest > 1) {
        r.target = nearestPat(r); r.path = route(r, r.target); r.state = 'toPat';
      }
    } else if (r.state === 'toPat' || r.state === 'return') {
      r.moving = moveAlong(r, 24 * h);
      if (!r.path.length) { r.timer = 0.05; r.state = r.state === 'toPat' ? 'collect' : 'dump'; }
    } else if (r.state === 'collect') {
      r.timer -= h;
      if (r.timer <= 0) {
        const i = s.pats.indexOf(r.target);
        if (i >= 0) { r.load += s.pats[i].kg; s.pats.splice(i, 1); }
        r.target = r.load < 11 ? nearestPat(r) : null;
        if (r.target) { r.path = route(r, r.target); r.state = 'toPat'; }
        else { r.path = route(r, PT.dock); r.state = 'return'; }
      }
    } else if (r.state === 'dump') {
      r.heading = 0;
      r.timer -= h;
      if (r.timer <= 0) { s.biogas.inlet += r.load; s.biogas.tot.collected += r.load; r.load = 0; r.state = 'dock'; }
    }
  }

  // ------------------------------------------------------------- the tick
  const cloudFactor = () => (s.weather === 'sunny' ? 1 : s.weather === 'cloudy' ? 0.36 : 0.14);

  function tick(h) {
    const prev = s.hour;
    s.t += h;
    s.hour = s.t % 24;
    s.day = Math.floor(s.t / 24) + 1 - s.dayOffset;
    const crossed = (x) => (prev <= s.hour ? prev < x && s.hour >= x : x > prev || x <= s.hour);
    if (s.hour < prev) s.milk.today = 0;
    s.sun = s.hour > 6 && s.hour < 18 ? Math.sin(Math.PI * (s.hour - 6) / 12) : 0;
    s.isNight = s.sun < 0.06;
    const rain = s.weather === 'rain', cf = cloudFactor();

    // ---- climate
    const c = s.climate;
    const amb = 23.5 + 4.5 * Math.sin(TAU * (s.hour - 9) / 24) + (s.heatwave ? 8 : 0) + (rain ? -3.5 : s.weather === 'cloudy' ? -1.2 : 0);
    const rh = clamp(62 - 2 * (amb - 23.5) + (rain ? 26 : s.weather === 'cloudy' ? 8 : 0), 22, 97);
    c.ambT += (amb - c.ambT) * Math.min(1, h * 1.6);
    c.ambRH += (rh - c.ambRH) * Math.min(1, h * 1.6);
    if (s.live.on && s.live.temp != null) {
      // A real DHT11 on the physical model drives the twin's shed climate.
      c.shedT = s.live.temp; c.shedRH = s.live.hum ?? c.shedRH;
      c.rawThi = thi(c.shedT, c.shedRH);
    } else {
      c.rawThi = thi(c.ambT + 1, c.ambRH);
      c.shedT += (c.ambT + 1 - (c.cooling ? 4.5 : 0) - c.shedT) * Math.min(1, h * 2.5);
      c.shedRH += (clamp(c.ambRH + (c.cooling ? 6 : 0), 20, 98) - c.shedRH) * Math.min(1, h * 2.5);
    }
    if (!c.cooling && c.rawThi >= 79) c.cooling = true;
    else if (c.cooling && c.rawThi <= 76.5) c.cooling = false;
    c.thi = thi(c.shedT, c.shedRH);

    // ---- daily routine
    s.milk.milking = (s.hour >= 6 && s.hour < 7) || (s.hour >= 17 && s.hour < 18);
    if (crossed(7) || crossed(18)) {
      let total = 0;
      for (const a of s.animals) {
        const y = a.milk * (1 - 0.3 * clamp(a.stressAcc / 5)) * (1 - 0.45 * a.sick) * (0.96 + rnd() * 0.08);
        a.lastMilk = y; a.stressAcc = 0; total += y;
      }
      s.milk.today += total; s.milk.total += total; s.milk.last = total;
      s.energy.chiller = 3;
      s.water.washing = 1;
      raise(`milk:${Math.floor(s.t)}`, 'info', `${s.hour < 12 ? 'Morning' : 'Evening'} milking done`, `${total.toFixed(1)} L collected and sent to the chiller. Shed wash started.`);
    }
    if (crossed(5.7) || crossed(11) || crossed(16.6)) {
      const need = s.feed.cap - s.feed.trough, home = Math.min(need, s.feed.store);
      s.feed.store -= home; s.feed.tot.home += home; s.feed.tot.bought += need - home;
      s.feed.trough = s.feed.cap; s.feed.filling = 0.4;
    }
    s.feed.filling = Math.max(0, s.feed.filling - h);

    // ---- biogas plant
    const b = s.biogas;
    b.feeding = b.inlet > 0.2;
    if (b.feeding) { const q = Math.min(b.inlet, 7 * h); b.inlet -= q; b.substrate += q; }
    const dig = (b.substrate / 16) * h;
    b.substrate -= dig;
    b.gas = Math.min(b.gasCap, b.gas + dig * 0.042);
    b.tot.gas += dig * 0.042;
    b.compost += dig * 0.28;
    const cookTime = (s.hour >= 7 && s.hour < 8.2) || (s.hour >= 12.4 && s.hour < 13.4) || (s.hour >= 19 && s.hour < 20.2);
    b.stove = cookTime && b.gas > 0.15;
    if (b.stove) { b.gas -= 0.4 * h; b.tot.lpg += 0.4 * h * 0.43; }
    const e = s.energy, soc = e.batWh / e.batCap;
    if (!b.gen && ((b.gas > b.gasCap * 0.92) || (soc < 0.3 && b.gas > 0.5))) b.gen = true;
    else if (b.gen && (b.gas < 0.2 || (soc > 0.6 && b.gas < b.gasCap * 0.7) || soc > 0.99)) b.gen = false;
    if (b.gen) b.gas = Math.max(0, b.gas - 0.55 * h);

    // ---- fodder plot and compost
    const p = s.plot;
    if (crossed(8.5) && b.compost >= 12) { p.soil = clamp(p.soil + b.compost * 0.006); b.compost = 0; p.applying = 0.6; }
    p.applying = Math.max(0, p.applying - h);
    p.soil = Math.max(0.15, p.soil - 0.004 * h);
    p.moisture = clamp(p.moisture - (0.02 + 0.04 * s.sun * cf) * h + (rain ? 0.5 * h : 0));
    const w = s.water;
    const irrigWindow = (s.hour >= 6.5 && s.hour < 9.5) || (s.hour >= 16 && s.hour < 18.5);
    if (!w.irrigating && irrigWindow && p.moisture < 0.45 && !rain && w.storage > 80) w.irrigating = true;
    else if (w.irrigating && (p.moisture > 0.92 || w.storage < 30 || rain)) w.irrigating = false;
    p.biomass += 0.04 * s.sun * Math.max(cf, 0.45) * (0.3 + 0.7 * p.moisture) * (0.55 + 0.9 * p.soil) * h;
    if (p.biomass >= 1) {
      p.biomass = 0.18; p.harvests++; s.feed.store += 110;
      raise(`harvest:${p.harvests}`, 'info', 'Fodder harvested', '110 kg of green fodder grown on compost moved to the feed store.');
    }

    // ---- water loop
    w.raining = rain;
    if (rain) { const q = Math.min(260 * h, w.collectionCap - w.collection); w.collection += q; w.tot.rain += q; }
    let draw = 0;
    if (w.washing > 0) { const q = Math.min(150 * h, w.storage); w.storage -= q; w.collection = Math.min(w.collectionCap, w.collection + q * 0.85); w.washing -= h; w.lastWash = s.t; }
    w.fogging = c.cooling && w.storage > 10;
    if (w.fogging) draw += 25 * h;
    if (w.irrigating) { draw += 110 * h; p.moisture = clamp(p.moisture + 0.5 * h); }
    w.storage = Math.max(0, w.storage - draw);
    if (w.pumpMode === 'auto') {
      if (!w.pump && w.collection > 110 && w.storage < w.storageCap * 0.93) w.pump = true;
      else if (w.pump && (w.collection < 25 || w.storage >= w.storageCap * 0.98)) w.pump = false;
    } else {
      w.pump = w.pumpManual;
      if (w.pump && (w.collection < 4 || w.storage >= w.storageCap)) {
        w.pump = w.pumpManual = false;
        raise(`dry:${Math.floor(s.t * 4)}`, 'info', 'Pump stopped automatically', w.collection < 4 ? 'Collection tank is empty. Dry-run protection switched the pump off.' : 'Storage tank is full.');
      }
    }
    if (w.pump) { const q = Math.min(140 * h, w.collection, w.storageCap - w.storage); w.collection -= q; w.storage += q; w.tot.recycled += q; }
    if (!w.topup && w.storage < 110 && w.collection < 110) w.topup = true;
    else if (w.topup && w.storage > 330) w.topup = false;
    if (w.topup) { w.storage += 300 * h; w.tot.fresh += 300 * h; }
    if (!w.troughFill && w.trough < w.troughCap * 0.5) w.troughFill = true;
    else if (w.troughFill && w.trough >= w.troughCap * 0.97) w.troughFill = false;
    if (w.troughFill) { w.trough += 200 * h; w.tot.fresh += 200 * h; }

    // ---- herd, rover, gate
    for (const a of s.animals) tickAnimal(a, h);
    // animals standing or lying in the paddock ease apart instead of overlapping
    for (let i = 0; i < s.animals.length; i++) for (let j = i + 1; j < s.animals.length; j++) {
      const a = s.animals[i], o = s.animals[j];
      if (a.state === 'walk' || o.state === 'walk' || a.z < GATE.z + 1 || o.z < GATE.z + 1) continue;
      const dx = a.x - o.x, dz = a.z - o.z, d = Math.hypot(dx, dz) || 0.01;
      if (d < 2.4) {
        const push = Math.min(2.4 - d, 3 * h) / 2, ux = d > 0.02 ? dx / d : 1, uz = d > 0.02 ? dz / d : 0;
        a.x += ux * push; a.z += uz * push; o.x -= ux * push; o.z -= uz * push;
        clampToZone(a); clampToZone(o);
      }
    }
    tickRover(h);
    s.gate.flash = Math.max(0, s.gate.flash - h * 4);
    s.gate.inShed = s.animals.filter(inShed).length;

    // ---- energy balance
    e.lights = e.lightMode === 'on' || (e.lightMode === 'auto' && s.isNight);
    e.chiller = Math.max(0, e.chiller - h);
    e.solarW = e.panelPeak * Math.pow(s.sun, 1.15) * cf;
    e.genW = b.gen ? 800 : 0;
    e.loadW = 15 + (e.lights ? 120 : 0) + (w.pump ? 370 : 0) + (c.cooling ? 160 : 0) + (s.rover.moving ? 30 : 0) + (e.chiller > 0 ? 250 : 0);
    e.batWh += (e.solarW + e.genW - e.loadW) * h;
    e.gridW = 0;
    if (e.batWh > e.batCap) e.batWh = e.batCap;
    if (e.batWh < 0) { e.tot.grid += -e.batWh; e.gridW = -e.batWh / h; e.batWh = 0; }
    e.tot.solar += e.solarW * h; e.tot.gen += e.genW * h; e.tot.load += e.loadW * h;

    // ---- belt AI runs every 15 farm minutes
    s.evalT -= h;
    if (s.evalT <= 0) { s.evalT += 0.25; for (const a of s.animals) evaluate(a); }

    // ---- farm level alerts and score
    const soc2 = e.batWh / e.batCap;
    condition('bat', soc2 < 0.2, 'warn', 'Battery low', 'Battery under 20 %. Biogas generator will back up the load.');
    condition('grid', e.gridW > 0, 'warn', 'Running on grid power', 'Solar, battery and biogas cannot cover the load right now.');
    condition('thi', c.thi >= 79, 'warn', 'Shed heat stress', `THI in the shed is ${c.thi.toFixed(0)}. Fans and foggers are running.`);
    condition('trough', w.trough < 6, 'crit', 'Drinking trough empty', 'Animals cannot drink. Check the fresh water line.');
    condition('dung', s.pats.length >= 10, 'warn', 'Dung build-up', 'More than 10 dung pats waiting. Check the collector rover.');
    const k = s.kpi;
    const pr = s.prior || { recycled: 0, fresh: 0 }, rec = w.tot.recycled + pr.recycled, fr = w.tot.fresh + pr.fresh;
    k.water = rec + fr > 1 ? (100 * rec) / (rec + fr) : 0;
    k.renewable = e.tot.load > 1 ? 100 * (1 - e.tot.grid / e.tot.load) : 100;
    // share of dung already collected; the +40 kg keeps one fresh pat from tanking a new session
    k.waste = 100 * clamp(1 - s.pats.reduce((sum, p) => sum + p.kg, 0) / (b.tot.dung + 40));
    k.welfare = mean(s.animals, (a) => a.ai.health);
    k.hygiene = clamp(100 - 5 * s.pats.length - 2.5 * Math.max(0, s.t - w.lastWash - 13), 0, 100);
    k.score = Math.round(0.25 * Math.min(100, k.water * 2) + 0.25 * k.renewable + 0.2 * k.waste + 0.2 * k.welfare + 0.1 * k.hygiene);
  }

  // Run one silent farm day so every belt has a learned baseline and a full
  // 24 h history before the audience sees anything.
  for (let i = 0; i < 24 / 0.04; i++) tick(0.04);
  for (const a of s.animals) {
    const day = a.hist.filter((v) => { const hr = v.t % 24; return hr >= 6.5 && hr < 21.5; });
    const night = a.hist.filter((v) => !day.includes(v));
    let actHi = 0;
    for (let i = 8; i <= a.hist.length; i++) actHi = Math.max(actHi, mean(a.hist.slice(i - 8, i), (v) => v.act));
    a.base = {
      actHi, temp: mean(a.hist, (v) => v.temp),
      actDay: mean(day, (v) => v.act), actNight: mean(night, (v) => v.act),
      rumDay: mean(day, (v) => v.rum), rumNight: mean(night, (v) => v.rum),
    };
    a.stressAcc = 0;
  }
  s.dayOffset = 1; s.day = 1;
  s.alerts.length = 0;
  s.gate.crossings = 0;
  s.milk.total = s.milk.today = 0;
  Object.assign(s.energy.tot, { solar: 0, gen: 0, grid: 0, load: 0 });
  const prior = { recycled: s.water.tot.recycled, fresh: s.water.tot.fresh };
  Object.assign(s.water.tot, { recycled: 0, fresh: 0, rain: 0 });
  Object.assign(s.biogas.tot, { gas: 0, dung: 0, collected: 0, lpg: 0 });
  Object.assign(s.feed.tot, { home: 0, bought: 0 });

  s.prior = prior;

  // --------------------------------------------------------------- commands
  // A time skip is played as a short eased time-lapse instead of a hard cut.
  s.warp = 0;
  s.warpTo = (hour) => { s.warp = ((hour - s.hour) % 24 + 24) % 24 || 24; };
  s.warpBy = (hours) => { s.warp += hours; };
  s.step = (dtReal) => {
    const real = Math.min(dtReal, 0.1);
    let dt = s.paused ? 0 : real * HOURS_PER_SEC * s.speed;
    if (s.warp > 0) { const jump = Math.min(s.warp, Math.max(4, s.warp * 2.2) * real); s.warp -= jump; dt += jump; }
    while (dt > 1e-6) { const h = Math.min(dt, 0.04); tick(h); dt -= h; }
  };
  s.advance = (hours) => { for (let left = hours; left > 1e-6; left -= 0.04) tick(Math.min(0.04, left)); };
  s.jumpTo = (hour) => s.advance(((hour - s.hour) % 24 + 24) % 24 || 24);
  s.startWash = () => { if (s.water.washing <= 0) s.water.washing = 1; };
  s.inject = (id, cond) => {
    const a = s.animals.find((x) => x.id === id);
    if (!a) return;
    a.cond = cond;
    if (cond === 'estrus') a.estrus = 14;
    if (a.state !== 'walk') a.timer = 0;
  };
  s.treat = (id) => {
    const a = s.animals.find((x) => x.id === id);
    if (!a) return;
    if (a.cond === 'fever') {
      a.cond = 'recovering';
      raise(`vet:${id}:${s.t.toFixed(2)}`, 'info', `${a.name}: treatment started`, 'Vet visit logged. The belt keeps watching her recovery.');
    } else if (a.cond === 'estrus') { a.cond = 'healthy'; a.estrus = 0; raise(`ai:${id}:${s.t.toFixed(2)}`, 'info', `${a.name}: breeding recorded`, 'Insemination logged in the herd record.'); }
  };
  s.raise = raise;
  s.zoneOf = (a) => (inShed(a) ? 'Cow shed' : 'Paddock');
  return s;
}
