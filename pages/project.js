import { useId, useRef, useState } from "react";
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
    subtitle: "Full-stack Next.js app",
    category: "Web Dev",
    status: "Live",
    role: "Full-stack developer",
    focus: "API search, auth, saved state",
    result: "A searchable museum artwork app with protected favourites and search history.",
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
      "An art discovery app powered by The Met Museum API. Visitors can search by country or location, refine results, open artwork detail pages, and save favourites after signing in.",
    liveUrl: "https://assignment6-bti.vercel.app",
    repoUrl: "https://github.com/Jerrizzy001/Full-stack-developer-Next.js-project-",
    image: "/projects/NextJS.jpg",
    details: [
      "Built the search and detail flow around The Met Museum API, including location-based queries and filtered results.",
      "Added account-aware features for favourites and search history, so the app keeps useful context between visits.",
      "Used Jotai and SWR to keep client state predictable while still fetching fresh artwork data.",
      "Structured the project as a complete browsing path: search, inspect, save, return.",
    ],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    subtitle: "Personal site",
    category: "Web Dev",
    status: "Active",
    role: "Designer + developer",
    focus: "Theme system, responsive UI, deployment",
    result: "A direct portfolio built around technical proof, current work, and contact paths.",
    tech: ["Next.js", "React", "Tailwind CSS", "next-themes", "Canvas", "Vercel"],
    description:
      "The site you are reading now: a responsive portfolio with dark and light modes, accessible navigation, project media, and a deployment flow connected to Vercel.",
    liveUrl: null,
    repoUrl: "https://github.com/Jerrizzy001/Portfolio",
    image: "/projects/portfolio.png",
    details: [
      "Built with Next.js and React for fast static pages and clean route-level structure.",
      "Uses Tailwind CSS, theme tokens, and next-themes so light and dark modes change the whole surface, not just the text.",
      "Adds a restrained signal-field canvas, CSS interaction states, and reduced-motion fallbacks without hiding first-paint content.",
      "Keeps the portfolio focused on proof: projects, skills, current role, and contact paths.",
    ],
  },
  {
    id: "fraud-detection-system",
    title: "Fraud Detection System",
    subtitle: "Machine learning project",
    category: "Data Science",
    status: "Repository",
    role: "ML developer",
    focus: "Classification, feature prep, evaluation",
    result: "A supervised model workflow for flagging suspicious transaction patterns.",
    tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Data Analysis"],
    description:
      "A fraud detection workflow that analyses transaction data, prepares features, trains classification models, and evaluates suspicious-activity detection with practical metrics.",
    liveUrl: null,
    repoUrl: "https://github.com/Jerrizzy001/Fraud-Detection-System",
    image: "/projects/fraud-detection.svg",
    details: [
      "Prepared labelled transaction data for supervised classification, including scaling and imbalance handling.",
      "Compared model options such as Logistic Regression and Random Forest before selecting the strongest performer.",
      "Used precision, recall, F1-score, and ROC-AUC to judge the model beyond simple accuracy.",
      "Framed the project around a real operational question: which transactions deserve human review?",
    ],
  },
  {
    id: "hr-analytics-dashboard",
    title: "HR Analytics Dashboard",
    subtitle: "Analysis notebook",
    category: "Data Science",
    status: "Repository",
    role: "Data analyst",
    focus: "EDA, visualisation, workforce signals",
    result: "A dashboard-style analysis for attrition, department patterns, and salary distribution.",
    tech: ["Python", "Data Analysis", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    description:
      "An HR analytics project that turns workforce data into readable charts covering attrition, department performance, salary distribution, and hiring trends.",
    liveUrl: null,
    repoUrl: "https://github.com/Jerrizzy001/HR-Analysis-Dashboard",
    image: "/projects/hr-analytics.jpg",
    details: [
      "Analysed HR data to identify patterns in attrition, tenure, salary bands, and department-level headcount.",
      "Built stakeholder-readable charts with Matplotlib and Seaborn instead of leaving insights buried in tables.",
      "Used correlation analysis and feature importance to point at likely attrition drivers.",
      "Organised the work in a Jupyter Notebook so the analysis can be reviewed and reproduced.",
    ],
  },
  {
    id: "email-to-erp-automation",
    title: "Email-to-ERP Automation",
    subtitle: "Sanitized RFQ workflow demo",
    category: "Automation",
    status: "Live",
    role: "Automation developer",
    focus: "Email parsing, duplicate checks, workflow payloads",
    result: "Turns sanitized quote-request emails into validated, workflow-ready records.",
    tech: ["JavaScript", "HTML", "CSS", "Node.js", "GitHub Actions", "GitHub Pages"],
    description:
      "A public, sanitized automation demo that parses inbound RFQ emails, checks for duplicates, matches mock business records, scores confidence, and prepares a clean ERP-style workflow payload.",
    liveUrl: "https://jerrizzy001.github.io/Email-to-ERP-system/",
    repoUrl: "https://github.com/Jerrizzy001/Email-to-ERP-system",
    image: "/projects/email-to-erp.jpg",
    imageAlt:
      "Email-to-ERP dashboard showing a sample RFQ email, parsed fields, and workflow payload",
    details: [
      "Parses sanitized email and attachment evidence into normalized RFQ fields such as customer, part, quantity, due date, and shipping method.",
      "Builds a deterministic fingerprint for duplicate detection before a quote request can move further into the workflow.",
      "Matches extracted values against fictional customer, part, and carrier records, then reports a confidence score for review.",
      "Keeps the public demo safe with mock data, a credential-pattern scan, automated tests, and a preview-only payload instead of a production write.",
    ],
  },
  {
    id: "taskflow",
    title: "Taskflow",
    subtitle: "Privacy-first AI goal planner",
    category: "Mobile",
    status: "Active",
    role: "Mobile app developer",
    focus: "AI planning, local data, notifications",
    result: "Turns large goals into scheduled small steps with private, on-device progress.",
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
      "A mobile goal-planning app that breaks meaningful goals into smaller actions, schedules reminders, tracks momentum, and keeps personal planning data local by default.",
    liveUrl: null,
    repoUrl: "https://github.com/Jerrizzy001/taskflow",
    image: "/projects/taskflow.png",
    imageAlt:
      "Taskflow mobile Goals screen showing active goals, progress, and suggested next steps",
    details: [
      "Uses Expo Router to connect Today, Goals, Progress, Affirmations, Profile, and focused reminder screens into one mobile workflow.",
      "Stores goals, progress, reminders, and AI-generated plans on-device with Expo SQLite while keeping the user's API key in SecureStore.",
      "Schedules local notifications that return the user to the right goal and next action instead of stopping at a static task list.",
      "Keeps shared app state predictable with Zustand and uses reusable theme, card, motion, and accessibility patterns across the interface.",
    ],
  },
  {
    id: "jarvis",
    title: "JARVIS",
    subtitle: "Governed local-first AI room OS",
    category: "AI Systems",
    status: "Active",
    role: "Co-developer",
    focus: "Human approval, local AI, auditability",
    result: "Keeps every state-changing AI action behind one explicit human approval gate.",
    tech: ["Next.js", "React", "TypeScript", "Zod", "SQLite", "Vitest", "MCP", "Local AI"],
    description:
      "A collaborative local-first AI operating environment that can inspect projects, work with room and desktop capabilities, and propose actions while keeping execution under human control.",
    liveUrl: null,
    repoUrl: "https://github.com/Jerrizzy001/JARVIS",
    image: "/projects/jarvis.jpg",
    imageAlt:
      "JARVIS Working Cockpit showing chat, Human Gate approval, room state, cost, and activity panels",
    details: [
      "Routes every state-changing capability through a Human Gate so agents can propose work but cannot silently execute it.",
      "Uses local-first model routing, optional voice and vision capabilities, and fail-closed policies for features that are not explicitly enabled.",
      "Validates system contracts with Zod and records metadata-only audit events so decisions and execution paths remain inspectable.",
      "Tests governance invariants with Vitest and exposes a local MCP gateway for governed reads and proposals without adding another mutation path.",
    ],
  },
];

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

export default function ProjectPage() {
  const [activeProject, setActiveProject] = useState(null);
  const modalTitleId = useId();
  const modalDescriptionId = useId();

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

        <section className="relative z-10 mb-10 grid gap-6 border-b border-slate-950/10 pb-8 dark:border-white/10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
          <div>
            <p className="mb-4 max-w-max rounded-full border border-slate-950/10 bg-white/70 px-3 py-1 font-mono text-xs uppercase tracking-wide text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              Selected technical builds
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 [text-wrap:balance] dark:text-white sm:text-5xl lg:text-6xl">
              Projects
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 [text-wrap:pretty] dark:text-slate-300 sm:text-lg">
              Practical apps and analysis work, presented with the decisions that matter:
              what I built, how it works, and where to inspect the code.
            </p>
          </div>

          <div className="border-t border-slate-950/10 pt-4 text-sm leading-6 text-slate-700 dark:border-white/10 dark:text-slate-300 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <p className="font-semibold text-slate-950 dark:text-white">Current work</p>
            <p>
              AI engineering for manual workflows, full-stack interfaces, and software
              that reduces handoffs.
            </p>
          </div>
        </section>

        <section
          className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-2"
          aria-label="Project list"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isFeatured={index === 0}
              onView={() => setActiveProject(project)}
            />
          ))}
        </section>

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

function ProjectCard({ project, onView, index, isFeatured }) {
  const visibleTech = project.tech.slice(0, isFeatured ? 6 : 4);
  const remainingTech = project.tech.length - visibleTech.length;

  return (
    <article
      className={`motion-card group overflow-hidden rounded-lg border border-slate-950/10 bg-white/88 transition-colors hover:border-slate-950/25 dark:border-white/10 dark:bg-slate-950/72 dark:hover:border-white/25 ${
        isFeatured ? "md:col-span-2 lg:grid lg:grid-cols-[1.1fr_0.9fr]" : ""
      }`}
    >
      <div className={`relative bg-slate-950 ${isFeatured ? "h-64 sm:h-72 md:h-80 lg:h-auto lg:min-h-full" : "h-52 sm:h-60"}`}>
        <CardImage project={project} index={index} />
      </div>

      <div className={`flex flex-col p-5 sm:p-6 ${isFeatured ? "lg:p-8" : ""}`}>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge className={categoryTone[project.category]}>{project.category}</Badge>
          <Badge>{project.status}</Badge>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {project.subtitle}
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 [text-wrap:balance] dark:text-white sm:text-3xl">
            {project.title}
          </h2>
        </div>

        <p className="text-sm leading-6 text-slate-700 [text-wrap:pretty] dark:text-slate-300 sm:text-base">
          {project.description}
        </p>

        <dl className="mt-5 grid gap-3 border-y border-slate-950/10 py-4 text-sm dark:border-white/10 sm:grid-cols-2">
          <MetaItem label="Role" value={project.role} />
          <MetaItem label="Focus" value={project.focus} />
        </dl>

        <p className="mt-4 text-sm font-medium leading-6 text-slate-900 dark:text-slate-100">
          {project.result}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-950/10 bg-slate-50 px-2.5 py-1 font-mono text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
          {remainingTech > 0 && (
            <span className="rounded-full border border-slate-950/10 px-2.5 py-1 font-mono text-xs font-medium text-slate-600 dark:border-white/10 dark:text-slate-400">
              +{remainingTech} more
            </span>
          )}
        </div>

        <div className="mt-6 grid gap-3 min-[420px]:flex min-[420px]:flex-wrap">
          <button
            type="button"
            onClick={onView}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-contrast transition hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 min-[420px]:w-auto"
          >
            Open details
            <FaArrowRight size={13} aria-hidden="true" />
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-slate-950/15 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-950/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/15 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-950 min-[420px]:w-auto"
            >
              <FaExternalLinkAlt size={13} aria-hidden="true" />
              Open live app
            </a>
          )}
        </div>
      </div>
    </article>
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
              Build notes
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
                Project facts
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

function CardImage({ project, index }) {
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

  const sizes =
    index === 0
      ? "(min-width: 1280px) 672px, (min-width: 1024px) 54vw, (min-width: 768px) calc(100vw - 48px), calc(100vw - 32px)"
      : "(min-width: 1280px) 592px, (min-width: 1024px) 48vw, (min-width: 768px) calc((100vw - 68px) / 2), calc(100vw - 32px)";

  return (
    <Image
      src={project.image}
      alt={project.imageAlt || `${project.title} project preview`}
      fill
      className="object-contain p-2"
      sizes={sizes}
      priority={index === 0}
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
