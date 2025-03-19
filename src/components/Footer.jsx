import React from "react";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Subscription Section */}
      <div className="relative w-full h-[300px] ">
        <img
          src="https://img.freepik.com/premium-photo/stethoscope-pills-pen-keyboard-blue-background_384529-50.jpg?uid=R189609995&ga=GA1.1.1481950669.1740815275&semt=ais_hybrid"
          alt="Subscription"
          className="w-full h-[300px]"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#00000089] bg-opacity-50 text-white px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold">We Are Ready to Help You</h1>
          <p className="text-lg md:text-xl my-3">Subscribe for Monthly Health Tips</p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md outline-none w-64 bg-white text-black"
              required
            />
            <button
              type="submit"
              className="bg-green-600 px-2 py-2 rounded-r-md text-white font-semibold hover:bg-green-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <img
            src="https://themeperch.net/doctoraltheme/wp-content/themes/doctoral/assets/images/logo.png"
            alt="HMS Logo"
            className="w-32 mx-auto md:mx-0"
          />
          <p className="mt-3 text-sm">
            Your trusted healthcare partner offering high-quality medical
            services with expert doctors and cutting-edge facilities.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <FaFacebookSquare className="text-blue-500 text-2xl hover:text-blue-700" />
            <IoLogoYoutube className="text-red-500 text-2xl hover:text-red-700" />
            <FaTwitter className="text-blue-400 text-2xl hover:text-blue-600" />
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-xl font-semibold border-b pb-2">Our Services</h2>
          <ul className="mt-3 space-y-2">
            <li><Link to="/MRI" className="hover:text-blue-400 transition-colors duration-300">MRI Scanning</Link></li>
            <li><Link to="/Xray" className="hover:text-blue-400 transition-colors duration-300">Cancer Screening</Link></li>
            <li><Link to="/Emergency" className="hover:text-blue-400 transition-colors duration-300">Emergency Surgery</Link></li>
            <li><Link to="/Neurology" className="hover:text-blue-400 transition-colors duration-300">Neurology</Link></li>
          </ul>
        </div>

        {/* Specialist Doctors */}
        <div>
          <h2 className="text-xl font-semibold border-b pb-2">Specialist Doctors</h2>
          <ul className="mt-3 space-y-2">
            <li><Link to="/Shahida" className="hover:text-blue-400 transition-colors duration-300">Dr. Shahida Shafi</Link></li>
            <li><Link to="/Faizan" className="hover:text-blue-400 transition-colors duration-300">Dr. Faizan Akram</Link></li>
            <li><Link to="/Adil" className="hover:text-blue-400 transition-colors duration-300">Dr. Adil Haider</Link></li>
            <li><Link to="/Faisal" className="hover:text-blue-400 transition-colors duration-300">Dr. Faisal Sultan</Link></li>
            <li><Link to="/Asima" className="hover:text-blue-400 transition-colors duration-300">Dr. Asima Yousaf</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold border-b pb-2">Chief Medical Officer</h2>
          <h3 className="text-lg font-bold text-green-400">Dr. Javed Akram</h3>
          <p className="text-sm">1-800-1234-567</p>
          <p className="text-sm mt-2">
            Providing expert medical guidance and advanced healthcare solutions.
          </p>
          <button className="w-fit bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-center py-4">
        <p className="text-sm">
          &copy; 2025 HMS | Designed by <span className="text-green-400">Saira Zafar</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;