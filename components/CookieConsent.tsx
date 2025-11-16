import React, { useState, useEffect } from 'react';

interface CookieConsentProps {
  t: {
    message: string;
    accept: string;
    decline: string;
  };
  onConsent: (consent: boolean) => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ t, onConsent }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay visibility for animation
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
    onConsent(true);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'false');
    setIsVisible(false);
    onConsent(false);
  };

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-[100] bg-white dark:bg-neutral-dark shadow-[0_-2px_10px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-in-out transform ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-medium dark:text-gray-300 text-center sm:text-left">
            <p id="cookie-consent-description">{t.message}</p>
          </div>
          <div className="flex-shrink-0 flex items-center gap-4">
            <button
              onClick={handleDecline}
              className="font-medium text-neutral-medium hover:text-brand-blue dark:text-gray-300 dark:hover:text-brand-blue transition-colors text-sm"
            >
              {t.decline}
            </button>
            <button
              onClick={handleAccept}
              className="bg-brand-blue text-white font-bold py-2 px-5 rounded-full hover:bg-blue-700 transition-all duration-300 text-sm"
            >
              {t.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
