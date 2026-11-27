// Writes public/video/captions-<code>.vtt from src/data/home.ts (DEMO_CAPS). Run: node --experimental-strip-types scripts/demo-vtt.mjs
import { writeFileSync } from 'node:fs';
const { DEMO_CAPS, DEMO_CAP_TIMES, DEMO_END_TIMES } = await import('../src/data/home.ts');
const ts = (s) => { const m = Math.floor(s / 60), r = s - m * 60; return `00:${String(m).padStart(2, '0')}:${r.toFixed(3).padStart(6, '0')}`; };
for (const [code, c] of Object.entries(DEMO_CAPS)) {
  const cues = c.caps.map(([h, p], i) => `${i + 1}\n${ts(DEMO_CAP_TIMES[i][0])} --> ${ts(DEMO_CAP_TIMES[i][1])}\n${h}\n${p}`);
  cues.push(`${cues.length + 1}\n${ts(DEMO_END_TIMES[0])} --> ${ts(42.5)}\n${c.end[0]}\n${c.end[1]} equipe.im`);
  writeFileSync(new URL(`../public/video/captions-${code}.vtt`, import.meta.url), `WEBVTT\n\n${cues.join('\n\n')}\n`);
}
console.log('ok');
