# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (localhost:3000)
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # ESLint check
pnpm lint:fix     # Auto-fix lint issues
```

## Tech Stack

- **Next.js 16** (App Router) + React 19 + TypeScript
- **Tailwind CSS v4** with OKLch color variables and dark mode via `.dark` class
- **shadcn/ui** (new-york style) for UI primitives, **Magic UI** for animated components
- **Content Collections** + MDX for blog posts (compiled at build time from `content/`)
- **Shiki** for code syntax highlighting, **motion** library for animations
- **next-themes** for dark/light mode persistence

## Architecture

**Configuration-driven**: All portfolio content (work, education, projects, hackathons, skills, contact) lives in a single file: `src/data/resume.tsx` → exports `DATA` object. Components consume this centralized config.

**Component hierarchy**:
- `src/components/ui/` — shadcn/ui primitives + tech stack SVG icons in `ui/svgs/`
- `src/components/magicui/` — animated components (blur-fade, dock, flickering-grid)
- `src/components/section/` — page sections (contact, projects, hackathons, work)
- `src/components/mdx/` — MDX rendering (code-block, media-container)

**Routing**: App Router with `/` (home) and `/blog/[slug]` (dynamic blog posts with pagination via `?page=N`).

**Content pipeline**: MDX files in `content/` → processed by Content Collections (`content-collections.ts`) with remark-gfm and a custom `remarkCodeMeta` plugin → statically generated pages.

**Animation pattern**: Staggered blur-fade entrances using `BLUR_FADE_DELAY = 0.04` with progressive multipliers (`* 3`, `* 4`, etc.).

## Key Conventions

- Path alias: `@/*` maps to `./src/*`
- `cn()` utility in `src/lib/utils.ts` combines clsx + tailwind-merge for class merging
- Image components (`ProjectImage`, `LogoImage`) use error boundaries with fallback placeholders
- Security headers configured in `next.config.mjs` (CSP, X-Frame-Options, etc.)
- Static site — no backend API or database; Vercel-optimized deployment
