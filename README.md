# equipe-site

The website of [equipe](https://github.com/equipe-labs/equipe) — built by an equipe squad, in public.

Every change here starts as a ticket on the squad's board and lands as a branch the
squad's members worked on; a person accepts each one.

## Development

Astro static site (TypeScript). Requires Node 20+.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check + static build into dist/
npm run preview   # serve dist/ locally
```

The build emits `dist/index.html`, `sitemap-index.xml`, `robots.txt` and `llms.txt`.
Site-wide constants live in `src/data/site.ts`; head tags in `src/components/BaseHead.astro`;
JSON-LD in `src/components/*JsonLd.astro`.
