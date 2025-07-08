"use client";

import React, { useState, useEffect } from "react";

const images = [
  "/hero/hero_bg1.png",
  "/hero/hero_bg2.png",
  "/hero/hero_bg3.png"
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-white py-20 px-4 text-center min-h-[350px] md:min-h-[450px] flex items-center justify-center overflow-hidden">
      {/* Carousel Images */}
      {images.map((img, idx) => (
        <div
          key={img}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
          style={{backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
        />
      ))}
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70 z-10" />
      {/* Content */}
      <div className="relative z-20 w-full flex justify-center">
        <div className="bg-blue-900/70 rounded-md p-8 md:p-12 max-w-2xl w-full text-white shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Al-Slama Transport LLC Dubai – UAE</h1>
          <hr className="border-white/60 mb-4" />
          <h2 className="text-xl md:text-2xl font-bold mb-2">Industrial Equipment & Plant Hire</h2>
          <p className="text-base md:text-lg">Empowering projects with equipment rental solutions, certified operators, and support teams in Dubai, UAE.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 