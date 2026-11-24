import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { articles } from '../content/articles';
import { usePreferences } from '../context/PreferencesContext';

export function ArticleCard({ articleId }) {
  const { language, t } = usePreferences();
  const post = articles.find(article => article.id === articleId);
  if (!post) return null;
  return <Link to={`/blog/${post.slug}`} className="content-card article-card">
    <span className="kicker">{post.date} · {t.architectureLabel}</span>
    <h3>{post.title[language]}</h3>
    <p>{post.summary[language]}</p>
    <span className="text-link">{t.blogOpen} <span aria-hidden="true">↗</span></span>
  </Link>;
}

ArticleCard.propTypes = { articleId: PropTypes.string.isRequired };
