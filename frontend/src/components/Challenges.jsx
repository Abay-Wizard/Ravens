import React from "react";
import { motion } from "framer-motion";

const Challenges = () => {
  const challenges = [
    {
      title: "Introduction",
      content:
        "This challenge was about introducing ourselves, our passions, and our backgrounds.",
      video: "https://www.youtube.com/embed/ti9RPaRMxUE",
    },
    {
      title: "Discover Africa",
      content:
        "We had the privilege of researching about family structures and cultures in Kenya and Tanzania.",
      video: "https://www.youtube.com/embed/uf4YRFwIYc4",
    },
    {
      title: "HELP-LAB",
      content:
        "In this challenge, we helped people and children in need by providing daily necessities and emotional support.",
      video: "https://www.youtube.com/embed/ggeQLeQsxJE",
    },
    {
      title: "Hunt for Treasure",
      content:
        "We had the chance to engage with the University of Kigali on how to ensure children with disabilities enjoy inclusive education without discrimination.",
      video: "https://www.youtube.com/embed/u-gOTwFDHYY",
    },
    {
      title: "Launch Your Mission Resubmission",
      content:
        "In this challenge, we clearly defined the problem we’re addressing and outlined our action plan for real impact.",
      video: "https://www.youtube.com/embed/P2LNhI-85zo",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-red-50 text-gray-800 px-6 py-16 md:px-20">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-14"
      >
        Our Challenges
      </motion.h1>

      {/* Challenge Cards */}
      <div className="grid gap-12 md:gap-16">
        {challenges.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden border-t-4 border-red-500"
          >
            <div className="flex flex-col md:flex-row items-center">
              {/* Video */}
              <div className="w-full md:w-1/2">
                <iframe
                  className="w-full h-64 md:h-80 rounded-none md:rounded-l-3xl"
                  src={item.video}
                  title={item.title}
                  allowFullScreen
                ></iframe>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 p-6 md:p-10 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
