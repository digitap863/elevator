"use client";
import ico1 from '@/assests/home/ico1.png';
import ico2 from '@/assests/home/ico2.png';
import ico3 from '@/assests/home/ico3.png';
import ico4 from '@/assests/home/ico4.png';
import ico5 from '@/assests/home/ico5.png';
import ico6 from '@/assests/home/ico6.png';
import ico7 from '@/assests/home/ico7.png';
import ico8 from '@/assests/home/ico8.png';
import uspbg from '@/assests/home/uspbg.png';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Usp() {
    const uspFeatures = [
        { icon: ico1, label: 'Energy efficiency' },
        { icon: ico2, label: 'Self Rescue' },
        { icon: ico3, label: 'Eco Friendly' },
        { icon: ico4, label: 'Customized Design' },
        { icon: ico5, label: 'Low Maintenance' },
        { icon: ico6, label: 'Space Saving Design' },
        { icon: ico7, label: 'Life Span Durability' },
        { icon: ico8, label: 'AI Smart Option featured' },
    ];

    return (
        <section
            className="relative w-full min-h-[650px] md:min-h-[900px] bg-cover bg-no-repeat bg-[center_left_-8rem] md:bg-center"
            style={{ backgroundImage: `url(${uspbg.src})` }}
        >
            {/* Gradient overlay for smooth section transitions */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 15%, rgba(255, 255, 255, 0) 85%, rgba(255, 255, 255, 0.7) 100%)'
                }}
            ></div>

            {/* Mobile-only white overlay for better readability */}
            <div className="absolute inset-0 bg-white/40 pointer-events-none md:hidden"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-16 md:pb-10">
                {/* OUR USP Header */}
                <motion.div
                    className="flex items-center space-x-3 mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-14 h-0.5 bg-[#376378]"></div>
                    <h2 className="text-[#376378] font-medium text-xl tracking-wide uppercase">
                        Our USP
                    </h2>
                </motion.div>

                {/* Main Content Area - Right aligned */}
                <div className="flex flex-col md:flex-row md:justify-end">
                    <div className="md:w-2/3 lg:w-1/2">
                        {/* Main Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-6"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-aquire text-[#1a3a4a]  tracking-wide">
                                <span className="block">ELEVATE</span>
                                <span className="block">EVERYDAY</span>
                                <span className="block">LIVING</span>
                            </h1>
                        </motion.div>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mdmd:text-[#222222] text-black text-lg md:text-4xl leading-relaxed mb-12 max-w-sm pr-4"
                        >
                            Smart stylish home elevators designed for comfort, safety and seamless integration
                        </motion.p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 md:mt-40 max-w-5xl mx-auto ">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 relative">
                        {/* - Bring Your Home */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="md:w-1/4 ml-auto md:ml-0 text-right md:text-left"
                        >
                            <h3 className="text-2xl md:text-5xl text-black leading- mb-3 font-medium">
                                Bring Your<br className='md:block hidden' /> {" "}Home to<br />
                                <span className="md:text-[#376378] text-black">New Levels</span>
                            </h3>
                            <p className="md:text-gray-800 text-black text-base leading-relaxed">
                                Reliant brings Comfort and<br />style to every step.
                            </p>




                        </motion.div>

                        <div
                            className="w-1 h-full absolute top-0 left-[35%] md:block hidden "
                            style={{
                                background: 'linear-gradient(to bottom, rgba(3, 58, 85, 0) 0%, rgba(3, 58, 85, 1) 50%, rgba(3, 58, 85, 0) 100%)'
                            }}
                        >
                        </div>

                        {/* Right Side - USP Features Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="md:w-2/3 lg:w-1/2"
                        >
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                {uspFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                                        className=" flex items-center gap-3 group"
                                    >
                                        <Image src={feature.icon} alt={feature.label} className='w-10 h-10' />
                                        <span className="text-slate-700 text-sm font-medium">
                                            {feature.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
