import { useState } from 'react';
import { Link } from 'react-router-dom';
import './contact.css';
import ContactSection from '../../components/ContactSection/ContactSection';
import { CONTACT_FORM } from '../../constants/contactForm';
import { useTranslation } from '../../contexts/LocalizationContext'; // Импортируем хук для перевода

function Contact() {
  const [formData, setFormData] = useState(CONTACT_FORM);
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation(); // Получаем функцию перевода

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData(CONTACT_FORM);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      <div className="contact-page">
        {/* Используем перевод для кнопки "Назад к главной" */}
        <Link to="/">{t('contact.backToHome')}</Link>
        {/* Используем перевод для заголовка */}
        <h2 data-aos="fade-up" data-aos-delay="100">{t('contact.title')}</h2>
        {submitted ? (
          // Используем перевод для сообщения об успешной отправке
          <p className="success-message">{t('contact.successMessage')}</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              {/* Используем перевод для метки "Имя:" */}
              <label htmlFor="name" data-aos="fade-up" data-aos-delay="200" >{t('contact.nameLabel')}</label>
              <input
                data-aos="fade-up" data-aos-delay="150"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              {/* Используем перевод для метки "Email:" */}
              <label htmlFor="email" data-aos="fade-up" data-aos-delay="200">{t('contact.emailLabel')}</label>
              <input
                data-aos="fade-up" data-aos-delay="250"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              {/* Используем перевод для метки "Сообщение:" */}
              <label htmlFor="message" data-aos="fade-up" data-aos-delay="300">{t('contact.messageLabel')}</label>
              <textarea
                data-aos="fade-up" data-aos-delay="350"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            {/* Используем перевод для текста кнопки отправки */}
            <button type="submit" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0">{t('contact.sendMessageButton')}</button>
          </form>
        )}
      </div>
      <ContactSection />
    </div>
  );
}

export default Contact;