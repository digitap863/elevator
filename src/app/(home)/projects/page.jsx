import bgabout from '@/assests/home/bgabout.svg'
import Projectsection from './Projectsection.jsx'
import Banner from './Banner.jsx'
import Contact from '@/components/user/Home/Contact.jsx'
  
export default function Projects() {
  return (
    <main className="overflow-hidden "> 
      <Banner /> 
      <div  style={{ backgroundImage: `url(${bgabout.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Projectsection />
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
