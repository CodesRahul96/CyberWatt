import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const linkVariants = {
    hover: { scale: 1.05, color: "#facc15" }, // Yellow-400
    tap: { scale: 0.95 },
  };

  const iconVariants = {
    hover: { scale: 1.2, rotate: 10 },
    tap: { scale: 0.9 },
  };

  return (
    <motion.footer
      className="bg-[#252525] text-white py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row flex-wrap justify-between gap-8">
        {/* Logo Section */}
        <motion.div
          className="flex flex-col items-start"
          variants={sectionVariants}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400 mb-4">
            CyberWattSolutions
          </h3>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-xs">
            Empowering innovation with creativity and technology.
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div className="flex flex-col" variants={sectionVariants}>
          <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-yellow-400 mb-4">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2">
            {["Home", "About Us", "Services", "Contact Us"].map(
              (item, index) => (
                <motion.li key={index} variants={sectionVariants}>
                  <Link
                    to={`item === 'Home' ? '/' : /${item
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    className="text-sm sm:text-base lg:text-lg hover:text-yellow-400 transition duration-300"
                  >
                    <motion.span
                      variants={linkVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {item}
                    </motion.span>
                  </Link>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div className="flex flex-col" variants={sectionVariants}>
          <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-yellow-400 mb-4">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-2 text-sm sm:text-base lg:text-lg">
            <motion.li variants={sectionVariants}>
              Email:{" "}
              <a
                href="mailto:cyberwattsolutions@gmail.com"
                className="hover:text-yellow-400"
              >
                <motion.span
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  cyberwattsolutions@gmail.com
                </motion.span>
              </a>
            </motion.li>
            <motion.li variants={sectionVariants}>
              Phone: +91 92724-27382
            </motion.li>
            <motion.li variants={sectionVariants}>
              Address: FLAT NO.103 GEETANJALI APT GATE NO.61,
              <br /> SINHAGAD ROAD, KIRKATWADI, HAVELI, PUNE, 411024
            </motion.li>
          </ul>
        </motion.div>

        {/* Social Media Links */}
        <motion.div className="flex flex-col" variants={sectionVariants}>
          <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-yellow-400 mb-4">
            Follow Us
          </h4>
          <div className="flex gap-4">
            <motion.a
              href="#"
              className="text-white hover:text-yellow-400 transition duration-300"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Twitter Icon */}
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              className="text-white hover:text-yellow-400 transition duration-300"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Facebook Icon */}
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="mt-12 border-t border-gray-700 pt-6"
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-sm sm:text-base lg:text-lg"
            variants={sectionVariants}
          >
            © 2025 CyberWattSolutions. All rights reserved.
          </motion.p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service"].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-sm sm:text-base lg:text-lg hover:text-yellow-400 transition duration-300"
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
