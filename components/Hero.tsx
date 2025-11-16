import React from 'react';

interface HeroProps {
    t: {
      name: string;
      headline: string;
      description: string;
      button1: string;
      button2: string;
    };
    onNavigate: {
        trajectory: () => void;
        projects: () => void;
    };
}

const Hero: React.FC<HeroProps> = ({ t, onNavigate }) => {
  return (
    <section id="home" className="min-h-screen bg-neutral-light dark:bg-neutral-dark flex items-center justify-center text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-dark dark:text-neutral-light mb-4 tracking-tight">
          {t.name}
        </h1>
        <p className="text-xl md:text-2xl font-medium text-brand-blue mb-6">
          {t.headline}
        </p>
        <p className="max-w-3xl mx-auto text-lg text-neutral-medium dark:text-gray-400 mb-10">
          {t.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onNavigate.trajectory}
            className="w-full sm:w-auto bg-brand-blue text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            {t.button1}
          </button>
          <button
            onClick={onNavigate.projects}
            className="w-full sm:w-auto bg-transparent border-2 border-neutral-dark dark:border-neutral-light text-neutral-dark dark:text-neutral-light font-bold py-3 px-8 rounded-full hover:bg-neutral-dark hover:text-white dark:hover:bg-neutral-light dark:hover:text-neutral-dark transition-all duration-300"
          >
            {t.button2}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
