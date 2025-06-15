import { Link } from 'react-router-dom';

function CarCard({ car }) {
  return (
    <Link to={`/cars/details/${car.id}`} className="car-card" data-aos="fade-zoom">
      <h3>{car.name}</h3>
      <p>{car.description}</p>
      <p>Price: ${car.price.toLocaleString()}</p>
      <p>Year: {car.year}</p>
      <p>Mileage: {car.mileage.toLocaleString()} miles</p>
      <p>Color: {car.color}</p>
      {car.photoList && car.photoList[0] && (
        <img src={car.photoList[0]} alt={car.name} style={{ maxWidth: '200px' }} />
      )}
    </Link>
  );
}
export default CarCard;