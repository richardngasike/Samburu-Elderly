import Link from 'next/link';
import { FaMapMarkerAlt, FaClipboardList, FaHandshake, FaHome } from 'react-icons/fa';

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Images */}
          <div className="about-images">
            <div className="about-img-main">
              <img src="/images/hope.jpeg" alt="Elderly woman in Samburu community" />
            </div>
            <div className="about-img-secondary">
              <img src="/images/hope2.jpeg" alt="Community volunteers serving elders" />
            </div>
            <div className="about-badge-float">
              <span className="about-badge-float-num">2023</span>
              <span className="about-badge-float-text">Est. Maralal</span>
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">
              A Refuge of Hope for<br />Samburu's Elderly
            </h2>

            <div className="about-mission-vision">
              <div className="about-mv-card">
                <div className="about-mv-title">Our Mission</div>
                <div className="about-mv-text">To assist the vulnerable elderly live comfortably, safely and independently.</div>
              </div>
              <div className="about-mv-card">
                <div className="about-mv-title">Our Vision</div>
                <div className="about-mv-text">Reach out to the elderly in an all-inclusive manner across Samburu County.</div>
              </div>
            </div>

            <p className="about-description">
              Samburu Elderly Support Initiative is a need-oriented, registered community-based organization
              dedicated to addressing the social, economic, spiritual, and individual needs of vulnerable nomadic
              pastoralist elderly persons in Samburu County.
            </p>

            <div className="about-details">
              <div className="about-detail-item">
                <span className="about-detail-icon">
                  <FaMapMarkerAlt />
                </span>
                <div className="about-detail-text">
                  <strong>Location</strong>
                  <span>Maralal Municipality, Kirisia Division, Samburu Central Sub County</span>
                </div>
              </div>

              <div className="about-detail-item">
                <span className="about-detail-icon">
                  <FaClipboardList />
                </span>
                <div className="about-detail-text">
                  <strong>Registration</strong>
                  <span>CBO Certificate No. SBU/C/CBO/00953/2023 — Ministry of Culture, Gender & Sports</span>
                </div>
              </div>

              <div className="about-detail-item">
                <span className="about-detail-icon">
                  <FaHandshake />
                </span>
                <div className="about-detail-text">
                  <strong>Core Value</strong>
                  <span>Working in partnership to build trust through responsive actions and honest relationships</span>
                </div>
              </div>

              <div className="about-detail-item">
                <span className="about-detail-icon">
                  <FaHome />
                </span>
                <div className="about-detail-text">
                  <strong>Approach</strong>
                  <span>Community Based Rehabilitation (CBR) addressing needs at individual, household & community levels</span>
                </div>
              </div>
            </div>

            <div className="about-actions">
              <Link href="/about" className="btn-primary">Learn More</Link>
              <Link href="/contact" className="btn-secondary">Get Involved</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}