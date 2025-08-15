import React from 'react';
import ProductCard from './ProductCard';
import './Products.css'; // Component-specific styles

// You could also fetch this data from a JSON file or API
const productsData = [
  {
    id: 1,
    imageSrc: '../images/Interior.jpg',
    imageAlt: 'Modern living room with beige walls, contemporary furniture and natural lighting through large windows',
    title: 'Interior Paints',
    description: 'High-quality paints designed for indoor surfaces with excellent coverage and durability.',
  },
  {
    id: 2,
    imageSrc: '../images/Exterior.jpg',
    imageAlt: 'Beautiful modern house exterior with fresh blue paint, white trimmings and landscaped front yard',
    title: 'Exterior Paints',
    description: 'Weather-resistant formulas that protect and beautify your home\'s exterior for years.',
  },
  {
    id: 3,
    imageSrc: '../images/Wood Coatings.jpg',
    imageAlt: 'Polished wooden deck with rich brown finish, outdoor furniture and potted plants',
    title: 'Wood Coatings',
    description: 'Specialized finishes that enhance and protect wood surfaces while maintaining natural beauty.',
  },
  {
    id: 4,
    imageSrc: '../images/Metal Paints.jpg',
    imageAlt: 'Industrial steel beams with protective metallic coating in a contemporary architectural setting',
    title: 'Metal Paints',
    description: 'Durable protective coatings specifically formulated for metal surfaces to prevent corrosion.',
  },
];

function Products() {
  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section-title">
          <h2>Our Product Categories</h2>
          <p>Discover our wide range of premium paints designed for every surface and need.</p>
        </div>
        <div className="products-grid">
          {productsData.map(product => (
            <ProductCard
              key={product.id}
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
