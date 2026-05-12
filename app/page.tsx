'use client';

import { motion } from 'framer-motion';

const fadeStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const projects = [
  {
    title: 'Selected work',
    description: 'A handful of high-signal projects, experiments, and shipping habits.',
  },
  {
    title: 'About',
    description: 'Builder, operator, and product-minded engineer focused on crisp UX and fast execution.',
  },
  {
    title: 'Contact',
    description: 'Open to internships, freelance work, and ambitious side quests.',
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),_transparent_32%),linear-gradient(180deg,#f5f0e8_0%,#efe5d3_100%)]">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between px-5 py-6 sm:px-8 lg:px-12">
        <motion.div variants={fadeStagger} initial="hidden" animate="show" className="space-y-8">
          <motion.div variants={fadeUp} className="flex items-center justify-between gap-4 border-4 border-black bg-[#fffaf0] px-4 py-3 shadow-brut">
            <div className="font-black uppercase tracking-[0.28em]">Neal</div>
            <div className="text-xs font-bold uppercase tracking-[0.35em]">portfolio skeleton</div>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <motion.div variants={fadeUp} className="neo-card p-6 sm:p-8 lg:p-10">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em]">Neo-brutalist personal site</p>
              <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                Sharp edges. Clean motion.
              </h1>
              <p className="mt-6 max-w-2xl text-base font-medium leading-7 sm:text-lg">
                This initial build sets up the portfolio with a bold visual system, Framer Motion entrances, and a Vercel-friendly Next.js foundation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="#projects" className="neo-button inline-flex items-center">
                  View work
                </motion.a>
                <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="mailto:nealmalhotra2006@gmail.com" className="neo-button inline-flex items-center bg-[#ff9f68]">
                  Contact
                </motion.a>
              </div>
            </motion.div>

            <motion.aside variants={fadeUp} className="neo-card flex flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.3em]">Stack</div>
                <ul className="mt-4 space-y-3 text-sm font-bold uppercase tracking-[0.18em]">
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                  <li>Vercel-ready</li>
                </ul>
              </div>
              <div className="mt-8 border-t-4 border-black pt-4 text-sm font-medium leading-6">
                Inspired by the bold, high-contrast feel of stefanvitasovic.dev with staggered motion and hard shadows.
              </div>
            </motion.aside>
          </div>
        </motion.div>

        <motion.section id="projects" variants={fadeStagger} initial="hidden" animate="show" className="mt-8 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <motion.article key={project.title} variants={fadeUp} whileHover={{ y: -4 }} className="neo-card p-5">
              <h2 className="text-2xl font-black uppercase tracking-[-0.03em]">{project.title}</h2>
              <p className="mt-3 text-sm font-medium leading-6">{project.description}</p>
            </motion.article>
          ))}
        </motion.section>

        <motion.footer variants={fadeUp} initial="hidden" animate="show" className="mt-6 flex flex-col gap-3 border-4 border-black bg-[#fffaf0] px-4 py-3 shadow-brut sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs font-black uppercase tracking-[0.3em]">Initial skeleton live</span>
          <span className="text-xs font-medium uppercase tracking-[0.25em]">Waiting on 2026 design meta before final architecture pass</span>
        </motion.footer>
      </section>
    </main>
  );
}
