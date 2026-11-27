import type { ToolEntry } from './index';

export const TOOL: ToolEntry = {
  slug: 'grader',
  path: 'grader',
  order: 10,
  icon: 'gauge',
  group: 'site',
  copy: {
    en: { name: 'Website grader', blurb: 'Score your site for speed, search, mobile, accessibility and AI, with the 5 fixes that matter most.', cta: 'Check my website' },
    ko: { name: '웹사이트 점수 검사', blurb: '속도, 검색, 모바일, 접근성, AI 항목으로 사이트 점수를 매기고, 가장 중요한 수정 5가지를 알려드려요.', cta: '내 웹사이트 검사하기' },
    ja: { name: 'ウェブサイト採点', blurb: '速度・検索・スマホ・アクセシビリティ・AI の観点でサイトを採点し、いちばん大事な改善点を5つお伝えします。', cta: 'サイトをチェックする' },
    'zh-CN': { name: '网站评分', blurb: '从速度、搜索、手机端、无障碍和 AI 五方面给网站打分，并告诉你最重要的 5 项修改。', cta: '检查我的网站' },
    es: { name: 'Evaluador de webs', blurb: 'Puntúa tu web en velocidad, buscadores, móvil, accesibilidad e IA, con los 5 arreglos que más importan.', cta: 'Revisar mi web' },
    'pt-BR': { name: 'Avaliador de sites', blurb: 'Dê nota ao seu site em velocidade, busca, celular, acessibilidade e IA, com as 5 correções que mais importam.', cta: 'Avaliar meu site' },
    de: { name: 'Website-Check', blurb: 'Bewerte deine Website nach Tempo, Suche, Mobil, Barrierefreiheit und KI, mit den 5 wichtigsten Verbesserungen.', cta: 'Meine Website prüfen' },
    fr: { name: 'Note de site web', blurb: 'Notez votre site sur la vitesse, la recherche, le mobile, l’accessibilité et l’IA, avec les 5 corrections qui comptent le plus.', cta: 'Vérifier mon site' },
  },
};
