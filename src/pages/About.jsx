import { usePreferences } from '../context/PreferencesContext';
import { usePageTitle } from '../lib/seo';
import { PageHeading } from '../components/PageHeading';
import { Portrait } from '../components/Portrait';

export default function About() {
  const { t } = usePreferences();
  usePageTitle(t.aboutTitle, t.aboutLead);
  return <>
    <PageHeading eyebrow={t.profileEyebrow} title={t.aboutTitle} lead={t.aboutLead}/>
    <section className="section-block section-block--first"><div className="profile-overview"><Portrait large /><div><p>{t.about1}</p><p>{t.about2}</p><p>{t.about3}</p></div></div><div className="tag-row">{['Enterprise Data','Data Architecture','Cloud','SAP Master Data','Data Governance','Cross-functional Delivery'].map(s => <span className="tag" key={s}>{s}</span>)}</div></section>
    <section className="section-block region-section"><span className="eyebrow">{t.regionTag}</span><h2>{t.regionTitle}</h2><div className="region-map" role="img" aria-label={t.regionTitle}>
      <div className="map-circle map-circle--one"/><div className="map-circle map-circle--two"/><div className="map-circle map-circle--three"/>
      <div className="map-center"><span>AMERICAS</span><span>EMEA</span><span>APAC</span></div>
      <svg viewBox="0 0 900 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><path d="M160 185 Q440 -65 740 185M160 185Q450 340 740 185" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="7 9" opacity=".5"/><circle cx="160" cy="185" r="7"/><circle cx="450" cy="100" r="7"/><circle cx="740" cy="185" r="7"/></svg>
    </div><p className="muted-note">{t.region}</p></section>
  </>;
}
