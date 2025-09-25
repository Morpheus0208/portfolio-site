import { HiOutlineMail } from 'react-icons/hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import SocialIconButton from '@atoms/SocialIconButton';
import Typewriter from '@atoms/Typewriter';

export default function Hero() {
  return (
    <section className="bg-brand-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center text-center">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-gray-500 uppercase">
            Construisons quelque chose ensemble
          </p>

          <h1 className="text-brand-900 text-4xl font-extrabold sm:text-5xl">
            Bonjour, je suis <span className="text-brand-600">Guillaume Ramonet</span>
          </h1>

          <h2 className="text-brand-900 mt-3 text-2xl font-bold sm:text-3xl">
            <Typewriter
              strings={[
                'Développeur Full-Stack JavaScript',
                'Développeur Back-End',
                'Développeur Front-End',
              ]}
            />
          </h2>

          <p className="mt-6 max-w-prose text-gray-600">
            Je conçois des applications performantes et durables (GreenCode) avec une attention
            particulière portée à la qualité et la sécurité.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <SocialIconButton
              href="https://www.linkedin.com/in/guillaumeramonet/"
              label="LinkedIn"
              Icon={SiLinkedin}
            />
            <SocialIconButton
              href="https://github.com/Morpheus0208"
              label="GitHub"
              Icon={SiGithub}
            />
            <SocialIconButton
              href="mailto:morpheus0208code@gmail.com?subject=Contact%20depuis%20portfolio"
              label="Envoyer un e-mail"
              Icon={HiOutlineMail}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
