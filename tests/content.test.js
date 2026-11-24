import test from 'node:test';
import assert from 'node:assert/strict';
import translations from '../src/content/translations.json' with { type: 'json' };
import { articles, getArticleBySlug } from '../src/content/articles.js';

const locales = ['en', 'es', 'pt'];
test('all languages have matching translation keys', () => {
  const englishKeys = Object.keys(translations.en).sort();
  for (const locale of locales) assert.deepEqual(Object.keys(translations[locale]).sort(), englishKeys);
});
test('articles are uniquely addressable and fully translated', () => {
  assert.equal(new Set(articles.map(p => p.slug)).size, articles.length);
  for (const article of articles) {
    assert.equal(getArticleBySlug(article.slug)?.id, article.id);
    for (const locale of locales) {
      assert.ok(article.title[locale]);
      assert.ok(article.summary[locale]);
      assert.ok(article.sections[locale].length > 0);
    }
  }
});
