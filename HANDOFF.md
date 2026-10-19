# OPS DETOX™ — Project Handoff

_Last updated: 15 October 2026_

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
| `home-comments.html` | **Not a site page.** The homepage with the 15 Oct client comments applied, for review — see §22 |

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

1. Show `home-comments.html` against `index.html` and get the three built changes
   signed off (§22). Collect the two offer names and the real framework copy in the same
   pass — both are blocking. Settle the founder-vs-cleanse positioning question
   separately and deliberately; it is not a review-call item.
2. Walk the client through `website-design/` and collect feedback on the working site.
   Show `hero-sections.html` alongside it and get a hero direction picked (§20). If one
   is approved, commission a masked transparent cut-out of Oscar before building it out,
   and settle the baked-in-pattern question from §10 explicitly rather than by default.
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
`index.html` is edited.
