import React from 'react';
import { Link } from 'react-router-dom';
import AboutBG from '../../assets/team/team.jpg'

const HomeAbout = () => {
  return (
    <section className="bg-[#252525] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image with Transition */}
        <div className="flex-1 transition-all duration-700 ease-out transform hover:scale-105">
          <div className="relative">
            <div className="w-full h-96 bg-yellow-400 rounded-xl overflow-hidden shadow-2xl transform -rotate-3">
              <img
                src={AboutBG}
                alt="About Us"
                className="w-full h-full object-cover transform rotate-3 transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full opacity-50"></div>
          </div>
        </div>

        {/* Right: Text Content with Transition */}
        <div className="flex-1 flex flex-col transition-all duration-700 ease-out">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 animate-fade-in">
            Who We Are
          </h2>
          <p className="text-lg leading-relaxed mb-6 animate-fade-in delay-200">
            At CyberWattSolutions, we’re a team of innovators and dreamers, dedicated
            to transforming ideas into reality. With a passion for technology and
            creativity, we deliver solutions that inspire and empower.
          </p>
          <p className="text-lg leading-relaxed mb-8 animate-fade-in delay-400">
            Our mission? To push boundaries, exceed expectations, and make a lasting
            impact—one project at a time.
          </p>
          <Link to="/about" className="bg-yellow-400 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 self-start">
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;