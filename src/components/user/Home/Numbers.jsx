'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Counter animation component
function AnimatedCounter({ target, duration = 2000, suffix = "" }) {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const isInView = useInView(countRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        let animationFrame;

        // Extract numeric value from target (e.g., "15+" -> 15, "2600+" -> 2600, "100%" -> 100)
        const numericTarget = parseInt(target.replace(/[^0-9]/g, ''));

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * numericTarget);

            setCount(currentCount);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(numericTarget);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [isInView, target, duration]);

    return (
        <span ref={countRef}>
            {count}{suffix}
        </span>
    );
}

export default function Numbers() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const stats = [
        {
            number: "16+",
            label: "Years Experience",
            description: "Serving Kerala since 2015"
        },
        {
            number: "1600+",
            label: "Installations",
            description: "Successful projects completed"
        },
        {
            number: "100+",
            label: "Happy Customers",
            description: "Satisfied clients across Kerala"
        }
    ];

    return (
        <motion.section
            ref={sectionRef}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="md:py-4 py-8 px-4 sm:px-6 lg:px-8 "
        >
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        About Unified Elevators
                    </h2>
                </motion.div> */}

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                            className="relative group"
                        >
                            {/* Card with gradient border effect */}
                            <div className="relative ">
                                {/* Gradient background on hover */}
                                {/* <div className="absolute inset-0 bg-gradient-to-br from-[#376378]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}

                                {/* Content */}
                                <div className="relative z-10 text-center">
                                    {/* Number */}
                                    <div className="mb-3">
                                        <span className="text-5xl md:text-5xl font-medium bg-gradient-to-r from-[#376378] to-[#1e3a5f] bg-clip-text text-transparent">
                                            <AnimatedCounter
                                                target={stat.number}
                                                suffix={stat.number.replace(/[0-9]/g, '')}
                                            />
                                        </span>
                                    </div>

                                    {/* Label */}
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {stat.label}
                                    </h3>

                                    {/* Description */}
                                    {/* <p className="text-sm text-gray-600">
                                        {stat.description}
                                    </p> */}
                                </div>

                                {/* Decorative corner accent */}
                                {/* <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#376378]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
