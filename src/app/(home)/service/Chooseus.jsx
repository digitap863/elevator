'use client';

import mech from "@/assests/home/mech.svg";
import { motion } from 'framer-motion';
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
        <div className="w-full md:py-20 py-10 px-4 font-sathoshi ">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="md:mb-16 mb-8">
                    <motion.div
                        className="flex items-start space-x-3 mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="md:w-14 w-10 h-0.5 bg-[#376378] mt-2"></div>
                        <h2 className="text-[#376378] font-medium text-xl tracking-widest uppercase">
                            WHY CHOOSE US
                        </h2>
                    </motion.div>
                    <motion.h2
                        className="text-3xl lg:text-5xl font-medium text-gray-900"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Service Excellence Guaranteed
                    </motion.h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Feature Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-2 md:gap-6 gap-4">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.id}
                                    className="bg-white border border-gray-200 shadow-lg rounded-lg md:p-6 p-4 hover:shadow-xl transition-all duration-300 group flex  gap-5 items-center "
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    {/* Icon */}
                                    <div className="mb-4 md:block hidden">
                                        <div className="md:w-12 w-6 md:h-12 h-6 bg-[#376378]/10 rounded-lg flex items-center justify-center group-hover:bg-[#376378] transition-colors duration-300">
                                            <Icon className="md:w-6 md:h-6 w-4 h-4 text-[#376378] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>


                                    <div>
                                        {/* Title */}
                                        <h3 className="md:text-xl text-lg font-medium text-[#376378] mb-2">
                                            {feature.title}
                                        </h3>
                                        {/* Description */}
                                        <p className="md:text-sm text-xs text-gray-600 leading-relaxed ">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right Side - Image */}
                    <motion.div
                        className="relative min-h-[300px] lg:h-full rounded-2xl overflow-hidden shadow-xl p-2 "
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <Image
                            src={mech}
                            alt="Technician working on elevator control panel"
                            fill
                            className="object-cover "
                        />
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Chooseus;
