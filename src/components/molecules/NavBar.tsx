import { useLockBodyScroll } from '@hooks/useLockBodyScroll';
import { useEffect, useRef, useState } from 'react';

import { scrollToId } from '@utils/scrollToId';

const links = [
  { id: 'apropos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
] as const;

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      setTimeout(() => firstLinkRef.current?.focus(), 0);
    }
  }, [open]);

  useLockBodyScroll(open);

  const goTo = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-[1000] w-full bg-white transition-all',
        scrolled ? 'ring-brand-100 shadow-md ring-1' : '',
      ].join(' ')}
    >
      <nav className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <a
          href="#top"
          aria-label="Accueil"
          className="text-base font-semibold tracking-tight rounded-md text-brand-900 focus:ring-brand-500/40 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:outline-none sm:text-lg"
        >
          Guillaume <span className="text-brand-600">Ramonet</span>
        </a>

        <ul className="items-center hidden gap-1 sm:gap-2 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                type="button"
                onClick={() => goTo(l.id)}
                className="px-3 py-2 text-sm font-medium transition rounded-md text-brand-900/80 hover:text-brand-900 hover:bg-brand-100 focus:ring-brand-500/40 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:outline-none"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md focus:ring-brand-500/40 text-slate-700 hover:bg-slate-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:outline-none md:hidden"
          aria-label="Ouvrir le menu"
          aria-haspopup="dialog"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[1001] md:hidden"
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <div className="absolute top-0 right-0 flex h-full w-72 max-w-[80%] flex-col bg-white p-4 shadow-xl ring-1 ring-black/5">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-slate-900">Menu</span>
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md focus:ring-brand-500/40 text-slate-700 hover:bg-slate-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:outline-none"
                aria-label="Fermer le menu"
                onClick={() => setOpen(false)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6l-12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <ul className="mt-4 space-y-1">
              {links.map((l, i) => (
                <li key={l.id}>
                  <button
                    ref={i === 0 ? firstLinkRef : undefined}
                    type="button"
                    onClick={() => goTo(l.id)}
                    className="w-full px-3 py-2 text-sm font-medium text-left rounded-md focus:ring-brand-500/40 text-slate-800 hover:bg-slate-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:outline-none"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-4 mt-auto text-xs text-slate-500">
              © {new Date().getFullYear()} Guillaume Ramonet
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
