import React from 'react';
import { TESTIMONIALS } from '../constants';

interface SpeakingProps {
  t: {
    title: string;
    subtitle: string;
  }
}

const Speaking: React.FC<SpeakingProps> = ({ t }) => {
  return (
    <section id="speaking" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-dark dark:text-neutral-light">{t.title}</h2>
          <p className="text-lg text-neutral-medium dark:text-gray-400 mt-2">{t.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-neutral-light dark:bg-gray-800 p-8 rounded-lg">
              <p className="text-neutral-medium dark:text-gray-400 italic mb-6">"{testimonial.quote}"</p>
              <div className="font-bold text-neutral-dark dark:text-neutral-light">{testimonial.author}</div>
              <div className="text-sm text-brand-blue font-semibold">{testimonial.event}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speaking;
