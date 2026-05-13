'use client';

import type { ReactNode } from 'react';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

type NeoButtonProps = {
  children: ReactNode;
  className?: string;
} & HTMLMotionProps<'a'>;

export function NeoButton({ children, className, ...props }: NeoButtonProps) {
  return (
    <motion.a
      className={cn('neo-button', className)}
      whileHover={{ x: 4, y: 4 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.16, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
