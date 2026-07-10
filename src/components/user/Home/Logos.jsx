'use client';
import logo1 from "@/assests/home/logo1.png";
import logo2 from "@/assests/home/logo2.png";
import logo3 from "@/assests/home/logo3.png";
import logo4 from "@/assests/home/logo4.png";
import logo5 from "@/assests/home/logo5.png";
import logo6 from "@/assests/home/logo6.png";
import logo7 from "@/assests/home/logo7.png";
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Logos() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const logos = [
        { id: 1, src: logo1, alt: "APSON Elevator Controller logo" },
        { id: 2, src: logo2, alt: "Reliant Elevators Associate Partner logo" },
        { id: 3, src: logo3, alt: "HEENA Elevator Motors logo" },
        { id: 4, src: logo4, alt: "Bharat Bijlee Motors logo" },
        { id: 5, src: logo5, alt: "Monarch Elevator Controls logo" },
        { id: 6, src: logo6, alt: "Mykola Elevator Drive logo" },
        { id: 7, src: logo7, alt: "SRIKEL Elevator Components logo" },
        { id: 8, src: logo1, alt: "APSON Elevator Controller logo" },
        { id: 9, src: logo2, alt: "Reliant Elevators Associate Partner logo" },
        { id: 10, src: logo3, alt: "HEENA Elevator Motors logo" },
        { id: 11, src: logo4, alt: "Bharat Bijlee Motors logo" },
        { id: 12, src: logo5, alt: "Monarch Elevator Controls logo" },
        { id: 13, src: logo6, alt: "Mykola Elevator Drive logo" },
        { id: 14, src: logo7, alt: "SRIKEL Elevator Components logo" }
    ];

    return (
        <motion.section
            ref={sectionRef}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-200"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mb-12"
                >
                    <motion.div
                        className="flex md:items-center justify-center space-x-3 md:mb-5 mb-5"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="md:w-14 w-14 h-0.5 bg-[#376378] md:mt-2 mt-3"></div>
                        <h2 className="text-[#376378] font-medium md:text-2xl text-xl tracking-widest uppercase">
                            OUR ASSOCIATE VENDORS IN MOTOR & CONTROLLER
                        </h2>
                    </motion.div>

                    <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                        Partnering With <span className="text-[#1e3a5f]">Trusted Global Brands</span>
                    </h3>
                    <p className="text-gray-600 max-w-3xl mx-auto md:text-lg">
                        We collaborate with world-class manufacturers and technology partners to deliver reliable, safe, and future-ready vertical mobility solutions.
                    </p>
                </motion.div>

                {/* Logos Swiper */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={24}
                        slidesPerView={2}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 6,
                                spaceBetween: 20,
                            },
                        }}
                        className="logos-swiper"
                    >
                        {logos.map((logo, index) => (
                            <SwiperSlide key={logo.id}>
                                <div className="bg-white rounded-lg py-6 px-10 shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center h-22">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="w-full h-auto object-contain "
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </motion.section>
    );
}
