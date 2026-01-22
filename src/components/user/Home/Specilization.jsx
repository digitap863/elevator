'use client';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import liff from '../../../assests/home/liff.png';
import specbg from '../../../assests/home/specbg.png';

function Specilization() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const features = [
        {
            title: 'Self-Rescue System',
            description: 'Ensure safe operation and passenger security during emergencies.'
        },
        {
            title: 'Alexa Voice Control',
            description: 'Hands-free lift operation for effortless everyday convenience.'
        },
        {
            title: 'IoT-Enabled Monitoring',
            description: 'Smart connectivity for real-time status, diagnostics, and control.'
        },
        {
            title: 'Face Recognition Access',
            description: 'Advanced biometric security through a dedicated mobile app.'
        },
        {
            title: 'Time Zone Depiction System',
            description: 'Smart scheduling and usage tracking for optimized performance.'
        },
        {
            title: 'Safe Travel During Power Failure',
            description: 'Reliable emergency operation ensures smooth transportation even during power failure.'
        },
        {
            title: 'Button-Operated Manual Rescue',
            description: 'Simple, user-friendly rescue mechanism for added peace of mind.'
        }
    ];

    const highlights = [
        'DESIGNED FOR INDIAN HOMES',
        'SENIOR-FRIENDLY',
        'SPACE-EFFICIENT',
        'LOW MAINTENANCE'
    ];

    return (
        <motion.section
            ref={sectionRef}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white relative py-16 px-4 sm:px-6 lg:px-8 "
        >
            {/* white shadow top */}
            <div className="absolute h-20 w-full -top-10 left-0 z-0 bg-white blur-sm z-20"/>
            <div className="absolute h-20 w-full -bottom-10 left-0 z-0 bg-white blur-xl z-20"/>

                


            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={specbg}
                    alt="Background"
                    fill
                    className="object-cover opacity-100"
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
                            Our Specilization
                        </h2>
                    </motion.div>

                    <motion.h1
                        className="text-3xl lg:text-5xl font-medium text-black mb-6 leading-tight  pt-2 "
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Smart <span className="text-[#376378]">Home Lifts </span>
                    </motion.h1>

                    <p className="mt-4 text-gray-600 max-w-4xl mx-auto text-xl">
                        Freedom R26 is our latest-generation home lift — a 360° vertical mobility solution designed for modern
                        homes, combining safety, intelligence, and elegance.
                    </p>

                    <motion.h1
                        className="text-3xl lg:text-5xl font-medium text-black mb-6 leading-tight  pt-4 "
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Freedom R26 — <span className="text-[#376378]">The Future of Home Mobility </span>
                    </motion.h1>

                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src={liff}
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
                    >


                        <div className="space-y-2">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                    className="bg- border border-gray-400 rounded-lg pl-7 py-4 hover:shadow-md shadow-lg  transition-shadow duration-300  "
                                >
                                    <h5 className="font-semibold text-[#376378] mb-1">{feature.title}</h5>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="flex flex-wrap gap-4 mt-8"
                        >
                            <button className="bg-[#376378] text-white px-6 py-3 rounded-2xl font-medium hover:bg-[#2d4a6f] transition-colors duration-300 flex items-center gap-2">
                                Explore Freedom R26
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="bg-white font-light text-[#1e3a5f] px-6 py-3 rounded-2xl font-medium border-1 border-[#1e3a5f] hover:bg-gray-50 transition-colors duration-300">
                                Request A Home Lift Consultation
                            </button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className="mt-16 text-center"
                >
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                        {highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <span className="text-sm md:text-xl font-semibold text-[#1e3a5f] tracking-widest">
                                    {highlight}
                                </span>
                                {index < highlights.length - 1 && (
                                    <span className="hidden md:inline text-gray-400">|</span>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Specilization