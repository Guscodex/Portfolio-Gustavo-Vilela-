
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
import { translations } from './translations';
import CookieConsent from './components/CookieConsent';
import VLibras from './components/VLibras';
import AccessibilityWidget from './components/AccessibilityWidget';
import RevealOnScroll from './components/RevealOnScroll';
import BackToTop from './components/BackToTop';

type Language = 'pt' | 'en' | 'es';
type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  // isLoading removed for better performance perception (LCP)
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
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-brand-blue focus:text-white focus:rounded-md focus:font-bold"
      >
        Skip to content
      </a>
      
      {/* Accessibility Tools */}
      <VLibras />
      <AccessibilityWidget t={t.accessibility} />
      <BackToTop />

      <div className="bg-neutral-light dark:bg-neutral-dark min-h-screen">
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
        
        <main id="main-content" className="overflow-hidden">
          <Hero 
            t={t.hero}
            onNavigate={{
              trajectory: () => scrollTo(trajectoryRef),
              projects: () => scrollTo(projectsRef),
          }} />

          <div ref={aboutRef as React.RefObject<HTMLDivElement>}>
            <RevealOnScroll>
              <About t={t.about}/>
            </RevealOnScroll>
          </div>

          <div ref={trajectoryRef as React.RefObject<HTMLDivElement>}>
            <RevealOnScroll delay={100}>
              <Trajectory t={t.trajectory} />
            </RevealOnScroll>
          </div>

          <div ref={projectsRef as React.RefObject<HTMLDivElement>}>
            <RevealOnScroll>
              <Projects t={t.projects} />
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <Skills t={t.skills} />
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <Speaking t={t.speaking} />
          </RevealOnScroll>

          <div ref={galleryRef as React.RefObject<HTMLDivElement>}>
            <RevealOnScroll>
              <Gallery t={t.gallery}/>
            </RevealOnScroll>
          </div>

          <div ref={contactRef as React.RefObject<HTMLDivElement>}>
            <RevealOnScroll>
              <Contact t={t.contact}/>
            </RevealOnScroll>
          </div>
        </main>
        
        <Footer t={t.footer} />
      </div>
      {showCookieConsent && <CookieConsent t={t.cookieConsent} onConsent={handleConsent} />}
    </>
  );
};

export default App;
