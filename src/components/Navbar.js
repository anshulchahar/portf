import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white dark:bg-dark border-b border-gray-100 dark:border-dark-accent shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">Anshul Chahar</h1>
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 hover:text-primary-dark dark:hover:text-primary-light transition-colors">Home</a>
              <a href="#about" className="px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 hover:text-primary-dark dark:hover:text-primary-light transition-colors">About</a>
              <a href="#projects" className="px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 hover:text-primary-dark dark:hover:text-primary-light transition-colors">Projects</a>
              <a href="#contact" className="px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 hover:text-primary-dark dark:hover:text-primary-light transition-colors">Contact</a>
              <button 
                onClick={toggleDarkMode}
                className="px-3 py-2 flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light focus:outline-none transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-dark-lighter">
            <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-200 hover:text-primary-dark dark:hover:text-primary-light transition-colors">Home</a>
            <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-200 hover:text-primary-dark dark:hover:text-primary-light transition-colors">About</a>
            <a href="#projects" className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-200 hover:text-primary-dark dark:hover:text-primary-light transition-colors">Projects</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-200 hover:text-primary-dark dark:hover:text-primary-light transition-colors">Contact</a>
            <button 
              onClick={toggleDarkMode}
              className="w-full text-left block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-200 hover:text-primary-dark dark:hover:text-primary-light focus:outline-none transition-colors"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;