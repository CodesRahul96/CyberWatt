import React from 'react';

const Services = () => {
  // Sample services data
  const servicesData = [
    {
      title: 'Web Development',
      description:
        'We craft responsive, high-performance websites tailored to your needs using the latest technologies. From custom designs to robust backend systems, we ensure your online presence stands out.',
    },
    {
      title: 'UI/UX Design',
      description:
        'Our team designs intuitive and visually stunning interfaces to enhance user satisfaction. We focus on creating seamless experiences that keep your audience engaged.',
    },
    {
      title: 'Consulting',
      description:
        'Get expert advice to streamline your projects and achieve your business goals efficiently. We provide strategic insights and actionable plans to drive success.',
    },
  ];

  return (
    <div className="bg-[#252525] text-white min-h-screen flex flex-col">
      {/* Hero Section with Gradient */}
      <section
        className="flex flex-col items-center justify-center py-24 bg-gradient-to-r from-yellow-500 via-yellow-400 to-[#252525]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Our Services
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed text-white drop-shadow-md">
            Explore the range of services we offer to bring your ideas to life with
            creativity and precision.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="flex flex-col py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-12">
            What We Offer
          </h2>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 w-full">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="flex-1 min-w-[300px] bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col"
              >
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                  {service.title}
                </h3>
                <p className="text-lg leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <button className="bg-yellow-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300 self-start">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;