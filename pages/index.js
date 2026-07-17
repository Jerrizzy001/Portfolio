import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import SignalField from "../components/SignalField";
import Navbar from "../components/Navbar";
import PageMeta from "../components/PageMeta";

const glanceItems = [
  {
    label: "Current role",
    value: "AI Engineer Intern at YarlMetal Fabrications Inc.",
  },
  {
    label: "Education",
    value: "Honours Bachelor of Technology, Seneca Polytechnic — expected Aug 2027",
  },
  {
    label: "Focus",
    value: "AI workflow automation, full-stack web apps, and data systems",
  },
  {
    label: "Previously",
    value: "Junior IT Support Helpdesk (contract), City of Markham",
  },
];

const featuredProjects = [
  {
    title: "Email-to-ERP Automation",
    category: "Automation",
    result:
      "Turns a quote-request email into a clean business record someone can review.",
  },
  {
    title: "JARVIS",
    category: "AI Systems",
    result:
      "A bedroom AI assistant that listens, helps with projects, and asks before it acts.",
  },
  {
    title: "Taskflow",
    category: "Mobile",
    result:
      "A goal-planning app that breaks overwhelming goals into steps you can start today.",
  },
];

const stackChips = [
  "Python",
  "JavaScript / TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "FastAPI",
  "MySQL",
  "MongoDB",
];

export default function Home() {
  return (
    <div className="min-h-screen page-shell text-black dark:text-white transition-colors duration-300">
      <PageMeta
        title="Jerry Nwachi | AI Engineer"
        description="Jerry Nwachi is an AI Engineer Intern at YarlMetal Fabrications and a Software Development student at Seneca Polytechnic in Toronto, building AI-powered automation, web apps, and data systems."
        path="/"
        image="/profile.jpg"
      />
      <Navbar />

      <main id="main-content">
        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          <SignalField density="dense" className="z-0" />

          <div className="safe-x relative z-10 mx-auto grid max-w-7xl gap-10 pb-16 pt-28 sm:pt-32 lg:min-h-[calc(100svh-1px)] lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-center lg:gap-14 lg:pb-20">
            <div>
              <p className="mb-4 max-w-max rounded-full border border-slate-950/10 bg-white/70 px-3 py-1 font-mono text-xs uppercase tracking-wide text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                AI Engineer · Toronto, ON
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-slate-950 [text-wrap:balance] dark:text-white sm:text-5xl lg:text-6xl">
                Jerry Nwachi
              </h1>

              <p className="mt-4 max-w-2xl text-lg font-medium leading-7 text-slate-900 dark:text-slate-100">
                AI Engineer Intern at YarlMetal Fabrications · Software
                Development student at Seneca Polytechnic
              </p>

              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700 [text-wrap:pretty] dark:text-slate-300">
                I build practical tools with AI-assisted workflows — web apps,
                data systems, and automation that turn manual work into
                structured, reviewable software.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/project"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-contrast transition hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
                >
                  View projects
                  <FaArrowRight size={13} aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-950/15 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-950/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/15 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-950"
                >
                  Contact me
                </Link>

                <div className="flex items-center gap-1">
                  <a
                    href="https://github.com/Jerrizzy001"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-slate-600 transition hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-slate-300 dark:hover:text-white"
                  >
                    <FaGithub size={22} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jerry-nwachi-398a93258"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-slate-600 transition hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-slate-300"
                  >
                    <FaLinkedin size={22} />
                  </a>
                </div>
              </div>
            </div>

            {/* Profile + current status */}
            <aside className="w-full max-w-sm rounded-lg border border-slate-950/10 bg-white/88 p-5 shadow-sm dark:border-white/10 dark:bg-slate-950/72 lg:justify-self-end">
              <div className="relative mb-5 aspect-square w-full overflow-hidden rounded-md bg-slate-950">
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Jerry Nwachi"
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 384px, calc(100vw - 72px)"
                  className="object-cover"
                  priority
                />
              </div>

              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Currently
              </h2>
              <dl className="mt-3 space-y-3">
                <MetaItem
                  label="Role"
                  value="AI Engineer Intern · YarlMetal Fabrications Inc."
                />
                <MetaItem
                  label="Studying"
                  value="Software Development · Seneca Polytechnic"
                />
                <MetaItem label="Based in" value="Toronto, Ontario" />
              </dl>
            </aside>
          </div>
        </section>

        {/* AT A GLANCE */}
        <section
          aria-label="At a glance"
          className="border-y border-slate-950/10 dark:border-white/10"
        >
          <dl className="safe-x mx-auto grid max-w-7xl gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
            {glanceItems.map((item) => (
              <div key={item.label}>
                <dt className="font-mono text-[0.7rem] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm font-medium leading-6 text-slate-900 dark:text-slate-100">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* SELECTED WORK */}
        <section className="safe-x mx-auto max-w-7xl py-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-4 max-w-max rounded-full border border-slate-950/10 bg-white/70 px-3 py-1 font-mono text-xs uppercase tracking-wide text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                Selected work
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                What I work on
              </h2>
            </div>

            <Link
              href="/project"
              className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-primary transition hover:text-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              All projects
              <FaArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.title}
                href="/project"
                className="motion-card group flex flex-col rounded-lg border border-slate-950/10 bg-white/88 p-5 transition-colors hover:border-slate-950/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/10 dark:bg-slate-950/72 dark:hover:border-white/25"
              >
                <span className="max-w-max rounded-full border border-slate-950/10 bg-slate-50 px-2.5 py-1 font-mono text-[0.7rem] font-semibold uppercase tracking-wide text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                  {project.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-700 [text-wrap:pretty] dark:text-slate-300">
                  {project.result}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Open projects
                  <FaArrowRight
                    size={12}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* HOW I BUILD */}
        <section className="border-t border-slate-950/10 dark:border-white/10">
          <div className="safe-x mx-auto grid max-w-7xl gap-8 py-16 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div>
              <p className="mb-4 max-w-max rounded-full border border-slate-950/10 bg-white/70 px-3 py-1 font-mono text-xs uppercase tracking-wide text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                How I build
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 [text-wrap:balance] dark:text-white sm:text-3xl">
                AI-assisted, reviewable, repeatable.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 [text-wrap:pretty] dark:text-slate-300">
                I use structured prompts, clear interfaces, and tools like
                GitHub Copilot, Claude, and Cursor to move faster — while
                keeping the code readable, verified, and owned by me. The goal
                is always the same: systems that make work easier to repeat.
              </p>
              <Link
                href="/skills"
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-primary transition hover:text-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                See technical skills
                <FaArrowRight size={13} aria-hidden="true" />
              </Link>
            </div>

            <div className="flex flex-wrap content-start gap-2">
              {stackChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-slate-950/10 bg-slate-50 px-2.5 py-1 font-mono text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="border-t border-slate-950/10 dark:border-white/10">
          <div className="safe-x mx-auto flex max-w-7xl flex-col gap-5 py-14 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                Want to work together?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700 dark:text-slate-300">
                If the work fits what your team needs, email or LinkedIn is the
                fastest way to reach me.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-contrast transition hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 sm:w-auto"
            >
              Contact me
              <FaArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

function MetaItem({ label, value }) {
  return (
    <div>
      <dt className="font-mono text-[0.7rem] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium leading-5 text-slate-900 dark:text-slate-100">
        {value}
      </dd>
    </div>
  );
}
