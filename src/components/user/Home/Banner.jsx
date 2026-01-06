'use client';
 

const Banner = () => {
    return (
        <div className="relative w-full h-screen ">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                {/* 2. Change src to the path in the public folder */}
                {/* Note: Do not include "public" in the string, just start with / */}
                <source src="/videos/banvdo.mp4" type="video/mp4" className="rounded-lg" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay for better text readability */}
            <div className="relative max-w-7xl mx-auto h-screen">
            {/* Content */}
            <div className="relative z-10 flex flex-row items-center justify-start h-full  px-4 font-aquire text-6xl ">
                <p>
                Kerala’s<span className="text-red-500"> Vertical</span><br/>
                Mobility Experts
                </p>
            </div>
            </div>

            {/* i want blur effect in the bottom of the video full width  */}
            <div className="absolute -bottom-12 left-0 w-full h-24 bg-[#EBEBEB] blur-lg"></div>
        </div>
    );
};

export default Banner;