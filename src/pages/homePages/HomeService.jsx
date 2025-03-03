import React from 'react';
import { Link } from 'react-router-dom';

const HomeService = () => {
  // Sample services data (you can customize this)
  const services = [
    {
      title: 'IT Services',
      description:
        "IT services can often include software development processes to create custom applications that fulfill specific business needs. For example, a startup business may rely on its IT service team to create a software application for organizing and maintaining venture capitalist records. In these cases, IT can provide the services you need to develop personalized software and ensure the program's viability through continuous testing, development and maintenance",
    },
    {
      title: 'Electrical Services',
      description:
        "Electrical services are crucial for ensuring that buildings are safe and energy-efficient. They include regular maintenance to identify and address potential issues before they become significant problems, and safety inspections to ensure compliance with electrical codes and safety standards.",
    },
    {
      title: 'Technical Support',
      description:
        "Our Technical Support Engineer provides customer service for computer hardware and software. They troubleshoot issues related to their company's accounts or any other miscellaneous tasks in the field as determined by their manager.",
    },
  ];

  return (
    <section className="bg-[#252525] text-white py-16 h-screen">
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