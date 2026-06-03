import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import useTypewriter from '../hooks/useTypewriter';

export default function About() {
  const title = useTypewriter('About Me', 35);

  const p1 = useTypewriter(
    "I'm Jerry Nwachi — a Software Development student at Seneca Polytechnic in Toronto, working towards my Honours Bachelor of Technology (expected Aug 2027). I have hands-on experience building full-stack applications, automating data pipelines, and integrating systems via REST APIs.",
    18,
    400
  );

  const p2 = useTypewriter(
    "I'm comfortable in Python and JavaScript across the full stack — React and Next.js on the frontend, Node.js and FastAPI on the backend, and both MySQL and MongoDB for data. I use AI-assisted tools like GitHub Copilot, Claude, and Cursor in my daily workflow, and I'm familiar with Docker, AWS, and MLflow for building and tracking production-ready systems.",
    18,
    1600
  );

  const p3 = useTypewriter(
    "Professionally, I worked as a Junior IT Support Helpdesk contractor at the City of Markham, where I documented technical procedures, gathered requirements from cross-functional teams, and coordinated system deployments. I also hold certifications in Data Visualization with Power BI (Microsoft) and Harvard's Introduction to AI with Python.",
    18,
    2800
  );

  const p4 = useTypewriter(
    "Right now, I'm completing an internship at YarlMetal Fabrications Inc. as an AI Systems Integrator. I map manual workflows across their operations, identify repetitive bottlenecks, and build automations that make the team's process easier to track, repeat, and scale.",
    18,
    4000
  );

  return (
    <div className="min-h-screen page-shell text-black dark:text-white transition-colors duration-300">
      <Navbar />

      <section className="pt-28 px-4 sm:px-6 max-w-4xl mx-auto pb-16">

        {/* Profile photo */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
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
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {title}
        </motion.h1>

        {/* Paragraphs */}
        {[p1, p2, p3, p4].map((text, i) => (
          <motion.p
            key={i}
            className="text-base sm:text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {text}
          </motion.p>
        ))}

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full
                       bg-gray-950 text-white dark:bg-white dark:text-black font-semibold shadow-lg
                       hover:scale-105 hover:shadow-xl transition"
          >
            Let&apos;s Connect
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
