import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BeautyCare from '@/components/BeautyCare';
import NavratriSpecial from '@/components/NavratriSpecial';
import BridalMakeup from '@/components/BridalMakeup';
import Packages from '@/components/Packages';
import HomeService from '@/components/HomeService';
import WhyChoose from '@/components/WhyChoose';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Instagram from '@/components/Instagram';
import Contact from '@/components/Contact';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <BeautyCare />
      <NavratriSpecial />
      <BridalMakeup />
      <Packages />
      <HomeService />
      <WhyChoose />
      <Gallery />
      <Testimonials />
      <Instagram />
      <Contact />
      <Location />
      <Footer />
      <FloatingActions />
    </div>
  );
}
