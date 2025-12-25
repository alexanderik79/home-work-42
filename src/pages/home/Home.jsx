import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../contexts/LocalizationContext'; // Импортируем хук

import './Home.css';

const basename = import.meta.env.VITE_APP_BASENAME || '/';

function Home() {
  const { t } = useTranslation(); // Получаем функцию перевода

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 data-aos="fade-right">{t('home.heroTitle')}</h1>
          <p>{t('home.heroSubtitle')}</p>
          <div className="hero-buttons">
            <button disabled className="btn primary-btn" data-aos="fade-up" data-aos-delay="200">
              {t('home.exploreServicesButton')}
            </button>
            <Link
              data-aos="fade-up"
              data-aos-delay="400"
              to="/cars"
              className="btn secondary-btn"
            >
              {t('home.viewInventoryButton')}
            </Link>
          </div>
        </div>
        <img src={`${basename}images/hero-car.jpg`} alt="Luxury car in a modern dealership" className="hero-image" data-aos="fade-zoom" data-aos-duration="400" data-aos-delay="400" />
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <h2>{t('home.servicesTitle')}</h2>
        <div className="service-cards">
          <div className="card" data-aos="fade-right" data-aos-delay="100">
            <img src={`${basename}images/service-repair.jpg`} alt="Car on a lift in a service bay" className="card-image" />
            <h3>{t('home.repairTitle')}</h3>
            <p>{t('home.repairDescription')}</p>
            <p>{t('home.learnMoreComingSoon')}</p>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="200">
            <img src={`${basename}images/service-maintenance.jpg`} alt="Mechanic checking car engine" className="card-image" />
            <h3>{t('home.maintenanceTitle')}</h3>
            <p>{t('home.maintenanceDescription')}</p>
            <p>{t('home.learnMoreComingSoon')}</p>
          </div>
          <div className="card" data-aos="fade-left" data-aos-delay="300">
            <img src={`${basename}images/service-detailing.jpg`} alt="Car being detailed, sparkling clean" className="card-image" />
            <h3>{t('home.detailingTitle')}</h3>
            <p>{t('home.detailingDescription')}</p>
            <p>{t('home.learnMoreComingSoon')}</p>
          </div>
        </div>
      </section>

      {/* Dealership Highlights */}
      <section className="dealership-highlights"data-aos="fade-in">
        <h2>{t('home.findNextRideTitle')}</h2>
        <div className="highlight-content">
          <div className="text-content">
            <p>{t('home.findNextRideDescription')}</p>
            <ul>
              <li>{t('home.selectionListItem')}</li>
              <li>{t('home.financingListItem')}</li>
              <li>{t('home.inspectedListItem')}</li>
              <li>{t('home.customerServiceListItem')}</li>
            </ul>
            <Link
              data-aos="fade-right"
              to="/cars"
              className="btn primary-btn"
            >
              {t('home.viewCurrentInventoryButton')}
            </Link>
          </div>
          <img src={`${basename}images/dealership-showroom.jpg`} alt="Spacious car showroom with multiple vehicles" className="highlight-image" data-aos="fade-zoom" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 data-aos="fade-up" data-aos-delay="100">{t('home.ctaTitle')}</h2>
          <p data-aos="fade-up" data-aos-delay="300">{t('home.ctaSubtitle')}</p>
          <Link
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-offset="-100"
            to="/contact"
            className="btn secondary-btn"
          >
            {t('home.ctaContactButton')}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;