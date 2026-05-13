'use client';

import { motion } from 'framer-motion';
import { artBlocks } from '@/lib/site';

const easeExpOut = [0.19, 1, 0.22, 1] as const;

export function ArtField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {artBlocks.map((block, index) => (
        <motion.div
          className="absolute h-[clamp(20px,4vw,78px)] origin-top noise"
          key={`${block.top}-${block.left}`}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: block.opacity }}
          transition={{ delay: 0.18 + index * 0.035, duration: 0.9, ease: easeExpOut }}
          style={{
            top: block.top,
            left: block.left,
            width: block.width,
            background: block.accent ? '#066bbd' : '#252526',
          }}
        >
          {block.accent ? (
            <div className="led-overlay absolute inset-0">
              {Array.from({ length: 5 }).map((_, stripeIndex) => (
                <span
                  className="absolute left-0 h-px w-full bg-aux/70"
                  key={stripeIndex}
                  style={{ top: `${stripeIndex * 22}%` }}
                />
              ))}
            </div>
          ) : null}
        </motion.div>
      ))}
    </div>
  );
}
