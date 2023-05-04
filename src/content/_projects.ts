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
  /* {
    id: 0,
    name: '',
    repo: '',
    description: '',
    technologies: [''],
  }, */
  {
    id: 1,
    name: 'DritsJS',
    repo: 'https://github.com/alexhmdev/dritsjs',
    prod: 'https://alexhmdev.github.io/dritsjs/',
    image: '/images/projects/dritsjs.png',
    description: 'My own JavaScript sandbox! on windows and web',
    technologies: ['TailwindCSS', 'Electron', 'JavaScript', 'Vite'],
  },
  {
    id: 2,
    name: 'Startupmate',
    repo: 'https://github.com/alexhmdev/startupmate',
    prod: 'https://startupmate.vercel.app/',
    image: '/images/projects/startupmate.png',
    description: 'This is a short description about the project',
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
    description: 'This is a short description about the project',
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
];