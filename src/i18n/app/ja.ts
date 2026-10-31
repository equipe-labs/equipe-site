import type { AppText } from './en';

const ja: AppText = {
  ui: {
    newMessage: '新規メッセージ', pm: 'PM', inbox: '受信箱', inProgress: '作業中', tickets: 'チケット', overview: '概要', roadmap: 'ロードマップ',
    projects: 'プロジェクト', usage: '使用量', suggest: '提案', notRead: '未読込', team: 'チーム', thisMac: 'このMac',
    allProjects: 'すべてのプロジェクト', search: '検索 · project:web is:blocked', filter: 'フィルタ', context: 'コンテキスト 31%',
    idle: '待機中', permission: '許可', yourTurn: 'あなたの番', working: '作業中', done: '完了', hours: '時間',
    composer: 'pmに何でも…', composerBusy: 'pmに何でも — プロジェクト外の作業や新規プロジェクトも', auto: '自動', effort: '工数',
  },
  lanes: { yourTurn: 'あなたの番', review: 'レビュー', done: '完了', proposed: '提案', todo: 'To Do', inProgress: '作業中' },
  tickets: [
    'ブランドカラーとロゴ', 'ランディングページ', 'メール登録エンドポイント', 'アプリアイコン', '料金ページ', '失敗した登録メールの再送',
    '分析アカウントの接続', '料金ページのA/Bコピー', '連続記録ウィジェット', '連続記録リマインダーAPI', 'オンボーディング画面 第2弾',
    '登録ファネルのダッシュボード', '料金FAQ', 'チェックインをCSVで書き出し', 'チェックイン時の触覚フィードバック', '完了ページの紹介リンク',
  ],
  activity: { t8: 'pricing.tsx を編集中', t9: 'StreakWidget.swift を編集中', t10: 'cargo test reminders を実行中', t11: 'brief.md を読み込み中', t12: 'funnel.sql を読み込み中' },
  inbox: {
    toSort: '仕分け 1件', toSortHint: 'スクワッドからの提案 — 引き受けるか見送るか',
    permission: '許可', decisions: '判断', yourTurn: 'あなたの番', proposed: '提案', startAll: 'すべて開始',
    allow: 'コマンドの実行を許可', publish: '料金ページを公開しますか?', paid: 'ファネルに有料ツールを使いますか?', connect: '分析アカウントの接続',
    postHog: 'Loop用のPostHogプロジェクトを作成', fromPm: 'pmから',
  },
  decision: {
    title: '判断', tag: '料金ページ', question: '料金ページを公開しますか?',
    a: '今すぐ公開(推奨)', aText: 'loop.app/pricing で公開されます。訪問者にはProプランが月額$6で表示されます。共有後は取り消せません。',
    b: 'A/Bコピーが決まるまで保留', bText: '現在のページを維持し、先にT-8を完了します',
    own: 'ここに自分の回答を入力', attach: '添付', asks: 'frontendからの質問 · T-5', hint: '1–9 選択 · Tab 自分で入力 · ⌘↵ 次へ', skip: 'スキップ', submit: '送信',
    publishNow: '今すぐ公開', hold: '保留',
  },
  permission: {
    label: '許可', title: 'コマンドの実行を許可しますか?', command: 'npm run build', why: '公開前に料金ページがビルドできるか確認するため',
    once: '今回のみ許可', always: '常に許可', deny: '拒否', reply: '返信', note: '「常に許可」で npm run のルールを追加します', card: 'カード 1/2',
  },
  chat: {
    read: 'website/src/pricing.tsx を読み込み', split: '次のように分けます。チケットは4件で、担当は1人ずつです。',
    ticket: 'チケット', owner: '担当', what: '内容',
    rows: ['Proカード用の見出し案2種、A/Bテスト向け', 'よくある不安に答える料金FAQ', '訪問から初回チェックインまでのファネルダッシュボード', '完了ページの紹介リンク'],
    before: 'T-5', mid: '(料金ページ本体)はすでにレビュー中です。', bold: '公開するかどうかはあなたの判断', after: 'なので、質問として上げておきました。', last: 'に数字が出たらお知らせします。',
  },
  hero: {
    ask: 'Loopの登録者を増やして', reply: '次のように分けます。チケットは4件で、担当は1人ずつです。', reply2: 'T-5はすでにレビュー中です。公開するかどうかはあなたの判断なので、質問として上げておきます。',
    working: '作業中', publish: '今すぐ公開', hold: '保留', liveTitle: 'Live', liveText: 'loop.app/pricing · たった今公開', approved: '1件を承認しました。',
    tickets: ['料金ページの見出しA/B', '料金FAQ', '登録ファネルのダッシュボード', '完了ページの紹介リンク'],
    caption: '実際のアプリをデモデータで描いたものです。進捗バーとLiveバナーはこの場面のための演出で、アプリでは代わりにアクティビティの1行が表示されます。',
    pause: 'デモを一時停止', play: 'デモを再生', label: 'PMへの一言が4件のチケットになって同時に進み、あなた宛ての判断カードが1枚届き、承認すると公開されます。',
  },
};
export default ja;
