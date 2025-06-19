import { useState, useEffect } from 'react';
import { fetchData } from '../api/api'; // Изменено

function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const data = await fetchData('categories'); // Используем fetchData
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