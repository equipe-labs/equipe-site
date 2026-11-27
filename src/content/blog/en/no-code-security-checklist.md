---
title: "Security checklist for non-coders building with AI (15 questions)"
description: "Fifteen plain-language security questions to ask any AI builder or AI team, and to check on your own product: secrets, sign-in, data, payments, backups, certifications."
lang: en
date: 2026-11-21
tags: ["security", "checklist", "no-code"]
imageAlt: "Security checklist for non-coders building with AI (15 questions) — equipe blog"
sources:
  - { title: "Lovable security", url: "https://lovable.dev/security", accessed: "2026-11-21" }
  - { title: "Bolt security", url: "https://bolt.new/platform/security", accessed: "2026-11-21" }
  - { title: "Base44 security", url: "https://base44.com/security", accessed: "2026-11-21" }
  - { title: "equipe security", url: "https://equipe.im/security/", accessed: "2026-11-21" }
faqs:
  - q: "What is the first security question a non-coder should ask an AI builder?"
    a: "Ask where your keys and passwords are stored and whether the AI or the chat ever sees them. A key pasted into a prompt ends up in a transcript. The safest pattern is a separate encrypted store that the AI never reads."
  - q: "What do SOC 2 and ISO 27001 mean?"
    a: "Both are third-party audits of how a company manages security. SOC 2 is an auditor's report on a company's controls; ISO 27001 is a certification of its security management system. They say the company follows a process, not that it can never be breached."
  - q: "Do I need a backup promise in writing?"
    a: "Yes, if the product matters to you. Ask the provider what is backed up, how often and how you restore it, and get the answer in writing. A vague yes is not a commitment. equipe has not published a backup or uptime commitment."
  - q: "Does equipe have SOC 2 or ISO 27001?"
    a: "No. Our security page does not list either certification and we do not claim them. Some builders state them on their own security pages, as read on 21 November 2026. If your employer requires one, choose a provider that has it."
---

You do not need to read code to ask good security questions. You need to know what is worth protecting and what a straight answer sounds like. Most of the risk in an AI-built product comes from a handful of places: keys, sign-in, who can change things, and what happens to customer data.

This checklist has fifteen questions. Use it two ways: to compare AI builders and AI teams before you pick one, and to check your own product once it is live. A vague answer is itself an answer.

<p class="answer"><strong>The short answer.</strong> Ask fifteen questions across ten areas: secrets, sign-in, permissions, personal data, payments, backups, deletion, isolation, certifications and logs. Good providers answer plainly and in writing. If an answer is missing or vague, treat it as not guaranteed. Certifications such as SOC 2 are useful evidence, not a guarantee, and their absence is worth knowing about.</p>

<p class="series">This article is part of our guide: <a href="/blog/build-a-website-or-app-without-coding/">How to build a website or app without coding</a>.</p>

## How to use this checklist

Send the questions to the provider's support or sales address and keep the replies. A published page is fine too; note the date you read it, because pages change. For your own product, ask whoever runs it (a builder tool, a freelancer or an AI team) the same questions.

Score each answer in three levels:

- **Clear:** a specific answer you can quote.
- **Vague:** words like "industry standard" with no detail.
- **None:** no answer, or "we do not publish that."

None is not always disqualifying. It tells you what you must cover yourself, for example by keeping your own copies of your data.

## Group 1: Secrets and sign-in

A secret is a key or password that unlocks something: a payment account, an email service, a database. If a stranger gets one, they can act as you.

| # | Question | What a good answer sounds like |
| --- | --- | --- |
| 1 | Where are keys and passwords stored, and does the AI or the chat ever see them? | A separate encrypted store; never shown to the AI or pasted into chat |
| 2 | How do I sign in to your service? | Passkeys, a trusted login provider or one-time codes, rather than a password you invent |
| 3 | How do my product's own users sign in, and what do you store about them? | A named method, plus a plain statement of what is kept |
| 4 | Can I remove someone's access quickly, including yours? | A step you can do yourself, or a stated response time |

Rule of thumb: if a tool asks you to paste a key into a prompt, that key now lives in a transcript. Ask before you do it.

## Group 2: Permissions and publishing

AI agents can act. The question is which actions need a human.

| # | Question | What a good answer sounds like |
| --- | --- | --- |
| 5 | What can the AI do on its own, and what always waits for me? | A clear list: publishing, spending, messaging customers, deleting wait for your approval |
| 6 | Who can publish a change to the live product? | Named people only, with approval before anything goes live |

Read the answers against the real risks: a bad change published, a message sent to customers, money spent. Our guide to [approval cards](/blog/approval-cards-explained/) shows what a good gate looks like in practice.

## Group 3: Data, payments and backups

| # | Question | What a good answer sounds like |
| --- | --- | --- |
| 7 | What personal data does the product collect, and why? | A short list; collect only what you need |
| 8 | Where is data stored, and who inside the provider can see it? | A named place and a stated access rule |
| 9 | Do card details ever touch my product? | Ideally no: payments handled by a specialist so you never store card numbers |
| 10 | What is backed up, how often, and how do I restore it? | A written commitment. Ask for it in writing |

On backups, be firm. "We take care of it" is not a commitment. Ask: what is copied, how often, how long copies are kept, and how a restore is requested. If the provider does not publish this, keep your own copy of what matters, such as exports of customer lists and your project files.

On payments, the safest small-product pattern is to never handle card numbers at all. Our guide to [building a small shop without card handling](/blog/build-a-small-shop-without-card-handling/) covers it.

## Group 4: Deletion, isolation and your exit

| # | Question | What a good answer sounds like |
| --- | --- | --- |
| 11 | If I leave, can I delete my data, and how fast? | A request process and a stated deadline |
| 12 | Is my project separated from other customers? | Isolation described in concrete terms, not only "secure" |
| 13 | Can I export what I built and move it to my own accounts? | A described path, with limits stated |

The third question matters for trust more than most people expect. A provider you cannot leave controls you. Compare how builders handle this in [equipe vs Lovable, Bolt and Base44](/blog/equipe-vs-lovable-bolt-base44/).

## Group 5: Certifications and logs

| # | Question | What a good answer sounds like |
| --- | --- | --- |
| 14 | Which security certifications do you hold, and on which page do you state them? | Names, with dates and a report available on request |
| 15 | Can I see what happened and who approved it? | A history of changes and decisions you can read |

### What SOC 2 and ISO 27001 mean

Both are outside audits of how a company runs security. **SOC 2** is an independent auditor's report on a company's controls; a Type II report covers how those controls worked over a period of time. **ISO 27001** is a certification that a company runs a documented security management system. Both show the company follows a process and has been checked. Neither says it cannot be breached, and neither covers your own product's code.

As read on 21 November 2026, some builders state them on their official security pages: Bolt says it is "SOC 2 Type 2 certified and compliant with GDPR and CCPA"; Base44 lists SOC 2 Type II "confirmed by independent audit" and ISO 27001 certified; Lovable's page says it "supports SOC 2 and GDPR requirements," without a certification claim on the page we read. Check those pages yourself, since claims change. If your employer or a customer requires a certificate, this answer decides your choice. If you are a solo founder, it may matter less than questions 1 to 13.

## Red flags

- You are asked to paste keys, passwords or card numbers into a chat.
- "Industry standard security" with no detail.
- No stated way to delete your data or leave.
- No answer to who can publish.
- A promise of "99.99 percent uptime" or "never lost" with nothing in writing to back it up.
- Certifications named without a date or a page.

## Where equipe fits

Here is how equipe answers each question today, using only what we have published. Where we have not published an answer, the table says so.

| # | equipe's answer |
| --- | --- |
| 1 | Keys and passwords live in a separate encrypted store, never shown to the AI or in chat |
| 2 | Passkey, Google or Apple, or a one-time email code to sign in to equipe |
| 3 | Not published for products you build |
| 4 | Not published |
| 5 | Publishing, sending messages, purchases and deletions always wait for your approval |
| 6 | Nothing merges into your main product until you say so; a domain purchase can only be approved by a signed-in member of your team |
| 7 | Analytics on your product: no cookies, no IP address stored, only a two-letter country and a random anonymous id; events deleted after 180 days |
| 8 | Hosting, database and domain run as one project per customer on Cloudflare; data region and staff access rules are not published |
| 9 | Not published as a general statement; our demo shop, Tidepool Ceramics, is built as request-to-buy with no card handling |
| 10 | Not published. We have no backup or uptime commitment |
| 11 | Account deletion removes your data within 30 days; inactive free teams get an email after 14 days and are deleted 7 days later unless opened; you can download your project first |
| 12 | Each team works on its own isolated machine, separate from other customers |
| 13 | Each customer is one project; if it outgrows that setup we can move it to your own accounts; the engine is open source (MIT) |
| 14 | We hold no SOC 2 or ISO 27001 certification and do not claim one |
| 15 | Tickets keep an owner, a status and a history; a full audit log is not published |

Plain summary: equipe is built around gating money and publishing, and keeping secrets away from the AI. It has less published paperwork: backups, certifications and audit logs. If those are non-negotiable for you, say so before you start, or choose a provider that publishes them.

## Where to go next

Read the [security page](/security/) for the authoritative statements and [Is equipe safe?](/blog/is-equipe-safe-data-money-approvals/) for the longer explanation. If a term in this checklist was new, the [glossary of hosting, database, domain and secrets](/blog/no-code-glossary-hosting-database-domain-secrets/) explains it in plain words. Questions or a security issue: support@equipe.im.
