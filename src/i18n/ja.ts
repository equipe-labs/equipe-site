import type { Messages } from './en';

const ja: Messages = {
  meta: {
    title: 'equipe — 1人で率いるAIコーディングエージェントのスクワッド',
    description:
      'equipeはオープンソースのAIソフトウェアスクワッドです。役割ごとのエージェントが共有ボードをもとに、分離されたgit worktreeで作業します。マージの前には必ずあなたが承認します。',
    ogTitle: 'equipe — 1人で率いるAIコーディングエージェントのスクワッド',
    ogDescription:
      'equipeはオープンソースのAIソフトウェアスクワッドです。役割ごとのエージェントが共有ボードをもとに、分離されたgit worktreeで作業します。マージの前には必ずあなたが承認します。',
    ogImageAlt: 'equipe — 1人で率いるAIコーディングエージェントのスクワッド',
  },
  ui: {
    skip: '本文へスキップ',
    primaryNav: 'メインメニュー',
    copy: 'コピー',
    copied: 'コピー済み',
    copyInstall: 'インストールコマンドをコピー',
    copyCommands: 'コマンドをコピー',
    copyCommand: 'コマンドをコピー',
    language: '言語',
    bannerText: 'このページを{language}で見る',
    bannerClose: '閉じる',
  },
  nav: { howItWorks: '仕組み', getStarted: 'はじめる', faq: 'よくある質問', github: 'GitHub' },
  hero: {
    title: 'AIエージェントのチームを率い、マージはあなたが承認します。',
    lead: 'PM・デザイナー・開発者・モバイルのエージェントが共有ボードから仕事を受け取り、あなたのリポジトリでそれぞれ専用のブランチを使って作業します。あなたが承認しない限り、何もマージされません。',
    ctaPrimary: 'GitHubで見る',
    chip: '初期段階 · MITライセンス · Codex・Claude Code対応',
    shotAlt: 'equipeデスクトップアプリのプレビュー：エージェントがコマンド実行の許可を求め、「1度だけ許可」「常に許可」「拒否」のボタンが並んでいる',
    shotCaption: 'デスクトップアプリのプレビュー — エージェントが「許可が必要です」と一時停止し、あなたはワンクリックで承認できます。（アプリは近日公開）',
  },
  how: {
    title: '仕組み',
    intro: '率いるのは1人。スクワッドは並行して働き、すべてのやり取りはボードを通ります。',
    steps: [
      { title: '任せる', text: 'PMにやりたいことを伝えると、共有ボードのチケットに分けられます。チケットごとに担当する役割があります。' },
      { title: '並行して作業', text: 'メンバーはそれぞれ自分のブランチで同時に作業します。あなたの手元の作業ディレクトリには触れず、すべての操作はボードに記録されます。' },
      { title: 'あなたの承認', text: 'マージの前に、equipeがあなたに確認します。あなたが承認するまで、何も反映されません。' },
    ],
  },
  who: {
    title: 'equipeが向いている人',
    intro: 'equipeは、エージェントに1つずつプロンプトを送るのではなく、AIエージェントの小さなソフトウェアチームを率いたい人のためのツールです。あなたが方向性を決めて成果をレビューし、スクワッドが作業をチケットに分けてブランチ上で進めます。',
    points: [
      { lead: 'すでにCodexかClaude Codeを使っている。', text: 'equipeがそれらを動かします。ログインも、今までと同じ方法です。' },
      { lead: 'レビューできる並行作業がほしい。', text: 'すべての変更はブランチとして届き、mainブランチにいきなり入り込むことはありません。' },
      { lead: '判断は自分で下したい。', text: '要所に承認ゲートがあるので、最終判断は常にあなたが下せます。' },
    ],
    proof: 'このサイトも、equipeのスクワッドが公開の場で作りました。すべての変更はチケットから始まり、人が受理したブランチとして取り込まれています。',
  },
  apps: {
    title: 'Macで見守り、スマートフォンで承認。',
    intro: 'スクワッドはターミナルの外でも見られます。エージェントが許可を待つとスマートフォンが知らせ、Face IDで承認できます。やり取りする内容はエンドツーエンドで暗号化されます。',
    soon: '準備中',
    caption: 'アプリのモックアップ · 準備中',
    items: [
      { title: 'デスクトップアプリ', platform: 'macOS', text: 'スクワッド、ボード、PMとの会話を1つのウィンドウで。', alt: 'デスクトップアプリのモックアップ：エージェントがコマンド実行の許可を求め、「1度だけ許可」「常に許可」「拒否」のボタンが表示されています。' },
      { title: 'モバイルアプリ', platform: 'iOS · Android', text: '承認が必要なときだけ通知します。', alt: 'モバイルアプリのモックアップ：承認待ちのリクエストが2件あります。' },
    ],
    phone: { label: 'APPROVE · 3', askCommand: 'コマンドを実行しますか？', allow: '1度だけ許可', decline: '拒否', askMerge: 'ブランチをマージしますか？', approve: '承認', changes: '変更を依頼' },
    notify: { title: 'アプリの公開をお知らせしましょうか？', text: 'GitHubでリリースをWatchすると、新しいリリースが出たときだけメールが届きます。当サイトへの登録は不要で、メールアドレスも収集しません。', cta: 'GitHubで通知を受け取る', how: 'equipe-labs/equipeリポジトリで「Watch → Custom → Releases」を選んでください。' },
  },
  start: {
    title: 'はじめる',
    install: 'macOSとLinuxなら1行で済みます。ビルド済みの`equipe`をSHA-256で検証したうえで`~/.local/bin`に配置し、PATHにも追加します：',
    brew: 'Homebrew tapからビルド済みの`equipe`をインストールします。今後の更新は`brew upgrade equipe`で行えます：',
    tabsLabel: 'インストール方法',
    sourceTitle: 'ソースからビルド（上級者向け）',
    source: '自分でビルドしたい場合は、ソースからもインストールできます。Rust 1.88+とgitが必要です。`github.com/equipe-labs/equipe`をcloneし、`cargo install --locked --path crates/cli`を実行してください。Claudeエンジンを使う場合は、`claude`バイナリも必要です。',
    run: 'エンジンにログインし、準備ができているか確認してから、スクワッドコンソールを開きます：',
    runCode: `equipe login     # CodexまたはClaude Codeにログイン
equipe status    # エンジンの準備状況とモデルの利用可否を確認
equipe           # スクワッドコンソールを開く`,
    tryIntro: 'まずはボードなしで試してみたい場合は、1つのエージェントに、分離されたworktree内の新しいブランチでリポジトリを編集させてみましょう：',
    docs: 'GitHubでドキュメントを読む →',
    roadmap: 'ロードマップ',
    architecture: 'アーキテクチャ',
  },
  faq: {
    title: 'よくある質問',
    items: [
      {
        question: 'equipeとは？',
        answer:
          'equipeはオープンソースのAIソフトウェアスクワッドです。PM、デザイナー、フロントエンド、バックエンド、モバイル、QA、データといった役割のエージェントを、共有ボードを中心に連携させます。エージェントは分離されたgit worktreeで作業し、変更は人が承認してからマージされます。',
      },
      {
        question: 'equipeも、AIコーディングエージェントの1つですか？',
        answer:
          'いいえ。equipeは新しいエージェントループではなく、既存のエージェントエンジンの上に重ねるチームのレイヤーです。役割、信頼できる唯一の情報源であるボード、並行作業のための分離されたgit worktree、人による承認ゲートを加えます。',
      },
      {
        question: 'equipeはどのAIエンジンで使えますか？',
        answer:
          '現在はCodexとClaude Codeを動かせます。Agent Client Protocolを通じて、さらに多くのエンジンに対応できるよう設計しています。',
      },
      {
        question: 'equipeは認証情報を扱いますか？',
        answer:
          'Claude Codeの場合は扱いません。改変されていない`claude`バイナリをご自身で実行してログインするため、料金はご自身のアカウントに請求されます。Codexの場合は、equipeがご利用のChatGPTプランでOAuthログインし、`originator: equipe`として正直に名乗ります。',
      },
      {
        question: 'equipeはどうやってインストールしますか？',
        answer:
          'macOSとLinuxでは`brew install equipe-labs/tap/equipe`の1行で済みます。install.shの1行や、ソースからのビルド(Rust 1.88+)も使えます。方法はすべて「はじめる」にあります。',
      },
      {
        question: '作業は誰が承認しますか？',
        answer:
          'あなたです。メンバーはそれぞれ、分離されたworktreeの自分のブランチで作業し、ブランチをマージする前にequipeが人の承認を求めます。PMはボード上で作業を受理しますが、何を取り込むかを最終的に決めるのは、スクワッドを率いる人です。',
      },
      {
        question: 'equipeは無料のオープンソースですか？',
        answer:
          'はい。equipeはMITライセンスで公開されており、最初のコミットからオープンソースです。equipe自体は無料です。Claude CodeとCodexは、ご自身のAnthropicおよびOpenAI（ChatGPT）のサブスクリプションまたはアカウントで動作します。',
      },
      {
        question: 'equipeは本番環境で使えますか？',
        answer:
          'equipeは開発初期の段階です。スクワッドのデーモンがバックグラウンドで動き、PMが作業を受理し、エージェントはサンドボックス内のブランチで作業し、マージの前にあなたが承認します。引き継ぎとコミュニケーションチャネルは、ロードマップにあるとおり、次に対応する予定です。',
      },
      {
        question: 'git worktreeとは何ですか？　equipeはなぜそれを使うのですか？',
        answer:
          'git worktreeは、同じリポジトリをもう1つの作業フォルダとして開いたもので、フォルダごとに自分のブランチを持ちます。equipeはメンバーごとに1つ用意するので、複数のメンバーが同時に作業しても、互いの作業にもあなたの作業ディレクトリにも影響しません。',
      },
    ],
  },
  notFound: { title: 'ページが見つかりません — equipe', description: 'このページは存在しません。', heading: 'ページが見つかりません', text: 'このアドレスには何もありません。移動されたか、リンクが間違っている可能性があります。', home: 'ホームページへ' },
  footer: { license: 'MITライセンス', built: 'equipeのスクワッドが公開の場で作りました。' },
};

export default ja;
