import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (name && email && message) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ // Reset form
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Have questions about our products? Want color consultation? We're here to help!</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" className="form-control" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" className="form-control" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" className="form-control" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" className="form-control" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
