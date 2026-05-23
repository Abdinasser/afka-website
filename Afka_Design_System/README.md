# Afka Design System

A design system for **Afka Digital Institute** — an independent research and policy institute focused on digital harm in Somali‑speaking online spaces. Afka studies platform accountability, Somali‑language moderation, AI governance, information integrity, online gendered harm, creator monetisation, language justice, digital exclusion, and digital rights.

This system equips designers and design agents to produce work that feels **editorial, calm, institutional, credible, globally serious, and Somali‑rooted without becoming folkloric.** It is not a marketing kit and not an NGO template. The reference is closer to a documentary research outlet than a startup or a department portal.

---

## Sources

This system was built by reading the canonical Afka codebase. Inspect them directly when more detail is needed.

- **GitHub — Afka public website** (Next.js App Router, TypeScript, Tailwind CSS):
  <https://github.com/Abdinasser/afka-website>
  Most relevant files: `src/app/globals.css` (atmospheric layers + tokens), `src/components/Hero.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/components/ResearchSurface.tsx`, `src/data/site.ts`.
- **Logo** — `uploads/Afka update-03.png` → `assets/afka-logo-mark-teal.png`.

A reader without source access can still work from this repository alone — every token, image, and pattern needed is included.

---

## Index

| Path | What it is |
|---|---|
| `README.md` | This file — context, content rules, visual foundations, iconography. |
| `SKILL.md` | Agent‑Skills entry point for downloadable use in Claude Code. |
| `colors_and_type.css` | All design tokens as CSS custom properties (colors, type scale, spacing, radii, shadows, motion) + semantic element styles. |
| `assets/` | Logos, wordmarks, hero imagery, Horn of Africa regional texture. |
| `preview/` | Static HTML cards that populate the Design System tab. |
| `ui_kits/website/` | Pixel‑style recreation of the institutional website (Header, Hero, Pathways, Research, Outputs, AboutContext, Contact, Footer). Click‑through between five pages. |
| `templates/` | Editorial outputs: report cover, policy brief cover, social card, quote card, newsletter header, event card. |

---

## Identity in one paragraph

Afka publishes evidence on how digital platforms shape Somali public life. The voice is **first‑order institutional**: serious, plain, measured, declarative. It avoids both NGO emotional appeal and SaaS hype. Visually the brand sits on warm fog and off‑white editorial surfaces with deep teal as the only structural color, supported by mist blue and deep ink. Typography pairs an editorial serif for headings with a sober institutional sans for body. Cards are quiet rectangles, borders are thin, shadows are long and low, motion is restrained. The Horn of Africa appears as an abstract regional texture, not as a literal political map.

---

## CONTENT FUNDAMENTALS

**Voice.** Public‑facing, institutional, editorial. Afka writes in third person as the institute, or addresses the reader directly when describing access (“The work is designed for researchers, journalists, civil society, policymakers, and Somali‑speaking communities.”). No first‑person “we’re excited to…” marketing voice.

**Tone.** Calm, declarative, evidence‑led. Sentences are short to medium. Plain language preferred over jargon. When jargon is needed (e.g. “monetisation rules,” “information integrity,” “appeals,” “coded speech”), it’s used precisely, not decoratively.

**Casing.** Sentence case for headings (“Why Afka exists”), Title Case is reserved for institute name and proper nouns. UPPER CASE only for eyebrow labels, with letter‑spacing.

**Punctuation.**
- **Never use em dashes.** Replace with a comma, a period, or a parenthetical.
- British spelling is acceptable (“behaviour”, “monetisation”, “organised”). The repo mixes British and American — pick one per document and stay consistent.
- Oxford comma optional, default off.

**Banned phrases.** Do not write: *transformative, game‑changing, cutting‑edge, empowering communities, shaping the future, driving change, unlocking potential, leveraging, synergy, mission‑critical.* No “revolutionising” anything.

**Required language.**
- Use **“Somali‑speaking world”**, never “Somali world”.
- Use **“Somali‑speaking communities”**, “Somali online spaces”, “Somali‑language moderation”.
- Do not invent fake people, partners, funders, or publications. If a placeholder is needed, label it `Forthcoming` or use a generic role (“a journalist”, “a civil society partner”).
- The only approved “unfinished” word family is **“Founding Brief.”** No “coming soon”, “in beta”, “early access”.

**Emoji.** **Never.** No emoji in any official output — public copy, social posts, newsletter, slide decks, or UI. Decorative emoji breaks the institutional register.

**Unicode characters.** Used sparingly and only in functional places: arrows in nav (`→`), bullet glyphs in lists (`·`), the en‑dash (`–`) for date ranges. No decorative stars, sparkles, or hand symbols.

**Example sentences that are on‑brand**

> Building evidence on digital harm in Somali‑speaking spaces.

> Afka Digital Institute documents platform accountability, Somali‑language moderation, information integrity, AI governance, digital exclusion, and digital rights across Somali online spaces.

> Digital harm is not only a technology issue. It is a question of language, trust, safety, livelihoods, and public knowledge.

> Afka turns that gap into a research agenda: documenting cases, analysing platform behaviour and translating lived digital realities into public‑interest knowledge.

**Example sentence that is off‑brand**

> ✨ We're so excited to launch Afka — a game‑changing platform empowering Somali communities to take back the internet! 🚀

---

## VISUAL FOUNDATIONS

### Color

Afka has **one structural color** — deep teal — and a small supporting palette. No gradient soup, no rainbow tags, no purple‑to‑pink launch decks.

| Token | Hex | Use |
|---|---|---|
| `--afka-deep-teal` | `#0A5C6B` | Primary institutional color. Eyebrows, CTAs, focus rings, accent rules, link hover, the wordmark’s ground. |
| `--afka-mist-blue` | `#C8E8ED` | Pale accent wash. Tag pills, soft callout backgrounds, atmospheric glow. Never used as text on white. |
| `--afka-cloud-white` | `#F4F8F9` | Default page background. Off‑white, warm‑neutral, not pure white. |
| `--afka-paper` | `#FBFCFC` | Lightest elevated surface, used for cards sitting on cloud white. |
| `--afka-deep-ink` | `#0D1F22` | Body text, footer, dark‑mode sections, hero scrim. Near‑black with a green undertone. |
| `--afka-graphite` | `#4A5A5E` | Quiet secondary text. |
| `--afka-stone` | `#B8C4C7` | Borders, dividers, inactive states. |
| `--afka-fog` | `#E8EEEF` | Soft grey for inactive surfaces, skeleton states. |
| `--afka-signal` | `#C2410C` | Reserved editorial red‑orange. Use **only** for: urgent harm tags, errors, dissent indicators. **Never** as a CTA. |

**Brand colour note.** The original briefing specified "deep slate blue" as the institutional colour. The existing live brand — wordmark, website, and logo file — uses **deep teal (`#0A5C6B`)**, not slate blue. This system follows the live brand. If a slate‑blue pivot is intended, raise it — switching is one token change.

### Typography

- **Display (serif):** **Instrument Serif** — sharp, modern editorial. Used for hero, section titles, card titles, pull quotes, report covers. Italic is genuinely italic, not slanted — used for pull quotes.
- **Reading serif (optional, long-form):** **Newsreader** — reserved for long-form report body where Instrument Serif at small sizes lacks the optical weight needed. Available as `--serif-reading`.
- **Body (sans):** **IBM Plex Sans** — institutional, neutral, technically credible. Used for body, eyebrows, navigation, forms, captions.
- **Mono:** **IBM Plex Mono** — used sparingly for footnotes, citations, technical metadata.

> **Font substitution flag.** The Afka codebase declares `Iowan Old Style` (Apple system serif) and `Avenir Next` as font stacks but ships no font files — the live site renders with OS fallbacks. I've replaced these with: **Instrument Serif** (display headings — a sharper, modern editorial serif), **Newsreader** (reserved for long-form reading, optional), and **IBM Plex Sans** (body, replacing Avenir Next). All loaded from Google Fonts. If Afka licenses Avenir Next or another preferred face, drop the `.woff2` into `assets/fonts/` and swap the family in `colors_and_type.css`. **Please confirm or supply final font files.**

Type scale and exact tokens are defined in `colors_and_type.css`. Display headings sit at `font-weight: 400` (Instrument Serif's regular weight already reads as confident). The seriousness comes from size, leading, and letter spacing, not from boldness.

### Spacing

A **4px base** scale (`--s-1` through `--s-32`). Sections breathe — vertical rhythm is generous: top/bottom padding on a major section is typically `pt-36 pb-24` (≈144 / 96px). Reading columns cap at `--container-narrow` (768px); page chrome lives inside `--container` (1280px).

### Backgrounds

Afka is **not** flat. Surfaces have layered atmosphere, but every layer is quiet:

- **Cloud white** is the default. Never use pure `#FFFFFF`.
- **Deep ink** sections (research focus, footer, hero) carry a halftone dot grid + soft radial glows of mist blue/teal at low opacity (≤0.16).
- **Pinstripe grid lines** at 80px/72px intervals appear on editorial surfaces (`.afka-grid-lines`), at 3–5% opacity.
- **Horn of Africa map** (`assets/horn-of-africa-map-clean.png`) is used as a **regional texture** behind signal panels — never as a literal political map, never repeated, always with a heavy scrim and 12–16% opacity. Do not crop a country out of it.
- The **hero code field** (`assets/afka-hero-code-field.jpg`) is the only photographic surface. It is darkened with a layered scrim and a vignette, and used full‑bleed behind the hero only.
- **No bright gradients.** Permitted gradients are tonal — deep ink → deep teal at 40–60% mix, or cloud‑white → mist‑blue at low opacity.

### Animation & motion

- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` for everything entering. No bounces, no springs, no overshoots.
- **Duration:** 140ms (small hover), 220ms (default), 640ms (section reveals), 1150ms (hero copy enter).
- **Hero copy** rises 0.9rem with opacity fade.
- **Atmospheric drifts** (halftone, scan, signal) run for 30–90s, alternating, almost imperceptible. They are decoration, not feedback.
- **Hover** on cards: `translateY(-2px)` + border darkens to `rgba(10, 92, 107, 0.36)` + shadow deepens. 220ms.
- **Press** on buttons: no shrink, no shadow loss — colour shifts one step darker (`--afka-deep-teal-press`).
- Respect `prefers-reduced-motion: reduce` everywhere. All atmospheric loops switch off.

### Hover & press states

- **Primary CTA** (filled teal): hover → `#084A57`. Press → `#063A45`. No transform.
- **Secondary CTA** (outlined): hover → border `--accent`, text `--accent`. No fill.
- **Nav links** (on dark): hover → background `rgba(244,248,249,0.08)`, text `--fg-inverse`.
- **Cards**: see above (translateY −2px + border + shadow).
- **Links inline**: underline appears on hover, never present at rest. Underline color `--accent`.

### Borders

Default border: **1px solid `var(--line)`** (`rgba(10, 92, 107, 0.18)`) on light surfaces, **1px solid `var(--line-dark)`** on dark. Never use 2px or 3px borders. Pull quotes use a **2px solid accent** left rule. Form inputs use the soft line.

### Shadows

Restrained, long, low, cool. **No tight Material drop shadows.**

- Card rest: `0 20px 62px rgba(13, 31, 34, 0.08)`
- Card hover: `0 26px 78px rgba(13, 31, 34, 0.12)`
- Floating pill nav: `0 22px 70px rgba(13, 31, 34, 0.22)`
- Dark surface: `0 30px 90px rgba(13, 31, 34, 0.28)`
- Hero CTA: `0 20px 62px rgba(0, 0, 0, 0.34)` (only because it sits on a photographic field)

Inner shadows are used sparingly on dark cards: `inset 0 1px 0 rgba(244, 248, 249, 0.08)` adds a top highlight on dark surfaces.

### Capsule vs protection gradient

Afka uses **both**:
- A **capsule** (`backdrop-blur` + low‑alpha fill) for floating navigation and overlay CTAs on imagery.
- A **protection gradient** (large soft radial behind copy) on photographic backgrounds, never on flat surfaces.

### Layout rules

- Fixed floating **pill navigation**, centered, top 16px (mobile) / 20px (desktop). Always over content, never docked.
- **Floating footer** is bottom‑aligned, deep ink background, never sticky.
- Major sections use a **two‑column** asymmetric grid: 0.55fr / 1.45fr or 0.58fr / 1.42fr. Heading + body left, content grid right.
- Reading column max width: **48rem** for long‑form.
- Section vertical padding: `clamp(3rem, 7vw, 7rem)`. Generous.

### Transparency & blur

- **Floating nav:** `bg-rgba(13,31,34,0.72)` + `backdrop-blur-2xl`.
- **Mobile menu:** `bg-rgba(13,31,34,0.9)` + `backdrop-blur-2xl`.
- **Research surface cards** use `backdrop-blur(16px)` on the light surface and translucent gradients.
- Blur is never decorative — only used when content sits over an image or another surface.

### Imagery treatment

- Cool, slightly desaturated. The hero code field is the model: `saturate(0.98) contrast(1.06) brightness(1.05)`.
- No warm‑filter or vintage looks.
- No stock illustrations, no flat‑vector people, no isometric crowds.
- Photography is documentary‑adjacent: ports, screens, hands, places — never staged smiling office shots.
- The Horn of Africa map is the only “geographic” imagery, and only as abstract texture (see Backgrounds).

### Corner radii

Mostly **square** (0–4px). The system reads as editorial.
- Reports, covers, cards, surfaces: **0** or **2px** at most.
- Form inputs: **6px** (`--r-md`).
- Buttons, badges, the floating nav capsule, contact CTA: **pill** (`--r-pill`).
- Never use 12–20px “consumer” rounding on cards.

### Card anatomy (`ResearchSurface`)

A typical Afka card:
1. 1px line border (teal at 18% alpha).
2. Light gradient fill: `linear-gradient(145deg, rgba(244,248,249,0.9), rgba(200,232,237,0.7))`.
3. `box-shadow: 0 20px 62px rgba(13, 31, 34, 0.08)`.
4. `backdrop-filter: blur(16px)`.
5. A pseudo‑element pinstripe grid layer at 4–6% alpha.
6. A second pseudo‑element with a 105° diagonal sheen + halftone dots, `mix-blend-mode: multiply` at 28% opacity.
7. Padding: `p-5` (mobile) → `p-7` (desktop).
8. Optional `data-accent="true"` deepens the border and tints the gradient with teal.
9. Optional `data-tone="dark"` flips colours for use on deep‑ink sections.

This is what gives every card a faint paper / instrumented‑grid feel without ever being loud.

---

## ICONOGRAPHY

The Afka codebase uses **inline SVG icons hand‑drawn per use case**, not an icon font. Stroke style is consistent: `stroke-width: 1.8–1.9`, `stroke-linecap: round`, `stroke-linejoin: round`, on `viewBox="0 0 24 24"`. The only fully filled icons are platform glyphs in `SocialLinks.tsx` (Instagram, LinkedIn, X, Facebook).

**Convention.**
- Outline icons for navigation, labels, and feature panels.
- Filled icons only for platform glyphs (social).
- Stroke icons inherit color from text (`stroke="currentColor"`).
- Size: **16px** in tight contexts (chips), **20px** for body alignment, **24px** in larger cards.
- Never combine outline and filled in the same row.

**No icon font.** No `Font Awesome`, no `Material Icons`. If an external icon set is needed, the closest open match is **Lucide** (<https://lucide.dev>) — same stroke style, same metric. Document the substitution.

**No emoji.** Already covered in CONTENT FUNDAMENTALS.

**Unicode glyphs allowed.** `→ ← ↗ · • ¶ §` for inline navigation, footnote markers, and section markers. They follow current text colour.

**Logo file usage.**
- `assets/afka-logo-mark-teal.png` — original supplied square logo on deep teal, used as a stamp on covers / social cards.
- `assets/afka-wordmark-light.png` — wordmark for use on dark surfaces (footer, hero, nav).
- `assets/afka-wordmark-black.png` — wordmark for use on light surfaces (research surfaces, reports).
- `assets/afka-logo-light-transparent.png` / `afka-logo-dark-transparent.png` — full logo+wordmark composition with the dotted halo motif. Use as a brand stamp on covers, large posters, and event graphics where the dotted halo (which represents Somali digital spaces as a constellation) should be visible.
- The “dotted halo” motif is reserved for the logo. **Do not** repeat dotted halos elsewhere — that role is served by the broader halftone texture.

**Halftone / dot motif.** Reused as background texture (`.afka-halftone`). 17px grid, 28% teal dots, masked horizontally so it fades at the edges. This is the visual link from the logo into surfaces.

---

## Iteration notes

Things flagged for the user’s review (see CAVEATS in final summary):
1. **“Deep slate blue” vs deep teal** — system follows the actual brand.
2. **Fonts** — Newsreader + IBM Plex Sans are substitutions for unshipped Iowan Old Style + Avenir Next. Confirm or supply licensed files.
3. The logo file `assets/afka-logo-mark-teal.png` includes the typo *“Digital Institue”* in the original artwork. The wordmark files (`afka-wordmark-*.png`) are clean. Flag if the typo logo is meant to be retired.
