"use client"

import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import pr1 from '@/assests/home/pr1.svg'
import pr2 from '@/assests/home/pr2.svg'
import pr3 from '@/assests/home/pr3.svg'
import pr4 from '@/assests/home/pr4.svg'
import pr5 from '@/assests/home/pr5.svg'
import line from '@/assests/home/line.svg'

const ElevatorSections = () => {
  const sections = [
    {
      number: "01",
      tag: "LUXURY WITHIN REACH",
      title: "HOME ELEVATORS",
      description: "Home Elevators offer convenient and comfortable vertical movement within residences, enhancing accessibility and adding value with compact design and smooth operation.",
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
      number: "02",
      tag: "FOR BUSINESS",
      title: "COMMERCIAL ELEVATORS",
      description: "Commercial Elevators are designed to meet the vertical mobility needs of business environments, offering smooth, safe, and efficient transportation across multi-floor commercial spaces.",
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
      number: "03",
      tag: "ENGINEERED FOR CARE",
      title: "HOSPITAL ELEVATORS",
      description: "Hospital Elevators are specially engineered for medical environments, ensuring smooth, safe, and swift transportation of patients, stretchers, medical staff, and equipment between floors.",
      image: pr3,
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
      number: "04",
      tag: "ELEGANCE IN MOTION",
      title: "HOSPITALITY ELEVATORS",
      description: "",
      description: "Commercial Elevators are designed to meet the vertical mobility needs of business environments, offering smooth, safe, and efficient transportation across multi-floor commercial spaces.",
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
      number: "05",
      tag: "ENGINEERED FOR COMMERCIAL",
      title: "STRUCTURAL ELEVATORS",
      description: "Escalators provide continuous, efficient movement of people in high-traffic spaces such as malls, metro stations, airports, and commercial buildings.",
      image: pr5,
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
        <Image src={line} alt="line" className="absolute top-0 left-0 w-full h-full" />
      {sections.map((section, index) => (
        <section key={index} className={` py-8 md:py-16 px-4 md:px-12 lg:px-20`}>
          <div className="max-w-7xl mx-auto">
            <div className={`flex flex-col ${section.imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center md:gap-12 gap-6`}>
              
              {/* Content Side */}
              <div className="flex-1 md:space-y-6 space-y-4">
                <div>
                  <div className={`flex flex-col items-left gap-0  relative ${section.imagePosition === 'left' ? 'pl-30' : ''}`}>
                    <h3 className="text-7xl font-bold text-[#376378] font-dragon" style={{
                            WebkitTextStroke: '2px #6B8FA3',
                            WebkitTextFillColor: 'transparent',
                            color: 'transparent'
                          }}>{section.number}</h3>
                    <h2 className="text-base font-medium pl-1  text-[#C10510] tracking-widest relative md:bottom-8">{section.tag}</h2>
                  </div>
                  <h2 className={`text-4xl lg:text-5xl font-base text-gray-900 mb-1 relative md:bottom-3 ${section.imagePosition === 'left' ? 'pl-30' : ''}`}>
                    {section.title}
                  </h2>

                  <div className="md:hidden flex-1  ">
                    <div className="relative overflow-hidden ">
                      <Image 
                        src={section.image} 
                        alt={section.title}
                        className={`w-full h-[400px] object-contain ${section.imagePosition === 'left' ? 'pr-16' : 'pl-30'}`}
                      />
                    </div>
                  </div>

                  <p className="text-gray-800 leading-relaxed text-lg ">
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
                <div className="pt-6">
                  <button className="bg-[#376378] hover:bg-slate-800 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors">
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className="md:flex-1 hidden ">
                <div className="relative overflow-hidden ">
                  <Image 
                    src={section.image} 
                    alt={section.title}
                    className="w-full h-[600px] object-contain "
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ElevatorSections;