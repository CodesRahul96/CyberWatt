import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#252525] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row flex-wrap justify-between gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">
            CyberWattSolutions
          </h3>
          <p className="text-lg leading-relaxed max-w-xs">
            Empowering innovation with creativity and technology.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold text-yellow-400 mb-4">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-400 transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-yellow-400 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-400 transition duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold text-yellow-400 mb-4">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-2">
            <li>
              Email:{" "}
              <a
                href="mailto:cyberwattsolutions@gmail.com"
                className="hover:text-yellow-400"
              >
                cyberwattsolutions@gmail.com
              </a>
            </li>
            <li>Phone: +91 92724-27382</li>
            <li>
              Address: FLAT NO.103 GEETANJALI APT GATE NO.61,
              <br /> SINHAGAD ROAD, KIRKATWADI , HAVELI, PUNE, 411024
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold text-yellow-400 mb-4">
            Follow Us
          </h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white hover:text-yellow-400 transition duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Twitter Icon */}
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-400 transition duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Facebook Icon */}
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-lg">
            &copy; 2025 CyberWattSolutions. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
