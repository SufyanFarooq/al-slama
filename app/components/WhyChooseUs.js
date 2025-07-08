import React from "react";
import { FaClock, FaPhoneAlt, FaStar, FaShieldAlt, FaCertificate, FaUsers, FaMoneyBillWave, FaBolt } from "react-icons/fa";

const reasons = [
  { text: "We're never late", icon: <FaClock className="text-blue-600 text-2xl" /> },
  { text: "24/7 Emergency Callout", icon: <FaPhoneAlt className="text-blue-600 text-2xl" /> },
  { text: "Satisfaction Guaranteed", icon: <FaStar className="text-blue-600 text-2xl" /> },
  { text: "Fully protected with the correct equipment", icon: <FaShieldAlt className="text-blue-600 text-2xl" /> },
  { text: "All regulatory safety certificates", icon: <FaCertificate className="text-blue-600 text-2xl" /> },
  { text: "Team of industry experts", icon: <FaUsers className="text-blue-600 text-2xl" /> },
  { text: "Transparent pricing, no hidden costs", icon: <FaMoneyBillWave className="text-blue-600 text-2xl" /> },
  { text: "Fast response & flexible scheduling", icon: <FaBolt className="text-blue-600 text-2xl" /> },
];

const WhyChooseUs = () => (
  <section id="why" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      {/* Banner */}
      <div className="bg-blue-600 rounded-3xl p-8 md:p-12 flex flex-col items-center text-white mb-10">
        <div className="mb-2 text-sm font-semibold tracking-widest flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
          WHY CHOOSE US
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-center">Why Choose Alslama Transport LLC?</h2>
        <p className="text-lg opacity-90 text-center max-w-2xl">We deliver reliability, safety, and expertise for every project. Our team is dedicated to providing the best service, equipment, and support for your needs.</p>
      </div>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
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