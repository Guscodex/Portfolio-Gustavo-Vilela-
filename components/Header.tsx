import React, { useState, useEffect } from 'react';

interface HeaderProps {
  t: {
    navLinks: {
      about: string;
      trajectory: string;
      projects: string;
      gallery: string;
      contact: string;
    };
    langButton: string;
  };
  lang: string;
  theme: 'light' | 'dark';
  onCycleLang: () => void;
  onToggleTheme: () => void;
  onNavigate: {
    about: () => void;
    trajectory: () => void;
    projects: () => void;
    gallery: () => void;
    contact: () => void;
  };
}

const Header: React.FC<HeaderProps> = ({ t, theme, onCycleLang, onToggleTheme, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [startNavAnimation, setStartNavAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
      if (scrolled && !startNavAnimation) {
        setStartNavAnimation(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [startNavAnimation]);

  const navLinks = [
    { label: t.navLinks.about, action: onNavigate.about },
    { label: t.navLinks.trajectory, action: onNavigate.trajectory },
    { label: t.navLinks.projects, action: onNavigate.projects },
    { label: t.navLinks.gallery, action: onNavigate.gallery },
    { label: t.navLinks.contact, action: onNavigate.contact },
  ];
  
  const handleLinkClick = (action: () => void) => {
    setIsMenuOpen(false);
    action();
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'header-scrolled' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="https://www.linkedin.com/in/gustavovsantos/" className="text-2xl font-bold text-neutral-dark dark:text-neutral-light hover:text-brand-blue transition-colors">
              Gustavo Vilela
            </a>
          </div>
          <nav className="hidden md:block">
            <ul className={`flex items-center space-x-8 ${startNavAnimation ? 'nav-links-animating' : ''}`}>
              {navLinks.map((link) => (
                <li key={link.label} className={!startNavAnimation ? 'opacity-0' : 'opacity-100'}>
                  <button onClick={link.action} className="font-medium text-neutral-medium hover:text-brand-blue dark:text-gray-300 dark:hover:text-brand-blue transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
              <li className={!startNavAnimation ? 'opacity-0' : 'opacity-100'}>
                <button onClick={onToggleTheme} aria-label="Toggle theme" className="text-neutral-dark dark:text-neutral-light p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  {theme === 'light' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.706-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm-.707 8.486a1 1 0 011.414 0l.707-.707a1 1 0 11-1.414-1.414l-.707.707a1 1 0 010 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" /></svg>
                  )}
                </button>
              </li>
              <li className={!startNavAnimation ? 'opacity-0' : 'opacity-100'}>
                <button onClick={onCycleLang} className="font-bold text-brand-blue border-2 border-brand-blue rounded-md py-1 px-3 hover:bg-brand-blue hover:text-white transition-colors">
                  {t.langButton}
                </button>
              </li>
            </ul>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <button onClick={onToggleTheme} aria-label="Toggle theme" className="text-neutral-dark dark:text-neutral-light p-2 rounded-full">
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              )}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-neutral-dark dark:text-neutral-light">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <ul className="flex flex-col items-center py-4">
            {navLinks.map((link) => (
              <li key={link.label} className="w-full text-center py-2">
                <button onClick={() => handleLinkClick(link.action)} className="font-medium text-neutral-medium dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue transition-colors w-full">
                  {link.label}
                </button>
              </li>
            ))}
             <li className="w-full text-center py-2 mt-2">
                <button onClick={onCycleLang} className="font-bold text-brand-blue border-2 border-brand-blue rounded-md py-2 px-4 hover:bg-brand-blue hover:text-white transition-colors">
                  {t.langButton}
                </button>
              </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;