"use client"
import Image from "next/image"
import line from "@/assests/home/line.svg"

const timelineItems = [
  {
    year: "2014",
    subtitle: "Company Founded",
    description: "Started with a vision to revolutionize vertical mobility in Kerala.",
    position: "left",
  },
  {
    year: "2016",
    subtitle: "25TH INSTALLATION",
    description: "Completed our 100th successful elevator installation.",
    position: "right",
  },
  {
    year: "2018",
    subtitle: "ISO CERTIFIED",
    description: "Achieved ISO 9001:2015 certification for quality management.",
    position: "left",
  },
  {
    year: "2022",
    subtitle: "100+ PROJECTS",
    description: "Crossed the milestone of 500 completed projects across India.",
    position: "right",
  },
  {
    year: "2026",
    subtitle: "INDUSTRY LEADER",
    description: "Recognised as Kerala's most trusted elevator company.",
    position: "left",
  },
]

export default function Home() {
  return (
    <section className="">
         <div className="w-full py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="flex items-start space-x-3 mb-6 font-satoshi">
                        <div className="w-14 h-0.5 bg-[#376378] mt-2"></div>
                        <h2 className="text-[#376378] font-medium text-2xl tracking-wide uppercase">
                            Our Journey
                        </h2>
                    </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-medium mb-16">
                Milestones We're <span className="text-[#376378]">Proud Of</span>
                </h2>

                {/* Timeline Container */}
                <div className="relative">
                {/* Dotted Line Background */}
                {line && (
                    <div className="absolute inset-0 pointer-events-none">
                    <Image src={line} alt="Timeline path" fill className="object-cover" />
                    </div>
                )}

                {/* Timeline Items */}
                <div className="relative space-y-8">
                    {timelineItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-8 min-h-32">
                        {/* Dot Indicator */}
                        <div className="flex justify-center w-full ">
                        <div className="absolute w-8 h-6 bg-[#376378] rounded-full border-4 border-white shadow-md left-1/2 transform -translate-x-[50%] relative -top-7"></div>
                        </div>

                        {/* Content Container */}
                        <div className="w-full bg-yellow-500">
                        {item.position === "left" ? (
                            // Left Side Content
                            <div className="flex justify-end max-w-xs relative -left-[70%] top-[12%]">
                            <div className="text-left">
                                <h3 className="text-4xl font-bold text-[#376378] font-dragon"    style={{
                                    WebkitTextStroke: '2px #6B8FA3',
                                    WebkitTextFillColor: 'transparent',
                                    color: 'transparent'
                                    }}>{item.year}</h3>
                                <p className="text- font-semibold text-gray-700 uppercase tracking-wide mt-1 pb-10">
                                {item.subtitle}
                                </p>
                                <p className="text-sm text-gray-800 mt-3 leading-relaxed">{item.description}</p>
                            </div>
                            </div>
                        ) : (
                            // Right Side Content
                            <div className="max-w-sm ml-1/2 pl-1/2 bg-blue-500 pl-[20%]">
                            <h3 className="text-4xl font-bold text-[#376378] font-dragon">{item.year}</h3>
                            <p className="text font-semibold text-gray-700 uppercase tracking-wide mt-1 pb-10">
                                {item.subtitle}
                            </p>
                            <p className="text-sm text-gray-800 mt-3 leading-relaxed">{item.description}</p>
                            </div>
                        )}
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
