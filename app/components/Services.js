import React from "react";
import Image from "next/image";
import { FaIndustry, FaWeightHanging, FaRulerCombined, FaInfoCircle } from "react-icons/fa";
import { GiHook } from "react-icons/gi";

const cranes = [
  { company: "Sany", model: "SCC1600", capacity: "160 tons", boom: "63 meters", description: "Sany SCC1600 mobile crane - perfect for construction sites and heavy lifting operations in Dubai.", image: "/services/sany-scc1600.png" },
  { company: "Tadano", model: "ATF100G-5", capacity: "100 tons", boom: "52 meters", description: "Tadano ATF100G-5 all-terrain crane - ideal for multiple industries and heavy load transportation.", image: "/services/tadano-atf100g5.jpeg" },
  { company: "Zoomlion", model: "ZTC700V", capacity: "70 tons", boom: "48 meters", description: "Zoomlion ZTC700V truck crane - mounted on trucks for seamless transportation to different job sites.", image: "/services/zoomlion-ztc700v.png" },
  { company: "Terex", model: "AC 250-1", capacity: "250 tons", boom: "72 meters", description: "Terex AC 250-1 all-terrain crane - designed for safe and efficient lifting of heavy materials and equipment.", image: "/services/terex-ac250-1.png" },
  { company: "Terex", model: "AC 350-1", capacity: "350 tons", boom: "80 meters", description: "Terex AC 350-1 heavy-duty crane - perfect for large-scale construction and industrial projects in UAE.", image: "/services/terex-ac350-1.jpeg" },
  { company: "Terex", model: "AC 200-1", capacity: "200 tons", boom: "67 meters", description: "Terex AC 200-1 mobile crane - ideal for multiple industries and heavy load transportation.", image: "/services/terex-ac200-1.png" },
  { company: "Sany", model: "SCC1000", capacity: "100 tons", boom: "60 meters", description: "Sany SCC1000 crawler crane - mounted on crawlers for seamless transportation to different job sites.", image: "/services/sany-scc1000.png" },
  { company: "Sany", model: "SCC800", capacity: "80 tons", boom: "55 meters", description: "Sany SCC800 mobile crane - available for construction and industrial lifting needs in Dubai.", image: "/services/sany-scc800.jpeg" },
  { company: "Tadano", model: "ATF50G-3", capacity: "50 tons", boom: "42 meters", description: "Tadano ATF50G-3 all-terrain crane - ideal for multiple industries and heavy load transportation.", image: "/services/tadano-atf50g3.png" },
  { company: "Liebherr", model: "LTM 1500-8.1", capacity: "500 tons", boom: "85 meters", description: "Liebherr LTM 1500-8.1 mobile crane - mounted on trucks for seamless transportation to different job sites.", image: "/services/liebherr-ltm1500-8-1.png" },
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
                <h3 className="text-base md:text-lg font-bold text-blue-900 mb-1 flex items-center gap-2 text-center mt-6"><FaIndustry className="text-blue-900" />{crane.company} <span className="font-semibold">{crane.model}</span></h3>
                <span className="text-gray-700 font-medium flex items-center gap-2 text-center"><FaWeightHanging className="text-blue-900" />Crane Capacity: {crane.capacity}</span>
                <span className="text-gray-700 font-medium flex items-center gap-2 text-center mb-2"><FaRulerCombined className="text-blue-900" />Boom Length: {crane.boom}</span>
                <div className="w-full flex justify-center h-64 mb-2 mt-2">
                  <Image src={crane.image} alt={`${crane.company} ${crane.model} mobile crane rental Dubai UAE`} width={380} height={248} className="object-contain rounded-lg h-full w-auto" />
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