'use client';

import type { ReactNode } from 'react';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { riseIn, slamIn, stagger } from '@/lib/motion';

type MotionGroupProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'footer' | 'header';
} & HTMLMotionProps<'div'>;

export function MotionGroup({ as = 'div', children, className, ...props }: MotionGroupProps) {
  const Component = motion[as] as typeof motion.div;

  return (
    <Component variants={stagger} initial="hidden" animate="show" className={className} {...props}>
      {children}
    </Component>
  );
}

export function MotionItem({ children, className, variant = 'rise' }: MotionGroupProps & { variant?: 'rise' | 'slam' }) {
  return (
    <motion.div variants={variant === 'slam' ? slamIn : riseIn} className={className}>
      {children}
    </motion.div>
  );
}

export function MotionArticle({ children, className, ...props }: HTMLMotionProps<'article'>) {
  return (
    <motion.article variants={riseIn} className={className} {...props}>
      {children}
    </motion.article>
  );
}
