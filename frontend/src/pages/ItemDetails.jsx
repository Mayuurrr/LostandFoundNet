import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useItems } from '../context/ItemContext';
import { FaBoxOpen, FaBox } from 'react-icons/fa';

function ItemDetails() {
  const { id } = useParams();
  const { getItemById } = useItems();
  const item = getItemById(id);

  // Dummy items for demo if no item is found
  const dummyLostItem = {
    _id: 'dummy-lost',
    title: 'Sample Lost Item Title',
    description: 'This is a detailed description of a sample lost item. It includes information about where it was lost, identifying features, and any other relevant details.',
    type: 'lost',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80', // Sample lost item image
    createdAt: new Date('2024-01-15T10:00:00Z').toISOString(), // Sample date
  };

  const dummyFoundItem = {
    _id: 'dummy-found',
    title: 'Sample Found Item Title',
    description: 'This is a detailed description of a sample found item. It includes information about where it was found, identifying features, and any other relevant details.',
    type: 'found',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80', // Sample found item image
    createdAt: new Date('2024-01-20T14:30:00Z').toISOString(), // Sample date
  };

  let displayItem = item;
  let isDummy = false;

  if (!item) {
    if (id === 'dummy-lost') {
      displayItem = dummyLostItem;
      isDummy = true;
    } else if (id === 'dummy-found') {
      displayItem = dummyFoundItem;
      isDummy = true;
    } else {
       // Item not found and not a dummy ID
       return (
        <section style={{ background: 'var(--background-color)', minHeight: '100vh', padding: '3rem 0' }}>
          <div className="container" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
            <h2 style={{
              fontSize: 'var(--font-size-2xl)',
              marginBottom: '1rem',
              color: 'var(--text-primary)',
              lineHeight: 'var(--line-height-tight)'
            }}>
              Item Not Found
            </h2>
            <p style={{
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-normal)',
              marginBottom: '1.5rem'
            }}>
              The item you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/">
              <button
                className="outline"
                style={{
                  marginTop: '1rem',
                  fontSize: 'var(--font-size-base)'
                }}
              >
                Go Home
              </button>
            </Link>
          </div>
        </section>
      );
    }
  }

  return (
    <section style={{ background: 'var(--background-color)', minHeight: '100vh', padding: '0.5rem 0 0.5rem 0' }}>
      <div className="container" style={{ maxWidth: 800, margin: '0 auto', padding: '0 1rem' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', marginTop: 0 }}>
          {displayItem.type === 'lost' ? (
            <FaBoxOpen size={32} color="#ef4444" style={{ marginBottom: 8 }} />
          ) : (
            <FaBox size={32} color="#22c55e" style={{ marginBottom: 8 }} />
          )}
          <h2 style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginBottom: '0.15rem', marginTop: 0 }}>
            {displayItem.type === 'lost' ? 'Lost Item Details' : 'Found Item Details'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-base)', margin: 0 }}>
            Detailed information about the {displayItem.type} item.
          </p>
        </div>

        {/* Item Details Card */}
        <div className="item-card" style={{
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--surface-color)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>
          {displayItem.image && (
            <img
              src={displayItem.image}
              alt={displayItem.title}
              style={{
                width: '100%',
                maxHeight: 300,
                objectFit: 'cover',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1rem',
              }}
            />
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-lg)', fontWeight: 700, margin: 0 }}>
              {displayItem.title}
            </h3>
            <span style={{
              padding: '0.2rem 0.6rem',
              borderRadius: 8,
              backgroundColor: displayItem.type === 'lost' ? '#fee2e2' : '#dcfce7',
              color: displayItem.type === 'lost' ? '#b91c1c' : '#15803d',
              fontSize: 'var(--font-size-sm)',
              fontWeight: 600,
            }}>
              {displayItem.type === 'lost' ? 'Lost Item' : 'Found Item'}
            </span>
          </div>
          <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)', marginBottom: '1rem' }}>
            Reported on {new Date(displayItem.createdAt).toLocaleDateString()}
          </div>
          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
            <h4 style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-base)', fontWeight: 600, marginBottom: '0.5rem', marginTop: 0 }}>Description</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-normal)', margin: 0 }}>
              {displayItem.description}
            </p>
          </div>
          {!isDummy && (
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginTop: '0.5rem' }}>
              <Link to={displayItem.type === 'lost' ? '/lost' : '/found'}>
                <button
                  className="outline"
                  style={{ fontSize: 'var(--font-size-base)' }}
                >
                  Back to {displayItem.type === 'lost' ? 'Lost' : 'Found'} Items
                </button>
              </Link>
              <Link to="/add">
                <button style={{ fontSize: 'var(--font-size-base)' }}>
                  Report Another Item
                </button>
              </Link>
            </div>
          )}
           {isDummy && (
            <div style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '1rem' }}>
              <p style={{ marginBottom: '1rem' }}>This is a dummy item for demonstration.</p>
               <Link to={displayItem.type === 'lost' ? '/lost' : '/found'}>
                <button
                  className="outline"
                  style={{ fontSize: 'var(--font-size-base)', marginTop: '1.25rem' }}
                >
                  Back to {displayItem.type === 'lost' ? 'Lost' : 'Found'} Items
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .container > .item-card {
            padding: 1rem !important;
          }
          .container > .item-card img {
             max-height: 200px !important;
          }
          .container > .item-card > div:first-of-type {
             flex-direction: column;
             align-items: flex-start;
             gap: 0.5rem;
          }
          .container > .item-card > div:first-of-type span {
              margin-left: 0 !important;
          }
           .container > .item-card > div:last-of-type {
             flex-direction: column-reverse !important;
             gap: 1.25rem !important;
             align-items: center;
          }
           .container > .item-card > div:last-of-type a button {
              width: 100%;
           }
           .container > .item-card > div[style*='border-top: 1px solid'] {
              padding-top: 1.25rem !important;
              margin-top: 0.5rem !important;
           }
        }
      `}</style>
    </section>
  );
}

export default ItemDetails;
