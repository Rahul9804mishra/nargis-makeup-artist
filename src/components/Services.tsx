'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Sparkles,
  Scissors,
  Heart,
  Home,
  Palmtree,
  Paintbrush,
} from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: Sparkles,
    title: 'Makeup',
    description:
      'Professional makeup for all occasions - bridal, party, engagement & more',
    image: '/images/party-makeup.jpg',
  },
  {
    icon: Scissors,
    title: 'Hair Styling',
    description:
      'Expert hair styling, cutting, coloring and treatments',
    image: '/images/hair-styling.jpg',
  },
  {
    icon: Paintbrush,
    title: 'Skin Care',
    description:
      'Premium facials and skin treatments for glowing skin',
    image: '/images/bridal-makeup.jpg',
  },
  {
    icon: Heart,
    title: 'Bridal Makeup',
    description:
      'Complete bridal makeup packages for your special day',
    image: '/images/bridal-makeup.jpg',
  },
  {
    icon: Palmtree,
    title: 'Manicure & Pedicure',
    description:
      'Professional nail care and beautification services',
    image: '/images/party-makeup.jpg',
  },
  {
    icon: Home,
    title: 'Home Service',
    description:
      'Beauty services at the comfort of your home',
    image: '/images/party-makeup.jpg',
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[--burgundy] mb-4">
            Beauty That Makes You Feel Confident
          </h2>

          <div className="w-24 h-1 gradient-gold mx-auto mb-6" />

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience premium beauty and makeup services tailored to
            enhance your natural beauty
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  inView
                    ? { opacity: 1, y: 0 }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >

                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden">

                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    priority={index < 3}
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 gradient-gold rounded-full flex items-center justify-center text-white shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Image title */}
                  <div className="absolute bottom-4 left-5">
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>

                </div>

                {/* Content */}
                <div className="p-6">

                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="inline-flex items-center text-[--burgundy] font-semibold hover:text-[--gold] transition-colors"
                  >
                    Explore Service
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>

                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10 pointer-events-none">
                  <div className="absolute bottom-0 right-0 w-full h-full border-r-4 border-b-4 border-[--gold] rounded-br-2xl" />
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}