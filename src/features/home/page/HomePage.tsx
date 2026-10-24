import { FeaturedProjects } from '../components/FeaturedProjects';
import { Hero } from '../components/Hero';
import { HomeOverview } from '../components/HomeOverview';
import { Intro } from '../components/Intro';

export const HomePage = () => (
  <>
    <Hero />
    <Intro />
    <FeaturedProjects />
    <HomeOverview />
  </>
);
