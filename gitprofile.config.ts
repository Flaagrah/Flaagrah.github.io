// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Flaagrah', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Chess Engine',
          description:
            'Created a Chess Engine using Deep Learning and Minimax Algorithm.',
          link: 'https://github.com/Flaagrah/Chess-Engine',
        },
        {
          title: 'Machine Learning Notebooks',
          description:
            'Machine Learning fundamentals.',
          link: 'https://github.com/Flaagrah/MachineLearning',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Bhargava Guntoori',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'bhargava-guntoori-39bb9681',
    phone: '1-519-717-6497',
    email: 'bhargava89@hotmail.com',
  },
  resume: {
    fileUrl:
      'https://resume.creddle.io/resume/5zif4nd0h92', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Tensorflow',
    'SQL',
    'Deep Learning',
    'Machine Learning',
    'JavaScript',
    'Java',
    'Php',
    'Web Development',
  ],
  experiences: [
    {
      company: 'Cohere',
      position: 'Senior Data Quality Specialist',
      from: 'January 2024',
      to: 'Present',
      companyLink: 'https://cohere.com/',
    },
    {
      company: 'Loopio',
      position: 'Software Developer',
      from: 'April 2022',
      to: 'December 2023',
      companyLink: 'https://loopio.com/',
    },
  ],
  certifications: [
    {
      name: 'Machine Learning Engineer Career Track',
      body: 'A 500+ hour online course that covers Machine Learning, Deep Learning, Natural Language Processing, and Production and Deployment of AI systems in Python. Bhargava Guntoori participated in weekly live 1:1 mentoring sessions with an industry experienced Machine Learning Engineer, and successfully completed a final project, "Chess Engine" that was reviewed by an independent industry expert',
      year: 'March 2022',
      link: 'https://www.credential.net/d313f938-ee0a-4f6f-a92a-81eb5117473c#gs.cp1bll',
    },
  ],
  educations: [
    {
      institution: 'University of Waterloo',
      degree: 'Software Engineering',
      from: '2007',
      to: '2013',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
