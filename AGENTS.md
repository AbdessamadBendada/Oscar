# AGENTS.md — OPS DETOX™

Working rules for any agent in this repo. `HANDOFF.md` is the long-form record; this
file is the short list of things that are easy to get wrong.

## Read first

**`HANDOFF.md` is the source of truth.** It is sectioned (§1–§24) and the dated banners
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
| `home-comments-hero.html` | That build plus the type-led Detox Green hero (§23) |
| `parked-sections.html` | Holding file for the Cost and System sections, cut from the homepage but kept verbatim for reuse on another page (§25) |

## Review artefacts: the rule that matters

A review artefact **never modifies the live site.** `home-comments.html` keeps every one
of its changes in a single scoped `<style>` block in its own `<head>`; `index.html` and
`css/site.css` are untouched. `hero-sections.html` carries its own full `<style>` block
for the same reason.

When a change in an artefact is approved, **lift the rule into `css/site.css` and delete
it from the artefact.** The block is a staging area, not a second stylesheet. Do not let
them drift and do not import one into the other.

**There are now three near-identical copies of the homepage** — `index.html`,
`home-comments.html` and `home-comments-hero.html`, the last being a copy of the
second. A fix to a shared section has to be made in all three. That is the cost of
showing the comment work and the hero direction as separate decisions, and it is
acceptable for one review cycle only. As soon as the 15 Oct comments are signed off,
lift `home-comments.html`'s block into `css/site.css` and retire that file.

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
- **The `.removed` wrapper below the final CTA in `index.html`** (§18) — the neon frame
  and badge are review furniture. Delete the wrapper and the sections return to the flow
  unchanged. Both comments pages no longer have it: those two sections moved to
  `parked-sections.html` (§25), deliberately **without** the frame.
- **The preloader running on every load** rather than once per session (§21) — it is
  under review. The restore is commented inline.
- **Placeholder contact details, legal links and testimonials** — pending client input,
  labelled as such on the page.
- **The `200px` headline ceiling in `home-comments-hero.html`** (§23) — load-bearing,
  not a round number. Above it the third line pushes the ticker under the fold at 1920.
  Re-check the fold if the type is retuned.
- **The missing dividing rules in that hero** (§23) — the mockup has them; they were
  built and then removed by request. Do not restore them from the mockup.
- **The testimonial row's four copies of the same four quotes** (§24) — the track must
  stay wider than the viewport plus one set or the row runs dry at the right edge. Two
  copies broke at 1920. The slide distance is one set, derived from `--tcard` and
  `--tgap`; change the card count and change the `4` in the keyframe with it.
- **The testimonial track's lopsided `30px 0 64px` padding and the slider's matching
  negative margin** (§24) — those are the hover shadow's exact reach above and below the
  card. Trim either and the shadow gets sliced off by `overflow:hidden`; drop the margin
  and the row sits 94px taller than the cards.
- **The testimonial cards having no shadow at rest** (§24) — `--shadow` is a 44px blur,
  and tiled into an unbroken row it pools into a grey slab behind the whole band. Hover
  only. Do not "unify" it back to the grid's shadow.
- **The testimonial end-fades being gradient overlays rather than a `mask-image`** (§24)
  — a mask promotes the slider to its own composited layer and macOS Chrome tints it, so
  the whole row read as a paler band. Do not "simplify" it back to a mask.
- **The hand-drawn ring around "CLEANSE"** (§23) — not a V1.0 device, deliberately one
  deletable element, and deliberately hidden below 850px.

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
