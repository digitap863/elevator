"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';



const faqs = [
  {
    category: 'general',
    question: 'What are the space and structure requirements for installing a home elevator?',
    answer: 'Our home elevators (like the Freedom R26) are highly space-efficient and designed to integrate seamlessly into Indian homes. They require minimal pit depth (often as little as 50mm to 100mm) and standard headroom. We can install them in existing stairwell gaps, external structures, or dedicated masonry shafts.'
  },
  {
    category: 'safety',
    question: 'How safe are home elevators during a power outage?',
    answer: 'Reliant elevators are equipped with an Automatic Rescue Device (ARD) and an Emergency Battery Operator (EBO). In the event of a power failure, the lift automatically travels to the nearest floor and opens the doors, ensuring passenger safety and absolute peace of mind.'
  },
  {
    category: 'safety',
    question: 'What smart tech integrations are available in your premium elevators?',
    answer: 'Our lifts feature state-of-the-art smart home integrations, including Alexa Voice Control for hands-free operation, IoT-enabled real-time monitoring and remote diagnostics, and biometrics like Face Recognition access via a dedicated mobile app.'
  },
  {
    category: 'installation',
    question: 'How often does a home elevator require maintenance?',
    answer: 'To ensure peak performance and long-term safety, we recommend routine maintenance check-ups every 3 to 6 months. Our smart IoT systems continuously monitor diagnostic data, often allowing our service team to resolve issues preemptively.'
  },
  {
    category: 'general',
    question: 'Can the elevator cabin design be customized to match my home interior?',
    answer: 'Yes! We offer extensive personalization options. You can customize the cabin walls (panoramic glass or premium stainless steel), select ambient LED lighting configurations, choose designer cabin flooring (wood, marble, or tile), and select custom buttons.'
  },
  {
    category: 'general',
    question: 'Do your elevators require a separate machine room?',
    answer: 'No. We use Machine Room-Less (MRL) and advanced hydraulic or traction designs. The controller and drive machinery are located compactly inside the shaft or in a small wall-integrated cabinet, leaving your home clutter-free.'
  },
  {
    category: 'installation',
    question: 'How long does the installation of a home elevator take?',
    answer: 'The physical installation of the elevator on-site typically takes between 7 to 14 working days once the shafts and electrical connections are ready. The overall manufacturing and delivery cycle takes around 4 to 6 weeks.'
  }
];

export default function FAQ() {
  
  const [expandedIndex, setExpandedIndex] = useState(null);

  const filteredFaqs = useMemo(() => {
    return faqs;  
  }, []);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Structured Data (JSON-LD) for SEO
  const jsonLdData = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }, []);

  return (
    <section className="relative py-20 px-6 sm:px-8 bg-slate-50 overflow-hidden font-sathoshi">
      {/* Dynamic SEO JSON-LD schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Decorative patterns */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-teal-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Heading, intro & category selector */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div>
              {/* Decorative side bar with title */}
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
                Everything you need to know about our space-saving home elevators, safety benchmarks, smart controls, and installation requirements.
              </p>

              {/* Category Pills */}
              {/* <div className="flex flex-wrap gap-2 mb-8 lg:mb-0 max-w-md">
                {faqCategories.map((category) => {
                  const isActive = activeCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setExpandedIndex(null);
                      }}
                      className={`relative px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? 'text-white shadow-md'
                          : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute inset-0 bg-[#376378] rounded-full z-0"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{category.name}</span>
                    </button>
                  );
                })}
              </div> */}
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
                    Our technical mobility consultants are ready to assist you. Get customized design specifications for your home.
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
            <AnimatePresence mode="wait">
              {/* <motion.div
             
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              > */}
                {filteredFaqs.map((faq, idx) => {
                  const isExpanded = expandedIndex === idx;
                  return (
                    <div
                      key={idx}
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
                          <p className="text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              {/* </motion.div> */}
            </AnimatePresence>

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
