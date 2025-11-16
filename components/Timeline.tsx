
import React from 'react';
import type { TimelineEvent } from '../types';

interface TimelineItemProps {
    event: TimelineEvent;
    isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, isLast }) => (
    <div className="relative pl-12 pb-12">
        {!isLast && <div className="absolute top-0 left-[22px] w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>}
        <div className="absolute top-0 left-0 w-11 h-11 bg-brand-blue rounded-full flex items-center justify-center text-white">
            {event.icon}
        </div>
        <div className="ml-4">
            <span className="bg-brand-blue/10 text-brand-blue text-sm font-semibold px-3 py-1 rounded-full">{event.year}</span>
            <h3 className="text-xl font-bold text-neutral-dark dark:text-neutral-light mt-3 mb-1">{event.title}</h3>
            <p className="text-md font-semibold text-neutral-medium dark:text-gray-400 mb-2">{event.company}</p>
            <p className="text-neutral-medium dark:text-gray-400">{event.description}</p>
        </div>
    </div>
);

interface TimelineProps {
    title: string;
    subtitle: string;
    events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ title, subtitle, events }) => {
  return (
    <div>
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-neutral-dark dark:text-neutral-light">{title}</h3>
          <p className="text-lg text-neutral-medium dark:text-gray-400 mt-2">{subtitle}</p>
        </div>
        <div className="relative">
            {events.map((event, index) => (
                <TimelineItem 
                    key={index} 
                    event={event}
                    isLast={index === events.length - 1} 
                />
            ))}
        </div>
    </div>
  );
};

export default Timeline;
