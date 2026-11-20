# Brief: rebuild the premium homepage proposal from the designer's PDF

Paste everything below the line into Claude Code, in this repository.

---

You are working in this repository:

`/Users/mac/Documents/Current Projects/Oscar`

Your task is to rebuild the premium homepage proposal as a separate review page.

Do not modify the live homepage or any live shared styling.

## Required outcome

Create or completely replace:

`playground/home-premium.html`

This is a review artefact only. It must not replace `index.html`, appear in the navigation, or affect any live page.

The existing `playground/home-premium.html` is an unsuccessful interpretation. Discard its visual implementation completely and do not use it as the design benchmark.

The live homepage can be used to find existing copy, functionality and assets, but its visual design is not the target.

## Primary visual reference

Open and visually inspect this PDF:

`/Users/mac/Downloads/Copy of Oscar homepage design.pdf`

The most important reference is slide 3, where the complete homepage is assembled. If the PDF is exported as one long page, locate the full homepage composition corresponding to slide 3.

Render the PDF at high resolution and study it visually. Do not rely only on PDF text extraction.

The brand system reference is:

`/Users/mac/Downloads/OPS_DETOX_BRAND_GUIDELINE_V1.0.pdf`

Use it for colour, logo and type usage if anything in the homepage PDF is ambiguous.

The final review page should be visibly recognizable as a careful HTML implementation of the homepage PDF. Do not create a loosely inspired generic green landing page. Compare your rendered page and the PDF side by side while working.

## Read these files first

Read these completely before changing anything:

- `AGENTS.md`
- `HANDOFF.md`, especially its latest dated banners and sections touching the homepage
- `playground/client-feedback-nov11-todo.md`
- `content/copy.md`
- `index.html`
- `css/site.css`
- `js/site.js`

The November 11 checklist contains the latest client decisions. It supersedes older homepage structures where they conflict.

## What the designer said about the new direction

The designer considers the current website too boring and not premium enough. Her PDF is intended to be a portfolio-quality direction. These are her explicit instructions:

1. Typography is the central visual device. Headlines should have an editorial, deliberately offset composition. Their lines should not all start on the same left edge or finish on the same right edge. The offset must feel designed and systematic, not random.
2. Remove rounded corners from sections, cards, photographs and content boxes. Use straight, architectural geometry. Rounded corners may remain on buttons.
3. The design should feel cohesive and composed as one page. Avoid treating every section as a separate component with a different visual language.
4. Use the PDF's font scale, spacing, overlaps, image proportions and negative space as closely as practical.
5. For photographs with unattractive backgrounds, combine an environmental or stock photograph with a clean Oscar cutout. Oscar should appear to emerge from the environment rather than looking pasted into a generic card. A subtle shadow is allowed if it helps the composite feel realistic.
6. The hero may use a stock photograph of people in an office with a strong branded overlay. The photograph should remain atmospheric and must not compete with the headline.
7. Do not include the current moving "swish" lines or a generic animated ticker in this proposal. Only use such a device if it is clearly present in the PDF and improves the composition. The default for this version is no moving line.
8. The designer wants Oscar's signature in the design. No genuine signature asset has been supplied. Do not fabricate a realistic signature and present it as his. Either omit it temporarily or label a restrained typographic treatment as a placeholder.

## Latest client decisions that must be reflected

The PDF was designed before some of the latest content decisions. Use the PDF's design language with the following newer content and structure.

### Hero

The H1 must be exactly:

`Cleanse your business systems, win your time back.`

Preserve these three lines on desktop:

```
Cleanse your
business systems,
win your time back.
```

Natural responsive wrapping is acceptable on small screens.

The supporting proposition should use existing approved homepage copy. Search the repository before writing new copy.

Primary CTA: `Book the free diagnostic`
Contact CTA: `Let's talk`

### Credibility logos

Use these three logos, once each:

- `assets/logo/featured/brand-on-tour.webp`
- `assets/logo/featured/tedx.png`
- `assets/logo/featured/doac.png`

Label the area "Featured in" or "Known from." Do not also use the old "TEDx speaker, 17 years" proof line if the logo treatment already communicates that credibility.

### Problem section

Use the editorial direction from the PDF, including offset typography and its image treatment.

The existing headline direction is:

```
Fewer meetings.
Fewer reports.
More decisions.
```

Use approved body copy already in `index.html` or `content/copy.md`. Do not silently rewrite the client's copy or correct locked wording.

Experiment with Oscar's cutout over an environmental image, as shown in the PDF. Relevant asset: `assets/img/oscar-cutout.png`

### Offers

The homepage must no longer feature Keynotes as its main offer. Present these three items:

1. OPS Detox Diagnostic. Free, approximately 8 minutes, primary entry point.
2. Operational Flow. Highlight as "Most booked." The primary paid programme. Meetings, reporting and decisions.
3. Organisational Flow. Secondary programme. Communication, ownership and psychological safety.

They should be easy to compare, preferably side by side on desktop. Use the PDF's square, editorial treatment. Do not return to soft rounded SaaS cards.

Do not describe the Diagnostic as "Step 1" unless later steps are also explicitly numbered. Do not show prices.

Relevant image assets include `assets/img/work-whiteboard.jpg`, `assets/img/work-two-ways.jpg`, `assets/img/oscar-cutout.png` and `assets/img/oscar-about.jpg`. Use them only where they support the PDF composition.

### Testimonials

Follow the PDF's premium editorial treatment. Approved final testimonials have not been supplied. If real testimonials are unavailable, use clearly labelled placeholders. Do not invent realistic names, companies or endorsements. Do not automatically reuse the live animated marquee if it conflicts with the PDF.

### Intellectual property frameworks

Show only these three primary frameworks:

1. See - Strip - Choose(TM)
2. Truth Latency(TM)
3. DRMT(TM)

Use the strong numbered, table-like presentation from the PDF. Each should visibly support a "Learn more" action. The framework pages do not exist yet, so a temporary link may point to the relevant Work With Us content. Do not invent an expansion for DRMT.

Do not give equal prominence to Async Mastery(TM), Speak Up Gym(TM) or Seven Contextual Gaps(TM).

Framework descriptions are placeholders until Oscar approves them. Make that clear in the source or review presentation.

### Outcomes

Use the approved four outcome figures already present in the repository:

- 20-35%
- 25-40%
- 30-60%
- 10-30%

Center and visually emphasize the numbers. Do not add the declined rework or stress and absence metrics. Preserve the hyphens; they are not em dashes.

### About Oscar

Use the PDF's premium editorial image and typography composition. Approved positioning: `Speaker, Leader, Visionary` as styled in the PDF. Relevant image: `assets/img/oscar-about.jpg`. Use existing approved About copy and do not write a new biography unless absolutely necessary.

### Final CTA

Retain the operational clarity and noise concept and the real shared switch interaction. The resting state must remain `aria-pressed="true"` with Operational Clarity visually active. Do not reverse the switch semantics. Do not add two competing buttons around this closing interaction.

### Footer

Reuse the existing footer structure and correct relative links. Match the new page visually without changing the shared live footer CSS.

## Intended page order

Use this order unless the PDF clearly requires a minor compositional adjustment:

1. Existing site header
2. Premium photographic hero
3. Featured logos
4. Problem and positioning
5. Three offers
6. Testimonials
7. Three IP frameworks
8. Outcomes
9. About Oscar
10. Final clarity and noise CTA
11. Footer

Do not add a standalone Keynotes section to the homepage.

## Visual principles

The page should feel editorial, premium, deliberate, confident, architectural, slightly provocative, suitable for a high-value founder consultancy, and closely related to the PDF.

Avoid generic SaaS cards, excessive rounded boxes, random font offsets, neon green on every surface, long uninterrupted walls of lime, decorative animations that are not in the PDF, repeated credibility logos, generic stock photographs presented without art direction, tiny body copy used only to fit the layout, uncontrolled overlaps, headlines clipped at the viewport edge, and a design that merely rearranges the current homepage.

Use cream, deep green and Detox Green with intentional contrast. Detox Green should be an accent or branded field, not the automatic background of every section. Keep enough cream or neutral space for the typography and photographs to breathe.

## Stock photography

An optional office photograph already exists at `assets/img/premium-office-pexels.jpg`, from:

https://www.pexels.com/photo/business-meeting-in-modern-office-at-night-36713442/

You may replace it with a more suitable Pexels image if the PDF calls for a different atmosphere. If downloading a replacement, keep the original source documented in an HTML comment and optimize the local image before using it. Do not hotlink production imagery.

## Technical restrictions

This repository is plain HTML, CSS and JavaScript. Do not introduce a framework, a build process, npm dependencies, external runtime dependencies or a backend.

The review artefact must:

- Live in `playground/home-premium.html`
- Load shared files using `../css/site.css` and `../js/site.js`
- Use `../` for every asset and page reference
- Carry all premium-specific CSS in one scoped `<style>` block in its own `<head>`
- Scope every new rule under `.premium-page`
- Use `<body class="premium-page">`
- Include `<meta name="robots" content="noindex">`
- Avoid inline style attributes
- Leave `index.html`, `css/site.css`, `js/site.js` and every other live page unmodified
- Stay out of the navigation, and never become a dependency of a live page

Reuse the existing licensed display font through the CSS variables and font faces already provided by `css/site.css`. Do not recreate the font using an external web font.

Use the existing header and navigation structure. The navigation remains: Work With Us, Keynote, About, Contact.

## Copy restrictions

There must be no em dash character in visible copy or attributes, including titles, meta descriptions, alt text, `aria-label` values, form messages, buttons and placeholders.

Do not silently correct client-supplied wording or known copy errors. Look for existing approved copy before drafting anything. Do not invent trademark explanations. Any newly drafted framework or testimonial copy must be visibly treated as placeholder content.

## Responsive requirements

The design must work at least at 1920px desktop, 1512 x 982 desktop, approximately 1024px tablet, and true 390 x 844 mobile.

On mobile: no horizontal overflow, no clipped headings, editorial offsets simplify intentionally, cards become a readable single column, buttons stay tappable, logo treatments stay legible, mobile navigation opens, closes and restores focus correctly, and the final switch stays functional. Do not force the desktop offsets onto mobile if they damage readability.

## Required verification

Before presenting the result:

1. Serve the repository locally.
2. Render the page in Chrome.
3. Compare the desktop page side by side with slide 3 of the PDF.
4. Verify the full page, not only the hero.
5. Check all of: no horizontal overflow, no clipped headline letters, all local images load, all asset paths resolve, no duplicate IDs, no console errors, no visible em dash characters, header navigation works on mobile, Escape closes the mobile menu, the clarity and noise switch rests on clarity, `index.html` is unchanged, and `css/site.css` and `js/site.js` are unchanged.
6. Capture desktop and true 390px mobile screenshots and inspect them visually.
7. Do not claim the page is finished until the complete composition is visibly close to the PDF's direction.

## Deliverable

Provide the completed `playground/home-premium.html`, any newly added local image assets, a short explanation of how the PDF was translated, a list of anything still awaiting client assets or approval, the exact browser sizes tested, and confirmation that the live homepage was untouched.

Do not commit or push anything unless explicitly asked. Do not stop at a plan. Implement the page, open it locally and verify it visually.
