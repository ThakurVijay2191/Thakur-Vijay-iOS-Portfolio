import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { fetchUserData } from '../../redux/features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { RootState } from '../../redux/store';


const Footer: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { user, status } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserData());
    }
  }, [status, dispatch]);

  return (
    <footer className="glass border-t border-white/20 dark:border-gray-800/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {user?.name}. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            {user?.socialLinks?.find((link: any) => link.platform === 'github')?.url && (
              <a 
                href={user.socialLinks.find((link: any) => link.platform === 'github').url}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {user?.socialLinks?.find((link: any) => link.platform === 'linkedin')?.url && (
              <a 
                href={user.socialLinks.find((link: any) => link.platform === 'linkedin').url}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            <a 
              href={`mailto:${user?.email}`}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;