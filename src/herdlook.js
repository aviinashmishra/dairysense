// How the herd is coloured right now: the lens in use, each animal's coat, and
// one painted pixel buffer per animal that the 3D scene and the phone app share.
import { LENSES, paletteFor, paletteSig, resolveCoat, statusOf } from './coats.js';

const STORE = 'dairySense.coats.v1';

export function createLook(sim, art) {
  let saved = {};
  try { const v = JSON.parse(localStorage.getItem(STORE) || '{}'); if (v && typeof v === 'object') saved = v; } catch { /* storage off or unreadable: start from the breed coats */ }
  const persist = () => { try { localStorage.setItem(STORE, JSON.stringify(saved)); } catch { /* the choice still holds for this visit */ } };

  // job: a repaint in progress. Its pixels go to the buffer a slice at a time; nobody reads them until it is done.
  const state = new Map();
  for (const a of sim.animals) state.set(a.id, { a, coat: resolveCoat(saved[a.id], a.coat), buf: art.blank(), sig: 'hf', version: 0, urls: {}, job: null });
  const listeners = [];
  const changed = () => listeners.forEach((fn) => fn());
  const SLICE = 45000;         // pixels the scene may repaint per frame: about a quarter of one animal
  let budget = SLICE;

  const look = {
    art, lens: 'coats',
    onChange(fn) { listeners.push(fn); },
    // Repainting a whole animal is too much for one frame on a slow machine, so the scene gets a pixel allowance.
    beginFrame() { budget = SLICE; look.frameAt = performance.now(); },
    frameAt: 0,
    setLens(id) { if (LENSES.some((l) => l.id === id) && id !== look.lens) { look.lens = id; changed(); } },
    nextLens() { look.setLens(LENSES[(LENSES.findIndex((l) => l.id === look.lens) + 1) % LENSES.length].id); },
    coat: (id) => state.get(id).coat,
    setCoat(id, spec) {
      const s = state.get(id);
      s.coat = resolveCoat(spec, s.a.coat);
      saved[id] = s.coat.preset ? { preset: s.coat.preset } : { coat: s.coat.coat, patch: s.coat.patch };
      persist(); changed();
    },
    resetCoat(id) { const s = state.get(id); delete saved[id]; s.coat = resolveCoat(null, s.a.coat); persist(); changed(); },
    isCustom: (id) => id in saved,
    // Brings one animal's buffer up to date, as far as this frame's allowance goes (all the way if forced).
    // Returns { buf, version }; version moves once the new pixels are complete.
    refresh(a, force = false) {
      const s = state.get(a.id), pal = paletteFor(look.lens, s.coat, statusOf(a), a.temp), sig = paletteSig(pal);
      if (sig === s.sig && s.version > 0) { s.job = null; return s; }
      // A job under way is finished before the next begins, or fast-changing readings would restart it for ever.
      // A forced call wants today's colours now, so it starts over.
      if (!s.job || (force && s.job.sig !== sig)) s.job = { pal, sig, at: 0 };
      const j = s.job, end = force || s.version === 0 ? art.work : Math.min(art.work, j.at + budget);
      if (end > j.at) { art.paint(j.pal, s.buf, j.at, end); budget -= end - j.at; j.at = end; }
      if (j.at >= art.work) { s.sig = j.sig; s.version++; s.urls = {}; s.job = null; }
      return s;
    },
    version: (id) => state.get(id).version,
    // Data URL of a small portrait, cached until the animal is next repainted.
    portrait(a, kind = 'head', px = 72) {
      const now = state.get(a.id), s = look.refresh(a, now.version === 0 || !!now.job), key = kind + px;   // never draw from a half-painted buffer
      return (s.urls[key] ||= art.draw(s.buf, kind, px).toDataURL());
    },
  };
  return look;
}
