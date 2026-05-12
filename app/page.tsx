import { MotionArticle, MotionGroup, MotionItem } from '@/components/site/motion-shell';
import { SiteShell } from '@/components/site/site-shell';
import { NeoButton } from '@/components/ui/neo-button';
import { NeoCard } from '@/components/ui/neo-card';
import { designTokens, featuredTiles, referenceFindings, siteConfig, stackItems } from '@/lib/site';

export default function Page() {
  return (
    <SiteShell>
      <MotionGroup as="section" className="grid flex-1 gap-5 lg:grid-cols-[1.35fr_0.65fr]" id="top">
        <MotionItem variant="slam" className="min-h-[520px]">
          <NeoCard className="flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10" accent="bg-acid">
            <div>
              <p className="neo-label bg-cyan">Neo-brutalist personal site</p>
              <h1 className="mt-7 max-w-5xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.08em] sm:text-7xl lg:text-[8.6rem]">
                Sharp edges. Human signal.
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-bold leading-8 sm:text-xl">
                A live, adaptable portfolio foundation for {siteConfig.name}: loud typography, hard borders,
                staggered motion, hover feedback, and a custom cursor layer inspired by motion-led creative portfolios.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <NeoButton href="#work">View modules</NeoButton>
              <NeoButton href={`mailto:${siteConfig.email}`} className="bg-coral">
                Start a thread
              </NeoButton>
            </div>
          </NeoCard>
        </MotionItem>

        <MotionItem className="grid gap-5">
          <NeoCard className="p-5 sm:p-6" accent="bg-coral">
            <p className="neo-label bg-paper">Stack</p>
            <ul className="mt-5 grid gap-3">
              {stackItems.map((item) => (
                <li key={item} className="border-b-[3px] border-ink pb-2 text-xl font-black uppercase tracking-[-0.04em]">
                  {item}
                </li>
              ))}
            </ul>
          </NeoCard>

          <NeoCard className="p-5 sm:p-6" accent="bg-cyan">
            <p className="neo-label bg-acid">Architecture note</p>
            <p className="mt-5 text-base font-bold leading-7">
              This is intentionally a flexible skeleton. The final information architecture, media strategy, and
              interaction depth should wait for the separate 2026 frontend design-meta research findings.
            </p>
          </NeoCard>
        </MotionItem>
      </MotionGroup>

      <MotionGroup as="section" className="mt-5 grid gap-5 lg:grid-cols-3" id="work">
        {featuredTiles.map((tile) => (
          <MotionArticle
            key={tile.title}
            whileHover={{ y: -8, rotate: -0.35 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="neo-card min-h-[260px] p-5 sm:p-6"
          >
            <span className={`neo-label ${tile.accent}`}>{tile.eyebrow}</span>
            <h2 className="mt-8 text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em]">{tile.title}</h2>
            <p className="mt-5 text-base font-bold leading-7">{tile.description}</p>
          </MotionArticle>
        ))}
      </MotionGroup>

      <MotionGroup as="section" className="mt-5 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <MotionItem>
          <NeoCard className="h-full p-5 sm:p-6" accent="bg-acid">
            <p className="neo-label bg-paper">UI system</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {designTokens.map((token) => (
                <span key={token} className="neo-label bg-bone">
                  {token}
                </span>
              ))}
            </div>
          </NeoCard>
        </MotionItem>

        <MotionItem>
          <NeoCard className="p-5 sm:p-6" accent="bg-coral">
            <p className="neo-label bg-cyan">Reference assumptions</p>
            <ul className="mt-5 grid gap-4 text-sm font-bold leading-6 sm:text-base">
              {referenceFindings.map((finding) => (
                <li key={finding} className="border-l-[6px] border-ink bg-paper px-4 py-3 shadow-[5px_5px_0_0_#050505]">
                  {finding}
                </li>
              ))}
            </ul>
          </NeoCard>
        </MotionItem>
      </MotionGroup>

      <MotionGroup
        as="footer"
        className="neo-card mt-5 flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <MotionItem>
          <span className="text-xs font-black uppercase tracking-[0.28em]">Vercel preview compatible</span>
        </MotionItem>
        <MotionItem>
          <span className="text-xs font-bold uppercase tracking-[0.22em]">Next step: fold in 2026 research meta</span>
        </MotionItem>
      </MotionGroup>
    </SiteShell>
  );
}
