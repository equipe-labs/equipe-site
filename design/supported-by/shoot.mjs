import { createRequire } from 'module';
const require = createRequire('/home/tenki/vol/equipe-home/design-kit/node_modules/');
const { chromium } = require('playwright');
const [,, base, out, lang='en'] = process.argv;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });
for (const w of [1440, 390]) for (const mode of ['light','dark']) for (const opt of ['before','A','B']) {
  const p = await b.newPage({ viewport: { width: w, height: w > 600 ? 900 : 844 }, deviceScaleFactor: 2, colorScheme: mode, reducedMotion: 'reduce' });
  await p.goto(base + (lang === 'ko' ? '/ko/' : '/'), { waitUntil: 'networkidle' });
  await p.addScriptTag({ url: '/_mock/mock.js' });
  await p.evaluate(([o, m]) => { document.documentElement.dataset.theme = m; if (o !== 'before') window.__mock(o, m); document.querySelector('astro-dev-toolbar')?.remove(); document.querySelector('.lang-banner')?.remove(); document.querySelectorAll('img[loading=lazy]').forEach(i => i.loading = 'eager'); }, [opt, mode]);
  await p.waitForTimeout(500);
  const r = await p.evaluate(() => { const Y = e => e.getBoundingClientRect().top + scrollY; const f = document.querySelector('footer');
    return { s0: Y(document.querySelector('.cli .links')) - 32, s1: Y(document.querySelector('#faq')) + 24, f0: Y(f) - 32, f1: Y(f) + f.offsetHeight }; });
  const W = await p.evaluate(() => document.documentElement.clientWidth);
  await p.screenshot({ path: `${out}/${lang}-start-${w}-${mode}-${opt}.png`, fullPage: true, clip: { x: 0, y: r.s0, width: W, height: r.s1 - r.s0 } });
  await p.screenshot({ path: `${out}/${lang}-footer-${w}-${mode}-${opt}.png`, fullPage: true, clip: { x: 0, y: r.f0, width: W, height: r.f1 - r.f0 } });
  await p.close();
}
await b.close();
