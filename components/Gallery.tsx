
import React from 'react';
import { INSTAGRAM_POSTS, INSTAGRAM_URL } from '../constants';

interface GalleryProps {
  t: {
    title: string;
    subtitle: string;
    button: string;
  }
}

const Gallery: React.FC<GalleryProps> = ({ t }) => {
  return (
    <section id="gallery" className="py-20 bg-neutral-light dark:bg-neutral-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-dark dark:text-neutral-light">{t.title}</h2>
          <p className="text-lg text-neutral-medium dark:text-gray-400 mt-2">{t.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
          {INSTAGRAM_POSTS.map((post, index) => (
            <a 
              key={index}
              href={"https://www.instagram.com/ogustavovilella/"}
              target="_blank"
              rel="noopener noreferrer"
              className="group aspect-square block bg-neutral-medium rounded-lg overflow-hidden"
              aria-label={`Ver post ${index + 1} no Instagram`}
            >
              <img 
                src={post} 
                alt={`Post do Instagram ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" 
              />
            </a>
          ))}
        </div>
        <div className="text-center">
          <a
            href={"https://www.instagram.com/ogustavovilella/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-brand-blue text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
            {t.button}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
