import {
  CodingProfile,
  PDFResource,
  InterviewExperience,
  Project,
  HRQuestion,
  CompanyPrep
} from '@/types/workspace';

/* =======================
   CODING PROFILES (10)
   ======================= */

export const sampleCodingProfiles: CodingProfile[] = [
  {
    id: '1',
    name: 'LeetCode Profile',
    platform: 'LeetCode',
    url: 'https://leetcode.com/u/RtLavKush7/',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'GeeksforGeeks Profile',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/profile/rtkush/',
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    name: '.',
    platform: 'CodeChef',
    url: 'https://www.codechef.com/users/rtkush',
    createdAt: new Date().toISOString()
  },
  {
    id: '4',
    name: '.',
    platform: 'Codeforces',
    url: 'https://codeforces.com/profile/rtkush',
    createdAt: new Date().toISOString()
  },
  {
    id: '5',
    name: 'HackerRank Profile',
    platform: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/kush22aur',
    createdAt: new Date().toISOString()
  },
  {
    id: '6',
    name: 'Portfolio Profile',
    platform: 'Portfolio',
    url: 'https://port-rtkush.vercel.app/',
    createdAt: new Date().toISOString()
  },
  {
    id: '7',
    name: '.',
    platform: 'InterviewBit',
    url: 'https://www.interviewbit.com/profile/rtkush',
    createdAt: new Date().toISOString()
  },
  {
    id: '8',
    name: '.',
    platform: 'Coding Ninjas',
    url: 'https://www.codingninjas.com/codestudio/profile/rtkush',
    createdAt: new Date().toISOString()
  },
  {
    id: '9',
    name: 'Linkedin Profile',
    platform: 'Linkedin',
    url: 'https://www.linkedin.com/in/kush-kumar-505477202/',
    createdAt: new Date().toISOString()
  },
  {
    id: '10',
    name: 'GitHub Profile',
    platform: 'GitHub',
    url: 'https://github.com/RtKush',
    createdAt: new Date().toISOString()
  }
];

/* =======================
   PDF / RESOURCES (10)
   Allowed categories:
   dsa | notes | resume | company | other
   ======================= */

export const samplePDFResources: PDFResource[] = [
  {
    id: '1',
    name: 'Striver SDE Sheet',
    category: 'dsa',
    url: 'https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Love Babbar DSA Sheet',
    category: 'dsa',
    url: 'https://450dsa.com/',
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    name: 'DBMS Notes',
    category: 'notes',
    subject: 'Database Management',
    url: 'https://drive.google.com/file/d/dbms',
    createdAt: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Operating System Notes',
    category: 'notes',
    subject: 'Operating Systems',
    url: 'https://drive.google.com/file/d/os',
    createdAt: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Computer Networks Notes',
    category: 'notes',
    subject: 'Computer Networks',
    url: 'https://drive.google.com/file/d/cn',
    createdAt: new Date().toISOString()
  },
  {
    id: '6',
    name: 'OOPs Notes',
    category: 'notes',
    subject: 'Object Oriented Programming',
    url: 'https://drive.google.com/file/d/oops',
    createdAt: new Date().toISOString()
  },
  {
    id: '7',
    name: 'System Design Basics',
    category: 'notes',
    subject: 'System Design',
    url: 'https://drive.google.com/file/d/systemdesign',
    createdAt: new Date().toISOString()
  },
  {
    id: '8',
    name: 'Java Interview Questions',
    category: 'notes',
    subject: 'Java',
    url: 'https://drive.google.com/file/d/java',
    createdAt: new Date().toISOString()
  },
  {
    id: '9',
    name: 'SQL Interview Cheat Sheet',
    category: 'notes',
    subject: 'SQL',
    url: 'https://drive.google.com/file/d/sql',
    createdAt: new Date().toISOString()
  },
  {
    id: '10',
    name: 'My Resume',
    category: 'resume',
    url: 'https://drive.google.com/file/d/resume',
    createdAt: new Date().toISOString()
  }
];

/* =======================
   INTERVIEW EXPERIENCES
   ======================= */

export const sampleInterviewExperiences: InterviewExperience[] = [
  {
    id: '1',
    company: 'Google',
    role: 'Software Engineer',
    date: '2024-01-15',
    rounds: '5 rounds - Phone Screen, 2 Technical, System Design, Behavioral',
    experience:
      'Started with a phone screen focusing on basic DSA. The technical rounds covered graphs, dynamic programming, and tree problems. System design was about designing a URL shortener.',
    result: 'selected',
    tips: 'Practice system design, focus on communication',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    company: 'Microsoft',
    role: 'SDE Intern',
    date: '2024-02-20',
    rounds: '3 rounds - Online Assessment, Technical, HR',
    experience:
      'Online assessment had 3 coding questions. Technical round covered arrays and strings. HR focused on behavioral questions.',
    result: 'pending',
    tips: 'Be clear with your approach before coding',
    createdAt: new Date().toISOString()
  }
];

/* =======================
   PROJECTS
   ======================= */

export const sampleProjects: Project[] = [
  {
    id: '1',
    name: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://myecommerce.com',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates and team features.',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/taskapp',
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    name: 'ML Image Classifier',
    description:
      'A machine learning project that classifies images using TensorFlow and deploys via Flask API.',
    techStack: ['Python', 'TensorFlow', 'Flask', 'Docker'],
    githubUrl: 'https://github.com/username/ml-classifier',
    createdAt: new Date().toISOString()
  }
];

/* =======================
   HR QUESTIONS
   ======================= */

export const sampleHRQuestions: HRQuestion[] = [
  {
    id: '1',
    question: 'Tell me about yourself',
    answer:
      'I am a computer science student passionate about building scalable applications.',
    category: 'hr',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    question: 'What is your greatest strength?',
    answer:
      'My greatest strength is problem-solving and logical thinking.',
    category: 'hr',
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    question: 'Explain the difference between REST and GraphQL',
    answer:
      'REST uses multiple endpoints while GraphQL uses a single endpoint for flexible data fetching.',
    category: 'technical',
    createdAt: new Date().toISOString()
  }
];

/* =======================
   COMPANY PREP
   ======================= */

export const sampleCompanyPrep: CompanyPrep[] = [
  {
    id: '1',
    company: 'Google',
    notes:
      'Focus on algorithmic thinking, system design, and behavioral preparation.',
    resources: [
      'LeetCode Google tag',
      'Grokking System Design',
      'STAR method'
    ],
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    company: 'Amazon',
    notes:
      'Leadership principles are critical. Prepare strong STAR stories.',
    resources: [
      'Amazon Leadership Principles',
      'LeetCode Amazon tag',
      'System Design Primer'
    ],
    createdAt: new Date().toISOString()
  }
];
