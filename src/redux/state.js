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

  portfolio: [{}, {}, {}],
  contact: {
    social: [
      {
        id: 1,
        name: 'Github',
        url: 'https://github.com/williamscch',
        icon: '',
      },
      {
        id: 1,
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/williamscolmenaresch',
        icon: '',
      },
      {
        id: 1,
        name: 'Twitter',
        url: 'https://twitter.com/wdavidcch',
        icon: '',
      },
      {
        id: 1,
        name: 'Medium',
        url: '',
        icon: '',
      },
      {
        id: 1,
        name: 'Angelist',
        url: '',
        icon: '',
      },
      {
        id: 1,
        name: 'GitLab',
        url: '',
        icon: '',
      },
    ],
    email: 'williamscolmenaresch@gmail.com',
  },
};

export default state;
