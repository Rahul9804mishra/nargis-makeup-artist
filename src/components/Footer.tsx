'use client';

import { Phone, MapPin, Mail, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Packages', href: '#packages' },
  { name: 'Bridal', href: '#bridal' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#74153D] text-white">

      {/* Decorative background */}
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      {/* Top gold line */}
      <div className="relative h-1 w-full bg-[#D4AF37]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <h2 className="font-serif text-4xl font-bold text-white">
              Nargis
            </h2>

            <p className="mt-1 text-[10px] uppercase tracking-[0.45em] text-[#E6C75A]">
              Makeup Artist
            </p>

            <p className="mt-6 text-lg font-medium text-white">
              Beauty • Makeover • Confidence
            </p>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
              Professional makeup and beauty services in Lucknow,
              designed to make you look beautiful, feel confident,
              and create unforgettable memories.
            </p>

            {/* Instagram */}
            <a
              href="https://instagram.com/nargiskhan4544"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-bold text-white transition hover:border-[#E6C75A] hover:bg-[#E6C75A] hover:text-[#74153D]">
                IG
              </span>

              <div>
                <p className="text-xs text-white/50">
                  Follow on Instagram
                </p>

                <p className="text-sm font-medium text-white">
                  @nargiskhan4544
                </p>
              </div>
            </a>
          </div>


          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-7 font-serif text-2xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/70 transition hover:text-[#E6C75A]"
                >
                  <span>{link.name}</span>

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>


          {/* CONTACT */}
          <div>
            <h3 className="mb-7 font-serif text-2xl font-semibold text-white">
              Get In Touch
            </h3>

            <div className="space-y-6">

              {/* Phone */}
              <a
                href="tel:8303407836"
                className="group flex items-start gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10">
                  <Phone
                    size={17}
                    className="text-[#E6C75A]"
                  />
                </span>

                <div>
                  <p className="mb-1 text-xs uppercase tracking-wider text-white/45">
                    Phone
                  </p>

                  <p className="text-sm text-white group-hover:text-[#E6C75A]">
                    8303407836
                  </p>
                </div>
              </a>


              {/* Instagram */}
              <a
                href="https://instagram.com/nargiskhan4544"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xs font-bold text-white group-hover:border-[#E6C75A] group-hover:text-[#E6C75A]">
                  IG
                </span>

                <div>
                  <p className="mb-1 text-xs uppercase tracking-wider text-white/45">
                    Instagram
                  </p>

                  <p className="text-sm text-white group-hover:text-[#E6C75A]">
                    @nargiskhan4544
                  </p>
                </div>
              </a>


              {/* Booking */}
              <a
                href="#contact"
                className="group flex items-start gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10">
                  <Mail
                    size={17}
                    className="text-[#E6C75A]"
                  />
                </span>

                <div>
                  <p className="mb-1 text-xs uppercase tracking-wider text-white/45">
                    Booking
                  </p>

                  <p className="text-sm text-white group-hover:text-[#E6C75A]">
                    Get in Touch
                  </p>
                </div>
              </a>

            </div>
          </div>


          {/* LOCATION */}
          <div>
            <h3 className="mb-7 font-serif text-2xl font-semibold text-white">
              Visit Us
            </h3>

            <div className="flex items-start gap-4">

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10">
                <MapPin
                  size={18}
                  className="text-[#E6C75A]"
                />
              </span>

              <div>
                <p className="mb-2 text-xs uppercase tracking-wider text-white/45">
                  Location
                </p>

                <p className="text-sm leading-6 text-white/80">
                  E Block Market,
                  <br />
                  Raja Ji Puram Market,
                  <br />
                  Shop No. 209,
                  <br />
                  Lucknow, Uttar Pradesh
                </p>
              </div>

            </div>

            {/* Appointment Button */}
            <a
              href="#contact"
              className="mt-7 inline-flex items-center rounded-full bg-[#E6C75A] px-6 py-3 text-sm font-semibold text-[#74153D] shadow-lg transition-all hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              Book Appointment

              <ArrowUpRight
                size={16}
                className="ml-2"
              />
            </a>

          </div>

        </div>


        {/* Divider */}
        <div className="my-12 h-px bg-white/15" />


        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <p className="text-center text-xs text-white/55 md:text-left">
            © {new Date().getFullYear()} Nargis Makeup Artist.
            All Rights Reserved.
          </p>

          <p className="text-xs tracking-wide text-white/55">
            Beauty • Elegance • Confidence
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#74153D] shadow-lg transition-all hover:-translate-y-1 hover:bg-[#E6C75A]"
          >
            ↑
          </button>

        </div>

      </div>
    </footer>
  );
}