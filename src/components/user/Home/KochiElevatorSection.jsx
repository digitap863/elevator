"use client"
import kochiElevatorImg from "@/assests/home/kochi-elevator.png";
import line from "@/assests/home/line.svg";
import { motion } from 'framer-motion';
import { ArrowRight, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function KochiElevatorSection() {

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-sathoshi bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30">
      {/* Decorative dots pattern */}
      <div className="absolute top-6 left-8 grid grid-cols-6 gap-4 opacity-25 pointer-events-none">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-[#376378] rounded-full"></div>
        ))}
      </div>

      {/* Decorative line SVG */}
      <Image
        src={line}
        alt="Decorative line"
        className="absolute top-[12%] left-0 w-full opacity-30 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10 font-sathoshi">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center font-sathoshi"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Tagline Badge */}
            <motion.div
              className="flex items-center space-x-3 mb-6 font-sathoshi"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-0.5 bg-[#376378]"></div>
              <span className="font-sathoshi text-[#376378] font-medium text-xs sm:text-sm tracking-widest uppercase bg-[#376378]/10 px-3 py-1 rounded-full">
                PREMIER ELEVATOR BRAND
              </span>
            </motion.div>

            {/* Main H1 Heading */}
            <motion.h1 
              className="font-sathoshi text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 tracking-tight leading-[1.2] md:leading-[1.18] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We are the <span className="text-[#376378] relative inline-block font-sathoshi">
                No.1 
                <span className="absolute bottom-1 left-0 w-full h-1.5 bg-[#376378]/20 rounded-full"></span>
              </span> Residential and Commercial Elevator providers in Kerala
            </motion.h1>

            {/* Content Description Paragraph */}
            <motion.p 
              className="font-sathoshi text-gray-700 text-lg sm:text-xl leading-relaxed mb-8 font-normal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Reliant Elevators designs, installs, and maintains residential, commercial, hospital, and hospitality elevators across Kochi, with certified engineers and dependable after-sales support ensuring safety, durability, and performance at every step.
            </motion.p>

            {/* ISO 9001:2015 Certification Highlight */}
            <motion.div 
              className="p-5 sm:p-6 mb-10 rounded-2xl bg-white border border-[#376378]/15 shadow-sm hover:shadow-md transition-shadow duration-300 font-sathoshi flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="p-3 rounded-xl bg-[#376378]/10 text-[#376378] shrink-0 mt-0.5">
                <Award className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="space-y-1">
                <span className="font-sathoshi text-md font-bold uppercase tracking-wider text-[#376378] block">
                  ISO 9001:2015 CERTIFIED
                </span>
                <p className="font-sathoshi text-gray-800 text-sm sm:text-base font-normal leading-relaxed">
                  Achieved ISO 9001:2015 certification, demonstrating our commitment to quality management, customer satisfaction, and continuous improvement.
                </p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap items-center gap-4 font-sathoshi"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/reachout">
                <button className="font-sathoshi px-8 py-3.5 bg-[#376378] hover:bg-teal-800 text-white font-semibold text-base rounded-bl-full rounded-br-full rounded-tl-0 rounded-tr-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group">
                  Get a Free Consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>

              <Link href="/products">
                <button className="font-sathoshi px-8 py-3.5 border-2 border-[#376378] text-[#376378] hover:bg-[#376378] hover:text-white font-semibold text-base rounded-bl-full rounded-br-full rounded-tl-0 rounded-tr-full transition-all duration-300 shadow-md">
                  Explore Products
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div 
            className="lg:col-span-5 relative font-sathoshi"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none font-sathoshi">
              
              {/* Background Glow Effect */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#376378]/20 via-teal-500/10 to-amber-500/10 blur-xl opacity-70"></div>
              
              {/* Decorative Circle Behind */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-[#376378]/20 rounded-full hidden sm:block"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-amber-500/20 rounded-full hidden sm:block"></div>

              {/* Main Image Frame Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/80 bg-white group">
                <Image
                  src={kochiElevatorImg}
                  alt="No.1 Residential and Commercial Elevator in Kochi, Kerala"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out max-h-[580px]"
                  priority
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>

                {/* Floating Badge on Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl backdrop-blur-md bg-white/90 border border-white/40 shadow-lg font-sathoshi">
                  <div className="flex items-center justify-between font-sathoshi">
                    <div>
                      {/* <p className="font-sathoshi text-xs font-semibold text-[#376378] uppercase tracking-wider">Trusted in Kochi</p> */}
                      <p className="font-sathoshi text-sm font-medium text-gray-900">Residential & Commercial Elevators</p>
                    </div>
                    <span className="font-sathoshi px-3 py-1 text-xs font-semibold bg-[#376378] text-white rounded-full">
                      #1 Choice
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom decorative dots */}
      <div className="absolute bottom-6 right-8 grid grid-cols-4 gap-2 opacity-25 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-[#376378] rounded-full"></div>
        ))}
      </div>
    </section>
  );
}
