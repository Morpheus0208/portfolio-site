import { PropsWithChildren } from 'react';

import { cn } from '@utils/cn';

type BadgeProps = PropsWithChildren<{ accent?: boolean }>;

export default function Badge({ children, accent = false }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs',
        accent ? 'border-emerald-400/40 text-emerald-400' : 'border-white/15 text-slate-200'
      )}
    >
      {children}
    </span>
  );
}
