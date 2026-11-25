# OPS DETOX™ Premium Direction Guide for Claude

## Read this before touching any page

The approved visual source of truth is the live homepage:

- `index.html`
- `css/site.css`
- `js/site.js`
- `OPS_DETOX_BRAND_GUIDELINE_V1.0.pdf`

The homepage is the selected **Anzhelika direction with the approved Abdessamad adjustments**. It was promoted on 23 November 2026.

Do **not** use the current uncommitted styling in `work-with-us.html`, `about.html`, `contact.html`, `diagnostic.html`, `freebie.html`, or `detox.html` as a reference. That inner-page interpretation was rejected. Study the homepage itself and translate its principles to each page from first principles.

Do not modify `index.html` while rebuilding the inner pages. Do not commit or push unless explicitly asked.

---

## 1. The direction in one sentence

Create an editorial, fashion-magazine-like business website using oversized offset Formula typography, disciplined Deep Green and Soft Ivory surfaces, selective Detox Green accents, photographic cutouts and hard-edged layouts, with restrained motion and generous negative space.

It should feel bold and authored, not like a SaaS template.

---

## 2. What makes the homepage feel premium

The premium quality does not come from adding decoration. It comes from discipline:

1. **One dominant idea per section.** A section is led by either a huge headline, a photograph, a ruled information system, or a strong colour field. Never all four competing at once.
2. **Scale contrast.** Display type is extremely large while body copy stays narrow and quiet.
3. **Measured asymmetry.** Headline lines are deliberately offset on desktop, but the layout still aligns to an invisible grid.
4. **Few surfaces.** The page mainly uses Soft Ivory and Deep Green. Detox Green is an accent, not a background applied everywhere.
5. **Hard geometry.** Content panels, tables and offer fields use straight edges. Pills remain for buttons and the logo switch. The About portrait arch is a deliberate brand shape, not permission to round every card.
6. **Images behave as compositions.** Photographs are duotoned, cropped, cut out, or allowed to break out of a frame. They are not dropped into generic rounded rectangles.
7. **Restraint in motion.** Motion reveals the composition. It does not become the composition.

---

## 3. Brand tokens

Use the existing tokens from `css/site.css`. Do not invent near-matching colours.

```css
:root {
  --ink: #143318;       /* Deep Green */
  --lime: #ccfe06;      /* Detox Green */
  --paper: #fefdf2;     /* Soft Ivory */
  --panel: #ffffff;     /* White, used sparingly */
  --rule: #e4e2d2;
  --muted: #3f4a3f;
  --display: Formula, Impact, sans-serif;
  --sans: Inter, Arial, sans-serif;
}
```

### Colour balance

Recommended page balance:

- Soft Ivory: approximately 60-70%
- Deep Green: approximately 25-35%
- Detox Green: approximately 5-10%

Detox Green should normally be used for:

- primary CTA pills;
- small kickers and labels on Deep Green;
- one deliberately highlighted offer or panel;
- key numbers or short emphasis;
- the logo and interactive switch.

Do not use lime for every headline, every card, every icon and every border. That destroys hierarchy and was one of the problems with the rejected interpretation.

### Legal colour pairings

- White or Soft Ivory on Deep Green: primary dark-field typography.
- Detox Green on Deep Green: accents, labels and CTA emphasis.
- Deep Green on Soft Ivory: primary light-field typography.
- Deep Green on Detox Green: highlighted panels and buttons.
- Do not set Detox Green text directly on Soft Ivory or white for body-sized content.

---

## 4. Typography system

### Display type

The display face is the licensed `PPFormula-CondensedBold.woff2` already wired as `Formula`.

The homepage's central device is a hand-authored multi-line heading:

```html
<h2 class="pr-h">
  <span>First line</span>
  <span>Second line</span>
  <span>Third line</span>
</h2>
```

```css
.pr-h {
  margin: 0;
  max-width: none;
  font-family: var(--display);
  font-weight: 400;
  font-size: var(--fs);
  line-height: var(--lh, .79);
  letter-spacing: -.018em;
  text-transform: uppercase;
}

.pr-h > span {
  display: block;
  width: max-content;
  max-width: 100%;
}
```

Desktop offsets are set per authored line with percentages, for example:

```css
.section-title span:nth-child(2) { margin-left: 18%; }
.section-title span:nth-child(3) { margin-left: 40%; }
```

The offsets are not random. Each one must be visually measured against the content width and tested at the actual desktop viewport.

### Mobile rule

Below 760px:

- remove every line offset;
- remove right-aligned display headings;
- raise line-height to approximately `.88`;
- reduce display scale until every authored line fits;
- never hide overflow to disguise a headline that is too wide.

```css
@media (max-width: 760px) {
  .pr-h > span {
    margin-left: 0 !important;
    padding-right: 0 !important;
    width: auto;
  }

  .pr-h {
    line-height: .88;
    letter-spacing: -.01em;
    text-align: left;
  }
}
```

### Important font behavior

- The licensed Formula font already supplies the brand's wide O, C, D, G and Q forms.
- Do not add `.od` wrappers.
- Do not apply `ss01` to entire words.
- The capital B is intentionally narrowed through the second `@font-face` in `css/site.css`.
- The case-punctuation rule at the end of `css/site.css` must remain last.

### Body type

Body copy uses Inter, generally 15-18px with line-height around 1.5-1.6. It should sit in a narrow measure beside or beneath oversized display type.

The homepage uses justified body copy on desktop and returns to left alignment on mobile. Do not justify narrow mobile columns.

### Labels

Small labels use Formula, uppercase, with restrained tracking:

```css
font: clamp(15px, 1.15vw, 21px) / 1 var(--display);
letter-spacing: .07em;
text-transform: uppercase;
```

---

## 5. Grid, spacing and page rhythm

### Primary content width

The homepage uses a wider editorial canvas than the old site:

```css
width: min(1600px, calc(100% - 96px));
margin-inline: auto;
```

At medium widths use 56px total side allowance. At mobile use 36px total side allowance.

### One spacing rhythm

The homepage uses one shared section interval:

```css
--gap: clamp(104px, 10.5vw, 184px);
```

Most major sections contribute half of that spacing above and below. Do not assign unrelated top and bottom padding values to every section.

### Composition rules

- Alternate full-width editorial sections with contained grids.
- Use `minmax(0, 1fr)` rather than bare `1fr` where content may push the grid wider.
- Let one element break the grid intentionally, such as Oscar's cutout crossing a frame.
- Do not let unrelated elements collide.
- Do not create piles of cards. If content is comparative, use a row. If it is sequential or conceptual, use ruled editorial rows.
- Use negative space instead of adding background shapes.

---

## 6. Shape language

### Use straight edges for

- offer panels;
- testimonial fields;
- framework/IP rows;
- comparison tables;
- form layouts;
- dark editorial bands;
- image crops, unless the image uses the approved portrait arch.

### Rounded shapes are reserved for

- buttons;
- the OPS Detox switch/logo mechanism;
- the approved tall portrait arch;
- genuine circular brand devices.

Do not apply 36px rounding to every content block just because `--r-card` exists in the shared stylesheet.

### Shadows

Use shadows only when an element physically lifts on hover or a cutout needs separation from its background. Avoid resting shadows on rows of adjacent cards because they pool into a grey slab.

---

## 7. Hero system

The homepage hero is the strongest expression of the direction.

### Approved hero recipe

- Deep Green full-bleed ground.
- A real office/session photograph behind it.
- Photograph treated as a Deep Green duotone using grayscale, luminosity blending and controlled opacity.
- White oversized headline, not lime.
- Three hand-authored headline lines with a small desktop offset.
- Narrow body copy below.
- One primary lime CTA and one outlined secondary CTA.
- A soft Deep Green legibility floor over the lower part of the photograph.
- Very subtle grain over the flat dark field.

Reference asset:

- `assets/img/premium-hero-session.jpg`

Reference markup and CSS:

- `.pr-hero`
- `.pr-hero-bg`
- `.pr-hero-inner`
- `.pr-hero-h`
- `.pr-hero-foot`

### Do not

- put a lime headline on the hero;
- add a floating white card over the photograph;
- place the full page's content above the fold;
- crop the headline at the top or right edge;
- use decorative swirls or random gradients;
- make the hero a generic centred title block unless the page's content truly demands that.

An inner-page hero should reuse the same principles, not necessarily the same exact layout. Choose one of these:

1. image-led duotone hero;
2. Deep Green typographic hero with one controlled image/cutout;
3. Soft Ivory editorial hero when a dark hero would make the whole page too heavy.

The page content decides which one. Do not force the same hero onto every page.

---

## 8. Image direction

### Approved image treatments

1. **Deep Green duotone photograph**
   - grayscale;
   - luminosity or multiply blend depending on the ground;
   - controlled opacity;
   - no arbitrary rounded frame.

2. **Subject cutout breaking out of a rectangular environment**
   - blurred room/background inside a straight box;
   - transparent Oscar cutout pinned to the box bottom;
   - cutout allowed to rise outside the box;
   - subtle drop shadow applied to the subject outline, not to the box.

3. **Deep Green portrait arch**
   - dark arch field;
   - grayscale cutout or portrait;
   - optional circular outline used as a deliberate brand motif.

### Approved assets already used by the homepage

- `assets/img/premium-hero-session.jpg`
- `assets/img/oscar-portrait-cutout.png`
- `assets/img/work-whiteboard-cutout.png`
- `assets/img/speaking-keynote.jpg`
- `assets/img/oscar-cutout.png`
- `assets/img/oscar-signature.png`

Before choosing an image, inspect it at full size and confirm whether it has real transparency. Do not trust the filename.

### Avoid

- grey studio backgrounds around Oscar;
- a cutout pasted onto an unrelated flat colour with no compositional reason;
- blurry low-resolution portraits;
- several large Oscar portraits on the same page;
- generic stock photos placed in rounded cards;
- image masks that crop hands, heads or the subject's outline.

---

## 9. Section patterns to reuse

Reuse the design logic, not the homepage's exact content.

### A. Offset editorial heading

Use for a major new thought. Keep a small kicker separate and leave air before the next content block.

### B. Hard-edged offer comparison

The homepage has three deliberately different offer surfaces:

- outline on Soft Ivory;
- Deep Green with a cutout;
- Detox Green with a duotone photograph.

This avoids three identical SaaS cards. One panel may be more important, but do not add “Most booked” unless the approved copy calls for it.

### C. Ruled framework rows

Framework/IP content should read like an editorial table:

- large number;
- name;
- short description;
- small text link;
- horizontal rules;
- no floating cards.

Reference: `.pr-ip-row`.

### D. Outcome figures

Use the number as the visual. Centre the figures when requested, keep explanations small and avoid unnecessary tiles.

Reference: `.pr-stats`.

### E. One dark proof band

The homepage's testimonial section is the one strong dark band in the body. It uses outlined square cards, no shadows and lime labels.

Reference: `.pr-voices`.

Do not turn every section into a Deep Green band. The dark proof band works because it is rare.

### F. About/Oscar section

Use the Deep Green portrait arch and a quiet body-copy column. The portrait should support the page, not become the page.

Reference: `.pr-about` and `.pr-about-arch`.

### G. Closing switch

Use the shared `.choice` component. `aria-pressed="true"` is the resting Clarity state. Never flip the resting attribute.

The larger scale approved on the homepage is intentional. After the footer, place the moving two-row `.pb` pattern. Do not put the pattern between the CTA and footer.

---

## 10. Featured logos

The homepage uses eight unique marks:

- TEDx
- Brand on Tour
- This Expat Life
- Funky People
- Rauw Gesproken
- Sacha Bol
- Everybody Networks Here
- Nectora

Files live in `assets/logo/featured/`.

DOAC was explicitly removed. Do not reintroduce it.

The logo track:

- advances by one logo every two seconds;
- has no previous/next buttons;
- pauses on hover and keyboard focus;
- stops for reduced-motion visitors;
- shows only complete logo slots, never a sliver of the next logo;
- uses cloned items only for the seamless reset;
- keeps one file per unique brand.

The trust band is outside the viewport-height hero so the logos cannot be cut in half at the fold.

---

## 11. CTA hierarchy

Use the site's approved wording:

- header/footer: `Let’s talk`
- diagnostic CTA: `Book the free diagnostic`

Hierarchy:

- primary commercial action: lime pill;
- secondary action: outline or restrained text link;
- supporting navigation: underlined text link with a subtle wipe on hover.

Do not give every link a lime pill. If everything is primary, nothing is primary.

Buttons may stay rounded even when content panels are square.

---

## 12. Motion language

Motion must be progressive enhancement. Content is visible by default. Hidden states only apply when a head script adds the page's motion class.

### Hero sequence

1. Wait for the existing preloader to leave.
2. Bring in the header.
3. Settle the hero photograph from a very small scale-up.
4. Uncover headline lines in sequence.
5. Raise the supporting copy.
6. Introduce the two CTAs.

### Lower-page motion classes

The homepage provides reusable motion types:

- `.hm-lines`: line-by-line clip reveal;
- `.hm-media`: gentle rise and settle for imagery;
- `.hm-copy`: short copy rise;
- `.hm-card`: staggered card arrival;
- `.hm-row`: horizontal rule/row draw;
- `.hm-stat`: number group rise and settle;
- `.hm-panel`: restrained panel opening.

Use an `IntersectionObserver` with a modest threshold. Fire each target once when it reaches the viewport.

Do not:

- fire all lower-page animations on load;
- use long parallax effects;
- slide text from large distances;
- mask images whose cutouts need visible overflow;
- crop Formula's ascenders or wide glyphs with a tight line box;
- stagger stacked mobile content for several seconds.

On mobile, remove or greatly reduce group stagger.

For `prefers-reduced-motion: reduce`, reveal everything immediately and skip the preloader/motion sequence.

---

## 13. Responsive behavior

Breakpoints used by the homepage:

- 1100px: three-column systems begin collapsing;
- 860px: image/text two-column sections stack;
- 760px: mobile editorial behavior begins;
- 700px: shared testimonial row becomes a one-card-at-a-time stepping scroller.

At mobile widths:

- remove heading offsets;
- use one column;
- left-align copy;
- reduce section gaps without making them cramped;
- remove desktop-only staggers;
- preserve complete image subjects;
- keep CTA labels on one line when practical;
- verify with a true 390px CDP viewport, not Chrome's `--window-size=390` clamp.

Never solve overflow by placing `overflow:hidden` on the entire page before finding the element that is actually too wide.

---

## 14. Copy and content rules

- Preserve all client copy exactly, including known typos.
- Do not write replacement marketing copy unless explicitly asked.
- Do not invent meanings for trademarked framework names.
- Keep See – Strip – Choose™, Truth Latency™ and DRMT™ as the main website frameworks.
- Async Mastery™, Speak Up Gym™ and Seven Contextual Gaps™ are secondary workshop material.
- No em dashes in visible copy or attributes.
- Keep testimonial placeholders visibly labelled until real testimonials arrive.
- Keep placeholder contact/legal details visibly unfinished.

Before writing anything, search `content/copy.md`, `index.html` and the existing target page.

---

## 15. Repository and implementation rules

- The site is plain HTML, CSS and JavaScript. Add no framework, dependency or build step.
- Each live page owns its page-specific `<style>` block.
- Shared behavior stays in `css/site.css` and `js/site.js` only when it is genuinely shared.
- Do not make a live page depend on anything inside `playground/`.
- Preserve the settled navigation: Work With Us, Keynote, About, Contact.
- A new or reworked page does not automatically add itself to the navigation.
- Keep `assets/logo/primary-detoxgreen.svg` in the Deep Green header.
- Preserve all form names, validation classes, ids and JavaScript hooks.
- On `diagnostic.html`, do not rename or reorder anything consumed by `js/diagnostic.js`.
- Keep the shared closing switch's `aria-pressed="true"` resting state.
- Do not commit or push unless explicitly asked.

---

## 16. What Claude should not copy from the rejected inner-page pass

The rejected pass made the homepage language too literal and too repetitive. Avoid these failures:

- every page beginning with the same giant dark typographic hero;
- every section using enormous overlapping headings;
- Deep Green applied to too many consecutive sections;
- lime used across too many headlines and numbers;
- content stretched into oversized empty boxes;
- one visual treatment copied onto content with a different purpose;
- headings technically fitting only because the page clips their overflow;
- Oscar cutouts placed in large empty fields without a clear composition;
- inner pages feeling like variations of one template rather than members of one family.

The goal is **family resemblance, not duplication**.

---

## 17. Page-by-page translation process

For each page, Claude should do this before writing CSS:

1. List the existing sections in their current order.
2. Identify the single job of each section.
3. Mark the strongest section as the page's primary visual moment.
4. Choose no more than one or two additional high-impact sections.
5. Assign every other section a quieter editorial treatment.
6. Decide where Deep Green is genuinely useful. Avoid adjacent dark bands unless they intentionally merge.
7. Select one image treatment that suits the page's content.
8. Decide which sections should use cards, rows, a split field, or plain copy. Prefer rows and plain fields over cards.
9. Preserve every line of copy and every functional hook.
10. Build desktop first, then deliberately redesign the composition for mobile rather than merely shrinking it.

Before implementation, present this page map for approval.

---

## 18. Verification checklist

For every rebuilt page:

- [ ] Compare it visually with `index.html`, not with the rejected inner pages.
- [ ] Confirm the page still has its original section order and exact copy.
- [ ] Confirm there is one body-level header and one body-level footer.
- [ ] Confirm the pattern is below the footer where the selected direction requires it.
- [ ] Confirm no headline is cropped at the top, right or bottom.
- [ ] Confirm no unintended document overflow at 1512px and true 390px.
- [ ] Confirm mobile heading offsets are removed.
- [ ] Confirm lime is used selectively.
- [ ] Confirm rounded corners are limited to approved brand devices.
- [ ] Confirm lower-page motion waits for viewport entry.
- [ ] Confirm reduced-motion shows all content immediately.
- [ ] Confirm the mobile navigation opens, Escape closes it and focus returns.
- [ ] Confirm the closing switch animates and rests at `aria-pressed="true"`.
- [ ] Confirm every image loads after its section enters the viewport.
- [ ] Confirm all forms still validate and show their success state.
- [ ] For Diagnostic, complete all seven questions, inspect the score/bars/friction points and test restart.
- [ ] Run `git diff --check`.
- [ ] Do not commit or push without explicit approval.

---

## 19. Short implementation brief to give Claude

> Rebuild the selected inner page so it belongs to the approved premium homepage in `index.html`, but do not clone the homepage section by section. Preserve the target page's exact copy, order, links, accessibility and JavaScript hooks. Use Formula's oversized offset editorial typography selectively, Soft Ivory as the dominant ground, Deep Green for one or two deliberate visual moments, and Detox Green only for accents and primary actions. Use straight-edged layouts, ruled rows and carefully composed photography instead of generic rounded cards. Create family resemblance through typography, spacing, colour discipline, imagery and motion, while giving the page its own composition based on its content. First provide a section-by-section visual plan. Do not implement until that plan is approved. Do not commit or push.

