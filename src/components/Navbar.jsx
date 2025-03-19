import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-20">
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-5 md:px-0 flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/">
            <img
              src="https://themeperch.net/doctoraltheme/wp-content/themes/doctoral/assets/images/logo.png"
              alt="Company Logo"
              className="w-36 h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-lg">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/explore" className="hover:text-blue-600">Explore</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
          </div>

          {/* Appointment Button */}
          <Link
            to="#"
            className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition duration-300"
          >
            Make an Appointment
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-5 md:hidden flex flex-col">
          <button className="self-end mb-5" onClick={() => setIsOpen(false)}>
            <FaTimes size={28} />
          </button>
          <Link to="/" className="py-2" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="py-2" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/explore" className="py-2" onClick={() => setIsOpen(false)}>
            Explore
          </Link>
          <Link to="/contact" className="py-2" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
          <Link
            to="#"
            className="mt-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition duration-300 text-center"
            onClick={() => setIsOpen(false)}
          >
            Make an Appointment
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;