'use client';
import logo from '@/assests/home/logo.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT US', href: '/about' },
        { name: 'PRODUCTS', href: '/products' },
        { name: 'PROJECTS', href: '/projects' },
        { name: 'SERVICES', href: '/service' },
        { name: 'CONTACT US', href: '/reachout' },
    ];

    return (
        <>
            <motion.nav
                className="fixed md:top-2 top-2 md:left-0 left-2 md:right-0 right-2 z-50 max-w-7xl mx-auto rounded-2xl"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2
                }}
            >
                <div className="bg-black/50 backdrop-blur-md rounded-lg">
                    <div className="max-w-7xl mx-auto px-4 lg:px-10">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <Link href="/" className="flex items-center">
                                    <Image src={logo} alt="Logo" className="mr-2 w-auto h-auto" />
                                </Link>
                            </div>

                            {/* Desktop Navigation */}
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-1 ">
                                    {navItems.map((item) => {
                                        const isActive = pathname === item.href;
                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="relative text-white font-light px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out group"
                                            >
                                                <span className="relative">
                                                    {item.name}
                                                    <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-white/70 transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                                        }`}></span>
                                                </span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-200"
                                    aria-expanded={isMenuOpen}
                                    aria-label="Toggle menu"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {/* Hamburger icon */}
                                    <svg
                                        className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                    {/* Close icon */}
                                    <svg
                                        className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Full-Screen Mobile Menu Overlay */}
            <div
                className={`md:hidden fixed inset-0 z-[60] transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
            >
                {/* Dark Backdrop */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Menu Content Container */}
                <div className="relative h-full w-full flex flex-col items-center justify-center">
                    {/* Logo at Top */}
                    <div className="absolute top-6 left-6">
                        <Image src={logo} alt="Logo" className="w-auto h-auto" />
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-6 right-6 p-3 text-white hover:text-red-600 transition-colors duration-300 hover:rotate-90 transform"
                        aria-label="Close menu"
                    >
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Navigation Links */}
                    <nav className="flex flex-col items-center space-y-8">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-white hover:text-red-600 text-3xl font-medium tracking-wide transition-all duration-300 transform hover:scale-110 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`}
                                style={{
                                    transitionDelay: isMenuOpen ? `${index * 80}ms` : '0ms'
                                }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="w-2 h-2 bg-red-600 rounded-full"
                                style={{
                                    opacity: isMenuOpen ? 1 : 0,
                                    transitionDelay: `${600 + i * 100}ms`
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;