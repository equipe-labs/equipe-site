---
title: "No-code glossary: hosting, database, domain, API keys and more"
description: "A plain-English glossary for non-coders: hosting, database, domain, DNS, SSL, API keys, deployment, repository, analytics and more, with what can go wrong and what to check."
lang: en
date: 2026-11-21
tags: ["glossary", "no-code", "beginners"]
imageAlt: "No-code glossary: hosting, database, domain, API keys and more — equipe blog"
faqs:
  - q: "What is the difference between hosting and a domain?"
    a: "Hosting is the always-on computer where your product's files and code live. A domain is the web address people type, such as yourname.com. You need both: the domain points visitors to the hosting. Losing the domain loses your address; losing the hosting takes the product offline."
  - q: "What is an API key and why is it secret?"
    a: "An API key is a password-like string that lets one service, such as an email sender or payment provider, accept requests from your product. If someone else gets it, they can act as you and possibly run up costs, so it should be stored apart from your code and never pasted into chat."
  - q: "Does equipe make me manage hosting and databases?"
    a: "No. The team sets up hosting, the database and the domain, one project per customer on Cloudflare, and you never sign in to a code host, hosting service or cloud console. If a product outgrows that, equipe can move it to your own accounts."
  - q: "What does a preview mean?"
    a: "A preview is a private copy of a change you can look at before it goes live to customers. It lets you check that the change looks right and works before anyone outside your team sees it."
---

When you build a product with AI, the AI does the typing, but the vocabulary still lands on you. Someone will ask "which hosting?" or "do you have the API key?" and it helps to know what is being asked, and what quietly goes wrong when nobody is watching.

This glossary is written for people who cannot code. Each term gets the same four answers: what it is, why you care, what can go wrong, and how equipe handles it, but only where we can state it as fact. Terms are grouped by the question they answer.

<p class="answer"><strong>The short answer.</strong> A product needs a place to live (hosting), a place to keep data (database), an address (domain), secret passwords between services (keys), a safe way to ship changes (deployment), and a way to see what happens (analytics). If you can answer who owns and watches each of those six, you understand your product better than most first-time founders.</p>

## Where your product lives

### Hosting
- **What it is:** A computer that is always on and connected to the internet, holding your product so visitors can open it at any hour. Think of it as the shop premises.
- **Why you care:** If hosting stops, the product is offline, however good it looks.
- **What can go wrong:** A lapsed payment, a plan that stops publishing, or a service that changes its terms. Free plans sometimes limit who can visit.
- **How equipe handles it:** The team sets up hosting, one project per customer, on Cloudflare. You never sign in to a code host, hosting service or cloud console. If a product outgrows that, equipe can move it to your own accounts. On the Team plan, hosting for sites is included; at $19 a month with no monthly credits, it keeps product, sites, domains and storage live, and your team works whenever you add credits. See [pricing](/pricing/).

### Backend vs front end
- **What it is:** The front end is what visitors see and click: pages, buttons, forms. The backend is the part behind the curtain that remembers things, sends emails and checks who is signed in.
- **Why you care:** A pretty front end with no backend cannot save a booking or remember a customer. When someone says "it looks done but nothing is saved", this is the usual reason.
- **What can go wrong:** A prototype may have only a front end, so it seems to work until you reload and your data is gone.
- **How equipe handles it:** The team builds both and sets up the hosting and database the backend needs.

## Where your data lives

### Database
- **What it is:** An organised store for the information your product remembers: customers, orders, bookings, sign-ups. Imagine a very strict spreadsheet that the product reads and writes by itself.
- **Why you care:** It holds your customers' information. Losing it, or letting the wrong person read it, is the worst kind of mistake.
- **What can go wrong:** Data stored in a place you cannot reach; data deleted by accident; no copy to go back to; private details visible to the wrong people.
- **How equipe handles it:** The team sets up the database as part of your project. Each team runs on its own isolated machine, separate from other customers, and deletions always wait for your approval. We do not publish a backup or uptime commitment, so do not assume one. Read [is equipe safe?](/blog/is-equipe-safe-data-money-approvals/) for the full list.

## How people find it

### Domain
- **What it is:** Your web address, like yourname.com. You rent it, usually by the year, from a registrar.
- **Why you care:** It is your brand and your email address base. If it lapses or someone else holds it, you can lose both.
- **What can go wrong:** Registering it under someone else's account (a freelancer, an agency), forgetting to renew, or buying a lookalike name that confuses customers.
- **How equipe handles it:** The team cannot buy a domain by itself. A request shows the domain and its price and links to an approval page that only a signed-in member of your team can open. The purchase goes ahead only if it is approved, unexpired and not above the price you approved, and one approval buys once. Domains are paid from credits, at the yearly price you approve. A full walk-through is in [buy and connect a domain](/blog/buy-and-connect-a-domain/).

### DNS
- **What it is:** The internet's phone book. DNS records tell the world which hosting a domain should point to, and where its email should go.
- **Why you care:** A wrong record can take a site or email offline, even though nothing is broken in the product itself.
- **What can go wrong:** Editing the wrong record, or changes that take a while to spread, so the site looks fine to you and broken to a customer.
- **How equipe handles it:** You never sign in to a hosting service or cloud console. The team makes the connection once the domain is approved and bought.

### SSL certificate
- **What it is:** The thing that makes the address begin with https and shows the padlock. It means the connection between visitor and site is private and that the site is who it says it is.
- **Why you care:** Without it, browsers warn visitors that the site is not secure, and people leave.
- **What can go wrong:** A certificate that expires or does not match the domain produces a scary warning page.
- **How equipe handles it:** We make no separate claim about certificates beyond what the [security page](/security/) lists.

## Keys and access

### API
- **What it is:** A set way for one program to ask another for something. Your product asks an email service to send a message; it asks a payment service to take a card. Each such service has an API.
- **Why you care:** Most useful features, such as email, payments and maps, are other companies' services reached through an API. Each one adds cost, rules and a risk.
- **How equipe handles it:** Anything that sends messages or costs money waits for your approval. We do not claim a list of integrations.

### API key / secret
- **What it is:** A password-like string that proves to a service that a request comes from you. Treat it like a password to your bank.
- **Why you care:** Anyone holding the key can act as you and run up costs.
- **What can go wrong:** The key pasted into a chat, a document or a public code page, where strangers find it. Sharing one key across everything, so one leak exposes all of it.
- **How equipe handles it:** Keys and passwords sit in a separate encrypted store and are never shown to the AI or in chat. If you build elsewhere, a good rule: if you have typed a key into a message, replace it.

## How changes reach customers

### Repository
- **What it is:** The folder, with full history, that holds a product's code. Each saved change is recorded with who made it and why. A developer could take over from it later.
- **How equipe handles it:** Each team member works in its own copy of the project on its own branch, and nothing merges into the main product until you say so. Work is tracked as tickets, each with an owner, a status and a history.

### Version and rollback
- **What it is:** A version is one saved state of the product. Rolling back means returning to an earlier version after a change caused trouble.
- **What can go wrong:** No earlier version to return to, or a change to data that going back does not undo.
- **How equipe handles it:** Each ticket keeps a history of the work. We do not publish a backup commitment, so ask before relying on any restore.

### Deployment
- **What it is:** Moving a finished change from the builders' workspace to the live product, where customers see it. Often called publishing or shipping.
- **Why you care:** This is the moment a mistake becomes public.
- **What can go wrong:** Shipping something unfinished.
- **How equipe handles it:** Publishing always waits for your approval, shown as a short card with options, a recommendation and the expected cost.

### Preview
- **What it is:** A private copy of a change you can open and test before it reaches customers.
- **What can go wrong:** Approving without opening it.
- **How equipe handles it:** The cloud web app gives you preview links to follow the work.

### Environment
- **What it is:** A separate setting where a product runs: for example your private test copy versus the live one. The same product can have different settings, keys and data in each.
- **Why you care:** Testing with real customer data, or using real payment keys while testing, is how accidents happen.
- **What can go wrong:** Test settings reaching the live product, or the reverse.
- **How equipe handles it:** We only claim preview links and the approval step before anything goes live. Ask about anything finer.

## How you know what happens

### Analytics
- **What it is:** Counting what visitors do: how many came, which pages they used, where they dropped out.
- **What can go wrong:** Collecting more personal data than you need, or numbers nobody reads.
- **How equipe handles it:** Analytics for products built on equipe uses no cookies and stores no IP address. It keeps only a two-letter country and a random anonymous ID in the visitor's browser, and events are deleted after 180 days. You get counts, funnels and retention, plus simple A/B tests with variants and a goal event. The app also shows a cost view: spent this month, expected total by month end, versus your monthly cap. See [metrics for a small product](/blog/metrics-for-a-small-product/).

## Quick checklist: six questions to ask about any product

| Question | Good answer sounds like |
| --- | --- |
| Where does it live (hosting)? | A named service, in an account I can reach or have moved to |
| Where is the data (database)? | I know where, who can read it, and how it is removed |
| Whose name is the domain in? | Mine, with a renewal date I know |
| Where are the keys? | In a store, never in a chat or document |
| What happens before changes go live? | A preview, then my approval |
| How do I know people use it? | I can see counts without collecting what I do not need |

## Where equipe fits

equipe is built so a non-coder does not need to manage most of this: the team handles hosting, the database and the domain, keys stay in an encrypted store, and anything live, costly or customer-facing waits for you. If a product outgrows that setup, we can move it to your own accounts.

Not yet: one-step import from Claude with a database and a domain. For now you share the code or describe it and the team moves it for you. We also publish no backup or uptime commitment, no SOC 2 or ISO 27001 claim and no public status page, so if you need those, equipe is not the right pick yet.

Next steps: [launch a real product without code](/blog/launch-a-real-product-without-code/), the [security checklist for non-coders](/blog/no-code-security-checklist/), or [problems non-coders hit and the fixes](/blog/problems-non-coders-hit-and-fixes/).
