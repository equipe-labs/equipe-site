# equipe.im — page layout (single page, top to bottom)

Tokens: see `tokens.md`. Copy: see `copy.md`. Mobile = ≤640px, single column everywhere.

1. **Header** (sticky, `--bg`, hairline below): mark + "equipe" left; right: "How it works", "Get started", "FAQ", GitHub link. On mobile only the mark and a GitHub button remain (no hamburger; the page is short).
2. **Hero** (112px padding): H1, lead paragraph in the 680px column, two buttons side by side (primary filled `--accent`, secondary outlined; stack on mobile), status chip below. The 2×2 dot mark sits large on the right at desktop (decorative, `aria-hidden`), hidden on mobile.
3. **How it works**: intro line, then four cards (Roles, Tickets, Branches, Your approval) in a 2×2 grid on `--surface`, radius 14. Each card is an H3 plus one paragraph. The fourth card uses the solid dot as its marker; the others use the faded dots. One column on mobile.
4. **Who it's for**: 680px column, paragraph, three bold-led bullets, proof line set in `--muted` with a hairline above.
5. **Get started**: intro, code blocks on `--code-bg` (mono 15px, horizontal scroll, never wrap), each with a copy button (44px target). Docs links below.
6. **FAQ**: eight `<details>` rows on `--surface`, 680px column, question as `<summary>` (600 weight, 44px+ target, chevron right). All answers stay in the DOM; first row closed by default.
7. **Footer**: hairline, three items on one line (stacked on mobile), `--muted` small text.

Behaviour: no JS required for content; the theme follows the system with no toggle in v1. Respect `prefers-reduced-motion` (no motion beyond a 150ms colour transition). Links are underlined in body text. OG image: `assets/logo/og.svg` (1200×630) — export to `assets/logo/og.png` at build time; I could not render PNG here.
