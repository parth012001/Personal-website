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
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Interested in working together? I'm always open to discussing new opportunities.
          </p>
          
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <a 
              href="mailto:p.ahiir01@gmail.com"
              className="flex items-center justify-center gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">p.ahiir01@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/parth-ahir/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="w-12 h-12 bg-[#0077B5] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">LinkedIn</h3>
                <p className="text-gray-600 dark:text-gray-300">@parth-ahir</p>
              </div>
            </a>

            {/* X (Twitter) */}
            <a 
              href="https://x.com/ParthSAhir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="w-12 h-12 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">X (Twitter)</h3>
                <p className="text-gray-600 dark:text-gray-300">@ParthSAhir</p>
              </div>
            </a>

            {/* Product Hunt */}
            <a 
              href="https://www.producthunt.com/@parth_ahir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="w-12 h-12 bg-[#DA552F] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.21 22.5 1.5 17.79 1.5 12S6.21 1.5 12 1.5 22.5 6.21 22.5 12 17.79 22.5 12 22.5zm0-4.5c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-14c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"/>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">Product Hunt</h3>
                <p className="text-gray-600 dark:text-gray-300">@parth_ahir</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
