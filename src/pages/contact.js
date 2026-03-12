import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to send message');
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Samburu Elderly Support Initiative</title>
        <meta name="description" content="Get in touch with Samburu Elderly Support Initiative. We'd love to hear from you." />
      </Head>

      <Header />

      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="breadcrumb">
              <a href="/">Home</a>
              <span className="breadcrumb-sep">›</span>
              <span>Contact</span>
            </div>
            <h1>Contact Us</h1>
            <p>We'd love to hear from you — reach out to volunteer, partner, or learn more about our work.</p>
          </div>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <div className="contact-info">
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title" style={{ marginBottom: 8 }}>We'd Love to<br />Hear From You</h2>
              <p className="section-subtitle" style={{ marginBottom: 36 }}>
                Whether you want to donate, volunteer, partner, or simply learn more about our work in Samburu County — our doors are always open.
              </p>

              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-info-icon">📍</div>
                  <div className="contact-info-text">
                    <h4>Our Location</h4>
                    <p>Maralal Municipality, Kirisia Division<br />Samburu Central Sub County, Samburu County</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">📮</div>
                  <div className="contact-info-text">
                    <h4>Postal Address</h4>
                    <p>P.O Box 60-20600, Maralal</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">📞</div>
                  <div className="contact-info-text">
                    <h4>Phone</h4>
                    <p><a href="tel:+254719775166">+254 719 775 166</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">✉️</div>
                  <div className="contact-info-text">
                    <h4>Email</h4>
                    <p><a href="mailto:samburufortheelderly@gmail.com">samburufortheelderly@gmail.com</a></p>
                  </div>
                </div>
              </div>

              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63702.12345!2d36.8!3d1.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17857e5c0e5b1bc1%3A0x4e3e1bbf3c5c7b0!2sMaralal%2C%20Kenya!5e0!3m2!1sen!2ske!4v1699999999999"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Maralal, Samburu County"
                />
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-card">
              {success ? (
                <div className="contact-success">
                  <div className="contact-success-icon">✅</div>
                  <h4>Message Sent!</h4>
                  <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <>
                  <h3>Send Us a Message</h3>
                  <p>Fill the form and we'll respond within 24-48 hours.</p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">Full Name *</label>
                        <input className="form-input" type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                      </div>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">Phone</label>
                        <input className="form-input" type="tel" name="phone" placeholder="+254..." value={form.phone} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: 16 }}>
                      <label className="form-label">Email *</label>
                      <input className="form-input" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                    </div>

                    <div className="form-group" style={{ marginBottom: 16 }}>
                      <label className="form-label">Subject *</label>
                      <select className="form-select" name="subject" value={form.subject} onChange={handleChange} required>
                        <option value="">Select a subject</option>
                        <option value="donation">Donation Enquiry</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="partnership">Partnership</option>
                        <option value="media">Media/Press</option>
                        <option value="general">General Enquiry</option>
                      </select>
                    </div>

                    <div className="form-group" style={{ marginBottom: 20 }}>
                      <label className="form-label">Message *</label>
                      <textarea
                        className="form-input"
                        name="message"
                        rows={5}
                        placeholder="Write your message here..."
                        value={form.message}
                        onChange={handleChange}
                        required
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    {error && (
                      <div style={{ background: '#FFF0F0', border: '1px solid #FFB3B3', borderRadius: 8, padding: '12px 16px', color: '#CC0000', fontSize: '0.875rem', marginBottom: 16 }}>
                        ⚠️ {error}
                      </div>
                    )}

                    <button type="submit" className="donate-submit-btn" disabled={loading} style={{ background: 'var(--primary)' }}>
                      {loading ? '⏳ Sending...' : '📩 Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
