import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import useDebugPath from './hooks/useDebugPath';
import { routes } from './constants/routes';

import 'aos/dist/aos.css'; 
import './App.css';

const basename = import.meta.env.VITE_APP_BASENAME || '/';


function App() {
  
  useDebugPath(); 
  
  return (
    <BrowserRouter basename={basename}>
 
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