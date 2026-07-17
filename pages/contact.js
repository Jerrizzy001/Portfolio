import Navbar from "../components/Navbar";
import PageMeta from "../components/PageMeta";
import {
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
} from "react-icons/fa";

const contacts = [
  {
    label: "Email",
    value: "jerrynwachi37@gmail.com",
    href: "mailto:jerrynwachi37@gmail.com",
    icon: <FaEnvelope size={26} />,
    note: "Fastest way to reach me",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jerry-nwachi-398a93258",
    href: "https://www.linkedin.com/in/jerry-nwachi-398a93258",
    icon: <FaLinkedin size={26} />,
    note: "Good for roles and intros",
  },
  {
    label: "GitHub",
    value: "github.com/Jerrizzy001",
    href: "https://github.com/Jerrizzy001",
    icon: <FaGithub size={26} />,
    note: "Code, experiments, coursework",
  },
  {
    label: "Phone",
    value: "+1 416 624 4315",
    href: "tel:+14166244315",
    icon: <FaPhoneAlt size={24} />,
    note: "Toronto local",
  },
];

const reasons = [
  "AI engineering or software internships and co-ops",
  "Project work and technical collaboration",
  "Questions about workflow automation or anything on this site",
];

export default function Contact() {
  return (
    <div className="min-h-screen page-shell text-black dark:text-white transition-colors duration-300">
      <PageMeta
        title="Contact"
        description="Contact Jerry Nwachi for AI engineering internships, project work, technical collaboration, or software automation roles."
        path="/contact"
        image="/profile.jpg"
      />
      <Navbar />

      <main id="main-content" className="safe-x mx-auto max-w-5xl pb-16 pt-28 sm:pt-32">
        {/* HEADER */}
        <header className="mb-10 border-b border-slate-950/10 pb-8 dark:border-white/10">
          <p className="mb-4 max-w-max rounded-full border border-slate-950/10 bg-white/70 px-3 py-1 font-mono text-xs uppercase tracking-wide text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            Contact
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 [text-wrap:balance] dark:text-white sm:text-4xl md:text-5xl">
            Contact me
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 [text-wrap:pretty] dark:text-slate-300 sm:text-lg">
            I'm open to AI engineering internships, project work, and technical
            collaboration. Email or LinkedIn gets the fastest reply.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          {/* CONTACT CARDS */}
          <section
            aria-label="Contact channels"
            className="grid min-w-0 content-start grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="motion-card group flex min-w-0 max-w-full items-center gap-4 rounded-lg border border-slate-950/10 bg-white/88 p-5 transition-colors hover:border-slate-950/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/10 dark:bg-slate-950/72 dark:hover:border-white/25"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-slate-950/10 bg-slate-50 text-primary dark:border-white/10 dark:bg-white/5">
                  {item.icon}
                </div>

                <div className="min-w-0 flex-1 text-left">
                  <p className="truncate text-base font-semibold text-slate-950 dark:text-white">
                    {item.label}
                  </p>
                  <p className="block max-w-full truncate font-mono text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
                    {item.value}
                  </p>
                  <p className="mt-1 truncate text-xs text-slate-500 dark:text-slate-400">
                    {item.note}
                  </p>
                </div>
              </a>
            ))}
          </section>

          {/* SIDE PANEL */}
          <aside className="h-fit rounded-lg border border-slate-950/10 bg-white/88 p-6 dark:border-white/10 dark:bg-slate-950/72">
            <h2 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
              Good reasons to reach out
            </h2>
            <ul className="mt-4 space-y-3">
              {reasons.map((reason) => (
                <li
                  key={reason}
                  className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950 dark:bg-white" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-slate-950/10 pt-5 dark:border-white/10">
              <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Based in
              </p>
              <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
                Toronto, Ontario (ET)
              </p>
              <p className="mt-4 font-mono text-[0.7rem] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Fastest reply
              </p>
              <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
                Email or LinkedIn
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
