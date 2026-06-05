import Navbar from "../components/Navbar";
import PageMeta from "../components/PageMeta";
import {
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      label: "GitHub",
      value: "github.com/Jerrizzy001",
      href: "https://github.com/Jerrizzy001",
      icon: <FaGithub size={28} />,
    },
    {
      label: "Email",
      value: "jerrynwachi37@gmail.com",
      href: "mailto:jerrynwachi37@gmail.com",
      icon: <FaEnvelope size={28} />,
    },
    {
      label: "Phone",
      value: "+1 416 624 4315",
      href: "tel:+14166244315",
      icon: <FaPhoneAlt size={26} />,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/jerry-nwachi-398a93258",
      href: "https://www.linkedin.com/in/jerry-nwachi-398a93258",
      icon: <FaLinkedin size={28} />,
    },
  ];

  return (
    <div className="min-h-screen page-shell text-black dark:text-white transition-colors duration-300">
      <PageMeta
        title="Contact"
        description="Contact Jerry Nwachi for internships, project work, technical collaboration, or software and AI automation roles."
        path="/contact"
        image="/profile.jpg"
      />
      <Navbar />

      <main id="main-content" className="safe-x pt-28 sm:pt-32 max-w-4xl mx-auto text-center pb-16">
        <h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6"
        >
          Contact me
        </h1>

        <p
          className="mx-auto mb-10 max-w-2xl text-base sm:text-lg text-slate-700 dark:text-slate-300 sm:mb-14"
        >
          For internships, project work, or technical collaboration, email me or connect on LinkedIn.
          I usually respond fastest there.
        </p>

        <div className="grid min-w-0 grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex min-w-0 max-w-full items-center gap-3 overflow-hidden p-4 sm:gap-4 sm:p-6 rounded-lg
                         surface-panel backdrop-blur
                         border shadow-sm transition hover:-translate-y-1 hover:shadow-md active:translate-y-0"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-indigo-600 dark:text-indigo-400">
                {item.icon}
              </div>

              <div className="min-w-0 flex-1 text-left">
                <p className="truncate text-base font-semibold sm:text-lg">{item.label}</p>
                <p className="block max-w-full truncate font-mono text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
