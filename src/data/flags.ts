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
    en: "Abel Ko is the founder of equipe, based in San Francisco. Before equipe he worked at Toss (Viva Republica), Korea's leading fintech. He started equipe to give people who cannot code a startup team of their own.",
    ko: 'Abel Ko는 샌프란시스코에 있는 equipe의 창업자예요. equipe 전에는 한국 대표 핀테크인 토스(비바리퍼블리카)에서 일했어요. 코딩을 몰라도 자기만의 스타트업 팀을 가질 수 있도록 equipe를 시작했어요.',
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
 * About page advisers. Facts come only from public sources: Akki's LinkedIn profile (headline "Building Cartesia | Ex-Founder | Ex-Bain", San Francisco); Deokseong Kim: facts from the founder and his LinkedIn profile (imweb, Toss, Hyperconnect, KAIST)
 * and the VapiCon 2026 agenda (https://vapi.ai/vapicon-2026/agenda, "Head of Voices, Cartesia"). Photo: his VapiCon speaker-card portrait as supplied by the founder (public/brand/akki-*.webp|jpg).
 */
export const ADVISERS_HEADING: Record<string, string> = { en: 'Advisers', ko: '어드바이저' };
export const ADVISERS: { name: string; names?: Record<string, string>; initials: string; photo?: string; photoLarge?: string; role: Record<string, string>; bio: Record<string, string>; jobTitle: string; worksFor: string; alumniOf?: string; links: { linkedin: string; github?: string } }[] = [
  {
    name: 'Akki Shafiqullah',
    initials: 'AS',
    photo: '/brand/akki-800.jpg',
    photoLarge: '/brand/akki-800.jpg',
    role: { en: 'Head of Voices at Cartesia', ko: 'Cartesia Head of Voices' },
    bio: {
      en: 'Akki Shafiqullah leads Voices at Cartesia, the AI voice company, and is based in San Francisco. A former founder and Bain consultant, he advises equipe.',
      ko: 'Akki Shafiqullah는 AI 음성 회사 Cartesia에서 Voices를 이끌고, 샌프란시스코에 살아요. 창업과 Bain 컨설턴트 경험이 있고, equipe의 어드바이저예요.',
    },
    jobTitle: 'Head of Voices',
    worksFor: 'Cartesia',
    links: { linkedin: 'https://www.linkedin.com/in/akki/', github: 'https://github.com/akki-codes' },
  },
  {
    name: 'Deokseong Kim',
    names: { ko: '김덕성' },
    initials: 'DK',
    photo: '/brand/deokseong-kim-800.jpg',
    photoLarge: '/brand/deokseong-kim-800.jpg',
    role: { en: 'Leads Engineering Group at imweb', ko: '아임웹 엔지니어링 그룹 리드' },
    bio: {
      en: 'Deokseong Kim leads the Engineering Group at imweb, where he has extensive enterprise-level backend and infrastructure experience. He previously built design-platform tooling at Toss and backend systems at Hyperconnect, and studied Electrical Engineering at KAIST. He advises equipe on engineering.',
      ko: '김덕성은 아임웹에서 엔지니어링 그룹을 이끌고 있어요. 아임웹에서 엔터프라이즈 규모의 백엔드와 인프라를 폭넓게 다뤄 왔어요. 토스 디자인 플랫폼팀과 하이퍼커넥트에서 일했고, KAIST에서 전기및전자공학을 공부했어요. equipe의 기술 어드바이저예요.',
    },
    jobTitle: 'Leads the Engineering Group',
    worksFor: 'imweb',
    alumniOf: 'KAIST',
    links: { linkedin: 'https://www.linkedin.com/in/zeakd/' },
  },
  {
    // LinkedIn URL not supplied: taken from the GitHub profile "alxiom" (Alex, ML Engineer, Toss, Seoul), which links to it. HyperCLOVA authorship checked on arXiv 2109.04650 (EMNLP 2021).
    name: 'HyoungSeok (Alex) Kim',
    names: { ko: '김형석' },
    initials: 'HK',
    photo: '/brand/hyoungseok-kim-800.jpg',
    photoLarge: '/brand/hyoungseok-kim-800.jpg',
    role: { en: 'AI Researcher at Toss', ko: '토스의 AI 리서처' },
    bio: {
      en: "HyoungSeok (Alex) Kim is an AI researcher at Toss. Previously at NAVER he was a tech lead on HyperCLOVA, Korea's large language model, and co-authored its EMNLP and NAACL papers. He is an AI adviser to equipe.",
      ko: '김형석은 토스의 AI 리서처예요. 네이버에서 한국어 초거대 언어모델 HyperCLOVA의 테크 리드로 학습과 평가를 맡았고, EMNLP·NAACL 논문을 함께 썼어요. equipe의 AI 어드바이저예요.',
    },
    jobTitle: 'AI Researcher',
    worksFor: 'Toss',
    links: { linkedin: 'https://www.linkedin.com/in/alxiom' },
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
    photo: '/brand/sj-seo-800.jpg',
    photoLarge: '/brand/sj-seo-800.jpg',
    role: { en: 'Tech', ko: 'Tech' },
    bio: {
      en: 'Seongjae (SJ) Seo leads tech at equipe. He studies Industrial & Systems Engineering at KAIST, where he has done data and AI research in KAIST EE labs, and won the Gold Prize at the KAIST–POSTECH–UNIST Data Science Contest.',
      ko: 'Seongjae (SJ) Seo는 equipe에서 기술을 맡고 있어요. KAIST 산업및시스템공학과에서 공부하며 KAIST 전기및전자공학부 데이터·AI 연구실에서 연구했고, KAIST–POSTECH–UNIST 데이터 사이언스 경진대회에서 금상을 받았어요.',
    },
    links: { linkedin: 'https://www.linkedin.com/in/sj-seo' },
  },
  {
    name: 'Jason Li',
    fullName: 'Jason Li',
    initials: 'JL',
    photo: '/brand/jason-li-800.jpg',
    photoLarge: '/brand/jason-li-800.jpg',
    role: { en: 'Tech', ko: 'Tech' },
    bio: {
      en: "Jason Li is a software engineer on equipe's tech team. He has built AI-powered applications and scalable products, and has worked at JPMorgan Chase and Year Up United.",
      ko: 'Jason Li는 equipe 기술팀의 소프트웨어 엔지니어예요. AI 기반 애플리케이션과 확장 가능한 제품을 만들어 왔고, JPMorgan Chase와 Year Up United에서 일했어요.',
    },
    links: { linkedin: 'https://www.linkedin.com/in/lijason122/' },
  },
];
