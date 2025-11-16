
import React from 'react';
import { getProjects } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project, seeMoreText: string }> = ({ project, seeMoreText }) => (
  <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    <div className="relative">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-neutral-dark dark:text-neutral-light mb-2">{project.title}</h3>
      <p className="text-neutral-medium dark:text-gray-400 mb-4 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="bg-neutral-light dark:bg-neutral-dark text-neutral-dark dark:text-neutral-light text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-blue hover:underline">
          {seeMoreText} &rarr;
        </a>
      )}
    </div>
  </div>
);

interface ProjectsProps {
  t: {
    title: string;
    subtitle: string;
    seeMore: string;
    projectList: { title: string; description: string }[];
  }
}

const Projects: React.FC<ProjectsProps> = ({ t }) => {
  const projects = getProjects(t);
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-dark dark:text-neutral-light">{t.title}</h2>
          <p className="text-lg text-neutral-medium dark:text-gray-400 mt-2">{t.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} seeMoreText={t.seeMore} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
