import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSolvaAI = () => {
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
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">SolvaAI</h1>
              <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">AI-Powered Document Analysis Tool</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <img 
              src="/Solva.png" 
              alt="SolvaAI Project" 
              className="w-full h-auto rounded-lg shadow-md mb-8"
            />
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Project Overview</h2>
              <p>
                SolvaAI is an advanced document analysis application that leverages artificial intelligence to provide 
                insightful analysis of PDF documents. Built using Next.js and modern web technologies, it offers a fast, 
                responsive, and feature-rich experience for users needing to extract insights from their documents.
              </p>
              
              <h2>Key Features</h2>
              <ul>
                <li>
                  <strong>AI-Powered Analysis:</strong> Utilizes Google's Gemini AI to understand and summarize PDF content, 
                  extract key information, and answer questions about the documents.
                </li>
                <li>
                  <strong>Secure Authentication:</strong> Integrates with Google OAuth for easy and secure user login via NextAuth.js.
                </li>
                <li>
                  <strong>Document History:</strong> Keeps track of previously analyzed documents and their results for easy access.
                </li>
                <li>
                  <strong>Multi-File Comparison:</strong> Allows users to upload and compare multiple documents simultaneously.
                </li>
                <li>
                  <strong>Modern UI:</strong> Built with Tailwind CSS for a clean, responsive, and customizable user interface.
                </li>
              </ul>
              
              <h2>Technical Implementation</h2>
              <p>
                The SolvaAI project was built using a robust modern technology stack:
              </p>
              <ul>
                <li>
                  <strong>Frontend Framework:</strong> Next.js (React framework) - Chosen for its features like SSR, 
                  routing, API routes, and overall developer experience
                </li>
                <li>
                  <strong>Backend:</strong> Next.js API Routes - Used for creating serverless API endpoints within the Next.js application
                </li>
                <li>
                  <strong>Database:</strong> Prisma ORM with SQLite for development - A modern database toolkit making database 
                  access easy and type-safe
                </li>
                <li>
                  <strong>Authentication:</strong> NextAuth.js - Simplifies authentication implementation, configured with Google OAuth provider
                </li>
                <li>
                  <strong>AI Integration:</strong> Google Gemini API - Provides the core AI capabilities for document analysis
                </li>
                <li>
                  <strong>Styling:</strong> Tailwind CSS - A utility-first CSS framework for rapid UI development
                </li>
                <li>
                  <strong>Language:</strong> TypeScript - Adds static typing to JavaScript, improving code reliability and developer productivity
                </li>
              </ul>
              
              <h2>Architecture</h2>
              <p>
                The project follows a standard Next.js application structure with:
              </p>
              <ul>
                <li>Route groups for authentication and dashboard pages</li>
                <li>API routes for handling document upload, analysis, and history retrieval</li>
                <li>Component organization for UI elements, authentication flows, and dashboard features</li>
                <li>Utility functions and configurations for Prisma client and AI services</li>
              </ul>
              
              <h2>Challenges and Solutions</h2>
              <p>
                One of the major challenges in developing SolvaAI was ensuring secure and efficient handling of PDF documents 
                while providing meaningful AI analysis. To address this:
              </p>
              <ul>
                <li>We implemented secure file upload and processing pipelines</li>
                <li>We optimized the document parsing to extract maximum value from the AI analysis</li>
                <li>We created a user-friendly interface to display complex analysis in an accessible format</li>
                <li>We developed a robust history system to allow users to revisit previous analyses</li>
              </ul>
              
              <h2>Results and Impact</h2>
              <p>
                SolvaAI has significantly improved the efficiency of document analysis and information extraction. Users benefit from:
              </p>
              <ul>
                <li>Faster document comprehension with AI-generated summaries</li>
                <li>Enhanced information discovery through intelligent document parsing</li>
                <li>Improved workflow through saved history and document comparison features</li>
                <li>Secure and convenient access through Google authentication</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-dark-lighter rounded-lg shadow-sm p-6 sticky top-20">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Development Type</p>
                  <p className="text-base text-gray-900 dark:text-white">Next.js Web Application</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Role</p>
                  <p className="text-base text-gray-900 dark:text-white">Full Stack Developer</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Technologies Used</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[
                      'Next.js', 
                      'React', 
                      'TypeScript', 
                      'Tailwind CSS', 
                      'Prisma', 
                      'NextAuth.js', 
                      'Google Gemini API'
                    ].map((tech, index) => (
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
                  <p className="text-sm text-gray-500 dark:text-gray-400">Key Features</p>
                  <ul className="mt-2 text-base text-gray-900 dark:text-white list-disc pl-5 space-y-1">
                    <li>AI-powered document analysis</li>
                    <li>Google OAuth authentication</li>
                    <li>Document history tracking</li>
                    <li>Multi-file comparison</li>
                    <li>Modern, responsive UI</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">API Endpoints</p>
                  <ul className="mt-2 text-base text-gray-900 dark:text-white list-disc pl-5 space-y-1">
                    <li>Document analysis</li>
                    <li>History retrieval</li>
                    <li>Analysis details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSolvaAI;