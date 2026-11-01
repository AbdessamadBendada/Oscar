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
3. **High-fidelity mockup** — static HTML/CSS for client sign-off ✔ *(the standalone
   `high-fidelity-design/` and `mockup/` folders were removed on 1 Nov 2026; both are in
   git history — see §32)*
4. **Working website design** — the full seven-page navigable site ← *current stage;
   client comment rounds on 15, 28 and 31 Oct, see §§22, 27, 30*
5. **Divi 5 build** — converted to a native Divi WordPress page via the `html-to-divi5`
   workflow

## Structure

**The repo root is the site.** The seven pages sit at the top level with their own
`css/`, `js/` and `assets/`.

| Path | Contents |
|---|---|
| `index.html` | Homepage |
| `about.html` | About Oscar de Grauw |
| `work-with-us.html` | Work With Us — the new service page, built 31 Oct (§30) |
| `detox.html` | The DETOX — the older service page, still on the pre-rework structure |
| `diagnostic.html` | OPS Detox Diagnostic™, with a working demo of the audit |
| `contact.html` | Contact — message form plus a slot for the booking embed |
| `freebie.html` | Freebie opt-in (Startup Financial Model Template) |
| `css/site.css` | The full design system, expanded and sectioned for editing |
| `js/site.js` | Nav, module popups, forms, switch, reveal, wide O/D wrapping |
| `js/diagnostic.js` | The demo diagnostic — questions and scoring live here |
| `assets/` | Fonts, icons, images, logos, patterns, social icons — self-contained |
| `playground/` | **Not site pages.** Review artefacts, frozen records and demos — see below |
| `content/copy.md` | Full sitemap and all client-supplied copy, organised per page |
| `content/oscar-bio.md` | Background, credentials and proprietary frameworks |
| `Brand assets/` | Logos, fonts, patterns, icons, brand guideline, campaign artwork. **Gitignored — local only** |
| `reference/` | Source material — **not committed**, see `.gitignore` |
| `HANDOFF.md` | The project record: what was built, why, and what is still open |
| `AGENTS.md` | Working rules — review artefacts, locked copy, what not to "fix" |

### Run it

Open `index.html` in a browser, or serve the root:

```
python3 -m http.server 8777
```

Everything is relative-path and self-contained — no build step, no dependencies, no CDN.

### `playground/`

Nothing in here is linked from the nav, and nothing in here is a dependency of a site
page. The files reach the shared stylesheet, script and assets with `../`.

| File | What it is |
|---|---|
| `hero-sections.html` | Five alternative hero treatments, tabbed (§20) |
| `hero-ivory.html` | The Soft Ivory hero comparison — approved and promoted into `index.html`, now a frozen record (§28) |
| `home-comments.html` | The 15 Oct client-comments homepage build (§22), superseded once its hero went live |
| `about-hero.html` | Standalone demo the About hero options were reviewed in (§29) |
| `index-old.html` | The pre-rework homepage, kept as a reference |
| `parked-sections.html` | Holding file for the Cost and System sections, cut from the homepage but kept for reuse (§25) |

## Rules

- **Copy is locked.** Client-supplied text ships verbatim. Nothing is rewritten, corrected or "improved" without explicit approval — including known typos, which are listed below.
- Anything drafted on the client's behalf is a placeholder until he approves it, and is
  marked as such on the page as well as in the handoff.
- Placeholder imagery is labelled on the page as such until real assets arrive.

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
  `playground/hero-sections.html` (§20).
- **Where the frameworks live** — their own section (what `playground/home-comments.html` builds)
  or woven into the two offers as what each delivers.
