'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
          <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 tracking-tight">
            Education Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A blend of academic excellence and entrepreneurial spirit, shaping the foundation of my career.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
          {/* Penn State */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col justify-between bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden min-h-[480px] p-8"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center shadow border border-white dark:border-blue-800">
                <Image src="/penn_stateLOGO.png" alt="Penn State Logo" width={48} height={48} className="object-contain w-12 h-12" priority />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold mb-1">The Pennsylvania State University</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Bachelor of Science in Computer Science</p>
                <p className="text-gray-500 dark:text-gray-400">University Park, PA</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="inline-flex items-center px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 text-xs font-semibold rounded-full border border-green-200 dark:border-green-800">
                    ABET Accredited
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs font-semibold rounded-full border border-blue-200 dark:border-blue-800">
                    Top 25 CS Program
                  </span>
                  <a href="https://bulletins.psu.edu/undergraduate/colleges/engineering/computer-science-bs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 underline text-xs font-medium hover:text-blue-800 ml-1">Learn More</a>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-base mb-1 text-gray-900 dark:text-white">What I Learned & How It Made Me a Strong SDE</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Gained deep expertise in algorithms, software engineering, and team collaboration. Built scalable systems, solved real-world problems, and developed the adaptability and rigor essential for high-impact software development.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-base mb-2 text-gray-900 dark:text-white">Curriculum Highlights:</h4>
              <div className="flex flex-wrap gap-2">
                {["Software Engineering", "Algorithms & Data Structures", "AI & Machine Learning", "Cybersecurity", "Database Systems", "Operating Systems", "Team Projects", "Cloud Computing", "Web & Mobile Development"].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-100 rounded-full text-xs shadow-sm hover:scale-105 transition-transform cursor-default border border-blue-100 dark:border-blue-800"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Beta University */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden min-h-[480px] p-8"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center shadow border border-white dark:border-purple-800">
                <div className="text-xl font-bold text-purple-600 dark:text-purple-300">BU</div>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold mb-1">Beta University</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Pre-Accelerator Program</p>
                <p className="text-gray-500 dark:text-gray-400">Silicon Valley, CA</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Selected for the prestigious Silicon Valley-based pre-accelerator program, joining a community of innovative founders and gaining access to world-class mentorship, investor networks, and entrepreneurial resources.
            </p>
            <div>
              <h4 className="font-semibold text-base mb-2 text-gray-900 dark:text-white">Program Highlights:</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-2 text-sm">
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
              <div className="flex flex-wrap gap-2 mt-1">
                {["Venture Capital", "Startup Growth", "Pitch Development", "Investor Relations"].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="px-3 py-1 bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-100 rounded-full text-xs shadow-sm hover:scale-105 transition-transform cursor-default border border-purple-100 dark:border-purple-800"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 