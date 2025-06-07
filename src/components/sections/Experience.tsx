import React, { useEffect } from 'react';
import GlassCard from '../ui/GlassCard';
import { CalendarClock, Briefcase } from 'lucide-react';
import { fetchAllExperiencesData } from '../../redux/features/experienceSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';

const Experience: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { experiences, status } = useSelector((state: RootState) => state.experiences);


  useEffect(() => { 
    if (status === 'idle') {
      dispatch(fetchAllExperiencesData());
    }
  }, [status, dispatch]); 

  return (
    <section id="experience" className="py-4 relative">
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
              {experiences.map((experience, index) => (
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
                  <div className="md:w-[47%] ml-8 md:ml-0">
                    <GlassCard hoverable className="h-full">
                      <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-2">
                        <CalendarClock className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {new Date(experience?.dateStarted).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {experience?.isCurrentlyWorkingHere ? 'Present' : new Date(experience?.dateEnded).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold">{experience.jobTitle}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">{experience.companyName}</p>
                      
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        {experience.points.map((item: any, i: any) => (
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
                            {experience.technologies.map((tech: any, i: any) => (
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