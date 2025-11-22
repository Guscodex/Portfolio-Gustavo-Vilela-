
// @ts-nocheck
import React, { useEffect, useRef } from 'react';

const VLibras: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent duplicate scripts
    if (document.querySelector('script[src*="vlibras"]')) return;

    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;
    script.onload = () => {
      if (window.VLibras) {
          new window.VLibras.Widget('https://vlibras.gov.br/app');
      }
    };
    document.body.appendChild(script);

    return () => {
        // Optional: cleanup if needed, though VLibras is usually global
    };
  }, []);

  return (
    <div ref={widgetRef} vw="true" className="enabled">
      <div vw-access-button="true" className="active"></div>
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
};

export default VLibras;
