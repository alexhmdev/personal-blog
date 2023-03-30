import { useState } from 'react';
import { projects } from '../content/projects';
import ProjectCard from './ProjectCard';

const ProjectsList = () => {
  return (
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
