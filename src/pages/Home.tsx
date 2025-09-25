import Section from '@atoms/Section';
import AboutSection from '@organisms/AboutSection';
import ContactBlock from '@organisms/ContactBlock';
import Hero from '@organisms/Hero';
import ProjectsGrid from '@organisms/ProjectsGrid';
import SkillsSection from '@organisms/SkillsSection';

export default function Home() {
  return (
    <>
      <Section id="top" bg="bg-brand-50" slide>
        <Hero />
      </Section>

      <AboutSection imageSrc="images/about.jpg" />

      <SkillsSection slide />

      <Section id="projets" bg="bg-white" slide>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-600 text-xs font-semibold tracking-[0.22em] uppercase">
            Projets
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-brand-900 sm:text-3xl">
            Mes projets et réalisations
          </h2>
        </div>

        <div className="mt-8">
          <ProjectsGrid />
        </div>
      </Section>

      <Section id="contact" bg="bg-brand-50" slide>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-600 text-xs font-semibold tracking-[0.22em] uppercase">
            Contact
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-brand-900 sm:text-3xl">Contact</h2>
        </div>

        <div className="mt-8">
          <ContactBlock />
        </div>
      </Section>
    </>
  );
}
