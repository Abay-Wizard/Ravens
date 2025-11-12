import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <section className="min-h-screen bg-red-50 flex flex-col items-center justify-start px-6 pt-24 sm:pt-32 pb-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Get in <span className="text-red-600">Touch</span> with Us
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl">
          Have questions or suggestions? We’re here to listen. Reach out and help us
          continue building an inclusive future for deaf learners in Rwanda.
        </p>
      </motion.div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-8 sm:p-12 relative overflow-hidden"
      >
        {/* Optional gradient accent */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-100 rounded-full blur-3xl"></div>

        {isSubmitted ? (
          <div className="text-center py-10 relative z-10 flex flex-col items-center gap-6">
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-green-600 text-2xl font-bold mb-2"
            >
              🎉 Message Sent!
            </motion.p>
            <p className="text-gray-600 text-lg">
              Thank you for reaching out. We’ll get back to you as soon as possible.
            </p>
            <button
              onClick={handleReset}
              className="bg-red-600 cursor-pointer text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300 mt-4 text-lg"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 relative z-10"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Write your message..."
                className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 resize-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-600 cursor-pointer text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300 mt-2 text-lg"
            >
              Send Message
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default ContactUs;
