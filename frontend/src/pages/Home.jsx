// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUsers, FaLock, FaMapMarkerAlt, FaClipboardCheck, FaEnvelopeOpenText, FaQuoteLeft } from 'react-icons/fa';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background illustration */}
        <div style={{
          position: 'absolute',
          top: '-60px',
          right: '-120px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle at 60% 40%, #2563eb22 0%, transparent 80%)',
          zIndex: 0
        }} />
        <div className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
          <h1>Welcome to the Lost & Found Hub</h1>
          <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Your trusted community platform for reporting and recovering lost or found items.
          </p>
          <div style={{ marginBottom: '1.5rem', color: 'var(--primary-color)', fontWeight: 600, fontSize: 'var(--font-size-base)' }}>
            <FaMapMarkerAlt style={{ marginRight: 8, verticalAlign: 'middle' }} />
            Connecting people, returning belongings.
          </div>
          <div className="hero-buttons">
            <Link to="/lost"><button className="outline">View Lost Items</button></Link>
            <Link to="/found"><button className="outline">View Found Items</button></Link>
            <Link to="/add"><button style={{ fontWeight: 700, fontSize: 'var(--font-size-lg)', boxShadow: '0 2px 12px #2563eb22' }}>Report an Item</button></Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features container" style={{ marginTop: '3rem' }}>
        <h2>Why Use Lost & Found?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <FaSearch size={32} color="#2563eb" style={{ marginBottom: 12 }} />
            <h3>Fast Recovery</h3>
            <p>Quickly report or find lost belongings in your area.</p>
          </div>
          <div className="feature-card">
            <FaUsers size={32} color="#2563eb" style={{ marginBottom: 12 }} />
            <h3>Community-Powered</h3>
            <p>Anyone can help return items. We work better together.</p>
          </div>
          <div className="feature-card">
            <FaLock size={32} color="#2563eb" style={{ marginBottom: 12 }} />
            <h3>Secure & Anonymous</h3>
            <p>Privacy-first design. No personal info required to list.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works container" style={{ marginTop: '3rem' }}>
        <h2>How It Works</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
          <div style={{ textAlign: 'center', maxWidth: 220 }}>
            <FaMapMarkerAlt size={32} color="#0ea5e9" style={{ marginBottom: 8 }} />
            <div style={{ fontWeight: 600, marginBottom: 4 }}>1. Spot a lost or found item</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>Notice something misplaced or found? Start here.</div>
          </div>
          <div style={{ textAlign: 'center', maxWidth: 220 }}>
            <FaClipboardCheck size={32} color="#0ea5e9" style={{ marginBottom: 8 }} />
            <div style={{ fontWeight: 600, marginBottom: 4 }}>2. Submit a quick report</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>Fill out a simple form to help others identify the item.</div>
          </div>
          <div style={{ textAlign: 'center', maxWidth: 220 }}>
            <FaEnvelopeOpenText size={32} color="#0ea5e9" style={{ marginBottom: 8 }} />
            <div style={{ fontWeight: 600, marginBottom: 4 }}>3. Wait for someone to claim or confirm</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>Get notified when someone recognizes or claims the item.</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial container" style={{ marginTop: '3rem' }}>
        <h2>Community Stories</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
          <div style={{ background: 'var(--surface-color)', borderRadius: 16, boxShadow: 'var(--shadow-md)', padding: '2rem', maxWidth: 340, minWidth: 240, flex: 1 }}>
            <FaQuoteLeft color="#2563eb" size={20} style={{ marginBottom: 8 }} />
            <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: 12 }}>
              “I found my laptop in less than a day thanks to this site.”
            </p>
            <div style={{ fontWeight: 600, color: 'var(--primary-color)' }}>– A thankful student</div>
          </div>
          <div style={{ background: 'var(--surface-color)', borderRadius: 16, boxShadow: 'var(--shadow-md)', padding: '2rem', maxWidth: 340, minWidth: 240, flex: 1 }}>
            <FaQuoteLeft color="#2563eb" size={20} style={{ marginBottom: 8 }} />
            <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: 12 }}>
              “It feels great to help someone by returning their keys.”
            </p>
            <div style={{ fontWeight: 600, color: 'var(--primary-color)' }}>– Local citizen</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
