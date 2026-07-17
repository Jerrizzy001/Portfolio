import { useId, useMemo, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { FaArrowRight, FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import SignalField from "../components/SignalField";
import useModalA11y from "../hooks/useModalA11y";
import PageMeta from "../components/PageMeta";

const projects = [
  {
    id: "met-art-explorer",
    title: "Met Art Explorer",
    subtitle: "Museum art search app",
    category: "Web Dev",
    status: "Live",
    role: "Full-stack developer",
    focus: "Artwork search, accounts, favourites",
    result: "A simpler way to explore The Met collection and keep track of the pieces you like.",
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "Node.js",
      "SWR",
      "REST API",
      "React Bootstrap",
      "Jotai",
      "Auth",
      "Git",
    ],
    description:
      "I built this app to make exploring The Met's collection feel easier. You can search for artwork by country or location, open a piece to learn more, and save your favourites after signing in.",
    liveUrl: "https://assignment6-bti.vercel.app",
    repoUrl: "https://github.com/Jerrizzy001/Full-stack-developer-Next.js-project-",
    image: "/projects/NextJS.jpg",
    details: [
      "I connected the app to The Met Museum API so people can search the museum's collection without manually digging through thousands of records.",
      "I added accounts, favourites, and search history so you can leave the site and come back without losing the artwork you found.",
      "I used SWR and Jotai to keep searches fast and make sure saved information stays in sync while you move around the app.",
      "The full experience follows a simple path: search for art, open a piece, save it, and return to it later.",
    ],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    subtitle: "My personal website",
    category: "Web Dev",
    status: "Active",
    role: "Designer + developer",
    focus: "Design, accessibility, deployment",
    result: "One place to see what I build, what I know, and how to reach me.",
    tech: ["Next.js", "React", "Tailwind CSS", "next-themes", "Canvas", "Vercel"],
    description:
      "This is the site you are on right now. I built it to give people a quick, honest look at my projects, skills, experience, and the kind of software I enjoy working on.",
    liveUrl: null,
    repoUrl: "https://github.com/Jerrizzy001/Portfolio",
    image: "/projects/portfolio.png",
    details: [
      "I built the site with Next.js and React so every page loads quickly and is easy for me to update as my work changes.",
      "It has full light and dark themes, responsive layouts, and keyboard-friendly navigation instead of treating accessibility as an afterthought.",
      "I added small visual details and motion to give the site personality, while still respecting people who prefer reduced motion.",
      "The site is connected to GitHub and Vercel, so tested updates can move from the repository to the live portfolio without a manual upload.",
    ],
  },
  {
    id: "fraud-detection-system",
    title: "Fraud Detection System",
    subtitle: "Machine learning experiment",
    category: "Data Science",
    status: "Repository",
    role: "ML developer",
    focus: "Spotting suspicious transactions",
    result: "A model that helps flag transactions worth a closer look.",
    tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Data Analysis"],
    description:
      "I built this project to see how machine learning can help spot transactions that do not look normal. The goal is not to automatically accuse anyone—it is to help a person find the transactions that deserve a closer review.",
    liveUrl: null,
    repoUrl: "https://github.com/Jerrizzy001/Fraud-Detection-System",
    image: "/projects/fraud-detection.svg",
    details: [
      "I cleaned and prepared labelled transaction data, including the class imbalance that happens because real fraud cases are much rarer than normal payments.",
      "I compared models such as Logistic Regression and Random Forest instead of assuming the most complicated option would be the best one.",
      "I measured precision, recall, F1-score, and ROC-AUC because a model can look accurate while still missing the fraud cases that matter.",
      "I kept the final question practical: which transactions should be placed in front of a human reviewer?",
    ],
  },
  {
    id: "hr-analytics-dashboard",
    title: "HR Analytics Dashboard",
    subtitle: "Workforce data project",
    category: "Data Science",
    status: "Repository",
    role: "Data analyst",
    focus: "Attrition, pay, and team trends",
    result: "A clearer picture of where employees were leaving and what might be driving it.",
    tech: ["Python", "Data Analysis", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    description:
      "I used a workforce dataset to explore why employees were leaving, how pay differed across teams, and where the company might need to look more closely. I turned the findings into charts that are easier to understand than a spreadsheet full of rows.",
    liveUrl: null,
    repoUrl: "https://github.com/Jerrizzy001/HR-Analysis-Dashboard",
    image: "/projects/hr-analytics.jpg",
    details: [
      "I looked at employee turnover, time at the company, salary ranges, and department sizes to find patterns that were easy to miss in the raw data.",
      "I built the charts with Matplotlib and Seaborn so someone in HR could understand the story without needing to read Python code.",
      "I used correlations and feature importance as clues about what might be connected to attrition, without presenting them as proof of cause.",
      "I kept the work in a Jupyter Notebook so another person can follow the analysis from the original data to the final charts.",
    ],
  },
  {
    id: "email-to-erp-automation",
    title: "Email-to-ERP Automation",
    subtitle: "Quote-request automation demo",
    category: "Automation",
    status: "Live",
    role: "Automation developer",
    focus: "Reading emails and preparing quotes",
    result: "Takes a quote-request email and turns it into a clean record someone can review.",
    tech: ["JavaScript", "HTML", "CSS", "Node.js", "GitHub Actions", "GitHub Pages"],
    description:
      "I made this public demo to show how a quote-request email can move from an inbox into a clean business record. It reads the request, pulls out the important details, checks whether it has already been handled, and prepares the information for review.",
    liveUrl: "https://jerrizzy001.github.io/Email-to-ERP-system/",
    repoUrl: "https://github.com/Jerrizzy001/Email-to-ERP-system",
    image: "/projects/email-to-erp.jpg",
    imageAlt:
      "Email-to-ERP dashboard showing a sample RFQ email, parsed fields, and workflow payload",
    details: [
      "The demo reads a sample email and attachment, then pulls out details such as the customer, part number, quantity, due date, and shipping method.",
      "It creates a repeatable ID for each request so the same email does not accidentally become two quotes.",
      "It checks the extracted details against sample customer, part, and carrier records, then shows how confident the matches are.",
      "Everything in the public version is fictional. It previews the record instead of writing to a real company system, and automated checks help keep private data out of the repository.",
    ],
  },
  {
    id: "taskflow",
    title: "Taskflow",
    subtitle: "Mobile goal-planning app",
    category: "Mobile",
    status: "Active",
    role: "Mobile app developer",
    focus: "Small steps, reminders, and progress",
    result: "Helps turn an overwhelming goal into something you can start today.",
    tech: [
      "TypeScript",
      "Expo",
      "React Native",
      "Expo Router",
      "SQLite",
      "Zustand",
      "SecureStore",
      "Notifications",
    ],
    description:
      "I built Taskflow for the moment when a goal feels too big and you do not know where to start. The app breaks it into smaller steps, reminds you what to do next, and helps you see the progress you are making.",
    liveUrl: null,
    repoUrl: "https://github.com/Jerrizzy001/taskflow",
    image: "/projects/taskflow.png",
    imageAlt:
      "Taskflow mobile Goals screen showing active goals, progress, and suggested next steps",
    details: [
      "The Today screen keeps the next step in front of you, while the Goals and Progress screens show how the larger plan is moving forward.",
      "You can ask the app to help break a goal into weekly milestones and small actions instead of planning every step from scratch.",
      "Goals, reminders, progress, and personal notes stay on the phone, and the user's AI key is kept in secure device storage.",
      "I added local notifications, affirmations, and progress feedback to help people return to a goal after the first burst of motivation wears off.",
    ],
  },
  {
    id: "jarvis",
    title: "JARVIS",
    subtitle: "Bedroom AI assistant",
    category: "AI Systems",
    status: "Active",
    role: "Co-developer",
    focus: "Voice, desktop, and room assistance",
    result: "A personal assistant for my bedroom workspace that helps without taking control away from me.",
    tech: ["Next.js", "React", "TypeScript", "Zod", "SQLite", "Vitest", "MCP", "Local AI"],
    description:
      "JARVIS is a bedroom assistant I built with my friend. It can listen and speak, open files, control apps, help with projects, and manage parts of the room. Before it does anything important, it shows us what it wants to do and waits for approval.",
    liveUrl: null,
    repoUrl: "https://github.com/Jerrizzy001/JARVIS",
    image: "/projects/jarvis.jpg",
    imageAlt:
      "JARVIS Working Cockpit showing chat, Human Gate approval, room state, cost, and activity panels",
    details: [
      "We built it around the way I actually use my bedroom: as a place to study, code, work, and relax.",
      "I can talk to it, ask it to open a file or app, summarize a document, check a project, or change a room setting.",
      "It tries to run everyday AI tasks on the computer first, so they do not always need to be sent to a cloud service.",
      "Before it changes a file, runs a command, or controls something in the room, JARVIS pauses and asks for approval.",
    ],
  },
];

const featuredId = "email-to-erp-automation";

const categoryTone = {
  "Data Science":
    "border-emerald-300/70 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",
  "Web Dev":
    "border-primary/30 bg-primary/10 text-primary dark:border-primary/35 dark:bg-primary/15 dark:text-primary",
  Automation:
    "border-sky-300/70 bg-sky-50 text-sky-900 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-200",
  Mobile:
    "border-amber-300/70 bg-amber-50 text-amber-900 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-200",
  "AI Systems":
    "border-violet-300/70 bg-violet-50 text-violet-900 dark:border-violet-400/30 dark:bg-violet-400/10 dark:text-violet-200",
};

/* Always-dark variants, used inside the dark featured exhibit. */
const categoryToneDark = {
  "Data Science": "border-emerald-500/30 bg-emerald-500/10 text-emerald-200",
  "Web Dev": "border-indigo-400/35 bg-indigo-400/15 text-indigo-200",
  Automation: "border-sky-400/30 bg-sky-400/10 text-sky-200",
  Mobile: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  "AI Systems": "border-violet-400/30 bg-violet-400/10 text-violet-200",
};

const statusDotTone = {
  Live: "bg-emerald-500",
  Active: "bg-primary",
  Repository: "bg-slate-400",
};

export default function ProjectPage() {
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState("All");
  const modalTitleId = useId();
  const modalDescriptionId = useId();

  const categories = useMemo(() => {
    const counts = new Map();
    for (const project of projects) {
      counts.set(project.category, (counts.get(project.category) || 0) + 1);
    }
    return ["All", ...counts.keys()];
  }, []);

  const featuredProject = projects.find((project) => project.id === featuredId);
  const visibleProjects =
    filter === "All"
      ? projects.filter((project) => project.id !== featuredId)
      : projects.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen page-shell text-black dark:text-white transition-colors duration-300">
      <PageMeta
        title="Projects"
        description="Selected projects by Jerry Nwachi across full-stack development, mobile apps, workflow automation, local-first AI systems, machine learning, and data analysis."
        path="/project"
        image="/projects/portfolio.png"
      />
      <Navbar />

      <main id="main-content" className="safe-x relative isolate mx-auto max-w-7xl overflow-hidden pb-20 pt-28">
        <SignalField fill={false} className="inset-x-0 top-0 z-0 h-[54rem] opacity-60" />

        {/* HEADER */}
        <section className="relative z-10 mb-10 border-b border-slate-950/10 pb-10 dark:border-white/10">
          <p className="mb-4 max-w-max rounded-full border border-slate-950/10 bg-white/70 px-3 py-1 font-mono text-xs uppercase tracking-wide text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            Things I've built
          </p>
          <div className="flex flex-wrap items-end gap-x-5 gap-y-2">
            <h1 className="text-5xl font-bold tracking-tight text-slate-950 [text-wrap:balance] dark:text-white sm:text-6xl lg:text-7xl">
              Projects
            </h1>
            <span className="mb-2 font-mono text-sm tracking-widest text-slate-500 dark:text-slate-400 sm:mb-3">
              /{String(projects.length).padStart(2, "0")}
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 [text-wrap:pretty] dark:text-slate-300 sm:text-lg">
            From workflow automation and a bedroom AI assistant to a museum
            search app and ML experiments. Pick a category, or open any project
            to see what it does and how I made it.
          </p>
        </section>

        {/* FEATURED EXHIBIT */}
        {filter === "All" && featuredProject && (
          <section aria-label="Featured project" className="relative z-10 mb-14">
            <FeaturedExhibit
              project={featuredProject}
              onView={() => setActiveProject(featuredProject)}
            />
          </section>
        )}

        {/* FILTER BAR */}
        <section className="relative z-10 mb-2" aria-label="Browse projects">
          <div
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label="Filter projects by category"
          >
            {categories.map((category) => {
              const isActive = filter === category;
              const count =
                category === "All"
                  ? projects.length
                  : projects.filter((project) => project.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  aria-pressed={isActive}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wide transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? "border-primary bg-primary text-primary-contrast"
                      : "border-slate-950/10 bg-white/70 text-slate-600 hover:border-primary hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  {category}
                  <span className={isActive ? "opacity-80" : "text-slate-400 dark:text-slate-500"}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <p
            aria-live="polite"
            className="mt-4 font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400"
          >
            {filter === "All"
              ? `${String(projects.length).padStart(2, "0")} projects`
              : `Showing ${visibleProjects.length} of ${String(projects.length).padStart(2, "0")}`}
          </p>
        </section>

        {/* PROJECT INDEX */}
        <section aria-label="Project index" className="relative z-10">
          {visibleProjects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              number={String(index + 1).padStart(2, "0")}
              onView={() => setActiveProject(project)}
            />
          ))}
        </section>

        {/* GITHUB CTA */}
        <section className="relative z-10 mt-16 flex flex-col gap-5 border-t border-slate-950/10 pt-8 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
              More builds are on GitHub.
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700 dark:text-slate-300">
              I keep experiments, coursework, and in-progress builds there. This page stays
              focused on the work most worth reviewing.
            </p>
          </div>

          <a
            href="https://github.com/Jerrizzy001"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-contrast transition hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 sm:w-auto"
          >
            <FaGithub size={18} aria-hidden="true" />
            View GitHub profile
          </a>
        </section>
      </main>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          titleId={modalTitleId}
          descriptionId={modalDescriptionId}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}

function FeaturedExhibit({ project, onView }) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-slate-950/10 bg-slate-950 text-white dark:border-white/10">
      {/* Cobalt glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl"
      />

      <div className="relative grid lg:grid-cols-2">
        {/* Thumbnail */}
        <div className="relative h-56 border-b border-white/10 sm:h-72 lg:h-auto lg:min-h-full lg:border-b-0 lg:border-r">
          <ThumbImage project={project} priority />
        </div>

        {/* Content */}
        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[0.7rem] font-semibold uppercase tracking-wide text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              Featured
            </span>
            <span
              className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[0.7rem] font-semibold uppercase tracking-wide ${categoryToneDark[project.category]}`}
            >
              {project.category}
            </span>
            <StatusText status={project.status} dark />
          </div>

          <p className="font-mono text-xs uppercase tracking-widest text-slate-400">
            {project.subtitle}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight [text-wrap:balance] sm:text-4xl">
            {project.title}
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-300 [text-wrap:pretty] sm:text-base sm:leading-7">
            {project.description}
          </p>

          <p className="mt-5 border-l-2 border-primary pl-4 text-sm font-medium leading-6 text-slate-200">
            {project.result}
          </p>

          <dl className="mt-6 grid gap-3 border-y border-white/10 py-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-mono text-[0.7rem] font-semibold uppercase tracking-wide text-slate-400">
                Role
              </dt>
              <dd className="mt-1 font-medium leading-5 text-slate-100">{project.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.7rem] font-semibold uppercase tracking-wide text-slate-400">
                Focus
              </dt>
              <dd className="mt-1 font-medium leading-5 text-slate-100">{project.focus}</dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-xs font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 grid gap-3 min-[420px]:flex min-[420px]:flex-wrap">
            <button
              type="button"
              onClick={onView}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-contrast transition hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary min-[420px]:w-auto"
            >
              Open details
              <FaArrowRight size={13} aria-hidden="true" />
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary min-[420px]:w-auto"
              >
                <FaExternalLinkAlt size={13} aria-hidden="true" />
                Open live demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectRow({ project, number, onView }) {
  return (
    <article className="group relative border-t border-slate-950/10 py-5 transition-colors last:border-b hover:bg-slate-950/[0.03] dark:border-white/10 dark:hover:bg-white/5 sm:py-6">
      <div className="grid items-center gap-4 sm:grid-cols-[2.5rem_11rem_minmax(0,1fr)_auto] sm:gap-6">
        <span
          aria-hidden="true"
          className="hidden font-mono text-sm text-slate-400 transition-colors group-hover:text-primary dark:text-slate-500 sm:block"
        >
          {number}
        </span>

        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-slate-950/10 bg-slate-950 dark:border-white/10 sm:w-44">
          <ThumbImage project={project} />
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <Badge className={categoryTone[project.category]}>{project.category}</Badge>
            <StatusText status={project.status} />
          </div>

          <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
            <button
              type="button"
              onClick={onView}
              className="rounded-sm text-left transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {project.title}
            </button>
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-600 [text-wrap:pretty] dark:text-slate-400">
            {project.result}
          </p>
        </div>

        <div className="flex items-center gap-2 justify-self-end">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open live app for ${project.title}`}
              className="relative z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-slate-950/10 text-slate-600 transition hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/10 dark:text-slate-300"
            >
              <FaExternalLinkAlt size={14} aria-hidden="true" />
            </a>
          )}
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-950/10 text-slate-500 transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-contrast dark:border-white/10 dark:text-slate-400"
          >
            <FaArrowRight
              size={14}
              className="transition-transform group-hover:-rotate-45"
            />
          </span>
        </div>
      </div>
    </article>
  );
}

function StatusText({ status, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[0.7rem] font-semibold uppercase tracking-wide ${
        dark ? "text-slate-400" : "text-slate-500 dark:text-slate-400"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${statusDotTone[status] || "bg-slate-400"}`}
        aria-hidden="true"
      />
      {status}
    </span>
  );
}

function ProjectModal({ project, titleId, descriptionId, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useModalA11y({
    dialogRef,
    initialFocusRef: closeButtonRef,
    onClose,
  });

  return (
    <div className="motion-modal-backdrop fixed inset-0 z-50 flex items-end justify-center px-3 pb-3 pt-16 sm:items-center sm:px-4 sm:py-6">
      <button
        className="absolute inset-0 bg-slate-950/72"
        type="button"
        onClick={onClose}
        aria-label="Dismiss project details"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
        className="motion-modal-panel relative max-h-[calc(100svh-1.5rem)] w-full max-w-4xl overflow-y-auto rounded-t-lg border border-slate-950/10 bg-white p-5 text-slate-950 shadow-[0_8px_24px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-slate-950 dark:text-white sm:max-h-[calc(100svh-3rem)] sm:rounded-lg sm:p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Badge className={categoryTone[project.category]}>{project.category}</Badge>
              <Badge>{project.status}</Badge>
            </div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {project.subtitle}
            </p>
            <h2 id={titleId} className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              {project.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-md text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label="Close project details"
          >
            <FaTimes size={18} aria-hidden="true" />
          </button>
        </div>

        <ModalImage project={project} />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div>
            <p id={descriptionId} className="text-base leading-7 text-slate-700 dark:text-slate-300">
              {project.description}
            </p>

            <h3 className="mt-6 text-base font-semibold text-slate-950 dark:text-white">
              What I built
            </h3>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              {project.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950 dark:bg-white" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-4 border-t border-slate-950/10 pt-5 dark:border-white/10 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
            <div>
              <h3 className="text-sm font-semibold text-slate-950 dark:text-white">
                At a glance
              </h3>
              <dl className="mt-3 space-y-3 text-sm">
                <MetaItem label="Role" value={project.role} />
                <MetaItem label="Focus" value={project.focus} />
                <MetaItem label="Result" value={project.result} />
              </dl>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-950 dark:text-white">Stack</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-950/10 bg-slate-50 px-2.5 py-1 font-mono text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-1">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-contrast transition hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <FaExternalLinkAlt size={13} aria-hidden="true" />
                  Open live app
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-slate-950/15 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-950/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/15 dark:text-white dark:hover:bg-white/10"
                >
                  <FaGithub size={15} aria-hidden="true" />
                  View source
                </a>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[0.7rem] font-semibold uppercase tracking-wide ${className || "border-slate-950/10 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"}`}
    >
      {children}
    </span>
  );
}

function MetaItem({ label, value }) {
  return (
    <div>
      <dt className="font-mono text-[0.7rem] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</dt>
      <dd className="mt-1 text-sm font-medium leading-5 text-slate-900 dark:text-slate-100">
        {value}
      </dd>
    </div>
  );
}

function ThumbImage({ project, priority = false }) {
  const [imgError, setImgError] = useState(false);

  if (!project.image || imgError) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-slate-950">
        <span className="px-4 text-center text-xs font-medium text-white/70">
          {project.tech.slice(0, 3).join(" / ")}
        </span>
      </div>
    );
  }

  const sizes = priority
    ? "(min-width: 1024px) 50vw, calc(100vw - 32px)"
    : "(min-width: 640px) 176px, calc(100vw - 32px)";

  return (
    <Image
      src={project.image}
      alt={project.imageAlt || `${project.title} project preview`}
      fill
      className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
      sizes={sizes}
      priority={priority}
      quality={78}
      unoptimized={project.image.endsWith(".svg")}
      onError={() => setImgError(true)}
    />
  );
}

function ModalImage({ project }) {
  const [imgError, setImgError] = useState(false);

  if (!project.image || imgError) {
    return (
      <div className="my-5 flex h-44 w-full items-center justify-center rounded-lg border border-white/10 bg-slate-950">
        <span className="px-4 text-center text-sm font-medium text-white/70">
          {project.tech.slice(0, 4).join(" / ")}
        </span>
      </div>
    );
  }

  return (
    <div className="relative my-5 h-48 w-full overflow-hidden rounded-lg border border-slate-950/10 bg-slate-950 dark:border-white/10 sm:h-60">
      <Image
        src={project.image}
        alt={project.imageAlt || `${project.title} project preview`}
        fill
        className="object-contain p-2"
        sizes="(min-width: 1024px) 856px, calc(100vw - 40px)"
        quality={78}
        unoptimized={project.image.endsWith(".svg")}
        onError={() => setImgError(true)}
      />
    </div>
  );
}
