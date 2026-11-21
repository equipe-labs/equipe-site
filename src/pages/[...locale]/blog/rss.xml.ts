// RSS 2.0 feed per blog language: /blog/rss.xml and /ko/blog/rss.xml.
import type { APIRoute } from 'astro';
import { BLOG_LANGS, BLOG_UI, blogPath, getArticles, slugOf, type BlogLang } from '../../../data/blog';
import { getLocale } from '../../../i18n';

export function getStaticPaths() {
  return BLOG_LANGS.map((l) => ({ params: { locale: getLocale(l).slug || undefined }, props: { lang: l } }));
}
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]!);

export const GET: APIRoute = async ({ props, site }) => {
  const lang = (props as { lang: BlogLang }).lang;
  const base = site!.href.replace(/\/$/, '');
  const articles = await getArticles(lang);
  const items = articles
    .map((a) => {
      const link = base + blogPath(lang, slugOf(a));
      return `<item><title>${esc(a.data.title)}</title><link>${link}</link><guid isPermaLink="true">${link}</guid><pubDate>${(a.data.updated ?? a.data.date).toUTCString()}</pubDate><dc:creator>${esc(a.data.author)}</dc:creator><description>${esc(a.data.description)}</description>${a.data.tags.map((t) => `<category>${esc(t)}</category>`).join('')}</item>`;
    })
    .join('');
  const self = base + blogPath(lang) + 'rss.xml';
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"><channel><title>equipe blog</title><link>${base + blogPath(lang)}</link><description>${esc(BLOG_UI[lang].indexDesc)}</description><language>${getLocale(lang).lang}</language><atom:link href="${self}" rel="self" type="application/rss+xml"/>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
