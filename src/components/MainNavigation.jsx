import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants/navigation'; 

function MainNavigation() {
  return (
    <nav>
      <ul>
        {NAV_LINKS.map((link) => (
          <li key={link.path} data-aos="fade-down" data-aos-delay={link.aosDelay}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNavigation;