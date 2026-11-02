# OPS DETOX™ — Backlog

_What we are waiting on, and who owns it. Last updated: 2 November 2026._

This is the **ask list**. `HANDOFF.md` is the engineering record — what was built and
why. If something here is answered, apply it, then delete the line.

Nothing in this file is a design question. Design decisions live in the handoff.

---

## A. The legal pages — 64 blanks

All three pages are built and set in the brand (`privacy.html`, `cookies.html`,
`terms.html`). **The text is Oscar's draft, reproduced word for word.** Every item below
is a field *he* left open, marked on the page in lime as `[like this]`.

> **All three carry `<meta name="robots" content="noindex">`.** Drop it on each page once
> that page's list is clear. Do not publish a legal page with a blank in it.

### A1. Company identity — blocks all three pages

The same four facts repeat across every document. **Answer once, apply ten times.**

| Field | Appears in | Note |
|---|---|---|
| Legal entity name | Privacy §1, §12 · Cookies §1 · Terms §1, §2 | Draft assumes `Oscar de Grauw, sole proprietorship (eenmanszaak)` — confirm or correct |
| **KvK number** | Privacy §1, §12 · Cookies §1, footer · Terms §2 | Chamber of Commerce number |
| **VAT identification number (btw-id)** | Privacy §1, §12 · Cookies footer · Terms §2 | The btw-id, not the turnover tax number |
| Last-updated date | All three page headers | Privacy and Cookies say `[October 2026]`, Terms says `[1 November 2026]` — pick one date for all three |

**This is the cheapest thing on the list and it unblocks the most.** Four facts.

### A2. Consumer-facing fields — legally required, not optional

| Field | Where | Why it matters |
|---|---|---|
| **Phone number** | Terms §26 | The draft's own note says *"required before selling to consumers"*. Dutch and EU consumer law requires reachable contact details |
| **Withdrawal form link** | Terms §27 | `[Withdraw from contract here]` — consumers have a statutory 14-day right of withdrawal and must be given a way to use it |
| **Cookie settings link** | Footer of all three | Must point at the real consent tool. Until a consent tool exists, this cannot be filled — see A5 |

### A3. Commercial terms — Oscar's decisions, not ours

**None of these were invented.** They are money and risk, and they are his to set.

| Field | Where | What it decides |
|---|---|---|
| `[40%]` / `[50%]` deposit split | Terms §9 | How much is invoiced up front |
| `[14 days]` payment term | Terms §9 | When invoices fall due |
| `[two working days]` | Terms §10 | Rescheduling notice |
| `[90 days]` / `[25%]` | Terms §10 | Cancellation fee, earliest band |
| `[90 and 30 days]` / `[50%]` | Terms §10 | Cancellation fee, middle band |
| `[30 days]` (×2) | Terms §10 | Cancellation fee, latest band |
| `[six months]` | Terms §10 | How long a postponed date stays valid |
| `[three months]` / `[50%]` | Terms §11 | Notice to terminate, and what is still owed |
| `[and its group companies]` | Terms §12 | Whether an IP licence extends past the signing entity |
| `[three months]` / **`[25,000]`** | Terms §16 | **The liability cap.** The single highest-risk number in the set |
| **`[25,000]`** | Terms §19 | Non-solicitation penalty |
| `[five]` | Terms §15 · Privacy §2 | Minimum group size before diagnostic results are reported |

> **The two `[25,000]` figures and the liability cap want a lawyer's eye, not ours.**
> We can set the number he gives us; we should not suggest one.

### A4. Data retention — Privacy Policy

| Field | Where | What it decides |
|---|---|---|
| `[30 days]` | §3.1 | How long server logs are kept |
| `[2 years]` | §3 | Retention, contact and booking data |
| `[3 months]` | §3 | Retention |
| `[90 days]` | §3 | Retention |
| Noise Tax Calculator behaviour | §3.3 | The draft asks us to **confirm** that calculator inputs stay in the browser and are not stored when no report is requested. **This depends on how the calculator is built, and the client is building it** — see section B |
| Newsletter open/click tracking | §3.8 | Whether the newsletter tool measures opens and clicks. Depends on which tool — see A5 |

### A5. Cookie Policy — blocked on tooling choices

**Most of this page cannot be filled until the tools are chosen.** The page lists cookies
in four tables; the names, providers and durations all come from the actual stack.

| Field | Where | Depends on |
|---|---|---|
| `[name of consent cookie]` · `[consent tool]` · `[12 months]` | §4.1, §5 | **Which consent banner is used** — nothing is installed yet |
| `[session or security cookie]` · `[website builder]` · `[session]` | §4.1 | The host. Currently a static site with no backend |
| `[analytics tool]` · `[container ID]` | §4.2 | Whether analytics is used at all, and which |
| `[between 24 hours and 1 year; confirm with a cookie scan]` | §4.2 | **Requires a real cookie scan of the live site** |
| `[cookie names]` | §4.2 | Same |
| `[YouTube / Vimeo / booking tool]` · `[duration]` | §4.3 | Which embeds end up on the site. The booking platform is still unchosen — see B |

> **A cookie policy cannot be finished before the site is live and scanned.** It is the
> last of the three to close, and that is normal rather than a delay.

### A6. Not written yet

- **Imprint.** The footer links to it on all 11 pages and there is no document. The
  trader details already sit in Privacy §1, so the cheapest fix is to point Imprint
  there or drop the link. **Decide which.**

---

## B. Platform decisions that block real work

| Decision | Blocks |
|---|---|
| **Booking platform** — Calendly or meetergo | The empty embed slot at `contact.html#book`; every "Book a call" CTA on the site; the Cookie Policy's §4.3 embed row |
| **Diagnostic platform** — Typeform, Scoreapp or custom | `diagnostic.html`, which is frozen on placeholder questions and scoring |
| **Consent tool** | The whole Cookie Policy (A5), and the "Cookie settings" link in three footers |
| **Analytics** — whether at all, and which | Cookie Policy §4.2 |
| **Newsletter / form backend** | The newsletter, contact and freebie forms all validate but go nowhere |
| **The Noise Tax calculator** | Oscar is building it. `diagnostic.html` waits on it, and so does Privacy §3.3. **It is an interactive tool, not a copy drop — budget build time** |

---

## C. Copy we are waiting on

| Item | Where | Open since |
|---|---|---|
| **Real testimonials, four, with attribution** | Four pages, each repeating them four times — **16 edits** | Long-standing |
| **The two package names** — *The Execution package (Founder Bottleneck)* and *The Leadership package (Team Bottleneck)* | `work-with-us.html`, `index.html` | **29 Oct**, by email, still not applied anywhere |
| **What DRMT™ stands for** | The Frameworks block, live on `index.html` | 15 Oct |
| **Does See – Strip – Choose™ replace The CORE method™?** | Same block. CORE is still in the live copy but absent from his updated list | 15 Oct |
| **Real wording for the three frameworks** | Same block — the current descriptions are drafted from old site copy, not his | 15 Oct |
| **How many keynotes exist** | `keynote.html` §7 is a placeholder grid. The reference sells five; we know one, *Tracks of Time* | 1 Nov |
| Copy and photographs for the other keynotes | Same | 1 Nov |
| **Approved wording for the six About values** | `about.html` — currently filler | Long-standing |
| Module popup detail copy | `detox.html` | Long-standing |
| **Real contact details** — address, email, phone | Every footer. Currently Canva placeholders, and the phone is also an A2 legal requirement | Long-standing |

---

## D. Photography

| Item | Where |
|---|---|
| ~~Two Work With Us photographs~~ | **DONE, 2 Nov** |
| **Six About timeline photographs** | All placeholders, rotated from the same few frames; none shows the moment its entry describes |
| **Three keynote-topic photographs** | `keynote.html` §7, currently reused from elsewhere on the page |
| **Oscar on a stool, grey sweater** | `keynote.html` §10 uses the About portrait as a stand-in |
| **Press logos** | `keynote.html` §2 "As seen in" — a *separate* ask from the client logos below |
| **Client logos** | The homepage trust row |
| **Access to the `Pictures & videos` Drive folder** | Shared 30 Oct but unreadable. The `HFS###` series, 19+ files from 13 July 2026, is a professional shoot and the most likely source of everything above. **Either drop the files locally or make the folder link-public** |

---

## E. Ours, not the client's

| Item | Note |
|---|---|
| **Licence Formula Condensed** | The committed font file is the **trial**. Serving it publicly is a licence breach. Single style, webfont tier, bought in Oscar's name. **Hard blocker on launch** |
| **Lift the shared blocks into `css/site.css`** | Testimonial slider in 4 pages, Deep Green header in 6, switch override in 4, pattern divider in 3. The real testimonials landing is what will break these apart |
| **Rework `detox.html`, `diagnostic.html`, `freebie.html`** | Still on the 14 Oct build. All three close by arguing the opposite of the homepage |
| **Settle the nav** | Three different navs across 11 pages; `keynote.html` has eight items. Bundled with: does Work With Us replace The DETOX? |
| **Safari testing** | Never done. Four builds have shipped broken on Chrome-only checks |
| **Optimise the remaining heavy assets** | `hero-concept.png` 1.8MB, `hero-cards.png` 1.8MB, `poster.png` 1.9MB, `time-is-money.png` 1.8MB, `portrait.png` 1.4MB |
| One em dash left in `index.html`'s `<meta description>` | §29.4 stripped them from visible copy; this one was missed |

---

## F. Open design questions for the client

- **Does the homepage lead with the founder's payoff or with the cleanse?** His 15 Oct
  comment and the site's whole structure pull against each other. The highest-value
  open item on the project.
- **Where do the frameworks live** — their own section, or folded into the two offers?
  His 29 Oct package breakdown may already answer this; worth confirming he meant it.
- **The dot-grid background.** Not in the brand guideline — it was invented during this
  build, and his own mockups now draw it. Establish which came first.
- **Six values vs three principles** on the About page. Both are on it, two sections apart.
- **The hero's two drawn marks** — the ring and the strike, removed 28 Oct.
- **The AI keynote images** show an audience that did not exist. A credibility call.
- **Oscar's line for the keynote slide** — §27 blanked *"Surviving ≠ Living"*, and he has
  now supplied that same idea as the spine of `keynote.html` §4.
