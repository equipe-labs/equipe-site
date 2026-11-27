/**
 * Free logo maker (/logo-maker/, a shared logo is /logo-maker/r/<id>/).
 * Runs on platform.equipe.im (cloud platform/src/free-logo.js): several logo directions per round, each a vector mark that
 * passed the logo gate (works at 16 px, works in one colour, simple shapes, checked by a vision model); the name is set
 * in real type in the browser (src/scripts/logo/compose.ts), so it is always spelled right and free to edit.
 * Mockups, the editor and the brand kit are made in the browser (no AI, free).
 *
 * {name}, {n}, {about} are filled in by the page or the platform.
 */
import type { LocaleCode } from '../i18n';
import type { SheetText } from '../scripts/logo/kit';

export const LOGO_API = 'https://platform.equipe.im/v1/free/logo';
export const FREE_PASS_API = 'https://app.equipe.im/api/free-pass';
export { TURNSTILE_SITE_KEY } from './aivis';

export const LOGO_STYLES = ['icon', 'wordmark', 'lettermark', 'emblem'] as const;
export const LOGO_MOODS = ['friendly', 'premium', 'playful', 'modern', 'classic', 'bold', 'calm', 'natural', 'techy', 'handmade'] as const;
export const LOGO_KINDS = ['cafe', 'bakery', 'restaurant', 'beauty', 'fitness', 'shop', 'app', 'agency', 'health', 'consulting', 'photo', 'pets', 'education', 'home', 'other'] as const;
export const LOGO_SWATCHES = ['#2f5bea', '#0e8c7f', '#15803d', '#c2410c', '#b91c1c', '#be185d', '#7c3aed', '#1e3a8a', '#ca8a04', '#3b2416', '#16161a', '#64748b'];
export type LogoStyle = (typeof LOGO_STYLES)[number];
export type LogoMood = (typeof LOGO_MOODS)[number];

/** Sign-up with the idea and the brand kit line filled in, tagged with where the click came from. */
export const logoStartHref = (idea: string, placement: string) =>
  `https://app.equipe.im/start?idea=${encodeURIComponent(idea)}&utm_source=equipe.im&utm_medium=tool&utm_campaign=logo-maker&utm_content=${encodeURIComponent(placement)}`;

interface QA { question: string; answer: string }
interface Step { title: string; text: string }

export interface LogoCopy {
  page: { title: string; desc: string; ogTitle: string; h1: string; lead: string };
  form: {
    name: string; namePh: string; needName: string; about: string; aboutPh: string; optional: string;
    style: string; styles: Record<LogoStyle, { t: string; d: string }>;
    mood: string; colours: string; coloursHint: string; addColour: string; removeColour: string; kind: string; inspiration: string; inspirationPh: string; more: string;
    button: string; note: string; noteSigned: string;
    errName: string; errTurnstile: string; errRate: string; errRateSigned: string; errBusy: string; errFailed: string; signIn: string;
  };
  moods: Record<LogoMood, string>;
  kinds: Record<(typeof LOGO_KINDS)[number], string>;
  picker: { hex: string; done: string; presets: string };
  progress: [string, string, string, string, string];
  progressNote: string;
  result: {
    title: string; sub: string; typeTitle: string; typeSub: string; ai: string; type: string; more: string; moreNote: string; edit: string;
    left: string; noneLeft: string; ground: string; light: string; dark: string; loading: string; notFound: string; fewer: string; added: string; variation: string;
  };
  editor: {
    title: string; back: string; layout: string; layouts: Record<'row' | 'stack' | 'name' | 'mark' | 'badge', string>; font: string; weight: string; weights: Record<'400' | '700' | '900', string>;
    letters: string; cases: Record<'as' | 'lower' | 'upper' | 'title', string>; spacing: string; nameColour: string; iconColour: string; original: string; accent: string;
  };
  mock: { title: string; sub: string; tab: string; phone: string; card: string; sign: string; social: string; site: string; nav: [string, string, string]; hero: string; heroSub: string; cta: string; role: string; posts: string; followers: string; open: string };
  kit: { title: string; sub: string; download: string; making: string; ready: string; contents: string[]; license: string; tm: string; uspto: string; kipo: string; wipo: string; sheet: SheetText; readme: string };
  cta: { title: string; text: string; button: string; note: string; idea: string; kitLine: string };
  share: { label: string; make: string; copy: string; copied: string; again: string; pageTitle: string; heading: string; own: string; ownButton: string; title: string; desc: string; failed: string };
  /** The name finder's link from a name's logo to the full logo maker. */
  fromNames: string;
  how: { title: string; items: Step[] };
  faq: { title: string; items: QA[] };
}

const en: LogoCopy = {
  fromNames: 'Make the full logo with this name',
  page: {
    title: 'Free Logo Maker: AI logo generator with a free brand kit | equipe',
    desc: 'Make a logo for your business in a minute. Several clean vector logo ideas, your name always spelled right, live mockups and a free download: SVG, PNG, favicon and brand kit. No sign-up.',
    ogTitle: 'Free logo maker by equipe',
    h1: 'Free logo maker',
    lead: 'Tell us your business name and what you do. You get several clean logo ideas in about a minute, see them on a sign, a card and a website, and download the files for free.',
  },
  form: {
    name: 'Business name', namePh: 'e.g. Maison Hana', needName: 'Need a name first? Find one', about: 'What does it do?', aboutPh: 'e.g. A Korean-French bakery in Oakland', optional: 'optional',
    style: 'Logo style',
    styles: {
      icon: { t: 'Icon and name', d: 'A symbol beside your name' },
      wordmark: { t: 'Name only', d: 'Your name in a strong typeface' },
      lettermark: { t: 'Initial', d: 'Your first letter as the symbol' },
      emblem: { t: 'Badge', d: 'Symbol and name in a round seal' },
    },
    mood: 'Mood', colours: 'Colours', coloursHint: 'Pick up to three, or let us choose', addColour: 'Add a colour', removeColour: 'Remove colour', kind: 'Kind of business',
    inspiration: 'Inspiration', inspirationPh: 'e.g. warm and handmade, like an old corner bakery', more: 'More options',
    button: 'Make my logos', note: 'Free, no sign-up. Two rounds a day; more with a free account.', noteSigned: 'You are signed in: ten rounds a day.',
    errName: 'Type your business name first.', errTurnstile: 'We could not confirm you are human. Please try again.',
    errRate: 'That was today\'s free rounds. Sign in to equipe (free) for ten a day, or come back tomorrow.', errRateSigned: 'That was today\'s rounds. Come back tomorrow.',
    errBusy: 'The logo maker is very busy today. Logos with your name only still work; please try icons again tomorrow.', errFailed: 'Something went wrong. Please try again.', signIn: 'Sign in for more',
  },
  moods: { friendly: 'Friendly', premium: 'Premium', playful: 'Playful', modern: 'Modern', classic: 'Classic', bold: 'Bold', calm: 'Calm', natural: 'Natural', techy: 'Techy', handmade: 'Handmade' },
  kinds: { cafe: 'Café', bakery: 'Bakery', restaurant: 'Restaurant', beauty: 'Beauty', fitness: 'Fitness', shop: 'Shop', app: 'App', agency: 'Agency', health: 'Health', consulting: 'Consulting', photo: 'Photo', pets: 'Pets', education: 'Education', home: 'Home services', other: 'Other' },
  picker: { hex: 'Hex', done: 'Done', presets: 'Suggested colours' },
  progress: ['Understanding your business', 'Drawing logo ideas', 'Checking each one at 16 px and in one colour', 'Redrawing the weak ones', 'Setting your name in type'],
  progressNote: 'Usually 40 to 60 seconds.',
  result: {
    title: 'Your logo ideas', sub: 'Pick one to edit. Every symbol passed our checks: clear at 16 px, works in one colour, no stray letters.',
    typeTitle: 'Name-only logos', typeSub: 'Set in real type, so they are free to change.', ai: 'Symbol', type: 'Type', more: 'More like this', moreNote: 'Uses one round', edit: 'Edit',
    left: '{n} rounds left today', noneLeft: 'No rounds left today', ground: 'Background', light: 'Light', dark: 'Dark', loading: 'Loading…', notFound: 'We could not find this logo.',
    fewer: 'Only a few symbols passed our checks this time. The name-only logos below always work, or try another round.', added: 'New variations added', variation: 'Variation',
  },
  editor: {
    title: 'Edit your logo', back: 'All ideas', layout: 'Layout', layouts: { row: 'Side by side', stack: 'Stacked', name: 'Name only', mark: 'Symbol only', badge: 'Badge' },
    font: 'Typeface', weight: 'Weight', weights: { 400: 'Regular', 700: 'Bold', 900: 'Black' }, letters: 'Letters', cases: { as: 'As typed', lower: 'lowercase', upper: 'CAPITALS', title: 'Title Case' },
    spacing: 'Letter spacing', nameColour: 'Name colour', iconColour: 'Symbol colour', original: 'Original', accent: 'Accent colour',
  },
  mock: {
    title: 'See it in use', sub: 'Live previews, updated as you edit.', tab: 'Browser tab', phone: 'App icon', card: 'Business card', sign: 'Storefront sign', social: 'Social profile', site: 'Website',
    nav: ['Menu', 'About', 'Visit'], hero: 'Made fresh, every day', heroSub: 'Your website, built by your equipe team with this logo from day one.', cta: 'Order now', role: 'Owner', posts: 'posts', followers: 'followers', open: 'Open today',
  },
  kit: {
    title: 'Download your brand kit', sub: 'Free, no sign-up, no watermark. Made on your device.', download: 'Download brand kit (.zip)', making: 'Making your files…', ready: 'Downloaded',
    contents: ['Logo as SVG and PNG (transparent, up to 2048 px)', 'One-colour, white and icon versions', 'Favicon set: .ico, .svg, Apple and Android icons', 'Social profile picture and cover images', 'Colour palette with hex codes and a font pairing', 'A one-page brand sheet (PDF)'],
    license: 'You own your logo: use it anywhere, commercially, at no cost. It was made with AI, so before you register it or print a lot, search existing trademarks:',
    tm: 'Trademark search', uspto: 'USPTO (US)', kipo: 'KIPRIS (Korea)', wipo: 'WIPO Global Brand Database',
    sheet: { title: 'Brand sheet', logo: 'Logo', onDark: 'On dark', oneColour: 'One colour', icon: 'Icon', colours: 'Colours', type: 'Type', heading: 'Headings', body: 'Text', license: 'You own this logo and may use it commercially. It was made with AI, so search existing trademarks (USPTO, KIPRIS, WIPO) before you register it.', made: 'Made with equipe.im/logo-maker' },
    readme: 'Your brand kit from equipe.im/logo-maker\n\nlogo/        the logo (SVG for print and the web, PNG in several sizes)\nicon/        the square icon\nfavicon/     put these in your website\'s root folder\nsocial/      profile picture and cover images\nbrand/       colours, fonts and the one-page brand sheet\n\nYou own this logo. It was made with AI: search existing trademarks before you register it.\n',
  },
  cta: { title: 'Build your website with this logo', text: 'Your equipe team builds the site around your new logo, colours and fonts from day one. No coding needed.', button: 'Build my website', note: 'Free to start. Your logo comes with you.', idea: 'A website for {name}: {about}', kitLine: 'Brand kit (made with equipe.im logo maker; use it as our logo from day one, do not draw a new one)' },
  share: { label: 'Share your logo', make: 'Get a share link', copy: 'Copy link', copied: 'Copied', again: 'Make another', pageTitle: 'A logo made with equipe', heading: 'A logo made with equipe\'s free logo maker', own: 'Make your own logo, free', ownButton: 'Make my logo', title: '{name} logo, made with equipe', desc: 'The {name} logo, made with equipe\'s free logo maker. Make yours in a minute.', failed: 'Could not make the link. Please try again.' },
  how: {
    title: 'How it works',
    items: [
      { title: 'Tell us about it', text: 'Your business name, what it does, and a style. Mood and colours are optional.' },
      { title: 'Get clean logo ideas', text: 'AI draws several directions as vectors. Each is checked at 16 px and in one colour, and weak ones are redrawn before you see them.' },
      { title: 'Edit, preview, download', text: 'Change the font, colours and layout for free, see it on a sign and a website, and download the full brand kit.' },
    ],
  },
  faq: {
    title: 'Questions',
    items: [
      { question: 'Is the logo maker really free?', answer: 'Yes. Making logos, editing them and downloading the brand kit are free, with no watermark and no sign-up. You get two rounds of AI ideas a day, ten with a free equipe account. Name-only logos are unlimited.' },
      { question: 'Do I own the logo?', answer: 'Yes, you can use it anywhere, including commercially. Because it was made with AI, search existing trademarks (USPTO in the US, KIPRIS in Korea, WIPO worldwide) before you register it or print a lot.' },
      { question: 'Will my business name be spelled right?', answer: 'Always. The AI only draws the symbol. Your name is set in a real typeface on your device, so it can never be misspelled, and you can change the font and colour for free.' },
      { question: 'What files do I get?', answer: 'SVG and transparent PNG files of the logo, a one-colour and a white version, the square icon, a complete favicon set, social profile and cover images, your colours with hex codes, a font pairing and a one-page brand sheet PDF.' },
      { question: 'How do you check the logos?', answer: 'Every symbol is checked by code (clear at 16 px, works in one colour, a few flat colours, clean edges) and looked at by a vision model that drops anything unclear, letter-like or similar to a known brand. Failed ones are redrawn once.' },
      { question: 'Can I build a website with it?', answer: 'Yes. "Build your website with this logo" starts an equipe project that already has your logo, colours and fonts, so the site your team makes matches your brand from day one.' },
    ],
  },
};

const ko: LogoCopy = {
  fromNames: '이 이름으로 로고 완성하기',
  page: {
    title: '무료 로고 만들기: AI 로고 생성기와 무료 브랜드 키트 | equipe',
    desc: '사업 로고를 1분 만에 만들어요. 깔끔한 벡터 로고 시안 여러 개, 철자가 틀리지 않는 가게 이름, 실제 사용 미리보기, SVG·PNG·파비콘·브랜드 키트 무료 다운로드까지. 가입은 필요 없어요.',
    ogTitle: 'equipe 무료 로고 만들기',
    h1: '무료 로고 만들기',
    lead: '가게 이름과 하는 일을 알려 주세요. 1분 정도면 깔끔한 로고 시안 여러 개가 나오고, 간판·명함·웹사이트에 올린 모습을 보고, 파일을 무료로 내려받을 수 있어요.',
  },
  form: {
    name: '가게 이름', namePh: '예: 메종 하나', needName: '이름부터 필요하세요? 이름 찾기', about: '어떤 일을 하나요?', aboutPh: '예: 오클랜드의 한불 베이커리', optional: '선택',
    style: '로고 스타일',
    styles: {
      icon: { t: '아이콘과 이름', d: '이름 옆에 심볼' },
      wordmark: { t: '이름만', d: '개성 있는 글꼴로 쓴 이름' },
      lettermark: { t: '이니셜', d: '첫 글자를 심볼로' },
      emblem: { t: '배지', d: '심볼과 이름을 둥근 엠블럼에' },
    },
    mood: '분위기', colours: '색', coloursHint: '세 가지까지 고르거나, 저희에게 맡겨 주세요', addColour: '색 추가', removeColour: '색 빼기', kind: '업종',
    inspiration: '참고할 느낌', inspirationPh: '예: 오래된 동네 빵집처럼 따뜻하고 손맛 나는', more: '옵션 더 보기',
    button: '로고 만들기', note: '무료, 가입 없이. 하루 두 번 만들 수 있고, 무료 계정이 있으면 더 만들 수 있어요.', noteSigned: '로그인되어 있어요. 하루 열 번 만들 수 있어요.',
    errName: '가게 이름을 먼저 적어 주세요.', errTurnstile: '사람인지 확인하지 못했어요. 다시 시도해 주세요.',
    errRate: '오늘 무료로 만들 수 있는 횟수를 다 썼어요. equipe에 무료로 로그인하면 하루 열 번까지 만들 수 있어요. 아니면 내일 다시 와 주세요.', errRateSigned: '오늘 만들 수 있는 횟수를 다 썼어요. 내일 다시 와 주세요.',
    errBusy: '오늘은 로고 만들기가 많이 바빠요. 이름만 있는 로고는 지금도 만들 수 있고, 아이콘은 내일 다시 시도해 주세요.', errFailed: '문제가 생겼어요. 다시 시도해 주세요.', signIn: '로그인하고 더 만들기',
  },
  moods: { friendly: '친근한', premium: '고급스러운', playful: '발랄한', modern: '모던한', classic: '클래식한', bold: '대담한', calm: '차분한', natural: '자연스러운', techy: '테크', handmade: '손맛 나는' },
  kinds: { cafe: '카페', bakery: '베이커리', restaurant: '음식점', beauty: '뷰티', fitness: '운동', shop: '쇼핑몰', app: '앱', agency: '에이전시', health: '병원·건강', consulting: '컨설팅', photo: '사진', pets: '반려동물', education: '교육', home: '집수리·청소', other: '기타' },
  picker: { hex: 'Hex', done: '완료', presets: '추천 색' },
  progress: ['사업을 이해하는 중', '로고 시안을 그리는 중', '16px과 한 가지 색으로 하나씩 확인하는 중', '부족한 시안을 다시 그리는 중', '가게 이름을 글꼴로 앉히는 중'],
  progressNote: '보통 40~60초 걸려요.',
  result: {
    title: '로고 시안', sub: '하나를 골라 고쳐 보세요. 모든 심볼은 확인을 통과했어요: 16px에서도 또렷하고, 한 가지 색으로도 쓰이고, 엉뚱한 글자가 없어요.',
    typeTitle: '이름만 있는 로고', typeSub: '실제 글꼴로 썼기 때문에 자유롭게 바꿀 수 있어요.', ai: '심볼', type: '글꼴', more: '이런 느낌 더 보기', moreNote: '1회 사용', edit: '고치기',
    left: '오늘 {n}번 더 만들 수 있어요', noneLeft: '오늘 횟수를 다 썼어요', ground: '배경', light: '밝게', dark: '어둡게', loading: '불러오는 중…', notFound: '이 로고를 찾지 못했어요.',
    fewer: '이번에는 확인을 통과한 심볼이 많지 않아요. 아래 이름만 있는 로고는 언제든 쓸 수 있고, 한 번 더 만들어 볼 수도 있어요.', added: '새 시안을 더했어요', variation: '변형',
  },
  editor: {
    title: '로고 고치기', back: '전체 시안', layout: '배치', layouts: { row: '가로', stack: '세로', name: '이름만', mark: '심볼만', badge: '배지' },
    font: '글꼴', weight: '굵기', weights: { 400: '보통', 700: '굵게', 900: '아주 굵게' }, letters: '대소문자', cases: { as: '입력한 대로', lower: '소문자', upper: '대문자', title: '단어 첫 글자만' },
    spacing: '자간', nameColour: '이름 색', iconColour: '심볼 색', original: '원래 색', accent: '포인트 색',
  },
  mock: {
    title: '실제로 쓰면 이렇게 보여요', sub: '고칠 때마다 바로 바뀌어요.', tab: '브라우저 탭', phone: '앱 아이콘', card: '명함', sign: '간판', social: 'SNS 프로필', site: '웹사이트',
    nav: ['메뉴', '소개', '오시는 길'], hero: '매일 아침 갓 구운', heroSub: '이 로고로 처음부터 equipe 팀이 만들어 주는 웹사이트예요.', cta: '주문하기', role: '대표', posts: '게시물', followers: '팔로워', open: '오늘 영업',
  },
  kit: {
    title: '브랜드 키트 내려받기', sub: '무료, 가입 없이, 워터마크 없이. 내 기기에서 바로 만들어져요.', download: '브랜드 키트 내려받기 (.zip)', making: '파일을 만드는 중…', ready: '내려받았어요',
    contents: ['SVG와 PNG 로고 (투명 배경, 최대 2048px)', '한 가지 색, 흰색, 아이콘 버전', '파비콘 세트: .ico, .svg, 애플·안드로이드 아이콘', 'SNS 프로필 사진과 커버 이미지', 'Hex 코드가 있는 색 팔레트와 글꼴 조합', '한 장짜리 브랜드 시트 (PDF)'],
    license: '로고는 내 것이에요. 상업적으로도 어디서든 무료로 쓸 수 있어요. AI로 만든 로고라서, 상표 등록이나 대량 인쇄 전에 기존 상표를 검색해 보세요:',
    tm: '상표 검색', uspto: 'USPTO (미국)', kipo: 'KIPRIS (한국)', wipo: 'WIPO 글로벌 브랜드 데이터베이스',
    sheet: { title: '브랜드 시트', logo: '로고', onDark: '어두운 배경', oneColour: '한 가지 색', icon: '아이콘', colours: '색', type: '글꼴', heading: '제목', body: '본문', license: '이 로고는 내 것이며 상업적으로 쓸 수 있어요. AI로 만들었으니 등록 전에 기존 상표(USPTO, KIPRIS, WIPO)를 검색해 보세요.', made: 'equipe.im/logo-maker 로 만들었어요' },
    readme: 'equipe.im/logo-maker 브랜드 키트\n\nlogo/        로고 (인쇄·웹용 SVG, 여러 크기의 PNG)\nicon/        정사각형 아이콘\nfavicon/     웹사이트 최상위 폴더에 넣어 주세요\nsocial/      프로필 사진과 커버 이미지\nbrand/       색, 글꼴, 한 장짜리 브랜드 시트\n\n로고는 내 것이에요. AI로 만들었으니 상표 등록 전에 기존 상표를 검색해 보세요.\n',
  },
  cta: { title: '이 로고로 웹사이트 만들기', text: 'equipe 팀이 처음부터 새 로고·색·글꼴에 맞춰 사이트를 만들어요. 코딩은 필요 없어요.', button: '내 웹사이트 만들기', note: '무료로 시작해요. 로고가 그대로 함께 가요.', idea: '{name} 웹사이트: {about}', kitLine: '브랜드 키트 (equipe.im 로고 만들기로 만든 것; 처음부터 이 로고를 쓰고 새로 그리지 말 것)' },
  share: { label: '로고 공유하기', make: '공유 링크 만들기', copy: '링크 복사', copied: '복사했어요', again: '다시 만들기', pageTitle: 'equipe로 만든 로고', heading: 'equipe 무료 로고 만들기로 만든 로고', own: '내 로고도 무료로 만들어 보세요', ownButton: '로고 만들기', title: '{name} 로고, equipe로 만들었어요', desc: 'equipe 무료 로고 만들기로 만든 {name} 로고예요. 1분이면 내 로고도 만들 수 있어요.', failed: '링크를 만들지 못했어요. 다시 시도해 주세요.' },
  how: {
    title: '이렇게 만들어요',
    items: [
      { title: '사업을 알려 주세요', text: '가게 이름, 하는 일, 스타일. 분위기와 색은 골라도 되고 안 골라도 돼요.' },
      { title: '깔끔한 시안 받기', text: 'AI가 벡터로 여러 방향을 그려요. 16px과 한 가지 색으로 하나씩 확인하고, 부족한 시안은 보여 드리기 전에 다시 그려요.' },
      { title: '고치고, 보고, 내려받기', text: '글꼴·색·배치를 무료로 바꾸고, 간판과 웹사이트에 올린 모습을 보고, 브랜드 키트를 통째로 내려받아요.' },
    ],
  },
  faq: {
    title: '자주 묻는 질문',
    items: [
      { question: '정말 무료인가요?', answer: '네. 로고를 만들고 고치고 브랜드 키트를 내려받는 것 모두 무료이고, 워터마크도 가입도 없어요. AI 시안은 하루 두 번, 무료 equipe 계정이 있으면 열 번까지 만들 수 있어요. 이름만 있는 로고는 횟수 제한이 없어요.' },
      { question: '로고는 제 것인가요?', answer: '네, 상업적인 용도를 포함해 어디서든 쓸 수 있어요. AI로 만들었기 때문에 상표 등록이나 대량 인쇄 전에는 기존 상표(한국 KIPRIS, 미국 USPTO, 국제 WIPO)를 검색해 보세요.' },
      { question: '가게 이름 철자가 틀리지는 않나요?', answer: '절대 틀리지 않아요. AI는 심볼만 그리고, 이름은 내 기기에서 실제 글꼴로 써요. 그래서 오타가 날 수 없고, 글꼴과 색도 무료로 바꿀 수 있어요.' },
      { question: '어떤 파일을 받나요?', answer: 'SVG와 투명 배경 PNG 로고, 한 가지 색·흰색 버전, 정사각형 아이콘, 파비콘 세트, SNS 프로필·커버 이미지, Hex 코드가 있는 색, 글꼴 조합, 한 장짜리 브랜드 시트 PDF를 받아요.' },
      { question: '로고는 어떻게 확인하나요?', answer: '모든 심볼을 코드로 확인하고(16px에서 또렷한지, 한 가지 색으로 쓸 수 있는지, 색 수와 깔끔한 가장자리), 이미지를 보는 AI가 애매하거나 글자처럼 보이거나 유명 브랜드와 비슷한 것은 빼요. 통과하지 못한 시안은 한 번 다시 그려요.' },
      { question: '이 로고로 웹사이트도 만들 수 있나요?', answer: '네. "이 로고로 웹사이트 만들기"를 누르면 로고·색·글꼴이 이미 들어간 equipe 프로젝트가 시작돼서, 팀이 만드는 사이트가 처음부터 내 브랜드와 맞아요.' },
    ],
  },
};

const ja: LogoCopy = {
  fromNames: 'この名前でロゴを仕上げる',
  page: { title: '無料ロゴ作成：AIロゴジェネレーターと無料ブランドキット | equipe', desc: 'お店や会社のロゴを1分で。きれいなベクターのロゴ案をいくつも、店名は必ず正しい綴りで。実際の使用イメージを見て、SVG・PNG・ファビコン・ブランドキットを無料でダウンロード。登録不要です。', ogTitle: 'equipe の無料ロゴ作成', h1: '無料ロゴ作成', lead: '店名と事業内容を教えてください。1分ほどできれいなロゴ案がいくつも届き、看板・名刺・ウェブサイトでの見え方を確かめて、ファイルを無料でダウンロードできます。' },
  form: {
    name: '店名・社名', namePh: '例：メゾン ハナ', needName: 'まず名前が必要ですか？名前を探す', about: 'どんな事業ですか？', aboutPh: '例：オークランドの韓仏ベーカリー', optional: '任意',
    style: 'ロゴのスタイル', styles: { icon: { t: 'アイコンと名前', d: '名前の横にシンボル' }, wordmark: { t: '名前だけ', d: '印象的な書体で名前を' }, lettermark: { t: 'イニシャル', d: '頭文字をシンボルに' }, emblem: { t: 'バッジ', d: 'シンボルと名前を丸いエンブレムに' } },
    mood: '雰囲気', colours: '色', coloursHint: '3色まで選ぶか、おまかせください', addColour: '色を追加', removeColour: '色を外す', kind: '業種', inspiration: 'イメージ', inspirationPh: '例：昔ながらの街のパン屋のように温かく手作り感のある', more: 'その他のオプション',
    button: 'ロゴを作る', note: '無料・登録不要。1日2回まで、無料アカウントならもっと作れます。', noteSigned: 'ログイン中です。1日10回まで作れます。',
    errName: 'まず店名を入力してください。', errTurnstile: '人間であることを確認できませんでした。もう一度お試しください。', errRate: '今日の無料回数を使い切りました。equipe に無料でログインすると1日10回まで作れます。または明日またどうぞ。', errRateSigned: '今日の回数を使い切りました。明日またどうぞ。', errBusy: '本日はロゴ作成が混み合っています。名前だけのロゴは今も作れます。アイコンは明日お試しください。', errFailed: '問題が発生しました。もう一度お試しください。', signIn: 'ログインしてもっと作る',
  },
  moods: { friendly: '親しみやすい', premium: '上質', playful: '遊び心', modern: 'モダン', classic: 'クラシック', bold: '大胆', calm: '落ち着き', natural: 'ナチュラル', techy: 'テック', handmade: '手作り感' },
  kinds: { cafe: 'カフェ', bakery: 'ベーカリー', restaurant: '飲食店', beauty: '美容', fitness: 'フィットネス', shop: 'ショップ', app: 'アプリ', agency: 'エージェンシー', health: '医療・健康', consulting: 'コンサル', photo: '写真', pets: 'ペット', education: '教育', home: '住まいのサービス', other: 'その他' },
  picker: { hex: 'Hex', done: '完了', presets: 'おすすめの色' },
  progress: ['事業を理解しています', 'ロゴ案を描いています', '16pxと単色で一つずつ確認しています', '弱い案を描き直しています', '店名を書体で組んでいます'],
  progressNote: '通常40〜60秒です。',
  result: { title: 'ロゴ案', sub: '1つ選んで編集してください。どのシンボルもチェック済みです：16pxでも鮮明、単色でも使え、不要な文字はありません。', typeTitle: '名前だけのロゴ', typeSub: '本物の書体で組んでいるので、自由に変えられます。', ai: 'シンボル', type: '書体', more: '似た案をもっと', moreNote: '1回分を使います', edit: '編集', left: '今日はあと{n}回作れます', noneLeft: '今日の回数は使い切りました', ground: '背景', light: '明るい', dark: '暗い', loading: '読み込み中…', notFound: 'このロゴが見つかりませんでした。', fewer: '今回はチェックを通ったシンボルが少なめでした。下の名前だけのロゴはいつでも使えますし、もう一度作ることもできます。', added: '新しい案を追加しました', variation: 'バリエーション' },
  editor: { title: 'ロゴを編集', back: 'すべての案', layout: 'レイアウト', layouts: { row: '横並び', stack: '縦並び', name: '名前だけ', mark: 'シンボルだけ', badge: 'バッジ' }, font: '書体', weight: '太さ', weights: { 400: '標準', 700: '太字', 900: '極太' }, letters: '大文字・小文字', cases: { as: '入力どおり', lower: '小文字', upper: '大文字', title: '単語の頭だけ大文字' }, spacing: '字間', nameColour: '名前の色', iconColour: 'シンボルの色', original: '元の色', accent: 'アクセント色' },
  mock: { title: '使うとこう見えます', sub: '編集するたびにすぐ変わります。', tab: 'ブラウザのタブ', phone: 'アプリアイコン', card: '名刺', sign: '店舗の看板', social: 'SNSプロフィール', site: 'ウェブサイト', nav: ['メニュー', '私たちについて', 'アクセス'], hero: '毎朝、焼きたてを', heroSub: 'このロゴで最初から equipe チームが作るウェブサイトです。', cta: '注文する', role: 'オーナー', posts: '投稿', followers: 'フォロワー', open: '本日営業' },
  kit: {
    title: 'ブランドキットをダウンロード', sub: '無料・登録不要・透かしなし。お使いの端末で作成します。', download: 'ブランドキットをダウンロード (.zip)', making: 'ファイルを作成中…', ready: 'ダウンロードしました',
    contents: ['SVGとPNGのロゴ（透過、最大2048px）', '単色・白・アイコン版', 'ファビコン一式：.ico、.svg、Apple・Android用アイコン', 'SNSのプロフィール画像とカバー画像', 'Hexコード付きカラーパレットと書体の組み合わせ', '1枚のブランドシート（PDF）'],
    license: 'ロゴはあなたのものです。商用を含めどこでも無料で使えます。AIで作成したため、登録や大量印刷の前に既存の商標を検索してください：', tm: '商標検索', uspto: 'USPTO（米国）', kipo: 'KIPRIS（韓国）', wipo: 'WIPO Global Brand Database',
    sheet: { title: 'ブランドシート', logo: 'ロゴ', onDark: '暗い背景', oneColour: '単色', icon: 'アイコン', colours: '色', type: '書体', heading: '見出し', body: '本文', license: 'このロゴはあなたのもので、商用利用できます。AIで作成したため、登録前に既存の商標（USPTO、KIPRIS、WIPO）を検索してください。', made: 'equipe.im/logo-maker で作成' },
    readme: 'equipe.im/logo-maker のブランドキット\n\nlogo/        ロゴ（印刷・ウェブ用SVG、各サイズのPNG）\nicon/        正方形のアイコン\nfavicon/     ウェブサイトのルートフォルダに置いてください\nsocial/      プロフィール画像とカバー画像\nbrand/       色、書体、1枚のブランドシート\n\nロゴはあなたのものです。AIで作成したため、登録前に既存の商標を検索してください。\n',
  },
  cta: { title: 'このロゴでウェブサイトを作る', text: 'equipe のチームが、新しいロゴ・色・書体に合わせて最初からサイトを作ります。コーディングは不要です。', button: 'ウェブサイトを作る', note: '無料で始められます。ロゴもそのまま引き継ぎます。', idea: '{name} のウェブサイト：{about}', kitLine: 'ブランドキット（equipe.im のロゴ作成で作成。最初からこのロゴを使い、新しく描かないこと）' },
  share: { label: 'ロゴを共有', make: '共有リンクを作る', copy: 'リンクをコピー', copied: 'コピーしました', again: 'もう一度作る', pageTitle: 'equipe で作ったロゴ', heading: 'equipe の無料ロゴ作成で作ったロゴ', own: 'あなたのロゴも無料で', ownButton: 'ロゴを作る', title: '{name} のロゴ（equipe で作成）', desc: 'equipe の無料ロゴ作成で作った {name} のロゴです。1分であなたのロゴも作れます。', failed: 'リンクを作れませんでした。もう一度お試しください。' },
  how: { title: '使い方', items: [{ title: '事業について教える', text: '店名、事業内容、スタイル。雰囲気と色は任意です。' }, { title: 'きれいなロゴ案を受け取る', text: 'AIがベクターでいくつもの方向性を描きます。16pxと単色で一つずつ確認し、弱い案はお見せする前に描き直します。' }, { title: '編集・確認・ダウンロード', text: '書体・色・レイアウトを無料で変え、看板やウェブサイトでの見え方を確かめ、ブランドキット一式をダウンロード。' }] },
  faq: { title: 'よくある質問', items: [
    { question: '本当に無料ですか？', answer: 'はい。ロゴの作成・編集・ブランドキットのダウンロードはすべて無料で、透かしも登録もありません。AIのロゴ案は1日2回、無料の equipe アカウントなら10回まで。名前だけのロゴは回数制限がありません。' },
    { question: 'ロゴは自分のものですか？', answer: 'はい、商用を含めどこでも使えます。AIで作成したため、登録や大量印刷の前に既存の商標（日本はJ-PlatPat、米国USPTO、国際WIPO）を検索してください。' },
    { question: '店名の綴りは間違いませんか？', answer: '必ず正しく表示されます。AIが描くのはシンボルだけで、名前はお使いの端末で本物の書体で組みます。誤字は起こらず、書体や色も無料で変えられます。' },
    { question: 'どんなファイルがもらえますか？', answer: 'SVGと透過PNGのロゴ、単色・白の版、正方形のアイコン、ファビコン一式、SNSのプロフィール画像とカバー画像、Hexコード付きの色、書体の組み合わせ、1枚のブランドシートPDFです。' },
    { question: 'ロゴはどうやって確認していますか？', answer: 'すべてのシンボルをコードで確認し（16pxで鮮明か、単色で使えるか、色数、きれいな輪郭）、画像を見るAIが曖昧なもの・文字に見えるもの・有名ブランドに似たものを外します。不合格の案は一度描き直します。' },
    { question: 'このロゴでウェブサイトも作れますか？', answer: 'はい。「このロゴでウェブサイトを作る」から、ロゴ・色・書体が入った equipe のプロジェクトが始まり、チームが作るサイトは最初からブランドに合います。' },
  ] },
};

const zh: LogoCopy = {
  fromNames: '用这个名字做完整 Logo',
  page: { title: '免费 Logo 设计：AI Logo 生成器与免费品牌套件 | equipe', desc: '一分钟为你的生意做好 Logo。多个干净的矢量方案，店名拼写永远正确，实时预览，免费下载 SVG、PNG、网站图标和品牌套件。无需注册。', ogTitle: 'equipe 免费 Logo 设计', h1: '免费 Logo 设计', lead: '告诉我们店名和你做什么。大约一分钟就能拿到多个干净的 Logo 方案，看看它在招牌、名片和网站上的样子，并免费下载文件。' },
  form: {
    name: '店名', namePh: '例如：Maison Hana', needName: '还没想好名字？先找个名字', about: '做什么生意？', aboutPh: '例如：奥克兰的韩法风味面包店', optional: '可选',
    style: 'Logo 风格', styles: { icon: { t: '图标加名字', d: '名字旁边配一个符号' }, wordmark: { t: '只有名字', d: '用有个性的字体写名字' }, lettermark: { t: '首字母', d: '用首字母做符号' }, emblem: { t: '徽章', d: '符号和名字放进圆形徽章' } },
    mood: '气质', colours: '颜色', coloursHint: '最多选三种，或交给我们', addColour: '添加颜色', removeColour: '移除颜色', kind: '行业', inspiration: '参考感觉', inspirationPh: '例如：像街角老面包店一样温暖、手工感', more: '更多选项',
    button: '生成我的 Logo', note: '免费，无需注册。每天两轮，免费账户可以更多。', noteSigned: '你已登录：每天十轮。',
    errName: '请先填写店名。', errTurnstile: '无法确认你是真人，请重试。', errRate: '今天的免费次数已用完。免费登录 equipe 每天可生成十轮，或明天再来。', errRateSigned: '今天的次数已用完，请明天再来。', errBusy: '今天 Logo 生成非常繁忙。只有名字的 Logo 仍可使用，图标请明天再试。', errFailed: '出了点问题，请重试。', signIn: '登录以生成更多',
  },
  moods: { friendly: '亲切', premium: '高级', playful: '活泼', modern: '现代', classic: '经典', bold: '醒目', calm: '沉静', natural: '自然', techy: '科技', handmade: '手作' },
  kinds: { cafe: '咖啡馆', bakery: '面包店', restaurant: '餐厅', beauty: '美容', fitness: '健身', shop: '网店', app: '应用', agency: '代理机构', health: '医疗健康', consulting: '咨询', photo: '摄影', pets: '宠物', education: '教育', home: '家政维修', other: '其他' },
  picker: { hex: 'Hex', done: '完成', presets: '推荐颜色' },
  progress: ['理解你的生意', '绘制 Logo 方案', '逐个检查 16 像素和单色效果', '重画不够好的方案', '用字体排好店名'],
  progressNote: '通常需要 40 到 60 秒。',
  result: { title: '你的 Logo 方案', sub: '选一个来编辑。每个符号都通过了检查：16 像素依然清晰，单色也能用，没有多余的字母。', typeTitle: '只有名字的 Logo', typeSub: '用真实字体排版，可以随意修改。', ai: '符号', type: '字体', more: '更多类似的', moreNote: '使用一轮', edit: '编辑', left: '今天还能生成 {n} 轮', noneLeft: '今天的次数已用完', ground: '背景', light: '浅色', dark: '深色', loading: '加载中…', notFound: '找不到这个 Logo。', fewer: '这次通过检查的符号不多。下面只有名字的 Logo 随时可用，也可以再来一轮。', added: '已添加新方案', variation: '变体' },
  editor: { title: '编辑 Logo', back: '全部方案', layout: '布局', layouts: { row: '左右排列', stack: '上下排列', name: '只有名字', mark: '只有符号', badge: '徽章' }, font: '字体', weight: '粗细', weights: { 400: '常规', 700: '粗体', 900: '特粗' }, letters: '大小写', cases: { as: '按输入', lower: '小写', upper: '大写', title: '首字母大写' }, spacing: '字距', nameColour: '名字颜色', iconColour: '符号颜色', original: '原色', accent: '强调色' },
  mock: { title: '实际使用效果', sub: '实时预览，随编辑更新。', tab: '浏览器标签', phone: '应用图标', card: '名片', sign: '店铺招牌', social: '社交头像', site: '网站', nav: ['菜单', '关于', '到店'], hero: '每天新鲜出炉', heroSub: '这是 equipe 团队从第一天起就用这个 Logo 为你搭建的网站。', cta: '立即下单', role: '店主', posts: '帖子', followers: '粉丝', open: '今日营业' },
  kit: {
    title: '下载你的品牌套件', sub: '免费，无需注册，无水印。在你的设备上生成。', download: '下载品牌套件 (.zip)', making: '正在生成文件…', ready: '已下载',
    contents: ['SVG 和 PNG Logo（透明背景，最大 2048 像素）', '单色、白色和图标版本', '网站图标全套：.ico、.svg、Apple 和 Android 图标', '社交头像和封面图', '带 Hex 色值的配色和字体搭配', '一页品牌规范（PDF）'],
    license: 'Logo 归你所有，可以免费用于任何地方，包括商业用途。它由 AI 生成，注册或大量印刷前请先检索现有商标：', tm: '商标检索', uspto: 'USPTO（美国）', kipo: 'KIPRIS（韩国）', wipo: 'WIPO 全球品牌数据库',
    sheet: { title: '品牌规范', logo: 'Logo', onDark: '深色背景', oneColour: '单色', icon: '图标', colours: '颜色', type: '字体', heading: '标题', body: '正文', license: '此 Logo 归你所有，可用于商业用途。它由 AI 生成，注册前请检索现有商标（USPTO、KIPRIS、WIPO）。', made: '由 equipe.im/logo-maker 制作' },
    readme: '来自 equipe.im/logo-maker 的品牌套件\n\nlogo/        Logo（用于印刷和网页的 SVG，多种尺寸的 PNG）\nicon/        方形图标\nfavicon/     放到网站根目录\nsocial/      头像和封面图\nbrand/       颜色、字体和一页品牌规范\n\nLogo 归你所有。它由 AI 生成，注册前请检索现有商标。\n',
  },
  cta: { title: '用这个 Logo 建网站', text: 'equipe 团队从第一天起就按你的新 Logo、颜色和字体来做网站。无需写代码。', button: '建我的网站', note: '免费开始，Logo 会一起带过去。', idea: '{name} 的网站：{about}', kitLine: '品牌套件（用 equipe.im Logo 设计制作；从第一天起就用这个 Logo，不要重新画）' },
  share: { label: '分享你的 Logo', make: '获取分享链接', copy: '复制链接', copied: '已复制', again: '再做一个', pageTitle: '用 equipe 做的 Logo', heading: '用 equipe 免费 Logo 设计做的 Logo', own: '免费做一个你自己的 Logo', ownButton: '做我的 Logo', title: '{name} 的 Logo（用 equipe 制作）', desc: '用 equipe 免费 Logo 设计做的 {name} Logo。一分钟做出你的。', failed: '无法生成链接，请重试。' },
  how: { title: '怎么用', items: [{ title: '介绍你的生意', text: '店名、做什么、风格。气质和颜色可选。' }, { title: '拿到干净的方案', text: 'AI 用矢量画出多个方向。每个都检查 16 像素和单色效果，不够好的会在给你看之前重画。' }, { title: '编辑、预览、下载', text: '免费修改字体、颜色和布局，看看在招牌和网站上的效果，再下载完整品牌套件。' }] },
  faq: { title: '常见问题', items: [
    { question: 'Logo 设计真的免费吗？', answer: '是的。生成、编辑 Logo 和下载品牌套件都免费，没有水印，也不用注册。AI 方案每天两轮，免费 equipe 账户可到十轮。只有名字的 Logo 不限次数。' },
    { question: 'Logo 归我所有吗？', answer: '是的，可以用在任何地方，包括商业用途。因为是 AI 生成，注册或大量印刷前请检索现有商标（中国国家知识产权局、美国 USPTO、国际 WIPO）。' },
    { question: '店名会拼错吗？', answer: '永远不会。AI 只画符号，名字在你的设备上用真实字体排版，所以不会出错，也能免费换字体和颜色。' },
    { question: '能拿到哪些文件？', answer: 'SVG 和透明 PNG 的 Logo、单色和白色版本、方形图标、全套网站图标、社交头像和封面图、带 Hex 色值的颜色、字体搭配和一页品牌规范 PDF。' },
    { question: '你们怎么检查 Logo？', answer: '每个符号都先由代码检查（16 像素是否清晰、单色是否可用、颜色数量、边缘是否干净），再由看图的 AI 剔除含糊、像字母或像知名品牌的方案。不合格的会重画一次。' },
    { question: '能用它建网站吗？', answer: '可以。点“用这个 Logo 建网站”，会开始一个已经带有你的 Logo、颜色和字体的 equipe 项目，团队做的网站从第一天起就和品牌一致。' },
  ] },
};

const es: LogoCopy = {
  fromNames: 'Crea el logo completo con este nombre',
  page: { title: 'Creador de logos gratis: generador de logos con IA y kit de marca | equipe', desc: 'Crea el logo de tu negocio en un minuto. Varias ideas limpias en vectores, tu nombre siempre bien escrito, vistas previas reales y descarga gratis: SVG, PNG, favicon y kit de marca. Sin registro.', ogTitle: 'Creador de logos gratis de equipe', h1: 'Creador de logos gratis', lead: 'Dinos el nombre de tu negocio y a qué se dedica. En un minuto tienes varias ideas de logo limpias, las ves en un letrero, una tarjeta y una web, y descargas los archivos gratis.' },
  form: {
    name: 'Nombre del negocio', namePh: 'p. ej. Maison Hana', needName: '¿Aún sin nombre? Encuentra uno', about: '¿A qué se dedica?', aboutPh: 'p. ej. Una panadería coreano-francesa en Oakland', optional: 'opcional',
    style: 'Estilo del logo', styles: { icon: { t: 'Icono y nombre', d: 'Un símbolo junto a tu nombre' }, wordmark: { t: 'Solo el nombre', d: 'Tu nombre con una tipografía con carácter' }, lettermark: { t: 'Inicial', d: 'Tu primera letra como símbolo' }, emblem: { t: 'Insignia', d: 'Símbolo y nombre en un sello redondo' } },
    mood: 'Estilo', colours: 'Colores', coloursHint: 'Elige hasta tres, o déjalo en nuestras manos', addColour: 'Añadir color', removeColour: 'Quitar color', kind: 'Tipo de negocio', inspiration: 'Inspiración', inspirationPh: 'p. ej. cálido y artesanal, como la panadería de toda la vida', more: 'Más opciones',
    button: 'Crear mis logos', note: 'Gratis y sin registro. Dos rondas al día; más con una cuenta gratuita.', noteSigned: 'Has iniciado sesión: diez rondas al día.',
    errName: 'Escribe primero el nombre de tu negocio.', errTurnstile: 'No pudimos confirmar que eres una persona. Inténtalo de nuevo.', errRate: 'Ya usaste las rondas gratis de hoy. Entra en equipe (gratis) para tener diez al día, o vuelve mañana.', errRateSigned: 'Ya usaste las rondas de hoy. Vuelve mañana.', errBusy: 'El creador de logos está muy ocupado hoy. Los logos solo con nombre siguen funcionando; prueba los iconos mañana.', errFailed: 'Algo salió mal. Inténtalo de nuevo.', signIn: 'Entra para tener más',
  },
  moods: { friendly: 'Cercano', premium: 'Premium', playful: 'Divertido', modern: 'Moderno', classic: 'Clásico', bold: 'Atrevido', calm: 'Sereno', natural: 'Natural', techy: 'Tecnológico', handmade: 'Artesanal' },
  kinds: { cafe: 'Cafetería', bakery: 'Panadería', restaurant: 'Restaurante', beauty: 'Belleza', fitness: 'Fitness', shop: 'Tienda', app: 'App', agency: 'Agencia', health: 'Salud', consulting: 'Consultoría', photo: 'Fotografía', pets: 'Mascotas', education: 'Educación', home: 'Hogar', other: 'Otro' },
  picker: { hex: 'Hex', done: 'Listo', presets: 'Colores sugeridos' },
  progress: ['Entendiendo tu negocio', 'Dibujando ideas de logo', 'Revisando cada una a 16 px y en un color', 'Redibujando las más flojas', 'Componiendo tu nombre con tipografía'],
  progressNote: 'Suele tardar de 40 a 60 segundos.',
  result: { title: 'Tus ideas de logo', sub: 'Elige una para editarla. Cada símbolo pasó nuestras revisiones: nítido a 16 px, funciona en un color y sin letras sueltas.', typeTitle: 'Logos solo con nombre', typeSub: 'Compuestos con tipografía real, así que puedes cambiarlos gratis.', ai: 'Símbolo', type: 'Tipografía', more: 'Más como este', moreNote: 'Usa una ronda', edit: 'Editar', left: 'Te quedan {n} rondas hoy', noneLeft: 'No te quedan rondas hoy', ground: 'Fondo', light: 'Claro', dark: 'Oscuro', loading: 'Cargando…', notFound: 'No encontramos este logo.', fewer: 'Esta vez pocos símbolos pasaron las revisiones. Los logos solo con nombre de abajo siempre funcionan, o prueba otra ronda.', added: 'Nuevas variaciones añadidas', variation: 'Variación' },
  editor: { title: 'Edita tu logo', back: 'Todas las ideas', layout: 'Disposición', layouts: { row: 'En línea', stack: 'Apilado', name: 'Solo nombre', mark: 'Solo símbolo', badge: 'Insignia' }, font: 'Tipografía', weight: 'Grosor', weights: { 400: 'Normal', 700: 'Negrita', 900: 'Extra' }, letters: 'Letras', cases: { as: 'Como lo escribiste', lower: 'minúsculas', upper: 'MAYÚSCULAS', title: 'Tipo Título' }, spacing: 'Espaciado', nameColour: 'Color del nombre', iconColour: 'Color del símbolo', original: 'Original', accent: 'Color de acento' },
  mock: { title: 'Así se ve en uso', sub: 'Vistas previas en vivo que cambian al editar.', tab: 'Pestaña del navegador', phone: 'Icono de app', card: 'Tarjeta de visita', sign: 'Letrero', social: 'Perfil social', site: 'Sitio web', nav: ['Carta', 'Nosotros', 'Visítanos'], hero: 'Recién hecho, cada día', heroSub: 'Tu web, creada por tu equipo de equipe con este logo desde el primer día.', cta: 'Pedir ahora', role: 'Dueña', posts: 'publicaciones', followers: 'seguidores', open: 'Abierto hoy' },
  kit: {
    title: 'Descarga tu kit de marca', sub: 'Gratis, sin registro ni marca de agua. Se crea en tu dispositivo.', download: 'Descargar kit de marca (.zip)', making: 'Creando tus archivos…', ready: 'Descargado',
    contents: ['Logo en SVG y PNG (fondo transparente, hasta 2048 px)', 'Versiones en un color, en blanco e icono', 'Favicons: .ico, .svg e iconos para Apple y Android', 'Foto de perfil e imágenes de portada para redes', 'Paleta con códigos hex y una combinación de tipografías', 'Una hoja de marca de una página (PDF)'],
    license: 'El logo es tuyo: úsalo donde quieras, también con fines comerciales, sin coste. Está hecho con IA, así que antes de registrarlo o imprimir mucho, busca marcas existentes:', tm: 'Búsqueda de marcas', uspto: 'USPTO (EE. UU.)', kipo: 'KIPRIS (Corea)', wipo: 'Base de datos mundial de marcas de la OMPI',
    sheet: { title: 'Hoja de marca', logo: 'Logo', onDark: 'Sobre oscuro', oneColour: 'Un color', icon: 'Icono', colours: 'Colores', type: 'Tipografía', heading: 'Títulos', body: 'Texto', license: 'Este logo es tuyo y puedes usarlo comercialmente. Está hecho con IA: busca marcas existentes (USPTO, KIPRIS, OMPI) antes de registrarlo.', made: 'Hecho con equipe.im/logo-maker' },
    readme: 'Tu kit de marca de equipe.im/logo-maker\n\nlogo/        el logo (SVG para imprenta y web, PNG en varios tamaños)\nicon/        el icono cuadrado\nfavicon/     ponlos en la carpeta raíz de tu web\nsocial/      foto de perfil e imágenes de portada\nbrand/       colores, tipografías y la hoja de marca\n\nEl logo es tuyo. Está hecho con IA: busca marcas existentes antes de registrarlo.\n',
  },
  cta: { title: 'Crea tu web con este logo', text: 'Tu equipo de equipe construye la web con tu nuevo logo, colores y tipografías desde el primer día. Sin programar.', button: 'Crear mi web', note: 'Empezar es gratis. Tu logo viene contigo.', idea: 'Una web para {name}: {about}', kitLine: 'Kit de marca (hecho con el creador de logos de equipe.im; úsalo como logo desde el primer día, no dibujes otro)' },
  share: { label: 'Comparte tu logo', make: 'Crear enlace para compartir', copy: 'Copiar enlace', copied: 'Copiado', again: 'Crear otro', pageTitle: 'Un logo hecho con equipe', heading: 'Un logo hecho con el creador de logos gratis de equipe', own: 'Crea tu propio logo gratis', ownButton: 'Crear mi logo', title: 'Logo de {name}, hecho con equipe', desc: 'El logo de {name}, hecho con el creador de logos gratis de equipe. Crea el tuyo en un minuto.', failed: 'No pudimos crear el enlace. Inténtalo de nuevo.' },
  how: { title: 'Cómo funciona', items: [{ title: 'Cuéntanos de tu negocio', text: 'El nombre, a qué se dedica y un estilo. El ambiente y los colores son opcionales.' }, { title: 'Recibe ideas limpias', text: 'La IA dibuja varias direcciones en vectores. Revisamos cada una a 16 px y en un color, y redibujamos las flojas antes de mostrártelas.' }, { title: 'Edita, mira y descarga', text: 'Cambia gratis la tipografía, los colores y la disposición, mira cómo queda en un letrero y una web, y descarga el kit completo.' }] },
  faq: { title: 'Preguntas', items: [
    { question: '¿De verdad es gratis?', answer: 'Sí. Crear logos, editarlos y descargar el kit de marca es gratis, sin marca de agua ni registro. Tienes dos rondas de ideas con IA al día, diez con una cuenta gratuita de equipe. Los logos solo con nombre son ilimitados.' },
    { question: '¿El logo es mío?', answer: 'Sí, puedes usarlo donde quieras, también comercialmente. Como está hecho con IA, busca marcas existentes (OEPM en España, IMPI en México, USPTO, OMPI) antes de registrarlo o imprimir mucho.' },
    { question: '¿Mi nombre saldrá bien escrito?', answer: 'Siempre. La IA solo dibuja el símbolo. Tu nombre se compone con una tipografía real en tu dispositivo, así que nunca tendrá errores, y puedes cambiar la letra y el color gratis.' },
    { question: '¿Qué archivos recibo?', answer: 'El logo en SVG y PNG transparente, versiones en un color y en blanco, el icono cuadrado, todos los favicons, imágenes de perfil y portada para redes, tus colores con códigos hex, una combinación de tipografías y una hoja de marca en PDF.' },
    { question: '¿Cómo revisan los logos?', answer: 'El código revisa cada símbolo (nítido a 16 px, funciona en un color, pocos colores planos, bordes limpios) y un modelo de visión descarta lo confuso, lo que parece una letra o lo parecido a una marca conocida. Lo que no pasa se redibuja una vez.' },
    { question: '¿Puedo crear una web con él?', answer: 'Sí. "Crea tu web con este logo" abre un proyecto de equipe que ya tiene tu logo, colores y tipografías, así que la web que hace tu equipo encaja con tu marca desde el primer día.' },
  ] },
};

const ptBR: LogoCopy = {
  fromNames: 'Crie o logo completo com este nome',
  page: { title: 'Criador de logo grátis: gerador de logo com IA e kit de marca | equipe', desc: 'Crie o logo do seu negócio em um minuto. Várias ideias limpas em vetor, seu nome sempre escrito certo, prévias reais e download grátis: SVG, PNG, favicon e kit de marca. Sem cadastro.', ogTitle: 'Criador de logo grátis da equipe', h1: 'Criador de logo grátis', lead: 'Conte o nome do seu negócio e o que ele faz. Em cerca de um minuto você recebe várias ideias de logo limpas, vê como ficam numa fachada, num cartão e num site, e baixa os arquivos de graça.' },
  form: {
    name: 'Nome do negócio', namePh: 'ex.: Maison Hana', needName: 'Ainda sem nome? Encontre um', about: 'O que ele faz?', aboutPh: 'ex.: Uma padaria coreano-francesa em Oakland', optional: 'opcional',
    style: 'Estilo do logo', styles: { icon: { t: 'Ícone e nome', d: 'Um símbolo ao lado do nome' }, wordmark: { t: 'Só o nome', d: 'Seu nome numa fonte marcante' }, lettermark: { t: 'Inicial', d: 'Sua primeira letra como símbolo' }, emblem: { t: 'Selo', d: 'Símbolo e nome num selo redondo' } },
    mood: 'Estilo', colours: 'Cores', coloursHint: 'Escolha até três, ou deixe com a gente', addColour: 'Adicionar cor', removeColour: 'Remover cor', kind: 'Tipo de negócio', inspiration: 'Inspiração', inspirationPh: 'ex.: acolhedor e artesanal, como a padaria da esquina', more: 'Mais opções',
    button: 'Criar meus logos', note: 'Grátis, sem cadastro. Duas rodadas por dia; mais com uma conta grátis.', noteSigned: 'Você está conectado: dez rodadas por dia.',
    errName: 'Digite primeiro o nome do negócio.', errTurnstile: 'Não conseguimos confirmar que você é uma pessoa. Tente de novo.', errRate: 'Essas foram as rodadas grátis de hoje. Entre na equipe (grátis) para ter dez por dia, ou volte amanhã.', errRateSigned: 'Essas foram as rodadas de hoje. Volte amanhã.', errBusy: 'O criador de logo está muito movimentado hoje. Logos só com o nome continuam funcionando; tente os ícones amanhã.', errFailed: 'Algo deu errado. Tente de novo.', signIn: 'Entrar para ter mais',
  },
  moods: { friendly: 'Amigável', premium: 'Premium', playful: 'Divertido', modern: 'Moderno', classic: 'Clássico', bold: 'Ousado', calm: 'Tranquilo', natural: 'Natural', techy: 'Tech', handmade: 'Artesanal' },
  kinds: { cafe: 'Café', bakery: 'Padaria', restaurant: 'Restaurante', beauty: 'Beleza', fitness: 'Fitness', shop: 'Loja', app: 'App', agency: 'Agência', health: 'Saúde', consulting: 'Consultoria', photo: 'Fotografia', pets: 'Pets', education: 'Educação', home: 'Serviços para casa', other: 'Outro' },
  picker: { hex: 'Hex', done: 'Pronto', presets: 'Cores sugeridas' },
  progress: ['Entendendo o seu negócio', 'Desenhando ideias de logo', 'Conferindo cada uma em 16 px e em uma cor', 'Redesenhando as mais fracas', 'Compondo o seu nome com tipografia'],
  progressNote: 'Leva em geral de 40 a 60 segundos.',
  result: { title: 'Suas ideias de logo', sub: 'Escolha uma para editar. Todo símbolo passou nas nossas checagens: nítido em 16 px, funciona em uma cor e sem letras soltas.', typeTitle: 'Logos só com o nome', typeSub: 'Feitos com tipografia de verdade, então dá para mudar à vontade.', ai: 'Símbolo', type: 'Tipografia', more: 'Mais como este', moreNote: 'Usa uma rodada', edit: 'Editar', left: 'Restam {n} rodadas hoje', noneLeft: 'Não restam rodadas hoje', ground: 'Fundo', light: 'Claro', dark: 'Escuro', loading: 'Carregando…', notFound: 'Não encontramos este logo.', fewer: 'Desta vez poucos símbolos passaram nas checagens. Os logos só com o nome abaixo sempre funcionam, ou tente outra rodada.', added: 'Novas variações adicionadas', variation: 'Variação' },
  editor: { title: 'Edite seu logo', back: 'Todas as ideias', layout: 'Layout', layouts: { row: 'Lado a lado', stack: 'Empilhado', name: 'Só o nome', mark: 'Só o símbolo', badge: 'Selo' }, font: 'Fonte', weight: 'Peso', weights: { 400: 'Regular', 700: 'Negrito', 900: 'Black' }, letters: 'Letras', cases: { as: 'Como digitado', lower: 'minúsculas', upper: 'MAIÚSCULAS', title: 'Iniciais Maiúsculas' }, spacing: 'Espaçamento', nameColour: 'Cor do nome', iconColour: 'Cor do símbolo', original: 'Original', accent: 'Cor de destaque' },
  mock: { title: 'Veja em uso', sub: 'Prévias ao vivo, atualizadas enquanto você edita.', tab: 'Aba do navegador', phone: 'Ícone de app', card: 'Cartão de visita', sign: 'Fachada', social: 'Perfil social', site: 'Site', nav: ['Cardápio', 'Sobre', 'Visite'], hero: 'Fresquinho, todo dia', heroSub: 'Seu site, feito pelo seu time da equipe com este logo desde o primeiro dia.', cta: 'Pedir agora', role: 'Dona', posts: 'posts', followers: 'seguidores', open: 'Aberto hoje' },
  kit: {
    title: 'Baixe seu kit de marca', sub: 'Grátis, sem cadastro, sem marca d’água. Feito no seu aparelho.', download: 'Baixar kit de marca (.zip)', making: 'Criando seus arquivos…', ready: 'Baixado',
    contents: ['Logo em SVG e PNG (fundo transparente, até 2048 px)', 'Versões em uma cor, branca e ícone', 'Favicons: .ico, .svg e ícones para Apple e Android', 'Foto de perfil e imagens de capa para redes', 'Paleta com códigos hex e uma combinação de fontes', 'Uma folha de marca de uma página (PDF)'],
    license: 'O logo é seu: use onde quiser, inclusive comercialmente, sem custo. Ele foi feito com IA, então antes de registrar ou imprimir muito, pesquise marcas existentes:', tm: 'Pesquisa de marcas', uspto: 'USPTO (EUA)', kipo: 'KIPRIS (Coreia)', wipo: 'Base Global de Marcas da OMPI',
    sheet: { title: 'Folha de marca', logo: 'Logo', onDark: 'No escuro', oneColour: 'Uma cor', icon: 'Ícone', colours: 'Cores', type: 'Tipografia', heading: 'Títulos', body: 'Texto', license: 'Este logo é seu e pode ser usado comercialmente. Foi feito com IA: pesquise marcas existentes (INPI, USPTO, OMPI) antes de registrar.', made: 'Feito com equipe.im/logo-maker' },
    readme: 'Seu kit de marca de equipe.im/logo-maker\n\nlogo/        o logo (SVG para impressão e web, PNG em vários tamanhos)\nicon/        o ícone quadrado\nfavicon/     coloque na pasta raiz do seu site\nsocial/      foto de perfil e imagens de capa\nbrand/       cores, fontes e a folha de marca\n\nO logo é seu. Foi feito com IA: pesquise marcas existentes antes de registrar.\n',
  },
  cta: { title: 'Crie seu site com este logo', text: 'Seu time da equipe constrói o site com o novo logo, as cores e as fontes desde o primeiro dia. Sem programar.', button: 'Criar meu site', note: 'Começar é grátis. Seu logo vai junto.', idea: 'Um site para {name}: {about}', kitLine: 'Kit de marca (feito com o criador de logo da equipe.im; use como logo desde o primeiro dia, não desenhe outro)' },
  share: { label: 'Compartilhe seu logo', make: 'Gerar link', copy: 'Copiar link', copied: 'Copiado', again: 'Criar outro', pageTitle: 'Um logo feito com a equipe', heading: 'Um logo feito com o criador de logo grátis da equipe', own: 'Crie o seu logo grátis', ownButton: 'Criar meu logo', title: 'Logo da {name}, feito com a equipe', desc: 'O logo da {name}, feito com o criador de logo grátis da equipe. Crie o seu em um minuto.', failed: 'Não conseguimos gerar o link. Tente de novo.' },
  how: { title: 'Como funciona', items: [{ title: 'Conte sobre o negócio', text: 'O nome, o que ele faz e um estilo. Clima e cores são opcionais.' }, { title: 'Receba ideias limpas', text: 'A IA desenha várias direções em vetor. Conferimos cada uma em 16 px e em uma cor e redesenhamos as fracas antes de mostrar.' }, { title: 'Edite, veja e baixe', text: 'Mude fonte, cores e layout de graça, veja numa fachada e num site e baixe o kit de marca completo.' }] },
  faq: { title: 'Perguntas', items: [
    { question: 'É grátis mesmo?', answer: 'Sim. Criar, editar e baixar o kit de marca é grátis, sem marca d’água e sem cadastro. São duas rodadas de ideias com IA por dia, dez com uma conta grátis na equipe. Logos só com o nome são ilimitados.' },
    { question: 'O logo é meu?', answer: 'Sim, você pode usar onde quiser, inclusive comercialmente. Como foi feito com IA, pesquise marcas existentes (INPI no Brasil, USPTO, OMPI) antes de registrar ou imprimir muito.' },
    { question: 'O nome vai sair escrito certo?', answer: 'Sempre. A IA só desenha o símbolo. O nome é composto com uma fonte de verdade no seu aparelho, então nunca sai errado, e você pode trocar fonte e cor de graça.' },
    { question: 'Quais arquivos eu recebo?', answer: 'O logo em SVG e PNG transparente, versões em uma cor e branca, o ícone quadrado, todos os favicons, imagens de perfil e capa para redes, suas cores com códigos hex, uma combinação de fontes e uma folha de marca em PDF.' },
    { question: 'Como vocês conferem os logos?', answer: 'O código confere cada símbolo (nítido em 16 px, funciona em uma cor, poucas cores chapadas, bordas limpas) e um modelo de visão descarta o que é confuso, parece letra ou lembra uma marca conhecida. O que não passa é redesenhado uma vez.' },
    { question: 'Dá para criar um site com ele?', answer: 'Sim. "Crie seu site com este logo" abre um projeto na equipe que já tem seu logo, cores e fontes, então o site que o time faz combina com a sua marca desde o primeiro dia.' },
  ] },
};

const de: LogoCopy = {
  fromNames: 'Das ganze Logo mit diesem Namen erstellen',
  page: { title: 'Logo erstellen kostenlos: KI-Logo-Generator mit Brand-Kit | equipe', desc: 'Erstelle in einer Minute ein Logo für dein Unternehmen. Mehrere saubere Vektor-Entwürfe, dein Name immer richtig geschrieben, echte Vorschauen und kostenloser Download: SVG, PNG, Favicon und Brand-Kit. Ohne Anmeldung.', ogTitle: 'Kostenloser Logo-Generator von equipe', h1: 'Logo kostenlos erstellen', lead: 'Sag uns den Namen deines Unternehmens und was es macht. In etwa einer Minute bekommst du mehrere saubere Logo-Ideen, siehst sie auf Schild, Visitenkarte und Website und lädst die Dateien kostenlos herunter.' },
  form: {
    name: 'Name des Unternehmens', namePh: 'z. B. Maison Hana', needName: 'Noch kein Name? Finde einen', about: 'Was macht es?', aboutPh: 'z. B. Eine koreanisch-französische Bäckerei in Oakland', optional: 'optional',
    style: 'Logo-Stil', styles: { icon: { t: 'Symbol und Name', d: 'Ein Symbol neben deinem Namen' }, wordmark: { t: 'Nur Name', d: 'Dein Name in einer starken Schrift' }, lettermark: { t: 'Initiale', d: 'Dein Anfangsbuchstabe als Symbol' }, emblem: { t: 'Plakette', d: 'Symbol und Name in einem runden Siegel' } },
    mood: 'Stimmung', colours: 'Farben', coloursHint: 'Wähle bis zu drei oder überlass es uns', addColour: 'Farbe hinzufügen', removeColour: 'Farbe entfernen', kind: 'Branche', inspiration: 'Inspiration', inspirationPh: 'z. B. warm und handgemacht wie die alte Eckbäckerei', more: 'Weitere Optionen',
    button: 'Meine Logos erstellen', note: 'Kostenlos, ohne Anmeldung. Zwei Runden am Tag, mehr mit einem kostenlosen Konto.', noteSigned: 'Du bist angemeldet: zehn Runden am Tag.',
    errName: 'Gib zuerst den Namen deines Unternehmens ein.', errTurnstile: 'Wir konnten nicht bestätigen, dass du ein Mensch bist. Bitte versuch es noch einmal.', errRate: 'Das waren die kostenlosen Runden für heute. Melde dich kostenlos bei equipe an für zehn am Tag, oder komm morgen wieder.', errRateSigned: 'Das waren die Runden für heute. Komm morgen wieder.', errBusy: 'Der Logo-Generator ist heute sehr ausgelastet. Logos nur mit Namen funktionieren weiter; versuch Symbole morgen noch einmal.', errFailed: 'Etwas ist schiefgelaufen. Bitte versuch es noch einmal.', signIn: 'Anmelden für mehr',
  },
  moods: { friendly: 'Freundlich', premium: 'Edel', playful: 'Verspielt', modern: 'Modern', classic: 'Klassisch', bold: 'Kräftig', calm: 'Ruhig', natural: 'Natürlich', techy: 'Technisch', handmade: 'Handgemacht' },
  kinds: { cafe: 'Café', bakery: 'Bäckerei', restaurant: 'Restaurant', beauty: 'Beauty', fitness: 'Fitness', shop: 'Shop', app: 'App', agency: 'Agentur', health: 'Gesundheit', consulting: 'Beratung', photo: 'Fotografie', pets: 'Haustiere', education: 'Bildung', home: 'Haus & Garten', other: 'Sonstiges' },
  picker: { hex: 'Hex', done: 'Fertig', presets: 'Vorgeschlagene Farben' },
  progress: ['Dein Unternehmen verstehen', 'Logo-Ideen zeichnen', 'Jede bei 16 px und einfarbig prüfen', 'Schwache neu zeichnen', 'Deinen Namen setzen'],
  progressNote: 'Dauert meist 40 bis 60 Sekunden.',
  result: { title: 'Deine Logo-Ideen', sub: 'Wähle eine zum Bearbeiten. Jedes Symbol hat unsere Prüfungen bestanden: klar bei 16 px, einfarbig nutzbar, keine verirrten Buchstaben.', typeTitle: 'Logos nur mit Namen', typeSub: 'In echter Schrift gesetzt, also frei änderbar.', ai: 'Symbol', type: 'Schrift', more: 'Mehr davon', moreNote: 'Nutzt eine Runde', edit: 'Bearbeiten', left: 'Heute noch {n} Runden', noneLeft: 'Heute keine Runden mehr', ground: 'Hintergrund', light: 'Hell', dark: 'Dunkel', loading: 'Wird geladen…', notFound: 'Wir haben dieses Logo nicht gefunden.', fewer: 'Diesmal haben nur wenige Symbole die Prüfungen bestanden. Die Logos nur mit Namen unten funktionieren immer, oder starte eine weitere Runde.', added: 'Neue Varianten hinzugefügt', variation: 'Variante' },
  editor: { title: 'Logo bearbeiten', back: 'Alle Ideen', layout: 'Anordnung', layouts: { row: 'Nebeneinander', stack: 'Übereinander', name: 'Nur Name', mark: 'Nur Symbol', badge: 'Plakette' }, font: 'Schrift', weight: 'Stärke', weights: { 400: 'Normal', 700: 'Fett', 900: 'Extra fett' }, letters: 'Schreibweise', cases: { as: 'Wie eingegeben', lower: 'kleinbuchstaben', upper: 'GROSSBUCHSTABEN', title: 'Wörter Groß' }, spacing: 'Laufweite', nameColour: 'Farbe des Namens', iconColour: 'Farbe des Symbols', original: 'Original', accent: 'Akzentfarbe' },
  mock: { title: 'So sieht es im Einsatz aus', sub: 'Live-Vorschau, ändert sich beim Bearbeiten.', tab: 'Browser-Tab', phone: 'App-Symbol', card: 'Visitenkarte', sign: 'Ladenschild', social: 'Social-Profil', site: 'Website', nav: ['Angebot', 'Über uns', 'Besuch'], hero: 'Jeden Tag frisch', heroSub: 'Deine Website, gebaut von deinem equipe-Team mit diesem Logo vom ersten Tag an.', cta: 'Jetzt bestellen', role: 'Inhaberin', posts: 'Beiträge', followers: 'Follower', open: 'Heute geöffnet' },
  kit: {
    title: 'Lade dein Brand-Kit herunter', sub: 'Kostenlos, ohne Anmeldung, ohne Wasserzeichen. Auf deinem Gerät erstellt.', download: 'Brand-Kit herunterladen (.zip)', making: 'Dateien werden erstellt…', ready: 'Heruntergeladen',
    contents: ['Logo als SVG und PNG (transparent, bis 2048 px)', 'Einfarbige, weiße und Symbol-Version', 'Favicon-Set: .ico, .svg, Apple- und Android-Icons', 'Profilbild und Titelbilder für Social Media', 'Farbpalette mit Hex-Codes und eine Schriftkombination', 'Ein einseitiges Brand-Sheet (PDF)'],
    license: 'Das Logo gehört dir: nutze es überall, auch kommerziell, kostenlos. Es wurde mit KI erstellt, also prüfe vor einer Anmeldung oder großen Drucken bestehende Marken:', tm: 'Markenrecherche', uspto: 'USPTO (USA)', kipo: 'KIPRIS (Korea)', wipo: 'WIPO Global Brand Database',
    sheet: { title: 'Brand-Sheet', logo: 'Logo', onDark: 'Auf dunkel', oneColour: 'Einfarbig', icon: 'Symbol', colours: 'Farben', type: 'Schrift', heading: 'Überschriften', body: 'Text', license: 'Dieses Logo gehört dir und darf kommerziell genutzt werden. Es wurde mit KI erstellt: prüfe vor einer Anmeldung bestehende Marken (DPMA, USPTO, WIPO).', made: 'Erstellt mit equipe.im/logo-maker' },
    readme: 'Dein Brand-Kit von equipe.im/logo-maker\n\nlogo/        das Logo (SVG für Druck und Web, PNG in mehreren Größen)\nicon/        das quadratische Symbol\nfavicon/     in den Hauptordner deiner Website legen\nsocial/      Profilbild und Titelbilder\nbrand/       Farben, Schriften und das Brand-Sheet\n\nDas Logo gehört dir. Es wurde mit KI erstellt: prüfe vor einer Anmeldung bestehende Marken.\n',
  },
  cta: { title: 'Erstelle deine Website mit diesem Logo', text: 'Dein equipe-Team baut die Website vom ersten Tag an mit deinem neuen Logo, deinen Farben und Schriften. Ohne Programmieren.', button: 'Meine Website erstellen', note: 'Kostenlos starten. Dein Logo kommt mit.', idea: 'Eine Website für {name}: {about}', kitLine: 'Brand-Kit (erstellt mit dem Logo-Generator von equipe.im; vom ersten Tag an als Logo verwenden, kein neues zeichnen)' },
  share: { label: 'Teile dein Logo', make: 'Link zum Teilen erstellen', copy: 'Link kopieren', copied: 'Kopiert', again: 'Noch eins erstellen', pageTitle: 'Ein Logo, erstellt mit equipe', heading: 'Ein Logo aus dem kostenlosen Logo-Generator von equipe', own: 'Erstelle dein eigenes Logo kostenlos', ownButton: 'Mein Logo erstellen', title: 'Logo von {name}, erstellt mit equipe', desc: 'Das Logo von {name}, erstellt mit dem kostenlosen Logo-Generator von equipe. Erstelle deins in einer Minute.', failed: 'Der Link konnte nicht erstellt werden. Bitte versuch es noch einmal.' },
  how: { title: 'So funktioniert es', items: [{ title: 'Erzähl uns davon', text: 'Name, was es macht, und ein Stil. Stimmung und Farben sind optional.' }, { title: 'Saubere Ideen bekommen', text: 'Die KI zeichnet mehrere Richtungen als Vektoren. Jede wird bei 16 px und einfarbig geprüft, schwache werden neu gezeichnet, bevor du sie siehst.' }, { title: 'Bearbeiten, ansehen, herunterladen', text: 'Ändere Schrift, Farben und Anordnung kostenlos, sieh es auf Schild und Website und lade das ganze Brand-Kit herunter.' }] },
  faq: { title: 'Fragen', items: [
    { question: 'Ist der Logo-Generator wirklich kostenlos?', answer: 'Ja. Logos erstellen, bearbeiten und das Brand-Kit herunterladen ist kostenlos, ohne Wasserzeichen und ohne Anmeldung. Du hast zwei Runden KI-Ideen am Tag, zehn mit einem kostenlosen equipe-Konto. Logos nur mit Namen sind unbegrenzt.' },
    { question: 'Gehört mir das Logo?', answer: 'Ja, du kannst es überall nutzen, auch kommerziell. Weil es mit KI erstellt wurde, prüfe vor einer Anmeldung oder großen Drucken bestehende Marken (DPMA in Deutschland, EUIPO, WIPO).' },
    { question: 'Wird mein Name richtig geschrieben?', answer: 'Immer. Die KI zeichnet nur das Symbol. Dein Name wird auf deinem Gerät in einer echten Schrift gesetzt, er kann also nie falsch geschrieben sein, und Schrift und Farbe änderst du kostenlos.' },
    { question: 'Welche Dateien bekomme ich?', answer: 'Das Logo als SVG und transparentes PNG, eine einfarbige und eine weiße Version, das quadratische Symbol, ein komplettes Favicon-Set, Profil- und Titelbilder, deine Farben mit Hex-Codes, eine Schriftkombination und ein einseitiges Brand-Sheet als PDF.' },
    { question: 'Wie prüft ihr die Logos?', answer: 'Code prüft jedes Symbol (klar bei 16 px, einfarbig nutzbar, wenige flache Farben, saubere Kanten), und ein Bildmodell sortiert alles aus, was unklar ist, wie ein Buchstabe aussieht oder einer bekannten Marke ähnelt. Was durchfällt, wird einmal neu gezeichnet.' },
    { question: 'Kann ich damit eine Website bauen?', answer: 'Ja. "Erstelle deine Website mit diesem Logo" startet ein equipe-Projekt, das dein Logo, deine Farben und Schriften schon hat, damit die Website deines Teams vom ersten Tag an zur Marke passt.' },
  ] },
};

const fr: LogoCopy = {
  fromNames: 'Créer le logo complet avec ce nom',
  page: { title: 'Créer un logo gratuit : générateur de logo IA avec kit de marque | equipe', desc: 'Créez le logo de votre entreprise en une minute. Plusieurs idées nettes en vectoriel, votre nom toujours bien écrit, des aperçus réels et un téléchargement gratuit : SVG, PNG, favicon et kit de marque. Sans inscription.', ogTitle: 'Créateur de logo gratuit par equipe', h1: 'Créer un logo gratuit', lead: 'Indiquez le nom de votre activité et ce qu’elle fait. En une minute environ, vous recevez plusieurs idées de logo nettes, vous les voyez sur une enseigne, une carte et un site, et vous téléchargez les fichiers gratuitement.' },
  form: {
    name: 'Nom de l’activité', namePh: 'ex. Maison Hana', needName: 'Pas encore de nom ? Trouvez-en un', about: 'Que fait-elle ?', aboutPh: 'ex. Une boulangerie franco-coréenne à Oakland', optional: 'facultatif',
    style: 'Style de logo', styles: { icon: { t: 'Icône et nom', d: 'Un symbole à côté du nom' }, wordmark: { t: 'Nom seul', d: 'Votre nom dans une typo marquante' }, lettermark: { t: 'Initiale', d: 'Votre première lettre comme symbole' }, emblem: { t: 'Badge', d: 'Symbole et nom dans un sceau rond' } },
    mood: 'Ambiance', colours: 'Couleurs', coloursHint: 'Choisissez-en jusqu’à trois, ou laissez-nous faire', addColour: 'Ajouter une couleur', removeColour: 'Retirer la couleur', kind: 'Type d’activité', inspiration: 'Inspiration', inspirationPh: 'ex. chaleureux et artisanal, comme la boulangerie du coin', more: 'Plus d’options',
    button: 'Créer mes logos', note: 'Gratuit, sans inscription. Deux séries par jour, plus avec un compte gratuit.', noteSigned: 'Vous êtes connecté : dix séries par jour.',
    errName: 'Saisissez d’abord le nom de votre activité.', errTurnstile: 'Impossible de confirmer que vous êtes humain. Réessayez.', errRate: 'Vous avez utilisé les séries gratuites du jour. Connectez-vous à equipe (gratuit) pour en avoir dix par jour, ou revenez demain.', errRateSigned: 'Vous avez utilisé les séries du jour. Revenez demain.', errBusy: 'Le créateur de logo est très sollicité aujourd’hui. Les logos avec le nom seul fonctionnent toujours ; réessayez les icônes demain.', errFailed: 'Un problème est survenu. Réessayez.', signIn: 'Se connecter pour plus',
  },
  moods: { friendly: 'Chaleureux', premium: 'Haut de gamme', playful: 'Ludique', modern: 'Moderne', classic: 'Classique', bold: 'Audacieux', calm: 'Apaisé', natural: 'Naturel', techy: 'Tech', handmade: 'Artisanal' },
  kinds: { cafe: 'Café', bakery: 'Boulangerie', restaurant: 'Restaurant', beauty: 'Beauté', fitness: 'Sport', shop: 'Boutique', app: 'Application', agency: 'Agence', health: 'Santé', consulting: 'Conseil', photo: 'Photo', pets: 'Animaux', education: 'Éducation', home: 'Services à domicile', other: 'Autre' },
  picker: { hex: 'Hex', done: 'OK', presets: 'Couleurs suggérées' },
  progress: ['Comprendre votre activité', 'Dessiner des idées de logo', 'Vérifier chacune à 16 px et en une couleur', 'Redessiner les plus faibles', 'Composer votre nom en typographie'],
  progressNote: 'En général 40 à 60 secondes.',
  result: { title: 'Vos idées de logo', sub: 'Choisissez-en une pour la modifier. Chaque symbole a passé nos vérifications : net à 16 px, utilisable en une couleur, sans lettres parasites.', typeTitle: 'Logos avec le nom seul', typeSub: 'Composés avec une vraie typographie, donc modifiables à volonté.', ai: 'Symbole', type: 'Typo', more: 'Plus comme celui-ci', moreNote: 'Utilise une série', edit: 'Modifier', left: 'Encore {n} séries aujourd’hui', noneLeft: 'Plus de séries aujourd’hui', ground: 'Fond', light: 'Clair', dark: 'Sombre', loading: 'Chargement…', notFound: 'Logo introuvable.', fewer: 'Peu de symboles ont passé nos vérifications cette fois. Les logos avec le nom seul ci-dessous fonctionnent toujours, ou lancez une autre série.', added: 'Nouvelles variantes ajoutées', variation: 'Variante' },
  editor: { title: 'Modifier votre logo', back: 'Toutes les idées', layout: 'Disposition', layouts: { row: 'Côte à côte', stack: 'Empilé', name: 'Nom seul', mark: 'Symbole seul', badge: 'Badge' }, font: 'Police', weight: 'Graisse', weights: { 400: 'Normal', 700: 'Gras', 900: 'Très gras' }, letters: 'Casse', cases: { as: 'Telle quelle', lower: 'minuscules', upper: 'MAJUSCULES', title: 'Initiales En Majuscule' }, spacing: 'Espacement', nameColour: 'Couleur du nom', iconColour: 'Couleur du symbole', original: 'D’origine', accent: 'Couleur d’accent' },
  mock: { title: 'En situation', sub: 'Aperçus en direct, mis à jour pendant que vous modifiez.', tab: 'Onglet du navigateur', phone: 'Icône d’app', card: 'Carte de visite', sign: 'Enseigne', social: 'Profil social', site: 'Site web', nav: ['Carte', 'À propos', 'Venir'], hero: 'Fait maison, chaque jour', heroSub: 'Votre site, construit par votre équipe equipe avec ce logo dès le premier jour.', cta: 'Commander', role: 'Fondatrice', posts: 'publications', followers: 'abonnés', open: 'Ouvert aujourd’hui' },
  kit: {
    title: 'Téléchargez votre kit de marque', sub: 'Gratuit, sans inscription, sans filigrane. Créé sur votre appareil.', download: 'Télécharger le kit de marque (.zip)', making: 'Création des fichiers…', ready: 'Téléchargé',
    contents: ['Logo en SVG et PNG (fond transparent, jusqu’à 2048 px)', 'Versions une couleur, blanche et icône', 'Favicons : .ico, .svg, icônes Apple et Android', 'Photo de profil et images de couverture', 'Palette avec codes hex et un duo de polices', 'Une charte d’une page (PDF)'],
    license: 'Le logo vous appartient : utilisez-le partout, y compris commercialement, sans frais. Il a été créé avec l’IA ; avant de le déposer ou d’imprimer en grande quantité, recherchez les marques existantes :', tm: 'Recherche de marques', uspto: 'USPTO (États-Unis)', kipo: 'KIPRIS (Corée)', wipo: 'Base de données mondiale sur les marques de l’OMPI',
    sheet: { title: 'Charte de marque', logo: 'Logo', onDark: 'Sur fond sombre', oneColour: 'Une couleur', icon: 'Icône', colours: 'Couleurs', type: 'Typographie', heading: 'Titres', body: 'Texte', license: 'Ce logo vous appartient et peut être utilisé commercialement. Il a été créé avec l’IA : recherchez les marques existantes (INPI, USPTO, OMPI) avant de le déposer.', made: 'Créé avec equipe.im/logo-maker' },
    readme: 'Votre kit de marque equipe.im/logo-maker\n\nlogo/        le logo (SVG pour l’impression et le web, PNG en plusieurs tailles)\nicon/        l’icône carrée\nfavicon/     à placer à la racine de votre site\nsocial/      photo de profil et images de couverture\nbrand/       couleurs, polices et charte d’une page\n\nLe logo vous appartient. Il a été créé avec l’IA : recherchez les marques existantes avant de le déposer.\n',
  },
  cta: { title: 'Créez votre site avec ce logo', text: 'Votre équipe equipe construit le site autour de votre nouveau logo, de vos couleurs et polices dès le premier jour. Sans coder.', button: 'Créer mon site', note: 'Gratuit pour commencer. Votre logo vous suit.', idea: 'Un site pour {name} : {about}', kitLine: 'Kit de marque (créé avec le créateur de logo equipe.im ; à utiliser comme logo dès le premier jour, ne pas en dessiner un autre)' },
  share: { label: 'Partagez votre logo', make: 'Créer un lien de partage', copy: 'Copier le lien', copied: 'Copié', again: 'En créer un autre', pageTitle: 'Un logo créé avec equipe', heading: 'Un logo créé avec le créateur de logo gratuit d’equipe', own: 'Créez votre logo gratuitement', ownButton: 'Créer mon logo', title: 'Logo de {name}, créé avec equipe', desc: 'Le logo de {name}, créé avec le créateur de logo gratuit d’equipe. Créez le vôtre en une minute.', failed: 'Impossible de créer le lien. Réessayez.' },
  how: { title: 'Comment ça marche', items: [{ title: 'Parlez-nous de votre activité', text: 'Le nom, ce qu’elle fait et un style. L’ambiance et les couleurs sont facultatives.' }, { title: 'Recevez des idées nettes', text: 'L’IA dessine plusieurs pistes en vectoriel. Chacune est vérifiée à 16 px et en une couleur, et les plus faibles sont redessinées avant de vous être montrées.' }, { title: 'Modifiez, visualisez, téléchargez', text: 'Changez gratuitement la police, les couleurs et la disposition, voyez le rendu sur une enseigne et un site, puis téléchargez tout le kit de marque.' }] },
  faq: { title: 'Questions', items: [
    { question: 'Le créateur de logo est-il vraiment gratuit ?', answer: 'Oui. Créer des logos, les modifier et télécharger le kit de marque est gratuit, sans filigrane ni inscription. Vous avez deux séries d’idées IA par jour, dix avec un compte equipe gratuit. Les logos avec le nom seul sont illimités.' },
    { question: 'Le logo m’appartient-il ?', answer: 'Oui, vous pouvez l’utiliser partout, y compris commercialement. Comme il est créé avec l’IA, recherchez les marques existantes (INPI en France, EUIPO, OMPI) avant de le déposer ou d’imprimer en quantité.' },
    { question: 'Mon nom sera-t-il bien écrit ?', answer: 'Toujours. L’IA ne dessine que le symbole. Votre nom est composé avec une vraie police sur votre appareil : aucune faute possible, et vous changez police et couleur gratuitement.' },
    { question: 'Quels fichiers vais-je recevoir ?', answer: 'Le logo en SVG et PNG transparent, des versions une couleur et blanche, l’icône carrée, un jeu complet de favicons, des images de profil et de couverture, vos couleurs avec codes hex, un duo de polices et une charte d’une page en PDF.' },
    { question: 'Comment vérifiez-vous les logos ?', answer: 'Le code vérifie chaque symbole (net à 16 px, utilisable en une couleur, peu de couleurs en aplat, contours propres) et un modèle de vision écarte ce qui est flou, ressemble à une lettre ou à une marque connue. Ce qui échoue est redessiné une fois.' },
    { question: 'Puis-je créer un site avec ?', answer: 'Oui. « Créez votre site avec ce logo » lance un projet equipe qui contient déjà votre logo, vos couleurs et vos polices : le site de votre équipe colle à votre marque dès le premier jour.' },
  ] },
};

const COPY: Record<LocaleCode, LogoCopy> = { en, ko, ja, 'zh-CN': zh, es, 'pt-BR': ptBR, de, fr };
export const logoCopy = (code: LocaleCode): LogoCopy => COPY[code] ?? en;
