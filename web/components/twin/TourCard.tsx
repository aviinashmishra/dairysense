'use client';

import { Icon } from '../icons';
import { FLOW } from '@/runtime/format';
import { STEPS } from '@/runtime/tour';
import type { Twin } from '@/runtime/twin';

export function TourCard({ twin }: { twin: Twin }) {
  const s = twin.state, sim = twin.sim, step = STEPS[s.step];
  const last = s.step === STEPS.length - 1;
  const w = sim.water.tot, e = sim.energy.tot, b = sim.biogas.tot;

  return (
    <aside className="tour panel" aria-label="Guided tour">
      <div className="tour__progress" aria-hidden="true"><i style={{ width: `${((s.step + 1) / STEPS.length) * 100}%` }} /></div>
      <div className="tour__scroll" key={step.id}>
        <header className="tour__head">
          <span className="tour__badge">{step.badge}</span>
          <div>
            <p className="eyebrow">{step.kicker}</p>
            <h2>{step.title}</h2>
          </div>
          <button type="button" className="icon-btn icon-btn--bare" onClick={() => twin.setTour(false)} aria-label="Close the tour and explore freely" title="Close the tour">
            <Icon name="x" size={16} />
          </button>
        </header>

        <div className="tour__body" aria-live="polite">
          <p className="tour__lead">{step.lead}</p>
          {step.steps && (
            <ol className="tour__chain">
              {step.steps.map((x, i) => <li key={x}><b>{i + 1}</b>{x}</li>)}
            </ol>
          )}
          {step.points && (
            <ul className="tour__points">
              {step.points.map((x) => <li key={x}><Icon name="check" size={14} strokeWidth={2.4} />{x}</li>)}
            </ul>
          )}
          {step.legend && (
            <ul className="tour__legend">
              {step.legend.map(([k, text]) => <li key={k}><i style={{ background: FLOW[k].color }} /><span><b>{FLOW[k].label}</b>{text}</span></li>)}
            </ul>
          )}
          {step.summary && (
            <div className="tour__summary">
              <div><b>{w.recycled.toFixed(0)} L</b><span>water recycled</span></div>
              <div><b>{(e.solar / 1000).toFixed(1)} kWh</b><span>solar energy made</span></div>
              <div><b>{b.gas.toFixed(1)} m³</b><span>biogas from dung</span></div>
              <div><b>{sim.milk.total.toFixed(0)} L</b><span>milk collected</span></div>
              <p>in the {Math.max(0.1, (sim.t - 32) / 24).toFixed(1)} farm days you have been watching.</p>
            </div>
          )}
          <p className="tour__purpose">{step.purpose}</p>
        </div>

        {step.actions && (
          <div className="tour__actions">
            <span className="eyebrow">Try it</span>
            <div>
              {step.actions.map((a) => <button key={a.id} type="button" className="btn btn--soft btn--sm" onClick={() => twin.runAction(a.id)}>{a.label}</button>)}
            </div>
          </div>
        )}
      </div>

      <footer className="tour__nav">
        <button type="button" className="btn btn--ghost btn--sm" onClick={() => twin.goStep(s.step - 1)} disabled={s.step === 0}>
          <Icon name="arrowLeft" size={15} />Back
        </button>
        <div className="tour__dots">
          {STEPS.map((x, i) => (
            <button key={x.id} type="button" aria-label={`${x.title}, stop ${i + 1} of ${STEPS.length}`} aria-current={i === s.step ? 'step' : undefined} title={x.title} onClick={() => twin.goStep(i)} />
          ))}
        </div>
        <button type="button" className="btn btn--primary btn--sm" onClick={() => twin.goStep(s.step + 1)}>
          {last ? 'Restart' : 'Next'}<Icon name="arrowRight" size={15} />
        </button>
      </footer>
      <label className="tour__auto">
        <input type="checkbox" checked={s.auto} onChange={(ev) => twin.setAuto(ev.target.checked)} />
        <span className="switch" aria-hidden="true" />
        Auto-play the tour
      </label>
    </aside>
  );
}
