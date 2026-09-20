export interface JourneyEntry {
  start: string;
  end: string;
  title: string;
  organization: string;
  description: string;
}

export const journey: JourneyEntry[] = [
  {
    start: '2023',
    end: '2026',
    title: 'B.Sc. Computer Science',
    organization:
      'Government Model Autonomous Holkar Science College, DAVV, Indore',
    description:
      'Completed B.Sc. in Computer Science from Government Model Autonomous Holkar Science College, affiliated with DAVV, Indore.',
  },
  {
    start: 'June 2026',
    end: 'Present',
    title: 'Seriyans Coding School',
    organization: 'Seriyans Coding School',
    description:
      'Joined Seriyans Coding School to gain practical skills and industry-focused experience in MERN stack development.',
  },
  {
    start: '2026',
    end: 'Present',
    title: 'Master of Computer Applications',
    organization: 'Devi Ahilya Vishwavidyalaya (DAVV), Indore',
    description:
      'Currently pursuing Master of Computer Applications (MCA) from Devi Ahilya Vishwavidyalaya (DAVV), Indore.',
  },
];
