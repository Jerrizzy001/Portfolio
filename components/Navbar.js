import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

function useMounted() {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const isDark = mounted && resolvedTheme === 'dark';
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');
  const themeTitle = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  const themeIcon = mounted ? (
    isDark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />
  ) : (
    <span className="block h-5 w-5" aria-hidden="true" />
  );

  return (
    <nav className="fixed w-full surface-panel backdrop-blur-md border-b shadow-sm z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex min-h-11 items-center gap-2 group">
          <span className="text-xl font-extrabold text-gray-950 dark:text-white tracking-tight">
            Jerrizzy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 dark:text-white font-medium">
          <Link
            href="/"
            className={`inline-flex min-h-11 items-center px-1 hover:text-blue-500 dark:hover:text-indigo-400 transition ${
              router.pathname === '/' ? 'text-blue-500 dark:text-indigo-400' : ''
            }`}
          >
            Home
          </Link>

          <Link
            href="/project"
            className={`inline-flex min-h-11 items-center px-1 hover:text-blue-500 dark:hover:text-indigo-400 transition ${
              router.pathname === '/project' ? 'text-blue-500 dark:text-indigo-400' : ''
            }`}
          >
            Projects
          </Link>

          <Link
            href="/skills"
            className={`inline-flex min-h-11 items-center px-1 hover:text-blue-500 dark:hover:text-indigo-400 transition ${
              router.pathname === '/skills' ? 'text-blue-500 dark:text-indigo-400' : ''
            }`}
          >
            Skills
          </Link>

          <Link
            href="/about"
            className={`inline-flex min-h-11 items-center px-1 hover:text-blue-500 dark:hover:text-indigo-400 transition ${
              router.pathname === '/about' ? 'text-blue-500 dark:text-indigo-400' : ''
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`inline-flex min-h-11 items-center px-1 hover:text-blue-500 dark:hover:text-indigo-400 transition ${
              router.pathname === '/contact' ? 'text-blue-500 dark:text-indigo-400' : ''
            }`}
          >
            Contact
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 inline-flex min-h-11 min-w-11 items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition disabled:opacity-70"
            aria-label="Toggle theme"
            title={themeTitle}
            disabled={!mounted}
          >
            {themeIcon}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition disabled:opacity-70"
            aria-label="Toggle theme"
            title={themeTitle}
            disabled={!mounted}
          >
            {themeIcon}
          </button>

          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden surface-panel backdrop-blur-md border-t px-4 pb-4 flex flex-col space-y-4 text-gray-800 dark:text-white">
          <Link
            href="/"
            onClick={closeMenu}
            className={`flex min-h-11 items-center py-2 ${
              router.pathname === '/' ? 'text-blue-500 dark:text-indigo-400 font-semibold' : ''
            }`}
          >
            Home
          </Link>

          <Link
            href="/project"
            onClick={closeMenu}
            className={`flex min-h-11 items-center py-2 ${
              router.pathname === '/project' ? 'text-blue-500 dark:text-indigo-400 font-semibold' : ''
            }`}
          >
            Projects
          </Link>

          <Link
            href="/skills"
            onClick={closeMenu}
            className={`flex min-h-11 items-center py-2 ${
              router.pathname === '/skills' ? 'text-blue-500 dark:text-indigo-400 font-semibold' : ''
            }`}
          >
            Skills
          </Link>

          <Link
            href="/about"
            onClick={closeMenu}
            className={`flex min-h-11 items-center py-2 ${
              router.pathname === '/about' ? 'text-blue-500 dark:text-indigo-400 font-semibold' : ''
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className={`flex min-h-11 items-center py-2 ${
              router.pathname === '/contact'
                ? 'text-blue-500 dark:text-indigo-400 font-semibold'
                : ''
            }`}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
