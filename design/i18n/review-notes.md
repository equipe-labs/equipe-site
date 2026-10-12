# 번역 검수 노트 (원어민 검수용)

대상: `src/i18n/{ko,ja,zh-CN,es,pt-BR,de,fr}.ts` (T-8).
각 언어를 역번역(→en)으로 원문과 대조해 사실 관계(기능, 숫자, 승인/수락 구분)가 같은 것을 확인했습니다. 아래는 **확신이 낮은 표현**만 모은 목록입니다. 원어민 검수자는 이 목록부터 보면 됩니다.

공통 판단 (모든 언어)
- `meta.description` 길이: 서양어는 155자 이하(de는 150 이하), CJK는 약 80자. 길이를 맞추려고 원문의 "shared board"에서 "shared"를 뺀 언어가 있습니다(es, pt-BR, fr, de, ko, ja). 의미는 같지만 원어민이 어색하다고 느끼면 알려 주세요.
- title은 `glossary.md` §4에 적힌 키워드형 제목을 따랐습니다. 영어 제목("an AI software squad led by one person")의 직역이 아니라 SEO 키워드(★)를 앞세운 것입니다. 영어와 달리 "software squad" 대신 "coding agent"가 들어갑니다.
- `ui.primaryNav`, `ui.skip`, `ui.copy*`는 화면 읽기 프로그램용 짧은 문구라 관용구를 따랐습니다.

## ko
- `hero.title`의 "당신이 이끄는": 용어집대로 H1과 "당신의 승인"에서만 "당신"을 씁니다. 나머지는 주어를 뺐지만 `meta.description`의 "당신이 승인한 뒤에만"은 H1 밖이라 원어민이 "승인한 뒤에만"으로 줄이길 원할 수 있습니다.
- `how.cards[2].text`의 "당신의 체크아웃": "체크아웃"을 그대로 음차했습니다. "작업 디렉터리"가 더 자연스러운지 확인이 필요합니다.
- `who.points[0].lead` "~를 쓰고 있어요": 원문의 평서문("You already use…")을 해요체 서술로 옮겼습니다. 어미가 처음 읽을 때 사용자 대사처럼 읽힐 수 있습니다.
- `faq` 답변의 "정직하게 밝혀요" (identifies itself honestly): 직역 느낌이 남아 있습니다. "숨기지 않고 밝혀요"가 나을 수 있습니다.

## ja
- `meta.title`의 "1人で率いる": 용어집 예시를 그대로 썼습니다. 「1人で」가 "혼자 힘으로"(능력 강조)로 읽히지 않는지 확인이 필요합니다.
- `how.cards[0].title` 「役割」, `cards[2]` 「ブランチ」: 영어의 짧은 명사 카드 제목을 그대로 옮겼습니다. 문제는 없지만 「承認」계열 용어(承認/受理)가 일관적인지 봐 주세요. 受理는 PM이 보드에 "받는" 동작에, 承認은 사람이 머지를 허락하는 동작에 썼습니다.
- `start.tryIntro` 「まず試してみたい場合は」: 문장이 약간 깁니다.
- `faq[3].answer` 「正直に名乗ります」: 소프트웨어가 "정직하게 이름을 댄다"는 표현이 일본어 기술 문서에서 자연스러운지 확신이 없습니다.
- 「メインライン」(main line): 용어집에 따랐습니다. 개발자 사이에서는 「mainブランチ」가 더 흔할 수 있습니다.

## zh-CN
- `who.points[1].text` 「主线」: 용어집에 따랐지만 「main 分支」가 더 직접적일 수 있습니다.
- `how.intro` 「带领小队的只有一个人」: 원문의 "One person leads."를 풀어 썼습니다. 간결하지만 "只有"가 "한 명뿐"이라는 뉘앙스를 더하는지 확인해 주세요.
- 「验收」(accept)와 「批准」(approve)을 구분했습니다. 「工单」「智能体」는 용어집 선택입니다.
- `start.tryIntro` 「想先不用看板，简单试一下？」: 구어체가 과하지 않은지 확인해 주세요.

## es
- `squad`를 번역하지 않았습니다(용어집 결정). `Designer`·`Frontend`·`Backend`도 영어 그대로, `Datos`만 번역했습니다.
- 「fusionar」(merge)와 「rama principal」을 썼습니다. 「Nada se fusiona」가 개발자에게 자연스러운지 확인 부탁드립니다.
- `how.cards[2].text` 「copia de trabajo」(checkout): 「checkout」을 그대로 두는 편이 나을 수 있습니다.
- `ui.primaryNav` 「Principal」: 한 단어라 스크린 리더에서 어색할 수 있습니다.
- `ogImageAlt`의 「liderado por una sola persona」: 원문 "led by one person" 직역입니다.

## pt-BR
- 브랜드 규칙(`equipe`는 "팀"이라는 포르투갈어 단어이기도 함)을 지켜 "o equipe"처럼 관사를 붙이는 문장과 관사 없이 시작하는 문장이 섞여 있습니다(「O equipe é…」/「equipe não é…」). 일관되게 하는 편이 좋은지, 어느 쪽이 자연스러운지 확인이 필요합니다.
- `meta.description`: 「Nada sofre merge」가 자연스러운지(「Nada é mesclado」/「nada faz merge」) 확인이 필요합니다. 「sofre merge」는 직역 느낌이 있습니다.
- 「time」(team)을 썼습니다(「equipe」와의 충돌 회피, 용어집 규칙). 「um time de agentes」.
- 「engine」, 「branch」, 「roadmap」, 「merge」는 용어집에 따라 영어 그대로 썼습니다.
- `faq[7].answer`의 「transferências (handoffs)」: 괄호 안에 영어를 붙였습니다. 용어집의 「transferência (handoff)」에 따른 것입니다.

## de
- `du` 형으로 통일했습니다. 「Deine Freigabe」(approval)와 「akzeptiert」(accept)를 구분했습니다.
- `how.cards[1].text`의 「Single Source of Truth」: 영어 그대로 썼습니다(용어집).
- 「Gedächtnis」(memory): 에이전트의 "memory"에 대한 번역어입니다. 「Speicher」는 RAM 느낌이라 피했는데, 개발자에게 어느 쪽이 맞는지 확인이 필요합니다.
- `hero.note`: 원문의 em dash를 용어집대로 공백 있는 en dash로 바꿨습니다.
- `nav.faq`는 「FAQ」로 두고 섹션 제목은 「Häufige Fragen」입니다. 메뉴와 제목이 다른 것이 괜찮은지 확인해 주세요.
- 「isolierten git worktrees」: "git worktree"를 복수형 영어 명사로 취급해 어미를 붙이지 않았습니다.

## fr
- `vous` 형으로 통일했습니다. 좁은 줄바꿈 금지 공백(U+202F)을 `; ? ! :` 앞에 ` `로 넣었습니다. 코드 블록 안에서는 직선 따옴표를 썼습니다.
- `squad`는 남성 명사로 썼습니다(「un squad」). 「l’équipe」는 쓰지 않고 「couche d’équipe」(team layer)에서만 일반명사로 사용했습니다. 브랜드 `equipe`와 혼동되지 않는지 확인이 필요합니다.
- `meta.description`의 「sans vous」(승인 없이는 아무것도 병합되지 않음): 길이 때문에 「sans votre approbation」을 줄였습니다. 의미가 약해졌는지 확인해 주세요.
- 「source unique de vérité」, 「étapes d’approbation」(approval gates), 「passations」(handoffs): 용어집에 따랐습니다. 「passations」가 개발자에게 낯설 수 있습니다.
- `who.intro` 「celles et ceux」: 성 중립을 위해 풀어 썼습니다. 개발자 문서에서는 다소 무겁게 읽힐 수 있습니다.
- `ui.bannerText`: 「en {language}」는 「en Français」처럼 언어명이 대문자로 들어갑니다(`locales.ts`의 이름). 관사 없는 소문자 표기(「en français」)가 맞지만 이름 표기는 메뉴와 공유되어서 그대로 뒀습니다. 영향받는 언어: fr, es(「en Español」), pt-BR(「em Português (Brasil)」).
