'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface NavigationItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const navigationItems: NavigationItem[] = [
  {
    id: 'education',
    title: 'Education',
    description: 'Academic background and achievements',
    icon: '🎓',
    color: 'blue'
  },
  {
    id: 'professional-experience',
    title: 'Professional Experience',
    description: 'Kalyxa leadership and Boeing engineering',
    icon: '💼',
    color: 'purple'
  },
  {
    id: 'featured-projects',
    title: 'Featured Projects',
    description: 'Showcase of key technical projects',
    icon: '⭐',
    color: 'yellow'
  },
  {
    id: 'personal-projects',
    title: 'Personal Projects',
    description: 'Innovative solutions and applications',
    icon: '🚀',
    color: 'green'
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI',
    description: 'Automations and intelligent agents',
    icon: '🤖',
    color: 'indigo'
  },
  {
    id: 'leadership',
    title: 'Leadership',
    description: 'Community involvement and mentorship',
    icon: '👥',
    color: 'red'
  },
  {
    id: 'contact',
    title: 'Contact',
    description: 'Get in touch and connect',
    icon: '📧',
    color: 'teal'
  }
];

const colorClasses = {
  blue: 'border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/30',
  purple: 'border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100 dark:border-purple-700 dark:bg-purple-900/20 dark:text-purple-300 dark:hover:bg-purple-900/30',
  yellow: 'border-yellow-200 bg-yellow-50 text-yellow-700 hover:bg-yellow-100 dark:border-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300 dark:hover:bg-yellow-900/30',
  green: 'border-green-200 bg-green-50 text-green-700 hover:bg-green-100 dark:border-green-700 dark:bg-green-900/20 dark:text-green-300 dark:hover:bg-green-900/30',
  indigo: 'border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:border-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300 dark:hover:bg-indigo-900/30',
  red: 'border-red-200 bg-red-50 text-red-700 hover:bg-red-100 dark:border-red-700 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/30',
  teal: 'border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100 dark:border-teal-700 dark:bg-teal-900/20 dark:text-teal-300 dark:hover:bg-teal-900/30'
};

export default function IndexNavigation() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Explore My Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Navigate through different sections to discover my journey, projects, and achievements.
          </p>
        </motion.div>

        {/* Navigation Grid */}
        <div className="space-y-6">
          {/* Top Row - 4 boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {navigationItems.slice(0, 4).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="h-48"
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full h-full p-6 rounded-xl border-2 transition-all duration-300 group relative overflow-hidden shadow-sm hover:shadow-lg ${colorClasses[item.color as keyof typeof colorClasses]}`}
                >
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-current to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-2xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-current transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Arrow Indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row - 3 boxes centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
              {navigationItems.slice(4, 7).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 4) * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="h-48"
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full h-full p-6 rounded-xl border-2 transition-all duration-300 group relative overflow-hidden shadow-sm hover:shadow-lg ${colorClasses[item.color as keyof typeof colorClasses]}`}
                  >
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-current to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="text-2xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-current transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Arrow Indicator */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="flex justify-center gap-6">
            <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Projects Built</div>
            </div>
            <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Technologies</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 