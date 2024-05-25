import {
  frontend,
  backend,
  company,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  linux,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  api,
  sql,
  flask,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  automation,
  kasper,
  leon,
  fivver,
  grill, 
  foodie
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Automation',
    icon: automation,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'linux',
    icon: linux,
  },
  {
    name: 'sql',
    icon: sql,
  },
  {
    name: 'api',
    icon: api,
  },
  {
    name: 'flask',
    icon: flask,
  },
];

const experiences = [
  {
    title: 'Full-Stack Developer',
    company_name: 'Fiverr',
    icon: fivver,
    iconBg: '#333333',
    date: 'May 2022 - present',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'RTC Egypt',
    icon: microverse,
    iconBg: '#333333',
    date: 'Aug 2022 - Dec 2022',
  },
  {
    title: 'Web Development Teacher Assistant',
    company_name: 'We Schools',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Feb 2024 - May 2024',
  }
];

const projects = [
  {
    id: 'project-4',
    name: 'Ecommerce',
    description:
      'A website that offers a range of services tailored to help businesses thrive in today’s digital landscape',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leon,
    repo: '',
    demo: 'https://mohameddiaaeldin.github.io/Leon-template/',
  },
   
  {
    id: 'project-2',
    name: 'Grill',
    description: "A restaurant's website for a seamless dining experience. Discover our menu, make reservations, and stay updated on events. Your culinary journey awaits!",
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: grill,
    repo: '',
    demo: 'https://cool-biscotti-90eb1a.netlify.app/',
  } ,
  
  {
    id: 'project-4',
    name: 'Foodie',
    description: "A website for fast and flavorful dining on our website. Browse our menu, order online, and get your favorites delivered with speed and convenience. Your quick and delicious meal is just a click away!",
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: foodie,
    repo: '',
    demo: 'https://glittery-bubblegum-500f75.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'SaS Website',
    description: ' A versatile website designed to support businesses in their digital transformation',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: kasper,
    repo: 'https://inspiring-medovik-37d3b3.netlify.app/',
    demo: 'https://mohameddiaaeldin.github.io/Kasper-Template/',
  } ,
  {
    id: 'project-1',
    name: 'company profile',
    description: 'A user-friendly website that helps businesses operate more efficiently and provides an excellent experience for their customers. ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: company,
    repo: '',
    demo: 'https://mohameddiaaeldin.github.io/company-profile/',
  }
];

export { services, technologies, experiences, projects };
