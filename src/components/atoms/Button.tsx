import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '@utils/cn';

const button = cva(
  'inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-colors shadow-soft disabled:opacity-60 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-brand-500 text-slate-900 hover:bg-brand-700',
        ghost: 'bg-transparent text-white border border-white/20 hover:bg-white/10',
      },
      size: { sm: 'h-9 px-3', md: 'h-10 px-4', lg: 'h-11 px-5' },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);

type ButtonProps = React.ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof button> & { as?: React.ElementType };

export default function Button({
  as: Tag = 'button',
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return <Tag className={cn(button({ variant, size }), className)} {...props} />;
}
