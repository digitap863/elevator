import Banner from './Banner.jsx'
import Contact from '@/components/user/Home/Contact.jsx'
import conbg from '@/assests/home/conbg.png'
import ContactSection from './ContactSection.jsx'

  
export default function Reachout() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.reliantelevators.com/" },
      { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://www.reliantelevators.com/reachout" }
    ]
  };

  return (
    <main className="overflow-hidden "> 
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Banner /> 
      <div  style={{ backgroundImage: `url(${conbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <ContactSection />
      <Contact 
       label="Get Started"
      heading="Need Immediate Assistance?"
      description="Our 24/7 emergency support team is always ready to help. Call us now for urgent elevator service or support."
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

