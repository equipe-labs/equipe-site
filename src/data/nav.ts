/** Header copy that is not in the per-locale message files: the Examples and Resources labels, the main call to action and the one-line descriptions in the Resources menu. */
import type { LocaleCode } from '../i18n';

export interface NavCopy {
  examples: string; resources: string; start: string;
  desc: { blog: string; security: string; facts: string; changelog: string; developers: string };
}

export const NAV: Record<LocaleCode, NavCopy> = {
  en: { examples: 'Examples', resources: 'Resources', start: 'Start building', desc: { blog: 'Guides and notes from the team', security: 'How equipe keeps your work safe', facts: 'Plain answers and numbers', changelog: "What's new, release by release", developers: 'The open-source engine' } },
  ko: { examples: '예시', resources: '리소스', start: '만들어 보기', desc: { blog: '팀이 쓰는 가이드와 이야기', security: '내 작업을 안전하게 지키는 방법', facts: '숫자로 보는 솔직한 답', changelog: '릴리스마다 달라진 점', developers: '오픈소스 엔진' } },
  es: { examples: 'Ejemplos', resources: 'Recursos', start: 'Empieza a crear', desc: { blog: 'Guías y notas del equipo', security: 'Cómo protege equipe tu trabajo', facts: 'Respuestas claras y cifras', changelog: 'Novedades, versión a versión', developers: 'El motor de código abierto' } },
  de: { examples: 'Beispiele', resources: 'Ressourcen', start: 'Loslegen', desc: { blog: 'Anleitungen und Notizen vom Team', security: 'So schützt equipe deine Arbeit', facts: 'Klare Antworten und Zahlen', changelog: 'Neuigkeiten, Version für Version', developers: 'Die Open-Source-Engine' } },
  fr: { examples: 'Exemples', resources: 'Ressources', start: 'Commencer à créer', desc: { blog: 'Guides et notes de l’équipe', security: 'Comment equipe protège votre travail', facts: 'Réponses claires et chiffres', changelog: 'Les nouveautés, version après version', developers: 'Le moteur open source' } },
  ja: { examples: '事例', resources: 'リソース', start: '作り始める', desc: { blog: 'チームのガイドとノート', security: 'equipeが作業を守る仕組み', facts: 'わかりやすい答えと数字', changelog: 'リリースごとの新機能', developers: 'オープンソースのエンジン' } },
  'zh-CN': { examples: '示例', resources: '资源', start: '开始搭建', desc: { blog: '团队的指南与笔记', security: 'equipe 如何保护你的工作', facts: '清晰的答案与数据', changelog: '每次发布的新变化', developers: '开源引擎' } },
  'pt-BR': { examples: 'Exemplos', resources: 'Recursos', start: 'Começar a criar', desc: { blog: 'Guias e notas da equipe', security: 'Como a equipe protege seu trabalho', facts: 'Respostas claras e números', changelog: 'Novidades, versão a versão', developers: 'O motor de código aberto' } },
};
