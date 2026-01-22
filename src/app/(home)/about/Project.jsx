'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import line from '../../../assests/home/line.svg';
import projbg from '../../../assests/home/projbg.png';
import propic from '../../../assests/home/propic.png';

function Project() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });


    return (
        <motion.section
            ref={sectionRef}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white relative py-16 px-4 sm:px-6 lg:px-8 "
        >
            {/* white shadow top */}
            <div className="absolute h-20 w-full -top-10 left-0 z-0 bg-white blur-sm z-20" />
            <div className="absolute h-20 w-full -bottom-10 left-0 z-0 bg-white blur-xl z-20" />



            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={projbg}
                    alt="Background"
                    fill
                    className="object-cover opacity-100"
                    priority
                />
            </div>

            {/* line img */}
            <div className="absolute top-20 left-0 w-full z-10 opacity-50">
                <Image
                    src={line}
                    alt="Decorative Line"
                    className="w-full h-auto"
                    priority
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mb-12"
                >
                    <motion.div
                        className="flex items-center justify-center space-x-3 md:mb-5 mb-5"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="md:w-14 w-14 h-0.5 bg-[#376378] mt-2"></div>
                        <h2 className="text-[#376378] font-medium md:text-2xl text-2xl tracking-wide uppercase">
                            Current Project
                        </h2>
                    </motion.div>

                    <motion.h1
                        className="text-3xl lg:text-5xl font-medium text-black mb-6 leading-tight  pt-2 "
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        What Drives <span className="text-[#376378]">Us Forward </span>
                    </motion.h1>

                    <p className="mt-4 text-gray-600 max-w-4xl mx-auto text-xl">
                        A glimpse into our ongoing elevator and escalator installations across residential, commercial, hospital, and hospitality projects.
                    </p>


                </motion.div>

                {/* Main Content */}
                <div className="flex md:flex-row flex-col w-full gap-12 items-center">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative md:w-[70%] w-full"
                    >
                        <div className="relative rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src={propic}
                                alt="Freedom R26 Home Lift"
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Right: Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className='md:w-[30%] w-full h-full flex flex-col justify-center '
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="space-y-2"
                        >
                            <h5 className="text-black mb-1 uppercase text-2xl font-medium">ABC Corporate Tower</h5>
                            <p className="text-[#376378] text-lg">Actor Nadarsha's house</p>
                            <h5 className="text-[#376378] mb-1 uppercase text-2xl">home elevator</h5>
                        </motion.div>
                    </motion.div>
                </div>


            </div>
        </motion.section>
    );
}

export default Project