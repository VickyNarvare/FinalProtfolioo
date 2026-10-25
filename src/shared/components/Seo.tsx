import { useEffect } from 'react';
import { projects } from '../../features/projects/data/projects';
import { contact, faq } from '../data/site';

const siteUrl = 'https://vicky-narvare.vercel.app';
const defaultDescription =
  'Vicky Narvare is a MERN stack developer in Indore building fast, responsive full-stack web applications with React, Next.js, Node.js and MongoDB.';

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Vicky Narvare — MERN Stack Developer in Indore',
    description: defaultDescription,
  },
  '/about': {
    title: 'About Vicky Narvare — MERN Stack Developer in Indore',
    description:
      'Meet Vicky Narvare, a MERN stack developer in Indore. Explore his background, MCA studies at DAVV, development principles and full-stack project experience.',
  },
  '/projects': {
    title: 'Projects — MERN Stack Case Studies | Vicky Narvare',
    description:
      'Explore full-stack case studies by Vicky Narvare, including e-commerce apps, business websites and interactive experiences built with React and Node.js.',
  },
  '/skills': {
    title: 'Skills & Tech Stack — React, Node.js & MongoDB | Vicky Narvare',
    description:
      'The technologies Vicky Narvare uses to build full-stack products: React, Next.js, Node.js, Express.js, MongoDB, MySQL, Tailwind CSS and more.',
  },
  '/contact': {
    title: 'Contact Vicky Narvare — Hire a MERN Stack Developer',
    description:
      'Contact Vicky Narvare for freelance projects, full-time roles and full-stack web development. Based in Indore, available worldwide, replies within 24 hours.',
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

const personEntity = {
  '@type': 'Person',
  name: 'Vicky Narvare',
  url: siteUrl,
  jobTitle: 'MERN Stack Developer',
  description: defaultDescription,
  email: `mailto:${contact.email}`,
  telephone: contact.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Indore',
    addressRegion: 'Madhya Pradesh',
    addressCountry: 'IN',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Government Model Autonomous Holkar Science College, DAVV, Indore',
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
    'REST API',
    'Full Stack Development',
  ],
};

const personSchema = {
  '@context': 'https://schema.org',
  ...personEntity,
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Vicky Narvare',
  url: siteUrl,
  description: defaultDescription,
  author: { '@type': 'Person', name: 'Vicky Narvare' },
  inLanguage: 'en',
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
            title: `${project.name} — ${project.category} Case Study | Vicky Narvare`,
            description: truncate(
              `${project.subtitle ?? project.description}. A ${project.category.toLowerCase()} project built with ${project.tech.join(', ')}.`
            ),
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
    setMeta('property', 'og:site_name', 'Vicky Narvare');
    setMeta('property', 'og:locale', 'en_IN');
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('name', 'twitter:card', 'summary');
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
    setJsonLd('website', websiteSchema);

    if (project) {
      setJsonLd('project', {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.name,
        description: project.description,
        url: `${siteUrl}/projects/${project.slug}`,
        image: project.image ? `${siteUrl}${project.image}` : undefined,
        author: { '@type': 'Person', name: 'Vicky Narvare' },
        creator: { '@type': 'Person', name: 'Vicky Narvare' },
        keywords: project.tech.join(', '),
        genre: project.category,
      });
      setJsonLd('breadcrumb', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${siteUrl}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Projects',
            item: `${siteUrl}/projects`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.name,
            item: `${siteUrl}/projects/${project.slug}`,
          },
        ],
      });
    } else {
      document.head.querySelector('script[data-seo="project"]')?.remove();
      document.head.querySelector('script[data-seo="breadcrumb"]')?.remove();
    }

    if (normalizedPath === '/about') {
      setJsonLd('about-page', {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: pageMeta['/about'].title,
        description: pageMeta['/about'].description,
        url: `${siteUrl}/about`,
        mainEntity: personEntity,
      });
    } else {
      document.head.querySelector('script[data-seo="about-page"]')?.remove();
    }

    if (normalizedPath === '/contact') {
      setJsonLd('contact-page', {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: pageMeta['/contact'].title,
        description: pageMeta['/contact'].description,
        url: `${siteUrl}/contact`,
        mainEntity: personEntity,
      });
      setJsonLd('faq', {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.title,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.desc,
          },
        })),
      });
    } else {
      document.head.querySelector('script[data-seo="contact-page"]')?.remove();
      document.head.querySelector('script[data-seo="faq"]')?.remove();
    }
  }, [pathname]);

  return null;
};
