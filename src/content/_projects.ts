interface Project {
  id: number;
  name: string;
  repo?: string;
  prod?: string;
  image: string;
  description: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'DritsJS - Playground',
    repo: 'https://github.com/alexhmdev/js-playground',
    prod: 'https://dritsjs-playground.vercel.app/',
    image: '/images/projects/js-playground.png',
    description:
      'My own JavaScript playground! made with ❤️ for the community!',
    technologies: ['React', 'TailwindCSS', 'Vite'],
  },
  {
    id: 2,
    name: 'Startupmate',
    repo: 'https://github.com/alexhmdev/startupmate',
    prod: 'https://startupmate.vercel.app/',
    image: '/images/projects/startupmate.png',
    description: 'A startup idea generator with Cohere ai',
    technologies: ['TailwindCSS', 'Remix', 'Cohere', 'TypeScript'],
  },
  {
    id: 3,
    name: 'Drits Wordle',
    repo: 'https://github.com/alexhmdev/rxjs-wordle',
    prod: 'https://alexhmdev.github.io/rxjs-wordle/',
    image: '/images/projects/drits-wordle.png',
    description: 'My own clone of wordle',
    technologies: ['CSS', 'HTML', 'JavaScript', 'RxJS'],
  },
  {
    id: 4,
    name: 'Spotify Loop & Mood',
    repo: 'https://github.com/alexhmdev/spotify-loop-mood',
    prod: 'https://spotify-loop-mood-peckas13.vercel.app/',
    image: '/images/projects/spotify-loop.png',
    description: 'This is my personal Spotify top 50 songs and mood',
    technologies: ['Nextjs', 'TailwindCSS', 'JavaScript'],
  },
  {
    id: 5,
    name: 'KDT POS',
    repo: 'private',
    image: '/images/projects/kdt.png',
    description:
      'POS for a local bakery, compiled to desktop and web, and yes it uses a real thermal printer',
    technologies: [
      'Angular',
      'Electron',
      'SASS',
      'NodeJs',
      'Express',
      'MongoDB',
    ],
  },
  {
    id: 6,
    name: 'Astro portfolio template',
    repo: 'https://github.com/alexhmdev/astro-portfolio',
    prod: 'https://alexhm-astro-portfolio.vercel.app/',
    description: 'A portfolio template made with Astro for the community',
    image: '/images/projects/astro-portfolio.png',
    technologies: ['Astro', 'TailwindCSS', 'DaisyUI', 'TypeScript'],
  },
];
