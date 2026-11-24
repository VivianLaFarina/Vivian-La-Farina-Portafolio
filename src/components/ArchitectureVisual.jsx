import { usePreferences } from '../context/PreferencesContext';

/** Lightweight SVG visual: deliberately no Three.js dependency. */
export function ArchitectureVisual() {
  const { motion, t } = usePreferences();
  return <div className={`hero-visual ${motion ? '' : 'hero-visual--paused'}`} aria-label={t.visualLabel} role="img">
    <div className="visual-grid" />
    <svg className="network-illustration" viewBox="0 0 520 480" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="net-line" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F59058" stopOpacity=".8"/><stop offset="1" stopColor="#A84A39" stopOpacity=".2" /></linearGradient>
        <linearGradient id="cube-face" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F4985C"/><stop offset="1" stopColor="#DD6836"/></linearGradient>
      </defs>
      <g fill="none" stroke="url(#net-line)" strokeWidth="1.5" strokeDasharray="5 8">
        <path d="M259 231 92 125M259 231 431 113M259 231 443 346M259 231 101 357" />
        <path d="M92 125 195 63 431 113M101 357 242 420 443 346" opacity=".45" />
      </g>
      <g fill="var(--visual-node)" stroke="var(--visual-stroke)" strokeWidth="1.5">
        <circle cx="92" cy="125" r="30"/><circle cx="431" cy="113" r="30"/>
        <circle cx="443" cy="346" r="30"/><circle cx="101" cy="357" r="30"/>
      </g>
      <g fill="none" stroke="#e67640" strokeWidth="2" strokeLinecap="round">
        <path d="M79 128h25m-12-12v25"/><path d="M417 114l10-10 11 11-11 10z"/>
        <path d="M432 343h22m-18-7v14m13-14v14"/><path d="M91 358l10-10 10 10-10 10z"/>
      </g>
      <g className="network-cube">
        <path d="m259 152 77 43v87l-77 44-77-44v-87Z" fill="var(--visual-panel)" stroke="#f08c52" strokeWidth="2"/>
        <path d="m259 152 77 43-77 45-77-45Z" fill="url(#cube-face)" opacity=".93" />
        <path d="m182 195 77 45v86l-77-44Z" fill="#b55234" opacity=".92" />
        <path d="m336 195-77 45v86l77-44Z" fill="#e87840" opacity=".92" />
        <path d="m259 152 0 88m-77-45 77 45 77-45" fill="none" stroke="#1b211e" strokeOpacity=".6" strokeWidth="1.5" />
        <path d="m226 175 78 43" stroke="#ffe5d2" strokeOpacity=".7" strokeWidth="2" />
      </g>
      <circle cx="259" cy="239" r="125" stroke="var(--visual-ring)" strokeWidth="1" fill="none" opacity=".43" />
      <circle cx="259" cy="239" r="178" stroke="var(--visual-ring)" strokeWidth="1" fill="none" strokeDasharray="3 15" opacity=".34" />
      <circle className="orbit-dot" cx="259" cy="62" r="6" fill="#f28a50" />
    </svg>
    <span className="visual-chip visual-chip--top">DATA GOVERNANCE</span>
    <span className="visual-chip visual-chip--left">CLOUD / INTEGRATION</span>
    <span className="visual-chip visual-chip--right">AI · HUMAN IN THE LOOP</span>
  </div>;
}
