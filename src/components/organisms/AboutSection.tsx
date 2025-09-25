import { withBase } from '@utils/withBase';

type Props = { imageSrc: string; imageAlt?: string };

export default function AboutSection({ imageSrc, imageAlt = 'Portrait au poste de dev' }: Props) {
  // Supporte les URL absolues (http/https) et les chemins relatifs "images/...".
  const src = /^https?:\/\//i.test(imageSrc) ? imageSrc : withBase(imageSrc);

  return (
    <section id="apropos" className="py-16 bg-white sm:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-brand-600 text-xs font-medium tracking-[0.22em] uppercase">
              À propos
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-brand-900 sm:text-4xl">Qui suis-je</h2>
            <div className="mt-6 space-y-5 leading-relaxed text-gray-700 max-w-prose">
              <p>
                Développeur full-stack JavaScript (React, Node, Express, MongoDB), j’aide à
                concevoir des solutions simples, performantes et durables. J’accompagne aussi sur
                l’architecture, la qualité de code et l’outillage (CI/CD, tests).
              </p>
              <p>
                J’applique les bonnes pratiques (qualité, sécurité, accessibilité) avec une approche{' '}
                <span className="font-semibold text-brand-600">GreenCode</span> pour réduire
                l’empreinte des produits.
              </p>
              <p>
                <a
                  href="#projets"
                  className="underline decoration-brand-500 hover:decoration-brand-600 underline-offset-4"
                >
                  Voir mes derniers projets et expériences
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden shadow-lg rounded-2xl">
              <img
                src={src}
                alt={imageAlt}
                loading="lazy"
                className="block aspect-[3/4] h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
