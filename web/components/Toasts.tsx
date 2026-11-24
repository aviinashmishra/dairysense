'use client';

import { useTwin } from './FarmProvider';
import { Icon } from './icons';

const ICON = { info: 'info', warn: 'warn', crit: 'crit' } as const;

export function Toasts() {
  const twin = useTwin();
  if (!twin) return null;
  return (
    <div className="toasts" role="status" aria-live="polite">
      {twin.state.toasts.map((t) => (
        <div key={t.id} className={`toast toast--${t.level}`}>
          <span className="toast__icon"><Icon name={ICON[t.level]} size={15} strokeWidth={2.2} /></span>
          <button type="button" className="toast__body" disabled={!t.go} onClick={() => { t.go?.(); twin.dismissToast(t.id); }}>
            {t.title && <b>{t.title}</b>}
            <span>{t.body}</span>
            {t.go && <em>Open <Icon name="arrowRight" size={12} /></em>}
          </button>
          <button type="button" className="icon-btn icon-btn--bare" aria-label="Dismiss" onClick={() => twin.dismissToast(t.id)}><Icon name="x" size={14} /></button>
        </div>
      ))}
    </div>
  );
}
