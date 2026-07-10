import serbg from '@/assests/home/serbg.png'
import Banner from './Banner.jsx'
import ServiceSection from './ServiceSection.jsx'  
import Contact from '@/components/user/Home/Contact.jsx'
import Chooseus from './Chooseus.jsx'
import Proccess from './Proccess.jsx'

export default function Service() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.reliantelevators.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.reliantelevators.com/service" }
    ]
  };

  return (
    <main className="overflow-hidden "> 
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Banner /> 
      <div  style={{ backgroundImage: `url(${serbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <ServiceSection />
      <Chooseus />
      <Proccess />
      <Contact 
         label="Get Started"
      heading="Need Elevator Services?"
      description="Whether you need installation, maintenance, or modernization, our expert team is ready to help. Contact us for a free consultation."
      primaryButtonText="Start a Project"
      primaryButtonLink="/reachout"
      secondaryButtonText="View Projects"
      secondaryButtonLink="/projects"
      showSecondaryButton={true} />
      
      </div>
    </main>
  )
}


