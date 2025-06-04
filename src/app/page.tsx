import Image from "next/image";
import Link from "next/link";
import HeroSection from '../components/HeroSection';
import EducationSection from '../components/EducationSection';
import KalyxaShowcase from '../components/KalyxaShowcase';
import BoeingShowcase from '../components/BoeingShowcase';
import ProjectsShowcase from '../components/ProjectsShowcase';
import PersonalProjectsSection from '../components/PersonalProjectsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EducationSection />
      <KalyxaShowcase />
      <BoeingShowcase />
      <ProjectsShowcase />
      <PersonalProjectsSection />

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
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Penn State */}
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

            {/* Beta University */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Beta University</h3>
                  <p className="text-gray-600 dark:text-gray-300">Pre-Accelerator Program</p>
                  <p className="text-gray-500 dark:text-gray-400">Silicon Valley, CA</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Selected for the prestigious Silicon Valley-based pre-accelerator program, joining a community of innovative founders and gaining access to world-class mentorship, investor networks, and entrepreneurial resources.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Program Highlights:</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    <li>8-week intensive fundraising program</li>
                    <li>Access to 189+ investors network</li>
                    <li>Mentorship from industry leaders</li>
                    <li>Connection to $20B+ portfolio companies</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Venture Capital</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Startup Growth</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Pitch Development</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Investor Relations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Leadership & Community</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Engineering Orientation Network Mentor</h3>
                  <p className="text-gray-600 dark:text-gray-300">Penn State University</p>
                  <p className="text-gray-500 dark:text-gray-400">September 2022 - January 2024</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Led and mentored incoming engineering students, facilitating their transition to university life and connecting them with valuable resources and opportunities.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Led a group of 15+ mentees through virtual events during Engineering Orientation week</li>
                  <li>Facilitated virtual college experience by connecting students with various STEM organizations</li>
                  <li>Provided resources and guidance to help mentees develop professional and technical skills</li>
                  <li>Curated and shared access to 20+ engineering resources on campus</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Leadership</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Mentorship</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">STEM Education</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Community Building</span>
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
            {/* ApplyFlow Project */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
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
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Smart Job Application Tracker with automated follow-ups</li>
                  <li>Technical Interview Prep with 150+ NeetCode problems</li>
                  <li>Application Analytics Dashboard with detailed metrics</li>
                  <li>All-in-One Workspace for job preparation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technical Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Next.js 14</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Prisma</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">NextAuth.js</span>
                </div>
              </div>
            </div>

            {/* Kalyxa Project */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Kalyxa Platform</h3>
                  <p className="text-gray-600 dark:text-gray-300">AI-Powered Fashion Platform</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                AI-powered fashion platform with 185+ users and 7 professional stylists, ranked #5 on Product Hunt.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Three-sided marketplace platform</li>
                  <li>AI-powered fashion recommendations</li>
                  <li>Real-time chat and scheduling</li>
                  <li>Secure payment processing with Stripe</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technical Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Swift</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">TensorFlow</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Stripe</span>
                </div>
              </div>
            </div>

            {/* Elevatr Project */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
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
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Interactive Dashboard with progress tracking</li>
                  <li>Customizable habit creation and management</li>
                  <li>Daily/Weekly/Monthly habit frequency tracking</li>
                  <li>Secure JWT-based authentication system</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technical Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Next.js 14</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Prisma</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Vitest</span>
                </div>
              </div>
            </div>
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
