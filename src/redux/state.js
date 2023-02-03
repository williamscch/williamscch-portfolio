import nextId from 'react-id-generator';

const state = {
  services: [
    {
      id: nextId('services-'),
      title: 'Design',
      description: 'Design client-side and server-side architecture',
      icon: 'fa-solid fa-object-ungroup',
    },
    {
      id: nextId('services-'),
      title: 'Front-End Development',
      description:
        'Build the front-end of applications through appealing visual design',
      icon: 'fa-solid fa-laptop-code',
    },
    {
      id: nextId('services-'),
      title: 'Back-End and DB Development',
      description:
        'Develop and manage well-functioning databases and applications',
      icon: 'fa-solid fa-database',
    },
    {
      id: nextId('services-'),
      title: 'APIs',
      description: 'Write effective APIs',
      icon: 'fa-solid fa-cloud-arrow-down',
    },
    {
      id: nextId('services-'),
      title: 'Test and Quality Assurance',
      description: 'Test software to ensure responsiveness and efficiency',
      icon: 'fa-solid fa-list-check',
    },
    {
      id: nextId('services-'),
      title: 'Troubleshoot',
      description: 'Debug and Upgrade Software',
      icon: 'fa-solid fa-bug-slash',
    },
  ],

  about: {
    column1:
      'I"m Williams, a full-stack developer, who graduated from Microverse, a remote software development school with people from all around the world. Before programming, I have a Bachelor"s Degree in Accounting. I graduated as an International Haute Cuisine Chef Technician, and I got an Advanced Certificate in English. I have a large experience in communication, teamwork, empathy with different people, and working under pressure with tight deadlines, skills needed to succeed in the development world. I"ve spent a year completely immersed in pair-programming remote development, doing everything from landing pages to Rails APIs, to build pretty client-side web apps following wireframes and design lines.',
    column2:
      'I have grown my stack with languages like JavaScript and Ruby and frameworks like React and Rails. In all my studies in different areas, I have gained abilities like fighting through difficulty and never giving up because constant practice is the key to growth. I have experience managing a restaurant for over 3 years, and I could say that this has taught me that responsibility is a fundamental key in all areas of life, as well as knowing how to resolve conflicts peacefully and the value of working. To relax I love practicing sports, and cooking... I"m a cinema and music lover.',
  },

  portfolio: [
    {
      id: nextId('project-'),
      title: 'Space Travelers Hub',
      description: '',
      languages: [],
      live: '',
      source: '',
      image: '',
    },
    {
      id: nextId('project-'),
      title: 'Rental Cars',
      description: '',
      languages: [],
      live: '',
      source: '',
      image: '',
    },
    {
      id: nextId('project-'),
      title: 'Recipe App',
      description: '',
      languages: [],
      live: '',
      source: '',
      image: '',
    },
    {
      id: nextId('project-'),
      title: 'My Spend Manager',
      description: '',
      languages: [],
      live: '',
      source: '',
      image: '',
    },
    {
      id: nextId('project-'),
      title: 'Williams Blog',
      description: '',
      languages: [],
      live: '',
      source: '',
      image: '',
    },
    {
      id: nextId('project-'),
      title: 'Forex App',
      description: '',
      languages: [],
      live: '',
      source: '',
      image: '',
    },
    {
      id: nextId('project-'),
      title: 'TV Shows',
      description: '',
      languages: [],
      live: '',
      source: '',
      image: '',
    },
    {
      id: nextId('project-'),
      title: 'Leader-board',
      description: '',
      languages: [],
      live: '',
      source: '',
      image: '',
    },
    {
      id: nextId('project-'),
      title: 'Math Magicians',
      description: '',
      languages: [],
      live: '',
      source: '',
      image: '',
    },
    {
      id: nextId('project-'),
      title: 'To-Do List',
      description: '',
      languages: [],
      live: '',
      source: '',
      image: '',
    },
    {
      id: nextId('project-'),
      title: 'Pizza Restaurant',
      description: '',
      languages: [],
      live: '',
      source: '',
      image: '',
    },
  ],
  contact: {
    social: [
      {
        id: 1,
        name: 'Github',
        url: 'https://github.com/williamscch',
        icon: 'fa-brands fa-github',
      },
      {
        id: 1,
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/williamscolmenaresch',
        icon: 'fa-brands fa-linkedin-in',
      },
      {
        id: 1,
        name: 'Twitter',
        url: 'https://twitter.com/wdavidcch',
        icon: 'fa-brands fa-twitter',
      },
      {
        id: 1,
        name: 'Medium',
        url: 'https://medium.com/@williamscch',
        icon: 'fa-brands fa-medium',
      },
      {
        id: 1,
        name: 'Angellist',
        url: 'https://angel.co/williamscch',
        icon: 'fa-brands fa-angellist',
      },
      {
        id: 1,
        name: 'GitLab',
        url: 'https://gitlab.com/david.13.2121',
        icon: 'fa-brands fa-gitlab',
      },
    ],
    email: ['williamscolmenaresch@gmail.com', 'david.13.2121@gmail.com'],
  },
};

export default state;
