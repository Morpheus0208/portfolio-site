import clsx from 'clsx';

import type { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  label: string;
  size?: 'sm' | 'md';
};

export default function SkillCard({ icon, label, size = 'md' }: Props) {
  const isSm = size === 'sm';
  return (
    <div
      className={clsx(
        'shadow-soft rounded-xl bg-white ring-1 ring-black/5',
        'transition-transform duration-150 hover:-translate-y-0.5',
        isSm ? 'p-3' : 'p-4'
      )}
    >
      <div className="flex items-center gap-3">
        <div className={clsx('shrink-0', isSm ? 'text-[20px]' : 'text-[24px]')}>{icon}</div>
        <span className={clsx('font-medium text-slate-800', isSm ? 'text-sm' : 'text-base')}>
          {label}
        </span>
      </div>
    </div>
  );
}
