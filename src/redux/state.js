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
      description:
        'Write effective APIs. Develop powerful and secure custom API solutions',
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
      "I'm a full-stack developer passionate for build system solutions with high attention to detail and a love for clean code. Before programming, I have a Bachelor's Degree in Accounting, with work experience in business management. Experienced in communication, teamwork, empathy with different people, and working under pressure with tight deadlines. I've developed multiple projects remotely being part of cross-functional teams, where I have gained skills in scrum habits and pair programming.",
    column2:
      "I always try to find a simpler solution to complex problems, I consider myself an enthusiastic and creative who is constantly looking for new challenges and willing to give help to my teammates, actually, I've had the opportunity to mentor junior team members and share my knowledge and expertise. To relax I love practicing sports, cooking, and reading IT articles... I'm a cinema lover.",
  },

  portfolio: [
    {
      id: nextId('project-'),
      title: 'Online Shop',
      description:
        'Full Stack project made for an online shop, features like live render list of products products, filter for products by category, price and name, shopping cart to add products for registered users and place orders. Manager can also log in as an admin, with access to special functions like adding categories and products, as well as deleting and updating them, and managing users and customers.',
      languages: ['Node', 'Express js', 'React', 'PostgreSQL'],
      live: '/',
      source: 'https://github.com/williamscch/myshop',
      image:
        'https://raw.githubusercontent.com/williamscch/myshop-client/dev/app-ss.png',
    },
    {
      id: nextId('project-'),
      title: 'Rental Cars',
      description:
        'This project is made for the Renting of cars. You can add, reserve, and delete cars from our website! Built with React-Redux and Rails.',
      languages: ['RoR', 'React', 'Capybara', 'PostgreSQL'],
      live: 'https://639355566c9e9858f93bb1bb--bejewelled-cucurucho-3790b4.netlify.app/',
      source: 'https://github.com/williamscch/front_rental_cars',
      image:
        'https://raw.githubusercontent.com/williamscch/front_rental_cars/dev/app-ss.png',
    },
    {
      id: nextId('project-'),
      title: 'Recipe App',
      description:
        'RoR Project that keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list',
      languages: ['RoR', 'Rspec', 'Capybara', 'PostgreSQL'],
      live: '/',
      source: 'https://github.com/williamscch/recipes_rails_app',
      image: '',
    },
    {
      id: nextId('project-'),
      title: 'My Spend Manager',
      description:
        'Mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
      languages: ['RoR', 'Rspec', 'Capybara', 'PostgreSQL'],
      live: '/',
      source: 'https://github.com/williamscch/budget_rails_app',
      image: '',
    },
    {
      id: nextId('project-'),
      title: 'Williams Blog',
      description: '',
      languages: ['RoR', 'Rspec', 'Capybara', 'PostgreSQL'],
      live: '/',
      source: 'https://github.com/williamscch/blog_rails_app',
      image: '',
    },
    {
      id: nextId('project-'),
      title: 'Forex App',
      description:
        'Web APP Focused only on currency trading, covers some of the major currency pairs traded worldwide, such as EUR/USD, USD/JPY and GBP/USD.',
      languages: ['React', 'Redux', 'Javascript', 'Jest'],
      live: 'https://forexappwilliamscch.netlify.app/',
      source: 'https://github.com/williamscch/forex-app',
      image:
        'https://raw.githubusercontent.com/williamscch/forex-app/dev/screenshot-fx-app.png',
    },
    {
      id: nextId('project-'),
      title: 'Space Travelers Hub',
      description:
        'Web App that shows real live data from the Space X API, useful information about rockets and missions as well counts with the functionality to join missions, reserve rockets, and those items reserved appears in your profile. Built with React and Redux toolkit',
      languages: ['React', 'Redux', 'Javascript', 'Jest'],
      live: 'https://spacetravelerswilliamscch.netlify.app/',
      source: 'https://github.com/williamscch/space-travelers',
      image:
        'https://raw.githubusercontent.com/williamscch/space-travelers/dev/src/components/images/screenshot-spaceX.png',
    },
    {
      id: nextId('project-'),
      title: 'TV Shows',
      description:
        'TV Shows Web App - A web application based on an external API which contains information about TV shows. th web app let you like the shows that you like the most and comment what you think about them making use of an involvement API to save this interaction information.',
      languages: ['Javascript', 'ES6', 'API', 'Jest'],
      live: 'https://williamscch.github.io/tv-shows/dist/',
      source: 'https://github.com/williamscch/tv-shows',
      image:
        'https://raw.githubusercontent.com/williamscch/tv-shows/development/app-ss.png',
    },
    {
      id: nextId('project-'),
      title: 'Leader-board',
      description:
        'LeaderBoard web app that displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service',
      languages: ['JavaScript', 'Webpack', 'API', 'CSS'],
      live: 'https://leaderboardwilliamscch.netlify.app/',
      source: 'https://github.com/williamscch/leaderboard',
      image:
        'https://raw.githubusercontent.com/williamscch/leaderboard/dev/mkleaderboardss.png',
    },
    {
      id: nextId('project-'),
      title: 'Math Magicians',
      description: 'Calculator Web App build with React Components.',
      languages: ['JavaScript', 'React', 'CSS'],
      live: 'https://williamscchmathmagicians.netlify.app/',
      source: 'https://github.com/williamscch/math-magicians',
      image:
        'https://raw.githubusercontent.com/williamscch/math-magicians/development/app-ss.png',
    },
    {
      id: nextId('project-'),
      title: 'To-Do List',
      description:
        'A web app which help you to save your daily tasks, mark them as completed and edit and delete them. Built with JavaScript',
      languages: ['Javascript', 'CSS', 'HTML'],
      live: 'https://williamscch.github.io/to-do-list/dist/',
      source: 'https://github.com/williamscch/to-do-list',
      image:
        'https://raw.githubusercontent.com/williamscch/to-do-list/master/app-ss.png',
    },
    {
      id: nextId('project-'),
      title: 'Pizza Restaurant',
      description:
        'A fully responsive page for a pizza restaurant, which contains the most important sections to be usefull, and also uses JavaScript to be a fully dinamic page.',
      languages: ['Javascript', 'CSS', 'HTML'],
      live: 'https://williamscch.github.io/pizza-restaurant-page/',
      source: 'https://github.com/williamscch/pizza-restaurant-page',
      image:
        'https://raw.githubusercontent.com/williamscch/pizza-restaurant-page/master/assets/img/ss.png',
    },
  ],
  contact: {
    social: [
      {
        id: nextId('social-'),
        name: 'Github',
        url: 'https://github.com/williamscch',
        icon: 'fa-brands fa-github',
      },
      {
        id: nextId('social-'),
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/williamscolmenaresch',
        icon: 'fa-brands fa-linkedin-in',
      },
      {
        id: nextId('social-'),
        name: 'Twitter',
        url: 'https://twitter.com/wdavidcch',
        icon: 'fa-brands fa-twitter',
      },
      {
        id: nextId('social-'),
        name: 'Medium',
        url: 'https://medium.com/@williamscch',
        icon: 'fa-brands fa-medium',
      },
      {
        id: nextId('social-'),
        name: 'Angellist',
        url: 'https://angel.co/williamscch',
        icon: 'fa-brands fa-angellist',
      },
      {
        id: nextId('social-'),
        name: 'GitLab',
        url: 'https://gitlab.com/david.13.2121',
        icon: 'fa-brands fa-gitlab',
      },
    ],
    email: ['williamscolmenaresch@gmail.com', 'david.13.2121@gmail.com'],
  },
  testimonials: [
    {
      id: nextId('testimonial-'),
      author: 'Luis Lara',
      role: 'Computer Systems Engineer',
      message:
        'Williams is a technology enthusiast. He always willing to learn new things. He works very well in a team, and adheres to the recommendations and procedures within an organization. He is an excellent professional, with great talent and potential, who works hard to achieve his goals. He is a very good worker: punctual, with initiative, intelligent, orderly and detail-oriented. We wish you much success in all the new work stages to come.',
    },
    {
      id: nextId('testimonial-'),
      author: 'Vitor Guedes Madeira',
      role: 'Full stack developer',
      message:
        "I've met Williams during a coding bootcamp and it was always a pleasure to be partnered with him. Making friends and working with different people is a natural skill for him, so it makes the whole environment better for everyone to work together, especially when it comes to team projects, since he also has such a great coding organization. He codes in a way that other programmers won't struggle to work on his projects. At that time, Williams used to work and study at the same time and he never missed a single deadline, always worried about delivering it on time, this is something I really admire on him. I just hope we can get to work together again in the future!",
    },
    {
      id: nextId('testimonial-'),
      author: 'Alzubair Alqaraghuli',
      role: 'Full stack developer',
      message:
        "Williams is a fantastic developer, and his detail-oriented approach made him a pleasure to work with. We pair-programmed extensively together while enrolled at microverse, and in that time his work ethic blew me away. Williams views writing clean, accessible code as a calling, and he's great at identifying areas where we can improve UI. He's also super friendly; by the time our project was done, I felt like we'd known each other for years. I can't recommend him enough!",
    },
    {
      id: nextId('testimonial-'),
      author: 'Alejandro Jose Torres Valero',
      role: 'Software Developer',
      message:
        'Williams is a great partner that is always trying to become the best of himself. He and I worked together doing some projects in Javascript and React as students at Microverse, and he always showed professionalism, A person that is always listening to the problems of others and always trying to be a proactive person and has excellent skills in problem-solving',
    },
    {
      id: nextId('testimonial-'),
      author: 'Diego Yon',
      role: 'Full stack developer',
      message:
        'It is my pleasure to recommend Williams. I have had the opportunity to work with him a couple of times now and I can say that he is a great teammate to have, very knowledgeable, and easy to work with. He not only gets the job done, but he also goes above and beyond in every project.',
    },
    {
      id: nextId('testimonial-'),
      author: 'Muhyideen Elias',
      role: 'DevOps Engineer',
      message:
        'Williams is a great person and deeply creative I will say because he has a great eye for details. I worked with him for several weeks during microverse training. I am always inspired by his decision to be a full-stack developer because of his previous background. And he has this tenacity for seeing things through and having very good interpersonal relationship skills.',
    },
  ],
};

export default state;
