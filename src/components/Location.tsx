'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Navigation, MessageCircle } from 'lucide-react';

export default function Location() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[--burgundy] mb-4">
            Visit Our Studio
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Come visit us for a premium beauty experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8956786532895!2d80.94164631504276!3d26.866847283138826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sRaja%20Ji%20Puram%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3xl"
            ></iframe>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-gradient-to-br from-[--burgundy] to-[--maroon] rounded-3xl p-8 text-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[--gold] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-2">Our Address</h3>
                  <div className="space-y-1 text-[--champagne]">
                    <p>E Block Market</p>
                    <p>Raja Ji Puram Market</p>
                    <p>Shop No. 209</p>
                    <p>Lucknow, Uttar Pradesh</p>
                    <p>India</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Raja+Ji+Puram+Market+Lucknow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[--gold] text-[--burgundy] py-3 rounded-full font-medium hover:bg-white transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
                <a
                  href="tel:8303407836"
                  className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white py-3 rounded-full font-medium hover:bg-white/30 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[--gold] transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 gradient-burgundy rounded-xl flex items-center justify-center">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone / WhatsApp</p>
                    <a href="tel:8303407836" className="text-xl font-bold text-[--burgundy] hover:text-[--gold] transition-colors">
                      8303407836
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[--gold] transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Follow on Instagram</p>
                    <a 
                      href="https://instagram.com/nargiskhan4544" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-[--burgundy] hover:text-[--gold] transition-colors"
                    >
                      @nargiskhan4544
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-[--champagne] to-white rounded-2xl p-6">
              <p className="text-sm text-gray-600 mb-3">Prefer booking online?</p>
              <a
                href="https://wa.me/918303407836?text=Hello%20Nargis%20Makeup%20Artist%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20share%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white py-3 rounded-full font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
