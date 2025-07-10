// src/pages/FoundItems.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useItems } from '../context/ItemContext';
import { FaBox } from 'react-icons/fa';

function FoundItems() {
  const { foundItems } = useItems();

  // Dummy items for demo
  const dummyFoundItems = [
    {
      _id: 'dummy1',
      title: 'Silver Watch',
      description: 'Found near the gym. Has a leather strap.',
      image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80',
      createdAt: new Date().toISOString(),
    },
    {
      _id: 'dummy2',
      title: 'Red Umbrella',
      description: 'Left in the cafeteria. Bright red color.',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      createdAt: new Date().toISOString(),
    },
    {
      _id: 'dummy3',
      title: 'Earphones',
      description: 'Black wireless earphones found in the library.',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
      createdAt: new Date().toISOString(),
    },
  ];

  const displayItems = foundItems.length === 0 ? dummyFoundItems : foundItems;

  return (
    <section style={{ background: 'var(--background-color)', minHeight: '100vh', padding: '0.5rem 0 0.5rem 0' }}>
      <div className="container" style={{ maxWidth: 900, padding: '0 1rem 0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1rem', marginTop: 0 }}>
          <FaBox size={28} color="#22c55e" style={{ marginBottom: 6 }} />
          <h2 style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginBottom: '0.15rem', marginTop: 0 }}>Found Items</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-base)', margin: 0 }}>
            Browse all reported found items. Click an item for more details or to help return it.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
          marginBottom: '0.5rem',
        }}>
          {displayItems.map(item => (
            <Link to={`/item/${item._id}`} key={item._id} className="item-card" style={{ boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', background: 'var(--surface-color)', transition: 'box-shadow 0.2s', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.1rem', minHeight: 260 }}>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: 8 }}
                />
              )}
              <h3 style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)', margin: 0 }}>{item.description}</p>
              <div className="meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', marginTop: 'auto' }}>
                <span style={{ background: '#dcfce7', color: '#15803d', borderRadius: 8, padding: '0.15rem 0.6rem', fontWeight: 600 }}>Found Item</span>
                <span>{new Date(item.createdAt).toLocaleDateString()}</span>
              </div>
            </Link>
          ))}
        </div>
        {foundItems.length === 0 && (
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
            <p style={{ marginBottom: 0 }}>No found items reported yet. (Showing demo items)</p>
            <Link to="/add">
              <button className="outline" style={{ marginTop: '1.25rem' }}>Report a Found Item</button>
            </Link>
          </div>
        )}
      </div>
      <style>{`
        @media (max-width: 700px) {
          .container > div[style*='display: grid'] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export default FoundItems;
