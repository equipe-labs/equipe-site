# Copy for the T-521 direction mockups (en, ko). Same words in every direction, so the sheets compare layout, type and colour only.
# Sources: src/i18n/{en,ko}.ts (hero, req, proof), src/i18n/app/*.ts (product strings), design/brand.md §5 (approval line).

C = {
  'en': {
    'lang': 'en',
    'nav': ['How it works', 'Phone app', 'Design', 'GitHub'],
    'cta': 'Download for Mac',
    'cta_short': 'Download',
    'cli': 'Or install the CLI',
    'title': 'Your whole startup team. You just approve.',
    'title_a': 'Your whole startup team.', 'title_b': 'You just approve.', 'title_3': ['Your whole', 'startup team.', 'You just approve.'],
    'lead': 'A PM, a designer and engineers who build your product, ship it and keep growing it.',
    'req': 'Free and open source · macOS 12+ · Runs on your Claude or ChatGPT plan',
    'proof': ['222', 'tickets'], 'proof2': ['20', 'days'], 'proof3': ['1', 'person approving'],
    'proof_line': '222 tickets · 20 days · 1 person approving',
    # phone visitor
    'p_note': 'equipe runs on your Mac.',
    'p_send': 'Send the link to my Mac',
    'p_send_hint': 'AirDrop, Messages or Mail. Open it on the Mac later.', 'p_copy': 'Copy link', 'p_fallback': 'Can’t share from here?', 'then': 'Approve, and frontend publishes loop.app/pricing.',
    'p_app': 'Get the iPhone app',
    'p_app_hint': 'Once the Mac is set up, approve from your phone.',
    # how it works
    'how_t': 'Say it once. The team takes it from there.',
    'steps': [
      ('Say it once.', 'Tell the PM what you want. It splits the work into tickets, one owner each.'),
      ('The team works.', 'Designer, frontend and backend work at once, each on its own branch, on your Mac.'),
      ('You decide what matters.', 'Publishing, sending and paying wait for your OK. Each question comes with options and a recommendation.'),
    ],
    'appr_t': 'Before anything ships, gets sent or costs money, the squad asks.',
    'appr_x': 'Nothing goes public on its own. The question arrives with what happens next and what the team recommends.',
    'phone_t': 'Approve on the walk home.',
    'phone_x': 'The iPhone app connects to the squad on your Mac. Decisions arrive as cards; one tap answers.',
    'end_t': 'Put the team to work tonight.',
    'foot': ['MIT licence', 'Privacy', 'GitHub'],
    'live_now': 'Now', 'members': 'members', 'working_n': 'working', 'yourturn_n': 'waiting on you',
    'frame': 'One frame of the moving scene. Sample data.',
    'log_t': 'Right now, in the squad', 'you': 'you', 'earlier': 'Earlier today · 4 entries', 'since': 'since',
    # product UI
    'ui': {
      'new': 'New message', 'pm': 'PM', 'inbox': 'Inbox', 'prog': 'In progress', 'tickets': 'Tickets', 'team': 'Team', 'projects': 'Projects',
      'working': 'Working', 'turn': 'Your turn', 'done': 'Done', 'idle': 'Idle', 'review': 'In review',
      'dec': 'Decision needed', 'q': 'Publish the pricing page?',
      'qx': 'It goes live at loop.app/pricing. Visitors see Pro at $6 a month.',
      'pub': 'Publish now', 'rec': 'Recommended', 'hold': 'Hold', 'approved': 'Approved', 'live': 'Live', 'livex': 'loop.app/pricing · just published',
      'ask': 'Grow Loop’s signups', 'reply': 'Split into 4 tickets, one owner each. Publishing is your call, so I’ll ask.',
      'thismac': 'This Mac',
      'trail_t': 'How T-5 got here',
      'done_t': 'Done today', 'done_rows': [('T-2', 'Waitlist export', 'backend', 'Merged'), ('T-3', 'Welcome email copy', 'designer', 'Approved by you'), ('T-4', 'Onboarding checklist', 'frontend', 'Merged')],
      'trail': [('11:52', 'designer', 'Picked the pricing layout'), ('12:40', 'frontend', 'Built /pricing · preview ready'), ('12:58', 'data', 'Checked the Pro sign-up event')],
      'next': 'After you approve: frontend publishes it and tells you when it’s live. Hold, and nothing changes.',
      'rows': [
        ('T-5', 'Pricing page', 'frontend', 'turn', 'Asks you: publish?'),
        ('T-8', 'Signup form polish', 'frontend', 'working', 'Opened PR #14'),
        ('T-12', 'Landing hero options', 'designer', 'working', 'Posted 3 options'),
        ('T-13', 'Payment webhook', 'backend', 'working', 'Tests 41 of 48 pass'),
        ('T-16', 'Signup funnel metrics', 'data', 'done', 'Dashboard ready'),
      ],
    },
    'log': [
      ('09:02', 'you', 'Grow Loop’s signups', ''),
      ('09:03', 'pm', 'Split into 4 tickets, one owner each.', ''),
      ('10:18', 'designer', 'Posted three options for the landing hero.', 'T-12'),
      ('11:40', 'frontend', 'Signup form is ready for review.', 'T-8'),
      ('13:05', 'pm', 'Decision needed: publish the pricing page?', 'T-5'),
      ('13:06', 'you', 'Approved.', ''),
      ('13:07', 'frontend', 'loop.app/pricing is live.', 'T-5'),
    ],
  },
  'ko': {
    'lang': 'ko',
    'nav': ['작동 방식', '폰 앱', 'Design', 'GitHub'],
    'cta': 'Mac용 다운로드',
    'cta_short': '다운로드',
    'cli': 'CLI로 설치',
    'title': '최고의 스타트업 팀을 드려요. 승인만 하세요.',
    'title_a': '최고의 스타트업 팀을 드려요.', 'title_b': '승인만 하세요.', 'title_3': ['최고의 스타트업', '팀을 드려요.', '승인만 하세요.'],
    'lead': '기획·디자인·개발을 한 팀이 맡아요.',
    'req': '무료 오픈소스 · macOS 12 이상 · 쓰던 Claude·ChatGPT 요금제 그대로',
    'proof': ['222', '티켓'], 'proof2': ['20', '일'], 'proof3': ['1', '승인한 사람'],
    'proof_line': '20일, 티켓 222개, 승인한 사람 한 명',
    'p_note': 'equipe는 Mac에서 돌아가요.',
    'p_send': 'Mac으로 링크 보내기',
    'p_send_hint': 'AirDrop·메시지·메일로 보내 두고 Mac에서 열어요.', 'p_copy': '링크 복사', 'p_fallback': '공유가 안 되면', 'then': '승인하면 frontend가 loop.app/pricing에 공개해요.',
    'p_app': 'iPhone 앱 받기',
    'p_app_hint': 'Mac에 깔고 나면 폰에서 승인해요.',
    'how_t': '한 번 말하면, 나머지는 팀이 해요.',
    'steps': [
      ('한 번만 말해요.', 'PM에게 원하는 걸 말하면 티켓으로 나눠 멤버 한 명씩 맡겨요.'),
      ('팀이 나눠서 일해요.', '디자이너, 프론트엔드, 백엔드가 동시에, 각자 브랜치에서 내 Mac 안에서 일해요.'),
      ('정할 것만 내게 와요.', '공개·발송·결제는 내 OK를 기다려요. 질문마다 선택지와 추천이 같이 와요.'),
    ],
    'appr_t': '공개·발송·결제 전엔 꼭 먼저 물어봐요.',
    'appr_x': '아무것도 혼자 공개되지 않아요. 질문에는 무슨 일이 생기는지와 팀의 추천이 같이 와요.',
    'phone_t': '걸어가면서 승인해요.',
    'phone_x': 'iPhone 앱이 내 Mac의 스쿼드와 이어져요. 결정은 카드로 오고, 한 번 누르면 답이 가요.',
    'end_t': '오늘 밤부터 팀에게 맡겨요.',
    'foot': ['MIT 라이선스', '개인정보', 'GitHub'],
    'live_now': '지금', 'members': '멤버', 'working_n': '작업 중', 'yourturn_n': '내 차례',
    'frame': '움직이는 장면의 한 프레임이에요. 예시 데이터예요.',
    'log_t': '지금, 스쿼드에서', 'you': '나', 'earlier': '오늘 앞선 기록 4줄', 'since': '부터',
    'ui': {
      'new': '새 메시지', 'pm': 'PM', 'inbox': '받은함', 'prog': '진행 중', 'tickets': '티켓', 'team': '팀', 'projects': '프로젝트',
      'working': '작업 중', 'turn': '내 차례', 'done': '완료', 'idle': '쉬는 중', 'review': '검토 중',
      'dec': '결정 필요', 'q': '요금 페이지를 공개할까요?',
      'qx': 'loop.app/pricing에 바로 열려요. 방문자에게 Pro 플랜이 월 $6로 보여요.',
      'pub': '지금 공개', 'rec': '추천', 'hold': '보류', 'approved': '승인함', 'live': 'Live', 'livex': 'loop.app/pricing · 방금 공개됨',
      'ask': 'Loop 가입자를 늘려 줘', 'reply': '티켓 4장으로 나눴어요. 공개할지는 내가 정할 일이라 질문으로 올릴게요.',
      'thismac': '이 Mac',
      'trail_t': 'T-5가 여기까지 온 길',
      'done_t': '오늘 끝난 일', 'done_rows': [('T-2', '대기자 명단 내보내기', 'backend', '병합됨'), ('T-3', '환영 메일 문구', 'designer', '내가 승인함'), ('T-4', '첫 사용 체크리스트', 'frontend', '병합됨')],
      'trail': [('11:52', 'designer', '요금표 배치를 골랐어요'), ('12:40', 'frontend', '/pricing을 만들고 미리보기를 열었어요'), ('12:58', 'data', 'Pro 가입 이벤트를 확인했어요')],
      'next': '승인하면 frontend가 공개하고, 열리면 알려 줘요. 보류하면 아무것도 바뀌지 않아요.',
      'rows': [
        ('T-5', '요금 페이지', 'frontend', 'turn', '공개할지 물어봐요'),
        ('T-8', '가입 폼 다듬기', 'frontend', 'working', 'PR #14를 열었어요'),
        ('T-12', '첫 화면 시안', 'designer', 'working', '시안 3개를 올렸어요'),
        ('T-13', '결제 웹훅', 'backend', 'working', '테스트 48개 중 41개 통과'),
        ('T-16', '가입 퍼널 지표', 'data', 'done', '대시보드 완성'),
      ],
    },
    'log': [
      ('09:02', 'you', 'Loop 가입자를 늘려 줘', ''),
      ('09:03', 'pm', '티켓 4장으로 나눴어요. 담당은 한 명씩이에요.', ''),
      ('10:18', 'designer', '첫 화면 시안 3개를 올렸어요.', 'T-12'),
      ('11:40', 'frontend', '가입 폼 검토를 요청했어요.', 'T-8'),
      ('13:05', 'pm', '결정 필요: 요금 페이지를 공개할까요?', 'T-5'),
      ('13:06', 'you', '승인했어요.', ''),
      ('13:07', 'frontend', 'loop.app/pricing이 공개됐어요.', 'T-5'),
    ],
  },
}

E_PATH = 'M60.54 52.17C60.54 38.69 53.73 30.5 42.2 30.5C30.96 30.5 24.07 38.11 24.07 51.23C24.07 63.77 30.89 70.95 41.98 70.95C50.75 70.95 57.86 66.97 60.11 59.28H50.1C49.23 62.11 46.04 63.2 42.34 63.2C37.56 63.2 34.51 61.02 34.22 53.41H60.47ZM49.96 46.66H34.37C35.02 41.23 37.56 38.26 42.05 38.26C46.4 38.26 49.45 41.08 49.96 46.66Z'

def mark(size=28, dot='#3F6FF5'):
  # The e. logo, unchanged: glyph in the text colour, the dot in its own blue (locked).
  return (f'<svg class="mark" width="{size}" height="{size}" viewBox="18 22 62 56" aria-hidden="true">'
          f'<path fill="currentColor" d="{E_PATH}"/><circle cx="70.5" cy="66.5" r="6.4" fill="{dot}"/></svg>')

def logo(size=26):
  return f'<a class="logo" href="#" aria-label="equipe">{mark(size)}<span>equipe</span></a>'
