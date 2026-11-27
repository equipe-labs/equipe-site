/**
 * "Move your project to equipe": bring a project made in Claude Code, Cursor, Lovable, Bolt, v0, Replit, GitHub or a ZIP.
 * Used by /migrate/ (src/pages/[...locale]/migrate.astro), the footer and the home FAQ ("What can I bring?").
 * The import itself runs on app.equipe.im ("Import a project").
 *
 * Only claim what ships. Tool names are used descriptively: no third-party logos, and the page closes with `disclaimer`.
 * No prices here beyond the first import's free AI work.
 */
import type { LocaleCode } from '../i18n';

/** Where every import link goes; `placement` becomes utm_content (hero, tiles-lovable, final, …). */
export const migrateHref = (placement: string) =>
  `https://app.equipe.im/new?import=1&utm_source=equipe.im&utm_medium=landing&utm_campaign=migrate&utm_content=${encodeURIComponent(placement)}`;

export const SOURCES = ['claude-code', 'lovable', 'bolt', 'v0', 'replit', 'github', 'zip', 'website'] as const;
export type SourceKey = (typeof SOURCES)[number];
/** How the code reaches equipe, per source (picks the tile's icon). */
// v0: GitHub only. v0's docs (https://v0.app/docs/github, https://v0.app/docs/faqs, checked 2026-11-28) document
// Project menu → Settings → GitHub → Connect (a new private repo) and no ZIP download.
export const SOURCE_METHOD: Record<SourceKey, 'prompt' | 'github' | 'zip' | 'url'> = {
  'claude-code': 'prompt', lovable: 'github', bolt: 'zip', v0: 'github', replit: 'zip', github: 'github', zip: 'zip', website: 'url',
};

interface Item { title: string; text: string }
interface QA { question: string; answer: string }
interface Source { name: string; how: string; method: string }

export interface MigrateCopy {
  /** Footer link label. */
  nav: string;
  /** Link after the home FAQ answer "What can I bring?". */
  homeLink: string;
  page: { title: string; desc: string; ogTitle: string; kicker: string; h1: string; lead: string; cta: string; secondary: string; free: string };
  sources: { title: string; sub: string; items: Record<SourceKey, Source>; open: string; artifact: string; artifactLink: string };
  steps: { title: string; items: [Item, Item, Item] };
  kept: {
    title: string; sub: string;
    keptTitle: string; kept: [string, string, string, string, string];
    adaptedTitle: string; adapted: [string, string, string, string, string]; adaptedNote: string;
    after: [Item, Item, Item];
  };
  prompt: { title: string; sub: string; label: string; copy: string; copied: string; text: string; note: string };
  faq: { title: string; items: [QA, QA, QA, QA, QA, QA] };
  cta: { title: string; sub: string; button: string };
  disclaimer: string;
}

export const MIGRATE: Record<LocaleCode, MigrateCopy> = {
  en: {
    nav: 'Move your project',
    homeLink: 'How to move a project',
    page: {
      title: 'Move your Claude Code, Lovable, Bolt or v0 project to equipe',
      desc: 'Bring a project from Claude Code, Cursor, Lovable, Bolt, v0, Replit, GitHub or a ZIP. Your design is kept, your AI team takes it live on Cloudflare and keeps building it. No coding needed.',
      ogTitle: 'Move your project to equipe',
      kicker: 'Move to equipe',
      h1: 'Move your Claude Code, Lovable, Bolt or v0 project to equipe.',
      lead: 'Your design stays as it is. Your AI team puts it live and keeps building and growing it. No coding needed.',
      cta: 'Import your project',
      secondary: 'Copy the prompt',
      free: 'The AI work for your first import is on us, up to 300 credits.',
    },
    sources: {
      title: 'Pick where your project lives',
      sub: 'Each tile opens the import in equipe. You only need the code, a link or a ZIP.',
      items: {
        'claude-code': { name: 'Claude Code or Cursor', how: 'Paste our ready-made prompt into your session. It packs the project and gives you a link.', method: 'Prompt' },
        lovable: { name: 'Lovable', how: 'Connect your project to GitHub in Lovable, then paste the repository link.', method: 'GitHub' },
        bolt: { name: 'Bolt', how: 'Download the project as a ZIP, or push it to GitHub and paste the link.', method: 'ZIP or GitHub' },
        v0: { name: 'v0', how: 'In v0, open the project menu (…) → Settings → GitHub → Connect. v0 puts your code in a new private repository; paste its link.', method: 'GitHub' },
        replit: { name: 'Replit', how: 'Download the project as a ZIP, or push it to GitHub and paste the link.', method: 'ZIP or GitHub' },
        github: { name: 'GitHub', how: 'Paste the repository link. Private repositories need a one-time, read-only connect.', method: 'Link' },
        zip: { name: 'A ZIP file', how: 'Drag and drop the ZIP of your project, up to 100 MB.', method: 'ZIP' },
        website: { name: 'A website', how: 'Built it with a site builder? Paste the site’s address.', method: 'Link' },
      },
      open: 'Import',
      artifact: 'Made something as a Claude artifact?',
      artifactLink: 'Paste the artifact instead',
    },
    steps: {
      title: 'Three steps',
      items: [
        { title: 'Copy the prompt', text: 'In Claude Code or Cursor, paste our prompt. It writes EQUIPE.md, a short note on what your project is and needs, and packs the code. From Lovable, Bolt, v0 or Replit, export a ZIP or push to GitHub instead.' },
        { title: 'Paste the link or drop the ZIP', text: 'In equipe, choose Import a project. Paste the GitHub link, or drop the ZIP.' },
        { title: 'Your team takes it live', text: 'Your AI team imports the code as it is, adapts only what can’t run on Cloudflare Workers, tells you what and why, and puts it live.' },
      ],
    },
    kept: {
      title: 'What is kept, and what is adapted',
      sub: 'Your code is imported as it is, not rewritten. equipe runs on Cloudflare Workers, so only what can’t run there changes.',
      keptTitle: 'Kept as it is',
      kept: [
        'Your design, pixel for pixel (a Next.js 16 app we tested matched 1:1)',
        'Next.js apps, App Router or Pages, through the OpenNext Cloudflare adapter',
        'Pages, API routes, server actions and middleware',
        'Tailwind and the rest of your styles',
        'Your components, content and copy',
      ],
      adaptedTitle: 'Adapted, with a reason',
      adapted: [
        '`runtime = "edge"` lines',
        'Code that writes files to disk',
        'Native packages such as sharp or bcrypt',
        'Vercel KV and Vercel Blob',
        'Image optimization: images are served as they are',
      ],
      adaptedNote: 'Your team tells you what changed and why.',
      after: [
        { title: 'A clear report', text: 'After the import you see what was kept, what was adapted and why, and which keys to add.' },
        { title: 'Keys stay secret', text: 'Each key goes into a one-time secure page. It is never shown or logged.' },
        { title: 'Back to your GitHub', text: 'If you like, your code is pushed to your own GitHub repository after each release.' },
      ],
    },
    prompt: {
      title: 'Copy this prompt',
      sub: 'For Claude Code or Cursor. Paste it into a session opened in your project.',
      label: 'Prompt',
      copy: 'Copy',
      copied: 'Copied',
      text: 'Prepare this project to move to equipe.\n1. Write EQUIPE.md: the stack, the pages, the API routes, the names of the secrets it needs (no values) and any accessibility requirements.\n2. List every environment variable in .env.example, without values.\n3. Keep .env files and secrets out of what you pack.\n4. Make a ZIP of the project, or push it to a GitHub repository, and print the link so I can paste it into equipe.',
      note: 'This is a short version. The full prompt is in equipe under Import a project, then From Claude Code / Cursor / your computer.',
    },
    faq: {
      title: 'Questions',
      items: [
        { question: 'Will my design stay the same?', answer: 'Yes. Your code is imported as it is, not rewritten, so your design stays as you made it. On a Next.js 16 app we tested, the result matched pixel for pixel. Only what can’t run on Cloudflare Workers is adapted, and your team tells you what and why.' },
        { question: 'Does my Next.js app work?', answer: 'Yes. Next.js apps, App Router or Pages, run as they are through the OpenNext Cloudflare adapter: pages, API routes, server actions, middleware and Tailwind keep working. What a Worker can’t do, such as writing files to disk, native packages like sharp or bcrypt, or Vercel KV and Blob, is adapted. Images are served as they are.' },
        { question: 'Can my code go back to my GitHub?', answer: 'Yes. Turn it on and your code is pushed to your own GitHub repository after each release. Importing a private repository needs a one-time, read-only GitHub connect.' },
        { question: 'Can I use my own Anthropic key for AI?', answer: 'Yes. Use equipe’s built-in AI, paid with credits and no key needed, or add your own Anthropic key. It is stored encrypted as a product secret, never shown or logged. With your key you can call Claude directly, with full control of the system prompt and output format, or go through equipe’s AI gateway, billed to your key.' },
        { question: 'What about accessibility?', answer: 'It’s your code, so every pixel stays editable. Before each release, equipe runs an automated accessibility check (axe-core: contrast, labels, focus and alt text) on key pages. For projects that must meet WCAG 2.1 AA, or KWCAG 2.2 in Korea, the check can block a release until it passes.' },
        { question: 'What does the import cost?', answer: 'The AI work for your first import is on equipe, up to 300 credits.' },
      ],
    },
    cta: { title: 'Bring your project as it is.', sub: 'Your AI team takes it live and keeps it growing. No coding needed.', button: 'Import your project' },
    disclaimer: 'equipe is an independent product and is not affiliated with the tools named on this page. Their names are trademarks of their respective owners.',
  },

  ko: {
    nav: '프로젝트 옮겨오기',
    homeLink: '프로젝트 옮겨오는 방법',
    page: {
      title: 'Claude Code, Lovable, Bolt, v0 프로젝트를 equipe로 옮겨요',
      desc: 'Claude Code, Cursor, Lovable, Bolt, v0, Replit, GitHub, ZIP에서 프로젝트를 가져오세요. 디자인은 그대로 두고, AI 팀이 Cloudflare에 올려 계속 만들어 가요. 코딩은 필요 없어요.',
      ogTitle: '프로젝트를 equipe로 옮겨요',
      kicker: 'equipe로 옮기기',
      h1: 'Claude Code, Lovable, Bolt, v0 프로젝트를 equipe로 옮겨요.',
      lead: '디자인은 그대로예요. AI 팀이 서비스로 올리고, 계속 만들고 키워 가요. 코딩은 필요 없어요.',
      cta: '프로젝트 가져오기',
      secondary: '프롬프트 복사하기',
      free: '첫 가져오기의 AI 작업은 300크레딧까지 저희가 내요.',
    },
    sources: {
      title: '프로젝트가 있는 곳을 고르세요',
      sub: '타일을 누르면 equipe에서 가져오기가 열려요. 코드나 링크, ZIP 하나면 돼요.',
      items: {
        'claude-code': { name: 'Claude Code 또는 Cursor', how: '준비된 프롬프트를 세션에 붙여 넣으세요. 프로젝트를 묶어서 링크를 알려 줘요.', method: '프롬프트' },
        lovable: { name: 'Lovable', how: 'Lovable에서 프로젝트를 GitHub에 연결한 뒤 저장소 링크를 붙여 넣으세요.', method: 'GitHub' },
        bolt: { name: 'Bolt', how: '프로젝트를 ZIP으로 내려받거나, GitHub에 올리고 링크를 붙여 넣으세요.', method: 'ZIP 또는 GitHub' },
        v0: { name: 'v0', how: 'v0에서 프로젝트 메뉴(…) → Settings → GitHub → Connect를 누르세요. v0가 코드를 새 비공개 저장소에 올려 줘요. 그 링크를 붙여 넣으면 돼요.', method: 'GitHub' },
        replit: { name: 'Replit', how: '프로젝트를 ZIP으로 내려받거나, GitHub에 올리고 링크를 붙여 넣으세요.', method: 'ZIP 또는 GitHub' },
        github: { name: 'GitHub', how: '저장소 링크를 붙여 넣으세요. 비공개 저장소는 읽기 전용으로 한 번만 연결하면 돼요.', method: '링크' },
        zip: { name: 'ZIP 파일', how: '프로젝트 ZIP을 끌어다 놓으세요. 100MB까지 돼요.', method: 'ZIP' },
        website: { name: '웹사이트', how: '사이트 빌더로 만들었나요? 사이트 주소를 붙여 넣으세요.', method: '링크' },
      },
      open: '가져오기',
      artifact: 'Claude 아티팩트로 만들었나요?',
      artifactLink: '아티팩트를 붙여 넣기',
    },
    steps: {
      title: '세 단계면 돼요',
      items: [
        { title: '프롬프트 복사하기', text: 'Claude Code나 Cursor에 프롬프트를 붙여 넣으세요. 프로젝트가 무엇이고 무엇이 필요한지 적은 EQUIPE.md를 쓰고 코드를 묶어 줘요. Lovable, Bolt, v0, Replit에서는 ZIP으로 내보내거나 GitHub에 올리면 돼요.' },
        { title: '링크 붙여 넣기 또는 ZIP 놓기', text: 'equipe에서 프로젝트 가져오기를 고르고, GitHub 링크를 붙여 넣거나 ZIP을 끌어다 놓으세요.' },
        { title: '팀이 서비스로 올려요', text: 'AI 팀이 코드를 그대로 가져오고, Cloudflare Workers에서 돌지 않는 부분만 고쳐요. 무엇을 왜 고쳤는지 알려 드리고 서비스로 올려요.' },
      ],
    },
    kept: {
      title: '그대로 두는 것, 고치는 것',
      sub: '코드는 새로 쓰지 않고 그대로 가져와요. equipe는 Cloudflare Workers에서 돌아가서, 거기서 돌지 않는 부분만 바뀌어요.',
      keptTitle: '그대로 두는 것',
      kept: [
        '디자인을 픽셀 그대로 (테스트한 Next.js 16 앱이 1:1로 일치했어요)',
        'Next.js 앱(App Router, Pages 모두)을 OpenNext Cloudflare 어댑터로',
        '페이지, API 라우트, 서버 액션, 미들웨어',
        'Tailwind와 나머지 스타일',
        '컴포넌트, 콘텐츠, 문구',
      ],
      adaptedTitle: '이유와 함께 고치는 것',
      adapted: [
        '`runtime = "edge"` 줄',
        '디스크에 파일을 쓰는 코드',
        'sharp, bcrypt 같은 네이티브 패키지',
        'Vercel KV와 Vercel Blob',
        '이미지 최적화: 이미지는 원본 그대로 보내요',
      ],
      adaptedNote: '무엇을 왜 바꿨는지 팀이 알려 드려요.',
      after: [
        { title: '한눈에 보는 보고서', text: '가져온 뒤에 그대로 둔 것, 고친 것과 그 이유, 넣어야 할 키를 보여 드려요.' },
        { title: '키는 비밀로', text: '키는 한 번만 열리는 보안 페이지에 붙여 넣어요. 화면에도 로그에도 남지 않아요.' },
        { title: '다시 내 GitHub로', text: '원하면 릴리스할 때마다 코드를 내 GitHub 저장소로 보내 드려요.' },
      ],
    },
    prompt: {
      title: '이 프롬프트를 복사하세요',
      sub: 'Claude Code나 Cursor용이에요. 프로젝트를 연 세션에 붙여 넣으세요.',
      label: '프롬프트',
      copy: '복사',
      copied: '복사했어요',
      text: '이 프로젝트를 equipe로 옮길 수 있게 준비해 줘.\n1. EQUIPE.md를 써 줘: 스택, 페이지, API 라우트, 필요한 시크릿 이름(값은 빼고), 접근성 요구 사항.\n2. 모든 환경 변수를 값 없이 .env.example에 적어 줘.\n3. .env 파일과 시크릿은 묶는 대상에서 빼 줘.\n4. 프로젝트를 ZIP으로 만들거나 GitHub 저장소에 올리고, equipe에 붙여 넣을 수 있게 링크를 알려 줘.',
      note: '줄인 버전이에요. 전체 프롬프트는 equipe의 프로젝트 가져오기에서 "Claude Code / Cursor / 내 컴퓨터에서"를 누르면 있어요.',
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        { question: '디자인이 그대로 유지되나요?', answer: '네. 코드를 새로 쓰지 않고 그대로 가져와서, 만든 디자인이 그대로예요. 테스트한 Next.js 16 앱은 픽셀 단위로 똑같았어요. Cloudflare Workers에서 돌지 않는 부분만 고치고, 무엇을 왜 고쳤는지 팀이 알려 드려요.' },
        { question: 'Next.js 앱도 되나요?', answer: '네. Next.js 앱은 App Router든 Pages든 OpenNext Cloudflare 어댑터로 그대로 돌아가요. 페이지, API 라우트, 서버 액션, 미들웨어, Tailwind 모두 그대로 작동해요. 디스크에 파일 쓰기, sharp나 bcrypt 같은 네이티브 패키지, Vercel KV와 Blob처럼 Worker가 못 하는 부분은 고쳐요. 이미지는 원본 그대로 보내요.' },
        { question: '코드를 다시 내 GitHub로 받을 수 있나요?', answer: '네. 켜 두면 릴리스할 때마다 코드를 내 GitHub 저장소로 보내 드려요. 비공개 저장소를 가져올 때는 읽기 전용으로 GitHub를 한 번만 연결하면 돼요.' },
        { question: 'AI에 내 Anthropic 키를 써도 되나요?', answer: '네. 키 없이 크레딧으로 쓰는 equipe 기본 AI를 써도 되고, 내 Anthropic 키를 넣어도 돼요. 키는 서비스 시크릿으로 암호화해 저장하고, 화면에도 로그에도 남지 않아요. 내 키로 Claude를 직접 불러 시스템 프롬프트와 출력 형식을 마음대로 정하거나, equipe AI 게이트웨이를 거쳐 내 키로 청구되게 할 수 있어요.' },
        { question: '접근성은 어떻게 하나요?', answer: '내 코드라서 모든 픽셀을 고칠 수 있어요. equipe는 릴리스 전에 주요 페이지에서 자동 접근성 검사(axe-core: 대비, 레이블, 포커스, 대체 텍스트)를 돌려요. WCAG 2.1 AA나 한국의 KWCAG 2.2를 지켜야 하는 프로젝트라면, 검사를 통과할 때까지 릴리스를 막도록 할 수 있어요.' },
        { question: '가져오는 데 비용이 드나요?', answer: '첫 가져오기의 AI 작업은 300크레딧까지 equipe가 내요.' },
      ],
    },
    cta: { title: '만든 그대로 가져오세요.', sub: 'AI 팀이 서비스로 올리고 계속 키워 가요. 코딩은 필요 없어요.', button: '프로젝트 가져오기' },
    disclaimer: 'equipe는 독립된 서비스로, 이 페이지에 나온 도구들과 제휴 관계가 없어요. 각 이름은 해당 소유자의 상표예요.',
  },

  ja: {
    nav: 'プロジェクトを移す',
    homeLink: 'プロジェクトの移し方',
    page: {
      title: 'Claude Code・Lovable・Bolt・v0 のプロジェクトを equipe へ',
      desc: 'Claude Code、Cursor、Lovable、Bolt、v0、Replit、GitHub、ZIP からプロジェクトを持ち込めます。デザインはそのまま、AI チームが Cloudflare で公開し、作り続けます。コーディングは不要です。',
      ogTitle: 'プロジェクトを equipe へ移す',
      kicker: 'equipe へ移す',
      h1: 'Claude Code・Lovable・Bolt・v0 のプロジェクトを equipe へ。',
      lead: 'デザインはそのまま。AI チームが公開し、作り続け、育てていきます。コーディングは不要です。',
      cta: 'プロジェクトを取り込む',
      secondary: 'プロンプトをコピー',
      free: '最初の取り込みの AI 作業は、300 クレジットまで equipe が負担します。',
    },
    sources: {
      title: 'プロジェクトがある場所を選ぶ',
      sub: 'タイルを押すと equipe の取り込み画面が開きます。必要なのはコード、リンク、または ZIP だけです。',
      items: {
        'claude-code': { name: 'Claude Code または Cursor', how: '用意したプロンプトをセッションに貼り付けます。プロジェクトをまとめてリンクを出してくれます。', method: 'プロンプト' },
        lovable: { name: 'Lovable', how: 'Lovable でプロジェクトを GitHub に接続し、リポジトリのリンクを貼り付けます。', method: 'GitHub' },
        bolt: { name: 'Bolt', how: 'プロジェクトを ZIP でダウンロードするか、GitHub に push してリンクを貼り付けます。', method: 'ZIP または GitHub' },
        v0: { name: 'v0', how: 'v0 でプロジェクトメニュー（…）→ Settings → GitHub → Connect を選びます。v0 が新しい非公開リポジトリにコードを入れるので、そのリンクを貼り付けます。', method: 'GitHub' },
        replit: { name: 'Replit', how: 'プロジェクトを ZIP でダウンロードするか、GitHub に push してリンクを貼り付けます。', method: 'ZIP または GitHub' },
        github: { name: 'GitHub', how: 'リポジトリのリンクを貼り付けます。非公開リポジトリは、読み取り専用の接続を一度だけ行います。', method: 'リンク' },
        zip: { name: 'ZIP ファイル', how: 'プロジェクトの ZIP をドラッグ＆ドロップ。100 MB まで対応します。', method: 'ZIP' },
        website: { name: 'ウェブサイト', how: 'サイトビルダーで作りましたか？サイトのアドレスを貼り付けます。', method: 'リンク' },
      },
      open: '取り込む',
      artifact: 'Claude のアーティファクトで作りましたか？',
      artifactLink: 'アーティファクトを貼り付ける',
    },
    steps: {
      title: '3 つのステップ',
      items: [
        { title: 'プロンプトをコピー', text: 'Claude Code か Cursor にプロンプトを貼り付けます。プロジェクトの内容と必要なものをまとめた EQUIPE.md を書き、コードをまとめます。Lovable、Bolt、v0、Replit からは ZIP で書き出すか GitHub に push します。' },
        { title: 'リンクを貼るか ZIP を置く', text: 'equipe で「プロジェクトを取り込む」を選び、GitHub のリンクを貼り付けるか ZIP をドロップします。' },
        { title: 'チームが公開する', text: 'AI チームがコードをそのまま取り込み、Cloudflare Workers で動かない部分だけを調整します。何をなぜ変えたかを伝えてから公開します。' },
      ],
    },
    kept: {
      title: 'そのまま残すもの、調整するもの',
      sub: 'コードは書き直さず、そのまま取り込みます。equipe は Cloudflare Workers で動くため、そこで動かない部分だけが変わります。',
      keptTitle: 'そのまま残す',
      kept: [
        'デザインをピクセル単位で（テストした Next.js 16 アプリは 1:1 で一致）',
        'Next.js アプリ（App Router も Pages も）を OpenNext Cloudflare アダプターで',
        'ページ、API ルート、サーバーアクション、ミドルウェア',
        'Tailwind とその他のスタイル',
        'コンポーネント、コンテンツ、文章',
      ],
      adaptedTitle: '理由を添えて調整',
      adapted: [
        '`runtime = "edge"` の行',
        'ディスクにファイルを書き込むコード',
        'sharp や bcrypt などのネイティブパッケージ',
        'Vercel KV と Vercel Blob',
        '画像最適化：画像は元のまま配信します',
      ],
      adaptedNote: '何をなぜ変えたかは、チームが伝えます。',
      after: [
        { title: 'わかりやすいレポート', text: '取り込み後、そのまま残したもの、調整したものとその理由、追加すべきキーが表示されます。' },
        { title: 'キーは秘密のまま', text: 'キーは一度だけ開く安全なページに貼り付けます。表示もログ記録もされません。' },
        { title: '自分の GitHub へ戻す', text: '希望すれば、リリースのたびにコードを自分の GitHub リポジトリへ push します。' },
      ],
    },
    prompt: {
      title: 'このプロンプトをコピー',
      sub: 'Claude Code または Cursor 用です。プロジェクトを開いたセッションに貼り付けてください。',
      label: 'プロンプト',
      copy: 'コピー',
      copied: 'コピーしました',
      text: 'このプロジェクトを equipe に移す準備をしてください。\n1. EQUIPE.md を書く：スタック、ページ、API ルート、必要なシークレットの名前（値は含めない）、アクセシビリティの要件。\n2. すべての環境変数を、値なしで .env.example に書き出す。\n3. .env ファイルとシークレットはまとめる対象から外す。\n4. プロジェクトを ZIP にするか GitHub リポジトリに push し、equipe に貼り付けられるようリンクを表示する。',
      note: 'これは短縮版です。完全なプロンプトは equipe の「プロジェクトを取り込む」から「Claude Code / Cursor / 自分のコンピューターから」を選ぶとあります。',
    },
    faq: {
      title: 'よくある質問',
      items: [
        { question: 'デザインはそのままですか？', answer: 'はい。コードは書き直さずそのまま取り込むので、作ったデザインはそのままです。テストした Next.js 16 アプリでは、ピクセル単位で一致しました。Cloudflare Workers で動かない部分だけを調整し、何をなぜ変えたかをチームが伝えます。' },
        { question: 'Next.js アプリは動きますか？', answer: 'はい。Next.js アプリは App Router でも Pages でも、OpenNext Cloudflare アダプターでそのまま動きます。ページ、API ルート、サーバーアクション、ミドルウェア、Tailwind も動きます。ディスクへのファイル書き込み、sharp や bcrypt などのネイティブパッケージ、Vercel KV や Blob など Worker でできないことは調整します。画像は元のまま配信します。' },
        { question: 'コードを自分の GitHub に戻せますか？', answer: 'はい。オンにすると、リリースのたびにコードを自分の GitHub リポジトリへ push します。非公開リポジトリの取り込みには、読み取り専用の GitHub 接続を一度だけ行います。' },
        { question: 'AI に自分の Anthropic キーを使えますか？', answer: 'はい。キー不要でクレジット払いの equipe 内蔵 AI を使うことも、自分の Anthropic キーを追加することもできます。キーはプロダクトのシークレットとして暗号化して保存され、表示もログ記録もされません。自分のキーなら、システムプロンプトと出力形式を自由に決めて Claude を直接呼び出すことも、equipe の AI ゲートウェイ経由で自分のキーに課金することもできます。' },
        { question: 'アクセシビリティはどうなりますか？', answer: '自分のコードなので、すべてのピクセルを編集できます。equipe はリリース前に主要ページで自動のアクセシビリティチェック（axe-core：コントラスト、ラベル、フォーカス、代替テキスト）を行います。WCAG 2.1 AA（韓国では KWCAG 2.2）を満たす必要があるプロジェクトでは、合格するまでリリースを止める設定にできます。' },
        { question: '取り込みに費用はかかりますか？', answer: '最初の取り込みの AI 作業は、300 クレジットまで equipe が負担します。' },
      ],
    },
    cta: { title: '作ったままのプロジェクトを持ち込もう。', sub: 'AI チームが公開し、育て続けます。コーディングは不要です。', button: 'プロジェクトを取り込む' },
    disclaimer: 'equipe は独立したプロダクトで、このページに登場するツールとは提携していません。各名称はそれぞれの所有者の商標です。',
  },

  'zh-CN': {
    nav: '迁移项目',
    homeLink: '如何迁移项目',
    page: {
      title: '把你的 Claude Code、Lovable、Bolt 或 v0 项目迁移到 equipe',
      desc: '从 Claude Code、Cursor、Lovable、Bolt、v0、Replit、GitHub 或 ZIP 带来你的项目。设计保持不变，AI 团队把它部署到 Cloudflare 上线，并持续开发。无需编程。',
      ogTitle: '把你的项目迁移到 equipe',
      kicker: '迁移到 equipe',
      h1: '把你的 Claude Code、Lovable、Bolt 或 v0 项目迁移到 equipe。',
      lead: '设计保持原样。AI 团队让它上线，并持续开发、帮它增长。无需编程。',
      cta: '导入你的项目',
      secondary: '复制提示词',
      free: '首次导入的 AI 工作由我们承担，最多 300 积分。',
    },
    sources: {
      title: '选择项目所在的位置',
      sub: '点击任一卡片即可在 equipe 中打开导入。只需要代码、一个链接或一个 ZIP。',
      items: {
        'claude-code': { name: 'Claude Code 或 Cursor', how: '把我们准备好的提示词粘贴到会话里。它会打包项目并给出链接。', method: '提示词' },
        lovable: { name: 'Lovable', how: '在 Lovable 中把项目连接到 GitHub，然后粘贴仓库链接。', method: 'GitHub' },
        bolt: { name: 'Bolt', how: '把项目下载为 ZIP，或推送到 GitHub 后粘贴链接。', method: 'ZIP 或 GitHub' },
        v0: { name: 'v0', how: '在 v0 中打开项目菜单（…）→ Settings → GitHub → Connect。v0 会把代码放进一个新的私有仓库，粘贴它的链接即可。', method: 'GitHub' },
        replit: { name: 'Replit', how: '把项目下载为 ZIP，或推送到 GitHub 后粘贴链接。', method: 'ZIP 或 GitHub' },
        github: { name: 'GitHub', how: '粘贴仓库链接。私有仓库只需一次性的只读连接。', method: '链接' },
        zip: { name: 'ZIP 文件', how: '拖放项目的 ZIP，最大 100 MB。', method: 'ZIP' },
        website: { name: '网站', how: '用建站工具做的？粘贴网站地址即可。', method: '链接' },
      },
      open: '导入',
      artifact: '是用 Claude artifact 做的？',
      artifactLink: '直接粘贴 artifact',
    },
    steps: {
      title: '三个步骤',
      items: [
        { title: '复制提示词', text: '在 Claude Code 或 Cursor 中粘贴我们的提示词。它会写一份 EQUIPE.md，简要说明项目是什么、需要什么，并打包代码。如果来自 Lovable、Bolt、v0 或 Replit，导出 ZIP 或推送到 GitHub 即可。' },
        { title: '粘贴链接或拖入 ZIP', text: '在 equipe 中选择“导入项目”，粘贴 GitHub 链接，或拖入 ZIP。' },
        { title: '团队让它上线', text: 'AI 团队原样导入代码，只调整无法在 Cloudflare Workers 上运行的部分，告诉你改了什么、为什么改，然后让它上线。' },
      ],
    },
    kept: {
      title: '保留什么，调整什么',
      sub: '代码原样导入，不会重写。equipe 运行在 Cloudflare Workers 上，只有无法在那里运行的部分才会改动。',
      keptTitle: '原样保留',
      kept: [
        '你的设计，像素级一致（我们测试的 Next.js 16 应用 1:1 吻合）',
        'Next.js 应用（App Router 或 Pages），通过 OpenNext Cloudflare 适配器运行',
        '页面、API 路由、Server Actions 和中间件',
        'Tailwind 以及其他样式',
        '你的组件、内容和文案',
      ],
      adaptedTitle: '附带原因的调整',
      adapted: [
        '`runtime = "edge"` 这类代码行',
        '向磁盘写文件的代码',
        'sharp、bcrypt 等原生包',
        'Vercel KV 和 Vercel Blob',
        '图片优化：图片按原样提供',
      ],
      adaptedNote: '团队会告诉你改了什么、为什么改。',
      after: [
        { title: '清晰的报告', text: '导入后，你会看到哪些原样保留、哪些做了调整以及原因，还有需要添加哪些密钥。' },
        { title: '密钥始终保密', text: '每个密钥都粘贴到一次性的安全页面中，不会被显示或记录到日志。' },
        { title: '回到你的 GitHub', text: '如果你愿意，每次发布后代码都会推送到你自己的 GitHub 仓库。' },
      ],
    },
    prompt: {
      title: '复制这段提示词',
      sub: '适用于 Claude Code 或 Cursor。粘贴到在项目中打开的会话里。',
      label: '提示词',
      copy: '复制',
      copied: '已复制',
      text: '请准备好把这个项目迁移到 equipe。\n1. 写一份 EQUIPE.md：技术栈、页面、API 路由、所需密钥的名称（不含值）以及无障碍要求。\n2. 把所有环境变量列在 .env.example 中，不含值。\n3. 打包时排除 .env 文件和密钥。\n4. 把项目打成 ZIP，或推送到 GitHub 仓库，并输出链接，方便我粘贴到 equipe。',
      note: '这是精简版。完整提示词在 equipe 的“导入项目”中，选择“从 Claude Code / Cursor / 你的电脑”即可找到。',
    },
    faq: {
      title: '常见问题',
      items: [
        { question: '我的设计会保持不变吗？', answer: '会。代码原样导入，不会重写，所以设计保持你做的样子。在我们测试的 Next.js 16 应用上，结果像素级一致。只有无法在 Cloudflare Workers 上运行的部分会被调整，团队会告诉你改了什么、为什么改。' },
        { question: '我的 Next.js 应用能运行吗？', answer: '能。Next.js 应用无论是 App Router 还是 Pages，都可以通过 OpenNext Cloudflare 适配器原样运行：页面、API 路由、Server Actions、中间件和 Tailwind 都能正常工作。Worker 做不到的事，例如向磁盘写文件、sharp 或 bcrypt 等原生包、Vercel KV 和 Blob，会做调整。图片按原样提供。' },
        { question: '代码能回到我的 GitHub 吗？', answer: '能。开启后，每次发布后代码都会推送到你自己的 GitHub 仓库。导入私有仓库只需一次性的只读 GitHub 连接。' },
        { question: 'AI 可以用我自己的 Anthropic 密钥吗？', answer: '可以。你可以使用 equipe 内置 AI，用积分支付、无需密钥；也可以添加你自己的 Anthropic 密钥。密钥作为产品密钥加密存储，不会被显示或记录到日志。用你自己的密钥，可以直接调用 Claude，完全掌控系统提示词和输出格式；也可以经由 equipe 的 AI 网关调用，费用计入你的密钥。' },
        { question: '无障碍怎么办？', answer: '代码是你的，每个像素都可以修改。每次发布前，equipe 会在关键页面上运行自动无障碍检查（axe-core：对比度、标签、焦点和替代文本）。对于必须符合 WCAG 2.1 AA（在韩国为 KWCAG 2.2）的项目，可以设置为检查通过前不允许发布。' },
        { question: '导入要花钱吗？', answer: '首次导入的 AI 工作由 equipe 承担，最多 300 积分。' },
      ],
    },
    cta: { title: '把项目原样带过来。', sub: 'AI 团队让它上线，并持续帮它增长。无需编程。', button: '导入你的项目' },
    disclaimer: 'equipe 是独立产品，与本页提到的工具没有关联。相关名称均为其各自所有者的商标。',
  },

  es: {
    nav: 'Trae tu proyecto',
    homeLink: 'Cómo traer un proyecto',
    page: {
      title: 'Lleva tu proyecto de Claude Code, Lovable, Bolt o v0 a equipe',
      desc: 'Trae un proyecto de Claude Code, Cursor, Lovable, Bolt, v0, Replit, GitHub o un ZIP. Tu diseño se mantiene; tu equipo de IA lo publica en Cloudflare y lo sigue construyendo. Sin programar.',
      ogTitle: 'Lleva tu proyecto a equipe',
      kicker: 'Muévete a equipe',
      h1: 'Lleva tu proyecto de Claude Code, Lovable, Bolt o v0 a equipe.',
      lead: 'Tu diseño se queda como está. Tu equipo de IA lo publica y lo sigue construyendo y haciendo crecer. Sin programar.',
      cta: 'Importa tu proyecto',
      secondary: 'Copia el prompt',
      free: 'El trabajo de IA de tu primera importación corre por nuestra cuenta, hasta 300 créditos.',
    },
    sources: {
      title: 'Elige dónde está tu proyecto',
      sub: 'Cada tarjeta abre la importación en equipe. Solo necesitas el código, un enlace o un ZIP.',
      items: {
        'claude-code': { name: 'Claude Code o Cursor', how: 'Pega nuestro prompt en tu sesión. Empaqueta el proyecto y te da un enlace.', method: 'Prompt' },
        lovable: { name: 'Lovable', how: 'Conecta tu proyecto a GitHub en Lovable y pega el enlace del repositorio.', method: 'GitHub' },
        bolt: { name: 'Bolt', how: 'Descarga el proyecto como ZIP, o súbelo a GitHub y pega el enlace.', method: 'ZIP o GitHub' },
        v0: { name: 'v0', how: 'En v0, abre el menú del proyecto (…) → Settings → GitHub → Connect. v0 pone tu código en un repositorio privado nuevo; pega su enlace.', method: 'GitHub' },
        replit: { name: 'Replit', how: 'Descarga el proyecto como ZIP, o súbelo a GitHub y pega el enlace.', method: 'ZIP o GitHub' },
        github: { name: 'GitHub', how: 'Pega el enlace del repositorio. Los privados necesitan una conexión única de solo lectura.', method: 'Enlace' },
        zip: { name: 'Un archivo ZIP', how: 'Arrastra y suelta el ZIP de tu proyecto, hasta 100 MB.', method: 'ZIP' },
        website: { name: 'Un sitio web', how: '¿Lo hiciste con un creador de sitios? Pega la dirección del sitio.', method: 'Enlace' },
      },
      open: 'Importar',
      artifact: '¿Lo hiciste como un artifact de Claude?',
      artifactLink: 'Pega el artifact',
    },
    steps: {
      title: 'Tres pasos',
      items: [
        { title: 'Copia el prompt', text: 'En Claude Code o Cursor, pega nuestro prompt. Escribe EQUIPE.md, una nota breve sobre qué es tu proyecto y qué necesita, y empaqueta el código. Desde Lovable, Bolt, v0 o Replit, exporta un ZIP o súbelo a GitHub.' },
        { title: 'Pega el enlace o suelta el ZIP', text: 'En equipe, elige Importar un proyecto. Pega el enlace de GitHub o suelta el ZIP.' },
        { title: 'Tu equipo lo publica', text: 'Tu equipo de IA importa el código tal cual, adapta solo lo que no puede ejecutarse en Cloudflare Workers, te cuenta qué cambió y por qué, y lo publica.' },
      ],
    },
    kept: {
      title: 'Qué se mantiene y qué se adapta',
      sub: 'Tu código se importa tal cual, no se reescribe. equipe funciona sobre Cloudflare Workers, así que solo cambia lo que no puede ejecutarse ahí.',
      keptTitle: 'Se mantiene tal cual',
      kept: [
        'Tu diseño, píxel a píxel (una app de Next.js 16 que probamos coincidió 1:1)',
        'Apps de Next.js, App Router o Pages, con el adaptador OpenNext para Cloudflare',
        'Páginas, rutas de API, server actions y middleware',
        'Tailwind y el resto de tus estilos',
        'Tus componentes, contenido y textos',
      ],
      adaptedTitle: 'Se adapta, con un motivo',
      adapted: [
        'Líneas `runtime = "edge"`',
        'Código que escribe archivos en disco',
        'Paquetes nativos como sharp o bcrypt',
        'Vercel KV y Vercel Blob',
        'Optimización de imágenes: las imágenes se sirven tal cual',
      ],
      adaptedNote: 'Tu equipo te cuenta qué cambió y por qué.',
      after: [
        { title: 'Un informe claro', text: 'Tras la importación ves qué se mantuvo, qué se adaptó y por qué, y qué claves añadir.' },
        { title: 'Las claves, en secreto', text: 'Cada clave se pega en una página segura de un solo uso. Nunca se muestra ni se registra.' },
        { title: 'De vuelta a tu GitHub', text: 'Si quieres, tu código se sube a tu propio repositorio de GitHub después de cada versión.' },
      ],
    },
    prompt: {
      title: 'Copia este prompt',
      sub: 'Para Claude Code o Cursor. Pégalo en una sesión abierta en tu proyecto.',
      label: 'Prompt',
      copy: 'Copiar',
      copied: 'Copiado',
      text: 'Prepara este proyecto para llevarlo a equipe.\n1. Escribe EQUIPE.md: el stack, las páginas, las rutas de API, los nombres de los secretos que necesita (sin valores) y los requisitos de accesibilidad.\n2. Lista todas las variables de entorno en .env.example, sin valores.\n3. Deja fuera los archivos .env y los secretos.\n4. Haz un ZIP del proyecto, o súbelo a un repositorio de GitHub, y muestra el enlace para pegarlo en equipe.',
      note: 'Esta es una versión corta. El prompt completo está en equipe, en Importar un proyecto y luego Desde Claude Code / Cursor / tu ordenador.',
    },
    faq: {
      title: 'Preguntas',
      items: [
        { question: '¿Mi diseño seguirá igual?', answer: 'Sí. Tu código se importa tal cual, no se reescribe, así que tu diseño queda como lo hiciste. En una app de Next.js 16 que probamos, el resultado coincidió píxel a píxel. Solo se adapta lo que no puede ejecutarse en Cloudflare Workers, y tu equipo te cuenta qué y por qué.' },
        { question: '¿Funciona mi app de Next.js?', answer: 'Sí. Las apps de Next.js, App Router o Pages, funcionan tal cual con el adaptador OpenNext para Cloudflare: páginas, rutas de API, server actions, middleware y Tailwind siguen funcionando. Lo que un Worker no puede hacer, como escribir archivos en disco, paquetes nativos como sharp o bcrypt, o Vercel KV y Blob, se adapta. Las imágenes se sirven tal cual.' },
        { question: '¿Puede volver mi código a mi GitHub?', answer: 'Sí. Actívalo y tu código se sube a tu propio repositorio de GitHub después de cada versión. Para importar un repositorio privado basta una conexión única con GitHub de solo lectura.' },
        { question: '¿Puedo usar mi propia clave de Anthropic para la IA?', answer: 'Sí. Usa la IA integrada de equipe, pagada con créditos y sin clave, o añade tu propia clave de Anthropic. Se guarda cifrada como secreto del producto y nunca se muestra ni se registra. Con tu clave puedes llamar a Claude directamente, con control total del system prompt y del formato de salida, o pasar por la pasarela de IA de equipe, facturada a tu clave.' },
        { question: '¿Y la accesibilidad?', answer: 'Es tu código, así que cada píxel se puede editar. Antes de cada versión, equipe pasa una revisión automática de accesibilidad (axe-core: contraste, etiquetas, foco y texto alternativo) en las páginas clave. En proyectos que deben cumplir WCAG 2.1 AA, o KWCAG 2.2 en Corea, la revisión puede bloquear la versión hasta que pase.' },
        { question: '¿Cuánto cuesta importar?', answer: 'El trabajo de IA de tu primera importación corre por cuenta de equipe, hasta 300 créditos.' },
      ],
    },
    cta: { title: 'Trae tu proyecto tal como está.', sub: 'Tu equipo de IA lo publica y lo hace crecer. Sin programar.', button: 'Importa tu proyecto' },
    disclaimer: 'equipe es un producto independiente y no está afiliado a las herramientas mencionadas en esta página. Sus nombres son marcas de sus respectivos propietarios.',
  },

  'pt-BR': {
    nav: 'Traga seu projeto',
    homeLink: 'Como trazer um projeto',
    page: {
      title: 'Leve seu projeto do Claude Code, Lovable, Bolt ou v0 para a equipe',
      desc: 'Traga um projeto do Claude Code, Cursor, Lovable, Bolt, v0, Replit, GitHub ou um ZIP. Seu design é mantido; seu time de IA coloca no ar na Cloudflare e continua construindo. Sem programar.',
      ogTitle: 'Leve seu projeto para a equipe',
      kicker: 'Mude para a equipe',
      h1: 'Leve seu projeto do Claude Code, Lovable, Bolt ou v0 para a equipe.',
      lead: 'Seu design fica como está. Seu time de IA coloca no ar e continua construindo e fazendo crescer. Sem programar.',
      cta: 'Importe seu projeto',
      secondary: 'Copie o prompt',
      free: 'O trabalho de IA da sua primeira importação é por nossa conta, até 300 créditos.',
    },
    sources: {
      title: 'Escolha onde está seu projeto',
      sub: 'Cada cartão abre a importação na equipe. Você só precisa do código, de um link ou de um ZIP.',
      items: {
        'claude-code': { name: 'Claude Code ou Cursor', how: 'Cole nosso prompt na sua sessão. Ele empacota o projeto e mostra um link.', method: 'Prompt' },
        lovable: { name: 'Lovable', how: 'Conecte seu projeto ao GitHub no Lovable e cole o link do repositório.', method: 'GitHub' },
        bolt: { name: 'Bolt', how: 'Baixe o projeto como ZIP, ou envie para o GitHub e cole o link.', method: 'ZIP ou GitHub' },
        v0: { name: 'v0', how: 'No v0, abra o menu do projeto (…) → Settings → GitHub → Connect. O v0 coloca seu código em um repositório privado novo; cole o link dele.', method: 'GitHub' },
        replit: { name: 'Replit', how: 'Baixe o projeto como ZIP, ou envie para o GitHub e cole o link.', method: 'ZIP ou GitHub' },
        github: { name: 'GitHub', how: 'Cole o link do repositório. Repositórios privados pedem uma conexão única, só de leitura.', method: 'Link' },
        zip: { name: 'Um arquivo ZIP', how: 'Arraste e solte o ZIP do seu projeto, até 100 MB.', method: 'ZIP' },
        website: { name: 'Um site', how: 'Fez com um criador de sites? Cole o endereço do site.', method: 'Link' },
      },
      open: 'Importar',
      artifact: 'Fez algo como um artifact do Claude?',
      artifactLink: 'Cole o artifact',
    },
    steps: {
      title: 'Três passos',
      items: [
        { title: 'Copie o prompt', text: 'No Claude Code ou no Cursor, cole nosso prompt. Ele escreve o EQUIPE.md, uma nota curta sobre o que é o projeto e do que ele precisa, e empacota o código. Vindo do Lovable, Bolt, v0 ou Replit, exporte um ZIP ou envie para o GitHub.' },
        { title: 'Cole o link ou solte o ZIP', text: 'Na equipe, escolha Importar um projeto. Cole o link do GitHub ou solte o ZIP.' },
        { title: 'Seu time coloca no ar', text: 'Seu time de IA importa o código como está, adapta só o que não roda no Cloudflare Workers, conta o que mudou e por quê, e coloca no ar.' },
      ],
    },
    kept: {
      title: 'O que fica e o que é adaptado',
      sub: 'Seu código é importado como está, não é reescrito. A equipe roda no Cloudflare Workers, então só muda o que não roda lá.',
      keptTitle: 'Fica como está',
      kept: [
        'Seu design, pixel a pixel (um app Next.js 16 que testamos bateu 1:1)',
        'Apps Next.js, App Router ou Pages, com o adaptador OpenNext para Cloudflare',
        'Páginas, rotas de API, server actions e middleware',
        'Tailwind e o resto dos seus estilos',
        'Seus componentes, conteúdo e textos',
      ],
      adaptedTitle: 'Adaptado, com um motivo',
      adapted: [
        'Linhas `runtime = "edge"`',
        'Código que grava arquivos em disco',
        'Pacotes nativos como sharp ou bcrypt',
        'Vercel KV e Vercel Blob',
        'Otimização de imagens: as imagens são servidas como estão',
      ],
      adaptedNote: 'Seu time conta o que mudou e por quê.',
      after: [
        { title: 'Um relatório claro', text: 'Depois da importação você vê o que ficou, o que foi adaptado e por quê, e quais chaves adicionar.' },
        { title: 'Chaves em segredo', text: 'Cada chave é colada em uma página segura de uso único. Nunca é exibida nem registrada.' },
        { title: 'De volta ao seu GitHub', text: 'Se quiser, seu código é enviado ao seu próprio repositório no GitHub a cada versão.' },
      ],
    },
    prompt: {
      title: 'Copie este prompt',
      sub: 'Para Claude Code ou Cursor. Cole em uma sessão aberta no seu projeto.',
      label: 'Prompt',
      copy: 'Copiar',
      copied: 'Copiado',
      text: 'Prepare este projeto para ir para a equipe.\n1. Escreva o EQUIPE.md: a stack, as páginas, as rotas de API, os nomes dos segredos necessários (sem valores) e os requisitos de acessibilidade.\n2. Liste todas as variáveis de ambiente no .env.example, sem valores.\n3. Deixe de fora os arquivos .env e os segredos.\n4. Faça um ZIP do projeto, ou envie para um repositório no GitHub, e mostre o link para eu colar na equipe.',
      note: 'Esta é uma versão curta. O prompt completo está na equipe, em Importar um projeto e depois Do Claude Code / Cursor / seu computador.',
    },
    faq: {
      title: 'Perguntas',
      items: [
        { question: 'Meu design vai continuar igual?', answer: 'Sim. Seu código é importado como está, não é reescrito, então seu design fica como você fez. Em um app Next.js 16 que testamos, o resultado bateu pixel a pixel. Só é adaptado o que não roda no Cloudflare Workers, e seu time conta o que e por quê.' },
        { question: 'Meu app Next.js funciona?', answer: 'Sim. Apps Next.js, App Router ou Pages, rodam como estão com o adaptador OpenNext para Cloudflare: páginas, rotas de API, server actions, middleware e Tailwind continuam funcionando. O que um Worker não consegue fazer, como gravar arquivos em disco, pacotes nativos como sharp ou bcrypt, ou Vercel KV e Blob, é adaptado. As imagens são servidas como estão.' },
        { question: 'Meu código pode voltar para o meu GitHub?', answer: 'Sim. Ative e seu código é enviado ao seu próprio repositório no GitHub a cada versão. Para importar um repositório privado, basta uma conexão única com o GitHub, só de leitura.' },
        { question: 'Posso usar minha própria chave da Anthropic na IA?', answer: 'Sim. Use a IA integrada da equipe, paga com créditos e sem chave, ou adicione sua própria chave da Anthropic. Ela é guardada criptografada como segredo do produto e nunca é exibida nem registrada. Com sua chave, você pode chamar o Claude diretamente, com controle total do system prompt e do formato de saída, ou passar pelo gateway de IA da equipe, cobrado na sua chave.' },
        { question: 'E a acessibilidade?', answer: 'O código é seu, então cada pixel pode ser editado. Antes de cada versão, a equipe roda uma verificação automática de acessibilidade (axe-core: contraste, rótulos, foco e texto alternativo) nas páginas principais. Em projetos que precisam cumprir a WCAG 2.1 AA, ou a KWCAG 2.2 na Coreia, a verificação pode bloquear a versão até passar.' },
        { question: 'Quanto custa importar?', answer: 'O trabalho de IA da sua primeira importação é por conta da equipe, até 300 créditos.' },
      ],
    },
    cta: { title: 'Traga seu projeto do jeito que está.', sub: 'Seu time de IA coloca no ar e faz crescer. Sem programar.', button: 'Importe seu projeto' },
    disclaimer: 'A equipe é um produto independente e não tem afiliação com as ferramentas citadas nesta página. Os nomes são marcas de seus respectivos donos.',
  },

  de: {
    nav: 'Projekt umziehen',
    homeLink: 'So ziehst du ein Projekt um',
    page: {
      title: 'Zieh dein Claude-Code-, Lovable-, Bolt- oder v0-Projekt zu equipe um',
      desc: 'Bring ein Projekt aus Claude Code, Cursor, Lovable, Bolt, v0, Replit, GitHub oder als ZIP mit. Dein Design bleibt, dein KI-Team bringt es auf Cloudflare live und baut weiter. Ganz ohne Programmieren.',
      ogTitle: 'Zieh dein Projekt zu equipe um',
      kicker: 'Umzug zu equipe',
      h1: 'Zieh dein Claude-Code-, Lovable-, Bolt- oder v0-Projekt zu equipe um.',
      lead: 'Dein Design bleibt, wie es ist. Dein KI-Team bringt es live, baut weiter und lässt es wachsen. Ganz ohne Programmieren.',
      cta: 'Projekt importieren',
      secondary: 'Prompt kopieren',
      free: 'Die KI-Arbeit für deinen ersten Import übernehmen wir, bis zu 300 Credits.',
    },
    sources: {
      title: 'Wähl, wo dein Projekt liegt',
      sub: 'Jede Kachel öffnet den Import in equipe. Du brauchst nur den Code, einen Link oder ein ZIP.',
      items: {
        'claude-code': { name: 'Claude Code oder Cursor', how: 'Füg unseren fertigen Prompt in deine Sitzung ein. Er packt das Projekt und gibt dir einen Link.', method: 'Prompt' },
        lovable: { name: 'Lovable', how: 'Verbinde dein Projekt in Lovable mit GitHub und füg den Repository-Link ein.', method: 'GitHub' },
        bolt: { name: 'Bolt', how: 'Lade das Projekt als ZIP herunter oder push es zu GitHub und füg den Link ein.', method: 'ZIP oder GitHub' },
        v0: { name: 'v0', how: 'Öffne in v0 das Projektmenü (…) → Settings → GitHub → Connect. v0 legt deinen Code in ein neues privates Repository; füg dessen Link ein.', method: 'GitHub' },
        replit: { name: 'Replit', how: 'Lade das Projekt als ZIP herunter oder push es zu GitHub und füg den Link ein.', method: 'ZIP oder GitHub' },
        github: { name: 'GitHub', how: 'Füg den Repository-Link ein. Private Repositorys brauchen eine einmalige Verbindung mit reinem Lesezugriff.', method: 'Link' },
        zip: { name: 'Eine ZIP-Datei', how: 'Zieh das ZIP deines Projekts hierher, bis 100 MB.', method: 'ZIP' },
        website: { name: 'Eine Website', how: 'Mit einem Website-Baukasten gebaut? Füg die Adresse der Seite ein.', method: 'Link' },
      },
      open: 'Importieren',
      artifact: 'Als Claude-Artifact gebaut?',
      artifactLink: 'Artifact direkt einfügen',
    },
    steps: {
      title: 'Drei Schritte',
      items: [
        { title: 'Prompt kopieren', text: 'Füg unseren Prompt in Claude Code oder Cursor ein. Er schreibt EQUIPE.md, eine kurze Notiz dazu, was dein Projekt ist und braucht, und packt den Code. Aus Lovable, Bolt, v0 oder Replit exportierst du stattdessen ein ZIP oder pushst zu GitHub.' },
        { title: 'Link einfügen oder ZIP ablegen', text: 'Wähl in equipe „Projekt importieren“. Füg den GitHub-Link ein oder leg das ZIP ab.' },
        { title: 'Dein Team bringt es live', text: 'Dein KI-Team importiert den Code unverändert, passt nur an, was nicht auf Cloudflare Workers läuft, sagt dir, was und warum, und bringt es live.' },
      ],
    },
    kept: {
      title: 'Was bleibt und was angepasst wird',
      sub: 'Dein Code wird so importiert, wie er ist, nicht neu geschrieben. equipe läuft auf Cloudflare Workers, deshalb ändert sich nur, was dort nicht läuft.',
      keptTitle: 'Bleibt, wie es ist',
      kept: [
        'Dein Design, pixelgenau (eine getestete Next.js-16-App stimmte 1:1 überein)',
        'Next.js-Apps, App Router oder Pages, über den OpenNext-Cloudflare-Adapter',
        'Seiten, API-Routen, Server Actions und Middleware',
        'Tailwind und deine übrigen Styles',
        'Deine Komponenten, Inhalte und Texte',
      ],
      adaptedTitle: 'Angepasst, mit Begründung',
      adapted: [
        'Zeilen mit `runtime = "edge"`',
        'Code, der Dateien auf die Festplatte schreibt',
        'Native Pakete wie sharp oder bcrypt',
        'Vercel KV und Vercel Blob',
        'Bildoptimierung: Bilder werden unverändert ausgeliefert',
      ],
      adaptedNote: 'Dein Team sagt dir, was sich geändert hat und warum.',
      after: [
        { title: 'Ein klarer Bericht', text: 'Nach dem Import siehst du, was blieb, was angepasst wurde und warum, und welche Schlüssel du hinzufügen musst.' },
        { title: 'Schlüssel bleiben geheim', text: 'Jeder Schlüssel kommt in eine sichere Einmalseite. Er wird nie angezeigt oder protokolliert.' },
        { title: 'Zurück in dein GitHub', text: 'Auf Wunsch wird dein Code nach jedem Release in dein eigenes GitHub-Repository gepusht.' },
      ],
    },
    prompt: {
      title: 'Kopier diesen Prompt',
      sub: 'Für Claude Code oder Cursor. Füg ihn in eine Sitzung ein, die in deinem Projekt geöffnet ist.',
      label: 'Prompt',
      copy: 'Kopieren',
      copied: 'Kopiert',
      text: 'Bereite dieses Projekt für den Umzug zu equipe vor.\n1. Schreib EQUIPE.md: den Stack, die Seiten, die API-Routen, die Namen der nötigen Secrets (ohne Werte) und Anforderungen an die Barrierefreiheit.\n2. Führ alle Umgebungsvariablen ohne Werte in .env.example auf.\n3. Lass .env-Dateien und Secrets beim Packen weg.\n4. Mach ein ZIP des Projekts oder push es in ein GitHub-Repository und gib den Link aus, damit ich ihn in equipe einfügen kann.',
      note: 'Das ist eine Kurzfassung. Den vollständigen Prompt findest du in equipe unter „Projekt importieren“, dann „Aus Claude Code / Cursor / deinem Computer“.',
    },
    faq: {
      title: 'Fragen',
      items: [
        { question: 'Bleibt mein Design gleich?', answer: 'Ja. Dein Code wird so importiert, wie er ist, nicht neu geschrieben, also bleibt dein Design, wie du es gemacht hast. Bei einer getesteten Next.js-16-App stimmte das Ergebnis pixelgenau überein. Angepasst wird nur, was nicht auf Cloudflare Workers läuft, und dein Team sagt dir, was und warum.' },
        { question: 'Läuft meine Next.js-App?', answer: 'Ja. Next.js-Apps, App Router oder Pages, laufen unverändert über den OpenNext-Cloudflare-Adapter: Seiten, API-Routen, Server Actions, Middleware und Tailwind funktionieren weiter. Was ein Worker nicht kann, etwa Dateien auf die Festplatte schreiben, native Pakete wie sharp oder bcrypt oder Vercel KV und Blob, wird angepasst. Bilder werden unverändert ausgeliefert.' },
        { question: 'Kann mein Code zurück in mein GitHub?', answer: 'Ja. Schalt es ein, und dein Code wird nach jedem Release in dein eigenes GitHub-Repository gepusht. Für den Import eines privaten Repositorys reicht eine einmalige GitHub-Verbindung mit reinem Lesezugriff.' },
        { question: 'Kann ich meinen eigenen Anthropic-Schlüssel für KI nutzen?', answer: 'Ja. Nutz die eingebaute KI von equipe, bezahlt mit Credits und ohne Schlüssel, oder füg deinen eigenen Anthropic-Schlüssel hinzu. Er wird verschlüsselt als Produkt-Secret gespeichert und nie angezeigt oder protokolliert. Mit deinem Schlüssel rufst du Claude direkt auf, mit voller Kontrolle über System-Prompt und Ausgabeformat, oder über das KI-Gateway von equipe, abgerechnet über deinen Schlüssel.' },
        { question: 'Wie steht es um Barrierefreiheit?', answer: 'Es ist dein Code, also bleibt jedes Pixel bearbeitbar. Vor jedem Release führt equipe auf wichtigen Seiten eine automatische Barrierefreiheitsprüfung durch (axe-core: Kontrast, Beschriftungen, Fokus und Alternativtexte). Für Projekte, die WCAG 2.1 AA erfüllen müssen, oder KWCAG 2.2 in Korea, kann die Prüfung ein Release blockieren, bis sie besteht.' },
        { question: 'Was kostet der Import?', answer: 'Die KI-Arbeit für deinen ersten Import übernimmt equipe, bis zu 300 Credits.' },
      ],
    },
    cta: { title: 'Bring dein Projekt mit, so wie es ist.', sub: 'Dein KI-Team bringt es live und lässt es wachsen. Ganz ohne Programmieren.', button: 'Projekt importieren' },
    disclaimer: 'equipe ist ein unabhängiges Produkt und nicht mit den auf dieser Seite genannten Tools verbunden. Ihre Namen sind Marken ihrer jeweiligen Inhaber.',
  },

  fr: {
    nav: 'Migrer votre projet',
    homeLink: 'Comment migrer un projet',
    page: {
      title: 'Migrez votre projet Claude Code, Lovable, Bolt ou v0 vers equipe',
      desc: 'Apportez un projet depuis Claude Code, Cursor, Lovable, Bolt, v0, Replit, GitHub ou un ZIP. Votre design est conservé ; votre équipe IA le met en ligne sur Cloudflare et continue de le construire. Sans coder.',
      ogTitle: 'Migrez votre projet vers equipe',
      kicker: 'Passer à equipe',
      h1: 'Migrez votre projet Claude Code, Lovable, Bolt ou v0 vers equipe.',
      lead: 'Votre design reste tel quel. Votre équipe IA le met en ligne, puis continue de le construire et de le faire grandir. Sans coder.',
      cta: 'Importer votre projet',
      secondary: 'Copier le prompt',
      free: 'Le travail IA de votre premier import est pour nous, jusqu’à 300 crédits.',
    },
    sources: {
      title: 'Choisissez où se trouve votre projet',
      sub: 'Chaque carte ouvre l’import dans equipe. Il vous faut seulement le code, un lien ou un ZIP.',
      items: {
        'claude-code': { name: 'Claude Code ou Cursor', how: 'Collez notre prompt prêt à l’emploi dans votre session. Il emballe le projet et vous donne un lien.', method: 'Prompt' },
        lovable: { name: 'Lovable', how: 'Connectez votre projet à GitHub dans Lovable, puis collez le lien du dépôt.', method: 'GitHub' },
        bolt: { name: 'Bolt', how: 'Téléchargez le projet en ZIP, ou poussez-le sur GitHub et collez le lien.', method: 'ZIP ou GitHub' },
        v0: { name: 'v0', how: 'Dans v0, ouvrez le menu du projet (…) → Settings → GitHub → Connect. v0 place votre code dans un nouveau dépôt privé ; collez son lien.', method: 'GitHub' },
        replit: { name: 'Replit', how: 'Téléchargez le projet en ZIP, ou poussez-le sur GitHub et collez le lien.', method: 'ZIP ou GitHub' },
        github: { name: 'GitHub', how: 'Collez le lien du dépôt. Les dépôts privés demandent une connexion unique en lecture seule.', method: 'Lien' },
        zip: { name: 'Un fichier ZIP', how: 'Glissez-déposez le ZIP de votre projet, jusqu’à 100 Mo.', method: 'ZIP' },
        website: { name: 'Un site web', how: 'Fait avec un créateur de sites ? Collez l’adresse du site.', method: 'Lien' },
      },
      open: 'Importer',
      artifact: 'Créé sous forme d’artifact Claude ?',
      artifactLink: 'Collez l’artifact',
    },
    steps: {
      title: 'Trois étapes',
      items: [
        { title: 'Copiez le prompt', text: 'Dans Claude Code ou Cursor, collez notre prompt. Il rédige EQUIPE.md, une courte note sur ce qu’est votre projet et ce dont il a besoin, et emballe le code. Depuis Lovable, Bolt, v0 ou Replit, exportez plutôt un ZIP ou poussez sur GitHub.' },
        { title: 'Collez le lien ou déposez le ZIP', text: 'Dans equipe, choisissez Importer un projet. Collez le lien GitHub ou déposez le ZIP.' },
        { title: 'Votre équipe le met en ligne', text: 'Votre équipe IA importe le code tel quel, adapte seulement ce qui ne tourne pas sur Cloudflare Workers, vous dit quoi et pourquoi, puis le met en ligne.' },
      ],
    },
    kept: {
      title: 'Ce qui est conservé, ce qui est adapté',
      sub: 'Votre code est importé tel quel, pas réécrit. equipe tourne sur Cloudflare Workers : seul ce qui ne peut pas y tourner change.',
      keptTitle: 'Conservé tel quel',
      kept: [
        'Votre design, au pixel près (une app Next.js 16 testée correspondait à 1:1)',
        'Les apps Next.js, App Router ou Pages, via l’adaptateur OpenNext pour Cloudflare',
        'Pages, routes API, server actions et middleware',
        'Tailwind et le reste de vos styles',
        'Vos composants, contenus et textes',
      ],
      adaptedTitle: 'Adapté, avec une raison',
      adapted: [
        'Les lignes `runtime = "edge"`',
        'Le code qui écrit des fichiers sur le disque',
        'Les paquets natifs comme sharp ou bcrypt',
        'Vercel KV et Vercel Blob',
        'L’optimisation d’images : les images sont servies telles quelles',
      ],
      adaptedNote: 'Votre équipe vous dit ce qui a changé et pourquoi.',
      after: [
        { title: 'Un rapport clair', text: 'Après l’import, vous voyez ce qui est conservé, ce qui est adapté et pourquoi, et quelles clés ajouter.' },
        { title: 'Des clés gardées secrètes', text: 'Chaque clé se colle dans une page sécurisée à usage unique. Elle n’est jamais affichée ni journalisée.' },
        { title: 'Retour sur votre GitHub', text: 'Si vous le souhaitez, votre code est poussé sur votre propre dépôt GitHub après chaque version.' },
      ],
    },
    prompt: {
      title: 'Copiez ce prompt',
      sub: 'Pour Claude Code ou Cursor. Collez-le dans une session ouverte dans votre projet.',
      label: 'Prompt',
      copy: 'Copier',
      copied: 'Copié',
      text: 'Prépare ce projet pour sa migration vers equipe.\n1. Rédige EQUIPE.md : la stack, les pages, les routes API, les noms des secrets nécessaires (sans valeurs) et les exigences d’accessibilité.\n2. Liste toutes les variables d’environnement dans .env.example, sans valeurs.\n3. Laisse de côté les fichiers .env et les secrets.\n4. Fais un ZIP du projet, ou pousse-le sur un dépôt GitHub, et affiche le lien pour que je le colle dans equipe.',
      note: 'Ceci est une version courte. Le prompt complet est dans equipe, sous Importer un projet, puis Depuis Claude Code / Cursor / votre ordinateur.',
    },
    faq: {
      title: 'Questions',
      items: [
        { question: 'Mon design restera-t-il le même ?', answer: 'Oui. Votre code est importé tel quel, pas réécrit : votre design reste celui que vous avez fait. Sur une app Next.js 16 testée, le résultat correspondait au pixel près. Seul ce qui ne tourne pas sur Cloudflare Workers est adapté, et votre équipe vous dit quoi et pourquoi.' },
        { question: 'Mon app Next.js fonctionne-t-elle ?', answer: 'Oui. Les apps Next.js, App Router ou Pages, tournent telles quelles via l’adaptateur OpenNext pour Cloudflare : pages, routes API, server actions, middleware et Tailwind continuent de fonctionner. Ce qu’un Worker ne sait pas faire, comme écrire des fichiers sur le disque, les paquets natifs comme sharp ou bcrypt, ou Vercel KV et Blob, est adapté. Les images sont servies telles quelles.' },
        { question: 'Mon code peut-il revenir sur mon GitHub ?', answer: 'Oui. Activez-le et votre code est poussé sur votre propre dépôt GitHub après chaque version. Importer un dépôt privé demande une connexion GitHub unique, en lecture seule.' },
        { question: 'Puis-je utiliser ma propre clé Anthropic pour l’IA ?', answer: 'Oui. Utilisez l’IA intégrée d’equipe, payée en crédits et sans clé, ou ajoutez votre propre clé Anthropic. Elle est stockée chiffrée comme secret du produit, jamais affichée ni journalisée. Avec votre clé, vous appelez Claude directement, avec un contrôle total du prompt système et du format de sortie, ou via la passerelle IA d’equipe, facturée sur votre clé.' },
        { question: 'Et l’accessibilité ?', answer: 'C’est votre code : chaque pixel reste modifiable. Avant chaque version, equipe lance une vérification automatique d’accessibilité (axe-core : contraste, libellés, focus et texte alternatif) sur les pages clés. Pour les projets qui doivent respecter le WCAG 2.1 AA, ou le KWCAG 2.2 en Corée, la vérification peut bloquer une version tant qu’elle n’est pas réussie.' },
        { question: 'Combien coûte l’import ?', answer: 'Le travail IA de votre premier import est pris en charge par equipe, jusqu’à 300 crédits.' },
      ],
    },
    cta: { title: 'Apportez votre projet tel qu’il est.', sub: 'Votre équipe IA le met en ligne et le fait grandir. Sans coder.', button: 'Importer votre projet' },
    disclaimer: 'equipe est un produit indépendant, sans lien avec les outils cités sur cette page. Leurs noms sont des marques de leurs propriétaires respectifs.',
  },
};
