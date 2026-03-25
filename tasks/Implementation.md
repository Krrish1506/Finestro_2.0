# Finestro — Premium Visual Overhaul Implementation Plan

Make the Finestro website feel like a world-class fintech product (Stripe / Linear / Mercury tier).
Stack: **React 18 + TypeScript + Tailwind CSS v4** (tokens are CSS custom properties — no `tailwind.config.ts`).

---

## ⚠️ Important Notes

- **Tailwind v4** is used here — all custom design tokens go into `src/styles/globals.css` as CSS variables in `:root`. There is **no** `tailwind.config.ts` to modify.
- PowerShell on Windows doesn't support `&&` — run commands individually.
- Dev server runs on port **3000** (`vite.config.ts`).

---

## Phase 1 — Install Dependency

```bash
npm install framer-motion
```

---

## Phase 2 — Global Styles & Design Tokens

### `src/styles/globals.css`
- Import **Inter** font from Google Fonts
- Add CSS custom properties:
  - `--brand-dark: #0F172A`
  - `--brand-accent: #6366F1`
- Add `.glass` utility class: `background: rgba(255,255,255,0.7)`, `backdrop-filter: blur(24px)`, `border: 1px solid rgba(148,163,184,0.3)`
- Add ambient shadow utilities:
  ```css
  .shadow-ambient {
    box-shadow:
      0 1px 2px rgba(15,23,42,0.04),
      0 4px 12px rgba(15,23,42,0.06),
      0 12px 32px rgba(15,23,42,0.06);
  }
  .shadow-ambient-lg {
    box-shadow:
      0 2px 4px rgba(15,23,42,0.05),
      0 8px 24px rgba(15,23,42,0.10),
      0 24px 48px rgba(15,23,42,0.08);
  }
  ```

### `src/index.css`
- Override `--font-sans` to `'Inter', ui-sans-serif, system-ui, sans-serif`
- Override `--background` to `#F8FAFC` (off-white — makes glass cards pop)

---

## Phase 3 — UI Primitive Components

### `src/components/ui/card.tsx`
- Apply glassmorphism via `.glass` class
- Change `rounded-xl` → `rounded-2xl`
- Add `.shadow-ambient` for floating depth effect

### `src/components/ui/badge.tsx`
- Keep existing variants (`default`, `secondary`, `destructive`, `outline`)
- Add new status variants:
  - `active` — green pastel bg (`#DCFCE7`) + dark green text + pulsing green dot
  - `pending` — amber pastel bg (`#FEF9C3`) + dark amber text + dot
  - `inactive` — slate pastel bg (`#F1F5F9`) + slate text + dot
- Base style: `rounded-full` (pill shape), high-contrast text

### `src/components/ui/button.tsx`
- `default` variant: linear gradient `from-indigo-600 to-violet-600`
- Add `hover:scale-[1.02]` + `hover:shadow-ambient` 
- `transition-all duration-200` for smooth feel

### `src/components/ui/table.tsx`
- Remove heavy `border-b` from `TableHeader` / `TableBody`
- `TableRow`: even children → `bg-slate-50/50`; hover → `border-l-2 border-indigo-500 bg-indigo-50/40`
- `TableHead`: `text-slate-500 text-xs uppercase tracking-wider font-semibold`
- `TableCell`: `py-3 px-4` for more breathing room

---

## Phase 4 — Layout Components

### `src/components/Navigation.tsx`
- Apply glassmorphism: `bg-white/70 backdrop-blur-xl border-b border-slate-200/50 sticky top-0 z-50`
- Active nav item: **pill shape** — `bg-indigo-50 text-indigo-600 rounded-full px-4 py-1.5 shadow-sm`
- Logo: gradient text — `text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600`

### `src/App.tsx`
- Import `AnimatePresence` and `motion` from `framer-motion`
- Wrap `renderPage()` output in:
  ```tsx
  <AnimatePresence mode="wait">
    <motion.div
      key={currentPage}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      {renderPage()}
    </motion.div>
  </AnimatePresence>
  ```
- Set `<main>` background to `bg-[#F8FAFC]`

---

## Phase 5 — Page Enhancements

### `src/components/DashboardPage.tsx`
- Wrap top-level stats grid in a **gradient-border** container:
  ```tsx
  <div className="p-px rounded-2xl bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-pink-500/20">
    <div className="bg-[#F8FAFC] rounded-2xl p-6">
      {/* stats grid */}
    </div>
  </div>
  ```
- Monthly Revenue card + Client Count card: add decorative blurred SVG sparkline in `absolute` position as a background watermark

### `src/components/ProductsPage.tsx`
- Each insurance product card:
  - On hover: reveal a `Learn More →` arrow with `translate-x` slide-in animation
  - `hover:shadow-ambient-lg` + `hover:scale-[1.015]` + `transition-all duration-300`
  - Arrow uses `opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300`

---

## Verification Checklist

| # | Check | Expected |
|---|---|---|
| 1 | Navigation | Frosted glass bar — blur visible behind page content when scrolling |
| 2 | Active nav item | Rounded-full indigo pill, not a block highlight |
| 3 | Page transitions | 0.4s smooth fade + slide-up between pages |
| 4 | Buttons | Scale up + shadow deepens on hover |
| 5 | Badges | Pastel colors with pulsing/static dot icon |
| 6 | Table rows | Alternating subtle bg, indigo left-border on hover |
| 7 | Cards | Glass appearance (blur), ambient floating shadow |
| 8 | Dashboard stats | Gradient border wrapper around top metrics |
| 9 | Product cards | "Learn More →" arrow revealed on hover |
| 10 | Typography | Inter font loaded, clean hierarchy across all pages |
