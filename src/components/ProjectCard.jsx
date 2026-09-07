import '../styles/projectCard.css';
import { useRef, useState } from 'react';
import ProjectWindow from './ProjectWindow';

const ProjectCard = ({ project }) => {
  const [showWindow, setShowWindow] = useState(false);
  const cardRef = useRef(null);
  const winBoxRef = useRef(null);
  const { name, description, repo, technologies, prod, image } = project;
  const flip = () => cardRef.current.classList.toggle('flip');
  const handleFlip = () => {
    flip();
  };

  const handleOpenPreview = () => {
    if (winBoxRef.current) {
      return winBoxRef.current.isMin() ? winBoxRef.current.restore() : null;
    }
    // send a custom event to GA4 to track the project preview
    const event = new CustomEvent('sendcustomevent', {
      detail: {
        event: 'project_preview',
        data: {
          selected_project: name,
          open_preview: true,
        },
      },
    });
    window.dispatchEvent(event);
    setShowWindow(true);
  };

  const handleClosePreview = () => {
    setShowWindow(false);
    // send a custom event to GA4 to track the project preview
    const event = new CustomEvent('sendcustomevent', {
      detail: {
        event: 'project_preview',
        data: {
          selected_project: name,
          open_preview: false,
        },
      },
    });
    window.dispatchEvent(event);
  };

  return (
    <>
      {repo !== 'private' && showWindow ? (
        <ProjectWindow
          project={project}
          windowRef={winBoxRef}
          onClose={handleClosePreview}
        />
      ) : null}
      <article
        className="card relative h-72 sm:h-80 w-full max-w-[20rem] sm:w-80 cursor-pointer rounded-xl bg-gradient-to-tr from-light-primary to-indigo-400 p-1 dark:from-light-primary dark:to-secondary shadow-md hover:shadow-xl transition-shadow duration-300"
        ref={cardRef}
        onClick={handleFlip}
      >
        <div className="front absolute inset-1 flex flex-col rounded-lg bg-light p-4 drop-shadow-md dark:bg-slate-800 dark:text-light">
          <div className="flex items-start justify-between gap-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-left leading-snug">
              {name}
            </h2>
            {repo !== 'private' && (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="shrink-0 rounded-md p-1 -mr-1 -mt-1 hover:opacity-80 transition-opacity"
                title="View GitHub Repository"
              >
                <img
                  src="/icons/github-loop.svg"
                  alt="GitHub"
                  className="hidden w-6 h-6 sm:w-7 sm:h-7 dark:block"
                />
                <img
                  src="/icons/github-loop-light.svg"
                  alt="GitHub"
                  className="block w-6 h-6 sm:w-7 sm:h-7 dark:hidden"
                />
              </a>
            )}
          </div>

          <p className="mt-2 text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed overflow-hidden">
            {description}
          </p>

          <div className="mt-auto pt-3 flex flex-wrap items-center justify-start sm:justify-center gap-1.5">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-light-primary/90 px-2.5 py-0.5 text-[11px] sm:text-xs font-medium text-light dark:bg-secondary/90 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="back absolute inset-1 flex flex-col rounded-lg bg-light p-1 drop-shadow-xl dark:bg-slate-800 dark:text-light overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full rounded-md object-cover"
          />
          {repo !== 'private' ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleOpenPreview();
              }}
              className="absolute right-2 bottom-2 flex content-center rounded-full bg-accent p-2 text-light drop-shadow-lg transition-[scale] duration-300 hover:scale-110 dark:bg-light-primary"
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
    </>
  );
};

export default ProjectCard;
