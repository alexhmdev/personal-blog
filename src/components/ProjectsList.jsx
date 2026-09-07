import { projects } from '../content/_projects';
import ProjectCard from './ProjectCard';

const ProjectsList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 w-full max-w-6xl mx-auto py-2">
      {[...projects].reverse().map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
