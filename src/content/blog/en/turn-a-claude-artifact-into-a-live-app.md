---
title: "Turn a Claude artifact into a live app: a plain-English guide"
description: "You built something useful in a Claude chat. Here is what is missing before real customers can use it, and how to close the gap step by step, with or without code."
lang: en
date: 2026-11-21
tags: ["claude", "artifact", "launch"]
imageAlt: "Turn a Claude artifact into a live app — equipe blog"
faqs:
  - q: "Can a Claude artifact be a real app?"
    a: "An artifact is a working front end that lives inside Claude. To become an app that customers use, it also needs its own web address, hosting, a place to keep data, and someone to keep it running. The artifact code is a good starting point for that."
  - q: "Do I need to rewrite my artifact to put it live?"
    a: "Usually not from scratch. Most of the interface can be kept. What changes is everything the artifact assumed: where data is stored, how sign-in works, and which keys it uses. Those parts are replaced with real ones."
  - q: "Does equipe import a Claude artifact in one step?"
    a: "Not yet. One-step import with a database and a domain is on our list but has not shipped. Today you share the artifact's code or describe it, and the equipe team moves it for you and sets up hosting, a database and a domain."
  - q: "What will it cost to host my artifact as a real app?"
    a: "A simple static page can be very cheap to host. Once you add a database, a domain and ongoing changes, plan for a monthly fee. On equipe, the Team plan is $19 a month and Hosting only is $19 a month; see the pricing page for details."
---

If you have built something useful in a Claude chat, you are closer to a real product than you may think, and further than it feels. The interface works. You can click through it. But a chat window is not a place customers can find, trust or rely on.

This guide explains the gap between "it works in Claude" and "customers can use it", and how to close it. It applies whichever route you take: doing it yourself with a hosting service, using an app builder, or handing it to a team.

<p class="answer"><strong>The short answer.</strong> Copy out the code, replace everything the artifact was pretending (data, sign-in, keys), put it on hosting with a database and your own domain, test it on a phone, and add basic analytics. Then launch to a handful of real people.</p>

## What a Claude artifact is, and what it is not

An artifact is a self-contained piece of software Claude produces next to a conversation: a page, a small tool, a calculator, a tracker. It runs inside Claude, so you and the people you share a link with can use it without installing anything.

That is also its limit. It is a **sketch that works**. It lives where Claude put it, at an address that is not yours, and it was built to demonstrate an idea rather than to carry customers' data for months. Four things are usually missing:

- **An address of its own.** A page on your domain, such as `bookings.yourstudio.com`, that you control and can move.
- **A real database.** Many artifacts keep data in the visitor's browser or in sample data. If someone clears their browser, the data is gone, and you cannot see it either.
- **Real sign-in and permissions.** Who is allowed to see what? Who is the admin?
- **Someone to run it.** Updates, outages, security fixes and "it is broken on my phone" messages.

None of this is a flaw in the artifact. It is simply the difference between a prototype and a product. For a fuller definition of "real", see [our guide to launching a product without code](/blog/launch-a-real-product-without-code/).

## Step 1: take stock of what you built

Before moving anything, write down in plain words:

1. **What it does.** One sentence. If it takes three, you may have built two things.
2. **Who uses it.** You alone, a few friends, or the public?
3. **What data it handles.** Names? Emails? Payments? Anything private?
4. **What it assumes.** Does it call another service? Does it use a key you pasted in? Does it only work because the sample data is baked in?

The answers decide how much work the move is. A calculator that stores nothing is a small job. A booking tool that takes people's contact details is a larger one, because personal data raises the bar for security and privacy.

## Step 2: get the code out

Ask Claude for the complete code in one piece: "Give me the full source of this artifact as a single file, with comments marking anything that is a placeholder." Save it somewhere you can find it. This is also your backup, and it is worth keeping even if you never touch it again.

You do not need to read the code. You only need to hold on to it and be able to hand it to whoever or whatever will move it.

## Step 3: replace what the artifact was pretending

This is the real work. Go through the list of assumptions from step 1 and decide, for each one, what the live version does instead.

| The artifact pretended | The live app needs |
| --- | --- |
| Sample data baked into the page | A database that stores real entries and survives restarts |
| Saving to the browser | Saving on a server, so you and your users can see the same data |
| "Anyone with the link" access | Sign-in, with a clear difference between a customer and an admin |
| A key pasted into the code | A secret store; keys never appear in the code or in a chat |
| It only runs while you watch | Hosting that runs all day, and error reports that tell you when it fails |

Ask the same questions about edge cases. What if two people book the same slot? What if the email never arrives? What if a visitor types something unexpected into a form? An AI assistant or a human reviewer should raise these before launch; if nobody does, you will meet them as customer complaints.

## Step 4: hosting, a database and a domain

Three pieces of plumbing make the difference between an artifact and a service.

- **Hosting** serves your app to anyone, any time. A simple page with no data can sit on a static host cheaply. An app with sign-in and data needs somewhere to run server code too.
- **A database** keeps what users enter. Choose one that you or your team can export from, so you are never locked in.
- **A domain** is a name you own, with a security certificate so browsers show the padlock. Buying one takes minutes; connecting it correctly is where people lose an evening.

If you do it yourself, expect to learn accounts, settings and a little DNS. If you use an app builder, much of it is built in, though you still make choices about plans and publishing. On equipe, the team sets up hosting, a database and the domain, and asks for your approval before anything goes live or costs money. We have a note about [what that approval means](/blog/is-equipe-safe-data-money-approvals/).

## Step 5: test it like a stranger

Open the live address on your phone, on mobile data, in a private window, with no sign-in saved. Then:

- Complete the main task from start to finish.
- Try to break it: empty fields, a very long name, the back button, a slow connection.
- Check that the page looks right in dark mode, if your visitors might use it.
- Send the link to one person who has never seen it, and watch without helping.

Fix the first three problems you find. Do not try to fix everything. You want the product good enough that a handful of real people can use it, not perfect.

## Step 6: add basic analytics, then launch small

Install privacy-friendly analytics before you invite anyone, so you can answer three questions: how many people came, how many did the main thing, and how many returned. Then invite five to ten real people yourself, personally, not a public launch. Ask them what confused them. Change one thing a week. The loop is described in [our guide to build, measure, learn](/blog/build-measure-learn-with-an-ai-team/).

## Where equipe fits, honestly

equipe is an AI startup team for people who cannot code: a PM, engineers, a designer, QA and a data analyst, all AI agents. It is built for exactly this moment: you have something working in Claude and need it to work for customers. The team sets up hosting, a database and your own domain, and you never sign in to a code host, hosting service or cloud console. Anything that goes live, costs money or reaches your customers waits for your approval.

What is not true yet: **one-step import from Claude is not shipped.** Today, you share the artifact's code (or just describe what it does) and the team moves it for you. We list this on the home page under "Coming" because we would rather tell you now than have you find out after signing up. You can start free, with $5 of credit and no card, and see the pricing details on the [pricing page](/pricing/).

If you would rather do it yourself, steps 1 to 6 above work without us.

## A short checklist

- [ ] I have the full source saved
- [ ] I know what data it handles, and whether any of it is personal
- [ ] Sample data and browser-only storage are replaced by a real database
- [ ] Sign-in and an admin role exist if anyone besides me uses it
- [ ] Keys are in a secret store, not in the code
- [ ] It lives on an address I control
- [ ] I tested it on a phone as a stranger would
- [ ] Analytics count visits, the main action and returns
- [ ] I have invited five real people

A working artifact is a good idea made visible. Turning it into a service is mostly plumbing, and plumbing is a solved problem. The only thing left to figure out is whether people want what you built, and the sooner it is live, the sooner you will know.
