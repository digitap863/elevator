"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { productFaqs } from './productFaqData.js';

export default function ProductFaq() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 px-6 sm:px-8 bg-slate-50 overflow-hidden font-sathoshi">
      {/* Decorative patterns */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-teal-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Heading, intro & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-0.5 bg-[#376378]"></div>
                <span className="text-[#376378] font-semibold text-lg uppercase tracking-wider">
                  Common Queries
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 leading-tight mb-6">
                Frequently Asked <span className="text-[#376378]">Questions</span>
              </h2>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-md">
                Find clear answers regarding elevator selection, AMC services, home and commercial lift installations, and service availability across Kerala.
              </p>
            </div>

            {/* Premium CTA Card */}
            <div className="hidden lg:block bg-gradient-to-br from-[#376378] to-[#2b4d5e] rounded-3xl p-8 text-white shadow-xl mt-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-teal-200" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Have a specific question?</h4>
                  <p className="text-teal-100 text-sm leading-relaxed">
                    Our technical mobility consultants are ready to assist you. Get customized design specifications for your elevator project.
                  </p>
                </div>
                <Link href="/reachout">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-[#376378] px-5 py-3 rounded-xl hover:bg-teal-50 transition-colors duration-300 cursor-pointer shadow-md">
                    Connect with an Expert
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {productFaqs.map((faq, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div
                  key={faq.id || idx}
                  className={`bg-white border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'border-[#376378]/40 shadow-lg shadow-teal-900/5'
                      : 'border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-start justify-between text-left p-6 gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <HelpCircle className={`w-6 h-6 mt-0.5 flex-shrink-0 transition-colors duration-300 ${
                        isExpanded ? 'text-[#376378]' : 'text-slate-400'
                      }`} />
                      <span className={`text-base sm:text-lg font-medium transition-colors duration-300 ${
                        isExpanded ? 'text-[#376378]' : 'text-slate-800'
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="mt-1 flex-shrink-0"
                    >
                      <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${
                        isExpanded ? 'text-[#376378]' : 'text-slate-500'
                      }`} />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? 'auto' : 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 pl-16">
                      <div className="text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}

            {/* Mobile Contact CTA */}
            <div className="lg:hidden mt-8 bg-gradient-to-br from-[#376378] to-[#2b4d5e] rounded-3xl p-6 text-white shadow-xl">
              <h4 className="text-lg font-semibold mb-2">Have a specific question?</h4>
              <p className="text-teal-100 text-sm leading-relaxed mb-4">
                Our team is here to assist with custom specifications.
              </p>
              <Link href="/reachout">
                <span className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-[#376378] px-5 py-3 rounded-xl cursor-pointer">
                  Connect with an Expert
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
