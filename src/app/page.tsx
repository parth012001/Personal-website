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
