# OPS DETOX™ — Website Project

Website build for **Oscar de Grauw**, founder of OPS Detox™ — operational detox for scale-ups.

## Process

1. **Copy & assets** — collected from client
2. **Design direction** — clean & calm: monochrome ink on off-white, one clinical-green accent, generous whitespace
3. **High-fidelity mockup** — static HTML/CSS for client sign-off ← *current stage*
4. **Divi 5 build** — mockup converted to a native Divi WordPress page via the `html-to-divi5` workflow

## Structure

| Path | Contents |
|---|---|
| `mockup/index.html` | Homepage |
| `mockup/detox.html` | The DETOX — the service page (problem, system, seven modules, 3 steps, fit, outcomes) |
| `mockup/diagnostic.html` | Audit — OPS Detox Diagnostic™ |
| `mockup/about.html` | About Oscar de Grauw |
| `mockup/contact.html` | Contact |
| `mockup/freebie.html` | Opt-in — The Startup Financial Model Template |
| `mockup/css/site.css` | Shared stylesheet — design tokens and all components |
| `mockup/js/site.js` | Shared behaviour — module popups, noise/clarity toggle |
| `content/copy.md` | Full sitemap and all client-supplied copy, organised per page |
| `content/oscar-bio.md` | Background, credentials and proprietary frameworks |
| `assets/` | Logo, fonts and imagery (empty — awaiting client) |
| `reference/` | Source material — **not committed**, see `.gitignore` |

## Rules

- **Copy is locked.** Client-supplied text ships verbatim. Nothing is rewritten, corrected or "improved" without explicit approval — including known typos, which are listed below.
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
