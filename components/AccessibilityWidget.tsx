
import React, { useState, useEffect } from 'react';

interface AccessibilityWidgetProps {
  t: {
    title: string;
    increaseFont: string;
    decreaseFont: string;
    highContrast: string;
    reset: string;
    toggleMenu: string;
  };
}

const AccessibilityWidget: React.FC<AccessibilityWidgetProps> = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);

  const handleIncrease = () => setFontSize(prev => Math.min(prev + 20, 200));
  const handleDecrease = () => setFontSize(prev => Math.max(prev - 10, 80));
  const handleReset = () => {
    setFontSize(100);
    setHighContrast(false);
  };

  return (
    <div className="fixed bottom-4 left-4 z-[90] font-sans" data-no-contrast>
        {/* Menu */}
        <div className={`
            absolute bottom-16 left-0 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-4 w-64 transition-all duration-300 origin-bottom-left border border-gray-200 dark:border-gray-700
            ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}
        `}>
            <h3 className="text-lg font-bold text-neutral-dark dark:text-neutral-light mb-4 border-b pb-2 dark:border-gray-600">{t.title}</h3>
            
            <div className="space-y-3">
                <div className="flex justify-between gap-2">
                    <button onClick={handleDecrease} aria-label={t.decreaseFont} className="flex-1 bg-neutral-light dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-neutral-dark dark:text-neutral-light py-2 px-3 rounded font-bold text-sm transition-colors">A-</button>
                    <button onClick={handleReset} aria-label={t.reset} className="flex-1 bg-neutral-light dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-neutral-dark dark:text-neutral-light py-2 px-3 rounded font-bold text-sm transition-colors">100%</button>
                    <button onClick={handleIncrease} aria-label={t.increaseFont} className="flex-1 bg-neutral-light dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-neutral-dark dark:text-neutral-light py-2 px-3 rounded font-bold text-sm transition-colors">A+</button>
                </div>

                <button 
                    onClick={() => setHighContrast(!highContrast)}
                    className={`w-full py-2 px-4 rounded font-bold text-sm flex items-center justify-center gap-2 transition-colors ${
                        highContrast 
                        ? 'bg-yellow-400 text-black hover:bg-yellow-500 border-2 border-black' 
                        : 'bg-neutral-dark text-white hover:bg-gray-800 dark:bg-white dark:text-neutral-dark'
                    }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    {t.highContrast}
                </button>
            </div>
        </div>

        {/* Toggle Button */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t.toggleMenu}
            aria-expanded={isOpen}
            className="bg-brand-blue text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all transform hover:scale-110"
        >
            {/* International Accessibility Icon (Person with arms spread) - Material Design 'accessibility' */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
            </svg>
        </button>
    </div>
  );
};

export default AccessibilityWidget;
