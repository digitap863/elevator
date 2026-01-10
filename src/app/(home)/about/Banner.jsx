'use client';

import AboutBann from '@/assests/home/AboutBann.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';


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
                <div className="relative z-10 flex flex-row items-center  justify-start h-full  px-4  ">

                    <motion.div
                        className='lg:pb-10'
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.3
                        }}
                    >
                        <div className="flex items-start space-x-3 mb-5 font-satoshi">
                            <div className="md:w-14 w-10 h-0.5 bg-[#376378] mt-2"></div>
                            <h2 className="text-[#376378] font-medium md:text-2xl text-xl tracking-wide uppercase">
                                ABOUT US
                            </h2>
                        </div>
                        <p className="font-aquire md:text-6xl text-4xl">
                            ELEVATING<br className="md:hidden block " /> <span className="text-red-500"><br className="md:block hidden" /> STANDARDS <br className="md:hidden block " /></span> SINCE <br className="md:block hidden " />
                            2014
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