# AGENTS.md — OPS DETOX™

Working rules for any agent in this repo. `HANDOFF.md` is the long-form record; this
file is the short list of things that are easy to get wrong.

## Read first

**`HANDOFF.md` is the source of truth.** It is sectioned (§1–§22) and the dated banners
at the top are the change log. Read the banners plus any section a task touches before
editing. Several decisions in it look like bugs and are not — see "Do not 'fix'" below.

## The deliverable

`website-design/` is the live site: six pages, plain HTML/CSS/JS, no build step, no
dependencies, no backend. Open the files directly or serve the folder. There is nothing
to install and nothing to compile — keep it that way.

Two files in there are **not site pages**. They are standalone client-review artefacts
and are not linked from the nav:

| File | What it is |
|---|---|
| `hero-sections.html` | Five alternative hero treatments, tabbed (§20) |
| `home-comments.html` | The homepage with the 15 Oct client comments applied (§22) |

## Review artefacts: the rule that matters

A review artefact **never modifies the live site.** `home-comments.html` keeps every one
of its changes in a single scoped `<style>` block in its own `<head>`; `index.html` and
`css/site.css` are untouched. `hero-sections.html` carries its own full `<style>` block
for the same reason.

When a change in an artefact is approved, **lift the rule into `css/site.css` and delete
it from the artefact.** The block is a staging area, not a second stylesheet. Do not let
the two drift and do not import one into the other.

`hero-sections.html` duplicates the design tokens from `css/site.css` section 2 by hand.
If the palette moves, it has to be updated manually.

## Copy and content

- **The client's copy is locked and unedited**, including the known typos in the
  homepage problem paragraph. Do not silently correct them.
- Anything you draft on the client's behalf — framework descriptions especially — is a
  placeholder until he approves it. Mark it visibly in the page (see `.fw-draft` in
  `home-comments.html`) and in the handoff, rather than letting draft copy pass as final.
- **Do not invent expansions of the client's trademarked names.** DRMT™ is described as
  "the decision engine" because that is the only description that exists. If a name's
  meaning is unknown, say so and ask.
- The frameworks that belong on the website are **See – Strip – Choose™, Truth Latency™
  and DRMT™**. Async Mastery™, Speak Up Gym™ and the Seven Contextual Gaps™ are workshop
  material and should stay minor — the client's stated goal is to simplify, not to show
  the full catalogue.

## Design system

`OPS_DETOX_BRAND_GUIDELINE_V1.0.pdf` is authoritative, **not** the 30-page logo concept
deck. Detox Green only ever appears on Deep Green. `css/site.css` is written expanded
and sectioned, with the reasoning in comments — read the comment above a rule before
changing it.

## Do not "fix"

These look like mistakes and are deliberate. Each is recorded in the handoff:

- **The baked-in logo pattern in the live hero** (§10) — an explicit user decision. The
  hero exploration drops it, but that is an option for the client, not a correction
  already agreed.
- **`--grad-hero` still defined but unused** (§21) — left in so the old look is a
  one-line revert.
- **The `.removed` wrapper below the final CTA** (§18) — the neon frame and badge are
  review furniture. Delete the wrapper and the sections return to the flow unchanged.
- **The preloader running on every load** rather than once per session (§21) — it is
  under review. The restore is commented inline.
- **Placeholder contact details, legal links and testimonials** — pending client input,
  labelled as such on the page.

## Verifying visual work

There is no test suite. Visual changes are checked headless with Chrome:

```
python3 -m http.server 8777          # from website-design/
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --hide-scrollbars --window-size=1512,982 \
  --screenshot=out.png --virtual-time-budget=5000 \
  "http://localhost:8777/index.html"
```

`--screenshot` captures the viewport only. For sections below the fold, temporarily cap
the hero (`.hero{min-height:620px}`, `.hero--brand .hero-image{height:560px}`) and
render at a tall window size — the hero uses `svh`, so a tall viewport inflates it and
the rest of the page never comes into frame. **Delete any temporary harness files when
done**; they do not belong in the deliverable.

State what you actually verified. "Checked headless at 1512×982" is useful; implying a
full breakpoint and browser sweep that did not happen is not.

## Scope

Client feedback arrives informally, often via WhatsApp, and the client is not a designer
or a copywriter. Build what is clearly actionable; where a comment conflicts with the
site's own structure, say so and leave the decision open rather than settling it
silently. §22.6 is the live example — the founder-vs-cleanse positioning question was
documented, not built.

Commit and push only when asked.
