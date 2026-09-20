export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  tech: string[];
  tone: string; // placeholder panel colour until `image` is set
  image?: string;
  live?: string;
  github?: string;
}
