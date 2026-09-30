'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[--cream] via-[--champagne] to-[--cream]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bridal.jpg"
          alt="Nargis Makeup Artist"
          fill
          sizes="100vw"
          className="object-cover opacity-15"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[--cream]/95 via-[--cream]/85 to-[--cream]/30" />
      </div>

      {/* Decorative floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[--gold]/30"
            initial={{
              y: -100,
              x: `${(i * 73) % 100}%`,
            }}
            animate={{
              y: '110vh',
            }}
            transition={{
              duration: 12 + (i % 5),
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 py-28">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-5"
            >
              <span className="inline-flex items-center px-5 py-2.5 bg-[--burgundy]/10 text-[--burgundy] rounded-full text-sm font-semibold">
                ✨ Premium Beauty Services
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-[--burgundy] leading-none mb-4"
            >
              Nargis
            </motion.h1>

            {/* Profession */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl text-[--gold] font-serif tracking-wide">
                Makeup Artist
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <div className="flex flex-wrap items-center gap-3 text-lg md:text-xl text-[--dark] mb-5">
                <span className="w-10 h-px bg-[--gold]" />

                <span className="font-medium">
                  Beauty
                </span>

                <span className="text-[--gold]">•</span>

                <span className="font-medium">
                  Makeover
                </span>

                <span className="text-[--gold]">•</span>

                <span className="font-medium">
                  Confidence
                </span>
              </div>

              <p className="text-gray-700 text-lg md:text-xl max-w-xl leading-relaxed">
                Professional Makeup & Beauty Services in Lucknow
              </p>

              <p className="text-gray-600 mt-3 max-w-xl leading-relaxed">
                Creating elegant bridal looks, party makeovers and
                personalized beauty experiences that make you feel
                confident and beautiful.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="gradient-burgundy text-white px-7 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Book Your Appointment
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#services"
                className="bg-white/90 backdrop-blur-sm text-[--burgundy] px-7 py-4 rounded-full font-semibold border-2 border-[--burgundy] hover:bg-[--burgundy] hover:text-white transition-all duration-300"
              >
                Explore Services
              </a>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6"
            >
              <a
                href="https://wa.me/918303407836?text=Hello%20Nargis%20Makeup%20Artist%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20share%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </motion.div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden md:block"
          >

            {/* Main image wrapper */}
            <div className="relative w-full max-w-[540px] mx-auto h-[560px] lg:h-[620px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">

              <Image
                src="/images/hero-bridal.jpg"
                alt="Professional Bridal Makeup by Nargis"
                fill
                sizes="(max-width: 1024px) 50vw, 540px"
                className="object-cover"
                priority
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[--burgundy]/60 via-transparent to-transparent" />

              {/* Bottom label */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg">
                  <p className="font-serif text-xl font-bold text-[--burgundy]">
                    Bridal Makeup
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    Elegance crafted for your special day
                  </p>
                </div>
              </div>
            </div>

            {/* Gold decorative frame */}
            <div className="absolute -top-5 -right-5 w-32 h-32 border-t-4 border-r-4 border-[--gold] rounded-tr-[2rem] pointer-events-none" />

            <div className="absolute -bottom-5 -left-5 w-32 h-32 border-b-4 border-l-4 border-[--gold] rounded-bl-[2rem] pointer-events-none" />

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1,
                duration: 0.5,
              }}
              className="absolute -bottom-8 -left-10 bg-white p-5 rounded-2xl shadow-2xl border border-[--gold]/20"
            >
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 gradient-burgundy rounded-full flex items-center justify-center text-white font-bold text-xl">
                  5+
                </div>

                <div>
                  <p className="font-semibold text-[--dark]">
                    Years of
                  </p>

                  <p className="text-sm text-gray-600">
                    Experience
                  </p>
                </div>

              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}