/**
 * Business name generator (/business-name-generator/, a shared result is /business-name-generator/r/<id>/).
 * Runs on platform.equipe.im (cloud platform/src/free-names.js): about ten names for the business the visitor describes,
 * each with a live domain check and the yearly price, and a logo for a name on an explicit click.
 * Name ideas come from a small model (or from code when today's budget is used up); domains from the registrar the app
 * buys through, at the price the person pays there; logos from the logo tool (two options per click, a few a day).
 *
 * {name}, {domain}, {price}, {renew}, {about}, {inPlace}, {n}, {names} are filled in by the page or the platform.
 */
import type { LocaleCode } from '../i18n';

export const NAMES_API = 'https://platform.equipe.im/v1/free/names';
export { TURNSTILE_SITE_KEY } from './aivis';

export const NAME_KINDS = ['cafe', 'bakery', 'restaurant', 'beauty', 'fitness', 'shop', 'app', 'agency', 'health', 'consulting', 'photo', 'pets', 'education', 'home', 'other'] as const;
export const NAME_VIBES = ['friendly', 'premium', 'playful', 'modern', 'classic', 'bold', 'calm', 'natural'] as const;
export type NameKind = (typeof NAME_KINDS)[number];
export type NameVibe = (typeof NAME_VIBES)[number];

/** Sign-up with the name and idea filled in, tagged with where the click came from. */
export const namesStartHref = (idea: string, placement: string) =>
  `https://app.equipe.im/start?idea=${encodeURIComponent(idea)}&utm_source=equipe.im&utm_medium=tool&utm_campaign=business-name-generator&utm_content=${encodeURIComponent(placement)}`;

interface QA { question: string; answer: string }
interface Step { title: string; text: string }

export interface NamesCopy {
  page: { title: string; desc: string; ogTitle: string; h1: string; lead: string };
  form: {
    about: string; aboutPh: string; kind: string; vibe: string; place: string; placePh: string; optional: string;
    /** Only on non-English pages: names in this language, or in English. */
    style: string; styleLocal: string; styleEnglish: string;
    button: string; note: string;
    errAbout: string; errTurnstile: string; errRate: string; errBusy: string; errFailed: string;
  };
  kinds: Record<NameKind, string>;
  vibes: Record<NameVibe, string>;
  progress: [string, string, string];
  progressNote: string;
  result: {
    title: string;
    /** {about} */
    sub: string;
    checked: string;
    available: string;
    comTaken: string;
    noneFree: string;
    unknown: string;
    /** {price} */
    perYear: string;
    /** {price} {n} years */
    perYears: string;
    /** {renew} */
    renews: string;
    more: string;
    priceNote: string;
    logo: string;
    logoMaking: string;
    logoNote: string;
    logoErrRate: string;
    logoErrBudget: string;
    logoErrFailed: string;
    logoAlt: string;
    use: string;
    fromCode: string;
    recheck: string;
    cta: { title: string; text: string; button: string; note: string; idea: string; ideaDomain: string };
    share: { label: string; copy: string; copied: string; again: string };
    notFound: string;
    loading: string;
    registrarDown: string;
  };
  share: { pageTitle: string; title: string; desc: string; heading: string; own: string; ownButton: string };
  how: { title: string; items: [Step, Step, Step] };
  faq: { title: string; items: [QA, QA, QA, QA, QA] };
}

export const NAMES: Partial<Record<LocaleCode, NamesCopy>> & { en: NamesCopy } = {
  en: {
    page: {
      title: 'Business name generator with domain check and logo, free',
      desc: 'Describe your business and get 10 name ideas, each with a live .com check and the real yearly price. Make a logo for the one you like. Free, no sign-up.',
      ogTitle: 'Business name generator',
      h1: 'Find a name for your business, with the domain',
      lead: 'Tell us what you do. You get ten names that fit, whether the .com is free right now and what it costs, and a logo for the one you like.',
    },
    form: {
      about: 'What does your business do?', aboutPh: 'A small sourdough bakery with good coffee',
      kind: 'Type of business', vibe: 'How should it feel?', place: 'City or area', placePh: 'Lisbon', optional: 'optional',
      style: 'Names in', styleLocal: 'English', styleEnglish: 'English',
      button: 'Find names',
      note: 'Free. Domains are checked live with the registrar. Nothing is bought.',
      errAbout: 'Tell us in a few words what your business does.',
      errTurnstile: 'We couldn’t confirm you’re a person. Please try again.',
      errRate: 'You’ve looked up a lot of names today. Please come back tomorrow.',
      errBusy: 'The name finder is very busy right now. Please try again in a few minutes.',
      errFailed: 'Something went wrong on our side. Please try again.',
    },
    kinds: { cafe: 'Café', bakery: 'Bakery', restaurant: 'Restaurant', beauty: 'Beauty or salon', fitness: 'Fitness', shop: 'Shop', app: 'App or software', agency: 'Agency or studio', health: 'Health or clinic', consulting: 'Consulting', photo: 'Photo or video', pets: 'Pets', education: 'Education', home: 'Home services', other: 'Something else' },
    vibes: { friendly: 'Friendly', premium: 'Premium', playful: 'Playful', modern: 'Modern', classic: 'Classic', bold: 'Bold', calm: 'Calm', natural: 'Natural' },
    progress: ['Thinking of names that fit', 'Checking each domain with the registrar', 'Putting the free ones first'],
    progressNote: 'This takes about 15 seconds.',
    result: {
      title: 'Names for your business',
      sub: 'For: {about}',
      checked: 'Domains checked {time}',
      available: 'Available',
      comTaken: '.com taken',
      noneFree: 'No free domain we checked',
      unknown: 'Couldn’t check',
      perYear: '{price}/year',
      perYears: '{price} for {n} years',
      renews: 'renews at {renew}',
      more: 'Also free:',
      priceNote: 'Prices are what you pay if you buy the domain later inside equipe, per year, with setup included (DNS, HTTPS, email). Nothing is bought here.',
      logo: 'Make a logo',
      logoMaking: 'Drawing two logo options…',
      logoNote: 'Two options, made for this name. You can make logos for two names a day.',
      logoErrRate: 'You’ve made today’s free logos. Come back tomorrow, or start with equipe and your designer makes more.',
      logoErrBudget: 'Today’s free logos are all made. Please come back tomorrow.',
      logoErrFailed: 'The logo didn’t come out this time. Please try again.',
      logoAlt: 'Logo option for {name}',
      use: 'Start with this name',
      fromCode: 'Our AI is resting, so these names were put together from your words. Try again later for more creative ones.',
      recheck: 'Check again',
      cta: {
        title: 'Start this business with equipe',
        text: 'equipe is an AI team (a PM, a designer and engineers) that builds your website, sets up the domain and email, and helps you get your first customers. No coding needed.',
        button: 'Start with {name}',
        note: 'Your name and idea are filled in. Buy the domain later in the app, only if you want it.',
        idea: '{name}: {about}{inPlace}',
        ideaDomain: 'Domain I like: {domain}',
      },
      share: { label: 'Share these names', copy: 'Copy link', copied: 'Copied', again: 'Try another idea' },
      notFound: 'These names don’t exist or have expired.',
      loading: 'Loading the names…',
      registrarDown: 'The registrar didn’t answer, so domains weren’t checked this time.',
    },
    share: {
      pageTitle: 'Business name ideas',
      title: '{n} name ideas: {names}',
      desc: 'Name ideas with live domain checks for: {about}. Find yours free on equipe.',
      heading: 'Name ideas someone shared with you',
      own: 'Find names for your own business',
      ownButton: 'Find my names',
    },
    how: {
      title: 'How it works',
      items: [
        { title: 'Describe your business', text: 'A sentence is enough: what you sell, who it’s for, and how it should feel. Add your city if you serve people nearby.' },
        { title: 'See names with their domains', text: 'Ten names, each checked live with the registrar: whether the .com is free right now, and what it costs per year.' },
        { title: 'Make a logo, then start', text: 'Draw a logo for the name you like. Start with equipe and your AI team builds the site on that name.' },
      ],
    },
    faq: {
      title: 'Questions',
      items: [
        { question: 'Is the business name generator free?', answer: 'Yes. Names and domain checks are free and need no sign-up. Logos are free too, for two names a day per person.' },
        { question: 'Are the domains really available?', answer: 'Each domain is checked live with the registrar when you search, and again when you come back later. Availability can change at any moment, so if you love one, don’t wait too long.' },
        { question: 'What does the domain cost?', answer: 'The price shown is what you pay per year if you buy it later inside equipe, and it includes setup: DNS, HTTPS and email for your domain. We show the renewal price too when it’s different, so there are no surprises.' },
        { question: 'Can I trademark a name I find here?', answer: 'We avoid famous brands, but we can’t check trademarks for you. Before you print signs, search your country’s trademark office for the name in your line of business.' },
        { question: 'What happens when I click Start?', answer: 'You create a free equipe account with the name and idea filled in. Your AI team (a PM, a designer and engineers) starts on your website right away. Nothing is charged without your OK.' },
      ],
    },
  },
  ko: {
    page: {
      title: '가게 이름 짓기: 도메인 확인과 로고까지 무료',
      desc: '어떤 사업인지 적으면 이름 10개를 추천하고, 이름마다 .com 도메인이 지금 비어 있는지와 1년 가격을 바로 확인해 드려요. 마음에 드는 이름으로 로고도 만들어 보세요. 무료, 가입 없이.',
      ogTitle: '가게 이름 짓기',
      h1: '가게 이름, 도메인까지 한 번에 찾아요',
      lead: '무슨 일을 하는지 알려 주세요. 잘 어울리는 이름 10개와, 이름마다 .com 도메인이 지금 비어 있는지와 가격을 보여 드려요. 마음에 드는 이름은 로고도 만들 수 있어요.',
    },
    form: {
      about: '어떤 사업인가요?', aboutPh: '커피가 맛있는 작은 사워도우 빵집',
      kind: '업종', vibe: '어떤 느낌이면 좋을까요?', place: '지역', placePh: '성수동', optional: '선택',
      style: '이름 언어', styleLocal: '한국어', styleEnglish: '영어',
      button: '이름 찾기',
      note: '무료예요. 도메인은 등록 기관에 실시간으로 확인하고, 아무것도 구매되지 않아요.',
      errAbout: '어떤 사업인지 몇 단어로 알려 주세요.',
      errTurnstile: '사람인지 확인하지 못했어요. 다시 시도해 주세요.',
      errRate: '오늘은 이름을 많이 찾아보셨어요. 내일 다시 와 주세요.',
      errBusy: '지금 사용하는 분이 많아요. 몇 분 뒤에 다시 시도해 주세요.',
      errFailed: '저희 쪽에 문제가 생겼어요. 다시 시도해 주세요.',
    },
    kinds: { cafe: '카페', bakery: '빵집', restaurant: '음식점', beauty: '미용·뷰티', fitness: '운동·피트니스', shop: '쇼핑몰·가게', app: '앱·소프트웨어', agency: '에이전시·스튜디오', health: '병원·건강', consulting: '컨설팅', photo: '사진·영상', pets: '반려동물', education: '교육·학원', home: '생활 서비스', other: '기타' },
    vibes: { friendly: '친근한', premium: '고급스러운', playful: '재미있는', modern: '세련된', classic: '클래식한', bold: '강렬한', calm: '차분한', natural: '자연스러운' },
    progress: ['어울리는 이름을 고르고 있어요', '도메인을 하나씩 확인하고 있어요', '비어 있는 이름을 앞으로 모으고 있어요'],
    progressNote: '15초쯤 걸려요.',
    result: {
      title: '추천 이름',
      sub: '사업: {about}',
      checked: '도메인 확인 {time}',
      available: '사용 가능',
      comTaken: '.com은 사용 중',
      noneFree: '확인한 도메인은 모두 사용 중',
      unknown: '확인하지 못함',
      perYear: '1년 {price}',
      perYears: '{n}년 {price}',
      renews: '갱신 시 {renew}',
      more: '이것도 비어 있어요:',
      priceNote: '가격은 나중에 equipe 안에서 도메인을 살 때 내는 1년 금액이에요. DNS, HTTPS, 이메일 설정이 포함돼요. 여기서는 아무것도 구매되지 않아요.',
      logo: '로고 만들기',
      logoMaking: '로고 시안 2개를 그리고 있어요…',
      logoNote: '이 이름을 위해 만든 시안 2개예요. 로고는 하루에 이름 2개까지 만들 수 있어요.',
      logoErrRate: '오늘의 무료 로고를 다 만드셨어요. 내일 다시 오시거나, equipe로 시작하면 디자이너가 더 만들어 드려요.',
      logoErrBudget: '오늘 준비된 무료 로고가 모두 나갔어요. 내일 다시 와 주세요.',
      logoErrFailed: '이번에는 로고가 잘 나오지 않았어요. 다시 시도해 주세요.',
      logoAlt: '{name} 로고 시안',
      use: '이 이름으로 시작하기',
      fromCode: '지금은 AI가 쉬고 있어서 적어 주신 단어로 이름을 만들었어요. 조금 뒤에 다시 하면 더 다양한 이름을 볼 수 있어요.',
      recheck: '다시 확인',
      cta: {
        title: '이 사업, equipe와 시작해 보세요',
        text: 'equipe는 PM, 디자이너, 엔지니어로 이뤄진 AI 팀이에요. 홈페이지를 만들고, 도메인과 이메일을 연결하고, 첫 손님을 모으는 일까지 도와드려요. 코딩은 필요 없어요.',
        button: '‘{name}’ 이름으로 시작하기',
        note: '이름과 아이디어가 미리 채워져요. 도메인은 원하실 때 앱에서 사면 돼요.',
        idea: '{name}: {about}{inPlace}',
        ideaDomain: '마음에 드는 도메인: {domain}',
      },
      share: { label: '이 이름들 공유하기', copy: '링크 복사', copied: '복사했어요', again: '다른 아이디어로 찾기' },
      notFound: '이 결과가 없거나 만료됐어요.',
      loading: '이름을 불러오고 있어요…',
      registrarDown: '등록 기관이 응답하지 않아서 이번에는 도메인을 확인하지 못했어요.',
    },
    share: {
      pageTitle: '가게 이름 추천',
      title: '이름 추천 {n}개: {names}',
      desc: '이름 추천과 도메인 확인 결과예요. 사업: {about}. equipe에서 무료로 찾아보세요.',
      heading: '누군가 공유한 이름 추천이에요',
      own: '내 사업 이름도 찾아보세요',
      ownButton: '내 이름 찾기',
    },
    how: {
      title: '이렇게 써요',
      items: [
        { title: '사업을 한 문장으로', text: '무엇을 팔고, 누구를 위한 곳이고, 어떤 느낌이면 좋을지면 충분해요. 동네 손님이 중요하면 지역도 적어 주세요.' },
        { title: '이름과 도메인을 함께', text: '이름 10개를 등록 기관에 실시간으로 확인해요. .com이 지금 비어 있는지, 1년에 얼마인지 바로 보여요.' },
        { title: '로고 만들고 시작하기', text: '마음에 드는 이름으로 로고를 그려 보세요. equipe로 시작하면 AI 팀이 그 이름으로 홈페이지를 만들어요.' },
      ],
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        { question: '정말 무료인가요?', answer: '네. 이름 추천과 도메인 확인은 무료이고 가입도 필요 없어요. 로고도 한 사람당 하루에 이름 2개까지 무료로 만들 수 있어요.' },
        { question: '도메인이 진짜 비어 있나요?', answer: '검색할 때마다, 그리고 나중에 다시 볼 때도 등록 기관에 실시간으로 확인해요. 다만 언제든 다른 사람이 살 수 있으니, 마음에 드는 이름이 있다면 너무 오래 기다리지 마세요.' },
        { question: '도메인은 얼마인가요?', answer: '보이는 가격은 나중에 equipe 안에서 살 때 내는 1년 금액이고, DNS, HTTPS, 도메인 이메일 설정이 포함돼요. 갱신 가격이 다르면 함께 보여 드려서 나중에 놀랄 일이 없어요.' },
        { question: '여기서 찾은 이름으로 상표 등록을 할 수 있나요?', answer: '유명 브랜드는 피하도록 하지만, 상표 확인까지 해 드리지는 못해요. 간판을 만들기 전에 특허청 상표 검색에서 같은 업종에 같은 이름이 있는지 꼭 확인해 주세요.' },
        { question: '시작하기를 누르면 어떻게 되나요?', answer: '이름과 아이디어가 채워진 채로 무료 equipe 계정을 만들어요. AI 팀(PM, 디자이너, 엔지니어)이 바로 홈페이지 작업을 시작해요. 동의 없이 결제되는 일은 없어요.' },
      ],
    },
  },
  ja: {
    page: {
      title: 'お店の名前を考える無料ツール：ドメイン確認とロゴ付き',
      desc: 'どんなお店かを書くと、名前の候補を10個提案。名前ごとに .com が今空いているか、1年の料金もその場で確認できます。気に入った名前でロゴも作れます。無料・登録不要。',
      ogTitle: 'お店の名前ジェネレーター',
      h1: 'お店の名前を、ドメインと一緒に見つける',
      lead: 'どんな事業かを教えてください。合う名前を10個と、それぞれの .com が今空いているか、料金はいくらかをお見せします。気に入った名前はロゴも作れます。',
    },
    form: {
      about: 'どんなお店・事業ですか？', aboutPh: 'コーヒーもおいしい小さなサワードウのパン屋',
      kind: '業種', vibe: 'どんな雰囲気にしたいですか？', place: '地域', placePh: '吉祥寺', optional: '任意',
      style: '名前の言語', styleLocal: '日本語', styleEnglish: '英語',
      button: '名前を探す',
      note: '無料です。ドメインはレジストラにリアルタイムで確認します。購入は一切されません。',
      errAbout: 'どんな事業か、ひとことで教えてください。',
      errTurnstile: '確認がうまくいきませんでした。もう一度お試しください。',
      errRate: '今日はたくさん検索されました。また明日お試しください。',
      errBusy: 'ただいま混み合っています。数分後にもう一度お試しください。',
      errFailed: 'こちら側で問題が起きました。もう一度お試しください。',
    },
    kinds: { cafe: 'カフェ', bakery: 'パン屋', restaurant: '飲食店', beauty: '美容・サロン', fitness: 'フィットネス', shop: 'ショップ', app: 'アプリ・ソフト', agency: '制作会社・スタジオ', health: '医療・健康', consulting: 'コンサル', photo: '写真・映像', pets: 'ペット', education: '教育・教室', home: '暮らしのサービス', other: 'その他' },
    vibes: { friendly: '親しみやすい', premium: '上質', playful: '遊び心', modern: 'モダン', classic: 'クラシック', bold: '力強い', calm: '落ち着いた', natural: 'ナチュラル' },
    progress: ['合う名前を考えています', 'ドメインを一つずつ確認しています', '空いている名前を前に並べています'],
    progressNote: '15秒ほどかかります。',
    result: {
      title: 'おすすめの名前',
      sub: '事業：{about}',
      checked: 'ドメイン確認 {time}',
      available: '取得できます',
      comTaken: '.com は使用中',
      noneFree: '確認したドメインはすべて使用中',
      unknown: '確認できませんでした',
      perYear: '年 {price}',
      perYears: '{n}年で {price}',
      renews: '更新時 {renew}',
      more: 'こちらも空いています：',
      priceNote: '料金は、あとで equipe の中でドメインを買うときの1年あたりの金額です。DNS・HTTPS・メールの設定込み。ここでは何も購入されません。',
      logo: 'ロゴを作る',
      logoMaking: 'ロゴ案を2つ描いています…',
      logoNote: 'この名前のために作った2案です。ロゴは1日に2つの名前まで作れます。',
      logoErrRate: '今日の無料ロゴはすべて作りました。また明日どうぞ。equipe で始めれば、デザイナーがさらに作ります。',
      logoErrBudget: '今日の無料ロゴはすべて出ました。また明日お試しください。',
      logoErrFailed: '今回はうまく描けませんでした。もう一度お試しください。',
      logoAlt: '{name} のロゴ案',
      use: 'この名前で始める',
      fromCode: 'ただいま AI が休んでいるため、入力された言葉から名前を作りました。少し時間をおくと、もっと多彩な名前が出ます。',
      recheck: 'もう一度確認',
      cta: {
        title: 'この事業を equipe で始めましょう',
        text: 'equipe は PM・デザイナー・エンジニアがそろった AI チームです。ウェブサイトを作り、ドメインとメールをつなぎ、最初のお客さま集めまで手伝います。コーディングは不要です。',
        button: '{name} で始める',
        note: '名前とアイデアは入力済みです。ドメインは必要なときにアプリで買えます。',
        idea: '{name}：{about}{inPlace}',
        ideaDomain: '気に入ったドメイン：{domain}',
      },
      share: { label: 'この名前をシェア', copy: 'リンクをコピー', copied: 'コピーしました', again: '別のアイデアで探す' },
      notFound: 'この結果は見つからないか、期限が切れています。',
      loading: '名前を読み込んでいます…',
      registrarDown: 'レジストラが応答しなかったため、今回はドメインを確認できませんでした。',
    },
    share: {
      pageTitle: 'お店の名前の候補',
      title: '名前の候補 {n} 個：{names}',
      desc: '「{about}」の名前候補とドメイン確認の結果です。equipe で無料で探せます。',
      heading: 'シェアされた名前の候補です',
      own: '自分の事業の名前も探してみましょう',
      ownButton: '名前を探す',
    },
    how: {
      title: '使い方',
      items: [
        { title: '事業をひとことで', text: '何を売るか、誰のためか、どんな雰囲気か。それだけで大丈夫です。地元のお客さま向けなら地域も入れてください。' },
        { title: '名前とドメインを一緒に', text: '10個の名前をレジストラにリアルタイムで確認。.com が今空いているか、年いくらかがすぐわかります。' },
        { title: 'ロゴを作って、始める', text: '気に入った名前でロゴを描いてみましょう。equipe で始めれば、AI チームがその名前でサイトを作ります。' },
      ],
    },
    faq: {
      title: 'よくある質問',
      items: [
        { question: '本当に無料ですか？', answer: 'はい。名前の提案とドメイン確認は無料で、登録も不要です。ロゴも1人1日2つの名前まで無料で作れます。' },
        { question: 'ドメインは本当に空いていますか？', answer: '検索のたびに、また後で見直すときにも、レジストラにリアルタイムで確認しています。ただし空き状況はいつでも変わるので、気に入ったものがあれば早めに。' },
        { question: 'ドメインの料金は？', answer: '表示は、あとで equipe の中で買うときの1年あたりの金額で、DNS・HTTPS・ドメインメールの設定込みです。更新料金が違う場合はそれも表示します。' },
        { question: 'ここで見つけた名前を商標登録できますか？', answer: '有名ブランドは避けていますが、商標の確認まではできません。看板を作る前に、特許庁の商標検索で同じ業種に同じ名前がないか確認してください。' },
        { question: '「始める」を押すとどうなりますか？', answer: '名前とアイデアが入った状態で、無料の equipe アカウントを作ります。AI チーム（PM・デザイナー・エンジニア）がすぐにサイト作りを始めます。同意なく課金されることはありません。' },
      ],
    },
  },
  'zh-CN': {
    page: {
      title: '免费店铺起名工具：查域名，做 Logo',
      desc: '描述你的生意，获得 10 个名字建议，每个都实时查询 .com 是否可注册以及每年价格。喜欢哪个，就为它做个 Logo。免费，无需注册。',
      ogTitle: '店铺起名工具',
      h1: '给你的生意起个名字，连域名一起找',
      lead: '告诉我们你做什么。你会得到 10 个合适的名字，看到每个 .com 现在是否可注册、多少钱，还能为喜欢的名字做个 Logo。',
    },
    form: {
      about: '你的生意是做什么的？', aboutPh: '一家咖啡也很好喝的小酸面包店',
      kind: '行业', vibe: '想要什么感觉？', place: '城市或地区', placePh: '杭州', optional: '可选',
      style: '名字语言', styleLocal: '中文', styleEnglish: '英文',
      button: '找名字',
      note: '免费。域名向注册商实时查询，不会购买任何东西。',
      errAbout: '请用几个词说说你的生意是做什么的。',
      errTurnstile: '我们没能确认你是真人，请再试一次。',
      errRate: '你今天已经找了很多名字，请明天再来。',
      errBusy: '现在使用的人很多，请几分钟后再试。',
      errFailed: '我们这边出了点问题，请再试一次。',
    },
    kinds: { cafe: '咖啡店', bakery: '面包店', restaurant: '餐厅', beauty: '美容美发', fitness: '健身', shop: '商店', app: '应用或软件', agency: '工作室或代理', health: '诊所或健康', consulting: '咨询', photo: '摄影或视频', pets: '宠物', education: '教育培训', home: '家政服务', other: '其他' },
    vibes: { friendly: '亲切', premium: '高端', playful: '有趣', modern: '现代', classic: '经典', bold: '大胆', calm: '沉静', natural: '自然' },
    progress: ['正在想合适的名字', '正在逐个查询域名', '把可注册的排在前面'],
    progressNote: '大约需要 15 秒。',
    result: {
      title: '推荐的名字',
      sub: '生意：{about}',
      checked: '域名查询于 {time}',
      available: '可注册',
      comTaken: '.com 已被注册',
      noneFree: '查询的域名都已被注册',
      unknown: '未能查询',
      perYear: '每年 {price}',
      perYears: '{n} 年 {price}',
      renews: '续费 {renew}',
      more: '这些也可注册：',
      priceNote: '价格是以后在 equipe 里购买该域名时每年支付的金额，含 DNS、HTTPS 和邮箱设置。这里不会购买任何东西。',
      logo: '做个 Logo',
      logoMaking: '正在画两个 Logo 方案…',
      logoNote: '为这个名字做的两个方案。每天可以为两个名字做 Logo。',
      logoErrRate: '今天的免费 Logo 已经做完了。明天再来，或用 equipe 开始，让设计师为你做更多。',
      logoErrBudget: '今天的免费 Logo 已经全部送出，请明天再来。',
      logoErrFailed: '这次 Logo 没画好，请再试一次。',
      logoAlt: '{name} 的 Logo 方案',
      use: '用这个名字开始',
      fromCode: '我们的 AI 正在休息，这些名字是根据你的描述组合出来的。稍后再试，会有更有创意的名字。',
      recheck: '重新查询',
      cta: {
        title: '用 equipe 开始这门生意',
        text: 'equipe 是一支 AI 团队（产品经理、设计师和工程师），为你做网站、连好域名和邮箱，并帮你找到第一批顾客。无需写代码。',
        button: '用 {name} 开始',
        note: '名字和想法已经帮你填好。域名以后需要时在应用里买就行。',
        idea: '{name}：{about}{inPlace}',
        ideaDomain: '我喜欢的域名：{domain}',
      },
      share: { label: '分享这些名字', copy: '复制链接', copied: '已复制', again: '换个想法再找' },
      notFound: '这个结果不存在或已过期。',
      loading: '正在加载名字…',
      registrarDown: '注册商没有响应，这次没能查询域名。',
    },
    share: {
      pageTitle: '店铺名字建议',
      title: '{n} 个名字建议：{names}',
      desc: '为「{about}」找的名字和域名查询结果。在 equipe 免费找你的名字。',
      heading: '有人和你分享了这些名字',
      own: '也为你的生意找个名字',
      ownButton: '找我的名字',
    },
    how: {
      title: '怎么用',
      items: [
        { title: '一句话描述生意', text: '卖什么、给谁、想要什么感觉，就够了。如果做本地生意，再加上城市。' },
        { title: '名字和域名一起看', text: '10 个名字都向注册商实时查询：.com 现在是否可注册，每年多少钱。' },
        { title: '做 Logo，然后开始', text: '为喜欢的名字画个 Logo。用 equipe 开始，AI 团队会用这个名字做你的网站。' },
      ],
    },
    faq: {
      title: '常见问题',
      items: [
        { question: '真的免费吗？', answer: '是的。起名和查域名都免费，也不用注册。Logo 也免费，每人每天可以为两个名字做。' },
        { question: '域名真的可以注册吗？', answer: '每次搜索、以及之后再看时，都会向注册商实时查询。但可注册状态随时会变，喜欢的话别等太久。' },
        { question: '域名多少钱？', answer: '显示的是以后在 equipe 里购买时每年的价格，含 DNS、HTTPS 和域名邮箱设置。续费价格不同时也会一起显示。' },
        { question: '这里找到的名字可以注册商标吗？', answer: '我们会避开知名品牌，但无法替你查商标。做招牌之前，请在当地商标局查询同行业是否已有相同名字。' },
        { question: '点「开始」之后会怎样？', answer: '你会创建一个免费的 equipe 账号，名字和想法都已填好。你的 AI 团队（产品经理、设计师和工程师）会马上开始做网站。未经你同意不会扣费。' },
      ],
    },
  },
  es: {
    page: {
      title: 'Generador de nombres para negocios, con dominio y logo, gratis',
      desc: 'Describe tu negocio y recibe 10 ideas de nombre, cada una con el .com comprobado al momento y su precio anual real. Crea un logo para el que más te guste. Gratis, sin registro.',
      ogTitle: 'Generador de nombres para negocios',
      h1: 'Encuentra un nombre para tu negocio, con su dominio',
      lead: 'Cuéntanos a qué te dedicas. Te damos diez nombres que encajan, si el .com está libre ahora mismo y cuánto cuesta, y un logo para el que te guste.',
    },
    form: {
      about: '¿A qué se dedica tu negocio?', aboutPh: 'Una pequeña panadería de masa madre con buen café',
      kind: 'Tipo de negocio', vibe: '¿Cómo quieres que se sienta?', place: 'Ciudad o zona', placePh: 'Valencia', optional: 'opcional',
      style: 'Nombres en', styleLocal: 'Español', styleEnglish: 'Inglés',
      button: 'Buscar nombres',
      note: 'Gratis. Los dominios se comprueban al momento con el registrador. No se compra nada.',
      errAbout: 'Cuéntanos en pocas palabras a qué se dedica tu negocio.',
      errTurnstile: 'No pudimos confirmar que eres una persona. Inténtalo de nuevo.',
      errRate: 'Hoy ya has buscado muchos nombres. Vuelve mañana.',
      errBusy: 'Hay mucha gente usándolo ahora mismo. Inténtalo en unos minutos.',
      errFailed: 'Algo falló de nuestro lado. Inténtalo de nuevo.',
    },
    kinds: { cafe: 'Cafetería', bakery: 'Panadería', restaurant: 'Restaurante', beauty: 'Belleza o salón', fitness: 'Fitness', shop: 'Tienda', app: 'App o software', agency: 'Agencia o estudio', health: 'Salud o clínica', consulting: 'Consultoría', photo: 'Foto o vídeo', pets: 'Mascotas', education: 'Educación', home: 'Servicios del hogar', other: 'Otro' },
    vibes: { friendly: 'Cercano', premium: 'Premium', playful: 'Divertido', modern: 'Moderno', classic: 'Clásico', bold: 'Atrevido', calm: 'Sereno', natural: 'Natural' },
    progress: ['Pensando nombres que encajen', 'Comprobando cada dominio con el registrador', 'Poniendo primero los libres'],
    progressNote: 'Tarda unos 15 segundos.',
    result: {
      title: 'Nombres para tu negocio',
      sub: 'Para: {about}',
      checked: 'Dominios comprobados {time}',
      available: 'Disponible',
      comTaken: '.com ocupado',
      noneFree: 'Ningún dominio comprobado está libre',
      unknown: 'No se pudo comprobar',
      perYear: '{price}/año',
      perYears: '{price} por {n} años',
      renews: 'renueva a {renew}',
      more: 'También libres:',
      priceNote: 'Los precios son lo que pagas al año si compras el dominio más adelante dentro de equipe, con la configuración incluida (DNS, HTTPS, correo). Aquí no se compra nada.',
      logo: 'Crear un logo',
      logoMaking: 'Dibujando dos opciones de logo…',
      logoNote: 'Dos opciones hechas para este nombre. Puedes crear logos para dos nombres al día.',
      logoErrRate: 'Ya creaste los logos gratis de hoy. Vuelve mañana, o empieza con equipe y tu diseñador hará más.',
      logoErrBudget: 'Los logos gratis de hoy ya se agotaron. Vuelve mañana.',
      logoErrFailed: 'Esta vez el logo no salió bien. Inténtalo de nuevo.',
      logoAlt: 'Opción de logo para {name}',
      use: 'Empezar con este nombre',
      fromCode: 'Nuestra IA está descansando, así que armamos estos nombres con tus palabras. Inténtalo más tarde para ideas más creativas.',
      recheck: 'Volver a comprobar',
      cta: {
        title: 'Empieza este negocio con equipe',
        text: 'equipe es un equipo de IA (un PM, un diseñador e ingenieros) que crea tu web, conecta el dominio y el correo, y te ayuda a conseguir tus primeros clientes. Sin programar.',
        button: 'Empezar con {name}',
        note: 'Tu nombre y tu idea ya van rellenados. Compra el dominio después en la app, solo si lo quieres.',
        idea: '{name}: {about}{inPlace}',
        ideaDomain: 'Dominio que me gusta: {domain}',
      },
      share: { label: 'Compartir estos nombres', copy: 'Copiar enlace', copied: 'Copiado', again: 'Probar otra idea' },
      notFound: 'Estos nombres no existen o han caducado.',
      loading: 'Cargando los nombres…',
      registrarDown: 'El registrador no respondió, así que esta vez no se comprobaron los dominios.',
    },
    share: {
      pageTitle: 'Ideas de nombre para un negocio',
      title: '{n} ideas de nombre: {names}',
      desc: 'Ideas de nombre con dominios comprobados para: {about}. Encuentra el tuyo gratis en equipe.',
      heading: 'Ideas de nombre que alguien compartió contigo',
      own: 'Busca nombres para tu propio negocio',
      ownButton: 'Buscar mis nombres',
    },
    how: {
      title: 'Cómo funciona',
      items: [
        { title: 'Describe tu negocio', text: 'Basta una frase: qué vendes, para quién y cómo quieres que se sienta. Añade tu ciudad si atiendes a gente cercana.' },
        { title: 'Mira nombres con su dominio', text: 'Diez nombres, cada uno comprobado al momento con el registrador: si el .com está libre ahora y cuánto cuesta al año.' },
        { title: 'Crea un logo y empieza', text: 'Dibuja un logo para el nombre que te guste. Empieza con equipe y tu equipo de IA crea la web con ese nombre.' },
      ],
    },
    faq: {
      title: 'Preguntas',
      items: [
        { question: '¿El generador de nombres es gratis?', answer: 'Sí. Los nombres y la comprobación de dominios son gratis y no necesitas registrarte. Los logos también, para dos nombres al día por persona.' },
        { question: '¿Los dominios están realmente libres?', answer: 'Cada dominio se comprueba al momento con el registrador cuando buscas, y otra vez cuando vuelves. La disponibilidad puede cambiar en cualquier momento, así que si te encanta uno, no esperes mucho.' },
        { question: '¿Cuánto cuesta el dominio?', answer: 'El precio es lo que pagas al año si lo compras después dentro de equipe, con la configuración incluida: DNS, HTTPS y correo con tu dominio. Si la renovación cuesta distinto, también lo mostramos.' },
        { question: '¿Puedo registrar como marca un nombre de aquí?', answer: 'Evitamos marcas famosas, pero no podemos comprobar marcas registradas por ti. Antes de imprimir carteles, busca el nombre en la oficina de marcas de tu país para tu sector.' },
        { question: '¿Qué pasa al pulsar Empezar?', answer: 'Creas una cuenta gratis de equipe con el nombre y la idea ya rellenados. Tu equipo de IA (un PM, un diseñador e ingenieros) empieza tu web enseguida. No se cobra nada sin tu permiso.' },
      ],
    },
  },
  'pt-BR': {
    page: {
      title: 'Gerador de nomes para negócios, com domínio e logo, grátis',
      desc: 'Descreva seu negócio e receba 10 ideias de nome, cada uma com o .com verificado na hora e o preço anual real. Crie um logo para o que você mais gostar. Grátis, sem cadastro.',
      ogTitle: 'Gerador de nomes para negócios',
      h1: 'Encontre um nome para o seu negócio, com o domínio',
      lead: 'Conte o que você faz. Você recebe dez nomes que combinam, vê se o .com está livre agora e quanto custa, e cria um logo para o que gostar.',
    },
    form: {
      about: 'O que o seu negócio faz?', aboutPh: 'Uma pequena padaria de fermentação natural com café bom',
      kind: 'Tipo de negócio', vibe: 'Qual sensação ele deve passar?', place: 'Cidade ou região', placePh: 'Curitiba', optional: 'opcional',
      style: 'Nomes em', styleLocal: 'Português', styleEnglish: 'Inglês',
      button: 'Encontrar nomes',
      note: 'Grátis. Os domínios são verificados na hora com o registrador. Nada é comprado.',
      errAbout: 'Conte em poucas palavras o que o seu negócio faz.',
      errTurnstile: 'Não conseguimos confirmar que você é uma pessoa. Tente de novo.',
      errRate: 'Você já buscou muitos nomes hoje. Volte amanhã.',
      errBusy: 'Muita gente usando agora. Tente de novo em alguns minutos.',
      errFailed: 'Algo deu errado do nosso lado. Tente de novo.',
    },
    kinds: { cafe: 'Cafeteria', bakery: 'Padaria', restaurant: 'Restaurante', beauty: 'Beleza ou salão', fitness: 'Fitness', shop: 'Loja', app: 'App ou software', agency: 'Agência ou estúdio', health: 'Saúde ou clínica', consulting: 'Consultoria', photo: 'Foto ou vídeo', pets: 'Pets', education: 'Educação', home: 'Serviços para casa', other: 'Outro' },
    vibes: { friendly: 'Acolhedor', premium: 'Premium', playful: 'Divertido', modern: 'Moderno', classic: 'Clássico', bold: 'Ousado', calm: 'Tranquilo', natural: 'Natural' },
    progress: ['Pensando em nomes que combinam', 'Verificando cada domínio com o registrador', 'Colocando os livres primeiro'],
    progressNote: 'Leva uns 15 segundos.',
    result: {
      title: 'Nomes para o seu negócio',
      sub: 'Para: {about}',
      checked: 'Domínios verificados {time}',
      available: 'Disponível',
      comTaken: '.com ocupado',
      noneFree: 'Nenhum domínio verificado está livre',
      unknown: 'Não foi possível verificar',
      perYear: '{price}/ano',
      perYears: '{price} por {n} anos',
      renews: 'renova por {renew}',
      more: 'Também livres:',
      priceNote: 'Os preços são o que você paga por ano se comprar o domínio depois dentro do equipe, com a configuração incluída (DNS, HTTPS, e-mail). Nada é comprado aqui.',
      logo: 'Criar um logo',
      logoMaking: 'Desenhando duas opções de logo…',
      logoNote: 'Duas opções feitas para este nome. Você pode criar logos para dois nomes por dia.',
      logoErrRate: 'Você já criou os logos grátis de hoje. Volte amanhã, ou comece com o equipe e seu designer faz mais.',
      logoErrBudget: 'Os logos grátis de hoje acabaram. Volte amanhã.',
      logoErrFailed: 'O logo não saiu bem desta vez. Tente de novo.',
      logoAlt: 'Opção de logo para {name}',
      use: 'Começar com este nome',
      fromCode: 'Nossa IA está descansando, então montamos estes nomes com as suas palavras. Tente mais tarde para ideias mais criativas.',
      recheck: 'Verificar de novo',
      cta: {
        title: 'Comece este negócio com o equipe',
        text: 'O equipe é um time de IA (um PM, um designer e engenheiros) que cria seu site, conecta o domínio e o e-mail e ajuda você a conseguir os primeiros clientes. Sem programar.',
        button: 'Começar com {name}',
        note: 'Seu nome e sua ideia já vão preenchidos. Compre o domínio depois no app, só se quiser.',
        idea: '{name}: {about}{inPlace}',
        ideaDomain: 'Domínio que eu gostei: {domain}',
      },
      share: { label: 'Compartilhar estes nomes', copy: 'Copiar link', copied: 'Copiado', again: 'Tentar outra ideia' },
      notFound: 'Estes nomes não existem ou expiraram.',
      loading: 'Carregando os nomes…',
      registrarDown: 'O registrador não respondeu, então os domínios não foram verificados desta vez.',
    },
    share: {
      pageTitle: 'Ideias de nome para negócio',
      title: '{n} ideias de nome: {names}',
      desc: 'Ideias de nome com domínios verificados para: {about}. Encontre o seu grátis no equipe.',
      heading: 'Ideias de nome que alguém compartilhou com você',
      own: 'Encontre nomes para o seu negócio',
      ownButton: 'Encontrar meus nomes',
    },
    how: {
      title: 'Como funciona',
      items: [
        { title: 'Descreva seu negócio', text: 'Uma frase basta: o que você vende, para quem e qual sensação quer passar. Coloque a cidade se atende gente da região.' },
        { title: 'Veja nomes com domínio', text: 'Dez nomes, cada um verificado na hora com o registrador: se o .com está livre agora e quanto custa por ano.' },
        { title: 'Crie um logo e comece', text: 'Desenhe um logo para o nome que gostar. Comece com o equipe e seu time de IA cria o site com esse nome.' },
      ],
    },
    faq: {
      title: 'Perguntas',
      items: [
        { question: 'O gerador de nomes é grátis?', answer: 'Sim. Nomes e verificação de domínios são grátis e não precisam de cadastro. Os logos também, para dois nomes por dia por pessoa.' },
        { question: 'Os domínios estão mesmo livres?', answer: 'Cada domínio é verificado na hora com o registrador quando você busca, e de novo quando volta. A disponibilidade pode mudar a qualquer momento, então se amar um, não espere muito.' },
        { question: 'Quanto custa o domínio?', answer: 'O preço é o que você paga por ano se comprar depois dentro do equipe, com a configuração incluída: DNS, HTTPS e e-mail no seu domínio. Se a renovação custar diferente, mostramos também.' },
        { question: 'Posso registrar como marca um nome daqui?', answer: 'Evitamos marcas famosas, mas não conseguimos checar marcas por você. Antes de imprimir a fachada, pesquise o nome no órgão de marcas do seu país (no Brasil, o INPI) para o seu ramo.' },
        { question: 'O que acontece ao clicar em Começar?', answer: 'Você cria uma conta grátis no equipe com o nome e a ideia preenchidos. Seu time de IA (um PM, um designer e engenheiros) começa o site na hora. Nada é cobrado sem o seu OK.' },
      ],
    },
  },
  de: {
    page: {
      title: 'Firmennamen-Generator mit Domain-Check und Logo, kostenlos',
      desc: 'Beschreib dein Unternehmen und bekomm 10 Namensideen, jeweils mit Live-Check der .com-Domain und dem echten Jahrespreis. Erstell ein Logo für deinen Favoriten. Kostenlos, ohne Anmeldung.',
      ogTitle: 'Firmennamen-Generator',
      h1: 'Finde einen Namen für dein Unternehmen, mit Domain',
      lead: 'Erzähl uns, was du machst. Du bekommst zehn passende Namen, siehst, ob die .com gerade frei ist und was sie kostet, und kannst für deinen Favoriten ein Logo erstellen.',
    },
    form: {
      about: 'Was macht dein Unternehmen?', aboutPh: 'Eine kleine Sauerteig-Bäckerei mit gutem Kaffee',
      kind: 'Branche', vibe: 'Wie soll es wirken?', place: 'Stadt oder Region', placePh: 'Leipzig', optional: 'optional',
      style: 'Namen auf', styleLocal: 'Deutsch', styleEnglish: 'Englisch',
      button: 'Namen finden',
      note: 'Kostenlos. Domains werden live beim Registrar geprüft. Es wird nichts gekauft.',
      errAbout: 'Beschreib in ein paar Worten, was dein Unternehmen macht.',
      errTurnstile: 'Wir konnten nicht bestätigen, dass du ein Mensch bist. Bitte versuch es noch einmal.',
      errRate: 'Du hast heute schon viele Namen gesucht. Komm morgen wieder.',
      errBusy: 'Gerade ist sehr viel los. Bitte versuch es in ein paar Minuten noch einmal.',
      errFailed: 'Bei uns ist etwas schiefgelaufen. Bitte versuch es noch einmal.',
    },
    kinds: { cafe: 'Café', bakery: 'Bäckerei', restaurant: 'Restaurant', beauty: 'Beauty oder Salon', fitness: 'Fitness', shop: 'Shop', app: 'App oder Software', agency: 'Agentur oder Studio', health: 'Gesundheit oder Praxis', consulting: 'Beratung', photo: 'Foto oder Video', pets: 'Haustiere', education: 'Bildung', home: 'Haus-Service', other: 'Etwas anderes' },
    vibes: { friendly: 'Freundlich', premium: 'Edel', playful: 'Verspielt', modern: 'Modern', classic: 'Klassisch', bold: 'Kräftig', calm: 'Ruhig', natural: 'Natürlich' },
    progress: ['Passende Namen finden', 'Jede Domain beim Registrar prüfen', 'Freie Namen nach vorne'],
    progressNote: 'Das dauert etwa 15 Sekunden.',
    result: {
      title: 'Namen für dein Unternehmen',
      sub: 'Für: {about}',
      checked: 'Domains geprüft {time}',
      available: 'Frei',
      comTaken: '.com vergeben',
      noneFree: 'Keine geprüfte Domain frei',
      unknown: 'Nicht geprüft',
      perYear: '{price}/Jahr',
      perYears: '{price} für {n} Jahre',
      renews: 'Verlängerung {renew}',
      more: 'Auch frei:',
      priceNote: 'Die Preise zahlst du pro Jahr, wenn du die Domain später in equipe kaufst, inklusive Einrichtung (DNS, HTTPS, E-Mail). Hier wird nichts gekauft.',
      logo: 'Logo erstellen',
      logoMaking: 'Zwei Logo-Entwürfe werden gezeichnet…',
      logoNote: 'Zwei Entwürfe für diesen Namen. Du kannst pro Tag Logos für zwei Namen erstellen.',
      logoErrRate: 'Du hast die kostenlosen Logos für heute erstellt. Komm morgen wieder, oder starte mit equipe und dein Designer macht mehr.',
      logoErrBudget: 'Die kostenlosen Logos für heute sind vergeben. Komm morgen wieder.',
      logoErrFailed: 'Das Logo ist diesmal nicht gelungen. Bitte versuch es noch einmal.',
      logoAlt: 'Logo-Entwurf für {name}',
      use: 'Mit diesem Namen starten',
      fromCode: 'Unsere KI macht gerade Pause, deshalb haben wir diese Namen aus deinen Worten gebaut. Versuch es später für kreativere Ideen.',
      recheck: 'Neu prüfen',
      cta: {
        title: 'Starte dieses Unternehmen mit equipe',
        text: 'equipe ist ein KI-Team (ein PM, ein Designer und Entwickler), das deine Website baut, Domain und E-Mail einrichtet und dir hilft, die ersten Kunden zu gewinnen. Ganz ohne Programmieren.',
        button: 'Mit {name} starten',
        note: 'Name und Idee sind schon eingetragen. Die Domain kaufst du später in der App, nur wenn du willst.',
        idea: '{name}: {about}{inPlace}',
        ideaDomain: 'Domain, die mir gefällt: {domain}',
      },
      share: { label: 'Diese Namen teilen', copy: 'Link kopieren', copied: 'Kopiert', again: 'Andere Idee ausprobieren' },
      notFound: 'Diese Namen gibt es nicht oder sie sind abgelaufen.',
      loading: 'Namen werden geladen…',
      registrarDown: 'Der Registrar hat nicht geantwortet, deshalb wurden die Domains diesmal nicht geprüft.',
    },
    share: {
      pageTitle: 'Namensideen für ein Unternehmen',
      title: '{n} Namensideen: {names}',
      desc: 'Namensideen mit geprüften Domains für: {about}. Finde deine kostenlos bei equipe.',
      heading: 'Namensideen, die jemand mit dir geteilt hat',
      own: 'Finde Namen für dein eigenes Unternehmen',
      ownButton: 'Meine Namen finden',
    },
    how: {
      title: 'So funktioniert’s',
      items: [
        { title: 'Beschreib dein Unternehmen', text: 'Ein Satz reicht: was du verkaufst, für wen, und wie es wirken soll. Nenn deine Stadt, wenn du Kunden vor Ort hast.' },
        { title: 'Namen mit Domain sehen', text: 'Zehn Namen, jeder live beim Registrar geprüft: ob die .com gerade frei ist und was sie pro Jahr kostet.' },
        { title: 'Logo erstellen, loslegen', text: 'Zeichne ein Logo für deinen Favoriten. Starte mit equipe, und dein KI-Team baut die Website unter diesem Namen.' },
      ],
    },
    faq: {
      title: 'Fragen',
      items: [
        { question: 'Ist der Namensgenerator kostenlos?', answer: 'Ja. Namen und Domain-Checks sind kostenlos und ohne Anmeldung. Logos auch, für zwei Namen pro Tag und Person.' },
        { question: 'Sind die Domains wirklich frei?', answer: 'Jede Domain wird bei der Suche live beim Registrar geprüft, und noch einmal, wenn du später zurückkommst. Die Verfügbarkeit kann sich jederzeit ändern, also warte nicht zu lange, wenn du eine liebst.' },
        { question: 'Was kostet die Domain?', answer: 'Der Preis ist, was du pro Jahr zahlst, wenn du sie später in equipe kaufst, inklusive Einrichtung: DNS, HTTPS und E-Mail mit deiner Domain. Kostet die Verlängerung anders, zeigen wir das auch.' },
        { question: 'Kann ich einen Namen von hier als Marke eintragen?', answer: 'Wir meiden bekannte Marken, können Markenrechte aber nicht für dich prüfen. Such vor dem Schilderdruck beim Markenamt deines Landes (in Deutschland das DPMA) nach dem Namen in deiner Branche.' },
        { question: 'Was passiert, wenn ich auf Starten klicke?', answer: 'Du erstellst ein kostenloses equipe-Konto mit Name und Idee schon eingetragen. Dein KI-Team (ein PM, ein Designer und Entwickler) beginnt sofort mit deiner Website. Nichts wird ohne dein OK berechnet.' },
      ],
    },
  },
  fr: {
    page: {
      title: 'Générateur de nom d’entreprise avec domaine et logo, gratuit',
      desc: 'Décrivez votre activité et recevez 10 idées de nom, chacune avec le .com vérifié en direct et son vrai prix annuel. Créez un logo pour votre préféré. Gratuit, sans inscription.',
      ogTitle: 'Générateur de nom d’entreprise',
      h1: 'Trouvez un nom pour votre entreprise, avec son domaine',
      lead: 'Dites-nous ce que vous faites. Vous obtenez dix noms qui vous ressemblent, voyez si le .com est libre en ce moment et combien il coûte, et créez un logo pour celui que vous aimez.',
    },
    form: {
      about: 'Que fait votre entreprise ?', aboutPh: 'Une petite boulangerie au levain avec du bon café',
      kind: 'Type d’activité', vibe: 'Quelle impression donner ?', place: 'Ville ou région', placePh: 'Lyon', optional: 'facultatif',
      style: 'Noms en', styleLocal: 'Français', styleEnglish: 'Anglais',
      button: 'Trouver des noms',
      note: 'Gratuit. Les domaines sont vérifiés en direct auprès du registraire. Rien n’est acheté.',
      errAbout: 'Dites-nous en quelques mots ce que fait votre entreprise.',
      errTurnstile: 'Nous n’avons pas pu confirmer que vous êtes une personne. Réessayez.',
      errRate: 'Vous avez déjà cherché beaucoup de noms aujourd’hui. Revenez demain.',
      errBusy: 'Beaucoup de monde en ce moment. Réessayez dans quelques minutes.',
      errFailed: 'Un problème est survenu de notre côté. Réessayez.',
    },
    kinds: { cafe: 'Café', bakery: 'Boulangerie', restaurant: 'Restaurant', beauty: 'Beauté ou salon', fitness: 'Sport', shop: 'Boutique', app: 'Appli ou logiciel', agency: 'Agence ou studio', health: 'Santé ou cabinet', consulting: 'Conseil', photo: 'Photo ou vidéo', pets: 'Animaux', education: 'Formation', home: 'Services à domicile', other: 'Autre' },
    vibes: { friendly: 'Chaleureux', premium: 'Haut de gamme', playful: 'Ludique', modern: 'Moderne', classic: 'Classique', bold: 'Audacieux', calm: 'Apaisant', natural: 'Naturel' },
    progress: ['Recherche de noms qui vous ressemblent', 'Vérification de chaque domaine', 'Les noms libres en premier'],
    progressNote: 'Cela prend environ 15 secondes.',
    result: {
      title: 'Des noms pour votre entreprise',
      sub: 'Pour : {about}',
      checked: 'Domaines vérifiés {time}',
      available: 'Disponible',
      comTaken: '.com déjà pris',
      noneFree: 'Aucun domaine vérifié n’est libre',
      unknown: 'Vérification impossible',
      perYear: '{price}/an',
      perYears: '{price} pour {n} ans',
      renews: 'renouvellement {renew}',
      more: 'Aussi libres :',
      priceNote: 'Les prix sont ce que vous payez par an si vous achetez le domaine plus tard dans equipe, configuration comprise (DNS, HTTPS, e-mail). Rien n’est acheté ici.',
      logo: 'Créer un logo',
      logoMaking: 'Dessin de deux propositions de logo…',
      logoNote: 'Deux propositions pour ce nom. Vous pouvez créer des logos pour deux noms par jour.',
      logoErrRate: 'Vous avez créé les logos gratuits du jour. Revenez demain, ou commencez avec equipe et votre designer en fera d’autres.',
      logoErrBudget: 'Les logos gratuits du jour sont tous partis. Revenez demain.',
      logoErrFailed: 'Le logo n’a pas bien rendu cette fois. Réessayez.',
      logoAlt: 'Proposition de logo pour {name}',
      use: 'Commencer avec ce nom',
      fromCode: 'Notre IA fait une pause, ces noms ont donc été composés à partir de vos mots. Réessayez plus tard pour des idées plus créatives.',
      recheck: 'Vérifier à nouveau',
      cta: {
        title: 'Lancez cette entreprise avec equipe',
        text: 'equipe est une équipe IA (un PM, un designer et des ingénieurs) qui crée votre site, branche le domaine et l’e-mail, et vous aide à trouver vos premiers clients. Sans coder.',
        button: 'Commencer avec {name}',
        note: 'Votre nom et votre idée sont déjà remplis. Achetez le domaine plus tard dans l’appli, seulement si vous le voulez.',
        idea: '{name} : {about}{inPlace}',
        ideaDomain: 'Domaine qui me plaît : {domain}',
      },
      share: { label: 'Partager ces noms', copy: 'Copier le lien', copied: 'Copié', again: 'Essayer une autre idée' },
      notFound: 'Ces noms n’existent pas ou ont expiré.',
      loading: 'Chargement des noms…',
      registrarDown: 'Le registraire n’a pas répondu, les domaines n’ont donc pas été vérifiés cette fois.',
    },
    share: {
      pageTitle: 'Idées de nom d’entreprise',
      title: '{n} idées de nom : {names}',
      desc: 'Idées de nom avec domaines vérifiés pour : {about}. Trouvez le vôtre gratuitement sur equipe.',
      heading: 'Des idées de nom partagées avec vous',
      own: 'Trouvez des noms pour votre propre entreprise',
      ownButton: 'Trouver mes noms',
    },
    how: {
      title: 'Comment ça marche',
      items: [
        { title: 'Décrivez votre activité', text: 'Une phrase suffit : ce que vous vendez, pour qui, et l’impression à donner. Ajoutez votre ville si vous servez une clientèle locale.' },
        { title: 'Des noms avec leur domaine', text: 'Dix noms, chacun vérifié en direct auprès du registraire : le .com est-il libre maintenant, et combien coûte-t-il par an.' },
        { title: 'Créez un logo, lancez-vous', text: 'Dessinez un logo pour le nom qui vous plaît. Commencez avec equipe et votre équipe IA crée le site sous ce nom.' },
      ],
    },
    faq: {
      title: 'Questions',
      items: [
        { question: 'Le générateur de noms est-il gratuit ?', answer: 'Oui. Les noms et la vérification des domaines sont gratuits, sans inscription. Les logos aussi, pour deux noms par jour et par personne.' },
        { question: 'Les domaines sont-ils vraiment libres ?', answer: 'Chaque domaine est vérifié en direct auprès du registraire quand vous cherchez, et à nouveau quand vous revenez. La disponibilité peut changer à tout moment : si vous en adorez un, n’attendez pas trop.' },
        { question: 'Combien coûte le domaine ?', answer: 'Le prix est ce que vous payez par an en l’achetant plus tard dans equipe, configuration comprise : DNS, HTTPS et e-mail sur votre domaine. Si le renouvellement coûte autre chose, nous l’affichons aussi.' },
        { question: 'Puis-je déposer un nom trouvé ici comme marque ?', answer: 'Nous évitons les marques connues, mais ne pouvons pas vérifier les marques pour vous. Avant d’imprimer une enseigne, cherchez le nom auprès de l’office des marques de votre pays (en France, l’INPI) pour votre secteur.' },
        { question: 'Que se passe-t-il quand je clique sur Commencer ?', answer: 'Vous créez un compte equipe gratuit avec le nom et l’idée déjà remplis. Votre équipe IA (un PM, un designer et des ingénieurs) commence votre site tout de suite. Rien n’est facturé sans votre accord.' },
      ],
    },
  },
};

export const namesCopy = (code: LocaleCode): NamesCopy => NAMES[code] ?? NAMES.en;
