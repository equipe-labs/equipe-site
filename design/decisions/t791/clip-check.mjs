import { createRequire } from 'node:module';
import { join } from 'node:path'; import { homedir } from 'node:os';
const require = createRequire(join(homedir(), '.equipe/design-kit/package.json'));
const { chromium } = require('playwright');
const base = 'http://127.0.0.1:4791/';
const locales = ['', 'ko/', 'de/', 'fr/', 'es/', 'pt-br/', 'ja/', 'zh-cn/'];
const pages = ['', 'design/'];
const b = await chromium.launch();
const rows = [];
for (const pg of pages) for (const loc of locales) for (const w of [320, 360, 379, 380]) {
  const ctx = await b.newContext({ viewport: { width: w, height: 844 } });
  const p = await ctx.newPage();
  await p.goto(base + loc + pg, { waitUntil: 'networkidle' });
  const r = await p.evaluate(() => {
    const shown = (el) => { const st = getComputedStyle(el); if (st.display === 'none' || st.visibility === 'hidden' || parseFloat(st.opacity) === 0) return false; const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
    // Proposed: text kept for assistive tech only (the sr-only / visually-hidden pattern) is not cut-off text.
    const visuallyHidden = (el) => { const st = getComputedStyle(el); const r = el.getBoundingClientRect(); const tiny = r.width <= 1 && r.height <= 1; const clipped = /inset\(50%\)|inset\(100%\)/.test(st.clipPath) || /rect\(0(px)?,? 0(px)?,? 0(px)?,? 0(px)?\)/.test(st.clip); return tiny && clipped; };
    const now = [], proposed = [];
    for (const el of document.querySelectorAll('body *')) {
      const text = (el.innerText || '').trim(); if (!text || !shown(el)) continue;
      const st = getComputedStyle(el); const hides = (o) => o === 'hidden' || o === 'clip';
      const x = hides(st.overflowX) && el.scrollWidth > el.clientWidth + 1; const y = hides(st.overflowY) && el.scrollHeight > el.clientHeight + 1;
      if (!x && !y) continue;
      const sel = el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).join('.') : '');
      now.push(sel); if (!visuallyHidden(el)) proposed.push(sel);
    }
    const a = document.querySelector('header .brand'); const bt = document.querySelector('.brand .bt');
    return { now, proposed, brandName: a && (a.getAttribute('aria-label') || a.innerText.trim()), btWidth: bt && bt.getBoundingClientRect().width };
  });
  rows.push({ page: '/' + loc + pg, w, ...r });
  await ctx.close();
}
await b.close();
for (const r of rows) console.log(`${r.page.padEnd(16)} ${String(r.w).padEnd(4)} bt=${r.btWidth} name="${r.brandName}" now=[${r.now.join(', ')}] proposed=[${r.proposed.join(', ')}]`);
