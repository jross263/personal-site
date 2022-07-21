import portfilioThumbnail from '../pictures/portfolio.png'
import wordleThumbnail from '../pictures/wordle.png'
import farmgameThumbnail from '../pictures/farmgame.png'
import cs4471Thumbnail from '../pictures/cs4471.png';
import ormbenchmarkThumbnail from '../pictures/ormbenchmark.png'
import mftsThumbnail from '../pictures/mfts.png'
import tspbThumbnail from '../pictures/tspb.png'

const projectData = [{
  thumbnail: portfilioThumbnail,
  title: 'Personal Portfolio',
  description: 'You\'re here now! Personal Portfolio website showcasing who I am, my work and education, and projects I\'ve worked on. Built using React + TypeScript, bootstrapped with Vite, hosted on Vercel.',
  skills: ['React', 'TypeScript', 'MUI', 'Vite', 'Vercel'],
  link: 'https://github.com/jross263/personal-site'
}, {
  thumbnail: wordleThumbnail,
  title: 'Svelte Wordle',
  description: 'This project is my first time trying out Svelte. I decided to replicate the game Wordle to challenge myself with a new framework. The app is fully functional and mobile responsive. For future improvements, I\'d like to implement a keyboard like the original wordle game that changes colours based on your guess and implement a dark mode.',
  skills: ['Svelte', 'TypeScript', 'CSS', 'Vite', 'Vitest'],
  link: 'https://github.com/jross263/learning-svelte-wordle'
},
{
  thumbnail: mftsThumbnail,
  title: 'Maintenance Fundamentals & Technical Skills App',
  caption: 'Work project shown with permission',
  description: '',
  skills: ['React', 'MUI', 'Node.js', 'Express.js', 'Sequelize', 'MSSQL', 'Azure Devops', 'CI/CD', 'Azure AD', 'Azure App Services'],
},
{
  thumbnail: tspbThumbnail,
  title: 'Technical Pocketbook App',
  caption: 'Work project shown with permission',
  description: '',
  skills: ['React', 'MUI', 'Service Worker', 'Node.js', 'Express.js', 'Sequelize', 'MSSQL', 'Azure Devops', 'CI/CD', 'Azure AD', 'Azure App Services', 'Azure Blob Storage'],
},
{
  thumbnail: cs4471Thumbnail,
  title: 'CS4471 Stock Microservices',
  description: 'A hub for stock market microservices. Services were decoupled and deployed independently, allowing them to be dynamically turned on or off. Users could subscribe to individual services and be notified via email when new data was available for them to view.',
  skills: ['React', 'Bootstrap', 'Node.js', 'Express.js', 'Sequelize', 'MySQL', 'AWS EC2', 'AWS SNS'],
  link: 'https://github.com/jross263/CS4471'
},
{
  thumbnail: ormbenchmarkThumbnail,
  title: 'CS4411 ORM Benchmarking',
  description: 'A command-line application to benchmark the most popular JavaScript ORMs and databases. The goal is to measure what ORM to use and what database to use based on the primary functions of your application.',
  skills: ['Node.js', 'Axios', 'TypeORM', 'Sequelize', 'Bookshelf', 'MySQL', 'Postgres', 'SQLite'],
  link: 'https://github.com/jross263/CS4411'
},
{
  thumbnail: farmgameThumbnail,
  title: 'Farm Game',
  description: 'A farming game in development by myself and a couple of friends. I\'ve implemented a camera controller with smooth movement, zooming, and rotation. I\'ve also developed a scalable game event controller thats used to focus the camera on game objects.',
  skills: ['Unity', 'C#'],
  link: 'https://github.com/jross263/Farm-Game'
}]
export default projectData;