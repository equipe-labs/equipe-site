# Website guides by business type (/websites/)

Programmatic SEO pages for "[business type] website" searches: `/websites/` (hub) and `/websites/<type>/`, in each
language that has local copy. Page: `src/pages/[...locale]/websites/[type].astro`. Data: `src/data/industries/`.

## Which types, in which languages

Picked on 2026-11-28 from Google autocomplete (`suggestqueries.google.com`, `client=firefox`, the market's `hl`/`gl`),
querying "<type> website" in each language's own phrasing (e.g. "학원 홈페이지", "塾 ホームページ", "site para padaria",
"website Friseur", "site web boulangerie"). The number of suggestions and whether they carry build intent
("builder", "template", "examples", "제작", "作成", "criar", "erstellen", "créer") decided the set. English autocomplete
returns 10 build-intent suggestions for every candidate, so English ships all 11.

| Type | en | ko | ja | zh-CN | es | pt-BR | de | fr |
|---|---|---|---|---|---|---|---|---|
| restaurant | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| cafe | ✓ | ✓ | ✓ | | ✓ | ✓ | ✓ | ✓ |
| bakery | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| hair-salon | ✓ | ✓ | ✓ | | ✓ | ✓ | ✓ | ✓ |
| yoga-pilates | ✓ | ✓ | ✓ | | ✓ | | ✓ | |
| dog-grooming | ✓ | | ✓ | | | ✓ | | |
| tutoring | ✓ | ✓ | ✓ | | ✓ | ✓ | ✓ | ✓ |
| soccer-academy | ✓ | | | | | | | |
| dental | ✓ | ✓ | ✓ | | ✓ | ✓ | ✓ | ✓ |
| photographer | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| nonprofit | ✓ | ✓ | ✓ | | ✓ | ✓ | ✓ | ✓ |

Left out where autocomplete was empty or near-empty (e.g. "애견미용 홈페이지", "축구교실 홈페이지", "Fußballschule
website", "école de football site web"). zh-CN ships only three: Google barely returns Chinese suggestions for these
queries, and mainland search happens elsewhere. Add a language to a type only with real local copy.

## Rules

- Each language is written for its market (local platforms, local rules), never translated.
- Honest facts only: no invented numbers, reviews or customers. Demos are labelled as demos.
- Golden Boot Academy is the real-customer example for soccer-academy; it shows only with `GOLDEN_BOOT_EXAMPLE=true`
  (on; the customer agreed on 2026-11-28; `GOLDEN_BOOT_EXAMPLE=false` hides it).
- Links to the grader, the cost calculator and /tools/ appear only when those pages are in the build.
