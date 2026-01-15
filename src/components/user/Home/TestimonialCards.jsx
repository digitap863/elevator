'use client';

import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function TestimonialsCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      rating: 5,
      title: 'Exceptional Service & Quality Installation',
      quote: '"We installed a passenger elevator in our 5-story commercial building in Kochi. The team was professional, completed the work on time, and the elevator runs smoothly. Their after-sales service is outstanding!"',
      author: {
        name: 'Rajesh Kumar',
        role: 'Building Manager, Kochi',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces'
      }
    },
    {
      rating: 5,
      title: 'Best Home Lift Solution in Kerala',
      quote: '"As a senior citizen, climbing stairs was becoming difficult. They installed a beautiful home lift in our residence. The design is elegant, operation is whisper-quiet, and it has truly improved our quality of life."',
      author: {
        name: 'Meera Nair',
        role: 'Homeowner, Trivandrum',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces'
      },
      highlighted: true
    },
    {
      rating: 4.5,
      title: 'Reliable Maintenance & Quick Response',
      quote: '"We have been using their AMC services for our hospital elevators for 3 years. Their maintenance team is prompt, professional, and ensures zero downtime. Highly recommended for healthcare facilities."',
      author: {
        name: 'Dr. Anitha Menon',
        role: 'Administrator, Calicut',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces'
      }
    },
    {
      rating: 5,
      title: 'Perfect for Our Luxury Apartments',
      quote: '"We chose them for our premium residential project in Kakkanad. They delivered high-speed elevators with modern aesthetics. The installation was seamless and residents are extremely satisfied with the performance."',
      author: {
        name: 'Suresh Pillai',
        role: 'Developer, Ernakulam',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces'
      }
    },
    {
      rating: 4.5,
      title: 'Cost-Effective and Energy Efficient',
      quote: '"The modernization of our old elevator was done efficiently. The new system is energy-efficient, reducing our electricity costs significantly. Great value for money and excellent technical support."',
      author: {
        name: 'Thomas Joseph',
        role: 'Facility Head, Thrissur',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces'
      },
      highlighted: true
    },
    {
      rating: 5,
      title: 'Outstanding Elevator Performance',
      quote: '"Our warehouse needed a heavy-duty freight elevator. They designed and installed a robust system that handles our daily operations flawlessly. The safety features are top-notch "',
      author: {
        name: 'Priya Krishnan',
        role: 'Operations Manager, Kottayam',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces'
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
                    <h3
                      className={`text-lg font-semibold mb-4 ${index === activeIndex
                          ? 'text-slate-800'
                          : 'text-slate-800'
                        }`}
                    >
                      {testimonial.title}
                    </h3>

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
                    <img
                      src={testimonial.author.image}
                      alt={testimonial.author.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[#C10510] shadow-md"
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