# Home page polish — build spec (T-2, 2026-11-13)

What: make the home page (`src/pages/[...locale].astro`) read as more premium and put the product and proof in front of the Download click. **Polish only**: same brand, tokens, section order and copy. Home page only. All 8 locales, both modes.

Why each item matters: [`design/critiques/2026-11-13-home-audit.md`](critiques/2026-11-13-home-audit.md).
Reference implementation: [`design/polish/home-polish.css`](polish/home-polish.css). It's injected over the built page to draw the after shots. **Move each rule into `src/styles/` (into the existing selectors). Don't ship this file.**
Before shots: `design/shots/t2/before/`. After shots (option A): `design/shots/t2/after-a/`. Options for the hero visual: §Options.

Don't change any of these: CTA `id`s, `data-ph` / `data-ph-location` attributes, copy, section order, the `HeroScene` animation, the hero not being lazy-loaded.

Ranked by impact on "understood in 5 s, then Download". Build them in order; each one ships on its own.

---

## §0 New site roles (global.css `:root` + dark block)

Every new value is a role, set in both modes. Nothing is hard-coded in components.

| Role | Light | Dark | Source token | Use |
|---|---|---|---|---|
| `--strong` | `#74767D` | `#7C7E85` | `color.border-strong` (warm.350 / 400). Already in `app.css`; move it to `global.css` | quiet underline, window dots |
| `--display` | `clamp(48px, 5.6vw, 80px)` | same | `type.display` 56 at 1000px wide, rising to 80 | hero h1 and close h2 only |
| `--shadow-window` | `0 32px 64px -32px rgb(10 10 12 / .28), 0 2px 6px 0 rgb(10 10 12 / .06)` | `0 32px 64px -24px rgb(0 0 0 / .7)` | `elevation.overlay`, made deeper for a hero window | every `.win` |
| `--window-edge` | `transparent` | `rgb(239 237 231 / .14)` | `--text` at 14% (the same as the `.evs` window border) | 1px edge so dark windows don't melt into the void |
| `--muted-inverse` | `#A3A5AB` | `#4F5159` | the other mode's `--muted` | muted text in the inverted proof band `.evs` (P9) |

Add these 5 roles to `design/tokens.md` under the site roles (done in this ticket).

Contrast (WCAG 2.x, computed):
- `--strong` is used for UI only: on bg it's 4.16 (light) / 4.88 (dark); on `--ap-sunken` 3.67 / 4.65. All ≥ 3:1.
- Text on the new surfaces: `--text` 16.57 / 16.90; `--muted` 7.25 / 8.03.
- `.btn.primary`: 6.70 / 8.70.

## P1 Hero type: one display size, tighter top
`landing.css`, `.hero` block.

- ≥701px:
  - `.hero` `padding-top: var(--s-8)` (72, was 112).
  - `.hero h1` `font-size: var(--display); line-height: 1.0; letter-spacing: -0.035em`.
  - `.hero .lead` `font-size: 22px` (`type.lead`), `margin-top: var(--s-5)`, `max-width: 600px`.
- ≤700px:
  - `.hero` `padding-top: var(--s-6)`.
  - h1 `40px / 1.02 / -0.04em`.
  - lead `17px`, `margin-top: var(--s-4)`.
- **CJK** (`:lang(ko)`, `:lang(ja)`, `:lang(zh-CN)`):
  - h1 `letter-spacing: 0`, never the Latin tracking.
  - `:lang(ko)` h1, `.lead`, `.meta`: `word-break: keep-all`, so Korean breaks between words, never inside 스타트업.
  - ≥701px: `font-size: clamp(40px, 4.6vw, 64px); line-height: 1.2`.
  - Keep the existing CJK body line-height.

## P2 CTA row: one loud action, a quiet second
- `.hero .acts`: `margin: var(--s-6) 0 var(--s-4)`; `gap: var(--s-4) var(--s-6)`. ≤700px: `margin-top: var(--s-5)`.
- ≤700px: `.hero .acts .link` `font-size: 15px`.
- `.hero .btn.lg`: `min-height: 52px; padding: 0 var(--s-5); font-size: 17px`. That's a 52px target, above the 44px minimum.
- `.hero .acts .link` (the CLI link) goes from accent to text:
  - `color: var(--text); font-weight: 500`.
  - `text-decoration-color: var(--strong); text-decoration-thickness: 1px; text-underline-offset: 5px`.
  - `::after { content: '\00a0→' }`. The no-break space keeps the arrow on the line with its word.
  - `@media (hover:hover)` hover: `text-decoration-color: currentColor`.
  - The focus ring stays the global `:focus-visible`.
- `data-ph="cli_install_link_click"` stays as it is.

## P3 Meta: requirements, then proof — two lines
**Markup** (`[...locale].astro`, hero):
- Before: `<p class="meta">{t.hero.req} · <span class="evline">{t.hero.proof}</span></p>`
- After: `<p class="meta">{t.hero.req}<span class="evline">{t.hero.proof}</span></p>`. Drop the ` · ` joiner; the copy strings stay the same.

**CSS:**
- `.hero .meta, .hero .acts + .meta { font-size: 14px; line-height: 1.5 }`. The second selector is needed because it's the one that wins today.
- `.hero .meta .evline { display: block; margin-top: var(--s-1); color: var(--text); font-weight: 500 }`.

## P4 Hero visual: the whole window, framed as a Mac window
- `.heroshot`:
  - `margin-top: var(--s-7)` (≤700px: `var(--s-6)`).
  - Remove `max-height`, `overflow:hidden` and `mask-image` / `-webkit-mask-image`.
- `.hero .win`: `border-radius: 12px` (`radius.lg`); `box-shadow: var(--shadow-window), 0 0 0 1px var(--window-edge)`.
- Title bar: `.hero .win::before`, or a real `<div class="titlebar" aria-hidden="true">` if you prefer.
  - Height `36px` (≤700px: `28px`), `background: var(--ap-sunken)`, `border-bottom: 1px solid var(--line)`.
  - Three **neutral** dots in `--strong`: 10px across (≤700px: 8px), centres at x = 18 / 38 / 58 (≤700px: 14 / 29 / 44).
  - Neutral, not red/yellow/green: one blue on warm neutrals (brand §5).
- `.hero .hs-cap`: `margin-top: var(--s-4)`.
- ≤700px: hide the scene's top bar (`.hs .main > .top`, the "pm · All projects" row), so the whole approval card ("Publish the pricing page?", Publish now / Hold) comes into the first screen at 390. In the build this goes in `HeroScene.astro`'s `@media (max-width: 700px)` block.
- The `HeroScene` decision card is now shown whole, so drop its 40% ghosting if any comes from the old mask.
- Reduced motion: unchanged. `HeroScene` already shows its still frame.
- Performance: the scene is DOM, not an image, so there's nothing to lazy-load. If option B is chosen, see §Options.

## P4b The still frame tells one true moment (`HeroScene.astro`)
Under `prefers-reduced-motion: reduce`, the still frame currently shows "In progress 4" with all four tickets **Done** and full bars, which contradicts its own heading. Show the working moment instead, with the decision card waiting:
- `.hs-st .w { opacity: 1 }`, `.hs-st .o { opacity: 0 }`.
- `.hs-bar i { background: var(--work) }`.
- `.hs-bar0..3`: `transform: scaleX(.72 / .5 / .34 / .18)`.

The animated loop is unchanged.

## P5 Status chips go neutral
`.now`: `background: transparent; color: var(--text); box-shadow: inset 0 0 0 1px var(--line)`. The blue dot inside stays as it is and carries the colour. Text contrast: `--text` on bg, 16.57 / 16.90.

## P6 One window style everywhere
- `.win`: `border-radius: 12px; box-shadow: var(--shadow-window), 0 0 0 1px var(--window-edge)`. This replaces both hard-coded shadows and the 16px / 12px radius split.
- Windows inside flat bands get no shadow: `.gs .win, .evs .win { box-shadow: none }`.

## P7 Type scale: one section size
- ≥701px:
  - `main.landing h2, .launch h2`: `48px / 1.08 / -0.035em`. This replaces 44 and 52.
  - `.end h2`: `var(--display) / 1.0`. Same as the hero, no bigger (was 80 fixed).
- ≤700px: `.launch h2` `30px`, the same as the other h2.
- CJK h2 keeps `letter-spacing: 0` (existing rule).

## P8 Rhythm: sections on the spacing scale
- Every `main.landing > section`: `padding: var(--s-9) 0` (112). That includes `.launch` (was 80 top) and `#stage` (was 88).
- `.end`: `calc(var(--s-9) + var(--s-7))` (160).
- ≤700px: sections `var(--s-8)` (72, was 56); `.end` `var(--s-9)`.

## P9 Proof band on tokens
`landing.css` lines 179–187: replace the hard-coded `#A3A5AB` / `#4F5159` with `var(--muted-inverse)`. One rule, `main.landing .evs h2 .tone, .evs .meta, .evs .cap, .evs dd { color: var(--muted-inverse) }`, replaces the three mode copies. Also replace `color: #0A0A0C` in the dark band with `var(--void)`. Nothing changes visually; this only stops stale copies (TP-7). Contrast is 8.03 on the void band and 7.25 on the bone band.

## P10 Header CTA size (low)
The header `.btn` Download uses `min-height: 36px` (`button.height-sm`). Keep the label weight as it is. Nothing else changes in the header.

---

## Options — the hero visual (the person's choice; the PM puts it to them)
- **A — Staged scene, polished (recommended default).** Same `HeroScene` with P1–P4. It stays live, animated, translated, and themed. Shots: `design/shots/t2/after-a/`. At 1440×900 the approval card still falls just below the fold.
- **B — Real app screenshot in the window frame.** P1–P3 as in A. The window holds a real screenshot of the Mac app on demo data, from `design/shots/t2/app/`.
  - Build:
    - `<picture>` with light/dark `<source media="(prefers-color-scheme: dark)">` and a 1× / 2× `srcset` (WebP + PNG).
    - Explicit `width`/`height`, `loading="eager"`, `fetchpriority="high"`, `decoding="async"`.
    - Alt text from i18n (new key; needs translation in all 8 locales, so that's a copy item).
  - The current screenshot (the equipe repo's readme demo shot, `design/shots/t2/app/needs-you-*.png`, plus the `needs-you-pane-*` crop for ≤700px) shows a `cargo test` permission. That's a developer scene, not a maker's "publish" approval, and it's dense with ellipses. Don't ship B until it's reshot on a Mac with a publish/send/pay decision (`scripts/design-shot.sh`; this Linux box can't build the desktop app).
  - Cost: not translated (English UI in all locales), not animated, and the screenshots need to be redone when the app changes.
- **C — Split hero at ≥1200px (designer's recommendation; A below 1200px).** Headline on the left, window on the right, in one first screen. At 1440×900 the headline, Download, the whole approval card and the working board are all visible at once. Rules: [`design/polish/options/c-split.css`](polish/options/c-split.css).
  - `.hero`: `display: grid; grid-template-columns: minmax(0,5fr) minmax(0,7fr); gap: var(--s-8); align-items: start; max-width: 1360px; margin: 0 auto; padding: var(--s-8) var(--s-6) var(--s-7)`.
  - Text column: `padding-top: var(--s-7)`. h1 `clamp(48px, 4.4vw, 68px)`, `.hl` inline. Lead `20px`.
  - In `HeroScene.astro`, under `@media (min-width:1200px)` when it's in the hero:
    - No sidebar (as on phones). `.ap` / `.shell` `min-height: 0`, so the window is as tall as its content.
    - `.hs-body` columns `0.9fr 1.1fr`.
    - Board titles: `white-space: normal; text-overflow: clip; line-clamp: 3; line-height: 1.3`, with `.l1` `align-items: flex-start`. No ellipsis in en, ko, de or fr at 1280 or 1440.
    - `.hs-cap` `max-width: 60ch`.
  - Why 1200, not 1100: at 1100 the German decision buttons stop fitting side by side.
  - It changes the hero's layout more than A does. It's a bigger step from "same look", so it's the person's call.

Comparison sheets: `design/shots/t2/compare/` (`options-1440-*`, `options-390-*`, `hero-*-before-after*.png`, `page-1440-*-before-after.png`, `c-locales-1280.png`).

## Edge cases checked
- **Long locales at 390** (de, fr, es, pt): nothing overflows with A. fr's h1 is 5 lines at 40px. `design/shots/t2/after-a/locales/`.
- **CJK** keeps its own tracking and line-height (P1).
- **Dark mode**: every new role is set in both modes (§0).
- **Reduced motion**: nothing new moves.
- **Analytics**: no `id` or `data-ph*` changes; the P3 markup only removes a text joiner.

## Not confirmed here (each has its own ticket)
- Safari / macOS fonts, large text, and LCP/CLS of the taller hero: T-5, the build.
- Korean scene buttons drawing as empty glyph boxes (already on `main`): T-6.
- A Mac reshoot with a "publish" approval for option B: T-7.
- Critic rounds: `design/critiques/1794596909.md`, `1794597143.md`, `1794597377.md`. Points left open after round 3 (scene content: role avatar colours, the caption text; the second header Download at 390) are copy or scene changes outside this polish.
