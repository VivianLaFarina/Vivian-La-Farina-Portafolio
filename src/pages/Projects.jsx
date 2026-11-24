import { usePreferences } from '../context/PreferencesContext';
import { usePageTitle } from '../lib/seo';
import { PageHeading } from '../components/PageHeading';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { SupplierLab } from '../components/SupplierLab';

export default function Projects() {
  const { t } = usePreferences();
  usePageTitle(t.projectsTitle, t.introProjects);
  return <>
    <PageHeading eyebrow={t.projectsEyebrow} title={t.projectsTitle} lead={t.introProjects} />
    <section className="section-block section-block--first"><span className="eyebrow">{t.prototype}</span><h2>Supplier Master Data Lab</h2><p className="section-lead">{t.labDesc}</p>
      <ArchitectureDiagram /><SupplierLab />
      <div className="tag-row">{['Python','SQL','SQLite','Synthetic ERP data','Data quality'].map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
    </section>
    <section className="section-block"><h2>{t.otherWork}</h2><div className="feature-grid">
      <div className="content-card"><span className="kicker">{t.workTag1}</span><h3>{t.workTitle1}</h3><p>{t.workDesc1}</p></div>
      <div className="content-card"><span className="kicker">{t.workTag2}</span><h3>{t.workTitle2}</h3><p>{t.workDesc2}</p></div>
      <div className="content-card"><span className="kicker">{t.workTag3}</span><h3>{t.workTitle3}</h3><p>{t.workDesc3}</p></div>
    </div></section>
  </>;
}
