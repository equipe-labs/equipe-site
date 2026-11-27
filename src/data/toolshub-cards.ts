/**
 * The free tools hub (/tools/): categories, the search and filter words, and what each card promises (the outcome, about
 * how long it takes, which services it uses). The tools themselves stay one file each in src/data/tools/; a tool with no
 * entry here still shows, in the category of its `group`.
 */
import type { LocaleCode } from '../i18n';
import type { ToolEntry } from './tools/index';

export const HUB_CATS = ['start', 'website', 'found', 'grow'] as const;
export type HubCat = (typeof HUB_CATS)[number];

export interface HubUi {
  cats: Record<'all' | HubCat, string>;
  /** Under the hero: {n} is the number of tools. */
  stats: string;
  search: { label: string; placeholder: string; clear: string; count: string; countOne: string };
  /** Nothing matches: {q} is what was typed. */
  empty: { title: string; text: string; button: string; reset: string };
  meta: { youGet: string; free: string; noSignup: string; popular: string; new: string; about: string };
}

const T = (en: string, ko: string, ja: string, zh: string, es: string, pt: string, de: string, fr: string): Record<LocaleCode, string> =>
  ({ en, ko, ja, 'zh-CN': zh, es, 'pt-BR': pt, de, fr }) as Record<LocaleCode, string>;

export const HUB_UI: Partial<Record<LocaleCode, HubUi>> & { en: HubUi } = {
  en: {
    cats: { all: 'All', start: 'Start a business', website: 'Website', found: 'Get found', grow: 'Grow' },
    stats: '{n} free tools · No sign-up · Plain words',
    search: { label: 'Search the tools', placeholder: 'Search: name, privacy, speed…', clear: 'Clear search', count: '{n} tools', countOne: '1 tool' },
    empty: { title: 'No tool for “{q}” yet', text: 'Tell equipe what you need. Your AI team can build it for you, and it may become the next free tool.', button: 'Ask equipe to build it', reset: 'Show all tools' },
    meta: { youGet: 'You get', free: 'Free', noSignup: 'No sign-up', popular: 'Popular', new: 'New', about: '~{t}' },
  },
  ko: {
    cats: { all: '전체', start: '사업 시작', website: '웹사이트', found: '검색에 나오기', grow: '손님 늘리기' },
    stats: '무료 도구 {n}개 · 가입 없이 · 쉬운 말로',
    search: { label: '도구 검색', placeholder: '검색: 이름, 개인정보, 속도…', clear: '검색어 지우기', count: '도구 {n}개', countOne: '도구 1개' },
    empty: { title: '“{q}” 도구는 아직 없어요', text: '필요한 걸 equipe에 말해 주세요. AI 팀이 대신 만들어 드리고, 다음 무료 도구가 될 수도 있어요.', button: 'equipe에 만들어 달라고 하기', reset: '도구 전체 보기' },
    meta: { youGet: '받는 결과', free: '무료', noSignup: '가입 없음', popular: '인기', new: '새로 나옴', about: '약 {t}' },
  },
  ja: {
    cats: { all: 'すべて', start: '起業する', website: 'ウェブサイト', found: '見つけてもらう', grow: '集客する' },
    stats: '無料ツール {n} 個 · 登録不要 · わかりやすい言葉で',
    search: { label: 'ツールを検索', placeholder: '検索：名前、プライバシー、速度…', clear: '検索をクリア', count: '{n} 個のツール', countOne: '1 個のツール' },
    empty: { title: '「{q}」のツールはまだありません', text: '必要なものを equipe に伝えてください。AI チームが代わりに作り、次の無料ツールになるかもしれません。', button: 'equipe に作ってもらう', reset: 'すべてのツールを見る' },
    meta: { youGet: 'わかること', free: '無料', noSignup: '登録不要', popular: '人気', new: '新着', about: '約 {t}' },
  },
  'zh-CN': {
    cats: { all: '全部', start: '开始创业', website: '网站', found: '被找到', grow: '增长' },
    stats: '{n} 个免费工具 · 无需注册 · 一看就懂',
    search: { label: '搜索工具', placeholder: '搜索：名字、隐私、速度…', clear: '清除搜索', count: '{n} 个工具', countOne: '1 个工具' },
    empty: { title: '还没有“{q}”相关的工具', text: '告诉 equipe 你需要什么。AI 团队可以帮你做出来，它也可能成为下一个免费工具。', button: '让 equipe 帮我做', reset: '查看全部工具' },
    meta: { youGet: '你会得到', free: '免费', noSignup: '无需注册', popular: '热门', new: '新', about: '约 {t}' },
  },
  es: {
    cats: { all: 'Todas', start: 'Empezar un negocio', website: 'Web', found: 'Que te encuentren', grow: 'Crecer' },
    stats: '{n} herramientas gratis · Sin registro · En palabras sencillas',
    search: { label: 'Buscar herramientas', placeholder: 'Busca: nombre, privacidad, velocidad…', clear: 'Borrar búsqueda', count: '{n} herramientas', countOne: '1 herramienta' },
    empty: { title: 'Aún no hay una herramienta para “{q}”', text: 'Cuéntale a equipe qué necesitas. Tu equipo de IA puede crearlo por ti, y quizá sea la próxima herramienta gratis.', button: 'Pedírselo a equipe', reset: 'Ver todas las herramientas' },
    meta: { youGet: 'Obtienes', free: 'Gratis', noSignup: 'Sin registro', popular: 'Popular', new: 'Nuevo', about: '~{t}' },
  },
  'pt-BR': {
    cats: { all: 'Todas', start: 'Abrir um negócio', website: 'Site', found: 'Ser encontrado', grow: 'Crescer' },
    stats: '{n} ferramentas grátis · Sem cadastro · Em palavras simples',
    search: { label: 'Buscar ferramentas', placeholder: 'Busque: nome, privacidade, velocidade…', clear: 'Limpar busca', count: '{n} ferramentas', countOne: '1 ferramenta' },
    empty: { title: 'Ainda não há ferramenta para “{q}”', text: 'Conte à equipe o que você precisa. Seu time de IA pode criar isso para você, e pode virar a próxima ferramenta grátis.', button: 'Pedir para a equipe criar', reset: 'Ver todas as ferramentas' },
    meta: { youGet: 'Você recebe', free: 'Grátis', noSignup: 'Sem cadastro', popular: 'Popular', new: 'Novo', about: '~{t}' },
  },
  de: {
    cats: { all: 'Alle', start: 'Gründen', website: 'Website', found: 'Gefunden werden', grow: 'Wachsen' },
    stats: '{n} kostenlose Tools · Ohne Anmeldung · In einfachen Worten',
    search: { label: 'Tools durchsuchen', placeholder: 'Suchen: Name, Datenschutz, Tempo…', clear: 'Suche löschen', count: '{n} Tools', countOne: '1 Tool' },
    empty: { title: 'Noch kein Tool für „{q}“', text: 'Sag equipe, was du brauchst. Dein KI-Team baut es für dich, und vielleicht wird es das nächste kostenlose Tool.', button: 'equipe bauen lassen', reset: 'Alle Tools zeigen' },
    meta: { youGet: 'Du bekommst', free: 'Kostenlos', noSignup: 'Ohne Anmeldung', popular: 'Beliebt', new: 'Neu', about: '~{t}' },
  },
  fr: {
    cats: { all: 'Tous', start: 'Lancer son activité', website: 'Site web', found: 'Être trouvé', grow: 'Grandir' },
    stats: '{n} outils gratuits · Sans inscription · En termes simples',
    search: { label: 'Rechercher un outil', placeholder: 'Cherchez : nom, confidentialité, vitesse…', clear: 'Effacer la recherche', count: '{n} outils', countOne: '1 outil' },
    empty: { title: 'Pas encore d’outil pour « {q} »', text: 'Dites à equipe ce qu’il vous faut. Votre équipe IA peut le créer pour vous, et ce sera peut-être le prochain outil gratuit.', button: 'Demander à equipe', reset: 'Voir tous les outils' },
    meta: { youGet: 'Vous obtenez', free: 'Gratuit', noSignup: 'Sans inscription', popular: 'Populaire', new: 'Nouveau', about: '~{t}' },
  },
};
export const hubUi = (code: LocaleCode): HubUi => HUB_UI[code] ?? HUB_UI.en;

export interface HubCard {
  /** First one is the tool's home category. */
  cats: HubCat[];
  /** Service marks (src/data/serviceLogos.ts) the tool really uses or names. */
  logos?: string[];
  /** About how long it takes. */
  time: { n: number; unit: 'second' | 'minute' };
  outcome: Record<LocaleCode, string>;
  /** Features analytics key (cloud web/src/features.js), for the "Popular" badge. */
  feature?: string;
}

export const HUB_CARDS: Record<string, HubCard> = {
  grader: {
    cats: ['website', 'found'], logos: ['google'], time: { n: 30, unit: 'second' }, feature: 'grader',
    outcome: T('A score out of 100 and your top fixes', '100점 만점 점수와 고칠 점', '100点満点のスコアと改善点', '满分 100 的评分和修改建议', 'Una nota sobre 100 y tus arreglos clave', 'Uma nota de 0 a 100 e as correções principais', 'Eine Punktzahl von 100 und deine wichtigsten Fixes', 'Une note sur 100 et vos corrections clés'),
  },
  'ai-visibility': {
    cats: ['found', 'grow'], logos: ['chatgpt', 'claude'], time: { n: 1, unit: 'minute' }, feature: 'ai_visibility',
    outcome: T('Whether ChatGPT and Claude name you', 'ChatGPT·Claude가 내 이름을 말하는지', 'ChatGPT・Claude があなたの名前を挙げるか', 'ChatGPT 和 Claude 会不会提到你', 'Si ChatGPT y Claude te mencionan', 'Se o ChatGPT e o Claude citam você', 'Ob ChatGPT und Claude dich nennen', 'Si ChatGPT et Claude vous citent'),
  },
  'idea-validator': {
    cats: ['start'], time: { n: 1, unit: 'minute' }, feature: 'idea_validator',
    outcome: T('A verdict, real competitors and a 7-day test', '판정, 실제 경쟁사, 7일 테스트 계획', '判定、実在の競合、7日間のテスト', '结论、真实竞品和 7 天验证计划', 'Un veredicto, competidores reales y una prueba de 7 días', 'Um veredito, concorrentes reais e um teste de 7 dias', 'Ein Urteil, echte Wettbewerber und ein 7-Tage-Test', 'Un verdict, de vrais concurrents et un test de 7 jours'),
  },
  'business-name-generator': {
    cats: ['start'], time: { n: 20, unit: 'second' }, feature: 'name_generator',
    outcome: T('10 names with .com availability', '.com 가능 여부가 붙은 이름 10개', '.com の空き状況つきの名前10個', '10 个名字，附 .com 是否可注册', '10 nombres con disponibilidad .com', '10 nomes com disponibilidade .com', '10 Namen mit .com-Verfügbarkeit', '10 noms avec la disponibilité du .com'),
  },
  'app-cost-calculator': {
    cats: ['start'], time: { n: 1, unit: 'minute' }, feature: 'cost_calculator',
    outcome: T('A price range: agency, no-code, equipe', '에이전시·노코드·equipe 비용 범위', '制作会社・ノーコード・equipe の費用感', '外包、无代码和 equipe 的费用区间', 'Un rango de precio: agencia, no-code, equipe', 'Uma faixa de preço: agência, no-code, equipe', 'Eine Preisspanne: Agentur, No-Code, equipe', 'Une fourchette de prix : agence, no-code, equipe'),
  },
  'privacy-policy-generator': {
    cats: ['start', 'website'], time: { n: 2, unit: 'minute' }, feature: 'privacy_policy',
    outcome: T('A privacy policy to copy or download', '복사하거나 내려받는 개인정보처리방침', 'コピーやダウンロードできるプライバシーポリシー', '可复制或下载的隐私政策', 'Una política de privacidad para copiar o descargar', 'Uma política de privacidade para copiar ou baixar', 'Eine Datenschutzerklärung zum Kopieren oder Herunterladen', 'Une politique de confidentialité à copier ou télécharger'),
  },
  'publish-html': {
    cats: ['website'], logos: ['chatgpt', 'claude', 'gemini'], time: { n: 1, unit: 'minute' }, feature: 'ai_to_site',
    outcome: T('Your AI-made page live at a link', 'AI로 만든 페이지를 바로 링크로', 'AI で作ったページをすぐ公開リンクに', '把 AI 做的页面变成在线链接', 'Tu página hecha con IA, publicada en un enlace', 'Sua página feita com IA no ar em um link', 'Deine KI-Seite online unter einem Link', 'Votre page faite avec l’IA, en ligne via un lien'),
  },
  'industry-websites': {
    cats: ['website', 'start'], time: { n: 3, unit: 'minute' }, feature: 'industry_pages',
    outcome: T('What your kind of business needs online', '업종별로 웹사이트에 꼭 필요한 것', '業種ごとにサイトに必要なもの', '你这类生意的网站需要什么', 'Lo que tu tipo de negocio necesita en su web', 'O que o seu tipo de negócio precisa no site', 'Was deine Branche auf der Website braucht', 'Ce dont votre type d’activité a besoin en ligne'),
  },
  'booking-page': {
    cats: ['grow', 'website'], time: { n: 2, unit: 'minute' }, feature: 'booking_page',
    outcome: T('A booking page customers can use', '손님이 바로 쓰는 예약 페이지', 'お客さまがすぐ使える予約ページ', '顾客可以直接使用的预约页', 'Una página de reservas lista para tus clientes', 'Uma página de agendamento pronta para clientes', 'Eine Buchungsseite, die Kunden direkt nutzen', 'Une page de réservation prête pour vos clients'),
  },
};

const FROM_GROUP: Record<string, HubCat> = { site: 'website', ai: 'found', money: 'start', start: 'start' };
/** The card facts for a tool; a tool not listed here falls back to its group. */
export const hubCard = (t: ToolEntry): HubCard | null => HUB_CARDS[t.slug] ?? null;
export const hubCats = (t: ToolEntry): HubCat[] => HUB_CARDS[t.slug]?.cats ?? [FROM_GROUP[t.group ?? ''] ?? 'start'];
