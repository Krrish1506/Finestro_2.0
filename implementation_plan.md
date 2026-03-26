# Finestro Executive Polish — Implementation Plan

## 1. Navigation / Header (`Navigation.tsx`)
- **Scroll-shrink**: `useEffect` scroll listener — header padding shrinks `24px → 12px` when `scrollY > 20` for a premium floating pill feel
- **Get Started button** → full-pill shape (`border-radius: 9999px`) + blue outer glow (`box-shadow: 0 0 15px rgba(59,130,246,0.45)`)

## 2. Footer (`Footer.tsx`)
- **Background** → `#0F172A` Deep Executive Navy
- **4 columns**: Brand | Product | Company | Resources
- **Divider** → semi-transparent `rgba(100,116,139,0.3)` instead of solid border
- **Social icons** → circular glass containers with blue hover glow

## 3. Auth Page (`AuthPage.tsx`) — Full Overhaul
- **Split-screen**: Left = fintech gradient art panel; Right = clean white form
- **Inputs** → full-pill, soft `ring-2 ring-blue-500/30` focus ring
- **Google button** → official multi-color G SVG + `onClick={handleGoogleAuth}` placeholder
- Removes Card wrapper; cleaner flat layout

## Color System (60-30-10)
| Role | Color |
|------|-------|
| 60% Background | #F8FAFC |
| 30% Container | #0F172A |
| 10% Accent | #3B82F6 |

> `vite.config.ts` untouched — `target: esnext` preserved.
