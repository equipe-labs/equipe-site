// The brand kit, made in the browser (free, nothing uploaded): PNGs at every size, the favicon set (.ico, .svg, Apple
// touch icon, Android icons, web manifest), social profile and cover images, the palette, the font pairing and a
// one-page brand sheet PDF, zipped. Small writers for ZIP (stored), ICO and PDF (one JPEG page), no libraries.
import type { Composed, Design } from './compose';

// ---- pictures ---------------------------------------------------------------------------------------------------------------
const toImg = (svg: string) => new Promise<HTMLImageElement>((res, rej) => {
  const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
  const im = new Image();
  im.onload = () => { URL.revokeObjectURL(url); res(im); };
  im.onerror = () => { URL.revokeObjectURL(url); rej(new Error('svg')); };
  im.src = url;
});
const canvasOf = (w: number, h: number) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };
const blobOf = (c: HTMLCanvasElement, type = 'image/png', q?: number) => new Promise<Blob>((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error('blob'))), type, q));
const sized = (svg: string, w: number, h: number) => svg.replace(/^<svg /, `<svg width="${w}" height="${h}" `);

/** An SVG drawn into a w x h picture: fitted with `pad` (share of the smaller side) on a ground (or transparent). */
export async function draw(svg: string, vw: number, vh: number, w: number, h: number, { ground = '', pad = 0, fit = 1 } = {}) {
  const c = canvasOf(w, h), x = c.getContext('2d')!;
  if (ground) { x.fillStyle = ground; x.fillRect(0, 0, w, h); }
  const s = Math.min((w * (1 - 2 * pad)) / vw, (h * (1 - 2 * pad)) / vh) * fit;
  const dw = vw * s, dh = vh * s;
  const im = await toImg(sized(svg, Math.round(dw * 2), Math.round(dh * 2)));
  x.imageSmoothingQuality = 'high';
  x.drawImage(im, (w - dw) / 2, (h - dh) / 2, dw, dh);
  return c;
}
export const png = async (svg: string, vw: number, vh: number, w: number, h: number, o = {}) => blobOf(await draw(svg, vw, vh, w, h, o));

// ---- ICO (PNG entries) ---------------------------------------------------------------------------------------------------------
export async function ico(svg: string) {
  const sizes = [16, 32, 48];
  const pngs = await Promise.all(sizes.map(async (s) => new Uint8Array(await (await png(svg, 100, 100, s, s)).arrayBuffer())));
  const head = 6 + 16 * sizes.length;
  const out = new Uint8Array(head + pngs.reduce((n, p) => n + p.length, 0)), v = new DataView(out.buffer);
  v.setUint16(2, 1, true); v.setUint16(4, sizes.length, true);
  let off = head;
  sizes.forEach((s, i) => {
    const e = 6 + 16 * i;
    out[e] = s; out[e + 1] = s; v.setUint16(e + 4, 1, true); v.setUint16(e + 6, 32, true);
    v.setUint32(e + 8, pngs[i].length, true); v.setUint32(e + 12, off, true);
    out.set(pngs[i], off); off += pngs[i].length;
  });
  return new Blob([out], { type: 'image/x-icon' });
}

// ---- ZIP (stored, no compression: the files are small and mostly PNG already) ------------------------------------------------
const CRC = (() => { const t = new Int32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c; } return t; })();
const crc32 = (b: Uint8Array) => { let c = -1; for (let i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 0xff] ^ (c >>> 8); return (c ^ -1) >>> 0; };
export async function zip(files: { name: string; data: Blob | string }[]) {
  const enc = new TextEncoder(), parts: Uint8Array[] = [], central: Uint8Array[] = [];
  let off = 0;
  const now = new Date(), time = (now.getHours() << 11) | (now.getMinutes() << 5) | (now.getSeconds() >> 1), date = ((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate();
  for (const f of files) {
    const data = typeof f.data === 'string' ? enc.encode(f.data) : new Uint8Array(await f.data.arrayBuffer());
    const name = enc.encode(f.name), crc = crc32(data);
    const h = new Uint8Array(30 + name.length), v = new DataView(h.buffer);
    v.setUint32(0, 0x04034b50, true); v.setUint16(4, 20, true); v.setUint16(6, 0x0800, true); v.setUint16(10, time, true); v.setUint16(12, date, true);
    v.setUint32(14, crc, true); v.setUint32(18, data.length, true); v.setUint32(22, data.length, true); v.setUint16(26, name.length, true); h.set(name, 30);
    const c = new Uint8Array(46 + name.length), cv = new DataView(c.buffer);
    cv.setUint32(0, 0x02014b50, true); cv.setUint16(4, 20, true); cv.setUint16(6, 20, true); cv.setUint16(8, 0x0800, true); cv.setUint16(12, time, true); cv.setUint16(14, date, true);
    cv.setUint32(16, crc, true); cv.setUint32(20, data.length, true); cv.setUint32(24, data.length, true); cv.setUint16(28, name.length, true); cv.setUint32(42, off, true); c.set(name, 46);
    parts.push(h, data); central.push(c); off += h.length + data.length;
  }
  const size = central.reduce((n, c) => n + c.length, 0);
  const end = new Uint8Array(22), ev = new DataView(end.buffer);
  ev.setUint32(0, 0x06054b50, true); ev.setUint16(8, files.length, true); ev.setUint16(10, files.length, true); ev.setUint32(12, size, true); ev.setUint32(16, off, true);
  return new Blob([...parts, ...central, end] as BlobPart[], { type: 'application/zip' });
}

// ---- PDF (one page, the sheet as a JPEG) -----------------------------------------------------------------------------------------
export async function pdfOf(canvas: HTMLCanvasElement, wPt = 595.28, hPt = 841.89) {
  const jpg = new Uint8Array(await (await blobOf(canvas, 'image/jpeg', 0.92)).arrayBuffer());
  const enc = new TextEncoder();
  const content = enc.encode(`q ${wPt} 0 0 ${hPt} 0 0 cm /Im0 Do Q`);
  const objs: (Uint8Array | string)[] = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${wPt} ${hPt}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>`,
  ];
  const chunks: Uint8Array[] = []; const offsets: number[] = []; let len = 0;
  const push = (b: Uint8Array | string) => { const u = typeof b === 'string' ? enc.encode(b) : b; chunks.push(u); len += u.length; };
  push('%PDF-1.4\n%\xe2\xe3\xcf\xd3\n');
  objs.forEach((o, i) => { offsets.push(len); push(`${i + 1} 0 obj\n${o}\nendobj\n`); });
  offsets.push(len); push(`4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${canvas.width} /Height ${canvas.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpg.length} >>\nstream\n`); push(jpg); push('\nendstream\nendobj\n');
  offsets.push(len); push(`5 0 obj\n<< /Length ${content.length} >>\nstream\n`); push(content); push('\nendstream\nendobj\n');
  const xref = len;
  push(`xref\n0 6\n0000000000 65535 f \n${offsets.map((o) => `${String(o).padStart(10, '0')} 00000 n \n`).join('')}trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`);
  return new Blob(chunks as BlobPart[], { type: 'application/pdf' });
}

// ---- the brand sheet -------------------------------------------------------------------------------------------------------------
export interface SheetText { title: string; logo: string; onDark: string; oneColour: string; icon: string; colours: string; type: string; heading: string; body: string; license: string; made: string }
/** One A4 page at 150 dpi: the logo, on dark, in one colour, the icon, the colours with hex, the type, the licence note. */
export async function brandSheet(name: string, c: Composed, mono: Composed, white: Composed, d: Design, t: SheetText) {
  const W = 1240, H = 1754, M = 96;
  const cv = canvasOf(W, H), x = cv.getContext('2d')!;
  const sys = '-apple-system, "SF Pro Text", "Apple SD Gothic Neo", "Pretendard", "Segoe UI", sans-serif';
  x.fillStyle = '#ffffff'; x.fillRect(0, 0, W, H);
  x.fillStyle = '#16161a'; x.font = `700 44px ${sys}`; x.fillText(name, M, M + 30);
  x.fillStyle = '#6b6b73'; x.font = `400 24px ${sys}`; x.fillText(t.title, M, M + 72);
  const box = async (svg: string, vw: number, vh: number, bx: number, by: number, bw: number, bh: number, ground: string, label: string) => {
    x.fillStyle = ground; x.beginPath(); x.roundRect(bx, by, bw, bh, 20); x.fill();
    if (ground === '#ffffff') { x.strokeStyle = '#e4e4e7'; x.lineWidth = 2; x.stroke(); }
    const im = await draw(svg, vw, vh, Math.round(bw * 2), Math.round(bh * 2), { pad: bw < 500 ? 0.1 : 0.16 });
    x.drawImage(im, bx, by, bw, bh);
    x.fillStyle = '#6b6b73'; x.font = `500 20px ${sys}`; x.fillText(label, bx, by + bh + 30);
  };
  await box(c.svg, c.w, c.h, M, 220, W - 2 * M, 420, '#f7f7f5', t.logo);
  const third = (W - 2 * M - 48) / 3;
  await box(white.svg, white.w, white.h, M, 720, third, 260, '#16161a', t.onDark);
  await box(mono.svg, mono.w, mono.h, M + third + 24, 720, third, 260, '#ffffff', t.oneColour);
  await box(c.icon, 100, 100, M + 2 * (third + 24), 720, third, 260, '#f7f7f5', t.icon);
  x.fillStyle = '#16161a'; x.font = `700 28px ${sys}`; x.fillText(t.colours, M, 1090);
  const cols = [...new Set([...(d.palette || []), d.text])].slice(0, 5);
  const sw = (W - 2 * M - 24 * (cols.length - 1)) / cols.length;
  cols.forEach((col, i) => {
    const bx = M + i * (sw + 24);
    x.fillStyle = col; x.beginPath(); x.roundRect(bx, 1116, sw, 120, 16); x.fill();
    x.strokeStyle = '#e4e4e7'; x.lineWidth = 2; x.stroke();
    x.fillStyle = '#16161a'; x.font = `600 22px ${sys}`; x.fillText(col.toUpperCase(), bx, 1270);
  });
  x.fillStyle = '#16161a'; x.font = `700 28px ${sys}`; x.fillText(t.type, M, 1350);
  x.font = `400 24px ${sys}`; x.fillStyle = '#3f3f46';
  x.fillText(`${t.heading}: ${d.font}`, M, 1394); x.fillText(`${t.body}: ${d.body}`, M, 1434);
  x.fillStyle = '#6b6b73'; x.font = `400 19px ${sys}`;
  const words = t.license.split(' '); let line = '', y = 1540;
  for (const w of words) { const test = line ? `${line} ${w}` : w; if (x.measureText(test).width > W - 2 * M) { x.fillText(line, M, y); line = w; y += 28; } else line = test; }
  if (line) x.fillText(line, M, y);
  x.fillText(t.made, M, H - 70);
  return cv;
}
