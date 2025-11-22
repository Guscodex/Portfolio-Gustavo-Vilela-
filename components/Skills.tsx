
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import type { SkillCategory } from '../types';

const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
        <h3 className="text-xl font-bold text-neutral-dark dark:text-white mb-6 group-hover:text-brand-blue transition-colors">{category.title}</h3>
        <ul className="space-y-3">
            {category.skills.map(skill => (
                <li key={skill} className="flex items-center text-neutral-medium dark:text-gray-300 font-medium">
                    <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center mr-3 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
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
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-slate-900 bg-noise">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-dark dark:text-white">{t.title}</h2>
          <p className="text-lg text-neutral-medium dark:text-gray-400 mt-4 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {SKILL_CATEGORIES.map((category, index) => (
                <SkillCard key={index} category={category} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
