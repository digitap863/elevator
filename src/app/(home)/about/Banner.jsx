'use client';

import Image from 'next/image';
import AboutBann from '@/assests/home/AboutBann.svg'

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

                    <div className='lg:pb-20'>
                    <div className="flex items-start space-x-3 mb-6 font-satoshi">
                        <div className="w-14 h-0.5 bg-[#376378] mt-2"></div>
                        <h2 className="text-[#376378] font-medium text-2xl tracking-wide uppercase">
                            ABOUT US
                        </h2>
                    </div>
                     <p className="font-aquire text-6xl">
                        ELEVATING<br/> <span className="text-red-500"> STANDARDS </span> SINCE <br />
                        2014
                    </p>
                    </div> 
                </div>
            </div>

            {/* i want blur effect in the bottom of the video full width  */}
            <div className="absolute -bottom-12 left-0 w-full h-24 bg-[#EBEBEB] blur-lg"></div>
        </div>
    );
};

export default Banner;