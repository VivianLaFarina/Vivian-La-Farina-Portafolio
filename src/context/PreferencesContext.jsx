import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import translations from '../content/translations.json';
import { getInitialLanguage, getInitialMotion, getInitialTheme, setStorageItem } from '../lib/preferences';

const PreferencesContext = createContext(null);

export function PreferencesProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [theme, setTheme] = useState(getInitialTheme);
  const [motion, setMotion] = useState(getInitialMotion);

  useEffect(() => {
    document.documentElement.lang = language;
    setStorageItem('vlf-language', language);
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#121714' : '#e6e9e7');
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.motion = motion ? 'enabled' : 'paused';
  }, [motion]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    theme,
    toggleTheme: () => setTheme(previous => {
      const next = previous === 'dark' ? 'light' : 'dark';
      setStorageItem('vlf-theme', next);
      return next;
    }),
    motion,
    toggleMotion: () => setMotion(previous => {
      const next = !previous;
      setStorageItem('vlf-motion', next ? 'enabled' : 'paused');
      return next;
    }),
    t: translations[language],
  }), [language, theme, motion]);

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error('usePreferences must be used inside PreferencesProvider');
  return context;
}
