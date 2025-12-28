import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full bg-white dark:bg-black shadow-md z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-indigo-400 transition"
        >
          Jerry Nwachi
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 dark:text-white font-medium">
          <Link
            href="/"
            className={`hover:text-blue-500 dark:hover:text-indigo-400 transition ${
              router.pathname === '/' ? 'text-blue-500 dark:text-indigo-400' : ''
            }`}
          >
            Home
          </Link>

          <Link
            href="/project"
            className={`hover:text-blue-500 dark:hover:text-indigo-400 transition ${
              router.pathname === '/project' ? 'text-blue-500 dark:text-indigo-400' : ''
            }`}
          >
            Projects
          </Link>

          <Link
            href="/skills"
            className={`hover:text-blue-500 dark:hover:text-indigo-400 transition ${
              router.pathname === '/skills' ? 'text-blue-500 dark:text-indigo-400' : ''
            }`}
          >
            Skills
          </Link>

          <Link
            href="/about"
            className={`hover:text-blue-500 dark:hover:text-indigo-400 transition ${
              router.pathname === '/about' ? 'text-blue-500 dark:text-indigo-400' : ''
            }`}
          >
            About
          </Link>

          {/* ✅ NEW: Contact */}
          <Link
            href="/contact"
            className={`hover:text-blue-500 dark:hover:text-indigo-400 transition ${
              router.pathname === '/contact' ? 'text-blue-500 dark:text-indigo-400' : ''
            }`}
          >
            Contact
          </Link>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="ml-4 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
            </button>
          )}

          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t dark:border-gray-800 px-4 pb-4 flex flex-col space-y-4 text-gray-800 dark:text-white">
          <Link
            href="/"
            onClick={closeMenu}
            className={`py-2 ${
              router.pathname === '/' ? 'text-blue-500 dark:text-indigo-400 font-semibold' : ''
            }`}
          >
            Home
          </Link>

          <Link
            href="/project"
            onClick={closeMenu}
            className={`py-2 ${
              router.pathname === '/project' ? 'text-blue-500 dark:text-indigo-400 font-semibold' : ''
            }`}
          >
            Projects
          </Link>

          <Link
            href="/skills"
            onClick={closeMenu}
            className={`py-2 ${
              router.pathname === '/skills' ? 'text-blue-500 dark:text-indigo-400 font-semibold' : ''
            }`}
          >
            Skills
          </Link>

          <Link
            href="/about"
            onClick={closeMenu}
            className={`py-2 ${
              router.pathname === '/about' ? 'text-blue-500 dark:text-indigo-400 font-semibold' : ''
            }`}
          >
            About
          </Link>

          {/* ✅ NEW: Contact */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className={`py-2 ${
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
