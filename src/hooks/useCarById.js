// src/hooks/useCarById.js
import { useState, useEffect } from 'react';
import { getCarById } from '../api/api'; 

function useCarById(carId) {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!carId) { 
      setCar(null);
      setLoading(false);
      return;
    }

    const fetchCar = async () => {
      try {
        setLoading(true);
        setError(null); 
        const data = await getCarById(carId);
        setCar(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [carId]); 

  return { car, loading, error };
}

export default useCarById;