import React from 'react';

export default function HeroImage() {
  return (
    <div className="hidden lg:block w-1/2">
      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
        alt="IT Solutions"
        className="w-full object-cover rounded-lg shadow-lg"
      />
    </div>
  );
}