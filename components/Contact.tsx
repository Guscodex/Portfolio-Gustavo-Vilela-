
import React, { useState } from 'react';
import { INSTAGRAM_URL } from '../constants';

const SocialLink: React.FC<{ href: string; children: React.ReactNode; label: string }> = ({ href, children, label }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={label} 
      className="text-neutral-medium dark:text-gray-400 hover:text-brand-blue dark:hover:text-brand-blue hover:bg-brand-blue/10 dark:hover:bg-brand-blue/10 p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue transform hover:scale-110"
    >
        {children}
    </a>
);

interface ContactProps {
  t: {
    title: string;
    subtitle: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formButton: string;
    formSuccess: string;
    linksTitle: string;
    linksSubtitle: string;
    cvButton: string;
  }
}

const Contact: React.FC<ContactProps> = ({ t }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert(t.formSuccess);
        setFormData({ name: '', email: '', message: '' });
    };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-dark dark:text-white">{t.title}</h2>
          <p className="text-lg text-neutral-medium dark:text-gray-400 mt-4">{t.subtitle}</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div className="bg-white dark:bg-gray-800 p-8 lg:p-10 rounded-2xl shadow-2xl shadow-gray-200/50 dark:shadow-black/50 border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-neutral-dark dark:text-white mb-8">{t.formTitle}</h3>
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-neutral-dark dark:text-gray-300 mb-2">{t.formName}</label>
                        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent dark:text-white transition-shadow"/>
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-neutral-dark dark:text-gray-300 mb-2">{t.formEmail}</label>
                        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent dark:text-white transition-shadow"/>
                    </div>
                     <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-neutral-dark dark:text-gray-300 mb-2">{t.formMessage}</label>
                        <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent dark:text-white transition-shadow resize-none"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-brand-blue text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-0.5">{t.formButton}</button>
                    </div>
                 </form>
            </div>
            <div className="flex flex-col justify-center">
                 <h3 className="text-3xl font-bold text-neutral-dark dark:text-white mb-6">{t.linksTitle}</h3>
                 <p className="text-lg text-neutral-medium dark:text-gray-400 mb-10 leading-relaxed">{t.linksSubtitle}</p>
                 
                 <a 
                    href="/gustavo_vilela_santos_cv.pdf" 
                    download 
                    className="group flex items-center justify-between w-full max-w-sm bg-neutral-dark dark:bg-white text-white dark:text-neutral-dark font-bold py-4 px-6 rounded-xl hover:shadow-xl transition-all duration-300 mb-12"
                >
                    <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {t.cvButton}
                    </span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <p className="text-sm font-bold uppercase tracking-wider text-neutral-medium dark:text-gray-500 mb-6">Redes Sociais</p>
                    <div className="flex space-x-4">
                        <SocialLink href="https://www.linkedin.com/in/gustavovsantos/" label="LinkedIn">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </SocialLink>
                        <SocialLink href="#" label="GitHub">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </SocialLink>
                        <SocialLink href="#" label="Behance">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 7h-7v-2h7v2zm1.732 6h-5.732v-2h5.732v2zm-5.732 4h-5v-2h5v2zm-1.5-10h-2.5c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5h2.5v-9zm-1.5 7h-1c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5h1v5zm-3.732 5h-10.268v-18h18v5h-7.732z"/></svg>
                        </SocialLink>
                        <SocialLink href={INSTAGRAM_URL} label="Instagram">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
                        </SocialLink>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
