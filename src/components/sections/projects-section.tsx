import ProjectCard from '@/components/cards/project-card';
import { projectsData } from '@/data/projects';
import FadeInWrapper from '@/components/ui/fade-in-wrapper';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold text-primary sm:text-4xl">
          My Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <FadeInWrapper key={project.id} delay={index * 150}>
              <ProjectCard project={project} />
            </FadeInWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
