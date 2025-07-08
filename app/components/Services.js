import React from "react";
import Image from "next/image";
import { FaIndustry, FaWeightHanging, FaRulerCombined, FaInfoCircle } from "react-icons/fa";
import { GiHook } from "react-icons/gi";

const cranes = [
  { company: "Sany", capacity: "160 tons", boom: "63 meters", description: "Mobile cranes available from 25 tons to 800 tons to suit various lifting needs.", image: "/services/service1.png" },
  { company: "Tadano", capacity: "100 tons", boom: "52 meters", description: "Ideal for multiple industries, capable of lifting and transporting heavy loads.", image: "/services/service2.png" },
  { company: "Zoomlion", capacity: "70 tons", boom: "48 meters", description: "Mounted on trucks or crawlers for seamless transportation to different job sites.", image: "/services/service3.png" },
  { company: "Terex", capacity: "250 tons", boom: "72 meters", description: "Designed for the safe and efficient lifting and lowering of heavy materials and equipment.", image: "/services/service4.png" },
  { company: "Terex", capacity: "350 tons", boom: "80 meters", description: "Mobile cranes available from 25 tons to 800 tons to suit various lifting needs.", image: "/services/service5.png" },
  { company: "Terex", capacity: "200 tons", boom: "67 meters", description: "Ideal for multiple industries, capable of lifting and transporting heavy loads.", image: "/services/service6.png" },
  { company: "Sany", capacity: "160 tons", boom: "63 meters", description: "Mounted on trucks or crawlers for seamless transportation to different job sites.", image: "/services/service7.png" },
  { company: "Sany", capacity: "100 tons", boom: "60 meters", description: "Mobile cranes available from 25 tons to 800 tons to suit various lifting needs.", image: "/services/service8.png" },
  { company: "Tadano", capacity: "50 tons", boom: "42 meters", description: "Ideal for multiple industries, capable of lifting and transporting heavy loads.", image: "/services/service9.png" },
  { company: "Liebherr", capacity: "500 tons", boom: "85 meters", description: "Mounted on trucks or crawlers for seamless transportation to different job sites.", image: "/services/service10.png" },
];

const Services = () => (
  <section id="services" className="py-16 bg-gray-50">
    <div className="relative z-20 max-w-6xl mx-auto -mt-32 px-4">
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
          {cranes.map((crane, idx) => (
            <div key={idx} className="relative flex flex-col items-center min-h-[560px] w-full max-w-sm">
              {/* Hook Icon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 bg-white rounded-full p-1 shadow">
                <GiHook className="text-4xl text-yellow-500 drop-shadow" style={{transform: 'rotate(10deg)'}} />
              </div>
              {/* Card Content with striped border */}
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between items-center border-8 min-h-[560px] w-full border-[length:8px]" style={{borderImage: 'repeating-linear-gradient(135deg, #1e3a8a 0 16px, #fff 16px 32px) 8'}}>
                <h3 className="text-base md:text-lg font-bold text-blue-900 mb-1 flex items-center gap-2 text-center mt-6"><FaIndustry className="text-blue-900" />Crane Company: <span className="font-semibold">{crane.company}</span></h3>
                <span className="text-gray-700 font-medium flex items-center gap-2 text-center"><FaWeightHanging className="text-blue-900" />Crane Capacity: {crane.capacity}</span>
                <span className="text-gray-700 font-medium flex items-center gap-2 text-center mb-2"><FaRulerCombined className="text-blue-900" />Boom Length: {crane.boom}</span>
                <div className="w-full flex justify-center h-64 mb-2 mt-2">
                  <Image src={crane.image} alt="Crane" width={380} height={248} className="object-contain rounded-lg h-full w-auto" />
                </div>
                <div className="flex items-start w-full pb-2">
                  <FaInfoCircle className="text-blue-700 mt-1 mr-3 text-xl shrink-0" />
                  <span className="text-gray-900 text-base leading-relaxed">{crane.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services; 