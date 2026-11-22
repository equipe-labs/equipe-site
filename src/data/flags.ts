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
 * About page advisers. Facts come only from public sources: Akki's LinkedIn profile (headline "Building Cartesia | Ex-Founder | Ex-Bain", San Francisco)
 * and the VapiCon 2026 agenda (https://vapi.ai/vapicon-2026/agenda, "Head of Voices, Cartesia"). Photo: his VapiCon speaker-card portrait as supplied by the founder (public/brand/akki-*.webp|jpg).
 */
export const ADVISERS_HEADING: Record<string, string> = { en: 'Advisers', ko: '어드바이저' };
export const ADVISERS: { name: string; initials: string; photo?: string; photoLarge?: string; role: Record<string, string>; bio: Record<string, string>; links: { linkedin: string; web: string; github: string } }[] = [
  {
    name: 'Akki Shafiqullah',
    initials: 'AS',
    photo: '/brand/akki-400.jpg',
    photoLarge: '/brand/akki-800.jpg',
    role: { en: 'Adviser · Head of Voices at Cartesia', ko: '어드바이저 · Cartesia Head of Voices' },
    bio: {
      en: 'Akki Shafiqullah leads Voices at Cartesia, the AI voice company, and is based in San Francisco. A former founder and Bain consultant, he advises equipe.',
      ko: 'Akki Shafiqullah는 AI 음성 회사 Cartesia에서 Voices를 이끌고, 샌프란시스코에 살아요. 창업과 Bain 컨설턴트 경험이 있고, equipe의 어드바이저예요.',
    },
    links: { linkedin: 'https://www.linkedin.com/in/akki/', web: 'https://www.akki.info', github: 'https://github.com/akki-codes' },
  },
];

/**
 * About page team members besides the founder. Seongjae (SJ) Seo: role "Tech" confirmed by the founder; facts from his LinkedIn profile as supplied by the founder (education, KAIST labs, contest prize).
 * Photo: his LinkedIn portrait, cropped square (public/brand/sj-seo-*.webp|jpg). The Korean blurb keeps the Latin name because the Hangul spelling is unconfirmed.
 */
export const TEAM_HEADING: Record<string, string> = { en: 'Team', ko: '팀' };
export const TEAM: { name: string; fullName: string; initials: string; photo?: string; photoLarge?: string; role: Record<string, string>; bio: Record<string, string>; links: { linkedin: string } }[] = [
  {
    name: 'Seongjae (SJ) Seo',
    fullName: 'Seongjae Seo',
    initials: 'SS',
    photo: '/brand/sj-seo-400.jpg',
    photoLarge: '/brand/sj-seo-800.jpg',
    role: { en: 'Tech', ko: 'Tech' },
    bio: {
      en: 'Seongjae (SJ) Seo leads tech at equipe. He studies Industrial & Systems Engineering at KAIST, where he has done data and AI research in KAIST EE labs, and won the Gold Prize at the KAIST–POSTECH–UNIST Data Science Contest.',
      ko: 'Seongjae (SJ) Seo는 equipe에서 기술을 맡고 있어요. KAIST 산업및시스템공학과에서 공부하며 KAIST 전기및전자공학부 데이터·AI 연구실에서 연구했고, KAIST–POSTECH–UNIST 데이터 사이언스 경진대회에서 금상을 받았어요.',
    },
    links: { linkedin: 'https://www.linkedin.com/in/sj-seo' },
  },
];
