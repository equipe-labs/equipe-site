import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Keep in sync with src/i18n/locales.ts (slug -> hreflang). Languages without a
// translation file have no pages, so they never appear in the sitemap.
const locales = {
  en: 'en',
  ko: 'ko',
  ja: 'ja',
  'zh-cn': 'zh-CN',
  es: 'es',
  'pt-br': 'pt-BR',
  de: 'de',
  fr: 'fr',
};

export default defineConfig({
  site: 'https://equipe.im',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko', 'ja', 'zh-cn', 'es', 'pt-br', 'de', 'fr'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap({ i18n: { defaultLocale: 'en', locales } })],
});
