import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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

    // Replace these with your EmailJS credentials
    const serviceId = "YOUR_SERVICE_ID"; // e.g., 'service_xxxxxxx'
    const templateId = "YOUR_TEMPLATE_ID"; // e.g., 'template_xxxxxxx'
    const publicKey = "YOUR_PUBLIC_KEY"; // e.g., 'xxxxxxxxxxxxxxx'

    // Send email using EmailJS
    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Email failed to send:", error.text);
          setStatus("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        // Clear status message after 5 seconds
        setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <div className="bg-[#252525] text-white min-h-screen flex flex-col">
      {/* Hero Section with Gradient */}
      <section className="flex flex-col items-center justify-center py-24 bg-gradient-to-r from-yellow-500 via-yellow-400 to-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed text-white drop-shadow-md">
            We’re here to help! Reach out with any questions, feedback, or
            inquiries.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="flex flex-col py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12">
          {/* Form */}
          <div className="flex-1 flex flex-col">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-8">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col">
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
              </div>
              <div className="flex flex-col">
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
              </div>
              <div className="flex flex-col">
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
              </div>
              <div className="flex flex-col">
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
              </div>
              <button
                type="submit"
                className="bg-yellow-400 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300 self-start"
              >
                Send Message
              </button>
              {status && (
                <p
                  className={`text-lg mt-4 ${
                    status.includes("success")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 flex flex-col">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-8">
              Get in Touch
            </h2>
            <div className="flex flex-col gap-6">
              <div>
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
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  Phone
                </h3>
                <p>+91 92724-27382</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  Address
                </h3>
                <p>
                  FLAT NO.103 GEETANJALI APT GATE NO.61,
                  <br /> SINHAGAD ROAD, KIRKATWADI , HAVELI, PUNE, 411024
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  Hours
                </h3>
                <p>Monday - Friday: 9 AM - 5 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
