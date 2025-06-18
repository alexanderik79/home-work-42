import React from 'react';
import { NavLink } from 'react-router-dom'; 

function MainNavigation() {
  return (
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
  );
}

export default MainNavigation;