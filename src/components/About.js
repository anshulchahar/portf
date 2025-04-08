import React from 'react';

const About = () => {
  const skills = [
    { category: "Backend Development", items: ["Python", "Java", "C/C++", "NodeJS", "NextJS", "PostgreSQL", "MongoDB"] },
    { category: "Frontend Development", items: ["TS/JS", "React", "HTML", "CSS", "Tailwind"] },
    { category: "Data Analysis & ML", items: ["PyTorch", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn"] },
    { category: "Miscellaneous", items: ["CI/CD Pipelines", "Docker", "Git"] },
    { category: "Soft Skills", items: ["Team Player", "Bias for Action", "Deliver Results"] }
  ];

  const education = [
    {
      institution: "TU Darmstadt",
      location: "Darmstadt, Germany",
      degree: "B.Sc. Informatik",
      period: "10/2021 - Present"
    },
    {
      institution: "Amity University",
      location: "Noida, India",
      degree: "B.Tech - Computer Science & Engineering (2 Semesters)",
      period: "30/04/2019 - 30/04/2020",
      grade: "8.6 CGPA"
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-dark-lighter transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary-dark dark:text-primary-light font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Who I Am
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Software Engineer with experience in full-stack development and machine learning
          </p>
        </div>
        
        {/* Education */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-dark-accent p-5 rounded-lg shadow-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{edu.institution}, {edu.location}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
                    {edu.grade && <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{edu.grade}</p>}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm mt-2 sm:mt-0">
                    {edu.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-dark-accent p-5 rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-200 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Interests</h3>
          <div className="bg-white dark:bg-dark-accent p-5 rounded-lg shadow-sm">
            <div className="flex flex-wrap gap-2">
              {["Travelling", "Fitness", "Volleyball"].map((interest, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-200 text-sm rounded-full">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;