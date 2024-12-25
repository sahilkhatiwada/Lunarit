import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}