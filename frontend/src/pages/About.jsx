import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen mt-4 h-full bg-linear-to-b from-white to-red-50 text-gray-800 flex flex-col items-center px-6 py-16 md:px-20">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-red-600 mb-10 text-center"
      >
        About Us
      </motion.h1>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl bg-white shadow-lg rounded-3xl p-8 md:p-12 mb-12 border-t-4 border-red-500"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Our think tank mission is to make education more accessible and empowering for Deaf and hard of hearing people in our community using modern tools, better support, and a deep respect for every learner's language and identity in order to create a more inclusive school culture.
        </p>
      </motion.section>

      {/* Problem Section */}
      <motion.section
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-5xl bg-white shadow-lg rounded-3xl p-8 md:p-12 border-t-4 border-red-500"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-4">
          The Problem We’re Solving
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Deaf and hard of hearing students in our community face limited access to inclusive education due to a lack of modern tools, trained support, and recognition of their language and identity. In Rwanda, over 70,000 people live with hearing and speech impairments, according to the Rwanda National Union of the Deaf (RNUD). A study conducted in Kigali found that 13.3% of school-aged children experience some form of hearing impairment, with 1.4% having disabling hearing loss. Despite these significant numbers, many schools remain ill-equipped to meet their needs.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          This lack of inclusive education infrastructure results in barriers to communication, limited participation, and poor academic outcomes for deaf and hard of hearing students. Over the next 2–3 years, we aim to close this gap by improving access to assistive technology, providing staff training in inclusive practices and sign language, and creating a school culture that respects and empowers every learner—ensuring that no student is left behind due to their hearing ability.
        </p>
      </motion.section>
    </div>
  );
};

export default About;
