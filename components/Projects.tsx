
import React from 'react';
import { getProjects } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project, seeMoreText: string, index: number }> = ({ project, seeMoreText, index }) => (
  <div 
    className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out border border-gray-100 dark:border-gray-700 flex flex-col h-full"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img 
        src={project.image} 
        alt={`Screenshot or representation of ${project.title}`} 
        loading="lazy"
        width="600"
        height="450"
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
      />
      <div className="absolute inset-0 bg-neutral-dark/0 group-hover:bg-neutral-dark/20 transition-colors duration-500"></div>
    </div>
    
    <div className="p-8 flex flex-col flex-grow">
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs font-bold tracking-wider uppercase text-brand-blue bg-brand-blue/5 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      
      <h3 className="text-2xl font-bold text-neutral-dark dark:text-neutral-light mb-3 group-hover:text-brand-blue transition-colors">
        {project.title}
      </h3>
      
      <p className="text-neutral-medium dark:text-gray-400 mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>
      
      {project.link && (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label={`${seeMoreText} about ${project.title}`}
          className="inline-flex items-center text-sm font-bold text-neutral-dark dark:text-neutral-light hover:text-brand-blue dark:hover:text-brand-blue transition-colors"
        >
          {seeMoreText} 
          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
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
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
           <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-dark dark:text-neutral-light mb-4">{t.title}</h2>
              <p className="text-xl text-neutral-medium dark:text-gray-400 font-light">{t.subtitle}</p>
           </div>
           <div className="h-1 w-24 bg-brand-blue rounded hidden md:block mb-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} seeMoreText={t.seeMore} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
