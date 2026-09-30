'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#packages', label: 'Packages' },
    { href: '#bridal', label: 'Bridal' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex flex-col">
            <span className={`font-serif font-bold transition-all ${
              isScrolled ? 'text-2xl' : 'text-3xl'
            } text-[--burgundy]`}>
              Nargis
            </span>
            <span className={`text-xs tracking-[0.3em] transition-all ${
              isScrolled ? 'text-[10px]' : 'text-xs'
            } text-[--gold] uppercase`}>
              Makeup Artist
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[--dark] hover:text-[--burgundy] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="gradient-burgundy text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[--burgundy] p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-in slide-in-from-top">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-[--dark] hover:text-[--burgundy] transition-colors border-b border-gray-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="gradient-burgundy text-white px-6 py-3 rounded-full text-sm font-medium mt-4 block text-center"
            >
              Book Appointment
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
