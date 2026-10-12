// The eight languages the site is meant to serve. Which of them actually get pages
// is decided by which `src/i18n/<code>.ts` files exist (see ./index.ts).
interface LocaleShape {
  /** Locale code, also the file name: src/i18n/<code>.ts */
  code: string;
  /** URL path segment; empty for the default locale (served at `/`). */
  slug: string;
  /** Value for <html lang> and hreflang. */
  lang: string;
  /** Open Graph locale, e.g. ko_KR. */
  og: string;
  /** The language's own name, shown in the language menu. */
  name: string;
}

export const LOCALES = [
  { code: 'en', slug: '', lang: 'en', og: 'en_US', name: 'English' },
  { code: 'ko', slug: 'ko', lang: 'ko', og: 'ko_KR', name: '한국어' },
  { code: 'ja', slug: 'ja', lang: 'ja', og: 'ja_JP', name: '日本語' },
  { code: 'zh-CN', slug: 'zh-cn', lang: 'zh-CN', og: 'zh_CN', name: '简体中文' },
  { code: 'es', slug: 'es', lang: 'es', og: 'es_ES', name: 'Español' },
  { code: 'pt-BR', slug: 'pt-br', lang: 'pt-BR', og: 'pt_BR', name: 'Português (Brasil)' },
  { code: 'de', slug: 'de', lang: 'de', og: 'de_DE', name: 'Deutsch' },
  { code: 'fr', slug: 'fr', lang: 'fr', og: 'fr_FR', name: 'Français' },
] as const satisfies readonly LocaleShape[];

export type LocaleInfo = (typeof LOCALES)[number];

export type LocaleCode = (typeof LOCALES)[number]['code'];
export const DEFAULT_LOCALE: LocaleCode = 'en';
