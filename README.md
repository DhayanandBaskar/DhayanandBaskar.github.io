# Resume and portfolio maintenance

This repository contains the public portfolio, engineering articles, HTML resume, and downloadable PDF resume for Dhayanand Baskar.

This file is an internal editing guide. Do not link it from the website or the resume.

## Positioning

- Present Dhayanand as a Senior Software Engineer with strong product ownership and distributed-systems depth.
- Use `Software Engineer` or `Full-stack Software Engineer` for roles that included frontend and backend work. Do not narrow the profile to `Backend Engineer`.
- Make ownership explicit when it is true. At Personio, Dhayanand was the main engineering driver for the capabilities described, not merely a contributor.
- Show end-to-end scope: problem framing, user workflows, architecture, implementation, data, integrations, rollout, observability, migration, and production operation.

## Resume rules

### Optimize for the 30-second scan

- Put current and strongest work first.
- Lead bullets with the most important signal: ownership, outcome, scale, or technical difficulty.
- Keep the strongest numbers easy to find, especially `2M+`, `~70% P95`, `~60% P99`, `three days to four hours`, and `3B+ platform scale`.
- Use selective bolding for the signal, not entire sentences.

### One distinct signal per bullet

Each bullet should prove something different. Prefer this mix:

1. Primary ownership and product scope.
2. A measurable user or business outcome.
3. Scale or performance.
4. Correctness, reliability, or operational maturity.
5. Cross-functional influence or a difficult architectural decision.

Remove bullets that repeat a responsibility without adding new evidence.

### Write evidence, not job descriptions

Use this structure when possible:

`Action and ownership + problem or constraint + technical choice + outcome`

Good:

> Main engineering driver for absence-management capabilities, owning problem framing through production operation.

Weak:

> Worked on absence-management features.

### Ownership language

- Use `main engineering driver`, `owned`, `led`, `designed`, or `initiated` only when accurate.
- State personal contributions separately from team or company context.
- Do not imply that a company-scale metric was caused by one project. For example, describe Grab's 3B+ rides as the platform scale at which the work operated.
- Name collaboration when it demonstrates influence: Product, Design, Payroll, Reporting, domain specialists, or platform teams.

### Metrics and claims

- Prefer verified numbers and meaningful before-and-after comparisons.
- Do not force metrics onto work whose value is better shown through scope, correctness, or complexity.
- Keep terminology consistent between the website and PDF.
- Never invent revenue, adoption, latency, scale, or leadership claims.

### Experience depth

- Give the most space to Personio and Forto.
- Keep Thoughtworks / Grab focused on real-time marketplace work and the end-to-end driver-recognition initiative.
- Compress older Whatfix and Mphasis experience to preserve chronology without burying current evidence.
- Skills listed in the sidebar must be supported by work described somewhere in the resume or portfolio.

## Website rules

- The website may provide more narrative detail than the two-page resume, but the claims and numbers must match.
- Keep the visual style simple, editorial, and personal. Avoid generic AI landing-page patterns, gradients, excessive cards, animation, or decorative effects.
- Keep the profile photo in color.
- Keep engineering articles under `/blogs/` and the downloadable resume at `/Dhayanand-Baskar-Resume.pdf`.
- Do not expose private notes, employer documents, interview preparation, or this maintenance guide through website navigation.

## PDF quality bar

- Preserve the current two-page A4 format.
- Generate the PDF from `resume.html` using the print rules in `resume.css`.
- Check both rendered pages visually after every content or layout change.
- Confirm that no text is clipped, no section crosses a page boundary, URLs remain readable, and the page count is exactly two.
- Keep the PDF download cache version in `index.html`, `app/page.tsx`, and `resume.html` synchronized.

## Validation and publishing

Before publishing:

```bash
npm test
git diff --check
```

Then verify the generated PDF visually, commit only intended files, and push `master` to the personal GitHub remote. Personal-repository commits do not require GPG signing.
