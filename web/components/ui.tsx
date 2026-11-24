'use client';

import { useId, useRef, useState, type ReactNode } from 'react';
import { Icon } from './icons';
import type { StatusKey } from '@/runtime/types';

const STATUS_ICON: Record<StatusKey | 'info', string> = { good: 'check', warn: 'warn', serious: 'warn', crit: 'crit', info: 'info' };

/** A state, always as icon + words, never colour alone. */
export function Status({ k, children, solid = false }: { k: StatusKey | 'info'; children: ReactNode; solid?: boolean }) {
  return (
    <span className={`status status--${k}${solid ? ' status--solid' : ''}`}>
      <Icon name={STATUS_ICON[k]} size={13} strokeWidth={2.2} />
      <span>{children}</span>
    </span>
  );
}

/** A level bar: the fill carries the state, the track is a lighter step of the same hue. */
export function Meter({ value, tone = 'brand', label, thick = false }: { value: number; tone?: string; label: string; thick?: boolean }) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <div className={`meter meter--${tone}${thick ? ' meter--thick' : ''}`} role="meter" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(pct)}>
      <i style={{ width: `${pct.toFixed(1)}%` }} />
    </div>
  );
}

export function Chip({ on = false, children, icon }: { on?: boolean; children: ReactNode; icon?: string }) {
  return <span className={`chip${on ? ' chip--on' : ''}`}>{icon && <Icon name={icon} size={12} />}{children}</span>;
}

export interface SegOption<T extends string | number> { value: T; label: string; icon?: string; title?: string }

export function Seg<T extends string | number>({ options, value, onChange, label, size = 'md', iconOnly = false }: {
  options: SegOption<T>[]; value: T | null; onChange: (v: T) => void; label: string; size?: 'sm' | 'md'; iconOnly?: boolean;
}) {
  return (
    <div className={`seg seg--${size}`} role="group" aria-label={label}>
      {options.map((o) => (
        <button key={String(o.value)} type="button" aria-pressed={o.value === value} title={o.title ?? (iconOnly ? o.label : undefined)}
          aria-label={iconOnly ? o.label : undefined} onClick={() => onChange(o.value)}>
          {o.icon && <Icon name={o.icon} size={size === 'sm' ? 14 : 16} />}
          {!iconOnly && <span>{o.label}</span>}
        </button>
      ))}
    </div>
  );
}

/** The farm score as a ring. The number is the figure; the ring is the meter. */
export function Ring({ value, size = 56, stroke = 5, children }: { value: number; size?: number; stroke?: number; children?: ReactNode }) {
  const r = (size - stroke) / 2, c = 2 * Math.PI * r, f = Math.max(0, Math.min(1, value));
  return (
    <span className="ring" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--ring-track)" strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--ring-fill)" strokeWidth={stroke} strokeLinecap="round"
          strokeDasharray={`${(c * f).toFixed(1)} ${c.toFixed(1)}`} transform={`rotate(-90 ${size / 2} ${size / 2})`} />
      </svg>
      <span className="ring__label">{children}</span>
    </span>
  );
}

/**
 * A 24-hour trace of one vital. One series, so no legend: the tile title names
 * it. A dashed-free hairline marks the animal's own baseline; hover reads any point.
 */
export function Spark({ data, min, max, base, format, times }: {
  data: number[]; min: number; max: number; base?: number; format: (v: number) => string; times: string[];
}) {
  const id = useId();
  const box = useRef<SVGSVGElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  const W = 160, H = 44, padX = 5, padY = 6;
  if (data.length < 2) return <svg className="spark" viewBox={`0 0 ${W} ${H}`} />;
  const lo = Math.min(min, ...data), hi = Math.max(max, ...data), span = hi - lo || 1;
  const X = (i: number) => padX + (i / (data.length - 1)) * (W - padX * 2);
  const Y = (v: number) => H - padY - ((v - lo) / span) * (H - padY * 2);
  const line = data.map((v, i) => `${i ? 'L' : 'M'}${X(i).toFixed(1)} ${Y(v).toFixed(1)}`).join(' ');
  const at = hover ?? data.length - 1;
  const move = (clientX: number) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    setHover(Math.max(0, Math.min(data.length - 1, Math.round(((clientX - r.left) / r.width) * (data.length - 1)))));
  };
  return (
    <div className="spark-wrap">
      <svg ref={box} className="spark" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" role="img" aria-labelledby={id}
        onPointerMove={(e) => move(e.clientX)} onPointerLeave={() => setHover(null)}>
        <title id={id}>{`Last 24 hours, now ${format(data[data.length - 1])}`}</title>
        <path d={`${line} L${X(data.length - 1).toFixed(1)} ${H} L${X(0).toFixed(1)} ${H} Z`} className="spark__area" />
        {base != null && <line x1={0} x2={W} y1={Y(base)} y2={Y(base)} className="spark__base" vectorEffect="non-scaling-stroke" />}
        {hover != null && <line x1={X(at)} x2={X(at)} y1={0} y2={H} className="spark__cross" vectorEffect="non-scaling-stroke" />}
        <path d={line} className="spark__line" vectorEffect="non-scaling-stroke" />
      </svg>
      <span className="spark__dot" style={{ left: `${(X(at) / W) * 100}%`, top: `${(Y(data[at]) / H) * 100}%` }} aria-hidden="true" />
      <small className="spark__hint">{hover != null ? `${times[at]} · ${format(data[at])}` : 'last 24 h'}</small>
    </div>
  );
}
