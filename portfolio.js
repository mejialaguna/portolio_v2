/* eslint-disable max-len */
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://mejialaguna.github.io/P-folio/',
  title: 'JS/React',
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jose L Mejia',
  role: 'Full-Stack Developer',
  description: [
    'I’m a web developer with over five years of experience building modern, responsive web applications. My journey into coding started with simple curiosity—wondering how websites worked—and quickly grew into a passion for creating smooth, intuitive digital experiences.',
    'I specialize in front-end development with React and Next.js, but I’m also comfortable working with back-end technologies like Node.js and Express. I enjoy building clean, maintainable code and keeping up with the latest trends and best practices in web development.',
    'For me, it’s all about crafting fast, user-friendly applications that not only work well but also feel great to use.',
  ],
  resume:
    'https://drive.google.com/file/d/1mvIaq_KlqElPLVRfHnbL_qupNXoO4qgU/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/jose-luis-mejia-laguna-961306164/',
    github: 'https://github.com/mejialaguna?tab=repositories',
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Lil-Tweet',
    description:
      'A small version of tweeter were you can leave your thoughts and let others leave their comments about you thought. You able to create, update or delete your messages. ',
    stack: [
      'HTML',
      'JavaScript',
      'React',
      'React-dom',
      'Router',
      'Redux',
      'Material ui - "MUI"',
      'Semantic-ui',
      'Apollo-Client',
      'Graphql && graphql-tag',
      'express',
      'jwt-decode',
      'moment',
      'apollo-server-express',
      'bcryptjs',
      'jsonwebtoken',
      'mongoose',
      'nodemon',
    ],
    DeploymentSite: 'Deployment site: Heroku',
    sourceCode: 'https://github.com/mejialaguna/lil-tweet.git',
    livePreview: 'https://lil-tweet-bbc0fbc55ca8.herokuapp.com/',
    image: 'https://res.cloudinary.com/jlml/image/upload/v1742020005/portfolio/fq8qokgjn6lzabmrojof.jpg'
  },
  {
    name: 'Journey Diary',
    description:
      "A daily record, private, the writer's own experiences, observations, feelings, attitudes, etc. a book for keeping such a record. a book or pad containing images , in which to note appointments and the like.",
    stack: [
      'CSS',
      'JavaScript/ES6',
      'React',
      'Vite',
      'React-Dom',
      'React-Redux',
      'React-Router-Dom',
      'Reduxjs/toolkit',
      'Firebase',
      'mui/material',
      'axios',
    ],
    DeploymentSite: 'Deployment site: Vercel',
    sourceCode: 'https://github.com/mejialaguna/Journal_Diary',
    livePreview: 'https://journal-diary-nine.vercel.app/',
    image: 'https://res.cloudinary.com/jlml/image/upload/v1742019896/portfolio/vw3o5oe7ubftmb9lesgc.jpg'
  },
  {
    name: 'Calendar Agenda',
    description:
      'A calendar agenda is a versatile tool for time management. Choose a suitable platform, input key dates, and prioritize tasks to stay organized. Regularly review, adjust, and celebrate achievements for optimal productivity.',
    stack: [
      'Html',
      'CSS',
      'Tailwind',
      'JavaScript',
      'React',
      'react-big-calendar',
      'react-datepicker',
      'react-redux',
      'reduxjs/toolkit',
      'axios',
      'express',
      'Node',
      'Npm',
      'bcrypt',
      'cors',
      'dotenv',
      'express-validator',
      'jsonwebtoken',
      'mongoose',
      'mongodb',
      'graphQl',
    ],
    DeploymentSite: 'Deployment site: Heroku',
    sourceCode: 'https://github.com/mejialaguna/calendar-frontEnd-2023',
    livePreview: 'https://jlml-calendar-app-4b5bf1054f30.herokuapp.com/',
    image: 'https://res.cloudinary.com/jlml/image/upload/v1742019833/portfolio/czdf2g2gg9amwziq8f8w.jpg'
  },
  {
    name: 'Geolocation - Application',
    description:
      "Intuitive Small Map Geolocator App! Seamlessly explore your surroundings by effortlessly searching for nearby places. Whether you're looking for restaurants, landmarks, or services, our app provides you with a user-friendly interface to discover what's around you. Get precise turn-by-turn directions, Reaching places with ease!.",
    stack: [
      'Html',
      'Java Script',
      'Type Script',
      'Vite',
      'React-Js',
      'Tailwind',
      'Animate',
      'Axios',
      'Mapbox',
      'vercel',
    ],
    DeploymentSite: 'Deployment site: Vercel',
    sourceCode: 'https://github.com/mejialaguna/map-app',
    livePreview: 'https://geolocation-app-psi.vercel.app/',
    image:
      'https://res.cloudinary.com/jlml/image/upload/v1742019697/portfolio/lph7l2etgvxdfiybqban.jpg',
  },
  {
    name: 'Netflix Style - YouTube',
    description:
      'Streaming service that allows our members to watch TV shows and movies on an internet-connected device. Restricted version for under age kids, appropriate context, easy to use and password-Less entry',
    stack: [
      'Html',
      'CSS',
      'Material-Mui',
      'JavaScript',
      'React-Js',
      'Next-Js',
      'Jwt',
      'magic-sdk/admin',
      'framer-motion',
      'YouTube-api',
      'hasura',
      'graphQl',
      'vercel',
    ],
    DeploymentSite: 'Deployment site: Vercel',
    sourceCode: 'https://github.com/mejialaguna/nell-pipi',
    livePreview: 'https://nell-pipi.vercel.app/',
    image: 'https://res.cloudinary.com/jlml/image/upload/v1742020094/portfolio/tfv2iuhwt7vbvdbpcj99.jpg'
  },
  {
    name: 'Shop with Me',
    description:
      'Shop With Us” is a fully functional e-commerce platform designed to deliver a seamless and enjoyable online shopping experience. With a sleek interface inspired by the Tesla Shop, it allows users to browse a diverse product catalog, add items to their cart, and securely complete purchases. Features like order tracking and a streamlined checkout process make it a one-stop shop for all your needs.',
    stack: [
      'Html',
      'Java Script',
      'Type Script',
      'Next.js',
      'Next-auth',
      'React-Js',
      'Tailwind',
      'Prisma',
      'Cloudinary',
      'Zod',
      'Zustand',
      'Paypal',
      'Framer Motion',
      'CLSx',
      'Mapbox',
      'vercel',
    ],
    DeploymentSite: 'Deployment site: Vercel',
    sourceCode: 'https://github.com/mejialaguna/shopWithMe',
    livePreview: 'https://shop-with-me-self.vercel.app/',
    image:
      'https://res.cloudinary.com/jlml/image/upload/t_Rounded 4:3/v1742019038/portfolio/dwdz74s2geye8ev6xn2d.png',
  },
];

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Stecil.js',
  'Redux',
  'magic-sdk/admin',
  'framer-motion',
  'Material-ui',
  'Semantic-ui',
  'TailWind',
  'hasura',
  'Firebase',
  'graphql-tag',
  'react-router-dom',
  'React-bootstrap',
  'apollo-client',
  'node',
  'express',
  'apollo-server-express',
  'graphQl',
  'moment',
  'mongodb',
  'jsonwebtoken',
  'mongoose',
  'bcryptjs',
  'nodemon',
  'Mysql2',
  'Jest',
  'Git',
  'GH-pages',
  'Heroku',
  'Netlify',
  'vercel',
];
const contact = {
  email: 'mejialaguna@yahoo.com',
};

export { header, about, projects, skills, contact };
