/** Build flags for content that must not go public yet. */
// The CJ customer story stays hidden until CJ confirms permission: build with SHOW_CJ=true to publish /customers/cj.
export const SHOW_CJ = process.env.SHOW_CJ === 'true';

/**
 * About page founder block, article bylines and Person JSON-LD. Photo: the public LinkedIn profile photo (200x200), used with the owner's OK on 2026-11-22.
 * The bio uses only what the owner supplied and what the public profiles show; items marked "confirm" in the strategy doc are the owner's to check.
 */
export const FOUNDER: null | { name: string; photo: string; role: Record<string, string>; story: Record<string, string>; links: { x: string; linkedin: string } } = {
  name: 'Abel Ko',
  photo: '/brand/founder.jpg',
  role: { en: 'Founder of equipe', ko: 'equipe 창업자' },
  story: {
    en: 'Abel Ko is the founder of equipe, which is operated by Umbriles Inc. He is based in San Francisco and lists his work on LinkedIn as Prompt Architect. He started equipe to give people who cannot code a startup team of their own: AI agents that build, launch and keep improving a product while the person approves what matters.',
    ko: 'Abel Ko는 Umbriles Inc.가 운영하는 equipe의 창업자예요. 샌프란시스코에 살고, LinkedIn에는 Prompt Architect로 일한다고 적어 두었어요. 코딩을 모르는 사람도 자기만의 스타트업 팀을 갖도록 equipe를 시작했어요. AI 에이전트가 제품을 만들고, 출시하고, 계속 더 낫게 만들고, 중요한 건 본인이 승인해요.',
  },
  links: { x: 'https://x.com/abe_l316', linkedin: 'https://www.linkedin.com/in/abel-ko-a5322814a/' },
};

/** "See it work" demo video: set to a path under /public (with a .vtt captions file next to it) once the video exists. */
export const DEMO_VIDEO: null | { src: string; poster: string; captions: string } = null;

/**
 * Pricing: typical monthly totals ("most products spend $X–$Y a month"). Hidden until there is real usage data.
 * Fill in per-locale lines, e.g. { en: 'Most products spend …', ko: '…' }, to show them under "Estimate before you spend".
 */
export const TYPICAL_TOTALS: null | Record<string, string> = null;
