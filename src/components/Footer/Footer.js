import React from 'react';
import './Footer.css';
import { Link as ScrollLink } from 'react-scroll';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>ColorCrest Paints</h3>
            <p>Transforming spaces with vibrant colors and premium quality paint solutions since 2010.</p>
            <div className="social-links">
              <a href="#"><img src="./images/facebook.png" height="39px" width="39px" alt="Facebook" /></a>
              <a href="#"><img src="./images/twitter.png" height="39px" width="39px" alt="Twitter" /></a>
              <a href="#"><img src="./images/instagram.png" height="39px" width="39px" alt="Instagram" /></a>
              <a href="#"><img src="./images/linkedin.png" height="60px" width="60px" alt="LinkedIn" /></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
              <li><ScrollLink to="products" smooth={true} duration={500}>Products</ScrollLink></li>
              <li><ScrollLink to="features" smooth={true} duration={500}>Why Choose Us</ScrollLink></li>
              <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Products</h3>
            <ul>
              <li><a href="#">Interior Paints</a></li>
              <li><a href="#">Exterior Paints</a></li>
              <li><a href="#">Wood Coatings</a></li>
              <li><a href="#">Metal Paints</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Info</h3>
            <ul>
              <li>123 Paint Street, Colorville</li>
              <li>contact@colorcrest.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Mon-Fri: 9AM - 5PM</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 ColorCrest Paints. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
