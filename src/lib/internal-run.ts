// equipe's own test runs (equipe-cloud docs/internal-bypass.md). Our test tooling adds a short-lived X-Equipe-Internal
// header to this browser's requests to the platform; the page itself never holds the secret or a token. The platform
// answers this probe with {"internal": true} only for such a request, and then the free tools skip loading and waiting
// for the Turnstile widget (the server skips Turnstile for those requests too) and the page sends no analytics.
// For everyone else: false, and false at once on any failure or after 1.5 s, so nobody waits on it.
const PROBE = 'https://platform.equipe.im/v1/free/internal';
let asked: Promise<boolean> | null = null;

export function internalRun(): Promise<boolean> {
  if (!asked) {
    asked = Promise.race([
      fetch(PROBE, { cache: 'no-store', credentials: 'omit' }).then((r) => (r.ok ? r.json() : null)).then((j) => j?.internal === true).catch(() => false),
      new Promise<boolean>((r) => setTimeout(() => r(false), 1500)),
    ]).then((yes) => {
      if (yes) {
        const w = window as unknown as { eqTrack?: unknown; eqOwn?: unknown; __eqInternalRun?: boolean };
        w.__eqInternalRun = true;
        w.eqTrack = () => {};
        w.eqOwn = () => {};
      }
      return yes;
    });
  }
  return asked;
}
