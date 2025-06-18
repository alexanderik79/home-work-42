// src/hooks/useCategories.js
import { useState, useEffect } from 'react';
import { fetchCategories } from '../api/api'; 

function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true); 
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        setError(err); 
      } finally {
        setLoading(false); 
      }
    };

    getCategories();
  }, []); 

  return { categories, loading, error }; 
}

export default useCategories;