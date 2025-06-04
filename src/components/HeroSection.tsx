'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { techStack, TechStack } from '@/data/techStack';

const stats = [
  {
    value: "1",
    label: "Company Founded",
    icon: "🚀",
    color: "bg-blue-100/80 dark:bg-blue-900/70",
    textColor: "text-blue-700 dark:text-blue-200",
    grad: "from-blue-500 to-blue-600",
    position: "top-24 left-32"
  },
  {
    value: "180+",
    label: "Active Users",
    icon: "👥",
    color: "bg-purple-100/80 dark:bg-purple-900/70",
    textColor: "text-purple-700 dark:text-purple-200",
    grad: "from-purple-500 to-purple-600",
    position: "top-24 right-32"
  },
  {
    value: "Boeing",
    label: "Worked on a UAV with Boeing",
    icon: "🛩️",
    color: "bg-blue-200/80 dark:bg-blue-800/70",
    textColor: "text-blue-800 dark:text-blue-100",
    grad: "from-blue-400 to-blue-700",
    position: "top-1/2 -translate-y-1/2 left-16"
  },
  {
    value: "9",
    label: "Projects Shipped",
    icon: "📦",
    color: "bg-orange-100/80 dark:bg-orange-900/70",
    textColor: "text-orange-700 dark:text-orange-200",
    grad: "from-orange-500 to-orange-600",
    position: "top-1/2 -translate-y-1/2 right-16"
  },
  {
    value: "6",
    label: "Websites Created (with amazing UI/UX)",
    icon: "🎨",
    color: "bg-pink-100/80 dark:bg-pink-900/70",
    textColor: "text-pink-700 dark:text-pink-200",
    grad: "from-pink-500 to-pink-600",
    position: "bottom-32 left-32"
  },
  {
    value: "4",
    label: "Products Solving Real Problems",
    icon: "💡",
    color: "bg-yellow-100/80 dark:bg-yellow-900/70",
    textColor: "text-yellow-700 dark:text-yellow-200",
    grad: "from-yellow-400 to-yellow-600",
    position: "bottom-32 right-32"
  },
  // Centered at the bottom
  // {
  //   value: "...",
  //   label: "...",
  //   icon: "...",
  //   color: "...",
  //   position: "bottom-10 left-1/2 -translate-x-1/2"
  // },
];

const floatVariants = {
  animate: (i: number) => ({
    y: [0, -8, 0, 8, 0],
    x: [0, 4, 0, -4, 0],
    transition: {
      duration: 6 + i,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: i * 0.2
    }
  })
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Stats */}
      <div className="absolute inset-0 overflow-visible pointer-events-none">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            custom={index}
            variants={floatVariants}
            animate="animate"
            initial={false}
            className={`absolute ${stat.position} ${stat.color} ${stat.textColor} rounded-xl p-2 shadow-lg backdrop-blur-md min-w-[120px] max-w-xs
              transform hover:scale-105 transition-transform duration-300 pointer-events-auto border border-white/30 dark:border-white/10`}
            style={{zIndex: 2, opacity: 0.85}}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{stat.icon}</span>
              <div>
                <div className={`text-lg font-bold bg-gradient-to-r ${stat.grad} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-xs">
                  {stat.label}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
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
          className="mb-8 mt-16"
        >
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <Image
                src="/linkedin.JPG"
                alt="Parth Ahir"
                width={128}
                height={128}
                className="object-cover object-center w-full h-full"
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
          <div className="flex justify-center mb-4">
            <Image
              src="/penn_stateLOGO.png"
              alt="Penn State Logo"
              width={90}
              height={90}
              className="inline-block w-24 h-24 md:w-28 md:h-28 object-contain rounded"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Parth Ahir
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
            Software Engineer
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
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
          className="mb-20"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 tracking-wider uppercase font-medium">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {techStack.map((tech: TechStack, index: number) => (
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
          className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 