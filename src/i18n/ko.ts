import type { Messages } from './en';

const ko: Messages = {
  meta: {
    title: 'equipe — 한 사람이 이끄는 AI 코딩 에이전트 스쿼드',
    description:
      'equipe는 오픈소스 AI 소프트웨어 스쿼드예요. 역할별 에이전트가 보드를 보며 격리된 git worktree에서 일하고, 머지는 당신이 승인한 뒤에만 해요.',
    ogTitle: 'equipe — 한 사람이 이끄는 AI 코딩 에이전트 스쿼드',
    ogDescription:
      'equipe는 오픈소스 AI 소프트웨어 스쿼드예요. 역할별 에이전트가 보드를 보며 격리된 git worktree에서 일하고, 머지는 당신이 승인한 뒤에만 해요.',
    ogImageAlt: 'equipe — 한 사람이 이끄는 AI 코딩 에이전트 스쿼드',
  },
  ui: {
    skip: '본문으로 건너뛰기',
    primaryNav: '주 메뉴',
    copy: '복사',
    copied: '복사됨',
    copyInstall: '설치 명령어 복사',
    copyCommands: '명령어 복사',
    copyCommand: '명령어 복사',
    language: '언어',
    bannerText: '이 페이지를 {language}로 보기',
    bannerClose: '닫기',
  },
  nav: { howItWorks: '작동 방식', getStarted: '시작하기', faq: '자주 묻는 질문', github: 'GitHub' },
  hero: {
    title: 'AI 에이전트 팀을 이끌고, 머지는 당신이 승인해요.',
    lead: 'PM·디자이너·개발자·모바일 에이전트가 보드에서 일하고, 각자 당신 저장소의 자기 브랜치에서 작업해요. 당신 승인 없이는 아무것도 머지되지 않아요.',
    ctaPrimary: 'GitHub에서 보기',
    chip: '초기 단계 · MIT 라이선스 · Codex·Claude Code 지원',
    shotAlt: 'equipe 데스크톱 앱 시안: 에이전트가 명령 실행 허가를 요청하고, 한 번 허용·항상 허용·거절 버튼이 보인다',
    shotCaption: '앱 시안 · 준비 중 — 에이전트가 “허가가 필요해요” 하고 멈춰 있고, 사람이 한 번에 승인해요.',
  },
  how: {
    title: '작동 방식',
    intro: '이끄는 사람은 한 명이에요. 스쿼드는 병렬로 일하고, 모든 일은 보드를 거쳐요.',
    steps: [
      { title: '맡기기', text: 'PM에게 원하는 일을 말하면 공유 보드의 티켓으로 나눠요. 티켓마다 맡을 역할이 있어요.' },
      { title: '병렬 작업', text: '멤버들이 동시에, 각자 자기 브랜치에서 일해요. 당신의 체크아웃은 건드리지 않고, 모든 행동은 보드에 기록돼요.' },
      { title: '당신의 승인', text: '머지 전에 equipe가 당신에게 물어요. 당신이 말하기 전에는 아무것도 반영되지 않아요.' },
    ],
  },
  who: {
    title: 'equipe는 이런 분께 맞아요',
    intro: 'equipe는 에이전트 하나에게 프롬프트를 하나씩 던지는 대신, AI 에이전트로 이뤄진 작은 소프트웨어 팀을 이끌고 싶은 분을 위한 도구예요. 방향은 정하고 결과는 검토하세요. 스쿼드가 일을 티켓으로 나누고 브랜치에서 처리해요.',
    points: [
      { lead: '이미 Codex나 Claude Code를 쓰고 있어요.', text: 'equipe가 둘을 움직이고, 로그인은 지금 쓰던 방식 그대로 해요.' },
      { lead: '검토할 수 있는 병렬 작업을 원해요.', text: '모든 변경은 브랜치로 도착해요. 메인 브랜치에 불쑥 들어오는 일은 없어요.' },
      { lead: '결정은 직접 하고 싶어요.', text: '승인 게이트는 중요한 지점에 있어서, 최종 판단은 계속 당신 몫이에요.' },
    ],
    proof: '이 사이트도 equipe 스쿼드가 공개적으로 만들었어요. 모든 변경은 티켓에서 시작해, 사람이 수락한 브랜치로 반영됐어요.',
  },
  apps: {
    title: '맥에서 지켜보고, 폰에서 승인해요.',
    intro: '스쿼드는 터미널 밖에서도 보여요. 에이전트가 허가를 기다리면 폰이 알려주고, Face ID로 승인해요. 주고받는 내용은 종단 간 암호화돼요.',
    soon: '준비 중',
    download: "macOS용 다운로드",
    req: "macOS 12 이상 · Apple Silicon·Intel",
    cliNote: "equipe CLI 필요 — 없으면 앱이 설치를 안내합니다.",
    caption: "화면은 시안 · 모바일 앱은 준비 중",
    items: [
      { title: '데스크톱 앱', platform: 'macOS', text: '스쿼드, 보드, PM 대화를 한 창에서.', alt: '데스크톱 앱 시안: 에이전트가 명령 실행 허가를 요청하고, 한 번 허용·항상·거절 버튼이 있어요.' },
      { title: '모바일 앱', platform: 'iOS · Android', text: '승인이 필요할 때만 알려줘요.', alt: '모바일 앱 시안: 승인 요청 두 건이 기다리고 있어요.' },
    ],
    phone: { label: 'APPROVE · 3', askCommand: '명령을 실행할까요?', allow: '한 번 허용', decline: '거절', askMerge: '브랜치를 머지할까요?', approve: '승인', changes: '변경 요청' },
    notify: { title: '앱이 나오면 알려드릴까요?', text: 'GitHub 릴리스를 구독하면 새 릴리스 소식만 메일로 와요. 가입도, 이메일 수집도 없어요.', cta: 'GitHub에서 알림 받기', how: 'equipe-labs/equipe 저장소에서 Watch → Custom → Releases를 고르세요.' },
  },
  start: {
    title: '시작하기',
    install: 'macOS와 Linux에서는 한 줄이면 돼요. 미리 빌드된 `equipe`를 `~/.local/bin`에 설치하고(SHA-256 확인), PATH에도 추가해요:',
    brew: 'Homebrew tap으로 미리 빌드된 `equipe`를 설치해요. 나중에 `brew upgrade equipe`로 업데이트해요:',
    tabsLabel: '설치 방법',
    sourceTitle: '소스에서 빌드 (고급)',
    source: '직접 빌드하고 싶다면 소스에서 설치할 수도 있어요. Rust 1.88+와 git이 필요하고, `github.com/equipe-labs/equipe`를 clone한 뒤 `cargo install --locked --path crates/cli`를 실행하세요. Claude 엔진을 쓰려면 `claude` 바이너리도 있어야 해요.',
    run: '엔진에 로그인하고 준비됐는지 확인한 다음, 스쿼드 콘솔을 열어요.',
    runCode: `equipe login     # Codex 또는 Claude Code에 로그인
equipe status    # 엔진 준비 상태와 모델 사용 가능 여부 확인
equipe           # 스쿼드 콘솔 열기`,
    tryIntro: '보드 없이 먼저 맛만 보고 싶다면, 에이전트 하나가 격리된 worktree의 새 브랜치에서 저장소를 수정하게 해 보세요.',
    docs: 'GitHub에서 문서 읽기 →',
    roadmap: '로드맵',
    architecture: '아키텍처',
  },
  faq: {
    title: '자주 묻는 질문',
    items: [
      {
        question: 'equipe란?',
        answer:
          'equipe는 오픈소스 AI 소프트웨어 스쿼드예요. PM, 디자이너, 프론트엔드, 백엔드, 모바일, QA, 데이터 같은 역할의 에이전트를 공유 보드 중심으로 조율해요. 에이전트는 격리된 git worktree에서 일하고, 변경은 사람이 승인한 뒤에 머지돼요.',
      },
      {
        question: 'equipe도 AI 코딩 에이전트인가요?',
        answer:
          '아니에요. equipe는 새로운 에이전트 루프가 아니라, 기존 에이전트 엔진 위에 얹는 팀 계층이에요. 역할, 단일 진실 공급원인 보드, 병렬 작업을 위한 격리된 git worktree, 사람의 승인 게이트를 더해 줘요.',
      },
      {
        question: 'equipe는 어떤 AI 엔진과 함께 쓸 수 있나요?',
        answer:
          '지금은 Codex와 Claude Code를 움직여요. Agent Client Protocol을 통해 더 많은 엔진을 지원하도록 설계했어요.',
      },
      {
        question: 'equipe가 제 자격 증명을 다루나요?',
        answer:
          'Claude Code는 아니에요. 수정하지 않은 `claude` 바이너리를 직접 실행해 직접 로그인하니까, 비용도 본인 계정으로 청구돼요. Codex는 equipe가 ChatGPT 요금제로 OAuth 로그인을 하고, 요청에 `originator: equipe`라고 정직하게 밝혀요.',
      },
      {
        question: 'equipe는 어떻게 설치하나요?',
        answer:
          'macOS와 Linux에서는 `brew install equipe-labs/tap/equipe` 한 줄이면 돼요. install.sh 한 줄이나 소스 빌드(Rust 1.88+)도 쓸 수 있어요. 방법은 모두 시작하기에 있어요.',
      },
      {
        question: '작업은 누가 승인하나요?',
        answer:
          '당신이에요. 멤버는 각자 격리된 worktree의 자기 브랜치에서 일하고, 브랜치를 머지하기 전에 equipe가 사람의 승인을 요청해요. PM은 작업을 보드에 수락하고, 무엇을 반영할지는 스쿼드를 이끄는 사람이 정해요.',
      },
      {
        question: 'equipe는 무료 오픈소스인가요?',
        answer:
          '네. equipe는 MIT 라이선스로 공개돼 있고, 첫 커밋부터 오픈소스였어요. equipe 자체는 무료예요. Claude Code와 Codex는 본인의 Anthropic, OpenAI(ChatGPT) 구독이나 계정으로 실행돼요.',
      },
      {
        question: 'equipe를 프로덕션에서 쓸 수 있나요?',
        answer:
          'equipe는 아직 초기 단계예요. 스쿼드 데몬이 백그라운드에서 돌고, PM이 작업을 수락하고, 에이전트는 샌드박스 안의 브랜치에서 일하고, 머지 전에 당신이 승인해요. 인수인계와 소통 채널은 로드맵에 있는 대로 다음에 나와요.',
      },
      {
        question: 'git worktree가 뭐고, 왜 쓰나요?',
        answer:
          'git worktree는 같은 저장소를 또 하나의 작업 폴더로 펼쳐 둔 것으로, 폴더마다 자기 브랜치를 가져요. equipe는 멤버마다 worktree를 하나씩 줘서, 여럿이 동시에 일해도 서로의, 그리고 당신의 체크아웃을 건드리지 않게 해요.',
      },
    ],
  },
  notFound: { title: '페이지를 찾을 수 없어요 — equipe', description: '이 페이지는 없어요.', heading: '페이지를 찾을 수 없어요', text: '이 주소에는 아무것도 없어요. 페이지가 옮겨졌거나 링크가 잘못됐을 수 있어요.', home: '홈으로 가기' },
  footer: { license: 'MIT 라이선스', built: 'equipe 스쿼드가 공개적으로 만들었어요.' },
};

export default ko;
