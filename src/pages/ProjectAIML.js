import React from 'react';
import { Link } from 'react-router-dom';

const ProjectAIML = () => {
  const projects = [
    {
      title: 'Object Extractor for Atari Games',
      description: 'Developed object extractors for eight different Atari games using SPACE+MOC. The model can accurately detect and classify game objects with high precision and recall, achieving over 90% F1 scores for most games.',
      technologies: ['PyTorch', 'Python', 'OCAtari', 'SPACE+MOC']
    },
    {
      title: 'Advanced Clustering and Classification',
      description: 'Implemented and evaluated X-means clustering for improved object encoding analysis. The model discovered fine-grained, semantically meaningful clusters that outperformed traditional K-means approaches in object classification tasks.',
      technologies: ['X-means', 'K-means', 'Python', 'Scikit-learn']
    },
    {
      title: 'Multi-Object Detection System',
      description: 'Created a robust object detection system for gaming environments, with specialized evaluation metrics like Center Divergence. Successfully handled various challenging scenarios including small objects, overlapping objects, and non-moving objects.',
      technologies: ['Computer Vision', 'PyTorch', 'Python', 'OCAtari']
    }
  ];

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
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">AI/ML Projects</h1>
              <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">Machine Learning and Artificial Intelligence Work</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <img 
              src="/AIML.jpg" 
              alt="AI/ML Projects" 
              className="w-full h-auto rounded-lg shadow-md mb-8 object-cover"
            />
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Overview of AI/ML Projects</h2>
              <p>
                Our team developed object extractors for eight different Atari games using SPACE+MOC, focusing on object-centric reinforcement learning. The project aimed to facilitate the extraction of object-centric representations from visual scenes, particularly in gaming environments. We successfully implemented and evaluated object extractors for Asterix, Boxing, Freeway, Kangaroo, Pong, Seaquest, Skiing, and Tennis.
              </p>

              <h2>Key Accomplishments</h2>
              <ul>
                <li>Developed object extractors achieving over 90% F1 scores for most games</li>
                <li>Introduced a more flexible classifier based on X-means that outperforms traditional k-means approaches</li>
                <li>Conducted extensive quantitative and qualitative evaluation of object localization capabilities</li>
                <li>Identified and documented important limitations in previous encoding evaluation methods</li>
              </ul>
              
              <h2>Key Projects</h2>
              
              {projects.map((project, index) => (
                <div key={index} className="mb-8">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              
              <h2>Technical Skills Demonstrated</h2>
              <p>
                Through this project, we demonstrated proficiency in the following technical areas:
              </p>
              <ul>
                <li>
                  <strong>Deep Learning:</strong> Implementation and training of SPACE+MOC models using PyTorch for object extraction in gaming environments.
                </li>
                <li>
                  <strong>Computer Vision:</strong> Development of object detection and localization systems with specialized metrics like Center Divergence.
                </li>
                <li>
                  <strong>Clustering Algorithms:</strong> Implementation and comparison of K-means and X-means clustering for object encoding analysis.
                </li>
                <li>
                  <strong>Model Evaluation:</strong> Comprehensive evaluation using metrics like precision, recall, and F1 scores, along with qualitative analysis.
                </li>
                <li>
                  <strong>Software Development:</strong> Working with research code, debugging, and improving code architecture for better maintainability.
                </li>
              </ul>
              
              <h2>Development Process</h2>
              <p>
                The project followed a systematic development approach:
              </p>
              <ol>
                <li>
                  <strong>Initial Setup:</strong> Familiarization with methods and existing codebase, followed by initial refactoring.
                </li>
                <li>
                  <strong>Iterative Development:</strong> Starting with single game training, then expanding to all games while incorporating lessons learned.
                </li>
                <li>
                  <strong>Evaluation and Improvement:</strong> Comprehensive evaluation leading to improvements like the X-means clustering approach.
                </li>
                <li>
                  <strong>Integration:</strong> Adapting code to support integration with other approaches and frameworks.
                </li>
              </ol>
              
              <h2>Challenges and Solutions</h2>
              <ul>
                <li>
                  <strong>GPU Resource Access:</strong> Overcame limited GPU access by initially using Google Colab for development.
                </li>
                <li>
                  <strong>OCAtari Updates:</strong> Successfully adapted code to accommodate significant package updates.
                </li>
                <li>
                  <strong>Clustering Limitations:</strong> Addressed fixed cluster count limitations by implementing X-means clustering.
                </li>
                <li>
                  <strong>Non-moving Objects:</strong> Identified and documented limitations with objects that don't exhibit motion.
                </li>
              </ul>
              
              <h2>Future Improvements</h2>
              <ul>
                <li>Testing object extractors on downstream reinforcement learning tasks</li>
                <li>Further exploration of fine-grained clustering phenomena</li>
                <li>Extracting additional properties (e.g., orientation) from object encodings</li>
                <li>Improving handling of non-moving objects in games</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-dark-lighter rounded-lg shadow-sm p-6 sticky top-20">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Skills & Technologies</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Primary Languages</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Python'].map((lang, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-200"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Frameworks & Libraries</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['PyTorch', 'OCAtari', 'SPACE+MOC', 'Scikit-Learn', 'NumPy'].map((tech, index) => (
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
                  <p className="text-sm text-gray-500 dark:text-gray-400">ML/AI Techniques</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Object Detection', 'Clustering', 'K-means', 'X-means', 'Object-Centric Learning', 'Latent Space Analysis'].map((tech, index) => (
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
                  <p className="text-sm text-gray-500 dark:text-gray-400">Evaluation Metrics</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Precision', 'Recall', 'F1 Score', 'Center Divergence', 'Bayesian Information Criterion'].map((tech, index) => (
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
                  <p className="text-sm text-gray-500 dark:text-gray-400">Development Tools</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['GitHub', 'Google Colab', 'Trello'].map((tech, index) => (
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
                  <p className="text-sm text-gray-500 dark:text-gray-400">Areas of Focus</p>
                  <ul className="mt-2 text-base text-gray-900 dark:text-white list-disc pl-5 space-y-1">
                    <li>Computer Vision</li>
                    <li>Object Detection and Localization</li>
                    <li>Unsupervised Learning</li>
                    <li>Reinforcement Learning</li>
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

export default ProjectAIML;