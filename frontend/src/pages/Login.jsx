import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login, signup } from '../api';
import { FaLock } from 'react-icons/fa';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isSignup) {
        await signup(email, password);
        alert('Signup successful! Please login.');
        setIsSignup(false);
      } else {
        const res = await login(email, password);
        console.log('Login response:', res.data);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('token', res.data.token);
        console.log('Stored token:', localStorage.getItem('token'));
        navigate('/');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert(isSignup ? 'Signup failed' : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section style={{ background: 'var(--background-color)', minHeight: '100vh', padding: '0.5rem 0 0.5rem 0' }}>
      <div className="container" style={{ maxWidth: 400, padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', marginTop: 0 }}>
          <FaLock size={32} color="#2563eb" style={{ marginBottom: 8 }} />
          <h2 style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginBottom: '0.15rem', marginTop: 0 }}>
            {isSignup ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-base)', margin: 0 }}>
            {isSignup ? 'Join our community to help others' : 'Sign in to your account'}
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
          <div className="form-control">
            <label htmlFor="email" style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-semibold)' }}>Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{ fontSize: 'var(--font-size-base)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', padding: '0.5rem 1rem' }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-semibold)' }}>Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={isSignup ? 'Create a password' : 'Enter your password'}
              required
              style={{ fontSize: 'var(--font-size-base)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', padding: '0.5rem 1rem' }}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            style={{ fontSize: 'var(--font-size-base)', width: '100%', marginTop: '0.5rem' }}
          >
            {isLoading ? (
              <>
                <span className="loading"></span>
                {isSignup ? 'Creating Account...' : 'Signing in...'}
              </>
            ) : (
              isSignup ? 'Create Account' : 'Sign In'
            )}
          </button>
        </form>
        <div className="auth-links" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-base)', marginBottom: 0 }}>
            {isSignup ? 'Already have an account?' : "Don't have an account?"}
          </p>
          <button
            className="outline"
            onClick={() => {
              setIsSignup(!isSignup);
              setEmail('');
              setPassword('');
            }}
            style={{ marginTop: '1rem', width: '100%', fontSize: 'var(--font-size-base)' }}
          >
            {isSignup ? 'Sign In Instead' : 'Create New Account'}
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 500px) {
          .container > form {
            padding: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Login;
