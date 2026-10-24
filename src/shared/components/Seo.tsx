import { useEffect } from 'react';
import { projects } from '../../features/projects/data/projects';
import { contact } from '../data/site';

const siteUrl = 'https://vicky-narvare.vercel.app';
const defaultDescription =
  'Vicky Narvare is a MERN Stack Developer from Indore building responsive full-stack web applications with React, Node.js, Express.js and MongoDB.';

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Vicky Narvare | MERN Stack Developer',
    description: defaultDescription,
  },
  '/about': {
    title: 'About Vicky Narvare | MERN Stack Developer',
    description:
      "Learn about Vicky Narvare's computer science education, MERN training and journey as a full-stack developer.",
  },
  '/projects': {
    title: 'Projects | Vicky Narvare',
    description:
      'Explore web applications, business websites and interactive projects built by Vicky Narvare.',
  },
  '/skills': {
    title: 'Skills | Vicky Narvare',
    description:
      'Technologies Vicky Narvare uses for frontend, backend, APIs, databases and production deployments.',
  },
  '/contact': {
    title: 'Contact Vicky Narvare | MERN Developer',
    description:
      'Get in touch with Vicky Narvare for freelance projects, full-time opportunities and full-stack web development.',
  },
};

const notFoundMeta = {
  title: 'Page not found | Vicky Narvare',
  description:
    'This page does not exist. Explore the projects, skills and contact details of Vicky Narvare instead.',
};

const truncate = (value: string, length = 155) =>
  value.length > length ? `${value.slice(0, length - 1).trimEnd()}…` : value;

const setMeta = (
  attribute: 'name' | 'property',
  key: string,
  content: string
) => {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const setJsonLd = (id: string, data: unknown) => {
  let script = document.head.querySelector<HTMLScriptElement>(
    `script[data-seo="${id}"]`
  );
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seo = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vicky Narvare',
  url: siteUrl,
  jobTitle: 'MERN Stack Developer',
  description: defaultDescription,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Indore',
    addressRegion: 'Madhya Pradesh',
    addressCountry: 'IN',
  },
  sameAs: [contact.github, contact.linkedin],
  knowsAbout: [
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MySQL',
    'Tailwind CSS',
  ],
};

export const Seo = ({ pathname }: { pathname: string }) => {
  useEffect(() => {
    const normalizedPath =
      pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;

    const project = projects.find(
      (p) => normalizedPath === `/projects/${p.slug}`
    );

    const meta =
      pageMeta[normalizedPath] ??
      (project
        ? {
            title: `${project.name} | Vicky Narvare`,
            description: truncate(project.subtitle ?? project.description),
          }
        : notFoundMeta);

    const isNotFound = !pageMeta[normalizedPath] && !project;
    const canonicalUrl = `${siteUrl}${
      normalizedPath === '/' ? '/' : normalizedPath
    }`;

    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setMeta('name', 'robots', isNotFound ? 'noindex, follow' : 'index, follow');
    setMeta('property', 'og:type', project ? 'article' : 'website');
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    setJsonLd('person', personSchema);
    if (project) {
      setJsonLd('project', {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.name,
        description: project.description,
        url: `${siteUrl}/projects/${project.slug}`,
        image: project.image ? `${siteUrl}${project.image}` : undefined,
        author: { '@type': 'Person', name: 'Vicky Narvare' },
        keywords: project.tech.join(', '),
      });
    } else {
      document.head.querySelector('script[data-seo="project"]')?.remove();
    }
  }, [pathname]);

  return null;
};
