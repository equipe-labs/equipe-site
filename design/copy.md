# equipe.im — v1 landing copy

Source of facts: https://github.com/equipe-labs/equipe (README). Nothing below goes beyond it.
Language: English. Tone: plain, concrete, a little dry. No hype words ("revolutionary", "10x"). Name is always lowercase: **equipe**.

## Metadata

- **Title** (47 chars): `equipe — an AI software squad led by one person`
- **Meta description** (151 chars): `equipe is an open-source AI software squad: role-based agents work from a shared board in isolated git worktrees, and you approve before anything merges.`
- **Canonical:** `https://equipe.im/`
- **OG title:** same as title · **OG description:** same as meta description · **OG image:** `design/og.png` (alt: "equipe — an AI software squad led by one person")
- **Structured data:** `SoftwareApplication` (name equipe, license MIT, applicationCategory DeveloperApplication, codeRepository github.com/equipe-labs/equipe) and `FAQPage` generated from the FAQ below, verbatim.

## Heading outline

```
H1  Your AI software squad, led by you.
 H2 How it works
  H3 Roles · H3 Tickets · H3 Branches · H3 Your approval
 H2 Who equipe is for
 H2 Get started
 H2 Frequently asked questions
  H3 (one per question)
 footer (no heading)
```

---

## 1 · Hero

**H1:** Your AI software squad, led by you.

**Definition (lead paragraph — quotable on its own):**
equipe is an open-source AI software squad: a team of role-based agents (PM, Designer, Frontend, Backend, QA and Data) that works on your repository through a shared board, in isolated git worktrees, and waits for a person's approval before anything merges.

**Support line:** equipe isn't another agent loop. It's the team layer on top of the ones that already exist — Codex and Claude Code today.

**Primary CTA:** View on GitHub → `https://github.com/equipe-labs/equipe`
**Secondary CTA:** Get started → `#get-started`

**Status chip (under CTAs):** Early-stage · MIT licensed

---

## 2 · How it works

**H2:** How it works

**Intro:** One person leads. The squad works in parallel. Everything passes through the board.

**H3:** Roles
Each member has a role — PM, Designer, Frontend, Backend, QA or Data — with a model suited to that role and its own memory.

**H3:** Tickets
The board is the single source of truth. Members coordinate through tickets and immutable events, not chat, so every action leaves something you can see.

**H3:** Branches
Each member works in its own isolated git worktree, on its own branch, so several can work on your repository at the same time without touching your checkout.

**H3:** Your approval
You stay in the loop at the approval gates. Nothing merges until you say so.

---

## 3 · Who equipe is for

**H2:** Who equipe is for

equipe is for people who want to lead a small software team of AI agents instead of prompting one agent at a time. You set the direction and review the work. The squad splits it into tickets and does it on branches.

- **You already use Codex or Claude Code.** equipe drives them; you sign in the way you already do.
- **You want parallel work you can review.** Each change arrives as a branch, never as a surprise on your main line.
- **You want to keep the decisions.** Approval gates sit where they matter, so the call stays yours.

**Proof line:** This site was built by an equipe squad, in public. Every change started as a ticket and landed as a branch a person accepted.

---

## 4 · Get started

**H2:** Get started

**Intro:** equipe is installed from source today. You need Rust 1.88+ and git. The Claude engine also needs the `claude` binary.

```bash
git clone https://github.com/equipe-labs/equipe && cd equipe
cargo install --locked --path crates/cli
```

Sign in to an engine, check it's ready, then open the squad console:

```bash
equipe login     # sign in to Codex or Claude Code
equipe status    # check engine readiness and model availability
equipe           # open the squad console
```

Want a first taste without the board? Let one agent edit your repo on a new branch, in an isolated worktree:

```bash
equipe try --edit "…"
```

**Link:** Read the docs on GitHub → Roadmap · Architecture

---

## 5 · FAQ

**H2:** Frequently asked questions

**What is equipe?**
equipe is an open-source AI software squad. It coordinates agents in roles such as PM, Designer, Frontend, Backend, QA and Data around a shared board. They work in isolated git worktrees, and a person approves before changes merge.

**Is equipe another AI coding agent?**
No. equipe is the team layer on top of existing agent engines, not a new agent loop. It adds roles, a board as the single source of truth, isolated git worktrees for parallel work, and human approval gates.

**Which AI engines does equipe work with?**
equipe drives Codex and Claude Code today. It is designed to support more engines through the Agent Client Protocol.

**Does equipe handle my credentials?**
For Claude Code, no. You run the unmodified `claude` binary and sign in yourself, so billing goes to your own account. For Codex, equipe signs in with OAuth using your ChatGPT plan and identifies itself honestly as `originator: equipe`.

**How do I install equipe?**
Install it from source with Rust 1.88+ and git: clone `github.com/equipe-labs/equipe`, then run `cargo install --locked --path crates/cli`. The Claude engine also needs the Claude Code binary.

**Who approves the work?**
You do. Each member works on its own branch in an isolated worktree, and equipe asks for human approval before a branch merges. The PM accepts work onto the board; the person leading the squad decides what lands.

**Is equipe free and open source?**
Yes. equipe is released under the MIT License and has been open source since its first commit. equipe itself is free. Claude Code and Codex run on your own Anthropic and OpenAI (ChatGPT) subscriptions or accounts.

**Is equipe ready for production use?**
equipe is early-stage. The squad daemon runs in the background, the PM accepts work, agents work on branches in sandboxes, and you approve before merge. Handoffs and communication channels are coming next, as listed on the roadmap.

---

## 6 · Footer

- [GitHub](https://github.com/equipe-labs/equipe) · [Roadmap](https://github.com/equipe-labs/equipe/blob/main/docs/ROADMAP.md) · [Architecture](https://github.com/equipe-labs/equipe/blob/main/docs/ARCHITECTURE.md)
- MIT License
- Built by an equipe squad, in public.

---

## Notes for frontend

- The FAQ is plain visible text (use `<details>` only if the answer stays in the DOM, which it does); mirror it exactly in the `FAQPage` JSON-LD.
- Each FAQ answer is written to stand alone: it names "equipe" and does not rely on "it" from a prior answer.
- Open questions for the person: whether equipe.im should link a docs page later.
- Resolved (T-13): Codex cost wording. The person confirmed that Codex runs on a ChatGPT subscription, so the FAQ no longer says it is "billed to your own account".
