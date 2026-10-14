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
    title: '带领 AI 智能体团队，合并由你批准。',
    lead: 'PM、设计师和开发者智能体在共享看板上工作，各自在你仓库的独立分支上开发。没有你的批准，什么都不会合并。',
    ctaPrimary: '在 GitHub 上查看',
    chip: '早期阶段 · MIT 许可 · 支持 Codex 和 Claude Code',
    shotAlt: 'equipe 桌面应用示意图：智能体请求运行命令的许可，并有“允许一次”“始终允许”“拒绝”按钮',
    shotCaption: '应用示意图 · 筹备中 — 智能体停下来说“需要你的许可”，你一键即可批准。',
  },
  how: {
    title: '工作方式',
    intro: '带领小队的只有一个人。小队并行工作，所有事情都经过看板。',
    steps: [
      { title: '交给小队', text: '告诉 PM 你想要什么，它会拆成共享看板上的工单，每张工单都有负责的角色。' },
      { title: '并行工作', text: '成员同时开工，各用自己的分支。你的本地工作目录不受影响，每个动作都记录在看板上。' },
      { title: '你的批准', text: '合并之前，equipe 会先问你。你不点头，什么都不会合入。' },
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
    title: '在 Mac 上关注，在手机上批准。',
    intro: '小队在终端之外也看得见。智能体等待你许可时，手机会提醒你，用 Face ID 即可批准。传输的内容经端到端加密。',
    soon: '即将推出',
    download: "下载 macOS 版",
    req: "macOS 12 及以上 · 支持 Apple Silicon 和 Intel",
    cliNote: "需要 equipe CLI——没有的话，应用会引导你安装。",
    caption: "界面为示意图 · 移动应用即将推出",
    items: [
      { title: '桌面应用', platform: 'macOS', text: '小队、看板和 PM 对话，一个窗口搞定。', alt: '桌面应用示意图：智能体请求运行命令，有“允许一次”“始终允许”“拒绝”按钮。' },
      { title: '移动应用', platform: 'iOS · Android', text: '只在需要你批准时提醒你。', alt: '移动应用示意图：有两条批准请求在等待。' },
    ],
    phone: { label: 'APPROVE · 3', askCommand: '运行该命令？', allow: '允许一次', decline: '拒绝', askMerge: '合并该分支？', approve: '批准', changes: '请求修改' },
    notify: { title: '应用上线时通知你？', text: '订阅 GitHub Releases，只会在有新版本时收到邮件。无需注册，我们也不收集邮箱。', cta: '在 GitHub 上订阅通知', how: '在 equipe-labs/equipe 仓库选择 Watch → Custom → Releases。' },
  },
  start: {
    title: '开始使用',
    install: '在 macOS 和 Linux 上只需一行命令。它会把预编译的 `equipe` 放到 `~/.local/bin`(并校验 SHA-256),同时加入 PATH:',
    brew: '通过 Homebrew tap 安装预编译的 `equipe`。之后用 `brew upgrade equipe` 更新：',
    tabsLabel: '安装方式',
    sourceTitle: '从源码构建（进阶）',
    source: '想自己编译的话，也可以从源码安装：需要 Rust 1.88+ 和 git，克隆 `github.com/equipe-labs/equipe`，然后运行 `cargo install --locked --path crates/cli`。使用 Claude 引擎还需要 `claude` 二进制文件。',
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
          '在 macOS 和 Linux 上运行 `brew install equipe-labs/tap/equipe` 即可。也可以用 install.sh 一行命令，或从源码构建（Rust 1.88+）；所有方式都在“开始使用”里。',
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
      {
        question: '什么是 git worktree？equipe 为什么用它？',
        answer:
          'git worktree 是同一个仓库的另一个工作目录，各自有自己的分支。equipe 给每个成员一个，这样多个成员可以同时工作，既不会互相干扰，也不会碰到你本地的工作目录。',
      },
    ],
  },
  footer: { license: 'MIT 许可', built: '由 equipe 小队公开构建。' },
};

export default zhCN;
