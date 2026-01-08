"use client"
import line from "@/assests/home/line.svg";
import Image from 'next/image';


export default function Proccess() {
    const values = [
        {
            num:'01',
            title: "CONSULTATION",
            description: "Free site visit & assessment",
        },
        {
            num:'02',
            title: "PROPOSAL",
            description: "Detailed quote & timeline",
        },
        {
            num:'03',
            title: "EXECUTION",
            description: "Professional service delivery",
        },
        {
            num:'04',
            title: "SUPPORT",
            description: "Ongoing care & maintenance",
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
                className="absolute top-[25%] left-0 w-full opacity-70"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-start justify-center space-x-3 mb-4">
                        <div className="w-16 h-0.5 bg-[#376378] mt-2"></div>
                        <h3 className="text-[#376378] font-medium text-xl tracking-wide uppercase">
                            Our Proccess
                        </h3>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium text-gray-900">
                        How We Work <span className="text-[#376378]"></span>
                    </h2>
                </div>

                {/* Values Grid */}
                <div className="relative">
                    

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="relative group bg-blur-sm">

                                {/* Value Card */}
                                <div className="text-center p-6   transition-all duration-300 h-full">

                                   <h3 className="text-7xl font-bold text-[#376378] font-dragon" style={{
                                        WebkitTextStroke: '2px #6B8FA3',
                                        WebkitTextFillColor: 'transparent',
                                        color: 'transparent'
                                    }}>{value.num}</h3>
                                    {/* Title with accent color */}
                                    <h3 className={`text-xl font-medium mb-3 text-black uppercase tracking-wide`}>
                                        {value.title} 
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-700 text-lg leading-relaxed">
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
