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
import ImageEditor from './components/ImageEditor';
import { translations } from './translations';
import CookieConsent from './components/CookieConsent';

type Language = 'pt' | 'en' | 'es';
type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && ["light", "dark"].includes(savedTheme)) {
      return savedTheme as Theme;
    }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  const t = translations[lang];
  const languages: Language[] = ['pt', 'en', 'es'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

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
  const imageEditorRef = useRef<HTMLElement>(null);
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
              imageEditor: () => scrollTo(imageEditorRef),
              gallery: () => scrollTo(galleryRef),
              contact: () => scrollTo(contactRef)
            }} 
          />
          <main>
            <Hero 
              t={t.hero}
              onNavigate={{
                trajectory: () => scrollTo(trajectoryRef),
                projects: () => scrollTo(projectsRef),
            }} />
            <About ref={aboutRef} t={t.about}/>
            <Trajectory ref={trajectoryRef} t={t.trajectory} />
            <Projects ref={projectsRef} t={t.projects} />
            <Skills t={t.skills} />
            <Speaking t={t.speaking} />
            <ImageEditor ref={imageEditorRef} t={t.imageEditor} />
            <Gallery ref={galleryRef} t={t.gallery}/>
            <Contact ref={contactRef} t={t.contact}/>
          </main>
          <Footer t={t.footer} />
        </div>
      </div>
      {showCookieConsent && <CookieConsent t={t.cookieConsent} onConsent={handleConsent} />}
    </>
  );
};

export default App;
