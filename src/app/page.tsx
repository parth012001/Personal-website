import Image from "next/image";
import Link from "next/link";
import HeroSection from '@/components/HeroSection';
import EducationSection from '@/components/EducationSection';
import KalyxaShowcase from '@/components/KalyxaShowcase';
import BoeingShowcase from '@/components/BoeingShowcase';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import PersonalProjectsSection from '@/components/PersonalProjectsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EducationSection />

      {/* Professional Experience Heading */}
      <div id="professional-experience" className="py-12 scroll-mt-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          Professional Experience
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          The following sections highlight my most impactful roles—leading Kalyxa as a tech founder and building advanced UAV systems at Boeing.
        </p>
      </div>

      <KalyxaShowcase />
      <BoeingShowcase />
      <ProjectsShowcase />
      <PersonalProjectsSection />

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

      {/* Contact Section */}
      <section id="contact" className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        {/* Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Let's Connect
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Whether you're interested in collaboration, opportunities, or just want to say hello, I'm always excited to connect with fellow developers and innovators.
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email Card */}
              <a 
                href="mailto:p.ahiir01@gmail.com"
                className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="p-8 flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      Email
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      p.ahiir01@gmail.com
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                      Get in touch for opportunities and collaborations
                    </p>
                  </div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a 
                href="https://www.linkedin.com/in/parth-ahir/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0077B5] to-[#00A0DC] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="p-8 flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#0077B5] dark:group-hover:text-[#00A0DC] transition-colors duration-300">
                      LinkedIn
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      @parth-ahir
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                      Connect with me on LinkedIn for professional networking
                    </p>
                  </div>
                </div>
              </a>

              {/* X (Twitter) Card */}
              <a 
                href="https://x.com/ParthSAhir"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="p-8 flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-black to-gray-800 dark:from-white dark:to-gray-200 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                      X (Twitter)
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      @ParthSAhir
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                      Follow me for tech updates and insights
                    </p>
                  </div>
                </div>
              </a>

              {/* Product Hunt Card */}
              <a 
                href="https://www.producthunt.com/@parth_ahir"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#DA552F] to-[#FF6B4A] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="p-8 flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#DA552F] to-[#FF6B4A] rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.21 22.5 1.5 17.79 1.5 12S6.21 1.5 12 1.5 22.5 6.21 22.5 12 17.79 22.5 12 22.5zm0-4.5c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-14c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#DA552F] dark:group-hover:text-[#FF6B4A] transition-colors duration-300">
                      Product Hunt
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      @parth_ahir
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                      Check out my latest product launches and updates
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Additional Contact Info */}
            <div className="mt-16 text-center">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Available for full-time positions
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  Open to Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
