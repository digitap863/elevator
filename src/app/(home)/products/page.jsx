import probg from '@/assests/home/probg.png'
import Banner from './Banner.jsx'
import ProductSection from './ProductSection.jsx'
import Contact from '@/components/user/Home/Contact.jsx'
import Usp from './Usp.jsx'

export const metadata = {
  title: "Elevator Manufacturers in Kerala | Reliant Elevators",
  description: "Explore reliable elevator solutions from leading elevator manufacturers in Kerala, including home, commercial, hospital and hospitality elevators by Reliant.",
  keywords: "Home elevator manufacturers in Kerala,Commercial elevator manufacturers in Kerala,Hospital elevator manufacturers in Kerala,Elevator installation company in Kerala",
  alternates: {
    canonical: "https://www.reliantelevators.com/products",
    languages: {
      "en": "https://www.reliantelevators.com/products",
    },
    media: {
      "only screen and (max-width: 640px)": "https://www.reliantelevators.com/products",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Reliant Elevators",
    title: "Elevator Manufacturers in Kerala | Reliant Elevators",
    description: "Explore reliable elevator solutions from leading elevator manufacturers in Kerala, including home, commercial, hospital and hospitality elevators by Reliant.",
    url: "https://www.reliantelevators.com/products",
    images: [
      {
        url: "https://www.reliantelevators.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliift1.03ef861a.png&w=1080&q=75",
        alt: "Elevator Manufacturers in Kerala - Reliant Elevators",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevator Manufacturers in Kerala | Reliant Elevators",
    description: "Explore reliable elevator solutions from leading elevator manufacturers in Kerala, including home, commercial, hospital and hospitality elevators by Reliant.",
    images: ["https://www.reliantelevators.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliift1.03ef861a.png&w=1080&q=75"],
  },
};

export default function Products() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.reliantelevators.com/" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.reliantelevators.com/products" }
    ]
  };

  return (
    <main className="overflow-hidden ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Banner />
      <div style={{ backgroundImage: `url(${probg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <ProductSection />
        <Usp />
        <Contact
          label="Get Started"
          heading="Can't Find What You Need?"
          description="We offer customized elevator solutions tailored to your specific requirements. Contact our team to discuss your unique needs."
          primaryButtonText="Contact Us"
          primaryButtonLink="/reachout"
          secondaryButtonText="View Projects"
          secondaryButtonLink="/projects"
          showSecondaryButton={true}
        />

      </div>
    </main>
  )
}



