import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Features from './components/Features/Features';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  // Scroll Reveal Animation (moved here or into individual components)
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.product-card, .feature-card'); // Select elements
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', reveal);
    window.addEventListener('load', reveal); // Initialize on load

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', reveal);
      window.removeEventListener('load', reveal);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
