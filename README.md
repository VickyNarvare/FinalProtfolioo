# Vicky Narvare — Portfolio

The personal portfolio of Vicky Narvare, a MERN stack developer based in Indore, India. The site introduces his background, presents selected projects as detailed case studies, documents his tech stack and services, and makes it easy for clients and recruiters to get in touch.

**Live:** [vicky-narvare.vercel.app](https://vicky-narvare.vercel.app)

## Tech stack

- **React 19** + **TypeScript** for a typed, component-driven UI
- **Vite 8** for fast local development and production builds
- **React Router 8** with lazy-loaded routes for smaller initial bundles
- **Tailwind CSS 4** with custom design tokens in `src/index.css`
- **Motion** for reveals, scroll progress and micro-interactions
- **react-icons** for a consistent icon set

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

## Project structure

```
src/
├── app/            # App shell
├── routes/         # Route table (all pages are lazy-loaded)
├── layout/         # Main layout, footer, 404 page
├── context/        # Theme provider and context
├── features/
│   ├── home/       # Hero, featured work, overview
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

Most copy lives in data files, so components rarely need to change:

- **Projects** — `src/features/projects/data/projects.ts`
- **Skills** — `src/features/skills/data/skills.ts`
- **Timeline** — `src/features/about/data/journey.ts`
- **Contact, services, capabilities, FAQ** — `src/shared/data/site.ts`
- **Navigation** — `src/shared/components/Navbar/Navigation.ts`
- **SEO defaults and per-page metadata** — `src/shared/components/Seo.tsx`

Project images live in `src/assets/images/` and are imported by the project data file.

## Design notes

- The visual language is editorial rather than card-based: ruled sections, asymmetric headline sizes, mono metadata and project screenshots that keep their full 1.95:1 crop.
- The palette and typography tokens are defined in Tailwind's `@theme` block in `src/index.css`. Deep forest green and warm cream carry the interface in both themes: Fraunces sets headings, Inter sets body copy and JetBrains Mono sets labels.
- Dark mode is the default. The user's choice is stored in `localStorage` and applied before first paint to prevent a flash.
- There is no blocking loading screen: the page paints immediately and route changes jump to the top.
- Animations respect `prefers-reduced-motion`.

## SEO

- Each route sets its own title, meta description, canonical URL and Open Graph tags through `Seo.tsx`.
- Project pages include `CreativeWork` and `BreadcrumbList` structured data; the site also exposes `Person` and `WebSite` schemas.
- `public/sitemap.xml` and `public/robots.txt` are ready for search engines.
- Unknown routes are marked `noindex, follow`.

## Deployment

The site is a static SPA. Build it with `npm run build` and deploy the `dist/` directory to Vercel, Netlify or any static host.

Client-side routes need a fallback to `index.html`:

- **Vercel** — `vercel.json` rewrites all paths to `index.html`.
- **Netlify** — `public/_redirects` is copied into the build and handles the same fallback.
- **Other hosts** — configure a rewrite of all paths to `/index.html`.
