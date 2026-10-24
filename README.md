# Vicky Narvare — Portfolio

Personal portfolio for Vicky Narvare, a MERN stack developer based in Indore, India. The site covers an introduction, selected projects with case-study pages, the tech stack, services, and contact details.

**Live:** [vicky-narvare.vercel.app](https://vicky-narvare.vercel.app)

## Stack

- **React 19** + **TypeScript**
- **Vite 8** for the dev server and production build
- **React Router 8** with lazy-loaded routes
- **Tailwind CSS 4** with custom design tokens in `src/index.css`
- **Motion** for reveals, scroll progress, and micro-interactions
- **react-icons** for the icon set

## Getting started

```bash
npm install
npm run dev
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build to `dist/` |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build |

## Structure

```
src/
├── app/            # App shell
├── routes/         # Route table (all pages are lazy-loaded)
├── layout/         # Main layout, footer, 404 page
├── context/        # Theme provider and context
├── features/
│   ├── home/       # Hero, intro, featured work, overview
│   ├── about/      # About page and journey data
│   ├── projects/   # Project list, detail page, cards, data
│   ├── skills/     # Skills and capabilities
│   └── contact/    # Contact links and FAQ
├── shared/
│   ├── components/ # Reusable UI (navbar, buttons, headings, SEO, ...)
│   └── data/       # Site copy: contact, services, capabilities, FAQ
├── types/          # Shared TypeScript types
└── lib/            # Small utilities
```

## Editing content

Most copy is data-driven, so components rarely need touching:

- **Projects** — `src/features/projects/data/projects.ts`
- **Skills** — `src/features/skills/data/skills.ts`
- **Timeline** — `src/features/about/data/journey.ts`
- **Contact, services, capabilities, FAQ** — `src/shared/data/site.ts`
- **Navigation** — `src/shared/components/Navbar/Navigation.ts`
- **SEO defaults and per-page metadata** — `src/shared/components/Seo.tsx`

Project images live in `src/assets/images/` and are imported by the project data file.

## Design notes

- The palette and typography tokens are defined with Tailwind's `@theme` block in `src/index.css`.
- Dark mode is the default; the choice is persisted in `localStorage` and applied before first paint to avoid a flash.
- Animations respect `prefers-reduced-motion`.
- The intro overlay only runs on a full page load, not on client-side navigation.

## Deployment

The site is a static SPA. Build it with `npm run build` and deploy the `dist/` directory to Vercel, Netlify, or any static host.

Client-side routes need a fallback to `index.html`:

- **Vercel** — `vercel.json` rewrites all paths to `index.html`.
- **Netlify** — `public/_redirects` is copied into the build and handles the same fallback.
- **Other hosts** — configure a rewrite of all paths to `/index.html`.
