import { useEffect } from 'react';

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

export const Seo = ({ pathname }: { pathname: string }) => {
  useEffect(() => {
    const normalizedPath = pathname.startsWith('/projects/')
      ? '/projects'
      : pathname;
    const meta = pageMeta[normalizedPath] ?? pageMeta['/'];
    const canonicalUrl = `${siteUrl}${pathname === '/' ? '/' : pathname}`;

    document.title = meta.title;
    setMeta('name', 'description', meta.description);
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
  }, [pathname]);

  return null;
};
