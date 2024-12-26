import React from 'react';

const products = [
  {
    id: 1,
    title: 'Lunar School Management Software',
    description:
      'Single system containing accounting, library, examination, all total school information system. It is a desktop/web application available at minimal cost with enterprise quality and easy to use philosophy!',
    image: 'https://via.placeholder.com/150',
    link: '/product-1',
  },
  {
    id: 2,
    title: 'Lunaaccount (Cooperative Software)',
    description:
      'LunaAccount is a user-friendly cooperative software solution designed to streamline financial operations for cooperatives. It offers features such as member management, savings tracking, loan processing, and detailed reporting, empowering cooperatives to enhance efficiency and deliver better financial services.',
    image: 'https://via.placeholder.com/150',
    link: '/product-2',
  },
  {
    id: 3,
    title: 'LunaHR (Human Resource Management)',
    description:
      'LunaHR is a comprehensive HR management tool that simplifies employee tracking, payroll processing, performance evaluations, and recruitment workflows. Perfect for small to medium-sized businesses.',
    image: 'https://via.placeholder.com/150',
    link: '/product-3',
  },
];

export default function ProductSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-500">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a
                  href={product.link}
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
