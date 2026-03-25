# Finestro — Website Prototype

A modern, multi-page website prototype for **Finestro**, a fintech platform. Built with React, Vite, TypeScript, and a rich component library (Radix UI + shadcn/ui).

> Original Figma design: [Finestro Website Prototype](https://www.figma.com/design/PooidC0eQqb00tFPj7NVe3/Finestro-Website-Prototype)

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://reactjs.org/) | UI framework |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Radix UI](https://www.radix-ui.com/) | Accessible UI primitives |
| [Recharts](https://recharts.org/) | Data visualisation (Dashboard) |
| [Lucide React](https://lucide.dev/) | Icon library |
| [Sonner](https://sonner.emilkowal.ski/) | Toast notifications |
| [next-themes](https://github.com/pacocoursey/next-themes) | Light / Dark mode |

---

## 📄 Pages

| Page | Description |
|---|---|
| **Home** | Hero section, feature highlights, CTA |
| **About** | Company story, team, mission |
| **Products** | Product offerings and pricing |
| **Features** | Detailed feature breakdown |
| **Dashboard** | Interactive analytics & data dashboard |
| **Security** | Security practices and compliance info |
| **Contact** | Contact form and support details |

---

## 📁 Project Structure

```
Finestro Website Prototype/
├── index.html
├── vite.config.ts
├── package.json
└── src/
    ├── App.tsx               # Root component & page router
    ├── main.tsx              # Entry point
    ├── index.css             # Global styles
    ├── styles/
    │   └── globals.css
    ├── lib/
    │   └── storage.ts        # localStorage helpers
    ├── components/
    │   ├── Navigation.tsx
    │   ├── Footer.tsx
    │   ├── HomePage.tsx
    │   ├── AboutPage.tsx
    │   ├── ProductsPage.tsx
    │   ├── FeaturesPage.tsx
    │   ├── DashboardPage.tsx
    │   ├── SecurityPage.tsx
    │   ├── ContactPage.tsx
    │   ├── figma/            # Figma-exported helpers
    │   └── ui/               # shadcn/ui component library
    └── guidelines/
        └── Guidelines.md
```

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Krrish1506/Finestro.git
cd Finestro

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

---

## 📝 License

This project is a design prototype. All rights reserved © Finestro.