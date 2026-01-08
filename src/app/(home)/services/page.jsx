import serbg from '@/assests/home/serbg.png'
import Banner from './Banner.jsx'
import ServiceSection from './ServiceSection.jsx'  
import Contact from '@/components/user/Home/Contact.jsx'
import Chooseus from './Chooseus.jsx'
import Proccess from './Proccess.jsx'

export default function Service() {
  return (
    <main className="overflow-hidden "> 
      <Banner /> 
      <div  style={{ backgroundImage: `url(${serbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <ServiceSection />
      <Chooseus />
      <Proccess />
      <Contact />
      
      </div>
    </main>
  )
}


