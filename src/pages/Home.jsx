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
          <h1 data-aos="fade-right">Your Trusted Partner for Auto Sales & Service</h1>
          <p>Experience excellence in every journey. From routine maintenance to finding your dream car, we've got you covered.</p>
          <div className="hero-buttons">
            <button disabled className="btn primary-btn" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
              Explore Services (Coming Soon)
            </button>
            <NavLink data-aos="fade-up" data-aos-duration="600" data-aos-delay="400"
              to="/cars"
              className={({ isActive }) => (isActive ? 'btn secondary-btn active-link' : 'btn secondary-btn')}
            >
              View Inventory
            </NavLink>
          </div>
        </div>
        <img src={`${basename}images/hero-car.jpg`} alt="Luxury car in a modern dealership" className="hero-image" data-aos="fade-zoom" data-aos-duration="400" data-aos-delay="400" />
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card" data-aos="fade-right" data-aos-duration="600" data-aos-delay="100">
            <img src={`${basename}images/service-repair.jpg`} alt="Car on a lift in a service bay" className="card-image" />
            <h3>Expert Auto Repair</h3>
            <p>From engine diagnostics to brake repairs, our certified technicians ensure your vehicle runs smoothly and safely.</p>
            <p>Learn More (Coming Soon)</p>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
            <img src={`${basename}images/service-maintenance.jpg`} alt="Mechanic checking car engine" className="card-image" />
            <h3>Routine Maintenance</h3>
            <p>Keep your car in top condition with oil changes, tire rotations, and scheduled inspections. Prevent issues before they start.</p>
            <p>Learn More (Coming Soon)</p>
          </div>
          <div className="card" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
            <img src={`${basename}images/service-detailing.jpg`} alt="Car being detailed, sparkling clean" className="card-image" />
            <h3>Premium Detailing</h3>
            <p>Give your car the ultimate pampering. Our detailing services restore its shine, inside and out.</p>
            <p>Learn More (Coming Soon)</p>
          </div>
        </div>
      </section>

      {/* Dealership Highlights */}
      <section className="dealership-highlights"data-aos="fade-in" data-aos-duration="600">
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
            <NavLink  data-aos="fade-right" data-aos-duration="600"
              to="/cars"
              className={({ isActive }) => (isActive ? 'btn primary-btn active-link' : 'btn primary-btn')}
            >
              View Current Inventory
            </NavLink>
          </div>
          <img src={`${basename}images/dealership-showroom.jpg`} alt="Spacious car showroom with multiple vehicles" className="highlight-image" data-aos="fade-zoom" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">Ready to experience the difference?</h2>
          <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">Book a service appointment or schedule a test drive today!</p>
          <NavLink  data-aos="fade-zoom" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="-100"
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