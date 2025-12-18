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
  },
  {
    id: '1',
    question: 'What is React.js?',
    answer:
      'React is a JavaScript library used to build fast and interactive user interfaces using components and a virtual DOM.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    question: 'Difference between React and JavaScript?',
    answer:
      'JavaScript is a general-purpose programming language, while React is a JavaScript library used to build UI components and manage state efficiently.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    question: 'React is a component-based library — explain.',
    answer:
      'React breaks the UI into small reusable components, making the code maintainable, scalable, and easy to debug.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '4',
    question: 'What kind of components are supported in React?',
    answer:
      'React supports Functional components and Class components.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '5',
    question: 'What is a functional component?',
    answer:
      'A functional component is a JavaScript function that returns JSX and uses hooks for state and lifecycle management.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '6',
    question: 'What is a class component?',
    answer:
      'A class component is written using ES6 classes and manages state using this.state and lifecycle methods.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '7',
    question: 'Difference between functional and class components.',
    answer:
      'Functional components are simpler and use hooks, while class components use lifecycle methods. Functional components are recommended in modern React.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '8',
    question: 'What are hooks in React?',
    answer:
      'Hooks are functions that allow functional components to use state, lifecycle, and other React features.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '9',
    question: 'What is useState and its advantages?',
    answer:
      'useState is a hook used to manage state in functional components. It is simple, clean, and avoids class components.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '10',
    question: 'Features of React.js',
    answer:
      'Component-based architecture, Virtual DOM, One-way data flow, Hooks, Fast rendering, and a strong ecosystem.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '11',
    question: 'How to start a React application?',
    answer:
      'By using tools like Create React App or Vite to bootstrap a new React project.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '12',
    question: 'Can we create a React app without create-react-app?',
    answer:
      'Yes, using tools like Vite, Webpack, Parcel, Next.js, or manual bundler setup.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '13',
    question: 'What is JSX?',
    answer:
      'JSX stands for JavaScript XML and allows writing HTML-like syntax inside JavaScript.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '14',
    question: 'What is middleware in React?',
    answer:
      'React itself has no middleware. Middleware is used in state management tools like Redux for handling async logic.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '15',
    question: 'How does React handle concurrency?',
    answer:
      'React 18 uses Concurrent Mode and Fiber architecture to improve performance and avoid blocking UI updates.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '16',
    question: 'What is Virtual DOM?',
    answer:
      'A lightweight JavaScript representation of the real DOM that React updates efficiently.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '17',
    question: 'What is reconciliation in React?',
    answer:
      'The process where React compares old and new Virtual DOM trees and updates only the changed parts.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '18',
    question: 'Advantages of React',
    answer:
      'Fast UI updates, reusable components, large community support, SEO-friendly frameworks, and easy state management.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '19',
    question: 'Can we use relational & non-relational databases with React?',
    answer:
      'React is frontend-only and interacts with databases through backend APIs.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '20',
    question: 'What is React DevTools?',
    answer:
      'A browser extension used to inspect React components, props, state, and performance.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '21',
    question: 'Name built-in hooks of React',
    answer:
      'useState, useEffect, useRef, useMemo, useCallback, useContext, useReducer, useLayoutEffect, useImperativeHandle, useDebugValue.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '22',
    question: 'What is package.json in a React project?',
    answer:
      'It stores project metadata, dependencies, scripts, and configuration.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '23',
    question: 'How to write Hello World in React?',
    answer:
      'By creating a functional component that returns JSX with Hello World text.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '24',
    question: 'Why do we use JSX?',
    answer:
      'JSX improves readability, avoids manual React.createElement calls, and speeds up development.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '25',
    question: 'What are promises in React?',
    answer:
      'Promises handle asynchronous operations such as API calls, often used inside useEffect.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '26',
    question: 'What is event-driven programming in React?',
    answer:
      'React listens to user events like click and submit and triggers callback functions.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '27',
    question: 'What is the use of useEffect?',
    answer:
      'useEffect is used to handle side effects like API calls, timers, subscriptions, and DOM updates.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '28',
    question: 'What are streams in React?',
    answer:
      'React does not support streams directly. Streaming is used in frameworks like Next.js for SSR.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '29',
    question: 'What is a callback function?',
    answer:
      'A function passed as an argument to another function, commonly used in event handlers.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '30',
    question: 'Use of router modules in React',
    answer:
      'React Router enables navigation between pages without reloading the browser.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '31',
    question: 'What are controlled components?',
    answer:
      'Components where form input values are controlled by React state.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '32',
    question: 'What are uncontrolled components?',
    answer:
      'Components where form data is handled by the DOM using refs.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '33',
    question: 'What is Context API?',
    answer:
      'A global state management solution to avoid prop drilling.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '34',
    question: 'What is Redux model in React?',
    answer:
      'Redux uses a central store to manage global state using actions and reducers.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '35',
    question: 'How can we implement CRUD in React?',
    answer:
      'By using API calls with HTTP methods like POST, GET, PUT, and DELETE.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '36',
    question: 'Explain the process of file uploading in React',
    answer:
      'Using file input, storing the file in state, and sending it to the backend via FormData.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '37',
    question: 'Which packages are used for mail in React?',
    answer:
      'React uses services like EmailJS or backend APIs to send emails.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '38',
    question: 'How can we connect database with React?',
    answer:
      'React connects to databases through backend APIs, not directly.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '39',
    question: 'How to handle environment variables in React?',
    answer:
      'By using .env files and accessing variables via process.env.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '40',
    question: 'Which packages are used for password encryption in React?',
    answer:
      'Password encryption is handled in the backend using libraries like bcrypt.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '41',
    question: 'Folder structure of React',
    answer:
      'A common structure includes src with components, pages, hooks, App.js, index.js, and public folder.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '42',
    question: 'What are props?',
    answer:
      'Props are read-only data passed from parent to child components.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '43',
    question: 'Difference between query params and route params?',
    answer:
      'Query params appear after ? while route params are part of the URL path.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '44',
    question: 'How to implement Google Auth in React?',
    answer:
      'Using services like Firebase Auth, Google Identity Services, or Auth0.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '45',
    question: 'What is WebSocket in React?',
    answer:
      'A real-time communication protocol used for chat, notifications, and live updates.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '46',
    question: 'How can we manage session in React?',
    answer:
      'Using cookies, localStorage, sessionStorage, JWT tokens, or global state.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '47',
    question: 'Why do we use axios or fetch?',
    answer:
      'They simplify API calls, error handling, and JSON conversion.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '48',
    question: 'How to implement search functionality in React?',
    answer:
      'By storing input in state and filtering data based on the search query.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: '49',
    question: 'How to sort data in React?',
    answer:
      'By using the JavaScript sort method before rendering the list.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: 'node-1',
    question: 'What is Node.js?',
    answer:
      'Node.js is a runtime environment that allows JavaScript to run on the server side. It is built on Chrome’s V8 engine.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: 'node-2',
    question: 'Difference between Node.js and JavaScript?',
    answer:
      'JavaScript runs in the browser, while Node.js runs on the server and can access files, databases, and servers.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: 'node-3',
    question: 'How does Node.js handle concurrency if it is single-threaded?',
    answer:
      'Node.js uses an event loop and non-blocking I/O to handle multiple requests asynchronously.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: 'node-4',
    question: 'What types of API functions are supported in Node.js?',
    answer:
      'Node.js supports synchronous (blocking) and asynchronous (non-blocking) API functions.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: 'node-5',
    question: 'What is a synchronous function?',
    answer:
      'A synchronous function blocks execution until the current task is completed.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: 'node-6',
    question: 'What is an asynchronous function?',
    answer:
      'An asynchronous function executes tasks in the background without blocking the main thread.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: 'node-7',
    question: 'Difference between Promise and Async/Await',
    answer:
      'Promises use then/catch syntax, while async/await provides cleaner and more readable syntax.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: 'node-8',
    question: 'What is a module in Node.js?',
    answer:
      'A module is a reusable block of code that can be imported using require() or import.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: 'node-9',
    question: 'What is npm and its advantage?',
    answer:
      'npm is the Node Package Manager used to install and manage dependencies with a huge package ecosystem.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: 'node-10',
    question: 'Features of Node.js',
    answer:
      'Non-blocking I/O, event-driven architecture, fast execution, scalability, and cross-platform support.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: 'node-11',
    question: 'What is Express.js?',
    answer:
      'Express.js is a lightweight Node.js framework used to build web servers and REST APIs.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: 'node-12',
    question: 'What is middleware in Node.js?',
    answer:
      'Middleware is a function that runs between the request and response to process logic like auth or logging.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: 'node-13',
    question: 'What is the Event Loop in Node.js?',
    answer:
      'The event loop manages asynchronous callbacks and executes them without blocking the main thread.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: 'node-14',
    question: 'What are streams in Node.js?',
    answer:
      'Streams are used to handle continuous data flow, such as file streaming or large uploads.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: 'node-15',
    question: 'What is callback hell?',
    answer:
      'Callback hell occurs when multiple nested callbacks make code difficult to read and maintain.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: 'node-16',
    question: 'Which package is used for sending emails in Node.js?',
    answer:
      'nodemailer is commonly used to send emails in Node.js applications.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: 'node-17',
    question: 'How to handle environment variables in Node.js?',
    answer:
      'Environment variables are stored in a .env file and accessed using the dotenv package.',
    category: 'technical',
    createdAt: new Date().toISOString()
  },
  {
    id: 'node-18',
    question: 'Which package is used for password encryption?',
    answer:
      'bcrypt or bcryptjs is used to securely hash passwords.',
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
