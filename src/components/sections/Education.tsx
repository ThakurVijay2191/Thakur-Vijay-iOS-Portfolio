import React from 'react';
import GlassCard from '../ui/GlassCard';
import { educationData } from '../../data/education';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-12 relative">
      {/* Background Element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary-500/10 dark:bg-primary-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container">
        <h2 className="section-title text-center">Education</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {educationData.map((education, index) => (
              <GlassCard key={index} hoverable>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-16 flex items-start justify-center">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{education.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold">{education.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{education.institution}</p>
                    
                    <p className="text-gray-700 dark:text-gray-300">{education.description}</p>
                    
                    {education.achievements && (
                      <div className="mt-2">
                        <p className="font-medium mb-1">Achievements:</p>
                        <ul className="space-y-1">
                          {education.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary-500 mr-2">•</span>
                              <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {education.relevantCourses && (
                      <div className="mt-2">
                        <p className="font-medium mb-1">Relevant Courses:</p>
                        <div className="flex flex-wrap gap-2">
                          {education.relevantCourses.map((course, i) => (
                            <span 
                              key={i} 
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;