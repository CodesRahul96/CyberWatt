import React from "react";
import Mission from "../assets/backgrounds/mission.jpg";
import Aboutusbg from "../assets/backgrounds/aboutusbg.jpg";
import { motion } from "framer-motion";
import CeoLokesh from "../assets/team/lokesh.png";
import DevRahul from "../assets/team/rahul.jpg";
import ManagerPranit from "../assets/team/team.png";
import SeoPrafull from "../assets/team/team.png";

const About = () => {
  // Sample team data (fixed template literal syntax)
  const teamMembers = [
    { name: "Lokesh More", role: "Founder & CEO", image: CeoLokesh },
    { name: "Rahul Misal", role: "Lead Developer", image: DevRahul },
    {
      name: "Pranit Ingulkar",
      role: "Consultant & Manager",
      image: ManagerPranit,
    },
    { name: "Prafull Gawali", role: "Marketing Lead", image: SeoPrafull },
  ];

  // Animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
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

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-[#252525] text-white min-h-screen flex flex-col">
      {/* Hero Section with Gradient and Animation */}
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
            backgroundImage: `url(${Aboutusbg})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-yellow-400 drop-shadow-lg"
            variants={childVariants}
          >
            About Us
          </motion.h1>
          <motion.p
            className="mt-4 text-xl max-w-2xl leading-relaxed"
            variants={childVariants}
          >
            Discover who we are, what drives us, and how we’re making an impact.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section with Animation */}
      <motion.section
        className="flex flex-col py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.h2
            className="text-3xl font-semibold text-yellow-400 mb-8"
            variants={childVariants}
          >
            Our Mission
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center gap-12 w-full">
            <motion.div className="flex-1" variants={childVariants}>
              <p className="text-lg leading-relaxed mb-6">
                At CyberWattSolutions, our mission is to innovate and inspire.
                We believe in harnessing technology and creativity to solve
                real-world problems, delivering solutions that are both
                impactful and sustainable.
              </p>
              <p className="text-lg leading-relaxed">
                From small startups to global enterprises, we partner with our
                clients to turn ideas into reality, fostering a culture of
                collaboration and excellence every step of the way.
              </p>
            </motion.div>
            <motion.div
              className="flex-1 flex justify-center w-full"
              variants={childVariants}
            >
              <div className="h-64 w-full max-w-md rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold rounded-lg">
                  <img
                    src={`${Mission}`}
                    alt="Mission"
                    className="rounded-lg"
                  />
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section with Animation and Updated Layout */}
      <motion.section
        className="flex flex-col py-16 w-full"
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
            Our Team
          </motion.h2>
          <div className="flex flex-col gap-8 w-full md:flex-row md:flex-wrap md:justify-between lg:flex-row lg:flex-nowrap">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center w-full md:w-[calc(50%-1rem)] lg:w-auto min-w-[200px] bg-gray-800 p-6 rounded-lg shadow-lg"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mb-4 object-cover border-2 border-yellow-400"
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.h3
                  className="text-xl font-semibold text-yellow-400"
                  variants={childVariants}
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-300"
                  variants={childVariants}
                >
                  {member.role}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section with Animation */}
      <motion.section
        className="flex flex-col py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.h2
            className="text-3xl font-semibold text-yellow-400 mb-12"
            variants={childVariants}
          >
            Our Values
          </motion.h2>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 w-full">
            {["Innovation", "Integrity", "Teamwork"].map((value, index) => (
              <motion.div
                key={index}
                className="flex-1 min-w-[250px] p-6 bg-gray-800 rounded-lg flex flex-col items-center"
                variants={childVariants}
              >
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  {value}
                </h3>
                <p className="text-lg text-center">
                  {value === "Innovation" &&
                    "We embrace cutting-edge ideas to stay ahead of the curve."}
                  {value === "Integrity" &&
                    "Honesty and transparency guide everything we do."}
                  {value === "Teamwork" &&
                    "Collaboration is at the heart of our success."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
