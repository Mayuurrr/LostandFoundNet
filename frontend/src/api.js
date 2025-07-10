// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Items
export const fetchItems = () => {
  const token = localStorage.getItem('token');
  console.log('fetchItems - Token:', token); // Debug log
  return API.get('/items', {
    headers: {
      'x-auth-token': token
    }
  });
};

export const createItem = (item) => {
  const token = localStorage.getItem('token');
  console.log('createItem - Token:', token); // Debug log
  return API.post('/items', item, {
    headers: {
      'x-auth-token': token
    }
  });
};

export const getItemById = (id) => {
  const token = localStorage.getItem('token');
  console.log('getItemById - Token:', token); // Debug log
  return API.get(`/items/${id}`, {
    headers: {
      'x-auth-token': token
    }
  });
};

// Auth
export const signup = (email, password) => {
  console.log('Attempting signup...'); // Debug log
  return API.post('/auth/signup', { email, password });
};

export const login = (email, password) => {
  console.log('Attempting login...'); // Debug log
  return API.post('/auth/login', { email, password });
};
