import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SignalField from "../components/SignalField";
import PageMeta from "../components/PageMeta";

const slides = [
  {
    title: "Jerry Nwachi",
    description:
      "AI Engineer and Software Development student building practical web apps, data workflows, and automation systems in Toronto.",
  },
  {
    title: "Current work",
    description:
      "AI Engineer Intern at YarlMetal Fabrications Inc., designing tools that turn manual workflows into structured software systems.",
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

function useReducedMotionPreference() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPrefersReducedMotion(media.matches);

    syncPreference();
    media.addEventListener("change", syncPreference);

    return () => media.removeEventListener("change", syncPreference);
  }, []);

  return prefersReducedMotion;
}

export default function Home() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotionPreference();

  useEffect(() => {
    if (shouldReduceMotion) return undefined;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="min-h-screen page-shell text-black dark:text-white transition-colors duration-300">
      <PageMeta
        title="Jerry Nwachi | AI Engineer"
        description="AI Engineer and Software Development student in Toronto, building practical web apps, data workflows, and automation systems."
        path="/"
        image="/profile.jpg"
      />
      <Navbar />

      {/* HERO */}
      <main
        id="main-content"
        className="safe-x relative isolate overflow-hidden pt-28 text-center min-h-screen min-h-[100svh] flex flex-col items-center justify-center"
      >
        <SignalField density="dense" className="z-0" />

        <div key={index} className="relative z-10 mb-6 max-w-2xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 tracking-tight [text-wrap:balance]">
            {slides[index].title}
          </h1>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 px-2">
            {slides[index].description}
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-center gap-1 mb-8" aria-label="Hero slides">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:hover:bg-white/10"
              aria-label={`Show ${slides[i].title}`}
              aria-pressed={index === i}
            >
              <span
                className={`block h-2.5 w-2.5 rounded-full transition-all ${
                  index === i
                    ? "bg-primary scale-125"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center gap-5">
          <div className="grid w-full max-w-xs gap-3 min-[430px]:max-w-none min-[430px]:grid-cols-2">
            <Link
              href="/project"
              className="inline-flex min-h-11 items-center justify-center bg-primary text-primary-contrast font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
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
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/jerry-nwachi-398a93258"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-slate-600 dark:text-slate-300 hover:text-primary transition"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
