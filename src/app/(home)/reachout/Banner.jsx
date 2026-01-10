'use client';

import AboutBann from '@/assests/home/AboutBann.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';


const Banner = () => {
    return (
        <div className="relative w-full h-screen ">
            {/* Image Background */}
            <Image
                src={AboutBann}
                alt="Banner"
                fill
                className="object-cover h-screen w-full"
            />


            {/* Overlay for better text readability */}
            <div className="relative max-w-7xl mx-auto h-screen">
                {/* Content */}
                <div className="relative z-10 flex flex-row items-center justify-start h-full  px-4  ">

                    <motion.div
                        className='lg:pb-20 pb-20'
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.3
                        }}
                    >
                        <div className="flex items-start space-x-3 mb-6 font-satoshi">
                            <div className="md:w-14 w-10 h-0.5 bg-[#376378] mt-2"></div>
                            <h2 className="text-[#376378] font-medium md:text-2xl text-xl tracking-wide uppercase">
                                CONTACT US
                            </h2>
                        </div>
                        <p className="font-aquire md:text-6xl text-4xl">
                            LET'S <span className="text-red-500"> START </span> A  <br />
                            CONVERSATION
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* i want blur effect in the bottom of the video full width  */}
            <div className="absolute -bottom-12 left-0 w-full h-24 bg-[#ffffff] blur-lg"></div>

            {/* Contact Information Section */}
            <div className="absolute -bottom-34 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4 z-20">
                <div className="bg-[#376378]/30 rounded-3xl shadow-2xl md:p-10 p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4">
                        {/* Location Card */}
                        <div className="bg-white/70 rounded-2xl p-5 flex  gap-8 items-center text-left">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 ml-2">
                                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-sm text-gray-800 leading-relaxed">
                                Building No.M.P. V-319,<br />
                                Marthanpuram, Maradu,<br />
                                Cochin- 682304
                            </p>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-white/70 rounded-2xl p-5 flex  gap-8 items-center text-left">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center  ml-2 ">
                                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                            </div>
                            <p className="text-sm text-gray-800 font-medium">
                                +91 94960-03052
                            </p>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white/70 rounded-2xl p-5 flex  gap-8  items-center text-left">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center ml-2 md:ml-0">
                                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                            <p className="text-sm text-gray-800 font-medium">
                                info@reliantelevators.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;