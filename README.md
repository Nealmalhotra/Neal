# Neal Portfolio

Adaptable neo-brutalist portfolio skeleton built with Next.js, Tailwind CSS, TypeScript, and Framer Motion.

## Current intent

This is an initial live skeleton, not the final architecture pass. The component boundaries are intentionally small so the site can absorb the separate 2026 frontend design-meta research findings before deeper decisions around content architecture, WebGL/media, scrolling systems, or page transitions.

## Reference analysis

- Direct fetch of `stefanvitasovic.dev` returned a minimalist creative-developer landing surface with a loading state and strong motion/interactivity positioning.
- The public Codrops case study identifies the reference stack as Next.js, Framer Motion/Motion, SCSS modules, Three.js/React Three Fiber, Vercel, and Cloudflare R2.
- Interaction patterns to keep in view: staggered entrances, hover/tap feedback, custom cursor polish, typography assembly, page transitions, smooth/infinite scrolling, and media-led project reveals.
- This scaffold implements only the low-risk baseline: staggered sections, hover effects, a custom cursor, reusable cards/buttons, and a loud neo-brutalist visual system.

## Run locally

```bash
npm install
npm run dev
```

## Checks

```bash
npm run typecheck
npm run build
```

## Vercel

The project uses the standard Next.js build flow and includes a Node engine constraint compatible with modern Vercel runtimes:

- Build command: `npm run build`
- Install command: `npm install`
- Output: managed by Next.js/Vercel

## Next steps after research meta

1. Confirm the final information architecture and case-study model.
2. Decide whether WebGL/video, advanced scroll orchestration, or page transitions are worth the complexity.
3. Replace placeholder content with real projects, proof points, and contact/social links.
4. Tune accessibility and reduced-motion behavior once interaction depth is finalized.
