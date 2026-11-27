import type { ToolEntry } from './index';

// The free AI-to-website tool: paste code from any AI app, preview it on sandbox.equipe.im, publish it.
// Its per-app guides (/from-chatgpt/, /from-gemini/, /from-v0/, /from-lovable/, /from-cursor/, /from-replit/) link from the page itself.
export const TOOL: ToolEntry = {
  slug: 'publish-html',
  path: 'publish-html',
  order: 30,
  icon: 'globe',
  group: 'start',
  copy: {
    en: { name: 'AI code to website', blurb: 'Paste HTML or React from ChatGPT, Gemini, v0 or any AI app, see it working, and put it online free.', cta: 'Paste my code' },
    ko: { name: 'AI 코드를 웹사이트로', blurb: 'ChatGPT, Gemini, v0 같은 AI가 만든 HTML이나 React 코드를 붙여 넣으면 바로 미리 보고, 무료로 온라인에 올려요.', cta: '코드 붙여 넣기' },
    ja: { name: 'AIのコードをWebサイトに', blurb: 'ChatGPT、Gemini、v0などのAIが書いたHTMLやReactを貼り付けて、その場で動作を確認し、無料で公開できます。', cta: 'コードを貼り付ける' },
    'zh-CN': { name: 'AI 代码变网站', blurb: '粘贴 ChatGPT、Gemini、v0 等 AI 写的 HTML 或 React 代码，当场预览，免费上线。', cta: '粘贴代码' },
    es: { name: 'De código de IA a sitio web', blurb: 'Pega el HTML o React de ChatGPT, Gemini, v0 o cualquier IA, míralo funcionar y publícalo gratis.', cta: 'Pegar mi código' },
    'pt-BR': { name: 'Código de IA para site', blurb: 'Cole o HTML ou React do ChatGPT, Gemini, v0 ou qualquer IA, veja funcionando e publique grátis.', cta: 'Colar meu código' },
    de: { name: 'KI-Code zur Website', blurb: 'Füge HTML oder React aus ChatGPT, Gemini, v0 oder einer anderen KI ein, sieh es sofort laufen und stell es kostenlos online.', cta: 'Code einfügen' },
    fr: { name: 'Du code IA au site web', blurb: 'Collez le HTML ou React de ChatGPT, Gemini, v0 ou toute autre IA, voyez-le fonctionner et mettez-le en ligne gratuitement.', cta: 'Coller mon code' },
  },
};
