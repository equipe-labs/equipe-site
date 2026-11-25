// Words for the Black Friday 2026 promotion (banner on the home page and /pricing, the yearly price on the plan card).
// Prices come from src/data/plan.ts (PROMO, YEARLY); {first} {year} {mo} {month} {pct} {cap} {date} {time} are filled in.
// Sentence case only.
import type { LocaleCode } from './locales';

export interface PromoWords {
  label: string;
  title: string;
  text: string;
  cta: string;
  hide: string;
  endsIn: string;
  endsAt: string;
  endFallback: string;
  cdD: string;
  cdH: string;
  badge: string;
  billedPromo: string;
  billedStd: string;
  plus: string;
  terms: string;
}

export const PROMO_WORDS: Record<LocaleCode, PromoWords> = {
  en: {
    label: 'Black Friday',
    title: 'Black Friday: the yearly Team plan for {first} your first year',
    text: 'That is {mo} a month instead of {month}. Plus {pct}% more credits on any credit pack or new monthly credits.',
    cta: 'See the yearly price', hide: 'Hide', endsIn: 'Ends in {time}', endsAt: 'Ends {date}', endFallback: 'Dec 1, 11:59 PM PT',
    cdD: '{d}d {h}h {m}m', cdH: '{h}h {m}m', badge: 'Black Friday',
    billedPromo: 'Billed {first} today for the first year, then {year} a year.', billedStd: 'Billed {year} a year.', plus: 'Plus {credits} of credits a month, billed monthly.',
    terms: 'Black Friday terms: {first} covers the first year only, then {year} a year; no surprise renewal. +{pct}% bonus credits on credit packs and on new monthly credits (their first 3 months), with the same expiry as the credits they come with, up to {cap} of bonus per team. One yearly offer per team; new and existing customers. Ends {date}.',
  },
  ko: {
    label: '블랙프라이데이',
    title: '블랙프라이데이: 연간 팀 플랜 첫해 {first}',
    text: '한 달 {month} 대신 {mo}예요. 크레딧 충전이나 새 월 크레딧에는 크레딧을 {pct}% 더 드려요.',
    cta: '연간 가격 보기', hide: '숨기기', endsIn: '{time} 남음', endsAt: '{date}에 끝나요', endFallback: '태평양 시간 12월 1일 오후 11:59',
    cdD: '{d}일 {h}시간 {m}분', cdH: '{h}시간 {m}분', badge: '블랙프라이데이',
    billedPromo: '오늘 첫해 {first} 결제, 그다음부터 연 {year}.', billedStd: '연 {year} 결제.', plus: '여기에 매달 크레딧 {credits}가 월마다 결제돼요.',
    terms: '블랙프라이데이 조건: {first}는 첫해에만 적용되고 그다음부터 연 {year}예요. 갱신 전에 알려 드려요. 크레딧 충전과 새 월 크레딧(처음 3개월)에 보너스 크레딧 +{pct}%, 함께 받은 크레딧과 유효 기간이 같고 팀당 보너스는 최대 {cap}까지예요. 연간 할인은 팀당 한 번이고, 신규·기존 고객 모두 받을 수 있어요. {date}에 끝나요.',
  },
  ja: {
    label: 'ブラックフライデー',
    title: 'ブラックフライデー：年払いチームプラン、初年度 {first}',
    text: '月 {month} のところ月 {mo} です。さらにクレジットパックと新しい毎月のクレジットは {pct}% 増量。',
    cta: '年払いの料金を見る', hide: '閉じる', endsIn: '残り {time}', endsAt: '{date} まで', endFallback: '太平洋時間 12月1日 午後11:59',
    cdD: '{d}日{h}時間{m}分', cdH: '{h}時間{m}分', badge: 'ブラックフライデー',
    billedPromo: '本日 初年度 {first} を請求、その後は年 {year}。', billedStd: '年 {year} を請求。', plus: 'これに加えて毎月 {credits} 分のクレジットを毎月請求します。',
    terms: 'ブラックフライデーの条件：{first} は初年度のみ、その後は年 {year} です（更新前にお知らせします）。クレジットパックと新しい毎月のクレジット（最初の3か月）にボーナス +{pct}%、有効期限は一緒に受け取ったクレジットと同じで、チームあたり最大 {cap}。年払いの特典はチームにつき1回、新規・既存のお客さまが対象。{date} まで。',
  },
  'zh-CN': {
    label: '黑色星期五',
    title: '黑色星期五：年付团队方案首年 {first}',
    text: '相当于每月 {mo}，而不是 {month}。购买点数包或新开每月点数，另送 {pct}% 点数。',
    cta: '查看年付价格', hide: '隐藏', endsIn: '剩余 {time}', endsAt: '{date} 结束', endFallback: '太平洋时间 12月1日 晚上11:59',
    cdD: '{d}天{h}小时{m}分', cdH: '{h}小时{m}分', badge: '黑色星期五',
    billedPromo: '今天支付首年 {first}，之后每年 {year}。', billedStd: '每年支付 {year}。', plus: '另外每月 {credits} 点数，按月付费。',
    terms: '黑色星期五条款：{first} 仅限首年，之后每年 {year}，续费前会提醒。购买点数包和新开每月点数（前 3 个月）赠送 +{pct}% 点数，有效期与随之获得的点数相同，每个团队最多赠送 {cap}。每个团队限一次年付优惠，新老客户均可参加。{date} 结束。',
  },
  es: {
    label: 'Black Friday',
    title: 'Black Friday: el plan Team anual por {first} el primer año',
    text: 'Son {mo} al mes en lugar de {month}. Además, {pct}% más de créditos en cualquier paquete o en nuevos créditos mensuales.',
    cta: 'Ver el precio anual', hide: 'Ocultar', endsIn: 'Termina en {time}', endsAt: 'Termina el {date}', endFallback: '1 dic., 11:59 p. m. PT',
    cdD: '{d} d {h} h {m} min', cdH: '{h} h {m} min', badge: 'Black Friday',
    billedPromo: '{first} hoy por el primer año, luego {year} al año.', billedStd: '{year} al año.', plus: 'Más {credits} de créditos al mes, cobrados mensualmente.',
    terms: 'Condiciones de Black Friday: {first} cubre solo el primer año, luego {year} al año; sin renovaciones sorpresa. +{pct}% de créditos de bonificación en paquetes y en nuevos créditos mensuales (sus primeros 3 meses), con la misma caducidad que los créditos con los que llegan, hasta {cap} por equipo. Una oferta anual por equipo; clientes nuevos y actuales. Termina el {date}.',
  },
  'pt-BR': {
    label: 'Black Friday',
    title: 'Black Friday: o plano Team anual por {first} no primeiro ano',
    text: 'São {mo} por mês em vez de {month}. E {pct}% a mais de créditos em qualquer pacote ou em novos créditos mensais.',
    cta: 'Ver o preço anual', hide: 'Ocultar', endsIn: 'Termina em {time}', endsAt: 'Termina em {date}', endFallback: '1 de dez., 23:59 PT',
    cdD: '{d} d {h} h {m} min', cdH: '{h} h {m} min', badge: 'Black Friday',
    billedPromo: '{first} hoje pelo primeiro ano, depois {year} por ano.', billedStd: '{year} por ano.', plus: 'Mais {credits} de créditos por mês, cobrados mensalmente.',
    terms: 'Condições da Black Friday: {first} vale só para o primeiro ano, depois {year} por ano; sem renovação surpresa. +{pct}% de créditos bônus em pacotes e em novos créditos mensais (os 3 primeiros meses), com a mesma validade dos créditos que acompanham, até {cap} de bônus por time. Uma oferta anual por time; clientes novos e atuais. Termina em {date}.',
  },
  de: {
    label: 'Black Friday',
    title: 'Black Friday: der jährliche Team-Plan im ersten Jahr für {first}',
    text: 'Das sind {mo} im Monat statt {month}. Dazu {pct} % mehr Credits auf jedes Credit-Paket und neue monatliche Credits.',
    cta: 'Jahrespreis ansehen', hide: 'Ausblenden', endsIn: 'Endet in {time}', endsAt: 'Endet am {date}', endFallback: '1. Dez., 23:59 Uhr PT',
    cdD: '{d} T. {h} Std. {m} Min.', cdH: '{h} Std. {m} Min.', badge: 'Black Friday',
    billedPromo: 'Heute {first} für das erste Jahr, danach {year} pro Jahr.', billedStd: '{year} pro Jahr.', plus: 'Dazu {credits} Credits im Monat, monatlich abgerechnet.',
    terms: 'Black-Friday-Bedingungen: {first} gilt nur im ersten Jahr, danach {year} pro Jahr; keine überraschende Verlängerung. +{pct} % Bonus-Credits auf Credit-Pakete und neue monatliche Credits (ihre ersten 3 Monate), mit derselben Laufzeit wie die Credits, mit denen sie kommen, bis zu {cap} Bonus pro Team. Ein Jahresangebot pro Team; für neue und bestehende Kunden. Endet am {date}.',
  },
  fr: {
    label: 'Black Friday',
    title: 'Black Friday : l’offre Team annuelle à {first} la première année',
    text: 'Soit {mo} par mois au lieu de {month}. Et {pct} % de crédits en plus sur tout pack de crédits ou nouveau crédit mensuel.',
    cta: 'Voir le prix annuel', hide: 'Masquer', endsIn: 'Se termine dans {time}', endsAt: 'Se termine le {date}', endFallback: '1er déc., 23 h 59 PT',
    cdD: '{d} j {h} h {m} min', cdH: '{h} h {m} min', badge: 'Black Friday',
    billedPromo: '{first} facturés aujourd’hui pour la première année, puis {year} par an.', billedStd: '{year} par an.', plus: 'Plus {credits} de crédits par mois, facturés mensuellement.',
    terms: 'Conditions Black Friday : {first} couvre la première année seulement, puis {year} par an ; aucun renouvellement surprise. +{pct} % de crédits bonus sur les packs et les nouveaux crédits mensuels (leurs 3 premiers mois), avec la même expiration que les crédits qu’ils accompagnent, jusqu’à {cap} de bonus par équipe. Une offre annuelle par équipe ; nouveaux clients et clients existants. Se termine le {date}.',
  },
};

export const fillP = (s: string, v: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (_, k: string) => String(v[k] ?? `{${k}}`));
