import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, image, technologies, link }) => {
  return (
    <div className="bg-white dark:bg-dark-accent overflow-hidden shadow-sm rounded-lg border border-gray-100 dark:border-dark transition-all duration-300 hover:shadow-md">
      <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-dark relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="px-4 py-4 sm:px-6 bg-gray-50 dark:bg-dark-lighter border-t border-gray-100 dark:border-dark-accent">
        <Link 
          to={link} 
          className="text-sm font-medium text-primary-dark dark:text-primary-light hover:text-gray-700 dark:hover:text-gray-300"
        >
          View Project Details
          <span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 'solvaai',
      title: 'SolvaAI',
      description: 'Developed a AI system to assist users in analyzing the Documents and providing solutions',
      image: '/Solva.png',
      technologies: ['Gemini API','RAG Implementation'],
      link: '/project/solvaai'
    },
    {
      id: 'bachelor-praktikum',
      title: 'Bachelor Internship - Kraken',
      description: 'A Web App for Handling Sensor Configuration and Data Collection for TU Darmstadt Quantum Lab',
      image: '/Kraken.png',
      technologies: ['JS/TS', 'NextJS', 'ReactJS', 'Docker'],
      link: '/project/bachelor-praktikum'
    },
    {
      id: 'aiml',
      title: 'AI/ML Projects',
      description: 'I worked on evaluating and improving Object Extraction from Atari Games using SPACE + MOC',
      image: '/AIML.jpg',
      technologies: ['Python', 'PyTorch', 'Scikit-Learn'],
      link: '/project/aiml'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary-dark dark:text-primary-light font-semibold tracking-wide uppercase">Projects</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            My Work
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Here are some of the projects I've worked on
          </p>
        </div>
        
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;