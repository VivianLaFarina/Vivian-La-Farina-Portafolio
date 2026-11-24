import articlesData from './posts.js';

/** Add new posts in posts.js; listing and detail routing derive from this collection. */
export const articles = Object.entries(articlesData)
  .map(([id, item]) => ({ id, ...item }))
  .sort((a, b) => b.date.localeCompare(a.date));

export function getArticleBySlug(slug) {
  return articles.find(article => article.slug === slug) ?? null;
}
