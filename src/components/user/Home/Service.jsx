"use client"
import s1 from '@/assests/home/s1.svg';
import s2 from '@/assests/home/s2.svg';
import s3 from '@/assests/home/s3.svg';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';

export default function Service() {
  const services = [
    {
      title: 'INSTALLATION',
      icon: s1,
      items: [
        'New elevator installation',
        'Site evaluation & planning',
        'Brand-compatible setups'
      ]
    },
    {
      title: 'MAINTENANCE',
      icon: s2,
      items: [
        'Routine inspection & lubrication',
        'Diagnostics & performance tuning',
        'AMC plans available'
      ]
    },
    {
      title: 'MODERNIZATION',
      icon: s3,
      items: [
        'Control systems & drives',
        'Cabin interiors',
        'Safety + efficiency enhancement'
      ]
    }
  ];

  return (
    <div className="relative md:py-16 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-10 right-20">
          <div className="grid grid-cols-6 gap-2">
            {[...Array(180)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-slate-400 rounded-full"></div>
            ))}
          </div>
        </div>
        {/* Curved lines pattern */}
        <svg className="absolute top-0 right-0 w-96 h-96" viewBox="0 0 400 400">
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M ${i * 50} 0 Q 200 ${100 + i * 30} ${i * 50} 400`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-slate-300"
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-start space-x-3 md:mb-7 mb-5">
          <div className="md:w-14 w-14 h-0.5 bg-[#376378] mt-2"></div>
          <h2 className="text-[#376378] font-medium md:text-2xl text-2xl tracking-wide uppercase">
            Services
          </h2>
        </div>

        <h1 className="md:text-4xl text-3xl font-medium font-satoshi text-[#000] md:pb-14 pb-8">Elevators & <span className="text-gray-700">Escalators Solutions</span></h1>


        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              {/* Service Header */}

              <div className="flex items-start gap-6">
                {/* Icon Circle */}
                <div className="mb-8 pt-14">
                  <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image src={service.icon} alt={service.title} className="w-auto h-auto object-contain" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-4 mdmb-6">
                    <div className="w-14 h-0.5 bg-[#376378]"></div>
                    <h3 className="text-base font-semibold text-slate-700 tracking-wider">
                      {service.title}
                    </h3>
                  </div>

                  {/* Service Items List */}
                  <ul className="space-y-3 md:mb-8 mb-5">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center">
                            <Check className="w-3 h-3 text-slate-600" />
                          </div>
                        </div>
                        <span className="text-slate-600 text-base leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Get Started Link */}
                  <button className="inline-flex pl-20 items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm group/btn transition-colors">
                    Get Started
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  {/* Decorative dots */}
                  <div className="mt-8  gap-1 md:flex  hidden">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                    ))}
                  </div>
                </div>

              </div>


            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative element */}
    </div>
  );
}