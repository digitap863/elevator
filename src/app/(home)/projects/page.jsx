import bgabout from '@/assests/home/bgabout.svg'
import Contact from '@/components/user/Home/Contact.jsx'
import { Suspense } from 'react'
import Banner from './Banner.jsx'
import Projectsection from './Projectsection.jsx'

export default function Projects() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.reliantelevators.com/" },
      { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://www.reliantelevators.com/projects" }
    ]
  };

  return (
    <main className="overflow-hidden ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Banner />
      <div style={{ backgroundImage: `url(${bgabout.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading projects...</div>}>
          <Projectsection />
        </Suspense>
        <Contact
          label="Get Started"
          heading="Ready to Start Your Project?"
          description="Join hundreds of satisfied clients who have trusted Reliant for their vertical mobility needs. Get a free consultation today."
          primaryButtonText="Contact Us"
          primaryButtonLink="/reachout"
          secondaryButtonText=""
          secondaryButtonLink=""
          showSecondaryButton={false}
        />
      </div>
    </main>
  )
}
