import React, { useState } from 'react';
import './Header.css'; // Component-specific styles
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <a href="/" className="logo">Color<span>Crest</span> Paints</a>
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><ScrollLink to="home" smooth={true} duration={500} onClick={closeMobileMenu}>Home</ScrollLink></li>
            <li><ScrollLink to="products" smooth={true} duration={500} onClick={closeMobileMenu}>Products</ScrollLink></li>
            <li><ScrollLink to="features" smooth={true} duration={500} onClick={closeMobileMenu}>Why Choose Us</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={500} onClick={closeMobileMenu}>Contact</ScrollLink></li>
          </ul>
          <div className="mobile-menu" onClick={toggleMobileMenu}>
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
