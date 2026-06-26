'use client';
import line from '@/assests/home/line.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactSection() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        service: '',
        location: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // double check required fields are not empty or whitespace
        if (!formData.name.trim() || !formData.contact.trim() || !formData.email.trim()) {
            return;
        }

        console.log('Form submitted:', formData);
        router.push('/thank-you');
    };

    return (
        <div className="min-h-screen pt-48  md:pb-24 pb-6 px-4 sm:px-6 lg:px-8 relative">
            <Image
                src={line}
                alt="line"
                fill
                className="absolute -bottom-20 left-0"
            />
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
                    {/* Contact Form */}
                    <motion.div
                        className=" px-8 pb-8 z-10 lg:pr-18"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-base tracking-wide text-black  mb-2">
                                    Name <span className="text-red-600 font-bold ml-0.5">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-1.5 shadow-sm bg-[#F7F7F7] focus:ring-1 focus:ring-red-500 focus:border-transparent outline-none transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="contact" className="block text-sm font-base tracking-wide text-black  mb-2">
                                    Contact No <span className="text-red-600 font-bold ml-0.5">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="contact"
                                    name="contact"
                                    required
                                    value={formData.contact}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-1.5 shadow-sm bg-[#F7F7F7] focus:ring-1 focus:ring-red-500 focus:border-transparent outline-none transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-base tracking-wide text-black  mb-2">
                                    Email <span className="text-red-600 font-bold ml-0.5">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-1.5 shadow-sm bg-[#F7F7F7] focus:ring-1 focus:ring-red-500 focus:border-transparent outline-none transition"
                                />
                            </div>

                            <div className="mb-6 md:mb-0">
                                <label htmlFor="service" className="block text-sm font-base tracking-wide text-black  mb-2">
                                    What service are you interested in
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-1.5 shadow-sm bg-[#F7F7F7] text-sm focus:ring-1 focus:ring-red-500 focus:border-transparent outline-none transition"
                                >
                                    <option value="">Select</option>
                                    <option value="Installation">Installation</option>
                                    <option value="Maintenance & Services">Maintenance & Services</option>
                                    <option value="Modernization">Modernization</option>
                                    <option value="Consulting">Consulting</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="mb-6 md:mb-0">
                                <label htmlFor="location" className="block text-sm font-base tracking-wide text-black  mb-2">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full px-4 py-1.5 placeholder:text-gray-400 placeholder:text-sm text-sm shadow-sm bg-[#F7F7F7] focus:ring-1 focus:ring-red-500 focus:border-transparent outline-none transition"
                                />
                                   
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-base tracking-wide text-black  mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-1.5 shadow-sm bg-[#F7F7F7]  focus:ring-1 focus:ring-red-500 focus:border-transparent outline-none transition resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6  transition duration-200 shadow-md"
                            >
                                Submit
                            </button>
                        </form>
                    </motion.div>

                    {/* Map Card */}
                    <motion.div
                        className="bg-white/40 rounded-lg overflow-hidden lg:top-8  gap-4"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >

                        {/* Contact Details Section */}
                        <div className="p-8 space-y-6">
                            {/* Heading */}
                            <motion.h1
                                className="md:text-4xl text-3xl font-medium font-satoshi text-[#000] md:pb-4 pb-4"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                Feel Free to <span className="text-[#033A55]">Contact</span>
                            </motion.h1>

                            {/* Contact Information */}
                            <div className="space-y-4">
                                {/* Location */}
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#033A55] text-white p-3 rounded flex-shrink-0 rounded-full">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-800 font-medium pt-1.5">
                                            Kochi, Calicut, Trivandrum.
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#033A55] text-white p-3 rounded flex-shrink-0 rounded-full">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <a href="tel:+919496003052" className="text-gray-800 font-medium hover:text-[#033A55] transition-colors">
                                            +91-94960-03052
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#033A55] text-white p-3 rounded flex-shrink-0 rounded-full">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <a href="mailto:needhelp@Organia.com" className="text-gray-800 font-medium hover:text-[#033A55] transition-colors">
                                            needhelp@Organia.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="relative h-60 lg:h-full md:min-h-[260px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6558.56682467695!2d76.33312639199333!3d9.942353488010083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872ce624469a5%3A0x9b54c28bebb18fd1!2sReliant%20Elevators%20%26%20Escalators%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1767852280347!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            ></iframe>
                        </div>



                    </motion.div>
                </div>
            </div>
        </div>
    );
}
