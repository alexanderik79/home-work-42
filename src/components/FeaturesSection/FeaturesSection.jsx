import React from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import './FeaturesSection.css';
import { useTranslation } from '../../contexts/LocalizationContext'; // Import the hook

const FeaturesSection = () => {
  const { t } = useTranslation(); 

  return (
    <div className="features-container">
      {/* Block 1: Warranty */}
      <div className="feature-section" data-aos="fade-zoom">
        <div>
          <h2>{t('features.warrantyTitle')}</h2>
          <p>{t('features.warrantyDescription')}</p>
        </div>
        <div>
          <img
            src={`${import.meta.env.VITE_APP_BASENAME || '/'}images/warranty.jpg`}
            alt={t('features.warrantyTitle')} 
            className="feature-image"
          />
        </div>
      </div>

      {/* Block 2: Credit */}
      <div className="feature-section" data-aos="fade-zoom">
        <div>
          <h2>{t('features.financingTitle')}</h2>
          <p>{t('features.financingDescription')}</p>
        </div>
        <div>
          <img
            src={`${import.meta.env.VITE_APP_BASENAME || '/'}images/credit.jpg`}
            alt={t('features.financingTitle')} 
            className="feature-image"
          />
        </div>
      </div>

      {/* Block 3: Service */}
      <div className="feature-section" data-aos="fade-zoom">
        <div>
          <h2>{t('features.serviceTitle')}</h2>
          <p>{t('features.serviceDescription')}</p>
        </div>
        <div>
          <img
            src={`${import.meta.env.VITE_APP_BASENAME || '/'}images/service.jpg`}
            alt={t('features.serviceTitle')}
            className="feature-image"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;