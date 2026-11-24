export const LOCALES = ['en', 'es', 'pt'];
export const THEMES = ['dark', 'light'];

export function getStorageItem(key) {
  try { return window.localStorage.getItem(key); } catch { return null; }
}
export function setStorageItem(key, value) {
  try { window.localStorage.setItem(key, value); } catch { /* private browsing or storage disabled */ }
}
export function getInitialLanguage() {
  const saved = getStorageItem('vlf-language');
  if (LOCALES.includes(saved)) return saved;
  // English is the editorial default; visitors can select and persist ES or PT.
  return 'en';
}
export function getInitialTheme() {
  const saved = getStorageItem('vlf-theme');
  if (THEMES.includes(saved)) return saved;
  if (typeof window === 'undefined' || !window.matchMedia) return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
export function getInitialMotion() {
  if (getStorageItem('vlf-motion') === 'paused') return false;
  if (getStorageItem('vlf-motion') === 'enabled') return true;
  return !(typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);
}
