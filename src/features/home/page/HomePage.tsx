import { ContactBand } from '../../../shared/components/ContactBand';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Hero } from '../components/Hero';
import { HomeOverview } from '../components/HomeOverview';

export const HomePage = () => (
  <>
    <Hero />
    <FeaturedProjects />
    <HomeOverview />
    <ContactBand />
  </>
);
