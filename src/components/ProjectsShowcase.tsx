'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const ProjectsShowcase = () => {
  const [mounted, setMounted] = useState(false);
  const [currentApplyFlowIndex, setCurrentApplyFlowIndex] = useState(0);
  const [currentElevatrIndex, setCurrentElevatrIndex] = useState(0);
  const [currentCuriIndex, setCurrentCuriIndex] = useState(0);

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

  const curiImages = [
    { src: '/Curi-screenshots/1.png', alt: 'Curi Screenshot 1' },
    { src: '/Curi-screenshots/2.png', alt: 'Curi Screenshot 2' },
    { src: '/Curi-screenshots/3.png', alt: 'Curi Screenshot 3' },
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

    const curiInterval = setInterval(() => {
      setCurrentCuriIndex((prevIndex) => (prevIndex + 1) % curiImages.length);
    }, 5000);

    return () => {
      clearInterval(applyFlowInterval);
      clearInterval(elevatrInterval);
      clearInterval(curiInterval);
    };
  }, [mounted, applyFlowImages.length, elevatrImages.length, curiImages.length]);

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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* ApplyFlow Project */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden relative"
          >
            {/* Live Badge */}
            <a
              href="https://applyflow-thq2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-20 flex items-center gap-2 px-4 py-1.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full shadow-md border border-green-200 dark:border-green-800 hover:scale-105 transition-transform group"
              title="View Live Project"
            >
              <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-green-400/40" />
              <span className="text-green-700 dark:text-green-300 font-semibold text-sm tracking-wide">Live</span>
              <svg className="w-4 h-4 text-green-500 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0 0L10 21l-7-7 11-11z" />
              </svg>
            </a>
            <div className="relative h-[300px] overflow-hidden">
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
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </motion.div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">ApplyFlow</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Job Preparation Platform</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                A comprehensive job preparation platform that helps users track applications, prepare for technical interviews, and analyze their application progress.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Key Features:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li className="flex items-center">
                    <span className="text-indigo-600 mr-2">•</span>
                    Smart Job Application Tracker
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-600 mr-2">•</span>
                    Technical Interview Prep
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-600 mr-2">•</span>
                    Application Analytics Dashboard
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'NextAuth.js'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 rounded-full text-xs"
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
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden relative"
          >
            {/* Live Badge */}
            <a
              href="https://elevatr-murex.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-20 flex items-center gap-2 px-4 py-1.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full shadow-md border border-green-200 dark:border-green-800 hover:scale-105 transition-transform group"
              title="View Live Project"
            >
              <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-green-400/40" />
              <span className="text-green-700 dark:text-green-300 font-semibold text-sm tracking-wide">Live</span>
              <svg className="w-4 h-4 text-green-500 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0 0L10 21l-7-7 11-11z" />
              </svg>
            </a>
            <div className="relative h-[300px] overflow-hidden">
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
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </motion.div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Elevatr</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Habit Tracking Application</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                A modern habit tracking application that helps users build and maintain positive habits through an intuitive interface and powerful tracking features.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Key Features:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    Interactive Dashboard
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    Customizable Habit Creation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    Multi-frequency Tracking
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Vitest'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-xs"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Curi Project */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden relative lg:col-span-1 md:col-span-2"
          >
            {/* Live Badge */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-20 flex items-center gap-2 px-4 py-1.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full shadow-md border border-orange-200 dark:border-orange-800 hover:scale-105 transition-transform group"
              title="View Live Project"
            >
              <span className="inline-block w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse shadow-orange-400/40" />
              <span className="text-orange-700 dark:text-orange-300 font-semibold text-sm tracking-wide">Prototype</span>
              <svg className="w-4 h-4 text-orange-500 group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0 0L10 21l-7-7 11-11z" />
              </svg>
            </a>
            <div className="relative h-[300px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 z-10" />
              <motion.div
                key={curiImages[currentCuriIndex].src}
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
                  src={curiImages[currentCuriIndex].src}
                  alt={curiImages[currentCuriIndex].alt}
                  fill
                  className="object-contain rounded-2xl transition-opacity duration-1000"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </motion.div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600 dark:text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Curi</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Conversational AI Product Finder</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                A conversational AI tool that helps users find the right products by asking, not searching. Understands context, scans reviews + specs, and provides personalized recommendations.
              </p>
              
              {/* Performance Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">87%</div>
                  <div className="text-xs text-orange-700 dark:text-orange-300">Search Efficiency</div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">92%</div>
                  <div className="text-xs text-orange-700 dark:text-orange-300">Recommendation Accuracy</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Key Features:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li className="flex items-center">
                    <span className="text-orange-600 mr-2">•</span>
                    Natural Language Product Search
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-600 mr-2">•</span>
                    AI-Powered Review Analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-600 mr-2">•</span>
                    Scalable Multi-Niche Engine
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['Next.js', 'FastAPI', 'OpenAI LLM', 'TF-IDF', 'Cosine Similarity', 'Prisma', 'Tailwind'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 rounded-full text-xs"
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