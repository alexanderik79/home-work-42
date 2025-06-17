import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Sidebar, Loader, CarCard, FeaturesSection } from '../components';
import { fetchCategories, fetchCarsByCategory } from '../api/carService';

function Cars() {
  const { brand } = useParams();
  const [categories, setCategories] = useState([]);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const selectedCategory = useMemo(() => {
    return categories.find(
      (cat) => cat.name.toLowerCase() === brand?.toLowerCase()
    );
  }, [categories, brand]);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    const loadCars = async () => {
      if (!brand || !selectedCategory) {
        setCars([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const data = await fetchCarsByCategory(selectedCategory.id);
        setCars(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (categories.length > 0) {
      loadCars();
    }
  }, [brand, categories, selectedCategory]);

  return (
    <div style={{ display: "flex" }}>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <Sidebar
            data-aos="fade-in"
            categories={categories}
            selectedCategory={selectedCategory}
          />
          <main>
            <h2>
              {brand
                ? `Cars by ${capitalize(brand)}`
                : "Why Buy a Car from Us?"}
            </h2>
            {loading ? (
              <Loader />
            ) : cars.length > 0 ? (
              <div className="car-list">
                {cars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <FeaturesSection />
            )}
          </main>
        </>
      )}
    </div>
  );
}

export default Cars;
