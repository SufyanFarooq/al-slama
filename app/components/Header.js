import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const MiniHeader = () => (
  <div className="bg-purple-600 text-white text-sm py-2 px-4 sm:px-8 lg:px-24 flex justify-between items-center">
    <div className="flex items-center gap-6">
      <span className="flex items-center gap-1"><FaMapMarkerAlt className="inline-block mr-1" /> Sharjah, UAE</span>
      <span className="flex items-center gap-1"><FaEnvelope className="inline-block mr-1" /> alslama.transport@gmail.com</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="mr-2">Contact Us on :</span>
      <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
      <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
      <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
      <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
    </div>
  </div>
);

const Header = () => (
  <>
    <MiniHeader />
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold text-blue-900">Alslama Transport</div>
        <nav className="space-x-6 hidden md:block">
          <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium">Equipment Rentals</a>
          <a href="#industries" className="text-gray-700 hover:text-blue-700 font-medium">Industries</a>
          <a href="#why" className="text-gray-700 hover:text-blue-700 font-medium">Why Us</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-700 font-medium">Contact</a>
        </nav>
        <a href="#contact" className="bg-blue-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-800 transition">Request a Callback</a>
      </div>
    </header>
  </>
);

export default Header; 