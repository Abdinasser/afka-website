# Afka Digital Institute Website Handoff

## Project State

This is a public-facing institutional website for Afka Digital Institute. It is built as a static first-version Next.js site using the App Router, TypeScript, and Tailwind CSS. It is intended to deploy cleanly on Vercel with no database, no CMS, and no environment variables required.

The repo was created from an empty workspace. The current implementation lives in `src/app`, `src/components`, and `src/data`. Reusable section content is centralized in `src/data/site.ts` so a CMS can replace the local arrays later.

## Completed Sections

The current landing page order in `src/app/page.tsx` is:

1. `Header`
2. `Hero`
3. `Context`
4. `ProblemCards`
5. `ResearchAreas`
6. `Approach`
7. `Outputs`
8. `Independence`
9. `WhyNow`
10. `Contact`
11. `Footer`

Notes by section:

- `Header`: fixed dark branded navigation with Afka logo image, desktop links, mobile menu button, and “Get in Touch” action.
- `Hero`: full-screen map-backed hero using the cleaned Horn of Africa image. “digital harm” is italicized and accented in Afka gold. The side panel is now a restrained digital evidence console with signal rows, process stages, and a small Afka logo mark in place of latitude/longitude text.
- `Context`: editorial two-column section explaining the research gap.
- `ProblemCards`: four cards for platform blind spots, monetized harm, gendered digital harm, and AI/language exclusion.
- `ResearchAreas`: dark grid section with six research tracks.
- `Approach`: four compact icon cards for Document, Analyze, Publish, and Engage.
- `Outputs`: compact button-like publication categories only, with descriptions removed per user preference.
- `Independence`: compact dark trust panel with three principles.
- `WhyNow`: map-backed dark editorial section.
- `Contact`: combined Get Involved and Contact section with a modern inquiry form, email/location cards, inquiry tags, and social icon buttons.
- `Footer`: modern dark footer with logo home action, “Back to top” action, tagline, copyright, and date.

Removed intentionally:

- Team / Founding roles section, to be added later.
- Separate Get Involved section, now combined with Contact.
- CMS-ready label in Outputs.
- Hero side map image panel.

## Assets

Provided assets were copied into `public/images`:

- `horn-of-africa-map.png`: original source copy.
- `horn-of-africa-map-hero.png`: resized earlier version.
- `horn-of-africa-map-clean.png`: current cleaned/cropped hero map without black letterbox bars.
- `afka-logo-on-blue-source.png`: original blue background logo source.
- `afka-logo-on-white-source.png`: original white background logo source.
- `afka-logo-light-transparent.png`: processed light logo used on dark backgrounds.
- `afka-logo-dark-transparent.png`: processed dark logo variant.
- `afka-logo-dark.png` and `afka-logo-light.png`: intermediate prepared variants.

Use `horn-of-africa-map-clean.png` for map-backed sections unless there is a specific reason to revert.

## Key Design Rules

- Keep the tone serious, public-facing, institutional, and donor-facing.
- Do not use em dashes.
- Do not use inflated phrases such as “transformative,” “game-changing,” “cutting-edge,” “empowering communities,” “shaping the future,” “driving change,” or “unlocking potential.”
- Use “Somali-speaking world,” not “Somali world.”
- Do not invent fake team names, partners, funders, or reports.
- Keep public-facing copy only. Avoid confidential strategy, founder benefits, donor targeting, and private onboarding language.
- Use the Afka brand colors:
  - Primary: `#34495E`
  - Secondary: `#D1D5DB`
  - Accent currently used in CSS as `--sand: #c8a16d`
- Preserve the restrained modern editorial style:
  - Dark slate/navy branded areas.
  - Warm off-white editorial surfaces.
  - Thin borders, subtle grids, compact cards, generous spacing.
  - No flashy gradients, cartoon visuals, generic startup styling, heavy animation, bounce, spin, or dramatic parallax.
- Respect accessibility:
  - Semantic sections and headings.
  - Keyboard-friendly links/buttons.
  - Good color contrast.
  - Reduced-motion preferences.
- Keep responsive behavior clean:
  - Mobile single column.
  - No horizontal overflow.
  - Touch-friendly buttons.
  - Header collapses to mobile menu.

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

If `/tmp/npm-10.8.2` is gone in a future session, either use the user’s normal `npm`, install dependencies normally, or download npm again as needed with user approval if network access is restricted.

When running a dev server in this environment, local binding may require approval:

```bash
PATH=/Users/alia25/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH /Users/alia25/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node /tmp/npm-10.8.2/package/bin/npm-cli.js run dev -- --hostname 127.0.0.1 --port 3000
```

Important preview note: after running `next build`, restart `next dev`. The dev server can show stale `.next` cache errors if the production build is run while dev is still serving.

## Verification Status

The latest completed checks passed:

- `npm run lint`
- `npm run build`

The in-app browser was used to visually inspect the hero, compact Outputs, Contact, and Footer after the most recent design changes.

## Known Issues / Placeholders

- Contact form uses a `mailto:` fallback only. There is no backend submission yet.
- Social media icons are present, but their links are placeholders pointing to `#contact`. Replace with real LinkedIn, X, Instagram, and Facebook URLs when available.
- No Team section is present. The user wants to add team/founding roles later.
- No Privacy Policy or Research Ethics pages exist yet, although they were part of the original footer concept before the footer was simplified.
- No CMS integration yet. Local data arrays are ready to migrate later.
- No real published research pages exist yet. Outputs are categories only.
- The page currently uses system serif/sans fonts through CSS variables, not externally hosted fonts.

## Files Most Likely To Edit Next

- `src/components/Hero.tsx`: hero copy, map background, digital evidence console.
- `src/components/Outputs.tsx`: compact publication category buttons.
- `src/components/Contact.tsx`: inquiry form, contact copy, social links.
- `src/components/Footer.tsx`: footer layout and copyright.
- `src/data/site.ts`: nav links, stats, cards, research areas, output categories, inquiry reasons.
- `src/app/globals.css`: brand colors, motion, global styling.

## Deployment Notes

The project is Vercel-ready. Push the project to a Git repository, import it in Vercel, keep the default Next.js settings, and deploy. No database or environment variables are needed for the first version.
