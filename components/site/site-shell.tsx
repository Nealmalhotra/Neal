import type { ReactNode } from 'react';
import { CustomCursor } from '@/components/site/custom-cursor';
import { siteConfig } from '@/lib/site';

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <CustomCursor />
      <main className="min-h-screen">
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
          <header className="neo-card z-10 mb-5 flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <a href="#top" className="font-black uppercase tracking-[0.28em]">
              {siteConfig.name}
            </a>
            <div className="flex flex-wrap gap-2">
              <span className="neo-label bg-acid">{siteConfig.status}</span>
              <span className="neo-label bg-paper">Research pending</span>
            </div>
          </header>
          {children}
        </div>
      </main>
    </>
  );
}
