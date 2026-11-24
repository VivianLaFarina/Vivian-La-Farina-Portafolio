import { Link } from 'react-router-dom';
import { usePreferences } from '../context/PreferencesContext';

export function SiteFooter() {
  const { t, motion, toggleMotion } = usePreferences();
  return <footer className="site-footer">
    <div className="container footer-content">
      <p>© {new Date().getFullYear()} Vivian La Farina · {t.copy}</p>
      <div className="footer-links">
        <a href="https://github.com/VivianLaFarina" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        <a href="https://www.linkedin.com/in/vivianlafarina/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        <Link to="/contact">{t.nav[5]}</Link>
        <button type="button" onClick={toggleMotion} aria-pressed={!motion}>{motion ? t.pause : t.resume}</button>
      </div>
    </div>
  </footer>;
}
