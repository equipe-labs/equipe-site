/**
 * The free tools hub (/tools/): page copy only. The tools themselves are one file each in src/data/tools/ (see index.ts).
 */
import type { LocaleCode } from '../i18n';

export interface ToolsHubCopy {
  /** Footer link. */
  nav: string;
  /** Header Resources menu, under the name. */
  navDesc: string;
  page: { title: string; desc: string; h1: string; lead: string };
  groups: { site: string; ai: string; money: string; start: string; other: string };
  /** Under the tool grid. */
  more: { title: string; text: string; button: string };
  /** Small strip on every tool page. */
  related: string;
  all: string;
}

export const TOOLS_HUB: Partial<Record<LocaleCode, ToolsHubCopy>> & { en: ToolsHubCopy } = {
  en: {
    nav: 'Free tools',
    navDesc: 'Grade your site, check what AI says about you',
    page: {
      title: 'Free tools for your website and business',
      desc: 'Free tools from equipe: grade your website, check whether ChatGPT knows your business, and more. No sign-up, plain words.',
      h1: 'Free tools for your business',
      lead: 'Check your website, see what AI says about you, and plan what to build next. Free, no sign-up, in plain words.',
    },
    groups: { site: 'Your website', ai: 'AI search', money: 'Costs and pricing', start: 'Getting started', other: 'More tools' },
    more: { title: 'Want it done for you?', text: 'equipe is an AI team (a PM, a designer and engineers) that builds, fixes and grows your website and product. No coding needed.', button: 'Start free' },
    related: 'More free tools',
    all: 'All free tools',
  },
  ko: {
    nav: '무료 도구',
    navDesc: '내 홈페이지 점검, AI가 보는 우리 가게',
    page: {
      title: '웹사이트와 사업을 위한 무료 도구',
      desc: 'equipe의 무료 도구로 웹사이트 점수를 확인하고, ChatGPT가 내 가게를 아는지 알아보세요. 가입 없이, 쉬운 말로 알려드려요.',
      h1: '사업에 바로 쓰는 무료 도구',
      lead: '웹사이트를 점검하고, AI가 내 사업을 어떻게 말하는지 보고, 다음에 무엇을 만들지 계획해 보세요. 무료이고 가입도 필요 없어요.',
    },
    groups: { site: '내 웹사이트', ai: 'AI 검색', money: '비용과 가격', start: '시작하기', other: '더 많은 도구' },
    more: { title: '직접 하기 번거로우신가요?', text: 'equipe는 PM, 디자이너, 엔지니어로 이뤄진 AI 팀이에요. 웹사이트와 서비스를 만들고, 고치고, 키워 드려요. 코딩은 필요 없어요.', button: '무료로 시작하기' },
    related: '다른 무료 도구',
    all: '무료 도구 전체 보기',
  },
  ja: {
    nav: '無料ツール',
    navDesc: 'サイト診断、AIでの見え方チェック',
    page: {
      title: 'ウェブサイトとビジネスのための無料ツール',
      desc: 'equipe の無料ツールで、ウェブサイトの採点や、ChatGPT があなたのお店を知っているかのチェックができます。登録不要、わかりやすい言葉でお伝えします。',
      h1: 'ビジネスに役立つ無料ツール',
      lead: 'ウェブサイトのチェック、AI があなたについて何と言っているかの確認、次に作るものの計画まで。無料・登録不要で、わかりやすくお伝えします。',
    },
    groups: { site: 'ウェブサイト', ai: 'AI 検索', money: '費用と料金', start: 'はじめの一歩', other: 'その他のツール' },
    more: { title: '代わりにやってほしいですか？', text: 'equipe は PM・デザイナー・エンジニアがそろった AI チームです。ウェブサイトやサービスを作り、直し、育てます。コーディングは不要です。', button: '無料ではじめる' },
    related: 'ほかの無料ツール',
    all: '無料ツール一覧',
  },
  'zh-CN': {
    nav: '免费工具',
    navDesc: '网站体检，看看 AI 怎么说你',
    page: {
      title: '为你的网站和生意准备的免费工具',
      desc: 'equipe 的免费工具：给网站打分、看看 ChatGPT 是否认识你的店，还有更多。无需注册，说的都是大白话。',
      h1: '给生意用的免费工具',
      lead: '检查网站、看看 AI 怎么介绍你、规划下一步要做什么。免费、无需注册，一看就懂。',
    },
    groups: { site: '你的网站', ai: 'AI 搜索', money: '成本与定价', start: '入门', other: '更多工具' },
    more: { title: '想让别人帮你搞定？', text: 'equipe 是一支 AI 团队（产品经理、设计师和工程师），帮你搭建、修复并持续优化网站和产品。无需写代码。', button: '免费开始' },
    related: '更多免费工具',
    all: '全部免费工具',
  },
  es: {
    nav: 'Herramientas gratis',
    navDesc: 'Evalúa tu web y mira qué dice la IA de ti',
    page: {
      title: 'Herramientas gratis para tu web y tu negocio',
      desc: 'Herramientas gratis de equipe: evalúa tu web, comprueba si ChatGPT conoce tu negocio y mucho más. Sin registro y en palabras sencillas.',
      h1: 'Herramientas gratis para tu negocio',
      lead: 'Revisa tu web, mira qué dice la IA de ti y planifica qué construir después. Gratis, sin registro y en palabras sencillas.',
    },
    groups: { site: 'Tu web', ai: 'Búsqueda con IA', money: 'Costes y precios', start: 'Para empezar', other: 'Más herramientas' },
    more: { title: '¿Prefieres que lo hagan por ti?', text: 'equipe es un equipo de IA (un PM, un diseñador e ingenieros) que crea, arregla y hace crecer tu web y tu producto. Sin programar.', button: 'Empieza gratis' },
    related: 'Más herramientas gratis',
    all: 'Todas las herramientas gratis',
  },
  'pt-BR': {
    nav: 'Ferramentas grátis',
    navDesc: 'Avalie seu site e veja o que a IA diz de você',
    page: {
      title: 'Ferramentas grátis para o seu site e o seu negócio',
      desc: 'Ferramentas grátis da equipe: avalie seu site, veja se o ChatGPT conhece seu negócio e muito mais. Sem cadastro, em palavras simples.',
      h1: 'Ferramentas grátis para o seu negócio',
      lead: 'Confira seu site, veja o que a IA fala de você e planeje o que construir em seguida. Grátis, sem cadastro, em palavras simples.',
    },
    groups: { site: 'Seu site', ai: 'Busca com IA', money: 'Custos e preços', start: 'Primeiros passos', other: 'Mais ferramentas' },
    more: { title: 'Quer que alguém faça isso por você?', text: 'A equipe é um time de IA (um PM, um designer e engenheiros) que cria, conserta e faz crescer o seu site e o seu produto. Sem precisar programar.', button: 'Comece grátis' },
    related: 'Mais ferramentas grátis',
    all: 'Todas as ferramentas grátis',
  },
  de: {
    nav: 'Kostenlose Tools',
    navDesc: 'Website prüfen, KI-Sichtbarkeit checken',
    page: {
      title: 'Kostenlose Tools für deine Website und dein Business',
      desc: 'Kostenlose Tools von equipe: Lass deine Website bewerten, prüfe, ob ChatGPT dein Unternehmen kennt, und mehr. Ohne Anmeldung, in einfachen Worten.',
      h1: 'Kostenlose Tools für dein Business',
      lead: 'Prüfe deine Website, sieh nach, was KI über dich sagt, und plane, was du als Nächstes baust. Kostenlos, ohne Anmeldung, in einfachen Worten.',
    },
    groups: { site: 'Deine Website', ai: 'KI-Suche', money: 'Kosten und Preise', start: 'Erste Schritte', other: 'Weitere Tools' },
    more: { title: 'Lieber machen lassen?', text: 'equipe ist ein KI-Team (ein PM, eine Designerin und Entwickler), das deine Website und dein Produkt baut, verbessert und wachsen lässt. Ganz ohne Programmieren.', button: 'Kostenlos starten' },
    related: 'Weitere kostenlose Tools',
    all: 'Alle kostenlosen Tools',
  },
  fr: {
    nav: 'Outils gratuits',
    navDesc: 'Notez votre site, voyez ce que l’IA dit de vous',
    page: {
      title: 'Outils gratuits pour votre site et votre entreprise',
      desc: 'Les outils gratuits d’equipe : notez votre site, vérifiez si ChatGPT connaît votre entreprise, et plus encore. Sans inscription, en termes simples.',
      h1: 'Des outils gratuits pour votre entreprise',
      lead: 'Vérifiez votre site, découvrez ce que l’IA dit de vous et préparez la suite. Gratuit, sans inscription, en termes simples.',
    },
    groups: { site: 'Votre site', ai: 'Recherche IA', money: 'Coûts et tarifs', start: 'Bien démarrer', other: 'Plus d’outils' },
    more: { title: 'Vous préférez qu’on s’en occupe ?', text: 'equipe est une équipe IA (un PM, un designer et des ingénieurs) qui crée, corrige et fait grandir votre site et votre produit. Aucune ligne de code à écrire.', button: 'Commencer gratuitement' },
    related: 'Plus d’outils gratuits',
    all: 'Tous les outils gratuits',
  },
};

export const hubCopy = (code: LocaleCode): ToolsHubCopy => TOOLS_HUB[code] ?? TOOLS_HUB.en;
