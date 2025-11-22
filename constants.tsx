import React from 'react';
import type { Project, TimelineEvent, SkillCategory, Testimonial } from './types';

export const ICONS = {
    Briefcase: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    Code: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    AcademicCap: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" /></svg>,
    UserGroup: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    LightBulb: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
};

export const getProjects = (t: any): Project[] => [
  {
    image: "/images/project-saga.jpg",
    title: t.projectList[0].title,
    description: t.projectList[0].description,
    tags: ["Open Innovation", "Project Management", "Ecosystem"],
    link: "#"
  },
  {
    image: "/images/project-inoovathon.jpg",
    title: t.projectList[1].title,
    description: t.projectList[1].description,
    tags: ["Design Sprint", "Event Leadership", "Corporate Innovation"],
    link: "#"
  },
  {
    image: "/images/project-nasa.jpg",
    title: t.projectList[2].title,
    description: t.projectList[2].description,
    tags: ["Mentorship", "Competition", "Technology", "Award"],
    link: "#"
  },
  {
    image: "/images/project-grand-prix.jpg",
    title: t.projectList[3].title,
    description: t.projectList[3].description,
    tags: ["Leadership", "International Event", "Community"],
    link: "#"
  },
  {
    image: "/images/project-veras.jpg",
    title: t.projectList[4].title,
    description: t.projectList[4].description,
    tags: ["Front-End", "UX/UI Design", "Culture"],
    link: "https://centroculturalveras.org/"
  },
   {
    image: "/images/project-adesampa.jpg",
    title: t.projectList[5].title,
    description: t.projectList[5].description,
    tags: ["Hackathon", "Social Impact", "Award"],
    link: "#"
  },
];

export const PROFESSIONAL_TIMELINE: TimelineEvent[] = [
    {
        year: "2023 - Present",
        title: "Innovation & Tech Services Manager",
        company: "SENAI-RR",
        description: "Leading the strategic and operational management of technology and innovation services, focusing on restructuring and modernization.",
        icon: ICONS.Briefcase
    },
    {
        year: "2022 - 2023",
        title: "Tech Support (Open Innovation) & Front-End Developer",
        company: "SENAI-SP",
        description: "Liaison for the SAGA SENAI Innovation program and developer of UX/UI interfaces for online courses.",
        icon: ICONS.UserGroup
    },
    {
        year: "2021 - 2022",
        title: "Web Designer",
        company: "SENAI-SP",
        description: "Creating web experiences and producing video classes and podcasts for the online education platform.",
        icon: ICONS.Code
    },
    {
        year: "2021",
        title: "Web Designer (Freelance)",
        company: "NIBR - Business Consulting",
        description: "Front-end development for the Centro Cultural Veras project website.",
        icon: ICONS.Code
    }
];

export const ACADEMIC_TIMELINE: TimelineEvent[] = [
     {
        year: "2025 - 2026",
        title: "Postgraduate Degree in Public Management",
        company: "IFSC",
        description: "Specialization in public policies and administration.",
        icon: ICONS.AcademicCap
    },
    {
        year: "2024 - 2026",
        title: "Postgraduate Degree in Agile Methodologies & Innovation Management",
        company: "PUCPR",
        description: "Deepening knowledge in startup models, agility, and innovation management.",
        icon: ICONS.AcademicCap
    },
    {
        year: "2022 - 2023",
        title: "Technologist in Graphic Design",
        company: "Anhembi Morumbi University (UAM)",
        description: "Higher education focused on visual communication and interface design.",
        icon: ICONS.AcademicCap
    },
    {
        year: "2021 - 2022",
        title: "Technician in Audio and Video Production",
        company: "ETEC",
        description: "Technical training in audiovisual content production and editing.",
        icon: ICONS.AcademicCap
    },
    {
        year: "2020 - 2021",
        title: "Technician in Multimedia",
        company: "SENAI",
        description: "Focus on Digital Design and development of multimedia projects.",
        icon: ICONS.AcademicCap
    }
];


export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "Design & UX",
        skills: ["Design Thinking", "UX Research", "User Journey", "Prototyping", "Usability Testing", "UI Design"]
    },
    {
        title: "Web Development",
        skills: ["HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Interface Development", "SEO", "GitHub"]
    },
    {
        title: "Innovation & Business",
        skills: ["Agile Methodologies (Scrum, Kanban)", "Project Management (PMBOK)", "Open Innovation", "Design Sprint", "Lean Startup", "Strategic Planning"]
    },
    {
        title: "Tools & Technologies",
        skills: ["Figma", "Adobe Suite", "Miro", "Asana", "Power BI", "Google Analytics", "AI Tools"]
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "Gus's mentorship was a game-changer for our team at the hackathon. His clarity and strategic vision helped us focus on what really mattered.",
        author: "Participant",
        event: "NASA Space Apps - Local Winner 2023"
    },
    {
        quote: "An incredible facilitator! The workshop was dynamic, inspiring, and full of practical insights on innovation.",
        author: "Participant",
        event: "Climathon – ADESMPA 2024"
    },
    {
        quote: "Gustavo has a unique ability to simplify complex concepts and engage the audience. His guidance at the event was excellent.",
        author: "Competitor",
        event: "Grand Prix SENAI Latam 2023"
    }
];

export const INSTAGRAM_URL = "https://www.instagram.com/ogustavovilella/";

export const INSTAGRAM_POSTS: string[] = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-7.jpg",
  "/images/gallery-8.jpg",
];