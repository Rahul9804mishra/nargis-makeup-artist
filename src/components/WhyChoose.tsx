'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Heart, Sparkles, Home, Shield, Star, Users, DollarSign } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Professional Service',
    description: 'Expert makeup artist with years of experience',
  },
  {
    icon: Shield,
    title: 'Hygiene First',
    description: 'Sanitized tools and premium quality products',
  },
  {
    icon: Heart,
    title: 'Personalized Makeup',
    description: 'Customized looks that suit your style',
  },
  {
    icon: Sparkles,
    title: 'Premium Products',
    description: 'Only trusted and high-quality makeup brands',
  },
  {
    icon: Users,
    title: 'Comfortable Experience',
    description: 'Friendly service in a relaxed environment',
  },
  {
    icon: Star,
    title: 'Experienced Artist',
    description: 'Skilled in traditional and modern techniques',
  },
  {
    icon: Home,
    title: 'Home Service Available',
    description: 'Beauty services at your doorstep',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Quality services at reasonable rates',
  },
];

export default function WhyChoose() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-[--cream]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[--burgundy] mb-4">
            Why Choose Nargis?
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the difference with our professional beauty services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[--gold]"
            >
              <div className="w-16 h-16 gradient-burgundy rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-[--burgundy] mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="gradient-burgundy text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
          >
            Experience the Difference
          </a>
        </motion.div>
      </div>
    </section>
  );
}
