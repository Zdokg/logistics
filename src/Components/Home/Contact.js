import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    try {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      alert('Your message has been sent! We will get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Contact form error:', error);
      alert('An error occurred while sending your message');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <section id="contact" className="contact-form-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p className="contact-subtitle">
          Have questions or need logistics solutions? We're here to help. Reach out to our team.
        </p>
      </div>
      
      <div className="contact-content">
        <div className="contact-form-section">
          <div className="form-card">
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
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
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (123) 456-7890"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">
                    Subject <span className="required">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Shipping Quote">Shipping Quote</option>
                    <option value="Tracking Issue">Tracking Issue</option>
                    <option value="Business Partnership">Business Partnership</option>
                    <option value="Job Application">Job Application</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div className="form-submit">
                <button
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="spinner" />
                  ) : (
                    <Send className="icon" />
                  )}
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="contact-info-section">
          <div className="info-card">
            <h2>Contact Information</h2>
            <div className="info-content">
              <div className="info-item">
                <div className="info-icon">
                  <MapPin />
                </div>
                <div>
                  <h3>Office Address</h3>
                  <p>
                    123 Logistics Avenue, Suite 500<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <Mail />
                </div>
                <div>
                  <h3>Email Us</h3>
                  <p>For general inquiries:</p>
                  <a href="mailto:info@logisync.com">
                    info@logisync.com
                  </a>
                  <p>For support:</p>
                  <a href="mailto:support@logisync.com">
                    support@logisync.com
                  </a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <Phone />
                </div>
                <div>
                  <h3>Call Us</h3>
                  <p>Main Office:</p>
                  <a href="tel:+15551234567">
                    +1 (555) 123-4567
                  </a>
                  <p>Customer Support:</p>
                  <a href="tel:+15557891234">
                    +1 (555) 789-1234
                  </a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <Clock />
                </div>
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Friday:</p>
                  <p className="hours">9:00 AM - 6:00 PM EST</p>
                  <p>Saturday:</p>
                  <p className="hours">10:00 AM - 2:00 PM EST</p>
                  <p>Sunday:</p>
                  <p className="hours">Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425872426631!3d40.74076097132708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1690594102932!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;