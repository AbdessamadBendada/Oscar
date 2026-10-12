# OPS DETOX™ — Project Handoff

_Last updated: 11 October 2026_

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
  and Deep Green grounds with the brand gradient, Detox Green only ever on Deep Green,
  mixed-case pill buttons, round-rect cards, logo-derived picture frames and the
  before/after switcher device.
- Copy is the client’s, locked and unedited — including the known typos in the homepage
  problem paragraph.
- Both folders are pushed to https://github.com/AbdessamadBendada/ops-detox (branch `main`).
  That repo holds **only** those two folders plus the brand assets they reference.

### Pages in `website-design/`

| File | Page |
|---|---|
| `index.html` | Homepage |
| `detox.html` | The DETOX / Work With Us — full service page, client wireframe order |
| `diagnostic.html` | OPS Detox Diagnostic™, with a working demo of the audit |
| `about.html` | About Oscar de Grauw |
| `contact.html` | Contact — message form plus a slot for the booking embed |
| `freebie.html` | Freebie opt-in (Startup Financial Model Template) |

### What actually works

- Multi-page navigation; every CTA goes somewhere sensible.
- Mobile burger nav — drops under the sticky header, closes on tap and on resize.
- Seven-module popups — close on ✕, backdrop or Escape, and return focus to the card.
- All forms validate (required fields, email format), show inline errors and a success state.
- Noise / clarity switch, ticker, hero entrance and reveal-on-scroll, all respecting
  `prefers-reduced-motion`.
- The diagnostic runs end to end: seven questions, 1–5 scale, back navigation, progress
  bar, clarity score, per-module bar profile and the two weakest modules named.
- Hero and ticker fill the first screen exactly, at every viewport size tested.
- Accessibility basics: skip link, focus rings, `aria-current`, labelled controls.

## 3. Active files

| File | Purpose |
|---|---|
| `website-design/` | The working site — see its README for what is live vs. placeholder |
| `website-design/css/site.css` | Full design system, expanded and sectioned for editing |
| `website-design/js/site.js` | Nav, module popups, forms, switch, reveal, ticker |
| `website-design/js/diagnostic.js` | Demo diagnostic — questions and scoring live here |
| `high-fidelity-design/` | Approved high-fidelity homepage (minified CSS, reference only) |
| `mockup/` | Original static mockups and client wireframe reference |
| `content/copy.md` | Client-supplied, locked website copy |
| `content/oscar-bio.md` | Oscar background, credibility points, proprietary frameworks |
| `Brand assets/` | Logos, fonts, patterns, icons, brand guideline, campaign artwork |

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
- Module popup detail copy, from the current website.
- Approved wording for the six value one-liners on the About page (currently filler).

### Decisions to make
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

1. Walk the client through `website-design/` and collect feedback on the working site.
2. Confirm the booking platform and the diagnostic platform — these two unblock most of
   the remaining functional work.
3. Collect the missing content: logos, testimonials, contact details, photography,
   module copy.
4. Wire the booking embed, form backend and real diagnostic.
5. Licence the typeface, add the legal pages, then cross-browser and real-device QA
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

| Item | Spec | Page |
|---|---|---|
| Detox Green | `#CCFE06` (Pantone 2297C) | 19 |
| Deep Green | `#143318` (Pantone 350C) | 19 |
| Soft Ivory | `#FEFDF2` (Pantone 9064C) | 20 |
| Gradient | Detox Green → Deep Green | 20 |
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
12. The Cost of operational noise
13. OPS Detox system
14. Final choice section

The previous §12 description of white cleanse cards and the Cost section sitting
directly beneath them is obsolete; the details above describe the current source.

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
