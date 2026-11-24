import { useEffect, useRef } from 'react';
import { usePreferences } from '../context/PreferencesContext';

/** Decorative only: never replaces the native cursor on touch or reduced-motion devices. */
export function BoxCursor() {
  const cursor = useRef(null);
  const { motion } = usePreferences();
  useEffect(() => {
    const el = cursor.current;
    if (!el || !motion || !window.matchMedia('(pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)').matches) return;
    let raf = 0;
    function move(e) {
      if (e.pointerType !== 'mouse') { hide(); return; }
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${e.clientX - 13}px, ${e.clientY - 13}px, 0)`;
        el.dataset.visible = 'true';
      });
    }
    function hide() {
      cancelAnimationFrame(raf);
      el.dataset.visible = 'false';
    }
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', hide);
    window.addEventListener('blur', hide);
    return () => {
      hide();
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', hide);
      window.removeEventListener('blur', hide);
    };
  }, [motion]);
  return motion ? <span ref={cursor} className="box-cursor" aria-hidden="true" /> : null;
}
