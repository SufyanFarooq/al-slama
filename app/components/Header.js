import React from "react";
import Image from "next/image";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const MiniHeader = () => (
  <div className="bg-purple-600 text-white text-sm py-2 px-4 sm:px-8 lg:px-24 flex justify-between items-center">
    <div className="flex items-center gap-4">
      {/* Location */}
      <div className="group flex items-center cursor-pointer relative">
        <FaMapMarkerAlt className="text-lg" />
        <span className="ml-2 w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden whitespace-nowrap bg-purple-700 px-2 py-1 rounded absolute left-7 top-1/2 -translate-y-1/2 z-10 shadow">
          Lahore, Pakistan
        </span>
      </div>
      {/* Email */}
      <div className="group flex items-center cursor-pointer relative">
        <FaEnvelope className="text-lg" />
        <span className="ml-2 w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden whitespace-nowrap bg-purple-700 px-2 py-1 rounded absolute left-7 top-1/2 -translate-y-1/2 z-10 shadow">
          social@codebridge.info
        </span>
      </div>
    </div>
    <div className="flex items-center gap-4">
      {/* Facebook */}
      <div className="group flex items-center cursor-pointer relative">
        <FaFacebookF className="text-lg" />
        <span className="ml-2 w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden whitespace-nowrap bg-purple-700 px-2 py-1 rounded absolute left-7 top-1/2 -translate-y-1/2 z-10 shadow">
          Facebook
        </span>
      </div>
      {/* Twitter */}
      <div className="group flex items-center cursor-pointer relative">
        <FaTwitter className="text-lg" />
        <span className="ml-2 w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden whitespace-nowrap bg-purple-700 px-2 py-1 rounded absolute left-7 top-1/2 -translate-y-1/2 z-10 shadow">
          Twitter
        </span>
      </div>
      {/* LinkedIn */}
      <div className="group flex items-center cursor-pointer relative">
        <FaLinkedinIn className="text-lg" />
        <span className="ml-2 w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden whitespace-nowrap bg-purple-700 px-2 py-1 rounded absolute left-7 top-1/2 -translate-y-1/2 z-10 shadow">
          LinkedIn
        </span>
      </div>
      {/* Instagram */}
      <div className="group flex items-center cursor-pointer relative">
        <FaInstagram className="text-lg" />
        <span className="ml-2 w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden whitespace-nowrap bg-purple-700 px-2 py-1 rounded absolute left-7 top-1/2 -translate-y-1/2 z-10 shadow">
          Instagram
        </span>
      </div>
    </div>
  </div>
);

const Header = () => (
  <>
    {/* <MiniHeader /> */}
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Alslama Transport Logo" width={150} height={80} className="object-contain" />
        </div>
        <nav className="space-x-6 hidden md:block">
          <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium">Mobile Crane</a>
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