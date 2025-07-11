'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import Image from 'next/image';

interface AgenticAIProject {
  id: string;
  title: string;
  description: string;
  type: 'automation' | 'agent';
  features: string[];
  icon: string;
  color: string;
}

const agenticAIProjects: AgenticAIProject[] = [
  {
    id: 'weather-report',
    title: 'Weather Report Automation',
    description: 'Automated weather reporting system that delivers personalized weather updates.',
    type: 'automation',
    features: ['Real-time weather data', 'Personalized alerts', 'Automated scheduling'],
    icon: '🌤️',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'lead-form',
    title: 'Lead Form Automation',
    description: 'Intelligent lead processing system that automatically qualifies and routes leads.',
    type: 'automation',
    features: ['Lead qualification', 'Automatic routing', 'Response templates'],
    icon: '📋',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'telegram-bot',
    title: 'AI Telegram Assistant',
    description: 'Real-time conversational AI bot that provides ChatGPT-like interactions on Telegram.',
    type: 'agent',
    features: ['Real-time conversations', 'Context awareness', 'Multi-language support'],
    icon: '🤖',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'email-assistant',
    title: 'Smart Email Assistant',
    description: 'Intelligent email management system that categorizes, prioritizes, and drafts responses.',
    type: 'agent',
    features: ['Email categorization', 'Goal-aligned responses', 'Smart filtering'],
    icon: '📧',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'personal-assistant',
    title: 'Personal AI Assistant',
    description: 'Complete workflow automation that replicates a human assistant for calendar, meetings, and communications.',
    type: 'agent',
    features: ['Calendar management', 'Meeting scheduling', 'Email automation', 'Workflow optimization'],
    icon: '👨‍💼',
    color: 'from-indigo-500 to-blue-600'
  }
];

export default function AgenticAISection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Agentic AI Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exploring the future of automation with intelligent agents and smart workflows that transform how we work.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
            <div className="text-gray-300">Automations</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
            <div className="text-gray-300">AI Agents</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-gray-300">Workflow Transformation</div>
          </div>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scrollTo('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => scrollTo('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Projects Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {agenticAIProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex-shrink-0 w-80"
              >
                <div
                  className={`relative p-8 rounded-2xl bg-gradient-to-br ${project.color} cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full`}
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.type === 'automation' 
                        ? 'bg-blue-500/20 text-blue-200' 
                        : 'bg-purple-500/20 text-purple-200'
                    }`}>
                      {project.type === 'automation' ? 'Automation' : 'AI Agent'}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4">{project.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-100 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-200 text-sm">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-8 space-x-2"
        >
          {agenticAIProjects.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 bg-white/30 rounded-full"
            />
          ))}
        </motion.div>


      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
} 