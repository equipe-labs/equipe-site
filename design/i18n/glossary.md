# equipe.im — Localization glossary & style guide

Languages: **en** (source) · **ko** · **ja** · **zh-Hans** (zh-CN) · **es** · **pt-BR** · **de** · **fr**
Source text: `design/copy.md` (v1 landing copy, on branch `equipe/designer-t1-6acc9e47`).

How to use: translators and reviewers check every string against §1 (never translate), §2 (term table), §3 (tone) and §4 (SEO). If a term is missing, add it here in the same PR as the translation.

Caveat: term choices come from the wording used by each language's developer tools and docs (GitHub, GitLab, Jira, Linear, MDN, Git docs and local community writing). Search keywords in §4 are plausible queries, **not measured volumes**; check them in Search Console once the pages have data.

---

## 1 · Never translate

| Item | Rule |
|---|---|
| OAuth | Stays "OAuth" in every language. |
| **equipe** | Always lowercase, even at the start of a sentence or in a heading. Never "Equipe", "EQUIPE", "Équipe". In **pt-BR** and **fr** the word *equipe/équipe* also means "team": always follow the brand with a descriptor on first mention ("equipe, um squad de software com IA…") and never use it as a common noun. |
| Product, tool and company names | Codex, Claude Code, Claude, ChatGPT, OpenAI, Anthropic, GitHub, Rust, Cargo, git, Agent Client Protocol (ACP) — written as-is, in Latin script, in every language (including ja/zh/ko). |
| CLI commands, flags, binaries | `equipe`, `equipe login`, `equipe status`, `equipe try --edit "…"`, `claude`, `cargo install --locked --path crates/cli`. Never translate, never add spaces or full-width forms. |
| Code and literals | Code blocks, file paths, URLs, `originator: equipe`, version numbers ("Rust 1.88+"). Comments inside code blocks stay in English **unless** the page owner asks for them localized (then translate only the text after `#`). |
| License | "MIT" / "MIT License" stays; the sentence around it is translated. |
| `git worktree` | Written "git worktree" in every language (it is a git term). Translate only the adjective ("isolated"). |
| Role chips for PM and QA | **PM** and **QA** stay as abbreviations everywhere. |

Typography around untranslated terms: in ja/zh/ko put a half-width space between Latin text and CJK text only if the surrounding style already does so (§3). Never break a command across lines in prose.

---

## 2 · Core terms

`=` means "keep the English word". Glosses in parentheses are for the first mention on a page only, never in headings or title/description.

### 2.1 Concepts

| en | ko | ja | zh-Hans | es | pt-BR | de | fr |
|---|---|---|---|---|---|---|---|
| squad | 스쿼드 | スクワッド | 小队 | squad | squad | Squad | squad (m.) |
| AI software squad | AI 소프트웨어 스쿼드 | AIソフトウェアスクワッド | AI 软件小队 | squad de software con IA | squad de software com IA | KI-Software-Squad | squad logiciel IA |
| agent | 에이전트 | エージェント | 智能体 | agente | agente | Agent | agent |
| agent loop | 에이전트 루프 | エージェントループ | 智能体循环 | bucle de agente | loop de agente | Agent-Loop | boucle d'agent |
| engine (Codex / Claude Code) | 엔진 | エンジン | 引擎 | motor | engine | Engine | moteur |
| member | 멤버 | メンバー | 成员 | miembro | membro | Mitglied | membre |
| role | 역할 | 役割 | 角色 | rol | função | Rolle | rôle |
| ticket | 티켓 | チケット | 工单 | ticket | ticket | Ticket | ticket |
| board | 보드 | ボード | 看板 | tablero | quadro | Board | tableau |
| single source of truth | 단일 진실 공급원 | 信頼できる唯一の情報源 | 唯一可信来源 | única fuente de verdad | única fonte da verdade | Single Source of Truth | source unique de vérité |
| event (immutable) | 이벤트 (변경 불가) | イベント (不変) | 事件 (不可变) | evento (inmutable) | evento (imutável) | Event (unveränderlich) | événement (immuable) |
| owner (assignee of a ticket) | 담당자 | 担当者 | 负责人 | responsable | responsável | zuständige Person | responsable |
| the person leading the squad | 스쿼드를 이끄는 사람 / "당신" | スクワッドを率いる人 / 「あなた」 | 带领小队的人 / "你" | la persona que lidera el squad / "tú" | quem lidera o squad / "você" | die Person, die den Squad leitet / "du" | la personne qui dirige le squad / "vous" |
| branch | 브랜치 | ブランチ | 分支 | rama | branch | Branch | branche |
| git worktree | git worktree | git worktree | git worktree | git worktree | git worktree | git worktree | git worktree |
| isolated | 격리된 | 分離された | 隔离的 | aislado | isolado | isoliert | isolé |
| sandbox | 샌드박스 | サンドボックス | 沙箱 | sandbox | sandbox | Sandbox | sandbox |
| review (noun) | 리뷰 | レビュー | 评审 | revisión | revisão | Review | revue |
| accept (PM accepts work) | 수락 | 受理 | 验收 | aceptar | aceitar | akzeptieren | accepter |
| approve (person approves a merge) | 승인 | 承認 | 批准 | aprobar | aprovar | freigeben | approuver |
| approval / approval gate | 승인 / 승인 게이트 | 承認 / 承認ゲート | 批准 / 审批关卡 | aprobación / punto de aprobación | aprovação / ponto de aprovação | Freigabe / Freigabe-Schritt | approbation / étape d'approbation |
| merge | 머지 | マージ | 合并 | fusionar (merge) | merge (verbo: fazer merge) | mergen / Merge | fusionner |
| handoff | 인수인계 | 引き継ぎ | 交接 | traspaso | transferência (handoff) | Übergabe | passation |
| roadmap | 로드맵 | ロードマップ | 路线图 | hoja de ruta | roadmap | Roadmap | feuille de route |
| squad console | 스쿼드 콘솔 | スクワッドコンソール | 小队控制台 | consola del squad | console do squad | Squad-Konsole | console du squad |
| daemon (squad daemon) | 데몬 | デーモン | 守护进程 | daemon | daemon | Daemon | démon |
| repository | 저장소 | リポジトリ | 仓库 | repositorio | repositório | Repository | dépôt |
| open source | 오픈소스 | オープンソース | 开源 | código abierto | código aberto | Open Source | open source |
| early-stage | 초기 단계 | 開発初期 | 早期阶段 | en fase temprana | em estágio inicial | in einer frühen Phase | à un stade précoce |
| sign in | 로그인 | ログイン | 登录 | iniciar sesión | entrar / fazer login | anmelden | se connecter |
| credentials | 자격 증명 | 認証情報 | 凭据 | credenciales | credenciais | Zugangsdaten | identifiants |
| billed to your own account | 본인 계정으로 청구됩니다 | ご自身のアカウントに請求されます | 费用计入你自己的账户 | se factura a tu propia cuenta | cobrado na sua própria conta | wird über dein eigenes Konto abgerechnet | facturé sur votre propre compte |
| binary (the `claude` binary) | 바이너리 | バイナリ | 二进制文件 | binario | binário | Binary | binaire |
| production ("ready for production use") | 프로덕션 | 本番環境 | 生产环境 | producción | produção | Produktivbetrieb | production |
| main line (of the repo) | 메인 브랜치 | メインライン (= main ブランチ) | 主线 (main 分支) | rama principal | branch principal | Hauptzweig → "main-Branch" | branche principale |

Notes that matter:
- **accept ≠ approve.** The copy distinguishes them: the PM *accepts* work onto the board; the person *approves* before a branch merges. Keep two different words in every language. Never collapse both into "approve".
- **board** is the product's concept, not a Kanban jargon word: do not render it as "page", "dashboard" or "panel".
- **ticket** (zh): 工单 is the common developer term; do not use 票 or 任务单.
- **agent** (zh): 智能体 is the current standard in Chinese developer writing; 代理 reads as "proxy".
- **squad (es, pt-BR, de, fr)** is kept in English because "squad" is the word those communities already use for small product teams, and "equipo/equipe/Team" would collide with the brand name or the generic word "team". First mention can add a gloss: "squad (equipo de agentes)".
- **branch (pt-BR, de)** stays English because developers there say "branch", not "ramo/Zweig". es uses *rama* and fr *branche*, which are the forms in their Git docs.
- **merge:** use a loanword where devs say it (ko, ja, pt-BR, de); use the Git-docs verb where they do not (zh, es, fr).

### 2.2 Role names

PM and QA stay as abbreviations. Role names are always capitalized in en; in other languages follow the capitalization rule of the language (nouns capitalized in de only).

| en | ko | ja | zh-Hans | es | pt-BR | de | fr |
|---|---|---|---|---|---|---|---|
| PM | PM | PM | PM | PM | PM | PM | PM |
| Designer | 디자이너 | デザイナー | 设计师 | Designer | designer | Designer | designer |
| Frontend | 프론트엔드 | フロントエンド | 前端 | frontend | frontend | Frontend | frontend |
| Backend | 백엔드 | バックエンド | 后端 | backend | backend | Backend | backend |
| QA | QA | QA | QA | QA | QA | QA | QA |
| Data | 데이터 | データ | 数据 | datos | dados | Daten | données |

Rules: (1) in es/pt-BR/fr/de roles are used as proper role labels ("el rol Designer", "a função Designer", "le rôle Designer", "die Rolle Designer"), so no gender inflection is needed; (2) in headings and chips write the label alone, in running text write "the X role" form above; (3) never translate "PM" as "project manager" in running text; if a gloss is needed use it once ("PM (gestión del proyecto)").

### 2.3 Fixed UI strings (headings, CTAs, chip)

These recur on every page: translate them once, identically everywhere. Quoted text is the en source from `design/copy.md`.

| en | ko | ja | zh-Hans | es | pt-BR | de | fr |
|---|---|---|---|---|---|---|---|
| How it works | 작동 방식 | 仕組み | 工作方式 | Cómo funciona | Como funciona | So funktioniert's | Comment ça marche |
| Who equipe is for | equipe는 이런 분께 맞아요 | equipeが向いている人 | equipe 适合谁 | Para quién es equipe | Para quem é o equipe | Für wen equipe gedacht ist | À qui s'adresse equipe |
| Get started | 시작하기 | はじめる | 开始使用 | Empezar | Começar | Loslegen | Commencer |
| Frequently asked questions | 자주 묻는 질문 | よくある質問 | 常见问题 | Preguntas frecuentes | Perguntas frequentes | Häufige Fragen | Questions fréquentes |
| Your approval | 당신의 승인 | あなたの承認 | 你的批准 | Tu aprobación | Sua aprovação | Deine Freigabe | Votre approbation |
| View on GitHub | GitHub에서 보기 | GitHubで見る | 在 GitHub 上查看 | Ver en GitHub | Ver no GitHub | Auf GitHub ansehen | Voir sur GitHub |
| Read the docs on GitHub | GitHub에서 문서 읽기 | GitHubでドキュメントを読む | 在 GitHub 上阅读文档 | Lee la documentación en GitHub | Leia a documentação no GitHub | Doku auf GitHub lesen | Lire la documentation sur GitHub |
| Early-stage · MIT licensed | 초기 단계 · MIT 라이선스 | 開発初期 · MITライセンス | 早期阶段 · MIT 许可 | En fase temprana · Licencia MIT | Em estágio inicial · Licença MIT | Frühe Phase · MIT-Lizenz | Stade précoce · Licence MIT |
| Built by an equipe squad, in public. | equipe 스쿼드가 공개적으로 만들었어요. | equipeのスクワッドが公開の場で作りました。 | 由 equipe 小队公开构建。 | Construido en público por un squad de equipe. | Construído em público por um squad do equipe. | Öffentlich von einem equipe-Squad gebaut. | Construit en public par un squad equipe. |

Note: "Your approval" uses the possessive on purpose (it is the person's gate); "Who equipe is for" is rewritten naturally in each language rather than word for word. In ko, the possessive 당신의 is allowed here as an H3 (see §3 ko).

---

## 3 · Tone and style per language

Base voice (all languages): plain, concrete, a little dry; no hype words ("revolutionary", "10x", "game-changing"); no exclamation marks; address the reader directly. Keep sentences at the length of the English source (about 15–25 words in running copy, one idea each) and split a sentence rather than stretch it. Headings are short noun phrases or imperatives, no final period.

### ko — 한국어
- **Register:** 해요체 일관 사용 ("~해요", "~돼요"). No 반말, and no 합니다체 except legal lines (license). Avoid addressing the reader as "당신" and never use "여러분": drop the subject. "당신" is allowed only in the H1, where the English has "your".
- **Style:** short sentences, 1 verb per sentence; avoid chains of 의/을/를. Prefer verbs over 명사화 ("승인하기 전에는 머지되지 않아요").
- **Punctuation:** half-width `. , ? :`; straight quotes `"` or `'`; no "…" for ellipsis in CLI code. Space between Latin and Hangul is **not** required but keep a space before a particle only when the word is a command: `equipe`는.
- **Foreign words:** transliterate common dev terms (브랜치, 머지) per the table; do not add the English in parentheses after the first mention.
- **Caveat:** 해요체 reads friendly; if the person wants a more formal brand voice switch the whole site to 합니다체, never mix.

### ja — 日本語
- **Register:** です・ます調 throughout; headings in 体言止め (noun phrases). Reader is "あなた" only in the H1; elsewhere omit the subject.
- **Style:** one idea per sentence, avoid stacked の/で; roughly 40–60 characters per sentence. Katakana for loanwords per the table, with a long vowel mark ー per JIS (サーバー-style: エージェント, フロントエンド, バックエンド, ユーザー, ブラウザー — the site uses the **ー form** consistently).
- **Punctuation:** 。、 in prose (not ． ，), 「」 for quotes, （）full-width for parentheses in prose; `!` and `?` avoided. Half-width digits. Insert **no** space between Latin and Japanese; keep a half-width space only inside commands.
- **Titles/descriptions:** title ≤ ~32 full-width characters; description ≤ ~110 characters.

### zh-Hans — 简体中文
- **Register:** neutral modern written Chinese, 你 (not 您) for the reader, matching the dry, direct source. 您 only in legal text if needed.
- **Style:** short sentences with 主谓宾 order; avoid 的 chains longer than two; prefer verbs ("你批准之前，什么都不会合并"). No 被 passive unless the English is passive for a reason.
- **Punctuation:** full-width `，。；：？！` and 「」 or “ ” (use curly “ ” ; not corner brackets). Half-width digits. Put a thin/normal **space between Chinese and Latin/number** ("支持 Codex 和 Claude Code"); no space before or after full-width punctuation.
- **Terms:** use mainland terminology (仓库 not 儲存庫; 软件 not 軟體).
- **Titles/descriptions:** title ≤ ~30 characters; description ≤ ~75 characters.

### es — Español (neutral, LATAM- and Spain-safe)
- **Register:** **tú** (informal-neutral), never *vos*, never *usted*; verbs imperative-tú ("Empieza", "Revisa"). Avoid regionalisms (ordenador/computadora → write "tu equipo" or "tu máquina").
- **Style:** active voice, sentences 15–25 words; avoid gerundio chains. Gender-neutral by rewording ("quien lidera el squad", not "el líder") rather than inclusive symbols (@, x, e).
- **Punctuation:** inverted ¿ ¡ always; use « » only for Spanish quotes, otherwise `"`; decimal comma, thousands thin-space (but keep version numbers as in en: Rust 1.88+); lowercase for months/days; sentence-case headings (only first word capitalized).
- **Em dash:** the English "—" becomes " — " only as a parenthetical; prefer commas or colons.

### pt-BR — Português (Brasil)
- **Register:** **você** (informal-neutral), never *tu*, never *o senhor*. Imperatives with você forms ("Comece", "Revise").
- **Style:** concise, active, 15–25 words; keep English dev terms devs actually use (merge, branch, ticket, squad); avoid europeanisms (utilizador, ecrã, ficheiro → usuário, tela, arquivo; equipa → equipe).
- **Punctuation:** `"` quotes; decimal comma; sentence-case headings; em dash (—) only as a parenthetical; no space before `: ; ? !`.
- **Brand note:** because "equipe" is a Portuguese word, avoid sentences like "a equipe usa o equipe". Use "o squad" or "você" as the subject.

### de — Deutsch
- **Register:** **du** (lowercase, including possessives: dein, dir) — the dev-tool norm and the closest match to the dry source voice. Never mix du/Sie. Legal and licence text may stay neutral without address.
- **Style:** short main clauses; avoid Verbklammern longer than ~8 words; avoid Nominalstil ("Durchführung der Freigabe" → "Du gibst frei"). Compound nouns: hyphenate for readability when with an English term ("Agent-Loop", "Squad-Konsole", "KI-Software-Squad"). English loanwords are capitalized as nouns (Branch, Board, Ticket).
- **Gender:** reword to avoid gendered nouns ("wer den Squad leitet", "zuständige Person"); no Gendersternchen or Doppelpunkt.
- **Punctuation:** „ “ for quotes; comma rules of German (before dass, relative clauses); no comma before "und"; space inside „ “ none; en dash with spaces (" – ") for parenthetical, not an em dash; decimal comma; headings in sentence case with nouns capitalized.
- **Titles/descriptions:** German runs ~20% longer than English: budget title ≤ 58 chars, description ≤ 150 chars; check that they still fit.

### fr — Français
- **Register:** **vous**, always, including in the hero and CTAs. Direct and dry, no *on* for the reader. Infinitive or imperative vous-form in buttons ("Voir sur GitHub", "Commencer").
- **Style:** active voice, 15–25 words; prefer verbs over nominalizations; keep English dev terms devs use (open source, sandbox, squad, ticket, merge → *fusionner*); feminine/masculine: use the words in the table and rewrite to avoid *le/la* for roles ("quand quelqu'un approuve").
- **Punctuation:** **narrow no-break space (U+202F) before `; ? ! :` and inside « »** — use `&nbsp;`/U+202F, never a regular space; « guillemets » for quotes (nested: “ ”); apostrophe typographic ’ in prose (straight ' in code); decimal comma; headings sentence-case; em dash with spaces for parentheticals.
- **Brand note:** "équipe" means team; never put "equipe" in a sentence where it could read as the common noun. Always lowercase and unaccented.
- **Titles/descriptions:** title ≤ 60 chars, description ≤ 155 chars.

### Shared punctuation reminders
- Ellipsis: the placeholder `"…"` inside the `equipe try --edit` command is code and stays as-is in all languages.
- Arrows `→` in links ("Read the docs on GitHub →") stay as-is in all languages, but put the arrow on the same line as the last word (no-break space before it).
- The "·" separator in "Early-stage · MIT licensed" stays.

---

## 4 · SEO notes

How to apply: in each language's page, the **title**, **meta description** and **H1** should contain the primary keyword once, naturally. They must still read as the translation of the English sentence: do not stuff, do not repeat the keyword in all three if it sounds forced. The remaining keywords appear in H2s and body text where they fit. Keep "equipe" lowercase in titles.

The primary keyword is marked ★. Keywords are plausible search phrases written the way people in each language type them (including loanwords in Latin script), not measured volumes.

| Lang | Keywords (★ = primary for title/description/H1) |
|---|---|
| **en** | ★ AI coding agent · AI software squad · AI agent team for coding · open-source AI coding agents · multi-agent coding |
| **ko** | ★ AI 코딩 에이전트 · AI 개발팀 · 멀티 에이전트 코딩 · 오픈소스 AI 코딩 도구 · Claude Code 팀 / Codex 에이전트 |
| **ja** | ★ AIコーディングエージェント · AI開発チーム · マルチエージェント 開発 · オープンソース AIエージェント · Claude Code 複数 / Codex 並列 |
| **zh-Hans** | ★ AI 编程智能体 · AI 软件开发团队 · 多智能体编程 · 开源 AI 编程工具 · Claude Code 多智能体 / Codex 并行 |
| **es** | ★ agentes de programación con IA · equipo de agentes de IA para desarrollo · agente de código con IA · código abierto IA programación · multiagente desarrollo de software |
| **pt-BR** | ★ agentes de programação com IA · time de agentes de IA para desenvolvimento · agente de código com IA · código aberto IA programação · desenvolvimento com múltiplos agentes |
| **de** | ★ KI-Coding-Agent · KI-Entwicklerteam · Multi-Agenten Softwareentwicklung · Open-Source KI Coding-Agent · Claude Code Team / Codex parallel |
| **fr** | ★ agent de codage IA · équipe d'agents IA pour le développement · agents de programmation multi-agents · agent IA open source · Claude Code équipe / Codex en parallèle |

Concrete placement (examples, to be written in the translation tickets, not final copy):
- **ko** H1: "당신이 이끄는 AI 개발 스쿼드" · title: `equipe — 한 사람이 이끄는 AI 코딩 에이전트 스쿼드`
- **ja** H1: 「あなたが率いるAIソフトウェアスクワッド」 · title: `equipe — 1人で率いるAIコーディングエージェントのスクワッド`
- **zh-Hans** H1: “由你带领的 AI 软件小队” · title: `equipe — 一个人带领的 AI 编程智能体小队`
- **es** H1: "Tu squad de software con IA, liderado por ti." · title: `equipe — un squad de agentes de programación con IA`
- **pt-BR** H1: "Seu squad de software com IA, liderado por você." · title: `equipe — um squad de agentes de programação com IA`
- **de** H1: „Dein KI-Software-Squad, von dir geleitet." · title: `equipe — KI-Coding-Agenten als Squad, geleitet von dir`
- **fr** H1 : « Votre squad logiciel IA, dirigé par vous. » · title : `equipe — un squad d’agents de codage IA, dirigé par vous`

Other SEO rules:
- Localized `<html lang>` values: `ko`, `ja`, `zh-Hans`, `es`, `pt-BR`, `de`, `fr`, plus matching `hreflang` pairs with `x-default` → en. (The frontend owns this; recorded here so copy and markup stay aligned.)
- Translate the FAQ questions as full natural-language questions in the same form people search them ("equipe란?", "equipe とは？", "equipe 是什么？", "¿Qué es equipe?", "O que é o equipe?", "Was ist equipe?", "Qu’est-ce qu’equipe ?"). Keep the FAQPage JSON-LD identical to the visible text.
- Keep `equipe`, `Codex` and `Claude Code` in Latin script in every title and description: users search them as Latin strings.
- Open question for the person: whether to include the localized keyword phrases in the OG title too. Default: yes, OG title = page title.

---

## 5 · Coverage check against `design/copy.md`

Verified by grep against the merged `design/copy.md`. Every concept in the v1 copy is in §1 or §2: squad, AI software squad, agent, agent loop, engine, role (+ PM, Designer, Frontend, Backend, QA, Data), member, ticket, board, single source of truth, event / immutable, branch, git worktree, isolated, sandbox, approve / approval / approval gate, accept, merge, handoff, roadmap, squad console, daemon, binary, production, OAuth, section headings and CTAs (§2.3), repository, open source, early-stage, sign in, credentials, billing, main line, MIT license, Agent Client Protocol, Codex, Claude Code, `equipe` commands.
New terms in future copy get a row in §2 in the same change.
