import Banner from './Banner.jsx'
import Contact from '@/components/user/Home/Contact.jsx'
import conbg from '@/assests/home/conbg.png'
import ContactSection from './ContactSection.jsx'

  
export default function Reachout() {
  return (
    <main className="overflow-hidden "> 
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

