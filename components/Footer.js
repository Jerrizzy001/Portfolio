import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FiGithub, FiLinkedin, FiMail, FiMoon, FiSun } from 'react-icons/fi';

const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export default function Footer() {
  const mounted = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = mounted && resolvedTheme === 'dark';
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <div>
          <Link href="/" className="footer-name">Jerry Nwachi <span> / Jerrizzy</span></Link>
          <p>Custom software. Connected workflows. Useful tools.</p>
          <small>© 2026 Jerry Nwachi · Toronto · Working remotely worldwide</small>
        </div>
        <div className="footer-actions">
          <Link href="/skills" className="footer-text-link">Technical skills</Link>
          <a href="https://github.com/Jerrizzy001" target="_blank" rel="noreferrer" aria-label="Jerry on GitHub"><FiGithub size={19} aria-hidden="true" /></a>
          <a href="https://www.linkedin.com/in/jerry-nwachi-398a93258" target="_blank" rel="noreferrer" aria-label="Jerry on LinkedIn"><FiLinkedin size={19} aria-hidden="true" /></a>
          <a href="mailto:jerrynwachi37@gmail.com" aria-label="Email Jerry"><FiMail size={19} aria-hidden="true" /></a>
          <button type="button" disabled={!mounted} onClick={() => setTheme(isDark ? 'light' : 'dark')} aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`} title={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
            {isDark ? <FiSun size={19} aria-hidden="true" /> : <FiMoon size={19} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </footer>
  );
}
