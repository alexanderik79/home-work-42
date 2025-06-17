import { BrowserRouter, Routes, Route, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';

import { AOS_CONFIG } from './constants/animation';

import { routes }  from './constants/routes';

import './App.css';
import 'aos/dist/aos.css';

const basename = import.meta.env.VITE_APP_BASENAME || '/';

// Компонент для отладки и обработки redirect
function DebugPath() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {

    AOS.init(AOS_CONFIG);
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
          <li data-aos="fade-down" data-aos-delay="100">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li data-aos="fade-down" data-aos-delay="300">
            <NavLink
              to="/cars"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Cars
            </NavLink>
          </li>
          <li data-aos="fade-down" data-aos-delay="500">
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
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;