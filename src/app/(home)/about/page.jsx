import bgabout from '@/assests/home/bgabout.svg'
import AboutSection from './AboutSection.jsx'
import Banner from './Banner.jsx'
import Mission from './Mission.jsx'
import Values from './Values.jsx'
import Milestones from './Milestones.jsx'
import Project from './Project.jsx'
  
export default function About() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.reliantelevators.com/" },
      { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.reliantelevators.com/about" }
    ]
  };

  return (
    <main className="overflow-hidden "> 
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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


