---
name: afka-design
description: Use this skill to generate well-branded interfaces and assets for Afka Digital Institute — an independent research and policy institute focused on digital harm in Somali-speaking online spaces. Contains design guidelines, colors, typography, fonts, brand assets, and UI kit components for prototyping research reports, policy briefs, website sections, social cards, event graphics, PDF covers, article pages, and newsletter headers.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, social cards, report covers, etc.), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts or production code, depending on the need.

## What's in this skill

- `README.md` — context, content rules, visual foundations, iconography. Read this first.
- `colors_and_type.css` — all design tokens (color, type scale, spacing, radii, shadow, motion) as CSS custom properties; import this in any HTML you create.
- `assets/` — logos, wordmarks, hero imagery, Horn of Africa regional texture. Copy what you need.
- `preview/` — small reference cards demonstrating every token and component in isolation.
- `templates/` — full-size editorial samples: report cover, policy brief cover, social card, quote card, newsletter header, event card. Use these as starting points.
- `ui_kits/website/` — pixel-style React recreation of the institutional website. Lift components from here when building any web layout.

## Quick rules you can never forget

- Brand color is **deep teal `#0A5C6B`**, on **cloud white `#F4F8F9`** with **deep ink `#0D1F22`** as the body / dark color. No purple, no rainbow, no bright gradients.
- Type: **Bricolage Grotesque** for display (h1–h4), **IBM Plex Sans** for body, **IBM Plex Mono** for citations.
- **No emoji**, ever. No em dashes. No "transformative / game-changing / empowering" marketing copy.
- Use **"Somali-speaking world"**, not "Somali world."
- Cards are mostly square (0–4px radius); only buttons, badges, and the nav capsule are pills.
- Shadows are long and low (`0 20px 62px rgba(13,31,34,0.08)`), not tight drops.
- Default animation easing: `cubic-bezier(0.22, 1, 0.36, 1)`. No bounces, no springs.
- Source of truth for the live site: <https://github.com/Abdinasser/afka-website>.
