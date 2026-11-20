// Shared behaviour for <details> popovers (team menu, language menu, Product menu):
// closing plays a short exit animation (see "Popover motion" in site.css) before the element is really closed.
const EXIT_MS = 120;

/** Close a popover with its exit animation. Safe to call repeatedly. */
export function closePop(d: HTMLDetailsElement) {
  if (!d.open || d.classList.contains('pop-closing')) return;
  d.classList.add('pop-closing');
  window.setTimeout(() => { d.open = false; d.classList.remove('pop-closing'); }, EXIT_MS);
}

/** Wire a popover: clicking its summary while open, clicking outside, or Escape close it with the animation. */
export function wirePop(d: HTMLDetailsElement, onEscape?: () => void) {
  const summary = d.querySelector('summary')!;
  summary.addEventListener('click', (e) => { if (d.open) { e.preventDefault(); closePop(d); } });
  document.addEventListener('click', (e) => { if (d.open && !d.contains(e.target as Node)) closePop(d); });
  d.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !d.open) return;
    e.preventDefault(); closePop(d); summary.focus(); onEscape?.();
  });
}
