import type { Messages } from './en';

const ja: Messages = {
  meta: {
    title: 'equipe — 1人で率いるAIコーディングエージェントのスクワッド',
    description:
      'equipeはオープンソースのAIソフトウェアスクワッドです。役割別エージェントがボードを見ながらgit worktreeで作業し、マージは承認後のみ行います。',
    ogTitle: 'equipe — 1人で率いるAIコーディングエージェントのスクワッド',
    ogDescription:
      'equipeはオープンソースのAIソフトウェアスクワッドです。役割別エージェントがボードを見ながらgit worktreeで作業し、マージは承認後のみ行います。',
    ogImageAlt: 'equipe — 1人で率いるAIコーディングエージェントのスクワッド',
  },
  ui: {
    skip: '本文へスキップ',
    primaryNav: 'メインメニュー',
    copy: 'コピー',
    copied: 'コピーしました',
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
    lead: 'PM・デザイナー・開発者のエージェントが共有ボードで働き、それぞれあなたのリポジトリの自分のブランチで作業します。あなたの承認なしには何もマージされません。',
    ctaPrimary: 'GitHubで見る',
    chip: '初期段階 · MITライセンス · Codex・Claude Code対応',
    shotAlt: 'equipeデスクトップアプリの試作画面：エージェントがコマンド実行の許可を求め、1回だけ許可・常に許可・拒否のボタンが並ぶ',
    shotCaption: 'アプリの試作画面 · 準備中 — エージェントが「許可が必要です」と止まり、人が1回で承認します。',
  },
  how: {
    title: '仕組み',
    intro: '率いるのは1人。スクワッドは並行して働き、すべてのやり取りはボードを通ります。',
    cards: [
      { title: '役割', text: 'メンバーにはそれぞれ、PM、デザイナー、フロントエンド、バックエンド、QA、データのいずれかの役割があります。役割に合ったモデルと、メンバー専用のメモリを持ちます。' },
      { title: 'チケット', text: 'ボードが信頼できる唯一の情報源です。メンバーはチャットではなく、チケットと不変のイベントで連携します。そのため、すべての行動が目に見える記録として残ります。' },
      { title: 'ブランチ', text: 'メンバーはそれぞれ、分離されたgit worktreeの自分のブランチで作業します。複数のメンバーが同じリポジトリで同時に作業しても、あなたのチェックアウトには手が触れません。' },
      { title: 'あなたの承認', text: '承認ゲートでは、あなたが判断します。あなたが許可するまで、何もマージされません。' },
    ],
  },
  who: {
    title: 'equipeが向いている人',
    intro: 'equipeは、エージェントに1つずつプロンプトを送る代わりに、AIエージェントによる小さなソフトウェアチームを率いたい人のためのツールです。方向を決め、成果物をレビューしてください。スクワッドが作業をチケットに分け、ブランチ上で進めます。',
    points: [
      { lead: 'すでにCodexかClaude Codeを使っている。', text: 'equipeがそれらを動かします。ログインも、今までと同じ方法です。' },
      { lead: 'レビューできる並行作業がほしい。', text: 'すべての変更はブランチとして届きます。メインラインに突然入ることはありません。' },
      { lead: '判断は自分で下したい。', text: '承認ゲートは要所に置かれているので、最終的な決定は常にあなたのものです。' },
    ],
    proof: 'このサイトも、equipeのスクワッドが公開の場で作りました。すべての変更はチケットから始まり、人が受理したブランチとして取り込まれています。',
  },
  apps: {
    title: 'デスクトップ・モバイルアプリ',
    intro: 'スクワッドがMacとスマートフォンにやってきます。どこにいても作業を見守り、判断できます。',
    soon: '準備中',
    items: [
      { title: 'デスクトップアプリ', platform: 'macOS', points: ['スクワッドとメンバーを確認する', 'PMと会話する', 'ボードでチケットを追う', '会話にスクリーンショットを貼り付ける'] },
      { title: 'モバイルアプリ', platform: 'iOS · Android', points: ['Face IDや指紋でスマートフォンから承認する', 'ボードでチケットを追う', 'PMと会話する', 'QRコードでMacとペアリング。やり取りする内容はエンドツーエンドで暗号化されます'] },
    ],
  },
  start: {
    title: 'はじめる',
    install: 'macOSとLinuxでは1行で済みます。ビルド済みの`equipe`を`~/.local/bin`に置き(SHA-256を検証)、PATHにも追加します:',
    brew: 'Homebrew tapからビルド済みの`equipe`をインストールします。更新は`brew upgrade equipe`です:',
    tabsLabel: 'インストール方法',
    sourceTitle: 'ソースからビルド(上級者向け)',
    source: '自分でビルドしたい場合は、ソースからもインストールできます。Rust 1.88+とgitが必要です。`github.com/equipe-labs/equipe`をcloneし、`cargo install --locked --path crates/cli`を実行してください。Claudeエンジンを使う場合は、`claude`バイナリも必要です。',
    run: 'エンジンにログインし、準備できているか確認してから、スクワッドコンソールを開きます。',
    runCode: `equipe login     # CodexまたはClaude Codeにログイン
equipe status    # エンジンの準備状況とモデルの利用可否を確認
equipe           # スクワッドコンソールを開く`,
    tryIntro: 'ボードを使わずに、まず試してみたい場合は、エージェント1つに分離されたworktreeの新しいブランチでリポジトリを編集させてみましょう。',
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
          'equipeはオープンソースのAIソフトウェアスクワッドです。PM、デザイナー、フロントエンド、バックエンド、QA、データといった役割のエージェントを、共有ボードを中心に連携させます。エージェントは分離されたgit worktreeで作業し、変更は人が承認してからマージされます。',
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
          'Claude Codeの場合は扱いません。変更していない`claude`バイナリをご自身で実行してログインするため、請求もご自身のアカウントに届きます。Codexの場合は、equipeがChatGPTのプランを使ってOAuthでログインし、`originator: equipe`として正直に名乗ります。',
      },
      {
        question: 'equipeはどうやってインストールしますか？',
        answer:
          'macOSとLinuxでは`brew install equipe-labs/tap/equipe`の1行で済みます。install.shの1行や、ソースからのビルド(Rust 1.88+)も使えます。方法はすべて「はじめる」にあります。',
      },
      {
        question: '作業は誰が承認しますか？',
        answer:
          'あなたです。メンバーはそれぞれ、分離されたworktreeの自分のブランチで作業し、ブランチをマージする前にequipeが人の承認を求めます。PMは作業をボードに受理しますが、何を取り込むかを決めるのは、スクワッドを率いる人です。',
      },
      {
        question: 'equipeは無料のオープンソースですか？',
        answer:
          'はい。equipeはMITライセンスで公開されており、最初のコミットからオープンソースです。equipe自体は無料です。Claude CodeとCodexは、ご自身のAnthropicおよびOpenAI（ChatGPT）のサブスクリプションまたはアカウントで動作します。',
      },
      {
        question: 'equipeは本番環境で使えますか？',
        answer:
          'equipeは開発初期の段階です。スクワッドのデーモンがバックグラウンドで動き、PMが作業を受理し、エージェントはサンドボックス内のブランチで作業し、マージの前にあなたが承認します。引き継ぎとコミュニケーションチャネルは、ロードマップのとおり次に対応します。',
      },
    ],
  },
  footer: { license: 'MITライセンス', built: 'equipeのスクワッドが公開の場で作りました。' },
};

export default ja;
