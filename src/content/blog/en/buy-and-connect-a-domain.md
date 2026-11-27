---
title: "How to buy and connect a domain for your app (no code)"
description: "A plain-words guide to choosing, buying and connecting a domain to your app: DNS records, security certificates, email cautions, renewal and the mistakes to avoid."
lang: en
date: 2026-11-21
tags: ["domain", "no-code", "guide"]
imageAlt: "How to buy and connect a domain for your app (no code) — equipe blog"
faqs:
  - q: "What is the difference between a domain registrar and a host?"
    a: "A registrar is the company where you register and renew your domain name, the address people type. A host is the computer that stores and serves your product. They can be different companies, so the domain has to be pointed at the host with settings called DNS records."
  - q: "Why does my domain not work right after I connect it?"
    a: "DNS settings are copied between many servers around the world, and that takes time, from a few minutes to about a day. The security certificate also has to be issued for the new name. If it still fails after a day, check that the record points to the exact place your host gave you."
  - q: "Can I use the same domain for my website and my email?"
    a: "Yes, but they use different DNS records, and changing one can break the other. Set up email records first or note them down, and never delete records you do not recognise. If you already receive email on the domain, ask before you move it."
  - q: "How does equipe handle domain purchases?"
    a: "The team cannot buy a domain by itself. It shows you the domain and price and links to an approval page that only a signed-in member of your team can open. One approval buys once. Domains are paid from credits, at the yearly price you approve. You never sign in to a cloud console."
---

A domain is the name people type to find you, like `yourstudio.com`. Without one, your product lives at an address chosen by your host, which is fine for testing and awkward for customers. Buying and connecting a domain is one of the few launch tasks where a single wrong setting can leave you with a blank page and no error message.

This guide explains the whole job in plain words: how to choose a name, who you buy it from, how to point it at your product, and what to check afterwards. It is written for people who have never touched a DNS setting. It is useful whichever tool you use to build.

<p class="answer"><strong>The short answer.</strong> Pick a short name you can spell aloud, buy it in your own account from a registrar, then add the records your host gives you so the name points at your product. Wait for the settings to spread, confirm the padlock appears in the browser, set a renewal reminder, and keep your own login safe.</p>

<p class="series">This article is part of our guide: <a href="/blog/build-a-website-or-app-without-coding/">How to build a website or app without coding</a>.</p>

## What a domain is, and the three parts you deal with

Think of three separate things that work together:

- **The domain name** is the address, such as `yourstudio.com`. You rent it, you do not buy it forever. You pay to keep it, usually yearly.
- **The host** is the computer that stores your product and sends it to visitors. It has its own technical address, which most people never see.
- **DNS** is the phone book that tells the internet "this name lives at that host". You edit it by adding **records**, which are short lines of settings.

Most confusion comes from mixing these up. Buying a domain does not give you hosting, and hosting does not always include a domain. The domain only becomes your product's address once the DNS records connect the two.

## How to choose a name

You will say this name out loud, put it on cards and type it into messages for years. Choose carefully, because changing it later means telling every customer.

- **Short.** Fewer letters means fewer typing mistakes.
- **Easy to spell after hearing it once.** If you have to say "with a Z, not an S", pick another.
- **No hyphens or numbers** unless they are the point. People forget where they went.
- **Easy to say on the phone.** Try it with a friend.
- **Unlikely to be confused** with a well-known company or a name very close to yours.

Before you commit, run these checks (read the registrar's own page for current prices):

1. Search the exact name in a search engine and in the app stores. If a similar business shows up, think again.
2. Check that the same name is free on the social networks you plan to use.
3. Ask two people to type it from hearing it. Count how many get it right.
4. Look at the ending (`.com`, a country ending, or a newer one). A familiar ending is easier to remember, but a country or topic ending can suit a local or niche audience. Check the rules of any ending you choose, because some have conditions on who may register them.

## Registrar versus host: who does what

A **registrar** is the company you register and renew the name with. A **host** is where your product runs. They are often different companies, and that is normal.

| | Registrar | Host |
| --- | --- | --- |
| What it does | Holds your registration of the name | Runs your product and serves it to visitors |
| You pay for | The right to use the name, per year | Keeping the product online |
| You edit | Contact details, renewal, locking | Which domain your product answers to |
| Where DNS lives | Often there, but it can be moved | Sometimes there instead |

Two things matter more than which registrar you choose. First, the account must be **yours**, with your email address, so you can prove you are the owner. Second, you need to know **where your DNS is managed**, because that is where you will add records.

## Buying the domain, step by step

1. **Create an account** with your own email and turn on two-step sign-in if it is offered.
2. **Search the name** and confirm it is available.
3. **Read the renewal terms** before paying. The first year and later years can differ, and you should know both.
4. **Check the owner details.** The registration should list you or your business as the owner, not a freelancer or a tool.
5. **Turn on automatic renewal** if it is offered, and keep a valid payment method.
6. **Lock the domain** if the registrar offers a transfer lock, so it cannot be moved without you.
7. **Save the login details** in a password manager, not in a chat or a spreadsheet.

If the registrar offers to hide your personal contact details from the public registration record, consider turning it on. Whether and how it is offered depends on the registrar, so read their page.

## Connecting the domain to your product

Your host will give you the exact values. The job is to copy them exactly into the DNS settings. In plain words:

- A **record that points your name to the host.** Hosts usually give you either a number-style address or another name to point to. Both do the same job: "when someone types my name, send them there".
- Often a second record for the **www version**, so `www.yourstudio.com` and `yourstudio.com` both work.
- Sometimes a **verification record**, a small text line that proves you control the domain.

Steps:

1. Ask your host for the records they want you to add. Ask for them in writing.
2. Open the DNS settings where your domain is managed.
3. Add each record exactly as given. Copy and paste; do not retype.
4. Remove an old record only if the host tells you to, and only if you know it is not used for email.
5. Save, then wait.

### Waiting for the change to spread

DNS changes are copied between many servers around the world, which takes time. This is often called **propagation**. It can be a few minutes, and sometimes up to about a day. During the wait some people may see the new site and others the old one. That is normal. Do not keep changing records out of impatience, because every change restarts the wait.

### The security certificate

The padlock in the browser means the connection is encrypted. It comes from a **security certificate** issued for your exact domain name. Most hosts issue it automatically once the records are correct, but not before. After connecting, open your address in a private window and check three things: the page loads, the padlock appears, and both the `www` and plain versions reach the same page. If the browser shows a warning, do not tell customers to click through it. Check the records and wait a little longer.

## Email on the same domain: a caution

Having `hello@yourstudio.com` is a good professional touch, but email uses its own DNS records, separate from the ones that show your website. Two cautions:

- **Never delete records you do not recognise.** A line that looks like a leftover may be what keeps your email working.
- **Set up email before or alongside the website, not as an afterthought.** If your domain already receives email, write down the existing records before you change anything.

Email providers will give you their own records to add, in the same way a host does. If you send email from your product, such as confirmations, the sending service will usually ask for extra records so your messages are trusted and do not land in spam.

## Renewal: the quiet way people lose a name

A domain is paid for a period, commonly a year. If it expires, your site and your email stop, and after a grace period someone else may be able to register it. Protect yourself:

- Put the expiry date in your calendar, with a reminder a month before.
- Keep the registrar's emails going to an address you actually read.
- Make sure a valid card is on file, or that you know who pays.
- Know who the registered owner is. If someone else registered the domain "for you", your business depends on them.

## Common mistakes

- **The wrong record.** A typo, or a record that points to an old host. The symptom is a blank page or an error. Fix: compare each value with what the host gave you, character by character.
- **No certificate.** The site loads with a warning or not at all. Fix: confirm the records, wait for propagation, then check the host's certificate status.
- **Forgetting renewal.** Fix: calendar reminder and a valid card.
- **Being listed as a user, not the owner.** If a freelancer or tool bought it under their account, you may not be able to prove it is yours. Fix: the registered owner and the account holder should be you or your business.
- **Deleting email records.** Fix: copy existing records somewhere safe first.

## Where equipe fits

On equipe, you do not do the steps above yourself. The team sets up hosting, the database and the domain for each customer, and you never sign in to a code host, a hosting service or a cloud console. The team cannot buy a domain by itself. A request shows the domain and its price and links to an approval page that only a signed-in member of your team can open. It is allowed only if approved, not expired, and not above the approved price, and one approval buys once. Domains are paid from credits, at the yearly price you approve. The [approval cards explained](/blog/approval-cards-explained/) article shows how this kind of request works, and [the safety article](/blog/is-equipe-safe-data-money-approvals/) covers what the team can and cannot do alone.

Honest limits: this guide is not a promise about every case. For renewals and transfers of your particular domain, ask the PM how renewal is handled for your domain before you rely on it, and set your own reminder anyway. If a product outgrows the setup, we can move it to your own accounts. If you want to do everything yourself, or you need a very specific registrar, a plain registrar and host will serve you equally well.

## A domain checklist

- [ ] Name is short, spellable and checked in a search engine
- [ ] Account is in my name, with my email and two-step sign-in
- [ ] Renewal terms read; reminder set a month before expiry
- [ ] Owner details show me or my business
- [ ] Records copied exactly from my host, www included
- [ ] Waited, then tested in a private window with the padlock showing
- [ ] Existing email records written down before any change
- [ ] Login saved in a password manager

## What to read next

If hosting, databases and secrets are still unfamiliar, the [no-code glossary](/blog/no-code-glossary-hosting-database-domain-secrets/) defines each in a sentence. For the bigger picture, see [how to launch a real product without writing code](/blog/launch-a-real-product-without-code/), and [the no-code security checklist](/blog/no-code-security-checklist/) for what to check before you share your address.
