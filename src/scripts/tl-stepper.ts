// The free tools' loading stepper (.tl-stepper in tools.css): while a .tl-run section is shown, its seconds counter
// ([data-eta-t]) counts up next to the expected time. Each tool moves the steps itself (classes is-now / is-done).
const fmt = (s: number) => `${s} s`;
function watch(run: HTMLElement) {
  const t = run.querySelector<HTMLElement>('[data-eta-t]');
  if (!t) return;
  let timer = 0, t0 = 0;
  const sync = () => {
    clearInterval(timer);
    if (run.hidden) { t.textContent = ''; return; }
    t0 = performance.now(); t.textContent = fmt(0);
    timer = window.setInterval(() => { t.textContent = fmt(Math.round((performance.now() - t0) / 1000)); }, 1000);
  };
  new MutationObserver(sync).observe(run, { attributes: true, attributeFilter: ['hidden'] });
}
document.querySelectorAll<HTMLElement>('.tl-run').forEach(watch);
