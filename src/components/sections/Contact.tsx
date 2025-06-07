import React, { useState, useEffect} from 'react';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import { Mail, MapPin, Send, Smartphone } from 'lucide-react';
import { fetchUserData } from '../../redux/features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import emailjs from '@emailjs/browser';


const Contact: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { user, status } = useSelector((state: RootState) => state.user);

  useEffect(() => { 
    if (status === 'idle') {
      dispatch(fetchUserData());
    }
  }, [status, dispatch]); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_gamct5a',      // Replace with your EmailJS service ID
        'template_fu3wh3v',     // Replace with your EmailJS template ID
        formData,
        'EHOQ2Kvn6e_psrUMH'       // Replace with your EmailJS public key
      );

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-6 relative">
      {/* Background Element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-accent-500/10 dark:bg-accent-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary-500/10 dark:bg-primary-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container">
        <h2 className="section-title text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <GlassCard className="h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4 mt-1">
                    <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Email</h4>
                    <a 
                      href={`mailto:${user?.email}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {user?.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4 mt-1">
                    <Smartphone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Phone</h4>
                    <a 
                      href={`tel:${user?.phone}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {user?.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4 mt-1">
                    <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                    {user?.address?.city}, {user?.address?.state}, {user?.address?.country}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Feel free to reach out if you're looking for an iOS developer, have questions about mobile development, 
                  or just want to connect.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300">
                  Available for freelance work and full-time positions.
                </p>
              </div>
            </GlassCard>
          </div>
          
          <div className="md:col-span-3">
            <GlassCard>
              <h3 className="text-2xl font-semibold mb-6">Send Me A Message</h3>
              {submitSuccess ? (
              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 p-4 rounded-lg mb-6">
                Thank you! Your message has been sent successfully.
              </div>
            ) : null}
            
            {submitError ? (
              <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 p-4 rounded-lg mb-6">
                {submitError}
              </div>
            ) : null}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg glass border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg glass border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg glass border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg glass border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    Send Message
                  </>
                )}
                </Button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;