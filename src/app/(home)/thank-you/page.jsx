'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ThankYouPage() {
    // Framer motion variants for the checkmark path animation
    const pathVariants = {
        hidden: { pathLength: 0 },
        visible: {
            pathLength: 1,
            transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 }
        }
    };

    const circleVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 px-4 py-36 relative overflow-hidden">
            {/* Background decorative blobs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#033A55]/10 rounded-full blur-3xl pointer-events-none" />

            <motion.div
                className="max-w-xl w-full bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(8,112,184,0.07)] text-center relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Checkmark Icon Container */}
                <div className="flex justify-center mb-8">
                    <motion.div
                        className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                        variants={circleVariants}
                    >
                        <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <motion.path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                                variants={pathVariants}
                            />
                        </svg>
                        {/* Pulse effect */}
                        <motion.div 
                            className="absolute inset-0 rounded-full border-2 border-green-500/20"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>

                {/* Content */}
                <motion.h1
                    className="text-3xl md:text-4xl font-semibold text-[#033A55] tracking-tight font-satoshi mb-4"
                    variants={childVariants}
                >
                    Thank You!
                </motion.h1>

                <motion.p
                    className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed font-satoshi"
                    variants={childVariants}
                >
                    Your message has been sent successfully. We appreciate you reaching out to <span className="font-semibold text-red-600 font-satoshi">Reliant Elevators</span>. Our team will review your inquiry and get back to you shortly.
                </motion.p>

                {/* Redirect Action Button */}
                <motion.div variants={childVariants} className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center bg-[#033A55] hover:bg-[#022b40] text-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 font-satoshi"
                    >
                        Back to Home
                    </Link>
                    <Link
                        href="/reachout"
                        className="inline-flex items-center justify-center bg-white hover:bg-gray-50 border border-gray-200 text-[#033A55] font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-sm active:scale-95 font-satoshi"
                    >
                        Contact Form
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
