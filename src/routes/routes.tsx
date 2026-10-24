import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../layout/MainLayout';
import { RouteError } from '../layout/RouteError';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <RouteError />,
    HydrateFallback: () => null,
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
      {
        path: '*',
        lazy: async () => {
          const { NotFound } = await import('../layout/NotFound');
          return { Component: NotFound };
        },
      },
    ],
  },
]);
