'use client';

import line from "@/assests/home/line.svg";
import { ArrowRight, Building2, Check, Sparkles, Wrench } from 'lucide-react';
import Image from "next/image";


const ElevatorServices = () => {

  const services = [
    {
      id: 1,
      icon: Building2,
      title: "Installation",
      description: "Complete elevator installation services customized to your building's unique requirements and specifications.",
      features: [
        "Site assessment & consultation",
        "Custom design solutions",
        "Professional installation",
        "Safety testing & certification",
        "User training & handover"
      ],
      color: "from-gray-50 to-white",
      iconColor: "text-slate-600",
      borderColor: "border-slate-200"
    },
    {
      id: 2,
      icon: Wrench,
      title: "Maintenance",
      description: "Comprehensive maintenance programs to keep your elevators running smoothly, safely, and efficiently.",
      features: [
        "Regular inspections",
        "Preventive maintenance",
        "Emergency repairs",
        "Spare parts replacement",
        "Performance optimization"
      ],
      color: "from-slate-700 to-slate-800",
      iconColor: "text-white",
      borderColor: "border-slate-700",
      isDark: true
    },
    {
      id: 3,
      icon: Sparkles,
      title: "Modernization",
      description: "Upgrade your existing elevator systems with the latest technology, improving safety and efficiency.",
      features: [
        "Control system upgrades",
        "Cabin renovation",
        "Energy efficiency improvements",
        "Safety feature additions",
        "Code compliance updates"
      ],
      color: "from-gray-50 to-white",
      iconColor: "text-slate-600",
      borderColor: "border-slate-200"
    }
  ];

  return (
    <div className="w-full py-20 px-6 font-sathoshi relative ">

      <Image src={line} alt="line" className="absolute top-0 left-0 w-full h-full" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items- justify-center space-x-3 mb-6">
            <div className="md:w-14 w-10 h-0.5 bg-[#376378] mt-2"></div>
            <h2 className="text-[#376378] font-medium text-xl tracking-widest uppercase">
              WHAT WE OFFER
            </h2>
          </div>
          <h2 className="text-4xl lg:text-5xl font-medium text-gray-900">
            Comprehensive Elevator Services
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isMiddle = index === 1;

            return (
              <div
                key={service.id}
                className={`group transition-all duration-300 ${isMiddle ? 'md:-mt-4' : ''
                  }`}
              >
                <div
                  className={`h-full rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${isMiddle
                    ? 'bg-[#376378] text-white'
                    : 'bg-white text-gray-900 border border-[#376378]'
                    }`}
                >

                  {/* Icon */}
                  <div className="mb-4">
                    <div className={`w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`w-8 h-8 ${isMiddle ? 'text-white' : 'text-gray-800'
                        }`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-medium mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={`mb-6 leading-relaxed text-base font-light ${isMiddle ? 'text-gray-100' : 'text-gray-600'
                    }`}>
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm"
                      >
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full ${isMiddle ? 'bg-white/20' : 'bg-gray-100'
                          } flex items-center justify-center mt-0.5`}>
                          <Check className={`w-3 h-3 ${isMiddle ? 'text-white' : 'text-gray-600'
                            }`} />
                        </div>
                        <span className={isMiddle ? 'text-gray-100' : 'text-gray-700'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`flex items-center gap-2 font-medium text-sm transition-all duration-300 group-hover:gap-4 ${isMiddle
                    ? 'text-white'
                    : 'text-gray-800'
                    }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ElevatorServices;