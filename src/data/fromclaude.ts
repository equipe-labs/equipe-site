/**
 * "From Claude": paste a Claude artifact (its code, the file or its published link) and it goes live as a real product.
 * Used by /from-claude/ (src/pages/[...locale]/from-claude.astro), the home section (#from-claude) and the paste box
 * (src/components/ArtifactImport.astro). The import itself runs on app.equipe.im/import.
 *
 * Trademark rules for this copy: "Claude artifact" is used descriptively only. No Claude or Anthropic logo, colours or
 * branding, and nothing that suggests a partnership. Every page that uses it shows `disclaimer`.
 */
import type { LocaleCode } from '../i18n';

interface Item { title: string; text: string }
interface QA { question: string; answer: string }

export interface FromClaudeCopy {
  /** Header (Resources menu) and footer link label, and the menu's one-line description. */
  nav: string; navDesc: string;
  page: {
    title: string; desc: string; ogTitle: string;
    kicker: string; h1: string; lead: string; then: string;
  };
  /** The paste box. `free` is split on " · " (phones may drop the middle part). */
  box: {
    codeLabel: string; codePh: string;
    dropLead: string; choose: string; dropHere: string;
    linkLabel: string; optional: string; linkPh: string;
    submit: string; sending: string; remove: string; lines: string; free: string;
    errEmpty: string; errLink: string; errType: string; errSize: string; errRead: string; moved: string;
    note: string;
  };
  home: { kicker: string; title: string; sub: string; more: string };
  how: { title: string; steps: [Item, Item, Item]; formats: string; icons: string };
  next: { title: string; sub: string; items: [Item, Item, Item, Item, Item, Item] };
  faq: { title: string; items: [QA, QA, QA, QA] };
  cta: { title: string; button: string };
  disclaimer: string;
}

export const FROM_CLAUDE: Record<LocaleCode, FromClaudeCopy> = {
  en: {
    nav: 'From Claude',
    navDesc: 'Paste an artifact, get a live product',
    page: {
      title: 'Your Claude artifact, live as a real product — equipe',
      desc: 'Paste your Claude artifact’s code or link. In about a minute it’s live at your-name.equipe.page, with analytics, SEO and a privacy page. No coding needed.',
      ogTitle: 'Your Claude artifact, live as a real product',
      kicker: 'From Claude to a real product',
      h1: 'Your Claude artifact, live as a real product.',
      lead: 'Paste the code or the published link. In about a minute it’s live at your-name.equipe.page, with analytics, SEO and a privacy page.',
      then: 'Then your AI team adds what a real business needs: your own domain, sign-in, payments and a real database.',
    },
    box: {
      codeLabel: 'Artifact code',
      codePh: 'Paste your artifact’s code here.\nIn Claude, open the artifact and choose Copy or Download.',
      dropLead: 'Drop a file here, or',
      choose: 'choose one',
      dropHere: 'Drop the file to add it',
      linkLabel: 'Published link',
      optional: 'optional',
      linkPh: 'https://claude.ai/public/artifacts/…',
      submit: 'Make it live',
      sending: 'Opening equipe…',
      remove: 'Remove file',
      lines: '{n} lines',
      free: 'Free · No card needed · No coding needed',
      errEmpty: 'Paste the code or the published link first.',
      errLink: 'That doesn’t look like a Claude artifact link. It usually starts with https://claude.ai/public/artifacts/',
      errType: 'That file type won’t work. Try .jsx, .tsx, .html, .svg, .md or .mmd.',
      errSize: 'That’s over 500 KB, more than an artifact usually is. Check that you copied only the artifact.',
      errRead: 'We couldn’t read that file. Open it and paste the code instead.',
      moved: 'That was a link, so we put it in the link field.',
      note: 'Only have the link? Claude keeps a published artifact’s code inside its own page, so if we can’t read it from the link, we’ll ask you to copy it once: open the artifact, choose Copy or Download, and paste.',
    },
    home: {
      kicker: 'From Claude',
      title: 'Built something in Claude? Make it a real product.',
      sub: 'Paste your artifact’s code or link. In about a minute it’s live at its own address, and your AI team takes it from there.',
      more: 'How it works',
    },
    how: {
      title: 'How it works',
      steps: [
        { title: 'Paste', text: 'Paste the code, drop the file, or share the published link. No coding needed.' },
        { title: 'We build it', text: 'Most artifacts build without any AI at all, so there is nothing to wait for and nothing to rewrite.' },
        { title: 'Live in about a minute', text: 'It opens at your-name.equipe.page, with analytics, SEO and a privacy page already set up.' },
      ],
      formats: 'Works as it is',
      icons: 'Lucide icons',
    },
    next: {
      title: 'What your AI team can add next',
      sub: 'Ask in plain words. Anything that costs money, like buying a domain, waits for your yes.',
      items: [
        { title: 'Your own domain', text: 'yourname.com instead of an equipe.page address. Your team finds good options and connects it.' },
        { title: 'Sign-in', text: 'Accounts for your users, so each person sees their own things.' },
        { title: 'Payments', text: 'Charge for what you made, once or every month, with checkout set up for you.' },
        { title: 'A real database', text: 'Your data moves out of artifact storage into a proper database, backed up and ready for many users.' },
        { title: 'More pages', text: 'A landing page, pricing, an about page or a blog around your tool.' },
        { title: 'Growth', text: 'Posts to share, better search visibility and a weekly report on visitors and sign-ups.' },
      ],
    },
    faq: {
      title: 'Questions',
      items: [
        { question: 'Is it free?', answer: 'Yes. The import itself uses no credits: it’s part of your first version on equipe, which is on us. Changes your AI team makes later use credits.' },
        { question: 'Does window.storage work?', answer: 'Yes. Personal storage stays in each visitor’s browser, as it does in Claude. Shared storage moves to your product’s own data store, so every visitor sees the same data.' },
        { question: 'What about artifacts that call Claude inside them?', answer: 'Those need an AI connection to work outside Claude. Your team can wire up your product’s own AI, so it keeps working for your visitors.' },
        { question: 'Is equipe affiliated with Anthropic?', answer: 'No. equipe is an independent, third-party tool. Claude is a trademark of Anthropic, PBC.' },
      ],
    },
    cta: { title: 'Your artifact is one paste away.', button: 'Paste your artifact' },
    disclaimer: 'equipe is not affiliated with or endorsed by Anthropic. Claude is a trademark of Anthropic, PBC.',
  },

  ko: {
    nav: 'Claude에서 가져오기',
    navDesc: '아티팩트를 붙여 넣으면 바로 서비스로',
    page: {
      title: 'Claude 아티팩트를 진짜 서비스로 — equipe',
      desc: 'Claude 아티팩트의 코드나 링크를 붙여 넣으세요. 1분쯤이면 your-name.equipe.page에 열려요. 분석, SEO, 개인정보 처리방침까지. 코딩은 필요 없어요.',
      ogTitle: 'Claude 아티팩트를 진짜 서비스로',
      kicker: 'Claude에서 진짜 서비스로',
      h1: 'Claude 아티팩트, 이제 진짜 서비스로.',
      lead: '코드나 공개 링크를 붙여 넣기만 하세요. 1분쯤이면 your-name.equipe.page에 열리고, 방문 분석과 검색 최적화, 개인정보 처리방침까지 갖춰져 있어요.',
      then: '그다음은 AI 팀이 진짜 사업에 필요한 걸 더해요. 내 도메인, 로그인, 결제, 제대로 된 데이터베이스까지요.',
    },
    box: {
      codeLabel: '아티팩트 코드',
      codePh: '아티팩트 코드를 여기에 붙여 넣으세요.\nClaude에서 아티팩트를 열고 복사(Copy)나 다운로드(Download)를 누르면 돼요.',
      dropLead: '파일을 여기에 끌어다 놓거나',
      choose: '파일 선택',
      dropHere: '놓으면 파일이 들어가요',
      linkLabel: '공개 링크',
      optional: '선택',
      linkPh: 'https://claude.ai/public/artifacts/…',
      submit: '서비스로 열기',
      sending: 'equipe를 여는 중…',
      remove: '파일 빼기',
      lines: '{n}줄',
      free: '무료 · 카드 필요 없음 · 코딩 필요 없음',
      errEmpty: '코드나 공개 링크를 먼저 붙여 넣어 주세요.',
      errLink: 'Claude 아티팩트 링크가 아닌 것 같아요. 보통 https://claude.ai/public/artifacts/ 로 시작해요.',
      errType: '이 파일 형식은 안 돼요. .jsx, .tsx, .html, .svg, .md, .mmd 파일을 넣어 주세요.',
      errSize: '500KB가 넘어요. 보통 아티팩트보다 훨씬 커요. 아티팩트 코드만 복사했는지 확인해 주세요.',
      errRead: '파일을 읽지 못했어요. 파일을 열어서 코드를 붙여 넣어 주세요.',
      moved: '링크라서 링크 칸으로 옮겼어요.',
      note: '링크만 있나요? Claude는 공개된 아티팩트의 코드를 자기 페이지 안에 두기 때문에, 링크로 코드를 읽지 못하면 한 번만 복사해 달라고 부탁드릴게요. 아티팩트를 열고 복사나 다운로드를 누른 뒤 붙여 넣으면 끝이에요.',
    },
    home: {
      kicker: 'Claude에서 가져오기',
      title: 'Claude로 뭔가 만들었나요? 진짜 서비스로 만들어요.',
      sub: '아티팩트 코드나 링크를 붙여 넣으세요. 1분쯤이면 나만의 주소에 열리고, 그다음은 AI 팀이 이어서 키워요.',
      more: '어떻게 되는지 보기',
    },
    how: {
      title: '이렇게 진행돼요',
      steps: [
        { title: '붙여 넣기', text: '코드를 붙여 넣거나, 파일을 끌어다 놓거나, 공개 링크를 알려 주세요. 코딩은 필요 없어요.' },
        { title: '저희가 만들어요', text: '대부분의 아티팩트는 AI 없이 바로 만들어져요. 기다릴 것도, 다시 짤 것도 없어요.' },
        { title: '1분쯤이면 열려요', text: 'your-name.equipe.page에 열리고, 방문 분석, 검색 최적화, 개인정보 처리방침이 이미 갖춰져 있어요.' },
      ],
      formats: '그대로 돌아가요',
      icons: 'Lucide 아이콘',
    },
    next: {
      title: '그다음 AI 팀이 더할 수 있는 것',
      sub: '편하게 말로 부탁하면 돼요. 도메인 구매처럼 돈이 드는 일은 내가 승인한 다음에만 진행돼요.',
      items: [
        { title: '내 도메인', text: 'equipe.page 주소 대신 yourname.com으로. 팀이 좋은 후보를 찾아 연결까지 해요.' },
        { title: '로그인', text: '사용자 계정이 생겨서, 사람마다 자기 것만 볼 수 있어요.' },
        { title: '결제', text: '만든 것에 값을 받아요. 한 번 결제든 매달 구독이든, 결제 화면까지 준비해 드려요.' },
        { title: '제대로 된 데이터베이스', text: '아티팩트 저장소에 있던 데이터를 백업되는 진짜 데이터베이스로 옮겨, 사용자가 많아져도 끄떡없어요.' },
        { title: '페이지 추가', text: '소개 페이지, 요금 안내, 회사 소개, 블로그까지 내 도구에 맞춰 붙여요.' },
        { title: '성장', text: '공유할 글, 검색 노출 개선, 방문자와 가입자를 정리한 주간 리포트까지.' },
      ],
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        { question: '무료인가요?', answer: '네. 가져오기 자체에는 크레딧이 들지 않아요. equipe의 첫 버전에 포함되고, 첫 버전은 저희가 내요. 이후 AI 팀이 고치거나 더하는 일에는 크레딧이 쓰여요.' },
        { question: 'window.storage도 되나요?', answer: '네. 개인 저장소는 Claude에서처럼 방문자 각자의 브라우저에 남아요. 공유 저장소는 내 서비스 전용 데이터 저장소로 옮겨져서, 모든 방문자가 같은 데이터를 봐요.' },
        { question: '안에서 Claude를 부르는 아티팩트는요?', answer: 'Claude 밖에서 돌아가려면 AI 연결이 필요해요. 팀이 내 서비스 전용 AI를 연결해 드리면 방문자에게도 그대로 작동해요.' },
        { question: 'equipe는 Anthropic과 관계가 있나요?', answer: '아니요. equipe는 독립적인 서드파티 도구예요. Claude는 Anthropic, PBC의 상표예요.' },
      ],
    },
    cta: { title: '붙여 넣기 한 번이면 시작돼요.', button: '아티팩트 붙여 넣기' },
    disclaimer: 'equipe는 Anthropic과 제휴하거나 Anthropic의 보증을 받은 서비스가 아니에요. Claude는 Anthropic, PBC의 상표예요.',
  },

  ja: {
    nav: 'Claudeから公開',
    navDesc: 'アーティファクトを貼るだけで公開',
    page: {
      title: 'Claudeのアーティファクトを本物のプロダクトに — equipe',
      desc: 'Claudeのアーティファクトのコードかリンクを貼るだけ。約1分でyour-name.equipe.pageに公開され、アクセス解析、SEO、プライバシーポリシーも付きます。コーディングは不要です。',
      ogTitle: 'Claudeのアーティファクトを本物のプロダクトに',
      kicker: 'Claudeから本物のプロダクトへ',
      h1: 'Claudeのアーティファクトを、本物のプロダクトとして公開。',
      lead: 'コードか公開リンクを貼るだけ。約1分でyour-name.equipe.pageに公開され、アクセス解析、SEO、プライバシーポリシーもそろっています。',
      then: 'そこから先はAIチームが、独自ドメイン、ログイン、決済、本格的なデータベースなど、ビジネスに必要なものを加えていきます。',
    },
    box: {
      codeLabel: 'アーティファクトのコード',
      codePh: 'ここにアーティファクトのコードを貼り付けてください。\nClaudeでアーティファクトを開き、Copy または Download を選びます。',
      dropLead: 'ファイルをここにドロップ、または',
      choose: 'ファイルを選ぶ',
      dropHere: 'ドロップするとファイルが入ります',
      linkLabel: '公開リンク',
      optional: '任意',
      linkPh: 'https://claude.ai/public/artifacts/…',
      submit: '公開する',
      sending: 'equipeを開いています…',
      remove: 'ファイルを外す',
      lines: '{n}行',
      free: '無料 · カード不要 · コーディング不要',
      errEmpty: '先にコードか公開リンクを貼り付けてください。',
      errLink: 'Claudeのアーティファクトのリンクではないようです。通常は https://claude.ai/public/artifacts/ で始まります。',
      errType: 'このファイル形式には対応していません。.jsx、.tsx、.html、.svg、.md、.mmd をお試しください。',
      errSize: '500KBを超えています。通常のアーティファクトよりかなり大きいので、アーティファクトのコードだけをコピーしたか確認してください。',
      errRead: 'ファイルを読み込めませんでした。ファイルを開いてコードを貼り付けてください。',
      moved: 'リンクだったので、リンク欄に移しました。',
      note: 'リンクしかない場合も大丈夫。Claudeは公開アーティファクトのコードを自身のページ内に保持しているため、リンクから読み取れないときは一度だけコピーをお願いします。アーティファクトを開いてCopyかDownloadを選び、貼り付けるだけです。',
    },
    home: {
      kicker: 'Claudeから公開',
      title: 'Claudeで何か作りましたか？本物のプロダクトにしましょう。',
      sub: 'アーティファクトのコードかリンクを貼るだけ。約1分で専用のアドレスに公開され、その先はAIチームが育てていきます。',
      more: '仕組みを見る',
    },
    how: {
      title: '仕組み',
      steps: [
        { title: '貼り付ける', text: 'コードを貼る、ファイルをドロップする、または公開リンクを入れるだけ。コーディングは不要です。' },
        { title: 'こちらでビルド', text: 'ほとんどのアーティファクトはAIを使わずにそのままビルドできます。待ち時間も書き直しもありません。' },
        { title: '約1分で公開', text: 'your-name.equipe.pageで公開され、アクセス解析、SEO、プライバシーポリシーも最初から設定済みです。' },
      ],
      formats: 'そのまま動きます',
      icons: 'Lucideアイコン',
    },
    next: {
      title: 'AIチームが次に加えられること',
      sub: '普段の言葉で頼むだけ。ドメインの購入など費用がかかることは、あなたの承認を待ちます。',
      items: [
        { title: '独自ドメイン', text: 'equipe.pageのアドレスの代わりにyourname.comを。チームが候補を探して接続まで行います。' },
        { title: 'ログイン', text: 'ユーザーごとのアカウントで、それぞれが自分のデータだけを見られます。' },
        { title: '決済', text: '作ったものを有料に。一回払いでも月額でも、決済画面までチームが用意します。' },
        { title: '本格的なデータベース', text: 'アーティファクトのストレージから、バックアップされる本物のデータベースへ。ユーザーが増えても安心です。' },
        { title: 'ページの追加', text: 'ランディングページ、料金ページ、紹介ページ、ブログなどをツールに合わせて追加します。' },
        { title: '成長', text: 'シェア用の投稿、検索での見つけやすさ、訪問者と登録者の週次レポート。' },
      ],
    },
    faq: {
      title: 'よくある質問',
      items: [
        { question: '無料ですか？', answer: 'はい。取り込み自体にクレジットはかかりません。equipeの最初のバージョンに含まれ、最初のバージョンは私たちが負担します。その後AIチームが行う変更にはクレジットを使います。' },
        { question: 'window.storageは使えますか？', answer: 'はい。個人用ストレージはClaudeと同じく、各訪問者のブラウザに保存されます。共有ストレージはプロダクト専用のデータストアに移るので、全員が同じデータを見られます。' },
        { question: '中でClaudeを呼び出すアーティファクトは？', answer: 'Claudeの外で動かすにはAIへの接続が必要です。チームがプロダクト専用のAIをつなげば、訪問者にもそのまま使ってもらえます。' },
        { question: 'equipeはAnthropicと提携していますか？', answer: 'いいえ。equipeは独立したサードパーティのツールです。ClaudeはAnthropic, PBCの商標です。' },
      ],
    },
    cta: { title: '貼り付けるだけで始まります。', button: 'アーティファクトを貼る' },
    disclaimer: 'equipeはAnthropicと提携しておらず、Anthropicの推奨を受けたものでもありません。ClaudeはAnthropic, PBCの商標です。',
  },

  'zh-CN': {
    nav: '从 Claude 上线',
    navDesc: '粘贴 Artifact，直接上线',
    page: {
      title: '把你的 Claude Artifact 变成真正的产品 — equipe',
      desc: '粘贴 Claude Artifact 的代码或链接，大约一分钟就在 your-name.equipe.page 上线，自带访问分析、SEO 和隐私政策页面。无需写代码。',
      ogTitle: '把你的 Claude Artifact 变成真正的产品',
      kicker: '从 Claude 到真正的产品',
      h1: '你的 Claude Artifact，作为真正的产品上线。',
      lead: '粘贴代码或公开链接，大约一分钟就在 your-name.equipe.page 上线，访问分析、SEO 和隐私政策页面都已就绪。',
      then: '接下来，你的 AI 团队会补上真正做生意需要的东西：自己的域名、登录、收款和真正的数据库。',
    },
    box: {
      codeLabel: 'Artifact 代码',
      codePh: '把 Artifact 的代码粘贴到这里。\n在 Claude 里打开 Artifact，选择 Copy 或 Download 即可。',
      dropLead: '把文件拖到这里，或',
      choose: '选择文件',
      dropHere: '松开即可添加文件',
      linkLabel: '公开链接',
      optional: '可选',
      linkPh: 'https://claude.ai/public/artifacts/…',
      submit: '立即上线',
      sending: '正在打开 equipe…',
      remove: '移除文件',
      lines: '{n} 行',
      free: '免费 · 无需绑卡 · 无需写代码',
      errEmpty: '请先粘贴代码或公开链接。',
      errLink: '这看起来不是 Claude Artifact 链接，通常以 https://claude.ai/public/artifacts/ 开头。',
      errType: '不支持这种文件类型，请使用 .jsx、.tsx、.html、.svg、.md 或 .mmd。',
      errSize: '超过 500 KB 了，比一般的 Artifact 大很多。请确认只复制了 Artifact 本身。',
      errRead: '无法读取这个文件，请打开它并粘贴代码。',
      moved: '这是一个链接，已帮你放到链接栏。',
      note: '只有链接？Claude 会把公开 Artifact 的代码放在它自己的页面里，所以如果我们无法通过链接读取，会请你复制一次：打开 Artifact，选择 Copy 或 Download，然后粘贴即可。',
    },
    home: {
      kicker: '从 Claude 上线',
      title: '在 Claude 里做了东西？把它变成真正的产品。',
      sub: '粘贴 Artifact 的代码或链接，大约一分钟就在专属地址上线，之后交给你的 AI 团队继续打磨。',
      more: '了解流程',
    },
    how: {
      title: '怎么运作',
      steps: [
        { title: '粘贴', text: '粘贴代码、拖入文件，或提供公开链接。无需写代码。' },
        { title: '我们来构建', text: '大多数 Artifact 无需任何 AI 就能直接构建，不用等待，也不用重写。' },
        { title: '大约一分钟上线', text: '在 your-name.equipe.page 打开，访问分析、SEO 和隐私政策页面都已配置好。' },
      ],
      formats: '原样即可运行',
      icons: 'Lucide 图标',
    },
    next: {
      title: '你的 AI 团队接下来可以加上',
      sub: '用平常的话提出就行。像购买域名这样要花钱的事，会先等你同意。',
      items: [
        { title: '自己的域名', text: '用 yourname.com 替代 equipe.page 地址，团队帮你挑选并完成连接。' },
        { title: '登录', text: '为用户开设账号，每个人只看到自己的内容。' },
        { title: '收款', text: '为你的作品收费，一次性或按月订阅都行，结账流程也帮你搭好。' },
        { title: '真正的数据库', text: '数据从 Artifact 存储迁到有备份的正式数据库，用户再多也稳得住。' },
        { title: '更多页面', text: '围绕你的工具加上落地页、价格页、关于页或博客。' },
        { title: '增长', text: '可分享的帖子、更好的搜索曝光，以及访客和注册的每周报告。' },
      ],
    },
    faq: {
      title: '常见问题',
      items: [
        { question: '免费吗？', answer: '免费。导入本身不消耗积分：它属于你在 equipe 上的第一个版本，第一个版本由我们承担。之后 AI 团队做的改动会使用积分。' },
        { question: 'window.storage 能用吗？', answer: '能用。个人存储和在 Claude 里一样，保存在每位访客自己的浏览器中。共享存储会迁移到你产品自己的数据存储，所有访客看到的是同一份数据。' },
        { question: '内部调用 Claude 的 Artifact 呢？', answer: '这类 Artifact 在 Claude 之外运行需要接入 AI。你的团队可以为产品接上它自己的 AI，让访客照常使用。' },
        { question: 'equipe 和 Anthropic 有关联吗？', answer: '没有。equipe 是独立的第三方工具。Claude 是 Anthropic, PBC 的商标。' },
      ],
    },
    cta: { title: '只差一次粘贴。', button: '粘贴你的 Artifact' },
    disclaimer: 'equipe 与 Anthropic 无关联，也未获得 Anthropic 的认可。Claude 是 Anthropic, PBC 的商标。',
  },

  es: {
    nav: 'Desde Claude',
    navDesc: 'Pega un artifact y tenlo en línea',
    page: {
      title: 'Tu artifact de Claude, en línea como un producto real — equipe',
      desc: 'Pega el código o el enlace de tu artifact de Claude. En un minuto está en línea en tu-nombre.equipe.page, con analítica, SEO y página de privacidad. Sin programar.',
      ogTitle: 'Tu artifact de Claude, en línea como un producto real',
      kicker: 'De Claude a un producto real',
      h1: 'Tu artifact de Claude, en línea como un producto real.',
      lead: 'Pega el código o el enlace público. En más o menos un minuto está en línea en tu-nombre.equipe.page, con analítica, SEO y una página de privacidad.',
      then: 'Después, tu equipo de IA añade lo que necesita un negocio de verdad: tu propio dominio, inicio de sesión, pagos y una base de datos real.',
    },
    box: {
      codeLabel: 'Código del artifact',
      codePh: 'Pega aquí el código de tu artifact.\nEn Claude, abre el artifact y elige Copy o Download.',
      dropLead: 'Suelta un archivo aquí, o',
      choose: 'elige uno',
      dropHere: 'Suelta el archivo para añadirlo',
      linkLabel: 'Enlace público',
      optional: 'opcional',
      linkPh: 'https://claude.ai/public/artifacts/…',
      submit: 'Ponerlo en línea',
      sending: 'Abriendo equipe…',
      remove: 'Quitar archivo',
      lines: '{n} líneas',
      free: 'Gratis · Sin tarjeta · Sin programar',
      errEmpty: 'Primero pega el código o el enlace público.',
      errLink: 'No parece un enlace a un artifact de Claude. Suele empezar por https://claude.ai/public/artifacts/',
      errType: 'Ese tipo de archivo no sirve. Prueba con .jsx, .tsx, .html, .svg, .md o .mmd.',
      errSize: 'Pasa de 500 KB, mucho más de lo que suele ocupar un artifact. Revisa que copiaste solo el artifact.',
      errRead: 'No pudimos leer ese archivo. Ábrelo y pega el código.',
      moved: 'Era un enlace, así que lo pasamos al campo del enlace.',
      note: '¿Solo tienes el enlace? Claude guarda el código de un artifact publicado dentro de su propia página, así que si no podemos leerlo desde el enlace, te pediremos que lo copies una vez: abre el artifact, elige Copy o Download y pégalo.',
    },
    home: {
      kicker: 'Desde Claude',
      title: '¿Hiciste algo en Claude? Conviértelo en un producto real.',
      sub: 'Pega el código o el enlace de tu artifact. En un minuto está en línea en su propia dirección, y tu equipo de IA sigue desde ahí.',
      more: 'Cómo funciona',
    },
    how: {
      title: 'Cómo funciona',
      steps: [
        { title: 'Pega', text: 'Pega el código, suelta el archivo o comparte el enlace público. Sin programar.' },
        { title: 'Lo construimos', text: 'La mayoría de los artifacts se construyen sin usar IA, así que no hay nada que esperar ni que reescribir.' },
        { title: 'En línea en un minuto', text: 'Se abre en tu-nombre.equipe.page, con analítica, SEO y página de privacidad ya listas.' },
      ],
      formats: 'Funciona tal cual',
      icons: 'iconos Lucide',
    },
    next: {
      title: 'Lo que tu equipo de IA puede añadir después',
      sub: 'Pídelo con tus palabras. Todo lo que cueste dinero, como comprar un dominio, espera tu aprobación.',
      items: [
        { title: 'Tu propio dominio', text: 'tunombre.com en lugar de una dirección equipe.page. Tu equipo busca buenas opciones y lo conecta.' },
        { title: 'Inicio de sesión', text: 'Cuentas para tus usuarios, para que cada persona vea lo suyo.' },
        { title: 'Pagos', text: 'Cobra por lo que hiciste, una vez o cada mes, con el pago ya configurado.' },
        { title: 'Una base de datos real', text: 'Tus datos salen del almacenamiento del artifact y pasan a una base de datos con copias de seguridad, lista para muchos usuarios.' },
        { title: 'Más páginas', text: 'Una página de inicio, precios, quiénes somos o un blog alrededor de tu herramienta.' },
        { title: 'Crecimiento', text: 'Publicaciones para compartir, mejor presencia en buscadores y un informe semanal de visitas y registros.' },
      ],
    },
    faq: {
      title: 'Preguntas',
      items: [
        { question: '¿Es gratis?', answer: 'Sí. La importación en sí no usa créditos: forma parte de tu primera versión en equipe, que corre por nuestra cuenta. Los cambios que haga tu equipo de IA después usan créditos.' },
        { question: '¿Funciona window.storage?', answer: 'Sí. El almacenamiento personal se queda en el navegador de cada visitante, igual que en Claude. El almacenamiento compartido pasa al almacén de datos propio de tu producto, así que todos ven los mismos datos.' },
        { question: '¿Y los artifacts que llaman a Claude por dentro?', answer: 'Necesitan una conexión de IA para funcionar fuera de Claude. Tu equipo puede conectar la IA propia de tu producto para que siga funcionando para tus visitantes.' },
        { question: '¿equipe está afiliado a Anthropic?', answer: 'No. equipe es una herramienta independiente de terceros. Claude es una marca registrada de Anthropic, PBC.' },
      ],
    },
    cta: { title: 'Tu artifact está a un pegado de distancia.', button: 'Pegar mi artifact' },
    disclaimer: 'equipe no está afiliado a Anthropic ni cuenta con su respaldo. Claude es una marca registrada de Anthropic, PBC.',
  },

  'pt-BR': {
    nav: 'Do Claude',
    navDesc: 'Cole um artifact e coloque no ar',
    page: {
      title: 'Seu artifact do Claude no ar como um produto real — equipe',
      desc: 'Cole o código ou o link do seu artifact do Claude. Em cerca de um minuto ele está no ar em seu-nome.equipe.page, com analytics, SEO e página de privacidade. Sem programar.',
      ogTitle: 'Seu artifact do Claude no ar como um produto real',
      kicker: 'Do Claude para um produto real',
      h1: 'Seu artifact do Claude, no ar como um produto real.',
      lead: 'Cole o código ou o link público. Em cerca de um minuto ele está no ar em seu-nome.equipe.page, com analytics, SEO e uma página de privacidade.',
      then: 'Depois, seu time de IA acrescenta o que um negócio de verdade precisa: seu próprio domínio, login, pagamentos e um banco de dados de verdade.',
    },
    box: {
      codeLabel: 'Código do artifact',
      codePh: 'Cole aqui o código do seu artifact.\nNo Claude, abra o artifact e escolha Copy ou Download.',
      dropLead: 'Solte um arquivo aqui, ou',
      choose: 'escolha um',
      dropHere: 'Solte o arquivo para adicionar',
      linkLabel: 'Link público',
      optional: 'opcional',
      linkPh: 'https://claude.ai/public/artifacts/…',
      submit: 'Colocar no ar',
      sending: 'Abrindo a equipe…',
      remove: 'Remover arquivo',
      lines: '{n} linhas',
      free: 'Grátis · Sem cartão · Sem programar',
      errEmpty: 'Cole o código ou o link público primeiro.',
      errLink: 'Isso não parece um link de artifact do Claude. Normalmente começa com https://claude.ai/public/artifacts/',
      errType: 'Esse tipo de arquivo não funciona. Tente .jsx, .tsx, .html, .svg, .md ou .mmd.',
      errSize: 'Passou de 500 KB, bem mais do que um artifact costuma ter. Confira se você copiou só o artifact.',
      errRead: 'Não conseguimos ler esse arquivo. Abra-o e cole o código.',
      moved: 'Era um link, então colocamos no campo de link.',
      note: 'Só tem o link? O Claude guarda o código de um artifact publicado dentro da própria página, então, se não conseguirmos ler pelo link, vamos pedir que você copie uma vez: abra o artifact, escolha Copy ou Download e cole.',
    },
    home: {
      kicker: 'Do Claude',
      title: 'Fez algo no Claude? Transforme em um produto real.',
      sub: 'Cole o código ou o link do seu artifact. Em cerca de um minuto ele está no ar no próprio endereço, e seu time de IA segue daí.',
      more: 'Como funciona',
    },
    how: {
      title: 'Como funciona',
      steps: [
        { title: 'Cole', text: 'Cole o código, solte o arquivo ou compartilhe o link público. Sem programar.' },
        { title: 'Nós montamos', text: 'A maioria dos artifacts é montada sem usar IA nenhuma, então não há o que esperar nem o que reescrever.' },
        { title: 'No ar em um minuto', text: 'Ele abre em seu-nome.equipe.page, com analytics, SEO e página de privacidade já prontos.' },
      ],
      formats: 'Funciona do jeito que está',
      icons: 'ícones Lucide',
    },
    next: {
      title: 'O que seu time de IA pode acrescentar depois',
      sub: 'Peça com suas palavras. Tudo que custa dinheiro, como comprar um domínio, espera o seu sim.',
      items: [
        { title: 'Seu próprio domínio', text: 'seunome.com.br no lugar de um endereço equipe.page. Seu time encontra boas opções e conecta.' },
        { title: 'Login', text: 'Contas para seus usuários, para cada pessoa ver só o que é dela.' },
        { title: 'Pagamentos', text: 'Cobre pelo que você criou, uma vez ou todo mês, com o checkout já configurado.' },
        { title: 'Um banco de dados de verdade', text: 'Seus dados saem do armazenamento do artifact e vão para um banco de dados com backup, pronto para muitos usuários.' },
        { title: 'Mais páginas', text: 'Uma página inicial, preços, sobre ou um blog em volta da sua ferramenta.' },
        { title: 'Crescimento', text: 'Posts para compartilhar, mais presença nas buscas e um relatório semanal de visitas e cadastros.' },
      ],
    },
    faq: {
      title: 'Perguntas',
      items: [
        { question: 'É grátis?', answer: 'Sim. A importação em si não usa créditos: ela faz parte da sua primeira versão na equipe, que é por nossa conta. As mudanças que seu time de IA fizer depois usam créditos.' },
        { question: 'O window.storage funciona?', answer: 'Sim. O armazenamento pessoal fica no navegador de cada visitante, como no Claude. O armazenamento compartilhado vai para o banco de dados próprio do seu produto, então todos os visitantes veem os mesmos dados.' },
        { question: 'E artifacts que chamam o Claude por dentro?', answer: 'Eles precisam de uma conexão de IA para funcionar fora do Claude. Seu time pode conectar a IA própria do seu produto, para que continue funcionando para os seus visitantes.' },
        { question: 'A equipe tem vínculo com a Anthropic?', answer: 'Não. A equipe é uma ferramenta independente, de terceiros. Claude é uma marca registrada da Anthropic, PBC.' },
      ],
    },
    cta: { title: 'Seu artifact está a uma colagem de distância.', button: 'Colar meu artifact' },
    disclaimer: 'A equipe não tem vínculo com a Anthropic nem é endossada por ela. Claude é uma marca registrada da Anthropic, PBC.',
  },

  de: {
    nav: 'Aus Claude',
    navDesc: 'Artifact einfügen, live schalten',
    page: {
      title: 'Dein Claude-Artifact, live als echtes Produkt — equipe',
      desc: 'Füge Code oder Link deines Claude-Artifacts ein. In etwa einer Minute ist es live unter dein-name.equipe.page, mit Analytics, SEO und Datenschutzseite. Ohne Programmieren.',
      ogTitle: 'Dein Claude-Artifact, live als echtes Produkt',
      kicker: 'Von Claude zum echten Produkt',
      h1: 'Dein Claude-Artifact, live als echtes Produkt.',
      lead: 'Füge den Code oder den öffentlichen Link ein. In etwa einer Minute ist es live unter dein-name.equipe.page, mit Analytics, SEO und einer Datenschutzseite.',
      then: 'Danach ergänzt dein KI-Team, was ein echtes Geschäft braucht: eigene Domain, Anmeldung, Zahlungen und eine richtige Datenbank.',
    },
    box: {
      codeLabel: 'Code des Artifacts',
      codePh: 'Füge hier den Code deines Artifacts ein.\nÖffne das Artifact in Claude und wähle Copy oder Download.',
      dropLead: 'Datei hier ablegen, oder',
      choose: 'auswählen',
      dropHere: 'Loslassen, um die Datei hinzuzufügen',
      linkLabel: 'Öffentlicher Link',
      optional: 'optional',
      linkPh: 'https://claude.ai/public/artifacts/…',
      submit: 'Live schalten',
      sending: 'equipe wird geöffnet…',
      remove: 'Datei entfernen',
      lines: '{n} Zeilen',
      free: 'Kostenlos · Keine Karte nötig · Ohne Programmieren',
      errEmpty: 'Füge zuerst den Code oder den öffentlichen Link ein.',
      errLink: 'Das sieht nicht nach einem Link zu einem Claude-Artifact aus. Er beginnt meist mit https://claude.ai/public/artifacts/',
      errType: 'Dieser Dateityp funktioniert nicht. Versuch es mit .jsx, .tsx, .html, .svg, .md oder .mmd.',
      errSize: 'Das sind über 500 KB, viel mehr als ein Artifact normalerweise hat. Prüf, ob du nur das Artifact kopiert hast.',
      errRead: 'Die Datei konnten wir nicht lesen. Öffne sie und füge den Code ein.',
      moved: 'Das war ein Link, deshalb steht er jetzt im Link-Feld.',
      note: 'Nur den Link? Claude bewahrt den Code eines veröffentlichten Artifacts in der eigenen Seite auf. Können wir ihn über den Link nicht lesen, bitten wir dich einmal ums Kopieren: Artifact öffnen, Copy oder Download wählen und einfügen.',
    },
    home: {
      kicker: 'Aus Claude',
      title: 'Etwas in Claude gebaut? Mach ein echtes Produkt daraus.',
      sub: 'Füge Code oder Link deines Artifacts ein. In etwa einer Minute ist es unter eigener Adresse live, und dein KI-Team macht von dort aus weiter.',
      more: 'So funktioniert’s',
    },
    how: {
      title: 'So funktioniert’s',
      steps: [
        { title: 'Einfügen', text: 'Code einfügen, Datei ablegen oder den öffentlichen Link teilen. Ohne Programmieren.' },
        { title: 'Wir bauen es', text: 'Die meisten Artifacts lassen sich ganz ohne KI bauen. Kein Warten, nichts muss neu geschrieben werden.' },
        { title: 'In etwa einer Minute live', text: 'Es öffnet sich unter dein-name.equipe.page, mit Analytics, SEO und Datenschutzseite, schon eingerichtet.' },
      ],
      formats: 'Läuft, wie es ist',
      icons: 'Lucide-Icons',
    },
    next: {
      title: 'Was dein KI-Team als Nächstes ergänzen kann',
      sub: 'Sag es einfach in deinen Worten. Alles, was Geld kostet, etwa eine Domain, wartet auf dein Ja.',
      items: [
        { title: 'Eigene Domain', text: 'deinname.de statt einer equipe.page-Adresse. Dein Team findet gute Optionen und verbindet sie.' },
        { title: 'Anmeldung', text: 'Konten für deine Nutzer, damit jede Person nur ihre eigenen Sachen sieht.' },
        { title: 'Zahlungen', text: 'Verlange Geld für das, was du gebaut hast, einmalig oder monatlich, mit fertig eingerichtetem Checkout.' },
        { title: 'Eine richtige Datenbank', text: 'Deine Daten ziehen vom Artifact-Speicher in eine echte Datenbank mit Backups, bereit für viele Nutzer.' },
        { title: 'Mehr Seiten', text: 'Eine Startseite, Preise, eine Über-uns-Seite oder ein Blog rund um dein Tool.' },
        { title: 'Wachstum', text: 'Beiträge zum Teilen, bessere Sichtbarkeit in der Suche und ein Wochenbericht zu Besuchen und Anmeldungen.' },
      ],
    },
    faq: {
      title: 'Fragen',
      items: [
        { question: 'Ist das kostenlos?', answer: 'Ja. Der Import selbst verbraucht keine Credits: Er gehört zu deiner ersten Version auf equipe, und die geht auf uns. Spätere Änderungen durch dein KI-Team verbrauchen Credits.' },
        { question: 'Funktioniert window.storage?', answer: 'Ja. Persönlicher Speicher bleibt im Browser jedes Besuchers, wie in Claude. Geteilter Speicher zieht in den eigenen Datenspeicher deines Produkts, sodass alle dieselben Daten sehen.' },
        { question: 'Und Artifacts, die intern Claude aufrufen?', answer: 'Die brauchen außerhalb von Claude eine KI-Anbindung. Dein Team kann die eigene KI deines Produkts anschließen, damit es für deine Besucher weiter funktioniert.' },
        { question: 'Gehört equipe zu Anthropic?', answer: 'Nein. equipe ist ein unabhängiges Tool eines Drittanbieters. Claude ist eine Marke von Anthropic, PBC.' },
      ],
    },
    cta: { title: 'Dein Artifact ist nur einmal Einfügen entfernt.', button: 'Artifact einfügen' },
    disclaimer: 'equipe ist nicht mit Anthropic verbunden und wird nicht von Anthropic unterstützt. Claude ist eine Marke von Anthropic, PBC.',
  },

  fr: {
    nav: 'Depuis Claude',
    navDesc: 'Collez un artifact, il est en ligne',
    page: {
      title: 'Votre artifact Claude, en ligne comme un vrai produit — equipe',
      desc: 'Collez le code ou le lien de votre artifact Claude. En une minute environ, il est en ligne sur votre-nom.equipe.page, avec statistiques, SEO et page de confidentialité. Sans coder.',
      ogTitle: 'Votre artifact Claude, en ligne comme un vrai produit',
      kicker: 'De Claude à un vrai produit',
      h1: 'Votre artifact Claude, en ligne comme un vrai produit.',
      lead: 'Collez le code ou le lien public. En une minute environ, il est en ligne sur votre-nom.equipe.page, avec statistiques, SEO et une page de confidentialité.',
      then: 'Ensuite, votre équipe IA ajoute ce dont une vraie activité a besoin : votre propre domaine, la connexion, les paiements et une vraie base de données.',
    },
    box: {
      codeLabel: 'Code de l’artifact',
      codePh: 'Collez ici le code de votre artifact.\nDans Claude, ouvrez l’artifact et choisissez Copy ou Download.',
      dropLead: 'Déposez un fichier ici, ou',
      choose: 'choisissez-en un',
      dropHere: 'Relâchez pour ajouter le fichier',
      linkLabel: 'Lien public',
      optional: 'facultatif',
      linkPh: 'https://claude.ai/public/artifacts/…',
      submit: 'Mettre en ligne',
      sending: 'Ouverture d’equipe…',
      remove: 'Retirer le fichier',
      lines: '{n} lignes',
      free: 'Gratuit · Sans carte · Sans coder',
      errEmpty: 'Collez d’abord le code ou le lien public.',
      errLink: 'Ce lien ne ressemble pas à celui d’un artifact Claude. Il commence en général par https://claude.ai/public/artifacts/',
      errType: 'Ce type de fichier ne convient pas. Essayez .jsx, .tsx, .html, .svg, .md ou .mmd.',
      errSize: 'Cela dépasse 500 Ko, bien plus qu’un artifact habituel. Vérifiez que vous n’avez copié que l’artifact.',
      errRead: 'Impossible de lire ce fichier. Ouvrez-le et collez le code.',
      moved: 'C’était un lien, nous l’avons mis dans le champ prévu.',
      note: 'Vous n’avez que le lien ? Claude garde le code d’un artifact publié dans sa propre page. Si nous ne pouvons pas le lire depuis le lien, nous vous demanderons de le copier une fois : ouvrez l’artifact, choisissez Copy ou Download, puis collez.',
    },
    home: {
      kicker: 'Depuis Claude',
      title: 'Vous avez créé quelque chose dans Claude ? Faites-en un vrai produit.',
      sub: 'Collez le code ou le lien de votre artifact. En une minute environ, il est en ligne à sa propre adresse, et votre équipe IA prend le relais.',
      more: 'Comment ça marche',
    },
    how: {
      title: 'Comment ça marche',
      steps: [
        { title: 'Collez', text: 'Collez le code, déposez le fichier ou partagez le lien public. Sans coder.' },
        { title: 'Nous le construisons', text: 'La plupart des artifacts se construisent sans la moindre IA : rien à attendre, rien à réécrire.' },
        { title: 'En ligne en une minute', text: 'Il s’ouvre sur votre-nom.equipe.page, avec statistiques, SEO et page de confidentialité déjà en place.' },
      ],
      formats: 'Fonctionne tel quel',
      icons: 'icônes Lucide',
    },
    next: {
      title: 'Ce que votre équipe IA peut ajouter ensuite',
      sub: 'Demandez-le avec vos mots. Tout ce qui coûte de l’argent, comme acheter un domaine, attend votre accord.',
      items: [
        { title: 'Votre propre domaine', text: 'votrenom.fr au lieu d’une adresse equipe.page. Votre équipe trouve de bonnes options et le connecte.' },
        { title: 'Connexion', text: 'Des comptes pour vos utilisateurs, pour que chacun voie ce qui le concerne.' },
        { title: 'Paiements', text: 'Faites payer ce que vous avez créé, une fois ou chaque mois, avec un paiement déjà configuré.' },
        { title: 'Une vraie base de données', text: 'Vos données quittent le stockage de l’artifact pour une vraie base de données sauvegardée, prête pour beaucoup d’utilisateurs.' },
        { title: 'Plus de pages', text: 'Une page d’accueil, des tarifs, une page à propos ou un blog autour de votre outil.' },
        { title: 'Croissance', text: 'Des posts à partager, une meilleure visibilité dans les recherches et un rapport hebdomadaire sur les visites et les inscriptions.' },
      ],
    },
    faq: {
      title: 'Questions',
      items: [
        { question: 'C’est gratuit ?', answer: 'Oui. L’import lui-même n’utilise aucun crédit : il fait partie de votre première version sur equipe, qui est offerte. Les changements que fera ensuite votre équipe IA utilisent des crédits.' },
        { question: 'window.storage fonctionne-t-il ?', answer: 'Oui. Le stockage personnel reste dans le navigateur de chaque visiteur, comme dans Claude. Le stockage partagé passe dans la base de données propre à votre produit, pour que tous les visiteurs voient les mêmes données.' },
        { question: 'Et les artifacts qui appellent Claude en interne ?', answer: 'Ils ont besoin d’une connexion IA pour fonctionner hors de Claude. Votre équipe peut brancher l’IA propre à votre produit, pour qu’il continue de fonctionner pour vos visiteurs.' },
        { question: 'equipe est-il affilié à Anthropic ?', answer: 'Non. equipe est un outil tiers indépendant. Claude est une marque d’Anthropic, PBC.' },
      ],
    },
    cta: { title: 'Votre artifact n’est qu’à un collage d’ici.', button: 'Coller mon artifact' },
    disclaimer: 'equipe n’est ni affilié à Anthropic ni approuvé par Anthropic. Claude est une marque d’Anthropic, PBC.',
  },
};

/** Formats the import builds without AI (product names, not translated; Lucide's label comes from `how.icons`). */
export const FORMATS = ['React', 'Tailwind', 'shadcn/ui', '{icons}', 'Recharts', 'HTML', 'SVG', 'Mermaid', 'Markdown'] as const;

/** Where the paste box sends things (app.equipe.im): a form POST with the code, or a GET with only the link. */
export const IMPORT_URL = 'https://app.equipe.im/import';
/** Files the box reads (client-side, never uploaded on their own) and the size cap for the file and for pasted code. */
export const IMPORT_EXTS = ['.jsx', '.tsx', '.html', '.svg', '.md', '.mmd'] as const;
export const IMPORT_MAX_BYTES = 500 * 1024;
