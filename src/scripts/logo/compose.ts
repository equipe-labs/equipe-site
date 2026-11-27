// The logo maker's composer (in the browser, free, no AI): the mark from the platform plus the business name set in real
// type. The name is outlined into SVG paths with opentype.js (vendored, loaded on first use) from a TrueType subset the
// platform's font proxy serves (only the letters of the name), so every file the visitor downloads is exactly what they
// saw, needs no font installed, and is always spelled right.
import { LOGO_FONTS, type FontScript, type LogoFont } from '../../data/logo-fonts';

export const FONT_API = 'https://platform.equipe.im/v1/free/logo/font';

export interface Mark { n: number; svg: string; mono: string; colours: string[]; form?: string; idea?: string; from?: number | null }
export type Layout = 'row' | 'stack' | 'name' | 'mark' | 'badge';
export type Treatment = 'dot' | 'tile' | 'bar' | 'circle';
export interface Design {
  n: number;               // the mark, or -1 for a type-only logo
  font: string; weight: number; layout: Layout;
  case: 'as' | 'lower' | 'upper' | 'title';
  text: string;            // name colour
  mark: string | null;     // null: the mark's own colours; a hex: the mark in one colour
  accent: string;          // dot, bar, tile and badge colour
  bg: 'light' | 'dark';
  tracking: number;        // em
  palette: string[];
  body: string;
  treatment: Treatment | null;
}
export interface Composed { svg: string; icon: string; w: number; h: number }

type OtFont = { unitsPerEm: number; ascender: number; descender: number; tables: { os2?: { sCapHeight?: number } }; getPath: (t: string, x: number, y: number, s: number, o?: object) => OtPath; stringToGlyphs: (t: string) => OtGlyph[]; getKerningValue: (a: OtGlyph, b: OtGlyph) => number };
type OtPath = { toPathData: (d?: number) => string; getBoundingBox: () => { x1: number; y1: number; x2: number; y2: number } };
type OtGlyph = { advanceWidth: number; getPath: (x: number, y: number, s: number) => OtPath };
type Ot = { parse: (b: ArrayBuffer) => OtFont };

// ---- scripts and fonts --------------------------------------------------------------------------------------------------
export function scriptOf(s: string): FontScript {
  if (/[가-힯ᄀ-ᇿ㄰-㆏]/.test(s)) return 'ko';
  if (/[぀-ヿ]/.test(s)) return 'ja';
  if (/[一-鿿]/.test(s)) return 'zh';
  return 'latin';
}
export const fontsFor = (name: string): LogoFont[] => { const sc = scriptOf(name); return LOGO_FONTS.filter((f) => f.scripts.includes(sc)); };
export const fontInfo = (family: string): LogoFont => LOGO_FONTS.find((f) => f.family === family) || LOGO_FONTS[0];
export const nearestWeight = (family: string, w: number) => { const ws = fontInfo(family).weights; return ws.reduce((a, b) => (Math.abs(b - w) < Math.abs(a - w) ? b : a), ws[0]); };

let otP: Promise<Ot> | null = null;
function opentype(): Promise<Ot> {
  if (!otP) otP = new Promise((res, rej) => {
    const w = window as unknown as { opentype?: Ot };
    if (w.opentype) { res(w.opentype); return; }
    const s = document.createElement('script');
    s.src = '/vendor/opentype-1.3.4.min.js'; s.async = true;
    s.onload = () => (w.opentype ? res(w.opentype) : rej(new Error('opentype')));
    s.onerror = () => { otP = null; rej(new Error('opentype')); };
    document.head.appendChild(s);
  });
  return otP;
}
const fontCache = new Map<string, Promise<OtFont>>();
/** The family at this weight, with (at least) these characters. */
export function loadFont(family: string, weight: number, text: string): Promise<OtFont> {
  const chars = [...new Set([...text.normalize('NFC')])].sort().join('');
  const w = nearestWeight(family, weight);
  const key = `${family}|${w}|${chars}`;
  let p = fontCache.get(key);
  if (!p) {
    p = Promise.all([opentype(), fetch(`${FONT_API}?f=${encodeURIComponent(family)}&w=${w}&t=${encodeURIComponent(chars)}`).then((r) => { if (!r.ok) throw new Error(`font ${r.status}`); return r.arrayBuffer(); })]).then(([ot, buf]) => ot.parse(buf));
    p.catch(() => fontCache.delete(key));
    fontCache.set(key, p);
  }
  return p;
}

// ---- text --------------------------------------------------------------------------------------------------------------
export function cased(s: string, c: Design['case']) {
  if (c === 'lower') return s.toLocaleLowerCase();
  if (c === 'upper') return s.toLocaleUpperCase();
  if (c === 'title') return s.replace(/(^|\s)(\S)/g, (_, a, b) => a + b.toLocaleUpperCase());
  return s;
}
const capRatio = (f: OtFont) => (f.tables.os2?.sCapHeight ? f.tables.os2.sCapHeight / f.unitsPerEm : 0.7);
/** The text as one path at a size whose capital height is `cap`, baseline at y=0, starting at x=0. */
function textPath(f: OtFont, text: string, cap: number, tracking: number) {
  const size = cap / capRatio(f);
  const p = f.getPath(text, 0, 0, size, { kerning: true, letterSpacing: tracking });
  const b = p.getBoundingBox();
  return { d: p.toPathData(2), x1: b.x1, x2: b.x2, y1: b.y1, y2: b.y2, size };
}
/** Each glyph placed along a circle of radius r around (cx, cy), centred on the top. */
function arcText(f: OtFont, text: string, cap: number, tracking: number, cx: number, cy: number, r: number) {
  const size = cap / capRatio(f), scale = size / f.unitsPerEm;
  const gl = f.stringToGlyphs(text);
  const adv = gl.map((g, i) => g.advanceWidth * scale + (i < gl.length - 1 ? (f.getKerningValue(g, gl[i + 1]) || 0) * scale + tracking * size : 0));
  const total = adv.reduce((a, b) => a + b, 0);
  let s = -total / 2, out = '';
  gl.forEach((g, i) => {
    const mid = s + (g.advanceWidth * scale) / 2;
    const ang = mid / r; // radians from the top, clockwise
    const x = cx + r * Math.sin(ang), y = cy - r * Math.cos(ang);
    const d = g.getPath(-(g.advanceWidth * scale) / 2, 0, size).toPathData(2);
    if (d) out += `<path transform="translate(${x.toFixed(2)} ${y.toFixed(2)}) rotate(${((ang * 180) / Math.PI).toFixed(2)})" d="${d}"/>`;
    s += adv[i];
  });
  return out;
}

// ---- marks ---------------------------------------------------------------------------------------------------------------
let uid = 0;
const inner = (svg: string) => svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '').replace(/<title>[\s\S]*?<\/title>/, '');
/** The mark's drawing (viewBox 0 0 100 100) for embedding: own colours, or one colour (paper cut out). Mask ids made unique. */
export function markBody(m: Mark, colour: string | null): string {
  if (!colour) return inner(m.svg);
  const id = `m${++uid}${Math.random().toString(36).slice(2, 6)}`;
  return inner(m.mono).replace(/id="k"/g, `id="${id}"`).replace(/url\(#k\)/g, `url(#${id})`).replace(/fill="#000000"/g, `fill="${colour}"`);
}
const place = (body: string, x: number, y: number, s: number) => `<g transform="translate(${x.toFixed(2)} ${y.toFixed(2)}) scale(${(s / 100).toFixed(4)})">${body}</g>`;
const svgDoc = (w: number, h: number, body: string, title = '') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w.toFixed(1)} ${h.toFixed(1)}">${title ? `<title>${title.replace(/[<&>"]/g, '')}</title>` : ''}${body}</svg>`;

/** The initial on a rounded tile (the icon of a type-only logo). */
async function tile(name: string, d: Design, shape: 'square' | 'circle' = 'square') {
  const ch = [...name.trim()].find((c) => /\p{L}|\p{N}/u.test(c)) || 'A';
  const initial = cased(ch, d.case === 'lower' ? 'lower' : 'upper');
  const f = await loadFont(d.font, Math.max(700, d.weight), initial);
  const t = textPath(f, initial, 46, 0);
  const ink = contrast(d.accent, '#ffffff') >= 2 ? '#ffffff' : '#16161a';
  const bgShape = shape === 'circle' ? `<circle cx="50" cy="50" r="50" fill="${d.accent}"/>` : `<rect width="100" height="100" rx="24" fill="${d.accent}"/>`;
  const tx = 50 - (t.x1 + t.x2) / 2, ty = 50 - (t.y1 + t.y2) / 2;
  return `${bgShape}<path fill="${ink}" transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)})" d="${t.d}"/>`;
}

// ---- the lockup ------------------------------------------------------------------------------------------------------------
/**
 * The logo as SVG (transparent, text outlined) and its square icon. mark: the chosen mark (null for a type-only logo).
 * On a dark ground the default ink colours are light; a colour the visitor picked is kept.
 */
export async function compose(name: string, d: Design, mark: Mark | null): Promise<Composed> {
  const text = cased(name.trim(), d.case);
  const f = await loadFont(d.font, d.weight, text + text.toLocaleUpperCase() + text.toLocaleLowerCase());
  const markOf = async (): Promise<string> => (mark ? markBody(mark, d.mark) : tile(name, d, d.treatment === 'circle' ? 'circle' : 'square'));
  const pad = 10;
  let w = 0, h = 0, body = '';
  const typeOnly = !mark;
  const iconBody = await markOf();
  const layout: Layout = typeOnly && d.layout === 'badge' ? 'badge' : d.layout;
  if (layout === 'mark') {
    w = 100 + 2 * pad; h = 100 + 2 * pad; body = place(iconBody, pad, pad, 100);
  } else if (layout === 'badge') {
    const R = 100, cx = R + pad, cy = R + pad;
    const ring = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="${d.accent}"/><circle cx="${cx}" cy="${cy}" r="${R - 7}" fill="none" stroke="#ffffff" stroke-opacity=".55" stroke-width="2.2"/>`;
    const label = arcText(f, text, 15, Math.max(0.06, d.tracking), cx, cy, R - 30);
    const inside = mark ? markBody(mark, '#ffffff') : await tile(name, d, 'circle');
    body = `${ring}<g fill="#ffffff">${label}</g>${place(inside, cx - 36, cy - 22, 72)}`;
    w = h = 2 * (R + pad);
  } else {
    const cap = layout === 'stack' ? 24 : 38;
    const t = textPath(f, text, cap, d.tracking);
    const tw = t.x2 - t.x1;
    const accentBits = (x0: number, base: number) => {
      if (!typeOnly) return '';
      if (d.treatment === 'dot') { const r = cap * 0.17; return `<circle cx="${(x0 + tw + r * 1.9).toFixed(2)}" cy="${(base - r).toFixed(2)}" r="${r.toFixed(2)}" fill="${d.accent}"/>`; }
      if (d.treatment === 'bar') return `<rect x="${x0.toFixed(2)}" y="${(base + cap * 0.32).toFixed(2)}" width="${(tw * 0.38).toFixed(2)}" height="${(cap * 0.16).toFixed(2)}" rx="${(cap * 0.08).toFixed(2)}" fill="${d.accent}"/>`;
      return '';
    };
    const showIcon = layout !== 'name' && (!typeOnly || d.treatment === 'tile' || d.treatment === 'circle');
    if (layout === 'stack' && showIcon) {
      const m = 100, gap = 18;
      w = Math.max(m, tw) + 2 * pad; h = m + gap + cap * 1.32 + 2 * pad;
      const tx = (w - tw) / 2 - t.x1, base = pad + m + gap + cap;
      body = place(iconBody, (w - m) / 2, pad, m) + `<path fill="${d.text}" transform="translate(${tx.toFixed(2)} ${base.toFixed(2)})" d="${t.d}"/>`;
    } else if (showIcon) {
      const m = typeOnly ? 72 : 100, gap = typeOnly ? 22 : 26;
      const extra = typeOnly && d.treatment === 'dot' ? cap * 0.6 : 0;
      w = m + gap + tw + extra + 2 * pad; h = Math.max(m, cap * 1.5) + 2 * pad;
      const base = h / 2 + cap / 2, tx = pad + m + gap - t.x1;
      body = place(iconBody, pad, (h - m) / 2, m) + `<path fill="${d.text}" transform="translate(${tx.toFixed(2)} ${base.toFixed(2)})" d="${t.d}"/>` + accentBits(pad + m + gap, base);
    } else {
      const extra = typeOnly && d.treatment === 'dot' ? cap * 0.6 : 0;
      const below = typeOnly && d.treatment === 'bar' ? cap * 0.5 : 0;
      w = tw + extra + 2 * pad; h = cap * 1.5 + below + 2 * pad;
      const base = pad + cap * 1.12, tx = pad - t.x1;
      body = `<path fill="${d.text}" transform="translate(${tx.toFixed(2)} ${base.toFixed(2)})" d="${t.d}"/>` + accentBits(pad, base);
    }
  }
  const icon = svgDoc(100, 100, iconBody, name);
  return { svg: svgDoc(w, h, body, name), icon, w, h };
}

// ---- defaults ------------------------------------------------------------------------------------------------------------
const lum = (h: string) => { const c = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
export const contrast = (a: string, b: string) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
/** A colour that reads on this ground: the colour itself when it does, else near-black or near-white. */
export const inkOn = (c: string, bg: 'light' | 'dark') => { const g = bg === 'dark' ? '#111114' : '#ffffff'; return contrast(c, g) >= 3 ? c : bg === 'dark' ? '#f5f5f4' : '#16161a'; };
/** A first design for a mark (or a type-only treatment), from the brief's fonts and palette. */
export function firstDesign(name: string, opts: { n: number; font?: string; body?: string; palette: string[]; mark?: Mark | null; treatment?: Treatment | null; layout?: Layout; weight?: number; bg?: 'light' | 'dark' }): Design {
  const fonts = fontsFor(name);
  const font = fonts.find((f) => f.family === opts.font) || fonts[0];
  const vivid = (c: string) => { const [r, g, b] = [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16) / 255); const mx = Math.max(r, g, b), mn = Math.min(r, g, b); return mx ? (mx - mn) / mx * (0.4 + mx) : 0; };
  const markCols = [...(opts.mark?.colours || [])].filter((c) => /^#[0-9a-f]{6}$/i.test(c)).sort((a, b) => vivid(b) - vivid(a));
  const accent = markCols[0] || opts.palette.find((c) => contrast(c, '#ffffff') >= 2.2) || '#2f5bea';
  const deep = opts.palette.find((c) => lum(c) < 0.06) || '#16161a';
  const bg = opts.bg || 'light';
  return {
    n: opts.n, font: font.family, weight: nearestWeight(font.family, opts.weight || 700), layout: opts.layout || (opts.n < 0 && !opts.treatment ? 'name' : 'row'), case: 'as',
    text: bg === 'dark' ? '#f5f5f4' : deep, mark: null, accent, bg, tracking: font.feel === 'serif' ? 0 : -0.01,
    palette: [...new Set([accent, ...opts.palette, deep])].slice(0, 4), body: opts.body || font.body, treatment: opts.treatment || null,
  };
}
