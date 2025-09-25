import type { ComponentType } from 'react';

type Props = {
  href: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
  className?: string;
};

export default function SocialIconButton({ href, label, Icon, className }: Props) {
  const isExternal = href.startsWith('http');
  const common =
    'flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg ' +
    'transition hover:scale-105 active:scale-95 ' +
    'focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:ring-offset-2 focus:ring-offset-brand-50';
  return (
    <a
      href={href}
      aria-label={label}
      className={`${common} ${className ?? ''}`}
      {...(isExternal ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      <Icon className="text-brand-600 h-6 w-6" />
    </a>
  );
}
