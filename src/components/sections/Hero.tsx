import React, { useEffect } from 'react';
import Button from '../ui/Button';
import { ArrowDown } from 'lucide-react';
import { fetchUserData } from '../../redux/features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';

const Hero: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, status } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserData());
    }
  }, [status, dispatch]); 

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 dark:bg-primary-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary-500/20 dark:bg-secondary-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-accent-500/20 dark:bg-accent-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-primary-600 dark:text-primary-400 font-medium mb-2 opacity-0 animate-[fadeIn_0.5s_0.1s_forwards]">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 opacity-0 animate-[fadeIn_0.5s_0.3s_forwards]">
              {user?.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-medium mb-6 opacity-0 animate-[fadeIn_0.5s_0.5s_forwards]">
            {user?.designation}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg opacity-0 animate-[fadeIn_0.5s_0.7s_forwards]">
            {user?.description}
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-[fadeIn_0.5s_0.9s_forwards]">
              <Button onClick={() => document.getElementById('projects')?.scrollIntoView()}>
                View My Work
              </Button>
              <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="flex items-center justify-center w-10 h-10 rounded-full glass"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;