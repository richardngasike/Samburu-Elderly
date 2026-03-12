import { useState } from 'react';

const images = [
  { src: '/images/elder.png', alt: 'Elderly woman receiving food donation' },
  { src: '/images/community.jpg', alt: 'Community gathering in Maralal' },
  { src: '/images/water.jpg', alt: 'Water distribution activity' },
  { src: '/images/birthday.jpg', alt: 'Birthday gifts for elderly' },
  { src: '/images/blanket.jpeg', alt: 'Blanket distribution event' },
  { src: '/images/volunteer.avif', alt: 'World Elder Abuse Day event' },
  { src: '/images/volunteer.jpeg', alt: 'Volunteer team at work' },
  { src: '/images/gallery1.jpg', alt: 'Elderly person receiving care' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="gallery section-padding" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="section-label">Photo Gallery</span>
          <h2 className="section-title">Moments of Impact</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A glimpse into the lives we touch and the communities we serve across Samburu County.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <div key={i} className="gallery-item" onClick={() => setLightbox(i)}>
              <img className="gallery-item-img" src={img.src} alt={img.alt} />
              <div className="gallery-item-overlay">
                <span className="gallery-item-overlay-icon">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <button className="gallery-lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
