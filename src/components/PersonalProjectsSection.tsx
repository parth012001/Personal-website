'use client';

import { motion } from 'framer-motion';
import { FaMicrophone, FaUtensils, FaTwitter, FaFilm } from 'react-icons/fa';

const PersonalProjectsSection = () => {
  const projects = [
    {
      title: 'Speech Recognition',
      description: 'A real-time speech recognition application that converts spoken words into text, featuring advanced natural language processing capabilities and customizable voice commands.',
      icon: FaMicrophone,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
      textColor: 'text-blue-800 dark:text-blue-100',
      technologies: ['Python', 'TensorFlow', 'SpeechRecognition', 'PyAudio', 'NLTK']
    },
    {
      title: 'OmniFood Website',
      description: 'A modern, responsive food delivery website showcasing a premium food subscription service. Features include dynamic menu updates, user authentication, and real-time order tracking.',
      icon: FaUtensils,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900',
      textColor: 'text-orange-800 dark:text-orange-100',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'jQuery']
    },
    {
      title: 'Twitter Clone',
      description: 'A full-stack Twitter clone with real-time updates, user authentication, and social features. Includes tweet creation, following system, and interactive UI components.',
      icon: FaTwitter,
      color: 'from-sky-500 to-blue-600',
      bgColor: 'bg-sky-100 dark:bg-sky-900',
      textColor: 'text-sky-800 dark:text-sky-100',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express']
    },
    {
      title: 'Flixter',
      description: 'A movie streaming platform clone with features like user ratings, reviews, and personalized recommendations. Includes a modern UI with smooth animations and responsive design.',
      icon: FaFilm,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900',
      textColor: 'text-purple-800 dark:text-purple-100',
      technologies: ['React', 'Redux', 'TMDB API', 'Styled Components', 'Firebase']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300">
            Personal Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Exploring various technologies and building solutions through hands-on projects.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${project.bgColor} rounded-xl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110`}>
                      <project.icon className={`w-7 h-7 ${project.textColor}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400">GitHub Project</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                        className={`px-4 py-2 ${project.bgColor} ${project.textColor} rounded-full text-sm`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjectsSection; 