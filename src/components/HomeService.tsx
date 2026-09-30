'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home, Clock, Shield, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const services = [
  'Makeup',
  'Party Makeup',
  'Bridal Makeup',
  'Engagement Makeup',
  'Facial',
  'Waxing',
  'Threading',
  'Hair Cut',
  'Hair Styling',
  'All Beauty Services',
];

export default function HomeService() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-br from-[--cream] via-white to-[--champagne]/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-[--burgundy]/10 text-[--burgundy] px-4 py-2 rounded-full text-sm font-semibold">
                <Home className="w-4 h-4" />
                Home Service Available
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[--burgundy] mb-6">
              Beauty At Your Doorstep
            </h2>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Professional beauty and makeup services from the comfort of your home. 
              Enjoy salon-quality treatments without stepping out.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-[--burgundy] flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[--burgundy] to-[--maroon] p-6 rounded-2xl mb-8 text-white">
              <p className="text-sm uppercase tracking-wider mb-2">Starting From</p>
              <p className="text-4xl font-bold text-[--gold]">₹499/-</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Clock, text: 'Flexible Timing' },
                { icon: Shield, text: 'Hygiene First' },
                { icon: Home, text: 'Your Comfort' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md"
                >
                  <div className="w-12 h-12 gradient-burgundy rounded-full flex items-center justify-center mb-2">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="gradient-burgundy text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
            >
              Book Home Service
            </a>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/home-service.jpg"
                alt="Home Beauty Service"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[--burgundy]/50 to-transparent"></div>

              {/* Floating Info Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
              >
                <p className="text-sm text-gray-600 mb-1">Available</p>
                <p className="font-bold text-[--burgundy]">All Areas</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
              >
                <p className="text-sm text-gray-600 mb-1">Service Time</p>
                <p className="font-bold text-[--burgundy]">Flexible</p>
              </motion.div>

              {/* Decorative Border */}
              <div className="absolute -bottom-4 -right-4 w-40 h-40 border-4 border-[--gold] rounded-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
