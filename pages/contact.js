import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
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
    <div className="min-h-screen bg-white text-black dark:bg-gradient-to-br dark:from-black dark:via-purple-900 dark:to-indigo-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="pt-32 px-6 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Contact Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-14"
        >
          Want to collaborate, connect, or just say hi?  
          You can reach me through any of the platforms below.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2">
          {contacts.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-4 p-6 rounded-2xl
                         bg-white/80 dark:bg-black/40 backdrop-blur
                         border border-white/10 shadow-lg hover:shadow-xl transition"
            >
              <div className="text-indigo-600 dark:text-indigo-400">
                {item.icon}
              </div>

              <div className="text-left">
                <p className="font-semibold text-lg">{item.label}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 break-all">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </main>
    </div>
  );
}
