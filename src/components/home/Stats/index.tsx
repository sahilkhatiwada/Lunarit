import React from 'react';
import { motion } from 'framer-motion';
import StatCard from './StatCard';

const stats = [
  { number: '100+', label: 'Completed Projects' },
  { number: '50+', label: 'Regular Clients' },
  { number: '10+', label: 'Years of Experience' },
];

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <StatCard {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
