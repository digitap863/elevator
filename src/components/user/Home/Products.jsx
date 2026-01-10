"use client"
import L1 from "@/assests/home/L1.png";
import L2 from "@/assests/home/L2.png";
import L3 from "@/assests/home/L3.png";
import L4 from "@/assests/home/L4.png";
import L5 from "@/assests/home/L5.png";
import line from "@/assests/home/line.svg";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


export default function Products() {
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
    <main className="min-h-screen font-satoshi relative   ">

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
        <div className="flex items-start space-x-3 mb-6">
          <div className="md:w-14 w-10 h-0.5 bg-[#376378] mt-2"></div>
          <h2 className="text-[#376378] font-medium md:text-2xl text-xl tracking-wide uppercase">
            Products
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-7xl">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Number and Title */}
              <div className="flex items-center justify-between md:gap-4 gap-7">
                <div className="md:mb-2">
                  <h1
                    className="md:text-9xl text-7xl font-bold font-dragon"
                    style={{
                      WebkitTextStroke: '2px #6B8FA3',
                      WebkitTextFillColor: 'transparent',
                      color: 'transparent'
                    }}
                  >
                    {/* <h1 className="text-9xl font-bold font-dragon text-[#376378]"> */}
                    {product.number}
                  </h1>
                  <h3 className="md:text-5xl text-3xl font-base text-[#222222]  relative md:-top-10 -top-8">
                    {product.title}
                  </h3>
                  <h4 className="md:text-5xl text-3xl font-base text-[#545454] md:-top-8 -top-8 relative  ">
                    {product.subtitle}
                  </h4>
                </div>

                {/* Image */}
                <div className="md:mb-6 mb-0 overflow-hidden  h-56 sm:h-64 lg:pr-6 pr-1">
                  <Image
                    src={product.image}
                    alt={`${product.title} ${product.subtitle}`}
                    className="w-full h-full object-contain opacity-100"
                  />
                </div>
              </div>

              {/* Description */}
              <p className="md:text-xl text-lg leading-relaxed tracking-wide mb-6">
                <span className="text-[#222222]">
                  {product.description.split('.')[0]}.
                </span>
                {product.description.split('.')[1] && (
                  <span className="text-[#545454]">
                    {product.description.split('.')[1]}
                  </span>
                )}
              </p>

              {/* Read More Link */}
              <button className="inline-flex items-center gap-2 text-[#376378] hover:text-[#376390] font-medium text-sm group/btn">
                read more
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>


            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
