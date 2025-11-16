import React from 'react';

interface AboutProps {
  t: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    cvButton: string;
  }
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl transform md:rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105">
              <img 
                src="https://picsum.photos/seed/gus-profile/800/800" 
                alt="Gustavo Vilela Santos" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold text-neutral-dark dark:text-neutral-light mb-4">{t.title}</h2>
            <p className="text-lg text-neutral-medium dark:text-gray-400 mb-4">
              {t.p1}
            </p>
            <p className="text-lg text-neutral-medium dark:text-gray-400 mb-4">
              {t.p2}
            </p>
            <p className="text-lg text-neutral-medium dark:text-gray-400 mb-6">
              {t.p3}
            </p>
            <a 
              href="/gustavo_vilela_santos_cv.pdf" 
              download 
              className="inline-flex items-center bg-brand-blue text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {t.cvButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
