import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePreferences } from '../context/PreferencesContext';

export function Portrait({ large = false }) {
  const [src, setSrc] = useState('https://github.com/VivianLaFarina.png');
  const { t } = usePreferences();
  return <Link to="/about" className={`portrait ${large ? 'portrait--large' : ''}`} aria-label={t.navAboutPortrait}>
    <img src={src} alt={large ? 'Vivian La Farina' : ''} loading="lazy" onError={() => setSrc('/assets/portrait-fallback.svg')} />
  </Link>;
}

Portrait.propTypes = { large: PropTypes.bool };
