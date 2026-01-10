"use client"
import footerlogo from '@/assests/home/footerlogo.svg';
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import Image from 'next/image';


export default function Footer() {
  return (
    <footer className="bg-[#033A55] text-white font-sathoshi">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo and Social Media Section */}
          <div className="flex flex-col justify-center items-center space-y-6">
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
          </div>

          {/* Navigation Section */}
          <div className="pl-32">
            <h3 className="text-xl font-medium mb-4">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="hover:text-gray-300 transition">Home</a>
              <a href="#" className="hover:text-gray-300 transition">Products</a>
              <a href="#" className="hover:text-gray-300 transition">Services</a>
              <a href="#" className="hover:text-gray-300 transition">Projects</a>
              <a href="#" className="hover:text-gray-300 transition">Contact Us</a>
              <a href="#" className="hover:text-gray-300 transition">About Us</a>
            </nav>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-6 md:pl-0 pl-16">
            <div>
              <div className="flex items-start space-x-3 mb-2">
                <div className="bg-white text-teal-900 p-2 rounded-full">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Address</h4>
                  <p className="text-sm leading-relaxed">
                    Building No.M.P, V-319,<br />
                    Martinpuram, Maradu,<br />
                    Cochin- 682304
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start space-x-3 mb-2">
                <div className="bg-white text-teal-900 p-2 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-sm">+91 94960-03052</p>
                </div>
              </div>
            </div>

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
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-teal-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-row justify-center items-center md:space-x-6 space-x-5 text-sm">
            <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-gray-300 transition">Terms of Use</a>
            <span className="hidden md:inline">|</span>
            <span>Copyright © Tapdone</span>
          </div>
        </div>
      </div>
    </footer>
  );
}