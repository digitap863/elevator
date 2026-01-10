"use client"
import line from "@/assests/home/line.svg";
import { motion } from 'framer-motion';
import Image from "next/image";

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
    <section id="milestones" className="">
      <div className="w-full py-16 md:py-20 relative">

        <Image src={line} alt="line" className="absolute top-[30%] left-0" />
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <motion.div
            className="flex items-start space-x-3 mb-6 font-satoshi"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:w-14 w-14 h-0.5 bg-[#376378] mt-2"></div>
            <h2 className="text-[#376378] font-medium md:text-2xl text-xl tracking-wide uppercase">
              Our Journey
            </h2>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-3xl md:text-5xl font-medium mb-20 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Milestones We're <span className="text-[#376378]">Proud Of</span>
          </motion.h2>

          {/* Timeline Container */}
          <div className="relative">

            {/* Timeline Items */}
            <div className="relative space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-8 min-h-32"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Dot Indicator */}
                  <div className="flex justify-center w-full ">
                    <div className="absolute w-6 h-6 bg-[#376378] rounded-[90px] shadow-md left-1/2 transform md:-translate-x-[50%] translate-x-[60%] relative -top-7"></div>
                  </div>

                  {/* Content Container */}
                  <div className="w-full ">
                    {item.position === "left" ? (
                      // Left Side Content
                      <div className="flex justify-end max-w-xs relative md:-left-[70%] -left-[110%] top-[12%]">
                        <div className="text-left">
                          <h3 className="text-5xl font-bold text-[#376378] font-dragon" style={{
                            WebkitTextStroke: '2px #6B8FA3',
                            WebkitTextFillColor: 'transparent',
                            color: 'transparent'
                          }}>{item.year}</h3>
                          <p className="text- font-semibold text-gray-700 uppercase tracking-wide  md:pb-4">
                            {item.subtitle}
                          </p>
                          <p className="text-sm text-gray-800 mt-3 leading-relaxed pb-2 tracking-wide lg:pr-10">{item.description}</p>
                        </div>
                      </div>
                    ) : (
                      // Right Side Content
                      <div className="max-w-sm ml-1/2 pl-1/2 pl-[20%]">
                        <h3 className="text-5xl font-bold text-[#376378] font-dragon" style={{
                          WebkitTextStroke: '2px #6B8FA3',
                          WebkitTextFillColor: 'transparent',
                          color: 'transparent'
                        }}>{item.year}</h3>
                        <p className="text font-semibold text-gray-700 uppercase tracking-wide  md:pb-4">
                          {item.subtitle}
                        </p>
                        <p className="text-sm text-gray-800 mt-3 leading-relaxed pb-2 tracking-wide ">{item.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
