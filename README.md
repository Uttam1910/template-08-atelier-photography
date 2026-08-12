# Atelier

A small, premium website template for a creative photography studio. Editorial
layout, restrained UI, a considered light and dark theme, and a content layer
you can rewrite without touching a component.

Everything is fictional: the studio, the projects, the clients and the contact
details. Replace the files in `src/content/` and the site is yours.

**Template 08** of a public collection of production-quality website templates.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build        # production build (all routes prerendered)
npm run start        # serve the production build
npm run verify       # lint → typecheck → content → routes → build → links
```

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, TypeScript 5.9 |
| Styling | Tailwind CSS v4 (CSS-first config, no `tailwind.config`) |
| Icons | `lucide-react` |

No CMS, no database, no auth, no API, no state library, no backend. Four runtime
dependencies in total.

## Routes

| Route | Description |
|---|---|
| `/` | Hero, featured work, studio introduction, disciplines, client strip, contact CTA |
| `/work` | All eight projects in an editorial grid, with disciplines listed |
| `/work/[slug]` | Project hero, metadata, story, challenge/approach/result, gallery sequence, credits, next project |
| `/studio` | Studio story, philosophy, capabilities, facts, selected clients |
| `/services` | Four service areas, deliverables, four-step process, CTA |
| `/contact` | Contact channels, both studio addresses, demo enquiry form |
| `not-found` | Designed 404 |

Generated automatically: `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`,
`/opengraph-image`, `/icon.svg`.

## Content

All editable copy lives in `src/content/`. Nothing marketing-facing is hard-coded
inside a component.

```
src/content/
  types.ts        the content model
  site.ts         name, url, tagline, description, social
  navigation.ts   primary and footer navigation
  home.ts         homepage sections
  projects.ts     8 projects, each with story, chapters, gallery, credits
  services.ts     4 services + the process steps
  studio.ts       studio story, philosophy, capabilities, facts, clients, disciplines
  contact.ts      channels, studio locations, form copy and error messages
```

Change `site.url` in `src/content/site.ts` before deploying — canonicals, the
sitemap and OpenGraph tags are all derived from it.

## Images

The repo runs with **no external image dependency**. Every visual is an
`Artwork`, and `<Frame />` decides how to render it:

- **`image` set** → rendered with `next/image`.
- **`image` absent** → a deterministic local SVG plate is drawn instead.

The plates are seeded from the artwork's `seed` string, so a given piece of
content always draws the same composition, and they follow the theme through the
`--art-*` custom properties.

To use real photography, drop files into `public/images/` and add two fields:

```ts
// src/content/projects.ts
cover: {
  seed: "concrete-light-cover",
  image: "/images/work/concrete-light-cover.jpg",
  imageAlt: "The library's north elevation at first light",
},
```

No page or component changes. `images.unoptimized` is on in `next.config.ts` so
the build stays host-agnostic; remove it if you deploy somewhere with the Next
image optimiser and want it.

## Theme

Two themes, authored separately rather than mechanically inverted. Preference is
stored in `localStorage` under `atelier-theme` and applied by a tiny inline
script in `<head>`, so there is no flash on load. With JavaScript disabled the
site follows `prefers-color-scheme`.

Design tokens live at the top of `src/app/globals.css`.

## Accessibility

- Semantic landmarks, one `<h1>` per page, no skipped heading levels
- Skip link, visible focus rings, `aria-current` on the active nav item
- Mobile menu: `aria-expanded`, focus trap, Escape to close, focus returned to
  the trigger, body scroll locked while open
- Contact form: labelled inputs, `aria-invalid`, `aria-describedby`, an error
  summary, and focus moved to the first invalid field
- All motion is behind `prefers-reduced-motion`; scroll reveals use
  `animation-timeline: view()` so no content is ever hidden behind JavaScript

## The contact form

Client-side only. It validates, reports errors accessibly and shows a success
state — and then explicitly tells the visitor that nothing was sent, because
nothing was. There is no backend by design. Point `handleSubmit` in
`src/components/forms/ContactForm.tsx` at your own endpoint to make it live.

## Verification

```bash
npm run verify
```

| Step | What it does |
|---|---|
| `lint` | ESLint (`next/core-web-vitals` + TypeScript, `no-console` as an error) |
| `typecheck` | `tsc --noEmit`, strict, with `noUncheckedIndexedAccess` |
| `verify:content` | Shape and quality of everything in `src/content` — counts, slug format, gallery sizes, unique artwork seeds, alt text whenever an image is set, banned copy |
| `verify:routes` | Every required file in `src/app` exists |
| `build` | Production build; every route prerenders |
| `verify:links` | Walks the built HTML: internal links resolve, one `<h1>` per page, no skipped heading levels, landmarks, canonical and OG tags present |

## Deploying

Push to Vercel and it works with no configuration. Every route is prerendered at
build time, so any static-capable host will serve the contents of the build
output just as happily.

## Licence

MIT. The content is fictional; replace it before using this as a real site.
