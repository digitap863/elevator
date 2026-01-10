"use client"
import contac from '@/assests/home/contac.png';
import contamob from '@/assests/home/contamob.png';
import { motion } from 'framer-motion';
import Link from 'next/link';


export default function Contact({
  label = "Get Started",
  heading = "Ready to Elevate?",
  description = "Contact us today for a free consultation and quote. Our team is ready to help you find the perfect elevator solution.",
  primaryButtonText = "Start a Project",
  primaryButtonLink = "/reachout",
  secondaryButtonText = "View Projects",
  secondaryButtonLink = "/projects",
  showSecondaryButton = true
}) {
  return (
    <div className="py-16 px-2 sm:px-6 lg:px-8  font-sathoshi">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={contac.src}
              alt="Modern Elevator"
              className="w-full h-full object-cover md:block hidden "
            />
            <img
              src={contamob.src}
              alt="Modern Elevator"
              className="w-full h-full object-cover md:hidden block "
            />
            {/* <div className="absolute inset-0 bg-black/70"></div> */}
          </div>

          {/* Content */}
          <div className="relative z-10 py-10 px-4  md:py-20 text-center">
            {/* Label */}
            <motion.div
              className="flex items- justify-center gap-4 md:mb-6 mb-4 pr-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-0.5 bg-red-600 mt-2"></div>
              <span className="text-red-600 text-lg font-medium tracking-widest uppercase">
                {label}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-4xl sm:text-4xl lg:text-5xl font-medium text-white md:mb-6 mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {heading}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto md:mb-10 mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-row items-center justify-center md:gap-4 gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href={primaryButtonLink}>
                <button className=" md:text-base text-sm px-8 py-2 md:tracking-normal  tracking-tight bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  {primaryButtonText}
                </button>
              </Link>
              {showSecondaryButton && (
                <Link href={secondaryButtonLink}>
                  <button className="md:text-base text-sm px-8 py-2  md:tracking-normal  tracking-tight border-2 border-white/50 hover:border-white text-white font-medium rounded-full transition-all duration-300 hover:bg-white/10">
                    {secondaryButtonText}
                  </button>
                </Link>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}