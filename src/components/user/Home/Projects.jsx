'use client';

import line from "@/assests/home/line.svg";
import Image from 'next/image';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import pro1 from "@/assests/home/pro1.svg";
import pro2 from "@/assests/home/pro2.svg";
import pro3 from "@/assests/home/pro3.svg";
import pro4 from "@/assests/home/pro4.svg";
import pro5 from "@/assests/home/pro5.svg";
import pro6 from "@/assests/home/pro6.svg";
import pro7 from "@/assests/home/pro7.svg";


export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'ABODE ENCLAVE',
      subtitle: 'Pipeline - Pallavaram',
      image: pro1,
    },
    {
      id: 2,
      title: 'LUXURY TOWERS',
      subtitle: 'Downtown - Chennai',
      image: pro2,
    },
    {
      id: 3,
      title: 'SKYLINE RESIDENCY',
      subtitle: 'Anna Nagar - Chennai',
      image: pro3,
    },
    {
      id: 4,
      title: 'METRO PLAZA',
      subtitle: 'T Nagar - Chennai',
      image: pro4,
    },
    {
      id: 5,
      title: 'GRAND HEIGHTS',
      subtitle: 'Velachery - Chennai',
      image: pro5,
    },
    {
      id: 6,
      title: 'ELITE COMPLEX',
      subtitle: 'OMR - Chennai',
      image: pro6,
    },
    {
      id: 7,
      title: 'ABODE ENCLAVE',
      subtitle: 'Pipeline - Pallavaram',
      image: pro7,
    },
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden font-sathoshi">
      {/* Decorative dots pattern - top left */}
      <div className="absolute top-8 left-12 grid grid-cols-6 gap-6 opacity-20">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
        ))}
      </div>

      {/* Decorative line */}
      <Image
        src={line}
        alt="Line"
        className="absolute top-[15%] left-0 w-full opacity-30"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-start space-x-3 mb-16 justify-center">
          <div className="w-14 h-0.5 bg-[#376378] mt-3"></div>
          <h2 className="text-[#376378] font-medium text-3xl tracking-wide uppercase">
            Our Projects
          </h2>
          <div className="w-14 h-0.5 bg-[#376378] mt-3"></div>
        </div>

        {/* Swiper Carousel with Coverflow Effect */}
        <div className="relative">
          <Swiper
            modules={[ Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 250,
              modifier: 1,
              slideShadows: true,
            }}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              320: {
                coverflowEffect: {
                  rotate: 10,
                  depth: 150,
                },
              },
              768: {
                coverflowEffect: {
                  rotate: 15,
                  depth: 200,
                },
              },
              1024: {
                coverflowEffect: {
                  rotate: 15,
                  depth: 250,
                },
              },
            }}
            className="pb-16 pt-8"
          >
            {projects.map((project) => (
              <SwiperSlide
                key={project.id}
                className="!w-[280px] md:!w-[330px] lg:!w-[380px]"
              >
                <div className="relative group cursor-pointer">
                  {/* Project Card */}
                  <div className="relative h-[450px] md:h-[500px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl transform transition-all ">
                    {/* Project Image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Project Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 group-hover:translate-y-0">
                      <div className="bg-red-600/90 backdrop-blur-sm px-4 py-3 rounded-lg inline-block mb-2">
                        <h3 className="text-xl font-bold tracking-wide">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/90 mt-1">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#376378] rounded-2xl transition-all duration-300"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-10 py-3 border-2 border-[#376378] text-[#376378]  rounded-bl-full rounded-br-full rounded-tl-0 rounded-tr-full  font-semibold hover:bg-[#376378] hover:text-white transition duration-300 shadow-lg text-lg">
            View More
          </button>
        </div>
      </div>

      {/* Bottom decorative dots */}
      <div className="absolute bottom-12 right-12 grid grid-cols-4 gap-3 opacity-20">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
        ))}
      </div>

      {/* Decorative circle */}
      <div className="absolute top-1/2 -right-16 w-64 h-64 border-4 border-[#376378] rounded-full opacity-10"></div>
    </section>
  );
}
