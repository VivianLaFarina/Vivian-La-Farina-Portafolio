import { Link } from 'react-router-dom';
import { usePreferences } from '../context/PreferencesContext';
import { usePageTitle } from '../lib/seo';
import { PageHeading } from '../components/PageHeading';
export default function Thanks() {
  const { t } = usePreferences();
  usePageTitle(t.thanksTitle, t.thanksText);
  return <><PageHeading eyebrow={t.contactTitle} title={t.thanksTitle} lead={t.thanksText}/><div className="section-block section-block--first"><Link className="button button--primary" to="/">{t.backHome}</Link></div></>;
}
