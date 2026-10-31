import en, { type AppText } from './en';
import ko from './ko';
import type { LocaleCode } from '../locales';

const files = import.meta.glob<{ default: AppText }>(['./*.ts', '!./index.ts', '!./en.ts', '!./ko.ts'], { eager: true });
const byCode: Record<string, AppText> = { en, ko };
for (const [path, mod] of Object.entries(files)) byCode[path.slice(2, -3)] = mod.default;

/** The words inside the drawn app, in a site language (falls back to English). */
export const getAppText = (code: LocaleCode): AppText => byCode[code] ?? en;
