// Which channel a visit came from, sent as the `channel` property on every event.
// The KPI dashboard breaks visits and conversions down by it. See docs/analytics.md.
export type Channel = 'ai' | 'search' | 'social' | 'github' | 'direct' | 'internal' | 'referral';

export const SEARCH = ['google', 'bing.com', 'duckduckgo.com', 'search.yahoo.com', 'yandex', 'baidu.com', 'naver.com', 'daum.net', 'ecosia.org', 'search.brave.com', 'startpage.com', 'qwant.com', 'seznam.cz'];
export const SOCIAL = ['x.com', 't.co', 'twitter.com', 'linkedin.com', 'lnkd.in', 'reddit.com', 'news.ycombinator.com', 'facebook.com', 'threads.net', 'threads.com', 'bsky.app', 'mastodon.social', 'youtube.com', 'instagram.com', 'discord.com', 'dev.to', 'medium.com', 'lobste.rs', 'producthunt.com', 'velog.io', 'qiita.com', 'zenn.dev', 'v2ex.com', 'weibo.com', 'zhihu.com'];
const SEARCH_UTM = ['google', 'bing', 'naver', 'duckduckgo', 'yahoo', 'yandex', 'baidu'];

// 'google' (no dot) matches any google.* country domain; dotted entries match the domain and its subdomains.
const hit = (host: string, list: string[]) =>
  list.some((d) => (d.includes('.') ? host === d || host.endsWith('.' + d) : host.split('.').includes(d)));

/**
 * `ai` is the already-resolved ai_source (it wins over everything else).
 * utm_source decides when the referrer is missing (apps and AI tools often strip it).
 */
export function channelOf(referrer: string, selfHost: string, utmSource: string | null, ai: string | undefined): Channel {
  if (ai) return 'ai';
  let host = '';
  try {
    host = referrer ? new URL(referrer).hostname.toLowerCase() : '';
  } catch {}
  if (!host && utmSource) host = utmSource.toLowerCase().replace(/^https?:\/\//, '').split('/')[0];
  if (!host) return 'direct';
  if (host === selfHost || host.endsWith('.' + selfHost)) return 'internal';
  if (host === 'github.com' || host.endsWith('.github.com') || host === 'github') return 'github';
  if (hit(host, SEARCH) || SEARCH_UTM.includes(host)) return 'search';
  if (hit(host, SOCIAL) || ['twitter', 'x', 'linkedin', 'reddit', 'hn', 'hackernews', 'facebook', 'threads', 'bluesky', 'youtube'].includes(host)) return 'social';
  return 'referral';
}

/**
 * Whether the site has a page in the visitor's browser language, sent as `browser_language_supported`.
 * A base-language match counts (pt-PT reads pt-BR) except Chinese, where only Simplified matches zh-CN.
 */
export function languageSupported(browserLang: string, locales: string[]): boolean {
  const lang = browserLang.toLowerCase();
  const base = lang.split('-')[0];
  return locales.some((l) => {
    const loc = l.toLowerCase();
    if (loc === lang) return true;
    if (base === 'zh') return loc === 'zh-cn' && /^zh(-hans|-sg|-my)?(-|$)/.test(lang) && !/-(tw|hk|mo|hant)/.test(lang);
    return loc.split('-')[0] === base;
  });
}
