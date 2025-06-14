import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './Home.css';

const basename = import.meta.env.VITE_APP_BASENAME || '/';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Your Trusted Partner for Auto Sales & Service</h1>
          <p>Experience excellence in every journey. From routine maintenance to finding your dream car, we've got you covered.</p>
          <div className="hero-buttons">

            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? 'btn primary-btn active-link' : 'btn primary-btn')}
            >
              Explore Services
            </NavLink>
            <NavLink
              to="/inventory"
              className={({ isActive }) => (isActive ? 'btn secondary-btn active-link' : 'btn secondary-btn')}
            >
              View Inventory
            </NavLink>
          </div>
        </div>
        {/* Пути к изображениям остаются с basename */}
        <img src={`${basename}images/hero-car.jpg`} alt="Luxury car in a modern dealership" className="hero-image" />
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <img src={`${basename}images/service-repair.jpg`} alt="Car on a lift in a service bay" className="card-image" />
            <h3>Expert Auto Repair</h3>
            <p>From engine diagnostics to brake repairs, our certified technicians ensure your vehicle runs smoothly and safely.</p>

            <NavLink to="/services/repair" className="card-link">Learn More</NavLink>
          </div>
          <div className="card">
            <img src={`${basename}images/service-maintenance.jpg`} alt="Mechanic checking car engine" className="card-image" />
            <h3>Routine Maintenance</h3>
            <p>Keep your car in top condition with oil changes, tire rotations, and scheduled inspections. Prevent issues before they start.</p>

            <NavLink to="/services/maintenance" className="card-link">Learn More</NavLink>
          </div>
          <div className="card">
            <img src={`${basename}images/service-detailing.jpg`} alt="Car being detailed, sparkling clean" className="card-image" />
            <h3>Premium Detailing</h3>
            <p>Give your car the ultimate pampering. Our detailing services restore its shine, inside and out.</p>

            <NavLink to="/services/detailing" className="card-link">Learn More</NavLink>
          </div>
        </div>
      </section>

      {/* Dealership Highlights */}
      <section className="dealership-highlights">
        <h2>Find Your Next Ride</h2>
        <div className="highlight-content">
          <div className="text-content">
            <p>Explore our extensive inventory of new and pre-owned vehicles. Whether you're looking for a reliable daily driver or a luxury performance car, our sales team is here to help you find the perfect match.</p>
            <ul>
              <li>Wide selection of makes and models</li>
              <li>Competitive financing options</li>
              <li>Thoroughly inspected pre-owned vehicles</li>
              <li>Personalized customer service</li>
            </ul>

            <NavLink
              to="/cars"
              className={({ isActive }) => (isActive ? 'btn primary-btn active-link' : 'btn primary-btn')}
            >
              View Current Inventory
            </NavLink>
          </div>
          <img src={`${basename}images/dealership-showroom.jpg`} alt="Spacious car showroom with multiple vehicles" className="highlight-image" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to experience the difference?</h2>
          <p>Book a service appointment or schedule a test drive today!</p>
          {/* ИСПОЛЬЗУЕМ NavLink */}
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'btn secondary-btn active-link' : 'btn secondary-btn')}
          >
            Contact Us
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default Home;