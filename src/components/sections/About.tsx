import React from 'react';
import GlassCard from '../ui/GlassCard';

const About: React.FC = () => {
  return (
    <section className="py-8 relative">
      {/* Background Element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary-500/10 dark:bg-primary-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container">
        <h2 className="section-title text-center" id="about">About Me</h2>
        
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2">
            <GlassCard>
              <img 
                src="https://res.cloudinary.com/dhu478wic/image/upload/v1657127119/portfolio/h3tdtfdvugufntjktg03.jpg" 
                alt="Jonathan working on iOS app" 
                className="w-full h-auto rounded-lg"
              />
            </GlassCard>
          </div>
          
          <div className="md:col-span-3">
            <GlassCard>
              <h3 className="text-2xl font-semibold mb-3">My Journey</h3>
              
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  I'm a passionate iOS Developer with over 5 years of experience crafting beautiful, 
                  intuitive applications for the Apple ecosystem. My journey began at the University 
                  of Technology, where I earned my Computer Science degree and fell in love with iOS 
                  development during an internship at Apple.
                </p>
                
                <p>
                  What drives me is creating software that feels natural and delightful to use. I believe 
                  in the power of thoughtful design, clean code, and attention to detail. My expertise spans 
                  the entire development lifecycle from ideation and UX design to implementation and App Store 
                  deployment.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring the latest Apple technologies, contributing 
                  to open source projects, or mentoring aspiring developers. I'm currently based in San Francisco, 
                  where I enjoy hiking, photography, and collecting vintage Apple products.
                </p>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div>
                  <h4 className="font-medium text-primary-600 dark:text-primary-400">Location</h4>
                  <p>San Francisco, CA</p>
                </div>
                <div>
                  <h4 className="font-medium text-primary-600 dark:text-primary-400">Experience</h4>
                  <p>5+ Years</p>
                </div>
                <div>
                  <h4 className="font-medium text-primary-600 dark:text-primary-400">Languages</h4>
                  <p>English, Spanish</p>
                </div>
                <div>
                  <h4 className="font-medium text-primary-600 dark:text-primary-400">Availability</h4>
                  <p>Freelance / Full-time</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;