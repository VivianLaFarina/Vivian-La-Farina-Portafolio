import { usePreferences } from '../context/PreferencesContext';
import { usePageTitle } from '../lib/seo';
import { PageHeading } from '../components/PageHeading';
import { ArticleCard } from '../components/ArticleCard';
import { articles } from '../content/articles';

export default function Blog() {
  const { t } = usePreferences();
  usePageTitle(t.blogTitle, t.blogLead);
  return <><PageHeading eyebrow={t.blogEyebrow} title={t.blogTitle} lead={t.blogLead}/><section className="section-block section-block--first"><div className="feature-grid feature-grid--two">{articles.map(article => <ArticleCard key={article.id} articleId={article.id}/>)}</div></section></>;
}
