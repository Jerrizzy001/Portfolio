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
  const isCurrent = (href) => router.pathname === href;
  const themeIcon = mounted ? (
    isDark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />
  ) : (
    <span className="block h-5 w-5" aria-hidden="true" />
  );

  return (
    <header className="site-nav fixed inset-x-0 top-0 surface-panel backdrop-blur-md border-b shadow-sm z-50 transition-colors duration-300">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <nav aria-label="Primary">
        <div className="safe-x max-w-7xl mx-auto py-4 flex justify-between items-center">
          <Link href="/" className="flex min-h-11 items-center gap-2 group">
            <span className="font-display text-xl font-extrabold text-gray-950 dark:text-white tracking-tight">
              Jerrizzy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-slate-700 dark:text-white font-medium">
            <Link
              href="/"
              aria-current={isCurrent('/') ? 'page' : undefined}
              className={`inline-flex min-h-11 items-center px-1 hover:text-sky-700 dark:hover:text-sky-300 transition ${
                isCurrent('/') ? 'text-sky-700 dark:text-sky-300' : ''
              }`}
            >
              Home
            </Link>

            <Link
              href="/project"
              aria-current={isCurrent('/project') ? 'page' : undefined}
              className={`inline-flex min-h-11 items-center px-1 hover:text-sky-700 dark:hover:text-sky-300 transition ${
                isCurrent('/project') ? 'text-sky-700 dark:text-sky-300' : ''
              }`}
            >
              Projects
            </Link>

            <Link
              href="/skills"
              aria-current={isCurrent('/skills') ? 'page' : undefined}
              className={`inline-flex min-h-11 items-center px-1 hover:text-sky-700 dark:hover:text-sky-300 transition ${
                isCurrent('/skills') ? 'text-sky-700 dark:text-sky-300' : ''
              }`}
            >
              Skills
            </Link>

            <Link
              href="/about"
              aria-current={isCurrent('/about') ? 'page' : undefined}
              className={`inline-flex min-h-11 items-center px-1 hover:text-sky-700 dark:hover:text-sky-300 transition ${
                isCurrent('/about') ? 'text-sky-700 dark:text-sky-300' : ''
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              aria-current={isCurrent('/contact') ? 'page' : undefined}
              className={`inline-flex min-h-11 items-center px-1 hover:text-sky-700 dark:hover:text-sky-300 transition ${
                isCurrent('/contact') ? 'text-sky-700 dark:text-sky-300' : ''
              }`}
            >
              Contact
            </Link>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="ml-4 inline-flex min-h-11 min-w-11 items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition disabled:opacity-70"
              aria-label={themeTitle}
              aria-pressed={isDark}
              title={themeTitle}
              disabled={!mounted}
            >
              {themeIcon}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition disabled:opacity-70"
              aria-label={themeTitle}
              aria-pressed={isDark}
              title={themeTitle}
              disabled={!mounted}
            >
              {themeIcon}
            </button>

            <button
              type="button"
              onClick={toggleMenu}
              aria-controls="primary-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            id="primary-menu"
            className="safe-x md:hidden surface-panel backdrop-blur-md border-t pb-4 flex flex-col space-y-2 text-slate-800 dark:text-white"
          >
            <Link
              href="/"
              onClick={closeMenu}
              aria-current={isCurrent('/') ? 'page' : undefined}
              className={`flex min-h-11 items-center py-2 ${
                isCurrent('/') ? 'text-sky-700 dark:text-sky-300 font-semibold' : ''
              }`}
            >
              Home
            </Link>

            <Link
              href="/project"
              onClick={closeMenu}
              aria-current={isCurrent('/project') ? 'page' : undefined}
              className={`flex min-h-11 items-center py-2 ${
                isCurrent('/project') ? 'text-sky-700 dark:text-sky-300 font-semibold' : ''
              }`}
            >
              Projects
            </Link>

            <Link
              href="/skills"
              onClick={closeMenu}
              aria-current={isCurrent('/skills') ? 'page' : undefined}
              className={`flex min-h-11 items-center py-2 ${
                isCurrent('/skills') ? 'text-sky-700 dark:text-sky-300 font-semibold' : ''
              }`}
            >
              Skills
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              aria-current={isCurrent('/about') ? 'page' : undefined}
              className={`flex min-h-11 items-center py-2 ${
                isCurrent('/about') ? 'text-sky-700 dark:text-sky-300 font-semibold' : ''
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              aria-current={isCurrent('/contact') ? 'page' : undefined}
              className={`flex min-h-11 items-center py-2 ${
                isCurrent('/contact')
                  ? 'text-sky-700 dark:text-sky-300 font-semibold'
                  : ''
              }`}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
