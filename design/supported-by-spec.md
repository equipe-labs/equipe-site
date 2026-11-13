# Supported by (footer) and Run it in the cloud (Get started) — build spec

Ticket T-18. Two small additions inside sections that already exist. The rest of the site design is on hold, so nothing else changes: no new section, no change to existing items, spacing or copy.

- Mockups drawn on the real page (dev server, `supported-by/mock.js` injected): `supported-by/sheet-footer-en.png`, `sheet-footer-ko.png`, `sheet-start-en.png`, `sheet-start-ko.png`. Single shots are in `supported-by/shots/` (`<lang>-<footer|start>-<1440|390>-<light|dark>-<before|A|B>.png`).
- Reproduce: start `astro dev`, serve `design/assets/partners/*.svg` and `mock.js` from `public/_mock/`, then run `node design/supported-by/shoot.mjs http://localhost:<port> design/supported-by/shots [ko]` and `python3 design/supported-by/sheet.py`.
- Critiques: `design/critiques/1794601636.md`, `1794601805.md`, `1794602005.md` (verdict: show).

## Two options for the logos (the person chooses)

| | A — official mono files (recommended) | B — footer grey |
|---|---|---|
| Light | Tenki `#000A15`, Ironact `#000000` | both `var(--muted)` = `#4F5159` |
| Dark | both `#FFFFFF` | both `var(--muted)` = `#A3A5AB` |
| Hover | no change (focus ring only) | `var(--text)` |
| Contrast with `--bg` | 18.3:1 / 19.3:1 light, 19.8:1 dark | 7.25:1 light, 8.03:1 dark |
| Brand rules | Tenki: official files. Ironact: white is official; black is a fill-only copy that ironact.net itself shows (CSS `brightness(0)`) | **Recolours both logos.** Both companies' guidelines say don't change the colour. Ship only with written consent from Tenki (hello@tenki.cloud) and Ironact (contact@ironact.net) |
| Weakness | The logos are darker than the grey footer text, so they are the loudest thing in the footer | Needs both companies' consent |

The option with Tenki's official blue mark (`#047BFF`) was dropped. It adds a second blue next to ours (`--accent` `#1D4ED8` / `#8FB0FF`), and the brand allows one blue (`brand.md`).

## Assets — `design/assets/partners/` → copy to `public/partners/`

Each file is the official artwork with its `viewBox` trimmed to the drawn area (so the box size is the logo size). Paths are unchanged.

| File | Source | Used in |
|---|---|---|
| `tenki-cloud-mono-on-light.svg` | tenki.cloud/images/branding/tenki-light-combo.svg | A, light |
| `tenki-cloud-mono-on-dark.svg` | tenki.cloud/images/branding/tenki-dark-combo.svg | A, dark |
| `tenki-cloud-currentcolor.svg` | same as above, fill → `currentColor` | B |
| `ironact-mono-on-dark.svg` | ironact.net/ironact-logo.svg (official, white) | A, dark |
| `ironact-mono-on-light.svg` | same, fill `white` → `black` (derived) | A, light |
| `ironact-currentcolor.svg` | same, fill → `currentColor` | B |

Every official Tenki lockup includes the small "by Luxor" line. At footer size it can't be read. Tenki's guidelines only ask that the glyph stays legible, and the glyph is 22px tall here (Tenki has not confirmed this).

## Footer — the "Supported by" line

Markup: append it as the last child of `footer .wrap` in `src/pages/[...locale].astro`.

```html
<p class="supported">
  <span class="lbl">{t.footer.supportedBy}</span>
  <a class="tenki" href="https://tenki.cloud/?utm_source=equipe.im&utm_medium=referral" rel="noopener">…logo…</a>
  <a class="ironact" href="https://ironact.net/?utm_source=equipe.im&utm_medium=referral" rel="noopener">…logo…</a>
</p>
```

Logo markup:
- A: two `<img>` in each link, `class="on-light"` and `class="on-dark"`, `alt="Tenki Cloud"` / `alt="Ironact"`, with `width`/`height` set.
- B: inline the `currentcolor` SVG with `role="img" aria-label="Tenki Cloud"` (or `"Ironact"`) and `fill="currentColor"`. The link's `color` sets the logo colour.

CSS (`src/styles/global.css`, beside the other `footer` rules). Every value is an existing token:

```css
.supported { flex-basis: 100%; display: flex; flex-wrap: wrap; align-items: center; gap: 0 var(--s-5); margin: var(--s-1) 0 0; }
.supported .lbl { color: var(--muted); }
.supported a { display: inline-flex; align-items: center; min-height: var(--tap); color: var(--muted); }
.supported img, .supported svg { display: block; }
.supported .tenki :is(img, svg) { width: 72px; height: 22px; position: relative; top: 3px; }
.supported .ironact :is(img, svg) { width: 96px; height: 13px; }
/* A only */
.supported .on-dark { display: none; }
@media (prefers-color-scheme: dark) { :root:not([data-theme='light']) .supported .on-dark { display: block; } :root:not([data-theme='light']) .supported .on-light { display: none; } }
:root[data-theme='dark'] .supported .on-dark { display: block; }
:root[data-theme='dark'] .supported .on-light { display: none; }
/* B only */
.supported a:hover { color: var(--text); }
```

Why these values:
- **Equal weight.** Tenki 72×22 and Ironact 96×13. The size is set by optical weight, not by matching boxes: Tenki has a solid mark and a heavy lowercase, Ironact a thin uppercase. With a squint, the two read as the same grey.
- **Clear space.** Both companies ask for clear space of at least the mark's height on every side. The 24px gap (`--s-5`) is wider than Tenki's 22px. Above, the 44px tap row (11px) plus the row gap (`--s-2`, 8px) plus `--s-1` (4px) gives 23px.
- **Alignment.** Tenki's wordmark sits above the centre of its box because of "by Luxor" under it, so `top: 3px` puts the two wordmarks on one line.
- **Layout.** `flex-basis: 100%` puts the line on its own row at 1440, so the existing row of links, licence and credit doesn't move. At 390 the footer is already a column, and the line comes last. The tap target is 44px tall (`--tap`).
- **Focus.** The global `:focus-visible` ring (2px `--accent`, offset 3px) applies.

Copy, `footer.supportedBy`:
- en: `Supported by`
- ko: `후원`
- de, es, fr, ja, pt-BR, zh-CN: translate in the build ticket (meaning: these companies support the open-source project).

## Get started — "Run it in the cloud"

Placement: a new `<div class="cloud">` right after `</div>` of `.cli`, inside `#get-started .wrap`. It is a third path after the apps (`.acts`) and the CLI. Nothing above it moves.

```html
<div class="cloud">
  <h3 class="cloud-title">{t.start.cloudTitle}</h3>
  <p class="col">{t.start.cloudText} <a href="https://tenki.cloud/docs/sandbox/quickstart?utm_source=equipe.im&utm_medium=referral" rel="noopener">{t.start.cloudLink}</a></p>
</div>
```

```css
.cloud { margin-top: var(--s-7); }
.cloud .cloud-title { margin: 0; font-size: 22px; }          /* same level as .cli .cli-title */
.cloud .col { margin: var(--s-3) 0 0; color: var(--muted); }  /* same as .cli .col */
.cloud .col a { white-space: nowrap; }
```

Copy (as drawn). "Run on Tenki" is not used: T-17 found the claim plausible from Tenki's docs, but nobody has run equipe on a Tenki sandbox yet.

| key | en | ko |
|---|---|---|
| `start.cloudTitle` | Run it in the cloud | 클라우드에서 돌리기 |
| `start.cloudText` | equipe's CLI runs on any Linux machine, a Tenki Cloud sandbox included. | equipe CLI는 Linux라면 어디서든 돌아가요. Tenki Cloud 샌드박스에서도요. |
| `start.cloudLink` | See the sandbox → | 샌드박스 보기 → |

The critic's last round suggested link labels that say where the link goes: "Set up a sandbox →" / "샌드박스에서 시작하기 →". Either pair works; pick one in the build ticket. Other locales are translated in the build ticket.

## States and checks for the build
- Light and dark, both via `prefers-color-scheme` and via `data-theme`.
- Widths 390 and 1440. Nothing scrolls sideways, and at 390 the line fits on one row (shots).
- Logos are links with names (alt or aria-label). Their only hover is in option B. Keyboard focus shows the ring.
- UI map: shoot the footer and Get started again in `design/flows/` once built.

## Not confirmed
- That Tenki agrees to "Supported by" next to its logo (its guidelines warn against implying a relationship or endorsement).
- That Ironact agrees to the black copy of its logo on light backgrounds (option A), and both companies to the grey (option B).
- That equipe actually runs on a Tenki sandbox. Until it is tried, the copy says only what is documented.
