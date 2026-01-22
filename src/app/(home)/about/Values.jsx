"use client"
import line from "@/assests/home/line.svg";
import { motion } from 'framer-motion';
import Image from 'next/image';


export default function Values() {
    const values = [
        {
            title: "Integrity",
            description: "Building trust with customers, communities, suppliers & one another  by doing what is right, working safely, keeping our promises, complying with regulations and laws, and honouring rules.",
            color: "text-[#376378]"
        },
        {
            title: "Ownership and Team work",
            description: "Taking personal responsibility for the outcome of our actions by acting safely and anticipating further requirements, being resourceful and  following throughout. It contributes to success in work as a s a team. ",
            color: "text-[#376378]"
        },
        {
            title: "Transparency",
            description: "Being upfront and  giving visibility about the actions and ensuring consistency with working across organization and cultural boundaries to achieve extraordinary performance and deliver personal service to  customers.",
            color: "text-[#376378]"
        },
        {
            title: "Excellence",
            description: "Building a culture based on excellence in thought and in execution  to better serve customers being a team.  Demonstrate excellence in safety to  protect our staff and  the communities we serve.",
            color: "text-[#376378]"
        }
    ];

    return (
        <section className="relative md:pb-24 pb-10 md:pt-36 pt-10 px-6 overflow-hidden font-sathoshi">


            {/* Decorative line curves */}
            <svg className="absolute top-0 left-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#376378', stopOpacity: 0.3 }} />
                        <stop offset="100%" style={{ stopColor: '#376378', stopOpacity: 0 }} />
                    </linearGradient>
                </defs>
                {/* Curved lines connecting the values */}
                <path
                    d="M 100 200 Q 300 150, 500 200"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                />
                <path
                    d="M 500 200 Q 700 250, 900 200"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                />
            </svg>
            <Image
                src={line}
                alt="Line"
                className="absolute top-[15%] left-0 w-full opacity-40"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="md:text-center md:mb-16 mb-10">
                    <motion.div
                        className="flex items-start md:justify-center space-x-3 mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-16 h-0.5 bg-[#376378] mt-2"></div>
                        <h3 className="text-[#376378] font-medium text-2xl tracking-wide uppercase">
                            Our Values
                        </h3>
                    </motion.div>
                    <motion.h2
                        className="text-3xl md:text-5xl font-medium text-gray-900"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        What Drives <span className="text-[#376378]">Us Forward</span>
                    </motion.h2>
                </div>

                {/* Values Grid */}
                <div className="relative">


                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-5 gap-y-8 lg:gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="relative group bg-blur-sm"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                            >

                                {/* Value Card */}
                                <div className="text-center md:p-2 transition-all duration-300 h-full">
                                    {/* Title with accent color */}

                                    <h3 className={`hidden md:block text-lg font-medium md:mb-4 mb-2 ${value.color} uppercase text-black `}>
                                        {value.title.split(' ')[0]} <span className="">{value.title.split(' ').slice(1).join(' ')}</span>
                                    </h3>

                                    <h3
                                        className={`md:hidden block text-xl font-medium md:mb-4 mb-2 ${value.color} uppercase `}
                                        dangerouslySetInnerHTML={{ __html: value.title }}
                                    />

                                    {/* Description */}
                                    <p className="text-gray-700  leading-relaxed ">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom decorative dots */}
            <div className="absolute bottom-12 left-12 grid grid-cols-4 gap-3 opacity-20">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
                ))}
            </div>

            {/* Decorative circle */}
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 border-4 border-red-400 rounded-full opacity-10"></div>
        </section>
    );
}
