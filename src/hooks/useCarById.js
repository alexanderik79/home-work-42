import { useState, useEffect } from 'react';
import { fetchData } from '../api/api'; // Убедитесь, что это правильный путь к вашему файлу api.js

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
        const data = await fetchData('carById', carId);
        setCar(data); // <--- ВОТ ЧТО НУЖНО ДОБАВИТЬ
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