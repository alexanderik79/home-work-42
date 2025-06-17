import { useState } from 'react';
import { Link } from 'react-router-dom';
import './contact.css';
import ContactSection from '../../components/ContactSection/ContactSection';



function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000); // Reset success message after 3s
  };

  return (
    <div>
    <div className="contact-page">
      <div><br /></div>
      <Link to="/">Back to Home</Link>
      <h2 data-aos="fade-up" data-aos-delay="100">Contact Us</h2>
      {submitted ? (
        <p className="success-message">Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" data-aos="fade-up" data-aos-delay="200" >Name:</label>
            <input  data-aos="fade-up" data-aos-delay="150"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"  data-aos="fade-up" data-aos-delay="200">Email:</label>
            <input  data-aos="fade-up" data-aos-delay="250"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" data-aos="fade-up" data-aos-delay="300">Message:</label>
            <textarea  data-aos="fade-up" data-aos-delay="350"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0">Send Message</button>

        </form>

      )}
    </div>
    <ContactSection />
    </div>
  );
}

export default Contact;