'use client';

import serban from '@/assests/home/serban.svg';
import serbanmob from '@/assests/home/serbanmob.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Image Background - Mobile */}
            <Image
                src={serbanmob}
                alt="Blog Banner Mobile"
                fill
                priority
                className="object-cover h-screen w-full md:hidden"
            />
            {/* Image Background - Desktop */}
            <Image
                src={serban}
                alt="Blog Banner"
                fill
                priority
                className="object-cover h-screen w-full hidden md:block"
            />

            {/* Subtle Gradient Overlay for enhanced readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent md:bg-gradient-to-r md:from-white/90 md:via-white/50 md:to-transparent" />

            {/* Content Container */}
            <div className="relative max-w-7xl mx-auto h-screen px-4 md:px-8">
                <div className="relative z-10 flex flex-col justify-center h-full pt-16 md:pt-20 max-w-2xl">
                    <motion.div
                        className="lg:pb-10 flex flex-col justify-center"
                        initial={{ x: -80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.3
                        }}
                    >
                        {/* Breadcrumbs */}
                            
                        <div className="flex items-center space-x-3 mb-6 font-satoshi">
                            <div className="md:w-14 w-10 h-0.5 bg-[#376378]"></div>
                            <h2 className="text-[#376378] font-medium md:text-2xl text-xl tracking-wider uppercase">
                                Our Blog
                            </h2>
                        </div>

                        {/* Title */}
                        <h1 className="font-aquire text-3xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.2] mb-6">
                            Insights, Ideas <br />
                            & <span className="text-red-500">Industry</span> Updates
                        </h1>

                        {/* Description */}
                        <p className="font-satoshi text-base md:text-lg text-gray-700 leading-relaxed max-w-xl font-light">
                            Stay up-to-date with our latest articles, insights, technology updates,
                            business ideas, and the digital trends driving innovation in the vertical transportation industry.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Soft bottom blur transition for integration with content sections */}
            <div className="absolute -bottom-12 left-0 w-full h-24 bg-white blur-lg"></div>
        </div>
    );
};

export default Banner;
