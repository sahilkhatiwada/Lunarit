import React from 'react';
import { Monitor, Smartphone, Server } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Custom web solutions built with modern technologies',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications',
  },
  {
    icon: Server,
    title: 'Desktop App Development',
    description: 'Powerful desktop applications for business needs',
  },
];

export default function Services() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}