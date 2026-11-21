---
title: "Three numbers a small product should track: visits, activation, return"
description: "Define and count visits, activation and return for a small product, read the combinations, avoid common mistakes, and run a weekly review. Privacy-friendly."
lang: en
date: 2026-11-21
tags: ["metrics", "analytics", "guide"]
imageAlt: "Three numbers a small product should track: visits, activation, return — equipe blog"
faqs:
  - q: "What are the three numbers a small product should track?"
    a: "Visits (how many people arrived), activation (how many did the one thing your product exists for) and return (how many came back later). Together they tell you whether your message, your first experience and your usefulness are working, without needing a large analytics setup."
  - q: "Do I need cookies or personal data to measure these?"
    a: "No. You can count visits, key actions and returns without knowing who anyone is. On products built on equipe, analytics uses no cookies, stores no IP address, keeps only a two-letter country and a random anonymous id in the visitor's browser, and deletes events after 180 days."
  - q: "How many users do I need before the numbers mean something?"
    a: "There is no magic threshold. With a small number of visitors, one person can swing a percentage, so read counts and stories next to the ratios. Watch the direction over several weeks, and talk to the people behind the numbers before changing course."
  - q: "What is the difference between activation and sign-up?"
    a: "A sign-up means someone gave you their details. Activation means they did the thing your product exists for, such as booking a slot or logging a first habit. Many products have plenty of sign-ups and almost no activation, which is why sign-up alone is a poor measure."
---

When you launch a small product, the temptation is to watch everything: page views, followers, time on page, a dozen charts. Most of it is noise. A tiny team, or a team of one, can only act on a few signals.

Three numbers cover almost everything a young product needs to know: how many people arrived, how many did the thing that matters, and how many came back. This guide defines each one precisely, shows how to count it without invading anyone's privacy, and gives you a weekly review you can run in twenty minutes.

<p class="answer"><strong>The short answer.</strong> Track visits (people who arrived), activation (people who did the one thing your product exists for) and return (people who came back later). Read them as a set: low visits is a reach problem, low activation is a first-experience problem, low return is a usefulness problem. Change one thing a week.</p>

## The three numbers, defined precisely

Vague metrics cannot be acted on, so write each definition down before you launch.

**1. Visits.** The number of distinct people who arrived in a period, usually a week. "Distinct" matters: one person opening your page five times is one visitor. Page views and visitors are different numbers, and visitors is the one to keep.

**2. Activation.** The number (and share) of visitors who did the single action your product exists for. You choose it, and it must be an action, not a feeling. For a booking page, it is "made a booking". For a habit tracker, "logged a first habit". For a newsletter, "confirmed a subscription". Activation rate is activated people divided by visitors.

**3. Return.** Of the people who activated, how many came back and did the action again within a set window, such as seven days. This is the best early sign that your product is useful rather than merely interesting. Return rate is returning people divided by activated people from the same earlier period.

If you wrote a proof sentence before building, as in [our launch guide](/blog/launch-a-real-product-without-code/), your activation action is usually already in it.

## How to count each one

You do not need a data degree. You need to decide what the "event" is for each number and make sure something records it.

| Number | What you record | How to count it | Example |
| --- | --- | --- | --- |
| Visits | A visit event when the page loads | Distinct visitor ids in the week | 120 visitors this week (an invented, round example) |
| Activation | One named event when the key action succeeds | Visitors who fired that event, divided by visitors | 24 of 120 booked, which is one in five |
| Return | The same key event again in a later week | Activated people who came back, divided by activated people | 6 of 24 booked again the next week |

The example numbers are invented and round, only to show the arithmetic. They are not a benchmark and do not suggest what any product should achieve.

Two practical points. First, count **successes**, not clicks: "booking confirmed", not "pressed the Book button". Second, keep the same definitions every week. If you change the definition, write down the date, because the numbers before and after are no longer comparable.

## How to read the combinations

The point of three numbers is how they combine. Read them together, and compare each against your own earlier weeks rather than against other products.

| Visits | Activation | Return | What it usually means | What to do next |
| --- | --- | --- | --- | --- |
| Low | High | High | The product works for the few who find it | Work on reach: where your people are, how you describe it |
| High | Low | Not applicable yet | People come, but the message or first screen fails them | Rewrite the headline, shorten the first step, test on a phone |
| High | High | Low | People try it and do not come back | Talk to a few who left; improve what happens after the first use |
| High | High | High | Something is working | Protect it. Change one thing at a time and keep measuring |
| Low | Low | Low | No signal yet | Go back to interviews; the problem or the group may be wrong |

"High" and "low" are relative to your own history and your own goals. There is no universal line that makes a number good, and we will not invent one.

Behind every cell is a conversation. If activation is low, the numbers cannot tell you why; five minutes with three real visitors can. The interview habits in [12 interview questions for validating an idea](/blog/validate-startup-idea-interview-questions/) work just as well after launch.

## Common measurement mistakes

- **Counting page views as visitors.** A refresh is not a new person.
- **Counting sign-ups as activation.** A form filled in is not the thing your product exists for.
- **Counting yourself.** Your own testing inflates visits and activation. Exclude yourself, or at least note how many test events you made.
- **Counting clicks instead of successes.** If the booking failed, nobody was served.
- **Changing definitions mid-stream.** Then last week and this week cannot be compared.
- **Measuring too many things.** Ten charts produce no decisions. Three produce one.
- **Reading a single day.** Weekends, newsletters and one social post make single days jump around. Compare whole weeks.
- **Treating a ratio as truth with very few people.** See the next section.

## Be careful with small numbers

Small products have small numbers, and small numbers are jumpy. If five people visit and one activates, that is twenty percent, but one person changing their mind would make it zero or forty.

There is no honest, universal threshold at which numbers become trustworthy, so we will not give you one. Use these habits instead:

- **Always read the count next to the ratio.** "One of five" is a different statement from "twenty percent".
- **Compare several weeks, not two.** A direction that holds over a month means more than a jump in one week.
- **Pair numbers with stories.** Three short conversations can explain a number that no chart can.
- **Change one thing at a time.** If you change the headline and the price together, you will not know which worked.
- **Be willing to say "too early to tell".** That is a legitimate result, and it usually means: bring more people, then look again.

Simple A/B tests (two versions of a page, one goal event) are useful once you have enough people that the difference is not just luck. With very few visitors they mostly measure noise.

## Measuring without watching people

You can count all three numbers without knowing who anyone is. You need to know that a visitor came back, not their name.

On products built on equipe, the built-in analytics works this way: no cookies, no IP address stored, only a two-letter country, and a random anonymous id kept in the visitor's own browser. Events are deleted after 180 days. It provides counts, funnels (the steps people go through and where they drop off) and retention (who comes back), plus the simple A/B tests mentioned above.

Whatever tool you use, a few principles apply:

- **Collect only what you will use.** If you will never act on a field, do not store it.
- **Prefer anonymous ids to identities** for visits and returns.
- **Know the limits.** An anonymous id lives in one browser. The same person on a phone and a laptop looks like two people, and someone who clears their browser data looks new. The counts are good for direction, not for exact headcounts.
- **Say so in your privacy page** if you collect personal data at all, for example emails for a newsletter.

## A weekly review template

Set a recurring twenty-minute slot, same day each week. Write answers in a document you keep.

1. **The three numbers.** Visits, activated, returned. Next to each, last week's value and what the definition is.
2. **The one drop-off.** In the path from arriving to activating, which step loses the most people?
3. **What I changed last week.** Exactly one change, and what happened to the number it was meant to move.
4. **What I heard.** Anything a real person said this week, in their words.
5. **My guess about why.** One sentence. Mark it as a guess.
6. **This week's one change.** The smallest thing that could move the biggest drop-off.
7. **Too early to tell?** Note it if so, and decide what you will do to bring more people.

Keep the log. After two months it becomes your best record of what your customers respond to. [Build, measure, learn with an AI team](/blog/build-measure-learn-with-an-ai-team/) covers the loop this review plugs into.

## Where equipe fits

Everything here works with a spreadsheet and any privacy-friendly analytics tool. You do not need equipe to count to three.

If you build on equipe, analytics comes with the product (as described above), and the data analyst on your team reads how people use it. You can ask the PM to review usage and propose changes. Be aware of what is not shipped yet: automatic weekly usage reports with proposals. Until then, you ask, and the PM reviews on request. Anything the team wants to publish or send still waits for your approval.

The [pricing page](/pricing/) lists costs, and [what an AI startup team does](/blog/what-an-ai-startup-team-does/) explains the roles.

## Where to go next

- Write your three definitions today, before anyone visits.
- Check that each event is recorded, and test it yourself once, then exclude your own test traffic.
- Run your first weekly review one week after launch, even if the numbers are tiny.
- If you are working toward paying customers, [the 30-day plan](/blog/idea-to-paying-customers-30-day-plan/) shows where these numbers fit on a calendar.
- For the full path from idea to launch, see [how to launch a real product without code](/blog/launch-a-real-product-without-code/).
