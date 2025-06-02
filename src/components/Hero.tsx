import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Hero = () => {
  const { user, status } = useSelector((state: RootState) => state.user);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {status === 'loading' ? (
            <div className="animate-pulse">
              <div className="h-32 w-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          ) : (
            <>
              {user?.image && (
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
                />
              )}
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {user?.name || 'Your Name'}
              </h1>
              <p className="text-xl text-gray-600 mb-8">{user?.role || 'Your Role'}</p>
              <p className="text-lg text-gray-700 mb-8">{user?.bio || 'Your Bio'}</p>
              {user?.socialLinks && (
                <div className="flex justify-center space-x-4">
                  {user.socialLinks.map((link: any, index: number) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {link.platform}
                    </a>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero; 