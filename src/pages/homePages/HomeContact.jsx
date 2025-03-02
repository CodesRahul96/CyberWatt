import React, { useState } from "react";

const HomeContact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission (just logs for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form (optional)
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-[#252525] text-white py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Contact Us
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Form Section */}
          <div className="md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                  rows="5"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-400 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
              Get in Touch
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              Have questions? We’d love to hear from you!
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:cyberWattSolutions@gmail.com"
                  className="hover:text-yellow-400"
                >
                  cyberWattSolutions@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Phone:</span> +91 92724-27382
              </li>
              <li>
                <span className="font-semibold">Address:</span>FLAT NO.103
                GEETANJALI APT GATE NO.61, SINHAGAD ROAD,<br /> KIRKATWADI, HAVELI, PUNE, 411024
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
