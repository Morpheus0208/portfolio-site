import type { Project } from '@molecules/ProjectCard';

export const projects: Project[] = [
  {
    title: 'Booki — HTML/CSS',
    description: 'Intégration du site et responsive.',
    tech: ['HTML', 'CSS'],
    imageSrc: 'images/projects/booki.webp', // ✅ sans "/" initial
    links: {
      repo: 'https://github.com/Morpheus0208/booki',
    },
  },
  {
    title: 'Kasa — Frontend React',
    description: 'Implémentation du site (routing, rating, responsive).',
    tech: ['React', 'Vite'],
    imageSrc: 'images/projects/kasa.webp',
    links: {
      repo: 'https://github.com/Morpheus0208/kasa',
    },
  },
  {
    title: 'Nina Carducci — HTML/CSS',
    description: 'Debugging, SEO et Performance',
    tech: ['HTML', 'CSS', 'SEO', 'DevTools'],
    imageSrc: 'images/projects/nina.webp',
    links: {
      repo: 'https://github.com/Morpheus0208/Nina-Carducci-dev',
    },
  },
  {
    title: 'Mon Vieux Grimoire — Backend',
    description: 'API REST Node/Express/MongoDB (auth JWT, CRUD, upload images).',
    tech: ['Node', 'Express', 'MongoDB', 'Mongoose'],
    imageSrc: 'images/projects/mvg.webp',
    links: {
      repo: 'https://github.com/Morpheus0208/MonVieuxGrimoire',
    },
  },
];
