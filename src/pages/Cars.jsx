import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';
import CarCard from '../components/CarCard';

function Cars() {
const { brand } = useParams();
const [categories, setCategories] = useState([]);
const [cars, setCars] = useState([]);
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

useEffect(() => {
if (!brand) {
setCars([]);
return;
}
const fetchCars = async () => {
setLoading(true);
try {
const category = categories.find(
(cat) => cat.name.toLowerCase() === brand.toLowerCase()
);
if (!category) throw new Error('Category not found');
const response = await fetch(
`https://car-dealer-app.botdepo.shop/api/products/category/${category.id}/AutoPlus`,
{
headers: {
'X-API-Key': '0190ed4a-9d93-4b55-ac50-96123dbc39e6',
},
}
);
if (!response.ok) throw new Error('Failed to fetch cars');
const data = await response.json();
setCars(data);
} catch (err) {
setError(err.message);
} finally {
setLoading(false);
}
};
if (categories.length > 0) {
fetchCars();
}
}, [brand, categories]);

const selectedCategory = categories.find(
(cat) => cat.name.toLowerCase() === brand?.toLowerCase()
);

return (
<div style={{ display: 'flex' }}>
{loading && !categories.length ? (
<Loader />
) : error ? (
<div>Error: {error}</div>
) : (
<>
<Sidebar
categories={categories}
selectedCategory={selectedCategory}
/>
<main>
<h2>
{brand
? `Cars by ${brand.charAt(0).toUpperCase() + brand.slice(1)}`
: 'Це сторінка каталог'}
</h2>
{cars.length > 0 ? (
<div className="car-list ">
{cars.map((car) => (
<CarCard key={car.id} car={car} />
))}
</div>
) : (
<p>Select a brand to view cars</p>
)}
</main>
</>
)}
</div>
);
}
export default Cars;