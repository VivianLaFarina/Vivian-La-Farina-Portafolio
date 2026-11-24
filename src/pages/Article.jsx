import { Link, useParams } from 'react-router-dom';
import { usePreferences } from '../context/PreferencesContext';
import { usePageTitle } from '../lib/seo';
import { getArticleBySlug } from '../content/articles';
import { PageHeading } from '../components/PageHeading';

export default function Article() {
  const { slug } = useParams();
  const { language, t } = usePreferences();
  const post = getArticleBySlug(slug);
  usePageTitle(post ? post.title[language] : t.notFoundTitle, post?.summary[language]);
  if (!post) return <PageHeading eyebrow="404" title={t.notFoundTitle} lead={t.notFoundText}/>;
  return <>
    <PageHeading eyebrow={t.blogTitle} title={post.title[language]} lead={post.summary[language]} />
    <article className="article-content">
      <p className="article-date">{post.date} · {t.written}</p>
      {post.sections[language].map(([title, body]) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}
      <div className="source-box"><span>{t.articleReference}</span><a href={post.source} target="_blank" rel="noopener noreferrer">{t.src} <span aria-hidden="true">↗</span></a>
        {post.id === 'iceberg' && <a href="https://docs.snowflake.com/en/release-notes/2026/other/2026-03-04-iceberg-v3-support-preview" target="_blank" rel="noopener noreferrer">Snowflake release notes <span aria-hidden="true">↗</span></a>}
      </div>
      <p className="article-disclaimer">{t.articleDisclaimer}</p>
      <Link to="/blog" className="text-link">← {t.explore}</Link>
    </article>
  </>;
}
