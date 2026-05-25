
# MOVRS UI Frontend

Frontend interface for MOVRS built with React, Vite, and Tailwind CSS.

---

## Live Demo

- Production: https://movrs-ui.vercel.app/
- GitHub Repository: https://github.com/SabaImran2104/movrs-frontend  

> Replace the Vercel link after deployment.

---

## Folder Structure

```bash
MOVRS-UI/
│
└── frontend/
    │
    └── src/
        │
        ├── assets/
        │
        ├── components/
        │   ├── AboutHero.jsx
        │   ├── FeatureCard.jsx
        │   ├── Footer.jsx
        │   ├── GlassCard.jsx
        │   ├── HeroSection.jsx
        │   ├── IndustryCard.jsx
        │   ├── InfoCard.jsx
        │   ├── ScrollToTop.jsx
        │   ├── Sidebar.jsx
        │   └── StatsBar.jsx
        │
        ├── layout/
        │   └── MainLayout.jsx
        │
        ├── pages/
        │   ├── Home.jsx
        │   └── About.jsx
        │
        ├── App.jsx
        └── main.jsx
````

---

## Tech Stack

* React.js
* Vite
* React Router DOM
* Tailwind CSS
* Lucide React
* React Icons

---

## Project Structure Notes

* `components/` → Reusable UI components
* `layout/` → Shared layout structure
* `pages/` → Route-based pages
* `assets/` → Static files (images/icons)

---

## Setup Instructions

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Deployment

This project is deployed using **Vercel**.

To deploy manually:

1. Push code to GitHub
2. Go to [https://vercel.com/new](https://vercel.com/new)
3. Import repository
4. Set root directory to:

   ```
   frontend
   ```
5. Click Deploy

---

## Project Status

Frontend UI is actively being developed with focus on:

* Modern UI/UX design
* Responsive layout
* Component-based architecture
* Smooth navigation experience

```