'use client';
import { useState } from 'react';
import Image from 'next/image';
import line from '@/assests/home/line.svg'

export default function ContactSection() {
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
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
    };

    return (
        <div className="min-h-screen pt-48  pb-24 px-4 sm:px-6 lg:px-8 relative">
            <Image
                src={line}
                alt="line"
                fill
                className="absolute -bottom-20 left-0"
            />
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
                    {/* Contact Form */}
                    <div className=" px-8 pb-8 z-10 lg:pr-18">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-base tracking-wide text-black  mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-1.5 shadow-sm bg-[#F7F7F7] focus:ring-1 focus:ring-red-500 focus:border-transparent outline-none transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="contact" className="block text-sm font-base tracking-wide text-black  mb-2">
                                    Contact No
                                </label>
                                <input
                                    type="tel"
                                    id="contact"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    className="w-full px-4 py-1.5 shadow-sm bg-[#F7F7F7] focus:ring-1 focus:ring-red-500 focus:border-transparent outline-none transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-base tracking-wide text-black  mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    <option value="">Select project type</option>
                                    <option value="web">Web Development</option>
                                    <option value="mobile">Mobile App</option>
                                    <option value="design">Design Services</option>
                                    <option value="consulting">Consulting</option>
                                </select>
                            </div>

                            <div className="mb-6 md:mb-0">
                                <label htmlFor="location" className="block text-sm font-base tracking-wide text-black  mb-2">
                                    Location
                                </label>
                                <select
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                className="w-full px-4 py-1.5 placeholder:text-gray-400 placeholder:text-sm text-sm shadow-sm bg-[#F7F7F7] focus:ring-1 focus:ring-red-500 focus:border-transparent outline-none transition"
                                >
                                    <option value="">Enter location</option>
                                    <option value="new-york">New York</option>
                                    <option value="los-angeles">Los Angeles</option>
                                    <option value="chicago">Chicago</option>
                                    <option value="houston">Houston</option>
                                </select>
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
                                onClick={handleSubmit}
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6  transition duration-200 shadow-md"
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* Map Card */}
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden lg:sticky lg:top-8">
                        <div className="relative h-96 lg:h-full md:min-h-[620px]">
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
                    </div>
                </div>
            </div>
        </div>
    );
}