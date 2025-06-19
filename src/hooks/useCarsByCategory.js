import { useState, useEffect } from 'react';
import { fetchData } from '../api/api'; 

function useCarsByCategory(categoryId) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!categoryId) {
      setCars([]);
      setLoading(false);
      return;
    }

    const getCars = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchData('carsByCategory', categoryId); 
        setCars(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getCars();
  }, [categoryId]);

  return { cars, loading, error };
}

export default useCarsByCategory;