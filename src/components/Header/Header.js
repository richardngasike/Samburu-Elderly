import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (!e.target.closest('.header')) setMenuOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [menuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/programs', label: 'Programs' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="header-nav">

          {/* Logo */}
          <Link href="/" className="header-logo">
            <div className="header-logo-placeholder">
              {/* Replace the img src with your actual logo file in /public/images/logo.png */}
              <img
                src="/images/logo.png"
                alt="Samburu Elderly Support Initiative Logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '🤲';
                }}
              />
            </div>
            <div className="header-logo-text">
              <span className="header-logo-name">Samburu Elderly Support Initiative</span>
              <span className="header-logo-tagline">Maralal, Kenya</span>
            </div>
          </Link>

          {/* Desktop Center Nav Links */}
          <div className="header-nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`header-nav-link ${router.pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right: Login + Donate */}
          <div className="header-actions">
            <Link href="/contact" className="header-login-btn">
              Contact Us
            </Link>
            <Link href="/donate" className="header-signup-btn">
              Donate Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`header-menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      <div className={`header-mobile-nav ${menuOpen ? 'open' : ''}`}>
        <div className="header-mobile-nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`header-mobile-nav-link ${router.pathname === link.href ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="header-mobile-actions">
          <Link href="/contact" className="header-login-btn">
            Contact Us
          </Link>
          <Link href="/donate" className="header-signup-btn">
            Donate Now
          </Link>
        </div>
      </div>
    </header>
  );
}