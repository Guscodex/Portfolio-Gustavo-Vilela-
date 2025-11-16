// Fix: Add React import
import React from 'react';

export interface Project {
  image: string;
  title: string;
  description: string;
  link?: string;
  tags: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  event: string;
}