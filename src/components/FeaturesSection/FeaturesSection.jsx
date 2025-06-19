import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './FeaturesSection.css'; 

const basename = import.meta.env.VITE_APP_BASENAME || '/';

const FeaturesSection = () => {

  return (
    <div className="features-container">
      {/* Блок 1: Гарантія */}
      <div className="feature-section" data-aos="fade-zoom">
        <div>
          <h2>Reliable Warranty</h2>
          <p>
            Buy with confidence thanks to our comprehensive warranty programs. We
            offer extended coverage on all vehicles, protecting you from
            unexpected repairs. Our team ensures your car stays in top condition,
            so you can drive worry-free.
          </p>
        </div>
        <div>
          <img
            src={`${basename}images/warranty.jpg`}
            alt="Warranty"
            className="feature-image"
          />
        </div>
      </div>

      {/* Блок 2: Кредит */}
      <div className="feature-section" data-aos="fade-zoom">
        <div>
          <h2>Flexible Financing</h2>
          <p>
            Make your dream car affordable with our tailored financing options. We
            partner with leading banks to offer low interest rates and flexible
            payment plans. Our experts will find the perfect solution to fit your
            budget.
          </p>
        </div>
        <div>
          <img
            src={`${basename}images/credit.jpg`}
            alt="Financing"
            className="feature-image"
          />
        </div>
      </div>

      {/* Блок 3: Обслуговування */}
      <div className="feature-section" data-aos="fade-zoom">
        <div>
          <h2>Professional Service</h2>
          <p>
            Trust your vehicle to our certified technicians. From routine
            maintenance to complex repairs, we use only genuine parts and
            state-of-the-art equipment to keep your car running smoothly. Your
            satisfaction is our priority.
          </p>
        </div>
        <div>
          <img
            src={`${basename}images/service.jpg`}
            alt="Service"
            className="feature-image"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;