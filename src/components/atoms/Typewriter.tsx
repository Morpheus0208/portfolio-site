import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

type Props = {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
  className?: string;
};

export default function Typewriter({
  strings,
  typeSpeed = 100,
  backSpeed = 70,
  backDelay = 1500,
  loop = true,
  className,
}: Props) {
  const elRef = useRef<HTMLSpanElement | null>(null);
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    if (!elRef.current) return;
    typedRef.current = new Typed(elRef.current, {
      strings,
      typeSpeed,
      backSpeed,
      backDelay,
      loop,
      smartBackspace: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typedRef.current?.destroy();
      typedRef.current = null;
    };
  }, [strings, typeSpeed, backSpeed, backDelay, loop]);

  return <span ref={elRef} className={className} />;
}
