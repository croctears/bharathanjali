import React from 'react';
import Navbar from '../../components/Navbar';
import About from '../../sections/About';
import SliderSection from '../../sections/SliderSection';

export default function MainPage() {
  return (
    <div>
      <Navbar />
      <SliderSection />
      <About />
    </div>
  );
}
