'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const KalyxaShowcase = () => {
  const [mounted, setMounted] = useState(false);
  const [currentIos, setCurrentIos] = useState(0);

  const iosImages = [
    { src: '/kalyxa-images/kalyxa-iphone/1.png', alt: 'Kalyxa iPhone Screenshot 1' },
    { src: '/kalyxa-images/kalyxa-iphone/2.png', alt: 'Kalyxa iPhone Screenshot 2' },
    { src: '/kalyxa-images/kalyxa-iphone/3.png', alt: 'Kalyxa iPhone Screenshot 3' },
    { src: '/kalyxa-images/kalyxa-iphone/4.png', alt: 'Kalyxa iPhone Screenshot 4' },
    { src: '/kalyxa-images/kalyxa-iphone/5.png', alt: 'Kalyxa iPhone Screenshot 5' },
    { src: '/kalyxa-images/kalyxa-iphone/6.png', alt: 'Kalyxa iPhone Screenshot 6' },
    { src: '/kalyxa-images/kalyxa-iphone/7.png', alt: 'Kalyxa iPhone Screenshot 7' },
    { src: '/kalyxa-images/kalyxa-iphone/8.png', alt: 'Kalyxa iPhone Screenshot 8' },
    { src: '/kalyxa-images/kalyxa-iphone/9.png', alt: 'Kalyxa iPhone Screenshot 9' },
  ];

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setCurrentIos((prev) => (prev + 1) % iosImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [mounted, iosImages.length]);

  if (!mounted) return null;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Kalyxa
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing personal styling through AI-powered technology. A three-sided marketplace connecting 
            professional stylists with clients, powered by cutting-edge AI for personalized fashion recommendations.
          </p>
          {/* Visit Website Button */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.kalyxa.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-lg group"
            >
              Visit Website
              <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Technical Achievement Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          <motion.div 
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <div className="text-4xl font-bold text-purple-600 mb-2">185+</div>
            <p className="text-gray-600 dark:text-gray-300">Active Users</p>
            <p className="text-sm text-gray-500 mt-2">Scaled user base through optimized performance and seamless onboarding</p>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">7</div>
            <p className="text-gray-600 dark:text-gray-300">Professional Stylists</p>
            <p className="text-sm text-gray-500 mt-2">Built robust stylist management system with real-time scheduling</p>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <div className="text-4xl font-bold text-green-600 mb-2">#5</div>
            <p className="text-gray-600 dark:text-gray-300">Product Hunt</p>
            <p className="text-sm text-gray-500 mt-2">Achieved through optimized user experience and performance</p>
          </motion.div>
        </motion.div>

        {/* Technical Architecture */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Technical Architecture</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <h4 className="text-xl font-bold mb-4">Backend Infrastructure</h4>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <div>
                    <strong>Node.js Microservices</strong>
                    <p className="text-sm">Scalable architecture with separate services for user management, styling, and payments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <div>
                    <strong>MongoDB Atlas</strong>
                    <p className="text-sm">Optimized database schema with efficient indexing for real-time operations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <div>
                    <strong>AWS Infrastructure</strong>
                    <p className="text-sm">Elastic Beanstalk for auto-scaling, S3 for media storage, CloudFront for CDN</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <h4 className="text-xl font-bold mb-4">AI & ML Implementation</h4>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <div>
                    <strong>TensorFlow.js</strong>
                    <p className="text-sm">Custom fashion recommendation engine with 85% accuracy</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <div>
                    <strong>Computer Vision</strong>
                    <p className="text-sm">Style analysis and outfit matching using deep learning models</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <div>
                    <strong>Natural Language Processing</strong>
                    <p className="text-sm">Smart search and recommendation system for style preferences</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Platform Overview */}
        <div className="space-y-32">
          {/* Web Application Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Live Badge */}
            <a
              href="https://services.kalyxa.io/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-0 right-0 z-20 flex items-center gap-2 px-4 py-1.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full shadow-md border border-green-200 dark:border-green-800 hover:scale-105 transition-transform group mt-4 mr-4"
              title="View Live Web Platform"
            >
              <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-green-400/40" />
              <span className="text-green-700 dark:text-green-300 font-semibold text-sm tracking-wide">Live</span>
              <svg className="w-4 h-4 text-green-500 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0 0L10 21l-7-7 11-11z" />
              </svg>
            </a>
            <h3 className="text-3xl font-bold text-center mb-16">Web Platform</h3>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {/* Service Seeker View */}
              <motion.div 
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center">
                  <div className="relative w-full h-48 md:h-56">
                    <Image
                      src="/kalyxa-images/kalyxa-user.png"
                      alt="Kalyxa Service Seeker Screenshot"
                      fill
                      className="object-cover rounded-lg shadow border border-gray-100 dark:border-gray-800"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-4">For Service Seekers</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Real-time stylist matching algorithm</li>
                    <li>• WebRTC-powered video consultations</li>
                    <li>• AI-powered style recommendations</li>
                    <li>• Secure payment integration with Stripe</li>
                  </ul>
                </div>
              </motion.div>

              {/* Stylist View */}
              <motion.div 
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center">
                  <div className="relative w-full h-48 md:h-56">
                    <Image
                      src="/kalyxa-images/kalyxa-stylist.png"
                      alt="Kalyxa Stylist Screenshot"
                      fill
                      className="object-cover rounded-lg shadow border border-gray-100 dark:border-gray-800"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-4">For Stylists</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Real-time scheduling system</li>
                    <li>• Client management dashboard</li>
                    <li>• Analytics and performance metrics</li>
                    <li>• Secure payment processing</li>
                  </ul>
                </div>
              </motion.div>

              {/* Admin View */}
              <motion.div 
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center">
                  <div className="relative w-full h-48 md:h-56">
                    <Image
                      src="/kalyxa-images/kalyxa-admin.png"
                      alt="Kalyxa Admin Screenshot"
                      fill
                      className="object-cover rounded-lg shadow border border-gray-100 dark:border-gray-800"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-4">For Administrators</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Real-time platform analytics</li>
                    <li>• User management system</li>
                    <li>• Content moderation tools</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* iOS App Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl px-4 py-8 md:px-8 md:py-10 max-w-4xl mx-auto min-h-[500px] flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-center mb-6">iOS Application</h3>
            {/* App Store Button */}
            <div className="flex justify-center mb-10">
              <a
                href="https://apps.apple.com/us/app/kalyxa/id6738635909"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 text-lg group"
              >
                View on App Store
                <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Rotating Portrait Image in Phone Frame */}
              <div className="flex-shrink-0 flex items-center justify-center w-full md:w-[40%]">
                <div className="relative w-48 h-[400px] md:w-56 md:h-[440px] bg-white border-4 border-gray-200 dark:border-gray-700 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                  <motion.div
                    key={iosImages[currentIos].src}
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
                      src={iosImages[currentIos].src}
                      alt={iosImages[currentIos].alt}
                      fill
                      className="object-contain rounded-2xl transition-opacity duration-1000"
                      sizes="(max-width: 768px) 144px, 176px"
                    />
                  </motion.div>
                </div>
              </div>
              {/* Short Text on the right, vertically centered */}
              <div className="flex-1 flex flex-col justify-center space-y-8 min-h-[300px] md:min-h-[440px]">
                <div>
                  <h4 className="text-2xl font-bold mb-2">Daily OOTD</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get a new outfit suggestion every day, personalized to your style and weather.
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Virtual Wardrobe</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Digitize your closet, create outfits, and track your style—all in one app.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KalyxaShowcase; 