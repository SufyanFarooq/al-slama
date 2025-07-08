import React from "react";
import { FaLeaf, FaPlane, FaBolt, FaBuilding, FaCalendarAlt, FaTruck, FaStore, FaShieldAlt, FaShip, FaTools, FaRecycle, FaGlobe } from "react-icons/fa";

const industries = [
  { name: "Agriculture & Landscaping", icon: <FaLeaf className="text-blue-600 text-3xl" />, desc: "Essential for every farmer's success" },
  { name: "Aviation & Airports", icon: <FaPlane className="text-blue-600 text-3xl" />, desc: "Safe, efficient airport operations" },
  { name: "Energy (Oil & Gas)", icon: <FaBolt className="text-blue-600 text-3xl" />, desc: "Powering industrial growth" },
  { name: "Construction & Infrastructure", icon: <FaBuilding className="text-blue-600 text-3xl" />, desc: "Building the future, safely" },
  { name: "Events", icon: <FaCalendarAlt className="text-blue-600 text-3xl" />, desc: "Reliable event logistics" },
  { name: "Logistics & Storage", icon: <FaTruck className="text-blue-600 text-3xl" />, desc: "Seamless supply chain solutions" },
  { name: "Retail & Commercial", icon: <FaStore className="text-blue-600 text-3xl" />, desc: "Supporting retail excellence" },
  { name: "Defence & Military", icon: <FaShieldAlt className="text-blue-600 text-3xl" />, desc: "Trusted for critical missions" },
  { name: "Marine & Ports", icon: <FaShip className="text-blue-600 text-3xl" />, desc: "Efficient port operations" },
  { name: "Facility Management", icon: <FaTools className="text-blue-600 text-3xl" />, desc: "Comprehensive facility care" },
  { name: "Environmental Services", icon: <FaRecycle className="text-blue-600 text-3xl" />, desc: "Sustainable waste & recycling solutions" },
  { name: "Global Projects", icon: <FaGlobe className="text-blue-600 text-3xl" />, desc: "International reach for diverse needs" },
];

const Industries = () => (
  <section id="industries" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-blue-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-stretch gap-8">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center text-white max-w-xl">
          <div className="mb-2 text-sm font-semibold tracking-widest flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
            INDUSTRIES WE SUPPORT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Tailored Solutions for Diverse Sectors</h2>
          <p className="text-lg opacity-90">Empowering projects with equipment rental solutions, certified operators, and support teams for every industry.</p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center">
          <img src="/hero/hero_bg1.png" alt="Industries" className="rounded-2xl object-cover w-full max-w-md h-56 md:h-72 shadow-lg" />
        </div>
      </div>
      {/* Cards Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {industries.map((industry, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow flex flex-col items-center p-6 w-full max-w-xs hover:shadow-lg transition border border-blue-100">
            <div className="mb-3">{industry.icon}</div>
            <div className="text-blue-900 font-semibold text-lg text-center mb-1">{industry.name}</div>
            <div className="text-gray-500 text-sm text-center">{industry.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries; 