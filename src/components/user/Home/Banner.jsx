'use client';
import { motion } from 'framer-motion';


const Banner = () => {
    return (
        <div className="relative w-full md:h-screen h-[70vh] ">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover "
            >
                <source src="/videos/banvdo.mp4" type="video/mp4" className="rounded-lg" />
                Your browser does not support the video tag.
            </video>

            <div className="relative max-w-7xl mx-auto h-[67vh] md:h-screen">
                <div className="relative z-10 flex flex-row items-center justify-start h-full  px-4 font-aquire md:text-6xl text-2xl ">
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.3
                        }}
                    >
                        Kerala’s<span className="text-red-500"> Vertical</span><br />
                        Mobility Experts
                    </motion.p>
                </div>
            </div>

            {/* i want blur effect in the bottom of the video full width  */}
            <div className="absolute -bottom-12 left-0 w-full h-24 bg-[#EBEBEB] blur-lg"></div>
            <div className="absolute -bottom-12 -left-20 w-[25%] h-24 bg-[#EBEBEB] blur-lg "></div>
            <div className="absolute -bottom-12 -right-20 w-[25%] h-24 bg-[#EBEBEB] blur-lg "></div>


        </div>
    );
};

export default Banner;