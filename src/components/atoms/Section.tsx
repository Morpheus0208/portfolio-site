import clsx from 'clsx';

import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  id?: string;
  bg?: string;
  py?: string;
  className?: string;
  full?: boolean;
  slide?: boolean;
}>;

export default function Section({
  id,
  bg = 'bg-white',
  py = 'py-16 sm:py-20',
  className,
  full,
  slide,
  children,
}: Props) {
  return (
    <section
      id={id}
      className={clsx(
        bg,
        py,
        'scroll-mt-16',
        full && 'lg:min-h-[calc(100vh-4rem)] lg:snap-start',
        slide && 'snap-start lg:min-h-[calc(100vh-4rem)]',
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
