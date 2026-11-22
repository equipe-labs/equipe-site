/** Build flags for content that must not go public yet. */
// The CJ customer story stays hidden until CJ confirms permission: build with SHOW_CJ=true to publish /customers/cj.
export const SHOW_CJ = process.env.SHOW_CJ === 'true';

/**
 * About page founder block, article bylines and Person JSON-LD. Photo: the owner's studio portrait, cropped to head and shoulders (public/brand/founder*.jpg|webp).
 * The bio uses only what the owner supplied and what the public profiles show; items marked "confirm" in the strategy doc are the owner's to check.
 */
export const FOUNDER: null | { name: string; photo: string; photoLarge: string; role: Record<string, string>; story: Record<string, string>; links: { x: string; linkedin: string } } = {
  name: 'Abel Ko',
  photo: '/brand/founder.jpg',
  photoLarge: '/brand/founder-800.jpg',
  role: { en: 'Founder of equipe', ko: 'equipe 창업자' },
  story: {
    en: 'Abel Ko is the founder of equipe, based in San Francisco. He started equipe to give people who cannot code a startup team of their own: AI agents that build, launch and keep improving a product while the person approves what matters.',
    ko: 'Abel Ko는 equipe의 창업자로, 샌프란시스코에 살아요. 코딩을 모르는 사람도 자기만의 스타트업 팀을 갖도록 equipe를 시작했어요. AI 에이전트가 제품을 만들고, 출시하고, 계속 더 낫게 만들고, 중요한 건 본인이 승인해요.',
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

/**
 * About page advisers. Facts come only from public sources: Akki's LinkedIn profile (Cartesia, San Francisco, founder of the Queen Mary Consulting Society)
 * and the VapiCon 2026 agenda (https://vapi.ai/vapicon-2026/agenda, "Head of Voices, Cartesia"). No photo: no public image is clearly his, so the page shows a monogram.
 */
export const ADVISERS_HEADING: Record<string, string> = { en: 'Advisers', ko: '어드바이저' };
export const ADVISERS: { name: string; initials: string; role: Record<string, string>; bio: Record<string, string>; links: { linkedin: string } }[] = [
  {
    name: 'Akki Shafiqullah',
    initials: 'AS',
    role: { en: 'Adviser · Head of Voices at Cartesia', ko: '어드바이저 · Cartesia Head of Voices' },
    bio: {
      en: 'Akki Shafiqullah leads Voices at Cartesia, the AI voice company, and is based in San Francisco. He founded the Queen Mary Consulting Society at Queen Mary University of London. He advises equipe.',
      ko: 'Akki Shafiqullah는 AI 음성 회사 Cartesia에서 Voices를 이끌고, 샌프란시스코에 살아요. 런던 Queen Mary 대학교에서 Queen Mary Consulting Society를 창립했어요. equipe의 어드바이저예요.',
    },
    links: { linkedin: 'https://www.linkedin.com/in/akki/' },
  },
];

/**
 * About page team members besides the founder. SJ Seo: name and role "Tech" confirmed by the founder; no verifiable public profile details were found
 * (the LinkedIn page is not publicly readable and no web source matched), so the blurb states only the role. Monogram, no photo.
 */
export const TEAM_HEADING: Record<string, string> = { en: 'Team', ko: '팀' };
export const TEAM: { name: string; initials: string; role: Record<string, string>; bio: Record<string, string>; links: { linkedin: string } }[] = [
  {
    name: 'SJ Seo',
    initials: 'SS',
    role: { en: 'Tech', ko: 'Tech' },
    bio: {
      en: 'SJ Seo is part of the equipe team and works on its technology.',
      ko: 'SJ Seo는 equipe 팀의 일원으로, 기술을 맡고 있어요.',
    },
    links: { linkedin: 'https://www.linkedin.com/in/sj-seo' },
  },
];
