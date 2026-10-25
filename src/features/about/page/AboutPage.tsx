import { Services } from '../../home/components/Services';
import { AboutCta } from '../components/AboutCta';
import { AboutHero } from '../components/AboutHero';
import { Principles } from '../components/Principles';
import { Timeline } from '../components/Timeline';

export const AboutPage = () => (
  <>
    <AboutHero />
    <Principles />
    <Timeline />
    <Services />
    <AboutCta />
  </>
);
