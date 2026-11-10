// T-378: the UI map's states that a URL alone can't reach — a browser in another
// language, JavaScript off, webfonts not loaded, a click (menu open, tab, copied),
// one section of the long home page, or the home page with its scroll motion run.
// `equipe design flows shoot` takes the plain-URL states it can (404 by path); this takes
// the rest in an en-US browser — flows shoot's Chrome speaks the Mac's language, which
// puts the language banner on English pages and the 404 in that language — into the same paths: design/flows/<flow>/<screen>/<state>.<light|dark>.<width>.png.
//
//   npm run build && npx astro preview --port 4378
//   node design/flows/shoot-states.mjs [http://127.0.0.1:4378] [--only <flow/screen>] [--live <url>]
//
// T-384: the `design-live` states come from a second build with the Design menu on:
//   DESIGN_MENU_LIVE=true npm run build && npx astro preview --port 4384   (--live, default http://127.0.0.1:4384)
//
// Uses the Playwright that `equipe design` keeps in ~/.equipe/design-kit.
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';

const require = createRequire(join(homedir(), '.equipe/design-kit/package.json'));
const { chromium } = require('playwright');

const args = process.argv.slice(2);
const onlyAt = args.indexOf('--only');
const only = onlyAt >= 0 ? args.splice(onlyAt, 2)[1] : null;
const liveAt = args.indexOf('--live');
const LIVE = (liveAt >= 0 ? args.splice(liveAt, 2)[1] : 'http://127.0.0.1:4384').replace(/\/$/, '');
const BASE = (args[0] || 'http://127.0.0.1:4378').replace(/\/$/, '');
const OUT = dirname(fileURLToPath(import.meta.url));
const WIDTHS = [390, 1280];
const FOLD = { 390: 844, 1280: 800 };
const UNSTICK = 'header.site{position:static!important}';

// How a state is reached. view: 'fold' (the first screen), 'full' (the long home page,
// motion run first, at 1×), 'page' (a short whole page, at 2× as `flows shoot` takes it),
// or a CSS selector (that element, scrolled to). locale: the browser's.
const S = (path, url, o = {}) => ({ path, url, view: 'fold', locale: 'en-US', js: true, ...o });
const openLang = async (p) => { await p.click('details.lang > summary'); };
const tab = (id) => async (p) => { await p.click(`label[for="${id}"]`); };
const copied = async (p) => {
  await p.context().grantPermissions(['clipboard-read', 'clipboard-write'], { origin: new URL(p.url()).origin });
  await p.click('#get-started .tab-panel[data-panel="brew"] .copy');
};
// Headless Chrome lets writeText through after a click, so refuse it the way a denied permission does.
const denied = async (p) => {
  await p.evaluate(() => { Object.defineProperty(navigator, 'clipboard', { value: { writeText: () => Promise.reject(new DOMException('denied', 'NotAllowedError')) } }); });
  await p.click('#get-started .tab-panel[data-panel="brew"] .copy');
};
const advanced = async (p) => { await p.click('#get-started details.advanced > summary'); };

const SHOTS = [
  // First visit → download
  S('first-visit/hero/default', '/'),
  S('first-visit/hero/ko', '/ko/', { locale: 'ko-KR' }),
  S('first-visit/hero/long', '/de/', { locale: 'de-DE' }),
  S('first-visit/hero/loading', '/', { fonts: false }),
  S('first-visit/hero/no-js', '/', { js: false }),
  S('first-visit/home/default', '/', { view: 'full' }),
  S('first-visit/home/long', '/de/', { view: 'full', locale: 'de-DE' }),
  S('first-visit/home/no-js', '/', { view: 'full', js: false }),
  S('first-visit/get-started/default', '/', { view: '#get-started' }),
  S('first-visit/get-started/long', '/de/', { view: '#get-started', locale: 'de-DE' }),
  S('first-visit/end/default', '/', { view: 'section.end' }),
  S('first-visit/faq/default', '/', { view: '#faq' }),
  S('first-visit/faq/long', '/de/', { view: '#faq', locale: 'de-DE' }),
  // Product tour: the sections between the hero and the download
  S('product-tour/launch/default', '/', { view: 'section.launch' }),
  S('product-tour/stage/default', '/', { view: '#stage' }),
  S('product-tour/how-it-works/default', '/', { view: '#how-it-works' }),
  S('product-tour/who-for/default', '/', { view: '#who-for' }),
  S('product-tour/features/default', '/', { view: '#features' }),
  S('product-tour/features/long', '/de/', { view: '#features', locale: 'de-DE' }),
  S('product-tour/evidence/default', '/', { view: 'section.evs' }),
  // Change language
  S('language/menu/default', '/'),
  S('language/menu/open', '/', { act: openLang }),
  S('language/menu/open-ko', '/ko/', { locale: 'ko-KR', act: openLang }),
  S('language/banner/shown', '/', { locale: 'ko-KR' }),
  S('language/banner/long', '/', { locale: 'de-DE' }),
  S('language/banner/none', '/', { locale: 'zh-TW' }),
  ...['ko', 'ja', 'zh-cn', 'es', 'pt-br', 'de', 'fr'].map((slug) =>
    S(`language/localized-home/${slug}`, `/${slug}/`, { locale: { ko: 'ko-KR', ja: 'ja-JP', 'zh-cn': 'zh-CN', es: 'es-ES', 'pt-br': 'pt-BR', de: 'de-DE', fr: 'fr-FR' }[slug] })),
  // Install with the CLI
  S('cli-install/cli/default', '/#cli-install', { view: '#get-started .cli' }),
  S('cli-install/cli/script', '/#cli-install', { view: '#get-started .cli', act: tab('tab-script') }),
  S('cli-install/cli/source-open', '/#cli-install', { view: '#get-started .cli', act: advanced }),
  S('cli-install/cli/copied', '/#cli-install', { view: '#get-started .cli', act: copied, settle: 200 }),
  S('cli-install/cli/copy-denied', '/#cli-install', { view: '#get-started .cli', act: denied, settle: 200 }),
  S('cli-install/cli/no-js', '/#cli-install', { view: '#get-started .cli', js: false }),
  S('cli-install/cli/long', '/de/#cli-install', { view: '#get-started .cli', locale: 'de-DE' }),
  // Mobile app pages and the Design menu in other languages: the browser speaks it too, so no banner
  S('mobile-app/privacy/default', '/app/privacy/', { view: 'page' }),
  S('mobile-app/support/default', '/app/support/', { view: 'page' }),
  S('design-menu/design-home/default', '/design/', { view: 'page' }),
  S('design-menu/docs/default', '/design/docs/', { view: 'page' }),
  S('design-menu/examples/default', '/design/examples/', { view: 'page' }),
  S('mobile-app/privacy/ko', '/ko/app/privacy/', { view: 'page', locale: 'ko-KR' }),
  S('mobile-app/privacy/long', '/de/app/privacy/', { view: 'page', locale: 'de-DE' }),
  S('mobile-app/support/ko', '/ko/app/support/', { view: 'page', locale: 'ko-KR' }),
  S('mobile-app/support/long', '/de/app/support/', { view: 'page', locale: 'de-DE' }),
  S('design-menu/design-home/ko', '/ko/design/', { view: 'page', locale: 'ko-KR' }),
  S('design-menu/design-home/long', '/de/design/', { view: 'page', locale: 'de-DE' }),
  S('design-menu/docs/long', '/de/design/docs/', { view: 'page', locale: 'de-DE' }),
  S('design-menu/examples/long', '/de/design/examples/', { view: 'page', locale: 'de-DE' }),
  // The Design menu live (T-384): the header link, the home card, the footer link
  S('language/menu/design-live', '/', { live: true }),
  S('first-visit/home/design-live', '/', { view: 'full', live: true }),
  S('product-tour/features/design-live', '/', { view: '#features', live: true }),
  S('product-tour/features/design-live-long', '/de/', { view: '#features', locale: 'de-DE', live: true }),
  // Not found
  S('not-found/not-found/default', '/nope/', { view: 'page' }),
  S('not-found/not-found/browser-lang', '/nope/', { locale: 'ja-JP' }),
  S('not-found/not-found/no-js', '/ko/nope/', { locale: 'ko-KR', js: false }),
];

const browser = await chromium.launch({ channel: 'chrome', headless: true });
let n = 0;
try {
  for (const shot of SHOTS) {
    if (only && !shot.path.startsWith(only)) continue;
    for (const width of WIDTHS) {
      for (const scheme of ['light', 'dark']) {
        const full = shot.view === 'full' || shot.view === 'page';
        const context = await browser.newContext({
          viewport: { width, height: FOLD[width] },
          // Whole pages at 1×: at 2× the long home page passes Chrome's capture height.
          deviceScaleFactor: shot.view === 'full' ? 1 : 2,
          colorScheme: scheme,
          locale: shot.locale,
          javaScriptEnabled: shot.js,
          extraHTTPHeaders: { 'Accept-Language': shot.locale },
        });
        const page = await context.newPage();
        if (shot.fonts === false) await page.route(/\.(woff2?|ttf|otf)(\?.*)?$/, (r) => r.abort());
        // Without JavaScript a style can't be added later: put it in the page as it arrives.
        if (!shot.js && shot.view !== 'fold' && shot.view !== 'page' && shot.view !== 'full') {
          await page.route((u) => u.pathname.endsWith('/'), async (r) => {
            const res = await r.fetch();
            await r.fulfill({ response: res, body: (await res.text()).replace('</head>', `<style>${UNSTICK}</style></head>`) });
          });
        }
        const base = shot.live ? LIVE : BASE;
        await page.goto(base + shot.url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => page.waitForLoadState('load'));
        if (shot.fonts !== false) await page.evaluate(() => document.fonts && document.fonts.ready);
        await page.waitForTimeout(1200);
        const file = join(OUT, `${shot.path}.${scheme}.${width}.png`);
        mkdirSync(dirname(file), { recursive: true });
        if (shot.view === 'full' || (shot.view !== 'fold' && shot.view !== 'page' && shot.js)) {
          // Run the scroll motion through the page so every block has arrived and counted up.
          const h = await page.evaluate(() => document.documentElement.scrollHeight);
          for (let y = 0; y <= h; y += Math.round(FOLD[width] * 0.6)) { await page.evaluate((v) => window.scrollTo(0, v), y); await page.waitForTimeout(120); }
          await page.waitForTimeout(1500);
        }
        const crop = !full && shot.view !== 'fold';
        // A section's crop: the sticky header would sit over its top.
        if (crop && shot.js) await page.addStyleTag({ content: UNSTICK });
        if (crop) { await page.locator(shot.view).first().scrollIntoViewIfNeeded(); await page.waitForTimeout(500); }
        if (shot.act) { await shot.act(page); await page.waitForTimeout(shot.settle ?? 600); }
        if (full) {
          await page.evaluate(() => window.scrollTo(0, 0));
          await page.waitForTimeout(600);
          await page.screenshot({ path: file, fullPage: true });
        } else if (shot.view === 'fold') {
          await page.screenshot({ path: file });
        } else {
          await page.locator(shot.view).first().screenshot({ path: file });
        }
        await context.close();
        n++;
        console.log(resolve(file));
      }
    }
  }
} finally {
  await browser.close();
}
console.error(`${n} pictures`);
