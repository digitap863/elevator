"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { productFaqs } from './productFaqData.js';

export default function ProductFaq() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/80 overflow-hidden font-sathoshi">
      {/* Decorative blurred background accents */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#376378]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-0.5 bg-[#376378]"></div>
                <span className="text-[#376378] font-semibold text-sm sm:text-base uppercase tracking-wider">
                  Got Questions?
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 leading-tight mb-6">
                Frequently Asked <span className="text-[#376378]">Questions</span>
              </h2>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-md">
                Find clear answers regarding elevator selection, AMC services, home and commercial lift installations, and service availability across Kerala.
              </p>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-[#376378] to-[#2b4d5e] rounded-3xl p-8 text-white shadow-xl mt-4 relative overflow-hidden group">
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-teal-200" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Have a specific question?</h3>
                  <p className="text-teal-100/80 text-sm leading-relaxed">
                    Our technical experts in Kochi, Calicut, and Trivandrum are here to assist you with customized lift solutions.
                  </p>
                </div>
                <Link
                  href="/reachout"
                  className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-2xl bg-white text-[#376378] font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Accordions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-4">
              {productFaqs.map((faq, index) => {
                const isOpen = expandedIndex === index;
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-white border-[#376378]/40 shadow-lg ring-1 ring-[#376378]/20'
                        : 'bg-white/80 border-slate-200/80 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full py-5 px-6 flex items-start justify-between text-left gap-4 cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-slate-900 text-base sm:text-lg pr-2 leading-snug">
                        {faq.question}
                      </span>
                      <div
                        className={`p-1.5 rounded-full shrink-0 transition-transform duration-300 ${
                          isOpen ? 'bg-[#376378] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 pt-1 text-slate-600 text-base leading-relaxed border-t border-slate-100/60 mt-1">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
