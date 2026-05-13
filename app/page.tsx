import { ArtField } from '@/components/site/art-field';
import { AvailabilityTicker } from '@/components/site/availability-ticker';
import { MotionGroup, MotionItem } from '@/components/site/motion-shell';
import { ProjectReel } from '@/components/site/project-reel';
import { SiteShell } from '@/components/site/site-shell';
import { CharReveal, SlicedText } from '@/components/site/sliced-text';
import { NeoButton } from '@/components/ui/neo-button';
import { awards, designTokens, referenceFindings, siteConfig, stackItems } from '@/lib/site';

export default function Page() {
  return (
    <SiteShell>
      <MotionGroup
        as="section"
        className="relative flex min-h-screen flex-col justify-between overflow-hidden pb-[calc(var(--indent)*2)] pt-[calc(var(--indent)*7)]"
        id="top"
      >
        <ArtField />
        <div className="grid gap-[var(--indent)] lg:grid-cols-12">
          <MotionItem className="lg:col-span-7 lg:col-start-1">
            <p className="reveal-mask mb-[var(--indent)] text-xs font-black uppercase leading-none tracking-[0.18em] text-accent">
              <span>Design-driven builder / motion-led interfaces</span>
            </p>
            <h1 className="text-[clamp(4.6rem,16vw,17rem)] font-black lowercase leading-[0.78] tracking-[-0.11em]">
              <SlicedText text="neal" delay={0.08} />
              <SlicedText text="malhotra" delay={0.2} />
            </h1>
          </MotionItem>

          <MotionItem className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="max-w-[31rem] text-[clamp(1.35rem,2.7vw,3rem)] font-black leading-[0.95] tracking-[-0.06em]">
              A sharper portfolio skeleton borrowing Stefan Vitasovic’s strongest motifs: sliced type, sparse chrome,
              numbered media, noisy grids, and motion that feels like a system.
            </p>
          </MotionItem>
        </div>

        <div className="grid items-end gap-[var(--indent)] lg:grid-cols-12">
          <MotionItem className="lg:col-span-3">
            <p className="text-sm font-black uppercase leading-[1.1] tracking-[0.12em]">
              {siteConfig.status}: 2026.
            </p>
          </MotionItem>
          <MotionItem className="lg:col-span-4 lg:col-start-7">
            <div className="flex flex-wrap gap-3">
              <NeoButton href="#projects">Scroll into projects</NeoButton>
              <NeoButton href={`mailto:${siteConfig.email}`} className="bg-accent text-aux">
                Email
              </NeoButton>
            </div>
          </MotionItem>
        </div>
      </MotionGroup>

      <ProjectReel />

      <MotionGroup as="section" className="grid min-h-screen gap-[var(--indent)] py-[calc(var(--indent)*5)] lg:grid-cols-12" id="about">
        <MotionItem className="text-right lg:col-span-4">
          <div className="text-[clamp(5rem,17vw,18rem)] font-black lowercase leading-[0.74] tracking-[-0.12em] text-accent">
            <CharReveal text={siteConfig.shortName.split(' ')[0]} />
            <CharReveal text={siteConfig.shortName.split(' ')[1]} delay={0.1} />
          </div>
        </MotionItem>

        <MotionItem className="lg:col-span-4 lg:col-start-6">
          <p className="text-[clamp(1.25rem,2.2vw,2.5rem)] font-black leading-[1] tracking-[-0.055em]">
            The reference about page works because it feels editorial: huge cropped identity type, dense but direct
            columns, masked reveals, and award/stat lists. This section sets up that same structure for real content.
          </p>
          <div className="mt-[calc(var(--indent)*2)] grid gap-2">
            {stackItems.map((item) => (
              <span className="reveal-mask border-b border-ink pb-2 text-xs font-black uppercase tracking-[0.14em]" key={item}>
                {item}
              </span>
            ))}
          </div>
        </MotionItem>

        <MotionItem className="lg:col-span-3 lg:col-start-10">
          <div className="grid gap-[var(--indent)]">
            {awards.map(([label, value]) => (
              <div className="border-t border-ink pt-3" key={label}>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-ink/55">{label}</p>
                <p className="text-[clamp(2rem,5vw,5.5rem)] font-black uppercase leading-[0.8] tracking-[-0.08em]">{value}</p>
              </div>
            ))}
          </div>
        </MotionItem>
      </MotionGroup>

      <MotionGroup as="section" className="grid gap-[var(--indent)] py-[calc(var(--indent)*4)] lg:grid-cols-12">
        <MotionItem className="lg:col-span-4">
          <h2 className="text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-[0.78] tracking-[-0.09em]">
            Elements borrowed, not copied.
          </h2>
        </MotionItem>
        <MotionItem className="lg:col-span-4 lg:col-start-6">
          <ul className="grid gap-3">
            {referenceFindings.map((finding) => (
              <li className="border-l-4 border-accent bg-aux/70 py-2 pl-4 text-sm font-black leading-[1.15]" key={finding}>
                {finding}
              </li>
            ))}
          </ul>
        </MotionItem>
        <MotionItem className="lg:col-span-2 lg:col-start-11">
          <div className="flex flex-wrap gap-2">
            {designTokens.map((token) => (
              <span className="neo-label" key={token}>
                {token}
              </span>
            ))}
          </div>
        </MotionItem>
      </MotionGroup>

      <AvailabilityTicker />

      <MotionGroup as="footer" className="grid gap-[var(--indent)] py-[calc(var(--indent)*2)] text-xs font-black uppercase tracking-[0.12em] lg:grid-cols-12">
        <MotionItem className="lg:col-span-4">
          <span>Vercel preview compatible / Next.js + Tailwind + Motion</span>
        </MotionItem>
        <MotionItem className="lg:col-span-4 lg:col-start-7">
          <span>Still waiting on the separate 2026 frontend design-meta research before WebGL/page-transition architecture.</span>
        </MotionItem>
      </MotionGroup>
    </SiteShell>
  );
}
