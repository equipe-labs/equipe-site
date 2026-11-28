/**
 * /privacy/ and /terms/ on equipe.im: the Privacy Policy and Terms of Service for the whole service (equipe.im,
 * app.equipe.im, ai.equipe.im and the products equipe hosts). 8 languages; English prevails if they differ.
 *
 * Keep every statement true to what ships. Sources: equipe-cloud web/src/legal.js (the app's own copy), docs/billing.md
 * (credits, plans, renewals), docs/platform-domains.md (domains in the customer's name), docs/connections.md and
 * web/src/growth-connect.js (connected accounts, Google scopes, sealed tokens, revoke on disconnect), docs/product-ai.md
 * (AI features), docs/github-sync.md (export). The phone app keeps its own policy at /app/privacy/ (App Store link).
 *
 * Markup inside strings: **bold**, [text](url). A block is a paragraph (string) or a list ({ ul: [...] }).
 */
import type { LocaleCode } from '../i18n';
import ko from './legal/ko';
import ja from './legal/ja';
import zhCN from './legal/zh-CN';
import es from './legal/es';
import ptBR from './legal/pt-BR';
import de from './legal/de';
import fr from './legal/fr';

export type Block = string | { ul: string[] };
export interface Section { id: string; h: string; body: Block[] }
export interface LegalDoc { title: string; desc: string; h1: string; summaryTitle: string; summary: string[]; sections: Section[] }
export interface LegalUi { updated: string; toc: string; prevails: string; notAdvice: string; privacy: string; terms: string; appPolicy: string }
export interface LegalCopy { ui: LegalUi; privacy: LegalDoc; terms: LegalDoc }

export const LEGAL_UPDATED = '2026-11-28';
export const LEGAL_OPERATOR = 'Umbriles Inc.';
export const LEGAL_CONTACT = 'support@equipe.im';

const en: LegalCopy = {
    ui: {
      updated: 'Last updated: {date}',
      toc: 'On this page',
      prevails: 'This page is also available in other languages. If a translation differs from the English version, the English version applies.',
      notAdvice: 'We wrote this in plain words so it is easy to read. It describes how equipe works; it is not legal advice for your own business or product.',
      privacy: 'Privacy',
      terms: 'Terms',
      appPolicy: 'Phone app privacy',
    },
    privacy: {
      title: 'Privacy Policy — equipe',
      desc: 'What equipe collects, why, who processes it, how connected accounts like Google and AI features handle data, how long we keep it and the choices you have.',
      h1: 'Privacy Policy',
      summaryTitle: 'In short',
      summary: [
        'We collect what we need to run your team and your products, and nothing to sell. We do not sell personal data.',
        'We do not use your workspace, your products’ data or data from your connected accounts to train AI models.',
        'Accounts you connect, such as Google, are used only for the features you turn on. You can disconnect them at any time.',
        'AI features in your product: equipe does not store what visitors type or what the AI answers, only counts and costs.',
        'You can ask us to export or delete your data at any time: [support@equipe.im](mailto:support@equipe.im).',
      ],
      sections: [
        { id: 'who', h: 'Who we are and what this covers', body: [
          'equipe gives you a team of AI agents that build, run and improve your product. It is operated by **Umbriles Inc.** ("we", "us"). This policy covers the website equipe.im, the equipe service at app.equipe.im, the AI service at ai.equipe.im and the hosting of the products your team builds. The equipe phone app has its own short policy at [equipe.im/app/privacy](/app/privacy/).',
        ] },
        { id: 'collect', h: 'What we collect', body: [
          { ul: [
            '**Account data.** Your email address and, if you sign in with Google or Apple, your name, email and the account identifier those services give us. If you use a passkey, we store only its public key; your fingerprint or face never leaves your device.',
            '**Your workspace.** What you and your team create in equipe: messages with your team, requests, tasks, plans, files you upload, the code and content of your products, and settings.',
            '**Secrets.** Passwords and keys you enter for your products are stored encrypted in your team’s secret store and are not shown back in conversations.',
            '**Connected accounts.** If you connect an account such as Google, Meta or GitHub, we store an encrypted access token and the account name, and what is needed to use it for you. See "Connected accounts" below.',
            '**Payments.** Payments are handled by Stripe. We do not see or store full card numbers. We keep billing records: what was bought, when, and the amount.',
            '**Usage and technical data.** Sign-in events, IP address and browser information for security and abuse prevention, error logs, and how much AI and computer time your team uses, for limits and billing.',
            '**Messages to us.** What you send when you write to support.',
            '**Website.** equipe.im counts visits with PostHog without cookies and without building personal profiles, and notes how a visitor found us (for example the referring site or campaign).',
          ] },
        ] },
        { id: 'use', h: 'How we use it', body: [
          { ul: [
            'To provide the service: run your team, build and host your products, and show you your workspace.',
            'To keep it secure: verify it is you, prevent abuse and fraud, and investigate problems.',
            'To measure usage for limits and billing, and to improve equipe.',
            'To contact you about your account, security, billing and important changes. Marketing emails only with your consent; you can unsubscribe at any time.',
          ] },
          'We do not sell your personal data, and we do not use your workspace, your products’ data or data from connected accounts to train AI models.',
          'Where the GDPR or similar laws apply, we rely on: our contract with you (to provide the service), our legitimate interests (security, preventing abuse, improving equipe), your consent (for example marketing emails, or advertising cookies if we ever use them) and legal obligations (for example keeping billing records).',
        ] },
        { id: 'ai', h: 'How AI processes your work', body: [
          'Your team works by sending the content it needs to AI models run by AI providers we use on your behalf (such as Anthropic, OpenAI and Google). They process it to produce answers under their business API terms, which do not use that content to train their models. equipe picks the model for each step.',
          'Agents never decide approvals for you: anything that publishes, sends, spends money or deletes data waits for your explicit approval.',
        ] },
        { id: 'connections', h: 'Connected accounts (Connections)', body: [
          'On the Connections page you can connect outside accounts so your team can set things up for your product without you copying codes or IDs. Connecting is always your choice, made in the provider’s own consent screen. What we do with each:',
          { ul: [
            '**Google.** With your consent we ask for your email address and access to Google Site Verification, Search Console and Google Analytics; Tag Manager only if you add it; and Google Ads only if you connect ads. We use this access only to do what you asked for your product: verify your site, add it to Search Console and submit its sitemap, create a Google Analytics property and put its ID in your product, create and publish a Tag Manager container, and create a conversion tag for Google Ads, then show you the status and results inside equipe.',
            '**Meta, TikTok, LinkedIn, X, Mailchimp, Bing and GitHub.** Used only for what you turn on: creating a pixel or tag for your product, reading ad results for your reports, publishing a post or newsletter you approved, verifying your site, or syncing your product’s code to a private repository in your GitHub account.',
            '**Spending and posting wait for you.** Ads, posts, newsletters and anything that costs money happen only after you approve them.',
            '**Stored safely.** Access tokens are encrypted, bound to your team and the provider, and kept only while the connection exists. When you disconnect, we delete our copy; for Google we also ask Google to revoke the access. You can also remove equipe’s access in your Google Account settings at any time.',
          ] },
          '**Google user data.** equipe’s use and transfer of information received from Google APIs adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements. We use Google user data only to provide and improve the features you can see in equipe; we do not sell it, use it for advertising, or use it to train AI models; and people at equipe do not read it unless you ask us to, it is needed for security or abuse investigation, or the law requires it. When your team needs this information to do work you asked for, it may be processed by the AI providers named above, only to produce that work.',
        ] },
        { id: 'product-ai', h: 'AI features in your product', body: [
          'Your team can add AI features to the product it builds for you, such as a support chatbot, FAQ answers, translation or review summaries. When they are on:',
          { ul: [
            'What a visitor types is sent to an AI provider to produce the answer.',
            'equipe does not store what visitors type or what the AI answers. We keep only counts, tokens and costs per product, day and feature, for billing and your usage panel.',
            'To apply limits per visitor, we keep hashed (not readable) user and IP identifiers for at most two days.',
            'Each product’s key stays on its server, and calls from a browser are refused.',
          ] },
          'For your visitors, you are responsible for your product. The privacy policy equipe writes for your product gains a section about AI, in 8 languages, as soon as AI is on.',
        ] },
        { id: 'product-google', h: 'Google and Microsoft sign-in and calendars in products', body: [
          'Products built on equipe can let their visitors sign in with Google or Microsoft and connect their Google or Outlook calendar through equipe’s own app at those providers. That is why Google’s or Microsoft’s screen names equipe.',
          { ul: [
            '**Sign-in.** We receive the visitor’s name, email address, profile picture and account identifier and pass them to the product they signed in to. We keep no Google or Microsoft token for sign-in.',
            '**Calendars.** Only when a visitor connects their calendar in a product. Google Calendar access is limited to their free/busy times and to events on calendars they own; Outlook access covers their calendar. The product uses it only to show when they are busy and to add a meeting they chose, with the invitations sent from their calendar. We do not store calendar contents.',
            '**Stored safely.** The token is encrypted, bound to that one product and that account, and never given to the product. When the visitor disconnects, deletes their account in the product, or the product is deleted, we delete it and ask Google to revoke the access unless another product they use still needs it. They can also remove access in their Google or Microsoft account settings at any time.',
            '**Never for anything else.** We do not sell this data, use it for advertising or to train AI models, and people at equipe do not read it unless the visitor asks, it is needed for security, or the law requires it. The Google user data paragraph above, including the Limited Use requirements, applies.',
          ] },
        ] },
        { id: 'products', h: 'The products you build', body: [
          'For the people who use the products your team builds (your visitors and customers), you decide what the product collects, and we process that data on your behalf to host and run it: its database, sign-in, emails, files and the built-in analytics, which uses no cookies. We do not use your product’s data for our own purposes. Your product gets its own privacy policy and terms, written from what it really does; you are responsible for them and for answering your users’ requests.',
        ] },
        { id: 'sharing', h: 'Who processes your data', body: [
          'We use service providers to run equipe. They process data only to provide their services to us:',
          { ul: [
            '**Cloudflare:** hosting, databases, file storage, email delivery and domain registration.',
            '**Luxor Agent Cloud (formerly Tenki):** the cloud machines your team works on.',
            '**AI providers** such as Anthropic, OpenAI and Google: AI models.',
            '**Stripe:** payments for equipe, and payments in your product if you set them up.',
            '**Google and Apple:** sign-in, if you use them.',
            '**PostHog:** cookieless visit counts on equipe.im.',
            '**Accounts you connect,** as described above.',
          ] },
          'We may disclose data if the law requires it, or to protect the rights and safety of our users and the public. If equipe is ever sold or merged, this policy would continue to apply to your data, and we would tell you.',
        ] },
        { id: 'transfers', h: 'Where your data is stored', body: [
          'Our providers may store data outside your country, including in the United States. Where the law requires it, we rely on the transfer safeguards our providers offer, such as the European Commission’s standard contractual clauses.',
        ] },
        { id: 'retention', h: 'How long we keep it', body: [
          { ul: [
            'Your workspace and products: while your account and team exist.',
            'When you delete a team or your account, we delete its data within 30 days. Backups expire on their own within about 30 days.',
            'A free team nobody has opened for 14 days may be deleted 7 days after we email a notice, unless it is opened before then.',
            'Connected account tokens: until you disconnect or the team is deleted.',
            'Billing records: as long as tax and accounting laws require.',
            'Hashed visitor identifiers for AI limits: at most two days.',
          ] },
          'You can download your project (code, files and history) at any time from the Project page.',
        ] },
        { id: 'rights', h: 'Your choices and rights', body: [
          'You can access, export, correct or delete your data, and close your account, by writing to [support@equipe.im](mailto:support@equipe.im). Depending on where you live (for example under the GDPR in Europe, the UK GDPR or the CCPA in California), you may also have the right to object to or restrict processing, to data portability, to withdraw consent, and to complain to a data protection authority. We do not sell or share personal data for cross-context behavioral advertising.',
        ] },
        { id: 'security', h: 'Security', body: [
          'We use encryption in transit, encrypted secrets and access tokens, hashed sign-in codes and session identifiers, an isolated machine for each team, and least-privilege access. No system is perfectly secure; if a breach affects you, we will tell you as the law requires. More on our [security page](/security/).',
        ] },
        { id: 'cookies', h: 'Cookies and local storage', body: [
          { ul: [
            'app.equipe.im uses one sign-in session cookie so you stay signed in.',
            'equipe.im remembers your theme and language choice in your browser.',
            'Visit counts on equipe.im are cookieless.',
            'We use no advertising or cross-site tracking cookies today. If we ever add advertising tags, they will load only after you agree in a cookie banner, and you can change your choice at any time.',
          ] },
        ] },
        { id: 'children', h: 'Children', body: ['equipe is not for children under 16, and we do not knowingly collect their data.'] },
        { id: 'changes', h: 'Changes', body: ['When this policy changes, we update this page and the date above, and we tell you directly about important changes.'] },
        { id: 'contact', h: 'Contact', body: ['Umbriles Inc. · [support@equipe.im](mailto:support@equipe.im)'] },
      ],
    },
    terms: {
      title: 'Terms of Service — equipe',
      desc: 'The terms for using equipe: your account, credits and plans, renewals and refunds, domains in your name, AI features, connected accounts, payments and acceptable use.',
      h1: 'Terms of Service',
      summaryTitle: 'In short',
      summary: [
        'You own what you bring and what your team builds for you. You decide what goes live, gets sent or costs money.',
        'Your team’s work is paid from credits (100 credits = $1). Unused purchased credits are refundable within 14 days of purchase.',
        'Plans renew until you cancel. Cancelling takes effect at the end of the period you paid for.',
        'Domains bought through equipe are registered in your name.',
        'AI can be wrong. Review what matters before it goes public.',
      ],
      sections: [
        { id: 'agreement', h: 'Agreement', body: [
          'These terms govern your use of equipe, a service operated by **Umbriles Inc.** ("we", "us"), including equipe.im, app.equipe.im, ai.equipe.im and the products we host for you. By creating an account or using equipe, you agree to them and to our [Privacy Policy](/privacy/).',
        ] },
        { id: 'service', h: 'The service', body: [
          'equipe provides a team of AI agents (such as a PM, engineers, a designer, QA and a data analyst) that plan, build, launch, host and improve software and related work for you, with the tools and infrastructure they use: hosting, databases, domains, email, AI features and connections to other services. Features may change as we improve the service, and features we describe as early or coming may be limited or changed.',
        ] },
        { id: 'account', h: 'Your account and your team', body: [
          'You must be at least 16 and able to form a binding contract. Keep your sign-in methods secure; you are responsible for activity under your account and your team. Tell us promptly about any unauthorized use.',
          'A team can have owners, admins, members and viewers. Owners and admins manage people, billing and limits. The Team plan includes 5 people; extra editors cost extra as shown on the [pricing page](/pricing/), and view-only invites are free.',
        ] },
        { id: 'in-charge', h: 'You are in charge', body: [
          'The agents act on your instructions and approvals. You decide what is built, published, sent, bought or deleted. AI output can be wrong, incomplete or insecure: review what matters to you, especially anything public, financial, legal, medical or safety-related. You are responsible for your products, their content and their compliance with the laws that apply to them, such as consumer, privacy and advertising laws.',
        ] },
        { id: 'content', h: 'Your content', body: [
          'You keep all rights to the content, data and code you provide and that equipe produces for you ("your content"). You can download your project at any time. You give us a limited license to host, process, copy and transmit your content only as needed to provide and secure the service. You confirm you have the rights to the content you bring.',
        ] },
        { id: 'credits', h: 'Credits', body: [
          { ul: [
            '**100 credits = $1.** Your team’s work is paid from credits: AI work at the model’s list price plus our margin, and the cloud computer your team uses while it works. Each task shows what it used, and requests show an estimate first.',
            '**Credit packs** are one-time purchases, valid for 12 months from purchase.',
            '**Plan credits** that come with a monthly Team plan roll over for 2 months; the monthly credits of a yearly plan roll over for 3 months. Credits that pass their expiry are removed.',
            '**Free and bonus credits** (for example the welcome credit or promotional bonuses) have no cash value, cannot be refunded or transferred, and expire with the credits they came with or as shown in Billing.',
            '**When credits run out,** your team stops working and continues as soon as credits are added. You can set a monthly cap, and auto top-up is off unless you turn it on.',
          ] },
        ] },
        { id: 'plans', h: 'Plans, renewals and cancellation', body: [
          { ul: [
            '**Monthly plans** renew every month until you cancel.',
            '**Yearly plans** cover the plan’s base fee for a year and renew for another year at the yearly price shown in Billing unless you cancel before the renewal date. We remind you before a yearly plan renews. Promotional first-year prices apply to the first year only.',
            '**Cancel at any time** in Billing. Cancelling takes effect at the end of the period you have paid for; your team and products keep working until then.',
            '**Late payment.** If a plan payment is 7 days past due, your team’s work pauses; your live product stays up while we sort it out with you.',
            '**Price changes** are announced in advance and apply from your next renewal.',
          ] },
        ] },
        { id: 'refunds', h: 'Refunds', body: [
          'Unused credits from a credit pack are refundable within 14 days of purchase: write to [support@equipe.im](mailto:support@equipe.im). Bonus credits that came with a refunded pack are removed in the same proportion. Otherwise, fees and credits already paid are not refunded, except where the law requires it or we say so. If a task went wrong, you can ask for its credits back on the Billing page.',
        ] },
        { id: 'domains', h: 'Domains', body: [
          { ul: [
            'A domain is bought only after you approve its price, which shows the first-year and the renewal price.',
            '**Domains bought or moved through equipe are registered in your name** (or your company’s), with you as the legal owner and WHOIS privacy on. The registry’s and registrar’s rules apply.',
            'Domains do not renew automatically; renewing needs your approval and payment. A domain that is not renewed can expire and be lost under the registry’s rules.',
            'You can move a domain bought through equipe to another registrar; write to us and we will help you do it.',
            'A domain you already own stays with your registrar unless you choose to move it to equipe. You remain responsible for renewing it there.',
          ] },
        ] },
        { id: 'ai-features', h: 'AI features in your product', body: [
          { ul: [
            'AI features your team adds to your product (such as a chatbot, summaries or images) are paid from your credits at the AI provider’s list price plus 10%, as your visitors use them.',
            'Each product has a monthly AI limit, 1,000 credits unless an owner or admin changes it. At the limit, AI features pause until the next month or until the limit is raised. There are also limits per visitor.',
            'You are responsible for how AI features are used in your product, for telling your users that answers are written by AI, and for having a person review AI output before it is used for decisions that significantly affect someone.',
            'We may pause AI features for a product that is being abused or that breaks these terms.',
          ] },
        ] },
        { id: 'connections', h: 'Connected accounts', body: [
          'When you connect an outside account (for example Google, Meta or GitHub), you allow your team to use it on your behalf for the features you turn on. Ads, posts and anything that costs money happen only after you approve them. The other service’s terms also apply, and you can disconnect at any time on the Connections page.',
        ] },
        { id: 'payments', h: 'Payments in your product', body: [
          'Your team can add a way to take payments to the product it builds for you, either through a Stripe account equipe opens for your business (Stripe Connect, "payments through equipe") or through your own Stripe account.',
          { ul: [
            '**You are the seller.** You are the merchant and seller of record for everything sold through your product. equipe is not a party to your sales or to any contract between you and your customers.',
            '**You are responsible for what you sell:** your products and services, prices, receipts, taxes, refunds, chargebacks and disputes, customer support, and complying with the laws that apply to your sales.',
            '**Stripe’s terms apply.** Payments through equipe are processed by Stripe under the [Stripe Connected Account Agreement](https://stripe.com/legal/connect-account), which includes the [Stripe Services Agreement](https://stripe.com/legal/ssa); you accept it when you set up payments, and Stripe (not equipe) verifies your identity and pays out to your bank.',
            '**equipe’s fee.** For payments through equipe, equipe keeps a platform fee of 1% of each successful charge, on top of Stripe’s own fees. It is not returned if you later refund the charge or lose a dispute. When you use your own Stripe account, equipe takes no fee. We show the fee before you set up payments and give advance notice before changing it.',
            '**Pausing.** We may pause payments through equipe, or your payouts where Stripe asks us to, if we reasonably suspect fraud, a breach of these terms or of Stripe’s terms, or if Stripe or the law requires it.',
          ] },
        ] },
        { id: 'acceptable-use', h: 'Acceptable use', body: [
          'Do not use equipe, or the products and AI features it builds, to: break the law; infringe others’ rights; build or spread malware or phishing; send spam; impersonate people or organizations to deceive; attack, scrape or overload systems you are not authorized to; get around security, limits or billing; harass or harm people; or generate content that sexualizes minors. We may refuse such requests, and suspend work, products or accounts that break these rules.',
        ] },
        { id: 'free', h: 'Free teams', body: [
          'A free team nobody has opened for 14 days may be deleted 7 days after we email a notice, unless it is opened before then. You can download your project before that.',
        ] },
        { id: 'third-party', h: 'Third-party services', body: [
          'equipe works with services we or you connect, such as AI providers, hosting, domain registrars, payments and analytics. Their terms also apply, and we are not responsible for services we do not control.',
        ] },
        { id: 'availability', h: 'Availability and warranties', body: [
          'We work to keep equipe available and your data safe, but the service is provided "as is" and "as available". To the extent the law allows, we disclaim implied warranties, including merchantability, fitness for a particular purpose and non-infringement.',
        ] },
        { id: 'liability', h: 'Limitation of liability', body: [
          'To the extent the law allows, we are not liable for indirect, incidental, special, consequential or punitive damages, or for lost profits, revenue or data. Our total liability for any claim is limited to the amount you paid us in the 12 months before the claim, or USD 100 if you have not paid. Nothing in these terms limits rights you have under consumer protection laws that cannot be waived.',
        ] },
        { id: 'ending', h: 'Ending', body: [
          'You can stop using equipe and delete your account at any time. We may suspend or end your access if you break these terms or if the law requires it, with notice where reasonable. After your account ends, you can export your content for 30 days unless the law prevents it.',
        ] },
        { id: 'changes', h: 'Changes', body: [
          'We may update these terms. We will post the new version here with a new date and tell you about important changes in advance. If you keep using equipe after they take effect, you accept them.',
        ] },
        { id: 'contact', h: 'Contact', body: ['Umbriles Inc. · [support@equipe.im](mailto:support@equipe.im)'] },
      ],
    },
};

export const LEGAL: Record<LocaleCode, LegalCopy> = { en, ko, ja, 'zh-CN': zhCN, es, 'pt-BR': ptBR, de, fr };
export const legalCopy = (code: LocaleCode): LegalCopy => LEGAL[code];
