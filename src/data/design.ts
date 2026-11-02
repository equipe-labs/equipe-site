/**
 * The Design menu (T-281) is built but hidden until the equipe-design engine ships real output.
 * Hidden: the three pages exist (noindex, no hreflang, not in the sitemap) and nothing links to them.
 * Set DESIGN_MENU_LIVE=true at build time to add the header link, the home card, hreflang and the sitemap entries, and drop noindex.
 */
export const DESIGN_LIVE = process.env.DESIGN_MENU_LIVE === 'true';

export const DESIGN_REPO = 'https://github.com/equipe-labs/equipe-design';

/** Open licences of the sites shown as examples (links checked 2026-11-02). */
export const DESIGN_SOURCES = [
  { name: 'equipe.im', href: 'https://github.com/equipe-labs/equipe/blob/main/LICENSE', licence: 'MIT' },
  { name: 'shadcn/ui', href: 'https://github.com/shadcn-ui/ui/blob/main/LICENSE.md', licence: 'MIT' },
  { name: 'GitHub Primer', href: 'https://github.com/primer/primitives/blob/main/LICENSE', licence: 'MIT' },
] as const;
