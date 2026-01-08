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
      <Contact />
      </div>
    </main>
  )
}
