import Section from '@atoms/Section';
import AboutSection from '@organisms/AboutSection';
import ContactBlock from '@organisms/ContactBlock';
import Hero from '@organisms/Hero';
import ProjectsGrid from '@organisms/ProjectsGrid';
import SkillsSection from '@organisms/SkillsSection';

export default function Home() {
  return (
    <>
      <Section id="top" bg="bg-brand-50" slide full>
        <Hero />
      </Section>

      <AboutSection id="apropos" imageSrc="images/about.jpg" full />

      <SkillsSection slide full />

      <Section id="projets" bg="bg-white" full>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-brand-600 text-xs font-semibold tracking-[0.22em] uppercase">
            Projets
          </p>
          <h2 className="text-brand-900 mt-2 text-2xl font-extrabold sm:text-3xl">
            Mes projets et réalisations
          </h2>
        </div>
        <div className="mt-8">
          <ProjectsGrid />
        </div>
      </Section>

      <Section
        id="contact"
        bg="bg-brand-50"
        /* on force la hauteur et le centrage vertical, toutes tailles */
        className="flex min-h-[calc(100vh-4rem)] items-center"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-brand-600 text-xs font-semibold tracking-[0.22em] uppercase">
            Contact
          </p>
          <h2 className="text-brand-900 mt-2 text-2xl font-extrabold sm:text-3xl">Contact</h2>
        </div>

        <div className="mt-8">
          <ContactBlock />
        </div>
      </Section>
    </>
  );
}
