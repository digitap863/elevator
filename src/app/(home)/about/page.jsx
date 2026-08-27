import bgabout from '@/assests/home/bgabout.svg'
import AboutSection from './AboutSection.jsx'
import Banner from './Banner.jsx'
import Mission from './Mission.jsx'
import Values from './Values.jsx'
import Milestones from './Milestones.jsx'
import Project from './Project.jsx'
import {
  aboutOrganizationSchema,
  aboutFaqSchema,
  aboutBreadcrumbSchema,
  aboutWebPageSchema,
  aboutLocalBusinessSchema
} from '@/data/AboutSchemas.js'

export const metadata = {
  title: "Trusted Elevator Company in Kochi,Kerala | Lift Manufacturers",
  description: "Trusted Elevator Company and lift manufacturers in Kochi. Builds safe, durable elevators for homes, hospitals & commercial spaces.",
  keywords: "Lift Manufacturers in calicut , Lift Manufacturers in Trivandrum, Lift Manufacturers in Kochi, best Elevator  company near me , budget friendly escalator service near me",
  alternates: {
    canonical: "https://www.reliantelevators.com/about",
    languages: {
      "en": "https://www.reliantelevators.com/about",
    },
    media: {
      "only screen and (max-width: 640px)": "https://www.reliantelevators.com/about",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Reliant Elevators",
    title: "Trusted Elevator Company in Kochi, Kerala | Lift Manufacturers",
    description: "Trusted Elevator Company and lift manufacturers in Kochi. Builds safe, durable elevators for homes, hospitals & commercial spaces.",
    url: "https://www.reliantelevators.com/about",
    images: [
      {
        url: "https://www.reliantelevators.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliift1.03ef861a.png&w=1080&q=75",
        alt: "Reliant Elevators - Trusted Elevator Company in Kochi",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted Elevator Company in Kochi, Kerala | Lift Manufacturers",
    description: "Trusted Elevator Company and lift manufacturers in Kochi. Builds safe, durable elevators for homes, hospitals & commercial spaces.",
    images: ["https://www.reliantelevators.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliift1.03ef861a.png&w=1080&q=75"],
    site: "@reliantelevators",
  },
};

export default function About() {
  return (
    <main className="overflow-hidden "> 
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutOrganizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutWebPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLocalBusinessSchema) }}
      />
      <Banner /> 
      <div  style={{ backgroundImage: `url(${bgabout.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <AboutSection />
      <Mission />
      <Values />
      <Milestones />
      </div>
      <Project />
    </main>
  )
}



