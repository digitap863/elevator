"use client"
import L1 from "@/assests/home/L1.png";
import L2 from "@/assests/home/L2.png";
import L3 from "@/assests/home/L3.png";
import L4 from "@/assests/home/L4.png";
import L5 from "@/assests/home/L5.png";
import line from "@/assests/home/line.svg";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function ProductCard({ product, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative"
    >
      {/* Number and Title */}
      <div className="flex items-center justify-between md:gap-4 gap-7">
        <div className="md:mb-2">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="md:text-8xl text-7xl font-bold font-dragon"
            style={{
              WebkitTextStroke: '2px #7fa0b2ff',
              WebkitTextFillColor: 'transparent',
              color: 'transparent'
            }}
          >
            {product.number}
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className="md:text-5xl text-3xl font-base text-[#222222] relative md:-top-10 -top-8"
          >
            {product.title}
          </motion.h3>
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            className="md:text-5xl text-3xl font-base text-[#545454] md:-top-8 -top-8 relative"
          >
            {product.subtitle}
          </motion.h4>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: 30 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: "easeOut" }}
          className="md:mb-6 mb-0 overflow-hidden h-56 sm:h-64 lg:pr-6 pr-1"
        >
          <Image
            src={product.image}
            alt={`${product.title} ${product.subtitle}`}
            className="w-auto h-full object-contain opacity-100 transition-transform duration-500 group-hover:scale-110"
          />
        </motion.div>
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
        className="md:text-xl text-lg leading-relaxed tracking-wide mb-6"
      >
        <span className="text-[#222222]">
          {product.description.split('.')[0]}.
        </span>
        {product.description.split('.')[1] && (
          <span className="text-[#545454]">
            {product.description.split('.')[1]}
          </span>
        )}
      </motion.p>

      {/* Read More Link */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
        className="inline-flex items-center gap-2 text-[#376378] hover:text-[#376390] font-medium text-sm group/btn"
      >
        read more
        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
      </motion.button>
    </motion.div>
  );
}

export default function Products() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  const products = [
    {
      id: 1,
      number: "01",
      title: "HOME ",
      subtitle: "ELEVATORS",
      description:
        "Home Elevators offer convenient and comfortable vertical movement within residences, enhancing accessibility and lifestyle with compact design and smooth operation.",
      image: L1,
    },
    {
      id: 2,
      number: "02",
      title: "COMMERCIAL ",
      subtitle: "ELEVATORS",
      description:
        "Commercial Elevators are designed to meet the vertical mobility needs of business environments, offering smooth, safe, and efficient transportation for passengers across multi-floor commercial spaces",
      image: L2,
    },
    {
      id: 3,
      number: "03",
      title: "HOSPITAL ",
      subtitle: "ELEVATORS",
      description:
        "Hospital Elevators are specially engineered for medical environments, ensuring smooth, safe, and swift transportation of patients, stretchers, medical staff, and equipment between floors.",
      image: L3,
    },
    {
      id: 4,
      number: "04",
      title: "HOSPITALITY ",
      subtitle: "ELEVATORS",
      description:
        "Escalators provide continuous, efficient movement of people in high-traffic spaces such as malls, metro stations, airports, and commercial buildings.",
      image: L4,
    },
    {
      id: 5,
      number: "05",
      title: "STRUCTURAL ",
      subtitle: "ELEVATORS",
      description:
        "Escalators provide continuous, efficient movement of people in high-traffic spaces such as malls, metro stations, airports, and commercial buildings.",
      image: L5,
    },
  ]

  return (
    <main className="min-h-screen font-satoshi relative">
      <Image
        src={line}
        alt="Line"
        className="absolute top-[17%] left-0 w-full opacity-50"
      />

      <Image
        src={line}
        alt="Line"
        className="absolute top-[67%] left-0 w-full opacity-70 scale-y-[-1]"
      />

      {/* Header Section */}
      <div className="px-3 max-w-7xl mx-auto py-16 sm:py-24">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-start space-x-3 mb-6"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={ { width: 40 } }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-14 w-10 h-0.5 bg-[#376378] mt-2"
          />
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#376378] font-medium md:text-2xl text-xl tracking-wide uppercase"
          >
            Products
          </motion.h2>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-7xl">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </main>
  )
}