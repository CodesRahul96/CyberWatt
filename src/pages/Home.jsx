import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Loader from '../components/Loader';

// Lazy-loaded components
const HomeHero = lazy(() => import('./homePages/HomeHero'));
const HomeAbout = lazy(() => import('./homePages/HomeAbout'));
const HomeService = lazy(() => import('./homePages/HomeService'));
const HomeContact = lazy(() => import('./homePages/HomeContact'));

const Home = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: 'easeOut' 
      } 
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Suspense
        fallback={
          <motion.div
            className="text-white text-center py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Loader />
          </motion.div>
        }
      >
        {/* Animated Sections */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <HomeHero />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <HomeAbout />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <HomeService />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <HomeContact />
        </motion.div>
      </Suspense>
    </div>
  );
};

export default Home;