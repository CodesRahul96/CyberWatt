import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import Contactusbg from "../assets/backgrounds/contactusbg.jpg"

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State for submission status
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "YOUR_SERVICE_ID"; // Replace with your EmailJS Service ID
    const templateId = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS Template ID
    const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS Public Key

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("Email failed to send:", error.text);
          setStatus("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setTimeout(() => setStatus(""), 5000);
      });
  };

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const statusVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
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
                  backgroundImage:
                    `url(${Contactusbg})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="relative z-10 flex flex-col items-center justify-center pt-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl">
                <motion.h1
                  className="text-5xl md:text-6xl font-bold text-yellow-400 drop-shadow-lg"
                  variants={childVariants}
                >
                  Contact Us
                </motion.h1>
                <motion.p
                  className="mt-4 text-xl max-w-2xl leading-relaxed"
                  variants={childVariants}
                >
                  We’re here to help! Reach out with any questions, feedback, or
                  inquiries.
                </motion.p>
              </div>
            </motion.section>

      {/* Contact Form and Info Section with Animation */}
      <motion.section
        className="flex flex-col py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12">
          {/* Form */}
          <motion.div className="flex-1 flex flex-col" variants={childVariants}>
            <motion.h2
              className="text-3xl font-semibold text-yellow-400 mb-8"
              variants={childVariants}
            >
              Send Us a Message
            </motion.h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <motion.div className="flex flex-col" variants={childVariants}>
                <label htmlFor="name" className="text-lg mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                  placeholder="Your Name"
                  required
                />
              </motion.div>
              <motion.div className="flex flex-col" variants={childVariants}>
                <label htmlFor="email" className="text-lg mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                  placeholder="Your Email"
                  required
                />
              </motion.div>
              <motion.div className="flex flex-col" variants={childVariants}>
                <label htmlFor="phone" className="text-lg mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                  placeholder="Your Phone Number"
                />
              </motion.div>
              <motion.div className="flex flex-col" variants={childVariants}>
                <label htmlFor="message" className="text-lg mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                  rows="5"
                  placeholder="Your Message"
                  required
                />
              </motion.div>
              <motion.button
                type="submit"
                className="bg-yellow-400 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300 self-start"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Send Message
              </motion.button>
              <AnimatePresence>
                {status && (
                  <motion.p
                    className={`text-lg mt-4 ${
                      status.includes("success")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                    variants={statusVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {status}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="flex-1 flex flex-col" variants={childVariants}>
            <motion.h2
              className="text-3xl font-semibold text-yellow-400 mb-8"
              variants={childVariants}
            >
              Get in Touch
            </motion.h2>
            <div className="flex flex-col gap-6">
              <motion.div variants={childVariants}>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  Email
                </h3>
                <p>
                  <a
                    href="mailto:cyberwattsolutions@gmail.com"
                    className="hover:text-yellow-400"
                  >
                    cyberwattsolutions@gmail.com
                  </a>
                </p>
              </motion.div>
              <motion.div variants={childVariants}>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  Phone
                </h3>
                <p>+91 92724-27382</p>
              </motion.div>
              <motion.div variants={childVariants}>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  Address
                </h3>
                <p>
                  FLAT NO.103 GEETANJALI APT GATE NO.61,
                  <br /> SINHAGAD ROAD, KIRKATWADI, HAVELI, PUNE, 411024
                </p>
              </motion.div>
              <motion.div variants={childVariants}>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  Hours
                </h3>
                <p>Monday - Friday: 9 AM - 5 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
