'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const ProjectsShowcase = () => {
  const [mounted, setMounted] = useState(false);
  const [currentApplyFlowIndex, setCurrentApplyFlowIndex] = useState(0);
  const [currentElevatrIndex, setCurrentElevatrIndex] = useState(0);

  // Simulated image arrays for each project
  const applyFlowImages = [
    { src: '/Applyflow-pictures/a.png', alt: 'ApplyFlow Screenshot 1' },
    { src: '/Applyflow-pictures/b.png', alt: 'ApplyFlow Screenshot 2' },
    { src: '/Applyflow-pictures/c.png', alt: 'ApplyFlow Screenshot 3' },
    { src: '/Applyflow-pictures/d.png', alt: 'ApplyFlow Screenshot 4' },
    { src: '/Applyflow-pictures/e.png', alt: 'ApplyFlow Screenshot 5' },
  ];

  const elevatrImages = [
    { src: '/Elevtr-pictures/1.png', alt: 'Elevatr Screenshot 1' },
    { src: '/Elevtr-pictures/2.png', alt: 'Elevatr Screenshot 2' },
    { src: '/Elevtr-pictures/3.png', alt: 'Elevatr Screenshot 3' },
    { src: '/Elevtr-pictures/4.png', alt: 'Elevatr Screenshot 4' },
    { src: '/Elevtr-pictures/5.png', alt: 'Elevatr Screenshot 5' },
    { src: '/Elevtr-pictures/6.png', alt: 'Elevatr Screenshot 6' },
    { src: '/Elevtr-pictures/7.png', alt: 'Elevatr Screenshot 7' },
    { src: '/Elevtr-pictures/8.png', alt: 'Elevatr Screenshot 8' },
  ];

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (!mounted) return;
    const applyFlowInterval = setInterval(() => {
      setCurrentApplyFlowIndex((prevIndex) => (prevIndex + 1) % applyFlowImages.length);
    }, 5000);

    const elevatrInterval = setInterval(() => {
      setCurrentElevatrIndex((prevIndex) => (prevIndex + 1) % elevatrImages.length);
    }, 5000);

    return () => {
      clearInterval(applyFlowInterval);
      clearInterval(elevatrInterval);
    };
  }, [mounted, applyFlowImages.length, elevatrImages.length]);

  if (!mounted) return null;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions that combine technical excellence with user-centric design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* ApplyFlow Project */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="relative h-[400px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 z-10" />
              <motion.div
                key={applyFlowImages[currentApplyFlowIndex].src}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: -10 }}
                transition={{ 
                  duration: 1.2,
                  ease: "easeInOut",
                  opacity: { duration: 0.8 }
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={applyFlowImages[currentApplyFlowIndex].src}
                  alt={applyFlowImages[currentApplyFlowIndex].alt}
                  fill
                  className="object-contain rounded-2xl transition-opacity duration-1000"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </motion.div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">ApplyFlow</h3>
                  <p className="text-gray-600 dark:text-gray-300">Job Preparation Platform</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                A comprehensive job preparation platform that helps users track applications, prepare for technical interviews, and analyze their application progress.
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Key Features:</h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="text-indigo-600 mr-2">•</span>
                    Smart Job Application Tracker with automated follow-ups
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-600 mr-2">•</span>
                    Technical Interview Prep with 150+ NeetCode problems
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-600 mr-2">•</span>
                    Application Analytics Dashboard with detailed metrics
                  </li>
                </ul>
                <div className="flex flex-wrap gap-3 mt-4">
                  {['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'NextAuth.js'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Elevatr Project */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="relative h-[400px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/14 to-teal-500/14 z-10" />
              <motion.div
                key={elevatrImages[currentElevatrIndex].src}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: -10 }}
                transition={{ 
                  duration: 1.2,
                  ease: "easeInOut",
                  opacity: { duration: 0.8 }
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={elevatrImages[currentElevatrIndex].src}
                  alt={elevatrImages[currentElevatrIndex].alt}
                  fill
                  className="object-contain rounded-2xl transition-opacity duration-1000"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </motion.div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Elevatr</h3>
                  <p className="text-gray-600 dark:text-gray-300">Habit Tracking Application</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                A modern habit tracking application that helps users build and maintain positive habits through an intuitive interface and powerful tracking features.
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Key Features:</h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    Interactive Dashboard with progress tracking
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    Customizable habit creation and management
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    Daily/Weekly/Monthly habit frequency tracking
                  </li>
                </ul>
                <div className="flex flex-wrap gap-3 mt-4">
                  {['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Vitest'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm"
                    >
                      {tech}
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

export default ProjectsShowcase; 