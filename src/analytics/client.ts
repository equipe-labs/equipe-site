// Browser side of the PostHog integration. Loaded only when Analytics.astro rendered
// a config (i.e. PUBLIC_POSTHOG_KEY was set at build time). See docs/analytics.md.
import { aiSource } from './ai-sources';

type Props = Record<string, string | number | boolean | undefined>;
type Queue = Array<[string, Props?]> & { push(...e: Array<[string, Props?]>): number };
interface Config {
  key: string;
  uiHost: string;
  environment: string;
}

const w = window as unknown as { eqTrack?: (name: string, props?: Props) => void; __eqq?: Queue };

const cfgEl = document.getElementById('analytics-config');
const cfg: Config | null = cfgEl ? JSON.parse(cfgEl.textContent || 'null') : null;

if (cfg) {
  const pending: Array<[string, Props?]> = w.__eqq ?? [];
  let ph: { capture: (n: string, p?: Props, o?: object) => void } | null = null;
  // Events fired before PostHog has loaded wait here; once loaded they go straight through.
  const track = (name: string, props?: Props) => {
    if (ph) ph.capture(name, props, { transport: 'sendBeacon' });
    else pending.push([name, props]);
  };
  w.eqTrack = track;

  const params = new URLSearchParams(location.search);
  const utm: Props = {};
  for (const k of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
    const v = params.get(k);
    if (v) utm[k] = v;
  }
  const ai = aiSource(document.referrer) ?? aiSource(params.get('utm_source'));
  const common: Props = {
    locale: document.documentElement.lang,
    browser_language: navigator.language,
    environment: cfg.environment,
    ...utm,
    ...(ai ? { ai_source: ai } : {}),
  };

  const send = (name: string, el: HTMLElement) => {
    const props: Props = {};
    for (const [k, v] of Object.entries(el.dataset)) {
      if (k.startsWith('ph') && k.length > 2 && v !== undefined) {
        props[k[2].toLowerCase() + k.slice(3).replace(/[A-Z]/g, (c) => '_' + c.toLowerCase())] = v;
      }
    }
    track(name, props);
  };

  // Declarative tracking: <a data-ph="cta_github_click" data-ph-location="hero">.
  document.addEventListener('click', (e) => {
    const target = e.target instanceof Element ? e.target : null;
    const tagged = target?.closest<HTMLElement>('[data-ph]');
    if (tagged) return send(tagged.dataset.ph!, tagged);
    const a = target?.closest<HTMLAnchorElement>('a[href]');
    if (a && /^https?:$/.test(a.protocol) && a.host !== location.host) {
      track('outbound_click', { url: a.href, host: a.host });
    }
  });

  // <details> toggles don't bubble, so listen in the capture phase.
  document.addEventListener(
    'toggle',
    (e) => {
      const el = e.target as HTMLElement;
      if (el instanceof HTMLDetailsElement && el.open && el.dataset.faqId) track('faq_open', { question_id: el.dataset.faqId });
    },
    true,
  );

  // Scroll depth: 25/50/75/100 % of the page, each once per page view.
  const marks = [25, 50, 75, 100];
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? ((window.scrollY + 1) / max) * 100 : 100;
      while (marks.length && pct >= marks[0]) track('scroll_depth', { percent: marks.shift() });
      if (!marks.length) removeEventListener('scroll', onScroll);
    });
  };
  addEventListener('scroll', onScroll, { passive: true });

  // Load PostHog once the page is idle (or on first interaction), never during first render.
  let started = false;
  const start = async () => {
    if (started) return;
    started = true;
    const { default: posthog } = await import('posthog-js/dist/module.slim');
    posthog.init(cfg.key, {
      // Collection always goes through our own domain (vercel.json rewrites /ingest to PostHog).
      api_host: '/ingest',
      ui_host: cfg.uiHost,
      // Cookieless: nothing is written to cookies or localStorage; identity lives in memory.
      persistence: 'memory',
      person_profiles: 'identified_only',
      autocapture: false,
      capture_pageview: false,
      capture_pageleave: false,
      disable_session_recording: true,
      disable_surveys: true,
      advanced_disable_flags: true,
      loaded: (p) => {
        p.register(common);
        ph = p as unknown as typeof ph;
        p.capture('$pageview');
        for (const [n, pr] of pending.splice(0)) p.capture(n, pr);
      },
    });
  };
  const idle = (window as any).requestIdleCallback ?? ((f: () => void) => setTimeout(f, 2000));
  addEventListener('load', () => idle(start, { timeout: 4000 }), { once: true });
  for (const ev of ['pointerdown', 'keydown', 'scroll']) addEventListener(ev, start, { once: true, passive: true });
}
