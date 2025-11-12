import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menu, setMenu] = useState("home");

  const navLinks = [
    { name: "Home", path: "/", id: "home" },
    { name: "About", path: "/about", id: "about" },
    { name: "Contact Us", path: "/contact", id: "contact-us" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-extrabold text-red-700 tracking-tight"
        >
          Ravens
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg text-gray-800 font-semibold">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => setMenu(link.id)}
              className={`transition-all duration-200 pb-1 ${
                menu === link.id
                  ? "text-red-600 border-b-2 border-red-600"
                  : "hover:text-red-500"
              }`}
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer text-red-700">
          {isMenuOpen ? (
            <X size={30} onClick={() => setIsMenuOpen(false)} />
          ) : (
            <Menu size={30} onClick={() => setIsMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-white shadow-inner overflow-hidden"
          >
            <ul className="flex flex-col items-center py-6 space-y-6 text-lg font-semibold text-gray-800">
              {navLinks.map((link) => (
                <motion.li
                  key={link.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setMenu(link.id);
                  }}
                  className={`${
                    menu === link.id
                      ? "text-red-600 font-bold"
                      : "hover:text-red-500"
                  }`}
                >
                  <Link to={link.path}>{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
