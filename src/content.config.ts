// Content collections. `blog`: articles at src/content/blog/<lang>/<slug>.md. A translation keeps the English file name,
// so /blog/<slug>/ and /ko/blog/<slug>/ are the same article and point at each other with hreflang.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(80).max(180),
    /** Language folder: must match the directory (checked in src/data/blog.ts). */
    lang: z.enum(['en', 'ko']),
    date: z.coerce.date(),
    /** Set when the article was materially revised; shown as "Updated" and used as dateModified. */
    updated: z.coerce.date().optional(),
    /** Who wrote it. "The equipe team" until the founder supplies a bio. */
    author: z.string().default('The equipe team'),
    tags: z.array(z.string()).min(1),
    /** Short question/answer pairs; shown at the end of the article and emitted as FAQPage JSON-LD. */
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    /** Official pages the article relies on (competitor facts, pricing) with the date they were read. */
    sources: z.array(z.object({ title: z.string(), url: z.string().url(), accessed: z.string().optional() })).default([]),
    /** Alt text of the social image. */
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
