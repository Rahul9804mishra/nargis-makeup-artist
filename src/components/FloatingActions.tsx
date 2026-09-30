'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, ChevronUp } from 'lucide-react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    'Hello Nargis Makeup Artist, I would like to book an appointment. Please share availability.'
  );

  return (
    <>
      {/* Desktop Floating WhatsApp */}
      <a
        href={`https://wa.me/918303407836?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform z-50 shimmer"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="hidden md:flex fixed bottom-28 right-8 w-14 h-14 gradient-burgundy rounded-full items-center justify-center text-white shadow-xl hover:scale-110 transition-transform z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-50">
        <div className="grid grid-cols-3 gap-0">
          <a
            href="tel:8303407836"
            className="flex flex-col items-center justify-center py-3 px-4 hover:bg-gray-50 transition-colors"
          >
            <Phone className="w-6 h-6 text-[--burgundy] mb-1" />
            <span className="text-xs font-medium text-gray-700">Call</span>
          </a>

          <a
            href={`https://wa.me/918303407836?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-3 px-4 bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">WhatsApp</span>
          </a>

          <a
            href="#contact"
            className="flex flex-col items-center justify-center py-3 px-4 hover:bg-gray-50 transition-colors"
          >
            <Calendar className="w-6 h-6 text-[--burgundy] mb-1" />
            <span className="text-xs font-medium text-gray-700">Book Now</span>
          </a>
        </div>
      </div>
    </>
  );
}
