import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import useTypewriter from '../hooks/useTypewriter';

export default function About() {
  const title = useTypewriter('About Me', 35);

  const p1 = useTypewriter(
    "Hi, I’m Jerry Nwachi, a passionate software development student based in Toronto. I’m currently studying towards a Bachelor’s in Software Development at Seneca Polytechnic, with a strong foundation in full-stack development, cloud platforms, and databases.",
    18,
    400
  );

  const p2 = useTypewriter(
    "I’ve built dynamic web applications using Next.js, React, Node.js, and Django. I’m comfortable working across the stack — from reusable UI components to backend logic, REST APIs, and database integration. I value clean, scalable code and continuous improvement.",
    18,
    1400
  );

  const p3 = useTypewriter(
    "Beyond development, I’ve worked as a Student Ambassador at Seneca and a Facility Attendant with the City of Markham. These roles strengthened my communication skills, technical troubleshooting, and ability to work in fast-paced environments.",
    18,
    2400
  );

  const p4 = useTypewriter(
    "I’m currently open to internship and entry-level opportunities where I can contribute, learn from experienced developers, and grow through real-world projects.",
    18,
    3300
  );

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <Navbar />

      <section className="pt-28 px-6 max-w-4xl mx-auto">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
          <span className="animate-pulse">|</span>
        </motion.h1>

        {/* Paragraphs */}
        {[p1, p2, p3, p4].map((text, i) => (
          <motion.p
            key={i}
            className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {text}
            <span className="animate-pulse">|</span>
          </motion.p>
        ))}

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.2 }}
        >
          <a
            href="/connect"
            className="inline-block px-8 py-3 rounded-full 
                       bg-gradient-to-r from-indigo-600 to-purple-600 
                       text-white font-semibold shadow-lg 
                       hover:scale-105 hover:shadow-xl transition"
          >
            Let’s Connect
          </a>
        </motion.div>
      </section>
    </div>
  );
}
