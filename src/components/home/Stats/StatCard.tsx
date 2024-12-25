import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
  icon?: React.ReactNode; // Optional: To include an icon if provided
}

export default function StatCard({ number, label, icon }: StatCardProps) {
  return (
    <div className="text-white p-4 rounded-lg shadow-lg bg-blue-700 hover:bg-blue-500 transition-transform transform hover:scale-105">
      {icon && <div className="text-5xl mb-4">{icon}</div>}{' '}
      {/* Optional Icon */}
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-blue-100 text-lg">{label}</div>
    </div>
  );
}
