// T-18 mockup: injects the two touches into the real page (dev server) so they are drawn in place.
// Usage in the browser: window.__mock('A' | 'B', 'light' | 'dark').
//   A: official monochrome files (black on light, white on dark), swapped by theme.
//   B: the same artwork in the footer's own grey (--muted), hover --text — a recolour, so only with both companies' OK.
// Logos are served from /_mock/ during the mockup only; the build ticket puts them in public/partners/ (see design/supported-by-spec.md).
window.__mock = (opt, mode) => {
  document.documentElement.dataset.theme = mode;
  const css = `
    .supported { flex-basis: 100%; display: flex; flex-wrap: wrap; align-items: center; gap: 0 var(--s-5); margin: var(--s-1) 0 0; }
    .supported .lbl { color: var(--muted); }
    .supported a { display: inline-flex; align-items: center; min-height: var(--tap); color: var(--muted); }
    .supported a:hover { color: var(--text); }
    .supported img, .supported .ink { display: block; }
    .supported .tenki img, .supported .tenki .ink { width: 72px; height: 22px; position: relative; top: 3px; }
    .supported .ironact img, .supported .ironact .ink { width: 96px; height: 13px; }
    .supported .ink { background: currentColor; -webkit-mask: var(--src) center / contain no-repeat; mask: var(--src) center / contain no-repeat; }
    .supported .on-dark { display: none; }
    :root[data-theme='dark'] .supported .on-dark { display: block; }
    :root[data-theme='dark'] .supported .on-light { display: none; }
    .cloud { margin-top: var(--s-7); }
    .cloud .cloud-title { margin: 0; font-size: 22px; }
    .cloud .col { margin: var(--s-3) 0 0; color: var(--muted); }
    .cloud .col a { white-space: nowrap; }
  `;
  let st = document.getElementById('mock-css'); if (!st) { st = document.createElement('style'); st.id = 'mock-css'; document.head.appendChild(st); }
  st.textContent = css;
  const ko = document.documentElement.lang === 'ko';
  const utm = '?utm_source=equipe.im&utm_medium=referral';
  const logo = (key, file, alt, href) => {
    const inner = opt === 'B'
      ? `<span class="ink" role="img" aria-label="${alt}" style="--src:url(/_mock/${file}-currentcolor.svg)"></span>`
      : `<img class="on-light" src="/_mock/${file}-mono-on-light.svg" alt="${alt}"><img class="on-dark" src="/_mock/${file}-mono-on-dark.svg" alt="${alt}">`;
    return `<a class="${key}" href="${href}${utm}" rel="noopener">${inner}</a>`;
  };
  document.querySelector('.supported')?.remove();
  const p = document.createElement('p'); p.className = 'supported';
  p.innerHTML = `<span class="lbl">${ko ? '후원' : 'Supported by'}</span>${logo('tenki', 'tenki-cloud', 'Tenki Cloud', 'https://tenki.cloud/')}${logo('ironact', 'ironact', 'Ironact', 'https://ironact.net/')}`;
  document.querySelector('footer .wrap').appendChild(p);
  document.querySelector('.cloud')?.remove();
  const c = document.createElement('div'); c.className = 'cloud';
  const sb = `https://tenki.cloud/docs/sandbox/quickstart${utm}`;
  c.innerHTML = ko
    ? `<h3 class="cloud-title">클라우드에서 돌리기</h3><p class="col">equipe CLI는 Linux라면 어디서든 돌아가요. Tenki Cloud 샌드박스에서도요. <a href="${sb}" rel="noopener">샌드박스 보기 →</a></p>`
    : `<h3 class="cloud-title">Run it in the cloud</h3><p class="col">equipe's CLI runs on any Linux machine, a Tenki Cloud sandbox included. <a href="${sb}" rel="noopener">See the sandbox →</a></p>`;
  document.querySelector('.cli').after(c);
};
