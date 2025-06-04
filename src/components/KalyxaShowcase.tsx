'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const KalyxaShowcase = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
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
          >
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
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Service Seeker View</p>
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
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Stylist View</p>
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
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Admin View</p>
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
            className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl p-12"
          >
            <h3 className="text-3xl font-bold text-center mb-16">iOS Application</h3>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Daily OOTD */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h4 className="text-2xl font-bold mb-4">Daily OOTD</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Built with SwiftUI and Core ML, the OOTD feature uses on-device machine learning to provide 
                  personalized outfit recommendations. The system processes user preferences, weather data, and 
                  calendar events to generate context-aware suggestions.
                </p>
                <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">OOTD Feature Preview</p>
                </div>
              </motion.div>

              {/* Virtual Wardrobe */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h4 className="text-2xl font-bold mb-4">Virtual Wardrobe</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Implemented using Vision framework and Core ML for image recognition. The system automatically 
                  categorizes clothing items, creates outfit combinations, and tracks usage patterns. Features 
                  include AR try-on and style matching algorithms.
                </p>
                <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Virtual Wardrobe Preview</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KalyxaShowcase; 