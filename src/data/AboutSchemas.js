export const aboutOrganizationSchema = {
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
    "https://www.facebook.com/reliantelevators",
    "https://www.instagram.com/reliantelevators",
    "https://www.linkedin.com/company/reliantelevators"
  ]
};

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Reliant Elevators",
  "url": "https://www.reliantelevators.com/about",
  "description": "Learn about Reliant Elevators, a trusted elevator company and lift manufacturer in Kochi, Kerala.",
  "isPartOf": {
    "@type": "WebSite",
    "url": "https://www.reliantelevators.com/"
  }
};

export const aboutFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which is the best elevator company in Kochi, Kerala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you are looking for a trusted elevator company in Kochi, Reliant Elevators offers safe, durable, and customized lift solutions for homes, apartments, hospitals, offices, and commercial buildings."
      }
    },
    {
      "@type": "Question",
      "name": "How is Reliant Elevators different from other lift manufacturers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reliant Elevators focuses on quality, safety, modern technology, and reliable customer support. The company provides customized elevator solutions, professional installation, and timely maintenance services to ensure long-lasting performance."
      }
    },
    {
      "@type": "Question",
      "name": "What types of elevators does Reliant Elevators manufacture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reliant Elevators manufactures home lifts, passenger lifts, hospital lifts, commercial elevators, goods lifts, hydraulic lifts, and customized elevator solutions for different building requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Which elevator is best for homes and residential buildings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best home elevator depends on your building space, the number of floors, and your usage requirements. Reliant Elevators helps customers choose the right home lift that offers comfort, safety, energy efficiency, and modern design."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find a reliable lift manufacturer near me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you are searching for a reliable lift manufacturer near me in Kochi or anywhere in Kerala, Reliant Elevators provides complete elevator design, installation, and maintenance services for residential and commercial projects."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I get professional elevator installation near me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Looking for professional elevator installation near me? Reliant Elevators offers expert installation services with trained professionals who ensure every lift is installed safely and according to industry standards."
      }
    },
    {
      "@type": "Question",
      "name": "Does Reliant Elevators provide elevator maintenance services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Reliant Elevators provides regular elevator maintenance, inspections, and repair services to keep lifts operating safely, efficiently, and with minimal downtime."
      }
    }
  ]
};

export const aboutBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.reliantelevators.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About Us",
      "item": "https://www.reliantelevators.com/about"
    }
  ]
};

export const aboutWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.reliantelevators.com/about#webpage",
  "url": "https://www.reliantelevators.com/about",
  "name": "Trusted Elevator Company in Kochi, Kerala | Lift Manufacturers",
  "description": "Trusted Elevator Company and lift manufacturers in Kochi. Builds safe, durable elevators for homes, hospitals & commercial spaces.",
  "inLanguage": "en-IN",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://www.reliantelevators.com/#website"
  },
  "breadcrumb": {
    "@id": "https://www.reliantelevators.com/about#breadcrumb"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://www.reliantelevators.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliift1.03ef861a.png&w=1080&q=75"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.reliantelevators.com/#organization"
  }
};

export const aboutLocalBusinessSchema = {
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
      "sameAs": [],
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
