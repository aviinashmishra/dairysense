'use client';

import { useEffect, useRef } from 'react';
import { useTwin } from './FarmProvider';
import { AI_STATUS, FLOW } from '@/runtime/format';
import { CHAPTERS, STATION_STEP, STEPS } from '@/runtime/tour';
import type { FlowKey, Sim } from '@/runtime/types';

const STATIONS: { key: string; title: string; flow: FlowKey; info: (s: Sim) => string }[] = [
  { key: 'shed', title: 'Cow & buffalo shed', flow: 'fodder', info: (s) => `${s.gate.inShed} inside${s.milk.milking ? ' · milking' : s.water.washing > 0 ? ' · washing' : ''}` },
  { key: 'solar', title: 'Solar energy', flow: 'energy', info: (s) => `${s.energy.solarW.toFixed(0)} W · battery ${((100 * s.energy.batWh) / s.energy.batCap).toFixed(0)} %` },
  { key: 'water', title: 'Water recycling', flow: 'water', info: (s) => `${s.water.storage.toFixed(0)} L stored${s.water.pump ? ' · pump on' : ''}` },
  { key: 'monitor', title: 'Smart monitoring', flow: 'data', info: (s) => `${s.climate.shedT.toFixed(1)} °C · ${s.climate.shedRH.toFixed(0)} % · THI ${s.climate.thi.toFixed(0)}` },
  { key: 'gate', title: 'Animal detection', flow: 'data', info: (s) => `IR gate · ${s.gate.crossings} crossings` },
  { key: 'biogas', title: 'Biogas plant', flow: 'gas', info: (s) => `${s.biogas.gas.toFixed(1)} m³ gas${s.biogas.gen ? ' · generator on' : s.biogas.stove ? ' · stove on' : ''}` },
  { key: 'waste', title: 'Waste collection', flow: 'waste', info: (s) => `${s.biogas.inlet.toFixed(0)} kg in the inlet` },
  { key: 'plot', title: 'Compost & fodder', flow: 'fodder', info: (s) => `fodder ${(s.plot.biomass * 100).toFixed(0)} % grown` },
];

// The hero keeps to three tags that never crowd each other as the model turns.
const HERO_TAGS = ['shed', 'solar', 'biogas'];

/**
 * Live tags pinned to the model. React renders their text four times a second;
 * their position is written straight to the DOM every frame, so they track the
 * camera without re-rendering anything.
 */
export function Labels() {
  const twin = useTwin();
  const stationEls = useRef<(HTMLButtonElement | null)[]>([]);
  const cowEls = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (!twin) return;
    const pt = { x: 0, y: 0, ok: false };
    const shown = new WeakMap<HTMLElement, boolean>();
    const place = (el: HTMLElement | null, show: boolean) => {
      if (!el) return;
      const ins = twin.stage.insets;
      const ok = show && pt.ok && pt.x > ins.left + 60 && pt.x < innerWidth - ins.right - 60 && pt.y > ins.top + 64 && pt.y < innerHeight - ins.bottom;
      if (shown.get(el) !== ok) { shown.set(el, ok); el.classList.toggle('tag--off', !ok); }
      if (ok) el.style.transform = `translate3d(${pt.x.toFixed(1)}px,${pt.y.toFixed(1)}px,0) translate(-50%,-100%)`;
    };
    // Tags that would sit on top of one another fold down to their coloured dot
    // (the stop the tour is on keeps its text). Hover a dot to read it.
    const size = new WeakMap<HTMLElement, { w: number; h: number }>();
    const mini = new WeakMap<HTMLElement, boolean>();
    const rects: { l: number; r: number; t: number; b: number }[] = [];
    const order = STATIONS.map((_, i) => i);
    return twin.stage.onFrame(() => {
      const s = twin.state, landing = s.mode === 'landing';
      const wide = innerWidth > 900;
      const chapter = landing ? CHAPTERS.find((c) => c.id === s.chapter) : null;
      const step = !landing && s.tourOn ? STEPS[s.step] : null;
      const hot = (key: string) => (step ? STATION_STEP[key] === step.id : !!chapter?.stations.includes(key));
      order.sort((a, b) => Number(hot(STATIONS[b].key)) - Number(hot(STATIONS[a].key)) || a - b);
      rects.length = 0;
      for (const i of order) {
        const st = STATIONS[i], el = stationEls.current[i];
        if (!el) continue;
        twin.stage.anchor(st.key, pt);
        // The landing page shows only the tags its current chapter is about.
        const show = s.labels && (landing ? wide && (s.chapter === 'hero' ? HERO_TAGS.includes(st.key) : !!chapter?.stations.includes(st.key)) : true);
        place(el, show);
        if (!shown.get(el)) continue;
        const was = !!mini.get(el);
        if (!was) size.set(el, { w: el.offsetWidth, h: el.offsetHeight });
        const sz = size.get(el) ?? { w: 180, h: 44 }, pad = was ? 14 : 4;
        const r = { l: pt.x - sz.w / 2 - pad, r: pt.x + sz.w / 2 + pad, t: pt.y - sz.h - 6 - pad, b: pt.y + pad };
        const clash = rects.some((o) => r.l < o.r && r.r > o.l && r.t < o.b && r.b > o.t);
        if (clash !== was) { mini.set(el, clash); el.classList.toggle('tag--mini', clash); }
        if (!clash) rects.push(r);
      }
      twin.sim.animals.forEach((a, i) => {
        twin.stage.toScreen(a.x, 2.9, a.z, pt);
        const focused = a.id === s.focus && (step?.id === 'belt' || s.chapter === 'herd');
        place(cowEls.current[i], landing ? focused && s.chapter === 'herd' : a.ai.flagged || twin.world.state.selected === a.id || focused);
      });
    });
  }, [twin]);

  if (!twin) return null;
  const s = twin.state, sim = twin.sim, landing = s.mode === 'landing';
  const step = !landing && s.tourOn ? STEPS[s.step] : null;
  const chapter = landing ? CHAPTERS.find((c) => c.id === s.chapter) : null;

  return (
    <div className="tags" data-mode={s.mode} aria-hidden={landing || undefined}>
      {STATIONS.map((st, i) => {
        const hot = step ? STATION_STEP[st.key] === step.id : !!chapter?.stations.includes(st.key);
        return (
          <button key={st.key} type="button" ref={(el) => { stationEls.current[i] = el; }} tabIndex={landing ? -1 : 0}
            className={`tag tag--off${hot ? ' tag--hot' : ''}`}
            onClick={() => twin.goStep(STEPS.findIndex((x) => x.id === STATION_STEP[st.key]))}>
            <i className="tag__dot" style={{ background: FLOW[st.flow].color }} />
            <span className="tag__text">{st.title}<small>{st.info(sim)}</small></span>
          </button>
        );
      })}
      {sim.animals.map((a, i) => {
        const k = a.ai.flagged ? a.ai.key : 'healthy';
        return (
          <button key={a.id} type="button" ref={(el) => { cowEls.current[i] = el; }} tabIndex={landing ? -1 : 0}
            className="tag tag--cow tag--off" data-status={AI_STATUS[k]} onClick={() => twin.openAnimal(a.id)}>
            <span className="tag__text">{a.name} · {a.temp.toFixed(1)} °C{a.ai.flagged ? ` · ${a.ai.label}` : ''}</span>
          </button>
        );
      })}
    </div>
  );
}
