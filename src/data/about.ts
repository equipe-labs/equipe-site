/** Copy for /about. English and Korean are written; every other locale falls back to English (see the page). */
export interface AboutCopy {
  eyebrow: string; h1: string; lead: string;
  storyH: string; story: string[];
  /** The name: tells equipe (the product, "equipe AI") apart from the French word and other companies called Equipe. */
  nameNote?: string; stageA: [string, string]; stageB: [string, string]; gh: string;
  beliefsH: string; beliefs: { h: string; p: string }[];
  ctaH: string; ctaP: string; ctaMore: string;
}

export const ABOUT: Record<string, AboutCopy> = {
  en: {
    eyebrow: 'About equipe',
    h1: "You don't need to code.",
    lead: 'Your AI startup team builds, launches and grows your product.',
    storyH: 'How we got here',
    story: [
      'equipe started as an open-source project, the equipe engine. It showed that a team of AI agents can build and ship real software.',
      'Now it is a cloud service that gives people who do not code their own AI startup team: a PM, engineers, a designer, QA and a data analyst who build, launch and keep improving a product while you stay in charge.',
    ],
    nameNote: 'About the name: equipe, also written equipe AI, is a product of Umbriles Inc. in San Francisco. It is named after the French word for team, but it is not a staffing agency, a sports club or any other company called Equipe. Our only websites are equipe.im and app.equipe.im.',
    stageA: ['The engine', 'Open source, on GitHub'],
    stageB: ['The cloud', 'A startup team for people who do not code'],
    gh: 'See the engine on GitHub',
    beliefsH: 'What we believe',
    beliefs: [
      { h: 'You stay in charge', p: 'The team does the work. You decide what matters and approve it.' },
      { h: 'Real products, not demos', p: 'Built, launched and kept improving, so it keeps going past the first screen.' },
      { h: 'Open by default', p: 'The engine behind the team is open source, so you can see how it works.' },
    ],
    ctaH: 'Your startup team is ready when you are.',
    ctaP: 'Start free. No coding needed.',
    ctaMore: 'See pricing',
  },
  ko: {
    eyebrow: 'equipe 소개',
    h1: '코딩을 몰라도 괜찮아요.',
    lead: 'AI 스타트업 팀이 제품을 만들고, 출시하고, 키워요.',
    storyH: '여기까지 온 이야기',
    story: [
      'equipe는 오픈소스 프로젝트(equipe 엔진)로 시작했어요. AI 에이전트 팀이 진짜 소프트웨어를 만들고 출시할 수 있다는 걸 보여줬어요.',
      '지금은 코딩을 모르는 사람에게 자기만의 AI 스타트업 팀을 주는 클라우드 서비스예요. PM, 엔지니어, 디자이너, QA, 데이터 분석가가 제품을 만들고, 출시하고, 계속 더 낫게 만들어요. 결정은 언제나 본인이 해요.',
    ],
    nameNote: '이름에 대해: equipe(equipe AI)는 샌프란시스코의 Umbriles Inc.가 만드는 제품이에요. 이름은 "팀"을 뜻하는 프랑스어에서 왔지만, 인력 회사나 스포츠 팀, Equipe라는 이름의 다른 회사와는 관계가 없어요. 공식 사이트는 equipe.im과 app.equipe.im뿐이에요.',
    stageA: ['엔진', '오픈소스, GitHub'],
    stageB: ['클라우드', '코딩을 모르는 사람을 위한 스타트업 팀'],
    gh: 'GitHub에서 엔진 보기',
    beliefsH: '우리가 믿는 것',
    beliefs: [
      { h: '결정은 본인이 해요', p: '일은 팀이 하고, 중요한 건 본인이 정하고 승인해요.' },
      { h: '데모가 아니라 진짜 제품', p: '만들고, 출시하고, 계속 개선해서 첫 화면에서 멈추지 않아요.' },
      { h: '기본은 열려 있어요', p: '팀을 움직이는 엔진은 오픈소스라서 어떻게 일하는지 볼 수 있어요.' },
    ],
    ctaH: '스타트업 팀은 준비돼 있어요.',
    ctaP: '무료로 시작해요. 코딩은 필요 없어요.',
    ctaMore: '요금 보기',
  },
};

/** One-line story of the founder per language (English fallback). */
export const FOUNDER_LINE: Record<string, string> = {
  en: "Abel Ko is the founder of equipe, based in San Francisco. He spent ten years as a software engineer at startups, including Toss (Viva Republica), and co-founded Ironact. He started equipe to give people who cannot code a startup team of their own.",
  ko: 'Abel Ko는 샌프란시스코에 있는 equipe의 창업자예요. 10년 동안 토스(비바리퍼블리카) 등 스타트업에서 소프트웨어 엔지니어로 일했고 Ironact를 공동 창업했어요. 코딩을 몰라도 자기만의 스타트업 팀을 가질 수 있도록 equipe를 시작했어요.',
};
