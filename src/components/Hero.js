import React from 'react';

const Hero = () => {
  return (
    <header id="home" className="bg-white dark:bg-dark py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-left md:w-1/2">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
              <span className="block mb-2">Hi, I'm</span>
              <span className="block text-primary-dark dark:text-primary-light">Anshul Chahar</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl">
              Emerging Software Engineer
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="mailto:rohitchahar0987@gmail.com" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white dark:text-gray-900 bg-primary-dark dark:bg-primary-light hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Contact Me
              </a>
              <a href="https://www.linkedin.com/in/anshul-chahar-9162b2131/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-dark-lighter hover:bg-gray-50 dark:hover:bg-dark-accent transition-colors">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/anshulchahar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-dark-lighter hover:bg-gray-50 dark:hover:bg-dark-accent transition-colors">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/3">
            <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden border-4 border-primary-dark dark:border-primary-light shadow-xl">
              <img 
                src={process.env.PUBLIC_URL + "/Photo.jpeg"}
                alt="Anshul Chahar" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;