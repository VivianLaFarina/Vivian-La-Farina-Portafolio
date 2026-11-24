import { Link } from 'react-router-dom';
import { usePreferences } from '../context/PreferencesContext';
import { usePageTitle } from '../lib/seo';
import { ArchitectureVisual } from '../components/ArchitectureVisual';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { ArticleCard } from '../components/ArticleCard';

export default function Home() {
  const { t } = usePreferences();
  usePageTitle(t.architectureLabel, t.heroLead);
  return <>
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">{t.heroLabel}</span>
        <h1 className="hero-name"><span>Vivian</span><span className="hero-last">La Farina</span></h1>
        <p className="hero-role">{t.heroTag}</p>
        <p className="hero-description">{t.heroLead}</p>
        <div className="action-row"><Link className="button button--primary" to="/projects">{t.seeProjects} <span aria-hidden="true">↗</span></Link><Link className="button button--secondary" to="/blog">{t.readBlog} <span aria-hidden="true">↗</span></Link></div>
      </div>
      <ArchitectureVisual />
    </section>
    <section className="metric-bar" aria-label={t.highlights}>
      <div><strong>40+</strong><span>{t.metricContributed}</span></div>
      <div><strong>3</strong><span>{t.metricRegions}</span></div>
      <div><strong>01</strong><span>{t.metricMission}</span></div>
    </section>
    <section className="section-block">
      <div className="section-top"><div><span className="eyebrow">{t.featured}</span><h2>{t.featuredTitle}</h2><p className="section-lead">{t.featuredText}</p></div><Link to="/projects" className="text-link">{t.labLink} <span aria-hidden="true">↗</span></Link></div>
      <ArchitectureDiagram />
    </section>
    <section className="section-block"><span className="eyebrow">{t.focus}</span><h2>{t.focusTitle}</h2><div className="feature-grid">{t.areas.map((title, index) => <div className="content-card" key={title}><h3>{title}</h3><p>{t.areaDesc[index]}</p></div>)}</div></section>
    <section className="section-block"><div className="section-top"><div><span className="eyebrow">{t.latest}</span><h2>{t.latestTitle}</h2></div><Link to="/blog" className="text-link">{t.explore} <span aria-hidden="true">↗</span></Link></div><div className="feature-grid feature-grid--two"><ArticleCard articleId="iceberg"/><ArticleCard articleId="fabric"/></div></section>
  </>;
}
