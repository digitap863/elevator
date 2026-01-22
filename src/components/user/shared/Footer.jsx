"use client"
import footerlogo from '@/assests/home/footerlogo.svg';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import Image from 'next/image';


export default function Footer() {
  return (
    <footer className="bg-[#033A55] text-white font-sathoshi">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 gap-0 items-start">
          {/* Logo and Social Media Section */}
          <motion.div
            className="flex flex-col justify-center items-center space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-4 rounded-lg">
              {/* Replace the src with your logo image path */}
              <Image
                src={footerlogo}
                alt="Reliant Elevators & Escalators"
                className="h-auto w-auto"
              />
            </div>
            <div className="flex flex-row  space-x-4 ">
              <a href="#" className="bg-white text-teal-900 p-2 rounded-full hover:bg-gray-100 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white text-teal-900 p-2 rounded-full hover:bg-gray-100 transition">
                <Youtube size={20} />
              </a>
              <a href="#" className="bg-white text-teal-900 p-2 rounded-full hover:bg-gray-100 transition">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Navigation Section */}
          <motion.div
            className="pl-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-medium mb-4">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="hover:text-gray-300 transition">Home</a>
              <a href="#" className="hover:text-gray-300 transition">Products</a>
              <a href="#" className="hover:text-gray-300 transition">Services</a>
              <a href="#" className="hover:text-gray-300 transition">Projects</a>
              <a href="#" className="hover:text-gray-300 transition">Contact Us</a>
              <a href="#" className="hover:text-gray-300 transition">About Us</a>
            </nav>
          </motion.div>

          
          <motion.div
            className="space-y-6 md:pl-0 pl-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
      
            {/* Phone */}
            <div>
              <div className="flex items-start space-x-3 mb-2 md:pt-0 pt-4">
                <div className="bg-white text-teal-900 p-2 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-sm">+91 94960-03052</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-start space-x-3">
                <div className="bg-white text-teal-900 p-2 rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-sm">needhelp@Organia.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            className="space-y-6 md:pl-0 pl-16 md:pt-0 pt-4 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Addresses Section */}
            <div>
              <div className="flex items-start space-x-3 mb-3">
                <div className="bg-white text-teal-900 p-2 rounded-full flex-shrink-0 md:absolute md:-top-0 md:-left-11">
                  <MapPin size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-3">Our Locations</h4>
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    {/* Admin Office */}
                    <div>
                      <p className="font-semibold text-gray-200">Admin Office:</p>
                      <p className="text-xs leading-relaxed text-gray-300">
                        MPV 319,320, Martinpuram,<br />
                        Maradu PO, Cochin - 682304
                      </p>
                    </div>
                    {/* Branch Office */}
                    <div>
                      <p className="font-semibold text-gray-200">Branch Office:</p>
                      <p className="text-xs leading-relaxed text-gray-300">
                        2nd Floor, Court view Arcade,<br />
                        Court road, Calicut - 673001
                      </p>
                    </div>
                    {/* Showroom */}
                    <div>
                      <p className="font-semibold text-gray-200">Showroom:</p>
                      <p className="text-xs leading-relaxed text-gray-300">
                        50-1617/A, Near Gandhi square,<br />
                        Mini bypass Jn, Maradu, Poonithura - 682038
                      </p>
                    </div>
                    {/* Trivandrum */}
                    <div>
                      <p className="font-semibold text-gray-200">Trivandrum:</p>
                      <p className="text-xs leading-relaxed text-gray-300">
                        Shine tower, Near GG Hospital,<br />
                        Marappalam, Trivandrum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


           
          </motion.div>




        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-teal-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <motion.div
            className="flex flex-row justify-center items-center md:space-x-6 space-x-5 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-gray-300 transition">Terms of Use</a>
            <span className="hidden md:inline">|</span>
            <span>Copyright © Tapdone</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}