# Afka Website — UI Kit

Pixel‑style recreation of the Afka Digital Institute website (`afka-website` on GitHub), built as a click‑through prototype in plain HTML + React via Babel. The kit lifts the design directly from the codebase: same atmospheric layers, same `ResearchSurface` card system, same floating pill navigation, same content from `src/data/site.ts`.

## Files

- `index.html` — Loads the full site demo. Has a floating pill nav at the top; click between **About / Research / Insights / Contact** to switch pages. Each page renders the same components the live site uses.
- `data.js` — Site copy lifted from `src/data/site.ts` (research areas, outputs, principles, nav links).
- `Components.jsx` — Reusable primitives: `Eyebrow`, `SurfaceIndex`, `ResearchSurface`, `Button`, `EditorialRule`, `SocialIcon`.
- `Header.jsx` — Floating pill nav, with mobile sheet.
- `Hero.jsx` — Full‑bleed hero with code‑field photographic ground, atmospheric layers, CTAs.
- `Pathways.jsx` — Four‑card pathway grid that sits at the seam between hero and white sections.
- `ResearchAreas.jsx` — Dark research grid (used on Home and Research).
- `Outputs.jsx` — Output categories on white.
- `AboutContext.jsx` — Two‑column "Why Afka exists" with insight cards.
- `Contact.jsx` — Inquiry form (cosmetic only).
- `Footer.jsx` — Deep‑ink footer with wordmark, nav, contact CTA, socials.

## What's cosmetic vs real

- Routing: a single‑page React app with a string `route` state. URLs do not change. Good enough to see flows.
- Form: posts nothing; the submit button shows a confirmation message in place.
- Atmospheric animations are present but slowed/disabled for static review.
- Real source (Next.js + Tailwind) lives at <https://github.com/Abdinasser/afka-website>. To get pixel parity in production, inspect that repo directly — this kit is for design composition, not production hand‑off.

## Why kept simple

This kit is a faithful **recreation**, not a redesign. The role of the UI kit is to let designers compose new Afka layouts using known‑good components. Implementation details (`motion`, `useScroll`, `useReducedMotion`, server components) are stripped out so the file is editable.
