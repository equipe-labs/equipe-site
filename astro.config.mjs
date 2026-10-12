import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // The one canonical host. www.equipe.im redirects here (vercel.json).
  site: 'https://equipe.im',
  // Static build for now. To add server routes, switch to @astrojs/vercel (docs/deploy.md).
  output: 'static',
  // Pages live at /path/ — canonical URLs, the sitemap and vercel.json's redirect all agree.
  trailingSlash: 'always',
  integrations: [sitemap()],
});
