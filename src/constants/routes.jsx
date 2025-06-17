import Home from '../pages/home/Home';
import Cars from '../pages/Cars';
import CarDetail from '../pages/CarDetail';
import Contact from '../pages/contact/Contact';

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/cars', element: <Cars /> },
  { path: '/cars/:brand', element: <Cars /> },
  { path: '/cars/details/:id', element: <CarDetail /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <div>404 - Page not found</div> },
];