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
- **Tailwind CSS v4** with OKLch color variables, dark navy background, theme-yellow (#F59E0B) accent
- **shadcn/ui** (new-york style) for UI primitives, **Magic UI** for animated components
- **next-themes** for dark/light mode (defaults to dark)

## Architecture

**Configuration-driven**: All portfolio content (work, education, projects, skills, certifications, contact) lives in `src/data/resume.tsx` → exports `DATA` object.

**Section order** (in page.tsx): Hero → About → Skills → Experience → Education → Projects → Certifications → Contact

**Component hierarchy**:
- `src/components/ui/` — shadcn/ui primitives + tech stack SVG icons in `ui/svgs/`
- `src/components/magicui/` — animated components (blur-fade, blur-fade-text, dock, flickering-grid)
- `src/components/section/` — page sections (contact, projects, certifications, work)

**Animation pattern**: Staggered blur-fade entrances using `BLUR_FADE_DELAY = 0.04` with progressive multipliers.

## Key Conventions

- Path alias: `@/*` maps to `./src/*`
- `cn()` utility in `src/lib/utils.ts` combines clsx + tailwind-merge
- Project cards use hover-lift effect (`hover:-translate-y-1`)
- FlickeringGrid uses amber color (`rgb(245, 158, 11)`)
- Static site — no backend API or database; Vercel-optimized
