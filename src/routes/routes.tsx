import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../layout/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { HomePage } = await import('../features/home/page/HomePage');
          return { Component: HomePage };
        },
      },
      {
        path: 'about',
        lazy: async () => {
          const { AboutPage } =
            await import('../features/about/page/AboutPage');
          return { Component: AboutPage };
        },
      },
      {
        path: 'projects',
        lazy: async () => {
          const { ProjectsPage } =
            await import('../features/projects/page/ProjectsPage');
          return { Component: ProjectsPage };
        },
      },
      {
        path: 'projects/:slug',
        lazy: async () => {
          const { ProjectDetailPage } =
            await import('../features/projects/page/ProjectDetailPage');
          return { Component: ProjectDetailPage };
        },
      },
      {
        path: 'skills',
        lazy: async () => {
          const { SkillsPage } =
            await import('../features/skills/page/SkillsPage');
          return { Component: SkillsPage };
        },
      },
      {
        path: 'contact',
        lazy: async () => {
          const { ContactPage } =
            await import('../features/contact/page/ContactPage');
          return { Component: ContactPage };
        },
      },
    ],
  },
]);
