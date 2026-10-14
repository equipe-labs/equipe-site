import { en, type Messages } from './en';
import { LOCALES, DEFAULT_LOCALE, type LocaleCode, type LocaleInfo } from './locales';

export { LOCALES, DEFAULT_LOCALE };
export type { Messages, LocaleCode, LocaleInfo };

// Every src/i18n/<code>.ts that exports a default Messages object is a translation.
const files = import.meta.glob<{ default: Messages }>(['./*.ts', '!./index.ts', '!./locales.ts', '!./en.ts'], { eager: true });

/** Compare a translation's shape with the English source; returns a list of problems. */
function diff(source: unknown, target: unknown, path: string, out: string[]) {
  if (typeof source === 'string') {
    if (typeof target !== 'string') out.push(`${path}: expected a string`);
    else if (target.trim() === '') out.push(`${path}: empty string`);
  } else if (Array.isArray(source)) {
    if (!Array.isArray(target)) return void out.push(`${path}: expected an array`);
    if (target.length !== source.length) out.push(`${path}: expected ${source.length} items, got ${target.length}`);
    source.forEach((s, i) => diff(s, target[i], `${path}[${i}]`, out));
  } else if (source && typeof source === 'object') {
    if (!target || typeof target !== 'object') return void out.push(`${path}: expected an object`);
    for (const k of Object.keys(source)) diff((source as any)[k], (target as any)[k], `${path}.${k}`, out);
    for (const k of Object.keys(target)) if (!(k in source)) out.push(`${path}.${k}: unknown key`);
  }
}

const messages = new Map<LocaleCode, Messages>([[DEFAULT_LOCALE, en]]);
for (const info of LOCALES) {
  if (info.code === DEFAULT_LOCALE) continue;
  const mod = files[`./${info.code}.ts`];
  if (!mod) continue; // no translation yet: no page is generated for this language
  const problems: string[] = [];
  diff(en, mod.default, info.code, problems);
  if (problems.length) throw new Error(`src/i18n/${info.code}.ts does not match en.ts:\n  ${problems.join('\n  ')}`);
  messages.set(info.code, mod.default);
}

/** Locales that have a translation file (en always first), in LOCALES order. */
export const available: LocaleInfo[] = LOCALES.filter((l) => messages.has(l.code));

export const getMessages = (code: LocaleCode): Messages => messages.get(code)!;
export const getLocale = (code: LocaleCode): LocaleInfo => LOCALES.find((l) => l.code === code)!;

/** Path of a locale's landing page: `/` for English, `/ko/` for Korean, … */
export const localePath = (l: LocaleInfo) => (l.slug ? `/${l.slug}/` : '/');

/** Path of a sub-page in a locale: `/app/privacy/` for English, `/ko/app/privacy/` for Korean, … */
export const subPath = (l: LocaleInfo, sub: string) => `${localePath(l)}${sub}/`;

/** Split `backticks` / **bold** markers into renderable segments. */
export type Seg = { t: string; kind: 'text' | 'code' | 'strong' };
export function segments(s: string): Seg[] {
  return s
    .split(/(`[^`]*`|\*\*[^*]*\*\*)/)
    .filter(Boolean)
    .map((t) =>
      t.startsWith('`') ? { t: t.slice(1, -1), kind: 'code' } : t.startsWith('**') ? { t: t.slice(2, -2), kind: 'strong' } : { t, kind: 'text' },
    );
}
export const plain = (s: string) => s.replace(/`/g, '').replace(/\*\*/g, '');
