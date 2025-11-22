
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Rich Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-blue-200/40 to-cyan-200/40 dark:from-blue-900/20 dark:to-cyan-900/20 blur-[120px] animate-blob mix-blend-multiply dark:mix-blend-screen" />
         <div className="absolute top-[10%] right-[-10%] w-[50%] h-[60%] rounded-full bg-gradient-to-r from-purple-200/40 to-pink-200/40 dark:from-purple-900/20 dark:to-pink-900/20 blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen" />
         <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-gradient-to-r from-orange-200/40 to-yellow-200/40 dark:from-orange-900/20 dark:to-yellow-900/20 blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen" />
         {/* Noise Texture Overlay */}
         <div className="absolute inset-0 bg-noise opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Name Tag */}
          <div className="mb-6 opacity-0 animate-[fadeInUp_0.8s_0.1s_forwards]">
             <span className="inline-block py-2 px-4 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800 text-brand-blue dark:text-blue-400 font-bold text-sm tracking-wider uppercase shadow-sm">
               {t.name}
             </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-neutral-dark dark:text-white mb-8 tracking-tight leading-[1.1] opacity-0 animate-[fadeInUp_0.8s_0.2s_forwards]">
            {t.headline}
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-neutral-medium dark:text-gray-300 mb-12 max-w-2xl font-light opacity-0 animate-[fadeInUp_0.8s_0.4s_forwards]">
            {t.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-[fadeInUp_0.8s_0.6s_forwards]">
            <button
              onClick={onNavigate.trajectory}
              className="w-full sm:w-auto bg-brand-blue text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-blue-500/20"
            >
              {t.button1}
            </button>
            <button
              onClick={onNavigate.projects}
              className="w-full sm:w-auto bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 backdrop-blur-sm text-neutral-dark dark:text-white font-bold py-4 px-10 rounded-full hover:bg-neutral-dark hover:text-white dark:hover:bg-white dark:hover:text-neutral-dark transition-all duration-300 hover:border-transparent"
            >
              {t.button2}
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-[fadeInUp_1s_1s_forwards]">
         <svg className="w-6 h-6 text-neutral-medium dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
         </svg>
      </div>
    </section>
  );
};

export default Hero;
