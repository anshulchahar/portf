import React from 'react';
import { Link } from 'react-router-dom';

const ProjectBachelorPraktikum = () => {
  return (
    <div className="bg-white dark:bg-dark min-h-screen transition-colors duration-300">
      {/* Project Header */}
      <div className="bg-gray-50 dark:bg-dark-lighter pt-16 pb-8 border-b border-gray-200 dark:border-dark-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Link 
                to="/#projects" 
                className="inline-flex items-center text-sm text-primary-dark dark:text-primary-light hover:underline mb-4"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to Projects
              </Link>
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">LabKraken - Building a Web Interface for IoT in Quantum Research</h1>
              <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">Bachelor Praktikum at TU Darmstadt Quantum Lab</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <img 
              src="/Kraken.png" 
              alt="LabKraken Project" 
              className="w-full h-auto rounded-lg shadow-md mb-8"
            />
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Project Overview</h2>
              <p>
                This project aimed to replace the manual, error-prone configuration of the LabKraken data aggregation system with an efficient, web-based platform. The solution provides a user-friendly interface, accessible to untrained personnel, while minimizing maintenance through CI/CD automation. This allows researchers to focus on quantum computing experiments rather than software upkeep.
              </p>
              
              <p>
                Previously, LabKraken relied on command line scripts for sensor configuration, which were prone to errors that threatened system reliability and data integrity. Our project implemented a web interface with strict input validation to prevent such errors and ensure data consistency.
              </p>
              
              <h2>Key Features</h2>
              <ul>
                <li>
                  <strong>User-Friendly Web Interface:</strong> Provides an intuitive interface for configuration of the LabKraken data aggregation system.
                </li>
                <li>
                  <strong>CRUD Operations:</strong> Complete functionality to display, add, delete, and modify data through the app.
                </li>
                <li>
                  <strong>Automated Testing:</strong> Comprehensive testing setup with GitHub CI integration.
                </li>
                <li>
                  <strong>Containerization:</strong> Automated build process of Docker containers for consistent deployment.
                </li>
                <li>
                  <strong>Code Quality:</strong> Automatic linting of the source code to ensure maintainability.
                </li>
              </ul>
              
              <h2>Technical Implementation</h2>
              <p>
                The LabKraken web interface was built using a modern technology stack:
              </p>
              <ul>
                <li>
                  <strong>Frontend:</strong> React with TypeScript for creating a dynamic and reusable component-based user interface
                </li>
                <li>
                  <strong>Backend:</strong> Next.js framework for handling server-side rendering (SSR) and API routes
                </li>
                <li>
                  <strong>Database:</strong> MongoDB as the primary data store for sensor data
                </li>
                <li>
                  <strong>Testing:</strong> Jest for unit and integration tests, React Testing Library for UI validation
                </li>
                <li>
                  <strong>Validation:</strong> Zod for schema validation and type safety
                </li>
                <li>
                  <strong>CI/CD:</strong> GitHub Actions for automated testing, building, and deployment
                </li>
                <li>
                  <strong>Containerization:</strong> Docker for standardizing development and deployment environments
                </li>
                <li>
                  <strong>Documentation:</strong> MkDocs for generating and deploying user-friendly documentation on GitHub Pages
                </li>
              </ul>
              
              <h2>My Role and Contributions</h2>
              <p>
                As a team member in this collaborative project, I contributed to:
              </p>
              <ul>
                <li>Designing and implementing the frontend interface using React and TypeScript</li>
                <li>Setting up the connection between the frontend and MongoDB through the Next.js API routes</li>
                <li>Implementing validation checks to ensure data integrity</li>
                <li>Creating comprehensive tests to ensure reliability of the application</li>
                <li>Collaborating with the AG (research group) to understand and implement domain-specific requirements</li>
                <li>Setting up Docker containerization for consistent deployment</li>
              </ul>
              
              <h2>Challenges and Solutions</h2>
              <p>
                During this project, we faced several significant challenges:
              </p>
              <ul>
                <li><strong>Technical complexity:</strong> As a team of junior developers, we had to quickly gain expertise in technologies like React, Next.js, and MongoDB. We addressed this by dedicating time to studying documentation and consulting with mentors.</li>
                <li><strong>Team coordination:</strong> With team members having different schedules due to studies and part-time work, we had to be creative about meeting times. We solved this by holding online calls when in-person meetings weren't possible.</li>
              </ul>
              
              <h2>Results and Outcomes</h2>
              <p>
                The LabKraken web interface project delivered significant results:
              </p>
              <ul>
                <li>Successfully replaced error-prone command line scripts with an intuitive web interface</li>
                <li>Improved system reliability by implementing strict input validation</li>
                <li>Enhanced maintainability through automated testing, linting, and containerization</li>
                <li>Freed quantum researchers to focus on their experiments rather than software issues</li>
                <li>Provided a learning platform that allowed team members to apply theoretical knowledge in a practical setting</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-dark-lighter rounded-lg shadow-sm p-6 sticky top-20">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                  <p className="text-base text-gray-900 dark:text-white">6.5 Months</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Role</p>
                  <p className="text-base text-gray-900 dark:text-white">Full Stack Developer</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Team Size</p>
                  <p className="text-base text-gray-900 dark:text-white">5 developers</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Technologies Used</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['React', 'TypeScript', 'Next.js', 'MongoDB', 'Docker', 'GitHub CI', 'Jest', 'Zod'].map((tech, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Key Responsibilities</p>
                  <ul className="mt-2 text-base text-gray-900 dark:text-white list-disc pl-5 space-y-1">
                    <li>Frontend Development</li>
                    <li>API Implementation</li>
                    <li>Docker Configuration</li>
                    <li>Database Integration</li>
                    <li>Testing & QA</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                  <p className="text-base text-gray-900 dark:text-white">TU DARMSTADT, ATOMS - PHOTONS - QUANTA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBachelorPraktikum;