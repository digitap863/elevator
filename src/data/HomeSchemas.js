export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.reliantelevators.com/#organization",
  "name": "Reliant Elevators",
  "alternateName": "Reliant Elevators & Escalators",
  "legalName": "Reliant Elevators",
  "url": "https://www.reliantelevators.com/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.reliantelevators.com/_next/static/media/logo.fe6ad45a.svg",
    "width": "600",
    "height": "60"
  },
  "image": "https://www.reliantelevators.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliift1.03ef861a.png&w=1080&q=75",
  "description": "Reliant Elevators is Kerala's trusted lift & elevator company serving Kochi, Calicut and Trivandrum, offering residential, commercial, hospital and hospitality elevators, escalators, installation, maintenance, modernization and consultation services.",
  "foundingDate": "2011",
  "slogan": "Reliability, Elegance & Quality",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "MPV 319,320, Martinpuram, Maradu PO",
    "addressLocality": "Cochin",
    "postalCode": "682304",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9496003052",
      "contactType": "customer service",
      "email": "needhelp@Organia.com",
      "areaServed": "IN",
      "availableLanguage": ["English", "Malayalam"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-9496003052",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Malayalam"]
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Kochi" },
    { "@type": "City", "name": "Calicut" },
    { "@type": "City", "name": "Thiruvananthapuram" }
  ],
  "sameAs": [
    "https://www.facebook.com/share/1EEAGHMwrF/",
    "https://www.instagram.com/reliant.elevator?igsi=OHZ6NWJvcTluaW5k",
    "https://youtube.com/@reliantelevatorsandescalators?si=5DMZD9S69RvuOKFr"
  ]
};

export const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": "https://www.reliantelevators.com/#howto-install-home-elevator",
  "name": "How to Install a Home Elevator with Reliant Elevators",
  "description": "A step-by-step guide to installing a home elevator in Kerala with Reliant Elevators, from free consultation to final safety testing.",
  "image": {
    "@type": "ImageObject",
    "url": "https://www.reliantelevators.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliift1.03ef861a.png&w=1080&q=75"
  },
  "totalTime": "P6W",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": "Contact for quote"
  },
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Available shaft space, stairwell gap, or external structure"
    },
    {
      "@type": "HowToSupply",
      "name": "Electrical connection point near installation site"
    }
  ],
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Freedom R26 Smart Home Lift or applicable elevator model"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Book a Free Consultation",
      "text": "Contact Reliant Elevators' team in Kochi, Calicut, or Trivandrum for a free, no-obligation consultation to discuss your requirements and budget.",
      "url": "https://www.reliantelevators.com/reachout"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Site Evaluation and Planning",
      "text": "Our technical team visits or reviews your property to assess pit depth, headroom, and shaft options — home elevators can fit into existing stairwell gaps, external structures, or dedicated masonry shafts with as little as 50mm to 100mm pit depth."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Get a Custom Design and Quote",
      "text": "Choose your elevator type (home, commercial, or hospital), cabin finish (glass, stainless steel, wood, marble), and smart features. Receive a transparent, itemized quote with no hidden charges."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Manufacturing and Delivery",
      "text": "Your elevator is manufactured to specification. The full manufacturing-to-delivery cycle typically takes 4 to 6 weeks."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "On-Site Installation",
      "text": "Once the shaft and electrical connections are ready, our certified technicians complete on-site installation, typically within 7 to 14 working days."
    },
    {
      "@type": "HowToStep",
      "position": 6,
      "name": "Safety Testing and Handover",
      "text": "The elevator undergoes safety testing, including the Automatic Rescue Device (ARD) and Emergency Battery Operator (EBO), before final handover to ensure safe, reliable operation."
    },
    {
      "@type": "HowToStep",
      "position": 7,
      "name": "Ongoing AMC and Support",
      "text": "Enroll in an Annual Maintenance Contract (AMC) for routine inspection, lubrication, diagnostics, and IoT-based monitoring to keep your elevator running safely long-term."
    }
  ]
};

export const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://www.reliantelevators.com/#organization",
  "name": "Reliant Elevators",
  "image": "https://www.reliantelevators.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliift1.03ef861a.png&w=1080&q=75",
  "url": "https://www.reliantelevators.com/",
  "telephone": "+91-9496003052",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "MPV 319,320, Martinpuram, Maradu PO",
    "addressLocality": "Cochin",
    "postalCode": "682304",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.1",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "70"
  }
};

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.reliantelevators.com/#webpage",
  "url": "https://www.reliantelevators.com/",
  "name": "Top Lift & Elevator Company in Kochi, Calicut, Trivandrum | Reliant Elevators",
  "description": "Reliant Elevators — Kerala's trusted lift & elevator company in Kochi, Calicut & Trivandrum. Residential, commercial & hospital elevators. Call us today.",
  "isPartOf": {
    "@id": "https://www.reliantelevators.com/#website"
  },
  "about": {
    "@id": "https://www.reliantelevators.com/#organization"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://www.reliantelevators.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliift1.03ef861a.png&w=1080&q=75",
    "width": "1080",
    "height": "1080"
  },
  "image": {
    "@id": "https://www.reliantelevators.com/#primaryimage"
  },
  "thumbnailUrl": "https://www.reliantelevators.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliift1.03ef861a.png&w=1080&q=75",
  "datePublished": "2011-01-01",
  "dateModified": "2026-07-09",
  "inLanguage": "en-IN",
  "breadcrumb": {
    "@id": "https://www.reliantelevators.com/#breadcrumb"
  },
  "publisher": {
    "@id": "https://www.reliantelevators.com/#organization"
  },
  "potentialAction": [
    {
      "@type": "ReadAction",
      "target": ["https://www.reliantelevators.com/"]
    }
  ]
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.reliantelevators.com/#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.reliantelevators.com/"
    }
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.reliantelevators.com/#website",
  "url": "https://www.reliantelevators.com/",
  "name": "Reliant Elevators",
  "alternateName": "Reliant Elevators & Escalators",
  "description": "Reliant Elevators — Kerala's trusted lift & elevator company in Kochi, Calicut & Trivandrum. Residential, commercial & hospital elevators.",
  "inLanguage": "en-IN",
  "publisher": {
    "@id": "https://www.reliantelevators.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.reliantelevators.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.reliantelevators.com/#organization",
      "name": "Reliant Elevators",
      "alternateName": "Reliant Elevators & Escalators",
      "url": "https://www.reliantelevators.com/",
      "logo": "https://www.reliantelevators.com/_next/static/media/logo.fe6ad45a.svg",
      "image": "https://www.reliantelevators.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliift1.03ef861a.png&w=1080&q=75",
      "description": "Reliant Elevators is Kerala's trusted lift & elevator company serving Kochi, Calicut and Trivandrum, offering residential, commercial, hospital and hospitality elevators, escalators, installation, maintenance, modernization and consultation services.",
      "telephone": "+91-9496003052",
      "email": "needhelp@Organia.com",
      "foundingDate": "2011",
      "slogan": "Reliability, Elegance & Quality",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "MPV 319,320, Martinpuram, Maradu PO",
        "addressLocality": "Cochin",
        "postalCode": "682304",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Kochi" },
        { "@type": "City", "name": "Calicut" },
        { "@type": "City", "name": "Thiruvananthapuram" }
      ],
      "sameAs": [
        "https://www.facebook.com/share/1EEAGHMwrF/",
        "https://www.instagram.com/reliant.elevator?igsi=OHZ6NWJvcTluaW5k",
        "https://youtube.com/@reliantelevatorsandescalators?si=5DMZD9S69RvuOKFr"
      ],
      "department": [
        {
          "@type": "HomeAndConstructionBusiness",
          "name": "Reliant Elevators - Admin Office, Maradu",
          "image": "https://www.reliantelevators.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliift1.03ef861a.png&w=1080&q=75",
          "telephone": "+91-9496003052",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "MPV 319,320, Martinpuram, Maradu PO",
            "addressLocality": "Cochin",
            "postalCode": "682304",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          ]
        },
        {
          "@type": "HomeAndConstructionBusiness",
          "name": "Reliant Elevators - Branch Office, Calicut",
          "image": "https://www.reliantelevators.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliift1.03ef861a.png&w=1080&q=75",
          "telephone": "+91-9496003052",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2nd Floor, Court View Arcade, Court Road",
            "addressLocality": "Calicut",
            "postalCode": "673001",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          ]
        },
        {
          "@type": "HomeAndConstructionBusiness",
          "name": "Reliant Elevators - Showroom, Poonithura",
          "image": "https://www.reliantelevators.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliift1.03ef861a.png&w=1080&q=75",
          "telephone": "+91-9496003052",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "50-1617/A, Near Gandhi Square, Mini Bypass Jn, Maradu, Poonithura",
            "addressLocality": "Cochin",
            "postalCode": "682038",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          ]
        },
        {
          "@type": "HomeAndConstructionBusiness",
          "name": "Reliant Elevators - Trivandrum",
          "image": "https://www.reliantelevators.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliift1.03ef861a.png&w=1080&q=75",
          "telephone": "+91-9496003052",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shine Tower, Near GG Hospital, Marappalam",
            "addressLocality": "Trivandrum",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          ]
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Elevator & Escalator Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Elevator Installation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Elevator Installation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hospital Elevator Installation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hospitality Elevators & Escalators" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structural Elevators" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Elevator Maintenance (AMC)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Elevator Modernization" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Elevator Consultation" } }
        ]
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Padmasree CK Menon" },
          "reviewBody": "Reliant Elevator's team is knowledgeable and focused on safety and quality, handling everything smoothly from consultation to maintenance.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "K P Aliyar" },
          "reviewBody": "Reliant Elevator's modernization service significantly improved the efficiency and safety of the client's lift system, handled with precision and professionalism.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "P M Abdul Aazeez" },
          "reviewBody": "Excellent service and technical expertise, guiding the client from initial consultation through installation with complete transparency.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.reliantelevators.com/#website",
      "url": "https://www.reliantelevators.com/",
      "name": "Reliant Elevators",
      "publisher": { "@id": "https://www.reliantelevators.com/#organization" }
    }
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which is the best elevator or lift company in Kerala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reliant Elevators is one of the most trusted lift and elevator companies in Kerala, with over 15 years of experience serving customers across Kochi, Calicut, and Trivandrum. We provide high-quality residential, commercial, and hospital elevator solutions with reliable installation and after-sales support."
      }
    },
    {
      "@type": "Question",
      "name": "Which is the top home elevator company near me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reliant Elevators is one of the leading home elevator companies in Kerala, offering safe, space-saving, and fully customizable home lifts for villas, apartments, and multi-storey houses. We provide expert installation and dependable support across Kochi, Calicut, and Trivandrum."
      }
    },
    {
      "@type": "Question",
      "name": "Which company offers the latest technology elevators in Kochi, Kerala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reliant Elevators offers the advanced Freedom R26 elevator featuring Alexa voice control, IoT-based remote monitoring, and face recognition access control, making it one of the smartest elevator solutions available in Kochi."
      }
    },
    {
      "@type": "Question",
      "name": "Is Reliant Elevators ISO certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Reliant Elevators has been ISO 9001:2015 certified since 2018, demonstrating our commitment to delivering internationally recognized quality management standards."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a home elevator cost in Kerala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of a home elevator depends on the lift model, number of floors, customization requirements, and site conditions. Reliant Elevators offers a free site inspection, consultation, and detailed quotation with transparent pricing."
      }
    },
    {
      "@type": "Question",
      "name": "Who provides affordable elevator installation in Kerala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reliant Elevators provides affordable Machine Room-Less (MRL) elevators with space-saving designs, professional installation, free consultation, and transparent quotations without hidden charges."
      }
    },
    {
      "@type": "Question",
      "name": "Which elevator company is best for residential and commercial buildings in Kerala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reliant Elevators designs and installs residential elevators, commercial elevators, hospital lifts, passenger lifts, and escalators that meet modern safety standards and are suitable for high-traffic, multi-storey buildings."
      }
    },
    {
      "@type": "Question",
      "name": "Does Reliant Elevators offer machine-room-less lifts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Reliant Elevators specializes in Machine Room-Less (MRL) elevators that maximize usable space, reduce construction costs, and provide efficient, modern lift solutions."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if the elevator loses power — is it safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Reliant Elevators installs lifts equipped with an Automatic Rescue Device (ARD) and Emergency Battery Operation (EBO), allowing the elevator to safely move to the nearest floor and open the doors during a power failure."
      }
    },
    {
      "@type": "Question",
      "name": "How long does home elevator installation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The on-site installation of a home elevator typically takes 7 to 14 working days, while the complete project, including manufacturing and delivery, usually takes 4 to 6 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "What warranty and after-sales support does Reliant Elevators provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reliant Elevators offers comprehensive warranty coverage, Annual Maintenance Contract (AMC) plans, routine inspections, and IoT-based remote monitoring to ensure reliable long-term performance and prompt service support."
      }
    },
    {
      "@type": "Question",
      "name": "Which is the top home elevator company near me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reliant Elevators is a top-rated home elevator company with offices in Kochi, Calicut, and Trivandrum, providing expert consultation, installation, maintenance, and fast local support throughout Kerala."
      }
    }
  ]
};

