import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // EmailJS configuration using environment variables
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setIsLoading(false);
      
      // Clear the form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    })
    .catch((error) => {
      console.error('Failed to send email:', error.text);
      setSubmitStatus('error');
      setIsLoading(false);
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-dark-lighter transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary-dark dark:text-primary-light font-semibold tracking-wide uppercase">Contact</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Get In Touch
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>
        
        <div className="mt-10 max-w-xl mx-auto">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-md">
              Your message has been sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-md">
              Failed to send your message. Please try again later.
            </div>
          )}
          
          <form ref={form} onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-dark dark:focus:ring-primary-light focus:border-primary-dark dark:focus:border-primary-light bg-white dark:bg-dark-accent text-gray-900 dark:text-white" 
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-dark dark:focus:ring-primary-light focus:border-primary-dark dark:focus:border-primary-light bg-white dark:bg-dark-accent text-gray-900 dark:text-white" 
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows="4" 
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-dark dark:focus:ring-primary-light focus:border-primary-dark dark:focus:border-primary-light bg-white dark:bg-dark-accent text-gray-900 dark:text-white"
              ></textarea>
            </div>
            
            <div>
              <button 
                type="submit" 
                disabled={isLoading}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white dark:text-gray-900 bg-primary-dark dark:bg-primary-light hover:bg-gray-700 dark:hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark dark:focus:ring-primary-light transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-dark dark:bg-primary-light text-white dark:text-gray-900 mx-auto">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  <a href="mailto:rohitchahar0987@gmail.com" className="hover:text-primary-dark dark:hover:text-primary-light">
                    rohitchahar0987@gmail.com
                  </a>
                </p>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-dark dark:bg-primary-light text-white dark:text-gray-900 mx-auto">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Social Media</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  <a href="https://www.linkedin.com/in/anshul-chahar-9162b2131/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-dark dark:hover:text-primary-light">
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-dark dark:bg-primary-light text-white dark:text-gray-900 mx-auto">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Resume</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  <a href="/CV-Final.pdf" download className="hover:text-primary-dark dark:hover:text-primary-light">
                    Download CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;