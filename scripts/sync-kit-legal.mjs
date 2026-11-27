// The privacy policy generator (/tools/privacy-policy-generator/) writes its policies from the same plain-language
// templates the launch kit uses for every equipe product's /privacy page (cloud repo platform/src/client/kit-i18n.js,
// LEGAL and LEGAL_X). This copies the keys the generator uses into src/data/privacygen/policy/kit-<locale>.json, so the
// two never drift: run it after the kit's wording changes.
//   node scripts/sync-kit-legal.mjs [path/to/kit-i18n.js]   (default: ../equipe-cloud/platform/src/client/kit-i18n.js)
// The kit has no Brazilian Portuguese yet: kit-pt-BR.json is written by hand and left as it is.
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const src = resolve(process.argv[2] || '../equipe-cloud/platform/src/client/kit-i18n.js');
const { LEGAL, LEGAL_X } = await import(pathToFileURL(src).href);
export const KEYS = ['priv_title', 'updated', 'p_intro', 'p_intro_same', 'h_collect', 'c_contact', 'c_mail', 'c_files', 'h_use', 'p_use', 'h_cookies', 'ck_none', 'ck_essential', 'h_share', 'p_share', 'p_law', 'h_rights', 'p_rights', 'h_kids', 'p_kids', 'h_change', 'p_change', 'h_contact', 'p_contact_mail'];
export const XKEYS = ['p_kids_yes', 'h_extra', 'x_bookings', 'x_health', 'x_location', 'x_content'];
const MAP = { en: 'en', ko: 'ko', ja: 'ja', 'zh-Hans': 'zh-CN', es: 'es', de: 'de', fr: 'fr' };
for (const [kit, site] of Object.entries(MAP)) {
  const L = { ...LEGAL.en, ...(LEGAL[kit] || {}) }, X = { ...LEGAL_X.en, ...(LEGAL_X[kit] || {}) };
  const out = Object.fromEntries([...KEYS.map((k) => [k, L[k]]), ...XKEYS.map((k) => [k, X[k]])]);
  const missing = Object.entries(out).filter(([, v]) => typeof v !== 'string').map(([k]) => k);
  if (missing.length) throw new Error(`${kit}: missing ${missing.join(', ')}`);
  await writeFile(`src/data/privacygen/policy/kit-${site}.json`, JSON.stringify(out, null, 1) + '\n');
  console.log('wrote', site);
}
