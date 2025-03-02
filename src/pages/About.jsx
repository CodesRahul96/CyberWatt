import React from "react";
import DevRahul from "../assets/team/rahul.jpg"

const About = () => {
  // Sample team data
  const teamMembers = [
    {
      name: "Lokesh More",
      role: "Founder & CEO",
      image: `${DevRahul}`,
    },
    {
      name: "Rahul Misal",
      role: "Lead Developer",
      image: `${DevRahul}`,
    },
    {
      name: "Pranit Ingulkar",
      role: "Cunsultant & Manager",
      image: `${DevRahul}`,
    },
    {
      name: "Prafull Gawali",
      role: "Marketing Lead",
      image: `${DevRahul}`,
    },
  ];

  return (
    <div className="bg-[#252525] text-white min-h-screen flex flex-col">
      {/* Hero Section with Background Image */}
      <section className="relative flex items-center justify-center py-24 bg-gradient-to-r from-yellow-500 via-yellow-400 to-[#252525]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url('https://via.placeholder.com/1920x600?text=Team+Image')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 drop-shadow-lg">
            About Us
          </h1>
          <p className="mt-4 text-xl max-w-2xl leading-relaxed">
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
            <div className="flex-1 flex justify-center">
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
            Our Team
          </h2>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8 w-full lg:flex-row lg:flex-nowrap">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-full md:w-1/2 lg:w-auto min-w-[200px] bg-[#252525] p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-700"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mb-4 object-cover border-2 border-yellow-400 transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-yellow-400">
                  {member.name}
                </h3>
                <p className="text-lg text-gray-300">{member.role}</p>
              </div>
            ))}
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

export default About;
