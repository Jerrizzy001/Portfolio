import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import PageMeta from "../components/PageMeta";

const aboutParagraphs = [
  "I'm Jerry Nwachi, an AI Engineer and Software Development student at Seneca Polytechnic in Toronto. I'm working toward an Honours Bachelor of Technology, expected August 2027. My work spans full-stack apps, data pipelines, REST APIs, and AI-powered automation.",
  "I work mainly with Python and JavaScript: React and Next.js on the frontend, Node.js and FastAPI on the backend, and MySQL or MongoDB for data. I use GitHub Copilot, Claude, Cursor, and structured prompting to move faster while keeping the code reviewable.",
  "Before my current internship, I worked as a Junior IT Support Helpdesk contractor at the City of Markham. I documented technical procedures, gathered requirements from cross-functional teams, and coordinated system deployments. I also hold certifications in Data Visualization with Power BI and Harvard's Introduction to AI with Python.",
  "Right now, I'm an AI Engineer Intern at YarlMetal Fabrications Inc. I design and build AI-powered tools that turn manual operations workflows into structured, reviewable, and automated software systems.",
];

const experience = [
  {
    period: "Current",
    role: "AI Engineer Intern",
    org: "YarlMetal Fabrications Inc.",
    summary:
      "I design and build AI-powered tools that turn manual operations workflows into structured, reviewable, and automated software systems.",
  },
  {
    period: "Previously",
    role: "Junior IT Support Helpdesk (Contract)",
    org: "City of Markham",
    summary:
      "I documented technical procedures, gathered requirements from cross-functional teams, and coordinated system deployments.",
  },
];

const certifications = [
  "Data Visualization with Power BI",
  "Harvard — Introduction to AI with Python",
];

const stackChips = [
  "Python",
  "JavaScript / TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "FastAPI",
  "Django",
  "MySQL",
  "MongoDB",
  "Git",
  "Linux",
  "AWS",
];

export default function About() {
  return (
    <div className="min-h-screen page-shell text-black dark:text-white transition-colors duration-300">
      <PageMeta
        title="About"
        description="About Jerry Nwachi, an AI Engineer Intern at YarlMetal Fabrications and Software Development student at Seneca Polytechnic in Toronto."
        path="/about"
        image="/profile.jpg"
      />
      <Navbar />

      <main id="main-content" className="safe-x mx-auto max-w-5xl pb-16 pt-28">
        {/* HEADER */}
        <section className="grid items-center gap-8 border-b border-slate-950/10 pb-10 dark:border-white/10 sm:grid-cols-[12rem_minmax(0,1fr)]">
          <div className="relative h-44 w-44 overflow-hidden rounded-lg border border-slate-950/10 bg-slate-950 dark:border-white/10 sm:h-48 sm:w-48">
            <Image
              src="/profile.jpg"
              alt="Portrait of Jerry Nwachi"
              fill
              sizes="(min-width: 640px) 192px, 176px"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <p className="mb-4 max-w-max rounded-full border border-slate-950/10 bg-white/70 px-3 py-1 font-mono text-xs uppercase tracking-wide text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              About
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
              Jerry Nwachi
            </h1>
            <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-slate-900 dark:text-slate-100">
              AI Engineer and Software Development student in Toronto.
            </p>
            <p className="mt-2 max-w-2xl text-base leading-7 text-slate-700 [text-wrap:pretty] dark:text-slate-300">
              I turn manual, repetitive work into structured software — and I
              like my tools practical, reviewable, and honest about what they
              do.
            </p>
          </div>
        </section>

        {/* STORY + FACTS */}
        <section className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
              The short version
            </h2>
            <div className="mt-5 space-y-5">
              {aboutParagraphs.map((text) => (
                <p
                  key={text}
                  className="text-base leading-7 text-slate-700 [text-wrap:pretty] dark:text-slate-300"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-lg border border-slate-950/10 bg-white/88 p-5 dark:border-white/10 dark:bg-slate-950/72">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              At a glance
            </h2>
            <dl className="mt-3 space-y-3">
              <MetaItem
                label="Degree"
                value="Honours Bachelor of Technology — Software Development"
              />
              <MetaItem label="School" value="Seneca Polytechnic, Toronto" />
              <MetaItem label="Expected" value="August 2027" />
              <MetaItem
                label="Current role"
                value="AI Engineer Intern · YarlMetal Fabrications Inc."
              />
              <MetaItem
                label="Previously"
                value="IT Support Helpdesk · City of Markham"
              />
            </dl>
          </aside>
        </section>

        {/* EXPERIENCE */}
        <section className="border-t border-slate-950/10 py-12 dark:border-white/10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
            Experience
          </h2>

          <div className="mt-6">
            {experience.map((job) => (
              <article
                key={job.role}
                className="grid gap-2 border-t border-slate-950/10 py-6 first:border-t-0 first:pt-0 dark:border-white/10 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 sm:pt-1">
                  {job.period}
                </p>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
                    {job.role} · {job.org}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700 [text-wrap:pretty] dark:text-slate-300">
                    {job.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION + CERTIFICATIONS */}
        <section className="grid gap-10 border-t border-slate-950/10 py-12 dark:border-white/10 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
              Education
            </h2>
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
              Seneca Polytechnic
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
              Honours Bachelor of Technology — Software Development
            </p>
            <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Expected August 2027 · Toronto
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
              Certifications
            </h2>
            <ul className="mt-5 space-y-3">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950 dark:bg-white" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* HOW I WORK */}
        <section className="border-t border-slate-950/10 py-12 dark:border-white/10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
            How I work
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 [text-wrap:pretty] dark:text-slate-300">
            I plan with AI, then build and verify like an engineer. Structured
            prompts and review loops help me move quickly, but the code that
            ships is readable, tested against real use, and owned by me — not
            by the tool that helped draft it.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {stackChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-950/10 bg-slate-50 px-2.5 py-1 font-mono text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                {chip}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-950/10 pt-10 dark:border-white/10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                Want the rest of the story?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700 dark:text-slate-300">
                The projects page shows what this looks like in practice, or
                reach out directly.
              </p>
            </div>
            <div className="grid gap-3 min-[420px]:flex">
              <Link
                href="/project"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-950/15 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-950/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/15 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-950"
              >
                View projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-contrast transition hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
              >
                Contact me
              </Link>
            </div>
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
