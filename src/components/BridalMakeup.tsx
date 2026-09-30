'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Crown, Heart, Star, Sparkles } from 'lucide-react';
import Image from 'next/image';

const bridalPackages = [
  { 
    icon: Crown,
    name: 'Bridal Makeup', 
    price: '₹5,999 से', 
    description: 'Complete bridal makeup for your dream wedding',
    features: ['HD Makeup', 'Hair Styling', 'Draping Assistance']
  },
  { 
    icon: Sparkles,
    name: 'Engagement Makeup', 
    price: '₹3,999 से', 
    description: 'Look stunning at your engagement ceremony',
    features: ['Premium Makeup', 'Hair Styling', 'Touch-ups']
  },
  { 
    icon: Star,
    name: 'Reception Makeup', 
    price: '₹4,999 से', 
    description: 'Glamorous look for your reception',
    features: ['HD Makeup', 'Elegant Hair', 'Long Lasting']
  },
  { 
    icon: Heart,
    name: 'Haldi Makeup', 
    price: '₹2,999 से', 
    description: 'Natural & radiant look for haldi ceremony',
    features: ['Natural Glow', 'Simple Styling', 'Waterproof']
  },
];

export default function BridalMakeup() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="bridal" className="py-20 bg-gradient-to-br from-white via-[--champagne]/20 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[--pink]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[--burgundy]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/bridal-makeup.jpg"
                alt="Bridal Makeup"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[--burgundy]/60 via-transparent to-transparent"></div>
              
              {/* Premium Badge */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-[--burgundy] font-bold">Premium Bridal Services</p>
              </div>

              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[--gold]"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[--gold]"></div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="text-[--gold] font-semibold text-sm uppercase tracking-widest">
                Special Occasions
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[--burgundy] mb-6">
              Bridal Makeup
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Your special day deserves a look you'll remember forever. Our expert bridal makeup services 
              ensure you look absolutely stunning on the most important day of your life.
            </p>

            <div className="space-y-4 mb-8">
              {['Professional HD Makeup', 'Complimentary Hair Styling', 'Premium Products', 'Trial Session Available'].map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="gradient-burgundy text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
            >
              Book Bridal Consultation
            </a>
          </motion.div>
        </div>

        {/* Bridal Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bridalPackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[--gold] group"
            >
              <div className="w-14 h-14 gradient-burgundy rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <pkg.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[--burgundy] mb-2">
                {pkg.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {pkg.description}
              </p>
              <div className="text-[--burgundy] font-bold text-2xl mb-4">
                {pkg.price}
              </div>
              <ul className="space-y-2 mb-4">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[--gold]"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block w-full text-center py-2 border-2 border-[--burgundy] text-[--burgundy] rounded-full font-medium hover:bg-[--burgundy] hover:text-white transition-all duration-300"
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
