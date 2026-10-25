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
      'Built foundations in programming, data structures and software design — and started shipping my own web projects alongside coursework.',
  },
  {
    start: 'June 2026',
    end: 'Present',
    title: 'MERN Stack Training',
    organization: 'Seriyans Coding School',
    description:
      'Industry-focused MERN training with real project work and code review — where most of my recent builds were shaped.',
  },
  {
    start: '2026',
    end: 'Present',
    title: 'Master of Computer Applications',
    organization: 'Devi Ahilya Vishwavidyalaya (DAVV), Indore',
    description:
      'Deepening my software engineering and modern web development practice while continuing to build full-stack projects.',
  },
];
