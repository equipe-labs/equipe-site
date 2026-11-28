// A free tool's paid run with real progress: the platform answers NDJSON when asked (Accept: application/x-ndjson), one
// line per real stage ({"stage": name, ...}) as the run reaches it, then {"status", "body"}. A cached answer is just the
// last line. A platform that answers plain JSON still works (no stages then). Same shape as the name finder's stream.
type Json = Record<string, any>;
export async function postStages(url: string, body: unknown, onStage: (s: Json) => void, timeoutMs = 150000): Promise<{ status: number; body: Json | null }> {
  let status = 0, out: Json | null = null;
  try {
    const r = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json', accept: 'application/x-ndjson' }, body: JSON.stringify(body), signal: AbortSignal.timeout(timeoutMs) });
    status = r.status;
    if (r.body && /ndjson/.test(r.headers.get('content-type') || '')) {
      const rd = r.body.getReader(), dec = new TextDecoder();
      let buf = '';
      const take = (l: string) => {
        if (!l.trim()) return;
        let o: Json; try { o = JSON.parse(l); } catch { return; }
        if ('status' in o) { status = o.status; out = o.body ?? null; } else if (o.stage) { try { onStage(o); } catch { /* the steps are only decoration */ } }
      };
      for (;;) {
        const { value, done } = await rd.read();
        if (done) break;
        buf += dec.decode(value, { stream: true });
        let k;
        while ((k = buf.indexOf('\n')) >= 0) { take(buf.slice(0, k)); buf = buf.slice(k + 1); }
      }
      take(buf);
      if (!out) status = 0; // the stream ended without an answer
    } else out = await r.json().catch(() => null);
  } catch { /* status 0: network */ }
  return { status, body: out };
}
