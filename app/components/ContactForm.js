import React from "react";
import { FaUser, FaPhoneAlt, FaRegCommentDots, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactForm = () => (
  <section id="contact" className="py-16 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left: Info */}
        <div className="flex-1 bg-blue-600 text-white flex flex-col justify-center p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Request a Call Back</h2>
          <p className="mb-8 opacity-90">Our team will get in touch with you as soon as possible. Please fill out the form and we'll call you back!</p>
          <div className="flex items-center gap-3 mb-3">
            <FaPhone className="text-xl" />
            <span className="text-lg font-medium">+971 55 807 1397</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <FaEnvelope className="text-xl" />
            <span className="text-lg font-medium">alsalamatransport1@gmail.com</span>
          </div>
        </div>
        {/* Right: Form */}
        <form className="flex-1 bg-gray-50 p-8 md:p-12 space-y-6 flex flex-col justify-center">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
            <input type="text" className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" placeholder="Your Name" />
          </div>
          <div className="relative">
            <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
            <input type="tel" className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" placeholder="Your Phone Number" />
          </div>
          <div className="relative">
            <FaRegCommentDots className="absolute left-3 top-4 text-blue-400" />
            <textarea className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" rows="4" placeholder="How can we help you?"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-800 transition">
            <FaPhoneAlt /> Request a Callback
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactForm; 