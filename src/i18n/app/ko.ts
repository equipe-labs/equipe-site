import type { AppText } from './en';

const ko: AppText = {
  ui: {
    newMessage: '새 메시지', pm: 'PM 대화', inbox: '나에게', inProgress: '작업 중', tickets: '티켓', overview: '현황', roadmap: '로드맵',
    projects: '프로젝트', usage: '사용량', suggest: '제안', notRead: '아직 모름', team: '팀', thisMac: '이 맥',
    allProjects: '모든 프로젝트', search: '찾기 · project:web is:blocked', filter: '필터', context: '맥락 31%',
    idle: '쉬는 중', permission: '허락 요청', yourTurn: '내 차례', working: '작업 중', done: '완료', hours: '시간',
    composer: 'pm에게 무엇이든…', composerBusy: 'pm에게 무엇이든 — 프로젝트 밖 일이나 새 프로젝트도', auto: '자동', effort: '노력',
  },
  lanes: { yourTurn: '내 차례', review: '검토', done: '완료', proposed: '제안', todo: '할 일', inProgress: '작업 중' },
  tickets: [
    '브랜드 색과 로고', '랜딩 페이지', '이메일 가입 API', '앱 아이콘', '요금 페이지', '실패한 가입 메일 다시 보내기',
    '분석 계정 연결', '요금 페이지 A/B 문구', '연속 기록 위젯', '연속 기록 알림 API', '온보딩 화면 2차',
    '가입 퍼널 대시보드', '요금 FAQ', '체크인 CSV로 내보내기', '체크인 햅틱', '가입 완료 화면의 추천 링크',
  ],
  activity: { t8: 'pricing.tsx 고치는 중', t9: 'StreakWidget.swift 고치는 중', t10: 'cargo test reminders 실행 중', t11: 'brief.md 읽는 중', t12: 'funnel.sql 읽는 중' },
  inbox: {
    toSort: '정리할 것 1', toSortHint: '스쿼드의 제안 — 맡기거나 버리기',
    permission: '허락 요청', decisions: '결정 필요', yourTurn: '내 차례', proposed: '제안', startAll: '전부 시작',
    allow: '명령 실행을 허락할까요', publish: '요금 페이지를 공개할까요?', paid: '퍼널에 유료 도구를 쓸까요?', connect: '분석 계정 연결',
    postHog: 'Loop용 PostHog 프로젝트 만들기', fromPm: 'pm 제안',
  },
  decision: {
    title: '결정 필요', tag: '요금 페이지', question: '요금 페이지를 공개할까요?',
    a: '지금 공개 (추천)', aText: 'loop.app/pricing에 바로 열려요. 방문자에게 Pro 플랜이 월 $6로 보여요. 공유되면 되돌릴 수 없어요.',
    b: 'A/B 문구가 정해질 때까지 보류', bText: '지금 페이지를 두고 T-8을 먼저 끝내요',
    own: '직접 답 쓰기', attach: '첨부', asks: 'frontend의 질문 · T-5', hint: '1–9 고르기 · Tab 직접 쓰기 · ⌘↵ 다음', skip: '건너뛰기', submit: '보내기',
    publishNow: '지금 공개', hold: '보류',
  },
  permission: {
    label: '허락 요청', title: '명령 실행을 허락할까요?', command: 'npm run build', why: '요금 페이지가 공개 전에 빌드되는지 확인하려고요',
    once: '한 번 허용', always: '항상', deny: '거절', reply: '답장', note: '“항상”은 npm run 규칙을 만들어요', card: '카드 1/2',
  },
  chat: {
    read: 'website/src/pricing.tsx 읽음', split: '이렇게 나눴어요. 티켓 4장, 담당은 한 명씩이에요.',
    ticket: '티켓', owner: '담당', what: '내용',
    rows: ['Pro 카드 헤드라인 두 가지, A/B 테스트용', '자주 나오는 망설임에 답하는 요금 FAQ', '방문부터 첫 체크인까지의 퍼널 대시보드', '가입 완료 화면의 추천 링크'],
    before: 'T-5', mid: '(요금 페이지)는 이미 검토 중이에요. ', bold: '공개할지는 내가 정할 일', after: '이라 질문으로 올려 뒀어요. ', last: '에 숫자가 나오면 알려 줄게요.',
  },
  hero: {
    ask: 'Loop 가입자를 늘려 줘', reply: '이렇게 나눴어요. 티켓 4장, 담당은 한 명씩이에요.', reply2: 'T-5는 이미 검토 중이에요. 공개할지는 내가 정할 일이라 질문으로 올릴게요.',
    working: '작업 중', publish: '지금 공개', hold: '보류', liveTitle: 'Live', liveText: 'loop.app/pricing · 방금 공개됨', approved: '승인 1건.',
    tickets: ['요금 헤드라인 A/B', '요금 FAQ', '가입 퍼널 대시보드', '가입 완료 화면의 추천 링크'],
    caption: '실제 앱 모양 그대로 그린 데모 데이터예요. 진행 막대와 Live 배너는 이 장면을 위한 연출이고, 앱에서는 막대 대신 활동 한 줄이 보여요.',
    pause: '데모 멈추기', play: '데모 재생', label: 'PM에게 한 줄을 보내면 티켓 4장이 동시에 진행되고, 내게 결정 카드가 하나 오고, 승인하면 공개돼요.',
  },
};
export default ko;
