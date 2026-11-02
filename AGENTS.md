# AGENTS.md — OPS DETOX™

Working rules for any agent in this repo. `HANDOFF.md` is the long-form record; this
file is the short list of things that are easy to get wrong.

## Read first

**`HANDOFF.md` is the source of truth.** It is sectioned (§1–§43) and the dated banners
at the top are the change log. **§43 is the current state of every page** — start there.
Read the banners plus any section a task touches before editing. Several decisions in it
look like bugs and are not — see "Do not 'fix'" below.

**`BACKLOG.md` is the ask list** — what we are waiting on and who owns it, grouped by
who can actually answer rather than by page. The handoff records what was built; the
backlog records what is missing. Keep them apart.

## The deliverable

**The repo root *is* the site.** Eleven pages sit at the top level alongside `css/`,
`js/` and `assets/`:

| | |
|---|---|
| In the nav | `work-with-us.html` · `keynote.html` · `about.html` · `contact.html` |
| Reached otherwise | `index.html` (the logo) · `freebie.html` · `detox.html` · `diagnostic.html` |
| Footer only | `privacy.html` · `cookies.html` · `terms.html` |

Plain HTML/CSS/JS, no build step, no
dependencies, no backend. Open the files directly or serve the root. There is nothing to
install and nothing to compile — keep it that way.

*(Everything used to live in a `website-design/` subfolder. It was flattened to the root
on 1 Nov 2026 — see §32. Older handoff sections still say `website-design/…`; read those
paths as root-relative.)*

**`playground/` holds everything that is not a site page** — review artefacts, frozen
records and standalone demos. Nothing in it is linked from the nav, and **nothing in it
may be a dependency of a site page.** Its files reach the shared stylesheet, script and
assets with `../`:

| File | What it is |
|---|---|
| `hero-sections.html` | Five alternative hero treatments, tabbed (§20) |
| `hero-ivory.html` | The Soft Ivory hero comparison build — approved 31 Oct and promoted into `index.html`, so this is a frozen record (§28) |
| `home-comments.html` | The homepage review build — 15 Oct comments (§22), the revised section order and testimonial slider (§24), and the CSS pattern work (§26). Superseded; its hero went live |
| `about-hero.html` | Standalone demo the About hero options were reviewed in (§29) |
| `index-old.html` | The pre-rework homepage, kept as a reference |
| `parked-sections.html` | Holding file for the Cost and System sections, cut from the homepage but kept verbatim for reuse on another page (§25) |

**Adding a file to `playground/`**: rewrite its `href`/`src`/`srcset`/`url()` references
to `../`. The `srcset` on `<source>` elements is easy to miss — it bit this move once.

## Review artefacts: the rule that matters

A review artefact **never modifies the live site.** Each keeps its changes in a single
scoped `<style>` block in its own `<head>`; `index.html` and `css/site.css` stay
untouched. `hero-sections.html` carries its own full `<style>` block for the same reason.

When a change in an artefact is approved, **lift the rule into `css/site.css` and delete
it from the artefact.** The block is a staging area, not a second stylesheet. Do not let
them drift and do not import one into the other.

**The same scope rule applies to the live pages themselves.** Each carries its own
`<style>` block because `css/site.css` and `js/site.js` are shared across all eleven
pages. The consequence is real duplication, and it is now the largest piece of debt in
the repo:

| Block | Copies | Where |
|---|---|---|
| Deep Green header | **9** | 8 pages + `css/legal.css` |
| Noise/Clarity switch override | **8** | every page with a closing CTA |
| Pattern divider | **7** | every page with a closing CTA except `about` |
| Testimonial slider | **4** | index, about, work-with-us, keynote — each repeating its four quotes four times |

**Replacing one testimonial quote is sixteen edits across four files.** Change one copy
of anything above and they drift apart silently. They belong in `css/site.css`, and the
lift should happen *before* the real testimonials land — §42, §7 step 2.

**`css/legal.css` is the one exception and the model for the fix.** The three legal
pages are the same layout three times, so they share a real stylesheet instead of three
scoped blocks. It is a NEW file loaded only by them, so the other eight pages cannot be
affected by it.

`hero-sections.html` duplicates the design tokens from `css/site.css` section 2 by hand.
If the palette moves, it has to be updated manually.

## Copy and content

- **The client's copy is locked and unedited**, including the known typos in the
  homepage problem paragraph. Do not silently correct them.
- Anything you draft on the client's behalf — framework descriptions especially — is a
  placeholder until he approves it. Mark it visibly in the page (see `.fw-draft` in
  `playground/home-comments.html`) and in the handoff, rather than letting draft copy
  pass as final.
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

## The nav

**One nav, every page, and it carries FINISHED PAGES ONLY** (§39):

```
Work With Us · Keynote · About · Contact
```

`detox.html` and `diagnostic.html` are deliberately out until they are client-ready.
"Results" was an anchor, not a page. **A new page does not add itself to the header** —
that is how the site grew four different navs across eleven pages. There is a comment in
every header saying so.

**Removing a page from the nav does not hide it.** Sixteen buttons still point at the
two omitted pages, twelve of them the "Book the FREE DIAGNOSTIC" CTA.

## Every reworked page follows the same spine

`contact.html` (§33) is the template, and `freebie.html`, `detox.html` and
`diagnostic.html` were done to it:

1. **Deep Green header** — and swap the logo to `primary-detoxgreen.svg` with it. Four
   pages shipped with `primary-deepgreen.svg`, which is invisible the moment the band
   darkens. **These two always change together.**
2. `<meta name="theme-color" content="#143318">`, not the old `#fbfbf9`.
3. A hero on the page-title scale with the dot field.
4. The **switcher-pattern strip** under the hero — not the old text ticker.
5. The closing `.choice`, then the `.pb` divider into the footer. Without the divider the
   page ends on a hard ivory-to-green cut.
6. **No inline styles.**

### The closing switch — get this one right

**`aria-pressed="true"` is the RESTING state.** `js/site.js` snaps the toggle back to it
350ms after a click. Clarity must rest lit.

**Override the visuals, never flip the attribute.** Flipping it makes the switch rest on
*Noise*, which is the page arguing the opposite of the homepage. That bug shipped on
four pages and survived six weeks on `contact.html` because nobody opened the file.
Copy the override from `index.html`; `.choice-toggle .t-switch::before` **must** keep
`box-sizing:border-box` or the knob comes out 46px wide in a 42px track.

## Copy rules that bite

- **No em dashes in visible copy or in attributes** — the client's own instruction,
  30 Oct (§29.4). That includes `<title>`, `<meta description>`,
  `data-success-message`, `aria-label` and `placeholder`. The sweep is complete as of
  2 Nov; the only `—` left anywhere is `<p class="diag-score">—</p>`, which the script
  overwrites.
- **A coloured box in a supplied mockup is a sticky note until proved otherwise.** Six
  of them across three pages turned out to be editing furniture, not design: yellow
  "Maybe visual…" and "Blurb" labels, coral "Leads to contact", and violet selection
  rectangles that crossed body copy mid-sentence. Read the picture before building it.

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
  `playground/parked-sections.html` (§25), deliberately **without** the frame.
- **The preloader running on every load** rather than once per session (§21) — it is
  under review. The restore is commented inline.
- **Placeholder contact details, legal links and testimonials** — pending client input,
  labelled as such on the page.
- **The `182px` headline ceiling in the type-led hero** (§23) — load-bearing,
  not a round number. It is set by the longest hand-broken line, "systems of
  operational", which needs ~1564px at 200px against a 1480px container; above ~186px
  the three lines become five. It is also the §5 fold constraint. Re-measure both if the
  line break or the type changes.
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
- **The `6n` nth-child cycle on every marquee** (§26) — the strip under the hero and
  both divider rows vary their bars on `nth-child`, and the cycle MUST equal one copy of
  the set. A `4n` cycle against 6 bars made the copies differ and the loop jumped once
  per cycle. Add or remove a bar and the 6 changes with it.
- **Marquee spacing being `margin-left`, never `margin-right` or `gap`** (§24, §26) — a
  trailing margin can be dropped from the track's `max-content` width, and a `gap` is not
  part of the `-25%` step. Either way the seam drifts.
- **`--ticker-h` being 92px, and the strip having no padding of its own** (§26) — the
  strip's height IS that token and the hero subtracts it to land the fold. Pad the strip
  instead of raising the token and the hero stops reaching the fold everywhere.
- **The headline's `line-height:1.0` in `index.html`'s hero** (§26) — it was `.88`.
  The looser leading is what gives the ring around "cleanse" a band of clear ground to
  travel through; the ring is drawn behind the letterforms and at `.88` it read as
  disconnected arcs. Tighten it and the ring breaks again.
- **The hand-wrapped `<i class="od">` in the h1 and the strip's words** (§9, §26) —
  `site.js` splits on uppercase and this copy is sentence case, so it never matched.
  Do not "clean up" the wrappers, and re-wrap by hand if the copy changes.
- **The testimonial end-fades being gradient overlays rather than a `mask-image`** (§24)
  — a mask promotes the slider to its own composited layer and macOS Chrome tints it, so
  the whole row read as a paler band. Do not "simplify" it back to a mask.
- **The ring around "CLEANSE" sitting BEHIND the letterforms** (§23) — drawn on top it
  crosses every stem and reads as a scribble. It is a plain ellipse, not a hand-drawn
  path, because the svg is stretched with `preserveAspectRatio="none"` and an irregular
  path skews into a mess. Still not a V1.0 device, still one deletable element, still
  hidden below 850px.
- **The lime `[placeholder]` highlights on the legal pages** (§38) — every one is a
  blank the client has to fill. A legal page that looks finished but still says
  `[KvK number]` is worse than one that obviously does not. All three are `noindex`
  until their list is clear. The list is `BACKLOG.md` §A.
- **The legal pages ending without a pattern divider** (§38) — every other page closes
  into the footer with one. It was left off deliberately: a moving lime marquee above a
  privacy policy is loud. Put to the user, not yet answered.
- **The dot-grid background on every ivory section** — **not a V1.0 device.** The
  guideline names exactly two patterns: the logo pattern (merch only, p.37) and the
  switcher pattern (the website device, p.38). The dot field was invented during this
  build on 31 Oct and has since spread to five pages. The client's own mockups now draw
  it, which may mean his designer picked it up from us or arrived at it independently —
  **unresolved, see `BACKLOG.md` §F.** It is one deletable rule per page.
- **`detox.html`'s hero copy being word for word `work-with-us.html`'s** (§30, §41) —
  the overlap is real and it is the client's decision whether The DETOX still has a job.
  Do not resolve it by rewriting one of them.
- **`detox.html`'s four bare `<article>Testimonial</article>` placeholders** (§41) —
  deliberately NOT a fourth copy of the homepage marquee. They pick up the real slider
  when it is lifted into `css/site.css`.
- **The `.ht-foot` overlapping the headline's grid cell, and the 1300/1600 breakpoints**
  (§23) — the subline and CTAs sit in the empty space beside the short last line. That
  only works while the foot is shorter than that line; the two breakpoints are where it
  stops being true. Measured, not guessed.

## Verifying visual work

There is no test suite. Visual changes are checked headless with Chrome:

```
python3 -m http.server 8777          # from the repo root
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --hide-scrollbars --window-size=1512,982 \
  --screenshot=out.png --virtual-time-budget=5000 \
  "http://localhost:8777/index.html"
```

Headless cannot hover, and `--virtual-time-budget` does **not** advance a CSS animation
— screenshots at 4s and 30s are the same frame. To check either, force the state with a
temporary rule: a negative `animation-delay` plus `animation-play-state:paused` to land
on a chosen frame, or the hover rule applied to one `:nth-child()`.

**Headless cannot render below 500px.** Chrome clamps the layout viewport to 500 even
when `--window-size` is smaller, so a "390" screenshot is a 500px layout cropped — not a
390px render. To check 390, constrain the body to 390px and substitute any `vw`-derived
value with what it computes to at that width. Say which of the two you did.

`--screenshot` captures the viewport only. For sections below the fold, temporarily cap
the hero (`.hero{min-height:620px}`, `.hero--brand .hero-image{height:560px}`) and
render at a tall window size — the hero uses `svh`, so a tall viewport inflates it and
the rest of the page never comes into frame. **Delete any temporary harness files when
done**; they do not belong in the deliverable.

### Check what should NOT be on the page, not only what should

Overflow, console errors, dead anchors and text fidelity **all passed** on three legal
pages that had 15 testimonial cards and four keynote sections welded onto the bottom.
None of those checks asks *what is here that should not be.* Assert the shape:

```js
main.children.length                                  // expected count
document.querySelectorAll('.testimonial-label').length // 0 on a legal page
document.querySelectorAll('.footer-grid').length       // exactly 1
```

Then walk the tags with comments, `<script>`, `<style>` and `<svg>` stripped and confirm
nothing is unclosed and nothing is stray. **That check found two of my own bugs the
first day it existed**, and it is how the six-week-old stray `</div>` in 12 files was
finally caught.

### Traps that have each cost a build

- **`<footer>` is not a landmark on this site.** Every testimonial card contains a
  `<footer>` holding the client's name. `querySelector('footer')` returns *that one*.
  It welded 15 cards onto three legal pages, and the next day it produced a false
  "divider is not above the footer" alarm. **Never split a page shell on `<footer>` —
  split on `</main>`.** Scope queries to `body > footer`. The same applies to `<header>`,
  `<section>` and `<nav>`.
- **A bare `1fr` grid track will not shrink below its content.** `1fr` means
  `minmax(auto,1fr)`, and `auto` is the item's min-content width. A contents rail
  refused to go under 522px inside a 445px container and pushed the whole page sideways
  on a phone. **Use `minmax(0,1fr)` on both the desktop and the mobile rule.**
- **Headless Chrome screenshots AVIF as a blank area**, even though the image reports
  `complete:true` and the right `naturalWidth`. It looks exactly like a broken layout.
  Strip the AVIF `<source>` in a throwaway copy so the JPEG is served.
- **`sips --cropOffset` silently ignores the offset** and returns the image uncropped,
  reporting success. Use `ffmpeg -vf "crop=W:H:X:Y"`.
- **`decoding="async"` also screenshots blank.** Do not add it to new markup.
- **Scripted `window.scrollTo(0,y)` does not trigger reveal-on-scroll** — the page sets
  `scroll-behavior:smooth` and a stepped loop outruns it. Use
  `scrollTo({top:y,behavior:'instant'})`, or force `.reveal{opacity:1}`.

### Drive the interactive parts; do not assume them

`js/diagnostic.js` binds to **fourteen classes and one id**, and `js/site.js` opens the
seven module popups from the `.module` buttons' `data-*`. A visual rework of
`diagnostic.html` or `detox.html` can break either silently.

Click through them headless: answer all seven questions, assert the score, the seven
module bars, the two friction points and that restart returns to question 1; and open a
module popup and read its title back.

State what you actually verified. "Checked headless at 1512×982" is useful; implying a
full breakpoint and browser sweep that did not happen is not.

## Scope

Client feedback arrives informally, often via WhatsApp, and the client is not a designer
or a copywriter. Build what is clearly actionable; where a comment conflicts with the
site's own structure, say so and leave the decision open rather than settling it
silently. §22.6 is the live example — the founder-vs-cleanse positioning question was
documented, not built.

Commit and push only when asked.
