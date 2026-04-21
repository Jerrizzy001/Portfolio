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
    category: "Web Dev",
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
  {
    id: "portfolio-website",
    title: "Developer Portfolio (This Site)",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "next-themes", "Vercel"],
    description:
      "A fully responsive personal portfolio built with Next.js 15, Tailwind CSS v4, and Framer Motion — featuring dark/light mode, animated typewriter text, and smooth page transitions.",
    category: "Web Dev",
    liveUrl: null,
    repoUrl: "https://github.com/Jerrizzy001",
    image: "",
    details: [
      "Built with Next.js 15 and React 19 for fast, server-rendered pages and optimal performance.",
      "Tailwind CSS v4 utility-first styling with custom animations (spin-slow, orbit).",
      "Framer Motion for page-entry animations, hover effects, and animated presence transitions.",
      "Dark / light mode toggle powered by next-themes with instant, flash-free switching.",
      "Custom useTypewriter React hook for animated text reveal effects across all pages.",
      "Fully responsive across mobile, tablet, and desktop breakpoints.",
      "Deployed on Vercel with automatic CI/CD from GitHub.",
    ],
  },
  {
    id: "fraud-detection-system",
    title: "Fraud Detection System",
    tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Data Analysis"],
    description:
      "A machine learning-powered fraud detection system that analyses transaction data to identify suspicious patterns and flag potentially fraudulent activity with high accuracy.",
    category: "Data Science",
    liveUrl: null,
    repoUrl: "https://github.com/Jerrizzy001/Fraud-Detection-System",
    image: "",
    details: [
      "Built a classification model to detect fraudulent transactions from labelled datasets.",
      "Applied data preprocessing techniques including feature scaling, handling class imbalance, and outlier removal.",
      "Evaluated multiple algorithms (Logistic Regression, Random Forest, etc.) and selected the best performer.",
      "Used Pandas and NumPy for data manipulation and exploratory data analysis (EDA).",
      "Measured model performance with precision, recall, F1-score, and ROC-AUC metrics.",
      "Demonstrated real-world application of supervised learning for financial security.",
    ],
  },
  {
    id: "hr-analytics-dashboard",
    title: "HR Analytics Dashboard",
    tech: ["Python", "Data Analysis", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    description:
      "An interactive HR analytics dashboard that visualises workforce data — covering employee attrition, department performance, salary distribution, and hiring trends to support data-driven HR decisions.",
    category: "Data Science",
    liveUrl: null,
    repoUrl: "https://github.com/Jerrizzy001/HR-Analysis-Dashboard",
    image: "",
    details: [
      "Analysed HR datasets to uncover patterns in employee attrition and retention.",
      "Built visualisations for department-level headcount, salary bands, and tenure distribution.",
      "Identified key attrition drivers using correlation analysis and feature importance.",
      "Created clear, stakeholder-ready charts using Matplotlib and Seaborn.",
      "Structured the project in Jupyter Notebook for reproducibility and easy presentation.",
      "Demonstrates ability to translate raw data into actionable business insights.",
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
    <div className="min-h-screen bg-slate-50 text-black dark:bg-gradient-to-br dark:from-black dark:via-purple-900 dark:to-indigo-900 dark:text-white transition-colors duration-300">
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
            I’m constantly building new projects and sharing in-progress
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
            className="fixed inset-0 z-[999] flex items-center justify-center px-3 sm:px-4"
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
              className="relative w-full max-w-3xl bg-white dark:bg-black rounded-2xl p-5 sm:p-6 shadow-xl border border-white/10 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-4 gap-3">
                <div className="flex flex-col gap-1.5">
                  <span
                    className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full ${
                      activeProject.category === "Data Science"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400"
                        : "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400"
                    }`}
                  >
                    {activeProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold leading-snug">{activeProject.title}</h3>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="shrink-0 text-xl px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition"
                >
                  ✕
                </button>
              </div>

              <ModalImage project={activeProject} />

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {activeProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-6">
                {activeProject.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow hover:shadow-md transition"
                  >
                    <FaExternalLinkAlt size={13} />
                    Live Demo
                  </a>
                )}
                {activeProject.repoUrl && (
                  <a
                    href={activeProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/10 transition"
                  >
                    <FaGithub size={15} />
                    View Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CardImage({ project, index }) {
  const [imgError, setImgError] = useState(false);
  if (!project.image || imgError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black gap-2">
        <span className="text-white/20 text-xs font-medium px-4 text-center tracking-wide">
          {project.tech.slice(0, 3).join(" · ")}
        </span>
      </div>
    );
  }
  return (
    <Image
      src={project.image}
      alt={project.title}
      fill
      className="object-contain"
      priority={index === 0}
      onError={() => setImgError(true)}
    />
  );
}

function ModalImage({ project }) {
  const [imgError, setImgError] = useState(false);
  if (!project.image || imgError) {
    return (
      <div className="relative w-full h-40 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-black border border-white/10 mb-5 flex items-center justify-center">
        <span className="text-white/30 text-sm font-medium px-4 text-center">
          {project.tech.slice(0, 4).join(" · ")}
        </span>
      </div>
    );
  }
  return (
    <div className="relative w-full h-40 sm:h-48 rounded-xl overflow-hidden bg-black border border-white/10 mb-5">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-contain"
        onError={() => setImgError(true)}
      />
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
        <div className="relative w-full h-48 sm:h-56 bg-black">
          <CardImage project={project} index={index} />
        </div>

        <div className="p-4 sm:p-6">
          <div className="mb-2">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                project.category === "Data Science"
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400"
                  : "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400"
              }`}
            >
              {project.category}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            {typedTitle}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
            {typedDesc}
            <span className="animate-pulse">|</span>
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300">
                {t}
              </span>
            ))}
          </div>

          <motion.button
            onClick={onView}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full
                       bg-gradient-to-r from-indigo-600 to-purple-600
                       text-white font-semibold shadow-md text-sm sm:text-base"
          >
            View Details
            <FaExternalLinkAlt size={13} />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
