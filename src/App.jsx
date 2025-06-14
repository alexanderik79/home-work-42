import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Contact from './pages/Contact';
import CarDetail from './pages/CarDetail';
import './App.css';

// Получаем basename из переменной окружения
// process.env.VITE_APP_BASENAME для Vite
// process.env.REACT_APP_BASENAME для Create React App
const basename = import.meta.env.VITE_APP_BASENAME || '/'; // Для Vite
// const basename = process.env.REACT_APP_BASENAME || '/'; // Для Create React App

function App() {
  return (
    // Используем полученное значение basename
    <BrowserRouter basename={basename}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cars"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Cars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:brand" element={<Cars />} />
        <Route path="/cars/details/:id" element={<CarDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;