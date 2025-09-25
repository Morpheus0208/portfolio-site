import { ReactNode } from 'react';
import {
  SiCss3,
  SiEslint,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiOpenai,
  SiPrettier,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

import VsCodeIcon from '@atoms/VsCodeIcon';

export type Skill = {
  name: string;
  icon: ReactNode;
  category: 'Langages' | 'Frontend' | 'Backend' | 'Outils' | 'Qualité' | 'IA';
};

export const skills: Skill[] = [
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" />, category: 'Langages' },
  { name: 'TypeScript', icon: <SiTypescript color="#3178C6" />, category: 'Langages' },
  { name: 'HTML', icon: <SiHtml5 color="#E34F26" />, category: 'Langages' },
  { name: 'CSS', icon: <SiCss3 color="#1572B6" />, category: 'Langages' },

  { name: 'React', icon: <SiReact color="#61DAFB" />, category: 'Frontend' },
  { name: 'Vite', icon: <SiVite color="#646CFF" />, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" />, category: 'Frontend' },

  { name: 'Node.js', icon: <SiNodedotjs color="#339933" />, category: 'Backend' },
  { name: 'Express', icon: <SiExpress color="#000000" />, category: 'Backend' },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" />, category: 'Backend' },

  { name: 'Git', icon: <SiGit color="#F05032" />, category: 'Outils' },
  { name: 'GitHub', icon: <SiGithub color="#181717" />, category: 'Outils' },
  { name: 'VS Code', icon: <VsCodeIcon size={24} />, category: 'Outils' },

  { name: 'ESLint', icon: <SiEslint color="#4B32C3" />, category: 'Qualité' },
  { name: 'Prettier', icon: <SiPrettier color="#F7B93E" />, category: 'Qualité' },

  { name: 'ChatGPT / OpenAI', icon: <SiOpenai color="#412991" />, category: 'IA' },
];
