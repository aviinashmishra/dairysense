// Dairy Sense documentation page.
// Navigation (contents, search, scroll-spy, copy links) plus the live figures.
// Every figure is computed in the browser from the real farm engine, so the
// documentation cannot drift away from what the twin does.
import { createSim, thi, thiBand, HOURS_PER_SEC, beltStep } from './sim.js';
import { recordDay, sample } from './trace.js';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const NS = 'http://www.w3.org/2000/svg';
const S = (name, attrs = {}, parent = null) => {
  const e = document.createElementNS(NS, name);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(e);
  return e;
};
// Text always goes in through textContent: alert titles and names come from the engine.
const H = (tag, cls = '', text = null, parent = null) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  if (parent) parent.appendChild(e);
  return e;
};
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const hhmm = (h) => {
  const m = Math.round(h * 60);
  return `${String(Math.floor(m / 60) % 24).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
};
const num = (v, d = 0) => v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const COLORS = ['#2a78d6', '#eb6834', '#1baf7a', '#eda100', '#e87ba4', '#008300'];
const STATUS_ICON = { good: '✔', warn: '▲', serious: '!', crit: '✖', off: '–' };
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

function guard(name, fn) {
  try { fn(); } catch (err) {
    console.error(`[docs] ${name} failed`, err);
    const host = document.querySelector(`[data-fig="${name}"]`);
    if (host) H('p', 'noscript', `This live figure could not be drawn (${err.message}). The text around it is still correct.`, host);
  }
}

/* ====================================================================
   Navigation
   ==================================================================== */
let flashT = 0;
function flash(text) {
  let el = $('.flash');
  if (!el) { el = H('div', 'flash', '', document.body); el.setAttribute('role', 'status'); }
  el.textContent = text; el.hidden = false;
  clearTimeout(flashT); flashT = setTimeout(() => (el.hidden = true), 1800);
}
async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; } catch (e) { /* fall through */ }
  const ta = H('textarea', '', null, document.body);
  ta.value = text; ta.style.cssText = 'position:fixed;left:-999px;top:0';
  ta.select();
  let ok = false;
  try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
  ta.remove();
  return ok;
}

function initNav() {
  const toc = $('#toc'), norm = (s) => s.replace(/\s+/g, ' ').trim();
  const sections = $$('main > section[id]');
  const entries = [];   // { id, el (heading), link, li, parent, title, text }

  for (const sec of sections) {
    const link = toc.querySelector(`a[href="#${sec.id}"]`);
    if (!link) continue;
    const li = link.parentElement, h2 = $('h2', sec);
    const n = String(sections.indexOf(sec) + 1);
    link.dataset.n = n; if (h2) h2.dataset.n = n;
    const entry = { id: sec.id, el: sec, link, li, parent: null, title: link.textContent.trim(), text: norm(sec.innerText) };
    entry.low = entry.text.toLowerCase();
    entries.push(entry);
    const subs = $$('h3[id]', sec);
    if (subs.length) {
      const ul = H('ul', '', null, li);
      for (const h3 of subs) {
        let text = '';
        for (let n = h3; n; n = n.nextElementSibling) { if (n !== h3 && n.tagName === 'H3') break; text += ` ${n.innerText}`; }
        const sli = H('li', '', null, ul), a = H('a', '', h3.textContent.trim(), sli);
        a.href = `#${h3.id}`;
        text = norm(text);
        entries.push({ id: h3.id, el: h3, link: a, li: sli, parent: entry, title: h3.textContent.trim(), text, low: text.toLowerCase() });
      }
    }
    for (const hd of [h2, ...subs]) {
      if (!hd) continue;
      const id = hd === h2 ? sec.id : hd.id;
      const a = H('a', 'anchor', '#', hd);
      a.href = `#${id}`; a.title = 'Copy a link to this heading';
      a.setAttribute('aria-label', `Copy a link to “${hd.firstChild.textContent.trim()}”`);
      a.addEventListener('click', async () => {
        const url = `${location.href.split('#')[0]}#${id}`;
        flash((await copyText(url)) ? 'Link copied' : 'Could not copy the link');
      });
    }
  }

  // ---- scroll-spy
  let ticking = false, current = null;
  const navH = () => ($('.site-nav')?.offsetHeight || 54) + 28;
  function spy() {
    ticking = false;
    let act = null;
    const edge = navH();
    for (const e of entries) {
      const top = (e.parent ? e.el : $('h2', e.el) || e.el).getBoundingClientRect().top;
      if (top <= edge) act = e; else if (act && !e.parent) break;
    }
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4 && entries.length) {
      const last = entries.filter((e) => !e.parent).pop();
      if (!act || (act.parent || act) !== last) act = last;
    }
    $('.totop')?.classList.toggle('show', scrollY > 700);
    if (act === current) return;
    current = act;
    const sec = act ? act.parent || act : null;
    for (const e of entries) {
      const on = e === act || e === sec;
      e.link.classList.toggle('on', on);
      if (on) e.link.setAttribute('aria-current', 'true'); else e.link.removeAttribute('aria-current');
      if (!e.parent) e.li.classList.toggle('open', e === sec);
    }
    const side = $('.sidebar');
    if (sec && side && getComputedStyle(side).position === 'sticky') {
      const r = sec.link.getBoundingClientRect(), sr = side.getBoundingClientRect();
      if (r.top < sr.top + 70 || r.bottom > sr.bottom - 40) side.scrollTop += r.top - sr.top - sr.height / 3;
    }
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(spy); } }, { passive: true });
  addEventListener('resize', spy);
  spy();

  // ---- search
  const input = $('#tocSearch'), note = $('#tocNote');
  const restore = (e) => { e.link.textContent = ''; e.link.append(e.title); };
  function markInto(parent, text, q) {
    const i = text.toLowerCase().indexOf(q);
    if (i < 0) { parent.append(text); return; }
    parent.append(text.slice(0, i));
    H('mark', '', text.slice(i, i + q.length), parent);
    parent.append(text.slice(i + q.length));
  }
  function search() {
    const q = input.value.trim().toLowerCase();
    toc.classList.toggle('searching', q.length >= 2);
    if (q.length < 2) {
      for (const e of entries) { e.li.hidden = false; restore(e); }
      note.textContent = q.length ? 'Type at least two letters.' : '';
      return;
    }
    let hits = 0;
    const secs = entries.filter((e) => !e.parent);
    for (const sec of secs) {
      const kids = entries.filter((e) => e.parent === sec);
      let any = false;
      for (const e of [...kids, sec]) {
        const inTitle = e.title.toLowerCase().includes(q), at = e.low.indexOf(q);
        const hit = inTitle || at >= 0;
        restore(e);
        if (e !== sec) e.li.hidden = !hit;
        if (hit) {
          any = true;
          e.link.textContent = '';
          markInto(e.link, e.title, q);
          if (!inTitle && (e !== sec || !kids.some((k) => !k.li.hidden))) {
            const from = Math.max(0, at - 26), to = Math.min(e.text.length, at + q.length + 34);
            const sm = H('small', '', null, e.link);
            markInto(sm, `${from > 0 ? '…' : ''}${e.text.slice(from, to).trim()}${to < e.text.length ? '…' : ''}`, q);
          }
        }
      }
      sec.li.hidden = !any;
      if (any) hits++;
    }
    note.textContent = hits ? `${hits} of ${secs.length} sections mention “${input.value.trim()}”` : `Nothing found for “${input.value.trim()}”`;
  }
  input.addEventListener('input', search);
  input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
      const first = entries.find((e) => !e.li.hidden && !(e.parent && e.parent.li.hidden) && (e.parent || !entries.some((k) => k.parent === e && !k.li.hidden)));
      const target = toc.classList.contains('searching') ? first : null;
      if (target) { location.hash = target.id; closeDrawer(); }
    } else if (ev.key === 'Escape' && input.value) { input.value = ''; search(); ev.stopPropagation(); }
  });
  addEventListener('keydown', (ev) => {
    const tag = ev.target.tagName;
    if (ev.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA' && tag !== 'SELECT' && !ev.ctrlKey && !ev.metaKey) {
      ev.preventDefault(); openDrawer(); input.focus(); input.select();
    } else if (ev.key === 'Escape') closeDrawer();
  });

  // ---- drawer on narrow screens
  const toggle = $('.toc-toggle');
  const isDrawer = () => getComputedStyle($('.sidebar')).position === 'fixed';
  function openDrawer() { if (!isDrawer()) return; document.body.classList.add('toc-open'); toggle.setAttribute('aria-expanded', 'true'); }
  function closeDrawer() {
    if (!document.body.classList.contains('toc-open')) return;
    document.body.classList.remove('toc-open'); toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', () => {
    if (document.body.classList.contains('toc-open')) closeDrawer(); else { openDrawer(); input.focus({ preventScroll: true }); }
  });
  $('.scrim').addEventListener('click', closeDrawer);
  toc.addEventListener('click', (ev) => { if (ev.target.closest('a')) closeDrawer(); });

  // ---- back to top, copy buttons
  $('.totop').addEventListener('click', () => { scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' }); $('.site-nav .brand')?.focus({ preventScroll: true }); });
  for (const box of $$('.code')) {
    const b = H('button', 'copy', 'Copy', box);
    b.type = 'button';
    b.addEventListener('click', async () => { b.textContent = (await copyText($('pre', box).textContent)) ? 'Copied' : 'Failed'; setTimeout(() => (b.textContent = 'Copy'), 1400); });
  }
}

/* ====================================================================
   Chart kit: small-multiple panels that share one time axis
   ==================================================================== */
const ML = 66, MR = 18;

function niceScale(min, max, force) {
  if (force) { min = force[0]; max = force[1]; }
  if (max - min < 1e-9) max = min + 1;
  const raw = (max - min) / 4, p = Math.pow(10, Math.floor(Math.log10(raw)));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * p).find((s) => s >= raw - 1e-9);
  const lo = force ? min : Math.floor(min / step + 1e-9) * step, hi = force ? max : Math.ceil(max / step - 1e-9) * step;
  const ticks = [];
  for (let t = Math.ceil(lo / step - 1e-9) * step; t <= hi + 1e-9; t += step) ticks.push(+t.toFixed(6));
  const d = step >= 1 && Number.isInteger(step) ? 0 : step >= 0.1 ? 1 : 2;
  return { lo, hi, ticks, d };
}
function assignLanes(marks, X) {
  const last = [];
  for (const m of marks) {
    const px = X(m.x);
    let l = 0;
    while (last[l] != null && px - last[l] < 21) l++;
    last[l] = px; m.lane = l;
  }
  return last.length;
}
function label(svg, x, y, text, anchor = 'start', cls = '') {
  const t = S('text', { x, y, 'text-anchor': anchor }, svg);
  if (cls) t.setAttribute('class', cls);
  t.textContent = text;
  return t;
}
function head(host, o) {
  const hd = H('div', 'panel-head', null, host);
  H('b', '', o.title, hd);
  if (o.unit) H('span', 'unit', o.unit, hd);
  const many = o.series && o.series.length > 1, refs = o.refs || [];
  if (many || refs.length) {
    const lg = H('span', 'legend', null, hd);
    if (many) for (const s of o.series) { const it = H('span', '', null, lg); const k = H('i', 'key', null, it); k.style.setProperty('--k', s.color); it.append(s.name); }
    // reference lines are named here, not inside the plot, so they can never sit on top of the data
    for (const r of refs) { const it = H('span', '', null, lg); H('i', 'key ref', null, it); it.append(r.label); }
  }
}
function frame(host, o, bodyH) {
  const w = o.W - ML - MR, X = (x) => ML + ((x - o.x0) / (o.x1 - o.x0)) * w;
  const lanes = o.badges && o.marks.length ? assignLanes(o.marks, X) : 0;
  const top = 6 + lanes * 22, Hh = top + bodyH + 22;
  const svg = S('svg', { viewBox: `0 0 ${o.W} ${Hh}`, role: 'img', 'aria-label': o.aria || o.title }, host);
  for (const [a, b] of o.night || []) S('rect', { class: 'night', x: X(a).toFixed(1), y: top, width: (X(b) - X(a)).toFixed(1), height: bodyH }, svg);
  for (let t = Math.ceil(o.x0 / o.xStep - 1e-9) * o.xStep; t <= o.x1 + 1e-6; t += o.xStep) {
    S('line', { class: 'grid', x1: X(t), x2: X(t), y1: top, y2: top + bodyH }, svg);
    label(svg, X(t), top + bodyH + 15, o.xFmt ? o.xFmt(t) : t === 24 ? '24:00' : hhmm(t), 'middle');
  }
  for (const m of o.marks || []) S('line', { class: 'evline', x1: X(m.x), x2: X(m.x), y1: o.badges ? 6 + m.lane * 22 + 9 : top, y2: top + bodyH }, svg);
  return { svg, X, top, bodyH, W: o.W };
}
function finish(f, o) {
  S('line', { class: 'axis', x1: ML, x2: o.W - MR, y1: f.top + f.bodyH, y2: f.top + f.bodyH }, f.svg);
  if (o.badges) for (const m of o.marks) {
    const g = S('g', { class: `evm ${m.level || 'info'}` }, f.svg), cx = f.X(m.x), cy = 6 + m.lane * 22 + 9;
    S('circle', { cx, cy, r: 9 }, g);
    label(g, cx, cy + 4, String(m.n), 'middle');
  }
  f.cross = S('line', { class: 'cross', y1: f.top, y2: f.top + f.bodyH, visibility: 'hidden' }, f.svg);
}

function linePanel(host, o) {
  const box = H('div', 'panel', null, host);
  head(box, o);
  const f = frame(box, o, o.h || 100);
  let lo = Infinity, hi = -Infinity;
  for (const s of o.series) for (const p of s.pts) { if (!Number.isFinite(p[1])) p[1] = null; else { lo = Math.min(lo, p[1]); hi = Math.max(hi, p[1]); } }
  for (const r of o.refs || []) { lo = Math.min(lo, r.y); hi = Math.max(hi, r.y); }
  const sc = niceScale(lo, hi, o.domain);
  const Y = (v) => f.top + f.bodyH - ((clamp(v, sc.lo, sc.hi) - sc.lo) / (sc.hi - sc.lo)) * f.bodyH;
  for (const t of sc.ticks) {
    if (t > sc.lo + 1e-9) S('line', { class: 'grid', x1: ML, x2: o.W - MR, y1: Y(t), y2: Y(t) }, f.svg);
    label(f.svg, ML - 8, Y(t) + 4, num(t, sc.d), 'end');
  }
  for (const r of o.refs || []) {
    S('line', { class: 'ref', x1: ML, x2: o.W - MR, y1: Y(r.y), y2: Y(r.y) }, f.svg);
  }
  f.dots = [];
  for (const s of o.series) {
    let d = '', pen = false;
    for (const [x, y] of s.pts) {
      if (y == null) { pen = false; continue; }
      d += `${pen ? 'L' : 'M'}${f.X(x).toFixed(1)} ${Y(y).toFixed(1)}`; pen = true;
    }
    S('path', { class: 'series', d, stroke: s.color }, f.svg);
  }
  finish(f, o);
  for (const s of o.series) f.dots.push(S('circle', { class: 'dot', r: 4.5, fill: s.color, visibility: 'hidden' }, f.svg));
  return { ...f, Y, series: o.series, title: o.title };
}

function stripPanel(host, o) {
  const box = H('div', 'panel', null, host);
  head(box, { title: o.title, unit: o.unit });
  const rowH = 17, f = frame(box, o, o.rows.length * rowH + 6);
  o.rows.forEach((r, i) => {
    const y = f.top + 5 + i * rowH;
    label(f.svg, ML - 8, y + 8, r.label, 'end', 'rowlbl');
    S('rect', { class: 'track', x: ML, y: y + 1, width: o.W - ML - MR, height: 8, rx: 3 }, f.svg);
    for (const [a, b] of r.spans) S('rect', { class: 'onbar', x: f.X(a).toFixed(1), y: y + 1, width: Math.max(2.5, f.X(b) - f.X(a)).toFixed(1), height: 8, rx: 3 }, f.svg);
  });
  finish(f, o);
  f.dots = [];
  return { ...f, series: [], title: o.title };
}

// Crosshair + one tooltip for a whole stack of panels. Works with the pointer
// and with the arrow keys once the figure has keyboard focus.
function interact(charts, st) {
  const tip = H('div', 'tip', null, charts);
  tip.hidden = true;
  const live = H('div', 'sr', null, charts);
  live.setAttribute('aria-live', 'polite');
  let kx = null;
  function show(x, py, speak) {
    if (!st.panels) return;
    x = clamp(Math.round(x / st.snap) * st.snap, st.x0, st.x1);
    const rd = st.read(x), rect = charts.getBoundingClientRect(), scale = rect.width / st.W;
    for (const p of st.panels) {
      const px = p.X(x);
      p.cross.setAttribute('x1', px); p.cross.setAttribute('x2', px); p.cross.setAttribute('visibility', 'visible');
      p.series.forEach((s, i) => {
        const v = s.at(rd.ctx), d = p.dots[i];
        if (!Number.isFinite(v)) { d.setAttribute('visibility', 'hidden'); return; }
        d.setAttribute('cx', px); d.setAttribute('cy', p.Y(v)); d.setAttribute('visibility', 'visible');
      });
    }
    tip.textContent = '';
    H('h5', '', rd.title, tip);
    const said = [rd.title];
    rd.groups.forEach((g, gi) => {
      const box = H('div', gi ? 'grp' : '', null, tip);
      for (const r of g) {
        const row = H('div', 'row', null, box), k = H('i', 'key', null, row);
        k.style.setProperty('--k', r.color);
        row.append(r.name); H('b', '', r.value, row);
        said.push(`${r.name} ${r.value}`);
      }
    });
    if (rd.note) { H('div', 'on', rd.note, tip); said.push(rd.note); }
    tip.hidden = false;
    const px = st.panels[0].X(x) * scale, tw = tip.offsetWidth, th = tip.offsetHeight;
    let left = px + 14;
    if (left + tw > rect.width) left = px - 14 - tw;
    tip.style.left = `${clamp(left, 0, Math.max(0, rect.width - tw))}px`;
    tip.style.top = `${clamp((py ?? 60) - th / 2, 0, Math.max(0, rect.height - th))}px`;
    if (speak) live.textContent = said.join('. ');
  }
  function hide() {
    tip.hidden = true; kx = null;
    for (const p of st.panels || []) { p.cross.setAttribute('visibility', 'hidden'); p.dots.forEach((d) => d.setAttribute('visibility', 'hidden')); }
  }
  const toX = (ev) => {
    const rect = charts.getBoundingClientRect(), scale = rect.width / st.W;
    return st.x0 + (((ev.clientX - rect.left) / scale - ML) / (st.W - ML - MR)) * (st.x1 - st.x0);
  };
  charts.addEventListener('pointermove', (ev) => { kx = null; show(toX(ev), ev.clientY - charts.getBoundingClientRect().top); });
  charts.addEventListener('pointerdown', (ev) => show(toX(ev), ev.clientY - charts.getBoundingClientRect().top));
  // A finger lifts after every tap, so on touch the readout stays until the next tap elsewhere.
  charts.addEventListener('pointerleave', (ev) => { if (ev.pointerType === 'mouse' && document.activeElement !== charts) hide(); });
  document.addEventListener('pointerdown', (ev) => { if (ev.pointerType !== 'mouse' && !charts.contains(ev.target)) hide(); });
  charts.addEventListener('blur', hide);
  charts.addEventListener('keydown', (ev) => {
    const big = ev.shiftKey ? 4 : 1;
    if (kx == null) kx = (st.x0 + st.x1) / 2;
    if (ev.key === 'ArrowLeft') kx -= st.keyStep * big;
    else if (ev.key === 'ArrowRight') kx += st.keyStep * big;
    else if (ev.key === 'Home') kx = st.x0;
    else if (ev.key === 'End') kx = st.x1;
    else if (ev.key === 'Escape') { hide(); return; }
    else return;
    ev.preventDefault();
    kx = clamp(kx, st.x0, st.x1);
    show(kx, null, true);
  });
  return { hide };
}

function eventList(ol, marks, withBody = true) {
  ol.textContent = '';
  for (const m of marks) {
    const li = H('li', m.level || 'info', null, ol);
    H('span', 'n', String(m.n), li);
    const body = H('span', '', null, li);
    H('time', '', hhmm(m.x), body);
    body.append(' ');
    if (m.level === 'warn') H('b', '', '▲ Warning: ', body);
    if (m.level === 'crit') H('b', '', '✖ Critical: ', body);
    H('b', '', m.title, body);
    if (withBody && m.body) body.append(` — ${m.body}`);
  }
}
function tile(host, lab, value, unit, sub) {
  const t = H('div', 'tile', null, host);
  H('span', 'lab', lab, t);
  const b = H('b', '', value, t);
  if (unit) H('small', '', unit, b);
  if (sub) H('span', 'subv', sub, t);
}
function table(host, headRow, rows, cls = '') {
  host.textContent = '';
  const tb = H('table', cls, null, host), thead = H('thead', '', null, tb), tr = H('tr', '', null, thead);
  headRow.forEach((c, i) => { const th = H('th', i && typeof rows[0]?.[i] === 'string' && /^[\d.,−-]/.test(rows[0][i]) ? 'n' : '', c, tr); th.scope = 'col'; });
  const body = H('tbody', '', null, tb);
  for (const r of rows) {
    const row = H('tr', r.cls || '', null, body);
    r.forEach((c, i) => { const cell = H(i ? 'td' : 'th', i && /^[\d.,−-]/.test(String(c)) ? 'n' : '', String(c), row); if (!i) cell.scope = 'row'; });
  }
  return tb;
}
function onResize(el, fn) {
  let w = el.clientWidth, t = 0;
  new ResizeObserver(() => {
    if (Math.abs(el.clientWidth - w) < 2) return;
    w = el.clientWidth; clearTimeout(t); t = setTimeout(fn, 120);
  }).observe(el);
}

/* ====================================================================
   Figure 1: a recorded farm day
   ==================================================================== */
const DAY = { from: 0, hours: 24, step: 0.1 };
const SWITCHES = [
  ['milking', 'Milking'], ['washing', 'Shed wash'], ['pump', 'Pump'], ['cooling', 'Cooling'],
  ['irrigating', 'Irrigation'], ['stove', 'Stove'], ['gen', 'Generator'], ['lights', 'Lights'],
];
const spansOf = (rows, test, step) => {
  const out = [];
  let st = null;
  rows.forEach((r, i) => {
    const on = test(r);
    if (on && st == null) st = Math.max(rows[0].hour, r.hour - step / 2);
    if ((!on || i === rows.length - 1) && st != null) { out.push([st, on ? r.hour : r.hour - step / 2]); st = null; }
  });
  return out;
};

function initDay(firstTrace) {
  const charts = $('#dayCharts'), st = { snap: DAY.step, keyStep: 0.25 };
  let trace = firstTrace, weather = 'sunny', heat = false;
  const ix = interact(charts, st);

  function draw() {
    for (const p of $$('.panel', charts)) p.remove();
    const W = Math.max(280, charts.clientWidth), rows = trace.rows, x0 = trace.from, x1 = trace.from + trace.hours;
    const marks = trace.events.map((e, i) => ({ x: e.hour, n: i + 1, level: e.level, title: e.title, body: e.body }));
    const common = { W, x0, x1, xStep: W < 560 ? 6 : 3, marks, night: spansOf(rows, (r) => r.sun <= 0, trace.step) };
    const ser = (name, key, i, f = (v) => v) => ({ name, color: COLORS[i], pts: rows.map((r) => [r.hour, f(r[key])]), at: (c) => f(c[key]) });
    const anchor = $('.tip', charts);
    const hold = document.createDocumentFragment();
    const panels = [
      stripPanel(hold, { ...common, badges: true, title: 'What is switched on', unit: 'numbered markers are the events listed under the charts', aria: 'Timeline of what is switched on during the day', rows: SWITCHES.map(([k, l]) => ({ label: l, spans: spansOf(rows, (r) => r[k], trace.step) })) }),
      linePanel(hold, { ...common, title: 'Power', unit: 'watts', domain: null, series: [ser('Solar panel', 'solarW', 0), ser('Farm load', 'loadW', 1), ser('Biogas generator', 'genW', 2)] }),
      linePanel(hold, { ...common, title: 'Battery charge', unit: '% of ' + num(trace.batCap / 1000, 0) + ' kWh', domain: [0, 100], series: [ser('Battery', 'bat', 0, (v) => v * 100)] }),
      linePanel(hold, { ...common, title: 'Water tanks', unit: 'litres', domain: [0, Math.max(trace.storageCap, trace.collectionCap)], series: [ser('Storage tank (filtered)', 'storage', 0), ser('Collection tank (used)', 'collection', 1)] }),
      linePanel(hold, { ...common, title: 'Gas holder', unit: 'm³ of biogas, holder is full at ' + num(trace.gasCap, 0), domain: [0, trace.gasCap], series: [ser('Gas holder', 'gas', 0)] }),
      linePanel(hold, { ...common, h: 116, title: 'Heat stress index (THI)', unit: 'no unit', series: [ser('In the shed', 'thi', 0), ser('In the paddock', 'padThi', 1)], refs: THI_EDGES.slice(0, 2).map((e) => ({ y: e.at, label: `${e.label.toLowerCase()} from ${e.at}` })) }),
    ];
    charts.insertBefore(hold, anchor);
    Object.assign(st, { panels, W, x0, x1 });
    st.read = (x) => {
      const c = sample(trace, x);
      const groups = panels.filter((p) => p.series.length).map((p) => p.series.map((s) => ({ color: s.color, name: p.series.length > 1 ? s.name : p.title, value: fmtDay(p.title, s.at(c)) })));
      const on = SWITCHES.filter(([k]) => c[k]).map(([, l]) => l);
      return { ctx: c, title: hhmm(x) + (x >= 24 ? ' (midnight)' : ''), groups, note: `${thiBand(c.thi).label} in the shed. On now: ${on.length ? on.join(', ') : 'nothing'}` };
    };
    eventList($('#dayEvents'), marks);
    $('#dayEvents').hidden = !marks.length;
  }
  const fmtDay = (title, v) => (title === 'Power' ? `${num(v)} W` : title === 'Battery charge' ? `${num(v)} %` : title === 'Water tanks' ? `${num(v)} L` : title === 'Gas holder' ? `${num(v, 2)} m³` : num(v, 1));

  function tiles() {
    const host = $('#dayTiles'), L = trace.rows[trace.rows.length - 1];
    host.textContent = '';
    tile(host, 'Water recycled', num(L.recycled), 'L', `fresh water used ${num(L.fresh)} L${L.rain > 1 ? ` · rain harvested ${num(L.rain)} L` : ''}`);
    tile(host, 'Solar energy', num(L.solarWh / 1000, 1), 'kWh', `farm used ${num(L.loadWh / 1000, 1)} kWh · grid ${num(L.gridWh / 1000, 2)} kWh`);
    tile(host, 'Biogas made', num(L.gasMade, 1), 'm³', `${num(L.lpg, 2)} kg of LPG replaced at the stove`);
    tile(host, 'Milk', num(L.milkTotal, 1), 'L', `two milkings · ${num(L.collected)} kg dung collected`);
    tile(host, 'Farm score', String(Math.round(L.score)), '/ 100', 'running score at midnight');
  }
  function dataTable() {
    const rows = [];
    for (let h = trace.from; h <= trace.from + trace.hours + 1e-6; h += 1) {
      const c = sample(trace, h);
      rows.push([h === 24 ? '24:00' : hhmm(h), num(c.solarW), num(c.loadW), num(c.genW), num(c.bat * 100), num(c.storage), num(c.collection), num(c.gas, 2), num(c.thi, 1), num(c.padThi, 1)]);
    }
    table($('#dayTable'), ['Time', 'Solar W', 'Load W', 'Generator W', 'Battery %', 'Storage L', 'Collection L', 'Gas m³', 'Shed THI', 'Paddock THI'], rows, 'wide');
  }
  function refresh() { ix.hide(); draw(); tiles(); dataTable(); status(); }
  function status() {
    $('#dayStatus').textContent = `Showing a ${weather === 'rain' ? 'rainy' : weather} day${heat ? ' in a heat wave' : ''}, recorded from the engine: ${hhmm(trace.from)} to 24:00, ${trace.rows.length} samples.`;
  }
  function rerecord() {
    charts.style.opacity = '.45';
    $('#dayStatus').textContent = 'Recording a farm day…';
    setTimeout(() => {
      trace = recordDay({ ...DAY, weather, heatwave: heat });
      charts.style.opacity = '';
      refresh();
    }, 30);
  }
  for (const b of $$('#dayWeather button')) b.addEventListener('click', () => {
    weather = b.dataset.w;
    for (const o of $$('#dayWeather button')) o.setAttribute('aria-pressed', String(o === b));
    rerecord();
  });
  $('#dayHeat').addEventListener('change', (ev) => { heat = ev.target.checked; rerecord(); });
  refresh();
  onResize(charts, () => { ix.hide(); draw(); });
}

/* ====================================================================
   Figure 2: THI calculator, driven through the engine's live-sensor path
   ==================================================================== */
// Band edges are read off thiBand() itself, so the scale can never disagree with the twin.
const THI_EDGES = (() => {
  const out = [];
  let prev = thiBand(40).key;
  for (let v = 40; v <= 110; v += 0.5) { const b = thiBand(v); if (b.key !== prev) { out.push({ at: v, key: b.key, label: b.label }); prev = b.key; } }
  return out;
})();
const THI_BANDS = [{ at: -Infinity, ...thiBand(40) }, ...THI_EDGES];
const STATUS_VAR = { good: 'var(--good)', warn: 'var(--warning)', serious: 'var(--serious)', crit: 'var(--critical)' };
function chip(host, key, text) {
  const s = H('span', `st ${key}`, null, host);
  H('i', '', STATUS_ICON[key] || '', s).setAttribute('aria-hidden', 'true');
  s.append(text);
  return s;
}

function initThi(herd) {
  const tIn = $('#thiT'), hIn = $('#thiH'), LO = 60, HI = 96;
  const node = createSim();
  node.live.on = true;                       // behave as if a real DHT11 were linked
  // scale bar
  const bands = $('#thiBands'), scale = $('#thiScale');
  THI_BANDS.forEach((b, i) => {
    const a = Math.max(LO, b.at), z = Math.min(HI, THI_BANDS[i + 1]?.at ?? HI);
    const seg = H('i', '', null, bands);
    seg.style.flex = `${z - a} 0 0`; seg.style.background = STATUS_VAR[b.key]; seg.title = b.label;
    if (i) { const t = H('span', 'tick', String(b.at), scale); t.style.left = `${((b.at - LO) / (HI - LO)) * 100}%`; }
  });
  const key = $('#thiKey');
  THI_BANDS.forEach((b, i) => chip(key, b.key, `${b.label}: ${i === 0 ? `below ${THI_BANDS[1].at}` : THI_BANDS[i + 1] ? `${b.at} to ${THI_BANDS[i + 1].at}` : `${b.at} and above`}`));
  // lookup grid
  const temps = [], hums = [90, 80, 70, 60, 50, 40, 30];
  for (let t = 22; t <= 42; t += 2) temps.push(t);
  const grid = table($('#thiGrid'), ['Humidity', ...temps.map((t) => `${t} °C`)], hums.map((rh) => [`${rh} %`, ...temps.map((t) => Math.round(thi(t, rh)))]), 'thi-grid');
  $$('tbody tr', grid).forEach((tr, r) => $$('td', tr).forEach((td, c) => { td.className = thiBand(thi(temps[c], hums[r])).key; td.dataset.t = temps[c]; td.dataset.h = hums[r]; }));

  function update() {
    const T = +tIn.value, RH = +hIn.value;
    $('#thiTOut').textContent = `${num(T, 1)} °C`; $('#thiHOut').textContent = `${num(RH)} %`;
    node.live.temp = T; node.live.hum = RH;
    node.advance(0.04);                      // one engine tick with this sensor reading
    const c = node.climate, v = c.rawThi, band = thiBand(v);
    $('#thiVal').textContent = num(v, 1);
    const bh = $('#thiBand'); bh.textContent = ''; chip(bh, band.key, band.label);
    $('#thiMark').style.left = `${clamp(((v - LO) / (HI - LO)) * 100, 0, 100)}%`;
    const cool = $('#thiCool'); cool.textContent = '';
    chip(cool, c.cooling ? 'good' : 'off', c.cooling ? 'Fans + foggers ON' : 'Cooling off');
    const alert = node.alerts.find((a) => a.key === 'thi' && a.active);
    const al = $('#thiAlert'); al.textContent = '';
    if (alert) chip(al, 'warn', alert.title); else al.textContent = 'No alert';
    // what a belt would read after three steady hours at this THI
    const body = $('#thiBelt'); body.textContent = '';
    for (const def of herd) {
      const a = { ...def, state: 'idle', cond: 'healthy', sick: 0, estrus: 0, stress: 0, stressAcc: 0, act: 12, rum: 26, temp: def.baseTemp, hr: def.baseHr };
      for (let i = 0; i < 75; i++) beltStep(a, 0.04, v, 10, () => 0);
      const tr = H('tr', '', null, body);
      H('th', '', `${def.name} (${def.breed})`, tr).scope = 'row';
      H('td', 'n', `${num(a.temp, 1)} °C`, tr);
      H('td', 'n', `${a.temp - def.baseTemp >= 0.05 ? '+' : ''}${num(a.temp - def.baseTemp, 1)} °C`, tr);
      H('td', 'n', `${num(a.stress * 100)} %`, tr);
    }
    let best = null, bd = 1e9;
    for (const td of $$('td', grid)) { td.classList.remove('cur'); const d = Math.abs(td.dataset.t - T) / 2 + Math.abs(td.dataset.h - RH) / 10; if (d < bd) { bd = d; best = td; } }
    if (best) best.classList.add('cur');
  }
  tIn.addEventListener('input', update); hIn.addEventListener('input', update);
  update();
}

/* ====================================================================
   Figure 3: belt experiments (fever, estrus, lameness)
   ==================================================================== */
const EXPERIMENTS = {
  fever: { label: 'fever', start: 'Fever starts. Nobody is told.', treat: 'Vet called (treatment starts)' },
  estrus: { label: 'heat (estrus)', start: 'She comes into heat. Nobody is told.', treat: 'Breeding recorded' },
  lame: { label: 'lameness', start: 'A sore foot starts. Nobody is told.', treat: 'Hoof treated' },
};

function runExperiment(cond, id, treat) {
  const s = createSim();
  s.jumpTo(8);
  const a = s.animals.find((x) => x.id === id);
  const day0 = Math.floor(s.t / 24) * 24, pts = [], marks = [];
  const snap = () => pts.push({ x: s.t - day0, temp: a.temp, act: a.act, rum: a.rum, mob: Number.isFinite(a.ai.mobR) ? a.ai.mobR * 100 : null, health: a.ai.health, label: a.ai.label });
  const mark = (level, title, body) => marks.push({ x: s.t - day0, n: marks.length + 1, level, title, body });
  snap();
  for (let i = 0; i < 8; i++) { s.advance(0.25); snap(); }          // two normal hours, 08:00 to 10:00
  s.inject(id, cond);
  const t0 = s.t;
  mark('info', EXPERIMENTS[cond].start, '');
  let alertT = null, treatT = null, clearT = null, alert = null;
  for (let i = 0; i < 28; i++) {                                     // then seven hours in 15 minute steps
    s.advance(0.25); snap();
    const al = s.alerts.find((x) => x.active && x.kind === cond && x.animalId === id);
    if (al && alertT == null) { alertT = s.t; alert = al; mark(al.level, `AI alert: ${al.title}`, al.body); }
    else if (treat && alertT != null && treatT == null && s.t >= alertT + 1 - 1e-6) { s.treat(id); treatT = s.t; mark('info', EXPERIMENTS[cond].treat, ''); }
    else if (alertT != null && clearT == null && !s.alerts.some((x) => x.active && x.key === `cow:${id}`)) { clearT = s.t; mark('info', 'Alert cleared: vitals back inside her normal range', ''); }
  }
  return { a, pts, marks, t0: t0 - day0, delay: alertT == null ? null : alertT - t0, alert, clearAfter: clearT == null ? null : clearT - t0 };
}

function initBelt(herd) {
  const charts = $('#beltCharts'), st = { snap: 0.25, keyStep: 0.25 }, sel = $('#beltCow');
  for (const a of herd) { const o = H('option', '', `${a.name} · ${a.id} · ${a.breed} ${a.kind}`, sel); o.value = a.id; }
  sel.value = herd[0].id;
  let cond = 'fever', res = null;
  const ix = interact(charts, st);

  function draw() {
    for (const p of $$('.panel', charts)) p.remove();
    const W = Math.max(280, charts.clientWidth), b = res.a.base, pts = res.pts;
    const common = { W, x0: pts[0].x, x1: pts[pts.length - 1].x, xStep: W < 560 ? 3 : 1, marks: res.marks };
    const ser = (name, key) => [{ name, color: COLORS[0], pts: pts.map((p) => [p.x, p[key]]), at: (c) => c[key] }];
    const hold = document.createDocumentFragment();
    const panels = [
      linePanel(hold, { ...common, badges: true, title: 'Body temperature', unit: '°C', series: ser('Body temperature', 'temp'), refs: [{ y: b.temp, label: `her learned baseline, ${num(b.temp, 1)} °C` }] }),
      linePanel(hold, { ...common, title: 'Activity', unit: 'index', series: ser('Activity', 'act'), refs: [{ y: b.actHi, label: `her busiest normal 2 hours, ${num(b.actHi)}` }, { y: b.actDay, label: `her daytime average, ${num(b.actDay)}` }] }),
      linePanel(hold, { ...common, title: 'Rumination', unit: 'min of chewing per hour', series: ser('Rumination', 'rum'), refs: [{ y: b.rumDay, label: `her daytime average, ${num(b.rumDay, 1)}` }] }),
    ];
    if (pts.some((p) => p.mob != null)) panels.push(linePanel(hold, { ...common, title: 'Walking speed from GPS', unit: '% of her normal gait', series: ser('Walking speed', 'mob'), refs: [{ y: 100, label: 'her normal gait, 100 %' }] }));
    charts.insertBefore(hold, $('.tip', charts));
    Object.assign(st, { panels, W, x0: common.x0, x1: common.x1 });
    st.read = (x) => {
      const i = clamp(Math.round((x - pts[0].x) / 0.25), 0, pts.length - 1), c = pts[i];
      const f = { 'Body temperature': (v) => `${num(v, 2)} °C`, Activity: (v) => num(v), Rumination: (v) => `${num(v, 1)} min/h`, 'Walking speed from GPS': (v) => `${num(v)} %` };
      return { ctx: c, title: hhmm(c.x), groups: panels.map((p) => p.series.filter((s) => s.at(c) != null).map((s) => ({ color: s.color, name: p.title, value: f[p.title](s.at(c)) }))).filter((g) => g.length), note: `App shows: ${c.label} · health score ${c.health}` };
    };
    eventList($('#beltEvents'), res.marks);
  }
  function run() {
    res = runExperiment(cond, sel.value, $('#beltTreat').checked);
    const out = $('#beltResult'), a = res.a, secs = (h) => num(h / HOURS_PER_SEC, 1);
    out.textContent = '';
    if (res.delay == null) {
      chip(out, 'off', 'Not detected');
      out.append(` The AI did not raise a ${EXPERIMENTS[cond].label} alert for ${a.name} within seven farm hours of this run. That can happen: see the limits section.`);
    } else {
      chip(out, res.alert.level === 'crit' ? 'crit' : 'warn', res.alert.level === 'crit' ? 'Critical alert' : 'Warning');
      out.append(` ${a.name}'s ${EXPERIMENTS[cond].label} began at ${hhmm(res.t0)}. The AI raised “${res.alert.title}” ${num(res.delay, 2)} farm hours later, which is ${secs(res.delay)} seconds of real time at 1x speed.`);
      if (res.clearAfter != null) out.append(` After treatment the alert cleared ${num(res.clearAfter, 2)} farm hours after the start.`);
    }
    ix.hide(); draw();
  }
  for (const b of $$('#beltCond button')) b.addEventListener('click', () => {
    cond = b.dataset.c;
    for (const o of $$('#beltCond button')) o.setAttribute('aria-pressed', String(o === b));
    run();
  });
  sel.addEventListener('change', run);
  $('#beltTreat').addEventListener('change', run);
  $('#beltRun').addEventListener('click', run);
  run();
  onResize(charts, () => { ix.hide(); draw(); });
}

/* ====================================================================
   Figure 4: GPS. Three days of rotational grazing, and a side-gate test
   ==================================================================== */
function initGps(herd) {
  const charts = $('#gpsCharts'), st = { snap: 0.5, keyStep: 0.5 };
  const s = createSim(), off = s.t - (s.t % 24), pts = [], marks = [];
  const seen = new Set(s.alerts.map((a) => a.id));
  const snap = () => pts.push({ x: s.t - off, west: s.pasture.cover.west * 100, east: s.pasture.cover.east * 100, mode: s.pasture.mode });
  snap();
  for (let i = 0; i < 144; i++) {
    s.advance(0.5); snap();
    for (const a of s.alerts) {
      if (seen.has(a.id)) continue;
      seen.add(a.id);
      if (a.key.startsWith('rotate:')) marks.push({ x: a.t - off, n: marks.length + 1, level: 'info', title: a.title, body: a.body });
    }
  }
  const dayLabel = (t) => `Day ${Math.floor(t / 24) + 1}, ${hhmm(t % 24)}`;
  const ix = interact(charts, st);
  function draw() {
    for (const p of $$('.panel', charts)) p.remove();
    const W = Math.max(280, charts.clientWidth), hold = document.createDocumentFragment();
    const x0 = pts[0].x, x1 = pts[pts.length - 1].x, night = [];
    for (let d = 0; d < 5; d++) { const a = Math.max(x0, d * 24 - 6), b = Math.min(x1, d * 24 + 6); if (b > a) night.push([a, b]); }
    const common = { W, x0, x1, xStep: W < 560 ? 24 : 12, marks, night, xFmt: (t) => (t % 24 === 0 ? `Day ${t / 24 + 1}` : hhmm(t % 24)) };
    const ser = (name, key, i) => ({ name, color: COLORS[i], pts: pts.map((p) => [p.x, p[key]]), at: (c) => c[key] });
    const panels = [linePanel(hold, { ...common, badges: true, h: 120, title: 'Grass cover in the two grazing cells', unit: '% of full cover', domain: [0, 100], series: [ser('West cell', 'west', 0), ser('East cell', 'east', 1)] })];
    charts.insertBefore(hold, $('.tip', charts));
    Object.assign(st, { panels, W, x0, x1 });
    st.read = (x) => {
      const c = pts[clamp(Math.round((x - x0) / 0.5), 0, pts.length - 1)];
      return { ctx: c, title: dayLabel(c.x), groups: [panels[0].series.map((q) => ({ color: q.color, name: q.name, value: `${num(q.at(c))} %` }))], note: c.mode === 'whole' ? 'No virtual fence' : `The herd is grazing the ${c.mode} cell` };
    };
    const ol = $('#gpsEvents');
    ol.textContent = '';
    for (const m of marks) {
      const li = H('li', 'info', null, ol);
      H('span', 'n', String(m.n), li);
      const b = H('span', '', null, li);
      H('time', '', dayLabel(m.x), b); b.append(' '); H('b', '', m.title, b); b.append(` — ${m.body}`);
    }
  }
  draw();
  onResize(charts, () => { ix.hide(); draw(); });

  // Side-gate test: how long until the geofence alert, and until she is back.
  const g = createSim(), cow = herd[1] || herd[0], res = $('#strayResult');
  g.jumpTo(10); g.stray(cow.id);
  let out = null, back = null, alert = null;
  for (let i = 1; i <= 80 && out == null; i++) { g.advance(0.05); alert = g.alerts.find((a) => a.active && a.kind === 'geo'); if (alert) out = i * 0.05; }
  res.textContent = '';
  if (out == null) { chip(res, 'off', 'No alert'); res.append(` ${cow.name} did not get outside the geofence within four farm hours of this run.`); return; }
  g.recall(cow.id);
  for (let i = 1; i <= 80 && back == null; i++) { g.advance(0.05); if (!g.alerts.some((a) => a.active && a.kind === 'geo')) back = i * 0.05; }
  chip(res, 'crit', 'Critical alert');
  res.append(` Test run in your browser: the side gate is left open at 10:00 and ${cow.name} heads for it. “${alert.title}” is raised ${num(out * 60)} farm minutes later; most of that time is her walk to the gate. The audio cue is sent at once${back == null ? ', but she was not back within four farm hours.' : ` and she is back inside ${num(back * 60)} farm minutes after that.`}`);
}

/* ====================================================================
   Tables that come straight from the engine
   ==================================================================== */
function herdTables(sim) {
  const A = sim.animals;
  table($('#herdTable'), ['Tag', 'Name', 'Animal', 'Normal body temp', 'Resting heart rate', 'Milk per milking', 'Heat sensitivity'],
    A.map((a) => [a.id, a.name, `${a.breed} ${a.kind}`, `${num(a.baseTemp, 1)} °C`, `${num(a.baseHr)} bpm`, `${num(a.milk, 1)} L`, `× ${num(a.heatTol, 2)}`]), 'mid');
  table($('#baseTable'), ['Name', 'Body temp', 'Activity, day', 'Activity, night', 'Busiest 2 h', 'Rumination, day', 'Rumination, night', ...(A[0].base.spd != null ? ['Walking speed'] : [])],
    A.map((a) => [a.name, `${num(a.base.temp, 2)} °C`, num(a.base.actDay), num(a.base.actNight), num(a.base.actHi), `${num(a.base.rumDay, 1)} min/h`, `${num(a.base.rumNight, 1)} min/h`, ...(a.base.spd != null ? [`${num(a.base.spd, 1)} in/h`] : [])]), 'wide');
  const reg = $('#registerTable');
  if (reg && A[0].record) {
    table(reg, ['Name', 'Age', 'Weight', 'Lactation', 'Days in milk', 'Pregnant', 'Reminders in the register (farm day due)'],
      A.map((a) => [a.name, `${a.record.age} y`, `${a.record.weight} kg`, String(a.record.lactation), String(a.record.dim), a.record.pregnant ? 'Yes' : 'No', a.record.vaccines.map((v) => `${v.name}: day ${v.due}`).join(' · ')]), 'wide');
  } else if (reg) reg.closest('[data-optional]')?.setAttribute('hidden', '');
}

// The same day played under four kinds of weather, compared at midnight.
function scenarioTable() {
  const host = $('#scenTable');
  const cases = [['Sunny', 'sunny', false], ['Cloudy', 'cloudy', false], ['Rain', 'rain', false], ['Sunny + heat wave', 'sunny', true]];
  const out = cases.map(([, weather, heatwave]) => {
    const s = createSim();
    s.advance(((DAY.from - s.hour) % 24 + 24) % 24);
    s.weather = weather; s.heatwave = heatwave;
    const t0 = s.t, w0 = { ...s.water.tot }, e0 = { ...s.energy.tot }, b0 = { ...s.biogas.tot }, m0 = s.milk.total;
    for (let i = 0; i < Math.round(DAY.hours / DAY.step); i++) s.advance(DAY.step);
    const warn = [...new Set(s.alerts.filter((a) => a.level !== 'info' && a.t >= t0).map((a) => a.title))];
    return { k: { ...s.kpi }, w: s.water.tot, w0, e: s.energy.tot, e0, b: s.biogas.tot, b0, milk: s.milk.total - m0, warn };
  });
  const row = (name, f) => [name, ...out.map(f)];
  const rows = [
    row('Water recycled', (o) => `${num(o.w.recycled - o.w0.recycled)} L`),
    row('Fresh water used', (o) => `${num(o.w.fresh - o.w0.fresh)} L`),
    row('Rain harvested', (o) => `${num(o.w.rain - o.w0.rain)} L`),
    row('Solar energy', (o) => `${num((o.e.solar - o.e0.solar) / 1000, 1)} kWh`),
    row('Biogas generator energy', (o) => `${num((o.e.gen - o.e0.gen) / 1000, 1)} kWh`),
    row('Farm load', (o) => `${num((o.e.load - o.e0.load) / 1000, 1)} kWh`),
    row('Grid energy', (o) => `${num((o.e.grid - o.e0.grid) / 1000, 2)} kWh`),
    row('Biogas made', (o) => `${num(o.b.gas - o.b0.gas, 1)} m³`),
    row('Milk', (o) => `${num(o.milk, 1)} L`),
    row('Water reuse KPI', (o) => `${num(o.k.water)} %`),
    row('Renewable power KPI', (o) => `${num(o.k.renewable)} %`),
    row('Waste collected KPI', (o) => `${num(o.k.waste)} %`),
    row('Welfare KPI', (o) => num(o.k.welfare)),
    row('Hygiene KPI', (o) => num(o.k.hygiene)),
    Object.assign(row('Farm score', (o) => String(o.k.score)), { cls: 'total' }),
  ];
  table(host, ['At midnight', ...cases.map((c) => c[0])], rows, 'wide scen');
  const warn = $('#scenWarn');
  warn.textContent = '';
  H('b', '', 'Warnings raised during the 24 hours. ', warn);
  warn.append(cases.map((c, i) => `${c[0]}: ${out[i].warn.length ? out[i].warn.join(', ') : 'none'}`).join('. ') + '.');
}

/* ====================================================================
   Start
   ==================================================================== */
function start() {
  document.documentElement.classList.add('js');
  guard('nav', initNav);
  let sim = null, trace = null;
  guard('herd', () => { sim = createSim(); herdTables(sim); });
  guard('day', () => {
    trace = recordDay({ ...DAY, weather: 'sunny', heatwave: false });
    const L = trace.rows[trace.rows.length - 1], host = $('#heroTiles');
    tile(host, 'Water recycled', num(L.recycled), 'L', 'filtered and pumped back up');
    tile(host, 'Solar energy', num(L.solarWh / 1000, 1), 'kWh', `panel peak ${num(trace.panelPeak)} W`);
    tile(host, 'Biogas made', num(L.gasMade, 1), 'm³', 'from the herd’s dung');
    tile(host, 'Milk', num(L.milkTotal, 1), 'L', `two milkings, ${trace.herd.length} animals`);
    tile(host, 'Farm score', String(Math.round(L.score)), '/ 100', 'running score at midnight');
    initDay(trace);
  });
  if (sim) {
    guard('thi', () => initThi(sim.animals.map((a) => ({ name: a.name, breed: a.breed, baseTemp: a.baseTemp, baseHr: a.baseHr, heatTol: a.heatTol }))));
    guard('belt', () => initBelt(sim.animals));
    guard('gps', () => initGps(sim.animals));
  }
  setTimeout(() => guard('scen', scenarioTable), 60);
  // Figures above a deep-linked heading have just changed the page height: go there again.
  if (location.hash.length > 1) {
    const go = () => { try { document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView(); } catch (e) { /* bad hash */ } };
    go(); setTimeout(go, 150);
  }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
