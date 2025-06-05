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
            className="relative flex flex-col justify-between bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-2xl border border-blue-100 dark:border-blue-900 backdrop-blur-lg overflow-hidden min-h-[540px] p-10"
          >
            {/* Top 25 Badge Floating */}
            <span className="absolute top-6 right-6 z-10 px-4 py-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-bold rounded-full shadow animate-pulse">
              Top 25 CS Program
            </span>
            {/* PSU Logo and ABET Badge */}
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center shadow-lg border-2 border-white dark:border-blue-800">
                <Image src="/penn_stateLOGO.png" alt="Penn State Logo" width={64} height={64} className="object-contain w-16 h-16" priority />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold mb-1">The Pennsylvania State University</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Bachelor of Science in Computer Science</p>
                <p className="text-gray-500 dark:text-gray-400">University Park, PA</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 text-xs font-semibold rounded-full border border-green-200 dark:border-green-800 shadow-sm">
                    ABET Accredited
                  </span>
                  <a href="https://bulletins.psu.edu/undergraduate/colleges/engineering/computer-science-bs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 underline text-xs font-medium hover:text-blue-800 ml-2">Learn More</a>
                </div>
              </div>
            </div>
            {/* What I Learned & SDE Impact */}
            <div className="mb-8">
              <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold mb-2">
                What I Learned & How It Made Me a Strong SDE
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-base">
                Gained deep expertise in algorithms, software engineering, and team collaboration. Built scalable systems, solved real-world problems, and developed the adaptability and rigor essential for high-impact software development.
              </p>
            </div>
            {/* Curriculum Highlights */}
            <div className="mb-2">
              <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Curriculum Highlights:</h4>
              <div className="flex flex-wrap gap-3">
                {["Software Engineering", "Algorithms & Data Structures", "AI & Machine Learning", "Cybersecurity", "Database Systems", "Operating Systems", "Team Projects", "Cloud Computing", "Web & Mobile Development"].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-800 dark:text-blue-100 rounded-full text-sm shadow-md hover:scale-105 transition-transform cursor-default"
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
            className="flex flex-col justify-between bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-2xl border border-purple-100 dark:border-purple-900 backdrop-blur-lg overflow-hidden min-h-[540px] p-10"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center shadow-lg border-2 border-white dark:border-purple-800">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-300">BU</div>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold mb-1">Beta University</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Pre-Accelerator Program</p>
                <p className="text-gray-500 dark:text-gray-400">Silicon Valley, CA</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-base">
              Selected for the prestigious Silicon Valley-based pre-accelerator program, joining a community of innovative founders and gaining access to world-class mentorship, investor networks, and entrepreneurial resources.
            </p>
            <div className="mb-2">
              <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Program Highlights:</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-4">
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
              <div className="flex flex-wrap gap-3 mt-2">
                {["Venture Capital", "Startup Growth", "Pitch Development", "Investor Relations"].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 text-purple-800 dark:text-purple-100 rounded-full text-sm shadow-md hover:scale-105 transition-transform cursor-default"
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