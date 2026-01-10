'use client';

import proj from "@/assests/home/proj.png";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { HiOutlineMapPin } from "react-icons/hi2";


export default function Projectsection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Commercial', 'Home', 'Hospital', 'Structural', 'Hospitality'];

  const projects = [
    {
      id: 1,
      category: 'Structural',
      image: proj,
      title: 'CONSULTATION',
      author: 'Ruchi Panda',
      description: 'Round-the-clock emergency response team available whenever you need us.'
    },
    {
      id: 2,
      category: 'Hospital',
      image: proj,
      title: 'CONSULTATION',
      author: 'Ruchi Panda',
      description: 'Round-the-clock emergency response team available whenever you need us.'
    },
    {
      id: 3,
      category: 'Commercial',
      image: proj,
      title: 'CONSULTATION',
      author: 'Ruchi Panda',
      description: 'Round-the-clock emergency response team available whenever you need us.'
    },
    {
      id: 4,
      category: 'Home',
      image: proj,
      title: 'CONSULTATION',
      author: 'Ruchi Panda',
      description: 'Round-the-clock emergency response team available whenever you need us.'
    },
    {
      id: 5,
      category: 'Hospitality',
      image: proj,
      title: 'CONSULTATION',
      author: 'Ruchi Panda',
      description: 'Round-the-clock emergency response team available wherever you need us.'
    },
    {
      id: 6,
      category: 'Commercial',
      image: proj,
      title: 'CONSULTATION',
      author: 'Ruchi Panda',
      description: 'Round-the-clock emergency response team available whenever you need us.'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="pb-16 pt-28 px-3 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="md:text-center text-left  mx-auto mb-12">
          <motion.div
            className="flex items-start md:justify-center  space-x-3 mb-6 font-satoshi"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-14 h-0.5 bg-[#376378] mt-3"></div>
            <h2 className="text-[#376378] font-medium md:text-2xl text-xl tracking-wide uppercase">
              OUR PROJECTS
            </h2>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-medium text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            RECENT PROJECTS
          </motion.h2>
        </div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center md:gap-3 gap-2 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`md:px-6 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter
                  ? 'bg-slate-700 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-9 gap-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group  rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              {/* Image Container */}
              <div className="relative md:h-64 h-auto overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-xl overflow-hidden"
                />
                {/* Category Badge */}
                <div className="absolute md:top-4 top-2 md:left-4 left-2">
                  <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-2">
                <h3 className="md:text-lg text-base font-medium text-gray-900 mb-3">
                  {project.title}
                </h3>

                {/* Author */}
                <div className="flex items-center gap-2 mb-3">
                  <div className=" flex items-center justify-center">
                    <HiOutlineMapPin className="md:w-8 md:h-8 w-6 h-6 text-red-700" />
                  </div>
                  <span className="text-sm text-gray-600">{project.author}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-800 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}