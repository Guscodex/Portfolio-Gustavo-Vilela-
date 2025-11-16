
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import type { SkillCategory } from '../types';

const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-neutral-dark dark:text-neutral-light mb-4">{category.title}</h3>
        <ul className="space-y-2">
            {category.skills.map(skill => (
                <li key={skill} className="flex items-center text-neutral-medium dark:text-gray-400">
                    <svg className="h-5 w-5 mr-3 text-brand-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {skill}
                </li>
            ))}
        </ul>
    </div>
);

interface SkillsProps {
  t: {
    title: string;
    subtitle: string;
  }
}

const Skills: React.FC<SkillsProps> = ({ t }) => {
  return (
    <section id="skills" className="py-20 bg-neutral-light dark:bg-neutral-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-dark dark:text-neutral-light">{t.title}</h2>
          <p className="text-lg text-neutral-medium dark:text-gray-400 mt-2">{t.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILL_CATEGORIES.map((category, index) => (
                <SkillCard key={index} category={category} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
