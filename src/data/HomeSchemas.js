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
    "https://www.facebook.com/reliantelevators",
    "https://www.instagram.com/reliantelevators",
    "https://www.linkedin.com/company/reliantelevators"
  ]
};

export const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Choose the Right Elevator for Your Home",
  "description": "A step-by-step guide by Reliant Elevators to help homeowners in Kerala select the right home elevator based on space, budget, and needs.",
  "image": "https://www.reliantelevators.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliift1.03ef861a.png&w=1080&q=75",
  "totalTime": "P7D",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": "500000"
  },
  "supply": [
    { "@type": "HowToSupply", "name": "Available shaft or hoistway space" },
    { "@type": "HowToSupply", "name": "Power supply access point" }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Site measurement by technician" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Assess your space",
      "text": "Measure the available shaft or floor space to determine what elevator size and type will fit your home.",
      "url": "https://www.reliantelevators.com/service#assess-space"
    },
    {
      "@type": "HowToStep",
      "name": "Choose the elevator type",
      "text": "Decide between hydraulic, traction, or pneumatic elevators based on building height, budget, and usage needs.",
      "url": "https://www.reliantelevators.com/products#elevator-types"
    },
    {
      "@type": "HowToStep",
      "name": "Set your budget",
      "text": "Get a consultation and quote from Reliant Elevators based on your chosen configuration and features.",
      "url": "https://www.reliantelevators.com/reachout"
    },
    {
      "@type": "HowToStep",
      "name": "Schedule installation",
      "text": "Once finalized, our team handles structural work, installation, and safety certification.",
      "url": "https://www.reliantelevators.com/service#installation"
    },
    {
      "@type": "HowToStep",
      "name": "Set up maintenance",
      "text": "Enroll in an Annual Maintenance Contract (AMC) to keep your elevator safe and running smoothly.",
      "url": "https://www.reliantelevators.com/service#maintenance"
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
