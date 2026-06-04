import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const aboutParagraphs = [
  "I'm Jerry Nwachi, a Software Development student at Seneca Polytechnic in Toronto. I'm working toward an Honours Bachelor of Technology, expected August 2027. My work spans full-stack apps, data pipelines, REST APIs, and AI-assisted automation.",
  "I work mainly with Python and JavaScript: React and Next.js on the frontend, Node.js and FastAPI on the backend, and MySQL or MongoDB for data. I use GitHub Copilot, Claude, and Cursor to move faster while keeping the code reviewable.",
  "Before my current internship, I worked as a Junior IT Support Helpdesk contractor at the City of Markham. I documented technical procedures, gathered requirements from cross-functional teams, and coordinated system deployments. I also hold certifications in Data Visualization with Power BI and Harvard's Introduction to AI with Python.",
  "Right now, I'm an AI Systems Integrator intern at YarlMetal Fabrications Inc. I map manual workflows across their operations, identify repetitive bottlenecks, and build automations that make the team's process easier to track, repeat, and scale.",
];

export default function About() {
  return (
    <div className="min-h-screen page-shell text-black dark:text-white transition-colors duration-300">
      <Navbar />

      <main id="main-content" className="safe-x pt-28 max-w-4xl mx-auto pb-16">

        {/* Profile photo */}
        <div
          className="flex justify-center mb-8"
        >
          <div className="relative rounded-full border border-indigo-500/40 p-1 shadow-xl shadow-indigo-300/20 dark:shadow-indigo-900/30">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden bg-white dark:bg-black">
              <Image
                src="/profile.jpg"
                alt="Jerry Nwachi"
                fill
                sizes="176px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          About Me
        </h1>

        {/* Paragraphs */}
        {aboutParagraphs.map((text) => (
          <p
            key={text}
            className="text-base sm:text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300"
          >
            {text}
          </p>
        ))}

        {/* CTA */}
        <div
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full
                       bg-gray-950 text-white dark:bg-white dark:text-black font-semibold shadow-lg
                       hover:scale-105 hover:shadow-xl transition"
          >
            Contact me
          </Link>
        </div>
      </main>
    </div>
  );
}
