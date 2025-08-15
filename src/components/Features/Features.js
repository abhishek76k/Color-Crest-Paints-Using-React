import React from 'react';
import FeatureCard from './FeatureCard';
import './Features.css';

const featuresData = [
  {
    id: 1,
    icon: '🌿',
    title: 'Eco-Friendly',
    description: 'Our paints are low-VOC and environmentally responsible without compromising quality.',
  },
  {
    id: 2,
    icon: '⏳',
    title: 'Long-Lasting',
    description: 'Formulated to maintain their beauty and protection for years, saving you time and money.',
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Quick Drying',
    description: 'Advanced formulas allow for quicker application and faster project completion times.',
  },
  {
    id: 4,
    icon: '🎨',
    title: '250+ Colors',
    description: 'Extensive color palette with expert consultation to find your perfect shade.',
  },
];

function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose ColorCrest Paints</h2>
          <p>We're committed to delivering exceptional quality and service to all our customers.</p>
        </div>
        <div className="features-grid">
          {featuresData.map(feature => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
