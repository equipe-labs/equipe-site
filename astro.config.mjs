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
  // The one canonical host. www.equipe.im redirects here (vercel.json).
  site: 'https://equipe.im',
  // Static build for now. To add server routes, switch to @astrojs/vercel (docs/deploy.md).
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko', 'ja', 'zh-cn', 'es', 'pt-br', 'de', 'fr'],
    routing: { prefixDefaultLocale: false },
  },
  // Pages live at /path/ — canonical URLs, the sitemap and vercel.json's redirect all agree.
  trailingSlash: 'always',
  integrations: [sitemap({ i18n: { defaultLocale: 'en', locales } })],
});
