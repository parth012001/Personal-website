'use client';

import { motion } from 'framer-motion';

const EducationSection = () => {
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
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Education Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A blend of academic excellence and entrepreneurial spirit, shaping the foundation of my career.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Penn State */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-300">PSU</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">The Pennsylvania State University</h3>
                  <p className="text-gray-600 dark:text-gray-300">Bachelor of Science in Computer Science</p>
                  <p className="text-gray-500 dark:text-gray-400">University Park, PA</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Graduated with a strong foundation in computer science principles, software development, and problem-solving. The program provided comprehensive training in algorithms, data structures, and software engineering practices.
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Key Focus Areas:</h4>
                <div className="flex flex-wrap gap-3">
                  {['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems', 'Operating Systems'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Beta University */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-300">BU</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Beta University</h3>
                  <p className="text-gray-600 dark:text-gray-300">Pre-Accelerator Program</p>
                  <p className="text-gray-500 dark:text-gray-400">Silicon Valley, CA</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Selected for the prestigious Silicon Valley-based pre-accelerator program, joining a community of innovative founders and gaining access to world-class mentorship, investor networks, and entrepreneurial resources.
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Program Highlights:</h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="text-purple-600 mr-2">•</span>
                    8-week intensive fundraising program
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-600 mr-2">•</span>
                    Access to 189+ investors network
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-600 mr-2">•</span>
                    Mentorship from industry leaders
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-600 mr-2">•</span>
                    Connection to $20B+ portfolio companies
                  </li>
                </ul>
                <div className="flex flex-wrap gap-3 mt-4">
                  {['Venture Capital', 'Startup Growth', 'Pitch Development', 'Investor Relations'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 