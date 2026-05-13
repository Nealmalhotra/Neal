import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type NeoCardProps<T extends ElementType> = {
  as?: T;
  accent?: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

export function NeoCard<T extends ElementType = 'div'>({
  as,
  accent,
  children,
  className,
  ...props
}: NeoCardProps<T>) {
  const Component = as ?? 'div';

  return (
    <Component className={cn('neo-card relative overflow-hidden', className)} {...props}>
      {accent ? <div aria-hidden className={cn('absolute inset-x-0 top-0 h-3 border-b-4 border-ink', accent)} /> : null}
      {children}
    </Component>
  );
}
