import { useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar({ overlay = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef(null);
  const { asPath } = useRouter();
  const isCurrent = (href) => asPath === href || asPath.startsWith(`${href}/`);

  function handleKeyDown(event) {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
      menuButton.current?.focus();
    }
  }

  return (
    <header className={`site-nav${overlay ? ' site-nav--overlay' : ''}`} onKeyDown={handleKeyDown}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <nav className="page-container nav-inner" aria-label="Primary">
        <Link href="/" className="brand-lockup" onClick={() => setIsOpen(false)} aria-label="Jerry Nwachi — home">
          <span>Jerry Nwachi</span>
          <span className="brand-subtitle">Jerrizzy</span>
        </Link>
        <div className="desktop-nav">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={href === '/contact' ? 'nav-contact' : 'nav-link'} aria-current={isCurrent(href) ? 'page' : undefined}>{label}</Link>
          ))}
        </div>
        <button ref={menuButton} className="mobile-menu-button" type="button" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-controls="primary-menu" aria-expanded={isOpen}>
          {isOpen ? <FiX size={24} aria-hidden="true" /> : <FiMenu size={24} aria-hidden="true" />}
        </button>
        {isOpen && (
          <div className="mobile-nav" id="primary-menu">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} aria-current={isCurrent(href) ? 'page' : undefined} onClick={() => setIsOpen(false)}>{label}</Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
