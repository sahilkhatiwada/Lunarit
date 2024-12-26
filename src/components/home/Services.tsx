import { Monitor, Smartphone, Server, Cloud, Shield, Database } from 'lucide-react';
import ServiceCard from './ServiceCard';

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
    title: 'Desktop Applications',
    description: 'Powerful desktop applications for business needs',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions for your business',
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Efficient database design and optimization',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-500">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of IT solutions to help your business thrive in the digital age
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}