"use client"
import lift1 from "@/assests/home/liift1.png";
import line from "@/assests/home/line.svg";
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative  md:pt-16 md:pb-16 pt-20 pb-10 px-4 overflow-hidden font-sathoshi">
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
            <div className="md:mb-12 mb-8 relative ">
              <div className="flex items-start space-x-3 md:mb-8 mb-4">
                <div className="md:w-14 w-14 h-0.5 bg-[#376378] mt-2"></div>
                <h2 className="text-[#376378] font-medium md:text-2xl text-2xl tracking-widest uppercase">
                  OUR STORY
                </h2>
              </div>

              <div>
                <h1 className="font-sathoshi md:text-5xl text-[7.5vw] font-medium text-gray-800">
                  A Decade of Excellence in <br />
                  <span className="text-[#545454]"> Vertical Mobility</span>
                </h1>
              </div>
            </div>

            <div className="relative z-10 mx-auto pb-10 md:hidden block ">
              <div className="relative mx-auto overflow-hidden flex items-center justify-center h-full">
                {/* Replace with your elevator image */}
                <Image
                  src={lift1}
                  alt="Modern Elevator"
                  className="w-auto h-[400px] object-contain"
                />
              </div>
            </div>



            {/* Description text */}
            <p className=" leading-relaxed mb-8 max-w-3xl font-sathoshi text-lg text-gray-900 ">
              Founded in 2015, Reliant Elevators began with a simple mission: to provide Kerala with world-class elevator solutions that prioritize safety, reliability, and innovation.
              <br />
              What started as a small team of passionate engineers has grown into the region's most trusted elevator company, serving residential, commercial, healthcare, and hospitality sectors.
              <br />
              Today, with over 500 successful installations and a team of 50+ experts, we continue to set new standards in the industry while maintaining our commitment to personalized service.
            </p>

            {/* Learn More button */}
            <button
              onClick={() => {
                document.getElementById('milestones')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="px-8 py-3 border-2 border-teal-800 text-[#376378] rounded-bl-full rounded-br-full rounded-tl-0 rounded-tr-full font-semibold hover:bg-teal-800 hover:text-white transition duration-300 shadow-lg"
            >
              Learn More
            </button>

          </div>

          {/* Right Image */}
          <div className="relative">


            {/* Elevator image container */}
            <div className="relative z-10 mx-auto md:block hidden">
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
