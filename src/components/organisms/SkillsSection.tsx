import Section from '@atoms/Section';
import { skills } from '@data/skills';
import SkillCard from '@molecules/SkillCard';

type Category = 'Langages' | 'Frontend' | 'Backend' | 'Outils' | 'Qualité' | 'IA';

const ROWS: [Category, Category][] = [
  ['Langages', 'Outils'],
  ['Frontend', 'Qualité'],
  ['Backend', 'IA'],
];

function CategoryBlock({ category }: { category: Category }) {
  const list = skills.filter((s) => s.category === category);
  return (
    <div className="flex h-full flex-col">
      <h3 className="mb-4 text-base font-semibold text-slate-800">{category}</h3>
      <div className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
        {list.map((s) => (
          <SkillCard key={s.name} icon={s.icon} label={s.name} size="sm" />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection({ slide = false }: { slide?: boolean }) {
  return (
    <Section id="competences" bg="bg-brand-50" slide={slide} className="py-8 sm:py-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-brand-600 text-xs font-semibold tracking-[0.22em] uppercase">
          Compétences
        </p>
        <h2 className="text-brand-900 mt-2 text-2xl font-extrabold sm:text-3xl">Ma stack</h2>
        <p className="mx-auto mt-3 max-w-prose text-sm text-slate-600">
          Technologies que j’utilise au quotidien pour concevoir des applications performantes et
          durables.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-6xl space-y-8">
        {ROWS.map(([left, right]) => (
          <div key={`${left}-${right}`} className="grid items-stretch gap-8 lg:grid-cols-2">
            <CategoryBlock category={left} />
            <CategoryBlock category={right} />
          </div>
        ))}
      </div>
    </Section>
  );
}
