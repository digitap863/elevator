"use client"

// import line from "@/assests/home/line.svg";
import Image from 'next/image';

export default function Mission() {
    return (
        <section className="relative py-20 px-6 overflow-hidden font-sathoshi bg-[#376378]/10 ">
            {/* Decorative dots pattern - top left */}
            <div className="absolute top-8 left-12 grid grid-cols-6 gap-6 opacity-20">
                {[...Array(24)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
                ))}
            </div>

            {/* Decorative line */}
            {/* <Image
                src={line}
                alt="Line"
                className="absolute top-[15%] left-0 w-full opacity-30"
            /> */}

            <div className="max-w-7xl mx-auto">
                {/* Two Column Grid for Mission and Vision */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Mission Card */}
                    <div className="relative group">
                        <div className="bg-white/50  rounded-lg p-14 pb-20 shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-white/50 relative">

                            {/* Diagonal stripe from top-left to bottom-right */}
                            <div className="absolute top-1 -left-10  w-[106%] h-10 blur-lg bg-gradient-to-r from-white/90  via-white to-white/90 -rotate-[23deg] origin-top-right"></div>


                            {/* Decorative dots in card */}
                            <div className="absolute bottom-6 right-6 grid grid-cols-3 gap-2 opacity-20">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                                ))}
                            </div>

                            {/* Mission Title */}
                            <h2 className="text-4xl font-medium text-gray-900 mb-6 relative z-10">
                                Mission
                            </h2>

                            {/* Mission Description */}
                            <p className="text-gray-800 leading-relaxed text-lg relative z-10">
                                To provide innovative, safe, and reliable vertical mobility solutions
                                that enhance the quality of life for our clients while setting new
                                industry standards for excellence and customer satisfaction.
                            </p>

                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="relative group">
                        <div className="bg-white/50 rounded-lg p-14 pb-20 shadow-xl hover:shadow-2xl shadow-lg transition-all duration-500 h-full border border-white/50 ">

                            <div className="absolute top-1 -left-10  w-[106%] h-10 blur-lg bg-gradient-to-r from-white/90  via-white to-white/90 -rotate-[23deg] origin-top-right"></div>

                            {/* Decorative dots in card */}
                            <div className="absolute bottom-6 right-6 grid grid-cols-3 gap-2 opacity-20">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                                ))}
                            </div>

                            {/* Vision Title */}
                            <h2 className="text-4xl font-medium text-gray-900 mb-6 relative z-10">
                                Vision
                            </h2>

                            {/* Vision Description */}
                            <p className="text-gray-800 leading-relaxed text-lg relative z-10">
                                To be the most trusted and innovative elevator company in India,
                                recognized for our commitment to safety, quality, and customer-
                                centric solutions that transform vertical mobility experiences.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom decorative dots */}
            <div className="absolute bottom-12 right-12 grid grid-cols-4 gap-3 opacity-20">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
                ))}
            </div>

            {/* Decorative circle */}
            <div className="absolute top-1/2 -left-16 w-64 h-64 border-4 border-[#376378] rounded-full opacity-10"></div>
        </section>
    );
}
