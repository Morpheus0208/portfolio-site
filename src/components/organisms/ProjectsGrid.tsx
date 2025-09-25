import clsx from 'clsx';

import { projects } from '@data/projects';
import ProjectCard from '@molecules/ProjectCard';

type Props = { className?: string; limit?: number; emptyLabel?: string };

export default function ProjectsGrid({ className, limit, emptyLabel }: Props) {
  const list = typeof limit === 'number' ? projects.slice(0, limit) : projects;

  if (!list.length) {
    return (
      <div className={clsx('text-center text-slate-500', className)}>
        {emptyLabel ?? 'Aucun projet à afficher pour le moment.'}
      </div>
    );
  }

  return (
    <div className={clsx('grid gap-6 sm:gap-8 md:grid-cols-2', className)}>
      {list.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  );
}
