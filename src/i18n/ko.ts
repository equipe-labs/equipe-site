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
  app: {
    nav: { privacy: '앱 개인정보처리방침', support: '앱 지원', home: 'equipe 홈' },
    privacy: {
      meta: {
        title: 'equipe 앱 개인정보처리방침',
        description: 'equipe 모바일 앱과 릴레이가 다루는 정보: 페어링 키는 폰에만 저장되고, 릴레이는 봉인된 메시지만 전달하며, 분석·추적은 없습니다.',
      },
      title: 'equipe 앱 개인정보처리방침',
      updated: '최종 수정: 2026-10-14',
      intro: 'equipe 앱은 폰이 내 Mac의 equipe 데몬과 대화하게 해 줍니다. 이 페이지는 앱과 equipe 릴레이가 어떤 정보를 다루는지 쉬운 말로 적었습니다.',
      sections: [
        {
          title: '한눈에 보기',
          text: '앱에는 계정, 광고, 분석, 충돌 보고가 없고 사용자를 추적하지 않습니다. 스쿼드의 작업 내용은 폰과 Mac 사이에서 종단간 암호화로 봉인되어 오갑니다.',
          items: [],
        },
        {
          title: '폰에만 저장되는 것',
          text: '다음은 기기에만 저장됩니다.',
          items: [
            '**페어링 키.** 폰의 키 쌍, 페어링할 때 받은 릴레이 토큰, Mac의 공개 키와 이름입니다. iOS에서는 Keychain, Android에서는 Android Keystore로 보호되는 저장소에 있습니다. 개인 키는 폰 밖으로 나가지 않으며, 릴레이 토큰은 폰이 릴레이에 로그인할 때만 릴레이로 보냅니다.',
            '**카메라.** 페어링 QR 코드를 읽는 데만 씁니다. 이미지는 저장하거나 어디로도 보내지 않습니다.',
            '**Face ID 또는 지문.** 승인을 보내기 전에 폰이 확인합니다. equipe는 생체 정보를 받지 않습니다.',
          ],
        },
        {
          title: 'equipe 릴레이가 다루는 것',
          text: '폰과 Mac은 둘 다 equipe-labs가 운영하는 릴레이(`relay.equipe.im`)에 연결합니다. 둘 사이의 모든 내용은 두 기기만 가진 키로 종단간 봉인되므로, 릴레이는 티켓·메시지·승인을 읽을 수 없습니다.',
          items: [
            '릴레이가 볼 수 있는 것은 연결이 있다는 사실, 메시지의 크기와 시각, 그리고 Mac과 폰의 무작위 ID입니다. 이 ID는 이름과 연결되지 않습니다. 토큰은 원문이 아니라 해시만 보관합니다.',
            '릴레이는 Cloudflare에서 실행되며, Cloudflare는 네트워크 사업자로서 각 연결의 IP 주소를 처리합니다.',
            '이 정보로 사용자를 식별하거나 프로파일링하지 않으며, 판매하거나 제3자와 공유하지 않습니다.',
          ],
        },
        {
          title: '푸시 알림',
          text: '스쿼드가 사용자를 필요로 할 때 폰을 깨우기 위해 릴레이가 푸시 알림을 보냅니다.',
          items: [
            '**푸시 토큰.** 릴레이는 폰의 푸시 토큰(iOS는 APNs, Android는 Firebase Cloud Messaging)을 페어링에 연결해 보관합니다. 이름과는 연결되지 않습니다.',
            '화면에 보이는 문구에는 누가 무엇을 필요로 하는지만 있습니다. 자세한 내용은 봉인된 채 전달되어 폰에서 열립니다.',
            'Apple과 Google이 각자의 개인정보 정책에 따라 알림을 전달합니다. Android에서는 Firebase Messaging이 폰의 설치 ID도 만듭니다.',
          ],
        },
        {
          title: '분석과 추적',
          text: '앱에는 분석, 광고, 충돌 보고 도구가 없고, 다른 앱이나 웹사이트에서 사용자를 추적하지 않습니다. 이 방침은 앱과 릴레이에 적용됩니다. 웹사이트 equipe.im은 쿠키나 로컬 저장소 없이 PostHog로 방문 수를 세며 개인 프로필을 만들지 않습니다.',
          items: [],
        },
        {
          title: '보관과 삭제',
          text: '페어링을 얼마나 유지할지는 사용자가 정합니다.',
          items: [
            '앱에서 이 기기의 페어링을 해제하면 폰의 키가 지워지고, 릴레이의 페어링 기록과 푸시 토큰도 삭제됩니다.',
            'Mac에서 `equipe devices remove <name>`을 실행하면 그 폰을 즉시 해제합니다.',
            '릴레이는 페어링이 있는 동안에만 푸시 토큰과 페어링 기록을 보관합니다.',
            'Android는 앱을 지우면 앱 데이터도 사라집니다. iOS는 앱을 지워도 Keychain 항목이 남을 수 있으니 먼저 페어링을 해제하세요.',
          ],
        },
        {
          title: '아동',
          text: '앱은 아동을 대상으로 하지 않으며, 아동의 개인정보를 알면서 수집하지 않습니다.',
          items: [],
        },
        {
          title: '변경',
          text: '방침이 바뀌면 위의 날짜와 이 페이지를 고칩니다.',
          items: [],
        },
        {
          title: '문의',
          text: '질문이나 데이터 삭제 요청은 아래 주소로 보내거나 GitHub에 이슈를 남겨 주세요.',
          items: [],
        },
      ],
    },
    support: {
      meta: {
        title: 'equipe 앱 지원 — 폰 페어링',
        description: '`equipe pair`로 equipe 앱을 Mac과 페어링하는 방법, 자주 묻는 질문, 문의 방법.',
      },
      title: 'equipe 앱 지원',
      intro: 'equipe 앱은 Mac의 스쿼드를 원격으로 다루는 앱입니다. 스쿼드가 사용자를 필요로 하면 알려 주고, 허용·거절, 작업 검토, PM과의 대화를 할 수 있습니다. Mac에서 equipe가 실행 중이어야 하니 먼저 equipe를 설치하세요.',
      pairTitle: '폰 페어링',
      pairSteps: [
        'Mac에 equipe가 설치되어 있는지 확인합니다(홈페이지의 시작하기 참고).',
        'Mac의 터미널에서 아래 명령을 실행합니다. QR 코드가 나타나며 5분 동안 유효합니다.',
        '폰에서 equipe 앱을 열고 페어링을 시작한 뒤 카메라를 허용합니다.',
        'QR 코드에 카메라를 비춥니다.',
        'Mac이 "Pair <폰 이름>? y/n"이라고 물으면 `y`를 입력합니다. 페어링이 끝납니다.',
      ],
      pairCode: 'equipe pair',
      removeTitle: '페어링된 폰 보기·해제',
      removeText: '`equipe devices`로 목록을 보고, `equipe devices remove <name>`으로 하나를 즉시 해제합니다. 폰을 잃어버렸을 때도 명령 한 줄이면 됩니다.',
      faqTitle: '자주 묻는 질문',
      faq: [
        { question: '컴퓨터에도 equipe가 있어야 하나요?', answer: '네. 앱은 Mac의 equipe 데몬을 원격으로 다루는 앱이라, 데몬이 없으면 연결할 대상이 없습니다. 먼저 equipe를 설치하세요.' },
        { question: 'QR 코드가 읽히지 않거나 만료됐다고 나와요.', answer: '코드는 5분 동안만 유효합니다. `equipe pair`를 다시 실행해 새 코드를 만들고, 화면에서 QR을 크고 밝게 띄워 보세요.' },
        { question: '알림이 오지 않아요.', answer: '폰 설정에서 equipe 알림이 허용되어 있는지, Mac에서 데몬이 실행 중인지(`equipe status`) 확인하세요.' },
        { question: '폰을 잃어버렸거나 바꿨어요.', answer: 'Mac에서 `equipe devices remove <name>`을 실행한 뒤, 새 폰을 `equipe pair`로 페어링하세요.' },
        { question: '앱을 통해 equipe가 내 작업을 볼 수 있나요?', answer: '아니요. 폰과 Mac 사이의 메시지는 종단간 봉인되고 릴레이는 전달만 합니다. 자세한 내용은 개인정보처리방침을 보세요.' },
        { question: '집 밖에서도 되나요?', answer: '됩니다. 폰과 Mac이 모두 릴레이로 먼저 연결하므로 Wi-Fi, 모바일 데이터, 공유기 뒤의 네트워크 모두 동작합니다.' },
        { question: '어떤 폰을 지원하나요?', answer: 'iOS 17 이상의 iPhone, Android 8.0 이상입니다.' },
      ],
      contactTitle: '문의',
      contactText: '해결되지 않으면 아래 주소로 보내거나 GitHub에 이슈를 남겨 주세요.',
    },
  },
};

export default ko;
