# OPS DETOX™ — Project Handoff

_Last updated: 28 October 2026_

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

- `website-design/` is the live deliverable — six pages, real navigation, working
  interactions, responsive from 320px up. No backend, no build step, no dependencies.
- `high-fidelity-design/` remains as the approved homepage visual reference.
- The design system follows `OPS_DETOX_BRAND_GUIDELINE_V1.0.pdf` (see §8): Soft Ivory
  and Deep Green grounds, Detox Green only ever on Deep Green,
  mixed-case pill buttons, round-rect cards, logo-derived picture frames and the
  before/after switcher device.
- Copy is the client’s, locked and unedited — including the known typos in the homepage
  problem paragraph.
- The live source of truth is the `Oscar` repo, `main` branch. The `ops-detox` repo
  holds only `website-design/`, `high-fidelity-design/` and the brand assets they
  reference, but **it is stale — still at 6 October**. See §19.

### Pages in `website-design/`

| File | Page |
|---|---|
| `index.html` | Homepage |
| `detox.html` | The DETOX / Work With Us — full service page, client wireframe order |
| `diagnostic.html` | OPS Detox Diagnostic™, with a working demo of the audit |
| `about.html` | About Oscar de Grauw |
| `contact.html` | Contact — message form plus a slot for the booking embed |
| `freebie.html` | Freebie opt-in (Startup Financial Model Template) |
| `hero-sections.html` | **Not a site page.** Five alternative hero treatments, tabbed, for client review — see §20 |
| `home-comments.html` | **Not a site page, and now superseded.** The 15 Oct comments build — see §22. Its hero direction was approved and promoted into `index.html` (`0df3393`), so this file is a frozen record, not something to keep patching |
| `home-comments-hero.html` | **Not a site page, and now superseded.** The type-led hero build — see §23. Its content is what `index.html` carries today |
| `parked-sections.html` | **Not a site page.** Holding file for the two sections cut from the homepage, kept for reuse — see §25 |

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
| `website-design/` | The working site — see its README for what is live vs. placeholder |
| `website-design/css/site.css` | Full design system, expanded and sectioned for editing |
| `website-design/hero-sections.html` | Standalone hero exploration, self-contained CSS; tokens duplicated from site.css and kept in sync by hand — §20 |
| `website-design/home-comments.html` | Client-comments review build of the homepage; all overrides in one scoped `<style>` block, `index.html`/`site.css` untouched — §22 |
| `website-design/home-comments-hero.html` | Type-led hero on top of the comments build; same scoped-`<style>` rule — §23 |
| `website-design/js/site.js` | Nav, module popups, forms, switch, reveal, ticker |
| `website-design/js/diagnostic.js` | Demo diagnostic — questions and scoring live here |
| `high-fidelity-design/` | Approved high-fidelity homepage (minified CSS, reference only) |
| `mockup/` | Original static mockups and client wireframe reference |
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

### Needed from the client
- Real client logos for the trust row.
- Four testimonials with attribution.
- Real contact details — address, email, phone (currently Canva placeholders).
- Legal content for Imprint, Terms, Privacy and Cookies.
- Oscar photography. The hero and About images are campaign artwork, not portraits.
- **A masked, transparent cut-out of Oscar.** No alpha-channel image of him exists
  anywhere in the project, which is the hard ceiling on every hero option — see §20.
- **A decision on the hero's two drawn marks** — the ring around "CLEANSE" and the
  strike through "CLUTTER" were removed on 28 Oct because "too much was going on".
  Keep it plain, or restore either. Both are in git (§27).
- **Oscar's own line for the keynote slide**, if the branded-screen version is wanted.
  The one that was built carries placeholder copy (§27).
- **A decision on the AI keynote images** — they show an audience that did not exist,
  and that is a credibility claim rather than a design choice (§27).
- Module popup detail copy, from the current website.
- Approved wording for the six value one-liners on the About page (currently filler).
- **The two offers, named.** The client refers to "the two offers I have" without naming
  them (§22). The build assumes the existing Operational flow / Organisational flow.
- **Real framework copy**, and two naming questions: the full expansion of DRMT™, and
  whether See – Strip – Choose™ replaces The CORE method™, which is still in the live
  copy but absent from his updated list (§22).
- **The updated audit page with the "Noise Tax" calculator.** The client is building it
  and will send it. `diagnostic.html` is frozen until then. Note it is an interactive
  tool, not a copy drop — budget build time, not layout time.

### Decisions to make
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
- Licence the Formula Condensed typeface. The file in the repo is the **trial** version.
- Connect a form backend or email platform for the newsletter, contact and freebie forms.
- Supply the actual Startup Financial Model Template file.

## 7. Next steps

1. Close out the 28 Oct round (§27): the hero marks, the keynote slide copy and the AI
   images all need the client's word. Collect the two offer names and the real framework
   copy in the same pass — both still blocking since 15 Oct. Settle the
   founder-vs-cleanse positioning question separately and deliberately; it is not a
   review-call item.
2. Walk the client through the rest of `website-design/`. **The homepage hero is settled**
   — the type-led direction was approved and promoted into `index.html`, which retires
   the §20 exploration and the §10 pattern question with it. The five interior pages have
   had none of this attention and still follow the old structure.
3. Confirm the booking platform and the diagnostic platform — these two unblock most of
   the remaining functional work.
4. Collect the missing content: logos, testimonials, contact details, photography,
   module copy.
5. Wire the booking embed, form backend and real diagnostic.
6. Licence the typeface, add the legal pages, then cross-browser and real-device QA
   before launch.

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
