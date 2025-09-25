import { PropsWithChildren } from 'react';

import NavBar from '../molecules/NavBar';

export default function PortfolioTemplate({ children }: PropsWithChildren) {
  return (
    <>
      <NavBar />

      <main id="main" className="snap-y snap-mandatory">
        {children}
      </main>

      <footer className="container border-t border-white/10 py-8 text-sm text-slate-400">
        © {new Date().getFullYear()} Guillaume Ramonet — Full-Stack JS
      </footer>
    </>
  );
}
