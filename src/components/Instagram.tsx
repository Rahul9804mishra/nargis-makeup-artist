'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera } from 'lucide-react';
import Image from 'next/image';

const instagramImages = [
  '/hero-bridal.jpg',
  '/bridal-makeup.jpg',
  '/party-makeup.jpg',
  '/navratri-makeup.jpg',
  '/hair-styling.jpg',
  '/home-service.jpg',
];

export default function Instagram() {
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
          <div className="inline-flex items-center justify-center w-16 h-16 gradient-burgundy rounded-full mb-6">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[--burgundy] mb-4">
            Follow Nargis on Instagram
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Stay updated with our latest work and beauty tips
          </p>
          <a
            href="https://instagram.com/nargiskhan4544"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-burgundy text-white px-8 py-3 rounded-full font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Camera className="w-5 h-5" />
            @nargiskhan4544
          </a>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {instagramImages.map((image, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/nargiskhan4544"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={image}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[--burgundy]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
