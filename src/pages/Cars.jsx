import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Sidebar, Loader, CarCard, FeaturesSection } from '../components';
import useCategories from '../hooks/useCategories';
import useCarsByCategory from '../hooks/useCarsByCategory';

function Cars() {
  const { brand } = useParams();

  const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();

  const selectedCategory = useMemo(() => {
    return categories.find(
      (cat) => cat.name.toLowerCase() === brand?.toLowerCase()
    );
  }, [categories, brand]);

  const { cars, loading: carsLoading, error: carsError } = useCarsByCategory(selectedCategory?.id);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const overallLoading = categoriesLoading || carsLoading;
  const overallError = categoriesError || carsError;

  return (
    <div style={{ display: "flex" }}>
      {overallError ? (
        <div>Error: {overallError.message || overallError}</div>
      ) : (
        <>
          <Sidebar
            data-aos="fade-in"
            categories={categories}
            selectedCategory={selectedCategory}
            loading={categoriesLoading}
          />
          <main>
            <h2>
              {brand
                ? `Cars by ${capitalize(brand)}`
                : "Why Buy a Car from Us?"}
            </h2>
            {overallLoading ? (
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