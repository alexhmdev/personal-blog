import { projects } from '../content/_projects';
import ProjectCard from './ProjectCard';

const ProjectsList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
