// import { Star } from 'lucide-react';

// export default function TestimonialsCards() {
//   const testimonials = [
//     {
//       rating: 4.5,
//       title: 'Lorem ipsum dolor sit amet, consectetur',
//       quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula ad piscing elit."',
//       author: {
//         name: 'Brandon Kiel',
//         role: 'CEO',
//         image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces'
//       }
//     },
//     {
//       rating: 4.5,
//       title: 'Lorem ipsum dolor sit amet, consectetur',
//       quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula ad piscing elit."',
//       author: {
//         name: 'Sarah Jeans',
//         role: 'MD',
//         image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces'
//       },
//       highlighted: true
//     },
//     {
//       rating: 5,
//       title: 'Lorem ipsum dolor sit amet, consectetur',
//       quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula ad piscing elit."',
//       author: {
//         name: 'Annete Geas',
//         role: 'MD',
//         image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces'
//       }
//     },
//      {
//       rating: 4.5,
//       title: 'Lorem ipsum dolor sit amet, consectetur',
//       quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula ad piscing elit."',
//       author: {
//         name: 'Brandon Kiel',
//         role: 'CEO',
//         image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces'
//       }
//     },
//     {
//       rating: 4.5,
//       title: 'Lorem ipsum dolor sit amet, consectetur',
//       quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula ad piscing elit."',
//       author: {
//         name: 'Sarah Jeans',
//         role: 'MD',
//         image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces'
//       },
//       highlighted: true
//     },
//     {
//       rating: 5,
//       title: 'Lorem ipsum dolor sit amet, consectetur',
//       quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula ad piscing elit."',
//       author: {
//         name: 'Annete Geas',
//         role: 'MD',
//         image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces'
//       }
//     }
//   ];

//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(
//         <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
//       );
//     }

//     if (hasHalfStar) {
//       stars.push(
//         <div key="half" className="relative">
//           <Star className="w-5 h-5 text-orange-500" />
//           <div className="absolute inset-0 overflow-hidden w-1/2">
//             <Star className="w-5 h-5 fill-orange-500 text-orange-500" />
//           </div>
//         </div>
//       );
//     }

//     const emptyStars = 5 - Math.ceil(rating);
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(
//         <Star key={`empty-${i}`} className="w-5 h-5 text-orange-500" />
//       );
//     }

//     return stars;
//   };

//   return (
//     <div className="py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className={`relative ${
//                 testimonial.highlighted
//                   ? 'transform lg:scale-105 lg:-translate-y-4'
//                   : ''
//               }`}
//             >
//               <div
//                 className={`rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${
//                   testimonial.highlighted
//                     ? 'bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200'
//                     : 'bg-white'
//                 }`}
//               >
//                 {/* Star Rating */}
//                 <div className="flex gap-1 mb-6">
//                   {renderStars(testimonial.rating)}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-lg font-semibold text-slate-800 mb-4">
//                   {testimonial.title}
//                 </h3>

//                 {/* Quote */}
//                 <p className="text-slate-600 text-sm leading-relaxed mb-8 italic">
//                   {testimonial.quote}
//                 </p>

//                 {/* Author Info */}
//                 <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
//                   <img
//                     src={testimonial.author.image}
//                     alt={testimonial.author.name}
//                     className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
//                   />
//                   <div>
//                     <h4 className="font-semibold text-slate-800 text-sm">
//                       {testimonial.author.name}
//                     </h4>
//                     <p className="text-slate-500 text-xs">
//                       {testimonial.author.role}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }







'use client'; // Required for Swiper in Next.js

import { Star } from 'lucide-react';
import { useState } from 'react';

// 1. Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// 2. Import Swiper modules
import { Autoplay, Pagination } from 'swiper/modules';

// 3. Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TestimonialsCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      rating: 4.5,
      title: 'Lorem ipsum dolor sit amet, consectetur',
      quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula ad piscing elit."',
      author: {
        name: 'Brandon Kiel',
        role: 'CEO',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces'
      }
    },
    {
      rating: 4.5,
      title: 'Lorem ipsum dolor sit amet, consectetur',
      quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula ad piscing elit."',
      author: {
        name: 'Sarah Jeans',
        role: 'MD',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces'
      },
      highlighted: true
    },
    {
      rating: 5,
      title: 'Lorem ipsum dolor sit amet, consectetur',
      quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula ad piscing elit."',
      author: {
        name: 'Annete Geas',
        role: 'MD',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces'
      }
    },
    {
      rating: 4.5,
      title: 'Lorem ipsum dolor sit amet, consectetur',
      quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula ad piscing elit."',
      author: {
        name: 'Brandon Kiel',
        role: 'CEO',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces'
      }
    },
    {
      rating: 4.5,
      title: 'Lorem ipsum dolor sit amet, consectetur',
      quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula ad piscing elit."',
      author: {
        name: 'Sarah Jeans',
        role: 'MD',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces'
      },
      highlighted: true
    },
    {
      rating: 5,
      title: 'Lorem ipsum dolor sit amet, consectetur',
      quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula ad piscing elit."',
      author: {
        name: 'Annete Geas',
        role: 'MD',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces'
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
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Swiper Implementation */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30} // Gap between slides
          slidesPerView={1} // Default mobile view
          loop={true}
          centeredSlides={true} // Center the active slide
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
          // Responsive breakpoints to mimic your original grid
          breakpoints={{
            640: {
              slidesPerView: 1,
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
          className="pb-12 pt-5" // Add padding top/bottom so scaled cards don't get cut off
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-auto py-10"> 
            {/* h-auto ensures all slides stretch to same height if needed */}
              <div
                className={`h-full relative transition-transform duration-300 ${
                  index === activeIndex
                    ? 'transform lg:scale-105'
                    : ''
                }`}
              >
                <div
                  className={`h-full flex flex-col justify-between rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${
                    index === activeIndex
                      ? 'bg-gradient-to-br from-orange-50 to-amber-50 border border-[#376378]'
                      : 'bg-white'
                  }`}
                >
                  <div>
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg font-semibold mb-4 ${
                      index === activeIndex ? 'text-slate-800' : 'text-slate-800'
                    }`}>
                      {testimonial.title}
                    </h3>

                    {/* Quote */}
                    <p className={`text-sm leading-relaxed mb-8 italic ${
                      index === activeIndex ? 'text-slate-600' : 'text-slate-600'
                    }`}>
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className={`flex items-center gap-4 pt-6 border-t mt-auto ${
                    index === activeIndex ? 'border-slate-200' : 'border-slate-200'
                  }`}>
                    <img
                      src={testimonial.author.image}
                      alt={testimonial.author.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
                    />
                    <div>
                      <h4 className={`font-semibold text-sm ${
                        index === activeIndex ? 'text-slate-800' : 'text-slate-800'
                      }`}>
                        {testimonial.author.name}
                      </h4>
                      <p className={`text-xs ${
                        index === activeIndex ? 'text-slate-500' : 'text-slate-500'
                      }`}>
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
    </div>
  );
}