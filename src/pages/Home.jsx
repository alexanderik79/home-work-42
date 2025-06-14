import React from 'react';
import './home.css'; // We'll create this CSS file next

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Your Trusted Partner for Auto Sales & Service</h1>
          <p>Experience excellence in every journey. From routine maintenance to finding your dream car, we've got you covered.</p>
          <div className="hero-buttons">
            <a href="/services" className="btn primary-btn">Explore Services</a>
            <a href="/inventory" className="btn secondary-btn">View Inventory</a>
          </div>
        </div>
        {/* Placeholder for hero image */}
        <img src="/src/assets/hero-car.jpg" alt="Luxury car in a modern dealership" className="hero-image" />
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <img src="/src/assets/service-repair.jpg" alt="Car on a lift in a service bay" className="card-image" />
            <h3>Expert Auto Repair</h3>
            <p>From engine diagnostics to brake repairs, our certified technicians ensure your vehicle runs smoothly and safely.</p>
            <a href="/services/repair" className="card-link">Learn More</a>
          </div>
          <div className="card">
            <img src="/src/assets/service-maintenance.jpg" alt="Mechanic checking car engine" className="card-image" />
            <h3>Routine Maintenance</h3>
            <p>Keep your car in top condition with oil changes, tire rotations, and scheduled inspections. Prevent issues before they start.</p>
            <a href="/services/maintenance" className="card-link">Learn More</a>
          </div>
          <div className="card">
            <img src="/src/assets/service-detailing.jpg" alt="Car being detailed, sparkling clean" className="card-image" />
            <h3>Premium Detailing</h3>
            <p>Give your car the ultimate pampering. Our detailing services restore its shine, inside and out.</p>
            <a href="/services/detailing" className="card-link">Learn More</a>
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
            <a href="/cars" className="btn primary-btn">View Current Inventory</a>
          </div>
          {/* Placeholder for dealership image */}
          <img src="/src/assets/dealership-showroom.jpg" alt="Spacious car showroom with multiple vehicles" className="highlight-image" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to experience the difference?</h2>
          <p>Book a service appointment or schedule a test drive today!</p>
          <a href="/contact" className="btn secondary-btn">Contact Us</a>
        </div>
      </section>
    </div>
  );
}

export default Home;