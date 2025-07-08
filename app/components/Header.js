"use client";
import React from "react";
import Image from "next/image";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";


const Header = () => (
  <>

    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Link href="/" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); window.history.replaceState(null, '', '/'); }}>
            <Image src="/logo.png" alt="Alslama Transport Logo" width={150} height={80} className="object-contain" />
          </Link>
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