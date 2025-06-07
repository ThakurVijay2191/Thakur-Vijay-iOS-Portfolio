import React, { useEffect } from 'react';
import GlassCard from '../ui/GlassCard';
import { fetchUserData } from '../../redux/features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { urlFor } from '../../helper/imageUrlBuilder'

const About: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, status } = useSelector((state: RootState) => state.user);

  useEffect(() => { 
    if (status === 'idle') {
      dispatch(fetchUserData());
    }
  }, [status, dispatch]); 

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
                src={user?.profileImage ? urlFor(user.profileImage).url() : '/placeholder-image.jpg'} 
                alt="Thakur Vijay working on iOS app" 
                className="w-full h-auto rounded-lg"
              />
            </GlassCard>
          </div>
          
          <div className="md:col-span-3">
            <GlassCard>
              <h3 className="text-2xl font-semibold mb-3">My Journey</h3>
              
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                 {user?.about}
                </p>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div>
                  <h4 className="font-medium text-primary-600 dark:text-primary-400">Location</h4>
                  <p>{user?.address?.city}, {user?.address?.state}, {user?.address?.country}</p>
                </div>
                <div>
                  <h4 className="font-medium text-primary-600 dark:text-primary-400">Experience</h4>
                  <p>{user?.experience}</p>
                </div>
                <div>
                  <h4 className="font-medium text-primary-600 dark:text-primary-400">Languages</h4>
                  <p>{user?.languages?.join(', ')}</p>
                </div>
                <div>
                  <h4 className="font-medium text-primary-600 dark:text-primary-400">Availability</h4>
                  <p>{user?.availability}</p>
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