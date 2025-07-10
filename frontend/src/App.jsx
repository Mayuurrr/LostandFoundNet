import React from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import LostItems from './pages/LostItems';
import FoundItems from './pages/FoundItems';
import AddItem from './pages/AddItem';
import ItemDetails from './pages/ItemDetails';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="app-layout">
      <header className="navbar">
        <div className="navbar-brand stylish-brand">
          Lost & Found Hub
        </div>
        <nav className="navbar-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/lost">Lost</NavLink>
          <NavLink to="/found">Found</NavLink>
          {user ? (
            <>
              <NavLink to="/add">Report</NavLink>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </nav>
      </header>

      <main className="main-content container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lost" element={<LostItems />} />
          <Route path="/found" element={<FoundItems />} />
          <Route path="/add" element={
            <ProtectedRoute>
              <AddItem />
            </ProtectedRoute>
          } />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <footer className="footer" style={{ padding: '2.5rem 0 1.5rem 0', background: '#1e1e2f', color: '#eee', marginTop: '2rem' }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
          padding: '0 1.5rem',
        }}>
          {/* About Section */}
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 800, fontSize: '1.3rem', color: '#fff', marginBottom: 10 }}>Lost & Found Hub</div>
            <div style={{ color: '#cbd5e1', fontSize: '1.05rem', marginBottom: 14, lineHeight: 1.6 }}>
              Find what you've lost, return what you've found.<br />
              <span style={{ color: '#60a5fa', fontWeight: 600 }}>Designed & developed by Pooja Shetty.</span>
            </div>
            <div style={{ color: '#94a3b8', fontSize: '0.98rem' }}>© 2025 Lost & Found Network</div>
          </div>
          {/* Quick Links */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 10, fontSize: '1.1rem' }}>Quick Links</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 2 }}>
              <li><NavLink to="/" style={{ color: '#60a5fa', fontWeight: 500, textDecoration: 'none' }}>Home</NavLink></li>
              <li><NavLink to="/lost" style={{ color: '#60a5fa', fontWeight: 500, textDecoration: 'none' }}>Lost Items</NavLink></li>
              <li><NavLink to="/found" style={{ color: '#60a5fa', fontWeight: 500, textDecoration: 'none' }}>Found Items</NavLink></li>
              {user && (
                <li><NavLink to="/add" style={{ color: '#60a5fa', fontWeight: 500, textDecoration: 'none' }}>Report an Item</NavLink></li>
              )}
              <li><NavLink to="/login" style={{ color: '#60a5fa', fontWeight: 500, textDecoration: 'none' }}>Login</NavLink></li>
            </ul>
          </div>
          {/* Contact Section */}
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 10, fontSize: '1.1rem' }}>Contact</div>
            <div style={{ color: '#cbd5e1', fontSize: '1.05rem', marginBottom: 8 }}>
              <span style={{ fontWeight: 500 }}>Email:</span> <a href="mailto:support@lostfoundhub.com" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 500 }}>support@lostfoundhub.com</a>
            </div>
            <div style={{ color: '#cbd5e1', fontSize: '1.05rem' }}>
              <span style={{ fontWeight: 500 }}>Phone:</span> <a href="tel:+1234567890" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 500 }}>+1 234 567 890</a>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '1rem', marginTop: '2.2rem', fontWeight: 500 }}>
          Built with <span style={{ color: '#f87171', fontWeight: 700 }}>❤️</span> for the community.
        </div>
      </footer>
    </div>
  );
}

export default App;
