"use client"
import lift1 from "@/assests/home/liift1.png";
import line from "@/assests/home/line.svg";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative  py-16 px-6 overflow-hidden font-sathoshi">
      {/* Decorative dots pattern */}
      <div className="md:absolute hidden top-2 left-12 grid grid-cols-6 gap-6 opacity-30">
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
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            {/* About Us heading */}
            <div className="md:mb-10 mb-20 relative ">
              <motion.div
                className="flex items-start space-x-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="md:w-14 w-10 h-0.5 bg-[#376378] mt-2"></div>
                <h2 className="text-[#376378] font-medium md:text-2xl text-xl tracking-wide uppercase">
                  About Us
                </h2>
              </motion.div>

              {/* Large "10" with video inside text */}
              {/* Desktop Version */}
              <motion.div
                className="relative hidden md:inline-block mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative w-80 h-64 flex items-center justify-center overflow-hidden">
                  {/* SVG mask that defines the text shape */}
                  <svg width="320" height="256" className="absolute top-3 left-3" viewBox="0 0 320 256">
                    <defs>
                      <mask id="text-mask-10-desktop">
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
                      mask: 'url(#text-mask-10-desktop)',
                      WebkitMask: 'url(#text-mask-10-desktop)',
                    }}
                  >
                    <source src="/videos/vdo.mp4" type="video/mp4" />
                  </video>
                </div>
              </motion.div>

              {/* Mobile Version */}
              <motion.div
                className="relative md:hidden block mb-4 w-full max-w-[280px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden">
                  {/* SVG mask that defines the text shape - positioned absolutely */}
                  <svg width="280" height="210" className="absolute top-0 left-0" viewBox="0 0 280 210" style={{ pointerEvents: 'none' }}>
                    <defs>
                      <mask id="text-mask-10-mobile">
                        <rect width="280" height="210" fill="black" />
                        <text
                          x="140"
                          y="115"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="white"
                          fontSize="240"
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
                      mask: 'url(#text-mask-10-mobile)',
                      WebkitMask: 'url(#text-mask-10-mobile)',
                    }}
                  >
                    <source src="/videos/vdo.mp4" type="video/mp4" />
                  </video>
                </div>
              </motion.div>


              <motion.div
                className="absolute md:bottom-15 md:-right-14 right-5 -bottom-14"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="space-y-1">
                  <p className="md:text-2xl text-xl font-medium text-gray-800  whitespace-nowrap">
                    YEARS OF SUCCESSFUL WORK
                  </p>
                  <p className="md:text-2xl text-xl font-medium text-gray-600 whitespace-nowrap">
                    IN THE MARKET
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Description text */}
            <motion.p
              className="text-black leading-relaxed mb-8 max-w-2xl font-sathoshi text-lg "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              With over a decade of excellence in the elevator industry, Reliant- Elevators
              has established itself as the region's most trusted partner for vertical mobility
              solutions. <span className="text-gray-700">We combine cutting-edge technology with unmatched service quality
                to deliver elevators that stand the test of time.</span>
            </motion.p>

            {/* Learn More button */}
            <motion.button
              className="px-8 py-3 border-2 border-teal-800 text-[#376378] rounded-bl-full rounded-br-full rounded-tl-0 rounded-tr-full font-semibold hover:bg-teal-800 hover:text-white transition duration-300 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Elevator image container */}
            <div className="relative z-10 mx-auto">
              <div className="relative mx-auto overflow-hidden flex items-center justify-center h-full">
                {/* Replace with your elevator image */}
                <Image
                  src={lift1}
                  alt="Modern Elevator"
                  className="w-auto md:h-[500px] h-[300px] object-contain"
                />
              </div>

              <div className="md:absolute hidden -bottom-8 -right-8 w-32 h-32 border-4 border-teal-700 rounded-full opacity-20"></div>
            </div>
          </motion.div>
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