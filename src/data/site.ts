export const SITE = {
  name: 'equipe',
  url: 'https://equipe.im',
  repo: 'https://github.com/equipe-labs/equipe',
  docs: 'https://github.com/equipe-labs/equipe/tree/main/docs',
  /** Stable URL of the signed, notarized macOS DMG attached to every release. */
  desktopDmg: 'https://github.com/equipe-labs/equipe/releases/latest/download/equipe.dmg',
  /** The iOS app "equipe — AI squad" (0.1.0, out since 2026-10-31). */
  appStore: 'https://apps.apple.com/us/app/equipe-ai-squad/id6822702958',
  /** Stable site URL for the signed Android APK. Update its redirect in vercel.json for each release. */
  androidApk: '/download/android',
  /** The signed Android APK attached to the GitHub release `android-v0.2.0` (checked with `shasum -a 256` on the release asset, 2026-11-10). */
  android: {
    file: 'equipe-android-0.2.0.apk',
    sizeMb: 25,
    released: '2026-11-07',
    fileSha256: 'bd8f267edeb10ce0aaed1efbb80f7b3c349895f6121e5f8a97d647d09f8d9773',
    certificateSha256: 'f6884e264a84a48b04cf7b04256e40e3887543795b430e367aee2ff769041a87',
    release: 'https://github.com/equipe-labs/equipe-site/releases/tag/android-v0.2.0',
  },
  roadmap: 'https://github.com/equipe-labs/equipe/blob/main/docs/ROADMAP.md',
  architecture: 'https://github.com/equipe-labs/equipe/blob/main/docs/ARCHITECTURE.md',
  /** Fallback social image; each language page uses /og/<slug>.png (scripts/og.mjs). */
  supportEmail: 'support@equipe.im',
  issues: 'https://github.com/equipe-labs/equipe/issues',
  ogImage: '/og.png',
  themeColor: '#F6F5F1',
};
