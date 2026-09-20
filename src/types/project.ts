export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  tech: string[];
  tone: string; // placeholder panel colour until `image` is set
  image?: string;
  imageAlt?: string;
  live?: string;
  github?: string;
  subtitle?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  learned?: string;
  role?: string;
  layout?: 'left' | 'right';
  demoLink?: string;
  codeLink?: string;
}
