export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  tech: string[];
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
}
