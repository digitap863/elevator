'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Loader, AlertCircle } from 'lucide-react';

const categories = ['All', 'Home Lifts', 'Commercial Lifts', 'Escalators', 'Technology', 'Safety', 'Sustainability', 'Business'];

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=1000&auto=format&fit=crop';

const SafeImage = ({ src, alt, className, sizes }) => {
    const [imgSrc, setImgSrc] = useState(src || DEFAULT_IMAGE);

    useEffect(() => {
        setImgSrc(src || DEFAULT_IMAGE);
    }, [src]);

    return (
        <Image
            src={imgSrc || DEFAULT_IMAGE}
            alt={alt || 'Blog Image'}
            fill
            className={className}
            sizes={sizes}
            onError={() => setImgSrc(DEFAULT_IMAGE)}
            unoptimized
        />
    );
};

const parseTags = (tags) => {
    if (Array.isArray(tags)) return tags.filter(Boolean);
    if (typeof tags === 'string' && tags.trim()) {
        return tags.split(',').map((t) => t.trim()).filter(Boolean);
    }
    return [];
};

const getCategoryColor = (category) => {
    switch (category) {
        case 'Technology': return 'bg-blue-50 text-blue-700 border-blue-200';
        case 'Business': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
        case 'Sustainability': return 'bg-teal-50 text-teal-700 border-teal-200';
        case 'Safety': return 'bg-rose-50 text-rose-700 border-rose-200';
        default: return 'bg-amber-50 text-amber-700 border-amber-200';
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const BlogCards = () => {
    const [blogs, setBlogs] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            setLoading(true);
            setError(null);
            try {
                const url = activeFilter === 'All' 
                    ? '/api/blogs' 
                    : `/api/blogs?category=${encodeURIComponent(activeFilter)}`;
                const res = await fetch(url);
                const json = await res.json();
                if (json.success) {
                    setBlogs(json.data);
                } else {
                    setError(json.error || 'Failed to fetch blog posts');
                }
            } catch (err) {
                console.error(err);
                setError('Failed to fetch blog posts. Please check your connection.');
            } finally {
                setLoading(false);
            }
        }
        fetchBlogs();
    }, [activeFilter]);

    return (
        <section className="py-20 md:py-28 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <div className="flex items-center space-x-2 mb-3">
                            <span className="w-8 h-0.5 bg-[#C10510]"></span>
                            <span className="text-[#376378] font-semibold text-xs tracking-wider uppercase">Latest Articles</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 font-satoshi">
                            Insights & Perspectives
                        </h2>
                    </div>
                    <p className="text-gray-500 font-satoshi text-sm md:text-base mt-4 md:mt-0 max-w-md font-light">
                        Expert views, tech updates, and industry insights curated by the Reliant team to help you navigate modern vertical engineering.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2.5 mb-16 justify-start">
                    {categories.map((filter) => (
                        <button
                          key={filter}
                          onClick={() => {
                            setActiveFilter(filter);
                          }}
                          className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 font-satoshi cursor-pointer border ${
                            activeFilter === filter
                            ? 'bg-slate-800 text-white shadow-md border-slate-800'
                            : 'bg-white/80 hover:bg-white text-gray-600 border-gray-200 shadow-xs'
                          }`}
                        >
                          {filter}
                        </button>
                    ))}
                </div>

                {/* Loading / Error / Grid States */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader className="w-8 h-8 text-[#376378] animate-spin mb-3" />
                        <span className="text-sm text-gray-400 font-light font-satoshi">Loading articles...</span>
                    </div>
                ) : error ? (
                    <div className="max-w-md mx-auto text-center py-16 px-4 bg-white border border-red-100 rounded-3xl shadow-xs">
                        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
                        <h3 className="font-bold text-gray-900 text-base mb-1">Error Loading Articles</h3>
                        <p className="text-gray-500 text-xs font-light leading-relaxed mb-4">{error}</p>
                        <button onClick={() => setActiveFilter(activeFilter)} className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-semibold cursor-pointer">
                            Try Again
                        </button>
                    </div>
                ) : blogs.length === 0 ? (
                    <div className="max-w-md mx-auto text-center py-16 px-4 bg-white border border-gray-100 rounded-3xl shadow-xs">
                        <AlertCircle className="w-12 h-12 text-gray-350 mx-auto mb-3" />
                        <h3 className="font-bold text-gray-900 text-base mb-1">No Articles Found</h3>
                        <p className="text-gray-500 text-xs font-light leading-relaxed">
                            We haven't published any articles in this category yet. Please check back later!
                        </p>
                    </div>
                ) : (
                    /* Grid Container */
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        {blogs.map((post) => (
                            <motion.article
                                    key={post._id}
                                    variants={cardVariants}
                                    className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden"
                                >
                                    {/* Image Wrapper */}
                                    <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                                        <SafeImage
                                            src={post.featuredImage}
                                            alt={post.title}
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Card Details */}
                                    <div className="flex-1 flex flex-col p-6 md:p-7">
                                        {/* Metadata */}
                                        <div className="flex items-center space-x-4 mb-4 text-xs text-gray-400 font-satoshi font-light">
                                            <div className="flex items-center space-x-1.5">
                                                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                                                <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                                            </div>
                                            <div className="flex items-center space-x-1.5">
                                                <span className="font-semibold text-gray-300">By</span>
                                                <span>{post.author}</span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-900 font-satoshi line-clamp-2 leading-snug mb-3 group-hover:text-[#C10510] transition-colors duration-200">
                                            <Link href={`/blog/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-sm text-gray-500 font-satoshi line-clamp-3 leading-relaxed mb-6 font-light">
                                            {post.shortDescription}
                                        </p>

                                        {/* Footer Elements */}
                                        <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between gap-2">
                                            {/* Category Badge */}
                                            <span
                                                className={`text-[10px] font-bold font-satoshi px-2.5 py-0.5 rounded-full border ${getCategoryColor(post.category)}`}
                                            >
                                                {post.category}
                                            </span>

                                            {/* Action link */}
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="inline-flex items-center text-xs font-semibold text-[#376378] hover:text-[#C10510] font-satoshi tracking-wider uppercase transition-colors duration-200 flex-shrink-0"
                                            >
                                                Read
                                                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                 </motion.article>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default BlogCards;

