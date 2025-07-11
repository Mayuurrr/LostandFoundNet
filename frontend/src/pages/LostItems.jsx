// src/pages/LostItems.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useItems } from '../context/ItemContext';
import { FaBoxOpen } from 'react-icons/fa';

function LostItems() {
  const { lostItems } = useItems();

  // Dummy items for demo
  const dummyLostItems = [
    {
      _id: 'dummy1',
      title: 'Black Wallet',
      description: 'Lost near the cafeteria. Contains ID and credit cards.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      createdAt: new Date().toISOString(),
    },
    {
      _id: 'dummy2',
      title: 'Blue Backpack',
      description: 'Left in the library. Has a laptop and notebooks.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      createdAt: new Date().toISOString(),
    },
    {
      _id: 'dummy3',
      title: 'Set of Keys',
      description: 'Bunch of keys with a red keychain, lost in parking lot.',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
      createdAt: new Date().toISOString(),
    },
  ];

  const displayItems = lostItems.length === 0 ? dummyLostItems : lostItems;

  return (
    <section style={{ background: 'var(--background-color)', minHeight: '100vh', padding: '0.5rem 0 0.5rem 0' }}>
      <div className="container" style={{ maxWidth: 900, padding: '0 1rem 0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1rem', marginTop: 0 }}>
          <FaBoxOpen size={28} color="#2563eb" style={{ marginBottom: 6 }} />
          <h2 style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginBottom: '0.15rem', marginTop: 0 }}>Lost Items</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-base)', margin: 0 }}>
            Browse all reported lost items. Click an item for more details or to help return it.
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
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    background: '#f3f4f6',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 8,
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      display: 'block'
                    }}
                  />
                </div>
              )}
              <h3 style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)', margin: 0 }}>{item.description}</p>
              <div className="meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', marginTop: 'auto' }}>
                <span style={{ background: '#fee2e2', color: '#b91c1c', borderRadius: 8, padding: '0.15rem 0.6rem', fontWeight: 600 }}>Lost Item</span>
                <span>{new Date(item.createdAt).toLocaleDateString()}</span>
              </div>
            </Link>
          ))}
        </div>
        {lostItems.length === 0 && (
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
            <p style={{ marginBottom: 0 }}>No lost items reported yet. (Showing demo items)</p>
            <Link to="/add">
              <button className="outline" style={{ marginTop: '1.25rem' }}>Report a Lost Item</button>
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

export default LostItems;
