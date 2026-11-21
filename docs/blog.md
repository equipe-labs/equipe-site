# Blog, Facts and the trust/SEO/GEO setup

Strategy (Korean, for the founder): `equipe-launch/trust-seo-geo-strategy.md`.

## Add an article

1. Write `src/content/blog/en/<slug>.md`, then `src/content/blog/ko/<slug>.md` (same slug; a translation keeps the English file name, so `/blog/<slug>/` and `/ko/blog/<slug>/` point at each other with hreflang).
2. Frontmatter is validated by `src/content.config.ts` (title <= 70 chars, description 80-180 chars, `tags`, optional `faqs`, `sources`, `updated`). Korean files set `author: "equipe 팀"`.
3. `npm run og:blog` draws `public/og/blog/<lang>-<slug>.png` for new articles (needs Chrome on a Mac; commit the PNGs).
4. `npm run build` also appends the article list and the Facts link to `dist/llms.txt` (`scripts/llms-articles.mjs`); the sitemap and the RSS feeds (`/blog/rss.xml`, `/ko/blog/rss.xml`) include the new article automatically.
5. `npm run preview`, then `node scripts/seo-check.mjs http://localhost:4321`: checks canonical, hreflang, Article/BreadcrumbList/FAQPage JSON-LD, OG image, RSS, Facts and the sitemap for every article.

## Rules for content

- Real facts only: nothing about equipe that is not on the product, pricing or security pages or in `src/data/facts.ts`; no invented statistics, quotes, customers or testimonials.
- Competitor facts come from the official pages, with the date they were read (`sources` frontmatter). Re-check every 90 days and set `updated`.
- Say "not yet" for anything unshipped (one-step Claude import, weekly usage reports).
- Screenshots are real UI (`/screens/*`, `/gallery/*`), captioned as demo data / demo business.

## Facts page

`src/data/facts.ts` (English and Korean) renders `/facts/` and `/ko/facts/`: short citable statements plus FAQPage JSON-LD. Change pricing or security there first, bump `FACTS_REVIEWED`.

## Languages

The blog and Facts exist in English and Korean (`BLOG_LANGS` in `src/data/blog.ts`). Pages with partial translations pass `langs` to `PageShell`, so hreflang, the language menu and the language banner list only languages that have the page; other languages link to the English blog from the footer.
