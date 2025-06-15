import { BrowserRouter, Routes, Route, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Contact from './pages/Contact';
import CarDetail from './pages/CarDetail';
import './App.css';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const basename = import.meta.env.VITE_APP_BASENAME || '/';

// Компонент для отладки и обработки redirect
function DebugPath() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {

    AOS.init({
      offset: 100, // Смещение (в px) от нижней части окна просмотра для запуска анимации
      duration: 600, // Длительность анимации (в ms)
      easing: 'ease-in-out', // Тип easing
      once: true, // Анимировать только один раз при прокрутке вниз
      mirror: false, // Анимировать элементы каждый раз при прокрутке вверх/вниз
      anchorPlacement: 'top-bottom', // Где должен начинаться триггер прокрутки
    });
    AOS.refresh();

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
          <li data-aos="fade-down" data-aos-duration="600" data-aos-delay="100">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li data-aos="fade-down" data-aos-duration="600" data-aos-delay="300">
            <NavLink
              to="/cars"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Cars
            </NavLink>
          </li>
          <li data-aos="fade-down" data-aos-duration="600" data-aos-delay="500">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:brand" element={<Cars />} />
          <Route path="/cars/details/:id" element={<CarDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>404 - Page not found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;