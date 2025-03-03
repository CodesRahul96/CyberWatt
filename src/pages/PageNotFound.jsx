import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: { scale: 1.1, rotate: 5 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.9 },
    },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="bg-[#252525] text-white min-h-screen flex items-center justify-center py-12">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Animated 404 */}
        <motion.h1
          className="text-8xl sm:text-9xl lg:text-[12rem] font-bold text-yellow-400 drop-shadow-lg flex justify-center gap-4"
          variants={textVariants}
        >
          <motion.span variants={numberVariants} whileHover="hover">
            4
          </motion.span>
          <motion.span variants={numberVariants} whileHover="hover">
            0
          </motion.span>
          <motion.span variants={numberVariants} whileHover="hover">
            4
          </motion.span>
        </motion.h1>

        {/* Animated Title */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-6"
          variants={textVariants}
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Animated Description */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto mt-4 leading-relaxed text-gray-300"
          variants={textVariants}
        >
          It looks like you’ve wandered into the digital wilderness. Don’t
          worry, we’ll guide you back!
        </motion.p>

        {/* Animated Button */}
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Link
            to="/"
            className="inline-block mt-8 bg-yellow-400 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300"
          >
            Back to Home
          </Link>
        </motion.div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-yellow-500 rounded-full opacity-20"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-yellow-400 rounded-full opacity-20"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>
    </div>
  );
};

export default PageNotFound;

