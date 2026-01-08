'use client';
import logo from '@/assests/home/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT US', href: '/about' },
        { name: 'PRODUCTS', href: '/products' },
        { name: 'PROJECTS', href: '/projects' },
        { name: 'SERVICES', href: '/services' },
        { name: 'CONTACT US', href: '/reachout' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 max-w-7xl mx-auto rounded-2xl"> 
        <div className="bg-black/50 rounded-lg">
            <div className="max-w-7xl mx-auto px-4  lg:px-10">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex">
                        <Link href="/" className="flex items-center">
                            <Image src={logo} alt="Logo" className="mr-2 w-auto h-auto" />

                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1 ">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-white font-light hover:bg-gray-800 hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-200"
                            aria-expanded="false"
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

            {/* Mobile menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-700">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-white hover:bg-gray-800 hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;