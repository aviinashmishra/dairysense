// Interface for the herd's colours: portraits, the lens switch and its legend,
// the coat picker in an animal's record, and the herd line-up on the splash.
import { BELT, HEALTH, LENSES, PRESETS, THERMAL_RANGE, ironbowCss, swatch } from './coats.js';

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const SIZE = { head: 96, full: 420 };

export function createLookUI({ sim, look }) {
  const byId = (id) => sim.animals.find((a) => a.id === id);

  // ------------------------------------------------------------ portraits
  // An <img> that follows the animal's current colours. sync() swaps its picture when she is repainted.
  const portrait = (a, kind = 'head', cls = '') =>
    `<img class="avatar ${cls}" data-av="${a.id}" data-kind="${kind}" data-v="${look.version(a.id)}" src="${look.portrait(a, kind, SIZE[kind])}" alt="" draggable="false">`;
  function sync(force = false) {
    document.querySelectorAll('img[data-av]').forEach((img) => {
      const a = byId(img.dataset.av);
      if (!a) return;
      if (force) look.refresh(a, true);
      const v = String(look.version(a.id));
      if (img.dataset.v !== v) { img.dataset.v = v; img.src = look.portrait(a, img.dataset.kind, SIZE[img.dataset.kind]); }
    });
  }

  // The portraits keep themselves current, whatever draws the herd in 3D: each frame, the animals
  // pictured in the app get a little repainting. Cheap when nothing changed (a palette comparison each).
  // The repaint allowance is reset by the scene each frame; if no scene is doing that, reset it here.
  function pump() {
    const ids = new Set();
    document.querySelectorAll('img[data-av]').forEach((img) => ids.add(img.dataset.av));
    if (ids.size) {
      if (performance.now() - look.frameAt > 40) look.beginFrame();
      for (const id of ids) { const a = byId(id); if (a) look.refresh(a); }
    }
    requestAnimationFrame(pump);
  }
  requestAnimationFrame(pump);

  // ---------------------------------------------------------- lens switch
  const lensBar = () => `<div class="lens"><span>View the herd as</span><div class="seg" role="group" aria-label="Herd colour view">${LENSES.map((l) =>
    `<button data-lens="${l.id}" title="${esc(l.hint)}"${l.id === look.lens ? ' class="on"' : ''}>${l.label}</button>`).join('')}</div></div><p class="muted lens-hint" data-lenshint>${esc(LENSES.find((l) => l.id === look.lens).hint)}</p>`;

  const legend = document.createElement('div');
  legend.id = 'lensLegend'; legend.hidden = true;
  document.body.appendChild(legend);
  function renderLegend() {
    legend.hidden = look.lens === 'coats';
    if (look.lens === 'health') {
      legend.innerHTML = `<b>Health view</b>${Object.entries(HEALTH).map(([k, h]) => `<span><i style="background:${h.patch};box-shadow:0 0 0 2px ${h.coat}"></i>${h.label}</span>`).join('')}<button data-lens="coats" title="Back to coat colours">&times;</button>`;
    } else if (look.lens === 'thermal') {
      legend.innerHTML = `<b>Thermal view</b><span>${THERMAL_RANGE[0]} °C</span><i class="ramp" style="background:${ironbowCss()}"></i><span>${THERMAL_RANGE[1]} °C</span><span class="note">belt temperature, not a camera</span><button data-lens="coats" title="Back to coat colours">&times;</button>`;
    }
  }

  // ---------------------------------------------------------- coat picker
  const dot = (c) => { const [a, b] = swatch(c); return `background:linear-gradient(135deg, ${a} 0 52%, ${b} 52%)`; };
  function coatCard(a) {
    const c = look.coat(a.id), [c1, c2] = swatch(c);
    const row = (group) => PRESETS.filter((p) => p.group === group).map((p) =>
      `<button class="sw${c.preset === p.id ? ' on' : ''}" data-coat="${p.id}" title="${esc(p.label)}" aria-label="${esc(p.label)}"><i style="${dot(p)}"></i></button>`).join('');
    return `<div class="card coatcard" data-coatcard="${a.id}"><h4>Coat colour <span class="src" data-coatname>${esc(c.label)}</span></h4>
      <p class="sw-label">Dairy breeds</p><div class="swatches">${row('breed')}</div>
      <p class="sw-label">Just for fun</p><div class="swatches">${row('fun')}</div>
      <div class="line picks"><label>Coat <input type="color" data-coatpick="coat" value="${c1}"></label><label>Patches <input type="color" data-coatpick="patch" value="${c2}"></label>
        <button class="mini" data-coatreset${look.isCustom(a.id) ? '' : ' disabled'}>Breed colours</button></div>
      <p class="muted">Repaints her on the farm and in the app. Remembered on this device.</p></div>`;
  }
  function refreshCoatCard() {
    const card = document.querySelector('[data-coatcard]');
    if (!card) return;
    const id = card.dataset.coatcard, c = look.coat(id), [c1, c2] = swatch(c);
    card.querySelector('[data-coatname]').textContent = c.label;
    card.querySelectorAll('[data-coat]').forEach((b) => b.classList.toggle('on', b.dataset.coat === c.preset));
    const picks = card.querySelectorAll('[data-coatpick]');
    if (document.activeElement !== picks[0]) picks[0].value = c1;
    if (document.activeElement !== picks[1]) picks[1].value = c2;
    card.querySelector('[data-coatreset]').disabled = !look.isCustom(id);
  }

  // One listener each for clicks and colour inputs: the phone redraws its cards, so nothing is bound to a card.
  document.addEventListener('click', (ev) => {
    const b = ev.target.closest('[data-lens], [data-coat], [data-coatreset]');
    if (!b) return;
    if (b.dataset.lens) return look.setLens(b.dataset.lens);
    const card = b.closest('[data-coatcard]');
    if (!card) return;
    if (b.dataset.coat) look.setCoat(card.dataset.coatcard, { preset: b.dataset.coat });
    else look.resetCoat(card.dataset.coatcard);
    look.setLens('coats');             // a new coat cannot be seen through the other lenses
  });
  document.addEventListener('input', (ev) => {
    const el = ev.target;
    if (!el.dataset || !el.dataset.coatpick) return;
    const card = el.closest('[data-coatcard]'), picks = card.querySelectorAll('[data-coatpick]');
    look.setCoat(card.dataset.coatcard, { coat: picks[0].value, patch: picks[1].value });
    look.setLens('coats');
  });

  look.onChange(() => {
    document.querySelectorAll('[data-lens]').forEach((b) => b.classList.toggle('on', b.dataset.lens === look.lens));
    document.querySelectorAll('[data-lenshint]').forEach((p) => (p.textContent = LENSES.find((l) => l.id === look.lens).hint));
    document.body.dataset.lens = look.lens;
    renderLegend(); refreshCoatCard();     // the portraits follow on the next sync, once the scene has repainted
  });
  document.body.dataset.lens = look.lens;

  // ----------------------------------------------- splash, logo and tab icon
  const splashCard = document.querySelector('#splash .splash-card');
  if (splashCard) {
    const row = document.createElement('div');
    row.id = 'splashHerd';
    // plain pictures: the splash is gone by the time anyone changes a colour, so these never need repainting
    row.innerHTML = sim.animals.map((a, i) => `<figure style="--i:${i}"><img class="avatar" src="${look.portrait(a, 'full', SIZE.full)}" alt="${esc(a.name)}" draggable="false"><figcaption><i style="background:${BELT.healthy}"></i>${esc(a.name)}<small>${esc(a.breed)}</small></figcaption></figure>`).join('');
    document.getElementById('splash').appendChild(row);
  }
  const logo = document.querySelector('.brand .logo');
  if (logo) { logo.classList.add('cowlogo'); logo.innerHTML = `<img class="avatar" src="${look.portrait(sim.animals[0], 'head', SIZE.head)}" alt="">`; }   // fixed: the logo does not follow the lens
  const icon = document.createElement('link');
  icon.rel = 'icon'; icon.href = look.portrait(sim.animals[0], 'head', 64);
  document.head.appendChild(icon);

  return { portrait, lensBar, coatCard, sync };
}
