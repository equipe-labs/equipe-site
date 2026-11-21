// /facts: short, self-contained statements about equipe, written to be quoted by people and by AI answers.
// Every line must be true today and match the pages it summarizes (pricing: equipe-launch/pricing-copy.md, security: /security, product: the home page).
// When something changes, change it here and bump FACTS_REVIEWED. No statistics, quotes or customers beyond those the site already publishes.
export const FACTS_REVIEWED = '2026-11-21';

interface Group { title: string; items: string[] }
interface Facts {
  title: string;
  desc: string;
  h1: string;
  lead: string;
  reviewed: string;
  groups: Group[];
  faqs: { q: string; a: string }[];
  moreH: string;
}

export const FACTS: Record<'en' | 'ko', Facts> = {
  en: {
    title: 'equipe facts — what it is, who runs it, pricing, data handling',
    desc: 'Short, citable facts about equipe: an AI startup team for people who cannot code. Operated by Umbriles Inc. Pricing, security and data handling in plain statements.',
    h1: 'equipe in facts',
    lead: 'Short statements you can quote. Each one matches what our product, pricing and security pages say today.',
    reviewed: 'Last reviewed {date}.',
    moreH: 'Go deeper',
    groups: [
      {
        title: 'What equipe is',
        items: [
          'equipe is an AI startup team for people who cannot code. You describe an idea, and AI agents in the roles of a PM, engineers, a designer, QA and a data analyst build it, launch it and keep improving it.',
          'You do not need to know how to code to use equipe. You talk to the PM in plain words and approve what matters.',
          'equipe runs in the cloud and is used in a web browser at app.equipe.im. There is nothing to install.',
          'You can start from an idea, a description, or something you already made in Claude or a similar tool, such as an artifact, a prototype or its code.',
          'equipe is not an app builder that stops at the first version. The team also puts the product live, keeps it running and proposes the next improvement from how people use it.',
          'Anything that goes live, costs money or reaches your customers waits for your approval.',
          'Not shipped yet, as of the review date: one-step import from Claude with a database and a domain, and weekly usage reports with proposals. Until import ships, you share the code or describe it and the team moves it for you.',
        ],
      },
      {
        title: 'Who runs it',
        items: [
          'equipe is operated by Umbriles Inc., a company in the United States. Its founder is Abel Ko (x.com/abe_l316, linkedin.com/in/abel-ko-a5322814a).',
          'Contact: support@equipe.im. Security reports go to the same address.',
          'The engine behind the team is open source under the MIT license: github.com/equipe-labs/equipe.',
          'equipe is built in public by its own team: this website and the equipe apps were built by equipe teams. The site reports 222 tasks finished in 20 days with one person approving (self-reported, counted on 1 November 2026).',
          'The release notes of the open-source engine are at equipe.im/changelog/.',
        ],
      },
      {
        title: 'Pricing',
        items: [
          '1 credit equals 1 US dollar. Credit packs are $25, $50, $100 and $250, valid for 12 months. Unused credits are refundable within 14 days.',
          'Free start: $5 of credit when you create your team, plus $10 when you add a card (no charge), including up to 2 hours of team time. No card is needed to start.',
          'Team plan: $19 per month or $190 per year. It includes 20 hours of team time every month (no rollover), hosting for your sites and storage. It includes 5 people; each extra editor is $5 per month, up to 10 people per team.',
          'View-only invites are free. AI credits and team time are shared by the whole team, not counted per person. Free and Hosting only include 2 people.',
          'Extra team time costs $0.25 per hour, paid from credits and metered per minute.',
          'AI work is paid from credits at the model\'s list price plus a margin, shown to the cent for each task.',
          'Hosting only: $19 per month. Your product, sites, domains and storage stay live while the team sleeps.',
          'Team time is the time your team\'s computer is running. It sleeps after 20 minutes without use, and sleeping time is free.',
          'Every request shows its expected cost first, and you set a monthly spending cap.',
          'Domains are billed at cost.',
        ],
      },
      {
        title: 'Data, security and ownership',
        items: [
          'Keys and passwords are kept in a separate encrypted store. They are never shown to the AI or in the chat.',
          'Publishing, sending messages, purchases and deletions always wait for your approval.',
          'Each team works on its own isolated machine, separate from other customers.',
          'You can sign in with a passkey, Google or Apple, or a one-time email code. There are no passwords to leak.',
          'If you ask us to delete your account, we remove your data within 30 days.',
          'Free teams that nobody opens for 14 days get an email and are deleted 7 days later unless opened. You can download your project first.',
          'Each customer\'s hosting, database and domain run as one project per customer, on Cloudflare. If a product outgrows that setup, we can move it to your own accounts.',
          'Analytics for products built on equipe use no cookies and store no IP address, only a two-letter country and a random anonymous id kept in the visitor\'s browser. Events are deleted after 180 days.',
          'Buying a domain needs your approval on a page that only a signed-in member of your team can open.',
        ],
      },
    ],
    faqs: [
      { q: 'What is equipe?', a: 'equipe is an AI startup team for people who cannot code: a PM, engineers, a designer, QA and a data analyst, all AI agents, that build, launch and keep improving your product while you approve what matters.' },
      { q: 'Who is behind equipe?', a: 'equipe is operated by Umbriles Inc., a company in the United States. The engine behind the team is open source (MIT) at github.com/equipe-labs/equipe.' },
      { q: 'How much does equipe cost?', a: 'You can start free with $5 of credit. The Team plan is $19 per month or $190 per year with 20 hours of team time, hosting and storage, for up to 5 people (each extra editor is $5 a month, up to 10). Hosting only is $19 per month. AI work is paid from credits, where 1 credit is $1.' },
      { q: 'Is my data safe with equipe?', a: 'Secrets are stored in a separate encrypted store and never shown to the AI. Each team runs on its own isolated machine. Publishing, messages, purchases and deletions need your approval. Account deletion removes your data within 30 days.' },
    ],
  },
  ko: {
    title: 'equipe 핵심 사실 — 무엇인지, 누가 운영하는지, 요금, 데이터 처리',
    desc: '코딩을 모르는 사람을 위한 AI 스타트업 팀 equipe의 핵심 사실. 운영사 Umbriles Inc., 요금, 보안, 데이터 처리를 짧은 문장으로 정리했어요.',
    h1: '사실로 보는 equipe',
    lead: '그대로 인용할 수 있는 짧은 문장들이에요. 모두 지금 제품·요금·보안 페이지의 내용과 같아요.',
    reviewed: '마지막 점검일 {date}.',
    moreH: '더 자세히',
    groups: [
      {
        title: 'equipe는 무엇인가요',
        items: [
          'equipe는 코딩을 모르는 사람을 위한 AI 스타트업 팀이에요. 아이디어를 말하면 PM, 엔지니어, 디자이너, QA, 데이터 분석가 역할의 AI 에이전트가 만들고, 출시하고, 계속 더 낫게 만들어요.',
          'equipe를 쓰는 데 코딩 지식은 필요 없어요. PM에게 쉬운 말로 이야기하고, 중요한 것만 승인하면 돼요.',
          'equipe는 클라우드에서 돌아가고, app.equipe.im에서 웹 브라우저로 써요. 설치할 건 없어요.',
          '아이디어, 설명, 또는 Claude 같은 도구로 이미 만든 것(아티팩트, 프로토타입, 코드)에서 시작할 수 있어요.',
          'equipe는 첫 버전에서 멈추는 앱 빌더가 아니에요. 팀이 제품을 서비스로 띄우고, 계속 운영하고, 사람들이 쓰는 모습을 보고 다음 개선을 제안해요.',
          '서비스를 공개하거나, 돈이 들거나, 고객에게 닿는 일은 내 승인을 기다려요.',
          '점검일 기준 아직 없는 것: 데이터베이스와 도메인까지 한 번에 붙이는 Claude 가져오기, 제안이 담긴 주간 사용 리포트. 가져오기가 나오기 전에는 코드를 공유하거나 설명해 주면 팀이 옮겨 줘요.',
        ],
      },
      {
        title: '누가 운영하나요',
        items: [
          'equipe는 미국 회사 Umbriles Inc.가 운영해요. 창업자는 Abel Ko예요(x.com/abe_l316, linkedin.com/in/abel-ko-a5322814a).',
          '문의: support@equipe.im. 보안 제보도 같은 주소로 받아요.',
          '팀의 엔진은 MIT 라이선스 오픈소스예요: github.com/equipe-labs/equipe.',
          'equipe는 자기 팀이 공개적으로 만들어요. 이 웹사이트와 equipe 앱은 equipe 팀이 만들었어요. 사이트에는 승인하는 사람 1명, 20일 동안 완료한 작업 222개(자체 집계, 2026년 11월 1일 기준)라고 밝혀 뒀어요.',
          '오픈소스 엔진의 릴리스 노트는 equipe.im/ko/changelog/에 있어요.',
        ],
      },
      {
        title: '요금',
        items: [
          '1크레딧은 1달러예요. 크레딧 묶음은 $25, $50, $100, $250이고 12개월 동안 쓸 수 있어요. 쓰지 않은 크레딧은 14일 안에 환불돼요.',
          '무료 시작: 팀을 만들면 $5 크레딧, 카드를 등록하면 $10 추가(결제되지 않아요). 팀 시간 최대 2시간이 포함돼요. 시작할 때 카드는 필요 없어요.',
          '팀 플랜: 월 $19 또는 연 $190. 매달 팀 시간 20시간(이월 안 됨), 사이트 호스팅, 저장 공간이 들어 있고 5명까지 포함돼요. 추가 편집자는 1명당 월 $5이고 한 팀에 최대 10명까지예요.',
          '보기 전용 초대는 무료예요. AI 크레딧과 팀 시간은 사람마다 따로 계산하지 않고 팀 전체가 함께 써요. 무료와 호스팅 전용은 2명까지예요.',
          '추가 팀 시간은 시간당 $0.25이고, 크레딧으로 내며 분 단위로 계산해요.',
          'AI 작업은 모델 정가에 마진을 더한 금액을 크레딧으로 내요. 작업마다 센트 단위로 보여 줘요.',
          '호스팅 전용: 월 $19. 팀은 쉬고, 제품·사이트·도메인·저장 공간은 계속 운영돼요.',
          '팀 시간은 팀의 컴퓨터가 켜져 있는 시간이에요. 20분 동안 쓰지 않으면 잠들고, 자는 시간은 무료예요.',
          '요청마다 예상 비용을 먼저 보여 주고, 월 지출 한도는 직접 정해요.',
          '도메인은 원가로 청구해요.',
        ],
      },
      {
        title: '데이터, 보안, 소유',
        items: [
          '키와 비밀번호는 따로 암호화된 저장소에 보관해요. AI에게도, 채팅에도 보이지 않아요.',
          '공개, 메시지 보내기, 결제, 삭제는 언제나 내 승인을 기다려요.',
          '팀마다 다른 고객과 분리된 자기 머신에서 일해요.',
          '패스키, Google, Apple, 또는 이메일 일회용 코드로 로그인해요. 유출될 비밀번호가 없어요.',
          '계정 삭제를 요청하면 30일 안에 데이터를 지워요.',
          '14일 동안 아무도 열지 않은 무료 팀에는 이메일을 보내고, 7일 뒤 열지 않으면 삭제돼요. 그전에 프로젝트를 내려받을 수 있어요.',
          '고객마다 호스팅, 데이터베이스, 도메인이 프로젝트 하나로 Cloudflare에서 운영돼요. 제품이 이 구조를 넘어서면 내 계정으로 옮겨 드릴 수 있어요.',
          'equipe로 만든 제품의 분석은 쿠키를 쓰지 않고 IP 주소도 저장하지 않아요. 두 글자 국가 코드와 방문자 브라우저에 저장되는 무작위 익명 ID만 써요. 이벤트는 180일 뒤 지워져요.',
          '도메인을 사려면 내 팀의 로그인한 구성원만 열 수 있는 페이지에서 내가 승인해야 해요.',
        ],
      },
    ],
    faqs: [
      { q: 'equipe는 무엇인가요?', a: 'equipe는 코딩을 모르는 사람을 위한 AI 스타트업 팀이에요. PM, 엔지니어, 디자이너, QA, 데이터 분석가가 모두 AI 에이전트이고, 제품을 만들고 출시하고 계속 개선해요. 중요한 건 내가 승인해요.' },
      { q: 'equipe는 누가 운영하나요?', a: '미국 회사 Umbriles Inc.가 운영해요. 팀의 엔진은 github.com/equipe-labs/equipe에 MIT 라이선스 오픈소스로 공개돼 있어요.' },
      { q: 'equipe는 얼마인가요?', a: '$5 크레딧으로 무료로 시작할 수 있어요. 팀 플랜은 월 $19 또는 연 $190이고 팀 시간 20시간, 호스팅, 저장 공간이 들어 있어요. 5명까지 포함되고, 추가 편집자는 1명당 월 $5(팀당 최대 10명)예요. 보기 전용 초대는 무료예요. 호스팅 전용은 월 $19예요. AI 작업은 크레딧(1크레딧 = $1)으로 내요.' },
      { q: 'equipe에 맡긴 데이터는 안전한가요?', a: '비밀 정보는 따로 암호화된 저장소에 보관하고 AI에게는 보이지 않아요. 팀마다 분리된 머신에서 일하고, 공개·메시지·결제·삭제는 내 승인을 기다려요. 계정을 삭제하면 30일 안에 데이터를 지워요.' },
    ],
  },
};
