import React from 'react';
import './ProductCard.css'; // Component-specific styles

function ProductCard({ imageSrc, imageAlt, title, description }) {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#" className="btn btn-outline">Learn More</a>
      </div>
    </div>
  );
}

export default ProductCard;
