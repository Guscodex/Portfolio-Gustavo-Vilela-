



import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Trajectory from './components/Trajectory';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Speaking from './components/Speaking';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { translations } from './translations';
import CookieConsent from './components/CookieConsent';

type Language = 'pt' | 'en' | 'es';
type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    const userPrefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ["light", "dark"].includes(savedTheme)) {
      return savedTheme as Theme;
    }
    return userPrefersDark ? 'dark' : 'light';
  });
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  const t = translations[lang];
  const languages: Language[] = ['pt', 'en', 'es'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Short delay for the animation to be visible

    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === null) {
      setShowCookieConsent(true);
    }
  }, []);

  useEffect(() => {
    const langCode = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' };
    document.documentElement.lang = langCode[lang];
    document.title = t.pageTitle;
  }, [lang, t.pageTitle]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const aboutRef = useRef<HTMLElement>(null);
  const trajectoryRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const cycleLang = () => {
    const currentIndex = languages.indexOf(lang);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLang(languages[nextIndex]);
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleConsent = () => {
    setShowCookieConsent(false);
  };

  return (
    <>
      <Loader isLoading={isLoading} />
      <div 
        className={`
          bg-neutral-light dark:bg-neutral-dark min-h-screen 
          transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}
        `}
      >
        <div className={isLoading ? 'invisible' : 'visible'}>
          <Header 
            t={t.header}
            lang={lang}
            theme={theme}
            onCycleLang={cycleLang}
            onToggleTheme={toggleTheme}
            onNavigate={{
              about: () => scrollTo(aboutRef),
              trajectory: () => scrollTo(trajectoryRef),
              projects: () => scrollTo(projectsRef),
              gallery: () => scrollTo(galleryRef),
              contact: () => scrollTo(contactRef)
            }} 
          />
          <main className="px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48">
            <Hero 
              t={t.hero}
              onNavigate={{
                trajectory: () => scrollTo(trajectoryRef),
                projects: () => scrollTo(projectsRef),
            }} />
            <div ref={aboutRef as React.RefObject<HTMLDivElement>}>
              <About t={t.about}/>
            </div>
            <div ref={trajectoryRef as React.RefObject<HTMLDivElement>}>
              <Trajectory t={t.trajectory} />
            </div>
            <div ref={projectsRef as React.RefObject<HTMLDivElement>}>
              <Projects t={t.projects} />
            </div>
            <Skills t={t.skills} />
            <Speaking t={t.speaking} />
            <div ref={galleryRef as React.RefObject<HTMLDivElement>}>
              <Gallery t={t.gallery}/>
            </div>
            <div ref={contactRef as React.RefObject<HTMLDivElement>}>
              <Contact t={t.contact}/>
            </div>
          </main>
          <Footer t={t.footer} />
        </div>
      </div>
      {showCookieConsent && <CookieConsent t={t.cookieConsent} onConsent={handleConsent} />}
    </>
  );
};

export default App;