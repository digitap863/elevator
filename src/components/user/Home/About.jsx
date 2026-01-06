


"use client"
import lift1 from "@/assests/home/liift1.png";
import line from "@/assests/home/line.svg";
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative  py-16 px-6 overflow-hidden font-sathoshi">
      {/* Decorative dots pattern */}
      <div className="absolute top-2 left-12 grid grid-cols-6 gap-6 opacity-30">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
        ))}
      </div>
      <Image
        src={line}
        alt="Line"
        className="absolute top-[17%] left-0 w-full opacity-50"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative">

            {/* About Us heading */}
            <div className="mb-20 relative ">
              <div className="flex items-start space-x-3 mb-6">
                <div className="w-14 h-0.5 bg-[#376378] mt-2"></div>
                <h2 className="text-[#376378] font-medium text-2xl tracking-wide uppercase">
                  About Us
                </h2>
              </div>

              {/* Large "10" with video inside text */}
              <div className="relative inline-block mb-4 ">
                <div className="relative w-80 h-64 flex items-center justify-center overflow-hidden ">
                  {/* SVG mask that defines the text shape */}
                  <svg width="320" height="256" className="absolute top-3 left-3" viewBox="0 0 320 256">
                    <defs>
                      <mask id="text-mask-10" className="">
                        <rect width="320" height="256" fill="black" />
                        <text
                          x="160"
                          y="140"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="white"
                          fontSize="290"
                          fontWeight="500"
                         fontFamily="Satoshi"
                        >
                          10
                        </text>
                      </mask>
                    </defs>
                  </svg>
                  
                  {/* Video with mask applied */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{
                      maskImage: 'url(#text-mask-10)',
                      WebkitMaskImage: 'url(#text-mask-10)',
                    }}
                  >
                    <source src="/videos/vdo.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              <div className="absolute bottom-15   -right-14">
                <div className="space-y-1">
                  <p className="text-2xl font-medium text-gray-800">
                    YEARS OF SUCCESSFUL WORK
                  </p>
                  <p className="text-2xl font-medium text-gray-600">
                    IN THE MARKET
                  </p>
                </div>
              </div>
            </div>

            {/* Description text */}
            <p className="text-black leading-relaxed mb-8 max-w-2xl font-sathoshi text-lg ">
              With over a decade of excellence in the elevator industry, Reliant- Elevators 
              has established itself as the region's most trusted partner for vertical mobility 
              solutions. <span className="text-gray-700">We combine cutting-edge technology with unmatched service quality 
              to deliver elevators that stand the test of time.</span>
            </p>

            {/* Learn More button */}
            <button className="px-8 py-3 border-2 border-teal-800 text-[#376378] rounded-bl-full rounded-br-full rounded-tl-0 rounded-tr-full font-semibold hover:bg-teal-800 hover:text-white transition duration-300 shadow-lg">
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
        

            {/* Elevator image container */}
            <div className="relative z-10 mx-auto">
              <div className="relative mx-auto overflow-hidden flex items-center justify-center h-full">
                {/* Replace with your elevator image */}
                <Image
                  src={lift1}
                  alt="Modern Elevator"
                  className="w-auto h-[500px] object-contain"
                />
                {/* Gradient overlay */}
              </div>

              {/* Decorative circle */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-teal-700 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative dots */}
      <div className="absolute bottom-8 right-8 grid grid-cols-4 gap-2 opacity-30">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
        ))}
      </div>
    </section>
  );
}