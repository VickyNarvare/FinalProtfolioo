import { MotionConfig } from "motion/react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../shared/components/Navbar/Navbar";
import { Footer } from "./Footer";

export const MainLayout = () => {
  const { pathname, hash } = useLocation();

  // Scroll to #section after navigation, or to the top on a new page.
  useEffect(() => {
    const el = hash ? document.getElementById(hash.slice(1)) : null;
    if (el) setTimeout(() => el.scrollIntoView(), 50);
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-70 focus:rounded focus:bg-primary focus:p-3 focus:text-background">Skip to content</a>
      <Navbar />
      <main id="main"><Outlet /></main>
      <Footer />
    </MotionConfig>
  );
};
