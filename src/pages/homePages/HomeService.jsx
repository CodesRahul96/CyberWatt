import React from 'react';
import { Link } from 'react-router-dom';

const HomeService = () => {
  // Sample services data (you can customize this)
  const services = [
    {
      title: 'Web Development',
      description:
        'We craft responsive, high-performance websites tailored to your needs using the latest technologies.',
    },
    {
      title: 'UI/UX Design',
      description:
        'Our team designs intuitive and visually stunning interfaces to enhance user satisfaction.',
    },
    {
      title: 'Consulting',
      description:
        'Get expert advice to streamline your projects and achieve your business goals efficiently.',
    },
  ];

  return (
    <section className="bg-[#252525] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                {service.title}
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                {service.description}
              </p>
              <Link to="/services" className="bg-yellow-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeService;