'use client';

import mech from "@/assests/home/mech.svg";
import { Award, Clock, Shield, Zap } from 'lucide-react';
import Image from 'next/image';

const Chooseus = () => {
    const features = [
        {
            id: 1,
            icon: Clock,
            title: "24/7 Support",
            description: "Round-the-clock emergency response team available whenever you need us.",
        },
        {
            id: 2,
            icon: Shield,
            title: "Safety Certified",
            description: "All services performed by certified technicians following strict safety protocols.",
        },
        {
            id: 3,
            icon: Zap,
            title: "Quick Response",
            description: "Guaranteed response time for emergency calls within 2 hours in service areas.",
        },
        {
            id: 4,
            icon: Award,
            title: "Quality Assured",
            description: "ISO certified processes ensuring the highest standards in every service.",
        },
    ];

    return (
        <div className="w-full py-20 px-6 font-sathoshi ">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-start space-x-3 mb-6">
                        <div className="md:w-14 w-10 h-0.5 bg-[#376378] mt-2"></div>
                        <h2 className="text-[#376378] font-medium text-xl tracking-widest uppercase">
                            WHY CHOOSE US
                        </h2>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-medium text-gray-900">
                        Service Excellence Guaranteed
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={feature.id}
                                    className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 group flex  gap-5 items-center "
                                >
                                    {/* Icon */}
                                    <div className="mb-4">
                                        <div className="w-12 h-12 bg-[#376378]/10 rounded-lg flex items-center justify-center group-hover:bg-[#376378] transition-colors duration-300">
                                            <Icon className="w-6 h-6 text-[#376378] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>


                                    <div>
                                        {/* Title */}
                                        <h3 className="text-xl font-medium text-[#376378] mb-2">
                                            {feature.title}
                                        </h3>
                                        {/* Description */}
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative h-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src={mech}
                            alt="Technician working on elevator control panel"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Chooseus;
