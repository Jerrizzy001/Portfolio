import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const slides = [
  {
    title: "Hi, I'm Jerry 👋",
    description:
      "I'm a passionate developer currently studying at Seneca College, Newnham Campus – North York.",
  },
  {
    title: "I LOVE WEB",
    description:
      "I've been obsessed with how the web works since I was a kid. I always dreamt of being able to make my own website someday.",
  },
  {
    title: "DISCIPLINE",
    description:
      "Discipline is a fundamental necessity — especially in our line of work. I always push myself to learn more and sharpen my skills.",
  },
  {
    title: "I LOVE PLAYING",
    description:
      'People in our line of expertise spend most of their day on screens, so I try to make time for fun — like they say, "All work and no play makes Jack a dull boy."',
  },
  {
    title: "INTERESTED?",
    description:
      "Click the button below to learn more about me — I promise you'll be entertained!",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return undefined;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="min-h-screen page-shell text-black dark:text-white transition-colors duration-300">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="pt-28 px-4 sm:px-6 text-center min-h-screen flex flex-col items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="mb-6 max-w-2xl w-full"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 tracking-wide">
              {slides[index].title.toUpperCase()}
            </h1>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 px-2">
              {slides[index].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-3 mb-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === i
                  ? "bg-black dark:bg-white scale-125"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-5"
        >
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/about"
              className="inline-block bg-black text-white dark:bg-white dark:text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
            >
              Learn More About Me →
            </Link>
            <Link
              href="/project"
              className="inline-block border-2 border-black dark:border-white text-black dark:text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
            >
              View My Projects
            </Link>
          </div>

          {/* Social quick-links */}
          <div className="flex items-center gap-4 mt-1">
            <a
              href="https://github.com/Jerrizzy001"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/jerry-nwachi-398a93258"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
