import type { ToolEntry } from './index';

export const TOOL: ToolEntry = {
  slug: 'ai-visibility',
  path: 'ai-visibility',
  order: 20,
  icon: 'sparkles',
  group: 'ai',
  copy: {
    en: { name: 'Does ChatGPT know my business?', blurb: 'Ask ChatGPT and Claude what your customers ask, and see whether they name you and what to fix.', cta: 'Check AI visibility' },
    ko: { name: 'ChatGPT가 내 가게를 알까요?', blurb: '손님들이 묻는 질문을 ChatGPT와 Claude에게 직접 물어보고, 내 이름이 나오는지와 고칠 점을 확인해요.', cta: 'AI 노출 확인하기' },
    ja: { name: 'ChatGPT はあなたのお店を知っている？', blurb: 'お客さまがする質問を ChatGPT と Claude に聞いて、名前が挙がるか、何を直せばいいかを確認します。', cta: 'AI での見え方をチェック' },
    'zh-CN': { name: 'ChatGPT 认识我的店吗？', blurb: '用顾客会问的问题去问 ChatGPT 和 Claude，看看它们会不会提到你，以及该改进什么。', cta: '检查 AI 可见度' },
    es: { name: '¿ChatGPT conoce mi negocio?', blurb: 'Pregunta a ChatGPT y Claude lo mismo que tus clientes y descubre si te mencionan y qué mejorar.', cta: 'Ver mi visibilidad en IA' },
    'pt-BR': { name: 'O ChatGPT conhece meu negócio?', blurb: 'Pergunte ao ChatGPT e ao Claude o que seus clientes perguntam e veja se eles citam você e o que melhorar.', cta: 'Ver minha visibilidade em IA' },
    de: { name: 'Kennt ChatGPT mein Unternehmen?', blurb: 'Stell ChatGPT und Claude die Fragen deiner Kunden und sieh, ob sie dich nennen und was du verbessern kannst.', cta: 'KI-Sichtbarkeit prüfen' },
    fr: { name: 'ChatGPT connaît-il mon entreprise ?', blurb: 'Posez à ChatGPT et Claude les questions de vos clients, et voyez s’ils vous citent et quoi améliorer.', cta: 'Vérifier ma visibilité IA' },
  },
};
