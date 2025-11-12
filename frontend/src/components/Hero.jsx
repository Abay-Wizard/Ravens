import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroImage from '../assets/HeroImage.jpg'

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white text-gray-800 overflow-hidden">
      {/* Subtle Gradient Accent Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-100"
      />

      {/* Decorative Blobs */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.25 }}
        transition={{ duration: 1 }}
        className="absolute -top-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-red-200 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute -bottom-24 -left-16 w-72 sm:w-[28rem] h-72 sm:h-[28rem] bg-red-300 rounded-full blur-3xl"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 sm:pt-28 md:py-32 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-full sm:max-w-xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug md:leading-tight mb-4 sm:mb-6">
            Building an <span className="text-red-600">Inclusive Future</span>  
            <br className="hidden md:block" /> for Deaf Learners in Rwanda
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            We are a passionate team dedicated to ensuring every deaf child in Rwanda has access to quality education — where inclusion, equality, and understanding guide every lesson.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <Link
              to="/about"
              className="bg-red-600 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-md hover:bg-red-700 transition duration-300 text-sm sm:text-base"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="border-2 border-red-600 text-red-600 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-red-600 hover:text-white transition duration-300 text-sm sm:text-base"
            >
              Get Involved
            </Link>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={HeroImage}
          alt="Inclusive education for deaf kids"
          className="rounded-3xl mb-2 shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-56 sm:h-64 md:h-80 lg:h-96 object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
