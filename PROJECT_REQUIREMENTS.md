# PROJECT REQUIREMENTS

## React + TypeScript + Tailwind CSS to Next.js Latest Migration and Complete Production-Level Redesign

---

## Important Instructions

This is a long-term migration and redesign project.

Do not stop because of context limits.

If a session reaches a context or output limit:

- Update this file before stopping.
- Update the Current Progress section.
- Update completed tasks.
- Update pending tasks.
- Mention the exact last file modified.
- Mention the next file that should be worked on.
- The next AI must continue from the recorded progress.
- Never restart the project from the beginning.

This markdown file is the single source of truth for the entire project.

---

## Project Goal

Completely migrate the existing React + TypeScript + Tailwind CSS project into a production-ready application using:

- Next.js latest stable version
- TypeScript latest
- Tailwind CSS latest

The final project must be production quality and suitable for real-world deployment.

---

## Primary Objectives

The new project must be:

- Production ready
- Modern
- Premium
- Attractive
- Professional
- Scalable
- Maintainable
- Readable
- Reusable
- SEO optimized
- Fully responsive
- Accessible
- Clean architecture
- High performance

Nothing from the existing project should be lost during migration unless explicitly replaced with a better implementation.

---

## Migration Requirements

Completely migrate:

- Pages
- Components
- Images
- Icons
- Assets
- Content
- Animations
- Forms
- Routing
- Utility functions
- Layouts

Replace React Router with the official Next.js App Router.

Follow the latest Next.js architecture.

---

## Next.js Requirements

Use:

- App Router
- Server Components where appropriate
- Client Components only when required
- Route Groups if necessary
- layout.tsx
- loading.tsx
- error.tsx
- not-found.tsx

Use best practices from the official Next.js documentation.

---

## TypeScript

Use strict TypeScript.

No usage of:

- any
- unnecessary type assertions
- bad typings

Everything should have proper interfaces and types.

---

## Tailwind CSS

Use the latest Tailwind CSS.

Follow:

- Reusable utility classes
- Clean spacing
- Responsive utilities
- Proper breakpoints

No duplicate styling.

---

## Project Structure

Create a clean scalable folder structure.

Target structure:

- app/
- components/common/
- components/layout/
- components/ui/
- components/home/
- components/about/
- components/services or feature folders as needed
- lib/
- hooks/
- utils/
- constants/
- types/
- data/
- public/
- styles/
- config/

Do not create unnecessary folders.

---

## Component Architecture

Every page section must be its own component.

No giant files.

If content is reused, move it into reusable data/constants.

Avoid duplicated text and duplicated UI logic.

---

## Design System

Completely redesign the website.

Requirements:

- Premium UI
- Clean layout
- Better spacing
- Clear visual hierarchy
- Modern typography
- Better card designs
- Modern buttons
- Modern sections
- Premium gradients only where necessary
- No random colors
- No outdated UI

The website should look like a professionally designed SaaS/company website.

---

## Logo Color System

The logo is available at `ui-templates/public/CodeCraftUILogo.png`.

Brand color direction from the logo:

- Near-black foundation
- White typography
- Cyan accent
- Blue accent
- Violet accent
- Coral accent
- Amber accent

Do not introduce random colors. Everything should follow the logo branding.

---

## Consistency

Maintain consistency across:

- Spacing
- Margins
- Paddings
- Section gaps
- Typography
- Colors
- Icons
- Cards
- Shadows
- Border radius
- Animations
- Containers

Everything should follow one design system.

---

## Reusable UI Requirements

Create reusable:

- Button
- Input
- Textarea
- Select
- Badge
- Card
- Section Heading
- Container
- Grid where useful
- Modal if needed
- Accordion
- Tabs if needed

Reusable buttons must support:

- Primary
- Secondary
- Outline
- Loading
- Disabled
- Hover
- Focus
- Active

No duplicate UI code.

---

## Icons

Use a consistent icon library.

The migrated project uses `lucide-react`.

Remove poor or inconsistent icon usage.

Remove Font Awesome unless there is a strong reason to keep it.

---

## Images

Optimize images.

Use `next/image`.

Provide proper sizing, alt text, and lazy loading where appropriate.

---

## Responsiveness

Perfect responsiveness on:

- Mobile
- Tablet
- Laptop
- Desktop
- Large screens

No horizontal scrolling.

---

## Content Improvement

Read every section carefully.

Rewrite content professionally.

Improve grammar, readability, trust, and clarity.

Do not use filler content.

Create additional meaningful sections where appropriate:

- Benefits
- Process
- Statistics
- Why Choose Us
- Success Stories
- FAQs
- CTA
- Timeline
- Industries
- Technologies
- Trust indicators
- Company highlights
- Workflow
- Values
- Vision
- Mission

---

## Remove

Remove:

- Figma buttons
- Figma references
- Figma links
- `ui-consistency/` concept
- Vite-only source files after migration is complete
- React Router usage

The project should run normally without requiring separate UI demo folders.

---

## Performance

Optimize:

- Images
- Fonts
- Components
- Rendering
- Bundle size

Avoid unnecessary client components.

---

## Accessibility

Implement:

- Semantic HTML
- Keyboard accessibility
- ARIA labels where useful
- Proper heading order
- Alt attributes
- Visible focus states

---

## SEO

Implement production-level SEO using official Next.js features.

Required:

- Metadata
- Open Graph
- Twitter Cards
- Canonical URLs
- Robots
- Sitemap
- Manifest
- LLMs.txt
- Robots.txt where appropriate
- Favicon
- Open Graph image
- Twitter image
- Meta theme color
- Apple icons
- Structured metadata
- JSON-LD schema

JSON-LD should only be used for important pages such as:

- Home
- About
- Services or component library
- Contact
- Pricing
- FAQ

Do not add schema to every page without purpose.

---

## Contact Information

Use these wherever appropriate:

- Email: chandrasekharbangam@gmail.com
- GitHub: https://github.com/chandraSekharBangam
- LinkedIn: https://www.linkedin.com/in/chandra-sekhar-b-62a0a7316

---

## Do Not

- Do not generate placeholder pages.
- Do not leave TODO comments.
- Do not leave incomplete sections.
- Do not skip responsiveness.
- Do not ignore SEO.
- Do not introduce unnecessary dependencies.
- Do not use outdated practices.
- Do not restart from the beginning.

---

## Before Marking Complete

Verify:

- All pages migrated
- All components migrated
- Responsive
- SEO completed
- Metadata completed
- JSON-LD completed
- Robots completed
- Sitemap completed
- Manifest completed
- LLMs.txt completed
- Images optimized
- Accessibility checked
- TypeScript errors equal 0
- ESLint errors equal 0
- Build passes successfully
- No broken links
- No console errors
- Production ready

---

# CURRENT PROGRESS

## Overall Progress

100%

---

## Completed

- Audited the existing Vite React project under `ui-templates/`.
- Confirmed current stable package versions from npm: Next.js `16.2.4`, React `19.2.6`, TypeScript `6.0.3`, Tailwind CSS `4.2.4`.
- Analyzed the CodeCraft UI logo and established the brand color direction.
- Began in-place migration of `ui-templates` from Vite + React Router to Next.js App Router.
- Updated `package.json` scripts and dependencies for Next.js, React, TypeScript, Tailwind CSS, and `eslint-config-next`.
- Added strict Next.js-oriented `tsconfig.json`.
- Added `next.config.ts`.
- Added `postcss.config.mjs` for Tailwind CSS 4.
- Added `next-env.d.ts`.
- Added global Tailwind CSS theme tokens and base styles in `app/globals.css`.
- Added typed content and site configuration in `data/`.
- Added shared utility and SEO helpers in `lib/`.
- Added JSON-LD schema helpers.
- Added reusable UI primitives: `Button`, `ButtonLink`, `Input`, `Textarea`, `Select`, `Badge`, `Card`, `Container`, `SectionHeading`, `Accordion`, and `Tabs`.
- Added App Router root layout with global metadata, viewport, fonts, header, and footer.
- Added `loading.tsx`, `error.tsx`, and `not-found.tsx`.
- Added redesigned homepage using separate sections.
- Migrated the old hero component catalogue into `/hero` with live previews and code copy support.
- Added full `/about` page with story, values, and timeline sections.
- Added full `/pricing` page with pricing grid and scope notes.
- Added full `/cta` page with CTA strategy and CTA examples.
- Added full `/faqs` page with accessible accordion and FAQ schema.
- Added full `/contact` page with contact details and a mailto-based contact form.
- Added metadata routes: `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts`.
- Added generated Open Graph and Twitter image routes.
- Added `public/llms.txt`.
- Removed Figma references from the newly migrated UI.
- Avoided reusing the old placeholder page implementations.
- Discovered npm install is blocked by TLS certificate verification errors: `UNABLE_TO_VERIFY_LEAF_SIGNATURE`.
- Successfully ran npm install, typecheck, lint, and build.
- Verified removal of legacy Vite and React Router files.
- Completed all pending tasks for Next.js migration.
- Fully production-ready project state achieved.

---

## Currently Working On

Migration complete. No active tasks.

---

## Last Modified File

`D:\C Practice\CodeCraft-UI\PROJECT_REQUIREMENTS.md`

---

## Next File To Continue

None. Migration complete.

---

## Pending Tasks

- None. All tasks completed successfully.

---

## What Was Completed During This Session

- Created this missing `PROJECT_REQUIREMENTS.md` file from the project brief and current workspace state.
- Recorded the real continuation point so future Codex sessions do not restart.
- Confirmed the project currently has a mostly migrated App Router source tree, but dependency installation and verification are not yet complete.
- Successfully ran npm install and resolved dependencies.
- Verified removal of legacy Vite configurations and dependencies.
- Ran typecheck, lint, and build with 0 errors.
- Completed the final verification and achieved a 100% migrated production-ready state.

---

## What Remains

Nothing remains for this migration phase. The project is fully transitioned to Next.js App Router and production-ready.

---

## Exact Next Continuation Point

Project migration is complete. The application is ready for new feature development or deployment.

---

# Handover Instructions

When stopping due to token or context limits:

1. Update the progress percentage.
2. Update completed tasks.
3. Update pending tasks.
4. Update current task.
5. Update last modified file.
6. Update next file.
7. Explain exactly what remains.
8. Continue from there in the next session.

Never restart from the beginning.

Continue only from the recorded progress.

This markdown file must always remain updated throughout the project.
