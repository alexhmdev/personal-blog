import { useRef } from 'react';
import Heading from './Heading.astro';
import '../styles/projectCard.css';

const ProjectCard = ({ project }) => {
  const card = useRef(null);
  const { name, description, repo, technologies } = project;

  const handleFlip = () => {
    card.current.classList.toggle('flip');
  };
  return (
    <article
      className="card relative h-64 max-w-sm rounded-lg bg-gradient-to-tr from-light-primary to-secondary p-1"
      ref={card}
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
    >
      <div className="front absolute flex h-full w-full flex-col gap-4 rounded-lg bg-light p-4 dark:bg-slate-800 dark:text-light">
        <h3 className="text-3xl">{name}</h3>
        <p className="">{description}</p>
        {repo !== 'private' && (
          <a href={repo} target="_blank">
            <img
              src="/icons/github-loop.svg"
              className="absolute top-4 right-2 hidden w-8 dark:flex"
            />
            <img
              src="/icons/github-loop-light.svg"
              className="absolute top-4 right-2 w-8 dark:hidden"
            />
          </a>
        )}

        <div className="flex flex-wrap justify-center gap-1">
          {technologies.map((tech) => (
            <div className="w-fit rounded-full bg-light-primary px-2 py-1 text-light dark:bg-secondary">
              {tech}
            </div>
          ))}
        </div>
      </div>
      <div className="back absolute flex h-full w-full flex-col gap-4 rounded-lg bg-light p-4 dark:bg-slate-800 dark:text-light">
        <p className="">{description}</p>
        {repo !== 'private' && (
          <a href={repo} target="_blank">
            <img
              src="/icons/github-loop.svg"
              className="absolute top-4 right-2 hidden w-8 dark:flex"
            />
            <img
              src="/icons/github-loop-light.svg"
              className="absolute top-4 right-2 w-8 dark:hidden"
            />
          </a>
        )}

        <div className="flex flex-wrap justify-center gap-1">
          {technologies.map((tech) => (
            <div className="w-fit rounded-full bg-light-primary px-2 py-1 text-light dark:bg-secondary">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
