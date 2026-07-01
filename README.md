# CodeCraft UI

CodeCraft UI is a production-focused Next.js application for premium React, TypeScript, and Tailwind CSS interface systems. It was migrated from a Vite + React Router component demo into an App Router site with reusable sections, typed content, SEO routes, and brand-driven design.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide React icons
- Next metadata routes for sitemap, robots, manifest, Open Graph, and Twitter images

## Routes

- `/` - Homepage and product overview
- `/hero` - Migrated hero-section component library
- `/about` - Company story, values, and migration timeline
- `/pricing` - Project engagement options
- `/cta` - Conversion CTA patterns and examples
- `/faqs` - FAQ page with structured data
- `/contact` - Contact page with mailto-based project form

## Scripts

```bash
npm run dev
npm run typecheck
npm run lint
npm run build
npm run start
```

## Local Development

Install dependencies:

```bash
npm install
```

If the local machine has registry certificate-chain issues, use the scoped install workaround that was required during migration:

```bash
npm install --strict-ssl=false --legacy-peer-deps --no-audit --no-fund --progress=false
```

Start the development server:

```bash
npm run dev
```

## Production Checks

Before shipping, run:

```bash
npm run typecheck
npm run lint
npm run build
```

The project requirements and handoff state are tracked in `../PROJECT_REQUIREMENTS.md`.
