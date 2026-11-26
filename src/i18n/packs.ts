// Words for the credit packs strip on /pricing (src/components/PackStrip.astro), in the site's 8 locales.
// Placeholders: {extra} {credits}.
import type { LocaleCode } from './locales';

export interface PackWords { title: string; text: string; best: string; gets: string; popular: string; cta: string; note: string }

export const PACK_WORDS: Record<string, PackWords> = {
  en: { title: 'Credit packs', text: 'Buy credits once, no subscription. They last 12 months.', best: 'Best value · {extra} extra', gets: '{credits} in credits', popular: 'Most teams start here', cta: 'Buy credits', note: 'The bonus credits last as long as the pack. A Black Friday bonus and the volume bonus don’t add up: you get the larger one.' },
  ko: { title: '크레딧 팩', text: '구독 없이 한 번만 결제해요. 크레딧은 12개월 동안 쓸 수 있어요.', best: '최고 가성비 · {extra} 더', gets: '크레딧 {credits}', popular: '가장 많이 시작하는 금액', cta: '크레딧 충전', note: '보너스 크레딧도 팩과 같은 기간 동안 쓸 수 있어요. 블랙 프라이데이 보너스와 대량 구매 보너스는 겹치지 않고, 더 큰 쪽이 적용돼요.' },
  ja: { title: 'クレジットパック', text: 'サブスクなしの一回払い。クレジットは12か月使えます。', best: 'いちばんお得 · {extra} 追加', gets: 'クレジット {credits}', popular: 'いちばん多く選ばれている金額', cta: 'クレジットを購入', note: 'ボーナスクレジットの有効期限はパックと同じです。ブラックフライデーのボーナスとまとめ買いボーナスは重ならず、大きいほうが適用されます。' },
  'zh-CN': { title: '点数包', text: '一次性购买，无需订阅。点数有效期 12 个月。', best: '最划算 · 多送 {extra}', gets: '{credits} 点数', popular: '大多数团队从这里开始', cta: '购买点数', note: '奖励点数的有效期与点数包相同。黑色星期五奖励与批量购买奖励不叠加，取较大的一项。' },
  es: { title: 'Paquetes de créditos', text: 'Pagas una vez, sin suscripción. Los créditos duran 12 meses.', best: 'Mejor precio · {extra} extra', gets: '{credits} en créditos', popular: 'La mayoría empieza aquí', cta: 'Comprar créditos', note: 'Los créditos de bono duran lo mismo que el paquete. El bono de Black Friday y el bono por volumen no se suman: recibes el mayor.' },
  'pt-BR': { title: 'Pacotes de créditos', text: 'Pague uma vez, sem assinatura. Os créditos valem por 12 meses.', best: 'Melhor custo · {extra} a mais', gets: '{credits} em créditos', popular: 'A maioria começa aqui', cta: 'Comprar créditos', note: 'Os créditos de bônus valem pelo mesmo tempo que o pacote. O bônus de Black Friday e o bônus por volume não se somam: vale o maior.' },
  de: { title: 'Guthaben-Pakete', text: 'Einmal kaufen, kein Abo. Guthaben gilt 12 Monate.', best: 'Bester Preis · {extra} extra', gets: '{credits} Guthaben', popular: 'Damit starten die meisten', cta: 'Guthaben kaufen', note: 'Bonusguthaben gilt so lange wie das Paket. Black-Friday-Bonus und Mengenbonus addieren sich nicht: Du bekommst den größeren.' },
  fr: { title: 'Packs de crédits', text: 'Un seul paiement, sans abonnement. Les crédits sont valables 12 mois.', best: 'Meilleur prix · {extra} offerts', gets: '{credits} de crédits', popular: 'Le choix de la plupart', cta: 'Acheter des crédits', note: 'Les crédits bonus sont valables aussi longtemps que le pack. Le bonus Black Friday et le bonus de volume ne s’additionnent pas : vous recevez le plus élevé.' },
};
export const packWords = (code: LocaleCode | string): PackWords => PACK_WORDS[code] || PACK_WORDS.en;
