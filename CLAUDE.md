# CLAUDE.md

Guidance for working in this repository.

## What this is

A single-page personal portfolio for Saeed Arshad (senior/lead software engineer). It is a resume alternative: hero, experience, skills, projects, testimonials, and contact, all on one scrolling page.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS with shadcn/ui components (`src/components/ui`)
- framer-motion for entrance animations
- lucide-react for icons

## Commands

- `npm run dev` starts the dev server on port 3000
- `npm run build` builds for production
- `npm run lint` runs ESLint
- `npx tsc --noEmit` type-checks without emitting

## Structure

- `src/pages/Index.tsx` composes the page: Navbar, Hero, Experience, Skills, Projects, Testimonials, Contact, Footer.
- Section content lives in typed arrays at the top of each section component (e.g. `experienceItems` in `Experience.tsx`, `projects` in `Projects.tsx`, `testimonials` in `Testimonials.tsx`). Edit the data array to change content, not the JSX.
- `src/components/AIAnimatedBackground.tsx` renders the page background: a thin brand accent line, a faint full-page blueprint grid and warm dot field, denser behind the hero. No animation despite the name.
- `src/index.css` holds the theme tokens (HSL CSS variables) and custom utility classes (`.glass-card`, `.eyebrow`, `.section-title`, `.section-container`, etc.).
- `tailwind.config.ts` maps tokens to Tailwind colors, including the `brand` color.
- Static assets: `public/portfolio-uploads/` for images, `public/resume.pdf` for the downloadable resume.

## Design conventions

- The site runs in a forced dark theme: warm charcoal background with a single orange brand accent.
- Use the `brand` color for accents (eyebrows, current badges, avatars, links on hover). Drive it through the `--brand` / `--primary` / `--ring` HSL variables in `src/index.css` so a hue change propagates everywhere.
- Avoid gradient background washes and purple/indigo accents. They read as generic AI-generated design. Keep backgrounds textured (grid/dots) rather than glowing.
- Cards use the `.glass-card` utility (frosted glass over the background texture). Reuse it for consistency.
- Alternating sections are banded (`border-y border-border/70 bg-card/40`) to give the page rhythm.

## Writing conventions

- Never use em dashes anywhere: not in copy, JSX, comments, or commit messages. Rephrase with commas, periods, or parentheses.

## Deployment

Pushing to `main` triggers an automatic deploy through Cloudflare Pages (wired via the hosting dashboard, not a config file in the repo). There is no CI workflow in `.github/`.
