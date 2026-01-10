'use client';

import proban from '@/assests/home/proban.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';


const Banner = () => {
    return (
        <div className="relative w-full h-screen ">
            {/* Image Background */}
            <Image
                src={proban}
                alt="Banner"
                fill
                className="object-cover h-screen w-full"
            />


            {/* Overlay for better text readability */}
            <div className="relative max-w-7xl mx-auto h-screen">
                {/* Content */}
                <div className="relative z-10 flex flex-row items-center md:justify-end h-full  px-4  ">

                    <motion.div
                        className='lg:pb-20'
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.3
                        }}
                    >
                        <div className="flex items-start space-x-3 md:mb-6 mb-4 font-satoshi">
                            <div className="md:w-14 w-10 h-0.5 bg-[#376378] mt-2"></div>
                            <h2 className="text-[#376378] font-medium md:text-2xl text-xl tracking-wide uppercase">
                                OUR PRODUCTS
                            </h2>
                        </div>
                        <p className="font-aquire md:text-6xl text-3xl">
                            ELEVATORS FOR<br /> <span className="text-red-500"> EVERY </span>
                            NEED
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* i want blur effect in the bottom of the video full width  */}
            <div className="absolute -bottom-12 left-0 w-full h-24 bg-[#FFFFFF] blur-lg"></div>
        </div>
    );
};

export default Banner;