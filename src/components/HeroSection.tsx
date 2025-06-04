'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const techStack = [
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'from-cyan-400 to-cyan-500'
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    color: 'from-gray-700 to-gray-800 dark:from-gray-200 dark:to-gray-300'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Supabase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    name: 'React Native',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'from-blue-400 to-blue-500'
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: 'from-green-600 to-green-700'
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    color: 'from-blue-400 to-blue-500'
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color: 'from-orange-500 to-orange-600'
  }
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20">
              <Image
                src="/profile.jpg"
                alt="Parth Ahir"
                width={128}
                height={128}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Parth Ahir
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Software Engineer
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Tech Founder at Kalyxa
          </p>
        </motion.div>

        {/* Product Hunt Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <a 
            href="https://www.producthunt.com/products/kalyxa?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_source=badge-kalyxa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block hover:opacity-90 transition-opacity transform hover:scale-105 duration-300"
          >
            <Image
              src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=958501&theme=light&period=daily&t=1749002611903"
              alt="Kalyxa - Shop smarter, dress better, with real stylists by your side | Product Hunt"
              width={250}
              height={54}
              className="rounded-lg shadow-lg"
            />
          </a>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <p className="text-gray-400 text-sm mb-6 tracking-wider uppercase font-medium">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="group relative"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} p-2 shadow-lg 
                  group-hover:shadow-xl transition-all duration-300 flex items-center justify-center
                  backdrop-blur-sm bg-opacity-90`}
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className="filter dark:invert"
                  />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                  bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap"
                >
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex gap-4 justify-center"
        >
          <Link 
            href="#experience" 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg 
              hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105
              shadow-lg hover:shadow-xl"
          >
            View Experience
          </Link>
          <Link 
            href="#projects" 
            className="px-8 py-4 border-2 border-white/20 text-white rounded-lg 
              hover:bg-white/10 transition-all duration-300 transform hover:scale-105
              backdrop-blur-sm"
          >
            See Projects
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 