import { useEffect } from 'react';
import { usePreferences } from '../context/PreferencesContext';

export function usePageTitle(title, description) {
  const { language } = usePreferences();
  useEffect(() => {
    document.title = `${title} | Vivian La Farina`;
    const descriptionEl = document.querySelector('meta[name="description"]');
    if (description && descriptionEl) descriptionEl.setAttribute('content', description);
  }, [title, description, language]);
}
