"use client"
import line from "@/assests/home/line.svg";
import Image from 'next/image';


export default function Values() {
    const values = [
        {
            title: "SAFETY FIRST",
            description: "Every elevator we install meets the highest safety standards and undergoes rigorous testing.",
            color: "text-[#376378]"
        },
        {
            title: "QUALITY EXCELLENCE",
            description: "We use only premium materials and cutting-edge technology in all our products.",
            color: "text-[#376378]"
        },
        {
            title: "CUSTOMER FOCUS",
            description: "We use only premium materials and cutting-edge technology in all our products.",
            color: "text-[#376378]"
        },
        {
            title: "INNOVATION",
            description: "Continuously improving our solutions with the latest technological advancements.",
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
                <div className="text-center mb-16">
                    <div className="flex items-start justify-center space-x-3 mb-4">
                        <div className="w-16 h-0.5 bg-[#376378] mt-2"></div>
                        <h3 className="text-[#376378] font-medium text-xl tracking-wide uppercase">
                            Our Values
                        </h3>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium text-gray-900">
                        What Drives <span className="text-[#376378]">Us Forward</span>
                    </h2>
                </div>

                {/* Values Grid */}
                <div className="relative">
                    

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="relative group bg-blur-sm">

                                {/* Value Card */}
                                <div className="text-center p-6  hover:shadow-xl transition-all duration-300 h-full">
                                    {/* Title with accent color */}
                                    <h3 className={`text-xl font-medium mb-4 ${value.color} uppercase tracking-wide`}>
                                        {value.title.split(' ')[0]} <span className="text-gray-900">{value.title.split(' ').slice(1).join(' ')}</span>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-700  leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
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
