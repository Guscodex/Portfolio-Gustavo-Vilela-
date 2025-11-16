
import React from 'react';

interface FooterProps {
  t: {
    quote: string;
    copyright: string;
  }
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-neutral-dark text-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-xl italic mb-4">
          {t.quote}
        </p>
        <p className="text-sm text-neutral-medium">
          &copy; {new Date().getFullYear()} Gustavo Vilela Santos. {t.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;