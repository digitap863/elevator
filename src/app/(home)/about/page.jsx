import bgabout from '@/assests/home/bgabout.svg'
import AboutSection from './AboutSection.jsx'
import Banner from './Banner.jsx'
import Mission from './Mission.jsx'
import Values from './Values.jsx'
import Milestones from './Milestones.jsx'
import Project from './Project.jsx'
import Numbers from './Numbers.jsx'
  
export default function About() {
  return (
    <main className="overflow-hidden "> 
      <Banner /> 
      <div  style={{ backgroundImage: `url(${bgabout.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <AboutSection />
      <Mission />
      <Values />
      <Numbers />
      <Milestones />
      </div>
      <Project />
    </main>
  )
}


