'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, MessageCircle, Phone, Calendar, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    location: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    'Bridal Makeup',
    'Engagement Makeup',
    'Reception Makeup',
    'Party Makeup',
    'Navratri Makeup',
    'Hair Styling',
    'Facial',
    'Waxing',
    'Threading',
    'Home Service',
    'Other',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: '',
          phone: '',
          service: '',
          preferredDate: '',
          preferredTime: '',
          location: '',
          message: '',
        });
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const whatsappMessage = encodeURIComponent(
    'Hello Nargis Makeup Artist, I would like to book an appointment. Please share availability.'
  );

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-[--cream]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[--burgundy] mb-4">
            Book Your Appointment
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Get in touch to schedule your beauty transformation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            {showSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 gradient-burgundy rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[--burgundy] mb-4">
                  Request Received!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your appointment request. We'll contact you soon to confirm your booking.
                </p>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="gradient-burgundy text-white px-6 py-3 rounded-full font-medium"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[--burgundy] focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[--burgundy] focus:border-transparent outline-none transition-all"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[--burgundy] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[--burgundy] focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[--burgundy] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[--burgundy] focus:border-transparent outline-none transition-all"
                      placeholder="Your location (for home service)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[--burgundy] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Any special requirements or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-burgundy text-white py-4 rounded-xl font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        <Send className="w-5 h-5" />
                        Request Appointment
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-[--burgundy] to-[--maroon] rounded-3xl p-8 text-white">
              <h3 className="font-serif text-2xl font-bold mb-6">
                Quick Contact
              </h3>
              
              <div className="space-y-4">
                <a
                  href="tel:8303407836"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all"
                >
                  <div className="w-12 h-12 bg-[--gold] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[--champagne]">Call Us</p>
                    <p className="font-semibold text-lg">8303407836</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/918303407836?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[--champagne]">WhatsApp</p>
                    <p className="font-semibold text-lg">Book via WhatsApp</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-[--burgundy]" />
                <h3 className="font-serif text-xl font-bold text-[--burgundy]">
                  Working Hours
                </h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span>Monday - Saturday</span>
                  <span className="font-semibold">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="font-semibold">By Appointment</span>
                </div>
              </div>
            </div>

            {/* Why Book With Us */}
            <div className="bg-gradient-to-br from-[--champagne] to-white rounded-3xl p-8">
              <h3 className="font-serif text-xl font-bold text-[--burgundy] mb-4">
                Why Book With Us?
              </h3>
              <ul className="space-y-3">
                {[
                  'Professional & Experienced',
                  'Premium Quality Products',
                  'Hygiene & Safety First',
                  'Home Service Available',
                  'Flexible Timing',
                  'Affordable Pricing',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-[--burgundy]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
