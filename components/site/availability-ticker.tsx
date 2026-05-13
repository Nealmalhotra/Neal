import { siteConfig } from '@/lib/site';

const tickerItems = [
  'Available for selected projects',
  '2026',
  'Portfolio skeleton',
  'Motion first',
  'Performance aware',
];

export function AvailabilityTicker() {
  const items = [...tickerItems, siteConfig.email, ...tickerItems, siteConfig.email];

  return (
    <div className="overflow-hidden border-y border-ink py-3 text-[clamp(1rem,2vw,2rem)] font-black uppercase leading-none tracking-[-0.04em]">
      <div className="marquee-track gap-8 pr-8">
        {items.map((item, index) => (
          <span className="whitespace-nowrap" key={`${item}-${index}`}>
            - {item}:
          </span>
        ))}
      </div>
    </div>
  );
}
