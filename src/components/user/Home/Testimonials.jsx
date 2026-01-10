"use client"
import rect from "@/assests/home/rect.svg";
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <div className="relative  py-16 px-4 sm:px-6 lg:px-8 overflow-hidden font-sathoshi">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <motion.div
              className="flex items-start space-x-3 md:mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:w-14 w-10 h-0.5 bg-[#376378] mt-2"></div>
              <h2 className="text-[#376378] font-medium md:text-2xl text-xl tracking-wide uppercase">
                Client Testimonials
              </h2>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-3xl lg:text-5xl font-medium text-black mb-6 leading-tight md:pt-20 pt-4 "
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              What Our Happy <span className="text-[#545454]">Clients Say About Reliant </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-black text-light leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span className="text-[#545454]">Donec at massa sit amet nisi blandit vehicula sed porttis elit.</span>"
            </motion.p>

            {/* View More Button */}
            <motion.button
              className="md:px-8 px-6 md:py-3 py-2 md:text-base text-base border-2 border-[#376378] text-[#376378] font-semibold rounded-bl-full rounded-br-full rounded-tl-0 rounded-tr-full hover:bg-[#376378] hover:text-white transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More
            </motion.button>
          </motion.div>

          {/* Right Video Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Video Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              {/* Video Thumbnail */}
              <Image
                src={rect}
                alt="Modern Elevator"
                className="w-full h-80 md:h-110 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group/play flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover/play:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="w-7 h-7 text-slate-800 ml-1" fill="currentColor" />
                  </div>
                  <span className="text-white text-sm font-medium tracking-wide">
                    Play Video
                  </span>
                </button>
              </div>

              {/* Text Overlay at Bottom */}
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-xs uppercase tracking-wider mb-1 opacity-80">
                  COMFORTLIFT
                </p>
                <h3 className="text-2xl font-bold leading-tight">
                  Modern Elevation<br />
                  for Modern Living
                </h3>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full h-24">
        <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M0,50 Q250,100 500,50 T1000,50 L1000,100 L0,100 Z" fill="white" opacity="0.3" />
        </svg>
      </div>
    </div>
  );
}