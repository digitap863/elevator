import Service from '@/components/user/Home/Service.jsx'
import TestimonialCards from '@/components/user/Home/TestimonialCards.jsx'
import Testimonials from '@/components/user/Home/Testimonials.jsx'
import About from '../../components/user/Home/About.jsx'
import Banner from '../../components/user/Home/Banner.jsx'
import Contact from '../../components/user/Home/Contact.jsx'
import Products from '../../components/user/Home/Products.jsx'
import Projects from '../../components/user/Home/Projects.jsx'
import Specilization from "../../components/user/Home/Specilization.jsx"
import Logos from '@/components/user/Home/Logos.jsx'
import Numbers from '@/components/user/Home/Numbers.jsx'
import FAQ from '@/components/user/Home/FAQ.jsx'
import {
  organizationSchema,
  howToSchema,
  aggregateRatingSchema,
  webPageSchema,
  breadcrumbSchema,
  websiteSchema,
  localBusinessSchema
} from '@/data/HomeSchemas.js'

export const metadata = {
  title: "Top Lift, Elevator Company in Kochi,Calicut,Trivandrum",
  description: "Reliant Elevators — Kerala's trusted lift & elevator company in Kochi, Calicut & Trivandrum.Residential, commercial & hospital elevators. Call us today!",
  keywords: "Best Elevator company in kerala, elevator company in calicut, elavator company in Trivandrum, elevator installation services Kerala, AMC elevator services, escalator company Kerala, Lift Company in kerala, home lift cost Kerala",
  alternates: {
    canonical: "https://www.reliantelevators.com",
    languages: {
      "en": "https://www.reliantelevators.com",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://www.reliantelevators.com/",
    siteName: "Reliant Elevators",
    title: "Top Lift & Elevator Company in Kochi, Calicut, Trivandrum | Reliant Elevators",
    description: "Reliant Elevators — Kerala's trusted lift & elevator company in Kochi, Calicut & Trivandrum. Residential, commercial & hospital elevators. Call us today.",
    images: [
      {
        url: "https://www.reliantelevators.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliift1.03ef861a.png&w=1080&q=75",
        width: 1080,
        height: 1080,
        alt: "Reliant Elevators - Lift & Elevator Company in Kerala",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Lift & Elevator Company in Kochi, Calicut, Trivandrum | Reliant Elevators",
    description: "Reliant Elevators — Kerala's trusted lift & elevator company in Kochi, Calicut & Trivandrum. Residential, commercial & hospital elevators. Call us today.",
    images: ["https://www.reliantelevators.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliift1.03ef861a.png&w=1080&q=75"],
  },
  verification: {
    google: "Q8CCTaDbZIhUDFsk1jpxGgkhimb-C6sOAKn8KoR-CRs",
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Banner />
      <div className='bg-container relative'>
        <About />
        <Numbers />
        <Products />
        <Service />
        <Projects />
        <Specilization />
        <Testimonials />
        <TestimonialCards />
        <Logos />
        <FAQ />
        <Contact
          label="Get Started"
          heading="Ready to Elevate?"
          description="Contact us today for a free consultation and quote. Our team is ready to help you find the perfect elevator solution."
          primaryButtonText="Start a Project"
          primaryButtonLink="/reachout"
          secondaryButtonText="View Projects"
          secondaryButtonLink="/projects"
          showSecondaryButton={true}
        />
      </div>
    </main>
  )
}


