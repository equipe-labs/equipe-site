/**
 * The typefaces the logo maker sets the business name in (Google Fonts, open licences: SIL OFL or Apache 2.0, free for
 * logos and commercial use). Keep the family names in step with equipe-cloud platform/src/free-logo.js FONTS: the
 * platform's font proxy serves only these, as small TrueType subsets the page outlines into paths.
 */
export type FontScript = 'latin' | 'ko' | 'ja' | 'zh';
export interface LogoFont {
  family: string;
  /** Weights the family really has (the proxy falls back to 400 otherwise). */
  weights: number[];
  feel: 'sans' | 'geometric' | 'rounded' | 'serif' | 'display' | 'script';
  scripts: FontScript[];
  /** A body family that pairs with it in the brand kit. */
  body: string;
}

export const LOGO_FONTS: LogoFont[] = [
  { family: 'Inter', weights: [400, 600, 700, 800, 900], feel: 'sans', scripts: ['latin'], body: 'Inter' },
  { family: 'Manrope', weights: [400, 600, 700, 800], feel: 'sans', scripts: ['latin'], body: 'Inter' },
  { family: 'Poppins', weights: [400, 600, 700, 800, 900], feel: 'geometric', scripts: ['latin'], body: 'Inter' },
  { family: 'Montserrat', weights: [400, 600, 700, 800, 900], feel: 'geometric', scripts: ['latin'], body: 'Inter' },
  { family: 'DM Sans', weights: [400, 600, 700, 800, 900], feel: 'geometric', scripts: ['latin'], body: 'DM Sans' },
  { family: 'Space Grotesk', weights: [400, 600, 700], feel: 'sans', scripts: ['latin'], body: 'Inter' },
  { family: 'Sora', weights: [400, 600, 700, 800], feel: 'geometric', scripts: ['latin'], body: 'Inter' },
  { family: 'Outfit', weights: [400, 600, 700, 800, 900], feel: 'geometric', scripts: ['latin'], body: 'Inter' },
  { family: 'Nunito', weights: [400, 600, 700, 800, 900], feel: 'rounded', scripts: ['latin'], body: 'Nunito' },
  { family: 'Quicksand', weights: [400, 600, 700], feel: 'rounded', scripts: ['latin'], body: 'Nunito' },
  { family: 'Comfortaa', weights: [400, 600, 700], feel: 'rounded', scripts: ['latin'], body: 'Nunito' },
  { family: 'Fraunces', weights: [400, 600, 700, 800, 900], feel: 'serif', scripts: ['latin'], body: 'Inter' },
  { family: 'Playfair Display', weights: [400, 600, 700, 800, 900], feel: 'serif', scripts: ['latin'], body: 'Inter' },
  { family: 'DM Serif Display', weights: [400], feel: 'serif', scripts: ['latin'], body: 'DM Sans' },
  { family: 'Libre Baskerville', weights: [400, 700], feel: 'serif', scripts: ['latin'], body: 'Inter' },
  { family: 'Cormorant Garamond', weights: [400, 600, 700], feel: 'serif', scripts: ['latin'], body: 'Manrope' },
  { family: 'Archivo Black', weights: [400], feel: 'display', scripts: ['latin'], body: 'Inter' },
  { family: 'Righteous', weights: [400], feel: 'display', scripts: ['latin'], body: 'Nunito' },
  { family: 'Caveat', weights: [400, 600, 700], feel: 'script', scripts: ['latin'], body: 'Nunito' },
  { family: 'Noto Sans KR', weights: [400, 600, 700, 800, 900], feel: 'sans', scripts: ['ko', 'latin'], body: 'Noto Sans KR' },
  { family: 'Noto Serif KR', weights: [400, 600, 700, 900], feel: 'serif', scripts: ['ko', 'latin'], body: 'Noto Sans KR' },
  { family: 'Gowun Dodum', weights: [400], feel: 'rounded', scripts: ['ko', 'latin'], body: 'Noto Sans KR' },
  { family: 'Black Han Sans', weights: [400], feel: 'display', scripts: ['ko', 'latin'], body: 'Noto Sans KR' },
  { family: 'Jua', weights: [400], feel: 'rounded', scripts: ['ko', 'latin'], body: 'Noto Sans KR' },
  { family: 'Noto Sans JP', weights: [400, 600, 700, 800, 900], feel: 'sans', scripts: ['ja', 'latin'], body: 'Noto Sans JP' },
  { family: 'Noto Serif JP', weights: [400, 600, 700, 900], feel: 'serif', scripts: ['ja', 'latin'], body: 'Noto Sans JP' },
  { family: 'M PLUS Rounded 1c', weights: [400, 700, 800, 900], feel: 'rounded', scripts: ['ja', 'latin'], body: 'Noto Sans JP' },
  { family: 'Zen Maru Gothic', weights: [400, 700, 900], feel: 'rounded', scripts: ['ja', 'latin'], body: 'Noto Sans JP' },
  { family: 'Noto Sans SC', weights: [400, 600, 700, 800, 900], feel: 'sans', scripts: ['zh', 'latin'], body: 'Noto Sans SC' },
  { family: 'Noto Serif SC', weights: [400, 600, 700, 900], feel: 'serif', scripts: ['zh', 'latin'], body: 'Noto Sans SC' },
  { family: 'ZCOOL XiaoWei', weights: [400], feel: 'serif', scripts: ['zh', 'latin'], body: 'Noto Sans SC' },
];
