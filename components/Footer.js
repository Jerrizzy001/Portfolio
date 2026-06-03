import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full border-t surface-panel backdrop-blur-sm py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500 dark:text-gray-400">
        <span className="font-medium">© 2026 Jerry Nwachi</span>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Jerrizzy001"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full hover:text-indigo-500 dark:hover:text-indigo-400 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/jerry-nwachi-398a93258"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full hover:text-indigo-500 dark:hover:text-indigo-400 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:jerrynwachi37@gmail.com"
            aria-label="Email"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full hover:text-indigo-500 dark:hover:text-indigo-400 transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
