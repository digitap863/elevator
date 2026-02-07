'use client';

import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import c1 from '@/assests/home/c1.png';
import c2 from '@/assests/home/c2.png';
import c3 from '@/assests/home/c3.png';
import c4 from '@/assests/home/c4.png';
import c5 from '@/assests/home/c5.png';
import c6 from '@/assests/home/c6.png';
import Image from 'next/image';


export default function TestimonialsCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      rating: 5,
      title: 'Reliable and Professional Services',
      quote: '"Reliant Elevator\'s team is knowledgeable, and focused on safety and quality. From consultation to maintenance, everything was handled smoothly and efficiently."',
      author: {
        name: 'Padmasree CK Menon',
        role: 'Thrissur, Kerala',
        image: c1
      }
    },
    {
      rating: 5,
      title: 'Precision and Professionalism',
      quote: '"Reliant Elevator\'s modernization service significantly improved the efficiency and safety of our lift system. Their team handled the project with precision and professionalism."',
      author: {
        name: 'K P Aliyar',
        role: 'Director, Seemas Wedding Collection, Perumbavoor, Cochin',
        image: c3
      }
    },
    {
      rating: 5,
      title: 'Excellent Technical Expertise',
      quote: '"Excellent service and technical expertise. Reliant Elevator guided us from the initial consultation through installation with complete transparency. The elevator performance has been flawless."',
      author: {
        name: 'P M Abdul Aazeez',
        role: 'Director, Euro Locks Pvt Ltd, Vazhakkala, Cochin',
        image: c4
      }
    },
    {
      rating: 5,
      title: 'Practical and Cost-Effective',
      quote: '"We approached Reliant Elevator for an existing lift improvement consultation. Their assessment was detailed, practical, and cost-effective. Highly satisfied with their professional approach."',
      author: {
        name: 'Rajani Chaandi',
        role: 'Film Actress',
        image: c5
      },
      highlighted: true
    },
    {
      rating: 5,
      title: 'Dependable Elevator Solutions',
      quote: '"Reliant Elevator\'s team is  responsive, and focused on safety and quality. From consultation to maintenance, everything was handled smoothly. Highly recommended for dependable elevator solutions."',
      author: {
        name: 'Padmasree Dr Devassy Joseph',
        role: 'Maradu, Cochin',
        image: c2
      },
    },
    {
      rating: 5,
      title: 'Enhanced Safety and Performance',
      quote: '"Reliant Elevator\'s modernization service greatly enhanced the safety and performance of our lift system. The project was executed with precision and a high level of professionalism."',
      author: {
        name: 'Nadarsha',
        role: 'Film Actor',
        image: c6
      }
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-5 h-5 text-orange-500" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-5 h-5 fill-orange-500 text-orange-500" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5 h-5 text-orange-500" />
      );
    }

    return stars;
  };

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="md:py-16 py-6 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Swiper Implementation */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1.2}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              centeredSlides: true,
            },
          }}
          className="pb-12 pt-5"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-auto py-10">
              <div
                className={`h-full relative transition-transform duration-300 ${index === activeIndex ? 'transform lg:scale-105' : ''
                  }`}
              >
                <div
                  className={`h-full flex flex-col justify-between rounded-sm p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${index === activeIndex
                    ? 'bg-gradient-to-br from-[#D2C5B2]/80 via-white to-[#D2C5B2]/80'
                    : 'bg-white'
                    }`}
                  style={
                    index === activeIndex
                      ? {
                        border: '1px solid transparent',
                        borderImage:
                          'linear-gradient(to bottom, #C10510, transparent) 1',
                      }
                      : {}
                  }
                >
                  <div>
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Title */}
                    {/* <h3
                      className={`text-lg font-semibold mb-4 ${index === activeIndex
                          ? 'text-slate-800'
                          : 'text-slate-800'
                        }`}
                    >
                      {testimonial.title}
                    </h3> */}

                    {/* Quote */}
                    <p
                      className={`text-sm leading-relaxed mb-8 italic ${index === activeIndex
                        ? 'text-slate-600'
                        : 'text-slate-600'
                        }`}
                    >
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div
                    className={`flex items-center gap-4 pt-12 mt-auto ${index === activeIndex
                      ? 'border-[#C10510]'
                      : 'border-[#C10510]'
                      }`}
                  >
                    <Image
                      src={testimonial.author.image}
                      alt={testimonial.author.name}
                      className="w-12 h-12 rounded-full object-cover  shadow-md"
                    />
                    <div>
                      <h4
                        className={`font-semibold text-sm ${index === activeIndex
                          ? 'text-slate-800'
                          : 'text-slate-800'
                          }`}
                      >
                        {testimonial.author.name}
                      </h4>
                      <p
                        className={`text-xs ${index === activeIndex
                          ? 'text-slate-500'
                          : 'text-slate-500'
                          }`}
                      >
                        {testimonial.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}