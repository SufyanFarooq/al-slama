import React from "react";
import { FaTwitter, FaFacebookF, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

const Footer = () => (
  <footer className="bg-blue-900 text-white pt-10 pb-6 mt-12 border-t-4 border-blue-300 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 opacity-30" />
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
      {/* Crane Image (left side) */}
      <div className="hidden md:flex flex-col items-center justify-center w-1/4">
        <Image src="/services/liebherr-ltm-1500-8-1-steil_w800.jpg" alt="Crane" width={320} height={180} className="object-contain rounded-lg drop-shadow-lg" />
      </div>
      {/* Logo and Company Info */}
      <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 w-full md:w-1/2">
        <div className="flex items-center gap-2 mb-2">
          <Image src="/file.svg" alt="Alslama Logo" width={36} height={36} className="drop-shadow" />
          <span className="font-bold text-xl tracking-wide">Alslama Transport LLC</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-blue-200"><FaMapMarkerAlt className="text-blue-300" />Al Qusais Industrial Area 4 - Dubai</div>
        <div className="flex items-center gap-2 text-sm text-blue-200 mt-1"><FaPhoneAlt className="text-blue-300" />+971 55 939 2802</div>
      </div>
      {/* Social Icons (match sidebar) */}
      <div className="flex space-x-4 mb-4 md:mb-0 w-full md:w-1/4 justify-center md:justify-end">
        <a href="#" aria-label="Twitter" className="bg-blue-800 hover:bg-blue-600 transition p-2 rounded-full text-blue-200 hover:text-white shadow"><FaTwitter size={20} /></a>
        <a href="#" aria-label="Facebook" className="bg-blue-800 hover:bg-blue-600 transition p-2 rounded-full text-blue-200 hover:text-white shadow"><FaFacebookF size={20} /></a>
        <a href="mailto:alsalamatransport1@gmail.com" aria-label="Gmail" className="bg-blue-800 hover:bg-blue-600 transition p-2 rounded-full text-blue-200 hover:text-white shadow"><FaEnvelope size={20} /></a>
        <a href="https://wa.me/971559392802" aria-label="WhatsApp" className="bg-blue-800 hover:bg-blue-600 transition p-2 rounded-full text-blue-200 hover:text-white shadow"><FaWhatsapp size={20} /></a>
      </div>
    </div>
    {/* Copyright */}
    <div className="text-sm font-medium text-blue-200 text-center mt-6">© 2022 - {new Date().getFullYear()} | All Rights Reserve | Powered by <a href="https://techtunix.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">Techtunix</a></div>
  </footer>
);

export default Footer; 