// src/pages/AddItem.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useItems } from '../context/ItemContext';
import { FaPlusCircle } from 'react-icons/fa';

function AddItem() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('lost');
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { addItem } = useItems();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('Image size should be less than 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addItem({ title, description, type, image });
      navigate(type === 'lost' ? '/lost' : '/found');
    } catch (err) {
      alert('Failed to add item. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <section style={{ background: 'var(--background-color)', minHeight: '100vh', padding: '0.5rem 0 0.5rem 0' }}>
      <div className="container" style={{ maxWidth: 600, padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', marginTop: 0 }}>
          <FaPlusCircle size={32} color="#2563eb" style={{ marginBottom: 8 }} />
          <h2 style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginBottom: '0.15rem', marginTop: 0 }}>
            Report a {type === 'lost' ? 'Lost' : 'Found'} Item
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-base)', margin: 0 }}>
            Help others by providing details about the {type} item.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="item-card" style={{
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--surface-color)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="form-control">
              <label htmlFor="type" style={{ fontSize: 'var(--font-size-base)', marginBottom: '0.5rem' }}>Item Type</label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                style={{
                  backgroundColor: 'var(--surface-color)',
                  color: 'var(--text-primary)',
                  fontWeight: 'var(--font-weight-medium)',
                  padding: '0.5rem 2.5rem 0.5rem 1rem',
                  fontSize: 'var(--font-size-base)',
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  appearance: 'none',
                  MozAppearance: 'none',
                  WebkitAppearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' fill='none' stroke='%2364738b' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.75rem center',
                  backgroundSize: '1.25rem',
                }}
              >
                <option value="lost">Lost Item</option>
                <option value="found">Found Item</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="title" style={{ fontSize: 'var(--font-size-base)', marginBottom: '0.5rem' }}>Title</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={`Enter a brief title for the ${type} item`}
                required
                style={{ fontSize: 'var(--font-size-base)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', padding: '0.5rem 1rem' }}
              />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="description" style={{ fontSize: 'var(--font-size-base)', marginBottom: '0.5rem' }}>Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={`Provide details about the ${type} item (location, time, identifying features, etc.)`}
              rows="5"
              required
              style={{ fontSize: 'var(--font-size-base)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', padding: '0.5rem 1rem', resize: 'vertical', minHeight: 100 }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="image" style={{ fontSize: 'var(--font-size-base)', marginBottom: '0.5rem' }}>Image (Optional)</label>
            <div style={{
              border: '2px dashed var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              textAlign: 'center',
              backgroundColor: 'var(--background-color)',
            }}>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
              <label
                htmlFor="image"
                style={{
                  cursor: 'pointer',
                  display: 'inline-block',
                  padding: '0.5rem 1.25rem',
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 'var(--font-weight-medium)',
                  fontSize: 'var(--font-size-base)',
                  transition: 'all 0.2s ease',
                }}
              >
                Choose Image
              </label>
              <p style={{ marginTop: '0.75rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)', lineHeight: 'var(--line-height-normal)' }}>
                Maximum file size: 5MB
              </p>
            </div>
            {image && (
              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <img
                  src={image}
                  alt="Preview"
                  style={{ maxWidth: '100%', maxHeight: 180, borderRadius: 'var(--radius-md)', objectFit: 'contain', boxShadow: 'var(--shadow-sm)' }}
                />
                <button
                  type="button"
                  className="outline"
                  onClick={() => setImage(null)}
                  style={{ marginTop: '0.5rem', fontSize: 'var(--font-size-sm)', padding: '0.4rem 1rem' }}
                >
                  Remove Image
                </button>
              </div>
            )}
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', marginTop: '0.5rem' }}>
            <button
              type="button"
              className="outline"
              onClick={() => navigate(-1)}
              style={{ minWidth: 100, fontSize: 'var(--font-size-base)' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{ minWidth: 120, fontSize: 'var(--font-size-base)' }}
            >
              {isSubmitting ? (
                <>
                  <span className="loading"></span>
                  Submitting...
                </>
              ) : (
                'Submit Report'
              )}
            </button>
          </div>
        </form>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .container > form {
            padding: 1rem !important;
          }
          .container > div[style*='display: grid'] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export default AddItem;
