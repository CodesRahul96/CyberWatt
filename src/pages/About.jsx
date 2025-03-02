import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#252525] text-white min-h-screen flex flex-col">
      {/* Hero Section with Gradient */}
      <section className="flex flex-col items-center justify-center py-24 bg-gradient-to-r from-yellow-500 via-yellow-400 to-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed text-white drop-shadow-md">
            Discover who we are, what drives us, and how we’re making an impact.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-8">
            Our Mission
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12 w-full">
            <div className="flex-1">
              <p className="text-lg leading-relaxed mb-6">
                At [Your Company Name], our mission is to innovate and inspire.
                We believe in harnessing technology and creativity to solve
                real-world problems, delivering solutions that are both
                impactful and sustainable.
              </p>
              <p className="text-lg leading-relaxed">
                From small startups to global enterprises, we partner with our
                clients to turn ideas into reality, fostering a culture of
                collaboration and excellence every step of the way.
              </p>
            </div>
            <div className="flex-1 flex justify-center w-full">
              <div className="bg-yellow-400 h-64 w-full max-w-md rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  Mission Image
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="flex flex-col py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-12">
            Meet Our Team
          </h2>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 w-full">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
              <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">Photo</span>
              </div>
              <h3 className="text-xl font-semibold text-yellow-400">
                Lokesh More
              </h3>
              <p className="text-lg">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
              <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">Photo</span>
              </div>
              <h3 className="text-xl font-semibold text-yellow-400">
                Rahul Misal
              </h3>
              <p className="text-lg">Lead Developer</p>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
              <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">Photo</span>
              </div>
              <h3 className="text-xl font-semibold text-yellow-400">
                Pranit Ingulkar
              </h3>
              <p className="text-lg">UX Designer</p>
            </div>
            {/* Team Member 4 */}
            <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
              <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">Photo</span>
              </div>
              <h3 className="text-xl font-semibold text-yellow-400">
                Prafull Gawali
              </h3>
              <p className="text-lg">Marketing Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="flex flex-col py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-12">
            Our Values
          </h2>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 w-full">
            <div className="flex-1 min-w-[250px] p-6 bg-gray-800 rounded-lg flex flex-col items-center">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                Innovation
              </h3>
              <p className="text-lg text-center">
                We embrace cutting-edge ideas to stay ahead of the curve.
              </p>
            </div>
            <div className="flex-1 min-w-[250px] p-6 bg-gray-800 rounded-lg flex flex-col items-center">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                Integrity
              </h3>
              <p className="text-lg text-center">
                Honesty and transparency guide everything we do.
              </p>
            </div>
            <div className="flex-1 min-w-[250px] p-6 bg-gray-800 rounded-lg flex flex-col items-center">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                Teamwork
              </h3>
              <p className="text-lg text-center">
                Collaboration is at the heart of our success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
