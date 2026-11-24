import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { usePreferences } from '../context/PreferencesContext';
import { Portrait } from './Portrait';

const LINKS = [ ['/', 0], ['/projects', 1], ['/about', 2], ['/blog', 3], ['/gallery', 4], ['/contact', 5] ];

function Icon({ type }) {
  return type === 'sun'
    ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>
    : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M20.8 15.4A9 9 0 0 1 8.6 3.2 9 9 0 1 0 20.8 15.4Z"/></svg>;
}

export function SiteHeader() {
  const { language, setLanguage, theme, toggleTheme, t } = usePreferences();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuButton = useRef(null);
  const menu = useRef(null);

  function toggleMenu() {
    if (open) {
      setOpen(false);
      return;
    }
    setOpen(true);
  }

  useEffect(() => {
    if (open) menu.current?.querySelector('a')?.focus();
  }, [open]);
  useEffect(() => { setOpen(false); }, [location.pathname]);

  function dismissMenu(event) {
    if (!open || event.key !== 'Escape') return;
    setOpen(false);
    menuButton.current?.focus();
  }

  return <header className="site-header" onKeyDown={dismissMenu}>
    <div className="container header-inner">
      <Link className="brand" to="/" aria-label={`Vivian La Farina · ${t.nav[0]}`}>
        <span className="monogram">VLF</span><span className="brand-caption">DATA / ARCHITECTURE<br />PORTFOLIO</span>
      </Link>
      <nav id="site-nav" ref={menu} className={`main-nav ${open ? 'main-nav--open' : ''}`} aria-label={t.primaryNav}>
        {LINKS.map(([path, i]) => <NavLink key={path} end={path === '/'} to={path} onClick={() => setOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>{t.nav[i]}</NavLink>)}
      </nav>
      <div className="header-tools">
        <div className="language-switch" role="group" aria-label={t.langLabel}>
          {['en','es','pt'].map(lang => <button className={`language-button ${language === lang ? 'language-button--active' : ''}`} key={lang} type="button" aria-pressed={language === lang} onClick={() => setLanguage(lang)}>{lang.toUpperCase()}</button>)}
        </div>
        <button type="button" className="theme-toggle" onClick={toggleTheme} title={theme === 'dark' ? t.themeLight : t.themeDark} aria-label={theme === 'dark' ? t.themeLight : t.themeDark}>
          <Icon type={theme === 'dark' ? 'sun' : 'moon'} />
          <span className="theme-toggle-label">{theme === 'dark' ? t.light : t.dark}</span>
        </button>
        <Portrait />
        <button className="menu-toggle" ref={menuButton} type="button" onClick={toggleMenu} aria-controls="site-nav" aria-expanded={open} aria-label={open ? t.hideMenu : t.showMenu}><span aria-hidden="true">{open ? '✕' : '☰'}</span></button>
      </div>
    </div>
  </header>;
}

Icon.propTypes = { type: PropTypes.oneOf(['sun', 'moon']).isRequired };
