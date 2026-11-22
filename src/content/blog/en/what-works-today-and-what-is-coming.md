---
title: "equipe: what works today and what is still coming (Nov 2026)"
description: "A dated, checkable list of what equipe does today, what is not shipped yet, and what we do not claim, with how we keep it current and how to tell us we are wrong."
author: "Abel Ko"
lang: en
date: 2026-11-21
tags: ["transparency", "status", "roadmap"]
imageAlt: "equipe: what works today and what is still coming (Nov 2026) — equipe blog"
faqs:
  - q: "Can equipe import my project from Claude in one step today?"
    a: "Not yet. One-step import from Claude with a database and a domain is not shipped. Until it is, you share the code or describe it, and the team moves it for you. We will say so on this list when that changes."
  - q: "Does equipe have SOC 2 or ISO 27001?"
    a: "No. We do not claim SOC 2 or ISO 27001. What we can state is on the security page: keys in a separate encrypted store, each team on its own isolated machine, and account data removed within 30 days of deletion."
  - q: "Is there an uptime guarantee, backup commitment or status page?"
    a: "No. We have not published an uptime or backup commitment, and there is no public status page today. We would rather say so than imply it. If that matters to your product, factor it into your decision."
  - q: "How do I report something on this list that is wrong?"
    a: "Email support@equipe.im with what you saw and where. We change the facts first, then every page that uses them, and we date-stamp the list so you can tell how fresh it is."
---

Most product pages are written to sound finished. This one is written to be checked. It lists what equipe does today, what you can use right now, what is still coming, and what we deliberately do not claim, as of 21 November 2026.

If you are deciding whether to trust a young product with something you care about, this is the page we would want to read. Where we say "not yet", we mean it.

<p class="answer"><strong>The short answer.</strong> Today equipe gives you an AI startup team in a browser: a PM, engineers, a designer, QA and a data analyst, with approvals for anything live, costing money or reaching customers. Not yet shipped: one-step Claude import and weekly usage reports. We do not claim SOC 2, ISO 27001, uptime or backup commitments.</p>

## What works today

These things are true as of 21 November 2026.

**The team and how it works**
- AI agents work in roles: PM, engineers, designer, QA and data analyst.
- The PM asks questions first (who it is for, what to check), turns your idea into a plan, keeps the team on it, brings only decisions that are yours, and checks work before it reaches you.
- The team works from a shared board of tickets. A ticket has an owner, a status and a history. Members coordinate through tickets, not chat.
- Each member works in its own copy of the project, on its own branch. Nothing merges into the main product until you say so.

**Approvals**
- Anything that goes live, costs money or reaches customers waits for your approval, as a short card with options, a recommendation and an expected cost. You answer with one tap.
- Publishing, sending messages, purchases and deletions always wait for approval. See [approval cards explained](/blog/approval-cards-explained/).
- The team cannot buy a domain by itself. The request shows the domain and price and links to an approval page that only a signed-in member of your team can open. It is allowed only if approved, unexpired and not above the approved price, and one approval buys once. More in [buy and connect a domain](/blog/buy-and-connect-a-domain/).

**Security**
- Keys and passwords are kept in a separate encrypted store, never shown to the AI or in chat.
- Each team runs on its own isolated machine, separate from other customers.
- If you delete your account, your data is removed within 30 days.
- You can sign in with a passkey, Google or Apple, or a one-time email code.
- Full detail is on the [security page](/security/) and in [is equipe safe](/blog/is-equipe-safe-data-money-approvals/).

**Hosting, database and domain**
- The team sets these up, with one project per customer, on Cloudflare. You never sign in to a code host, hosting service or cloud console.
- If a product outgrows that, we can move it to your own accounts.

**Analytics for products built on equipe**
- No cookies, no IP address stored. Only a two-letter country and a random anonymous id kept in the visitor's browser.
- Events are deleted after 180 days.
- You get counts, funnels and retention, plus simple A/B tests (variants and a goal event).

**In the app**
- A cost view shows spent this month, the expected total by month end, and your monthly cap.
- The cloud web app is at app.equipe.im, with nothing to install: sign up, chat with the PM, follow the work and open preview links.
- Free teams that nobody opens for 14 days get an email, and are deleted 7 days later unless opened. You can download your project first.
- An iPhone app, "equipe — AI squad", exists, and you can approve with Face ID.

**Things built with it**
- Five demo products, each a made-up business on a real live site, each built by an equipe team in about 35 to 45 minutes: Little Wins, Fernly, Jiwoo Korean, Small Hours and Tidepool Ceramics.
- Our one number about our own track record is "222 tasks finished in 20 days, with 1 person approving". It is self-reported and was counted on 1 November 2026.

## What is open now

You can use these today, without waiting for anything on the roadmap:

- Start free at app.equipe.im/start: $5 of credit when you create a team, plus $10 when you add a card (no charge), no card needed to begin.
- The Team plan is $19 a month or $190 a year, with hosting, storage, monthly credits and 5 people included (each extra editor is $5 a month, up to 10; view-only invites are free). Hosting only is $19 a month. All details are on the [pricing page](/pricing/), and [the cost article](/blog/cost-to-build-and-run-a-small-app-with-ai-agents/) walks through them.
- The desktop and Mac app and the command line tool are the open-source engine, under the MIT licence, at github.com/equipe-labs/equipe. They are for developers, and they work with Claude Code and Codex engines.

## What is still coming

Two things are not shipped. We will say "not yet" until they are.

| Item | Status today | What you do in the meantime |
| --- | --- | --- |
| One-step import from Claude, with a database and a domain | Not yet | Share the code or describe it, and the team moves it for you. See [turn a Claude artifact into a live app](/blog/turn-a-claude-artifact-into-a-live-app/) |
| Weekly usage reports with proposals | Not yet | The PM can review usage and propose changes when you ask |

We are not giving dates for either. A date we cannot keep is worse than no date.

## What we do not claim

This is the list most pages leave out.

- **No SOC 2 or ISO 27001.** We do not claim either.
- **No published backup or uptime commitment.** If your product needs a promise like that in writing, we cannot give you one today.
- **No public status page.**
- **No advertised GitHub two-way sync.** We do not advertise a sync between your project and your own GitHub.
- **No customer counts, testimonials, revenue or success rates.** We have none that we are willing to publish.
- **No "typical monthly spend".** We do not have real usage data yet, so we will not invent a figure.
- **No promised speeds.** The 35 to 45 minutes belongs to the five demos named above, not to your project.

These gaps are real trade-offs. If you run a regulated business or need formal certifications from vendors, equipe is not the right choice today.

## Where the open-source engine fits

The engine behind the desktop app and the command line tool is open source under the MIT licence. It is where our work is visible. The changelog is at [/changelog/](/changelog/).

An example is release v0.103.148, published on 19 November 2026, titled "Growth: the growth loop — evidence, cards, tickets, measured outcomes". It is about turning what people do in a product into evidence, then into cards and tickets, and then measuring the result. Read the changelog for exactly what shipped. The cloud product for non-developers and the engine are related but not the same thing, so a changelog entry is not automatically a feature of your team on app.equipe.im.

## How this list is kept up to date

We change the facts first. There is one fact sheet that every page draws from, and it is public at [/facts/](/facts/). When something changes, we edit that sheet, then the pages that use it. This page carries a date stamp so you can tell how fresh it is: it describes 21 November 2026.

When a "not yet" becomes "yes", it moves from the roadmap table to the list of what works today, with a date. If something we claimed turns out to be wrong, we correct it rather than quietly deleting it.

## How to tell us we are wrong

If a statement here does not match what you see, email support@equipe.im. Tell us what you saw, on which page or screen, and what you expected. We read it as a bug report in our own writing. If you are right, we correct the fact sheet and the page.

Related reading: [what an AI startup team does](/blog/what-an-ai-startup-team-does/), and [about equipe](/about/).
