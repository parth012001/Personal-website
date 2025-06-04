'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const BoeingShowcase = () => {
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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Boeing UAV Safety System
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Led the development of an advanced UAV safety system that achieved 95% accuracy in object detection 
            and avoidance, significantly enhancing drone operational safety.
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold mb-4">The Team</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Collaborated with a cross-functional team of engineers, researchers, and domain experts to 
                develop and implement cutting-edge safety solutions for autonomous UAV systems.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  Cross-functional team leadership
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  Agile development methodology
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  Regular stakeholder presentations
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20 z-10" />
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Team Photo Placeholder</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Technical Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Technical Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">95%</div>
              <h4 className="text-xl font-bold mb-4">Detection Accuracy</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Achieved through advanced computer vision algorithms and optimized deep learning models
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">30+</div>
              <h4 className="text-xl font-bold mb-4">FPS Processing</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Real-time object detection and tracking on edge devices
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">85%</div>
              <h4 className="text-xl font-bold mb-4">Risk Reduction</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Decreased collision risk through advanced avoidance algorithms
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Drone Showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-4">UAV System</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Developed and implemented a comprehensive UAV safety system featuring:
            </p>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>Real-time Object Detection</strong>
                  <p className="text-sm">Custom YOLOv5 implementation optimized for edge devices</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>Autonomous Navigation</strong>
                  <p className="text-sm">Path planning and obstacle avoidance using ROS2</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>Edge Computing</strong>
                  <p className="text-sm">Optimized inference on NVIDIA Jetson platform</p>
                </div>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20 z-10" />
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Drone Image 1</p>
              </div>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20 z-10" />
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Drone Image 2</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Technical Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Technical Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'TensorFlow', 'OpenCV', 'ROS2', 'NVIDIA Jetson', 'Pixhawk', 'COCO Dataset'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BoeingShowcase; 