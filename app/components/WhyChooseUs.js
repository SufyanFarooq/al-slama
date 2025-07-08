import React from "react";
import { FaClock, FaPhoneAlt, FaStar, FaShieldAlt, FaCertificate, FaUsers } from "react-icons/fa";

const reasons = [
  { text: "We're never late", icon: <FaClock className="text-blue-600 text-2xl" /> },
  { text: "24/7 Emergency Callout", icon: <FaPhoneAlt className="text-blue-600 text-2xl" /> },
  { text: "Satisfaction Guaranteed", icon: <FaStar className="text-blue-600 text-2xl" /> },
  { text: "Fully protected with the correct equipment", icon: <FaShieldAlt className="text-blue-600 text-2xl" /> },
  { text: "All regulatory safety certificates", icon: <FaCertificate className="text-blue-600 text-2xl" /> },
  { text: "Team of industry experts", icon: <FaUsers className="text-blue-600 text-2xl" /> },
];

const WhyChooseUs = () => (
  <section id="why" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Why Choose Alslama Transport LLC?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {reasons.map((reason, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow flex flex-col items-center justify-center p-6 w-full max-w-xs min-h-[160px] hover:shadow-lg transition border border-blue-100">
            <div className="mb-3">{reason.icon}</div>
            <div className="text-blue-900 font-semibold text-lg text-center">{reason.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs; 