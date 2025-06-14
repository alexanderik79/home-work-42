function CarCard({ car }) {
return (
<div className="car-card">
<h3>{car.name}</h3>
<p>{car.description}</p>
<p>Price: ${car.price.toLocaleString()}</p>
<p>Year: {car.year}</p>
<p>Mileage: {car.mileage.toLocaleString()} miles</p>
<p>Color: {car.color}</p>
{car.photoList && car.photoList[0] && (
<img src={car.photoList[0]} alt={car.name} style={{ maxWidth: '200px' }} />
)}
</div>
);
}
export default CarCard;