import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ContactSection.css'; 
const basename = import.meta.env.VITE_APP_BASENAME || '/';

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    
    });
    AOS.refresh();
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-section" data-aos="fade-zoom">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            We're here to assist you with all your automotive needs. Reach out to
            us via phone, email, or visit our dealership in person. Our friendly
            team is ready to answer your questions and provide exceptional
            service.
          </p>
          <ul>
            <li data-aos="fade-up" data-aos-delay="100">
              <strong>Address:</strong> 123 Auto Lane, Car City, CA 90210
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              <strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <strong>Email:</strong>{' '}
              <a href="mailto:info@dealership.com">info@dealership.com</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              <strong>Hours:</strong> Mon-Fri: 9 AM - 6 PM, Sat: 10 AM - 4 PM,
              Sun: Closed
            </li>
          </ul>
        </div>
        <div className="contact-map">
          <h3>Find Us</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d-122.419415484681!3d37.774929779759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5f2b7e55%3A0x9c5a5b5a5b5a5b5a!2s123%20Auto%20Lane%2C%20San%20Francisco%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Dealership Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;