import Section from '@atoms/Section';
import { withBase } from '@utils/withBase';

type Props = {
  id?: string;

  imageSrc?: string;

  imageWebpSrc?: string;

  full?: boolean;
};

export default function AboutSection({
  id = 'apropos',
  imageSrc = 'images/about.jpg',
  imageWebpSrc,
  full = true,
}: Props) {
  const jpg = withBase(imageSrc);
  const webp = imageWebpSrc ? withBase(imageWebpSrc) : undefined;

  return (
    <Section id={id} bg="bg-white" className="py-12 sm:py-16" full={full}>
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="text-brand-600 text-xs font-semibold tracking-[0.22em] uppercase">
            À propos
          </p>
          <h2 className="text-brand-900 mt-2 text-2xl font-extrabold sm:text-3xl">Qui suis-je</h2>

          <div className="prose prose-slate mt-4 max-w-none text-sm sm:text-base">
            <p>
              Développeur full-stack JavaScript (React, Node, Express, MongoDB), j’aide à concevoir
              des solutions simples, performantes et durables. J’accompagne aussi sur
              l’architecture, la qualité de code et l’outillage (CI/CD, tests).
            </p>
            <p>
              J’applique les bonnes pratiques (qualité, sécurité, accessibilité) avec une approche
              <strong> GreenCode</strong> pour réduire l’empreinte des produits.
            </p>
            <p>
              <a
                href="#projets"
                className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
              >
                Voir mes derniers projets et expériences
              </a>
            </p>
          </div>
        </div>

        <div className="aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:aspect-[16/10] md:aspect-[3/2] lg:aspect-[4/3] xl:aspect-[16/9]">
          <picture>
            {webp && <source srcSet={webp} type="image/webp" />}
            <img
              src={jpg}
              alt="Mon environnement de travail / code"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center"
              sizes="(min-width:1024px) 44vw, (min-width:640px) 88vw, 100vw"
            />
          </picture>
        </div>
      </div>
    </Section>
  );
}
