import { Capabilities } from '../components/Capabilities';
import { SkillsStack } from '../components/SkillsStack';

export const SkillsPage = () => (
  <div className="pt-20">
    <h1 className="sr-only">Skills and capabilities</h1>
    <SkillsStack />
    <Capabilities />
  </div>
);
