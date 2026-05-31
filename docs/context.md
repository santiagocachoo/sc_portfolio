# Portfolio Site — Project Context

Personal portfolio site for Santiago Cachoh. Showcases software projects and provides an about/skills/contact landing page for a broad audience (recruiters, clients, developers, general public).

---

## Tech Stack

| Layer | Tool | Version |
|-------|------|---------|
| UI | React | 19 |
| Language | TypeScript | 6 |
| Styling | Tailwind CSS | 4 (Vite plugin, no config file) |
| Bundler | Vite | 8 |
| Routing | React Router | v7 (`react-router-dom`) |
| Testing | Vitest + @testing-library/react | latest |
| Deployment | Vercel | — |

Tailwind is configured via `@tailwindcss/vite` — there is no `tailwind.config.js`. The only Tailwind setup is in `src/index.css`.

---

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `src/pages/Home.tsx` | Single scrolling page with all four sections |
| `/projects/:slug` | `src/pages/ProjectDetail.tsx` | Individual project detail page |

Any unknown path renders the 404 state inside `ProjectDetail` (slug not found in data). There is no dedicated 404 route.

---

## File Structure

```
src/
  components/
    Nav.tsx            Sticky top nav — logo + section anchor links
    ProjectCard.tsx    Card in the home page projects grid
    SectionLabel.tsx   Small uppercase label used in every section
    SkillPill.tsx      Pill-shaped skill tag
  pages/
    Home.tsx           Full scrolling home page
    ProjectDetail.tsx  Individual project detail page
  data/
    projects.ts        Project type definition + projects array
    skills.ts          Skills string array
  lib/
    projectUtils.ts    Pure fns: getProjectBySlug, getAdjacentProjects
    projectUtils.test.ts  Vitest tests for the above
  test/
    setup.ts           Vitest setup (imports @testing-library/jest-dom)
  App.tsx              Route definitions only
  main.tsx             React entry point, BrowserRouter wrapper
  index.css            Tailwind import + dark mode custom variant
```

---

## Data Model

All content lives in static TypeScript files — no CMS, no API, no fetching.

### Adding a project

Edit `src/data/projects.ts` and add an entry to the `projects` array:

```ts
type Project = {
  slug: string        // URL key — must be unique, URL-safe (e.g. "my-app")
  title: string
  tagline: string     // One-liner shown on the card
  description: string[] // Paragraphs shown on the detail page
  highlights?: string[] // Optional bullet points on detail page
  tech: string[]      // Tags shown on card and detail page
  image?: string      // Path in /public/, e.g. "/images/my-app.png" (optional)
  links: {
    github?: string
    live?: string
  }
}
```

Array order determines display order and prev/next navigation on detail pages. The first item has no "prev"; the last has no "next".

### Adding a skill

Edit `src/data/skills.ts` — it's just a `string[]`.

---

## Dark Mode

Uses Tailwind's `dark:` utility variant with a class-based trigger (not `prefers-color-scheme` media query directly).

**How it works:**
1. `src/index.css` declares `@custom-variant dark (&:where(.dark, .dark *))` — this makes `dark:` classes activate when a `.dark` class is on any ancestor.
2. `index.html` has an inline script (runs before React mounts, no flash) that adds `class="dark"` to `<html>` if:
   - `localStorage.getItem('theme') === 'dark'`, OR
   - no stored preference and `prefers-color-scheme: dark`

**Implication:** Every component that sets background, text, or border colors should include both light and `dark:` variants. Example: `className="bg-white dark:bg-gray-950"`.

A manual theme toggle can be added later by writing to `localStorage` and toggling the `.dark` class on `document.documentElement`.

---

## Visual Design

The current implementation uses neutral Tailwind defaults (grays, white/near-black). The actual visual design — colors, typography, spacing, aesthetic — will be applied separately via a `design.md` the owner will provide.

**When applying a design:**
- Replace Tailwind color utilities across components
- Add custom fonts (update `index.html` + Tailwind config if needed)
- The component structure and dark mode wiring do not need to change

---

## Component Reference

### `Nav`
Sticky top bar. Logo ("SC") links to `/`. Section links (`about`, `projects`, `skills`, `contact`) are anchor links: `#id` when on `/`, `/#id` when on any other route (e.g. a project detail page), so they always return the user to the correct home page section.

### `ProjectCard`
Clickable card. Renders image if `project.image` is set, otherwise shows a gray placeholder with the project title. Clicking navigates to `/projects/:slug`.

### `SectionLabel`
Small pill label (e.g. "ABOUT") used at the top of every section. Pass text as children.

### `SkillPill`
Bordered pill for a single skill string.

### `Home`
Assembles four sections in order: About → Projects → Skills → Contact. Each section has an `id` attribute matching its nav anchor. Section content is hardcoded (bio text, GitHub/LinkedIn URLs) — update directly in the file.

### `ProjectDetail`
Reads `:slug` from the URL, looks it up with `getProjectBySlug`. If not found, renders a "Project not found" message with a back link. If found, renders: back link → hero image/placeholder → title + tagline + tech tags + action links → description paragraphs → highlights (if present) → prev/next navigation.

---

## Utilities

### `getProjectBySlug(slug: string): Project | undefined`
Finds a project by slug. Returns `undefined` for unknown slugs.

### `getAdjacentProjects(slug: string): { prev: Project | undefined, next: Project | undefined }`
Returns the project before and after the given slug in the `projects` array. Both are `undefined` if the slug is not found.

Both functions are tested in `src/lib/projectUtils.test.ts` (5 tests, run with `npm test`).

---

## Commands

```bash
npm run dev      # Start dev server at localhost:5173
npm run build    # Type-check + build to dist/
npm test         # Run Vitest (watch mode)
npm test -- --run  # Run Vitest once and exit
```

---

## Placeholder Content

The following is placeholder and should be replaced with real content:

- **Bio text** in `src/pages/Home.tsx` (About section)
- **GitHub URL** in `src/pages/Home.tsx` (About section CTA + Contact section)
- **LinkedIn URL** in `src/pages/Home.tsx` (Contact section)
- **Projects** in `src/data/projects.ts` — two placeholder entries exist for development
- **Skills** in `src/data/skills.ts` — generic list, replace with actual skills
- **Page title** in `index.html` is already set to "Santiago Cachoh"

---

## Deployment

Hosted on Vercel. The `vercel.json` rewrite rule (`"source": "/(.*)" → "/index.html"`) is required so that direct navigation to `/projects/:slug` doesn't 404 at the CDN level.

To deploy: push to GitHub → Vercel auto-deploys on every push to `main`.
