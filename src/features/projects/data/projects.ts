import type { Project } from '../../../types/project';

// TODO: add `live`, `github` and `image` per project. Tech tags are minimal, verify against your old portfolio.
export const projects: Project[] = [
  {
    slug: 'foodie-delight',
    name: 'Foodie Delight',
    category: 'Food ordering',
    description:
      'Food ordering application with cart and checkout functionality.',
    tech: ['React', 'Node.js', 'MongoDB'],
    tone: '#2b211c',
  },
  {
    slug: 'coffee-cup',
    name: 'Coffee Cup',
    category: 'Business website + admin',
    description: 'Coffee shop website with an admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB'],
    tone: '#22261f',
  },
  {
    slug: 'noir-frame-studio',
    name: 'Noir Frame Studio',
    category: 'Photography',
    description: 'Cinematic wedding and portrait photography website.',
    tech: ['React', 'Tailwind CSS'],
    tone: '#1f2027',
  },
  {
    slug: 'electrax',
    name: 'ElectraX',
    category: 'Interactive landing page',
    description: 'Interactive landing page with GSAP animations.',
    tech: ['JavaScript', 'GSAP'],
    tone: '#26222b',
  },
  {
    slug: 'fitnessclub',
    name: 'FitnessClub',
    category: 'Gym website',
    description: 'Gym website with pricing and trainer profiles.',
    tech: ['React', 'Tailwind CSS'],
    tone: '#2a2420',
  },
  {
    slug: 'jarvis-ai',
    name: 'JARVIS AI',
    category: 'Voice interface',
    description: 'Voice-controlled interface using the Web Speech API.',
    tech: ['JavaScript', 'Web Speech API'],
    tone: '#1e2529',
  },
];
