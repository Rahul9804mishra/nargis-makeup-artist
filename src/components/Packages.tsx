'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Star } from 'lucide-react';

const packages = [
  {
    name: 'Navratri Special Combo',
    price: '₹699',
    popular: false,
    features: [
      'Facial',
      'Wax',
      'Hair Cut',
      'Eyebrow',
      'Upper Lip',
      'Forehead',
    ],
  },
  {
    name: 'Dandiya Special Combo',
    price: '₹1,499',
    popular: false,
    features: [
      'Party Makeup',
      'Hairstyle',
    ],
  },
  {
    name: 'Full Beauty Package',
    price: '₹999',
    popular: true,
    features: [
      'Facial',
      'Wax',
      'Threading',
      'Hair Cut',
      'Trimming',
      'Upper Lip',
      'Forehead',
    ],
  },
];

export default function Packages() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[--burgundy] mb-4">
            Special Packages
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Save more with our specially curated combo packages
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative bg-gradient-to-br ${
                pkg.popular 
                  ? 'from-[--burgundy] to-[--maroon] text-white scale-105' 
                  : 'from-white to-[--champagne]/30 border-2 border-gray-200'
              } rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[--gold] text-[--burgundy] px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`font-serif text-2xl font-bold mb-2 ${
                  pkg.popular ? 'text-white' : 'text-[--burgundy]'
                }`}>
                  {pkg.name}
                </h3>
                <div className="my-6">
                  <span className={`text-5xl font-bold ${
                    pkg.popular ? 'text-[--gold]' : 'text-[--burgundy]'
                  }`}>
                    {pkg.price}
                  </span>
                  <span className={`text-lg ${
                    pkg.popular ? 'text-[--champagne]' : 'text-gray-600'
                  }`}>/-</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
                      pkg.popular ? 'text-[--gold]' : 'text-[--burgundy]'
                    }`} />
                    <span className={pkg.popular ? 'text-white' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-full font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-[--gold] text-[--burgundy] hover:bg-white'
                    : 'gradient-burgundy text-white hover:shadow-lg'
                }`}
              >
                Book This Combo
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="font-serif text-2xl font-bold text-[--burgundy] mb-6 text-center">
            Additional Services
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: 'Hair Styling (Curls / Straight)', price: '₹499 से' },
              { name: 'Hair Colour (Basic)', price: '₹799 से' },
              { name: 'Hair Spa (Basic)', price: '₹599 से' },
              { name: 'Manicure', price: '₹299 से' },
              { name: 'Pedicure', price: '₹399 से' },
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <span className="text-[--dark] font-medium">{service.name}</span>
                <span className="text-[--burgundy] font-bold">{service.price}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
