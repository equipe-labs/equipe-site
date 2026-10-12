// The one place that decides which referrers count as an AI assistant.
// Add a domain here and `ai_source` picks it up everywhere. Matching is by host:
// an entry matches itself and its subdomains (www.perplexity.ai -> perplexity.ai).
export const AI_SOURCES: Record<string, string[]> = {
  chatgpt: ['chatgpt.com', 'chat.openai.com'],
  perplexity: ['perplexity.ai'],
  claude: ['claude.ai'],
  gemini: ['gemini.google.com', 'bard.google.com'],
  copilot: ['copilot.microsoft.com'],
  deepseek: ['chat.deepseek.com'],
  grok: ['grok.com'],
  'meta-ai': ['meta.ai'],
  'you-com': ['you.com'],
  phind: ['phind.com'],
};

const matches = (host: string, domain: string) => host === domain || host.endsWith('.' + domain);

/** Name of the AI assistant behind a referrer URL or a bare host / utm_source value, or undefined. */
export function aiSource(value: string | null | undefined): string | undefined {
  if (!value) return undefined;
  let host = value.trim().toLowerCase();
  try {
    host = new URL(host.includes('://') ? host : `https://${host}`).hostname;
  } catch {
    return undefined;
  }
  for (const [name, domains] of Object.entries(AI_SOURCES)) {
    if (domains.some((d) => matches(host, d))) return name;
  }
  return undefined;
}
