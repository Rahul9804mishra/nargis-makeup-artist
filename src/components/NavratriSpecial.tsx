'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Calendar } from 'lucide-react';
import Image from 'next/image';

const navratriServices = [
  { name: 'Dandiya Makeup', price: '₹999 से', description: 'Traditional festive look' },
  { name: 'Navratri Party Makeup', price: '₹1,199 से', description: 'Glamorous party ready' },
  { name: 'Party Makeup + Hairstyle', price: '₹1,499', description: 'Complete makeover' },
  { name: 'HD Party Makeup', price: '₹1,999', description: 'High-definition perfection' },
];

export default function NavratriSpecial() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[--burgundy] to-[--maroon]">
        <Image
          src="/navratri-makeup.jpg"
          alt="Navratri Makeup"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-[--gold]/30 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-[--gold]/30 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="bg-[--gold] text-[--burgundy] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
              Navratri Special
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Dandiya / Navratri Makeup
          </h2>
          <p className="text-[--champagne] text-lg max-w-2xl mx-auto">
            Look Beautiful. Feel Confident. Celebrate in Style.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {navratriServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-[--gold]/30 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                {service.name}
              </h3>
              <p className="text-[--champagne] text-sm mb-4">
                {service.description}
              </p>
              <div className="text-[--gold] font-bold text-2xl mb-4">
                {service.price}
              </div>
              <a
                href="#contact"
                className="block w-full bg-[--gold] text-[--burgundy] text-center py-2 rounded-full font-medium hover:bg-white transition-colors duration-300"
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[--gold] text-[--burgundy] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transform hover:scale-105 transition-all duration-300"
          >
            <Calendar className="w-5 h-5" />
            Book Your Festive Look
          </a>
        </motion.div>
      </div>
    </section>
  );
}
