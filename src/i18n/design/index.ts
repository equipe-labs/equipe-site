import en, { type DesignText } from './en';
import type { LocaleCode } from '../locales';

const files = import.meta.glob<{ default: DesignText }>(['./*.ts', '!./index.ts', '!./en.ts'], { eager: true });
const byCode: Record<string, DesignText> = { en };
for (const [path, mod] of Object.entries(files)) byCode[path.slice(2, -3)] = mod.default;

/** The words on the equipe-design pages, in a site language (falls back to English). */
export const getDesignText = (code: LocaleCode): DesignText => byCode[code] ?? en;
