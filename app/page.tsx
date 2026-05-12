'use client';

import { useEffect } from 'react';
import {
  MotionConfig,
  motion,
  useMotionValue,
  useSpring,
  type Variants,
} from 'framer-motion';

const easeOut = [0.22, 1, 0.36, 1] as const;

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scaleY: 0.82, transformOrigin: 'bottom' },
  show: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const referenceNotes = [
  {
    label: 'Likely stack',
    title: 'Next.js pages, React, Motion, SCSS modules, Three/R3F',
    copy: 'The public source exposes Next.js pages-router chunks and preloaded custom fonts; the Codrops case study confirms React, Framer Motion, SCSS modules, Three.js/R3F, Vercel, and R2-hosted media.',
  },
  {
    label: 'Motion language',
    title: 'Staggered type, masked reveals, page crossfades',
    copy: 'The site leans on Swiss-inspired offset layouts, vertical scale reveals, character-to-word assembly, AnimatePresence crossfades, and geometric background elements that enter in sequence.',
  },
  {
    label: 'Pointer behavior',
    title: 'Cursor-as-interaction layer, kept intentionally light here',
    copy: '14islands guidance points to DOM or WebGL cursor layers driven by pointer events and rAF. This skeleton only uses a small desktop cursor follower so later research can decide whether a full cursor system belongs.',
  },
];

const skeletonPillars = [
  {
    eyebrow: '01 / Visual system',
    title: 'Neo-brutalist shell',
    copy: 'Thick borders, hard offsets, loud color blocks, and assertive type establish a memorable landing surface without prescribing final content architecture.',
    tone: 'bg-acid',
  },
  {
    eyebrow: '02 / Motion',
    title: 'Subtle by default',
    copy: 'Framer Motion handles staggered entrances, card lifts, button presses, and a cursor accent while respecting the user reduced-motion setting.',
    tone: 'bg-sky',
  },
  {
    eyebrow: '03 / Deployment',
    title: 'Vercel-ready baseline',
    copy: 'The project keeps the standard Next.js build path, App Router metadata, and documented preview workflow so Vercel can auto-detect sensible defaults.',
    tone: 'bg-coral',
  },
];

const deploymentChecklist = [
  'Next.js App Router remains a single route until the 2026 design meta lands.',
  'Vercel can use framework detection: install dependencies, run npm run build, and serve the default Next.js output.',
  'No custom output directory, rewrites, server functions, or image domains are required for the initial preview.',
  'README captures the reference analysis and the intentionally deferred IA decisions.',
];

const deferredDecisions = [
  'Project taxonomy',
  'Case-study depth',
  'Content model',
  'WebGL or full cursor layer',
];

function CursorAura() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.35 });

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      x.set(event.clientX - 18);
      y.set(event.clientY - 18);
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-9 w-9 border-4 border-black bg-coral shadow-mini mix-blend-multiply lg:block"
      style={{ x: springX, y: springY }}
    />
  );
}

export default function Page() {
  return (
    <MotionConfig reducedMotion="user">
      <CursorAura />
      <main className="brut-grid min-h-screen overflow-hidden">
        <motion.section
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6 px-5 py-5 sm:px-8 sm:py-8 lg:px-10"
        >
          <motion.header
            variants={rise}
            className="neo-panel flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
          >
            <a
              href="#top"
              className="text-xl font-black uppercase tracking-[0.28em] outline-none focus-visible:ring-4 focus-visible:ring-black"
            >
              Neal
            </a>
            <nav
              aria-label="Primary navigation"
              className="flex flex-wrap items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.22em] sm:justify-end"
            >
              <a className="nav-chip" href="#research">
                Research
              </a>
              <a className="nav-chip" href="#skeleton">
                Skeleton
              </a>
              <a className="nav-chip" href="#deploy">
                Deploy
              </a>
            </nav>
          </motion.header>

          <div id="top" className="grid flex-1 gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.72fr)]">
            <motion.div variants={rise} className="neo-card relative overflow-hidden p-6 sm:p-8 lg:p-10">
              <motion.div
                variants={scaleIn}
                className="absolute -right-10 top-10 hidden h-48 w-48 rotate-6 border-4 border-black bg-acid shadow-brut lg:block"
              />
              <motion.div
                variants={scaleIn}
                className="absolute bottom-8 right-24 hidden h-24 w-24 -rotate-12 border-4 border-black bg-sky shadow-mini lg:block"
              />
              <div className="relative z-10 max-w-4xl">
                <p className="mb-5 inline-flex border-4 border-black bg-coral px-3 py-2 text-xs font-black uppercase tracking-[0.28em] shadow-mini">
                  Initial skeleton / 2026-ready
                </p>
                <h1 className="text-balance text-5xl font-black uppercase leading-[0.85] tracking-[-0.065em] sm:text-7xl lg:text-[7.8rem]">
                  Hard edges. Clean motion. No locked IA.
                </h1>
                <p className="mt-7 max-w-2xl text-lg font-bold leading-8 sm:text-xl">
                  A deployable neo-brutalist portfolio landing page for Neal, tuned for a live preview today and flexible enough to absorb the incoming frontend design meta.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <motion.a
                    href="#skeleton"
                    className="neo-button bg-acid"
                    whileHover={{ x: -3, y: -3 }}
                    whileTap={{ x: 2, y: 2, scale: 0.98 }}
                  >
                    View skeleton
                  </motion.a>
                  <motion.a
                    href="#research"
                    className="neo-button bg-white"
                    whileHover={{ x: -3, y: -3 }}
                    whileTap={{ x: 2, y: 2, scale: 0.98 }}
                  >
                    Reference notes
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.aside variants={rise} className="neo-card flex flex-col justify-between gap-8 bg-black p-5 text-cream sm:p-7">
              <div>
                <p className="kicker text-coral">Current stack</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {['Next.js 15', 'React 19', 'Tailwind CSS', 'Framer Motion'].map((item) => (
                    <motion.div
                      key={item}
                      variants={rise}
                      whileHover={{ y: -4, rotate: item.length % 2 ? 1 : -1 }}
                      className="border-4 border-cream bg-cream px-3 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-black shadow-light"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="border-4 border-cream bg-coral p-4 text-black shadow-light">
                <p className="text-sm font-black uppercase tracking-[0.22em]">Status</p>
                <p className="mt-3 text-3xl font-black uppercase leading-none tracking-[-0.05em]">
                  Live-ready preview shell
                </p>
              </div>
            </motion.aside>
          </div>

          <motion.section
            id="research"
            variants={stagger}
            className="grid gap-4 scroll-mt-6 lg:grid-cols-[0.7fr_1fr]"
          >
            <motion.div variants={rise} className="neo-panel bg-sky p-5 sm:p-7">
              <p className="kicker">Reference analysis</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-5xl">
                What stefanvitasovic.dev suggests.
              </h2>
              <p className="mt-5 text-base font-bold leading-7">
                The public site and Codrops case study point to a motion-first portfolio with minimalist typography, offset geometry, page transitions, and performant interactive media.
              </p>
            </motion.div>
            <div className="grid gap-4 md:grid-cols-3">
              {referenceNotes.map((note) => (
                <motion.article
                  key={note.label}
                  variants={rise}
                  whileHover={{ y: -6, rotate: -0.5 }}
                  className="neo-card bg-cream p-5"
                >
                  <p className="kicker">{note.label}</p>
                  <h3 className="mt-4 text-2xl font-black uppercase leading-none tracking-[-0.04em]">
                    {note.title}
                  </h3>
                  <p className="mt-4 text-sm font-bold leading-6">{note.copy}</p>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section id="skeleton" variants={stagger} className="scroll-mt-6">
            <motion.div variants={rise} className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="kicker">Built now</p>
                <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.05em] sm:text-6xl">
                  Flexible landing system
                </h2>
              </div>
              <p className="max-w-xl text-sm font-black uppercase leading-6 tracking-[0.18em]">
                Data-backed sections, no project taxonomy, no deep route map, and no premature CMS/content model.
              </p>
            </motion.div>
            <div className="grid gap-4 lg:grid-cols-3">
              {skeletonPillars.map((pillar) => (
                <motion.article
                  key={pillar.eyebrow}
                  variants={rise}
                  whileHover={{ x: -5, y: -5 }}
                  whileTap={{ x: 2, y: 2 }}
                  className={`neo-card ${pillar.tone} p-6`}
                >
                  <p className="kicker">{pillar.eyebrow}</p>
                  <h3 className="mt-5 text-4xl font-black uppercase leading-[0.88] tracking-[-0.055em]">
                    {pillar.title}
                  </h3>
                  <p className="mt-5 text-base font-bold leading-7">{pillar.copy}</p>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="deploy"
            variants={stagger}
            className="grid gap-4 scroll-mt-6 lg:grid-cols-[1fr_0.72fr]"
          >
            <motion.div variants={rise} className="neo-card bg-cream p-5 sm:p-7">
              <p className="kicker">Vercel preview workflow</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-5xl">
                Deployable without custom infrastructure.
              </h2>
              <ul className="mt-6 grid gap-3">
                {deploymentChecklist.map((item) => (
                  <motion.li
                    key={item}
                    variants={rise}
                    className="border-4 border-black bg-white p-4 text-sm font-black uppercase leading-6 tracking-[0.12em] shadow-mini"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={rise} className="neo-card bg-black p-5 text-cream sm:p-7">
              <p className="kicker text-acid">Deferred until meta</p>
              <div className="mt-6 grid gap-3">
                {deferredDecisions.map((item, index) => (
                  <motion.div
                    key={item}
                    variants={rise}
                    whileHover={{ x: 6 }}
                    className="flex items-center justify-between border-4 border-cream bg-cream px-4 py-4 text-black shadow-light"
                  >
                    <span className="text-sm font-black uppercase tracking-[0.18em]">{item}</span>
                    <span className="text-2xl font-black">{String(index + 1).padStart(2, '0')}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          <motion.footer
            variants={rise}
            className="neo-panel flex flex-col gap-3 bg-coral px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
          >
            <span className="text-xs font-black uppercase tracking-[0.28em]">
              Initial skeleton is live-ready
            </span>
            <span className="text-xs font-black uppercase tracking-[0.22em]">
              Future IA waits for the 2026 frontend design meta
            </span>
          </motion.footer>
        </motion.section>
      </main>
    </MotionConfig>
  );
}
