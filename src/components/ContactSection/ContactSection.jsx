import React from 'react';
import { Link } from 'react-router-dom'; // Link не используется, но оставлен, если понадобится
import { useTranslation } from '../../contexts/LocalizationContext'; // Импортируем хук

import './ContactSection.css';

const ContactSection = () => {
  const { t } = useTranslation(); // Получаем функцию перевода

  return (
    <div className="contact-container">
      <div className="contact-section" data-aos="fade-zoom">
        <div className="contact-info">
          <h2>{t('contactSection.title')}</h2>
          <p>{t('contactSection.description')}</p>
          <ul>
            <li data-aos="fade-up" data-aos-delay="100">
              <strong>{t('contactSection.addressLabel')}</strong> Oosterdok 2, 1011 VX Amsterdam
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              <strong>{t('contactSection.phoneLabel')}</strong> <a href="tel:+1234567890">+1 (234) 567-890</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <strong>{t('contactSection.emailLabel')}</strong>{' '}
              <a href="mailto:info@dealership.com">info@dealership.com</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              <strong>{t('contactSection.hoursLabel')}</strong> {t('contactSection.hoursMonFri')}, {t('contactSection.hoursSat')}, {t('contactSection.hoursSun')}
            </li>
          </ul>
        </div>
        <div className="contact-map">
          <h3>{t('contactSection.findUsTitle')}</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.627951582125!2d4.902747515920007!3d52.37521877978786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c1d36cf37b%3A0xd42f9db17ccfa7d5!2sOosterdokskade%202%2C%201011%20VX%20Amsterdam!5e0!3m2!1sen!2snl!4v1712056789012!5m2!1sen!2snl"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Oosterdok 2, Amsterdam"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
