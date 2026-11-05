import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, description } = formData;
    const message = `Hey Santhosh, this is ${name}. Found your portfolio, we can be in touch!\n\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${description}`;
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917013928150?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="contact-page" id="contact">
      <div className="contact-form-section">
        <div className="contact-form-header">
          <h2 className="section-title">Contact Me</h2>
          <div className="section-title-underline"></div>
          <p className="contact-form-subtitle">
            Have a project in mind or want to collaborate? Fill out the form below
            and I'll get back to you via WhatsApp.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Tell me about your project or how we can work together..."
              rows="5"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-send">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
            Send via WhatsApp
          </button>
        </form>
      </div>

      <div className="contact-footer">
        <p>© 2026 Adeline Palmerston. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
