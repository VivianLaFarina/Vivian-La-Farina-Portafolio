import { Link } from 'react-router-dom';
import { usePreferences } from '../context/PreferencesContext';
import { usePageTitle } from '../lib/seo';
import { PageHeading } from '../components/PageHeading';
export default function NotFound() {
  const { t } = usePreferences();
  usePageTitle(t.notFoundTitle, t.notFoundText);
  return <><PageHeading eyebrow="404" title={t.notFoundTitle} lead={t.notFoundText}/><div className="section-block section-block--first"><Link className="button button--primary" to="/">{t.backHome}</Link></div></>;
}
