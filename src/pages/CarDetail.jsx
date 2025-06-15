import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../components/Loader';

function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(
          `https://car-dealer-app.botdepo.shop/api/products/product/${id}/AutoPlus`,
          {
            headers: {
              'X-API-Key': '0190ed4a-9d93-4b55-ac50-96123dbc39e6',
            },
          }
        );
        if (!response.ok) throw new Error('Failed to load car details');
        const data = await response.json();
        setCar(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCarDetails();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;
  if (!car) return <div>Car not found</div>;

  return (
    <div className="car-detail" data-aos="fade-zoom">
      <Link to="/cars">Back to Cars</Link>
      <h2>{car.name}</h2>
      <p>{car.description}</p>
      <p>Price: {car.price ? `$${car.price.toLocaleString()}` : 'N/A'}</p>
      <p>Old Price: {car.oldPrice ? `$${car.oldPrice.toLocaleString()}` : 'N/A'}</p>
      <p>Year: {car.year || 'N/A'}</p>
      <p>Mileage: {car.mileage ? `${car.mileage.toLocaleString()} miles` : 'N/A'}</p>
      <p>Color: {car.color || 'N/A'}</p>
      <p>Transmission: {car.transmission || 'N/A'}</p>
      <p>Fuel Type: {car.fuelType || 'N/A'}</p>
      <p>Engine Size: {car.engineSize ? `${car.engineSize} L` : 'N/A'}</p>
      <p>Horsepower: {car.horsepower || 'N/A'}</p>
      <p>Drive Type: {car.driveType || 'N/A'}</p>
      <p>Body Type: {car.bodyType || 'N/A'}</p>
      <p>VIN: {car.vin || 'N/A'}</p>
      <p>Condition: {car.condition || 'N/A'}</p>
      <p>Status: {car.status || 'N/A'}</p>
      <p>Added: {car.addedDate ? new Date(car.addedDate).toLocaleDateString() : 'N/A'}</p>
      {car.photoList && car.photoList.length > 0 ? (
        <div className="car-photos">
          {car.photoList.map((photo, index) => (
            <img key={index} src={photo} alt={`${car.name} ${index + 1}`} />
          ))}
        </div>
      ) : (
        <p>No photos available</p>
      )}
    </div>
  );
}

export default CarDetail;