import type { ToolEntry } from './index';

// Website guides by business type (/websites/): what each kind of site needs, plus a ready-made brief.
// Data and pages: src/data/industries/, src/pages/[...locale]/websites/.
export const TOOL: ToolEntry = {
  slug: 'industry-websites',
  path: 'websites',
  order: 40,
  icon: 'globe',
  group: 'start',
  copy: {
    en: { name: 'Website guides by business', blurb: 'What a restaurant, salon, studio, clinic, tutor or nonprofit site needs, with a brief to build yours.', cta: 'Find my business' },
    ko: { name: '업종별 홈페이지 가이드', blurb: '식당, 미용실, 필라테스, 치과, 학원, 비영리단체 홈페이지에 꼭 필요한 것과 바로 쓰는 요청서.', cta: '내 업종 찾기' },
    ja: { name: '業種別ホームページガイド', blurb: '飲食店、美容室、スタジオ、歯科医院、塾、NPOのホームページに必要なものと、そのまま使える依頼文。', cta: '自分の業種を探す' },
    'zh-CN': { name: '按行业的网站指南', blurb: '餐厅、面包店、摄影师的网站需要什么，以及一份可以直接用的需求说明。', cta: '找到我的行业' },
    es: { name: 'Guías de web por negocio', blurb: 'Qué necesita la web de un restaurante, peluquería, estudio, clínica, academia u ONG, con un brief para crear la tuya.', cta: 'Buscar mi negocio' },
    'pt-BR': { name: 'Guias de site por negócio', blurb: 'O que o site de um restaurante, salão, pet shop, consultório, professor ou ONG precisa, com um briefing para criar o seu.', cta: 'Achar meu negócio' },
    de: { name: 'Website-Leitfäden nach Branche', blurb: 'Was die Website eines Restaurants, Friseurs, Studios, einer Praxis, Nachhilfe oder eines Vereins braucht, mit Briefing.', cta: 'Meine Branche finden' },
    fr: { name: 'Guides de site par métier', blurb: 'Ce dont le site d’un restaurant, salon, cabinet, soutien scolaire ou d’une association a besoin, avec un brief prêt à l’emploi.', cta: 'Trouver mon métier' },
  },
};
