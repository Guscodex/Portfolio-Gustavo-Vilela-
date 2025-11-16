
import React from 'react';
import Timeline from './Timeline';
import { PROFESSIONAL_TIMELINE, ACADEMIC_TIMELINE } from '../constants';

interface TrajectoryProps {
  t: {
    title: string;
    subtitle: string;
    professionalTitle: string;
    professionalSubtitle: string;
    academicTitle: string;
    academicSubtitle: string;
  }
}

const Trajectory: React.FC<TrajectoryProps> = ({ t }) => {
  return (
    <section id="trajectory" className="py-20 bg-neutral-light dark:bg-neutral-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-dark dark:text-neutral-light">{t.title}</h2>
          <p className="text-lg text-neutral-medium dark:text-gray-400 mt-2">{t.subtitle}</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Timeline 
            title={t.professionalTitle}
            subtitle={t.professionalSubtitle}
            events={PROFESSIONAL_TIMELINE}
          />
          <Timeline 
            title={t.academicTitle}
            subtitle={t.academicSubtitle}
            events={ACADEMIC_TIMELINE}
          />
        </div>
      </div>
    </section>
  );
};

export default Trajectory;
