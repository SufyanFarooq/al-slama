import React from "react";

const Footer = () => (
  <footer className="bg-blue-900 text-white py-8 mt-12">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <div className="font-bold text-lg">Alslama Transport LLC</div>
        <div className="text-sm">Dubai, UAE</div>
        <div className="text-sm mt-1">+971 55 807 1397 | +971 50 768 0973</div>
      </div>
      <div className="flex space-x-4 mb-4 md:mb-0">
        <a href="#" className="hover:text-blue-300">Facebook</a>
        <a href="#" className="hover:text-blue-300">Instagram</a>
        <a href="#" className="hover:text-blue-300">LinkedIn</a>
      </div>
      <div className="text-xs">© 2022 - 2025 | All Rights Reserved</div>
    </div>
  </footer>
);

export default Footer; 