# TODO — Finestro Visual Overhaul

## Phase 1: Foundation
- [/] Create tasks/lessons.md
- [/] Create tasks/todo.md (this file)
- [/] Write implementation_plan.md

## Phase 2: Global Styles
- [x] Install Framer Motion (`npm install framer-motion`)
- [x] Update `src/styles/globals.css` — add Inter font import, CSS variables for brand palette, ambient shadow classes, glassmorphism utilities
- [x] Update `:root` in `src/index.css` — wire new CSS vars for background, font

## Phase 3: UI Primitive Components
- [x] Update `src/components/ui/card.tsx` — glassmorphism + ambient shadow
- [x] Update `src/components/ui/badge.tsx` — pastel soft variants with dot icons, preserve existing variants
- [x] Update `src/components/ui/button.tsx` — gradient fill, scale-on-hover, shadow transition
- [x] Update `src/components/ui/table.tsx` — no heavy borders, alternating rows, indigo hover highlight

## Phase 4: Layout Components
- [x] Update `src/components/Navigation.tsx` — glassmorphism nav, pill active state
- [x] Update `src/App.tsx` — off-white background, Framer Motion page transitions

## Phase 5: Page Enhancements
- [x] Update `src/components/DashboardPage.tsx` — gradient-bordered stats container, sparkline effect on revenue/client cards
- [x] Update `src/components/ProductsPage.tsx` — hover-reveal arrow on features, category glassmorphisme' arrow, deepened shadow

## Review
- [x] Fixed versioned imports in `src/components/ui/*.tsx` to resolve lint errors and build warnings (removing `@version` suffixes from Radix, CVA, Vaul, and Lucide imports).
