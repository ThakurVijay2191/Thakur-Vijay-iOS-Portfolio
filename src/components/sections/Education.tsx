import React, { useEffect } from 'react';
import GlassCard from '../ui/GlassCard';
import { educationData } from '../../data/education';
import { GraduationCap, Calendar } from 'lucide-react';
import { fetchAllEducationsData } from '../../redux/features/educationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';

const Education: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { educations, status } = useSelector((state: RootState) => state.educations);


  useEffect(() => { 
    if (status === 'idle') {
      dispatch(fetchAllEducationsData());
    }
  }, [status, dispatch]); 

  return (
    <section id="education" className="py-2 relative">
      {/* Background Element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary-500/10 dark:bg-primary-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container">
        <h2 className="section-title text-center">Education</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {educations.map((education, index) => (
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
                      <span className="text-sm font-medium">{new Date(education?.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {education?.isCurrentlyStudying ? 'Current' : new Date(education?.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold">{education?.degreeName}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{education?.institutionName}</p>
                    
                    <p className="text-gray-700 dark:text-gray-300">Grade: {education?.grade}</p>
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