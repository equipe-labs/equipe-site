// Single source for the visible FAQ and the FAQPage JSON-LD.
// Answers are plain text; `backticks` mark inline code (rendered as <code>, stripped in JSON-LD).
export const FAQS = [
  {
    question: 'What is equipe?',
    answer:
      'equipe is an open-source AI software squad. It coordinates agents in roles such as PM, Designer, Frontend, Backend, QA and Data around a shared board. They work in isolated git worktrees, and a person approves before changes merge.',
  },
  {
    question: 'Is equipe another AI coding agent?',
    answer:
      'No. equipe is the team layer on top of existing agent engines, not a new agent loop. It adds roles, a board as the single source of truth, isolated git worktrees for parallel work, and human approval gates.',
  },
  {
    question: 'Which AI engines does equipe work with?',
    answer:
      'equipe drives Codex and Claude Code today. It is designed to support more engines through the Agent Client Protocol.',
  },
  {
    question: 'Does equipe handle my credentials?',
    answer:
      'For Claude Code, no. You run the unmodified `claude` binary and sign in yourself, so billing goes to your own account. For Codex, equipe signs in with OAuth using your ChatGPT plan and identifies itself honestly as `originator: equipe`.',
  },
  {
    question: 'How do I install equipe?',
    answer:
      'Install it from source with Rust 1.88+ and git: clone `github.com/equipe-labs/equipe`, then run `cargo install --locked --path crates/cli`. The Claude engine also needs the Claude Code binary.',
  },
  {
    question: 'Who approves the work?',
    answer:
      'You do. Each member works on its own branch in an isolated worktree, and equipe asks for human approval before a branch merges. The PM accepts work onto the board; the person leading the squad decides what lands.',
  },
  {
    question: 'Is equipe free and open source?',
    answer:
      'Yes. equipe is released under the MIT License and has been open source since its first commit. Using the Claude or Codex engines is billed to your own account with those providers.',
  },
  {
    question: 'Is equipe ready for production use?',
    answer:
      'equipe is early-stage. The squad daemon runs in the background, the PM accepts work, agents work on branches in sandboxes, and you approve before merge. Handoffs and communication channels are coming next, as listed on the roadmap.',
  },
];

export const plain = (s: string) => s.replace(/`/g, '');
