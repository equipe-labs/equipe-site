// Blog helpers: which languages have articles, article lists, reading time, and the UI words of the blog.
// The blog is written in English first and Korean second; other languages get no blog pages yet (see BLOG_LANGS).
import { getCollection, type CollectionEntry } from 'astro:content';
import type { LocaleCode } from '../i18n';

export type Article = CollectionEntry<'blog'>;

/** Languages that have blog pages. Add a code here once its folder under src/content/blog/ has the articles. */
export const BLOG_LANGS = ['en', 'ko'] as const satisfies readonly LocaleCode[];
export type BlogLang = (typeof BLOG_LANGS)[number];
export const isBlogLang = (c: string): c is BlogLang => (BLOG_LANGS as readonly string[]).includes(c);
/** The language a locale reads the blog in: its own when it has one, else English. */
export const blogLangFor = (c: LocaleCode): BlogLang => (isBlogLang(c) ? c : 'en');

export const slugOf = (a: Article) => a.id.split('/').slice(1).join('/');

/** Published articles of a language, newest first. Fails the build when a file sits in the wrong language folder. */
export async function getArticles(lang: BlogLang): Promise<Article[]> {
  const all = await getCollection('blog', (a) => !a.data.draft);
  for (const a of all) {
    if (a.id.split('/')[0] !== a.data.lang) throw new Error(`blog/${a.id}: lang "${a.data.lang}" does not match its folder`);
  }
  return all.filter((a) => a.data.lang === lang).sort((x, y) => y.data.date.getTime() - x.data.date.getTime() || slugOf(x).localeCompare(slugOf(y)));
}

/** Languages in which a slug exists (for hreflang and the language menu). */
export async function languagesOf(slug: string): Promise<BlogLang[]> {
  const out: BlogLang[] = [];
  for (const l of BLOG_LANGS) if ((await getArticles(l)).some((a) => slugOf(a) === slug)) out.push(l);
  return out;
}

/** Minutes to read: 220 words a minute for Latin text, 500 characters a minute for Korean. */
export function readingMinutes(body: string, lang: BlogLang): number {
  const text = body.replace(/```[\s\S]*?```/g, ' ').replace(/<[^>]+>/g, ' ');
  if (lang === 'ko') return Math.max(1, Math.round(text.replace(/\s+/g, '').length / 500));
  return Math.max(1, Math.round((text.match(/\S+/g) ?? []).length / 220));
}

export const wordCount = (body: string) => (body.match(/\S+/g) ?? []).length;

export const blogPath = (lang: BlogLang, slug?: string) => `${lang === 'en' ? '' : `/${lang}`}/blog/${slug ? `${slug}/` : ''}`;

export const FACTS_LANGS = ['en', 'ko'] as const satisfies readonly LocaleCode[];

export const BLOG_UI = {
  en: {
    nav: 'Blog',
    facts: 'Facts',
    indexTitle: 'Blog — equipe',
    indexDesc: 'Guides for people who cannot code: launch a real product with an AI startup team, take a Claude artifact live, what it costs, and how your data stays safe.',
    h1: 'The equipe blog',
    lead: 'Plain-English guides for people who want to build and run a real product without writing code.',
    minRead: '{n} min read',
    by: 'By',
    published: 'Published',
    updated: 'Updated',
    toc: 'On this page',
    related: 'Keep reading',
    faq: 'Frequently asked questions',
    sources: 'Sources',
    accessed: 'read {date}',
    ctaTitle: 'Got an idea? Tell the PM.',
    ctaText: 'Your AI startup team builds, launches and keeps improving it. You approve what goes live. You do not need to know how to code.',
    aboutTitle: 'About this article',
    aboutText: 'Written by the equipe team at Umbriles Inc. We build equipe, so we have a stake in what we recommend. Facts about equipe come from our own pages; facts about other products come from their official pages, with the date we read them.',
    links: 'More from us',
    home: 'Home',
    rss: 'RSS feed',
    all: 'All articles',
    breadcrumb: 'Breadcrumb',
    langNote: 'This blog is available in English and Korean.',
  },
  ko: {
    nav: '블로그',
    facts: '핵심 사실',
    indexTitle: '블로그 — equipe',
    indexDesc: '코딩을 몰라도 AI 스타트업 팀과 진짜 서비스를 내는 방법, Claude 아티팩트를 서비스로 띄우는 법, 비용과 데이터 보안까지 쉬운 말로 정리한 글이에요.',
    h1: 'equipe 블로그',
    lead: '코드를 쓰지 않고도 진짜 제품을 만들고 운영하고 싶은 분을 위한 쉬운 가이드예요.',
    minRead: '읽는 데 {n}분',
    by: '글',
    published: '게시',
    updated: '수정',
    toc: '이 글의 목차',
    related: '이어서 읽기',
    faq: '자주 묻는 질문',
    sources: '출처',
    accessed: '{date} 확인',
    ctaTitle: '아이디어가 있나요? PM에게 말해 보세요.',
    ctaText: 'AI 스타트업 팀이 만들고, 출시하고, 계속 더 낫게 만들어요. 서비스가 공개되는 건 내가 승인해요. 코딩은 몰라도 돼요.',
    aboutTitle: '이 글에 대해',
    aboutText: 'Umbriles Inc.의 equipe 팀이 썼어요. 저희는 equipe를 만드는 회사라서, 추천에 이해관계가 있어요. equipe에 대한 사실은 저희 페이지에서, 다른 제품에 대한 사실은 해당 회사의 공식 페이지에서 가져오고 읽은 날짜를 적어 둬요.',
    links: '더 보기',
    home: '홈',
    rss: 'RSS 구독',
    all: '모든 글',
    breadcrumb: '이동 경로',
    langNote: '블로그는 영어와 한국어로 제공돼요.',
  },
} as const;
