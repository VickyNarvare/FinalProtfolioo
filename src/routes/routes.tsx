import { createBrowserRouter } from "react-router";
import { AboutPage } from "../features/about/page/AboutPage";
import { HomePage } from "../features/home/page/HomePage";
import { ProjectsPage } from "../features/projects/page/ProjectsPage";
import { MainLayout } from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "projects", element: <ProjectsPage /> },
    ],
  },
]);
