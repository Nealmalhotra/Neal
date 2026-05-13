'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 42, mass: 0.4 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 42, mass: 0.4 });

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    const updatePointerMode = () => setIsFinePointer(media.matches);
    const updatePosition = (event: PointerEvent) => {
      cursorX.set(event.clientX - 14);
      cursorY.set(event.clientY - 14);
    };

    updatePointerMode();
    media.addEventListener('change', updatePointerMode);
    window.addEventListener('pointermove', updatePosition);

    return () => {
      media.removeEventListener('change', updatePointerMode);
      window.removeEventListener('pointermove', updatePosition);
    };
  }, [cursorX, cursorY]);

  if (!isFinePointer) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-50 hidden size-7 rounded-full border border-accent bg-aux/20 mix-blend-exclusion md:block"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-px w-16 -translate-x-4 translate-y-[14px] bg-accent/70 mix-blend-multiply md:block"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-16 w-px translate-x-[14px] -translate-y-4 bg-accent/70 mix-blend-multiply md:block"
        style={{ x: springX, y: springY }}
      />
    </>
  );
}
