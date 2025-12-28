import { useState } from "react";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import useTypewriter from "../hooks/useTypewriter";

const projects = [
  {
    id: "met-art-explorer",
    title: "Met Art Explorer (Full-Stack Next.js App)",
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "Node.js",
      "SWR",
      "REST API",
      "React Bootstrap",
      "Jotai (State)",
      "Auth + Protected Routes",
      "Git",
    ],
    description:
      "An art discovery website powered by The Met Museum API. Search artworks by country/location, use advanced filters, open full detail pages, and (when signed in) save favourites and revisit your search history.",
    liveUrl: "https://assignment6-bti.vercel.app",
    repoUrl: "https://github.com/Jerrizzy001/Full-stack-developer-Next.js-project-",
    image: "/projects/NextJS.png",
    details: [
      "What it is: A website that helps you discover art pieces from a large museum collection.",
      "How it works: You type a country or location and the site shows artworks connected to that place.",
      "Advanced search: You can narrow results with extra filters (for example: keywords + location) so you get more specific results.",
      "Artwork pages: Clicking an artwork opens a full page with the artwork’s information (artist, year, type, and other details).",
      "Accounts: Users can create an account and log in to keep things saved to their profile.",
      "Favourites: Logged-in users can save artworks they like, so they can come back later and find them easily.",
      "Search history: Logged-in users can see what they searched before, so they don’t have to repeat the same searches.",
      "Overall: It’s a complete app experience — search → explore → view details → save favourites → revisit history.",
    ],
  },
];

const gridWrap = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const cardIn = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function ProjectPage() {
  const [activeProject, setActiveProject] = useState(null);

  const headerTitle = useTypewriter("Projects", 25, 100);
  const headerSub = useTypewriter(
    "A selection of projects I’ve built — click a card to explore what it does and how I built it.",
    14,
    500
  );

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gradient-to-br dark:from-black dark:via-purple-900 dark:to-indigo-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="pt-28 px-6 pb-20 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            {headerTitle}
            <span className="animate-pulse">|</span>
          </h1>

          <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-3xl text-lg">
            {headerSub}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <motion.div
          variants={gridWrap}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onView={() => setActiveProject(project)}
            />
          ))}
        </motion.div>

        {/* SUBTLE DIVIDER */}
        <motion.div
          className="my-24 h-px w-full relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* MORE PROJECTS / GITHUB CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.55 }}
          className="text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            This page features a curated selection of my strongest work.
            I’m constantly building  projects, and in-progress
            ideas on GitHub.
          </p>

          <motion.a
            href="https://github.com/Jerrizzy001"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-7 py-3 rounded-full
                       bg-gradient-to-r from-gray-900 to-black
                       dark:from-white dark:to-gray-200
                       text-white dark:text-black
                       font-semibold shadow-lg hover:shadow-xl transition"
          >
            <FaGithub size={22} />
            View the rest on GitHub →
          </motion.a>
        </motion.div>
      </main>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute inset-0 bg-black/60"
              onClick={() => setActiveProject(null)}
              aria-label="Close modal"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl bg-white dark:bg-black rounded-2xl p-6 shadow-xl border border-white/10 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{activeProject.title}</h3>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-xl px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition"
                >
                  ✕
                </button>
              </div>

              <div className="relative w-full h-48 rounded-xl overflow-hidden bg-black border border-white/10 mb-5">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-contain"
                />
              </div>

              <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                {activeProject.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectCard({ project, onView, index }) {
  const typedTitle = useTypewriter(project.title, 16, 200 + index * 250);
  const typedDesc = useTypewriter(project.description, 10, 550 + index * 250);

  return (
    <motion.div
      variants={cardIn}
      whileHover={{ y: -10, scale: 1.01 }}
      className="rounded-2xl overflow-hidden border border-white/10 bg-white/85 dark:bg-black/40 backdrop-blur shadow-lg hover:shadow-2xl transition relative"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4.2 + index * 0.15,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <div className="relative w-full h-56 bg-black">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain"
            priority={index === 0}
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">
            {typedTitle}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {typedDesc}
            <span className="animate-pulse">|</span>
          </p>

          <motion.button
            onClick={onView}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full 
                       bg-gradient-to-r from-indigo-600 to-purple-600 
                       text-white font-semibold shadow-md"
          >
            View Project
            <FaExternalLinkAlt size={14} />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
