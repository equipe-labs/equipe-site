/**
 * Home page copy added with the nine-block home (2026-11-28): the product demo, customer proof, typical cost examples
 * and the pricing teaser. Everything else on the home page still comes from src/i18n/<code>.ts.
 *
 * Facts and sources (keep them true; never invent numbers or quotes):
 * - TYPICAL: real customer teams' first versions (team created -> first site live), Nov 21-27, 2026, from the D1
 *   credit ledger (equipe-launch/spend-analysis-2026-11-27.md, /admin/spend): median 33 minutes and $7.02 billed
 *   (about 700 credits), p75 $14.84. Test and internal teams are not counted.
 * - FEATURE_EXAMPLE: one real feature on a live customer site (sign-up plus bookings), $8.77 cost at a 30% margin,
 *   so about $12.50 (1,250 credits) billed.
 * - READY: real teams created Nov 14-28, 2026, `teams.ready_at - created_at`: median 33 s, p90 46 s -> "under a minute".
 * - PROOF: only what the customer's own public site shows, or what the customer approved (CJ). Quotes stay empty until
 *   a customer sends one in writing (see QUOTES).
 */
import type { LocaleCode } from '../i18n';

/** Median first version of real customer teams, in credits (100 credits = $1). */
export const TYPICAL = { credits: 700, minutes: 33, dollars: 7, p75Dollars: 15 } as const;
/** One real example of a feature added to a live customer site, billed. */
export const FEATURE_EXAMPLE = { credits: 1250, dollars: 12.5 } as const;

export type CustomerKey = 'cj' | 'gba' | 'ironact';

/**
 * Customer quotes, empty until a customer sends one in writing (draft request: equipe-launch/marketing/customer-quotes).
 * Keep the customer's own words and language; add `person` and `role` exactly as they approved them.
 */
export const QUOTES: Record<CustomerKey, null | { text: string; person: string; role: string; lang: string }> = {
  cj: null,
  gba: null,
  ironact: null,
};

/** The customer's public site, if any (shown as a link in the proof panel). */
export const CUSTOMER_SITES: Partial<Record<CustomerKey, string>> = {
  gba: 'https://goldenbootacademy.app',
};

interface HomeCopy {
  demo: { kicker: string; title: string; sub: string; play: string; length: string; close: string; caption: string };
  steps: { claude: string };
  proof: {
    kicker: string; title: string; sub: string; label: string; story: string; visit: string;
    customers: Record<CustomerKey, { what: string; fact: string }>;
  };
  gallery: { cost: string; costNote: string };
  price: {
    kicker: string; title: string; sub: string; link: string;
    cards: [{ title: string; text: string }, { title: string; text: string }, { title: string; text: string }];
  };
}

const n = (code: LocaleCode, v: number) => v.toLocaleString(code === 'zh-CN' ? 'zh-CN' : code);
export const credits = (code: LocaleCode, v: number) => n(code, v);

export const HOME: Record<LocaleCode, HomeCopy> = {
  en: {
    demo: { kicker: 'See it work', title: 'Watch a team build and launch a site.', sub: 'One request in plain words. The PM makes a plan, the team builds it, and it goes live at its own address.', play: 'Play the demo', length: '42 seconds', close: 'Close', caption: 'The real equipe app with sample data.' },
    steps: { claude: 'Built something in Claude? Bring it' },
    proof: {
      kicker: 'Customers', title: 'Teams that run on equipe.', sub: 'What each team does with equipe, in plain facts.', label: 'Customers', story: 'Read the story', visit: 'Visit the site',
      customers: {
        cj: { what: 'CJ', fact: 'A paying customer. CJ’s team uses equipe for real work.' },
        gba: { what: 'Soccer training in the San Francisco Bay Area', fact: 'Its equipe team built and runs goldenbootacademy.app: the site, player sign-up and accounts, and bookings, on its own domain.' },
        ironact: { what: 'An AI-native brand project company', fact: 'Its team builds and runs brand project sites with equipe.' },
      },
    },
    gallery: { cost: 'about {c} credits', costNote: 'Credits shown are the typical first version: the median of real customer teams in November 2026. You see the estimate before anything starts.' },
    price: {
      kicker: 'Pricing', title: 'Start free. Pay for what the team does.', sub: 'Everything the team does is paid in credits, and you see the estimate before it starts.', link: 'See plans and prices',
      cards: [
        { title: 'Free to start', text: '500 credits when you create your team. No card needed.' },
        { title: 'A first version: about 700 credits', text: 'The typical first launch of real teams, about 33 minutes. Your first version is on us.' },
        { title: 'A new feature: about 1,250 credits', text: 'One real example: sign-up and bookings added to a live site.' },
      ],
    },
  },
  ko: {
    demo: { kicker: '직접 보기', title: '팀이 사이트를 만들고 여는 모습을 보세요.', sub: '평소 말로 한 번 부탁하면 PM이 계획을 세우고, 팀이 만들고, 자기 주소로 열려요.', play: '데모 재생', length: '42초', close: '닫기', caption: '실제 equipe 앱, 예시 데이터예요.' },
    steps: { claude: 'Claude에서 만든 게 있나요? 그대로 가져오세요' },
    proof: {
      kicker: '고객', title: 'equipe로 일하는 팀들.', sub: '각 팀이 equipe로 무엇을 하는지, 사실만 적었어요.', label: '고객', story: '이야기 보기', visit: '사이트 열기',
      customers: {
        cj: { what: 'CJ', fact: '유료 고객이에요. CJ 팀이 실제 업무에 equipe를 써요.' },
        gba: { what: '샌프란시스코 베이 에어리어의 축구 아카데미', fact: 'equipe 팀이 goldenbootacademy.app을 만들고 운영해요. 사이트, 선수 가입과 계정, 예약까지 자기 도메인에서요.' },
        ironact: { what: 'AI 네이티브 브랜드 프로젝트 회사', fact: '브랜드 프로젝트 사이트를 equipe로 만들고 운영해요.' },
      },
    },
    gallery: { cost: '약 {c}크레딧', costNote: '크레딧은 보통의 첫 버전 기준이에요. 2026년 11월 실제 고객 팀의 중앙값이에요. 시작 전에 예상 비용을 먼저 보여드려요.' },
    price: {
      kicker: '가격', title: '무료로 시작하고, 팀이 한 만큼만 내요.', sub: '팀이 하는 모든 일은 크레딧으로 내고, 시작 전에 예상 비용을 먼저 봐요.', link: '플랜과 가격 보기',
      cards: [
        { title: '무료로 시작', text: '팀을 만들면 500크레딧. 카드 없이 시작해요.' },
        { title: '첫 버전: 약 700크레딧', text: '실제 팀의 보통 첫 공개 기준, 약 33분. 첫 버전은 저희가 내요.' },
        { title: '새 기능 하나: 약 1,250크레딧', text: '실제 예: 운영 중인 사이트에 회원가입과 예약을 더했어요.' },
      ],
    },
  },
  ja: {
    demo: { kicker: '動きを見る', title: 'チームがサイトを作って公開するまで。', sub: 'ふだんの言葉で一度頼むだけ。PM が計画し、チームが作り、自分のアドレスで公開されます。', play: 'デモを再生', length: '42 秒', close: '閉じる', caption: '本物の equipe アプリ、サンプルデータです。' },
    steps: { claude: 'Claude で作ったものがある方はそのままどうぞ' },
    proof: {
      kicker: 'お客さま', title: 'equipe で動いているチーム。', sub: '各チームが equipe で何をしているか、事実だけを載せています。', label: 'お客さま', story: '事例を読む', visit: 'サイトを開く',
      customers: {
        cj: { what: 'CJ', fact: '有料のお客さまです。CJ のチームが実務で equipe を使っています。' },
        gba: { what: 'サンフランシスコ・ベイエリアのサッカーアカデミー', fact: 'equipe のチームが goldenbootacademy.app を作って運営しています。サイト、選手の登録とアカウント、予約まで独自ドメインで。' },
        ironact: { what: 'AI ネイティブのブランドプロジェクト会社', fact: 'ブランドプロジェクトのサイトを equipe で作って運営しています。' },
      },
    },
    gallery: { cost: '約 {c} クレジット', costNote: 'クレジットは一般的な最初のバージョンの目安で、2026 年 11 月の実際のお客さまチームの中央値です。始める前に見積もりが表示されます。' },
    price: {
      kicker: '料金', title: '無料で始めて、チームの作業分だけ支払う。', sub: 'チームの作業はすべてクレジットで支払い、始める前に見積もりを確認できます。', link: 'プランと料金を見る',
      cards: [
        { title: '無料で開始', text: 'チーム作成時に 500 クレジット。カードは不要です。' },
        { title: '最初のバージョン: 約 700 クレジット', text: '実際のチームの一般的な初公開、約 33 分。最初のバージョンは私たちが負担します。' },
        { title: '新しい機能: 約 1,250 クレジット', text: '実例: 公開中のサイトに会員登録と予約を追加。' },
      ],
    },
  },
  'zh-CN': {
    demo: { kicker: '看它怎么做', title: '看团队搭建并上线一个网站。', sub: '用平常的话提一次需求。PM 制定计划，团队动手搭建，网站在自己的地址上线。', play: '播放演示', length: '42 秒', close: '关闭', caption: '真实的 equipe 应用，示例数据。' },
    steps: { claude: '在 Claude 里做过东西？直接带过来' },
    proof: {
      kicker: '客户', title: '在 equipe 上运转的团队。', sub: '每个团队用 equipe 做什么，只写事实。', label: '客户', story: '阅读案例', visit: '打开网站',
      customers: {
        cj: { what: 'CJ', fact: '付费客户。CJ 的团队在实际工作中使用 equipe。' },
        gba: { what: '旧金山湾区的足球训练学院', fact: '它的 equipe 团队搭建并运营 goldenbootacademy.app：网站、球员注册与账户、预约，都在自己的域名上。' },
        ironact: { what: 'AI 原生的品牌项目公司', fact: '它的团队用 equipe 搭建并运营品牌项目网站。' },
      },
    },
    gallery: { cost: '约 {c} 积分', costNote: '积分为典型首个版本的参考：2026 年 11 月真实客户团队的中位数。开始之前你会先看到预估。' },
    price: {
      kicker: '价格', title: '免费开始，按团队实际做的事付费。', sub: '团队做的每件事都用积分支付，开始前先看到预估。', link: '查看方案和价格',
      cards: [
        { title: '免费开始', text: '创建团队即得 500 积分，无需绑卡。' },
        { title: '首个版本：约 700 积分', text: '真实团队的典型首次上线，约 33 分钟。首个版本由我们承担。' },
        { title: '一个新功能：约 1,250 积分', text: '真实例子：为已上线的网站加上注册和预约。' },
      ],
    },
  },
  es: {
    demo: { kicker: 'Míralo en acción', title: 'Mira a un equipo crear y lanzar un sitio.', sub: 'Un pedido en palabras sencillas. El PM hace un plan, el equipo lo construye y se publica en su propia dirección.', play: 'Ver la demo', length: '42 segundos', close: 'Cerrar', caption: 'La app real de equipe con datos de ejemplo.' },
    steps: { claude: '¿Hiciste algo en Claude? Tráelo' },
    proof: {
      kicker: 'Clientes', title: 'Equipos que funcionan con equipe.', sub: 'Qué hace cada equipo con equipe, solo con hechos.', label: 'Clientes', story: 'Leer la historia', visit: 'Abrir el sitio',
      customers: {
        cj: { what: 'CJ', fact: 'Cliente de pago. El equipo de CJ usa equipe para trabajo real.' },
        gba: { what: 'Entrenamiento de fútbol en el Área de la Bahía de San Francisco', fact: 'Su equipo de equipe creó y gestiona goldenbootacademy.app: el sitio, el registro y las cuentas de jugadores y las reservas, en su propio dominio.' },
        ironact: { what: 'Una empresa de proyectos de marca nativa de IA', fact: 'Su equipo crea y gestiona sitios de proyectos de marca con equipe.' },
      },
    },
    gallery: { cost: 'unos {c} créditos', costNote: 'Los créditos son los de una primera versión típica: la mediana de equipos de clientes reales en noviembre de 2026. Ves la estimación antes de empezar.' },
    price: {
      kicker: 'Precios', title: 'Empieza gratis. Paga por lo que hace el equipo.', sub: 'Todo lo que hace el equipo se paga en créditos, y ves la estimación antes de empezar.', link: 'Ver planes y precios',
      cards: [
        { title: 'Gratis para empezar', text: '500 créditos al crear tu equipo. Sin tarjeta.' },
        { title: 'Una primera versión: unos 700 créditos', text: 'El primer lanzamiento típico de equipos reales, unos 33 minutos. La primera versión corre por nuestra cuenta.' },
        { title: 'Una función nueva: unos 1.250 créditos', text: 'Un ejemplo real: registro y reservas añadidos a un sitio ya publicado.' },
      ],
    },
  },
  'pt-BR': {
    demo: { kicker: 'Veja funcionando', title: 'Veja um time criar e lançar um site.', sub: 'Um pedido em palavras simples. O PM faz o plano, o time constrói e o site vai ao ar no próprio endereço.', play: 'Ver a demo', length: '42 segundos', close: 'Fechar', caption: 'O app real da equipe com dados de exemplo.' },
    steps: { claude: 'Fez algo no Claude? Traga para cá' },
    proof: {
      kicker: 'Clientes', title: 'Times que rodam com a equipe.', sub: 'O que cada time faz com a equipe, só com fatos.', label: 'Clientes', story: 'Ler a história', visit: 'Abrir o site',
      customers: {
        cj: { what: 'CJ', fact: 'Cliente pagante. O time da CJ usa a equipe no trabalho real.' },
        gba: { what: 'Treinamento de futebol na Baía de São Francisco', fact: 'O time da equipe criou e mantém goldenbootacademy.app: o site, cadastro e contas de jogadores e agendamentos, no domínio próprio.' },
        ironact: { what: 'Uma empresa de projetos de marca nativa de IA', fact: 'O time cria e mantém sites de projetos de marca com a equipe.' },
      },
    },
    gallery: { cost: 'cerca de {c} créditos', costNote: 'Os créditos são de uma primeira versão típica: a mediana de times de clientes reais em novembro de 2026. Você vê a estimativa antes de começar.' },
    price: {
      kicker: 'Preços', title: 'Comece grátis. Pague pelo que o time faz.', sub: 'Tudo o que o time faz é pago em créditos, e você vê a estimativa antes de começar.', link: 'Ver planos e preços',
      cards: [
        { title: 'Grátis para começar', text: '500 créditos ao criar seu time. Sem cartão.' },
        { title: 'Uma primeira versão: cerca de 700 créditos', text: 'O primeiro lançamento típico de times reais, cerca de 33 minutos. A primeira versão é por nossa conta.' },
        { title: 'Um recurso novo: cerca de 1.250 créditos', text: 'Um exemplo real: cadastro e agendamentos adicionados a um site no ar.' },
      ],
    },
  },
  de: {
    demo: { kicker: 'So sieht es aus', title: 'Sieh zu, wie ein Team eine Website baut und startet.', sub: 'Ein Wunsch in einfachen Worten. Der PM plant, das Team baut, und die Seite geht unter ihrer eigenen Adresse live.', play: 'Demo abspielen', length: '42 Sekunden', close: 'Schließen', caption: 'Die echte equipe-App mit Beispieldaten.' },
    steps: { claude: 'Schon etwas in Claude gebaut? Bring es mit' },
    proof: {
      kicker: 'Kunden', title: 'Teams, die mit equipe arbeiten.', sub: 'Was jedes Team mit equipe macht, nur Fakten.', label: 'Kunden', story: 'Zur Geschichte', visit: 'Website öffnen',
      customers: {
        cj: { what: 'CJ', fact: 'Zahlender Kunde. Das Team von CJ nutzt equipe für echte Arbeit.' },
        gba: { what: 'Fußballtraining in der San Francisco Bay Area', fact: 'Sein equipe-Team hat goldenbootacademy.app gebaut und betreibt sie: die Website, Anmeldung und Konten für Spieler und Buchungen, auf eigener Domain.' },
        ironact: { what: 'Ein KI-natives Unternehmen für Markenprojekte', fact: 'Sein Team baut und betreibt Websites für Markenprojekte mit equipe.' },
      },
    },
    gallery: { cost: 'etwa {c} Credits', costNote: 'Die Credits zeigen eine typische erste Version: den Median echter Kundenteams im November 2026. Du siehst die Schätzung, bevor etwas startet.' },
    price: {
      kicker: 'Preise', title: 'Kostenlos starten. Zahlen, was das Team tut.', sub: 'Alles, was das Team tut, wird in Credits bezahlt, und du siehst die Schätzung vorher.', link: 'Pläne und Preise ansehen',
      cards: [
        { title: 'Kostenlos starten', text: '500 Credits, wenn du dein Team erstellst. Keine Karte nötig.' },
        { title: 'Eine erste Version: etwa 700 Credits', text: 'Der typische erste Start echter Teams, etwa 33 Minuten. Deine erste Version übernehmen wir.' },
        { title: 'Eine neue Funktion: etwa 1.250 Credits', text: 'Ein echtes Beispiel: Anmeldung und Buchungen für eine laufende Website.' },
      ],
    },
  },
  fr: {
    demo: { kicker: 'Voir en action', title: 'Regardez une équipe créer et lancer un site.', sub: 'Une demande en mots simples. Le PM fait le plan, l’équipe construit, et le site est en ligne à sa propre adresse.', play: 'Lancer la démo', length: '42 secondes', close: 'Fermer', caption: 'La vraie app equipe avec des données d’exemple.' },
    steps: { claude: 'Vous avez fait quelque chose dans Claude ? Apportez-le' },
    proof: {
      kicker: 'Clients', title: 'Des équipes qui tournent avec equipe.', sub: 'Ce que chaque équipe fait avec equipe, en faits simples.', label: 'Clients', story: 'Lire l’histoire', visit: 'Ouvrir le site',
      customers: {
        cj: { what: 'CJ', fact: 'Client payant. L’équipe de CJ utilise equipe pour du vrai travail.' },
        gba: { what: 'Entraînement de football dans la baie de San Francisco', fact: 'Son équipe equipe a créé et fait tourner goldenbootacademy.app : le site, l’inscription et les comptes des joueurs, et les réservations, sur son propre domaine.' },
        ironact: { what: 'Une entreprise de projets de marque native IA', fact: 'Son équipe crée et fait tourner des sites de projets de marque avec equipe.' },
      },
    },
    gallery: { cost: 'environ {c} crédits', costNote: 'Les crédits indiqués sont ceux d’une première version typique : la médiane des équipes de vrais clients en novembre 2026. Vous voyez l’estimation avant le début.' },
    price: {
      kicker: 'Tarifs', title: 'Commencez gratuitement. Payez ce que fait l’équipe.', sub: 'Tout ce que fait l’équipe se paie en crédits, et vous voyez l’estimation avant le début.', link: 'Voir les offres et les prix',
      cards: [
        { title: 'Gratuit pour commencer', text: '500 crédits à la création de votre équipe. Sans carte.' },
        { title: 'Une première version : environ 700 crédits', text: 'Le premier lancement typique de vraies équipes, environ 33 minutes. Votre première version est offerte.' },
        { title: 'Une nouvelle fonction : environ 1 250 crédits', text: 'Un exemple réel : inscription et réservations ajoutées à un site en ligne.' },
      ],
    },
  },
};

/** Pricing page: "What it usually costs", in dollars (the pricing page is where dollars belong). */
export const USUAL_COSTS: Record<LocaleCode, { title: string; sub: string; items: [string, string, string][]; note: string }> = {
  en: { title: 'What it usually costs', sub: 'Real examples from customer teams, November 2026.', items: [['A first version, live at its own address', 'about $7', 'Median of real teams, most under $15. Your first version is on us.'], ['A new feature on a live site', 'about $12.50', 'One real example: player sign-up and bookings.'], ['Keeping it live, with no new work', '$19 a month', 'The Team plan with 0 monthly credits: hosting, storage and 5 people.']], note: 'Every request shows its estimate before it starts, and you can set a monthly cap.' },
  ko: { title: '보통 이 정도 들어요', sub: '2026년 11월 실제 고객 팀의 예예요.', items: [['첫 버전, 자기 주소로 공개까지', '약 $7', '실제 팀의 중앙값, 대부분 $15 이하. 첫 버전은 저희가 내요.'], ['운영 중인 사이트에 새 기능 하나', '약 $12.50', '실제 예: 선수 회원가입과 예약.'], ['새 작업 없이 계속 열어 두기', '월 $19', '월 크레딧 0인 Team 플랜: 호스팅, 저장 공간, 5명.']], note: '모든 요청은 시작 전에 예상 비용을 보여주고, 월 상한도 정할 수 있어요.' },
  ja: { title: 'ふつうはこのくらい', sub: '2026 年 11 月の実際のお客さまチームの例です。', items: [['最初のバージョンを独自アドレスで公開', '約 $7', '実際のチームの中央値で、ほとんどが $15 以下。最初のバージョンは私たちが負担します。'], ['公開中のサイトに新しい機能', '約 $12.50', '実例: 選手の会員登録と予約。'], ['新しい作業なしで公開を続ける', '月 $19', '月間クレジット 0 の Team プラン: ホスティング、ストレージ、5 人。']], note: 'どのリクエストも始める前に見積もりが表示され、月の上限も設定できます。' },
  'zh-CN': { title: '通常的花费', sub: '2026 年 11 月真实客户团队的例子。', items: [['首个版本，在自己的地址上线', '约 $7', '真实团队的中位数，多数低于 $15。首个版本由我们承担。'], ['为已上线网站加一个新功能', '约 $12.50', '真实例子：球员注册和预约。'], ['不做新工作，只保持上线', '每月 $19', '每月 0 积分的 Team 方案：托管、存储和 5 人。']], note: '每个请求开始前都会显示预估，你也可以设置每月上限。' },
  es: { title: 'Lo que suele costar', sub: 'Ejemplos reales de equipos de clientes, noviembre de 2026.', items: [['Una primera versión, publicada en su propia dirección', 'unos $7', 'Mediana de equipos reales, casi todos por debajo de $15. La primera versión corre por nuestra cuenta.'], ['Una función nueva en un sitio publicado', 'unos $12,50', 'Un ejemplo real: registro de jugadores y reservas.'], ['Mantenerlo publicado, sin trabajo nuevo', '$19 al mes', 'El plan Team con 0 créditos al mes: alojamiento, almacenamiento y 5 personas.']], note: 'Cada pedido muestra su estimación antes de empezar, y puedes poner un límite mensual.' },
  'pt-BR': { title: 'Quanto costuma custar', sub: 'Exemplos reais de times de clientes, novembro de 2026.', items: [['Uma primeira versão, no ar no próprio endereço', 'cerca de $7', 'Mediana de times reais, quase todos abaixo de $15. A primeira versão é por nossa conta.'], ['Um recurso novo em um site no ar', 'cerca de $12,50', 'Um exemplo real: cadastro de jogadores e agendamentos.'], ['Manter no ar, sem trabalho novo', '$19 por mês', 'O plano Team com 0 créditos mensais: hospedagem, armazenamento e 5 pessoas.']], note: 'Cada pedido mostra a estimativa antes de começar, e você pode definir um limite mensal.' },
  de: { title: 'Was es meistens kostet', sub: 'Echte Beispiele von Kundenteams, November 2026.', items: [['Eine erste Version, live unter eigener Adresse', 'etwa $7', 'Median echter Teams, meist unter $15. Deine erste Version übernehmen wir.'], ['Eine neue Funktion auf einer laufenden Website', 'etwa $12,50', 'Ein echtes Beispiel: Spieler-Anmeldung und Buchungen.'], ['Online halten, ohne neue Arbeit', '$19 im Monat', 'Der Team-Plan mit 0 monatlichen Credits: Hosting, Speicher und 5 Personen.']], note: 'Jede Anfrage zeigt vorher ihre Schätzung, und du kannst ein Monatslimit setzen.' },
  fr: { title: 'Ce que ça coûte d’habitude', sub: 'Exemples réels d’équipes clientes, novembre 2026.', items: [['Une première version, en ligne à sa propre adresse', 'environ 7 $', 'Médiane d’équipes réelles, presque toujours sous 15 $. Votre première version est offerte.'], ['Une nouvelle fonction sur un site en ligne', 'environ 12,50 $', 'Un exemple réel : inscription des joueurs et réservations.'], ['Garder le site en ligne, sans nouveau travail', '19 $ par mois', 'L’offre Team avec 0 crédit mensuel : hébergement, stockage et 5 personnes.']], note: 'Chaque demande affiche son estimation avant de commencer, et vous pouvez fixer un plafond mensuel.' },
};

/**
 * The demo video's captions, drawn over the video in the page's language (the video itself carries no words).
 * Times are the video's own (seconds), from equipe-launch/marketing/demo-video-x/source/timeline.js (CAPS and the end card).
 * The same lines are written to public/video/captions-<code>.vtt for full screen and screen readers.
 */
export const DEMO_CAP_TIMES: [number, number][] = [[0.25, 5.55], [5.85, 10.45], [10.75, 15.3], [15.5, 20.75], [21.0, 28.95], [29.2, 33.4], [33.6, 37.35]];
/** End card: the title, the line under it and the address fade in one after another from these times, until the end. */
export const DEMO_END_TIMES = [38.3, 38.65, 39.1] as const;
export const DEMO_CAPS: Record<LocaleCode, { caps: [string, string][]; end: [string, string] }> = {
  en: {
    caps: [['Tell your team what you want.', 'In your own words.'], ['Your PM turns it into a plan.', 'Who does what, step by step.'], ['Your team builds it.', 'Designer, engineers and QA, working together.'], ['Live, at your own address.', 'Pick a domain. Your team sets it up.'], ['Sign-in, payments, admin.', 'One request each.'], ['A brand kit, logo included.', 'Colors, type and voice, ready to use.'], ['Then it helps you grow.', 'Visitors, sign-ups and tests your team runs.']],
    end: ['Your AI startup team.', 'No coding needed.'],
  },
  ko: {
    caps: [['팀에게 원하는 걸 말하세요.', '평소 쓰는 말로요.'], ['PM이 계획으로 바꿔요.', '누가 무엇을 할지, 단계별로요.'], ['팀이 만들어요.', '디자이너, 엔지니어, QA가 함께요.'], ['내 주소로 공개돼요.', '도메인만 고르면 팀이 연결해요.'], ['로그인, 결제, 관리자 페이지.', '각각 한 번만 부탁하면 돼요.'], ['로고까지 담긴 브랜드 키트.', '색, 글꼴, 말투를 바로 쓸 수 있어요.'], ['그다음엔 성장을 도와요.', '방문자, 가입, 팀이 돌리는 실험까지.']],
    end: ['나만의 AI 스타트업 팀.', '코딩은 필요 없어요.'],
  },
  ja: {
    caps: [['チームにやりたいことを伝える。', 'ふだんの言葉で。'], ['PM が計画にまとめる。', '誰が何をするか、ステップごとに。'], ['チームが作る。', 'デザイナー、エンジニア、QA が一緒に。'], ['自分のアドレスで公開。', 'ドメインを選べば、チームが設定します。'], ['ログイン、決済、管理画面。', 'どれもひと言頼むだけ。'], ['ロゴ入りのブランドキット。', '色、書体、トーンをすぐに使えます。'], ['そして、成長を手伝う。', '訪問者、登録、チームが回すテストまで。']],
    end: ['あなたの AI スタートアップチーム。', 'コーディングは不要です。'],
  },
  'zh-CN': {
    caps: [['告诉团队你想要什么。', '用你自己的话说。'], ['PM 把它变成计划。', '谁做什么，一步一步来。'], ['团队动手搭建。', '设计师、工程师和 QA 一起协作。'], ['在你自己的地址上线。', '选个域名，团队帮你配好。'], ['登录、支付、管理后台。', '每样只需提一次。'], ['品牌套件，连 Logo 都有。', '配色、字体和语气，拿来就用。'], ['然后帮你增长。', '访客、注册，还有团队跑的测试。']],
    end: ['你的 AI 创业团队。', '无需写代码。'],
  },
  es: {
    caps: [['Dile a tu equipo lo que quieres.', 'Con tus propias palabras.'], ['Tu PM lo convierte en un plan.', 'Quién hace qué, paso a paso.'], ['Tu equipo lo construye.', 'Diseño, ingeniería y QA, trabajando juntos.'], ['Publicado en tu propia dirección.', 'Elige un dominio. Tu equipo lo configura.'], ['Acceso, pagos y panel de gestión.', 'Un pedido para cada uno.'], ['Un kit de marca, con logo.', 'Colores, tipografía y tono, listos para usar.'], ['Y después te ayuda a crecer.', 'Visitas, registros y pruebas que hace tu equipo.']],
    end: ['Tu equipo de startup con IA.', 'Sin programar.'],
  },
  'pt-BR': {
    caps: [['Diga ao seu time o que você quer.', 'Com suas próprias palavras.'], ['Seu PM transforma isso em um plano.', 'Quem faz o quê, passo a passo.'], ['Seu time constrói.', 'Design, engenharia e QA, trabalhando juntos.'], ['No ar, no seu próprio endereço.', 'Escolha um domínio. Seu time configura.'], ['Login, pagamentos e painel de gestão.', 'Um pedido para cada um.'], ['Um kit de marca, com logo.', 'Cores, fontes e tom de voz, prontos para usar.'], ['Depois, ajuda você a crescer.', 'Visitas, cadastros e testes que seu time faz.']],
    end: ['Seu time de startup com IA.', 'Sem precisar programar.'],
  },
  de: {
    caps: [['Sag deinem Team, was du willst.', 'In deinen eigenen Worten.'], ['Dein PM macht daraus einen Plan.', 'Wer was macht, Schritt für Schritt.'], ['Dein Team baut es.', 'Design, Engineering und QA, gemeinsam.'], ['Live unter deiner eigenen Adresse.', 'Such dir eine Domain aus. Dein Team richtet sie ein.'], ['Anmeldung, Zahlungen, Admin.', 'Je eine Bitte genügt.'], ['Ein Brand-Kit, Logo inklusive.', 'Farben, Schrift und Tonalität, sofort nutzbar.'], ['Dann hilft es dir beim Wachsen.', 'Besucher, Anmeldungen und Tests deines Teams.']],
    end: ['Dein KI-Startup-Team.', 'Ganz ohne Programmieren.'],
  },
  fr: {
    caps: [['Dites à votre équipe ce que vous voulez.', 'Avec vos propres mots.'], ['Votre PM en fait un plan.', 'Qui fait quoi, étape par étape.'], ['Votre équipe le construit.', 'Design, développement et QA, ensemble.'], ['En ligne, à votre propre adresse.', 'Choisissez un domaine. Votre équipe s’en occupe.'], ['Connexion, paiements, administration.', 'Une demande pour chacun.'], ['Un kit de marque, logo compris.', 'Couleurs, typographie et ton, prêts à l’emploi.'], ['Puis elle vous aide à grandir.', 'Visiteurs, inscriptions et tests menés par votre équipe.']],
    end: ['Votre équipe de startup IA.', 'Sans coder.'],
  },
};
