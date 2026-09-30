'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const categories = ['All', 'Bridal', 'Party', 'Engagement', 'Navratri', 'Hair', 'Beauty'];

const galleryImages = [
  { src: '/images/hero-bridal.jpg', category: 'Bridal', alt: 'Bridal Makeup' },
  { src: '/images/bridal-makeup.jpg', category: 'Bridal', alt: 'Bridal Makeup Look' },
  { src: '/images/party-makeup.jpg', category: 'Party', alt: 'Party Makeup' },
  { src: '/images/navratri-makeup.jpg', category: 'Navratri', alt: 'Navratri Makeup' },
  { src: '/images/hair-styling.jpg', category: 'Hair', alt: 'Hair Styling' },
  { src: '/images/home-service.jpg', category: 'Beauty', alt: 'Home Beauty Service' },
  { src: '/images/hero-bridal.jpg', category: 'Engagement', alt: 'Engagement Makeup' },
  { src: '/images/bridal-makeup.jpg', category: 'Beauty', alt: 'Beauty Care' },
  { src: '/images/party-makeup.jpg', category: 'Party', alt: 'Party Look' },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[--burgundy] mb-4">
            Our Work Gallery
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Explore our beautiful makeup transformations
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'gradient-burgundy text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[--burgundy]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-[--gold] transition-colors"
              >
                <X size={32} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                disabled={selectedImage === 0}
                className="absolute left-4 text-white hover:text-[--gold] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={48} />
              </button>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="relative max-w-4xl max-h-[90vh] aspect-square"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              </motion.div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                disabled={selectedImage === filteredImages.length - 1}
                className="absolute right-4 text-white hover:text-[--gold] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight size={48} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
                {selectedImage + 1} / {filteredImages.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
