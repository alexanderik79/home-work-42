import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';

function Cars() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://car-dealer-app.botdepo.shop/api/categories/all/AutoPlus',
          {
            headers: {
              'X-API-Key': '0190ed4a-9d93-4b55-ac50-96123dbc39e6',
            },
          }
        );
        if (!response.ok) throw new Error('Failed to fetch categories');
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      {loading ? (
        <Loader />
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <Sidebar categories={categories} />
      )}
      <main>
        <h2>Це сторінка каталог</h2>
      </main>
    </div>
  );
}
export default Cars;