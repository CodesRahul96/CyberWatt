import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AboutBG from '../../assets/team/team.jpg'; // Ensure this path is correct

const HomeAbout = () => {
  // Animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, x: -100, rotate: -10 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotate: -3, 
      transition: { 
        duration: 0.8, 
        ease: 'easeOut' 
      } 
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Animation variants for text content
  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: 'easeOut', 
        when: 'beforeChildren', 
        staggerChildren: 0.2 
      } 
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for the button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.6 } },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <section className="bg-[#252525] text-white py-20">
      <div className="max-w-7xl  mt-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image with Animation */}
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
          whileHover="hover"
        >
          <div className="relative">
            <div className="w-full h-96 bg-yellow-400 rounded-xl overflow-hidden shadow-2xl">
              <motion.img
                src={AboutBG}
                alt="About Us"
                className="w-full h-full object-cover rotate-3"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full opacity-50"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>
        </motion.div>

        {/* Right: Text Content with Animation */}
        <motion.div
          className="flex-1 flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6"
            variants={childVariants}
          >
            Who We Are
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed mb-6"
            variants={childVariants}
          >
            At CyberWattSolutions, we’re a team of innovators and dreamers, dedicated
            to transforming ideas into reality. With a passion for technology and
            creativity, we deliver solutions that inspire and empower.
          </motion.p>
          <motion.p
            className="text-lg leading-relaxed mb-8"
            variants={childVariants}
          >
            Our mission? To push boundaries, exceed expectations, and make a lasting
            impact—one project at a time.
          </motion.p>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link
              to="/about"
              className="bg-yellow-400 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300 self-start"
            >
              Discover More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout;