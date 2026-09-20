import { ContactCTA } from '../../contact/components/ContactCTA';
import { Faq } from '../../contact/components/Faq';
import { Capabilities } from '../../skills/components/Capabilities';
import { SkillsStack } from '../../skills/components/SkillsStack';
import { AboutPreview } from '../components/AboutPreview';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Hero } from '../components/Hero';
import { Intro } from '../components/Intro';
import { Services } from '../components/Services';

export const HomePage = () => (
  <>
    <Hero />
    <Intro />
    <AboutPreview />
    <FeaturedProjects />
    <Capabilities />
    <Services />
    <SkillsStack />
    <Faq />
    <ContactCTA />
  </>
);
