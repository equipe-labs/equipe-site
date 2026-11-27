/**
 * Website grader, second pass (2026-11-28): the words for the competitor comparison, the phone preview, real visitors'
 * speed (Chrome UX Report), the link preview check, structured data, the links we tried, impact groups, what the equipe
 * team does per fix, check again (before and after), PDF and sharing. The rest of the grader's words: grader.ts.
 * Only claim what the tool measures (cloud platform/src/free-tools.js).
 */
import type { LocaleCode } from '../i18n';

export interface GraderV2Copy {
  form: { compareOpen: string; compareLabel: string; comparePlaceholder: string; compareRemove: string; compareButton: string; errSame: string; errThem: string };
  run: { one: string; both: string; elapsed: string; slow: string };
  top: { issues: string; high: string; medium: string; low: string; up: string; down: string; same: string; recheck: string; rechecking: string; recent: string; pdf: string; share: string; shareX: string; shareIn: string; copied: string };
  compare: { title: string; you: string; them: string; ahead: string; behind: string; tie: string; yours: string; theirs: string; win: string };
  issues: { title: string; sub: string; details: string; team: string; roles: { pm: string; designer: string; engineer: string }; does: { pm: string; designer: string; engineer: string }; passed: string; showLow: string };
  phone: { title: string; alt: string; none: string };
  field: { title: string; sub: string; origin: string; none: string; lcp: string; inp: string; cls: string; fcp: string; good: string; ni: string; poor: string; lab: string; requests: string };
  preview: { title: string; sub: string; chat: string; noImage: string; missing: string; ok: string };
  schema: { title: string; sub: string; none: string; ok: string; missing: string; broken: string; other: string };
  links: { title: string; sub: string; ok: string; broken: string };
  /** Fix and check added in this pass ({n} broken blocks, {types} types missing fields). */
  fix: { title: string; text: string };
  check: string;
}

export const GRADER_V2: Partial<Record<LocaleCode, GraderV2Copy>> & { en: GraderV2Copy } = {
  en: {
    form: { compareOpen: 'Compare with a competitor', compareLabel: 'A competitor’s website', comparePlaceholder: 'competitor.com', compareRemove: 'Remove the competitor', compareButton: 'Check both', errSame: 'Enter two different websites.', errThem: 'That competitor address doesn’t look right. Try something like competitor.com.' },
    run: { one: 'Checking {host}', both: 'Checking {a} and {b}', elapsed: '{s} s', slow: 'Slow sites take up to a minute. Still working.' },
    top: { issues: 'Issues found', high: 'High impact', medium: 'Medium', low: 'Low', up: '+{n} since {date}', down: '−{n} since {date}', same: 'Same as {date}', recheck: 'Check again', rechecking: 'Checking again…', recent: 'This was checked a few minutes ago. Fix something, then check again a little later.', pdf: 'Save as PDF', share: 'Share', shareX: 'Post on X', shareIn: 'Share on LinkedIn', copied: 'Link copied' },
    compare: { title: 'You vs {host}', you: 'Your site', them: 'Competitor', ahead: 'You’re ahead in {n} of 5 areas.', behind: 'They’re ahead in {n} of 5 areas. The fixes below close the gap.', tie: 'You’re level overall.', yours: 'Your full report', theirs: 'See their full report', win: 'Ahead' },
    issues: { title: 'What to fix', sub: 'Grouped by how much each one matters. Plain words first; open Details for the technical part.', details: 'Details', team: 'Your equipe {role}', roles: { pm: 'PM', designer: 'designer', engineer: 'engineer' }, does: { pm: ' writes the words with you and puts them live.', designer: ' redesigns it and shows you before it goes live.', engineer: ' fixes it in the code, then checks the score again.' }, passed: 'Passed checks', showLow: 'Show {n} smaller fixes' },
    phone: { title: 'Your page on a phone', alt: 'Screenshot of {host} on a phone, from Google’s test', none: 'No screenshot this time.' },
    field: { title: 'Real visitors’ speed', sub: 'Chrome users over the last 28 days (Google’s Chrome UX Report).', origin: 'For your whole site: this page alone has too few visits.', none: 'Not enough Chrome visitors yet for real-world numbers. These come from one test on a phone.', lcp: 'Main content shows', inp: 'Reacts to taps', cls: 'Layout stays still', fcp: 'First thing shows', good: 'Good', ni: 'Needs work', poor: 'Slow', lab: 'Lab test on a phone', requests: 'Files loaded' },
    preview: { title: 'How your link looks when shared', sub: 'X, LinkedIn, Facebook and chat apps build this card from tags in your page.', chat: 'Chat apps', noImage: 'No share image', missing: 'Missing: {tags}', ok: 'Every share tag is there.' },
    schema: { title: 'Structured data', sub: 'Hidden labels that tell Google and AI what your business is.', none: 'None found on this page.', ok: 'Complete', missing: 'Missing {fields}', broken: '{n} block can’t be read (broken JSON).', other: 'Other' },
    links: { title: 'Links we tried', sub: 'We opened {n} links from your page, like a visitor would.', ok: 'All of them work.', broken: 'Broken' },
    fix: { title: 'Fix your structured data', text: 'Your page has structured data, but Google and AI can’t use all of it: some is broken or missing required details ({types}).' },
    check: 'Structured data is complete',
  },
  ko: {
    form: { compareOpen: '경쟁 업체와 비교하기', compareLabel: '경쟁 업체 웹사이트', comparePlaceholder: 'competitor.com', compareRemove: '경쟁 업체 빼기', compareButton: '둘 다 검사하기', errSame: '서로 다른 웹사이트 두 개를 넣어 주세요.', errThem: '경쟁 업체 주소가 올바르지 않아요. competitor.com처럼 넣어 주세요.' },
    run: { one: '{host} 검사 중', both: '{a}와 {b} 검사 중', elapsed: '{s}초', slow: '느린 사이트는 1분까지 걸려요. 계속 검사하고 있어요.' },
    top: { issues: '찾은 문제', high: '영향 큼', medium: '보통', low: '작음', up: '{date}보다 +{n}', down: '{date}보다 −{n}', same: '{date}와 같아요', recheck: '다시 검사하기', rechecking: '다시 검사하는 중…', recent: '몇 분 전에 검사했어요. 고친 뒤 조금 있다가 다시 검사해 주세요.', pdf: 'PDF로 저장', share: '공유하기', shareX: 'X에 올리기', shareIn: 'LinkedIn에 공유', copied: '링크를 복사했어요' },
    compare: { title: '내 사이트 vs {host}', you: '내 사이트', them: '경쟁 업체', ahead: '5개 항목 중 {n}개에서 앞서요.', behind: '5개 항목 중 {n}개에서 경쟁 업체가 앞서요. 아래 수정으로 따라잡을 수 있어요.', tie: '전체 점수가 같아요.', yours: '내 사이트 전체 리포트', theirs: '경쟁 업체 전체 리포트 보기', win: '앞섬' },
    issues: { title: '고칠 점', sub: '중요한 순서로 묶었어요. 쉬운 설명을 먼저 보고, 기술적인 내용은 ‘자세히’를 눌러 보세요.', details: '자세히', team: 'equipe {role}', roles: { pm: 'PM', designer: '디자이너', engineer: '엔지니어' }, does: { pm: '이 문구를 함께 정해 바로 반영해요.', designer: '가 다시 디자인하고, 올리기 전에 보여 드려요.', engineer: '가 코드에서 고치고 점수를 다시 확인해요.' }, passed: '통과한 항목', showLow: '작은 수정 {n}개 더 보기' },
    phone: { title: '휴대폰에서 본 내 페이지', alt: 'Google 테스트에서 찍은 {host}의 휴대폰 화면', none: '이번에는 화면을 찍지 못했어요.' },
    field: { title: '실제 방문자 속도', sub: '최근 28일 Chrome 사용자 기준이에요(Google Chrome UX Report).', origin: '이 페이지만으로는 방문이 적어서 사이트 전체 기준이에요.', none: '실제 방문자 데이터가 아직 부족해요. 아래는 휴대폰 테스트 한 번의 결과예요.', lcp: '주요 내용 표시', inp: '터치 반응', cls: '화면 흔들림', fcp: '첫 화면 표시', good: '좋음', ni: '개선 필요', poor: '느림', lab: '휴대폰 테스트', requests: '불러온 파일' },
    preview: { title: '링크를 공유하면 이렇게 보여요', sub: 'X, LinkedIn, Facebook, 메신저 앱은 페이지 안의 태그로 이 카드를 만들어요.', chat: '메신저 앱', noImage: '공유 이미지 없음', missing: '빠진 태그: {tags}', ok: '공유 태그가 모두 있어요.' },
    schema: { title: '구조화 데이터', sub: 'Google과 AI에게 어떤 사업인지 알려 주는 숨은 표시예요.', none: '이 페이지에서 찾지 못했어요.', ok: '빠진 것 없음', missing: '빠진 항목: {fields}', broken: '읽을 수 없는 블록 {n}개(JSON 오류)가 있어요.', other: '기타' },
    links: { title: '확인한 링크', sub: '페이지의 링크 {n}개를 방문자처럼 열어 봤어요.', ok: '모두 잘 열려요.', broken: '깨짐' },
    fix: { title: '구조화 데이터 고치기', text: '구조화 데이터가 있지만 Google과 AI가 다 쓰지는 못해요. 일부가 깨졌거나 꼭 필요한 정보가 빠졌어요({types}).' },
    check: '구조화 데이터에 빠진 것이 없어요',
  },
  ja: {
    form: { compareOpen: '競合サイトと比べる', compareLabel: '競合のウェブサイト', comparePlaceholder: 'competitor.com', compareRemove: '競合を外す', compareButton: '両方をチェック', errSame: '別々のウェブサイトを2つ入力してください。', errThem: '競合のアドレスが正しくないようです。competitor.com のように入力してください。' },
    run: { one: '{host} をチェック中', both: '{a} と {b} をチェック中', elapsed: '{s} 秒', slow: '遅いサイトは1分ほどかかります。チェックを続けています。' },
    top: { issues: '見つかった問題', high: '影響大', medium: '中', low: '小', up: '{date} から +{n}', down: '{date} から −{n}', same: '{date} と同じ', recheck: 'もう一度チェック', rechecking: 'もう一度チェック中…', recent: '数分前にチェックしたばかりです。直したあと、少し時間をおいてもう一度どうぞ。', pdf: 'PDF で保存', share: '共有', shareX: 'X に投稿', shareIn: 'LinkedIn で共有', copied: 'リンクをコピーしました' },
    compare: { title: 'あなた vs {host}', you: 'あなたのサイト', them: '競合', ahead: '5項目中 {n} 項目でリードしています。', behind: '5項目中 {n} 項目で競合がリードしています。下の改善で差を縮められます。', tie: '総合点は同じです。', yours: 'あなたのサイトの全レポート', theirs: '競合の全レポートを見る', win: 'リード' },
    issues: { title: '直すところ', sub: '影響の大きさでまとめました。まずやさしい説明を、技術的な内容は「詳細」で。', details: '詳細', team: 'equipe の{role}', roles: { pm: 'PM', designer: 'デザイナー', engineer: 'エンジニア' }, does: { pm: 'が文言を一緒に決めて公開します。', designer: 'がデザインし直し、公開前にお見せします。', engineer: 'がコードを直して、スコアを確認し直します。' }, passed: '合格した項目', showLow: '小さな改善をあと {n} 件見る' },
    phone: { title: 'スマホで見たページ', alt: 'Google のテストで撮った {host} のスマホ画面', none: '今回はスクリーンショットを撮れませんでした。' },
    field: { title: '実際の訪問者の速度', sub: '直近28日の Chrome ユーザーのデータです（Google Chrome UX Report）。', origin: 'このページだけでは訪問が少ないため、サイト全体の数値です。', none: '実際の訪問者データがまだ足りません。以下はスマホでの1回のテスト結果です。', lcp: 'メインの表示', inp: 'タップへの反応', cls: 'レイアウトの安定', fcp: '最初の表示', good: '良好', ni: '要改善', poor: '遅い', lab: 'スマホでのテスト', requests: '読み込んだファイル' },
    preview: { title: 'リンクを共有したときの見え方', sub: 'X、LinkedIn、Facebook、チャットアプリは、ページ内のタグからこのカードを作ります。', chat: 'チャットアプリ', noImage: '共有画像なし', missing: '足りないタグ：{tags}', ok: '共有用のタグはすべてそろっています。' },
    schema: { title: '構造化データ', sub: 'Google や AI にどんなビジネスかを伝える、見えないラベルです。', none: 'このページには見つかりませんでした。', ok: '不足なし', missing: '不足：{fields}', broken: '読めないブロックが {n} 個あります（JSON のエラー）。', other: 'その他' },
    links: { title: '確認したリンク', sub: 'ページ内のリンクを {n} 個、訪問者と同じように開きました。', ok: 'すべて開けました。', broken: 'リンク切れ' },
    fix: { title: '構造化データを直す', text: '構造化データはありますが、Google や AI がすべては使えません。壊れている部分や、必要な情報の不足があります（{types}）。' },
    check: '構造化データに不足がない',
  },
  'zh-CN': {
    form: { compareOpen: '和竞争对手比一比', compareLabel: '竞争对手的网站', comparePlaceholder: 'competitor.com', compareRemove: '移除竞争对手', compareButton: '一起检查', errSame: '请输入两个不同的网站。', errThem: '竞争对手的地址好像不对，请输入类似 competitor.com 的地址。' },
    run: { one: '正在检查 {host}', both: '正在检查 {a} 和 {b}', elapsed: '{s} 秒', slow: '较慢的网站最多需要一分钟，仍在检查中。' },
    top: { issues: '发现的问题', high: '影响大', medium: '中等', low: '较小', up: '比 {date} +{n}', down: '比 {date} −{n}', same: '与 {date} 相同', recheck: '重新检查', rechecking: '正在重新检查…', recent: '几分钟前刚检查过。修改之后，过一会儿再来检查。', pdf: '保存为 PDF', share: '分享', shareX: '发到 X', shareIn: '分享到 LinkedIn', copied: '链接已复制' },
    compare: { title: '你 vs {host}', you: '你的网站', them: '竞争对手', ahead: '5 个方面中你领先 {n} 个。', behind: '5 个方面中对手领先 {n} 个。按下面的建议修改就能追上。', tie: '总分持平。', yours: '你的网站完整报告', theirs: '查看对手的完整报告', win: '领先' },
    issues: { title: '要修改的地方', sub: '按重要程度分组。先看通俗说明，技术细节点“详情”。', details: '详情', team: 'equipe 的{role}', roles: { pm: '产品经理', designer: '设计师', engineer: '工程师' }, does: { pm: '会和你一起定好文案并上线。', designer: '会重新设计，上线前先给你看。', engineer: '会在代码里修好，再重新检查分数。' }, passed: '已通过的检查', showLow: '再看 {n} 个小修改' },
    phone: { title: '你的页面在手机上', alt: 'Google 测试拍下的 {host} 手机截图', none: '这次没有拍到截图。' },
    field: { title: '真实访客的速度', sub: '最近 28 天 Chrome 用户的数据（Google Chrome UX Report）。', origin: '这个页面单独的访问量太少，以下是整个网站的数据。', none: '真实访客数据还不够。以下是在手机上测试一次的结果。', lcp: '主要内容显示', inp: '点按响应', cls: '页面不跳动', fcp: '首次显示', good: '良好', ni: '需改进', poor: '慢', lab: '手机测试', requests: '加载的文件' },
    preview: { title: '分享链接时的样子', sub: 'X、LinkedIn、Facebook 和聊天应用会用页面里的标签生成这张卡片。', chat: '聊天应用', noImage: '没有分享图片', missing: '缺少：{tags}', ok: '分享标签都齐了。' },
    schema: { title: '结构化数据', sub: '告诉 Google 和 AI 你是什么生意的隐藏标签。', none: '这个页面没有找到。', ok: '完整', missing: '缺少 {fields}', broken: '有 {n} 个数据块无法读取（JSON 错误）。', other: '其他' },
    links: { title: '我们打开的链接', sub: '像访客一样打开了页面上的 {n} 个链接。', ok: '全部可以打开。', broken: '失效' },
    fix: { title: '修好结构化数据', text: '页面有结构化数据，但 Google 和 AI 用不了全部：有的已损坏，或缺少必要信息（{types}）。' },
    check: '结构化数据完整',
  },
  es: {
    form: { compareOpen: 'Comparar con un competidor', compareLabel: 'La web de un competidor', comparePlaceholder: 'competidor.com', compareRemove: 'Quitar el competidor', compareButton: 'Revisar las dos', errSame: 'Escribe dos webs distintas.', errThem: 'La dirección del competidor no parece correcta. Prueba algo como competidor.com.' },
    run: { one: 'Revisando {host}', both: 'Revisando {a} y {b}', elapsed: '{s} s', slow: 'Las webs lentas tardan hasta un minuto. Seguimos revisando.' },
    top: { issues: 'Problemas encontrados', high: 'Impacto alto', medium: 'Medio', low: 'Bajo', up: '+{n} desde el {date}', down: '−{n} desde el {date}', same: 'Igual que el {date}', recheck: 'Revisar de nuevo', rechecking: 'Revisando de nuevo…', recent: 'La revisamos hace unos minutos. Arregla algo y vuelve a revisarla un poco más tarde.', pdf: 'Guardar como PDF', share: 'Compartir', shareX: 'Publicar en X', shareIn: 'Compartir en LinkedIn', copied: 'Enlace copiado' },
    compare: { title: 'Tú vs {host}', you: 'Tu web', them: 'Competidor', ahead: 'Vas por delante en {n} de 5 áreas.', behind: 'Ellos van por delante en {n} de 5 áreas. Los arreglos de abajo cierran la brecha.', tie: 'Estáis empatados en la nota general.', yours: 'Tu informe completo', theirs: 'Ver su informe completo', win: 'Delante' },
    issues: { title: 'Qué arreglar', sub: 'Agrupado por lo que importa cada cosa. Primero en palabras sencillas; abre Detalles para la parte técnica.', details: 'Detalles', team: 'Tu {role} de equipe', roles: { pm: 'PM', designer: 'diseñador', engineer: 'ingeniero' }, does: { pm: ' escribe los textos contigo y los publica.', designer: ' lo rediseña y te lo enseña antes de publicarlo.', engineer: ' lo arregla en el código y vuelve a medir la nota.' }, passed: 'Revisiones superadas', showLow: 'Ver {n} arreglos menores' },
    phone: { title: 'Tu página en un móvil', alt: 'Captura de {host} en un móvil, de la prueba de Google', none: 'Esta vez no hay captura.' },
    field: { title: 'Velocidad para visitantes reales', sub: 'Usuarios de Chrome en los últimos 28 días (Chrome UX Report de Google).', origin: 'Para toda tu web: esta página sola tiene pocas visitas.', none: 'Aún no hay suficientes visitantes de Chrome para datos reales. Estos vienen de una prueba en móvil.', lcp: 'Contenido principal', inp: 'Respuesta al tocar', cls: 'Diseño estable', fcp: 'Primer contenido', good: 'Bien', ni: 'Mejorable', poor: 'Lento', lab: 'Prueba en móvil', requests: 'Archivos cargados' },
    preview: { title: 'Cómo se ve tu enlace al compartirlo', sub: 'X, LinkedIn, Facebook y las apps de chat crean esta tarjeta con etiquetas de tu página.', chat: 'Apps de chat', noImage: 'Sin imagen para compartir', missing: 'Faltan: {tags}', ok: 'Están todas las etiquetas para compartir.' },
    schema: { title: 'Datos estructurados', sub: 'Etiquetas ocultas que le dicen a Google y a la IA qué es tu negocio.', none: 'No encontramos ninguno en esta página.', ok: 'Completo', missing: 'Falta {fields}', broken: '{n} bloque no se puede leer (JSON roto).', other: 'Otros' },
    links: { title: 'Enlaces que probamos', sub: 'Abrimos {n} enlaces de tu página, como un visitante.', ok: 'Todos funcionan.', broken: 'Roto' },
    fix: { title: 'Arregla tus datos estructurados', text: 'Tu página tiene datos estructurados, pero Google y la IA no pueden usarlos todos: hay partes rotas o faltan datos obligatorios ({types}).' },
    check: 'Los datos estructurados están completos',
  },
  'pt-BR': {
    form: { compareOpen: 'Comparar com um concorrente', compareLabel: 'O site de um concorrente', comparePlaceholder: 'concorrente.com', compareRemove: 'Remover o concorrente', compareButton: 'Avaliar os dois', errSame: 'Digite dois sites diferentes.', errThem: 'O endereço do concorrente não parece certo. Tente algo como concorrente.com.' },
    run: { one: 'Avaliando {host}', both: 'Avaliando {a} e {b}', elapsed: '{s} s', slow: 'Sites lentos levam até um minuto. Ainda estamos avaliando.' },
    top: { issues: 'Problemas encontrados', high: 'Impacto alto', medium: 'Médio', low: 'Baixo', up: '+{n} desde {date}', down: '−{n} desde {date}', same: 'Igual a {date}', recheck: 'Avaliar de novo', rechecking: 'Avaliando de novo…', recent: 'Este site foi avaliado há poucos minutos. Corrija algo e avalie de novo um pouco mais tarde.', pdf: 'Salvar em PDF', share: 'Compartilhar', shareX: 'Postar no X', shareIn: 'Compartilhar no LinkedIn', copied: 'Link copiado' },
    compare: { title: 'Você vs {host}', you: 'Seu site', them: 'Concorrente', ahead: 'Você está à frente em {n} de 5 áreas.', behind: 'Eles estão à frente em {n} de 5 áreas. As correções abaixo diminuem a diferença.', tie: 'Vocês empatam na nota geral.', yours: 'Seu relatório completo', theirs: 'Ver o relatório completo deles', win: 'À frente' },
    issues: { title: 'O que corrigir', sub: 'Agrupado pelo quanto cada item importa. Primeiro em palavras simples; abra Detalhes para a parte técnica.', details: 'Detalhes', team: 'Seu {role} da equipe', roles: { pm: 'PM', designer: 'designer', engineer: 'engenheiro' }, does: { pm: ' escreve os textos com você e coloca no ar.', designer: ' refaz o design e mostra a você antes de publicar.', engineer: ' corrige no código e confere a nota de novo.' }, passed: 'Verificações aprovadas', showLow: 'Ver mais {n} correções menores' },
    phone: { title: 'Sua página no celular', alt: 'Captura de {host} no celular, do teste do Google', none: 'Desta vez não há captura.' },
    field: { title: 'Velocidade para visitantes reais', sub: 'Usuários do Chrome nos últimos 28 dias (Chrome UX Report do Google).', origin: 'Para o site inteiro: só esta página tem poucas visitas.', none: 'Ainda não há visitantes do Chrome suficientes para dados reais. Estes vêm de um teste no celular.', lcp: 'Conteúdo principal', inp: 'Resposta ao toque', cls: 'Layout estável', fcp: 'Primeiro conteúdo', good: 'Bom', ni: 'Precisa melhorar', poor: 'Lento', lab: 'Teste no celular', requests: 'Arquivos carregados' },
    preview: { title: 'Como seu link aparece ao ser compartilhado', sub: 'X, LinkedIn, Facebook e apps de mensagem montam este cartão com tags da sua página.', chat: 'Apps de mensagem', noImage: 'Sem imagem de compartilhamento', missing: 'Faltam: {tags}', ok: 'Todas as tags de compartilhamento estão lá.' },
    schema: { title: 'Dados estruturados', sub: 'Marcações ocultas que dizem ao Google e à IA o que é o seu negócio.', none: 'Nenhum encontrado nesta página.', ok: 'Completo', missing: 'Falta {fields}', broken: '{n} bloco não pode ser lido (JSON quebrado).', other: 'Outros' },
    links: { title: 'Links que testamos', sub: 'Abrimos {n} links da sua página, como um visitante.', ok: 'Todos funcionam.', broken: 'Quebrado' },
    fix: { title: 'Corrija seus dados estruturados', text: 'Sua página tem dados estruturados, mas o Google e a IA não conseguem usar tudo: há partes quebradas ou faltam dados obrigatórios ({types}).' },
    check: 'Os dados estruturados estão completos',
  },
  de: {
    form: { compareOpen: 'Mit einem Wettbewerber vergleichen', compareLabel: 'Website eines Wettbewerbers', comparePlaceholder: 'wettbewerber.de', compareRemove: 'Wettbewerber entfernen', compareButton: 'Beide prüfen', errSame: 'Gib zwei verschiedene Websites ein.', errThem: 'Die Adresse des Wettbewerbers sieht nicht richtig aus. Versuch es mit etwas wie wettbewerber.de.' },
    run: { one: 'Prüfe {host}', both: 'Prüfe {a} und {b}', elapsed: '{s} s', slow: 'Langsame Websites brauchen bis zu einer Minute. Wir prüfen noch.' },
    top: { issues: 'Gefundene Probleme', high: 'Große Wirkung', medium: 'Mittel', low: 'Gering', up: '+{n} seit {date}', down: '−{n} seit {date}', same: 'Gleich wie am {date}', recheck: 'Erneut prüfen', rechecking: 'Wird erneut geprüft…', recent: 'Die Seite wurde gerade erst geprüft. Verbessere etwas und prüfe etwas später noch einmal.', pdf: 'Als PDF speichern', share: 'Teilen', shareX: 'Auf X posten', shareIn: 'Auf LinkedIn teilen', copied: 'Link kopiert' },
    compare: { title: 'Du vs {host}', you: 'Deine Website', them: 'Wettbewerber', ahead: 'Du liegst in {n} von 5 Bereichen vorn.', behind: 'Sie liegen in {n} von 5 Bereichen vorn. Die Verbesserungen unten holen das auf.', tie: 'Gesamt liegt ihr gleichauf.', yours: 'Dein vollständiger Bericht', theirs: 'Ihren vollständigen Bericht ansehen', win: 'Vorn' },
    issues: { title: 'Was du verbessern solltest', sub: 'Nach Wirkung gruppiert. Zuerst in einfachen Worten, unter Details das Technische.', details: 'Details', team: 'Dein equipe-{role}', roles: { pm: 'PM', designer: 'Design', engineer: 'Engineering' }, does: { pm: ' schreibt die Texte mit dir und stellt sie online.', designer: ' gestaltet es neu und zeigt es dir vor dem Livegang.', engineer: ' behebt es im Code und prüft die Punktzahl erneut.' }, passed: 'Bestandene Prüfungen', showLow: '{n} kleinere Verbesserungen zeigen' },
    phone: { title: 'Deine Seite auf dem Handy', alt: 'Screenshot von {host} auf dem Handy, aus dem Google-Test', none: 'Diesmal gibt es keinen Screenshot.' },
    field: { title: 'Tempo für echte Besucher', sub: 'Chrome-Nutzer der letzten 28 Tage (Chrome UX Report von Google).', origin: 'Für die ganze Website: Diese Seite allein hat zu wenige Besuche.', none: 'Noch nicht genug Chrome-Besucher für echte Werte. Diese Zahlen stammen aus einem Test auf dem Handy.', lcp: 'Hauptinhalt sichtbar', inp: 'Reaktion auf Tippen', cls: 'Layout bleibt ruhig', fcp: 'Erster Inhalt', good: 'Gut', ni: 'Verbesserbar', poor: 'Langsam', lab: 'Test auf dem Handy', requests: 'Geladene Dateien' },
    preview: { title: 'So sieht dein Link beim Teilen aus', sub: 'X, LinkedIn, Facebook und Chat-Apps bauen diese Karte aus Tags in deiner Seite.', chat: 'Chat-Apps', noImage: 'Kein Vorschaubild', missing: 'Es fehlt: {tags}', ok: 'Alle Tags zum Teilen sind da.' },
    schema: { title: 'Strukturierte Daten', sub: 'Unsichtbare Angaben, die Google und KI sagen, was dein Unternehmen ist.', none: 'Auf dieser Seite nicht gefunden.', ok: 'Vollständig', missing: 'Es fehlt {fields}', broken: '{n} Block ist nicht lesbar (fehlerhaftes JSON).', other: 'Weitere' },
    links: { title: 'Geprüfte Links', sub: 'Wir haben {n} Links deiner Seite geöffnet, wie ein Besucher.', ok: 'Alle funktionieren.', broken: 'Defekt' },
    fix: { title: 'Strukturierte Daten reparieren', text: 'Deine Seite hat strukturierte Daten, aber Google und KI können nicht alles nutzen: Manches ist fehlerhaft oder es fehlen Pflichtangaben ({types}).' },
    check: 'Strukturierte Daten sind vollständig',
  },
  fr: {
    form: { compareOpen: 'Comparer avec un concurrent', compareLabel: 'Le site d’un concurrent', comparePlaceholder: 'concurrent.fr', compareRemove: 'Retirer le concurrent', compareButton: 'Vérifier les deux', errSame: 'Saisissez deux sites différents.', errThem: 'L’adresse du concurrent ne semble pas correcte. Essayez par exemple concurrent.fr.' },
    run: { one: 'Vérification de {host}', both: 'Vérification de {a} et {b}', elapsed: '{s} s', slow: 'Les sites lents prennent jusqu’à une minute. On continue.' },
    top: { issues: 'Problèmes trouvés', high: 'Impact fort', medium: 'Moyen', low: 'Faible', up: '+{n} depuis le {date}', down: '−{n} depuis le {date}', same: 'Comme le {date}', recheck: 'Vérifier à nouveau', rechecking: 'Nouvelle vérification…', recent: 'Ce site vient d’être vérifié. Corrigez quelque chose, puis revérifiez un peu plus tard.', pdf: 'Enregistrer en PDF', share: 'Partager', shareX: 'Publier sur X', shareIn: 'Partager sur LinkedIn', copied: 'Lien copié' },
    compare: { title: 'Vous vs {host}', you: 'Votre site', them: 'Concurrent', ahead: 'Vous êtes devant dans {n} domaines sur 5.', behind: 'Ils sont devant dans {n} domaines sur 5. Les corrections ci-dessous réduisent l’écart.', tie: 'Vous êtes à égalité au global.', yours: 'Votre rapport complet', theirs: 'Voir leur rapport complet', win: 'Devant' },
    issues: { title: 'À corriger', sub: 'Regroupé selon l’importance. D’abord en termes simples ; ouvrez Détails pour la partie technique.', details: 'Détails', team: 'Votre {role} equipe', roles: { pm: 'PM', designer: 'designer', engineer: 'ingénieur' }, does: { pm: ' rédige les textes avec vous et les met en ligne.', designer: ' le redessine et vous le montre avant la mise en ligne.', engineer: ' le corrige dans le code, puis revérifie la note.' }, passed: 'Vérifications réussies', showLow: 'Voir {n} corrections mineures' },
    phone: { title: 'Votre page sur un téléphone', alt: 'Capture de {host} sur téléphone, issue du test de Google', none: 'Pas de capture cette fois.' },
    field: { title: 'Vitesse pour les vrais visiteurs', sub: 'Utilisateurs de Chrome sur les 28 derniers jours (Chrome UX Report de Google).', origin: 'Pour tout votre site : cette page seule a trop peu de visites.', none: 'Pas encore assez de visiteurs Chrome pour des chiffres réels. Ceux-ci viennent d’un test sur téléphone.', lcp: 'Contenu principal', inp: 'Réaction au toucher', cls: 'Mise en page stable', fcp: 'Premier affichage', good: 'Bon', ni: 'À améliorer', poor: 'Lent', lab: 'Test sur téléphone', requests: 'Fichiers chargés' },
    preview: { title: 'Votre lien une fois partagé', sub: 'X, LinkedIn, Facebook et les messageries créent cette carte à partir de balises de votre page.', chat: 'Messageries', noImage: 'Pas d’image de partage', missing: 'Manquant : {tags}', ok: 'Toutes les balises de partage sont là.' },
    schema: { title: 'Données structurées', sub: 'Des balises invisibles qui disent à Google et à l’IA ce qu’est votre entreprise.', none: 'Aucune trouvée sur cette page.', ok: 'Complet', missing: 'Manque {fields}', broken: '{n} bloc illisible (JSON cassé).', other: 'Autres' },
    links: { title: 'Liens testés', sub: 'Nous avons ouvert {n} liens de votre page, comme un visiteur.', ok: 'Ils fonctionnent tous.', broken: 'Cassé' },
    fix: { title: 'Corrigez vos données structurées', text: 'Votre page a des données structurées, mais Google et l’IA ne peuvent pas tout utiliser : certaines sont cassées ou il manque des informations obligatoires ({types}).' },
    check: 'Les données structurées sont complètes',
  },
};
export const graderV2 = (code: LocaleCode): GraderV2Copy => GRADER_V2[code] ?? GRADER_V2.en;

/** Who on the equipe team fixes what (by fix key): words are the PM's, looks the designer's, the rest the engineers'. */
export const FIX_ROLE: Record<string, 'pm' | 'designer' | 'engineer'> = {
  title_missing: 'pm', description_missing: 'pm', thin_content: 'pm', answers: 'pm', title_length: 'pm', description_length: 'pm', h1_missing: 'pm', many_h1: 'pm',
  contrast: 'designer', alt_text: 'designer', share_image: 'designer', layout_shift: 'designer', viewport: 'designer', image_sizes: 'designer', button_names: 'designer', form_labels: 'designer',
};
