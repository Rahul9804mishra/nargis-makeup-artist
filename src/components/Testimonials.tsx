'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Happy Bridal Client',
    service: 'Bridal Makeup',
    text: 'Nargis did an amazing job with my bridal makeup. I felt so confident and beautiful on my wedding day. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Party Makeup Client',
    service: 'Party Makeup',
    text: 'Beautiful makeup, professional service and very comfortable experience. Will definitely book again!',
    rating: 5,
  },
  {
    name: 'Engagement Client',
    service: 'Engagement Makeup',
    text: 'The engagement makeup was exactly what I wanted. Nargis understood my requirements perfectly.',
    rating: 5,
  },
  {
    name: 'Navratri Client',
    service: 'Navratri Makeup',
    text: 'Got my Navratri makeup done and it was stunning! Received so many compliments. Thank you Nargis!',
    rating: 5,
  },
  {
    name: 'Home Service Client',
    service: 'Home Service',
    text: 'Very convenient home service. Professional setup and great makeup. Saved so much time!',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[--burgundy] to-[--maroon] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-[--gold] mx-auto mb-6"></div>
          <p className="text-[--champagne] text-lg">
            Real experiences from real clients
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12"
            >
              <Quote className="w-16 h-16 text-[--gold] mb-6" />
              
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[--gold] fill-current" />
                ))}
              </div>

              <p className="text-white text-xl md:text-2xl font-light mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="border-t border-white/20 pt-6">
                <p className="text-[--gold] font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-[--champagne] text-sm">
                  {testimonials[currentIndex].service}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[--gold] w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
