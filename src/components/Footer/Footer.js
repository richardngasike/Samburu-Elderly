import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">🤲</div>
                <div>
                  <div className="footer-logo-name">Samburu Elderly<br />Support Initiative</div>
                  <div className="footer-logo-sub">Maralal, Kenya</div>
                </div>
              </div>
              <p className="footer-tagline">
                A refuge of hope for Samburu's vulnerable nomadic elderly persons — serving with dignity, compassion, and commitment.
              </p>
              <div className="footer-cert">
                Reg: SBU/C/CBO/00953/2023
              </div>
              <div className="footer-social">
                <a href="#" className="footer-social-link" aria-label="Facebook">f</a>
                <a href="#" className="footer-social-link" aria-label="Twitter">t</a>
                <a href="#" className="footer-social-link" aria-label="WhatsApp">W</a>
                <a href="#" className="footer-social-link" aria-label="Instagram">i</a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <div className="footer-col-title">Quick Links</div>
              <div className="footer-links">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About Us' },
                  { href: '/programs', label: 'Our Programs' },
                  { href: '/gallery', label: 'Gallery' },
                  { href: '/donate', label: 'Donate' },
                  { href: '/contact', label: 'Contact Us' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Programs */}
            <div>
              <div className="footer-col-title">Our Programs</div>
              <div className="footer-links">
                {[
                  'Medical & Psychosocial',
                  'Food Distribution',
                  'Water & WASH',
                  'Social Inclusion',
                  'Livelihood Support',
                  'Spiritual Care',
                ].map((p) => (
                  <Link key={p} href="/programs" className="footer-link">
                    {p}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="footer-col-title">Contact</div>
              <div className="footer-contact-items">
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">📍</span>
                  <span>P.O Box 60-20600, Maralal, Kirisia Division, Samburu County, Kenya</span>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">📞</span>
                  <span>+254 719 775 166</span>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">✉️</span>
                  <span>samburufortheelderly@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <span className="footer-bottom-copy">
              © {year} Samburu Elderly Support Initiative. All rights reserved. Developed by Richard Ngasike
            </span>
            <div className="footer-bottom-links">
              <Link href="/privacy" className="footer-bottom-link">Privacy Policy</Link>
              <Link href="/terms" className="footer-bottom-link">Terms of Use</Link>
              <Link href="/contact" className="footer-bottom-link">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
