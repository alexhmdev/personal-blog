import { useState } from 'react';
import { projects } from '../content/_projects';
import ProjectCard from './ProjectCard';
import ProjectWindow from './ProjectWindow';

const ProjectsList = () => {
  const [windows, setWindows] = useState([]);

  const openWindows = () =>
    windows.map((window) => (
      <ProjectWindow
        key={window.id}
        project={window}
        onClose={() => closePreview(window.id)}
      />
    ));

  const openPreview = (project) => {
    setWindows([...windows, project]);
  };

  const closePreview = (id) => {
    setWindows(windows.filter((window) => window.id !== id));
  };
  return (
    <>
      {openWindows()}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            openPreview={openPreview}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsList;
