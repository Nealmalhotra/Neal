import type { ReactNode } from 'react';
import { CustomCursor } from '@/components/site/custom-cursor';
import { siteConfig } from '@/lib/site';

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <div aria-hidden className="line-grid" />
      <div aria-hidden className="top-rect" />
      <div aria-hidden className="bottom-rect" />
      <CustomCursor />
      <div className="fixed bottom-[var(--indent)] left-[var(--indent)] z-30 text-[0.72rem] font-black uppercase tracking-[0.12em] text-accent mix-blend-multiply">
        Loading / live skeleton
      </div>
      <nav className="fixed right-[var(--indent)] top-[var(--indent)] z-30 text-right text-[0.72rem] font-black uppercase leading-[1.15] tracking-[0.14em]">
        <a className="block transition-colors hover:text-accent" href="#top">
          {siteConfig.shortName}
        </a>
        <a className="block transition-colors hover:text-accent" href="#projects">
          Projects
        </a>
        <a className="block transition-colors hover:text-accent" href="#about">
          About
        </a>
        <a className="block transition-colors hover:text-accent" href={`mailto:${siteConfig.email}`}>
          Contact
        </a>
      </nav>
      <main className="relative z-10 min-h-screen px-[var(--indent)]">
        {children}
      </main>
    </>
  );
}
