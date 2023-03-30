import { useRef } from 'react';
import '../styles/projectCard.css';

const ProjectCard = ({ project }) => {
  const card = useRef(null);
  const { name, description, repo, technologies, prod, image } = project;
  console.log(image);
  const flip = () => card.current.classList.toggle('flip');
  const handleFlip = () => {
    flip();
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
        <img src={image} alt={name} className="h-full w-full object-contain" />
      </div>
    </article>
  );
};

export default ProjectCard;
