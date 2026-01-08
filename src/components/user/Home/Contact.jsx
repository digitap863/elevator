"use client"
import React from 'react';
import Image from 'next/image';
import contac from '@/assests/home/contac.png'


export default function Contact() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8  font-sathoshi">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={contac.src}
              alt="Modern Elevator"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-black/70"></div> */}
          </div>

          {/* Content */}
          <div className="relative z-10 py-20  sm:py-20 text-center">
            {/* Label */}
            <div className="flex items- justify-center gap-4 mb-6 pr-10">
              <div className="w-12 h-0.5 bg-red-600 mt-2"></div>
              <span className="text-red-600 text-lg font-medium tracking-widest uppercase">
                Get Started
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-6">
              Ready to Elevate?
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-10">
              Contact us today for a free consultation and quote. Our team is ready to help you find the perfect elevator solution.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Start a Project
              </button>
              <button className="px-8 py-2 border-2 border-white/50 hover:border-white text-white font-medium rounded-full transition-all duration-300 hover:bg-white/10">
                View Projects
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          {/* <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-white/20 rounded-tl-3xl"></div> */}
          {/* <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-white/20 rounded-br-3xl"></div> */}
        </div>
      </div>
    </div>
  );
}