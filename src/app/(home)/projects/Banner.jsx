'use client';

import Image from 'next/image';
import serban from '@/assests/home/serban.svg'

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
                        <div className="w-14 h-0.5 bg-[#376378] mt-2"></div>
                        <h2 className="text-[#376378] font-medium text-2xl tracking-wide uppercase">
                            OUR PROJECTS 
                        </h2>
                    </div>
                     <p className="font-aquire text-6xl">
                        FEATURED<br/> <span className="text-red-500"> INSTALLATIONS </span> 
                    </p>
                    </div> 
                </div>
            </div>

            {/* i want blur effect in the bottom of the video full width  */}
            <div className="absolute -bottom-12 left-0 w-full h-24 bg-[#376378] font-sathoshi py-4">
                    <div className="max-w-7xl mx-auto h-full bg-[#376378] relative ">
                        <div className="flex items-center justify-between h-full lg:px-28">
                            <div>
                                <h2 className="text-5xl font-medium text-white ">100<span className="text-[#C10510]">+</span></h2>
                                <p className="text-white font-base text-lg font-sathoshi ">Project Completed</p>
                            </div>
                             <div>
                                <h2 className="text-5xl font-medium text-white ">10<span className="text-[#C10510]">+</span></h2>
                                <p className="text-white font-base text-lg font-sathoshi ">Ongoing Completed</p>
                            </div>
                             <div>
                                <h2 className="text-5xl font-medium text-white ">15<span className="text-[#C10510]">+</span></h2>
                                <p className="text-white font-base text-lg font-sathoshi ">Cites Covered</p>
                            </div>
                             <div>
                                <h2 className="text-5xl font-medium text-white ">100<span className="text-[#C10510]">+</span></h2>
                                <p className="text-white font-base text-lg font-sathoshi ">HAppy Clients </p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Banner;