Portfolio (Next.js + Tailwind)

Overview
- Sleek, modern portfolio with a subtle, classy gradient aesthetic.
- Built with Next.js 14 (App Router) and Tailwind CSS 3.
- Data-driven sections so you can personalize quickly.

Getting Started
1) Install deps
   npm install

2) Run dev server
   npm run dev

3) Open in browser
   http://localhost:3000

Personalize
- Update basic info in: src/data/site.ts
- Update projects in: src/data/projects.ts
- Replace resume at: public/resume.pdf (or edit the path in site.ts)
- Adjust colors and gradient in: tailwind.config.js and src/app/globals.css

Production
   npm run build
   npm start

Notes
- Theme toggle uses a simple localStorage + class approach (no external deps).
- The gradient palette is elegant and friendly by default; tweak as you like.

