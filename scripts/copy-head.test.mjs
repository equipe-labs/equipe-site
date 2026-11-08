#!/usr/bin/env node
// Copy + head regression for T-258 Q02/Q10–Q13. Run after `npm run build`:
//   node scripts/copy-head.test.mjs [dist]
import { readFileSync } from 'node:fs';
const dist = process.argv[2] ?? 'dist';
const read = (p) => readFileSync(`${dist}/${p}`, 'utf8');
const slugs = ['', 'ko/', 'ja/', 'zh-cn/', 'es/', 'pt-br/', 'de/', 'fr/'];
let bad = 0;
const check = (name, cond) => { console.log(`${cond ? '  ok  ' : '  FAIL'} ${name}`); if (!cond) bad++; };

// Q02: every translated support page must offer the signed Android APK and pairing instructions.
for (const s of slugs) {
  const h = read(`${s}app/support/index.html`).replace(/&#39;|&#x27;/g, "'");
  check(
    `Q02 ${s || 'en/'} support offers Android APK`,
    h.includes('data-ph="android_download_click"') && h.includes('equipe pair') && h.includes('bd8f267edeb10ce0aaed1efbb80f7b3c349895f6121e5f8a97d647d09f8d9773'),
  );
}

// Q10/Q11: 404 has per-language skip text, and no canonical / hreflang / og:url.
const nf = read('404.html');
const skips = [...nf.matchAll(/data-skip="([^"]+)"/g)].map((m) => m[1]);
check('Q10 404 carries 8 skip texts', new Set(skips).size === 8);
check('Q10 script swaps the skip link', nf.includes("getElementById('nf-skip')") && nf.includes('id="nf-skip"'));
check('Q11 404 has no canonical', !/rel="canonical"/.test(nf));
check('Q11 404 has no hreflang link', !/<link rel="alternate" hreflang/.test(nf));
check('Q11 404 has no og:url', !/og:url/.test(nf));
check('Q11 404 is noindex', /name="robots" content="noindex"/.test(nf));
// Other pages keep their head.
for (const s of slugs) {
  const h = read(`${s}index.html`);
  check(`head ${s || 'en/'} home keeps canonical + 9 hreflang`, /rel="canonical"/.test(h) && (h.match(/<link rel="alternate" hreflang=/g) ?? []).length === 9);
}

// Q12: German privacy page uses Sie, never du/dein.
const de = read('de/app/privacy/index.html').replace(/<[^>]+>/g, ' ');
check('Q12 de privacy has no du forms incl. imperatives', !/\b(du|dein\w*|dir|dich|Du|Führe|setze|lösche|prüfe|öffne|melde|schreibe|nutze|wähle|starte|kannst|musst|willst|hast|bist|brauchst)\b/.test(de));

// Q13
check('Q13 pt-BR support has no "permite permitir"', !read('pt-br/app/support/index.html').includes('permite permitir'));

process.exit(bad ? 1 : 0);
