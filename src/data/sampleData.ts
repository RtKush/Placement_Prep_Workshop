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
    id: '3',
    name: 'DBMS Notes',
    category: 'notes',
    subject: 'Database Management',
    url: 'https://drive.google.com/file/d/171K_LbrOrUyGmduHEh3YM-JUdiOtw_Nk/view?usp=drive_link',
    createdAt: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Operating System Notes',
    category: 'notes',
    subject: 'Operating Systems',
    url: 'https://drive.google.com/file/d/1olCSvkTzRq56b6r5lZgBnGpH48z1PClW/view?usp=drive_link',
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
    url: 'https://drive.google.com/file/d/1GHQ4pPoeplM2L5qvrWr5rKkroI-Jaoxz/view?usp=drive_link',
    createdAt: new Date().toISOString()
  },
  {
    id: '9',
    name: 'SQL Interview Cheat Sheet',
    category: 'notes',
    subject: 'SQL',
    url: 'https://drive.google.com/file/d/1ImsXtcYwFAwMImt87l7HUdD3u_hM9H2S/view?usp=drive_link',
    createdAt: new Date().toISOString()
  },
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
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    overview:
      'A full-stack e-commerce platform that allows users to browse products, add them to cart, and securely complete payments.',
    flow:
      'Users sign up and log in using JWT authentication. Products are fetched from the backend and displayed on the frontend. Cart state is managed on the client, and Stripe handles secure payment processing.',
    features:
      'User authentication, product listing, cart management, Stripe payment integration, order history.',
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://myecommerce.com',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Task Management App',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    overview:
      'A collaborative task management application designed for teams to track tasks and progress efficiently.',
    flow:
      'Users authenticate and create teams. Tasks are created and assigned to team members. Real-time updates ensure everyone sees changes instantly.',
    features:
      'Team collaboration, task assignment, real-time updates, role-based access.',
    githubUrl: 'https://github.com/username/taskapp',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'ML Image Classifier',
    techStack: ['Python', 'TensorFlow', 'Flask', 'Docker'],
    overview:
      'A machine learning application that classifies images using a trained deep learning model.',
    flow:
      'Images are sent to a Flask API, processed by a TensorFlow model, and predictions are returned to the client.',
    features:
      'Image classification, REST API, Dockerized deployment.',
    githubUrl: 'https://github.com/username/ml-classifier',
    createdAt: new Date().toISOString(),
  },
];


   /* =======================
   HR QUESTIONS
   ======================= */

export const sampleHRQuestions: HRQuestion[] = [
  {
    id: 'hr-1',
    question: 'Tell me about yourself',
    answer:
      'I am a computer science student passionate about building scalable applications.',
    category: 'hr',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'hr-2',
    question: 'What is your greatest strength?',
    answer:
      'My greatest strength is problem-solving and logical thinking.',
    category: 'hr',
    createdAt: new Date().toISOString(),
  }
];

/* =======================
   TECHNICAL QnA (FULL)
   ======================= */

export const sampleTechnicalQnA = [
  /* =======================
     REACT QUESTIONS (49)
     ======================= */
  {
    tech: 'React',
    questions: [
      { id: 'react-1', question: 'What is React.js?', answer: 'React is a JavaScript library used to build fast and interactive user interfaces using components and a virtual DOM.' },
      { id: 'react-2', question: 'Difference between React and JavaScript?', answer: 'JavaScript is a programming language, while React is a JavaScript library for building UI components.' },
      { id: 'react-3', question: 'React is a component-based library — explain.', answer: 'React breaks UI into reusable components making apps scalable and maintainable.' },
      { id: 'react-4', question: 'What kind of components are supported in React?', answer: 'React supports Functional and Class components.' },
      { id: 'react-5', question: 'What is a functional component?', answer: 'A JavaScript function that returns JSX and uses hooks.' },
      { id: 'react-6', question: 'What is a class component?', answer: 'An ES6 class that extends React.Component and uses lifecycle methods.' },
      { id: 'react-7', question: 'Difference between functional and class components.', answer: 'Functional components use hooks and are simpler; class components use lifecycle methods.' },
      { id: 'react-8', question: 'What are hooks in React?', answer: 'Hooks let functional components use state and lifecycle features.' },
      { id: 'react-9', question: 'What is useState?', answer: 'A hook used to manage state in functional components.' },
      { id: 'react-10', question: 'Features of React.js', answer: 'Virtual DOM, components, one-way data flow, hooks, fast rendering.' },
      { id: 'react-11', question: 'How to start a React application?', answer: 'Using Create React App or Vite.' },
      { id: 'react-12', question: 'Can we create React app without CRA?', answer: 'Yes, using Vite, Webpack, Parcel, or Next.js.' },
      { id: 'react-13', question: 'What is JSX?', answer: 'JSX allows writing HTML-like syntax inside JavaScript.' },
      { id: 'react-14', question: 'What is middleware in React?', answer: 'React has no middleware; Redux uses middleware.' },
      { id: 'react-15', question: 'How does React handle concurrency?', answer: 'React 18 uses Fiber and concurrent rendering.' },
      { id: 'react-16', question: 'What is Virtual DOM?', answer: 'A lightweight copy of real DOM used for efficient updates.' },
      { id: 'react-17', question: 'What is reconciliation?', answer: 'React compares old and new Virtual DOM to update UI efficiently.' },
      { id: 'react-18', question: 'Advantages of React', answer: 'Fast rendering, reusable components, strong ecosystem.' },
      { id: 'react-19', question: 'Can React connect to database directly?', answer: 'No, React uses backend APIs.' },
      { id: 'react-20', question: 'What is React DevTools?', answer: 'Browser extension for inspecting React components.' },
      { id: 'react-21', question: 'Built-in hooks of React?', answer: 'useState, useEffect, useRef, useContext, etc.' },
      { id: 'react-22', question: 'What is package.json?', answer: 'Manages dependencies and scripts.' },
      { id: 'react-23', question: 'Hello World in React?', answer: 'A component returning JSX with Hello World.' },
      { id: 'react-24', question: 'Why JSX?', answer: 'Improves readability and developer experience.' },
      { id: 'react-25', question: 'What are promises?', answer: 'Used for handling async operations.' },
      { id: 'react-26', question: 'Event-driven programming?', answer: 'UI updates based on user actions.' },
      { id: 'react-27', question: 'useEffect use?', answer: 'Handling side effects like API calls.' },
      { id: 'react-28', question: 'Streams in React?', answer: 'Not supported directly.' },
      { id: 'react-29', question: 'What is callback?', answer: 'Function passed as argument.' },
      { id: 'react-30', question: 'React Router use?', answer: 'Client-side routing.' },
      { id: 'react-31', question: 'Controlled components?', answer: 'Form elements controlled by state.' },
      { id: 'react-32', question: 'Uncontrolled components?', answer: 'Form handled by DOM refs.' },
      { id: 'react-33', question: 'Context API?', answer: 'Global state management.' },
      { id: 'react-34', question: 'Redux model?', answer: 'Centralized store with actions and reducers.' },
      { id: 'react-35', question: 'CRUD in React?', answer: 'Using APIs with HTTP methods.' },
      { id: 'react-36', question: 'File upload process?', answer: 'Using input type file and FormData.' },
      { id: 'react-37', question: 'Mail packages?', answer: 'EmailJS or backend service.' },
      { id: 'react-38', question: 'DB connection?', answer: 'Through backend APIs.' },
      { id: 'react-39', question: 'Env variables?', answer: 'Using .env files.' },
      { id: 'react-40', question: 'Password encryption?', answer: 'Handled in backend.' },
      { id: 'react-41', question: 'Folder structure?', answer: 'src, components, pages, hooks.' },
      { id: 'react-42', question: 'Props?', answer: 'Read-only data passed to components.' },
      { id: 'react-43', question: 'Query vs Route params?', answer: 'Query uses ?, route uses path.' },
      { id: 'react-44', question: 'Google Auth?', answer: 'Firebase/Auth0.' },
      { id: 'react-45', question: 'WebSocket?', answer: 'Real-time communication.' },
      { id: 'react-46', question: 'Session management?', answer: 'JWT, cookies, storage.' },
      { id: 'react-47', question: 'Axios vs fetch?', answer: 'Simplify API calls.' },
      { id: 'react-48', question: 'Search in React?', answer: 'Filter state data.' },
      { id: 'react-49', question: 'Sorting in React?', answer: 'Using JS sort before render.' },
    ],
  },

  /* =======================
     NODE.JS QUESTIONS (18)
     ======================= */
  {
    tech: 'Node.js',
    questions: [
      { id: 'node-1', question: 'What is Node.js?', answer: 'Runtime environment for server-side JS.' },
      { id: 'node-2', question: 'Node vs JS?', answer: 'JS runs in browser, Node runs on server.' },
      { id: 'node-3', question: 'Concurrency in Node?', answer: 'Handled using event loop and async I/O.' },
      { id: 'node-4', question: 'API types?', answer: 'Sync and async.' },
      { id: 'node-5', question: 'Synchronous function?', answer: 'Blocks execution.' },
      { id: 'node-6', question: 'Asynchronous function?', answer: 'Non-blocking execution.' },
      { id: 'node-7', question: 'Promise vs async/await?', answer: 'Async/await is cleaner.' },
      { id: 'node-8', question: 'What is module?', answer: 'Reusable code block.' },
      { id: 'node-9', question: 'What is npm?', answer: 'Node package manager.' },
      { id: 'node-10', question: 'Features of Node.js?', answer: 'Fast, scalable, non-blocking.' },
      { id: 'node-11', question: 'Express.js?', answer: 'Node framework for APIs.' },
      { id: 'node-12', question: 'Middleware?', answer: 'Runs between req-res.' },
      { id: 'node-13', question: 'Event Loop?', answer: 'Handles async callbacks.' },
      { id: 'node-14', question: 'Streams?', answer: 'Handle large data flow.' },
      { id: 'node-15', question: 'Callback hell?', answer: 'Nested callbacks issue.' },
      { id: 'node-16', question: 'Email package?', answer: 'nodemailer.' },
      { id: 'node-17', question: 'Env variables?', answer: 'dotenv package.' },
      { id: 'node-18', question: 'Password encryption?', answer: 'bcrypt.' },
  { id: 'node-19', question: 'What is REPL?', answer: 'Interactive Node.js shell.' },
  { id: 'node-20', question: 'Built-in modules?', answer: 'fs, http, path, os, crypto.' },
  { id: 'node-21', question: 'What is package.json?', answer: 'Project metadata & dependencies.' },
  { id: 'node-22', question: 'Why Express.js?', answer: 'Simplifies routing & APIs.' },
  { id: 'node-23', question: 'Promises?', answer: 'Handle async operations.' },
  { id: 'node-24', question: 'Event-driven programming?', answer: 'Execution based on events.' },
  { id: 'node-25', question: 'What is Buffer?', answer: 'Stores binary data.' },
  { id: 'node-26', question: 'Streams?', answer: 'Continuous data handling.' },
  { id: 'node-27', question: 'fs module?', answer: 'File system operations.' },
  { id: 'node-28', question: 'body-parser?', answer: 'Parses request body.' },
  { id: 'node-29', question: 'CORS?', answer: 'Cross-origin request handling.' },
  { id: 'node-30', question: 'CRUD operations?', answer: 'Create, Read, Update, Delete.' },
  { id: 'node-31', question: 'File upload?', answer: 'multer package.' },
  { id: 'node-32', question: 'Database connection?', answer: 'Using drivers or ORM.' },
  { id: 'node-33', question: 'Session management?', answer: 'express-session.' },
  { id: 'node-34', question: 'JWT?', answer: 'Token-based authentication.' },
  { id: 'node-35', question: 'What is Mongoose?', answer: 'MongoDB ODM.' },
  { id: 'node-36', question: 'Cluster module?', answer: 'Uses multiple CPU cores.' },
  { id: 'node-37', question: 'req & res?', answer: 'Request and response objects.' },
  { id: 'node-38', question: 'Query vs Route params?', answer: 'Filter vs identify resource.' },
  { id: 'node-39', question: 'WebSocket?', answer: 'Real-time communication.' },
  { id: 'node-40', question: 'Google Auth?', answer: 'OAuth authentication.' },
  { id: 'node-41', question: 'Search in MongoDB?', answer: 'Regex matching.' },
  { id: 'node-42', question: 'Count documents?', answer: 'countDocuments().' },
  { id: 'node-43', question: 'What is REST API?', answer: 'Stateless client-server API.' },
  { id: 'node-44', question: 'HTTP methods?', answer: 'GET, POST, PUT, DELETE.' },
  { id: 'node-45', question: 'Rate limiting?', answer: 'Limit API requests.' },
  { id: 'node-46', question: 'Error handling?', answer: 'try-catch & middleware.' }

    ],
  },
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
