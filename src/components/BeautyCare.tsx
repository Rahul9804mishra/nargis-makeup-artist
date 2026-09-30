'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const beautyServices = [
  { name: 'Facial', price: '₹299 से', popular: false },
  { name: 'Wax (Full/Hand)', price: '₹199 से', popular: false },
  { name: 'Eyebrow Threading', price: '₹30', popular: true },
  { name: 'Upper Lip Threading', price: '₹20', popular: false },
  { name: 'Forehead Threading', price: '₹20', popular: false },
  { name: 'Hair Cut', price: '₹149 से', popular: false },
  { name: 'Hair Trimming', price: '₹99 से', popular: false },
];

export default function BeautyCare() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-br from-[--cream] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[--burgundy] mb-4">
            Beauty Care
          </h2>
          <p className="text-gray-600 text-lg">
            Professional care for your everyday beauty
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {beautyServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 ${
                  service.popular ? 'border-[--gold]' : 'border-transparent'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-[--gold] text-white px-3 py-1 rounded-full text-xs font-bold">
                    Popular
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-burgundy rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-[--dark] text-lg">
                      {service.name}
                    </h3>
                  </div>
                  <div className="text-[--burgundy] font-bold text-xl">
                    {service.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-500 mb-6">
              * Prices may vary depending on service requirements
            </p>
            <a
              href="#contact"
              className="gradient-burgundy text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-block"
            >
              Book Beauty Service
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
