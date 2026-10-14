import type { Messages } from './en';

const zhCN: Messages = {
  meta: {
    title: 'equipe — 一个人带领的 AI 编程智能体小队',
    description:
      'equipe 是开源的 AI 软件小队：按角色分工的智能体围绕共享看板，在隔离的 git worktree 中工作，合并前必须由你批准。',
    ogTitle: 'equipe — 一个人带领的 AI 编程智能体小队',
    ogDescription:
      'equipe 是开源的 AI 软件小队：按角色分工的智能体围绕共享看板，在隔离的 git worktree 中工作，合并前必须由你批准。',
    ogImageAlt: 'equipe — 一个人带领的 AI 编程智能体小队',
  },
  ui: {
    skip: '跳到正文',
    primaryNav: '主导航',
    copy: '复制',
    copied: '已复制',
    copyInstall: '复制安装命令',
    copyCommands: '复制命令',
    copyCommand: '复制命令',
    language: '语言',
    bannerText: '用{language}查看此页面',
    bannerClose: '关闭',
  },
  nav: { howItWorks: '工作方式', getStarted: '开始使用', faq: '常见问题', github: 'GitHub' },
  hero: {
    title: '由你带领的 AI 软件小队。',
    lead: 'equipe 是开源的 AI 软件小队：由 PM、设计师、前端、后端、QA 和数据等角色的智能体组成团队，通过共享看板在你的仓库里工作。每个成员都在隔离的 git worktree 中干活，合并之前一定会等待人的批准。',
    note: 'equipe 不是又一个智能体循环。它是叠加在现有智能体之上的团队层，目前支持 Codex 和 Claude Code。',
    ctaPrimary: '在 GitHub 上查看',
    ctaSecondary: '开始使用',
    chip: '早期阶段 · MIT 许可',
  },
  how: {
    title: '工作方式',
    intro: '带领小队的只有一个人。小队并行工作，所有事情都经过看板。',
    cards: [
      { title: '角色', text: '每个成员都有一个角色：PM、设计师、前端、后端、QA 或数据。每个角色配有适合它的模型，也有自己的记忆。' },
      { title: '工单', text: '看板是唯一可信来源。成员之间通过工单和不可变的事件协作，而不是聊天，所以每个动作都会留下你能看到的记录。' },
      { title: '分支', text: '每个成员都在隔离的 git worktree 里，用自己的分支工作。多个成员可以同时处理你的仓库，不会碰到你本地的工作目录。' },
      { title: '你的批准', text: '在批准关卡，你始终掌握决定权。你不点头，什么都不会合并。' },
    ],
  },
  who: {
    title: 'equipe 适合谁',
    intro: 'equipe 适合想带领一支由 AI 智能体组成的小型软件团队，而不是一次只给一个智能体写提示词的人。你定方向、审结果，小队把工作拆成工单，在分支上完成。',
    points: [
      { lead: '你已经在用 Codex 或 Claude Code。', text: 'equipe 来驱动它们，登录方式和你现在的一样。' },
      { lead: '你想要可以审查的并行工作。', text: '每个改动都以分支的形式送到你面前，不会突然出现在主线上。' },
      { lead: '你想自己做决定。', text: '批准关卡设在关键位置，最终拍板的始终是你。' },
    ],
    proof: '这个网站就是由一支 equipe 小队公开构建的。每个改动都从一张工单开始，以一个经人验收的分支落地。',
  },
  apps: {
    title: '桌面与移动应用',
    intro: '小队即将来到你的 Mac 和手机，无论身在何处，都能关注进展并做出决定。',
    soon: '即将推出',
    items: [
      { title: '桌面应用', platform: 'macOS', points: ['查看小队和成员', '与 PM 对话', '在看板上跟进工单', '把截图粘贴到对话中'] },
      { title: '移动应用', platform: 'iOS · Android', points: ['用 Face ID 或指纹在手机上批准', '在看板上跟进工单', '与 PM 对话', '扫描二维码与 Mac 配对，传输的内容经端到端加密'] },
    ],
  },
  start: {
    title: '开始使用',
    install: 'equipe 目前需要从源码安装。你需要 Rust 1.88+ 和 git。使用 Claude 引擎还需要 `claude` 二进制文件。',
    run: '先登录引擎，确认它已就绪，再打开小队控制台：',
    runCode: `equipe login     # 登录 Codex 或 Claude Code
equipe status    # 检查引擎是否就绪、模型是否可用
equipe           # 打开小队控制台`,
    tryIntro: '想先不用看板，简单试一下？让一个智能体在隔离的 worktree 里，用一个新分支修改你的仓库：',
    docs: '在 GitHub 上阅读文档 →',
    roadmap: '路线图',
    architecture: '架构',
  },
  faq: {
    title: '常见问题',
    items: [
      {
        question: 'equipe 是什么？',
        answer:
          'equipe 是开源的 AI 软件小队。它围绕共享看板，协调 PM、设计师、前端、后端、QA 和数据等角色的智能体。智能体在隔离的 git worktree 中工作，改动经人批准后才会合并。',
      },
      {
        question: 'equipe 是又一个 AI 编程智能体吗？',
        answer:
          '不是。equipe 是叠加在现有智能体引擎之上的团队层，而不是新的智能体循环。它增加了角色、作为唯一可信来源的看板、支持并行工作的隔离 git worktree，以及人工批准关卡。',
      },
      {
        question: 'equipe 支持哪些 AI 引擎？',
        answer:
          '目前 equipe 可以驱动 Codex 和 Claude Code。它的设计目标是通过 Agent Client Protocol 支持更多引擎。',
      },
      {
        question: 'equipe 会处理我的凭据吗？',
        answer:
          '用 Claude Code 时不会。你运行未经修改的 `claude` 二进制文件并自己登录，费用计入你自己的账户。用 Codex 时，equipe 使用你的 ChatGPT 套餐通过 OAuth 登录，并如实标明自己是 `originator: equipe`。',
      },
      {
        question: '怎么安装 equipe？',
        answer:
          '用 Rust 1.88+ 和 git 从源码安装：克隆 `github.com/equipe-labs/equipe`，然后运行 `cargo install --locked --path crates/cli`。使用 Claude 引擎还需要 Claude Code 二进制文件。',
      },
      {
        question: '谁来批准这些工作？',
        answer:
          '你来批准。每个成员在隔离的 worktree 里用自己的分支工作，分支合并之前，equipe 会请求人的批准。PM 负责把工作验收到看板上，而哪些内容最终落地，由带领小队的人决定。',
      },
      {
        question: 'equipe 免费并且开源吗？',
        answer:
          '是的。equipe 以 MIT 许可发布，从第一次提交起就是开源的。equipe 本身是免费的。Claude Code 和 Codex 使用你自己的 Anthropic 和 OpenAI（ChatGPT）订阅或账户运行。',
      },
      {
        question: 'equipe 可以用于生产环境吗？',
        answer:
          'equipe 还处于早期阶段。小队守护进程在后台运行，PM 验收工作，智能体在沙箱里的分支上工作，合并前由你批准。交接和沟通渠道会在接下来推出，详见路线图。',
      },
    ],
  },
  footer: { license: 'MIT 许可', built: '由 equipe 小队公开构建。' },
};

export default zhCN;
