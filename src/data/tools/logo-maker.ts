// The logo maker's card on the free tools hub (/tools/). Page copy: src/data/logo.ts.
import type { ToolEntry } from './index';

export const TOOL: ToolEntry = {
  slug: 'logo-maker',
  path: 'logo-maker',
  order: 35,
  icon: 'palette',
  group: 'start',
  copy: {
    en: { name: 'Logo maker', blurb: 'Clean logo ideas for your business in a minute, your name always spelled right, and a free brand kit to download.', cta: 'Make a logo' },
    ko: { name: '로고 만들기', blurb: '1분 만에 깔끔한 로고 시안을 받고, 이름은 철자가 틀리지 않게, 브랜드 키트까지 무료로 내려받아요.', cta: '로고 만들기' },
    ja: { name: 'ロゴ作成', blurb: '1分できれいなロゴ案を。店名は必ず正しい綴りで、ブランドキットも無料でダウンロードできます。', cta: 'ロゴを作る' },
    'zh-CN': { name: 'Logo 设计', blurb: '一分钟拿到干净的 Logo 方案，店名拼写永远正确，还能免费下载品牌套件。', cta: '做个 Logo' },
    es: { name: 'Creador de logos', blurb: 'Ideas de logo limpias para tu negocio en un minuto, tu nombre siempre bien escrito y un kit de marca gratis.', cta: 'Crear un logo' },
    'pt-BR': { name: 'Criador de logo', blurb: 'Ideias de logo limpas para o seu negócio em um minuto, o nome sempre escrito certo e um kit de marca grátis.', cta: 'Criar um logo' },
    de: { name: 'Logo-Generator', blurb: 'Saubere Logo-Ideen für dein Unternehmen in einer Minute, dein Name immer richtig geschrieben, und ein kostenloses Brand-Kit.', cta: 'Logo erstellen' },
    fr: { name: 'Créateur de logo', blurb: 'Des idées de logo nettes pour votre activité en une minute, votre nom toujours bien écrit, et un kit de marque gratuit.', cta: 'Créer un logo' },
  },
};
