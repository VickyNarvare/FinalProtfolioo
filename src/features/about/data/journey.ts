interface JourneyEntry {
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
      'Completed a B.Sc. in Computer Science at Government Model Autonomous Holkar Science College, affiliated with DAVV, Indore — building strong foundations in programming, data structures and software design.',
  },
  {
    start: 'June 2026',
    end: 'Present',
    title: 'Seriyans Coding School',
    organization: 'Seriyans Coding School',
    description:
      'Joined Seriyans Coding School to turn theory into practice through industry-focused MERN stack training, real project work and code review.',
  },
  {
    start: '2026',
    end: 'Present',
    title: 'Master of Computer Applications',
    organization: 'Devi Ahilya Vishwavidyalaya (DAVV), Indore',
    description:
      'Currently pursuing a Master of Computer Applications at Devi Ahilya Vishwavidyalaya (DAVV), Indore, deepening my knowledge of software engineering and modern web development.',
  },
];
