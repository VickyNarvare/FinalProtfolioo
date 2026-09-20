import { createBrowserRouter } from 'react-router';
import { AboutPage } from '../features/about/page/AboutPage';
import { ContactPage } from '../features/contact/page/ContactPage';
import { HomePage } from '../features/home/page/HomePage';
import { ProjectDetailPage } from '../features/projects/page/ProjectDetailPage';
import { ProjectsPage } from '../features/projects/page/ProjectsPage';
import { SkillsPage } from '../features/skills/page/SkillsPage';
import { MainLayout } from '../layout/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'projects/:slug', element: <ProjectDetailPage /> },
      { path: 'skills', element: <SkillsPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);
