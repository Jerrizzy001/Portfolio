import Navbar from "../components/Navbar";
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
      <Navbar />

      <main className="safe-x pt-28 sm:pt-32 max-w-4xl mx-auto text-center pb-16">
        <h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6"
        >
          Contact me
        </h1>

        <p
          className="mx-auto mb-10 max-w-2xl text-base sm:text-lg text-gray-700 dark:text-gray-300 sm:mb-14"
        >
          For internships, project work, or technical collaboration, email me or connect on LinkedIn.
          I usually respond fastest there.
        </p>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 sm:p-6 rounded-lg
                         surface-panel backdrop-blur
                         border shadow-lg transition hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
            >
              <div className="text-indigo-600 dark:text-indigo-400 shrink-0">
                {item.icon}
              </div>

              <div className="text-left min-w-0">
                <p className="font-semibold text-base sm:text-lg">{item.label}</p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
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
