# equipe.im — design tokens

Mark: four dots in a 2×2 grid — a squad — with one solid dot, the person who leads and approves. `mark.svg` / `favicon.svg` (rounded tile), `app-icon.svg` (1024², full-bleed; the OS rounds it).

## Color (WCAG AA verified; ratios are text on its background)

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#FAF8F4` | `#121211` | page |
| `--surface` | `#F0EDE6` | `#1B1B19` | cards, FAQ rows |
| `--code-bg` | `#EAE6DD` | `#262623` | code blocks |
| `--text` | `#1A1A17` | `#F2EFE8` | body, headings (16.4:1 / 16.3:1) |
| `--muted` | `#57544C` | `#A9A59B` | secondary text (7.1 / 7.6 on bg; 6.5 / 7.0 on surface) |
| `--accent` | `#1D4ED8` | `#8FB0FF` | links, mark (6.3 / 8.8 on bg) |
| `--on-accent` | `#FFFFFF` | `#0B1226` | text on accent buttons (6.7 / 8.7) |
| `--line` | `#D8D3C8` | `#33332F` | hairlines (decorative, not text) |

Dark mode follows `prefers-color-scheme`, overridable with `data-theme="light|dark"` on `<html>`. Focus ring: 2px `--accent`, 3px offset.

## Type

- Sans: `Inter`, system-ui fallback · Mono: `JetBrains Mono`, ui-monospace fallback (self-host, `font-display: swap`).
- Scale (desktop → mobile ≤640px): H1 56/1.05 → 36 · H2 32/1.15 → 26 · H3 18/1.3 · body 18/1.6 → 17 · lead 22/1.5 → 19 · code 15/1.6 · small 14.
- Weights: 700 headings (tracking −0.02em), 400 body, 600 buttons.

## Space & shape

- 4px base: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 72 · 112 (section padding 112 desktop / 72 mobile).
- Content max width 1040px; reading column 680px; gutter 24px (16px under 640px).
- Radius: 8 (code, buttons) · 14 (cards, icon tile). Buttons min height 44px.
