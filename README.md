# Daniel Santiago Guzman — Portfolio

Personal portfolio website showcasing analytics projects, work experience, and skills. Built for recruiters at top tech companies.

## Tech Stack

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 with OKLch color system
- **UI Components:** shadcn/ui + Magic UI (blur-fade, dock, flickering-grid)
- **Animations:** motion library for staggered entrance effects
- **Deployment:** Vercel-optimized static site

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/data/resume.tsx` — All portfolio content (single source of truth)
- `src/app/page.tsx` — Main page layout and section ordering
- `src/components/section/` — Page section components
- `src/components/magicui/` — Animated UI components
- `src/components/ui/` — shadcn/ui primitives

## Build

```bash
pnpm build
pnpm start
```

## License

MIT
