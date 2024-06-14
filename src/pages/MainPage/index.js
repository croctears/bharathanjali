import React from 'react';
import Navbar from '../../components/Navbar';
import About from '../../sections/About';
import SliderSection from '../../sections/SliderSection';
import Blog from '../../sections/Blog';
import Contact from '../../sections/Contact';
import Footer from '../../sections/Footer';

export default function MainPage() {
  return (
    <div>
      <Navbar />
      <SliderSection />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
