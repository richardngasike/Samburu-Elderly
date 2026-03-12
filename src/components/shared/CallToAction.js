import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="cta">
      <div className="cta-bg" />
      <div className="cta-bg-pattern" />
      <div className="container">
        <div className="cta-content">
          <div className="cta-label">Make a Difference Today</div>
          <h2 className="cta-title">
            Help Us Reach More<br />
            <span>Vulnerable Elders</span>
          </h2>
          <p className="cta-subtitle">
            Every shilling you donate brings comfort, dignity, and hope to an elderly person
            in Samburu County who needs it most. Your generosity changes lives.
          </p>
          <div className="cta-actions">
            <Link href="/donate" className="btn-accent">
              ❤️ Donate Now
            </Link>
            <Link href="/contact" className="btn-secondary" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
              Volunteer With Us
            </Link>
          </div>

          <div className="cta-stat-row">
            <div className="cta-stat">
              <span className="cta-stat-num">3+</span>
              <span className="cta-stat-label">Communities</span>
            </div>
            <div className="cta-stat">
              <span className="cta-stat-num">20+</span>
              <span className="cta-stat-label">Elders Helped</span>
            </div>
            <div className="cta-stat">
              <span className="cta-stat-num">100%</span>
              <span className="cta-stat-label">Transparent</span>
            </div>
            <div className="cta-stat">
              <span className="cta-stat-num">2023</span>
              <span className="cta-stat-label">Established</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
