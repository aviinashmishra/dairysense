import type { SVGProps } from 'react';

// One small stroke-icon set, drawn on a 24 grid.
const P: Record<string, string[]> = {
  sun: ['M12 3v2', 'M12 19v2', 'M4.2 4.2l1.4 1.4', 'M18.4 18.4l1.4 1.4', 'M3 12h2', 'M19 12h2', 'M4.2 19.8l1.4-1.4', 'M18.4 5.6l1.4-1.4', 'M12 8a4 4 0 100 8 4 4 0 000-8z'],
  moon: ['M20 14.5A8 8 0 019.5 4a7 7 0 1010.5 10.5z'],
  cloud: ['M7 18a4 4 0 01-.6-7.96A5.5 5.5 0 0117 9.5a4.25 4.25 0 01.5 8.5H7z'],
  rain: ['M7 15a4 4 0 01-.6-7.96A5.5 5.5 0 0117 6.5a4.25 4.25 0 01.5 8.5H7z', 'M8.5 18.5l-1 2.5', 'M12.5 18.5l-1 2.5', 'M16.5 18.5l-1 2.5'],
  play: ['M7 4.5v15l12-7.5-12-7.5z'],
  pause: ['M8 5v14', 'M16 5v14'],
  flame: ['M12 21a6 6 0 01-6-6c0-3 2-4.5 3-7 .5 2 1.5 3 2.5 3.5C11.5 8 12.5 5.5 12 3c3.5 2.5 6 6.5 6 12a6 6 0 01-6 6z'],
  flows: ['M4 7h9a3 3 0 010 6H9a3 3 0 000 6h11', 'M17 16l3 3-3 3', 'M4 7m-1.5 0a1.5 1.5 0 103 0 1.5 1.5 0 10-3 0'],
  tag: ['M3.5 12.5V5a1.5 1.5 0 011.5-1.5h7.5L21 12l-8.5 8.5-9-8z', 'M8 8h.01'],
  compass: ['M12 21a9 9 0 100-18 9 9 0 000 18z', 'M15.5 8.5l-2 5-5 2 2-5 5-2z'],
  chip: ['M8 5h8a3 3 0 013 3v8a3 3 0 01-3 3H8a3 3 0 01-3-3V8a3 3 0 013-3z', 'M9.5 9.5h5v5h-5z', 'M9 2v3', 'M15 2v3', 'M9 19v3', 'M15 19v3', 'M2 9h3', 'M2 15h3', 'M19 9h3', 'M19 15h3'],
  expand: ['M4 9V4h5', 'M20 9V4h-5', 'M4 15v5h5', 'M20 15v5h-5'],
  arrowRight: ['M5 12h14', 'M13 6l6 6-6 6'],
  arrowLeft: ['M19 12H5', 'M11 6l-6 6 6 6'],
  arrowDown: ['M12 5v14', 'M6 13l6 6 6-6'],
  arrowUpRight: ['M7 17L17 7', 'M8 7h9v9'],
  x: ['M6 6l12 12', 'M18 6L6 18'],
  check: ['M5 12.5l4.5 4.5L19 7.5'],
  warn: ['M12 4l9 16H3l9-16z', 'M12 10v4.5', 'M12 17.5h.01'],
  crit: ['M8.5 3h7L21 8.5v7L15.5 21h-7L3 15.5v-7L8.5 3z', 'M12 8v5', 'M12 16.5h.01'],
  info: ['M12 21a9 9 0 100-18 9 9 0 000 18z', 'M12 11v5.5', 'M12 7.5h.01'],
  drop: ['M12 3.5c3.5 4 6 7 6 10.5a6 6 0 01-12 0c0-3.5 2.5-6.5 6-10.5z'],
  bolt: ['M13 2.5L5 13.5h6l-1 8 8-11h-6l1-8z'],
  battery: ['M4 8h13a1.5 1.5 0 011.5 1.5v5A1.5 1.5 0 0117 16H4a1.5 1.5 0 01-1.5-1.5v-5A1.5 1.5 0 014 8z', 'M21.5 11v2'],
  fan: ['M12 12c0-4 1-7 4-7s3 5-4 7z', 'M12 12c4 0 7 1 7 4s-5 3-7-4z', 'M12 12c0 4-1 7-4 7s-3-5 4-7z', 'M12 12c-4 0-7-1-7-4s5-3 7 4z'],
  pulse: ['M3 12h4l2.5-6 4 12 2.5-6H21'],
  thermo: ['M10 13.5V5a2 2 0 114 0v8.5a4 4 0 11-4 0z', 'M12 16.5v-6'],
  heart: ['M12 20s-7.5-4.5-7.5-10A4.5 4.5 0 0112 7a4.5 4.5 0 017.5 3c0 5.5-7.5 10-7.5 10z'],
  recycle: ['M7 19H4.5a1.5 1.5 0 01-1.3-2.25L5.5 13', 'M11 19h8a1.5 1.5 0 001.3-2.25L19 14.5', 'M14 16l-3 3 3 3', 'M8.3 10.5L12 4.2a1.5 1.5 0 012.6 0l1.9 3.3', 'M12.5 7.5l4 0 .5-4', 'M3.5 11.5l2-1.5 2 3.5'],
  leaf: ['M20 4C10 4 5 9 5 15c0 1.5.4 2.8 1 4', 'M20 4c1 12-4 17-10 17-1.5 0-2.8-.4-4-1', 'M6 20C8 14 11.5 10 16 8'],
  search: ['M11 18a7 7 0 100-14 7 7 0 000 14z', 'M20 20l-4-4'],
  pin: ['M12 21s-6.5-5.5-6.5-11a6.5 6.5 0 0113 0c0 5.5-6.5 11-6.5 11z', 'M12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z'],
  phone: ['M8 2.5h8A1.5 1.5 0 0117.5 4v16a1.5 1.5 0 01-1.5 1.5H8A1.5 1.5 0 016.5 20V4A1.5 1.5 0 018 2.5z', 'M11 18.5h2'],
  bell: ['M6 16.5V11a6 6 0 0112 0v5.5l1.5 2h-15l1.5-2z', 'M10 21h4'],
  herd: ['M5 9l-2-3', 'M19 9l2-3', 'M5 9a7 7 0 0014 0', 'M7 12c0 5 2 8 5 8s5-3 5-8', 'M10 16h.01', 'M14 16h.01', 'M9.5 10.5h.01', 'M14.5 10.5h.01'],
  gauge: ['M4 16a8 8 0 1116 0', 'M12 16l3.5-5', 'M12 16h.01'],
  wifi: ['M4 10a12 12 0 0116 0', 'M7 13.5a7.5 7.5 0 0110 0', 'M10 17a3 3 0 014 0', 'M12 20h.01'],
  chevronRight: ['M9 6l6 6-6 6'],
  chevronDown: ['M6 9l6 6 6-6'],
  panel: ['M4 5h16v14H4z', 'M15 5v14'],
  keyboard: ['M3 7h18v10H3z', 'M7 11h.01', 'M11 11h.01', 'M15 11h.01', 'M8 14h8'],
  milk: ['M9 3h6v3l2 4v10a1 1 0 01-1 1H8a1 1 0 01-1-1V10l2-4V3z', 'M7 13h10'],
  sprout: ['M12 21v-9', 'M12 12c0-3-2-5-6-5 0 3 2 5 6 5z', 'M12 15c0-3.5 2.5-6 7-6 0 3.5-2.5 6-7 6z'],
  wash: ['M5 4v4', 'M9 3v5', 'M13 4v4', 'M17 3v5', 'M4 12h16l-2 8H6l-2-8z'],
  fast: ['M4 6l8 6-8 6V6z', 'M13 6l8 6-8 6V6z'],
  home: ['M4 11l8-7 8 7v8a1 1 0 01-1 1h-4v-6h-6v6H5a1 1 0 01-1-1v-8z'],
};

export type IconName = keyof typeof P;

export function Icon({ name, size = 18, solid = false, ...rest }: { name: string; size?: number; solid?: boolean } & SVGProps<SVGSVGElement>) {
  const paths = P[name] ?? P.info;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={solid ? 'currentColor' : 'none'} stroke="currentColor"
      strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...rest}>
      {paths.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

/** The mark: a milk drop carrying a pulse line. */
export function Logo({ size = 30 }: { size?: number }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true" focusable="false" className="logo-mark">
      <path d="M16 2.5c5.5 6.2 9.5 10.8 9.5 16.2a9.5 9.5 0 01-19 0C6.5 13.3 10.5 8.7 16 2.5z" fill="var(--brand)" />
      <path d="M9.5 19h3.2l1.7-4.2 3 8 1.7-3.8h3.4" fill="none" stroke="var(--on-brand)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Wordmark({ sub = false }: { sub?: boolean }) {
  return (
    <span className="wordmark">
      <Logo />
      <span className="wordmark__text">
        <span className="wordmark__name"><i>Dairy</i> Sense</span>
        {sub && <span className="wordmark__sub">Sustainable Smart Dairy Farm</span>}
      </span>
    </span>
  );
}
