'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Message sent. Our concierge will respond shortly.', {
          style: {
            background: '#282B2E',
            color: '#FCF9F2',
            fontFamily: 'Manrope, sans-serif',
            fontSize: '0.875rem',
          },
          iconTheme: { primary: '#C5A059', secondary: '#FCF9F2' },
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed');
      }
    } catch {
      toast.error('Something went wrong. Please try again.', {
        style: {
          background: '#282B2E',
          color: '#FCF9F2',
          fontFamily: 'Manrope, sans-serif',
          fontSize: '0.875rem',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="space-y-8"
      id="contact-form"
    >
      <div>
        <label htmlFor="contact-name" className="label-luxury block mb-2">Your Name</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full name"
          required
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="label-luxury block mb-2">Email</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
        />
      </div>

      <div>
        <label htmlFor="contact-subject" className="label-luxury block mb-2">Subject</label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="How can we assist you?"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="label-luxury block mb-2">Message</label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your inquiry..."
          required
          rows={5}
          className="resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Send Inquiry'}
      </button>
    </motion.form>
  );
}
