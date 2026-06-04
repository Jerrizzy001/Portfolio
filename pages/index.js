import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SignalField from "../components/SignalField";

const slides = [
  {
    title: "Jerry Nwachi",
    description:
      "Software Development student building practical web apps, data workflows, and AI automation systems in Toronto.",
  },
  {
    title: "Current work",
    description:
      "AI Systems Integrator intern at YarlMetal Fabrications Inc., mapping manual workflows and automating repetitive operations.",
  },
  {
    title: "How I build",
    description:
      "Clear interfaces, reliable APIs, readable code, and systems that make work easier to repeat.",
  },
  {
    title: "Project focus",
    description:
      "Full-stack Next.js apps, Python data analysis, machine learning workflows, and deployment-ready portfolio systems.",
  },
  {
    title: "Start here",
    description:
      "Review the project case notes, then contact me if the work fits what your team needs.",
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
      <main
        id="main-content"
        className="safe-x relative isolate overflow-hidden pt-28 text-center min-h-screen min-h-[100svh] flex flex-col items-center justify-center"
      >
        <SignalField density="dense" className="z-0" />

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mb-6 max-w-2xl w-full"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 tracking-tight [text-wrap:balance]">
              {slides[index].title}
            </h1>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 px-2">
              {slides[index].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 flex items-center justify-center gap-1 mb-8" aria-label="Hero slides">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:hover:bg-white/10"
              aria-label={`Show ${slides[i].title}`}
              aria-pressed={index === i}
            >
              <span
                className={`block h-2.5 w-2.5 rounded-full transition-all ${
                  index === i
                    ? "bg-black dark:bg-white scale-125"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="relative z-10 flex flex-col items-center gap-5"
        >
          <div className="grid w-full max-w-xs gap-3 min-[430px]:max-w-none min-[430px]:grid-cols-2">
            <Link
              href="/project"
              className="inline-flex min-h-11 items-center justify-center bg-black text-white dark:bg-white dark:text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
            >
              View project notes
            </Link>
            <Link
              href="/about"
              className="inline-flex min-h-11 items-center justify-center border-2 border-black dark:border-white text-black dark:text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
            >
              Read about Jerry
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
      </main>
    </div>
  );
}
