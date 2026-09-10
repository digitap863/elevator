'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiArrowRight, HiOutlineMapPin, HiXMark } from "react-icons/hi2";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Projectsection() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectsList, setProjectsList] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  // Fetch API projects dynamically
  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch('/api/projects');
        const json = await res.json();
        if (json.success && json.data) {
          setProjectsList(json.data);
        }
      } catch (err) {
        console.error('Failed to fetch live projects:', err);
      } finally {
        setLoadingProjects(false);
      }
    }
    loadProjects();
  }, []);

  // Update filter when URL category param changes
  useEffect(() => {
    if (categoryParam && ['Commercial', 'Home', 'Hospital', 'Structural', 'Hospitality'].includes(categoryParam)) {
      setActiveFilter(categoryParam);
    }
  }, [categoryParam]);

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Keyboard escape listener for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filters = ['All', 'Commercial', 'Home', 'Hospital', 'Structural', 'Hospitality'];

  const filteredProjects = activeFilter === 'All'
    ? projectsList
    : projectsList.filter(project => project.category === activeFilter);

  // Helper to extract image list for a project
  const getProjectImages = (proj) => {
    if (!proj) return [];
    if (proj.images && Array.isArray(proj.images) && proj.images.length > 0) {
      return proj.images;
    }
    return [proj.featuredImage || proj.image || '/projects/p2.jpg'];
  };

  return (
    <section id="our-projects" className="pb-16 pt-28 px-3 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="md:text-center text-left mx-auto mb-12">
          <motion.div
            className="flex items-start md:justify-center space-x-3 mb-6 font-satoshi"
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
                ? 'bg-slate-700 text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-9 gap-6">
          {filteredProjects.map((project, index) => {
            const coverImg = (project.images && project.images[0]) || project.featuredImage || project.image || '/projects/p2.jpg';
            const imgCount = project.images && project.images.length > 0 ? project.images.length : 1;

            return (
              <motion.div
                key={project._id || project.id || index}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col cursor-pointer"
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
                <div className="relative w-full h-80 md:h-96 overflow-hidden bg-gray-100">
                  <Image
                    src={coverImg}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Multi-image indicator badge */}
                  {imgCount > 1 && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-slate-900/80 text-white backdrop-blur-md text-[11px] font-semibold px-2.5 py-1 rounded-full shadow">
                        📷 {imgCount} Photos
                      </span>
                    </div>
                  )}

                  {/* Hover prompt overlay */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/95 backdrop-blur-md text-gray-900 text-xs font-semibold px-4 py-2 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1.5">
                      View Details & Gallery <HiArrowRight className="w-3.5 h-3.5 text-[#376378]" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#376378] transition-colors">
                    {project.title}
                  </h3>

                  {/* Location / Author */}
                  <div className="flex items-center gap-1.5 mb-3 text-gray-600">
                    <HiOutlineMapPin className="w-5 h-5 text-red-600 shrink-0" />
                    <span className="text-sm font-medium">{project.location || project.author}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 flex-grow mb-3">
                    {project.description}
                  </p>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#376378]">
                    <span>Click to view gallery</span>
                    <span className="text-red-600 group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && !loadingProjects && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Minimal Premium Project Detail Modal with Swiper Gallery */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
            {/* Backdrop with Blur */}
            <motion.div
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Card Box */}
            <motion.div
              className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row max-h-[92vh] md:max-h-[90vh] z-10"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
            >
              {/* Close Icon Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2.5 rounded-full transition-colors focus:outline-none shadow-md"
                aria-label="Close modal"
              >
                <HiXMark className="w-5 h-5" />
              </button>

              {/* Left Column: Swiper Gallery Image Display */}
              <div className="relative w-full md:w-7/12 min-h-[350px] sm:min-h-[420px] md:min-h-full bg-slate-950 flex items-center justify-center shrink-0 overflow-hidden">
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/95 text-gray-900 backdrop-blur-md text-xs uppercase tracking-wider font-bold px-3.5 py-1.5 rounded-full shadow-lg">
                    {selectedProject.category}
                  </span>
                </div>

                {/* Swiper Gallery Carousel */}
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation={getProjectImages(selectedProject).length > 1}
                  pagination={getProjectImages(selectedProject).length > 1 ? { clickable: true } : false}
                  autoplay={getProjectImages(selectedProject).length > 1 ? { delay: 4000, disableOnInteraction: false } : false}
                  loop={getProjectImages(selectedProject).length > 1}
                  className="w-full h-full min-h-[350px] sm:min-h-[420px] md:min-h-[550px] project-modal-swiper"
                >
                  {getProjectImages(selectedProject).map((img, i) => (
                    <SwiperSlide key={i} className="relative w-full h-full flex items-center justify-center bg-slate-950 p-2">
                      <Image
                        src={img}
                        alt={`${selectedProject.title} image ${i + 1}`}
                        fill
                        priority={i === 0}
                        className="object-contain p-2"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Right Column: Structured Information */}
              <div className="w-full md:w-5/12 p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-y-auto bg-white">
                <div className="space-y-6">
                  {/* Top Meta */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      <span>{selectedProject.category}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1 text-red-600">
                        <HiOutlineMapPin className="w-4 h-4 shrink-0" />
                        <span className="text-gray-600 normal-case">{selectedProject.location || selectedProject.author}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-snug">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <hr className="border-gray-100" />

                  {/* Project Overview */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Project Overview
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                  <span className="text-xs text-gray-400 font-medium">Reliant Elevators</span>
                  <Link
                    href="/reachout"
                    onClick={() => setSelectedProject(null)}
                    className="bg-[#376378] hover:bg-[#284959] text-white font-medium rounded-full px-6 py-3 transition shadow-md hover:shadow-lg text-sm flex items-center justify-center gap-2 group"
                  >
                    <span>Request Consultation</span>
                    <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
