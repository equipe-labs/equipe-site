import type { AppText } from './en';

const zhCN: AppText = {
  ui: {
    newMessage: '新信息', pm: 'PM', inbox: '收件箱', inProgress: '进行中', tickets: '工单', overview: '概览', roadmap: '路线图',
    projects: '项目', usage: '用量', suggest: '建议', notRead: '尚未读取', team: '团队', thisMac: '这台 Mac',
    allProjects: '所有项目', search: '搜索 · project:web is:blocked', filter: '筛选', context: '上下文 31%',
    idle: '空闲', permission: '权限', yourTurn: '轮到你', working: '工作中', done: '已完成', hours: '小时',
    composer: '想对 pm 说什么…', composerBusy: '想对 pm 说什么 — 项目外的事或新项目都可以', auto: '自动', effort: '投入度',
  },
  lanes: { yourTurn: '轮到你', review: '审核', done: '已完成', proposed: '建议', todo: '待办', inProgress: '进行中' },
  tickets: [
    '品牌色和标志', '落地页', '邮件注册接口', '应用图标', '定价页', '重发注册失败的邮件',
    '连接分析账号', '定价页 A/B 文案', '连续打卡小组件', '连续打卡提醒 API', '新手引导界面（第二轮）',
    '注册漏斗看板', '定价常见问题', '将签到导出为 CSV', '签到触感反馈', '成功页上的推荐链接',
  ],
  activity: { t8: '正在编辑 pricing.tsx', t9: '正在编辑 StreakWidget.swift', t10: '正在运行 cargo test reminders', t11: '正在读取 brief.md', t12: '正在读取 funnel.sql' },
  inbox: {
    toSort: '1 项待整理', toSortHint: '来自小队的提议 — 接手或放弃',
    permission: '权限', decisions: '决定', yourTurn: '轮到你', proposed: '建议', startAll: '全部开始',
    allow: '允许运行命令', publish: '发布定价页？', paid: '为漏斗使用付费工具？', connect: '连接分析账号',
    postHog: '为 Loop 创建 PostHog 项目', fromPm: '来自 pm',
  },
  decision: {
    title: '决定', tag: '定价页', question: '发布定价页？',
    a: '立即发布（推荐）', aText: '将在 loop.app/pricing 上线。访客会看到每月 $6 的 Pro 方案。一旦分享便无法撤回。',
    b: '等 A/B 文案定下来再发布', bText: '保留当前页面，先完成 T-8',
    own: '在此输入你自己的答案', attach: '添加附件', asks: 'frontend 提问 · T-5', hint: '1–9 选择 · Tab 自己写 · ⌘↵ 下一个', skip: '跳过', submit: '提交',
    publishNow: '立即发布', hold: '暂缓',
  },
  permission: {
    label: '权限', title: '允许运行命令？', command: 'npm run build', why: '在发布前确认定价页能够正常构建',
    once: '允许一次', always: '始终允许', deny: '拒绝', reply: '回复', note: '“始终允许”会为 npm run 添加一条规则', card: '第 1 张，共 2 张',
  },
  chat: {
    read: '读取 website/src/pricing.tsx', split: '我是这样拆分的。四张工单，各有一位负责人：',
    ticket: '工单', owner: '负责人', what: '内容',
    rows: ['Pro 卡片的两个标题版本，用于 A/B 测试', '解答主要顾虑的定价常见问题', '从访问到首次签到的漏斗看板', '成功页上的推荐链接'],
    before: 'T-5', mid: '（定价页本身）已在审核中。', bold: '是否发布由你决定', after: '，所以我把这个问题交给了你。等 ', last: ' 有数据后我会向你汇报。',
  },
  hero: {
    ask: '让更多人注册 Loop', reply: '我是这样拆分的。四张工单，各有一位负责人：', reply2: 'T-5 已在审核中。是否发布由你决定，所以我会把这个问题交给你。',
    working: '工作中', publish: '立即发布', hold: '暂缓', liveTitle: 'Live', liveText: 'loop.app/pricing · 刚刚发布', approved: '你已批准 1 项。',
    tickets: ['定价标题 A/B', '定价常见问题', '注册漏斗看板', '成功页上的推荐链接'],
    caption: '根据真实应用绘制，使用演示数据。进度条和 Live 横幅是为这段演示特意设置的；在应用中，你会看到一行活动信息。',
    pause: '暂停演示', play: '播放演示', label: '给 PM 一句话，就会变成四张同时推进的工单，然后是一张等你决定的卡片，接着上线。',
  },
};
export default zhCN;
