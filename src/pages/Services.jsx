import React from "react";
import { motion } from "framer-motion";
import { MdElectricBolt, MdOutlineDesignServices } from "react-icons/md";
import { GrEmergency } from "react-icons/gr";
import { SiSpringsecurity } from "react-icons/si";
import {
  FaArrowsAlt,
  FaLaptopCode,
  FaHeadset,
  FaPhoneAlt,
} from "react-icons/fa";
import Ourservicebg from "../assets/backgrounds/ourservicebg.jpg";

const Services = () => {
  const servicesData = [
    {
      icon: <MdElectricBolt className="text-yellow-400 w-12 h-12" />,
      title: "Residential Electrician Services",
      description:
        "Our team install, maintain, inspect and repair wiring and electrical systems and components.",
      features: [
        "Wiring/Re-Wiring",
        "Inspections",
        "Lightning Installation",
        "Electrical Panel Services",
        "Outlet and Switch Installation",
      ],
    },
    {
      icon: <GrEmergency className="text-yellow-400 w-12 h-12" />,
      title: "Emergency Services",
      description:
        "We handle urgent repairs like electrical shocks, power outages, or faulty wiring.",
      features: [
        "24/7 response for power outages",
        "Fixing fire marshal violations (e.g., emergency lighting)",
        "Home Safety Inspection",
        "Appliance Installation",
        "Surge Protection",
      ],
    },
    {
      icon: <SiSpringsecurity className="text-yellow-400 w-12 h-12" />,
      title: "Security Systems Services",
      description:
        "We protect sensitive data, secure networks and keep systems safe from hackers.",
      features: [
        "Installation/Wiring for CCTV cameras",
        "Installing motion sensors and Security lighting",
        "DVR Installing and maintenance",
      ],
    },
    {
      icon: <FaArrowsAlt className="text-yellow-400 w-12 h-12" />,
      title: "Additional Services",
      description:
        "Our team Electricians install, maintain, and repair electrical power, communications, lighting, and control systems in homes, businesses, and factories.",
      features: [
        "Consultation and Design",
        "Training and Certification",
        "Emergency Services",
        "Custom Projects",
      ],
    },
    {
      icon: <FaLaptopCode className="text-yellow-400 w-12 h-12" />,
      title: "Website/App Development",
      description:
        "We create responsive, modern websites tailored to your business needs, ensuring optimal performance and user experience across all devices.",
      features: [
        "Custom Design",
        "SEO Optimization",
        "E-commerce Solutions",
        "Maintenance",
      ],
    },
    {
      icon: <MdOutlineDesignServices className="text-yellow-400 w-12 h-12" />,
      title: "UI/UX Design",
      description:
        "Our team designs intuitive and visually stunning interfaces to enhance user satisfaction. We focus on creating seamless experiences that keep your audience engaged.",
      features: [
        "Custom Design",
        "SEO Optimization",
        "E-commerce Solutions",
        "Maintenance",
      ],
    },
    {
      icon: <FaPhoneAlt className="text-yellow-400 w-12 h-12" />,
      title: "Consulting",
      description:
        "Get expert advice to streamline your projects and achieve your business goals efficiently. We provide strategic insights and actionable plans to drive success.",
      features: [
        "Design & Layout.",
        "Content Creation.",
        "Testing, Review, and Launch",
        "Maintenance and Updation",
      ],
    },
    {
      icon: <FaHeadset className="text-yellow-400 w-12 h-12" />,
      title: "Technical Support",
      description:
        "Offering 24/7 technical support to ensure your systems run smoothly, with quick resolution to any issues.",
      features: [
        "24/7 Availability",
        "Ticket System",
        "Remote Assistance",
        "On-site Support",
      ],
    },
  ];

  // Animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const sectionVariants = {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      shadow: "xl",
      transition: { duration: 0.3 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="bg-[#252525] text-white min-h-screen flex flex-col">
      {/* Hero Section with Gradient and Animation */}
      {/* <motion.section
        className="flex flex-col items-center justify-center py-24 bg-gradient-to-r from-yellow-500 via-yellow-400 to-[#252525]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={heroVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            variants={childVariants}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto leading-relaxed text-white drop-shadow-md"
            variants={childVariants}
          >
            Discover our comprehensive range of professional services tailored
            to meet your needs.
          </motion.p>
        </div>
      </motion.section> */}

      <motion.section
        className="relative flex items-center justify-center py-24 bg-gradient-to-r from-yellow-500 via-yellow-400 to-[#252525]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={heroVariants}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url(${Ourservicebg})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-yellow-400 drop-shadow-lg"
            variants={childVariants}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="mt-4 text-xl max-w-2xl leading-relaxed"
            variants={childVariants}
          >
            Discover our comprehensive range of professional services tailored
            to meet your needs.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Section with Animation */}
      <motion.section
        className="flex flex-col py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.h2
            className="text-3xl font-semibold text-yellow-400 mb-12"
            variants={childVariants}
          >
            What We Offer
          </motion.h2>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 w-full">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                className="flex-1 min-w-[300px] bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
              >
                <motion.div
                  className="flex items-center mb-4"
                  variants={childVariants}
                >
                  {service.icon}
                  <h3 className="text-2xl font-semibold text-yellow-400 ml-4">
                    {service.title}
                  </h3>
                </motion.div>
                <motion.p
                  className="text-lg leading-relaxed mb-6"
                  variants={childVariants}
                >
                  {service.description}
                </motion.p>
                <motion.ul
                  className="list-disc list-inside text-lg mb-6 flex-1"
                  variants={childVariants}
                >
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300">
                      {feature}
                    </li>
                  ))}
                </motion.ul>
                <motion.button
                  className="bg-yellow-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300 self-start"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
