import React from 'react';
import Navbar from '../../components/Navbar';
import About from '../../sections/About';
import SliderSection from '../../sections/SliderSection';
import Contact from '../../sections/Contact';

export default function MainPage() {
  return (
    <div>
      <Navbar />
      <SliderSection />
      <About />
      <Contact />
      <div className='footer' style={{ marginTop: "50px"}} />
    </div>
  );
}
