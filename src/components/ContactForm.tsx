'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    smsConsent: false
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="contact-form-container">
      <h2>Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          />
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="sms_consent"
              id="sms_consent"
              checked={formData.smsConsent}
              onChange={(e) => setFormData({...formData, smsConsent: e.target.checked})}
            />
            By checking this box, I consent to receive transactional and marketing messages from Jason Young / All Western Mortgage related to my account or services I have requested. These messages may include appointment reminders, order confirmations, account notifications, among others. Message frequency may vary. Message & data rates may apply. Reply HELP for help or STOP to opt-out at any time.
          </label>
        </div>

        <div className="form-disclaimer">
          <p>By submitting this form, you agree to our <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms of Service</Link>.</p>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <div className="privacy-notice">
        <h3>PRIVACY POLICY</h3>
        <p><strong>At All Western Mortgage, we value your privacy.</strong> We collect personal information you provide (like contact and financial details) to process mortgage applications and improve our services. We do not sell or rent your data. We use cookies to enhance your online experience. You can control cookies via your browser settings. We implement security measures to protect your data.</p>
        <p><strong>For questions, access requests, or updates to your information, email us at <a href="mailto:jyoung@allwestern.com">jyoung@allwestern.com</a> or call us at <a href="tel:678-608-2944">678-608-2944</a>.</strong></p>
        <p>For more information, please review our complete <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms of Service</Link>.</p>
      </div>
    </div>
  );
}
