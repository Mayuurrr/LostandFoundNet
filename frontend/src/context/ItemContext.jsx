import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchItems, createItem } from '../api';

const ItemContext = createContext();
export const useItems = () => useContext(ItemContext);

export function ItemProvider({ children }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const res = await fetchItems();
        setItems(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Error loading items:', err);
      }
    };

    loadItems();
  }, []);

  const addItem = async (item) => {
    const res = await createItem(item);
    setItems(prev => [res.data, ...prev]);
  };

  const getItemById = (id) => items.find(item => item._id === id);

  const lostItems = items.filter(item => item.type === 'lost');
  const foundItems = items.filter(item => item.type === 'found');

  return (
    <ItemContext.Provider value={{ lostItems, foundItems, addItem, getItemById, loading }}>
      {children}
    </ItemContext.Provider>
  );
}
