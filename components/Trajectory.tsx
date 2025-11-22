
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
    <section id="trajectory" className="py-24 relative bg-neutral-50 dark:bg-gray-950 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] dark:opacity-[0.15] pointer-events-none"></div>
      
      {/* Gradient Overlay at top/bottom for smooth transitions */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-dark dark:text-white tracking-tight">{t.title}</h2>
          <p className="text-lg text-neutral-medium dark:text-gray-400 mt-4 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
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
