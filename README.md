# OPS DETOX™ — Website Project

Website build for **Oscar de Grauw**, founder of OPS Detox™ — operational detox for scale-ups.

**`HANDOFF.md` is the detailed record of this project** — sectioned, with a dated change
log at the top. `AGENTS.md` holds the working rules. Read those two before editing
anything; this file is just the orientation.

## Process

1. **Copy & assets** — collected from client
2. **Design direction** — the OPS Detox brand system, per
   `OPS_DETOX_BRAND_GUIDELINE_V1.0.pdf`: Deep Green and Soft Ivory grounds, Detox Green
   only ever on Deep Green, pill buttons, round-rect cards, logo-derived picture frames
   and the before/after switcher device. *(This replaced the earlier calm, monochrome
   direction in the 10 Oct rework — see §8 of the handoff.)*
3. **High-fidelity mockup** — static HTML/CSS for client sign-off ✔
4. **Working website design** — the full six-page navigable site ← *current stage; first
   round of client comments received 15 Oct, see §22*
5. **Divi 5 build** — converted to a native Divi WordPress page via the `html-to-divi5`
   workflow

## Structure

| Path | Contents |
|---|---|
| `website-design/` | **The live deliverable** — six pages, real navigation, working interactions, responsive. No backend, no build step. Has its own README |
| `high-fidelity-design/` | Approved high-fidelity homepage, minified CSS — visual reference only |
| `mockup/` | Original static mockups and the client wireframe reference — superseded by `website-design/` |
| `content/copy.md` | Full sitemap and all client-supplied copy, organised per page |
| `content/oscar-bio.md` | Background, credentials and proprietary frameworks |
| `Brand assets/` | Logos, fonts, patterns, icons, brand guideline, campaign artwork. **Gitignored — local only** |
| `reference/` | Source material — **not committed**, see `.gitignore` |
| `HANDOFF.md` | The project record: what was built, why, and what is still open |
| `AGENTS.md` | Working rules — review artefacts, locked copy, what not to "fix" |

Two files inside `website-design/` are **client-review artefacts, not pages of the
site**: `hero-sections.html` (five alternative hero treatments, §20) and
`home-comments.html` (the homepage with the 15 Oct client comments applied, §22).
Neither modifies the live site.

## Rules

- **Copy is locked.** Client-supplied text ships verbatim. Nothing is rewritten, corrected or "improved" without explicit approval — including known typos, which are listed below.
- Anything drafted on the client's behalf is a placeholder until he approves it, and is
  marked as such on the page as well as in the handoff.
- Images in the mockup are deliberate grey placeholder boxes until real assets arrive.

## Known copy issues — flagged, not fixed

| Location | Issue |
|---|---|
| Outcomes, stat 2 | `aster decision cycles` — missing the "f" in "faster" |
| Problem paragraph | `...that's how we've always done it.` — no closing quotation mark |
| DETOX page, 3-step heading | `From clutter to floW in 3 stesp` — "stesp" and the stray capital W |
| Footer | Canva placeholder details: `hello@reallygreatsite.com`, `123 Anywhere St.`, `(123) 456 7890` |

## Outstanding from client

- [ ] Real address, email, phone
- [ ] Client logos for the trust row
- [ ] Testimonial text and attribution ×4
- [ ] Detail copy for the seven module popups
- [ ] Photography of Oscar
- [ ] Logo files, brand fonts and colours
- [ ] Calendly or meetergo — pick one
- [ ] Diagnostic tool platform
- [ ] "Results" appears in the nav but has no copy yet

From the 15 Oct comments (§22):

- [ ] The two offers, named, with a one-line description each — the build assumes the
      existing Operational flow / Organisational flow
- [ ] Real copy for the three frameworks, plus two naming questions: the full expansion
      of DRMT™, and whether See – Strip – Choose™ replaces The CORE method™
- [ ] The updated audit page with the "Noise Tax" calculator — the client is building
      it. `diagnostic.html` is frozen until it arrives. It is an interactive tool, not a
      copy drop

## Open decisions

- **Does the homepage lead with the founder's payoff or with the cleanse?** The client
  wants the site to say the founder is released from the operational noise and wins his
  time back for growth; the current H1 and the page's whole spine sell the method
  instead. Highest-value open item — §22.6. Bundle it with the hero decision below:
  two of the five hero options already carry that promise in their headline.
- **Homepage hero direction** — five options built and waiting in
  `website-design/hero-sections.html` (§20).
- **Where the frameworks live** — their own section (what `home-comments.html` builds)
  or woven into the two offers as what each delivers.
