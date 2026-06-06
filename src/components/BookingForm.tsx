'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Reservation confirmed! Check your email for details.', {
          style: {
            background: '#282B2E',
            color: '#FCF9F2',
            fontFamily: 'Manrope, sans-serif',
            fontSize: '0.875rem',
          },
          iconTheme: { primary: '#C5A059', secondary: '#FCF9F2' },
        });
        setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: 2 });
      } else {
        throw new Error('Failed to submit');
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

  const timeSlots = [
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00',
  ];

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="space-y-8"
      id="booking-form"
    >
      {/* Name */}
      <div>
        <label htmlFor="booking-name" className="label-luxury block mb-2">Full Name</label>
        <input
          id="booking-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          required
        />
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="booking-email" className="label-luxury block mb-2">Email</label>
          <input
            id="booking-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>
        <div>
          <label htmlFor="booking-phone" className="label-luxury block mb-2">Phone</label>
          <input
            id="booking-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            required
          />
        </div>
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="booking-date" className="label-luxury block mb-2">Date</label>
          <input
            id="booking-date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        <div>
          <label htmlFor="booking-time" className="label-luxury block mb-2">Time</label>
          <select
            id="booking-time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="bg-transparent"
          >
            <option value="" disabled>Select time</option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Guests */}
      <div>
        <label htmlFor="booking-guests" className="label-luxury block mb-2">Number of Guests</label>
        <select
          id="booking-guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
          className="bg-transparent"
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? 'Guest' : 'Guests'}
            </option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="btn-gold w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Confirming...' : 'Confirm Reservation'}
      </button>
      
      <p className="text-xs text-ink-muted text-center">
        For groups larger than six, please contact us directly.
      </p>
    </motion.form>
  );
}
