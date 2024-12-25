import React from 'react';

const stats = [
  { number: '100+', label: 'Completed Projects' },
  { number: '50+', label: 'Regular Clients' },
  { number: '10+', label: 'Years of Experience' },
];

export default function Stats() {
  return (
    <div className="bg-blue-600 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}