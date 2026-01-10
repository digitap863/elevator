'use client';

import serban from '@/assests/home/serban.svg';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="relative w-full h-screen ">
            {/* Image Background */}
            <Image
                src={serban}
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
                            <div className="md:w-14 w-10 h-0.5 bg-[#376378] mt-2"></div>
                            <h2 className="text-[#376378] font-medium md:text-2xl text-xl tracking-wide uppercase">
                                OUR SERVICES
                            </h2>
                        </div>
                        <p className="font-aquire md:text-6xl text-4xl">
                            COMPLETE<br /> <span className="text-red-500"> ELEVATOR </span> SINCE <br />
                            SOLUTIONS
                        </p>
                    </div>
                </div>
            </div>

            {/* i want blur effect in the bottom of the video full width  */}
            <div className="absolute -bottom-12 left-0 w-full h-24 bg-[#FFFFFF] blur-lg"></div>
        </div>
    );
};

export default Banner;