---
title: "Case study: a soccer academy's site, rebuilt and run by an AI team"
description: "How Golden Boot Academy went from a site made with an AI tool to a live site with accounts, bookings and its own domain, run by an AI team. What worked and what went wrong."
lang: en
date: 2026-11-28
author: "Abel Ko"
tags: ["worked-example", "launch", "booking"]
imageAlt: "Golden Boot Academy case study — equipe blog"
faqs:
  - q: "What did the AI team build for Golden Boot Academy?"
    a: "A site it can keep changing, on its own domain (goldenbootacademy.app): the original pages rebuilt, player sign-up and accounts, booking requests saved to an admin page, real FAQ answers, email list sign-ups, a privacy policy and terms, and visitor analytics."
  - q: "How long did it take?"
    a: "The first rebuild of six pages took about 14 minutes in the first session. The site went live on its own domain, with accounts and bookings, within three days, and changes have continued since."
  - q: "Did the academy need to code or manage hosting?"
    a: "No. The academy's team described what it wanted in plain words and answered questions only it could answer, such as its refund policy and the minimum age it coaches. The AI team handled hosting, the database, the domain and sign-in."
  - q: "What went wrong?"
    a: "The free starting credits ran out in the middle of the first build, before the academy could see a preview, and later the AI team restyled the site without being asked. We changed equipe because of both: the first version is now on us, and a live release of an imported site is refused when its look moves away from the original design without a customer request."
sources:
  - title: "Golden Boot Academy (live site)"
    url: "https://goldenbootacademy.app"
    accessed: "2026-11-28"
---

Golden Boot Academy coaches soccer players from age 5 to adult in the San Francisco Bay Area: one-on-one sessions, small groups and camps. It was equipe's first paying customer, and it agreed to let us tell its story. I am telling it with the parts that went wrong, because those taught us the most.

All times and numbers come from equipe's own records of the project. The academy's people are not named; the business is.

<figure><img src="/blog/cases/golden-boot-home.webp" width="1200" height="750" loading="lazy" alt="The Golden Boot Academy home page: a dark hero with the headline Your pro journey starts here, three kinds of training, and a form to join the email list" /><figcaption>goldenbootacademy.app today: the home page with the email list sign-up. Built and run by the academy's equipe team.</figcaption></figure>

## Where they started

The academy already had a sales page for its packages, made with an AI tool and hosted on a free address. It looked good. But it was a set of static pages: the FAQ still said "Question goes here?", the Book button opened an empty email, there was nowhere for a player to sign up, and nothing was measured. Changing it meant going back to the tool and hoping nothing else broke.

That is a very common starting point. In our sign-up survey, "I built something in Claude, Lovable or Base44" is one of the answers people pick most.

## What the team did in the first session

The academy pasted its page address into equipe on 21 November 2026 in the evening.

- **20 seconds:** its team and cloud computer were ready.
- **About 70 seconds:** the PM's first report. It said what the site sold, with the prices, what worked and what was broken (the placeholder FAQ, the Book button), and proposed a first sprint of five items.
- **About 14 minutes:** the six pages were rebuilt as a real, editable site, close to the original down to the page height, with the text, prices, photos, videos and scroll effects carried over.

The engineers also asked three questions only the academy could answer: how many days until a review call, the minimum player age, and the refund rule. The answers ("3 days", "6", "cancel anytime, prorated") went into the FAQ and the booking flow.

## What is live now

Within three days the site was live on its own domain, goldenbootacademy.app, with HTTPS. Today it has:

- the original pages, rebuilt and faster on phones;
- **player sign-up and accounts**, with email codes and passkeys;
- **booking requests** that are saved, emailed to the academy and listed in an admin page;
- **real FAQ answers** and an email list sign-up;
- a privacy policy and terms, a contact form, analytics, a sitemap and an llms.txt for AI search engines.

<figure><img src="/blog/cases/golden-boot-admin.webp" width="1200" height="250" loading="lazy" alt="The Golden Boot Academy admin home: counts of bookings, applications and members for the last 7 days" /><figcaption>The academy's admin page, built by its team: bookings, applications and members at a glance.</figcaption></figure>

Within the first week live, real visitors were signing up and sending real booking requests, and the academy can now see every one of them in its admin page.

## What went wrong, and what we changed

**The starting credits ran out mid-build.** The PM estimated the first sprint at about $2 of work; it used about $8, and the free credits ran out about 20 minutes in, just before the academy would have seen a preview. A first-time customer should never stop right before the moment that makes it real. We changed the first part: the first version is now on us. Making sure a new customer's first session always reaches a preview before any other work starts is something we are still working on.

**The team restyled the site without being asked.** A self-started "design system" pass changed buttons, type and the hero layout across every page. The academy's team then spent its own messages adjusting it. The academy kept the new look in the end, but that is not the point: a team should not change a brand it was not asked to change. equipe now checks every live release of an imported site against its original design, at desktop and phone width, and refuses one whose look moves away from it, unless the change answers something the customer asked for.

**"Done" did not always mean live.** A finished change once waited for hours before going live while the PM called it done. One part of this has shipped: a live release can now only come from the team's finished main line of work, never from a half-done branch. Making the PM's "done" always mean "live on your site" is something we are still working on.

None of these were about the AI's ability to build. They were about the parts around it: money, order of work and plain communication. That matches what I see across projects, and it is why I think the team around the model matters more than the model.

## What it cost

Without sharing the academy's bill: the first rebuild used about $8 of work, and the first live version of a typical equipe project uses a median of 477 credits (about $4.77), according to our records of 11 projects. The academy's domain was paid from credits at the yearly price it approved. A small business would usually pay a freelancer a few thousand dollars for the same features, according to the 2026 guides our [cost calculator](/tools/app-cost-calculator/) cites.

## What the academy's team actually did

They described what they wanted in plain words, answered the questions only they could answer, approved going live and the domain, and pushed back when something felt wrong ("not full screen", "feels congested"). That is the right amount of involvement: decisions and taste, not hosting settings.

## Lessons if you are in the same spot

1. **Bring what you already have.** You do not need to start over; a rebuild from an existing page took 14 minutes here.
2. **Write down your rules first.** Refunds, ages, response times. They are the questions that block a build.
3. **Ask for a preview before anything else.** Seeing it is what makes it real.
4. **Say no to changes you did not ask for.** You approve what goes live.

To try it with your own site or idea, see [how to build a website or app without coding](/blog/build-a-website-or-app-without-coding/), or start from the [soccer academy website guide](/websites/soccer-academy/).
