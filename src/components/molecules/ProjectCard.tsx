import { withBase } from '@utils/withBase';

export type ProjectLinks = {
  repo?: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  imageSrc: string;
  imageAlt?: string;
  links?: ProjectLinks;
};

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, tech, imageSrc, imageAlt, links } = project;
  const src = imageSrc.startsWith('http') ? imageSrc : withBase(imageSrc);

  return (
    <article className="p-3 bg-white shadow-lg ring-brand-100 rounded-xl ring-1">
      <div className="overflow-hidden rounded-lg">
        <img
          src={src}
          alt={imageAlt ?? title}
          className="block aspect-[16/9] w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-brand-900">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>

        <ul className="flex flex-wrap gap-2 mt-3">
          {tech.map((t) => (
            <li
              key={t}
              className="px-2 py-1 text-xs font-medium rounded-md bg-brand-50 text-brand-700 ring-brand-100 ring-1"
            >
              {t}
            </li>
          ))}
        </ul>

        {links?.repo && (
          <div className="mt-4">
            <a
              href={links.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="underline decoration-brand-500 hover:decoration-brand-600 underline-offset-4"
            >
              Code source
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
