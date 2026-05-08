# Afka Digital Institute Website Handoff

## Project State

This is a public-facing institutional website for Afka Digital Institute. It is built as a static Next.js site using the App Router, TypeScript, and Tailwind CSS. It is intended to deploy cleanly on Vercel with no database, no CMS, and no environment variables required.

The current implementation lives in `src/app`, `src/components`, and `src/data`. Reusable site content is centralized in `src/data/site.ts` so a CMS can replace local arrays later.

## Current Routes

- `/`: cinematic homepage with floating pill navigation, editorial hero, internal pathways, research system overview, and insights preview.
- `/about`: concise institutional overview covering what Afka is, why it exists, what it studies, and its editorial research approach.
- `/research`: three core research areas with a document, analyze, publish method layer.
- `/insights`: Founding Brief section plus a restrained note that selected insights and research notes will appear as Afka publishes work.
- `/contact`: institutional contact page with mailto form and social links.

## Visual System

- Warm fog and off-white editorial surfaces.
- Black Pearl structural sections: `#0C1117`.
- Red Orange accents: `#FD363B`, used sparingly as a signal color.
- Centered floating pill navigation with the Afka wordmark.
- Cinematic dotted and halftone atmosphere in hero and dark sections.
- Horn of Africa source image reused as an abstract regional texture through signal-map panels.
- Restrained cards, thin borders, quiet buttons, and minimal motion.
- Serif display type for major editorial headings, clean sans type for body, navigation, and UI.

## Assets

Assets in `public/images` include:

- `horn-of-africa-map-clean.png`: current cleaned regional texture source.
- `afka-wordmark-source.jpg`: source wordmark supplied by the user.
- `afka-wordmark-light.png`: processed light wordmark for dark surfaces.
- `afka-wordmark-black.png`: processed dark wordmark for light surfaces.
- Earlier Afka logo and Horn of Africa map variants retained for reference.

Use `horn-of-africa-map-clean.png` as an abstract texture or signal-map layer, not as a literal repeated political map.

## Copy Rules

- Keep the tone serious, public-facing, institutional, and editorial.
- Do not use em dashes.
- Do not use inflated phrases such as “transformative,” “game-changing,” “cutting-edge,” “empowering communities,” “shaping the future,” “driving change,” or “unlocking potential.”
- Use “Somali-speaking world,” not “Somali world.”
- Do not invent fake people names, partners, funders, reports, or publications.
- Keep public-facing copy only. Avoid confidential strategy, founder benefits, donor targeting, and private onboarding language.
- Avoid wording that makes Afka feel unfinished. The only approved use of that term family is “Founding Brief.”

## Commands

Standard local commands:

```bash
npm install
npm run dev
npm run lint
npm run build
```

Preview URL:

```text
http://127.0.0.1:3000
```

In this Codex desktop environment, `npm` may not be on PATH. Previous checks used the bundled Node runtime and a temporary npm CLI:

```bash
PATH=/Users/alia25/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH /Users/alia25/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node /tmp/npm-10.8.2/package/bin/npm-cli.js run lint
PATH=/Users/alia25/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH /Users/alia25/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node /tmp/npm-10.8.2/package/bin/npm-cli.js run build
```

When running a dev server in this environment:

```bash
PATH=/Users/alia25/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH /Users/alia25/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node /tmp/npm-10.8.2/package/bin/npm-cli.js run dev -- --hostname 127.0.0.1 --port 3000
```

After running `next build`, restart `next dev` before visual review.

## Verification Status

Latest checks to run before handoff:

- `npm run lint`
- `npm run build`
- HTTP checks for `/`, `/about`, `/research`, `/insights`, and `/contact`

## Open Items

- Contact form uses a `mailto:` fallback only. There is no backend submission endpoint.
- No Privacy Policy or Research Ethics pages exist yet.
- No CMS integration yet.
- The page uses system serif and sans fonts through CSS variables, not externally hosted fonts.

## Files Most Likely To Edit Next

- `src/components/Hero.tsx`: homepage hero copy and CTA.
- `src/components/RegionalSignalMap.tsx`: abstract Horn of Africa identity system.
- `src/components/HomePathways.tsx`: homepage internal pathways.
- `src/components/Outputs.tsx`: Founding Brief and insights preview.
- `src/components/Contact.tsx`: inquiry form, contact copy, and social links.
- `src/components/Footer.tsx`: footer layout and social links.
- `src/data/site.ts`: nav links, research areas, social links, insight copy, inquiry reasons.
- `src/app/globals.css`: brand colors, motion, global styling.

## Deployment Notes

The project is Vercel-ready. Push the project to a Git repository, import it in Vercel, keep the default Next.js settings, and deploy. No database or environment variables are needed.
