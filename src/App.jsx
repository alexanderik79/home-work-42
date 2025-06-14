import { BrowserRouter, Routes, Route, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Contact from './pages/Contact';
import CarDetail from './pages/CarDetail';
import './App.css';
import { useEffect } from 'react';

const basename = import.meta.env.VITE_APP_BASENAME || '/';

// Компонент для отладки и обработки redirect
function DebugPath() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Current path:', location.pathname);
    console.log('Basename:', basename);
    console.log('Search params:', location.search);

    // Проверяем query-параметр redirect
    const params = new URLSearchParams(location.search);
    const redirectPath = params.get('redirect');
    if (redirectPath && redirectPath !== location.pathname) {
      console.log('Redirecting to:', redirectPath);
      navigate(redirectPath, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

function App() {
  return (
    <BrowserRouter basename={basename}>
      <DebugPath />
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
        <Route path="*" element={<div>404 - Страница не найдена</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;