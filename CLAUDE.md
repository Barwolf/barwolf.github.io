# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server (localhost:5173)
npm run build      # Type-check (tsc -b) then build for production
npm run lint       # Run ESLint
npm run preview    # Preview the production build locally
```

There are no tests configured for this project.

## Architecture

Personal portfolio site for Jeremiah Lillion built with React 19 + Vite + TypeScript + Tailwind CSS. Uses `motion/react` (Framer Motion) for animations and `react-router-dom` v7 for routing.

**Routes** (defined in `src/App.tsx`):
- `/` — `Home` page: Hero, Book, Speech, Education, Achievements, Contact sections
- `/tech` — `Tech` page: tech portfolio with projects and skills
- `/resume` — `Resume` page: full resume layout

**Navigation** (`src/components/Nav.tsx`): The nav handles two link types — standard React Router `<Link>` for page routes (`/tech`, `/resume`) and anchor-scroll logic for `/#section` links. When navigating to an anchor from a non-home route, it uses `navigate("/")` then a `setTimeout` to scroll after the route change.

`ScrollToTop` (in `src/App.tsx`) resets scroll position on every route change via a `useEffect` watching `pathname`.

**Data co-location**: Each page file (`Home.tsx`, `Tech.tsx`, `Resume.tsx`) contains its own data arrays (projects, experience, skills, etc.) defined at the top of the file. There is no shared data layer.

**FadeIn component**: A local `motion.div` wrapper with `whileInView` and `viewport={{ once: true }}` is duplicated in each page file rather than shared.

## Styling

Tailwind CSS with a custom warm beige/cream theme defined in `src/index.css` via CSS custom properties (HSL values on `:root`). Design tokens used: `bg-background`, `text-foreground`, `bg-card`, `border-border`, `text-muted-foreground`, `bg-muted`, `bg-primary`, `text-primary-foreground`.

Typography: Inter (sans-serif, default body) and Playfair Display (serif, used for `h1`) loaded from Google Fonts. Heading styles (`h1`–`h4`) are globally defined in `@layer base`.

## Static Assets

Public images (logos, photos) live in `public/` and are referenced as root-relative paths (e.g., `/capital_group.jpg`, `/logos/uci_logo.png`). These files are not tracked in the repo listing but must exist at runtime.
