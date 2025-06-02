import React from 'react';
import GlassCard from '../ui/GlassCard';
import { experienceData } from '../../data/experiences';
import { CalendarClock, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 relative">
      {/* Background Element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-secondary-500/10 dark:bg-secondary-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container">
        <h2 className="section-title text-center">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 transform md:translate-x-px"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {experienceData.map((experience, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-white dark:bg-gray-800 border-4 border-primary-500 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-primary-500" />
                  </div>
                  
                  {/* Content Card */}
                  <div className="md:w-1/2 ml-12 md:ml-0">
                    <GlassCard hoverable className="h-full">
                      <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-2">
                        <CalendarClock className="w-4 h-4" />
                        <span className="text-sm font-medium">{experience.period}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold">{experience.role}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">{experience.company}</p>
                      
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        {experience.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {experience.technologies && (
                        <div className="mt-3">
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Technologies:</p>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, i) => (
                              <span 
                                key={i} 
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </GlassCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;