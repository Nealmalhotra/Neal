# Neal Portfolio

A neo-brutalist personal portfolio skeleton built with Next.js, Tailwind CSS, and Framer Motion.

The goal of this branch is a polished, deployable initial landing page while keeping deeper information architecture decisions open until the 2026 frontend design meta arrives.

## What is live in this skeleton

- Bold neo-brutalist landing page with thick black borders, hard shadows, strong spacing, and high-contrast color blocks.
- Subtle Framer Motion entrance staggers, card hover lifts, button press states, and a lightweight desktop cursor follower.
- Data-driven page sections for research notes, skeleton pillars, deployment status, and deferred decisions.
- App Router metadata and standard Next.js scripts for straightforward Vercel previews.

## Reference-site analysis: stefanvitasovic.dev

Public page source and the Codrops case study for the 2025 portfolio suggest the site uses:

- **Stack:** Next.js with the pages router, React, Framer Motion/Motion, SCSS modules, Three.js, React Three Fiber, Vercel hosting, and Cloudflare R2/CDN for media delivery.
- **Animation patterns:** masked typography/character assembly, staggered geometric reveals, page-level crossfades through `AnimatePresence`, smooth scroll-driven transitions, WebGL video/shader effects, and repeated motion motifs.
- **Hover and pointer behavior:** interactive media and navigation states appear to be motion-driven rather than simple CSS-only states. Related 14islands guidance points to custom cursor implementations driven by pointer events plus `requestAnimationFrame`, using either DOM elements for lighter cursors or WebGL for richer effects.
- **Skeleton response:** this repo borrows the staggered entrances, hard layout rhythm, hover feedback, and small cursor accent, but intentionally does not add WebGL, a custom scroll engine, or deep page transitions yet.

## Run locally

```bash
npm install
npm run dev
```

## Verify

```bash
npm run typecheck
npm run build
```

## Vercel deployment and preview notes

Vercel should auto-detect this as a Next.js project and use the standard defaults:

- Install command: `npm install`
- Build command: `npm run build` (which runs `next build`)
- Output directory: Next.js default
- Development command: `next dev --port $PORT`

No custom `vercel.json`, output export, rewrites, serverless functions, or image domains are required for this initial preview. Connect the repo/branch in Vercel to receive automatic preview deployments for pull requests.

## Deferred until 2026 meta guidance

- Final page map and navigation depth
- Project/case-study taxonomy
- Content model or CMS integration
- Whether to add WebGL, smooth scrolling, or a full custom cursor layer
