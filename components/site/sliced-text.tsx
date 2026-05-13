'use client';

import { motion } from 'framer-motion';

type SlicedTextProps = {
  text: string;
  className?: string;
  slices?: number;
  delay?: number;
};

const easeExpOut = [0.19, 1, 0.22, 1] as const;

export function SlicedText({ text, className, slices = 12, delay = 0 }: SlicedTextProps) {
  const parts = Array.from({ length: slices });

  return (
    <span aria-label={text} className={`relative block overflow-hidden whitespace-nowrap ${className ?? ''}`}>
      <span className="invisible block whitespace-nowrap">{text}</span>
      {parts.map((_, index) => {
        const from = index % 2 === 0 ? '-105%' : '105%';

        return (
          <span
            aria-hidden
            className="absolute top-0 overflow-hidden whitespace-nowrap"
            key={`${text}-${index}`}
            style={{
              left: `${(index / slices) * 100}%`,
              width: `${100 / slices + 0.02}%`,
            }}
          >
            <motion.span
              className="block whitespace-nowrap"
              initial={{ x: from, opacity: 0.2 }}
              animate={{ x: `${-index * 100}%`, opacity: 1 }}
              transition={{
                delay: delay + index * 0.035,
                duration: 1.25 + index * 0.02,
                ease: easeExpOut,
              }}
            >
              {text}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

export function CharReveal({ text, className, delay = 0 }: Omit<SlicedTextProps, 'slices'>) {
  return (
    <span aria-label={text} className={`block overflow-hidden ${className ?? ''}`}>
      {Array.from(text).map((char, index) => (
        <motion.span
          aria-hidden
          className="inline-block"
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: '50%', scale: 0.82, skewY: 10 }}
          animate={{ opacity: 1, y: '0%', scale: 1, skewY: 0 }}
          transition={{
            delay: delay + index * 0.04,
            duration: 0.72,
            ease: easeExpOut,
          }}
        >
          {char === ' ' ? '\u00a0' : char}
        </motion.span>
      ))}
    </span>
  );
}
