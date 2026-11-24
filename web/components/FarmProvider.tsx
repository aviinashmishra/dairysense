'use client';

import { createContext, useContext, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';
import type { Twin } from '@/runtime/twin';

interface FarmContext { twin: Twin | null; failed: boolean }
const Ctx = createContext<FarmContext>({ twin: null, failed: false });

const noSub = () => () => {};
const zero = () => 0;

/**
 * Owns the one WebGL canvas and the farm engine behind it. It sits in the
 * root layout, so the farm keeps running (and keeps its state) while the
 * visitor moves between the landing page and the twin.
 */
export function FarmProvider({ children }: { children: ReactNode }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [twin, setTwin] = useState<Twin | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let dead = false, made: Twin | null = null;
    // three.js and the engine load after first paint, so text is never held up by 3D.
    import('@/runtime/twin').then(({ createTwin }) => {
      if (dead || !canvas.current) return;
      try {
        made = createTwin(canvas.current);
        (window as unknown as { dairySense?: Twin }).dairySense = made;
        setTwin(made);
      } catch (err) {
        console.error('Dairy Sense could not start the 3D farm', err);
        setFailed(true);
      }
    }).catch((err) => { console.error(err); if (!dead) setFailed(true); });
    return () => { dead = true; made?.dispose(); setTwin(null); };
  }, []);

  return (
    <Ctx.Provider value={{ twin, failed }}>
      <canvas ref={canvas} className="stage" data-ready={twin ? '' : undefined} aria-label="Live 3D model of the Dairy Sense smart dairy farm" />
      {!twin && !failed && (
        <div className="stage-loading" role="status">
          <span className="stage-loading__dot" aria-hidden="true" />
          Waking the farm
        </div>
      )}
      {children}
    </Ctx.Provider>
  );
}

/** The live twin, re-rendering the caller four times a second and after every action. */
export function useTwin(): Twin | null {
  const { twin } = useContext(Ctx);
  useSyncExternalStore(twin ? twin.subscribe : noSub, twin ? twin.getVersion : zero, zero);
  return twin;
}

/** The twin without subscribing to its updates, for components that only send commands. */
export function useTwinStatic(): FarmContext {
  return useContext(Ctx);
}
