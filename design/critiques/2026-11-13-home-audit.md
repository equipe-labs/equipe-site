# Home page design audit — T-2 (2026-11-13)

Page: `/` (en), built from `main` at `dbc57b2`, Astro preview. Shots: `design/shots/t2/before/` — `fold-<w>-<mode>.png` (first screen, 2×) and `full-<w>-<mode>.png` (whole page, 1×) at 390, 768, 1280 and 1440, light and dark, `prefers-reduced-motion: reduce` (so the hero scene is its still frame).

Judged against two things:
1. **"Understood in 5 seconds, then click Download."** In five seconds a maker should get: what it is (a team that builds for me), that I stay in control (I approve), that it's for my Mac and free, and where to click.
2. **Premium product sites** — the brief's own references (`brand.md` §3): Linear (the product big and real in the first screen), Raycast (the Mac button with its requirement right under it), Conductor (the approval moment on screen). "Premium" per the plan = confident type, generous space, fewer competing accents, crisp imagery, calm motion.

## The whole, at a glance

**What already works** — keep it. The headline is short and strong and reads first at every width. The Download button is the only filled blue on the first screen and is visible without scrolling at 390 and 1440 (390: y≈360 of 844; 1440: y≈450 of 900). The warm bone/void palette, the near-black dark mode, the editorial h2 with a muted second sentence (`h2 .tone`), the inverted proof band ("222 tickets. 20 days.") and the big centred close all already read as a confident brand, not a template. Copy is good; nothing here needs a rewrite.

**What holds it back from premium** — squint at 1440 and the eye goes headline → blue button → a long underlined blue sentence → a grey run-on line → a faded strip of UI. Four things compete under the headline, and the product, which is the strongest proof the page has, arrives last, cut off and fading out like a placeholder.

## Findings, ranked (severity · where · what · why it matters)

1. **[high] Hero visual reads as a cropped teaser, not a product.** `.heroshot` is clamped to `max-height: 300px` (≤700px) / `360px` (≥701px) and faded with `mask-image: linear-gradient(#000 55%, transparent)`. So the window's bottom half dissolves, the decision card — the approval moment, the brand's key scene — is ghosted at 40% opacity, and there's no window chrome, so it doesn't read as a *Mac app* (the thing the button downloads). Linear and Conductor show their window whole and crisp. Shots: `fold-1440-light.png` (y 510–900), `full-1440-light.png`.
2. **[high] The second action competes with the first.** "On Linux, or live in the terminal? Get the CLI" is a 16px/500 accent-blue link with a full underline, as long as two buttons, right next to the primary. At a squint it's a second blue CTA. Most visitors are on a Mac; the CLI link is for the few. At 390 it wraps to two underlined blue lines straight under the button.
3. **[high] The meta line is one grey run-on of six facts.** `Free and open source · macOS 12+ · Runs on your Claude or ChatGPT plan · 222 tickets · 20 days · 1 person approving` — requirements and proof in one sentence, 14px muted, `line-height: 1.8`. At 390 it's three ragged lines with "20 / days" broken across them. The proof ("222 tickets · 20 days · 1 person approving") is the most persuasive line in the hero and it's styled as fine print.
4. **[medium] Too many sizes of display and section type.** h1 `clamp(46px, 6.3vw, 68px)`; launch h2 `52px`; other h2 `44px`; close h2 `80px`. The close headline is larger than the hero's, so the page peaks at the bottom. Premium pages use one display size and one section size, and the rhythm comes from that.
5. **[medium] Blue status chips everywhere dilute the one blue.** "Works today" chips (`.now`: accent text on 10% accent fill) appear about 15 times down the page, plus the blue `n` circles and the blue links. The brand rule is "one blue dot on warm neutrals"; with this many blue pills, the Download button stops being the only blue thing in view on scroll. The dot already carries the colour, so the pill doesn't need to as well.
6. **[medium] Section spacing is off the scale and uneven.** Section padding is `104px` / `80px` (launch top) / `88px` (stage) / `160px` (close) / `56px` (mobile), none of which is a spacing token (`--s-7 48`, `--s-8 72`, `--s-9 112`). Bands start and end at different depths, so the page doesn't feel set to a grid.
7. **[medium] Window frames differ from section to section.** `.win` radius 16 (12 on mobile), two hand-written shadows (`0 40px 80px -48px …` and a heavier hero one `0 60px 120px -60px …`), and dark mode drops to `0 40px 80px -48px #000` — on the void page the windows lose their edge and blend into the page (`fold-1440-dark.png`). Shadows are raw `rgb()` values, not a token.
8. **[low] Off-token colour in the proof band.** `.evs` hard-codes `#A3A5AB` / `#4F5159` for its muted text in each mode instead of the `--muted` role. The values are right, but they're copies that will go stale (TP-7).
9. **[low] At 390 the header Download and the hero Download sit in the same first screen.** That's fine for now (the header CTA earns clicks on scroll), but it's two identical blue buttons 300px apart. Out of scope here; noted as an idea.
10. **[low, unconfirmed] Korean hero scene buttons draw as empty glyph boxes** in this Linux Chrome (`/ko/`, decision card "Publish"/"Hold" buttons). Body Korean draws fine, so the glyphs are probably missing from the `pretendard-ko-core` subset and the browser had no system Korean font to fall back on. On a Mac, Apple SD Gothic Neo would likely hide this. Not a polish item: proposed as its own ticket to confirm.

## 5-second test, per width (before)

| Width | Value (headline + lead) | Download | Product seen | Proof seen |
|---|---|---|---|---|
| 390 | yes, first | yes, full-width, y≈360 | no (starts y≈600, below a run-on meta) | as fine print |
| 768 | yes | yes | top strip only | as fine print |
| 1280 | yes | yes | ~290px strip, fading | as fine print |
| 1440 | yes | yes | ~360px strip, fading | as fine print |

The value and the CTA pass. What fails is *belief*: the product and the proof are both there but don't come across as evidence.

## What the fix must not change

Same brand, tokens, section order and copy (plan, "Polish, same look"). CTA ids and `data-ph*` attributes unchanged (TP-3). The hero image is not lazy-loaded. All 8 locales and both modes keep working.

The ranked fixes, with values: [`design/home-polish-spec.md`](../home-polish-spec.md).
