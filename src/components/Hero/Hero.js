import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    bg: '/images/hero3.jpeg',
    
    title: 'Supporting the',
    titleAccent: 'Vulnerable Elderly',
    subtitle: 'Reaching out to nomadic pastoralist elders in Samburu County with food, healthcare, and dignity — because every elder deserves comfort, safety, and independence.',
  },
  {
    bg: '/images/hero2.jpeg',
   
    title: 'Building Hope',
    titleAccent: 'One Elder at a Time',
    subtitle: 'Through psychosocial support, medical care, and community engagement, we ensure our elderly live with purpose and belonging in Maralal and beyond.',
  },
  {
    bg: '/images/hero1.jpeg',
  
    title: 'Your Donation',
    titleAccent: 'Changes Everything',
    subtitle: 'Join hands with Samburu Elderly Support Initiative. Together, we provide blankets, food, water, and love to the most vulnerable members of our community.',
  },
];

const stats = [
  { number: '3+', label: 'Communities Served' },
  { number: '20+', label: 'Elders Supported' },
  { number: '5+', label: 'Open Forums Held' },
  { number: '6', label: 'Water Boosters Provided' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="hero">
      <div className="hero-slides">
        {slides.map((slide, i) => (
          <div key={i} className={`hero-slide ${i === current ? 'active' : ''}`}>
            <div
              className="hero-slide-bg"
              style={{ backgroundImage: `url(${slide.bg})` }}
            />
          </div>
        ))}
      </div>

      <div className="hero-overlay" />
      <div className="hero-overlay-pattern" />

      {/* Content */}
      <div className="hero-content">
        <div className="container">
          <div className="hero-content-inner">
            <h1 className="hero-title">
              {slides[current].title}
              <span>{slides[current].titleAccent}</span>
            </h1>
            <p className="hero-subtitle">{slides[current].subtitle}</p>
            <div className="hero-actions">
              <Link href="/donate" className="hero-btn-primary">
                 Donate Now
              </Link>
              <Link href="/about" className="hero-btn-secondary">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button className="hero-arrow hero-arrow-prev" onClick={prev} aria-label="Previous slide">‹</button>
      <button className="hero-arrow hero-arrow-next" onClick={next} aria-label="Next slide">›</button>

      {/* Scroll */}
      <div className="hero-scroll">
        <span className="hero-scroll-text">Scroll</span>
        <span className="hero-scroll-line"></span>
      </div>

      {/* Stats Bar */}
      <div className="hero-stats">
        <div className="container">
          <div className="hero-stats-inner">
            {stats.map((stat, i) => (
              <div key={i} className="hero-stat-item">
                <span className="hero-stat-number">{stat.number}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
