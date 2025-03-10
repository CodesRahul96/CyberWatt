import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/logo/yellowlogo.svg"; // Ensure this path is correct
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -100, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Change color after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <nav
      className={`w-screen text-white fixed top-0 left-0 z-50  transition-all duration-300 ${
        isScrolled ? "bg-[#323232]" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center p-2 md:px-8 lg:px-12 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="h-20 md:h-14 cursor-pointer"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, color: "#facc15" }} // Yellow-400 on hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={`${
                  item.toLowerCase() === "home" ? "" : item.toLowerCase()
                }`}
                className="px-3 py-2 text-lg font-medium rounded-md transition-colors duration-200"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <GiHamburgerMenu
            className={`text-3xl text-yellow-400 cursor-pointer ${
              isActive ? "hidden" : "block"
            }`}
            onClick={() => setIsActive(true)}
          />
          <ImCross
            className={`text-3xl text-yellow-400 cursor-pointer ${
              isActive ? "block" : "hidden"
            }`}
            onClick={() => setIsActive(false)}
          />
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isActive && (
          <motion.ul
            className="flex flex-col items-center justify-center py-6 bg-[#323232] text-white md:hidden absolute top-25 left-0 w-full shadow-lg"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {["Home", "About", "Services", "Contact"].map((item) => (
              <motion.li
                key={item}
                variants={itemVariants}
                className="w-full text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={`${
                    item.toLowerCase() === "home" ? "" : item.toLowerCase()
                  }`}
                  className="block px-4 py-10 text-lg font-medium hover:text-yellow-400 transition-colors duration-200"
                  onClick={() => setIsActive(false)}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
