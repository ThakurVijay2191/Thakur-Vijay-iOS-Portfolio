import React from 'react';
import GlassCard from '../ui/GlassCard';
import { skillsData } from '../../data/skills';
import { Code, Lightbulb, BarChart3 } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 relative">
      {/* Background Element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary-500/10 dark:bg-secondary-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container">
        <h2 className="section-title text-center">My Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <GlassCard>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center mr-4">
                <Code className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold">Languages & Frameworks</h3>
            </div>
            
            <div className="space-y-3">
              {skillsData.languages.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary-500 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
          
          <GlassCard>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-xl flex items-center justify-center mr-4">
                <Lightbulb className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="text-xl font-semibold">Apple Technologies</h3>
            </div>
            
            <div className="space-y-3">
              {skillsData.technologies.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-secondary-500 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
          
          <GlassCard>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900 rounded-xl flex items-center justify-center mr-4">
                <BarChart3 className="w-6 h-6 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold">Tools & Platforms</h3>
            </div>
            
            <div className="space-y-3">
              {skillsData.tools.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent-500 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
        
        {/* Additional Skills */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-center mb-4">Additional Skills</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skillsData.additional.map((skill, index) => (
              <div 
                key={index} 
                className="px-4 py-2 rounded-full glass hover:shadow-glass-hover transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;