"use client"

import line from '@/assests/home/line.svg';
import pr1 from '@/assests/home/pr1.png';
import pr2 from '@/assests/home/pr2.png';
// import pr3 from '@/assests/home/pr3.svg';
import pr4 from '@/assests/home/pr4.png';
// import pr5 from '@/assests/home/pr5.svg';
import L6 from "@/assests/home/L6.png";
import L7 from "@/assests/home/L7.png";

import { motion } from "framer-motion";
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


const ElevatorSections = () => {
  const sections = [
    {
      id: "home-elevators",
      number: "01",
      tag: "LUXURY WITHIN REACH",
      title: "HOME ELEVATORS",
      projectCategory: "Home",
      description:
        " Reliant Elevators offers premium Home Elevators in Kerala, designed to provide smooth, quiet, and comfortable vertical mobility within modern residences. With compact designs that fit seamlessly into villas and independent homes, our home elevators enhance accessibility, safety, and everyday convenience. Engineered for energy efficiency and compliant with Indian safety standards, Reliant Home Elevators add lasting value, elegance, and comfort to homes across Kerala and South India.",
      image: pr1,
      features: [
        "Compact cabin designs",
        "Whisper-quiet operation",
        "Energy-efficient systems",
        "Customizable interiors",
        "Safety sensors & alarms",
        "Low maintenance"
      ],
      bgColor: "bg-slate-50",
      imagePosition: "right"
    },
    {
      id: "commercial-elevators",
      number: "02",
      tag: "FOR BUSINESS",
      title: "COMMERCIAL ELEVATORS",
      projectCategory: "Commercial",
      description:
        "Reliant Elevators provides reliable Commercial Elevators in Kerala, engineered to support the demanding vertical mobility needs of offices, malls, hotels, hospitals, and commercial complexes. Designed for smooth, safe, and energy-efficient operation, our commercial elevators ensure seamless movement across multi-floor buildings. Built to Indian safety standards and optimized for high-traffic use, Reliant Commercial Elevators deliver long-lasting performance and dependable mobility solutions for businesses across Kerala and South India.",
      image: pr2,
      features: [
        "High-speed operation",
        "Heavy-duty capacity",
        "Smart destination control",
        "Energy recovery systems",
        "Fire-rated doors",
        "24/7 monitoring"
      ],
      bgColor: "bg-white",
      imagePosition: "left"
    },
    {
      id: "hospital-elevators",
      number: "03",
      tag: "ENGINEERED FOR CARE",
      title: "HOSPITAL ELEVATORS",
      projectCategory: "Hospital",
      description:
        "Reliant Elevators designs and installs high-performance Hospital Elevators in Kerala, purpose-built for medical environments where safety, hygiene, and reliability are critical. Engineered for smooth, quiet, and swift operation, our hospital elevators efficiently transport patients, stretchers, medical staff, and equipment across multiple floors. Compliant with Indian healthcare and safety standards, Reliant Hospital Elevators ensure uninterrupted vertical mobility for hospitals, clinics, and healthcare facilities across Kerala and South India.",
      image: L6,
      features: [
        "Stretcher-compatible size",
        "Smooth ride technology",
        "Antibacterial surfaces",
        "Priority call systems",
        "Emergency power backup",
        "Wide door openings"
      ],
      bgColor: "bg-blue-50",
      imagePosition: "right"
    },
    {
      id: "hospitality-elevators",
      number: "04",
      tag: "ELEGANCE IN MOTION",
      title: "HOSPITALITY ELEVATORS",
      projectCategory: "Hospitality",
      description:
        "Reliant Elevators provides reliable Commercial Elevators in Kerala, engineered to support the demanding vertical mobility needs of offices, malls, hotels, hospitals, and commercial complexes. Designed for smooth, safe, and energy-efficient operation, our commercial elevators ensure seamless movement across multi-floor buildings. Built to Indian safety standards and optimized for high-traffic use, Reliant Commercial Elevators deliver long-lasting performance and dependable mobility solutions for businesses across Kerala and South India.",
      image: pr4,
      features: [
        "Premium interior finishes",
        "VIP express modes",
        "Panoramic glass options",
        "Ambient lighting",
        "Destination dispatch",
        "Brand custom"
      ],
      bgColor: "bg-slate-50",
      imagePosition: "left"
    },
    {
      id: "structural-elevators",
      number: "05",
      tag: "ENGINEERED FOR COMMERCIAL",
      title: "STRUCTURAL ELEVATORS",
      projectCategory: "Structural",
      description:
        " Reliant Elevators offers premium Home Elevators in Kerala, designed to provide smooth, quiet, and comfortable vertical mobility within modern residences. With compact designs that fit seamlessly into villas and independent homes, our home elevators enhance accessibility, safety, and everyday convenience. Engineered for energy efficiency and compliant with Indian safety standards, Reliant Home Elevators add lasting value, elegance, and comfort to homes across Kerala and South India.",
      image: L7,
      features: [
        "Stretcher-compatible size",
        "Smooth ride technology",
        "Antibacterial surfaces",
        "Priority call systems",
        "Emergency power backup",
        "Wide door openings"
      ],
      bgColor: "bg-gray-100",
      imagePosition: "right"
    }
  ];

  return (
    <div className="w-full font-sathoshi relative">
      <Image src={line} alt="line" className="absolute top-0 left-0 w-full h-full pointer-events-none" />
      {sections.map((section, index) => (
        <section key={index} id={section.id} className={` py-8 md:py-16 px-4 md:px-12 lg:px-20 scroll-mt-20`}>
          <div className="max-w-7xl mx-auto">
            <div className={`flex flex-col ${section.imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center md:gap-12 gap-6`}>

              {/* Content Side */}
              <motion.div
                className="flex-1 md:space-y-6 space-y-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div>
                  <div className={`flex flex-col items-left gap-0  relative ${section.imagePosition === 'left' ? 'pl-30' : ''}`}>
                    <h3 className="text-8xl font-bold text-[#376378] font-dragon" style={{
                      WebkitTextStroke: '2px #6B8FA3',
                      WebkitTextFillColor: 'transparent',
                      color: 'transparent'
                    }}>{section.number}</h3>
                    <h2 className="text-base font-medium pl-1  text-[#C10510] tracking-widest relative md:bottom-8">{section.tag}</h2>
                  </div>
                  <h2 className={`text-4xl lg:text-5xl font-base text-gray-900  relative md:bottom-3 ${section.imagePosition === 'left' ? 'pl-30' : ''}`}>
                    {section.title}
                  </h2>

                  <div className="md:hidden flex-1  ">
                    <div className="relative overflow-hidden z-10 ">
                      <Image
                        src={section.image}
                        alt={section.title}
                        className={`w-full h-[400px] object-contain ${section.imagePosition === 'left' ? 'pr-16' : 'pl-30'}`}
                      />
                    </div>
                  </div>

                  <p className="text-gray-800 leading- text-lg tracking-tight">
                    {section.description}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                  {section.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center">
                        <Check className="w-3 h-3 text-gray-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-6 z-10">
                  <Link href={`/projects?category=${section.projectCategory}#our-projects`}>
                    <button className="bg-[#376378] hover:bg-slate-800 text-white px-6 py-3 cursor-pointer rounded-full flex items-center gap-2 transition-colors">
                      View Works
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>


              {/* Image Side */}
              <motion.div
                className="md:flex-1 lg:block hidden "
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              >
                <div className="relative overflow-hidden ">
                  <Image
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[600px] object-contain "
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </section >
      ))
      }
    </div >
  );
};

export default ElevatorSections;