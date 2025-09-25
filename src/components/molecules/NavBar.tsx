import { useEffect, useState } from 'react';

const links = [
  { href: '#apropos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
] as const;

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-[1000] w-full bg-white transition-all',
        scrolled ? 'ring-brand-100 shadow-md ring-1' : '',
      ].join(' ')}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          aria-label="Accueil"
          className="text-brand-900 focus:ring-brand-500/40 rounded-md text-base font-semibold tracking-tight focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:outline-none sm:text-lg"
        >
          Guillaume <span className="text-brand-600">Ramonet</span>
        </a>

        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-brand-900/80 hover:text-brand-900 hover:bg-brand-100 focus:ring-brand-500/40 rounded-md px-3 py-2 text-sm font-medium transition focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:outline-none"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
