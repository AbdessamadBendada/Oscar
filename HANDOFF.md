# OPS DETOX™ — Project Handoff

_Last updated: 3 November 2026_

> **2–3 Nov — Work With Us was built out to the client's own wireframe order.** Five
> sections and a move, and **not one word of new copy**: every section's text already
> existed in `index.html`, in `detox.html` or in `content/copy.md`. The page runs twelve
> sections now. **Two sections the wireframe lists are still not built** — the seven
> modules and "from clutter to flow in 3 steps" — and the page now names both
> **CORE method™** and **See – Strip – Choose™**, one scroll apart. See §44.

> **2–3 Nov — the testimonial row steps one card at a time on mobile**, on all four
> pages that carry it. The CSS was one line per page: the reduced-motion branch already
> did what a phone needs, so it became a media query list rather than a second copy of
> the same rules. The stepping is `js/site.js` §8, once, shared. See §44.

> **2 Nov — Work With Us gained the site's closing CTA and the pattern divider.** The
> page ended on the offers section with no ask and a hard ivory-to-green cut into the
> footer. See §42.

> **2 Nov — the last two pages came onto the design system.** `detox.html` and
> `diagnostic.html`. **All eleven pages are now on one system.** The working diagnostic
> and the seven module popups were not touched and both were driven end to end to prove
> it. §8's live V1.0 violation is closed, the em-dash sweep is finally complete
> site-wide, and two more oversized assets left the pages. See §41.

> **2 Nov — the freebie page was brought onto the design system.** It had all six of the
> faults §33 found on `contact.html`, including the §29.5 switch bug, plus an em dash in
> visible copy. The tote artwork went from **1.75 MB to 60 KB**. Only `detox.html` and
> `diagnostic.html` are still on the 14 Oct build. See §40.

> **2 Nov — the nav was settled.** One nav on all eleven pages:
> **Work With Us · Keynote · About · Contact**. The site had grown four different navs
> (five, six, seven and eight items) because each new page added itself. `detox.html`
> and `diagnostic.html` are out until they are reworked; "Results" was an anchor, not a
> page. **Sixteen buttons still point at the two dropped pages.** See §39.

> **2 Nov — the three legal pages were built**, from the client's supplied drafts, into
> the brand. `privacy.html`, `cookies.html` and `terms.html`. **The text is his, word for
> word**; 64 blanks he still has to fill are marked on the page and listed in the new
> **`BACKLOG.md`**. They share `css/legal.css`, a NEW file loaded only by them. The
> footer's legal links now work on all 11 pages. See §38.

> **2 Nov — a stray `</div>` was removed from 12 files**, and every page now validates
> with no unclosed and no stray tags. §22 flagged it on 15 Oct and it had been inherited
> into every page built since. See §38.

> **2 Nov — the two missing photographs landed on Work With Us**, and both are in at the
> brand's 36px radius. `.ws-shot--pending` is gone. The second frame was **cropped out of
> a social post** whose top third carried a logo and a headline; the uncropped file still
> exists. See §37.

> **2 Nov — the Keynote page was built out to the end.** Nine more sections landed in one
> pass: the challenge, the "new perspective" block, what audiences take away, the keynote
> topics (**placeholder**), testimonials, who it is built for, the bio, the closing
> statement and the site's own CTA. The page now runs hero → footer. **Two sections carry
> placeholder content and one portrait is a stand-in.** The testimonial slider is now in
> four pages. See §35.

> **1 Nov — the Keynote page was started.** `keynote.html`, section 1 of a structure the
> client set by reference to clemensdoppler.com — his STRUCTURE, our design. The hero
> reuses the About page's framed-to-full-bleed picture and the photograph was already in
> the project. The copy plate is on the right, against the mockup, because Oscar sits
> left of centre in that frame. See §34.

> **1 Nov — the contact page was brought onto the current design system.** It was still
> the 14 Oct build: ivory header with an invisible logo, a corner-of-the-screen hero, no
> switcher pattern, inline styles doing the layout, and the closing Noise/Clarity switch
> still arguing the opposite of the homepage (the §29.5 bug, never fixed here). Copy is
> unchanged. See §33.

> **1 Nov — the repository was flattened and cleaned.** `website-design/` is gone: the
> seven site pages, `css/`, `js/` and `assets/` now sit at the **repo root**. Everything
> that is not a site page moved into **`playground/`** with its relative paths rewritten
> to `../`. `mockup/`, `high-fidelity-design/` and the empty root `assets/` stubs were
> deleted (all recoverable from git). **Sections §1–§31 below still write paths as
> `website-design/…` — read them as root-relative.** See §32.

> **31 Oct — a new Work With Us page was built, five sections deep.** `work-with-us.html`
> is a fresh page, **not** the old `detox.html`, built section by section from the client's
> supplied designs: hero, "Nobody designed it this way", "There is a cleaner way",
> testimonials, and the two offer tracks plus the Tool Stack Detox add-on. It also settles
> where the seventh module lives, which had been open since 29 Oct. Two photographs are
> still placeholders. See §30.

> **31 Oct — the Soft Ivory hero was approved and is now the live homepage hero.**
> `index.html` carries it as section 16, which must stay last in that stylesheet or the
> hero silently reverts to lime. `hero-ivory.html` is a frozen record now. See §28.

> **31 Oct — the About hero animation was fixed for Safari, after four failed CSS builds.**
> Safari will not run the border/radius animation from a stylesheet at all; it is driven by
> `Element.animate()` from the page's own inline script now. The name plate was also
> left-aligned so the caption sits under the name. See §29.1.

> **31 Oct — the About hero image went from 15.1 MB to 262 KB**, a 98% cut, with no visible
> change. It was the camera original. See §31.

> **29–30 Oct — the About page was rebuilt.** Its hero is now a framed portrait that
> grows to full bleed once the preloader lifts; three new sections were built (Leader /
> Innovator / Speaker, an operations-leader credentials block modelled on
> stevenbartlett.com/about, and a timeline); two sections were deleted; and the
> testimonial row and final CTA were copied from the homepage. **A real transparent
> cut-out of Oscar now exists in the project**, which lifts the §20 ceiling. `site.css`
> and `js/site.js` are still untouched; every rule is scoped inside `about.html`. See §29.

> **29 Oct — a Soft Ivory variant of the homepage hero was built for comparison**
> (`hero-ivory.html`). `index.html` is unchanged; the variant is a decision waiting on
> the client. See §28.

> **28 Oct — a round of client comments was worked through on the live homepage.**
> The hero lost its ring and its strike; C and U joined the wide-letter set in the
> headline; every section title is on one scale and the logo line became a real title;
> the two offer cards name the bottleneck they fix; the values left their full-bleed band
> for a panel under Oscar's portrait; and Keynotes has a new stage photograph whose slide
> was blanked by rebuilding the screen behind it. A hover bug that made buttons vanish on
> Deep Green is fixed locally. **`index.html` is the live homepage now, not a review copy
> — `css/site.css` and the five interior pages were not touched.** See §27.

> **25 Oct — the switcher pattern was rebuilt in CSS, and it replaced the text ticker.**
> The strip under the hero is now moving pattern bars carrying the ticker's words; the
> divider above the footer is two rows of bars running opposite ways; and the pattern on
> the dark bands is a fixed tile instead of being scaled to the viewport. The client has
> approved the strip. The headline also finally gained the brand's wide O/D. `index.html`
> and `css/site.css` are untouched. See §26.

> **24 Oct — the type-led hero was revised after a design review.** The dead band across
> the middle, the hole in the top right, the near-illegible "CLUTTER", the link-looking
> underlines and the orphaned CTAs are all fixed; the headline re-breaks to two full
> lines plus one short word and the subline and CTAs now sit beside it. See §23.

> **24 Oct — the two parked sections moved out to `website-design/parked-sections.html`,
> and the pattern divider moved below the final CTA.** The Cost and System sections are
> gone from both comments pages but kept verbatim in a working holding file, because they
> are likely wanted on another page. `index.html` still carries them. See §25.

> **24 Oct — the homepage section order was rebuilt to the client's revised running
> order, and the testimonials became a sliding row.** Hero → problem → offer →
> testimonials → IP → about → keynotes → final CTA, with the four sections he did not
> name placed rather than dropped. Built into `home-comments.html` **and**
> `home-comments-hero.html`, which share these sections. `index.html` and `css/site.css`
> were not touched. See §24.

> **23 Oct — a type-led hero direction was built into a third review copy,
> `website-design/home-comments-hero.html`.** A copy of `home-comments.html`, so it
> carries all the 15 Oct comment work, with the hero replaced: full-bleed Detox Green,
> no photograph, the headline set huge in Deep Green. The header is Deep Green on this
> page. **The copy is unchanged** — same H1, same subline, same CTA labels.
> `index.html`, `home-comments.html` and `css/site.css` were not touched. See §23.

> **15 Oct — the client's first round of comments came in, and the actionable ones were
> built into `website-design/home-comments.html`.** A review copy of the homepage: the
> desktop blank space, the cleanse restructured as free diagnostic → two offers, and a
> new Frameworks section carrying See – Strip – Choose™, Truth Latency™ and DRMT™.
> **`index.html` and `css/site.css` were not touched.** Two items were deliberately not
> built: the audit page (the client is building a "Noise Tax" calculator) and the
> founder repositioning, which is an open decision. See §22.

> **15 Oct — the hero gradient was replaced with flat Deep Green, and a preloader was
> added.** `--grad-hero` no longer paints anything: the homepage hero and the Outcomes
> band are now flat `--ink` carrying the switcher pattern at 6%. A logo-toggle preloader
> runs on every page load while it is under review. Both are pushed. See §21.

> **14 Oct — five alternative hero treatments were built for client review.** They live
> in `website-design/hero-sections.html`, a standalone tabbed page. **The live homepage
> hero was not touched** — `index.html` still uses `hero-concept.png` per §10. The
> exploration drops the baked-in logo pattern, which §10 records as a deliberate user
> decision, so do not treat that as an agreed correction. See §20.

> **12 Oct — the Cost and System sections were parked below the final CTA.** Both now
> sit inside a `.removed` wrapper with a thick Detox Green frame and a "Removed from
> Canva" badge, after the closing Choice section. Neither section's own markup changed.
> See §18.

> **12 Oct — the 10–11 Oct work was committed and pushed to the `Oscar` repo.** Until
> then all of it was local only. `Brand assets/` is now gitignored. See §19.

> **11 Oct — homepage hero artwork updated by direct user request.** The homepage now
> uses `website-design/assets/img/hero-concept.png`. It is a generated portrait collage
> based on Oscar's supplied studio portrait, with operational-clutter cards and the OPS
> Detox logo-symbol pattern in the background. Only the hero image reference and its
> intrinsic dimensions were changed; the hero layout, CSS, copy and all other sections
> were intentionally left untouched. See §10.

> **11 Oct — “The Problem” section changed to two columns.** The heading and existing
> body copy are grouped on the left; a newly supplied portrait of Oscar is on the right.
> The former campaign-poster image is no longer used in this section. See §11.

> **11 Oct — homepage flow and service cards revised.** “How the cleanse works” follows
> The Problem with one lime and two Deep Green branded cards. Outcomes comes next,
> followed by a new full-bleed Keynotes & Workshops section and a redesigned Testimonials
> section. About Oscar now follows Testimonials using a new laptop portrait. The Cost
> block was retained farther down the page. A client-requested values strip now follows
> About Oscar. The closing Choice section now contains one real Noise/Clarity switch,
> defaulting to Clarity. See §§12–17.

> **10 Oct — design reworked to OPS_DETOX_BRAND_GUIDELINE_V1.0.pdf.** The calm
> editorial system has been replaced with the OPS Detox brand system: Deep Green and
> gradient grounds, Soft Ivory, mixed-case pill buttons, round-rect cards, logo-derived
> picture frames and the before/after switcher device. **V1.0 is the authoritative
> document — not the 30-page logo concept deck.** See §8.
> `website-design/index.html` had gone missing locally and was recovered from the
> `ops-detox` repo (commit `81a1ba1`).

## 1. Goal

Create a polished, code-built website for Oscar de Grauw and OPS Detox™, following the
client mockup’s calm, editorial structure and the supplied OPS Detox brand system.

The current deliverable is a **working design**: a navigable, interactive site that shows
the client exactly how the thing behaves, without a backend behind it.

## 2. Current state

> **§43 is the current page-by-page state.** The tables below are the standing
> description; §43 is dated and supersedes them where they disagree.

- **The repo root is the live deliverable** — **eleven pages**, real navigation, working
  interactions, responsive from 320px up. No backend, no build step, no dependencies.
  Flattened out of `website-design/` on 1 Nov; see §32.
- **Live for review at <https://oscar.bendada.co>.** All eleven pages return 200.
- **Every page is on one design system** as of 2 Nov (§40, §41), and the nav is one list
  on all of them (§39).
- `playground/` holds the review artefacts and frozen records, none of them site pages.
- The design system follows `OPS_DETOX_BRAND_GUIDELINE_V1.0.pdf` (see §8): Soft Ivory
  and Deep Green grounds, Detox Green only ever on Deep Green,
  mixed-case pill buttons, round-rect cards, logo-derived picture frames and the
  before/after switcher device.
- Copy is the client’s, locked and unedited — including the known typos in the homepage
  problem paragraph.
- The live source of truth is the `Oscar` repo, `main` branch. The `ops-detox` repo
  holds only `website-design/`, `high-fidelity-design/` and the brand assets they
  reference, but **it is stale — still at 6 October**. See §19.

### Pages — at the repo root (§32)

| File | Page |
|---|---|
| `index.html` | Homepage. Reached by the logo |
| `work-with-us.html` | **In the nav.** Photographs landed 2 Nov (§37); closing CTA added (§42) |
| `keynote.html` | **In the nav.** Hero to footer (§34, §35); §7 topics are a placeholder |
| `about.html` | **In the nav.** About Oscar de Grauw |
| `contact.html` | **In the nav.** Message form plus a slot for the booking embed (§33) |
| `freebie.html` | Freebie opt-in, Startup Financial Model Template (§40) |
| `detox.html` | The DETOX. On system (§41), **out of the nav** until the client is happy. Its hero copy duplicates `work-with-us.html`'s |
| `diagnostic.html` | OPS Detox Diagnostic™, with a working demo (§41). **Out of the nav**; frozen until the Noise Tax calculator lands |
| `privacy.html` · `cookies.html` · `terms.html` | Legal (§38). Footer only. **64 blanks**, all `noindex` |

### Not site pages — `playground/` (§32)

Nothing here is linked from the nav, and nothing here is a dependency of a site page.
All of it reaches `css/`, `js/` and `assets/` with `../`.

| File | What it is |
|---|---|
| `playground/hero-sections.html` | Five alternative hero treatments, tabbed, for client review — see §20 |
| `playground/hero-ivory.html` | **Superseded.** The Soft Ivory hero comparison; approved 31 Oct and promoted into `index.html` stylesheet section 16, so this is a frozen record — §28 |
| `playground/home-comments.html` | **Superseded.** The 15 Oct comments build — §22. Its hero was approved and promoted into `index.html` (`0df3393`), so this is a frozen record, not something to keep patching |
| `playground/about-hero.html` | Standalone demo the About hero options were reviewed in — §29 |
| `playground/index-old.html` | The pre-rework homepage, kept as a reference |
| `playground/parked-sections.html` | Holding file for the two sections cut from the homepage, kept for reuse — see §25 |

### What actually works

- Multi-page navigation; every CTA goes somewhere sensible.
- Mobile burger nav — drops under the sticky header, closes on tap and on resize.
- Seven-module popups — close on ✕, backdrop or Escape, and return focus to the card.
- All forms validate (required fields, email format), show inline errors and a success state.
- Noise / clarity switch, ticker, hero entrance and reveal-on-scroll, all respecting
  `prefers-reduced-motion`.
- The logo-toggle preloader on every page — skippable, self-removing, and skipped
  outright for reduced-motion users. See §21.
- The diagnostic runs end to end: seven questions, 1–5 scale, back navigation, progress
  bar, clarity score, per-module bar profile and the two weakest modules named.
- Hero and ticker fill the first screen exactly, at every viewport size tested.
- Accessibility basics: skip link, focus rings, `aria-current`, labelled controls.

## 3. Active files

| File | Purpose |
|---|---|
| `css/site.css` | Full design system, expanded and sectioned for editing. Shared by **all eleven pages** |
| `js/site.js` | Nav, module popups, forms, switch, reveal, wide O/D wrapping. Shared by **all eleven pages** |
| `css/legal.css` | **New 2 Nov.** The legal pages' shared layout — loaded only by those three (§38) |
| `BACKLOG.md` | **New 2 Nov.** The ask list: what we are waiting on and who owns it |
| `js/diagnostic.js` | Demo diagnostic — questions and scoring live here |
| `assets/` | Fonts, icons, images, logos, patterns, social icons — the site is self-contained |
| `index.html` | The live homepage. Carries the approved Soft Ivory hero as stylesheet **section 16, which must stay last in the file** — §28 |
| `about.html` | Rebuilt 29–31 Oct; the hero edge animation is driven from its own inline script because Safari will not run it from CSS — §29.1 |
| `work-with-us.html` | **New page, in progress.** Built section by section from the client's supplied designs; five sections deep. Not `detox.html` — §30 |
| `playground/` | Review artefacts, frozen records and standalone demos — see the table above and §32 |
| ~~`home-comments-hero.html`~~ | **DELETED.** Its content was promoted into `index.html` in `0df3393`; recover from git if §23's build is ever needed |
| ~~`high-fidelity-design/`~~ | **DELETED 1 Nov** (§32) — the approved high-fidelity homepage, superseded by the live site. In git history |
| ~~`mockup/`~~ | **DELETED 1 Nov** (§32) — the original static mockups and client wireframe reference, superseded. In git history |
| `content/copy.md` | Client-supplied, locked website copy |
| `content/oscar-bio.md` | Oscar background, credibility points, proprietary frameworks |
| `Brand assets/` | Logos, fonts, patterns, icons, brand guideline, campaign artwork. **Gitignored — local only, see §19** |

## 4. Changes made

- Built the code-built high-fidelity homepage in `high-fidelity-design/`, on a calm design
  system derived from the client mockup rather than the earlier bold campaign direction.
- Built `website-design/`: that design turned into a working six-page site. Assets copied
  in and renamed so the folder is self-contained; CSS rewritten expanded and sectioned.
- Extended the system to the five pages beyond the homepage, following the client
  wireframe order on the Work With Us page.
- Sized all headings to land in three lines or fewer. The cause of the old word-ladder
  effect was tight `ch` caps on display type; the measures are now generous and the type
  scales down instead, with wide-context headings keeping their display scale.
- Made the hero fill the first screen exactly, so the first view shows only the hero and
  the ticker. Needed a `--ticker-h` token, a flexible image row on mobile, and a
  short-viewport query for small phones.
- Updated `mockup/detox.html` so the Audit nav item and FREE DIAGNOSTIC CTA point to
  `diagnostic.html` rather than `freebie.html`.
- Pushed both folders to the `ops-detox` repo and renamed the working folder from
  `website design` to `website-design` to avoid `%20` in hosted paths.

## 5. QA status

Run headless in Chromium across all six pages:

- **Viewports checked**: 1680, 1440, 1280, 1180, 1024, 834, 768, 430, 390, 375, 360, 320.
- **Clean**: no console errors, no page errors, no failed requests, no horizontal overflow.
- **Headings**: none exceed three lines at any width.
- **First screen**: hero + ticker land exactly on the fold at all eleven sizes tested.
- **Interactions driven and passing**: module modal (open, Escape, focus return), mobile
  nav, form validation and success states, a full diagnostic run.

Not yet done: real-device testing, cross-browser testing (Safari and Firefox in
particular), and a formal accessibility audit.

## 6. Open items

> **`BACKLOG.md` (new, 2 Nov) is now the live ask list**, grouped by who can actually
> answer. This section is kept for its detail and its history; where the two disagree,
> the backlog is current.

### Needed from the client
- Real client logos for the trust row.
- Four testimonials with attribution.
- Real contact details — address, email, phone (currently Canva placeholders).
- Legal content for Imprint, Terms, Privacy and Cookies.
- Oscar photography. The hero and About images are campaign artwork, not portraits.
- ~~**A masked, transparent cut-out of Oscar.**~~ **DONE, 30 Oct.** One was made in-house
  from `assets/img/oscar-about.jpg` with the macOS Vision foreground-mask API and is in
  the repo as `assets/img/oscar-cutout.avif` (46KB) with a `.png` fallback. The §20
  ceiling is lifted: portrait-led layouts are now possible. The tooling is reusable — see
  §29 — so any supplied photograph can be cut the same way.
- **A decision on the hero's two drawn marks** — the ring around "CLEANSE" and the
  strike through "CLUTTER" were removed on 28 Oct because "too much was going on".
  Keep it plain, or restore either. Both are in git (§27).
- **Oscar's own line for the keynote slide**, if the branded-screen version is wanted.
  The one that was built carries placeholder copy (§27).
- **A decision on the AI keynote images** — they show an audience that did not exist,
  and that is a credibility claim rather than a design choice (§27).
- Module popup detail copy, from the current website.
- Approved wording for the six value one-liners on the About page (currently filler).
- ~~**The two offers, named.**~~ **ANSWERED, 29 Oct**, by email: *Operational flow — The
  Execution package (Founder Bottleneck)* and *Organisational flow — The Leadership
  package (Team Bottleneck)*. He gave three labels per offer and a page can only lead with
  one. **Still not applied anywhere, as of 1 Nov** — and the `work-with-us.html` cards now
  carry a bottleneck label *and* a heading, so a third stacked line would hit the crowding
  problem §27 already ran into. The cleanest home is probably replacing the short heading. His breakdown also
  answers, in passing, the open question of where the frameworks live: Execution =
  meetings + decisions + reporting, Leadership = communication + ownership + psychological
  safety, which are six of the seven DETOX modules. Worth confirming he meant it.
- ~~**Where Tool Stack Detox goes.**~~ **ANSWERED, 31 Oct.** It is the add-on card at the
  foot of `work-with-us.html`'s offers section (§30), styled deliberately lighter than the
  two tracks. **Still open within it**: the hardest number on the site — 10–30% of tooling
  spend, €150–300K on a €1M spend — appears in none of the supplied copy and was not
  invented. That card is its natural home. It is still absent from the homepage.
- ~~**Two photographs for `work-with-us.html`**~~ **DONE, 2 Nov.** Both supplied and in
  (§37). The page's remaining blockers are copy, not pictures.
- **Photography for the About timeline.** All six images in §29's timeline are
  placeholders: they are the only real photographs of Oscar in the project, rotated, and
  none depicts the moment its entry describes. There is no childhood, flight-attendant or
  Kilimanjaro photography anywhere.
- **Approximate years for the timeline.** The reference timeline is driven by big year
  numbers; the client's copy gives phases instead ("EARLY YEARS", "NOW"), two of which are
  editorial rather than temporal. The Sony period and the sabbatical are datable.
- **Access to the `Pictures & videos` Drive folder.** Shared with the account on 30 Oct,
  but the images cannot be read: Drive's reader returns empty for them, the thumbnail
  endpoint needs auth, and raw download is base64 at 8–14MB each. The `HFS###` series
  (19+ files, 13 July 2026) is a professional studio shoot and the most likely source of
  better photography. Either drop those files locally or make the folder link-public.
- **A decision on the packages document and the legal documents** the client uploaded to
  Drive on 29 Oct. Neither has been read — same access problem as above.
- **Real framework copy**, and two naming questions: the full expansion of DRMT™, and
  whether See – Strip – Choose™ replaces The CORE method™, which is still in the live
  copy but absent from his updated list (§22).
- **The updated audit page with the "Noise Tax" calculator.** The client is building it
  and will send it. `diagnostic.html` is frozen until then. Note it is an interactive
  tool, not a copy drop — budget build time, not layout time.

### Decisions to make
- **Six values vs. three principles on the About page.** The page now states both:
  *Uncomfortable honesty*, *Ownership* and *Courage* appear in "Three principles behind
  every detox" and again in "Six values, no exceptions", two sections apart. Both are
  client copy, so nothing was deleted. Cut one, or merge into a single six with those
  three leading (§29).
- ~~**The Soft Ivory homepage hero**~~ **DECIDED, 31 Oct: switched.** It is live in
  `index.html` as stylesheet section 16, which **must stay last** or the hero reverts to
  lime. `hero-ivory.html` is a frozen record. The §28 trade still stands and the client
  should know it: ivory is calmer and more legible, but the brand is no longer stated on the
  first screen — the only lime above the fold is the logo and one button.
- **Does the homepage lead with the founder's payoff or with the cleanse?** The client
  wants the site to say the founder is released from the operational noise and claims
  his time back for growth. The current `h1` and the whole page spine sell the method
  instead. This is the highest-value open item and the one place his instruction and the
  site's architecture pull against each other — see §22.6. Nothing was changed for it.
- **Where the frameworks live** — their own section (what `home-comments.html` builds)
  or woven into the two offers as what each delivers. The second ties the IP to what is
  being bought; the first gives it standalone presence. Not yet put to the client.
- **Homepage hero direction.** Five options are built and waiting in
  `website-design/hero-sections.html` (§20). Bundled with this: whether the baked-in
  logo pattern stays, which §10 settled by user request and the exploration reopens.
- Calendly or meetergo. The embed slot is ready at `contact.html#book`, and every
  booking CTA already routes toward it.
- Diagnostic platform — Typeform, Scoreapp or custom. The demo in
  `website-design/js/diagnostic.js` is placeholder questions and scoring, labelled as
  such on the page.

### Technical
- **Three blocks of CSS are now duplicated between `index.html` and `about.html`**: the
  testimonial slider, and the Noise/Clarity switch override (§11). Both were copied with
  their markup on 30 Oct because they live in `index.html`'s own style block rather than
  in `site.css`. **Change one and the pages drift apart silently.** They belong in
  `css/site.css`; that edit touches all six pages, which is why it was not done in-flight.
- Licence the Formula Condensed typeface. The file in the repo is the **trial** version.
- Connect a form backend or email platform for the newsletter, contact and freebie forms.
- Supply the actual Startup Financial Model Template file.

## 7. Next steps

> **Rewritten 2 Nov.** Steps 1, 5 and most of 4 are done — see §43.

1. **Lift the shared blocks into `css/site.css`.** The largest piece of debt in the repo
   and the next structural job: the Deep Green header is in **9** places, the switch
   override in **8**, the divider in **7** and the testimonial slider in **4** — each
   slider repeating its four quotes four times, so **replacing one quote is sixteen
   edits across four files.** `css/legal.css` is the model: a new shared file that the
   other pages cannot be affected by. **The real testimonials arriving is what breaks
   this apart — do the lift first.**
2. **Get the four company facts** — legal entity name, KvK number, btw-id, and one date
   for all three legal pages. They appear about ten times across the set and are the
   cheapest item on the whole backlog (`BACKLOG.md` §A1). Nothing else unblocks as much.
3. **Test in Safari.** It has still never been done, there is no WebKit automation on
   this machine, and §29.1 shipped broken four times on Chrome-only checks. The animated
   heroes on `about.html` and `keynote.html` want a real look before the client sees
   them.
4. **Close the copy questions blocking since mid-October**: the two package names (29
   Oct), DRMT™'s expansion, whether See – Strip – Choose™ replaces The CORE method™,
   real framework wording, the six About values. Settle the founder-vs-cleanse
   positioning question (§22.6) separately and deliberately.
5. **Confirm the platforms** — booking, diagnostic, consent, analytics, form backend.
   These unblock most of the remaining functional work, and the Cookie Policy cannot be
   finished without the first three plus a live cookie scan.
6. **Settle whether `detox.html` still has a job.** Its hero copy is word for word
   `work-with-us.html`'s (§30, §41). Bundled with it: whether The DETOX and Audit rejoin
   the nav (§39), and the 16 buttons still pointing at them.
7. **Get the photography** — the About timeline, the keynote topics, a stool portrait,
   press logos, client logos. Most of it is probably in the `Pictures & videos` Drive
   folder, which has been unreadable since 30 Oct: **either drop the files locally or
   make the folder link-public.**
8. **Licence the typeface.** The committed file is the trial and it is a hard blocker on
   any public launch (§9).
9. **Delete the superseded assets** once nobody wants them back: `hero-concept.png`,
   `hero-cards.png`, `poster.png`, `portrait.png` and `time-is-money.png` are all
   unreferenced now.
10. Real-device and cross-browser QA, then the legal pages come off `noindex`.

## 8. Brand-system rework (10 October 2026)

The earlier design was built on a calm editorial system derived from the client
mockup. The feedback was that it read too editorial and too careful, and that the
designer had already specified the elements to use.

**Two documents exist and they are not the same.** The rework was first built against
`OPS_DETOX_Logo_Concept_R2.pdf` (30pp, the logo *concept* deck), then corrected
against `OPS_DETOX_BRAND_GUIDELINE_V1.0.pdf` (38pp), which is the authoritative one.
Both now sit in `Brand assets/1_BRAND GUIDELINE/`. **Build against V1.0.**

### What the design now follows (V1.0)

| Item | Spec | Page | Note |
|---|---|---|---|
| Detox Green | `#CCFE06` (Pantone 2297C) | 19 |
| Deep Green | `#143318` (Pantone 350C) | 19 |
| Soft Ivory | `#FEFDF2` (Pantone 9064C) | 20 |
| Gradient | Detox Green → Deep Green | 20 | **No longer used on the site — see §21** |
| Contrast rule | Detox Green is used **only** on Deep Green; Deep Green goes on White, Soft Ivory or Detox Green | 21 |
| Watchouts | Never Detox Green on Soft Ivory or on White; never low-contrast pairs | 22 |
| Display type | Formula Condensed Bold — headlines and statements. Short statements uppercase, letter-spacing 30; longer sentences in standard letterforms with tighter spacing | 25, 26 |
| Body type | Inter Regular body, Inter Bold subheadlines | 27 |
| Hierarchy | H1 48/57 · H2 39/46 · H3 32/38 · H4 27/32 · H5 23/28 · H6 19/23 · P 16/19 | 28 |
| Buttons | Solid pills, **mixed case**, 16pt. Primary = Detox Green pill with Deep Green type. Secondary = Deep Green pill with Detox Green type | 29 |
| Before/after rows | Mixed case, switcher mark between the two states; after state uses the **mirrored** mark | 32, 33 |
| Circle & arch | Picture frames derived from the logo | 35 |
| Icons | Soft Ivory cards, lime glyph in a Deep Green circle, Formula Condensed label | 36 |
| Logo pattern | **Merch only** — not a website background | 37 |
| Switcher pattern | The website device, for section breaks | 38 |

### Corrections made after reading V1.0

- Soft Ivory `#FFFDF1` → `#FEFDF2`.
- Buttons were uppercase Formula pills with the primary in Deep Green. Now mixed case,
  and the pair is swapped to match p.29: lime primary, deep-green secondary. On a Deep
  Green ground the secondary becomes an outlined lime pill, since a Deep Green pill
  would vanish there.
- Headline letter-spacing `.005em` → `.03em`; display leading loosened from `.95`
  toward the specified 48/57.
- Eyebrows were 10px Inter; now Formula Condensed uppercase at the subheadline weight.
- Toggle rows were uppercase with a generic dot-switch. Now mixed case with the
  switcher mark, which mirrors on the after state. The closing block moved from a Deep
  Green ground to Soft Ivory so all three rows (ivory / lime / deep green) read as
  drawn on p.32.
- The logo-pattern wash was removed from the hero (merch only) and the switcher
  pattern added as a section break.
- Module cards moved from White to Soft Ivory with Formula Condensed labels.

### Verified

- All six pages: no console errors, no failed requests.
- No horizontal overflow at 1440, 768 or 500 CSS px.
- Toggle rows, module modal (open / title / close) and forms all drive correctly.
- The interior five pages inherit the system through shared tokens; they were restyled,
  not restructured.

### Needs client sign-off

The homepage H1 is now the guideline's own ("Cleanse your business systems. Win your
time back.", p.29), the three toggle pairs are the guideline's (p.32), the CTA labels
are the guideline's ("Free OPS Diagnostic", "Let us talk", p.29), and the six
cost-of-noise bullets come from the concept deck. All of it is the designer's wording,
none of it has been through the client, and none of it is in `content/copy.md`.

### Still open

- **Known V1.0 violations on interior pages**: `.reason-grid span` sets Detox Green
  type on White (p.22 watchout 3). Fix when those pages are reworked.
- The pt-based hierarchy on p.28 is followed in proportion, not mapped literally to px.
- 390px is unverified: headless Chrome clamps to a 500px minimum window. The ≤520px
  rules are exercised at 500px, but a real device check is outstanding.
- Hero and About images are campaign artwork, not portraits, so both are cropped hard
  to keep poster lettering out of frame. Real photography replaces this.
- **Formula Condensed licence (the only hard blocker left).** The file in the repo is
  the trial. See §9.
- The five interior pages still follow the old section *structure*. Work With Us in
  particular wants the same structural rework once the revised Canva offer copy lands.


## 9. Formula Condensed — licence and the wide O/D

### The typographic work is already done

The trial `.otf` **contains all the alternates**: `GSUB` carries `aalt`, `salt` and
`ss01`, and `O.ss01`, `D.ss01`, `C.ss01`, `B.ss01`, `G.ss01`, `Q.ss01` are all present
(482 glyphs). The wide O and D required by guideline p.25 are therefore implemented
and live on the site now.

**How it is implemented.** The feature cannot be set on a whole heading: `ss01` swaps
every letter that has an alternate, and the condensed character of the typeface is
lost (verified by rendering — the headline gets visibly wider and generic). So
`js/site.js` §3a walks text nodes in display type and wraps each O and D in
`<i class="od">`, and only those glyphs get `font-feature-settings:"ss01"`.

Two layout traps, both handled:
- Inside a flex or grid parent each wrapped letter would become its own flex item,
  collapsing the surrounding spaces and applying the container gap between letters.
  The split run is wrapped in a single `.od-run` span in that case.
- `.button span{display:none}` (which hid the old `→` arrows) also hid the wrapper.
  Narrowed to `.button span:not(.od-run)`.

Because the licensed file is the same design with the same feature tags, **dropping it
in requires no code change** — replace `assets/fonts/FormulaCondensed-Bold.otf` and
everything keeps working.

### The licence

Formula Condensed is by **Pangram Pangram** (Mat Desjardins & Valerio Monopoli) —
<https://pangrampangram.com/products/formula-condensed>. The trial's `name` table has
been stripped of all copyright, vendor and licence records, which is normal for a
free-to-try file and is also why the foundry had to be identified externally.

Licences start around **$40**. Packages run from a single style up to the Condensed
Full Family (18 styles + variable). The site quotes desktop pricing publicly but does
**not** publish webfont tiers — those need a direct enquiry.

**What to buy.** The site uses exactly one cut, `Formula Condensed Bold`, as a
self-hosted `@font-face`. That means:

1. A **single-style** purchase covers it — not the full family.

2. A **webfont licence is required**, not just desktop. A desktop licence does not
   permit serving the file from a web server. Webfont tiers are normally banded by
   monthly pageviews, so Oscar needs a traffic estimate before enquiring.
3. Ask the foundry to confirm the `ss01` alternates ship in the webfont build — some
   foundries subset web versions and drop stylistic sets. **If they are dropped, the
   brand's wide O/D cannot be rendered**, which would be a real problem given p.25
   calls them a required detail.
4. Buy `.woff2` as well as `.otf`. The site currently loads a 42KB `.otf`; `.woff2`
   is typically 40% smaller and is the correct web format.

**Who buys it.** This is Oscar's licence, not the agency's — it should be purchased in
the client's name so it transfers with the site. Worth confirming whether the designer
already holds a licence from producing the guideline; if so, it is likely desktop-only
and a separate webfont licence will still be needed.

### Interim position

The trial file is fine for showing the client and the designer. It must be replaced
before anything is publicly launched — a trial font on a live commercial site is a
licence breach, and it is the foundry's own file being served from the client's domain.

## 10. Homepage hero artwork revision (11 October 2026)

### User direction and scope

The user asked to improve only the homepage hero image and explicitly requested that
nothing else on the page be changed. Preserve that constraint in future iterations
unless the user clearly expands the scope.

### Current implementation

- `website-design/index.html`, lines 45–47, points both the `<source>` and fallback
  `<img>` to `assets/img/hero-concept.png`.
- The current image is a `1044 × 1507` PNG.
- The `<img>` intrinsic dimensions are set to `width="1044" height="1507"`.
- No hero CSS was changed. The existing arch crop, sizing, grid, animation and
  responsive behavior in `website-design/css/site.css` remain as they were.
- The previous source assets are still present and were not overwritten:
  `assets/img/oscar-portrait.jpg` and `assets/img/oscar-portrait.webp`.

### Artwork decisions

The current hero image:

- Preserves Oscar's recognizable face, smile, navy suit, white shirt and standing pose.
- Uses three overlapping operational-clutter cards labelled exactly `MEETINGS`,
  `REPORTS` and `APPROVALS`, each struck through in Detox Green.
- Pulls Oscar slightly left and scales him back enough to leave breathing room around
  his right elbow; the previous iteration cropped that elbow too tightly.
- Replaces the earlier large lime circle with the supplied repeating OPS Detox symbol
  from `website-design/assets/patterns/logo-pattern.png`.
- Uses a dark, low-contrast version of the pattern with one lime-highlighted symbol so
  the background stays subordinate to Oscar and the cards.

### Important brand-guideline note

Section 8 records that brand guideline V1.0 reserves the logo pattern for merchandise.
The patterned hero therefore departs from that guideline, but it is intentional and
reflects the user's explicit 11 October request. Do not remove it as an automatic
"brand compliance" correction; discuss the tradeoff with the user first.

### Generation workflow

The artwork was produced with the built-in image-generation/editing tool. The final
edit used `hero-concept.png` as the edit target and
`assets/patterns/logo-pattern.png` as the exact background-pattern reference. If it is
re-generated, preserve Oscar's identity, all three labels, elbow clearance, portrait
aspect ratio and the existing page layout.

## 11. “The Problem” two-column revision (11 October 2026)

The homepage section at `website-design/index.html` lines 63–78 was changed from three
columns (heading / body / campaign artwork) to two columns:

- Left: the eyebrow has been removed. The heading and both body paragraphs are grouped
  inside `.problem-copy` and vertically centered against the portrait.
- The heading is intentionally forced into exactly three lines: `Fewer meetings,` /
  `fewer reports,` / `faster decisions`.
- The supplied description is used verbatim apart from closing the quotation after
  `done it.` so the punctuation is complete.
- Right: Oscar's supplied portrait in `.problem-portrait`.
- New self-contained asset: `website-design/assets/img/oscar-problem.jpg`, optimized
  from the supplied 3448 × 5168 JPEG to 1201 × 1800 at approximately 361 KB.
- New scoped CSS lives in the Editorial grid section of `website-design/css/site.css`.
  Desktop uses a flexible text column plus a narrower portrait column; at 850px and
  below it stacks into one column using the existing responsive breakpoint.
- The source portrait is displayed inside a hard 4:5 figure crop, capped at 400 ×
  500px on desktop and mobile. The figure owns the aspect ratio and clips overflow;
  the image is `width:100%; height:100%; object-fit:cover` with
  `object-position:center 35%`. Keep those explicit dimensions—the image's intrinsic
  2:3 HTML dimensions otherwise make the section extremely tall.
- `assets/img/poster.png` remains in the asset folder but is no longer referenced by
  the homepage problem section.

## 12. “How the cleanse works” revision (11 October 2026)

The section immediately after The Problem was rebuilt from the supplied reference:

- `How the cleanse works:` remains centered beneath a restored `The cleanse` eyebrow.
- The three services are equal-height, left-aligned branded cards using `.cleanse-grid`
  and `.cleanse-card`. Card 01 uses a Detox Green ground; cards 02 and 03 use Deep
  Green. All use the 36px round-rect, shadow and hover-lift design language.
- Each card now has a circular `01` / `02` / `03` badge and outlined pill chips for its
  metadata instead of the earlier italic line.
- Column 1 is `OPS Detox Diagnostic™`, preceded by `Free · 8 minute`, with the supplied
  diagnostic description and a `Book the free diagnostic` CTA to `diagnostic.html`.
- Column 2 is `Operational flow`, preceded by
  `Meetings · Reporting · Decisions`, with the supplied copy and a `Learn more` CTA to
  `detox.html`.
- Column 3 is `Organisational flow`, preceded by
  `Communication · Ownership · Psychological Safety`, with the supplied copy and a
  `Learn more` CTA to `detox.html#modules`.
- Desktop column rows keep the metadata, headings, descriptions and CTAs aligned.
  At 850px and below the columns stack with compact spacing.
- The older shared `.process-grid` styles remain because interior pages still use them;
  the homepage cleanse uses new, locally scoped `.cleanse-*` classes.
- The Cost section was not deleted. The current order is Cleanse → Outcomes → Keynotes
  & Workshops → Testimonials → About Oscar → pattern divider → Cost.

## 13. Keynotes & Workshops section and current homepage order (11 October 2026)

A full-bleed speaking section was added after Outcomes and before Testimonials:

- Markup lives in `website-design/index.html` under `.speak`.
- Eyebrow: `Keynotes & workshops`.
- Heading: `Bring the DETOX into the room.`
- The body positions Oscar as a TEDx keynote speaker and workshop facilitator and
  mentions the Speak Up Gym and Out Loud card game.
- `Book Oscar to speak` links to `contact.html`.
- The photograph is implemented as the `.speak-media` background with a responsive
  Deep Green scrim. Desktop is at least 680px tall, vertically centers a narrower
  500px/44% text column, and fades the overlay before it reaches Oscar. On mobile, the
  photograph becomes a standalone 280–430px panel above a solid Deep Green copy panel,
  so text never covers Oscar. There is intentionally no coloured separator above the
  section; the photograph itself provides the transition from Outcomes.
- New optimized assets are `website-design/assets/img/speaking.jpg` (1086 × 724,
  approximately 88 KB) and `website-design/assets/img/speaking.webp` (1086 × 724,
  approximately 19 KB). CSS uses `image-set()` to prefer WebP.
- The Outcomes eyebrow `The result` was removed; the section now begins directly with
  `OPS DETOX OUTCOMES:`.

Current homepage section order:

1. Hero
2. Ticker
3. Trust logos
4. The Problem
5. How the cleanse works
6. Outcomes
7. Keynotes & Workshops
8. Testimonials
9. About Oscar
10. How I work values strip
11. Pattern divider
12. Final choice section
13. `.removed` block — The Cost of operational noise, then OPS Detox system

The previous §12 description of white cleanse cards and the Cost section sitting
directly beneath them is obsolete; the details above describe the current source.
The Cost and System sections moved below the final CTA on 12 Oct — see §18.

## 14. Testimonials relocation and placeholders (11 October 2026)

Testimonials now sits immediately after Keynotes & Workshops rather than after the OPS
Detox system:

- The section is full-width Soft Ivory with a centered `Testimonials` eyebrow and
  `What leaders say` heading.
- Four placeholder testimonial cards are arranged in a 2 × 2 desktop grid and stack
  to one column at 850px and below.
- Cards use the established White panel, 36px round-rect, shadow and hover-lift system,
  with a Detox Green quote mark and a small visible `Placeholder testimonial` pill.
- Each card contains draft quote copy, `Client name`, and a placeholder role/company
  descriptor. These are not real endorsements and must be replaced with approved
  client quotes and attribution before launch.
- Testimonial attribution uses a nested `<footer>` whose styling is explicitly reset
  inside `.testimonial-grid` so it does not inherit the global site-footer background
  or spacing.

## 15. About Oscar relocation and portrait (11 October 2026)

The homepage About section now sits immediately after Testimonials:

- The layout follows the supplied reference order: eyebrow, heading, three existing
  biography paragraphs and CTA on the left; Oscar's portrait on the right.
- The extra homepage `How I work` values line was removed from this section to match
  the requested structure. The full About page remains available through the CTA.
- `More about Oscar` is now a standard site button linking to `about.html`.
- New self-contained asset: `website-design/assets/img/oscar-about.jpg`, optimized from
  the supplied 3448 × 5168 JPEG to 1201 × 1800 at approximately 249 KB.
- The image sits in the brand's arch-derived 3:4 frame, capped at 460px wide, with
  `object-position:center 38%` to keep Oscar's face and laptop in view.
- Desktop uses text-left/image-right. At 850px and below, the section stacks in the
  same order—copy first, portrait second—and the image keeps its 3:4 aspect ratio.

## 16. “How I work” values strip (11 October 2026)

A compact values strip now sits immediately after About Oscar and before the pattern
divider:

- Detox Green background with Deep Green typography and subtle Deep Green borders.
- `How I work` is the display-type label. The client annotation `(values row)` is not
  rendered as website copy.
- Values are exactly: `Uncomfortable honesty`, `Clarity`, `Ownership`, `Substance`,
  `Courage`, and `Depth`, separated visually by centered dots.
- Desktop keeps the label on the left and values on the right. At 850px and below the
  label stacks above a wrapping, left-aligned values list.

## 17. Closing Noise / Clarity switch (11 October 2026)

The final `What will you choose?` section was simplified:

- Removed the `Cut the meeting load / Win your time back` and
  `Busy & Stressed / Back in Control` rows.
- Retained only `Operational Noise / Operational Clarity`.
- The button defaults to `aria-pressed="true"`, so Operational Clarity is selected on
  initial load. Clicking produces a brief momentary move toward Operational Noise; after
  350ms it springs straight back to Operational Clarity. This delay exists only so the
  movement is visible rather than being reset before the browser paints it.
- The old logo-derived shape was replaced by a conventional 92 × 48px switch with one
  high-contrast circular knob. The knob animates between the left and right positions,
  while the active label gains full opacity.
- The enclosing pill also changes from Deep Green/Detox Green in the Noise state to
  Detox Green/Deep Green in the Clarity state.
- The control remains a semantic `<button>` with an explicit accessible label and
  visible focus treatment. On mobile, the two labels and switch stack vertically.

## 18. Sections parked below the final CTA (12 October 2026)

Two sections were cut from the Canva deck and are held below the page rather than
deleted, so the client can see what was taken out:

- **The Cost of operational noise** and **The OPS Detox system** now sit after the
  closing Choice section, inside `<div class="removed">` at `website-design/index.html`.
- Both were moved **verbatim**. No copy, markup, classes or IDs inside them changed, so
  the `#system` anchor and the seven module popups still work exactly as before.
- The frame is `.removed` in CSS section 20a: a 50px `var(--lime)` border on a Soft
  Ivory ground, with `.removed-badge` — a Deep Green pill carrying lime Formula
  Condensed type — positioned on the neon band at the top right. The badge text is
  plain text in the markup and is edited there, not in CSS.
- At 520px and below the border thins to 20px and the badge drops inside the frame. A
  50px band costs a sixth of a 320px screen.
- **This is review furniture, not design.** Deleting the `.removed` wrapper and its
  badge returns both sections to the page flow unchanged. Do not restyle the frame to
  be brand-compliant; it is deliberately loud so it does not read as part of the page.
- The `.pattern-break` divider that used to introduce the Cost section stayed where it
  was, so it now sits between the values strip and the final CTA.

Verified headless at 1680, 1440, 1280, 1024, 834, 768, 520, 430, 390, 360 and 320: no
horizontal overflow at any width, both sections render fully inside the frame, badge
in bounds.

### A trap for anyone screenshotting this page

Scripted `window.scrollTo(0, y)` does **not** trigger the reveal-on-scroll observers,
because the page sets `scroll-behavior:smooth` — the scroll animates and a stepped
loop outruns it, so late sections never intersect and screenshot at `opacity:0`, their
backgrounds included. Use `scrollTo({top:y, behavior:'instant'})`. This cost a confused
round of debugging on an apparently blank section that was in fact rendering correctly.

## 19. Repository state (12 October 2026)

The 10–11 Oct work had never been committed anywhere. It is now in the `Oscar` repo
(https://github.com/AbdessamadBendada/Oscar), on `main`:

- `4ab5e0d` — the working site, the high-fidelity design, the brand-system rework and
  this handoff. 45 files.
- `b4f139d` — the §18 removed-block change.
- `6b59543` — the §20 hero exploration page.
- `10c44c8` — the §21 flat-green rework and the preloader. 8 files.

**`origin/main` had been two commits behind local** until 14 Oct. `b4f139d` and
`6b59543` were committed but never pushed, so anyone reading the GitHub repo before
then was a week out of date. All four commits above are on `origin/main` now.

Two things to know:

- **`Brand assets/` is now gitignored** — 75MB of supplied source, including both
  guideline PDFs, kept local by decision. The site folders carry their own copies of
  every asset they actually reference, so nothing on the pages depends on it. **If this
  machine is the only copy, `OPS_DETOX_BRAND_GUIDELINE_V1.0.pdf` exists nowhere else.**
  Back it up somewhere deliberate.
- **The `ops-detox` repo is still at its 6 October state** (`81a1ba1`). Every change
  from 10 Oct onward is missing from it. If anyone has been shown that repo or anything
  served from it, they are looking at the pre-rework design.

The `.gitignore` header says the repo is public. `website-design/assets/fonts/FormulaCondensed-Bold.otf`
is the **trial** font and it is committed — see §9. Excluding `Brand assets/` removed one
copy but not the one that actually gets served.

## 20. Hero exploration page (14 October 2026)

### What exists

`website-design/hero-sections.html` — a standalone, self-contained comparison page
holding **five alternative homepage hero treatments** behind a tab strip. It is a
client-review artefact. **Nothing in `index.html` or `css/site.css` was changed.** The
live hero still uses `hero-concept.png` exactly as §10 describes.

The file carries its own `<style>` block rather than importing `css/site.css`, because
the generic `.hero` rules there would collide with five parallel hero designs in one
document. The tokens inside it are copied from site.css section 2 and must be kept in
sync by hand if the palette ever moves.

### The five options

| Tab | Name | Ground | Device |
|---|---|---|---|
| A | The Arch | `--grad-hero` | Current layout, corrected; arch crop + lime hairline |
| B | The Pipeline | Deep Green | `assets/patterns/section-break.png` drifting behind a scrim |
| C | Detox Green Block | Flat `--lime` | Arch panel, Deep Green tape strip |
| D | The Card Stack | Soft Ivory | Three stacked round-rect cards + lime diagonal tape |
| E | Strike the Clutter | `--grad-hero` | MEETINGS/REPORTS/APPROVALS as live type with drawn-on lime rules |

Tabs are keyboard-navigable (arrows, Home, End), deep-linkable (`#a`…`#e`), and
`prefers-reduced-motion` disables the pipe drift, the ticker and the strike animation.
Headline copy differs per option because the layouts want different lengths — treat
that copy as placeholder, not as a recommendation.

### Why the exploration happened

The user judged the live hero "a tiny bit not looking as polished as his brand". The
specific findings, which still stand:

- The CO pattern and the three clutter cards are **painted into the PNG**, so they
  scale with the photograph rather than with the layout, and the image's flat green
  does not match `--grad-hero` — the arch reads as a patch of a different green.
- The strikethrough rules on `MEETINGS` and `APPROVALS` overrun their cards; the grey
  bars read as wireframe placeholder; the "speed lines" are not a brand device.
- The lime rim light has a visible fringe along his right shoulder and leg.
- `border-radius:999px 999px 0 0` on the arch clips the left edge of the card stack
  mid-shape; nothing in the composite is composed to survive that crop.
- It is a 1.8MB PNG of a photograph, next to a 56KB WebP of the same frame.

### The pattern tension — read §10 before "fixing" anything

The exploration drops the baked-in logo pattern, which puts it back in line with
guideline V1.0 and with the comment at `css/site.css:227`. **That is not a licence to
strip the pattern from the live hero.** §10 records the patterned hero as an explicit
11 October user decision. The five options are an alternative for the client to judge,
not a correction already agreed.

### Source images

- All five use `assets/img/oscar-portrait.webp` (1178×1700, 56KB) — the clean studio
  plate. `hero-concept.png` is that same frame scaled to 0.886 with the compositing
  painted over it. `css/site.css:240` already states `aspect-ratio:1178/1700`, the
  original's ratio, so the arch frame was always built around the clean plate.
- No earlier version of the composite exists in git; `hero-concept.png` landed whole in
  `4ab5e0d` with no predecessors.
- `Brand assets/Brand direction/Cards for the website.png` (duplicated in the repo as
  `assets/img/hero-cards.png`) is the client's own card treatment — rounded cards, lime
  diagonal tape reading "OPERATIONAL DETOX FOR SCALE-UPS ↗", cellophane texture. Option
  D is that asset recoloured from its exploratory violet into the official palette and
  rebuilt in CSS. It is a stronger card language than the composite's, and it is his.
- `assets/img/portrait.png` is the LinkedIn-banner lockup — magenta polo on flat lime.
  Different wardrobe from the suit plate, so the two do not mix in one composition.

### The cut-out problem — the real constraint

`oscar-portrait.webp` has **no alpha channel** (`hasAlpha: no`, RGB, 3 samples/pixel).
There is no cut-out of Oscar anywhere in the project. Two consequences:

1. No option can float him free of a shape. A, C and E frame him in the arch; B and D
   in cards. A hero where he breaks the frame is not currently buildable.
2. The plate is lit on neutral studio grey, which reads as a hole punched in the brand
   green. The page handles this with a shared `.tint` layer: a brand-green fill in
   `mix-blend-mode:color`, masked by `radial-gradient(64% 56% at 50% 38%, #0000 0 34%,
   #000 100%)` so it only touches the outer frame.

**The mask is an ellipse, not his silhouette**, so it grazes his shoulders in a couple
of the options. If a direction is approved, the right next step is a properly masked
transparent PNG of Oscar. That is a Photoshop job and it would visibly sharpen B, C
and D.

### A correction worth not repeating

The first build of options C and D **duotoned Oscar's face** — greyscale plus
`mix-blend-mode:multiply` onto the lime — and A, B and E ran a 42% green colour pass
over the whole frame. The user rejected this immediately and was right to: the
portrait is the credibility on that page, and recolouring a founder's face into neon
green destroys it. The masked `.tint` described above is the replacement. **Tint the
backdrop; never the man.** C's panel and D's front card are now Deep Green with the
portrait in natural colour, and the lime is held back for tape, type and buttons.

### Status

Rendered and visually checked headless at 1440 for all five tabs across three
revisions. **Not yet reviewed by the client** — the user intends to show it to them.
Responsive CSS is written (single column below 900px) but has **not** been verified at
the full breakpoint ladder the rest of the project has been held to; do that before it
goes in front of anyone on a phone.

## 21. Flat Deep Green grounds and the preloader (15 October 2026)

### Why the gradient went

The user reported the gradient on the dark sections "not looking good for the client".
Inspection found four separate problems, and they compounded:

1. The radial's centre sat at `68% 96%` — just below the bottom edge — so what showed
   was a clipped fragment of a circle, reading as a glow effect rather than as light.
2. Five stops across a hue *and* lightness ramp, crossing saturated green in sRGB.
   That is exactly where 8-bit displays band worst, because green carries most of the
   luminance. Worst case is a projector or a mid-range laptop in a client meeting.
3. The headline, eyebrow and CTAs are all `--lime`, and the brightest stop of the
   gradient was also lime. Wherever the bloom passed behind type, contrast collapsed.
4. **On Outcomes it was worse than on the hero.** The bloom sat directly under the stat
   grid, so the four tiles each sat on a different background — the leftmost on
   near-black green, the rightmost on bright green — and the translucent
   `rgba(255,255,255,.07)` fill and lime hairline border all but vanished on the bright
   side. The four tiles stopped reading as one set.

### What replaced it

Both bands are flat `var(--ink)` carrying `assets/patterns/section-break.png` — the
switcher pattern, which guideline p.38 names as the *website* device — at **6%**
opacity. The texture rule is shared: `.hero--brand::before, .outcomes::before`, so
there is one place to tune both.

Two implementation notes that cost a round each:

- **6% is not an arbitrary number.** The first build used 14% and the bars fought the
  headline directly. Above roughly 8% it stops being a surface and becomes a graphic.
  Below 4% it stops registering at all.
- **`cover` is wrong here.** On a narrow phone hero, `cover` fits the 16:9 artwork to
  *height* and triples the bar size. It is now `center top/100% auto repeat-y` —
  scaled to viewport width and repeated down. The artwork's top and bottom edges are
  plain Deep Green, so the vertical repeat leaves no visible seam.

The hero also fades the pattern out across its bottom 38% (`.hero--brand::after`),
because the ticker beneath it is Deep Green too and without the fade the two bands read
as one slab.

`--grad-hero` is still **defined** at `css/site.css:69` and still referenced by
`.on-gradient`, which no page currently uses. It was left in deliberately so the old
look is a one-line revert. It is otherwise dead.

### The preloader

`#preloader` on all six pages: a full-screen Deep Green overlay holding the logo, which
**switches itself on**.

| | |
|---|---|
| 0–0.3s | Mark fades up, held at 1.9× |
| 0.2–0.64s | The dot travels from the D socket into the O and seats |
| 0.64–1.18s | Lockup scales back, anchored on the pill so the mark does not drift |
| 0.78 / 0.84s | `OPS` and `DETOX` close in from left and right, staggered 60ms |
| 1.45–1.97s | Overlay lifts upward off the hero |

**It runs right to left, and that is deliberate.** The first build had the dot
travelling left→right, the conventional "switch on" direction — and it ended on a mark
that is not the logo. **That pill is an O + D monogram**: the left shape is an O and the
dot is its counter, the right shape is a D. The dot has to finish inside the O. So the
animation starts it in the D — a state that reads as unresolved — and clicks it home.
The gesture still reads as a switch; it just resolves *into* the brand. Do not "fix"
the direction.

The SVG paths are lifted out of `assets/logo/primary-detoxgreen.svg`, so the geometry is
exact rather than redrawn. The pill spans x 203.14–332.52, the two sockets sit at
x 242.34 and x 293.32, and the travel is the **50.98** between them. That number is in
**viewBox units, not CSS px** — SVG elements default to `transform-box:view-box`, so it
stays correct at every width the logo scales to. The zoom is anchored at `43.06% 50%`,
the pill's centre within the viewBox, which is *not* the viewBox centre — that is what
keeps the mark still while the wordmarks arrive around it.

One trap: the extracted paths carried `class="cls-2"`, and the fill lived in the logo
file's internal `<style>`, which does not travel with them. `.pl-logo path,.pl-logo
polygon{fill:var(--lime)}` supplies it. Without that rule the mark renders black and is
nearly invisible on Deep Green.

### Scroll-lock timing — two bugs, both fixed

The scrollbar was appearing before the page did. Two independent causes:

1. **The lock was set too late.** `js/site.js` loads at the end of `<body>`, so the
   first paint happened with the scrollbar visible and it only vanished once the script
   ran. `pl-lock` is now set by the inline `<head>` script, before anything renders.
2. **It was released too early.** The JS timeout was still `1250` from the first draft
   after the CSS lift had been retimed to `1.45s`, so the scrollbar popped in 200ms
   *before* the overlay started moving. **Both are `1450` now** — if either is retimed,
   retime the other. There is a comment on each.

`scrollbar-gutter:stable` holds the track's width open while locked, so releasing it
does not shift the layout sideways on Windows and Linux. macOS overlay scrollbars take
no space either way, which is why this was invisible during local testing.

### Behaviour and current review setting

- **It runs on every page load.** The once-per-session gate was removed at the user's
  request so the client can see it repeatedly. The `ops-preloaded` flag is *still
  written* in `js/site.js`; restoring the gate means putting
  `sessionStorage.getItem('ops-preloaded')||` back in front of the `matchMedia` test in
  the inline `<head>` script. The comment in all six files says exactly that.
- `prefers-reduced-motion` skips it entirely — `.no-preloader` is set before first
  paint, so the overlay is never painted at all rather than being hidden after the fact.
- Skippable on click, key, wheel or touch; 3s safety timeout in case a paint stalls in
  a background tab; removed from the DOM afterwards so it cannot trap a click or a tab
  stop.

### Status and what is not done

Verified headless at 1440 and 430 for the flat grounds, and frame-by-frame through the
preloader timeline on all six pages — overlay clears the DOM and the lock releases on
every one. **Not checked**: the full breakpoint ladder, Safari and Firefox, and real
devices. The preloader has not been seen by the client yet.

Two tuning knobs if it needs adjusting on the client's machine: the `1.45s` lift delay
on `.preloader` (match the JS timeout) and the `1.9` start scale in `pl-zoom`.

`hero-sections.html` was deliberately left out of the preloader rollout — it is a
review artefact with its own `<style>` block, not a site page.

**Open question this reopens:** §20 records the live hero as still using
`hero-concept.png`, whose baked-in flat green never matched `--grad-hero` and read as
"a patch of a different green". The ground behind it is now flat `--ink`, which changes
that mismatch but does not remove it. Re-check the arch against the new ground before
treating §20's first finding as still accurate.

## 22. Client comments build — `home-comments.html` (15 October 2026)

### What exists

`website-design/home-comments.html` — a copy of `index.html` with the actionable parts
of the client's 15 October comments applied. It is a **client-review artefact**, the
same role `hero-sections.html` plays for the hero.

**`index.html` and `css/site.css` were not touched.** Every rule the page adds lives in
one `<style>` block in its own `<head>`, scoped to this document, so nothing can leak
into the live site. When a change is approved, lift that rule into `css/site.css` and
delete it from the block — the block is a staging area, not a parallel stylesheet.
It carries `<meta name="robots" content="noindex">`.

### The comments, and what was done with each

| # | Client comment | Status |
|---|---|---|
| 1 | Desktop picture quality is off | **Not a code issue.** Hero only — the image is a placeholder (see below) |
| 2 | A lot of blank space on desktop | Done — §22 desktop pass |
| 3 | Step 1 above the two offers | Done — cleanse restructured |
| 4 | Noise Tax calculator for the audit page | **Blocked**, client is building it |
| 5 | Frameworks more prominent, three named | Done — new Frameworks section, copy needs his sign-off |
| 6 | Founder released from operational noise | **Open decision**, see below |

### 1 — the "picture quality" note

The client's complaint is about **the hero image only**, not the site's images in
general. That image is `hero-concept.png`, the placeholder §10 and §20 both describe,
and it is already slated for replacement — §20 records it as a 1.8MB PNG of a
photograph sitting next to a 56KB WebP of the same frame. **No image work was done
here**, because the asset is being replaced anyway and a hero direction is still
unpicked. Do not treat this comment as a request for new photography; it resolves when
the hero direction from §20 is chosen.

### 2 — the desktop pass

Gated behind `@media(min-width:1001px)`. The mobile layout is the part the client
explicitly approved, and it does not move.

- **`.container` 1180px → 1320px.** The container capped at 1180 while the hero ran
  full-bleed, so on a 1440 or 1920 screen everything sat in a narrow channel. The
  hero's own padding is derived from the same cap (`calc((100% - 1180px) / 2)`) and had
  to move with it, or the hero copy stops aligning with the sections below it.
- **`--section-y` 120px → 96px**, plus Trust 75→60, Cleanse 130→100, Outcomes 115→96.
- **The hero arch now takes the height the hero has.** This was the single largest
  blank area on the page: the hero is a full viewport tall, the portrait was capped at
  `min(640px,76vh)`, and on a 1440×900 laptop that left roughly 130px of empty Deep
  Green under the arch. Now
  `min(780px, calc(100svh - var(--header-h) - var(--ticker-h) - 32px))`.
- **Measure caps widened** — hero body 46→56ch, `.problem .body-copy` to 68ch,
  `.body-copy` 15→16px, and the 650px caps dropped from `.problem-copy` / `.about-copy`.
  These were written for a 1180px container and left the right third of every text
  column empty once it grew.
- **`.cleanse-card` min-height 520px → 440px.** The two-column branch makes the cards
  wider, so they need less height.

**Verified headless at 1512×982 only.** The breakpoint ladder, real devices and
non-Chromium browsers have not been checked.

### 3 — how the cleanse works

Was three cards numbered 01 / 02 / 03 in one flat `.cleanse-grid`. That reads as a
three-step sequence and hides the funnel: the diagnostic is free and universal, and the
two offers are a choice made *after* it, not steps two and three.

Now: the diagnostic is one full-width `.cleanse-step` band on top, a `.cleanse-branch`
connector carries the eye down, and the two offers sit below in `.cleanse-grid--two`.
**The numbers are gone** — numbering alternatives implied you buy both, in order.

`.cleanse-step` is the same `.cleanse-card` with a three-area grid laid over it
(`tag`/`meta` on the top row, heading and body left, CTA right). It keeps the card's own
`--lime` ground and button-hover handling. Below 850px it collapses back to the stacked
card the mobile layout already used.

**The two offers are assumed to be the existing "Operational flow" and "Organisational
flow" cards.** The client said "the two offers I have" without naming them, and those
two are already on the page. If he names something different, the two cards are the
only thing that changes — the structure holds.

### 5 — the frameworks section

The IP previously existed in exactly two places: one six-item list buried mid-paragraph
at `index.html:185`, and a bullet list at `about.html:95-100`. There was no prominence
to increase, so a section was built.

`.frameworks` sits **after the cleanse and before the outcomes** — it is the method the
cleanse runs on, and the stats then arrive as the result of something named. Three
cards, lead card on the `--lime` ground. The About paragraph was rewritten to point at
the section instead of competing with it. The workshop material (Async Mastery™, Speak
Up Gym™, Seven Contextual Gaps™) is one closing line, which is what the client asked
for: present, not competing.

**The card copy is drafted, not approved.** It was written from the existing site copy,
not from the client's own wording, and the page carries a visible dashed `.fw-draft`
notice saying so. Delete the element and its CSS rule together once real copy arrives.

Two things the comments did not settle, both flagged in that notice:

- **DRMT™ is shown as "the decision engine"**, which is how `about.html:100` describes
  it. The full expansion is unknown and was not invented.
- **The CORE method™ is still in the live copy but absent from the client's updated
  list.** `See – Strip – Choose™` appears nowhere on the current site. The likely
  explanation is that CORE was renamed into See – Strip – Choose, but that is a guess
  and needs confirming before the live copy changes.

### 6 — the open decision, deliberately not built

The client wrote that the site is "really focussed on the cleansing of the system", but
that it also needs to say the founder is **released from the operational noise and
claims his time back, to concentrate on growth and the next phase**.

That is a messaging-hierarchy change, not a layout one, and it conflicts with the
current `h1` — "Cleanse your business systems of operational clutter" — and with the
page's whole spine: *the cleanse*, *OPS DETOX OUTCOMES*, seven detox modules. Taken
seriously it means the hero promises the founder's payoff and the cleanse becomes the
method underneath it.

**Nothing in the hero or the outcomes copy was changed.** This is the one comment where
the client's instruction and the site's own architecture pull against each other, and
it was left for a deliberate decision rather than settled by a WhatsApp line. It is the
highest-value item in the list.

**It is already half-answered by §20.** Two of the five hero options in
`hero-sections.html` carry exactly this promise in their headline:

| Tab | Headline |
|---|---|
| B | "Flush the pipelines. *Win your time back.*" |
| C | "Cleanse your business systems. Win your time back." |

§20 labels that copy as placeholder, written to suit each layout's line length rather
than as a recommendation. It now reads as the answer to a comment the client had not yet
made. **Put the hero decision and the positioning decision in the same conversation** —
picking B or C settles both at once, and picking A, D or E leaves the repositioning
still to do elsewhere on the page.

Note also that `website-design/README.md` described the live H1 as "Cleanse your
business systems. Win your time back." That was never the H1 on any page — `copy.md`,
the mockup, the high-fidelity build and `index.html` all carry "…of operational
clutter". The README has been corrected. Worth knowing that the time-back line has been
circling this project since the 10 Oct brand rework.

### Pre-existing bug noticed, not fixed

Both `index.html` and `home-comments.html` have a **stray `</div>`** after the
preloader markup (`index.html:19`). Browsers recover from it silently. It is not from
this work — it is in every copy of the page — but it should be cleaned up next time
`index.html` is edited. (It is already removed in `home-comments-hero.html`, §23.)

## 23. Type-led hero — `home-comments-hero.html` (23 October 2026)

> **The file no longer exists.** Its content was promoted into `index.html` in `0df3393`
> and the copy was deleted. Everything below is the record of how that hero was built and
> why, and it still describes the live homepage hero — with one change since: the ground is
> Soft Ivory now, not Detox Green (§28). Recover the file from git if it is ever needed.

### What exists and why it is a third file

`website-design/home-comments-hero.html` — a copy of `home-comments.html` with the
homepage hero replaced by a full-bleed, type-led Detox Green treatment, built from a
client-supplied mockup. It is the third client-review artefact and follows the same
rule as the other two: **every change lives in one scoped `<style>` block in its own
`<head>`.** `index.html`, `home-comments.html` and `css/site.css` are untouched.

It had to be a new file rather than an edit, because `home-comments.html` is itself
still unapproved and the client needs to see the comment work and the hero direction
as separate decisions.

**This is now three near-identical copies of the homepage, each with its own override
block.** That is survivable for one review cycle and not as a habit. As soon as the
15 Oct comments are signed off, lift `home-comments.html`'s block into `css/site.css`
and retire it, so the hero artefact sits on the real stylesheet instead of on a copy
of a copy.

### The copy is unchanged

The H1, the subline and both CTA labels are exactly `index.html`'s. The mockup's own
wording — "Book the systems audit", "See how the cleanse works" — was **not** carried
across, and neither was its uppercase tracked button style, which §8 records as already
corrected once to the guideline's mixed-case pills (p.29). The only markup change to the
subline is `<b class="ht-mark">` around three phrases the mockup emphasises; the
sentence is word for word the same.

### Colour — what was changed from the mockup

| Mockup | Built | Why |
|---|---|---|
| Black headline on lime | `--ink` Deep Green on `--lime` | Black is not in the palette. Deep Green on Detox Green is the sanctioned pairing (V1.0 p.21), and at this size it reads as black anyway |
| Olive-grey "CLUTTER" | `rgba(20,51,24,.32)` | A desaturated mud is off-palette and on a projector reads as a rendering fault rather than as intent |
| Ivory header | **Deep Green header** | Explicit user request. It also solves a real problem: a near-white band straight on top of the lime, with the Deep Green logo and an invisible `.button--line` header CTA. The lime logo, lime nav and a lime pill CTA all now sit on Deep Green, which is the only legal ground for them |

The mobile nav panel drops out of that header, so it is Deep Green on this page too —
otherwise it would have been lime links on Soft Ivory, a p.22 watchout.

### Why there is no photograph

That is the point of the direction, not an omission. §20 records that no alpha-channel
cut-out of Oscar exists anywhere in the project, which is the ceiling on every
portrait-led hero option. A hero built out of the headline needs no asset that does not
exist, and it drops `hero-concept.png` — which is what client comment #1 ("desktop
picture quality") was actually about (§22.1). **This direction resolves comment #1 by
removing its subject.**

### The one thing that could not be matched

The mockup sets the headline in a wide grotesque, roughly twice Formula Condensed's
width per character. Breaking the sentence into the mockup's four lines in the brand
face reaches only about 40% across and leaves the hero hollow on the right; capping the
measure makes it worse. **The size does the work instead**: `clamp(38px,14vw,200px)`
sets it in three full-width lines at the mockup's density in the brand's own face.

The `200px` ceiling is load-bearing — above it the third line pushes the ticker under
the fold at 1920, and §5 holds the whole site to hero + ticker landing exactly on the
first screen. If the type size is retuned, re-check the fold.

### The dividing rules were removed (24 Oct)

The mockup rules a hairline above the bottom row and another between the subline and
the CTAs. Both were built, then **removed at the user's request**. On a flat Detox
Green ground they read as a wireframe grid rather than as structure, and the white
space separates the two cells on its own. The mobile gap between the subline and the
buttons was tightened at the same time, because the rule had been carrying that
spacing. If they are ever wanted back, it is a `border-top` on `.ht-foot` and a
`border-left` on `.ht-foot-cta`.

### The ring around "CLEANSE"

A hairline ellipse, one inline SVG, at 50% opacity. **It is not a V1.0 device** — it
comes from the client's mockup — so it is deliberately one deletable element. It is
hidden below 850px: once the headline wraps mid-phrase on a phone the ring scales down
to a stray mark.

### Revised after a design review (24 Oct)

The first build was shown back and had real problems. What changed:

| Was | Now | Why |
|---|---|---|
| Break `CLEANSE YOUR / BUSINESS SYSTEMS OF / OPERATIONAL CLUTTER` | `CLEANSE YOUR BUSINESS / SYSTEMS OF OPERATIONAL / CLUTTER`, forced with `.ht-br` | Line 1 was ~60% wide, leaving a hole in the top right. Two full lines plus one short word is what makes room for the CTA block |
| Headline cap `200px` | `182px` | The new break has longer lines. "systems of operational" needs ~1564px at 200px against a 1480px container, so anything above ~186px re-wraps into five lines |
| Hero grid `1fr auto` | one `1fr` row, the whole block centred | The headline had its own row and was centred in it, so the leftover height opened as a **band of empty lime across the middle**. As one centred block the leftover becomes even margin top and bottom, which reads as framing |
| Subline + CTAs in their own strip at the foot | `.ht-foot` placed in the **same grid cell** as the headline, pinned bottom-right | It fills the space beside the short last line instead of being parked at the bottom of the screen |
| CTAs stacked | Side by side | Stacked made the block taller than the line it sits beside, which is what forced it into its own strip |
| `clutter` at 32% opacity | 55% **plus a solid Deep Green strike** | At 32% the least legible thing on the screen was the one word the promise turns on, and on a projector it read as a rendering fault. A strike says "this is what we remove" with a mark instead of with absence — and it is See – Strip – Choose drawn rather than described |
| Subline phrases underlined | Bold only | An underline reads as a hyperlink and nothing else on the web; people try to click it |
| Ring: 1.5px hairline at 50%, drawn over the letters | 3px at full strength, **behind** the letterforms | A hairline read as a scratch. Drawn on top, a committed stroke crosses every stem and reads as a scribble; behind, it reads as a mark made around the word |
| — | A proof line under the CTAs | The hero had no credibility signal at all, and testimonials now sit much lower down the page (§24). The line is recombined from copy already on the site, not a new claim, and is one deletable element |

### The mobile pass (24 Oct, same day)

Shown on a real phone, the revised hero had lost the point of the direction: at
`10.2vw` the headline came out around 40px on a 390pt screen — barely larger than the
subline under it — so the hierarchy went flat and the two full-width stacked buttons
became the loudest thing on the screen.

- **Headline `10.2vw` → `14.5vw`, cap 80px.** It now fills the width the way it does on
  desktop. **Check this at 390, not at 500**: headless Chrome clamps to a 500px minimum
  window, so 390 only scales on paper (§8 records the same limitation).
- **Buttons size to their labels and sit side by side** instead of two full-width pills.
- **The proof line is set in Inter, not Formula Condensed.** A long uppercase condensed
  string at 12px was the hardest thing on the screen to read and the least important
  thing on it.
- Subline, eyebrow and the block's padding all tightened a little so the type has the
  room.

**The strike's `top:34%` is measured, at two sizes.** It is positioned against the
inline box, which is taller than the capitals, so 50% lands near the baseline; 40% still
read low at 500px. 34% centres it at both 1512 and 500. Re-measure if the type changes —
and measure, do not eyeball it, because the inline box is not the glyph box.

**Two measured breakpoints hold the overlap together**, and they are not round numbers.
`.ht-foot` may only overlap the headline's cell while it is **shorter than the last
line** it sits beside. That line is `.88 × font-size` and the font is `12vw`, so it
shrinks faster than the foot does. Left alone the subline picks up a third line and
collides with line 2 at about 1450px — which includes the 1440 laptop the client is most
likely to open this on. So:

- **≤1600px**: the foot goes compact — wider column, so the subline stays at two lines,
  and the gaps tighten.
- **≤1300px**: the overlap unwinds into a plain stack.

Re-measure both if the subline, the buttons or the proof line change.

One thing deliberately **not** changed: the CTA label still reads "Book the FREE
DIAGNOSTIC", exactly as `index.html` has it. The caps run next to "Book the" is what
makes the label look like two typefaces, and the wide O/D alternates (§9) made it worse —
those are now suppressed in the hero buttons. Whether the label itself should be mixed
case per V1.0 p.29 is a **copy decision for the client**, not a silent fix.

### Status

The first build was rendered headless at **1512×982 and 500×900 only**, and re-rendered
at both after the rules came out. Hero + ticker land exactly on the fold at both.

The revision was rendered at **1920, 1600, 1512, 1440, 1360, 1301, 1280, 1100, 1024 and
500**, which is what found the 1450 collision and the 1300 unwind. Hero + ticker land on
the fold at every one of them, the overlap holds from 1301 up, and the stack below it is
clean. Everything below the ticker is identical to `home-comments.html` and was not
re-checked here.

**Not verified**: the mobile nav panel open on the Deep Green header, Safari, Firefox,
real devices. Not yet seen by the client.

## 24. Revised section order, and the testimonial slider (24 October 2026)

### The request

The client's section **order** should change, and the testimonials should become **one
row that slides smoothly** instead of a two-row grid. The order arrived in two passes on
the same day — first "testimonials below the IP", then a full revised running order that
puts them above it. The table below is the one that was built.

### Where it was built

In **both** `home-comments.html` and `home-comments-hero.html`. The section is shared
between them — it was byte-identical before this change and still is after it — and
AGENTS.md requires a shared-section fix to land in every copy. **`index.html` and
`css/site.css` were not touched**; both files carry the change in their own scoped
`<style>` block as section 4, under the same staging-area rule as everything else in
them.

### The order

The client then sent a full revised running order, which supersedes the first move. His
list, verbatim in shape: hero → problem → offer → testimonials → IP → about → keynotes →
final CTA.

| | Before | After |
|---|---|---|
| 1 | Hero | Hero |
| 2 | Ticker | Ticker |
| 3 | Trust logos | Trust logos |
| 4 | The Problem | The Problem |
| 5 | How the cleanse works (the offer) | How the cleanse works (the offer) |
| 6 | Frameworks (IP) | **Testimonials** |
| 7 | Testimonials | **Frameworks (IP)** |
| 8 | Outcomes | Outcomes |
| 9 | Keynotes & Workshops | **About Oscar** |
| 10 | About Oscar | **How I work values strip** |
| 11 | How I work values strip | **Keynotes & Workshops** |
| 12 | Pattern divider | Pattern divider |
| 13 | Final choice CTA | Final choice CTA |

**Four sections are not named in the client's list** — the ticker, the trust row, the
Outcomes stats and the values strip — so they were placed, not invented or dropped:

- **Outcomes stayed directly after the IP.** The numbers still arrive as the result of
  something named, which is the reading §22.5 built the Frameworks section for. He did
  not ask for it to move and removing it was never on the table.
- **The values strip stayed attached to About Oscar.** "How I work" is About's tail, not
  a free-standing band.
- **Ticker and trust row did not move**; both belong to the hero's first screen.

If he meant Outcomes to sit somewhere else, that is a one-block move — ask when the
order is reviewed rather than guessing again.

One knock-on worth knowing: **§13 records that Keynotes deliberately has no coloured
separator above it**, because the photograph itself made the transition from Outcomes.
It now follows the Detox Green values strip, so the photograph meets lime instead of
Deep Green. It reads fine — checked — but the reason behind that decision no longer
applies, and there is a comment in the markup saying so.

### The slider

A **marquee, not a paged carousel.** Four placeholder quotes do not justify prev/next
controls, and "slides smoothly" is continuous motion, not stepping.

- **The track holds the four cards four times** and translates by exactly one set, so
  set 2 lands where set 1 started and the loop has no jump. Copies 2–4 are `aria-hidden`.
  **If a quote is added or removed, do it in all four copies.**
- **Why four copies and not two.** The track has to stay wider than the viewport plus one
  set, or the row runs dry at the right-hand edge before it wraps — which is exactly what
  the user saw: a single card trailing into empty ivory. One set is 4 × (420 + 28) =
  1792px, so two copies left a growing hole on anything wider than ~1800px, i.e. any
  1920 screen. Four copies cover up to ~5400px.
- `translateX(calc(-4 * (var(--tcard) + var(--tgap))))` — one card pitch × 4, derived
  from the two variables rather than written as `-25%`. A percentage would have to absorb
  the flex gaps and the seam would drift. **The `4` is the card count**; change one and
  change the other.
- **No resting shadow — only on hover.** The first build kept the grid's `--shadow`, a
  44px blur offset 18px down, on every card. Tiled into an unbroken row it pooled into a
  grey slab behind the whole band — measured `rgb(240,240,229)` against the ivory's
  `rgb(254,253,242)`, with a hard top and bottom edge, reading as a stray background
  panel. Softening it was not enough; it is now `box-shadow:none` at rest and `--shadow`
  on hover only. The row is separated by its gaps and needs no lift.
- **The track's `padding:30px 0 64px` is measured, not padding for looks.** The slider
  is `overflow:hidden`, so a hover shadow taller than the padding gets sliced off — it
  showed as a hard horizontal line under the hovered card. `--shadow` is `0 18px 44px`,
  which reaches 18 + 44 = **62px below** the card and 44 − 18 = **26px above** it, and
  site.css lifts the card 3px on hover as well. 30/64 clears both with a little slack.
  The slider carries `margin:-30px 0 -64px` to cancel it, so the row still occupies
  exactly the cards' height in the page flow and the air above and below stays even.
  **Retune the pair together, and retune them if the hover shadow changes.**
- **No horizontal padding on the track** — the slide distance is an exact multiple of the
  card pitch and side padding would offset it.
- Cards are a **fixed** `var(--tcard)` = `min(420px,78vw)`. A flexible width would make
  the pitch depend on the viewport and the seam would drift.
- The slider is full-bleed with both ends fading into the Soft Ivory ground, so the row
  reads as continuing rather than as a cropped grid. The heading above it stays inside
  `.container`.

**The fades are gradient overlays, not a `mask-image` — and that matters.** The first
build masked the slider element. A mask promotes it to its own composited layer, and
macOS Chrome colour-manages that layer slightly differently from the Soft Ivory painted
behind it, so **the entire row showed as a visibly paler band** across the section. The
user spotted it immediately. Two `::before`/`::after` overlays in `var(--paper)` do the
same job on one layer. `will-change:transform` came off the track for the same reason.
Under `prefers-reduced-motion` the overlays are hidden, because the slider becomes a
scroll container there and absolutely-positioned overlays would scroll away with the
content. **Do not reintroduce the mask.**
- Hover, `:active` (the touch case, where there is no hover) and `:focus-within` all
  pause it, so a quote can actually be read.
- `prefers-reduced-motion` drops the animation entirely: the row becomes a normal
  swipeable scroll-snap scroller and copies 2–4 are hidden, so the same four quotes do
  not repeat four times in something scrolled by hand.

**It is CSS-only on purpose.** `js/site.js` is shared with the live site and a review
artefact must not touch it.

### Status

Rendered headless from `home-comments.html` at **1512, 1024 and 500 × 982**, with the
sections above testimonials temporarily hidden so the row came into frame (harness files
deleted). Layout, card sizing, the end fades and the mobile row all read correctly, and **500 was
re-rendered after the shadow and four-copy changes** — cards fall back to `78vw`, the row
stays clean, no shadow band.

The loop was then checked properly at **1920 × 900**, by forcing five frames of the
cycle with a negative `animation-delay` and a paused play state (0s, 13.5s, 27s, 40.5s,
53.9s) and measuring the rightmost card pixel in each. It sits within ~64px of the right
edge — inside the end fade — at every frame, so the row never runs dry, and the 0s and
53.9s frames match, so the seam is continuous. **This is the way to verify a marquee
headless**; `--virtual-time-budget` does not advance a CSS animation, so plain
screenshots at 4s and 30s are the same frame and tell you nothing.

The clipped hover shadow was checked the same way — headless cannot hover, so the hover
shadow and the 3px lift were forced onto one card with a temporary `:nth-child(3)` rule
and the result rendered at 1512. The shadow now fades out completely with no cut edge.

### Two further changes in the same pass

- **The pattern divider moved below the final CTA**, so it closes the page into the
  footer instead of separating Keynotes from the CTA. Because the footer is Deep Green
  too, the divider now reads as the footer's top edge, which is what the client wanted.
- **The hairlines between sections are gone.** `.section-rule` draws a 1px `--rule` line
  under a section; across the Soft Ivory stretches it read as a stray wireframe line
  rather than as structure, and the sections already separate on their grounds and their
  spacing. Killed with `.section-rule{border-bottom:0}` in the override block rather
  than stripped from the markup, so the class stays available if any single one is
  wanted back.
- **The two parked sections left the homepage entirely** — see §25.

The reordered page was rendered end to end at **1300px wide** — offer → testimonials →
IP reads correctly at the top, and Outcomes → About → values → Keynotes → CTA at the
bottom, with no broken joins and no section losing its ground colour.

`home-comments-hero.html` was patched identically throughout and was not re-rendered.
Everything above the testimonials differs between the two files (the hero), everything
from the testimonials down is the same.

## 25. Parked sections moved to their own file (24 October 2026)

### What moved

`website-design/parked-sections.html` — a holding file for **The cost of operational
noise** and **The OPS Detox system** (the seven module popups). Both were cut from the
Canva deck on 12 Oct and had been sitting below the homepage's final CTA inside the loud
`.removed` frame (§18). The client wants them kept because they are likely wanted on
another page — most plausibly Work With Us.

They are now **out of `home-comments.html` and `home-comments-hero.html` altogether**.
`index.html` still carries them in the `.removed` wrapper and was not touched.

### How they were moved

**Verbatim.** No copy, markup, class or id changed, so `#system` and the seven module
popups work on the holding page exactly as they do on the live site. The file loads
`css/site.css` and `js/site.js` and carries the `#modal` markup the popups need, so it
is a working page and not a snippet dump — you can click the modules and check them.

The neon **`.removed` frame and badge did not come across**. They were review furniture
for showing the client what had been cut from the homepage; on a holding file they would
only be misleading. §18's note still applies to `index.html`, where the wrapper remains.

### Reusing one

Copy the `<section>` into the target page. It needs:

- `css/site.css` — already shared by every page, nothing to add.
- `js/site.js` — for the module popups and reveal-on-scroll.
- The `#modal` block near the bottom of the holding file, **only** for the system
  section. The cost section needs nothing beyond the stylesheet.

The two `.parked-label` lime strips and the Deep Green note at the top are page furniture
for the holding file. Delete them along with whatever you copy out.

### Not a site page

It is not linked from the nav and carries `<meta name="robots" content="noindex">`, the
same as the three review artefacts. It has **no preloader** — it is a workbench, not
something the client is walked through.

### Status

Rendered headless at 1300 × 2600: both sections render in full and keep their grounds.
The module popups were not clicked through in this pass; the markup is byte-identical to
the homepage's, where they are verified (§5).

## 26. The pattern rebuilt in CSS, and the hero's brand details (24–25 October 2026)

Everything here is in `home-comments.html` and `home-comments-hero.html` only.
**`index.html`, the five interior pages and `css/site.css` were not touched**, so the
live site still has the PNG pattern, the text ticker and a headline without the wide O.

### The switcher pattern is now CSS, not a PNG

`assets/patterns/section-break.png` is a 3841 × 2161 image. `css/site.css` sizes it to
the full viewport width on the dark bands and `cover` on the divider, so on a 1920 screen
it renders at half scale and the bars come out enormous — and they grow with the screen.
The client's note was that the motif "looks big".

**It cannot simply be tiled smaller.** The artwork is not seamless horizontally: bars run
off both edges and do not line up — measured at 36 lime rows on the left edge against 53
on the right. At 6% opacity a repeat seam is invisible, at full strength it reads as a
rendering fault. So:

| Where | What it is now |
|---|---|
| Hero / Outcomes dark bands | Still the PNG, but a fixed **760px tile** (`--pattern-w`) instead of `100% auto`, so the motif is a constant size at every viewport. The repeat seam is invisible at 6% |
| Under the hero | **Rebuilt in CSS** as a moving strip of bars carrying the ticker's words — it replaced the text ticker entirely |
| Above the footer | **Rebuilt in CSS**, bars only, two rows running opposite ways |

Rebuilding in CSS is also what finally solved the "too big" note on the divider: the bar
size is now a number, not whatever the artwork scales to.

### The strip that replaced the ticker

The original `.ticker` is **gone** from both pages. In its place, `.pt-strip`: one row of
pills, each with the pattern's gradient — a long tail fading up out of the Deep Green
ground, resolving to flat Detox Green where the word sits, so Deep Green type always
lands on solid lime. It runs left to right, the reverse of the ticker it replaced. The
words are the ticker's own, unchanged, and it carries the ticker's `aria-label` now that
it is the only one.

**Its height is `--ticker-h`, and that is load-bearing.** The hero is
`calc(100svh - header - ticker-h)`, which is what lands the fold exactly under this strip
(§5). Giving the bars breathing room therefore means **raising the token, not padding the
strip** — pad it and the hero stops reaching the fold on every viewport. The token is now
`92px` desktop and `74px` mobile, up from the text ticker's 46/42.

### The divider above the footer

`.pb`: two rows of bare bars, **travelling in opposite directions**. Each row travels the
way its bars point — the gradient tail reads as the trail behind the bar, so a bar lit at
its right end has to move right. Built the other way round first and both rows looked
like they were sliding backwards.

### The one rule all three marquees share

Four copies of the set, a step of `translateX(-25%)`, spacing as **`margin-left`** so no
margin trails the last flex item where it can be dropped from the track's `max-content`
width, and **the `nth-child` cycle must equal one copy**.

That last one is not theoretical. The strip's bar tails first cycled on `3n` and `4n`;
4 does not divide the 6 bars in a copy, so copy 1 and copy 2 had different tails, the
copies were not identical and the loop visibly jumped once a cycle. The cycle is `6n`
everywhere now. **If a word or a bar is added or removed, that 6 changes with it.**

Verified by measurement rather than by eye — all three tracks report
`one copy == trackWidth / 4` exactly, delta `0.00`.

### The hero's brand details

- **The headline now has the wide O/D** (§9) and did not before. `js/site.js` splits on
  uppercase `/([OD])/`, and the `h1` is typed in sentence case and uppercased by CSS, so
  it never matched — the headline was the one piece of display type on the page without
  the brand's signature O, while the eyebrow right above it had one. The letters are
  wrapped by hand in the markup, because `site.js` is shared with the live site and
  setting `ss01` on the whole heading swaps every letter and destroys the condensed face
  (§9 records that being tried and rejected). **If the H1 copy changes, re-wrap by hand.**
  The strip's words are wrapped the same way, for the same reason.
- **The headline was resized twice for it.** The wide O is much wider: at the old `182px`
  the three lines became five and overflowed. It is `150px` / `10.3vw` now, and mobile
  dropped `14.5vw → 12.6vw` because at the old size `OF` was orphaned on its own line.
- **Leading went `.88 → 1.0`, for the ring.** The hand-drawn loop around "cleanse" is
  drawn *behind* the letterforms — on top it crosses every stem and reads as a scribble.
  But at `.88` there was almost no open lime above or below the word either, so nearly
  all of its path was hidden and it showed as disconnected arcs. The looser leading gives
  it a clear band to travel through. **The ring was the reason for the leading change**;
  tighten it again and the ring goes back to looking broken.
- **The ring and the struck-out "clutter" both live in boxes forced to `line-height:1`.**
  As default inline boxes their offsets came from the line-height and the font's metrics,
  and neither a percentage nor an em offset tracked the capitals across sizes — the
  strike sat centred at 182px and high at 57px. A 1em box makes the offsets a fixed
  fraction of the font size, so one calibration holds everywhere. **Measure these, do not
  eyeball them**: the inline box is not the glyph box.

### Status

Rendered at 1920, 1512, 1440, 1301, 1280, 1100, 900 and 500, plus a simulated 390 (see
below). Three lines on desktop, four on mobile, the hero and the strip land exactly on
the fold at every width, and all three marquee loops measure exact.

**Headless cannot render below 500px** — Chrome clamps the layout viewport to 500 even
when the window is smaller, so a "390" screenshot is a 500px layout cropped, not a 390px
one. 390 was checked by constraining the body and substituting the `vw`-derived font size
with what it computes to at 390. **The phone is still the only real check**, and the
client has been viewing it over the LAN.

Not verified: Safari, Firefox, real devices beyond the client's own phone.

## 27. The 28 October homepage review (28 October 2026)

A round of client comments worked through one at a time. **Everything here is in
`index.html`** — which is now the live homepage, not a review copy, since `0df3393`
promoted the approved hero page to it. `css/site.css` and the five interior pages were
not touched; every rule added lives in the page's own `<style>` block, sections 12–15.

### The hero lost both of its drawn marks

The client's note was that too much was going on in the hero. The **ring around
"CLEANSE"** and the **strike through "CLUTTER"** are both gone — markup and rules.

Neither was a V1.0 device: the ring came from the client's own mockup (§23) and the
strike was this build's invention, added when 32% opacity made "clutter" the least
legible word on the screen. **"clutter" is still set back at 55% with no mark on it**,
which is the state §23 records as having been rejected once. It reads acceptably now
that it is the only soft thing in the hero, but it is worth watching.

**This is an open question for the client, not a settled change**: keep the hero plain,
or put either mark back. Both are recoverable from this commit.

One leftover: `.ht-head` keeps `line-height:1.0`, which existed only to give the ring a
clear band to travel through. It stays because the 150px size and the three hand-forced
line breaks were calibrated against it and the fold depends on the block's height (§5).
Retune it only together with the size.

### Wide letters: the client stated a rule

> "The rule is to always have a wide O and D in Operational Detox."

The hero eyebrow had a wide O and a narrow D. Cause is the trap §26 already records:
`js/site.js` §3a splits on **uppercase** `/([OD])/`, and the eyebrow is typed in sentence
case and uppercased by CSS, so only the literal capital O ever matched. The D is now
wrapped by hand.

**That rule is almost certainly broken elsewhere.** Any display-type instance of
"Operational Detox" or "OPS Detox" typed in sentence case is rendering a narrow D, on
this page and on the five interior pages. Not audited. The fix is either a sweep of hand
wraps or making `site.js`'s regex case-insensitive — one line, but it is the shared file
and it would change every page at once.

She also asked whether letters beyond O could be widened in the H1. **They all can**:
`ss01` is a complete wide alphabet — every uppercase letter has an alternate, almost all
exactly 2× the normal width (`I` is 3.35×). §9's list of six was wrong.

**C and U were widened and cost nothing.** Measured, not assumed: the headline's size
ceiling is set by its longest line, `SYSTEMS OF OPERATIONAL`, which caps it at 161px in
the 1480px container. Neither C nor U appears in that line. Widening **S** would cost
real size — seven of them in the headline, ceiling drops to 136px — and at that point the
device stops being a signature. **Re-measure that ceiling before widening any letter that
appears in line 2.**

### One size for the section titles

The page carried six: 43px on The Problem and About, 55px on Keynotes, 58px on the
Frameworks, 70px on the cleanse / testimonials / outcomes, 102px on the closing CTA.

All section titles are now the cleanse's `clamp(42px,4.7vw,70px)`, which is what the
client pointed at. The Problem and About were small because `site.css:123` caps any
heading inside a two-column `.section-grid` at 44px — a rule written for the old 1180px
container and shared with the interior pages, so it is overridden here rather than edited.

**The override selectors are written long on purpose.** `.section-grid>div:first-child h2`
is (0,2,1); a plain `.problem-heading` loses to it and nothing moves, which is exactly
what the first attempt did.

Two titles are deliberately off the scale: **"How I work"**, a label inside a compact
panel, and **"What will you choose?"** at 102px, the page's closing statement.

### The logo line became a title

"Trusted by ambitious leaders and founders at" was a 13px bold Inter `<p>` — the only
section lead on the page set in body type. It is an `<h2>` now in Formula Condensed
uppercase at `clamp(20px,2.5vw,38px)`, one step below the section scale at the client's
instruction ("big, not as big as the others").

Started at 48px and came down. **The weight cannot be reduced** — the site self-hosts
exactly one cut, Formula Condensed Bold (§9), so a lighter `font-weight` only makes the
browser synthesise one and distort the letterforms. Size and tracking are the only knobs.

`site.css` caps `h2` at 21ch, which would break this 46-character sentence into three
lines in the middle of a centred section, hence `max-width:none`.

### The two offer cards

- **"Founder Bottleneck"** and **"Team Bottleneck"** added under the headings, naming the
  bottleneck each track fixes. Placed under the heading rather than as an eyebrow above
  it: the cards already open with the `.cleanse-meta` chips, and a third stacked label
  would mean three lines of small type before the card says anything.
- `.cleanse-bottleneck` needs the `:not(.cleanse-meta)` in its selector — `site.css:465`
  paints every `<p>` in these cards at 84% white, so without matching that specificity the
  line comes out body-white instead of lime.
- **Copy change, by the client**: "For companies where…" → "For **teams** where…" on the
  Organisational card. Her own locked copy, changed by her. Do not "restore" it against
  `content/copy.md`.

### Truth Latency™ gained "the truth"

In the **description**, not the one-liner: "In most companies someone knew **the truth**
weeks before it was said out loud." The first attempt put it in the one-liner above and
was wrong. The one-liner is unchanged.

### The values left the full-bleed band

The lime `.values-strip` that ran across the page between About and Keynotes is gone —
the client's note was that it broke the flow. The six values are now a `<figcaption>`
panel under Oscar's portrait inside About, which is where they belong: §24 already
treated "How I work" as About's tail rather than a free-standing band.

**`site.css:660` makes the `<figure>` itself the arch** — `aspect-ratio:3/4`,
`overflow:hidden`, the 260px top radius — so a caption inside it is clipped away and
renders invisibly. The arch moved onto the `<img>`; the figure is a plain column now. The
portrait is unchanged.

The values are **chips, not a two-column grid**. In columns nothing lines up — they run
from "Clarity" to "Uncomfortable honesty" — and the right half empties out. Chips size to
their words, wrap evenly, and reuse the outlined pill the offer cards already use.

`.values-strip` CSS is still in `site.css`, unused, if the band is ever wanted back.

**Still open**: the panel and the photo read as two cards — there is a gap and two sets of
rounded corners between them. Squaring the join (photo bottom corners to 0, panel top
corners to 0, gap to 0) makes them one arch-topped object. Raised, not yet built.

### Keynotes: a new stage photograph, and how it was made

Two AI-generated keynote frames were supplied. The first is now in the section as
`assets/img/speaking-keynote.jpg` / `.webp`.

**The slide in it was blanked.** It originally read "Surviving ≠ Living / Break free from
autopilot", which sells a personal-development keynote, not operational detox for
scale-ups. The type was removed and the backdrop rebuilt from the screen's own navy:
sample the clean bands above and below the block, interpolate per column so the screen's
vignette survives, add grain matched to the photo's own noise, feather the patch edge.
Verified numerically — peak brightness inside the old type block is 59/255, which is
backdrop, not a surviving letter edge; the seam measures about 1 level out of 255.

Oscar never needed masking: his hand stops at x=700 and the type block starts there.

**An intermediate version exists with OPS Detox copy set on the slide** in real Formula
Condensed ("BUSY ≠ PRODUCTIVE / STRIP THE CLUTTER. WIN YOUR TIME BACK.", placeholder
copy). The client preferred the blank screen. The method is reusable: render the type with
headless Chrome, warp, composite. `~/Downloads/Keynote picture start - OPS DETOX.png`.

**The layout mirrored.** The old photo had Oscar centre-right, so the copy sat in a left
column. In this frame he is at roughly 21–46% from the left and the screen fills the
rest, so a left column lands on his chest. Same device — full-bleed photo, narrow column,
scrim behind it — on the other side, and the section is taller (860px, was 680px) at the
client's request.

A stacked version was built and rejected: photograph as its own band, copy beneath it on
Deep Green. Worth knowing it exists in this commit's history if the overlay ever stops
working.

The green colour pass (`.speak-media::after`, 18%) is **off**. It existed to pull a cool
blue-grey photo toward the palette; this frame is already dark navy and the pass only
muddied it.

**The scrim can stay soft because the screen is blank.** While the slide still carried
type it had to run near-solid — white type at even 10% opacity read straight through the
copy — and that flattened the photograph.

### A pattern bug, fixed locally

`site.css:181` inverts a primary button on hover to a **Deep Green pill with lime type**.
On a Deep Green ground that pill is invisible and the button appears to dissolve into
floating text. The client caught it on "Book Oscar to speak".

V1.0 p.29 already answers it: on Deep Green the inverted state is an **outlined lime
pill**. Fixed for `.speak-copy .button`. The `.button` rule already carries a 2px
transparent border at rest, so nothing shifts when the outline lights up.

**This is a pattern bug, not a one-off.** Any primary button on a Deep Green ground does
it. The cleanse cards were patched for it separately. Fixing it once in `site.css` is the
right answer but touches all six pages.

### Status

Rendered headless at 1920, 1512, 1440, 1301, 1280 and 500 across the changed sections.
Three headline lines on desktop, four on mobile, hero and pattern strip still land exactly
on the fold at every width. No heading exceeds three lines. Hover states were verified by
forcing the state in CSS — headless cannot hover.

**Not verified**: Safari, Firefox, real devices. Below 500px is still unreachable headless
(§26). The client views it over the LAN on her phone.

### Open with the client

1. **The hero marks** — keep it plain, or restore the ring, the strike, or both.
2. **The slide copy**, if the branded-screen version is ever wanted: it needs Oscar's own
   line, not the placeholder.
3. **The second keynote image** — same treatment available, not done.
4. **The AI images themselves.** They show an audience that did not exist. Oscar is a real
   TEDx speaker with a real speaking photo already in the project
   (`assets/img/speaking.jpg`, still present and unused by the homepage now). A fabricated
   audience is a credibility claim and the foreground heads are the usual tell. **Raised
   with the user; it is Oscar's call to make knowingly, not ours by default.**
5. **Whether the wide-letter rule extends beyond "Operational Detox"** to the headline's
   C and U, so it can be applied consistently.

---

## 28. Soft Ivory homepage hero — `hero-ivory.html` (29 October 2026)

> **APPROVED 31 OCTOBER and promoted into `index.html`**, where it is stylesheet section 16.
> **That block must stay last in the file** — it overrides section 6 at equal specificity
> and wins on source order alone, so moving it up returns the hero to lime silently.
> `hero-ivory.html` is a frozen record now; change the hero in `index.html`.
> `index.html`'s title and description were review-build text and are now real page copy.

It was built as a comparison, not a decision. `hero-ivory.html` is `index.html` with **one** change:
the type-led hero's ground goes from Detox Green `#CCFE06` to Soft Ivory `#FEFDF2`.
Everything from the switcher strip down is identical, so the two files can be opened side
by side and only the first screen differs. `index.html` and `css/site.css` are untouched.

### What the swap forces

V1.0 p.22 names Detox Green on Soft Ivory as a watchout, so nothing in the hero may be
lime any more. Three knock-on changes, all scoped to that document:

| Change | Why |
|---|---|
| Buttons invert back to the V1.0 default pair | Primary becomes the Deep Green pill with lime type. On the lime hero the primary *had* to be Deep Green, because a lime pill on lime is invisible. |
| `clutter` goes from 55% to 62% Deep Green | Ivory is lighter than lime, so the same alpha reads weaker against it. |
| A hairline is added at the hero's bottom edge | Against lime, the Deep Green switcher strip was a hard colour break. On ivory the hero stops reading as a block. |

The header stays Deep Green. The §5 reason (a lime hero needs a legal top edge) is gone,
but an ivory header on an ivory hero erases the band entirely and the lime logo, nav and
pill CTA have nowhere legal to sit.

### The trade, for the client conversation

Ivory is calmer and the headline is genuinely more legible — Deep Green on ivory is a
higher-contrast pair than Deep Green on lime. The faded `clutter` also reads as a clean
grey-green rather than the muddy olive it becomes on lime.

Against that: **the brand is no longer stated on the first screen.** Lime is the
signature; ivory is the neutral. The only lime above the fold becomes the logo and one
button, and the page stops announcing itself. The switcher strip below also loses its
punch — on lime it was a hard cut and the lime bars rhymed with the hero across it; from
ivory it is a softer transition and the strip carries all the lime on the screen alone.
The preloader compounds it: the sequence becomes green flash → ivory, which lands flatter
than green flash → lime.

---

## 29. The About page rebuilt (29–30 October 2026)

`about.html` was rebuilt around a new hero and three new sections, with two sections
deleted and the page's ending taken from the homepage. **Every rule is scoped inside
`about.html`; `css/site.css` and `js/site.js` are untouched** — the latter matters because
it is shared with the five other pages (AGENTS.md).

Section order now: hero → Leader / Innovator / Speaker → operations leader + credentials →
ticker → Oscar's path → three principles → six values → testimonials → CTA.

### 29.1 The hero: framed portrait opening to full bleed

The page opens on `assets/img/oscar-steps.jpg` in a lime frame at 1180×664, holds, then
the frame grows to the full viewport while the border thins to nothing and the corners
square off. The name and caption sit inside the picture on one scrim and stay fixed size
while it opens around them.

**It animates the box, not a transform.** `transform: scale` composites more cheaply but
scales the name and caption with the picture, so the type would arrive at the wrong size
and read soft on the way. Growing width/height keeps the type fixed. It costs a layout
pass per frame on one element with no siblings in flow.

Four things cost real time and are all load-bearing:

1. **The grid row must be definite.** Left as the implicit auto row it sized to the
   photograph's intrinsic height — a tall portrait — so the row grew far past the frame
   and the bottom-aligned name plate went with it, clipped by the `overflow:hidden`.
   `grid-template-rows: minmax(0,1fr)` pins it.
2. **The crop is animated, 46% → 34%.** The frame does not just grow, it grows *wider
   relative to its height*, so a single `object-position` that frames him at rest crops
   into his head at full bleed.
3. **Border and radius are registered custom properties, in the same `@keyframes` as the
   size.** This has been built three ways and the history matters, because the obvious fix
   in one engine breaks the other:
   - **Build 1** — `border-width` and `border-radius` as ordinary properties alongside
     `--ah-w`/`--ah-h` in one block. **Chrome did not interpolate them**: the frame reached
     full width still carrying its 6px lime edge and 36px corners, then dropped both at the
     end.
   - **Build 2 (29 Oct)** — split into their own `ahEdge` keyframes, second in the
     shorthand's animation list. Fixed Chrome. **Silently did nothing in Safari** — the
     picture grew to full bleed and kept the border and the rounded corners for the whole
     animation. The client saw it on 31 Oct; §29's original "verified mid-flight" note was
     a Chrome-only measurement and did not catch it.
   - **Build 3 (31 Oct)** — the edge re-expressed as registered custom properties and
     merged back into the single `ahOpen` block, on the theory that Safari had dropped the
     second entry in the animation list. **Still broken in Safari.** That rules out both the
     list and the property type: Safari ignores the edge animation whenever it shares an
     element with the size animation, however the two are packaged.
   - **Build 4 (31 Oct)** — split onto two **elements**. A new `.ah-box` wrapper
     carries `ahOpen` (the size, still registered custom properties) and nothing else;
     `.ah-frame` carries `ahEdge` (plain `border-width`/`border-radius`, no `var()`, no
     `@property`) and nothing else. One animation per element. `.ah-frame` keeps
     `overflow:hidden`, so the photograph's corners still round *with* the border rather
     than behind it.

     **Still broken in Safari.** Four CSS builds, four failures.
   - **Build 5 (31 Oct, current)** — **the edge is animated in JavaScript**, by
     `animateEdge()` in `about.html`'s own inline script, using `Element.animate()`. It runs
     the moment `.hero-go` lands, so the WAAPI `delay: 450` and `ahOpen`'s
     `animation-delay: .45s` are measured from the same instant.

   **Safari will not run this animation from a stylesheet, full stop.** Four CSS packagings
   were tried and every one left the picture growing to full bleed still carrying its 6px
   lime border and 36px corners, while the *size* animation on the same page worked
   throughout. Do not spend another round on a CSS fix.

   What stays, and why it looks redundant but is not:

   - **`.ah-box` stays.** It is a pure animation wrapper with no styling of its own.
   - **The `ahEdge` / `ahEdgeSm` keyframes stay**, still attached to `.ah-frame`. Script
     animations sit above CSS animations in the cascade, so WAAPI simply wins when it runs;
     the keyframes are the no-JS fallback.
   - **`animateEdge()` carries its own `prefers-reduced-motion` guard.** The stylesheet's
     reduced-motion block cannot stop a script animation, so without it the edge would
     animate for exactly the users who asked it not to.
   - **Timing is duplicated** between the CSS (`ahOpen`) and the JS (1150ms / 450ms /
     `cubic-bezier(.65,0,.2,1)`). Retune the two together or the border stops shrinking in
     step with the frame growing.

   Verified in Chrome by seeking the animations directly — `getAnimations()`, `pause()`,
   then set `currentTime` — at 450ms, 1025ms and 1600ms: 1180px/6px/36px → ~1330px/1px →
   full bleed/0/0. **Note that `--virtual-time-budget` does not advance animations** (§24
   records the same trap for the marquee), so a plain timed screenshot shows the resting
   frame and proves nothing. **Safari is still unverified by measurement** — there is no
   WebKit automation on the build machine, which is what let builds 2–4 ship broken.

   The same pass fixed a silent dead rule: the ≤700px block declared `--ah-h` and a 4px
   `border-width`, both of which an animation's value beats, so neither had ever applied.
   The phone now swaps `animation-name` to `ahOpenSm`/`ahEdgeSm` instead.
4. **The whole thing is held until the preloader lifts.** A fixed delay measured from load
   played the animation out behind the Deep Green overlay, finished before anyone saw it.
   A longer delay cannot fix it: `js/site.js` lifts the preloader at 1450ms normally,
   **immediately** on the first click/keypress/wheel/touch, and at 3000ms on its safety
   net. The four animations therefore start `paused` (with `fill-mode: both` they hold
   their from-state) and are released by a `.hero-go` class set when `.pl-lock` comes off
   `<html>` — the exact moment `endPreloader()` starts the lift, and it fires on all three
   exits. Three ways in so the hero cannot strand: class already absent (reduced motion),
   a MutationObserver, or a 4s backstop.

> **`animation-play-state` must be declared BELOW every rule that sets the `animation`
> shorthand.** It is part of that shorthand, so a later `animation:` declaration resets it
> to `running`. Declared first, only `.ah` paused and the picture grew behind the overlay
> anyway. There is a note in the file; keep it last.

The header goes Deep Green on this page, as on `index.html` §5, and stays sticky.

**The name plate is left-aligned, not centred (31 Oct).** The caption used to be a
full-width centred flex row while the name — whose box is capped by `site.css`'s
`h1{max-width:19ch}` — sat against the plate's left padding, measured 24→912 in a 1400
frame. So the caption drifted out from under the name, and drifted further as the picture
opened, because it re-centres on the growing frame while the name does not move. Both now
share one left edge. The plate's side inset is a percentage (`max(24px,3.2%)`) rather than
a flat 24px, so it opens with the frame — about 38px framed, 61px at 1920 — which keeps the
optical margin constant **without adding an animation**, and Safari would not have run one.

### 29.2 The cut-out, and the tooling that made it

**§20's ceiling is lifted: a transparent cut-out of Oscar now exists.** It was made from
`assets/img/oscar-about.jpg` using the macOS Vision foreground-instance mask — the same
engine as Preview's "Remove Background" — so hair and jacket edges come out usable.

Weight mattered, since the client has already complained about a 1.8MB image:

| Stage | Size |
|---|---|
| Raw mask output | 1.5 MB |
| Trimmed of empty canvas, resized to 860px | 516 KB PNG |
| **AVIF, what almost everyone gets** | **46 KB** |

Served through `<picture>` — AVIF first, PNG fallback — with `loading="lazy"`,
`decoding="async"` and explicit `width`/`height`. AVIF with alpha covers Chrome, Firefox and
Safari 16.4+. (**Corrected 31 Oct**: there *is* a WebP encoder on this machine —
`cwebp` at `/opt/homebrew/bin/cwebp` — and `sips -s format avif` encodes AVIF natively.
Both were used for the hero optimisation below.)

Four candidates were cut and compared on Deep Green: `oscar-about` (chosen),
`oscar-portrait` (clean but a stiff, symmetrical hands-on-hips pose),
`oscar-problem` (looking down, hands cut mid-gesture) and `speaking` (unusable — he
occupies only 198×441 of the frame, so it is badly soft). `speaking-keynote.jpg` was
deliberately excluded: §27 flags it as showing an audience that never existed.

### 29.3 The three new sections

**Leader / Innovator / Speaker.** Built from the client's own mockup. Three words set as
large as the column allows with the leading closed to .86 — in the mockup they sit at
body-headline size and read as a list of job titles. The portrait goes in an arch, which
is V1.0's own picture-frame device, with a Deep Green offset behind it for depth. Soft
Ivory ground with the logo pattern at 6%; no lime, because lime on ivory is the p.22
watchout. Hairline rules were tried under each word and **removed on request (30 Oct)** —
at that size they read as underlines rather than as structure.

**Operations leader + credentials.** Modelled on `stevenbartlett.com/about`, whose source
was read. Two findings, both reproduced:

1. **It is two blocks there, not one** — a plain two-column statement, then a separate
   block where the cut-out occupies an empty left half and the credentials sit right
   (`offset-md-6`). Our mockup fused them, which is what made it feel crowded.
2. **The credentials arrive one at a time** — AOS `fade-left`, delays 0/500/1000ms.

Reproduced with the project's own machinery: the existing `.reveal`
IntersectionObserver plus two `transition-delay` lines, and **no new library**. His page
loads AOS *and* simple-parallax (~6KB plus a main-thread scroll handler) for this. The
portrait's drift uses a CSS scroll-driven animation (`animation-timeline: view()`) — no
JS, off the compositor, and it simply does nothing in Safari and Firefox, which is the
right failure since the photo is already in position.

Deep Green ground: the direct translation of his black, and the only ground where the
lime lead-ins are legal (p.21). On the mockup's ivory they would have had to stay bold
black. His feet land exactly on the ticker — the figure is a normal grid item,
bottom-aligned, so the section sizes to the photograph.

**Oscar's path (timeline).** Also from his page: a `.timeline-line` spine with `.tl-block`s
alternating photo/text across it. Three deliberate differences — **his timeline is desktop
only** (`d-none d-md-block`), not copied; no years, because the client's copy gives phases
instead; and no blurred duplicate image behind the text, his signature touch, which would
only draw attention to placeholder photography.

> `grid-row: 1` on both halves is **required**, not tidiness. Setting only `grid-column`
> leaves auto-placement to pick the row, and it never moves backwards: on the even blocks
> the figure is placed first into row 1 / column 2, so the text — asking for column 1,
> already behind the cursor — is pushed into row 2. That is why the even blocks had their
> copy below the photograph and out of line with the dot.

**Three principles.** The mockup is three columns of centred black body copy on a dotted
field, with no brand colour and no hierarchy. Rather than invent a card, this reuses the
site's **own** `.cleanse-card` pattern from `site.css` — circular numeral, name in Formula,
and the first card taking the lime ground while the others do not — so readers meet a
pattern they already know from the homepage. Deep Green section; card 01 Detox Green,
cards 02/03 Soft Ivory, all with Deep Green type; the numeral disc inverts on the lime
card exactly as `.cleanse-num` does. Left-aligned, not centred: centred body copy means
every line starts in a different place, so the eye re-finds the left edge on every line.

### 29.4 Deletions, and copy

Deleted on request: **"The truth was always in the building"** (which took `poster.png`
with it) and **"A system, not opinions"** (the frameworks lists). No orphaned markup.

Also gone, earlier in the rebuild: the band carrying the old hero's copy — *"About Oscar
de Grauw / Why work with me / Founder of OPS Detox™. Seventeen years inside complex,
international organizations…"*. **That is locked client copy and it is now nowhere on the
page.** It is in git. Its two CTAs were kept.

All copy in the new sections is the client's, word for word, including the US spelling of
"organization" and the missing full stop at the end of the ops section's first paragraph
("…finding them and taking them out") — flagged, not fixed, per the copy rules. The stray
`1.` before the Courage paragraph in the mockup is a list artefact from the source
document and was not reproduced.

**Em dashes were removed from all visible copy on 30 October, on request** — eight of
them, including one in the `<title>`, which shows in the browser tab. Five were
pre-existing locked copy, not new: the signature line, the DRMT frameworks line, the
newsletter demo message and the footer. **Those five need the client's sign-off.**
Remaining em dashes in the file are inside HTML/CSS comments only.

### 29.5 The ending, copied from the homepage

The testimonial row and the final CTA were copied from `index.html` verbatim so both
pages end the same way. The `section-rule` hairlines between sections were removed.

> The CTA needed **markup only** — `site.css` and `js/site.js` already carry `.choice`,
> `.toggle-row` and the switch behaviour. **This was initially wrong and shipped broken.**
> `index.html` §11 holds a block that flips the switch's *appearance*: knob resting left
> as a Deep Green ring rather than a solid dot, Clarity lit and Noise dimmed. Without it
> the toggle falls back to `site.css`'s shared state — knob right, Clarity dimmed, Noise
> lit — the reverse of the homepage. Markup and `aria-pressed` were identical on both
> pages the whole time; that CSS block was the entire difference. It is copied now.
>
> Why it is built that way: `site.js` treats `aria-pressed="true"` as the *resting* state
> and snaps the toggle back to it 350ms after a click. `site.js` is shared, so the
> homepage flips the visuals rather than the attribute — flipping the attribute would make
> the switch snap back to **Noise**, the opposite of the section's point.

### Status

Rendered headless at 1400 and 520 across every changed section, plus the hero animation
probed frame by frame at 900/1500/1700/2100/2600/3400ms.

**Headless gotchas worth knowing, both of which cost time here:**

- `decoding="async"` images screenshot **blank** — the capture does not wait for the
  decode. They load correctly (`complete: true`, correct `naturalWidth`). Strip the
  attribute in a throwaway copy when screenshotting.
- `.reveal` elements far below the fold never fire their IntersectionObserver in a
  headless capture, so they screenshot at `opacity: 0`. Force `.reveal{opacity:1}` in the
  copy.
- Chrome headless has a **~500px minimum window width**. A `--window-size=390` screenshot
  is a 500px render cropped to 390 and will look like a layout bug that is not there.

**Not verified**: Safari, Firefox, real devices, below 500px, and hover states.

---

## 30. Work With Us — a new page (31 October 2026)

`website-design/work-with-us.html`. **This is not `detox.html`.** That page — titled "The
DETOX" in the nav and described in §2 as "The DETOX / Work With Us" — is the 14 October
service build on the old structure, and it was left untouched. The client asked for a new
page, supplied section by section, so it is being built that way.

Same scope rule as `index.html` and `about.html`: every rule lives in one `<style>` block
in this document. `css/site.css` and `js/site.js` are not touched.

**Running order, set by the client on 31 Oct:** hero → the problem → the system introduced →
**testimonials** → the two offers and the add-on. The testimonials sit *above* the offers
here, which is the reverse of the homepage (offer → testimonials → IP, §24). Deliberate and
client-stated; **do not "correct" it against the homepage.**

### Section 1 — the hero

Page title "WORK WITH US" centred above a two-column split: eyebrow, headline, body and two
CTAs left, photograph right. Copy is the client's, with the break after "team" forced.

The two coral labels in the supplied design are **annotations, not copy** — "Leads to
contact" and "Leads to page with Calendly integration" — so "Let's talk" goes to
`contact.html` and "Book the FREE DIAGNOSTIC" to `diagnostic.html`. Button order and styling
copy `index.html`'s hero, so both pages offer the same pair in the same way.

### Section 2 — "Nobody designed it this way. It simply accumulated."

Deep Green: it breaks the ivory above it, it is the only legal ground for the lime accents
(p.21), and it suits the content. Three deliberate departures from the mockup:

- **The six statements are left-aligned, not centred.** Centred body copy starts every line
  in a different place; §29.3 made the same call on the About page. The heading stays
  centred, as drawn.
- **They are a numbered two-column list separated by hairlines, not cards.** Six boxes would
  turn a list of symptoms into six equal claims. The lime numeral is `.cleanse-num`'s device
  without the disc — six discs on one screen reads as a control panel.
- **The closing sentence is the section's payoff**, set in display type with "a third of
  every week" in lime. It is the consequence, not a seventh symptom, and the phrase is the
  hero's own promise inverted ("a third of its week back").

`site.css` caps `h2` at 21ch, which broke the heading into four lines; the measure is
uncapped here and the two lines are forced in the markup instead.

### Section 3 — "There is a cleaner way to run a growing company."

Back to Soft Ivory, so the page alternates ivory / green / ivory instead of stacking two
dark bands. Copy left, photograph right, as drawn.

- **The heading is deliberately below the one section scale** (§27's
  `clamp(42px,4.7vw,70px)`). That scale is for titles owning the full container width; this
  one sits in a ~600px column beside a photograph, where 70px turns a 48-character sentence
  into five lines. §27 already keeps two titles off the scale for the same kind of reason.
  Matching it would mean lifting the heading out of the column to sit full width above both.
- **The eyebrow is typed in literal capitals, "OPS Detox™"** — the one case where
  `js/site.js` widens both letters by itself, since it splits on uppercase `/([OD])/`.
  Retype it in sentence case and the wide letters silently disappear.

### Section 4 — testimonials

Copied verbatim from `index.html`. **This is the third copy of that block** — see the
Technical note in §6, and do the lift into `css/site.css` before the real quotes arrive.

It is the only ivory section on the page **without** the dot field, because it came across
untouched. It does not read as broken — the testimonial cards are white panels — but one
`ws-dots` class would make it consistent if that is wanted.

### Section 5 — the two offers, and the add-on

One Soft Ivory section (`.ws-offers`) holding three cards.

**They were first built as two consecutive full-bleed Deep Green sections and that failed.**
Stacked, they read as one long dark stretch with a gap in it; the client's note was that
they "look identical", which they were — same ground, same width, nothing between them but
air. They are now **Deep Green round-rect cards on an ivory ground**, which gives each a
visible edge and an ivory gutter, and uses the brand's own 36px card — the device the
homepage already uses for this same pair.

**The two tracks remain identically treated on purpose.** They are a choice between equals,
not a sequence, so making one dominant would imply a default. The separation comes from the
frame and from the **bottleneck label** — "Founder bottleneck" / "Team bottleneck", the same
copy and the same lime Formula Condensed device as the homepage's offer cards (§27). That
label is what tells them apart at a glance; the headings alone were not doing it.

| Card | Modules | CTA |
|---|---|---|
| Operational flow | Meetings · Decision · Reporting Detox | `detox.html` |
| Organisational flow | Communication · Ownership · Psychological Safety Detox | `detox.html#modules` |
| Tool Stack Detox (add-on) | — | none |

- **`.ws-offer` is reusable** — a third track, or a copy change, is markup only.
- **The three module boxes are outlined at an 18px radius**, not the site's 36px round-rect
  cards. Full cards would read as three separate offers rather than as what is inside one.
  They stay three across down to 980px, then stack.
- **Every lowercase `o` in the two headings is hand-wrapped.** `site.js` widens only the
  literal capital, so `Operati-o-nal fl-o-w` would otherwise show the same letter at two
  widths. `index.html`'s H1 wraps them all for the same reason.

> **One word differs from the supplied mockup, deliberately.** The Organisational mockup
> opens "For **companies** where delegation…". On 28 Oct the client changed that exact
> sentence on the homepage's card to "For **teams** where…" (§27) — her own edit to her own
> locked copy. The mockup almost certainly predates it, and building "companies" would
> silently undo a client edit and leave the two pages disagreeing. "teams" is built and
> flagged in the markup. **One word to revert if the mockup is the newer source.**

**The add-on closes an open question from §6**: where the seventh module goes. **It is
deliberately not a third Deep Green card.** Tool Stack Detox fits neither bottleneck, which
is precisely why the client proposed it as an add-on; three identical cards would read as
three equal choices and undo that. It is the lighter weight of the same family — ivory
ground, Deep Green hairline, same 36px radius, centred, narrower, no CTA. No lime on it,
which p.22 would not allow on ivory. It carries a **solid** `--paper` fill so the dot field
stops at its edge instead of running through the copy.

Its copy says "Tool Stack **Module**" in the last sentence while the card's title says
"Detox". That is the client's wording and was left alone.

### Open on this page

- ~~**Both photographs are placeholders.**~~ **DONE, 2 Nov — see §37.** Both landed,
  both are in at the brand's 36px radius, and `.ws-shot--pending` is deleted along with
  its rule. The section-3 frame was **cropped** out of a social post first; read §37
  before re-supplying it.
- **The dot field is not a V1.0 device.** The guideline names exactly two patterns — the
  logo pattern (merch only, p.37) and the switcher pattern (the website device, p.38) — and
  a dot grid is neither. It is one deletable rule, `.ws-dots::before`, held at an alpha low
  enough to read as paper texture. Delete it and every ivory section goes plain at once.
- **The nav item exists only on this page.** Adding "Work With Us" to the other six headers
  is a six-file edit, and it makes the nav seven items, which will crowd at laptop widths.
  Decide whether this replaces `detox.html` in the nav or sits beside it.
- **The 29 Oct package names are still not applied anywhere.** "The Execution package
  (Founder Bottleneck)" and "The Leadership package (Team Bottleneck)". The cards now carry
  a bottleneck label *and* a heading, so stacking a third line would hit the crowding
  problem §27 already ran into — the cleanest home is probably replacing the short heading,
  not adding to it. Open since 29 Oct.
- **The strongest number on the site is still unused.** §6 records Tool Stack Detox as
  carrying 10–30% of tooling spend, €150–300K on a €1M spend. It is nowhere in the supplied
  copy and was not invented, but the add-on card is its natural home. Every other section
  on this page argues qualitatively.
- **"DIAGNOSTIC" renders with a wide D and O** in the hero CTA, which makes the label look
  like two typefaces. Not local to this page: `js/site.js`'s `OD_SELECTOR` includes
  `.button`, so `index.html`'s hero does it too. Left consistent rather than diverged — fix
  both at once in the shared file.
- **The Deep Green header block is duplicated across three pages** — here, `index.html` §5
  and `about.html` — because an ivory hero would otherwise put the lime logo, nav and CTA on
  Soft Ivory, p.22's first watchout. It belongs in `css/site.css`.

### Status

Rendered headless at 1512, 1024 and 500, plus the full page end to end at 1300. No
horizontal overflow, no heading over three lines, every section holds its forced breaks.
**Not verified**: Safari, Firefox, real devices, below 500px, hover states.

## 31. The About hero image, optimised (31 October 2026)

`assets/img/oscar-steps.jpg` was the **camera original: 3448 × 5168, 15.1 MB.** It is the
About page's full-bleed hero, so it was the first thing that page loaded — and eight times
the size of the 1.8 MB hero the client had already complained about (§22.1).

| | |
|---|---|
| Was | 3448 × 5168 JPEG, **15.1 MB** |
| Now, AVIF — what almost everyone gets | 2048 × 3069, **262 KB** |
| WebP | **314 KB** |
| JPEG fallback | **789 KB** |

**98% smaller, with no layout, crop or quality change visible at any viewport tested.**

### Why 2048 wide, and not smaller

The frame opens to the full viewport. `object-fit:cover` on a 2:3 portrait in a landscape
frame scales by **width**, so on a 1920 screen the whole image is used at 1920 across — the
height is what gets cropped. 2048 covers that with a little slack. Anything narrower is
upscaled on a large display. On a phone the opposite is true: the 5:4 frame scales by
height and needs barely 550px, which is why one file serves both rather than a srcset.

### Tooling — both are on this machine

- `sips --resampleWidth 2048 --setProperty formatOptions 58 in.jpg --out out.jpg`
- `cwebp -q 70 out.jpg -o out.webp` (`/opt/homebrew/bin/cwebp`)
- `sips -s format avif -s formatOptions 55 out.jpg --out out.avif`

**§29.2's note that there is no WebP encoder here is wrong and has been corrected.**
`-Z` constrains the *longest* side — on a portrait that gives you 1366 wide, not 2048. Use
`--resampleWidth`.

### The markup change

The `<img>` became a `<picture>` — AVIF, then WebP, then JPEG — with explicit
`width`/`height`. The `<picture>` is the grid item now, so `.ah-shot{display:block;
min-height:0;height:100%}` gives it the height the `<img>` used to take directly. **The
`ahCrop` animation stays on `.ah-pic`, which is still the `<img>`**, so the animated crop is
untouched.

> **Headless Chrome screenshots AVIF as a blank area**, even though the image reports
> `complete:true` and the correct `naturalWidth`. This looks exactly like a broken layout
> and is not one — §29 records the same trap for `decoding="async"`. To check an AVIF
> visually, strip the `<source>` tags in a throwaway copy so the JPEG is served.

### Not done

`about-hero.html` also references `oscar-steps.jpg` and still uses the plain `<img>`. It is
a standalone demo, not a site page, so it picks up the smaller JPEG automatically and loses
nothing. The other large assets are untouched and worth the same pass: `hero-concept.png`
(1.8 MB, no longer used by the homepage), `hero-cards.png` (1.8 MB), `poster.png` (1.9 MB),
`time-is-money.png` (1.8 MB) and `portrait.png` (1.4 MB).

---

## 32. The repository flattened and cleaned (1 November 2026)

The project had accumulated four parallel copies of the design at different stages, plus
review artefacts sitting in the same directory as the live pages. **The root is now the
site, and everything else is either `playground/` or gone.**

### What moved where

| Before | After |
|---|---|
| `website-design/index.html` and the six other pages | **repo root** |
| `website-design/css/`, `js/`, `assets/` | **repo root** |
| `website-design/{hero-sections,hero-ivory,home-comments,about-hero,index-old,parked-sections}.html` | **`playground/`** |
| `website-design/README.md` | folded into the root `README.md` |
| `mockup/` | **deleted** — the original static mockups, superseded by the live site since 10 Oct |
| `high-fidelity-design/` | **deleted** — the approved homepage visual reference, superseded by the same |
| root `assets/` (three `.gitkeep` stubs, no real files) | **deleted** |
| `.DS_Store` ×2 | **deleted** |

**Nothing was deleted that is not in git history.** `mockup/` and
`high-fidelity-design/` are recoverable with `git show <commit>:<path>`; both were
reference-only and neither was linked from any page.

**Kept deliberately**: `content/` (the locked client copy), `reference/` (gitignored,
client personal data) and `Brand assets/` (gitignored, 75 MB — §19 warns that
`OPS_DETOX_BRAND_GUIDELINE_V1.0.pdf` may exist nowhere else; do not delete it to save
space without backing it up first).

### The path rewriting, and the one thing that nearly broke

Every page reference in the project is relative, with no leading `./`. That means
**promoting the site to the root was free** — `css/`, `js/` and `assets/` kept the same
relative depth from the pages and from each other, so `css/site.css`'s own `../assets/…`
references still resolve. No edit was needed in any site page, in `site.css`, or in
either script.

**`playground/` was the opposite**: moving a file down one level breaks every one of its
relative references. All six were rewritten — `href`/`src`/`url()` prefixed with `../`,
including the page-to-page links, so `playground/hero-ivory.html`'s nav reaches the real
`../about.html` rather than a sibling that does not exist.

> **The trap: `srcset` on `<source>` elements.** The first rewrite pass covered `href`,
> `src` and `url()` and silently missed the `<source srcset="assets/img/hero-concept.png">`
> inside the `<picture>` in `home-comments.html` and `index-old.html`. The `<img>`
> fallback beside it *was* rewritten, so both pages would have kept working in every
> browser that takes the fallback and broken only where the `<source>` won — the kind of
> failure that does not show up in a screenshot. **Grep for `srcset` as well as `src`
> whenever a file changes directory depth.**

### How it was verified

Two passes, because the filesystem and the browser do not agree about what a reference
means:

1. **Filesystem** — every `href`, `src`, `srcset` and `url()` in all 13 pages plus
   `site.css`, `site.js` and `diagnostic.js` resolved against disk relative to its own
   file. **312 references, 0 broken.**
2. **HTTP** — the root served on `:8777`, all 13 pages fetched, their references
   extracted and each one actually requested. **45 unique URLs, 0 failed requests.** All
   13 pages return `200`.

The only unresolved references left are `assets/img/work-whiteboard.jpg` and
`assets/img/work-two-ways.jpg` in `work-with-us.html`. **Those are pre-existing and
expected** — they sit inside HTML comments, the real `<figure>` markup held ready for
the two photographs §30 is waiting on. They are not a consequence of this move.

### What this does not fix

The restructure is purely locational. **The duplication §6 records is untouched**: the
testimonial slider is still copied into three pages and the Deep Green header into
three, each with its markup, and the lift into `css/site.css` is still the next
structural job. Flattening the tree makes that lift easier to see, not already done.

Not re-verified visually: nothing was restyled, so no screenshot sweep was run. If a
page looks wrong, suspect a missed reference and re-run the two checks above rather than
the CSS.

---

## 33. The contact page brought onto the system (1 November 2026)

`contact.html` was still the 14 October interior build. It was the first of the five
untouched interior pages (§7 step 5) to get the treatment `index.html`, `about.html` and
`work-with-us.html` have had.

Same scope rule as those three: **every rule lives in one `<style>` block in the
document. `css/site.css` and `js/site.js` were not touched.**

### What was actually wrong with it

Not taste — six specific things, and one of them was a bug:

1. **Soft Ivory header with a Deep Green logo.** Every reworked page runs a Deep Green
   header, because an ivory header over an ivory hero puts the lime logo, nav and CTA on
   Soft Ivory, V1.0 p.22's first watchout. This page was the ivory version, and its
   `<img>` pointed at `primary-deepgreen.svg` — which is invisible the moment the band
   goes dark, so the logo had to be swapped with the header.
2. **The hero was `.hero--narrow`** — a 20ch copy block in the top-left corner of an
   otherwise empty screen, h1 at site.css's default scale. It read as a page nobody had
   designed.
3. **No switcher pattern anywhere.** No strip under the hero, no divider above the
   footer, so the page had none of the device V1.0 p.38 names as *the* website pattern,
   and it ended on a hard ivory-to-green cut into the footer.
4. **The booking slot was a grey box laid out with four inline styles**, including a
   literal `font:26px var(--display)` in a `style` attribute.
5. **The contact details — the only real information on a contact page — were three
   `.values` paragraphs** stacked in the quietest corner of the page, under the booking
   box, with inline margin overrides.
6. **The closing switch was in the pre-fix state.** It still used site.css's shared
   `.switch-line`/`.switch` with `aria-pressed="false"` and `.is-on` on *Operational
   noise*. **The contact page was closing by arguing the opposite of the homepage.** This
   is exactly the §29.5 bug the About page shipped and had fixed; it was never fixed
   here, because nobody had opened this page since 14 October.

### What it is now

Ivory / green / ivory / green, so the page alternates instead of running as one field:

| | Section |
|---|---|
| 1 | Hero — centred, page title on `work-with-us.html`'s `.ws-title` scale, dot field |
| 2 | The switcher-pattern strip, copied from `index.html` §9 |
| 3 | The two routes in — two round-rect cards on ivory: the form, and the booking slot |
| 4 | The direct details — Deep Green band, three columns, lime labels |
| 5 | The closing choice, with `index.html`'s switch markup and override |
| 6 | The pattern divider, closing into the footer |

**No inline styles remain on the page.**

### The copy is unchanged, and nothing was written to fill the layout

Every string was already on the page. The only change is that two of them swapped rank:
**"Contact" was the eyebrow and still is; "Let's talk" was the h1 and still is** — it has
only been given the page-title scale. Both column subheads ("Send a message" / "Start
here", "Book directly" / "Pick a slot"), all four form labels, the booking note and the
whole closing section are verbatim.

> **There is deliberately no section title above the two cards.** Each card already opens
> with its own eyebrow and subhead, and inventing a title above them would have meant
> writing copy the client has not seen. The temptation was real — the section looks like
> it wants one.

### Decisions worth knowing

- **The hero is centred, not the two-column split `work-with-us.html` uses.** That page
  splits because it has a photograph for the right half. There is no contact photography
  in the project, and a half-empty grid is what the old layout already was.
- **`.ct-card h2` sits below §27's `clamp(42px,4.7vw,70px)` section scale**, for the
  reason §30 records on `work-with-us.html`'s section 3: that scale is for titles owning
  the full container width, and these two sit in ~600px columns.
- **`site.css`'s `.form-card` is stripped back to a plain block** inside the card
  (`background:none;padding:0;box-shadow:none`). It is itself a white panel with 42px
  padding, its own radius and its own shadow — left alone it would have been a card
  inside a card. The fields and all their validation styling are untouched.
- **The booking well is dashed, not solid.** It is explicitly an empty slot waiting for a
  platform; a solid panel reads as finished design. Delete `.ct-embed` with the element
  when the embed lands.
- **`#book` stays on the routes section.** Every "Book a call" and "Let's talk" CTA on
  the site points at `contact.html#book`, including this page's own header CTA. Moving
  the id would break all of them.
- **"Work With Us" was added to this page's nav.** §30 leaves open whether it joins the
  main nav and whether it replaces `detox.html` there. It is here so this page's nav
  matches the one the client is being shown — **not so that question is settled.** The
  nav is now seven items on two pages and six on the other five, which is itself an
  argument for settling it.

### The duplication got worse, as expected

**The Deep Green header is now in four pages** — `index.html` §5, `about.html`,
`work-with-us.html` §2 and here. The switch override is in three. Both are copied with
their markup, and both belong in `css/site.css`. §7 step 2 has been saying this since 31
Oct; each interior page reworked adds another copy.

### Status

Rendered headless at **1920, 1512, 1024 and 500**, with `.reveal` forced visible and the
marquees paused (the §29 headless traps).

- No horizontal scroll and **no element overflowing the viewport** at any of the four.
- **No JS errors.** Both demo forms present and wired.
- The closing switch now rests exactly as the homepage's does, verified by computed
  style: `aria-pressed="true"`, Clarity at opacity 1, Noise at 0.35.
- **All three marquee loops measure exact** — one copy equals a quarter of the track,
  delta 0.00 on each. The strip's copy measures 2212.72px, the same figure `index.html`'s
  own comment records, so the two strips are the same object rather than a near-copy.

**Not verified**: Safari, Firefox, real devices, below 500px (§26), hover states.

---

## 34. The Keynote page — section 1 (1 November 2026)

`keynote.html`. A new page, built section by section from the client's supplied designs,
the same way `work-with-us.html` was (§30). **Section 1 only so far.**

Same scope rule as every reworked page: one `<style>` block in the document,
`css/site.css` and `js/site.js` untouched.

### The brief, and its one important boundary

The client named <https://clemensdoppler.com/keynote-speaker-osterreich/> as the
reference. **He asked for its STRUCTURE, explicitly not its design** — our palette, type
and devices throughout. That page is navy and yellow; ours is Deep Green, Detox Green and
Soft Ivory. Do not let the reference leak into the styling.

Its running order, read from the live page, which is the map for the sections still to
build:

| | Section | Our equivalent |
|---|---|---|
| 1 | Hero | **Built** — see below |
| 2 | Media presence — logo grid | The trust row already on `index.html` |
| 3 | The challenge — three problem cards | — |
| 4 | "What's missing?" — three solution cards | — |
| 5 | Pull quote over imagery | — |
| 6 | Keynote topics — five modular keynotes plus a custom option | Tracks of Time is one; the others are unknown |
| 7 | Credentials — portrait, list, stats grid | §29.3's credentials block is close |
| 8 | Testimonials | The slider — **fourth copy if used; lift it first** |
| 9 | Closing CTA | `.choice` |
| 10 | Newsletter | Already in the footer |

**Section 6 is the open question.** The reference sells five named keynotes. We have one
title, *Tracks of Time*, inferred from the mockup's eyebrow. Ask how many keynotes exist
before that section is designed — a five-card grid holding one card is a different layout
from a single feature block.

### The photograph was already in the project

`assets/img/speaking-keynote.jpg`, 1600×1067 — the same frame §27 put on the homepage.
The railway tracks projected behind him are why the keynote is called *Tracks of Time*.
Nothing new was needed.

**Three things carry over from §27 and all three are still open:**

1. **It is AI-generated and shows an audience that never existed.** §27 raised it as a
   credibility claim rather than a design choice, and it is now the hero of a page
   specifically about Oscar's speaking. His call, knowingly.
2. **The slide in it was blanked.** It originally read *"Surviving ≠ Living / Break free
   from autopilot"* — which §27 judged off-brand for operational detox. **The headline the
   client has now supplied for this page is that same idea in his own words**, so the line
   may well be wanted back on the slide. Worth putting to him; the compositing method is
   recorded in §27 and is reusable.
3. **It has not been optimised.** A 1600×1067 JPEG with a WebP beside it but no AVIF,
   unlike every other hero in the project (§31). Worth the same `sips`/`cwebp` pass before
   the page is shown.

### The hero

The framed-picture-opening-to-full-bleed device from `about.html` §29.1, at the user's
request. **The machinery is copied wholesale, comments included**, because each of those
comments records something that cost a build: one animation per element, the registered
custom properties, the definite grid row, `animation-play-state` declared last, the
`.hero-go` release, and the edge animated from JavaScript because **Safari will not run it
from a stylesheet**.

> **This is the second copy of that mechanism.** If a third page wants it, lift it into
> `css/site.css` and `js/site.js` instead of copying again. The JS half is the dangerous
> one — it is easy to copy without its `prefers-reduced-motion` guard and ship an
> animation to exactly the people who asked for none.

Three deliberate differences from the About hero:

- **The crop animates 50% → 42%, not 46% → 34%.** The source is 3:2 landscape rather than
  2:3 portrait, so `cover` crops far less height and Oscar's head sits near the top —
  the About values crop into it.
- **The copy plate is on the RIGHT and vertically centred**, not bottom-left.
- **The copy sits directly on the photograph, in Soft Ivory.**

> **The mockup's yellow boxes are ANNOTATION, not a design device, and the first build of
> this hero got that wrong.** It set the headline and subline in Detox Green highlight
> slabs, reading the stickers as an instruction. They are not: the supplied image is a
> screenshot of the reference site with the new copy pasted over it, and the reference's
> own white headline is still visible behind the stickers where they do not quite cover
> it. §30 records the same trap on `work-with-us.html`, where the mockup's coral labels
> turned out to be notes ("Leads to contact") rather than copy. **Read a coloured box in
> these supplied mockups as a sticky note until proved otherwise.**
>
> Corrected the same day, on the user's challenge. The slabs are gone; the headline is
> Soft Ivory on the scrim, the subline a held-back ivory, and lime is left to the eyebrow
> and the CTA.

Why ivory rather than lime, since both are legal on Deep Green (V1.0 p.21): lime is the
brand's signature and the headline is a 62-character sentence. Setting the longest string
on the page in the accent colour spends the signature on the thing that least needs it,
and leaves the eyebrow and the CTA with nothing to be louder than. **One-line swap to
`var(--lime)` if the client wants it the other way.**

Two knock-ons from dropping the slabs, both deliberate:

- **Leading went 1.52 → 1.18.** The loose value existed only to stop consecutive slabs
  overlapping; with the boxes gone it read as an airy block rather than a statement.
- **The scrim got denser** — `.92` held out to 40% and the fade delayed to 58%. While the
  copy had its own opaque lime ground the scrim only had to tint; now the ivory sits
  straight on the photograph and the gradient has to carry legibility across the plate,
  which spans roughly 46%–97% of the frame.

#### The plate is on the right, against the mockup, and it has to be

The mockup puts the copy on the left, because that is where the reference site has it.
**It cannot go there with this photograph**: Oscar occupies roughly 21–46% of the frame's
width, so a left column lands on his chest. §27 hit exactly this and mirrored the
homepage's Keynotes section for the same reason, with the same image.

Nor can the photograph be flipped to suit — the lectern in frame reads "KEYNOTE / OPS
DETOX", which would come out mirrored.

**So if the client wants the copy on the left, the fix is not CSS. It needs a photograph
with Oscar on the right.** §27 notes a second keynote image exists that has never been
treated; that is the first place to look.

#### Other decisions

- **The scrim is a one-sided gradient, not a colour pass.** §27 records that the 18% green
  pass over this exact photograph was switched off because the frame is already dark navy
  and the pass only muddied it. A gradient from the right pulls the copy's half toward the
  palette and leaves Oscar and the screen in their own colour — §20's rule: tint the
  backdrop, never the man.
- **The headline is sentence case, and that is the guideline rather than an exception.**
  V1.0 p.26 sets short statements in uppercase with open tracking and *longer sentences*
  in standard letterforms with tighter spacing. `site.css`'s blanket
  `text-transform:uppercase` on `h1` is turned off here.
- **No `<i class="od">` in the headline, deliberately.** The brand's wide alternates are an
  uppercase set; the only O/D in this sentence are lowercase letters inside ordinary
  words. The client's rule is about the phrase "Operational Detox", and §9 records that
  firing `ss01` broadly destroys the condensed face.
- **The eyebrow carries BOTH `eyebrow` and `kh-eyebrow`, and is typed in literal
  uppercase.** Both halves are required and **both were wrong in the first build**: the
  element had only `.kh-eyebrow`, which is not in `js/site.js`'s `OD_SELECTOR`, and the
  text was sentence case, which the script's uppercase-only `/([OD])/` would never match.
  Measured as 0 wrapped letters, then 2. Retype it in sentence case, or drop the
  `eyebrow` class, and the wide O's silently disappear again.
- **The phone breakpoint is 850px, not the About page's 700**, because this plate sits
  *beside* the picture rather than under it and runs out of room sooner. The JS
  `animateEdge()` matches that number — **retune the two together.**
- **The phone's horizontal crop is measured, not eyeballed.** The frame goes portrait, so
  `cover` switches to scaling by height and starts cropping the sides. At 500×785 the
  source scales to 1177 wide, so 677px is cropped — 338px off each side at the default
  50%, which cut into Oscar and jammed him against the left edge. He centres near 400px
  scaled, so the window wants to start near 150: `150/677 = 22%`. Built at **26%**, which
  keeps a little of the lectern. Note this is *not* the "animation beats a declaration"
  trap from §29.1 — `khCrop` animates `--kh-crop`, the Y component only, so redeclaring
  `object-position` applies normally.

### The nav is now a real problem

"Keynote" was added to this page's header the same way `work-with-us.html` added itself
(§30). **That makes eight items.** It will crowd at laptop widths, and the site now has
three different navs across seven pages. This needs settling rather than growing by one
more each time a page is built — bundled with §30's open question of whether Work With Us
replaces `detox.html`.

### Status

Rendered at **1920, 1512, 1024, 500 and 390**. No horizontal scroll and no element
overflowing at any of them.

The animation was verified by **seeking it directly** — `getAnimations()`, `pause()`, then
set `currentTime` — not by timed screenshots, which prove nothing because
`--virtual-time-budget` does not advance animations (§24, §29.1):

| t | box | border | radius |
|---|---|---|---|
| 450ms | 1180×664 | 6px | 36px |
| 1025ms | 1404×746 | 1px | 11.7px |
| 1600ms | 1512×785 | 0px | 0px |

785px is `863 − 78`, the measured viewport height minus `--header-h`, so the frame lands
exactly on the viewport minus the sticky header. A live run reports **five** animations
with **one of them script-driven**, confirming the WAAPI edge fires and `.hero-go` is
released by the preloader rather than stranding on the framed state.

**Not verified**: Safari, Firefox, real devices, hover states. Given §29.1's history —
four CSS builds shipped broken because every check was Chrome-only — **this hero in
particular wants a real Safari look before it goes in front of the client.**

### Sections 2 + 3 — "As seen in" and the pull quote (1 November)

Both sit on **one** Soft Ivory field, as drawn.

> **They share a single `.kn-paper` wrapper rather than carrying a dot field each, and
> that is structural.** The dots are a 26px `background-size` on a pseudo-element anchored
> to its own element's inset, so two adjacent dotted sections restart the grid at the
> join — and unless both heights happen to be exact multiples of 26px, the pattern
> visibly jumps there. One wrapper, one continuous grid. (On `work-with-us.html` the
> dotted sections are always separated by a Deep Green band, which is why this never
> showed up before.)

**The logo row is a second, separate ask.** These are *press* logos — the reference calls
the section "Medienpräsenz". The homepage's trust row is *client* proof ("Trusted by
ambitious leaders and founders at"). §6 already lists real client logos as outstanding;
**add the publications Oscar has appeared in as a distinct item.** The row reuses
`site.css`'s `.trust-logos` grid and its grey placeholder type so both rows take real
logos the same way, but it is capped to 900px and centred — spread across the full 1320px
container the four placeholders read as four separate things rather than one row of proof.

The "As seen in:" heading is deliberately a step *below* `index.html`'s trust row, which
§27 raised to `clamp(20px,2.5vw,38px)`. That one introduces the page's client proof; this
is a caption over a press row inside a longer page, and at 38px it outweighs the quote
beneath it.

#### The quote could not be set as drawn, and the reason is the font files

The mockup sets it in an **italic serif**. **Neither brand face has an italic.** Formula
Condensed is a single Bold cut (§9), and `Inter-Variable.ttf` was inspected directly: its
`fvar` table carries exactly two axes, `opsz` and `wght` — **no `ital`, no `slnt`.** Asking
for `font-style:italic` would make the browser synthesise a faux oblique by shearing the
glyphs, the same objection §27 raised to synthesising a lighter weight. A real italic needs
a licensed file, and that is worth bundling with the §9 licence purchase if the client
wants this treatment.

So it is upright Formula Condensed in sentence case — a pull quote is a statement, the
display face carries statements here, and V1.0 p.26 puts longer sentences in standard
letterforms. `cite` also has `font-style:normal` forced, because the element is italic by
default and would have hit the same synthesis.

> **The measure is in pixels, not `ch`, and that is the whole point.** The first build
> capped the blockquote at `17ch` and it came out **eleven lines deep and about a fifth of
> the page wide** — the exact word-ladder failure §4 records. A `ch` is the width of the
> zero glyph, and in a *condensed* face that is very narrow, so 17ch buys far fewer
> characters than the same number would in Inter. Sized from the text instead: ~213
> characters over the mockup's 4 lines is ~53 per line, which at 46px in this face needs
> roughly 930px. Built at `min(940px,94%)`. **Measured: 4 lines at 1512 and 1920, 3 at
> 1024, 5 on a phone.**

#### Two deliberate departures from the mockup

- **The ornament is the brand's own O+D monogram, not the mockup's sparkle.** A four-point
  sparkle is a generic editorial dingbat belonging to no part of this identity. The two
  paths are lifted straight out of `assets/logo/primary-detoxgreen.svg` — the same geometry
  the preloader uses (§21) — with the viewBox cropped to the mark alone, so it is exact
  rather than redrawn. Deep Green on Soft Ivory; lime there would be p.22's first watchout.
- **No em dashes in the attribution.** The mockup draws "— OSCAR DE GRAUW —". §29.4 records
  em dashes being stripped from every piece of visible copy on the client's own instruction
  (30 Oct), so reintroducing a pair to decorate a name would walk that straight back. It is
  set as `OSCAR DE GRAUW`, carrying `.eyebrow` so `site.js` wraps the wide O and D, and
  typed in literal uppercase so the `/([OD])/` match actually fires. **Measured: 2 wrapped
  letters.**

#### An em-dash regression this turned up, and fixed

Checking the above found that **§29.4's em-dash removal had never been applied to
`contact.html`** — and that the §33 rework carried the old strings through, after which
`keynote.html` inherited them from the copied footer. Both are now clean: the footer line,
the newsletter success message, the two form messages, the booking note and both `<title>`
tags. `about.html` and `work-with-us.html` were already clean.

**Still outstanding: `index.html` has one in its `<meta name="description">`**, and
`detox.html` (6), `diagnostic.html` (6) and `freebie.html` (5) are untouched — those three
are still on the 14 Oct build generally (§33). Not changed here, since none was in scope.

#### Copy left alone on purpose

- The comma in *"actually living, is the story I now share on stage"* separates subject
  from verb. It is the client's and it ships as written.
- The mockup's straight quote marks are set as typographic curly quotes, matching the curly
  apostrophes the rest of the site already uses.

#### A note on order

The client supplied these two as "the next sections", so the quote sits directly after the
press row. **The reference puts its media row at §2 and its pull quote at §6**, with the
challenge and solution sections between them. His order is being followed, not the
reference's — worth confirming he meant to move it up rather than it being the next thing
he happened to design.

#### Status

Rendered at **1920, 1512, 1024, 850, 500 and 390**. No horizontal scroll and no element
overflowing at any of them. The quote wraps to 4 / 4 / 3 / 3 / 5 / 5 lines respectively,
the attribution carries both wide letters, `cite` computes to `font-style:normal`, and the
monogram fills Deep Green. The hero's five animations are unaffected.

**Not verified**: Safari, Firefox, real devices, below 500px (§26), hover states.

---

## 35. The Keynote page, finished to the footer (2 November 2026)

`keynote.html` ran hero → press row → pull quote at the end of 1 Nov. Nine more sections
were built on 2 Nov and the page now reaches the footer. Same scope rule throughout: one
`<style>` block in the document, **`css/site.css` and `js/site.js` untouched, and no
inline styles on the page.**

### The running order as built

| | Section | State |
|---|---|---|
| 1 | Hero — framed-to-full-bleed photograph | §34 |
| 2 | "As seen in" press row | §34, logos outstanding |
| 3 | Pull quote | §34 |
| 4 | "Surviving is not the same as living" | Built |
| 5 | "Keynotes that give people a new perspective" | Built |
| 6 | "What audiences take away" | Built |
| 7 | Keynote topics | **PLACEHOLDER** |
| 8 | Testimonials | Copied from `index.html` — **fourth copy** |
| 9 | "Built for rooms where leaders are honest enough to listen" | Built |
| 10 | "From a railway track to the stage" | Built, **portrait is a stand-in** |
| 11 | "Bring Tracks of Time to your stage" | Built |
| 12 | The site's closing CTA, then the pattern divider | Built |

### The ground alternates, and the wrappers are structural

Ivory → green → ivory → green → ivory → green → ivory, so no two fields of the same
colour ever meet. **Sections 5+6 share one `.kp` wrapper and sections 10+11 share
another**, and that is the §34 dot-grid rule applied rather than tidiness: the dot field
is a 26px `background-size` on a pseudo-element anchored to its own element's inset, so
two adjacent dotted sections restart the grid at the join and the pattern visibly jumps
unless both heights happen to be exact multiples of 26px. One wrapper, one grid.

Sections 2+3's `.kn-paper` does not need to join them — the Deep Green §4 sits between.

### Section 4 — copy on a darkened photograph

The mockup lays black type straight over a lit audience frame, and in its own render the
third bullet crosses a woman's head and the first line sits on a bright screen. That is
~900 characters including a three-item list, far more than the hero's two lines, so the
picture drops back to being a ground: held at `.22` over flat `--ink`, with a one-sided
wash pulling the left half — where the headline sits — toward the palette. Black is also
not in the palette (p.19–21).

**The photograph is a placeholder** by the user's instruction: `assets/img/speaking.jpg`,
the homepage's stage frame. Deliberately **not** `speaking-keynote.jpg`, which is this
page's own hero — the same picture twice on one page reads as a mistake. Two
`background-image` lines to swap.

**The list is numbered because the copy counts it** — the lede ends "Three things cause
that drift". The device is `work-with-us.html` §2's: lime numeral, no disc, hairlines
between. Single column rather than that section's two, because these items run three
lines each and a split puts item 2's tail below item 1's.

### Section 5 — and the frame that was wrong first time

Copy left, portrait right, on the ivory dot field.

> **THE PORTRAIT TAKES THE ARCH FRAME, AND THE FIRST BUILD GOT THIS WRONG.** It was built
> with `work-with-us.html`'s square-cornered `.ws-shot`, which is the wrong model: that
> page's two pictures are landscape documentary frames (a whiteboard, a team) and its
> mockup frames them hard. **A portrait of Oscar on ivory takes the arch** — the brand's
> own picture device, V1.0 p.35, derived from the logo — which is what `index.html`'s
> About block already does via `site.css` §15. The radius, the 3:4 ratio, the 460px cap
> and the grid proportions here are that rule's values written out, so this portrait and
> the homepage's are the same object. Corrected on the user's challenge.

**The photograph was already in the project.** `assets/img/oscar-chair.jpg` (1024×1536) is
the exact frame the mockup uses and had been sitting unused since 30 Oct. The crop is
anchored at `50% 22%`, not centred: a 2:3 source in a 3:4 frame crops by height, and at
50% the cut trims his hair while keeping a third of the chair back.

### Section 7 — a placeholder, and the open question it does not answer

**Built as a placeholder at the user's instruction**, carrying a dashed `.kt-draft`
notice on the page. The reference sells **five** named keynotes; we have exactly one
title, *Tracks of Time*, inferred from the hero's eyebrow. Three columns is a guess at
five. **Ask how many keynotes exist before this is designed properly** — a five-card grid
holding one card is a different layout from a single feature block. Open since §34.

All three photographs are placeholders and two are reused from elsewhere on the page.
That is deliberate and meant to look provisional.

**No cards, and that is the reference's own arrangement** rather than a departure from
it: its three columns sit directly on the dark ground with nothing drawn around them. It
is also what makes the palette work — a card here would have to be Soft Ivory, which
would make the lime titles illegal on it (p.22 watchout 1); on Deep Green they are the
sanctioned pairing (p.21). The reference's navy and turquoise do not come across.

### Section 9 — reuses section 4's ground

`.kc--rooms` overrides only the background image and the list style, so the page has **one**
treatment for copy-on-a-photograph rather than two near-copies. **Plain bullets, not
section 4's numerals**, and the difference is in the copy: section 4's lede counts its
list, this one does not count anything, and numbering a set of audiences implies a
ranking the client did not write.

### Section 10 — the portrait is a stand-in

The mockup uses a studio frame of Oscar on a stool in a grey sweater. **That photograph is
not in the project.** `assets/img/oscar-about.jpg` is in the arch instead — the homepage's
About portrait, the closest existing match. One `<img>` to swap.

### Uppercase or sentence case — there is a rule, not a coin toss

The page mixes both and V1.0 p.26 is what decides: **short statements take tracked
uppercase, longer sentences take standard letterforms.**

| Section | Case | Why |
|---|---|---|
| 1 hero, 3 quote | sentence | Two sentences / 213 characters |
| 4 "Surviving is not the same as living…" | sentence | 97 characters, two sentences |
| 5 "KEYNOTES THAT GIVE PEOPLE…" | UPPER | 68-char noun phrase, no verb |
| 6 "WHAT AUDIENCES TAKE AWAY" | UPPER | 24 characters |
| 9 "Built for rooms where…" | sentence | 58-char full clause; also keeps both `.kc` sections matched |
| 10, 11 | UPPER | 33 and 34 characters |

`site.css`'s blanket `text-transform:uppercase` is turned **off** on §4 and §9 and left on
elsewhere. Section 5's heading sits below §27's `clamp(42px,4.7vw,70px)` section scale for
the reason §30 and §33 both record — that scale is for titles owning the full container
width; sections 6 and 7's headings do own it and take it.

### Four more mockup annotations read as design, and refused

§34 already records the hero's yellow slabs. This pass added four more: the "Maybe
visual…" and "Blurb" stickers on section 4, and a **violet selection rectangle** on
sections 5 and 9 — one of which crosses the body copy mid-sentence and the other encloses
dead space below the closing line. Neither is a frame anyone would draw.

**That is now six coloured boxes in these supplied mockups that turned out to be editing
furniture, across three pages.** The rule stands and should be treated as settled: **read
a coloured box in a supplied mockup as a sticky note until proved otherwise.**

### The duplication got worse again, exactly as predicted

| Block | Copies | Pages |
|---|---|---|
| Testimonial slider | **4** | `index`, `about`, `work-with-us`, `keynote` |
| Deep Green header | **5** | the four above plus `contact` |
| Noise/Clarity switch override | **4** | `index`, `about`, `contact`, `keynote` |
| Pattern divider | 3 | `index`, `contact`, `keynote` |

Each slider copy repeats its four placeholder quotes **four times**, so **replacing one
quote is sixteen edits across four files.** §7 step 2 has been saying this since 31 Oct
and every page built adds another copy. **The real testimonials landing is what will break
these apart.** Do the lift before they arrive.

### The dot field — asked and answered

The user asked whether the dot grid is his brand. **It is not, and it was invented here.**
`Brand assets/4_BACKGROUNDS_PATTERNS/` was checked directly and contains exactly three
things: the gradient, the logo pattern (merch only, p.37) and `Background Pattern.png` —
the switcher bars, the website device (p.38). **No dot grid anywhere.** It was introduced
on 31 Oct on `work-with-us.html` as paper texture and has since spread to `contact.html`
and `keynote.html`.

**But the client's own supplied mockups for this page all draw a dot field** — it is
visible in the section 4, 6, 9 and 10 designs. So either his designer picked it up from
what we built, or they arrived at it independently. **Worth establishing which**, because
it decides whether this is our invention he is now endorsing or something he had in mind.

It is one deletable rule per page (`.ws-dots::before`, `.kn-paper::before`, `.kp::before`
and contact's equivalent), held at `rgba(20,51,24,.16)`. Delete those four and every ivory
section on the site goes plain at once.

### Status

Rendered and measured at **1920, 1512, 1024, 980, 850 and 500**.

- No horizontal scroll and **no element overflowing the viewport** at any of the six.
- **No JS errors** at any width.
- No heading over three lines anywhere.
- The marquee pitch is exact — one set is 4 × (420 + 28) = **1792px**, which is the
  translate distance, so the seam is continuous. 16 quotes in the track.
- The closing switch rests as the homepage's does: `aria-pressed="true"`, Clarity at
  opacity 1, Noise at 0.35. **Not** the §29.5 state.
- Rendered end to end at 1300: the ivory/green alternation holds with no broken joins.

**Not verified**: Safari, Firefox, real devices, below 500px (§26), hover states. Given
§29.1's history — four CSS builds shipped broken because every check was Chrome-only —
**this page's animated hero in particular wants a real Safari look before the client sees
it.**

### Still open on this page

- **How many keynotes exist** (§7). Blocks the topics section.
- **The three section-7 photographs and all its copy.**
- **A portrait of Oscar on a stool** for section 10, or confirmation that the About
  portrait will do.
- **Press logos** for section 2 — a separate ask from the client logos §6 already lists.
- **Neither hero asset is optimised.** `speaking-keynote.jpg` (196 KB) and
  `oscar-chair.jpg` (219 KB) are JPEGs with no AVIF, unlike every other hero in the
  project. Worth one §31 `sips`/`cwebp` pass across both.
- **The nav is eight items on this page** and the site now runs three different navs
  across eight pages. §34 flagged it; it has not moved.
- **Oscar's slide line.** §27 blanked "Surviving ≠ Living" off the slide in the hero
  photograph as off-brand. He has now supplied that exact idea as the spine of section 4,
  so putting it back is worth asking about. The compositing method is in §27.

---

## 36. Page-by-page state, measured (2 November 2026)

Checked against the files rather than read off this document.

### On the current design system

| Page | Deep Green header | Closing switch | Inline styles | Visible em dashes |
|---|---|---|---|---|
| `index.html` | yes | fixed | 0 | 0 (**one left in `<meta name="description">`**) |
| `about.html` | yes | fixed | 0 | 0 |
| `work-with-us.html` | yes | n/a | 0 | 0 |
| `contact.html` | yes | fixed | 0 | 0 |
| `keynote.html` | yes | fixed | 0 | 0 |

### Still on the 14 October build

| Page | Lines | Faults |
|---|---|---|
| `detox.html` | 338 | Ivory header, **pre-§29.5 switch**, 4 inline styles, 6 visible em dashes |
| `diagnostic.html` | 177 | Same three, 5 inline styles, 6 visible em dashes |


All three still close by **arguing the opposite of the homepage** — the §29.5 bug
`contact.html` carried for six weeks because nobody had opened it. `contact.html` (§33) is
the template, and all three are under 350 lines.

### No page is client-ready, and the blockers are not design

- `index.html` — the hero's two drawn marks and the AI keynote images are open decisions.
- `about.html` — six values *and* three principles both on the page; six placeholder photographs.
- `work-with-us.html` — photographs landed 2 Nov (§37); the package names are still
  unapplied and the nav question is still open.
- `contact.html` — the booking embed is an empty well; platform unchosen.
- `keynote.html` — section 7 placeholder, section 10 portrait a stand-in.

Site-wide and regardless of page: **the Formula Condensed licence** (the committed file is
the trial, §9), **the real testimonials**, and **no Safari testing anywhere**.

---

## 37. The Work With Us photographs (2 November 2026)

The two frames §30 had been waiting on since 31 Oct were supplied and are in.
`.ws-shot--pending` and its CSS rule are **deleted**. Nothing else on the page changed.

| Section | File | Source | In the project |
|---|---|---|---|
| 1, hero | `work-whiteboard.*` | 1370×1148 | AVIF 80KB · WebP 93KB · JPEG 194KB |
| 3, "a cleaner way" | `work-two-ways.*` | 1254×890 **(cropped)** | AVIF 77KB · WebP 82KB · JPEG 195KB |

Both as `<picture>` with AVIF → WebP → JPEG, the §31 order. **No `decoding="async"`** — it
screenshots blank headless and looks exactly like a broken layout (§29).

### The corners changed, at the user's request

Both frames were square-cornered, because §30 read the mockup as framing them hard. They
now carry **`var(--r-card)`, the brand's 36px round-rect**, so the photographs match the
cards and the rest of the site's picture treatments. The user asked for it directly.

### The second photograph was cropped, and that was not a sizing decision

> **THE SUPPLIED FILE IS A SOCIAL POST, 1254×1254**, with graphics baked across the top
> third: the OPS DETOX logo, "TURN OFF THE NOISE. WIN YOUR TIME BACK.", and a headline
> reading **"COMPLEXITY OR CLARITY? / SAME PROBLEM. DIFFERENT APPROACH."**
>
> Used whole it would have put a second headline *inside* the picture, directly beside
> this section's own h2 ("There is a cleaner way to run a growing company"), and a second
> logo on a page whose header already carries one.
>
> The top **364px** were cut with `ffmpeg -vf "crop=1254:890:0:364"`, leaving Oscar, both
> whiteboards and the mug. **`sips --cropOffset` silently ignores the offset** and returns
> the image uncropped — it was tried first and reported success. Use ffmpeg.
>
> The uncropped original is `~/Downloads/Oscar.jpeg`. If the banner is ever wanted, it is
> a one-file swap.

### The ratios are measured, not chosen

| Frame | Source ratio | Was | Now | Why |
|---|---|---|---|---|
| `.ws-shot` | 1.193 | 4:3 (1.333) | **6:5 (1.2)** | 4:3 cropped ~10% off the height |
| `.ws-clean-shot` | 1.409 | 16:10 (1.6) | **7:5 (1.4)** | 16:10 cropped ~12% |

**On both of these the thing being cropped is the writing on the whiteboards**, which is
the entire content of the pictures. Re-measure both if either photograph is re-supplied.

### A first, lower-resolution pair was replaced the same day

The first files supplied were **802×672 and 524×388** — enough at 1x, upscaled on any
retina display. The user replaced them within the hour. Measured density with the current
pair: **1.53x–3.08x** across 1920 / 1512 / 1024 / 900 / 500, so they are sharp everywhere.

### Status

Measured at **1920, 1512, 1024, 900 and 500**: no horizontal scroll, no element
overflowing, both images load, radius computes to 36px at every width, and
`.ws-shot--pending` returns zero. Rendered at 1400 for the visual check with the AVIF
`<source>` stripped, since **headless Chrome screenshots AVIF as a blank area** even
though the image reports `complete:true` (§31).

**Not verified**: Safari, Firefox, real devices, hover states.

---

## 38. The legal pages (2 November 2026)

`privacy.html`, `cookies.html`, `terms.html`, built from three drafts the client
supplied as standalone HTML.

> **THE TEXT IS HIS AND IT IS REPRODUCED WORD FOR WORD.** Nothing was edited,
> shortened, reordered or "improved". **Verified, not assumed**: tags stripped from
> source and output, whitespace collapsed, strings compared — identical at 12,863 /
> 4,861 / 34,396 characters. Re-run that check after any edit to these three. They are
> legal documents; setting them is our job, drafting them is not.

### One stylesheet, not three style blocks

Every other page scopes its rules into its own `<head>`, because each is a one-off.
**These three are the same layout three times**, so a scoped block would mean three
copies drifting apart — the exact problem this document records for the testimonial
slider (four copies) and the Deep Green header (six).

`css/legal.css` is **a new file**, loaded only by these three after `site.css`. The
eight existing pages are untouched and cannot be affected by it. `site.css` and
`js/site.js` were not changed.

### What the design does that a legal page needs

- **A contents rail that sticks** while you scroll. 12, 8 and 31 sections respectively.
  `scroll-margin-top` on every `<section>` is what makes the links usable — without it a
  jumped-to heading lands *under* the sticky header and reads as a broken anchor.
- **One `<details open>` at every width.** Desktop CSS unstyles it back into a plain
  rail; below 980px it collapses into something the reader opens. Built the other way
  round it would have needed JS. `open` in the markup means the list is there even if the
  stylesheet never loads.
- **The controller block is a bordered card**, not a loose paragraph. It is the one piece
  of hard information on a privacy page.
- **The privacy policy's Data / Why / Legal basis / Kept for `<dl>`s are a two-column
  grid.** Stating them that way is the point; prose would waste it.
- **Tables scroll inside their own `.scroll` box.** Measured at 500px: wrapper 407–445px
  inside a 485px viewport, inner width 520px, page itself never moves sideways.
- **A print stylesheet.** Legal pages get printed and filed; header, footer, nav, rail
  and the dot field all drop out.

### The blanks, and the draft bar that was removed

The drafts contain **64 `<mark class="ph">` fields** the client has to fill — 17 / 19 /
28. They are set in lime (Deep Green on Detox Green, p.21) so they cannot be missed.

All three carry `<meta name="robots" content="noindex">`. **Drop it per page once that
page's list is clear. Do not publish a legal page with a blank in it.**

> **The pages originally carried a black draft bar** at the top counting the unfilled
> fields. **Removed the same day at the user's request** — the pages should read as the
> documents they are, not as a to-do list. The work moved to **`BACKLOG.md`**, a new file
> at the repo root, where every field is listed with its section, its surrounding
> sentence and what it blocks. The inline highlights stay: removing them would leave the
> text silently reading "KvK ." or would mean inventing a VAT number.

`BACKLOG.md` is the **ask list** — what we are waiting on and who owns it. This document
stays the engineering record. The legal fields are grouped by who can answer rather than
by page, which collapses them usefully: **four company facts (entity, KvK, btw-id, date)
appear about ten times across the three pages.** Most of the Cookie Policy cannot be
filled at all until the consent tool, analytics and embeds are chosen and the live site
is scanned.

### Two items worth not burying

- **Terms §16 and §19 both carry a `[25,000]`** and §16 is the liability cap. With the
  cancellation bands in §10 these are money and risk, and they are the client's to set
  with a lawyer. **None was invented.**
- **Terms §26 needs a phone number** — the draft's own note says "required before
  selling to consumers" — and §27 needs a working withdrawal-form link. Both are
  statutory, not stylistic.

### The footer links now work

They were `href="#"` on every page. **Terms, Privacy and Cookies are wired across all 11
pages**, including the three playground copies.

**Imprint still goes nowhere.** There is no fourth document. The trader details already
sit in Privacy §1, so the cheapest fix is to point Imprint there or drop the link.

### A bug this introduced, and the check that would have caught it

> **The first build welded 15 testimonial cards and four keynote sections onto the bottom
> of all three legal pages**, unstyled, because their CSS lives inside `keynote.html`.
>
> **Cause: the shell was lifted from `keynote.html` by taking everything from the first
> `<footer>` tag onward — and the first `<footer>` in that file is inside a testimonial
> card**, where it holds the client's name and role. The site footer is much further
> down.
>
> **Lesson: `<footer>` is not a unique landmark.** When lifting a shell out of a page,
> split on `</main>`, not on a tag that also appears in content. The same trap applies to
> `<header>`, `<section>` and `<nav>`.
>
> It was caught by the user on screen, not by the sweep. The checks run were overflow,
> JS errors, dead anchors and text fidelity — **all of which passed.** None of them asked
> *what is on this page that should not be.* A structural assertion (`main` has one
> child; zero `.testimonial-label`; exactly one `.footer-grid`) finds it in the first
> minute and is now part of the sweep.

### The stray `</div>`, finally gone

Validating the above turned up the bug **§22 recorded on 15 October**: a stray `</div>`
after the preloader markup. It had been inherited by every page built since, and into the
new legal pages with the copied header.

Removed from **12 files**. **All 11 site pages now balance with no unclosed and no stray
tags** — checked by walking the tags with comments, `<script>`, `<style>` and `<svg>`
stripped. Browsers recover from it silently, which is why it survived six weeks.

### Status

Measured at **1920, 1512, 1024, 980, 500 and 390** on all three.

- No horizontal scroll, nothing overflowing the viewport, **no JS errors**.
- All **54 contents links resolve to a real section id**; zero dead anchors.
- `main` has exactly one child on each page; zero stray testimonials or keynote sections.
- Tables confirmed scrolling inside their own box rather than moving the page.

**One bug found and fixed during the sweep**: the contents rail would not shrink below
~522px inside a 445px container on a phone, pushing the page sideways. Cause was a bare
`1fr` grid track, whose automatic minimum is the item's min-content width. The desktop
rule already used `minmax(0,1fr)` on the text column; the mobile rule did not. **Keep the
0 minimum on both.**

**Not verified**: Safari, Firefox, real devices, print output on paper.

### Open

- **64 blanks** — `BACKLOG.md` section A.
- **Imprint** has no document.
- The pages end ivory straight into the Deep Green footer, **with no pattern divider**.
  §33 named that hard cut as a fault on `contact.html`. It was left off deliberately — a
  moving lime marquee above a privacy policy is loud — but it is one block to add if the
  client wants the pages closed the way the others are. **Put to the user, not yet
  answered.**

---

## 39. One nav, finished pages only (2 November 2026)

**Open since 31 October (§30) and reopened by every page built since (§33, §34).** The
site had grown **four different navs across eleven pages** — five, six, seven and eight
items — because each new page added itself to its own header and nothing else.

### The nav

**Work With Us · Keynote · About · Contact**, plus the logo (home) and the "Let's talk"
button. Identical on all eleven pages, generated from one list, with `aria-current="page"`
set correctly on each.

### The rule, which is the point of the change

> **The nav carries FINISHED PAGES ONLY.**

| Out | Why |
|---|---|
| `detox.html` — "The DETOX" | Still the 14 Oct build. Not client-ready (§36) |
| `diagnostic.html` — "Audit" | Same, and frozen until the client's Noise Tax calculator lands |
| `index.html#results` — "Results" | **An anchor, not a page.** The logo already goes home, and it was the only reference to it anywhere |
| `freebie.html` | Opt-in page, reached from its own CTAs |
| The three legal pages | Footer, where they are |

**Put The DETOX and Audit back when they are reworked.** The comment in every header
says so, so the next person does not have to guess whether the omission was deliberate.

### The thing removal does NOT do

> **SIXTEEN BUTTONS STILL POINT AT THE TWO DROPPED PAGES**, measured outside the nav:
>
> | Target | Links | From |
> |---|---|---|
> | `diagnostic.html` | **12** | `index`(3), `detox`(3), `about`(2), `contact`(1), `keynote`(1), `work-with-us`(1), `freebie`(1) |
> | `detox.html` | **4** | `index`(2), `work-with-us`(2) |
>
> Twelve of those are "Book the FREE DIAGNOSTIC", the site's most-used CTA. **A visitor
> can still land on a 14 October page from a lime button on a finished one** — and the
> Audit page is the destination of the primary call to action, which makes it the worst
> page on the site to leave looking out of date.
>
> Three ways out, and the recommendation is the second: leave it; **rework those two next**
> (338 and 177 lines, with `contact.html` as the template, §33); or repoint the buttons
> at `contact.html` in the meantime.

### Status

Measured at **1920, 1280, 1024 and 900** on `index`, `keynote`, `privacy` and
`work-with-us`: the nav is **358px wide inside headers of 821–1320px**, does not wrap at
any width, and no page scrolls horizontally. No JS errors. The eight-item version was the
one §34 predicted would crowd at laptop widths; four does not come close.

All eleven pages re-validated after the edit: **no unclosed and no stray tags.**

The four `playground/` copies were updated too, with `../` prefixes, so they keep
reaching the real pages.

**Not verified**: Safari, Firefox, real devices, the mobile burger panel open.

---

## 40. The freebie page brought onto the system (2 November 2026)

`freebie.html` was the third of the five interior pages to get the §33 treatment. It is
now ivory / green strip / ivory / choice / divider, the same rhythm as `contact.html`.

Same scope rule: **every rule lives in one `<style>` block in the document.
`css/site.css` and `js/site.js` were not touched.**

### What was wrong with it — the §33 list, almost item for item

1. **Soft Ivory header with a Deep Green logo.** Its `<img>` pointed at
   `primary-deepgreen.svg`, which is invisible the moment the band goes dark, so the
   logo had to be swapped with the header. **The identical pair of faults §33 found.**
2. **`.hero hero--page` with three inline styles** doing the layout — a 430px form and
   a 520px image jammed into site.css's generic hero grid, h1 at the default scale.
3. **The old text ticker**, not the switcher-pattern strip (V1.0 p.38).
4. **No pattern divider**, so it ended on a hard ivory-to-green cut into the footer.
5. **The closing switch was in the pre-§29.5 state** — site.css's shared
   `.switch-line`/`.switch`, `aria-pressed="false"`, `.is-on` on *Operational noise*.
   **The page was closing by arguing the opposite of the homepage.** Six weeks after the
   same bug was found and fixed on `contact.html`, because nobody had opened this file.
6. **An em dash in visible copy** (the newsletter success message), which §29.4 records
   being stripped site-wide on the client's own instruction, 30 Oct.

`<meta name="theme-color">` was also still `#fbfbf9`, the pre-rework ivory.

### What it is now

| | Section |
|---|---|
| 1 | Hero — centred, eyebrow, page title on `work-with-us.html`'s scale, lead, dot field |
| 2 | The switcher-pattern strip, copied from `index.html` §9 by way of `contact.html` |
| 3 | The form in a round-rect card, the artwork beside it |
| 4 | The closing choice, with `index.html`'s switch markup and override |
| 5 | The pattern divider, closing into the footer |

**No inline styles remain on the page.**

- **The hero is centred, not split.** Same call §33 made: this page has no photograph
  that wants half the screen, and the old layout was a half-empty grid.
- **The form leads and takes the wider column** — it is the page's entire job.
- **`site.css`'s `.form-card` is stripped back to a plain block** inside `.fb-card`
  (`background:none;padding:0;box-shadow:none;border:0`). It is itself a white panel with
  its own radius and shadow; left alone it would be a card inside a card. The fields and
  every validation hook `js/site.js` binds to are untouched.
- On a phone the **form comes first** and the artwork drops below it.

### The copy is unchanged, with two additions that are furniture

Every string was already on the page. Two were added and both are card labels rather
than claims: the eyebrow **"Get it"** and the subhead **"Send me the template"**, which
repeats the button, plus one line — *"Two fields. No newsletter signup hidden in the
small print."* **If any of that is unwanted it is three deletions.**

### The artwork is merch, and that is worth knowing

`time-is-money.png` is a **tote-bag mockup**. There is no mockup of the template itself
anywhere in the project, so this is a picture of merchandise standing in for a picture of
a spreadsheet. It was kept because the line it carries, *time is money*, is the argument
for a financial model, and because it is the client's own campaign art.

**A screenshot of the actual template would be strictly better and is a straight swap.**
Added to the backlog.

### The image was optimised at the same time

| | |
|---|---|
| Was | `time-is-money.png`, 1254×1254, **1.75 MB** |
| AVIF — what almost everyone gets | **60 KB** |
| WebP | 84 KB |
| JPEG fallback | 242 KB |

**97% smaller.** Served as `assets/img/tote.{avif,webp,jpg}`; the PNG is left in place and
is now unreferenced. That is one of the five oversized assets §31 listed; **four remain**
— `hero-concept.png`, `hero-cards.png`, `poster.png` and `portrait.png`.

### Status

Measured at **1920, 1512, 1024, 900, 500 and 390**.

- No horizontal scroll, nothing overflowing, **no JS errors**.
- The h1 never exceeds two lines; both wide letters wrapped by `js/site.js`.
- **The strip marquee is exact**: one copy measures 2212.72px against a quarter-track of
  2212.75px, delta **0.03px** — and 2212.72 is the same figure `index.html` and
  `contact.html` record, so all three strips are the same object rather than near-copies.
- **The closing switch rests as the homepage's does**, verified by computed style:
  `aria-pressed="true"`, Clarity at opacity 1, Noise at 0.35.
- Header computes to `rgba(20,51,24,.94)`; the logo is the lime one.
- Tag balance clean.

**Not verified**: Safari, Firefox, real devices, hover states.

### What this leaves

**Only `detox.html` (338 lines) and `diagnostic.html` (177 lines) are still on the
14 October build.** Both still carry the §29.5 switch bug, an ivory header with an
invisible logo and inline styles. `diagnostic.html` is the destination of **twelve**
"Book the FREE DIAGNOSTIC" buttons — the site's primary CTA — which makes it the worst
remaining page to leave looking out of date (§39).

---

## 41. The last two pages (2 November 2026)

`detox.html` and `diagnostic.html` were the last on the 14 October build. **All eleven
pages are now on one design system.**

Same scope rule: one `<style>` block per document. **`css/site.css`, `js/site.js` and
`js/diagnostic.js` were not touched.** No inline styles remain on either page.

### Both had the §33 fault list

Ivory header with `primary-deepgreen.svg` (invisible the moment the band darkens),
`theme-color` still `#fbfbf9`, hero on site.css's generic grid, no switcher strip, no
divider into the footer, inline styles, and **the pre-§29.5 closing switch resting on
*Operational noise*** — both pages closing by arguing the opposite of the homepage.

### The interactive parts are load-bearing and were proven, not assumed

> **`js/diagnostic.js` binds to fourteen classes and one id**: `.diag-shell`,
> `.diag-progress i`, `-form`, `-step`, `-question`, `-scale`, `-back`, `-result`,
> `-score`, `-verdict`, `-bars`, `-friction`, `-restart`, `#diagnostic`, plus
> `scaleEl.querySelectorAll('button')`. **Nothing was renamed, removed or reordered.**
>
> **It was driven end to end headless** at 1512, 1024 and 500: seven questions answered
> by clicking, result panel revealed, score rendered, **seven module bars**, two friction
> points named, progress at 100%, then restart returning to "Question 1 of 7". Zero
> errors at every width.
>
> **`detox.html`'s seven module popups** are opened by `js/site.js` from the buttons'
> `data-title`/`data-sub`. A popup was clicked open at all six widths — title correct,
> seven modules present, no errors.

**Run both after any edit in those sections.** This is the kind of rework that silently
breaks them.

### What changed on diagnostic.html

Hero centred (it was a split whose right half was `hero-cards.png`, **1.8 MB, captioned
"Oscar de Grauw" when it shows the card treatment**); strip under the hero; "Why complete
it" into round-rect cards with Deep Green numeral discs; **"Share it with your colleagues"
onto a Deep Green band** so the page alternates; the diagnostic itself into a white
round-rect card with a lime progress bar and the score at display scale.

**`poster.png` (1.9 MB) was dropped** from the "share" section — campaign artwork from a
different campaign, competing with the single paragraph that makes the page's sharpest
point.

### What changed on detox.html

Hero centred; ticker replaced by the strip; the problem onto Deep Green with the lime
numeral list `work-with-us.html` §2 uses for **the same six statements**; the method,
feeling and reasons into round-rect cards; the seven modules into a 4-up card grid;
About into the brand's arch frame.

> **`portrait.png` was wrong in two ways, not just heavy.** §20 already recorded what it
> is: the **LinkedIn-banner lockup, 1983×793** — a wide banner, not a portrait — with a
> headline, a fake "BOOK A CALL" button and an **old logo** baked in. In the 3:4 arch it
> would have been destroyed, and it was putting a superseded logo on the page. Replaced
> with `oscar-about.jpg`, the frame `index.html`'s own About uses, so the two agree.
> `poster.png` went from this page too.

**Two assets left the pages; four of §31's five are now unreferenced site-wide.**
`hero-concept.png`, `hero-cards.png`, `poster.png` and `portrait.png` are all still in
`assets/img/` and can be deleted once nobody wants them back.

### §8's live V1.0 violation is closed

§8 "Still open" recorded `.reason-grid span` as **Detox Green type on White**, p.22's
third watchout, on the interior pages. The numerals now sit on a **Deep Green pill**,
which is the sanctioned pairing (p.21). **That item is done.**

### The em-dash sweep is finally complete

§29.4 stripped em dashes from visible copy on 30 Oct and it had never reached these
pages. Cleaned here, plus the ones §34 left outstanding: `index.html`'s
`<meta description>`, both `<title>` tags, the newsletter success message in three files
and the footer line. **Every page is clean**, in body copy and in attributes. The only
`—` left anywhere is `<p class="diag-score">—</p>`, the placeholder the script
overwrites.

### Testimonials on detox.html were left as placeholders deliberately

The page has four bare `<article>Testimonial</article>` blocks. They are now dashed
outlines rather than being filled — **this page is not getting a fourth copy of the
homepage marquee**, which is already in four files at sixteen edits per quote change.
When the slider is lifted into `css/site.css`, this page picks it up with the rest.

### The overlap nobody has decided

**`detox.html`'s hero copy is word for word `work-with-us.html`'s** — same eyebrow, same
headline, same body, same two CTAs. §30 flags that the newer page may make this one
redundant and it is still a client decision. Nothing here assumes it either way; the
artwork was dropped from this hero partly so the duplication is not amplified by
repeating a photograph too.

### Status

Measured at **1920, 1512, 1024, 700, 500 and 390** on both.

- No horizontal scroll, nothing overflowing, **no JS errors**, no broken images.
- Both switches rest on Clarity, verified by computed opacity.
- Headers compute to `rgba(20,51,24,.94)` with the lime logo.
- **Both strip marquees exact**: 0.03px drift on desktop, 0.08px on mobile.
- The arch frame computes to a 260px top radius at every width.
- **All eleven pages balance with no unclosed and no stray tags.**

**Two bugs found and fixed during the rework**, both mine: the ticker-removal regex
stopped at the inner `</div>` and orphaned the outer one; and six sections gained a
`<div class="container">` wrapper without a matching closer. Both were caught by the tag
balance check, which is the one §38 added after the legal-page incident. **It earned its
place the first time it ran.**

**Not verified**: Safari, Firefox, real devices, hover states.

---

## 42. Work With Us — the closing CTA (2 November 2026)

The page stopped after the two offer tracks and the add-on: **no ask at the end, and a
hard ivory-to-Deep-Green edge into the footer** — the fault §33 named on `contact.html`.

Added, both copied from `index.html` by way of `contact.html` §33:

| | |
|---|---|
| Section 6 | `.choice` — "What will you choose?", the Noise/Clarity switch, two CTAs |
| Then | `.pb`, the pattern divider closing into the footer |

**The CTAs are the same pair, in the same order, as this page's own hero** (§30): *Book
the FREE DIAGNOSTIC*, then *Let's talk*. The page opens and closes with one ask.

**The switch rests on Clarity.** `aria-pressed="true"` is the resting state `js/site.js`
snaps back to 350ms after a click, so the attribute must not be flipped to change which
side lights — only the visuals are overridden. This is the §29.5 bug three pages shipped
with.

### Counts, now that this is the fifth copy

| Block | Copies | Where |
|---|---|---|
| Deep Green header | **9** | 8 pages + `css/legal.css`, which covers the other 3 |
| Noise/Clarity switch override | **8** | index, about, contact, keynote, freebie, work-with-us, detox, diagnostic |
| Pattern divider | **7** | the same, minus `about` |
| Testimonial slider | **4** | index, about, work-with-us, keynote |

*(Counted from the files on 2 Nov, not estimated. An earlier draft of this table said
6 and 6 — it was wrong.)*

**Every one of these belongs in `css/site.css`.** The lift has been the next structural
job since 31 Oct and every page finished adds to it.

### A bug in the CHECK, not in the page

> The verification script asked "is the divider above the footer?" and returned
> **false**, which looked like a real layout fault. It was not.
>
> `document.querySelector('footer')` returns the **first** `<footer>` in the document —
> and on this page that is **inside a testimonial card**, where it holds the client's
> name and role. The site footer is much further down.
>
> **This is the exact trap that welded 15 testimonial cards onto the legal pages a few
> hours earlier (§38).** It has now caused one real bug and one false alarm in a single
> day. `<footer>` is not a landmark on this site — scope to `body > footer` or
> `main ~ footer`, and never split a shell on it.

### Status

Measured at 1512, 1024 and 500: no horizontal scroll, both CTAs resolve correctly, the
divider is the last element in `<main>` with its 48 bars and sits above the site footer,
and the switch rests on Clarity by computed opacity. Tag balance clean.

---

## 43. Where the project stands, end of 2 November 2026

> **Superseded in part by §44.** The page table below is still accurate except for
> `work-with-us.html`, and the "Still open" list is restated, corrected, at the end
> of §44.

### Every page is on one design system

| Page | State |
|---|---|
| `index.html` | On system |
| `about.html` | On system |
| `work-with-us.html` | On system. Photographs landed (§37), CTA added (§42). **Built out to twelve sections (§44)** |
| `keynote.html` | On system. §7 topics are a placeholder, §10 portrait a stand-in |
| `contact.html` | On system (§33) |
| `freebie.html` | On system (§40) |
| `detox.html` | On system (§41) |
| `diagnostic.html` | On system (§41). Frozen on the demo until the Noise Tax calculator lands |
| `privacy.html` · `cookies.html` · `terms.html` | Built (§38). **64 blanks**, all `noindex` |

**The nav is one list on all eleven pages** (§39): Work With Us · Keynote · About ·
Contact. The DETOX and Audit are out until the client is happy with them; they are still
reachable from **16 buttons**.

### Closed today

- Every page off the 14 October build.
- **The §29.5 switch bug** — was live on contact, freebie, detox and diagnostic.
- **§8's V1.0 violation** — `.reason-grid span`, lime on white (§41).
- **The §29.4 em-dash sweep**, finally site-wide (§41).
- **The §22 stray `</div>`** — 12 files (§38).
- **Four of §31's five oversized assets** are now unreferenced: `hero-concept.png`,
  `hero-cards.png`, `poster.png`, `portrait.png`. `time-is-money.png` was replaced by a
  60 KB AVIF (§40).
- **The nav**, open since 31 Oct (§39).
- **The Work With Us photographs**, open since 31 Oct (§37).

### Still open, and nothing here is design

1. **64 blanks on the legal pages** — `BACKLOG.md` §A. Four company facts unblock ten of
   them.
2. **The `css/site.css` lift.** Counts in §42. The real testimonials arriving is what
   breaks it apart.
3. **Safari has still never been tested.** §29.1 shipped broken four times on
   Chrome-only checks, and there is no WebKit automation on this machine.
4. **The Formula Condensed licence.** The committed file is the trial. Hard blocker.
5. **Copy**: the two package names (29 Oct), DRMT™'s expansion, whether See – Strip –
   Choose™ replaces The CORE method™, real framework wording, the About values.
6. **Photography**: the About timeline, the keynote topics, a stool portrait, press
   logos, client logos. All likely in the unreadable Drive folder.
7. **Platforms**: booking, diagnostic, consent, analytics, form backend.
8. **Does `detox.html` still have a job?** Its hero is word for word
   `work-with-us.html`'s. Open since 31 Oct (§30, §41).
9. **The founder-vs-cleanse positioning question** (§22.6). Highest-value open item.

---

## 44. Work With Us built out to the wireframe, and the mobile testimonials (2–3 November 2026)

### What this was

`content/copy.md` has carried the client's own running order for this page since the
start, under **"Page order (per client wireframe WORK WITH US)"**. Nobody had built to
it. The page stopped at the two offers, then gained a CTA (§42).

Five sections went on in one pass, and the testimonials moved. **Not one word of new
copy was written.** Every section's text already existed in the repo — in
`index.html`, in `detox.html`, or in `content/copy.md` — and was moved across verbatim.
Where that copy was already marked as placeholder, it is still marked as placeholder.

### The page now

```
hero → the mess → the cleaner way → two offers → stats → why work with me
     → frameworks → for / not for → what it feels like → testimonials
     → why leaders choose → closing CTA → pattern divider → footer
```

Twelve sections. That is the wireframe order, with the pieces the wireframe lists but
the page does not yet have (below) left out.

| § | Section | Copy came from | Notes |
|---|---|---|---|
| 5 | Outcomes stats strip | `index.html` `#results`, verbatim | Shared `.outcomes` / `.stat-grid` from `css/site.css`. **No new CSS.** |
| 6 | Why work with me | The client's supplied drawing | Italic, name sign-off, no CTA. `oscar-portrait.jpg`. |
| 7 | The frameworks | `index.html` §3, verbatim | **SECOND COPY**, CSS and markup. Descriptions still placeholder. |
| 8 | Who it is for / is not for | `detox.html`, the client's words | Two cards, deliberately unequal. |
| 9 | What a clean operation feels like | `detox.html`, the client's words | Ruled two-column list. |
| 11 | Why leaders choose | `content/copy.md`, from his wireframe | Six cards, 3×2. |

### The decisions inside them, and why

**§6 is not `site.css`'s `.about` block.** It shares an eyebrow and a heading with the
homepage's About section and nothing else: the homepage runs three roman paragraphs and
a button, this is two italic ones and a signature. Italic is doing real work — it reads
as Oscar speaking rather than as the site describing him, which is what lets the block
sit with no frame and no rule. **Two blocks now share a heading and must not be edited
to match each other.**

The portrait is `oscar-portrait.jpg`, until now only a decorative timeline thumbnail on
`about.html`. Not `oscar-about.jpg`, which is the homepage's About picture and is
already on four pages. Incidentally **this is the "stool portrait" `BACKLOG.md` §D lists
as still wanted** — it has been in the project since 11 October.

**§8's two cards are not equal, on purpose.** The drawing is two identical plain lists.
Built that way the page argues with itself at the exact point it should be closing. The
two columns are not doing the same job: the left is where a qualified reader should
recognise themselves, the right only has to let the wrong reader leave early. So the
"for" card takes the Deep Green ground, a lime heading and ticked items, and the "not
for" card stays a quiet outlined panel. Lime on Deep Green is the one legal pairing
(V1.0 p.21), which is also why the ticks can be lime there and could not be on ivory.

Two faults were caught in the first render and fixed: the cards were stretched to equal
height, leaving the short one two-thirds empty (the grid aligns to `start` now); and the
quiet card was `transparent`, which let the dot field show **through** it so it read as
a hole in the section rather than a panel on it (`--panel` now).

**§9 flows down its columns, not across.** Row-major would have forced the markup into
1,4,2,5,3,6 to get three items per column, which hands a screen reader a scrambled
list. `grid-auto-flow:column` keeps the markup in the drawing's own 1–6 order — and that
order already splits 3/3 exactly as `detox.html`'s two lists do.

**§11 does not use `site.css`'s `.reason-grid`.** That shared class sets the card number
in Detox Green **on white**, which §8 of this document recorded as a live V1.0 violation
and §41 closed on `detox.html` by moving the lime onto a Deep Green pill. Reusing the
class here would have inherited the violation and then needed overriding, so the block
is scoped. The drawing has no numerals on these cards, so the pill does not appear at
all — which also keeps the six from reading as the same object as the three **numbered**
framework cards two sections above. Two card grids on one page have to be tellable apart.

**The ticks are one implementation, not two.** §8 and §9 both use `.ws-ticks`: a lime
disc with an ink tick, drawn in CSS rather than set as a ✓ character so it keeps its
size when the type scales and cannot pick up an emoji font. The disc is anchored to the
**first line** of an item, not centred on it, so it stays put whether the line wraps once
or three times. `--ws-tick-top` is the one knob the two users nudge.

### The testimonials moved down

They were section 4, between "there is a cleaner way" and the offers — proof offered
before the case had been made. They now sit between §9 and §11, which is where
`content/copy.md`'s wireframe order puts them:

> … What a clean operation feels like → **Testimonials** → Why leaders choose → What
> will you choose?

### The order was changed once, wrongly, first

The frameworks section was dropped in **above** the stats on the reasoning that the
homepage pairs them that way and numbers read better after something is named. The
client had said "next up", meaning next **in the page**, and had just given explicit
placement for the section before it. It was moved below "Why work with me" the same day.
**Reasoning from the homepage is not a reason to reorder a page somebody is dictating
section by section.**

### Mobile testimonials: one card at a time (all four slider pages)

The row was a CSS marquee everywhere — a continuous crawl, paused on hover. On a phone
that reads as drifting text you cannot catch. Below 700px it now advances **one card per
step**, holds ~4.2s so a quote can be read, and wraps at the end. It is swipeable: a
touch hands control over and it resumes after ~9s.

**The CSS was one line per page, not a new block.** The slider already had a
reduced-motion branch doing exactly what a phone needs — no marquee, no end fades, a
snapping scroller, the duplicate cards dropped. That `@media` became a **query list**:

```css
@media(prefers-reduced-motion:reduce),(max-width:700px){ … }
```

Two copies of identical rules would just be two things to keep in step.

**The stepping is `js/site.js` §8, once, shared by all four pages.** It is additive: if
it never runs — old browser, JS off, an error above it — the row is still a scroller the
visitor can swipe. It does **not** run for reduced motion; those users get the same CSS,
but moving the row by itself is the thing they asked to avoid.

Driven in a real browser: at 390px `scrollLeft` goes 0 → 309 → 641 → 951 → 0, one card
per step; at 1440px the marquee is untouched.

**It appeared broken for three test runs and was not.** Chrome was serving a cached
`js/site.js`. The code was right the whole time. See AGENTS.md — CDP sessions now
disable the cache first.

### Still open after this

Unchanged from §43, except where noted:

1. **The 64 blanks on the legal pages.** Four company facts unblock ten of them.
2. **The `css/site.css` lift**, and it got worse today. The testimonial block is in
   **four** files (16 copies of each quote); the frameworks block is now in **two**,
   CSS and markup; the card CSS pattern is in three.
3. **Safari has still never been tested.** No WebKit automation on this machine.
4. **The Formula Condensed licence** — the committed file is the trial. Hard blocker.
5. **Copy**: the two package names, DRMT™'s expansion, the real framework wording, the
   About values — **and now a visible contradiction.** §11's third card says
   **CORE method™** one scroll below §7's notice asking whether **See – Strip – Choose™
   replaces it**. His words were left alone rather than quietly reconciled, because the
   answer changes one of the two, but the page currently names both.
6. **Photography**: the About timeline, the keynote topics, press logos, client logos.
   The stool portrait is no longer on this list — it was already in the repo.
7. **Platforms**: booking, diagnostic, consent, analytics, form backend.
8. **Does `detox.html` still have a job?** Weaker than it was: Work With Us has now
   absorbed its for/not-for, its "what it feels like" and its "why leaders choose", on
   top of sharing its hero copy word for word.
9. **The founder-vs-cleanse positioning question** (§22.6). Still the highest-value
   open item.

### Two wireframe sections are still not built

`content/copy.md`'s order for this page lists both, and neither is on it:

- **The seven modules.**
- **"From clutter to flow in 3 steps."**
