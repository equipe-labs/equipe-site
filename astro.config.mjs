import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // The one canonical host. www.equipe.im redirects here (docs/deploy.md).
  site: 'https://equipe.im',
  // Set by CI only while Pages serves from <org>.github.io/equipe-site/ (before the custom domain).
  base: process.env.SITE_BASE || undefined,
  output: 'static',
  integrations: [sitemap()],
});
