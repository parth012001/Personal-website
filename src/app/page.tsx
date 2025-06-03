import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Parth Ahir
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Software Engineer | Tech Founder at Kalyxa
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="#experience" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              View Experience
            </Link>
            <Link href="#projects" className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition">
              See Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Boeing Experience */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Software Engineer</h3>
                  <p className="text-gray-600 dark:text-gray-300">Boeing · 2023</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Led the development of an advanced UAV safety system that achieved 95% accuracy in object detection and avoidance, significantly enhancing drone operational safety.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Developed real-time object detection system processing 30+ FPS on edge devices</li>
                  <li>Reduced collision risk by 85% through advanced computer vision algorithms</li>
                  <li>Optimized deep learning models achieving 40% faster inference times</li>
                  <li>Implemented autonomous navigation system with 99.9% uptime reliability</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technical Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TensorFlow</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">OpenCV</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">ROS2</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">NVIDIA Jetson</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Pixhawk</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">COCO Dataset</span>
                </div>
              </div>
            </div>

            {/* Kalyxa Experience */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Founder & CTO</h3>
                  <p className="text-gray-600 dark:text-gray-300">Kalyxa · 2024 - Present</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Founded and led Kalyxa, an AI-powered fashion platform revolutionizing personal styling through technology. Built a three-sided marketplace connecting users, stylists, and administrators.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Launched MVP achieving 185+ active users and 7 professional stylists within first month</li>
                  <li>Ranked #5 Product of the Day on Product Hunt</li>
                  <li>Selected for Beta University's prestigious pre-accelerator program</li>
                  <li>Secured $150K in funding commitments</li>
                  <li>Built and launched native iOS application independently</li>
                  <li>Developed full-stack web platform supporting three distinct user roles</li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Technical Leadership:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Architected and developed scalable three-sided marketplace platform</li>
                  <li>Implemented real-time chat and scheduling systems</li>
                  <li>Integrated AI-powered fashion recommendation engine</li>
                  <li>Built secure payment processing system through Stripe integration</li>
                  <li>Developed responsive web application with mobile-first approach</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technical Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Swift</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">AWS</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Firebase</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">TensorFlow</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Stripe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">The Pennsylvania State University</h3>
                  <p className="text-gray-600 dark:text-gray-300">Bachelor of Science in Computer Science</p>
                  <p className="text-gray-500 dark:text-gray-400">University Park, PA</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Graduated with a strong foundation in computer science principles, software development, and problem-solving. The program provided comprehensive training in algorithms, data structures, and software engineering practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Data Structures</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Algorithms</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Software Engineering</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Database Systems</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Operating Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project cards will go here */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">UAV Safety System</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Advanced object detection and avoidance system for drones, achieving 95% accuracy in real-time processing.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">TensorFlow</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">OpenCV</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">ROS2</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Kalyxa Platform</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                AI-powered fashion platform with 185+ users and 7 professional stylists, ranked #5 on Product Hunt.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Swift</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">AI/ML</span>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Interested in working together? I'm always open to discussing new opportunities.
          </p>
          <Link href="mailto:your.email@example.com" className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
