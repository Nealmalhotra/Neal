'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projectReel } from '@/lib/site';

const easeExpOut = [0.19, 1, 0.22, 1] as const;

export function ProjectReel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projectReel[activeIndex];

  return (
    <section className="grid min-h-screen gap-[var(--indent)] py-[calc(var(--indent)*5)] lg:grid-cols-[5fr_7fr]" id="projects">
      <div className="sticky top-[var(--indent)] h-[calc(100vh-var(--indent)*2)] overflow-hidden bg-ink text-aux noise">
        <motion.div
          className="absolute inset-0 led-overlay"
          key={activeProject.title}
          initial={{ x: '24%', filter: 'blur(12px)' }}
          animate={{ x: '0%', filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: easeExpOut }}
          style={{ backgroundColor: activeProject.accent }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(241,239,235,0.42),transparent_14rem),linear-gradient(120deg,rgba(37,37,38,0.15),rgba(37,37,38,0.88))]" />
        <div className="absolute inset-x-0 top-0 flex justify-between p-[var(--indent)] text-[clamp(2.5rem,8vw,7.6rem)] font-black leading-none tracking-[-0.08em]">
          <span>{activeProject.index}</span>
          <span className="text-aux/55">/ {activeProject.total}</span>
        </div>
        <div className="absolute bottom-[var(--indent)] left-[var(--indent)] right-[var(--indent)]">
          <motion.p
            className="max-w-[16ch] text-[clamp(3rem,9vw,8.5rem)] font-black uppercase leading-[0.78] tracking-[-0.09em]"
            key={`${activeProject.title}-title`}
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.65, ease: easeExpOut }}
          >
            {activeProject.title}
          </motion.p>
        </div>
      </div>

      <div className="flex flex-col justify-end gap-[calc(var(--indent)*1.3)]">
        <div>
          <p className="mb-[calc(var(--indent)*2)] max-w-[44rem] text-[clamp(1.4rem,3vw,3.25rem)] font-black leading-[0.95] tracking-[-0.06em]">
            A project reel shaped after the reference’s numbered media frames: hover a row to swap the preview,
            keep roles and summaries brutally direct.
          </p>
          <div className="border-y border-ink">
            {projectReel.map((project, index) => (
              <button
                className="group grid w-full grid-cols-[3rem_1fr] gap-[var(--indent)] border-b border-ink py-[var(--indent)] text-left last:border-b-0 sm:grid-cols-[4rem_1fr_10rem]"
                key={project.title}
                onFocus={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                type="button"
              >
                <span className="pt-1 text-xs font-black uppercase tracking-[0.16em] text-accent">
                  {project.index} / {project.total}
                </span>
                <span>
                  <span className="block overflow-hidden">
                    <motion.span
                      className="block text-[clamp(2.1rem,6vw,6rem)] font-black uppercase leading-[0.78] tracking-[-0.08em] transition-colors group-hover:text-accent"
                      animate={activeIndex === index ? { x: 10 } : { x: 0 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                    >
                      {project.title}
                    </motion.span>
                  </span>
                  <span className="mt-3 block max-w-[34rem] text-sm font-black uppercase leading-tight tracking-[0.08em] text-ink/65">
                    {project.summary}
                  </span>
                </span>
                <span className="hidden text-right text-xs font-black uppercase leading-[1.25] tracking-[0.12em] text-ink/70 sm:block">
                  {project.type}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-[var(--indent)] md:grid-cols-3">
          {activeProject.role.map((role) => (
            <div className="border border-ink bg-aux p-4 text-xs font-black uppercase leading-[1.2] tracking-[0.12em]" key={role}>
              {role}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
