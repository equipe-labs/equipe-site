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
    title: '带领一支 AI 智能体团队，每次合并都由你批准。',
    lead: 'PM、设计师、开发者和移动端智能体在共享看板上工作，各自在你仓库的独立分支上开发。未经你批准，任何改动都不会被合并。',
    ctaPrimary: '在 GitHub 上查看',
    chip: '早期阶段 · MIT 许可证 · 支持 Codex 和 Claude Code',
    cliLink: '更喜欢终端？安装 CLI',
    shotAlt: 'equipe 桌面应用：进行中工作的侧边栏、按状态分组的工单列表，“轮到你”和“审查”排在最上面，旁边是打开的工单',
    shotCaption: 'macOS 版 equipe 桌面应用——工单可按列表或看板查看，等你处理的事排在最上面。',
  },
  how: {
    title: '工作方式',
    intro: '一个人带队，小队并行工作，一切都在看板上流转。',
    steps: [
      { title: '交给小队', text: '告诉 PM 你想要什么，需求会被拆成共享看板上的工单，每张工单都有对应的角色来领取。' },
      { title: '并行工作', text: '成员同时开工，各用自己的分支。你的本地工作目录不受影响，每个动作都记录在看板上。' },
      { title: '你的批准', text: '合并之前，equipe 会先问你。你不点头，什么都不会被合并。' },
    ],
  },
  features: {
    title: '你能得到什么',
    intro: '小队运行在后台守护进程中，关掉终端也不会停。每个界面看到的都是同一支团队。',
    items: [
      { title: '同一块看板上的角色', text: 'PM、设计师、前端、后端、移动端、QA 和数据，各有适合该角色的模型和自己的记忆。看板是唯一可信来源。' },
      { title: '隔离的分支', text: '每个成员在沙箱内用自己的 git worktree 工作。超出沙箱的操作，例如推送或部署，要等你回答。' },
      { title: '决定交给你', text: '许可请求和成员提出的问题，都以卡片形式送达，按一个键或点一下即可回答。' },
      { title: '多个项目，一支小队', text: '对话跟随你选的项目，工单的工作始终留在该工单里。' },
      { title: 'macOS 桌面应用', text: '实时工作侧边栏、含列表和看板的工单页面、⌘K 搜索所有工作，以及浏览器面板。支持八种语言，并会自行更新。' },
      { title: '手机和其他 Mac', text: '用二维码配对手机，需要你时收到推送。也可通过 SSH 把桌面应用连到另一台 Mac 上的小队。' },
    ],
  },
  who: {
    title: 'equipe 适合谁',
    intro: 'equipe 适合想带领一支由 AI 智能体组成的小型软件团队，而不是一次只给一个智能体写提示词的人。你定方向、审结果，小队把工作拆成工单，在分支上完成。',
    points: [
      { lead: '你已经在用 Codex 或 Claude Code。', text: 'equipe 来驱动它们，登录方式和你现在的一样。' },
      { lead: '你想要可以审查的并行工作。', text: '每个改动都以分支的形式送到你面前，不会突然出现在主分支上。' },
      { lead: '你想自己做决定。', text: '批准关卡设在关键位置，最终拍板的始终是你。' },
    ],
    proof: '这个网站就是由一支 equipe 小队公开构建的。每个改动都从一张工单开始，以一个经人验收的分支合并进来。',
  },
  apps: {
    title: '在 Mac 上关注，在手机上批准。',
    intro: '小队在终端之外也看得见。桌面应用已经推出。智能体等待你许可时，手机应用会提醒你，用 Face ID 即可批准。传输的内容经端到端加密。',
    soon: '筹备中',
    download: "下载 macOS 版",
    req: "macOS 12 及以上 · 支持 Apple Silicon 和 Intel · 已签名并公证",
    cliNote: "需要 equipe CLI——没有的话，应用会引导你安装。",
    caption: "手机界面为示意图 · 移动应用仍在筹备中",
    items: [
      { title: '桌面应用', platform: 'macOS', text: '小队、工单和 PM 对话，一个窗口搞定。', alt: 'equipe 桌面应用：在 PM 对话中，一条许可请求和一位成员的提问在等待回答。' },
      { title: '移动应用', platform: 'iOS · Android', text: '用二维码配对。只在需要你批准时提醒你。', alt: '移动应用示意图：有两条批准请求在等待。' },
    ],
    phone: { label: '等你处理 · 3', askCommand: '运行该命令？', allow: '允许一次', decline: '拒绝', askMerge: '合并该分支？', approve: '批准', changes: '请求修改' },
    notify: { title: '想在移动应用发布时第一时间知道？', text: '订阅 GitHub Releases，只会在有新版本时收到邮件。无需注册，我们也不收集邮箱。', cta: '在 GitHub 上订阅通知', how: '在 equipe-labs/equipe 仓库选择 Watch → Custom → Releases。' },
  },
  start: {
    title: '开始使用',
    appSteps: [
      { title: '打开 DMG', text: '打开下载的 `equipe.dmg`。它已签名并经过公证，macOS 会直接打开，不会弹出警告。' },
      { title: '拖到“应用程序”', text: '在同一窗口里把 equipe 拖到“应用程序”（Applications）文件夹，然后推出磁盘映像。' },
      { title: '打开 equipe', text: '从“应用程序”启动它。之后应用会自己检查更新。' },
      { title: '开始第一个 squad', text: '应用需要 `equipe` CLI。找不到时它会显示安装方法，照着那一行做即可。如果提示 squad 未运行，请在终端运行 `equipe`，应用会连接上去。' },
    ],
    cliTitle: '在终端安装（CLI）',
    cliIntro: '桌面应用需要 `equipe` CLI，你也可以只在终端里使用 squad。在 macOS 和 Linux 上，任选一种方式安装：',
    install: '在 macOS 和 Linux 上只需一行命令。它会把预编译的 `equipe` 放到 `~/.local/bin`（并校验 SHA-256），同时加入 PATH：',
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
          'equipe 是开源的 AI 软件小队。它围绕共享看板，协调 PM、设计师、前端、后端、移动端、QA 和数据等角色的智能体。智能体在隔离的 git worktree 中工作，改动经人批准后才会合并。',
      },
      {
        question: 'equipe 是又一个 AI 编程智能体吗？',
        answer:
          '不是。equipe 是叠加在现有智能体引擎之上的团队层，而不是新的智能体循环。它增加了角色、作为单一事实来源的看板、支持并行工作的隔离 git worktree，以及人工批准关卡。',
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
          '最简单的方式是 macOS 桌面应用：从最新发布下载 `equipe.dmg`，拖到“应用程序”即可。应用需要 `equipe` CLI，缺少时会显示安装方法。若在终端使用或使用 Linux，可运行 `brew install equipe-labs/tap/equipe`，或用 install.sh 一行命令，也可以从源码构建（Rust 1.88+）；所有方式都在“开始使用”中。',
      },
      {
        question: '谁来批准这些工作？',
        answer:
          '你来批准。每个成员在隔离的 worktree 里用自己的分支工作，分支合并之前，equipe 会请求人工批准。PM 在看板上验收工作，而哪些内容最终合并，由带领小队的人决定。',
      },
      {
        question: 'equipe 免费并且开源吗？',
        answer:
          '是的。equipe 基于 MIT 许可证发布，从第一次提交起就是开源的。equipe 本身是免费的。Claude Code 和 Codex 使用你自己的 Anthropic 和 OpenAI（ChatGPT）订阅或账户运行。',
      },
      {
        question: 'equipe 可以用于生产环境吗？',
        answer:
          'equipe 还处于早期阶段。小队守护进程在后台运行，PM 验收工作，智能体在沙箱里的分支上工作，合并前由你批准。你可以通过桌面应用、手机或 Telegram 关注小队。成员之间的交接会在接下来推出，详见路线图。',
      },
      {
        question: '什么是 git worktree？equipe 为什么用它？',
        answer:
          'git worktree 是同一个仓库的另一个工作目录，各自有自己的分支。equipe 给每个成员一个，这样多个成员可以同时工作，既不会互相干扰，也不会碰到你本地的工作目录。',
      },
      {
        question: '有桌面应用吗？',
        answer:
          '有，支持 macOS 12 及以上，Apple Silicon 和 Intel 均可。从最新的 GitHub release 下载已签名并公证的 equipe.dmg；它会自行检查更新。它是通往终端所用同一个守护进程的窗口：你的小队、工单、决定，以及成员所用浏览器的面板。它需要 `equipe` CLI，并可帮你安装。应用提供八种语言。',
      },
      {
        question: '可以在手机上关注小队吗？',
        answer:
          '可以。运行 `equipe pair`，用 equipe 移动应用扫描二维码（该应用仍在筹备中）。需要你时会收到推送，你可以回答、审阅工作并与 PM 对话。消息端到端封装。也可以通过 `equipe telegram setup` 使用 Telegram。',
      },
    ],
  },
  notFound: { title: '页面未找到 — equipe', description: '此页面不存在。', heading: '页面未找到', text: '这个地址下没有内容。页面可能已经移动，或者链接有误。', home: '返回首页' },
  footer: { license: 'MIT 许可证', built: '由 equipe 小队公开构建。' },
  app: {
    nav: { privacy: '应用隐私政策', support: '应用支持', home: 'equipe 首页' },
    privacy: {
      meta: {
        title: 'equipe 应用隐私政策',
        description: 'equipe 移动应用及其中继处理哪些信息：配对密钥只保存在手机上，中继只转发已封装的消息，没有分析或跟踪。',
      },
      title: 'equipe 应用隐私政策',
      updated: '最后更新：2026-10-14',
      intro: 'equipe 应用让你的手机与自己 Mac 上的 equipe 守护进程通信。本页用平实的语言说明应用和 equipe 中继会处理哪些信息。',
      sections: [
        {
          title: '简而言之',
          text: '应用没有账号、广告、分析和崩溃报告，也不会跟踪你。小队的工作内容在手机与 Mac 之间以端到端加密的封装形式传输。',
          items: [],
        },
        {
          title: '只保存在手机上的内容',
          text: '以下内容只保存在你的设备上：',
          items: [
            '**配对密钥。** 手机的密钥对、配对时收到的中继令牌，以及 Mac 的公钥和名称。它们保存在 iOS 钥匙串中，或在 Android 上由 Android Keystore 保护的存储中。私钥不会离开手机；中继令牌只会发给中继，用于让手机登录。',
            '**相机。** 仅用于扫描配对二维码。图像不会被保存，也不会发送到任何地方。',
            '**Face ID 或指纹。** 发送批准之前由手机进行验证。equipe 不会收到生物识别数据。',
          ],
        },
        {
          title: 'equipe 中继处理的内容',
          text: '手机和 Mac 都连接到 equipe-labs 运营的中继（`relay.equipe.im`）。两者之间的所有内容都用只有这两台设备持有的密钥进行端到端封装，因此中继无法读取你的工单、消息或批准。',
          items: [
            '中继能看到的是：存在一个连接、消息的大小和时间，以及 Mac 与手机的随机 ID。这些 ID 与你的姓名无关。它只保存令牌的哈希，而不是令牌本身。',
            '中继运行在 Cloudflare 上，Cloudflare 作为网络服务商会处理每个连接的 IP 地址。',
            '我们不会用这些信息识别或画像你，也不会出售或共享。',
          ],
        },
        {
          title: '推送通知',
          text: '当小队需要你时，中继会发送推送通知来唤醒手机。',
          items: [
            '**推送令牌。** 中继保存手机的推送令牌（iOS 为 APNs，Android 为 Firebase Cloud Messaging），并与配对关联，而不与你的姓名关联。',
            '屏幕上可见的文字只说明谁需要什么。详细内容以封装形式传送，在手机上打开。',
            '通知由 Apple 和 Google 按各自的隐私政策投递。在 Android 上，Firebase Messaging 还会为你的手机生成安装 ID。',
          ],
        },
        {
          title: '分析与跟踪',
          text: '应用不含任何分析、广告或崩溃报告工具，也不会跨其他应用或网站跟踪你。本政策适用于应用和中继。网站 equipe.im 使用 PostHog 统计访问量，不使用 Cookie 或本地存储，也不建立个人档案。',
          items: [],
        },
        {
          title: '保留与删除',
          text: '配对保留多久由你决定：',
          items: [
            '在应用中取消本设备的配对，会删除手机上的密钥，以及中继上的配对记录和推送令牌。',
            '在 Mac 上运行 `equipe devices remove <name>`，可立即撤销某部手机。',
            '中继只在配对存在期间保留推送令牌和配对记录。',
            '在 Android 上，卸载应用会删除其数据。在 iOS 上，卸载后钥匙串项目可能仍然保留，所以请先取消配对。',
          ],
        },
        {
          title: '儿童',
          text: '本应用不面向儿童，我们不会有意收集儿童的个人信息。',
          items: [],
        },
        {
          title: '变更',
          text: '如果本政策有变更，我们会更新上面的日期和本页内容。',
          items: [],
        },
        {
          title: '联系方式',
          text: '如有疑问或需要删除数据，请发信到下方地址，或在 GitHub 上提交 issue。',
          items: [],
        },
      ],
    },
    support: {
      meta: {
        title: 'equipe 应用支持 — 配对你的手机',
        description: '如何用 `equipe pair` 将 equipe 应用与 Mac 配对、常见问题解答，以及联系方式。',
      },
      title: 'equipe 应用支持',
      intro: 'equipe 应用是 Mac 上小队的遥控器。小队需要你时会通知你，你可以允许或拒绝、审阅工作，并与 PM 对话。它需要 Mac 上正在运行 equipe，所以请先安装 equipe。',
      pairTitle: '配对你的手机',
      pairSteps: [
        '确认 Mac 上已安装 equipe（见首页的“开始使用”）。',
        '在 Mac 的终端中运行下面的命令。屏幕上会出现二维码，有效期 5 分钟。',
        '在手机上打开 equipe 应用，开始配对，并允许使用相机。',
        '把相机对准二维码。',
        'Mac 询问“Pair <你的手机>? y/n”时，输入 `y`。配对完成。',
      ],
      pairCode: 'equipe pair',
      removeTitle: '查看或移除已配对的手机',
      removeText: '`equipe devices` 列出它们，`equipe devices remove <name>` 立即撤销其中一个。手机丢了，一条命令即可。',
      faqTitle: '常见问题',
      faq: [
        { question: '电脑上也需要装 equipe 吗？', answer: '需要。应用是 Mac 上 equipe 守护进程的遥控器，没有它就没有可连接的对象。请先安装 equipe。' },
        { question: '二维码扫不出来，或提示已过期。', answer: '二维码只有 5 分钟有效期。请重新运行 `equipe pair` 生成新的，并让二维码在屏幕上显示得大一些、亮一些。' },
        { question: '收不到通知。', answer: '请在手机设置中确认已允许 equipe 的通知，并确认 Mac 上的守护进程在运行（`equipe status`）。' },
        { question: '我的手机丢了或换了新手机。', answer: '在 Mac 上运行 `equipe devices remove <name>`，然后用 `equipe pair` 配对新手机。' },
        { question: 'equipe 能通过应用读到我的工作内容吗？', answer: '不能。手机与 Mac 之间的消息是端到端封装的，中继只负责转发。详情请阅读隐私政策。' },
        { question: '离开家里的网络还能用吗？', answer: '可以。手机和 Mac 都是主动连向中继，所以 Wi-Fi、移动数据以及路由器后面的网络都能使用。' },
        { question: '支持哪些手机？', answer: 'iOS 17 或更高版本的 iPhone，以及 Android 8.0 或更高版本。' },
      ],
      contactTitle: '联系我们',
      contactText: '仍然无法解决？请发信到下方地址，或在 GitHub 上提交 issue。',
    },
  },
};

export default zhCN;
