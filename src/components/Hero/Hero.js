import React from 'react';
import './Hero.css'; // Component-specific styles
import { Link as ScrollLink } from 'react-scroll';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Transforming Spaces with Vibrant Colors</h1>
          <p>ColorCrest Paints offers premium quality paint solutions for every surface, designed to bring beauty and durability to your spaces.</p>
          <ScrollLink to="products" smooth={true} duration={500} className="btn">Explore Colors</ScrollLink>
        </div>
      </div>
    </section>
  );
}

export default Hero;
