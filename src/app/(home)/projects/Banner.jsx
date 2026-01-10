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
                                OUR PROJECTS
                            </h2>
                        </div>
                        <p className="font-aquire md:text-6xl text-4xl">
                            FEATURED<br /> <span className="text-red-500"> INSTALLATIONS </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* i want blur effect in the bottom of the video full width  */}
            <div className="absolute -bottom-12 left-0 w-full md:h-24 h-28 bg-[#376378] font-sathoshi py-4">
                <div className="max-w-7xl mx-auto h-full bg-[#376378] relative ">
                    <div className="flex items-center justify-between h-full lg:px-28 px-4">
                        <div>
                            <h2 className="md:text-5xl text-3xl font-medium text-white ">100<span className="text-[#C10510]">+</span></h2>
                            <p className="text-white font-base md:text-lg font-sathoshi md:leading-normal leading-tight md:pt-0 pt-2">Project Completed</p>
                        </div>
                        <div>
                            <h2 className="md:text-5xl text-3xl font-medium text-white ">10<span className="text-[#C10510]">+</span></h2>
                            <p className="text-white font-base md:text-lg font-sathoshi md:leading-normal leading-tight md:pt-0 pt-2">Ongoing Completed</p>
                        </div>
                        <div>
                            <h2 className="md:text-5xl text-3xl font-medium text-white ">15<span className="text-[#C10510]">+</span></h2>
                            <p className="text-white font-base md:text-lg font-sathoshi md:leading-normal leading-tight md:pt-0 pt-2">Cites Covered</p>
                        </div>
                        <div>
                            <h2 className="md:text-5xl text-3xl font-medium text-white ">100<span className="text-[#C10510]">+</span></h2>
                            <p className="text-white font-base md:text-lg font-sathoshi md:leading-normal leading-tight md:pt-0 pt-2">Happy Clients </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;