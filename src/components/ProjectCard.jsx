import { useRef } from 'react';
import '../styles/projectCard.css';

const ProjectCard = ({ project, openPreview }) => {
  const card = useRef(null);
  const { name, description, repo, technologies, prod, image } = project;
  const flip = () => card.current.classList.toggle('flip');
  const handleFlip = () => {
    flip();
  };

  const handleOpenPreview = () => {
    openPreview(project);
  };

  return (
    <article
      className="card relative h-64 w-80 cursor-pointer rounded-lg bg-gradient-to-tr   from-light-primary to-indigo-400 p-1 dark:from-light-primary dark:to-secondary "
      ref={card}
      onClick={handleFlip}
    >
      <div className="front absolute top-2 left-2 flex  h-full w-full flex-col gap-4 rounded-lg bg-light p-4 drop-shadow-lg dark:bg-slate-800 dark:text-light">
        <h2 className="text-3xl">{name}</h2>
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
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="w-fit rounded-full bg-light-primary px-2 py-1 text-light dark:bg-secondary"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
      <div className="back absolute top-2 left-2 flex h-full w-full flex-col rounded-lg bg-light p-1 drop-shadow-xl dark:bg-slate-800 dark:text-light">
        <img
          src={image}
          alt={name}
          className="h-full w-full rounded-lg object-cover"
        />
        {repo !== 'private' ? (
          <button
            onClick={handleOpenPreview}
            className="hover: absolute right-2 bottom-2 flex content-center rounded-full bg-accent p-2 text-light drop-shadow-lg transition-[scale] duration-300 hover:scale-110 dark:bg-light-primary"
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
              <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
            </svg>
          </button>
        ) : null}
      </div>
    </article>
  );
};

export default ProjectCard;
