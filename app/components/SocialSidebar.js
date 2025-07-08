import React from "react";
import { FaTwitter, FaFacebookF, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: <FaTwitter />, link: "#", label: "Twitter" },
  { icon: <FaFacebookF />, link: "#", label: "Facebook" },
  { icon: <FaEnvelope />, link: "mailto:social@codebridge.info", label: "Gmail" },
  { icon: <FaWhatsapp />, link: "https://wa.me/971558071397", label: "WhatsApp" },
];

const SocialSidebar = () => (
  <div className="fixed top-1/3 left-0 z-[9998] flex flex-col gap-4">
    {socials.map((s, i) => (
      <a
        key={i}
        href={s.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
        aria-label={s.label}
      >
        <div className="bg-white text-gray-800 shadow-lg rounded-full w-14 h-14 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-4 group-hover:bg-blue-600 group-hover:text-white cursor-pointer">
          {s.icon}
        </div>
        <span className="absolute left-16 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 bg-blue-600 text-white px-3 py-1 rounded shadow text-sm whitespace-nowrap">
          {s.label}
        </span>
      </a>
    ))}
  </div>
);

export default SocialSidebar; 